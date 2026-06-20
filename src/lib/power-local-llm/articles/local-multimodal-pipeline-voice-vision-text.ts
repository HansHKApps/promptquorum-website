// Power Local LLM — Local Multimodal AI Pipeline 2026: Voice + Vision + Text, All Offline
// Slug: local-multimodal-pipeline-voice-vision-text
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
    title: 'Local Multimodal AI Pipeline 2026: Combine Voice, Vision, and Text Models Offline',
    seoTitle: 'Local Multimodal Pipeline 2026: Voice + Vision + Text',
    intro:
      'A local multimodal AI pipeline combines separate specialized models for each modality — whisper.cpp for voice input, LLaVA or Llama 3.2 Vision for image understanding, an Ollama LLM for text reasoning, and Piper TTS for voice output — orchestrated into a single coherent system that runs 100% offline. This is the local equivalent of GPT-5.5\'s multimodal capabilities: no single model understands everything, but the orchestrator routes each input type to the right model and combines the outputs. This guide shows how to build local multimodal pipeline capabilities from these open-source components — covering the architecture, component stack, hardware tiers, five practical use cases, and a Python async orchestrator that processes voice and vision inputs in parallel.',
    metaDescription:
      'Run voice + vision + text AI locally in 2026. Combine whisper.cpp, LLaVA 1.6, Ollama, and Piper TTS. Full Python orchestrator — no cloud, no API keys.',
    twitterDescription:
      'Local multimodal AI in 2026: combine Whisper STT + LLaVA vision + Ollama LLM + Piper TTS into one offline pipeline. Architecture guide, hardware tiers, and Python code.',
    audience:
      'Developers building full multimodal local AI systems — combining voice, vision, and text processing into a single offline pipeline for document analysis, accessibility tools, meeting assistants, or visual Q&A.',
    readTime: '16 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'local multimodal AI pipeline',
    targetKeywords: [
      'local multimodal AI pipeline 2026',
      'whisper llava ollama piper',
      'offline multimodal AI',
      'voice vision text local AI',
      'local GPT-5.5 alternative',
      'build multimodal AI offline',
      'local speech vision pipeline',
      'llava whisper integration',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'LLaVA 1.6 7B',
      'Qwen2-VL 7B',
      'Llama 3.2 Vision 11B',
      'Llama 3.3 8B',
      'Moondream 2',
      'Piper TTS',
      'Coqui TTS',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Pro 36 GB',
      'Apple M5 Max 128 GB',
    ],
    leadAnswerBlock:
      '**A local multimodal AI pipeline in 2026 requires at minimum 12 GB of GPU VRAM to run STT + vision + LLM + TTS simultaneously — the full stack.** The practical minimum viable setup is an RTX 4070 (12 GB) or Mac M5 Pro (36 GB unified memory), running whisper.cpp for voice input, LLaVA 1.6 7B for vision, Llama 3.3 8B for text reasoning, and Piper for voice output. On an RTX 3060 12 GB, you can run the stack with a smaller LLM (Phi-4) and no vision — or swap models in/out of VRAM as needed. The key architectural decision is whether to share VRAM between the vision model and the LLM (requires 12+ GB) or run them sequentially on a smaller GPU.',
    quickAnswerTop: {
      en: {
        question: 'How do you build a local multimodal AI pipeline with voice, vision, and text in 2026?',
        answer:
          'Combine four specialized models: whisper.cpp (voice → text), a vision-language model like LLaVA 1.6 or Llama 3.2 Vision (image → text description), an Ollama LLM like Llama 3.3 8B (text → text reasoning), and Piper TTS (text → speech). A Python async orchestrator detects the input type and routes it to the right model, combining outputs into a coherent response. Minimum VRAM: 12 GB for a shared-VRAM setup; 8 GB if you swap models in/out.',
        bullets: [
          'Voice input: whisper.cpp (Metal on Mac, CUDA on NVIDIA) → text transcript.',
          'Image input: LLaVA 1.6 7B or Llama 3.2 Vision 11B via Ollama → text description.',
          'Text reasoning: Ollama + Llama 3.3 8B → response text.',
          'Voice output: Piper TTS (CPU, ~0.1 sec latency) → audio playback.',
          'Minimum hardware: RTX 4070 12 GB or M5 Pro 36 GB for full simultaneous stack.',
          'Vision + LLM can share one Ollama instance (Llama 3.2 Vision handles both).',
          'Total VRAM for full stack: ~15 GB (whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB + Piper CPU).',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What Is a Multimodal AI Pipeline?', anchor: '#what-is-multimodal' },
      { label: 'Cost: Local Pipeline vs Cloud APIs', anchor: '#cost-comparison' },
      { label: 'Architecture Overview', anchor: '#architecture' },
      { label: 'The Component Stack', anchor: '#component-stack' },
      { label: 'Hardware Tiers', anchor: '#hardware-tiers' },
      { label: 'Use Case 1: Voice-Controlled Document Analyzer', anchor: '#use-case-1' },
      { label: 'Use Case 2: Visual Q&A Assistant', anchor: '#use-case-2' },
      { label: 'Use Case 3: Meeting Transcription + Slide Analysis', anchor: '#use-case-3' },
      { label: 'Use Case 4: Local Accessibility Tool', anchor: '#use-case-4' },
      { label: 'Use Case 5: Security Camera Analysis', anchor: '#use-case-5' },
      { label: 'Building the Python Orchestrator', anchor: '#orchestrator' },
      { label: 'Performance Optimization', anchor: '#performance' },
      { label: 'Limitations and Honest Assessment', anchor: '#limitations' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A local multimodal pipeline is four separate models orchestrated together — not a single model like GPT-5.5.** whisper.cpp handles voice, a VLM (LLaVA or Llama 3.2 Vision) handles images, an LLM handles text reasoning, and Piper handles speech output. The orchestrator routes inputs to the right model and combines outputs.',
          '**Llama 3.2 Vision 11B can replace both the VLM and the text LLM in one model.** It accepts text and images simultaneously and handles both description and reasoning in one pass — reducing VRAM from ~15 GB (separate models) to ~8 GB (single Llama 3.2 Vision 11B).',
          '**Minimum hardware for the full stack: RTX 4070 12 GB or Apple M5 Pro 36 GB.** An RTX 3060 12 GB can run a constrained version (Phi-4 instead of Llama 3.3 8B, or sequential model loading) — usable but slower.',
          '**Five practical use cases justify the complexity:** voice-controlled document analysis, visual Q&A with voice interaction, meeting transcription combined with slide analysis, local screen-reader accessibility tools, and local security camera analysis.',
          '**Async orchestration is essential for acceptable performance.** STT and vision can run in parallel when both audio and image inputs are available — the text LLM waits for both, then generates a combined response.',
          '**Streaming LLM output to TTS reduces perceived latency by 0.3–0.7 seconds.** Start generating audio from the first completed sentence while the LLM is still writing the rest of the response.',
          '**This is not GPT-5.5.** Separate models produce "seams" — the vision model\'s description passes as text to the LLM, losing some cross-modal reasoning. Quality on complex multimodal tasks is below frontier closed models but adequate for structured document and clear photo tasks.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Total VRAM for full stack:** ~15 GB (whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB). Piper runs on CPU.',
          '**Simplified stack (Llama 3.2 Vision 11B):** ~8 GB VRAM — handles both vision and text reasoning in one model.',
          '**Voice latency (Whisper small, RTX 4070):** ~200–500 ms STT. 500–1500 ms LLM first token. 100 ms Piper TTS.',
          '**Image processing latency (LLaVA 7B, RTX 4070):** ~2–5 seconds per image depending on resolution and prompt.',
          '**No real-time video:** VLMs process individual frames, not continuous video streams. For video, extract frames at 1 FPS and process each.',
          '**Same Ollama instance for VLM + LLM:** Ollama can serve Llama 3.2 Vision as both the vision model and the text model, saving VRAM.',
          '**All components MIT or Apache 2.0 licensed** (whisper.cpp MIT, LLaVA MIT, Llama 3.3 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'What Is a Multimodal AI Pipeline?',
        content:
          'A multimodal AI system accepts multiple types of input (voice, images, text) and produces multiple types of output (text, speech). The cloud equivalent is GPT-5.5 — a single model that accepts audio, images, and text in any combination.',
        items: [
          '**Cloud approach (GPT-5.5):** One giant model trained on all modalities simultaneously. Cross-modal reasoning is learned during training — the model can reason about the relationship between image content and voice queries natively.',
          '**Local approach (this guide):** Separate specialized models for each modality, connected by an orchestrator. More modular and cheaper to run, but produces "seams" — vision model output is serialized to text before being passed to the LLM.',
          '**Why build local:** Privacy (medical images, proprietary documents, confidential screenshots), cost (zero per-query fees), offline capability (no internet required after model download), customization (swap any component).',
          '**Modular advantage:** You can upgrade any one component independently. When a better local STT model ships, replace only the STT layer. When a better VLM ships, swap only the vision model — the rest of the pipeline is unchanged.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Cost: Local Pipeline vs Cloud APIs (Monthly)',
        content:
          'At moderate usage (100+ queries/day), a local multimodal pipeline pays for itself in 3–6 months. At light usage (10 queries/day), break-even extends to 12–18 months.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A local multimodal pipeline costs $0/month in API fees after the one-time hardware investment ($600–3,500), with break-even against GPT-5.5 API costs ($135–225/mo) in 3–18 months depending on query volume.',
          },
        ],
        columns: ['Usage', 'GPT-5.5 API', 'Google Cloud', 'Local'],
        rows: [
          { 'Usage': '100 voice queries/day', 'GPT-5.5 API': '$90–150/mo', 'Google Cloud': '$60–120/mo', 'Local': '$0' },
          { 'Usage': '50 image analyses/day', 'GPT-5.5 API': '$45–75/mo', 'Google Cloud': '$30–60/mo', 'Local': '$0' },
          { 'Usage': 'Combined (typical)', 'GPT-5.5 API': '$135–225/mo', 'Google Cloud': '$90–180/mo', 'Local': '$0' },
          { 'Usage': 'Hardware (one-time)', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', 'Local': '$600–3,500' },
          { 'Usage': 'Break-even', 'GPT-5.5 API': '—', 'Google Cloud': '—', 'Local': '3–18 months' },
        ],
        note: 'The local pipeline pays for itself in 3–6 months at moderate usage (100+ queries/day). At light usage (10 queries/day), the break-even extends to 12–18 months.',
      },
      architecture: {
        id: 'architecture',
        title: 'Architecture Overview',
        content:
          'The local multimodal pipeline uses a router-orchestrator pattern: inputs are typed at the boundary, routed to the appropriate model, and the outputs are combined by the orchestrator before generating the final response.',
        items: [
          '**Input types:** Microphone audio (voice), camera or file image (vision), keyboard text (text).',
          '**Router logic:** Detect input type at the boundary. Audio → STT model. Image → VLM. Text → LLM directly. If both audio and image arrive together, process in parallel and combine.',
          '**Model registry:** Each input type maps to a handler function that calls the appropriate model and returns a text description/transcript.',
          '**Orchestrator:** Collects all model outputs, combines them into a single prompt for the text LLM, gets the LLM response, and routes it to TTS for voice output or to the screen as text.',
          '**Output types:** Voice response (Piper TTS), text on screen, or structured data (JSON) for integration with other systems.',
          '**Parallel processing:** STT and VLM can process simultaneously — an audio query about an image can have both processed in parallel, reducing total latency by 40–60% vs. sequential processing.',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: 'The Component Stack',
        content:
          'Full stack with VRAM requirements and role of each component.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The full local multimodal stack uses ~15 GB VRAM: Whisper large-v3 (3 GB) + LLaVA 1.6 7B (6 GB) + Llama 3.3 8B (6 GB); Piper TTS runs on CPU at no VRAM cost.',
          },
          {
            type: 'plain-terms',
            text: 'You can cut VRAM to 8 GB by using Llama 3.2 Vision 11B as both the vision model and the text model — it handles photos AND conversation in one model, while Whisper still does voice and Piper still does speech output.',
          },
        ],
        columns: ['Layer', 'Tool', 'Model', 'VRAM', 'Role'],
        rows: [
          {
            'Layer': 'STT',
            'Tool': 'whisper.cpp',
            'Model': 'Whisper large-v3',
            'VRAM': '~3 GB',
            'Role': 'Voice → text transcript',
          },
          {
            'Layer': 'Vision',
            'Tool': 'Ollama',
            'Model': 'LLaVA 1.6 7B',
            'VRAM': '~6 GB',
            'Role': 'Image → text description',
          },
          {
            'Layer': 'Reasoning',
            'Tool': 'Ollama',
            'Model': 'Llama 3.3 8B Q4',
            'VRAM': '~6 GB',
            'Role': 'Text → text response',
          },
          {
            'Layer': 'TTS',
            'Tool': 'Piper',
            'Model': 'en_US-lessac-medium',
            'VRAM': 'CPU only',
            'Role': 'Text → voice output',
          },
          {
            'Layer': 'Total (separate models)',
            'Tool': '',
            'Model': '',
            'VRAM': '~15 GB',
            'Role': 'Full pipeline',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use Llama 3.2 Vision 11B instead of separate LLaVA + Llama 3.3 8B to cut VRAM to ~8 GB. Llama 3.2 Vision handles both image description and text reasoning in one model, eliminating the need for a separate VLM.',
          },
          {
            type: 'tip',
            text: 'Alternative VLM: [Qwen2-VL 7B](/power-local-llm/local-vision-models-llava-ollama-2026) (~6 GB VRAM) — stronger than LLaVA on multilingual OCR and document understanding. Recommended if processing Chinese, Japanese, or Korean documents.',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Hardware Tiers for Multimodal',
        content:
          'Five hardware configurations, ordered by capability and VRAM. Each supports a different subset of the full multimodal stack.',
        columns: ['Tier', 'GPU', 'RAM', 'Can Run', 'Latency (voice query + image)'],
        rows: [
          {
            'Tier': 'Entry',
            'GPU': 'RTX 3060 12 GB',
            'RAM': '16 GB',
            'Can Run': 'STT + Phi-4 (vision separately, sequential)',
            'Latency (voice query + image)': '5–10 sec',
          },
          {
            'Tier': 'Mid',
            'GPU': 'RTX 4070 12 GB',
            'RAM': '32 GB',
            'Can Run': 'Full stack with 7B models (LLaVA 7B + Llama 3.3 8B, tight fit)',
            'Latency (voice query + image)': '3–6 sec',
          },
          {
            'Tier': 'High',
            'GPU': 'RTX 4090 24 GB',
            'RAM': '64 GB',
            'Can Run': 'Full stack with 13B VLM + 8B LLM simultaneously',
            'Latency (voice query + image)': '2–4 sec',
          },
          {
            'Tier': 'Apple Mid',
            'GPU': 'M5 Pro 36 GB',
            'RAM': '36 GB unified',
            'Can Run': 'Full stack with 8B models via Metal (recommended). Qwen2-VL 7B + Llama 3.3 8B fits comfortably in 36 GB with room for Whisper large-v3.',
            'Latency (voice query + image)': '2–4 sec',
          },
          {
            'Tier': 'Apple High',
            'GPU': 'M5 Max 128 GB',
            'RAM': '128 GB unified',
            'Can Run': 'Full stack with 70B models — best local quality',
            'Latency (voice query + image)': '1–3 sec',
          },
        ],
        note: 'Latency is measured from end of voice query to start of TTS playback, including image processing if an image is present.',
        callouts: [
          {
            type: 'tip',
            text: 'The M5 Max with 128 GB unified memory is the ultimate local multimodal platform. It can run Whisper large-v3 (3 GB) + Llama 3.2 Vision 90B (~64 GB) + Piper TTS simultaneously — the 90B vision model is the highest-quality local VLM available, approaching GPT-5.5 on document and photo tasks. No discrete GPU setup can match this without multi-GPU configurations costing 2–3× more.',
          },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: 'Use Case 1: Voice-Controlled Document Analyzer',
        content:
          '**Speak a question about a document image; the pipeline transcribes your voice, processes the document visually, and reads the answer aloud.** This is the core use case for combining STT + VLM + LLM + TTS.',
        items: [
          '**Example:** Photograph an invoice and say "What is the total amount due and the payment deadline?"',
          '**Pipeline:** Whisper transcribes the question → image sent to LLaVA or Llama 3.2 Vision → VLM extracts invoice text and structure → LLM combines question + VLM output → Piper reads the answer aloud.',
          '**Prompt:** "Here is an image: [VLM description]. The user asks: [transcript]. Answer the question based on the image content."',
          '**Best VLM:** MiniCPM-V 2.6 or Llama 3.2 Vision 11B for invoice/document OCR accuracy.',
          '**Privacy value:** Medical records, legal documents, financial statements — processed entirely locally with no data leaving the machine.',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: 'Use Case 2: Visual Q&A Assistant',
        content:
          '**Point a camera at an object or scene, ask a question verbally, and receive a spoken answer.** This use case is the closest local equivalent to Google Lens with voice interaction.',
        items: [
          '**Applications:** Warehouse inventory (photograph a shelf, ask "How many units of SKU-4429 are present?"), field inspection (photograph machinery damage, ask "Is this safe to operate?"), accessibility (describe objects for visually impaired users).',
          '**Implementation:** Capture a camera frame (OpenCV `cv2.VideoCapture(0).read()`), save as JPEG, pass to VLM alongside the Whisper transcript.',
          '**Best models:** LLaVA 1.6 7B or Llama 3.2 Vision 11B for general object/scene understanding.',
          '**Latency:** 3–6 seconds for image capture + VLM processing + LLM + TTS on RTX 4070. Reduce with smaller VLM (Moondream 2 for simple object identification).',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: 'Use Case 3: Meeting Transcription + Slide Analysis',
        content:
          '**Run Whisper continuously during a meeting to build a transcript, while periodically capturing slide screenshots for VLM analysis. At the end, combine transcript + slide content for a local summary and action items — zero cloud, zero data exposure.**',
        items: [
          '**STT:** Run faster-whisper in streaming mode during the meeting. Accumulate segments into a transcript buffer.',
          '**Vision:** Every time a new slide appears (detect via screen capture diff), capture a screenshot and pass to LLaVA for description.',
          '**Combination:** At end of meeting (or on-demand), pass transcript + slide descriptions to Llama 3.3 8B: "Summarize this meeting and list action items. Here is the transcript: [...]. Here are the slide contents: [...]."',
          '**Output:** Voice-read summary (Piper TTS) + text file saved locally.',
          '**GDPR value:** Entire meeting processing is local. No audio, transcript, or slides sent to any cloud service. Compliant for legal, medical, and corporate contexts.',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: 'Use Case 4: Local Accessibility Tool',
        content:
          '**A local multimodal pipeline can serve as a screen reader and voice-controlled UI assistant for users with visual or motor impairments — running offline without privacy concerns of cloud accessibility services.**',
        items: [
          '**Screen reader:** Capture a screenshot every 2 seconds → LLaVA describes what is on screen → Piper reads it aloud. Add voice commands (Whisper) to control what to describe next.',
          '**Voice navigation:** Whisper transcribes voice commands → LLM interprets intent → execute keyboard/mouse actions via pyautogui. No internet required.',
          '**Privacy benefit:** Users with disabilities often use accessibility tools in sensitive contexts (medical portals, financial accounts). A local tool ensures no screen content is transmitted to third parties.',
          '**Low-connectivity use:** Works in hospitals, government buildings, and areas with restricted internet — important for institutional accessibility deployments.',
          '**Model choice for accessibility:** Moondream 2 for fast screen descriptions (2 GB VRAM, ~1 sec per frame). LLaVA 7B for richer descriptions (6 GB VRAM, ~3 sec per frame).',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: 'Use Case 5: Local Security Camera Analysis',
        content:
          '**Capture frames from an IP camera, run motion detection locally, and trigger VLM analysis only when movement is detected — without cloud camera services or third-party video storage.**',
        items: [
          '**Frame capture:** Use OpenCV to capture a frame every 5–10 seconds from an IP camera via RTSP (`cv2.VideoCapture("rtsp://camera-ip:554/stream")`). For USB cameras, use device index 0.',
          '**Motion detection:** Compute the diff between consecutive frames with `cv2.absdiff()`. Skip frames below the motion threshold — this avoids unnecessary VLM calls on static, empty scenes.',
          '**VLM analysis:** When motion is detected, send the frame to the VLM: "Describe what is happening. Is there a person? What are they doing?"',
          '**Alert output:** If the response indicates a person or anomaly, trigger a local desktop notification and a Piper TTS announcement ("Person detected at front door"). No cloud notification service required.',
          '**Privacy advantage:** Ring and Nest send video to AWS and Google servers respectively. This setup keeps all footage on your hardware — no subscription, no third-party video storage, no data sharing with external services.',
          '**Best VLM for speed:** Moondream 2 for fast frame processing (~1 second per frame, ~2 GB VRAM) or LLaVA 7B for richer scene descriptions (~3 seconds per frame, ~6 GB VRAM).',
          '**Hardware note:** A dedicated Mac Mini M5 (~$600) running this stack 24/7 consumes ~15–25W idle — less annually in electricity than a Ring Doorbell Pro subscription.',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: 'Building the Python Orchestrator',
        content:
          'An async Python orchestrator routes inputs to the right model and combines outputs. Using asyncio allows STT and vision processing to run in parallel.',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"        # or "llama3.2-vision" for combined VLM+LLM
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    """Convert audio array to text using whisper.cpp."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    """Get text description of an image using local VLM via Ollama."""
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={
            "model": VISION_MODEL,
            "prompt": "Describe the content of this image in detail, including any text visible.",
            "images": [image_b64],
            "stream": False,
        },
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    """Generate a response combining transcript and optional image description."""
    if image_description:
        prompt = (
            f"The user asked (via voice): {transcript}\\n\\n"
            f"The image shows: {image_description}\\n\\n"
            "Answer the question based on the image content. Be concise — 2-3 sentences."
        )
    else:
        prompt = transcript
    # Note: /api/generate is for single-turn queries.
    # For multi-turn conversation with context, use
    # /api/chat with a messages array instead.
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    """Convert text to speech using Piper TTS."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}',
            shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    """Process a multimodal query: transcribe audio and optionally describe image in parallel."""
    if image_path:
        # Run STT and vision in parallel
        transcript, image_desc = await asyncio.gather(
            transcribe_audio(audio),
            describe_image(image_path),
        )
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None

    if not transcript or len(transcript) < 3:
        return

    print(f"You: {transcript}")
    if image_desc:
        print(f"Image: {image_desc[:100]}...")

    response = await reason(transcript, image_desc)
    print(f"Assistant: {response}")
    await speak(response)

async def main():
    print("Multimodal assistant ready. Ctrl+C to stop.")
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)  # Pass image_path="photo.jpg" for image queries

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: 'Performance Optimization',
        content:
          'Key optimizations to achieve acceptable latency on the full multimodal stack:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The two biggest optimizations are: (1) run STT and VLM in parallel using asyncio when both audio and image are available, and (2) stream LLM output to TTS sentence-by-sentence so audio starts before the LLM finishes.',
          },
          {
            type: 'plain-terms',
            text: 'Without parallelism, the pipeline is: STT (0.5s) → VLM (3s) → LLM (1s) → TTS (0.1s) = 4.6s total. With parallel STT + VLM, it becomes: max(STT, VLM) (3s) → LLM (1s) → TTS (0.1s) = 4.1s. Add streaming TTS and the user hears audio at 3.5s instead of 4.6s.',
          },
        ],
        items: [
          '**Parallel STT + VLM:** Use `asyncio.gather(transcribe_audio(), describe_image())` to run both simultaneously. Saves 0.3–2 seconds depending on STT model size.',
          '**Keep models warm:** Ollama keeps models in VRAM automatically between requests. whisper.cpp in stream mode stays loaded. Never reload between queries.',
          '**Stream LLM → TTS:** Detect sentence boundaries in the streaming LLM output (`.`, `!`, `?`). Pass each completed sentence to Piper while the LLM continues generating.',
          '**VRAM management:** If total VRAM is tight, unload the VLM after image processing (Ollama HTTP delete endpoint) before loading the text LLM. Adds ~2–3 seconds but allows 8 GB GPU to handle the full stack.',
          '**Use Llama 3.2 Vision as combined VLM + LLM:** Eliminates model switching overhead entirely — one model handles both vision description and text reasoning. Trade-off: slightly weaker on pure text reasoning vs. Llama 3.3 8B.',
          '**TTS first audio target:** Piper generates first audio within 50–100 ms of receiving text. Stream one sentence at a time for sub-second perceived TTS latency.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitations and Honest Assessment',
        content:
          '**A local multimodal pipeline is not GPT-5.5.** Being clear about the gaps prevents frustration and helps you design around limitations.',
        items: [
          '**Modality seams:** Vision output is serialized to text before passing to the text LLM. The LLM cannot reason directly about image features — it reasons about a text description of the image. This loses information for tasks requiring subtle visual reasoning.',
          '**No real-time video:** Local VLMs process single frames, not continuous video. For video, extract frames at 0.5–2 FPS and process sequentially. This means you cannot ask "what just happened in the last 5 seconds of this video."',
          '**VLM quality gap:** Local vision models (LLaVA 7B, Llama 3.2 Vision 11B) are behind GPT-5.5 Vision on complex infographics, handwritten text, ambiguous scenes, and tasks requiring broad world knowledge alongside visual understanding.',
          '**VRAM pressure:** Running three models simultaneously on a single GPU requires careful VRAM management. On 12 GB GPUs, you are at the edge — model sizes must be carefully chosen to avoid OOM (out of memory) errors.',
          '**Latency vs. cloud:** A cloud multimodal call (GPT-5.5) takes 1–3 seconds for audio + image + text. A local pipeline takes 3–8 seconds on comparable hardware — slower, but with full privacy and zero per-query cost.',
          '**Consistency:** Local models produce more variable output quality than cloud models with extensive RLHF. Expect occasional hallucinations in both vision descriptions and LLM responses.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use a single model for both vision and text reasoning?',
            a: 'Yes. Llama 3.2 Vision 11B handles both image understanding and text reasoning in one model — you can skip the separate LLaVA + Llama 3.3 8B setup. This cuts VRAM from ~15 GB to ~8 GB and eliminates one Ollama API call. The trade-off is slightly weaker performance on pure text reasoning tasks compared to a dedicated Llama 3.3 8B.',
          },
          {
            q: 'How do I handle video input in a local multimodal pipeline?',
            a: 'Extract frames from video using OpenCV (`cv2.VideoCapture`) and process each frame individually through the VLM. For a 1-minute video at 1 FPS, you get 60 frames — each taking 2–5 seconds to process, so the full video would take 2–5 minutes to analyze. For real-time video monitoring, process only 1 frame every 2–3 seconds and use motion detection to skip static frames. Full video understanding (tracking objects across frames, understanding temporal sequences) is beyond current local VLM capabilities.',
          },
          {
            q: 'What is the minimum GPU VRAM for the full multimodal stack?',
            a: 'On a shared-VRAM setup (all models in VRAM simultaneously), 15 GB is required for Whisper large-v3 + LLaVA 7B + Llama 3.3 8B. With Llama 3.2 Vision 11B replacing both VLM and text LLM, 8 GB VRAM is sufficient. On a 12 GB GPU (RTX 4070), you can run the full separate-model stack at very tight VRAM with small quantization, or use Llama 3.2 Vision 11B for the combined approach. On 8 GB VRAM (RTX 4060), use Llama 3.2 Vision 11B with aggressive quantization (Q3_K) or swap models in/out between vision and text queries.',
          },
          {
            q: 'Can the multimodal pipeline process PDFs?',
            a: 'Not directly — local VLMs accept image input, not PDF input. Convert PDF pages to images first using pdf2image (`pip install pdf2image`) or pypdfium2 (`pip install pypdfium2`). Then pass each page image to the VLM separately. For a 10-page PDF, you generate 10 separate image descriptions, then pass all descriptions to the text LLM for a combined analysis or summary. This is slower than native PDF support but produces good results on structured documents.',
          },
          {
            q: 'Is the local multimodal pipeline GDPR compliant for medical or legal use?',
            a: 'A local multimodal pipeline that generates zero network traffic during operation is compliant by design for internal use cases — no data processing agreement is needed because no personal data leaves your systems. To verify compliance: run Wireshark during operation and confirm zero outbound packets from the pipeline process. Log storage is also important — if your orchestrator stores conversation history or image files, those stores are subject to retention requirements. Use ephemeral in-memory storage or encrypted local storage with appropriate retention policies.',
          },
          {
            q: 'Can I add web search to the multimodal pipeline?',
            a: 'Yes. Add a search step between the orchestrator and the text LLM. Use the DuckDuckGo API or a local RAG system (AnythingLLM, PrivateGPT) to retrieve context before the LLM reasoning step. The LLM then reasons over the transcript + image description + search results combined. This adds 0.5–2 seconds to latency but enables answering current-events questions alongside visual analysis.',
          },
          {
            q: 'How much electricity does the full multimodal stack use running 24/7?',
            a: 'Idle with models warm in VRAM: ~50–80W (desktop GPU), ~15–25W (Mac Mini M5 Pro). Active processing: ~150–300W (desktop GPU), ~30–60W (Mac Mini M5 Pro). Monthly cost at $0.15/kWh: approximately $5–15 (Mac Mini) or $15–35 (desktop). This is less than running a cloud API at comparable query volumes — a Mac Mini running the full stack 24/7 costs less in electricity per month than two days of GPT-5.5 API usage at 100 queries/day.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[whisper.cpp on GitHub](https://github.com/ggerganov/whisper.cpp) — STT component source and documentation.',
          '[faster-whisper on GitHub](https://github.com/SYSTRAN/faster-whisper) — Python STT alternative with built-in VAD for streaming.',
          '[LLaVA project page](https://llava-vl.github.io) — Vision model architecture and model cards.',
          '[Llama 3.2 Vision model card](https://huggingface.co/meta-llama) — Meta\'s multimodal model supporting image + text reasoning.',
          '[Ollama documentation](https://ollama.com) — Vision model API, multimodal request format.',
          '[Piper TTS on GitHub](https://github.com/rhasspy/piper) — TTS output component, voice pack library.',
          '[Coqui TTS on GitHub](https://github.com/coqui-ai/TTS) — Alternative TTS with voice cloning support.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Speech-to-Text 2026: Whisper.cpp vs faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026) — STT component deep dive.',
          '[Local Vision Models 2026: LLaVA, Llama 3.2 Vision, and Ollama](/power-local-llm/local-vision-models-llava-ollama-2026) — Vision component deep dive.',
          '[Local TTS and Voice Cloning 2026](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS component deep dive.',
          '[Build a Fully Offline Voice Assistant in 2026](/power-local-llm/build-local-voice-assistant-2026) — The voice-only version (simpler, voice + LLM + TTS without vision).',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — Hardware selection for multi-model pipelines.',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained) — Fitting multiple models into limited VRAM via quantization.',
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
    title: 'Lokale multimodale KI-Pipeline 2026: Sprache, Vision und Text-Modelle offline kombinieren',
    seoTitle: 'Lokale multimodale Pipeline 2026: Sprache, Bild, Text',
    intro:
      'Eine lokale multimodale KI-Pipeline kombiniert separate spezialisierte Modelle für jede Modalität — whisper.cpp für Spracheingabe, LLaVA oder Llama 3.2 Vision für Bildverständnis, ein Ollama LLM für Textreasoning und Piper TTS für Sprachausgabe — orchestriert zu einem kohärenten System, das 100 % offline arbeitet. Dies ist das lokale Äquivalent zu GPT-5.5s multimodalen Fähigkeiten: kein einzelnes Modell versteht alles, aber der Orchestrator leitet jeden Eingabetyp an das richtige Modell weiter und kombiniert die Ausgaben. Dieser Leitfaden zeigt, wie Sie lokale multimodale Pipeline-Funktionen aus diesen Open-Source-Komponenten aufbauen — mit Abdeckung der Architektur, des Component-Stacks, Hardware-Tiers, fünf praktischer Use Cases und eines Python-Async-Orchestrators, der Sprach- und Vision-Eingaben parallel verarbeitet.',
    metaDescription:
      'Lokale multimodale KI-Pipeline 2026: whisper.cpp (Sprache), LLaVA 1.6 (Vision), Ollama (Text) und Piper TTS. Architektur, Hardware-Tiers und Code. Offline.',
    twitterDescription:
      'Lokale multimodale KI 2026: Whisper STT + LLaVA Vision + Ollama LLM + Piper TTS in einer Offline-Pipeline kombinieren. Architektur-Leitfaden, Hardware-Tiers und Python-Code.',
    readTime: '18 Min. Lesezeit',
    educationalLevel: 'Advanced',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Eine lokale multimodale Pipeline besteht aus vier separat orchestrierten Modellen — kein Einzelmodell wie GPT-5.5.** whisper.cpp verarbeitet Sprache, ein VLM (LLaVA oder Llama 3.2 Vision) verarbeitet Bilder, ein LLM übernimmt das Textreasoning und Piper die Sprachausgabe. Der Orchestrator leitet Eingaben an das richtige Modell weiter und kombiniert die Ausgaben.',
          '**Llama 3.2 Vision 11B kann sowohl das VLM als auch das Text-LLM in einem Modell ersetzen.** Es akzeptiert Text und Bilder gleichzeitig und verarbeitet Beschreibung und Reasoning in einem Durchlauf — reduziert VRAM von ~15 GB (separate Modelle) auf ~8 GB (einzelnes Llama 3.2 Vision 11B).',
          '**Mindesthardware für den vollständigen Stack: RTX 4070 12 GB oder Apple M5 Pro 36 GB.** Eine RTX 3060 12 GB kann eine eingeschränkte Version ausführen (Phi-4 statt Llama 3.3 8B oder sequenzielles Modell-Laden) — nutzbar, aber langsamer.',
          '**Fünf praktische Use Cases rechtfertigen die Komplexität:** sprachgesteuerte Dokumentenanalyse, Visual Q&A mit Sprachinteraktion, Meeting-Transkription kombiniert mit Folienanalyse, lokale Screenreader-Zugänglichkeitstools und lokale Sicherheitskameraanalyse.',
          '**Async-Orchestrierung ist für akzeptable Performance entscheidend.** STT und Vision können parallel ausgeführt werden, wenn sowohl Audio- als auch Bildeingaben verfügbar sind — das Text-LLM wartet auf beide und generiert dann eine kombinierte Antwort.',
          '**Streaming der LLM-Ausgabe an TTS reduziert die wahrgenommene Latenz um 0,3–0,7 Sekunden.** Audiogenerierung aus dem ersten abgeschlossenen Satz beginnt, während das LLM noch den Rest der Antwort schreibt.',
          '**Dies ist nicht GPT-5.5.** Separate Modelle erzeugen „Nähte" — die Beschreibung des Vision-Modells wird als Text an das LLM übergeben, wobei einige modalitätsübergreifende Reasoning-Fähigkeiten verloren gehen. Qualität bei komplexen multimodalen Aufgaben liegt unter Frontier-Closed-Models, ist aber für strukturierte Dokumente und klare Fotoaufgaben ausreichend.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**VRAM für den vollständigen Stack:** ~15 GB (Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB). Piper läuft auf der CPU.',
          '**Vereinfachter Stack (Llama 3.2 Vision 11B):** ~8 GB VRAM — verarbeitet sowohl Vision als auch Textreasoning in einem Modell.',
          '**Sprach-Latenz (Whisper small, RTX 4070):** ~200–500 ms STT. 500–1500 ms LLM erster Token. 100 ms Piper TTS.',
          '**Bildverarbeitungs-Latenz (LLaVA 7B, RTX 4070):** ~2–5 Sekunden pro Bild je nach Auflösung und Prompt.',
          '**Kein Echtzeit-Video:** VLMs verarbeiten einzelne Frames, keine kontinuierlichen Videostreams. Für Video: Frames bei 1 FPS extrahieren und einzeln verarbeiten.',
          '**Gleiche Ollama-Instanz für VLM + LLM:** Ollama kann Llama 3.2 Vision sowohl als Vision- als auch als Text-Modell bereitstellen und so VRAM sparen.',
          '**Alle Komponenten MIT- oder Apache-2.0-lizenziert** (whisper.cpp MIT, LLaVA MIT, Llama 3.3 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'Was ist eine multimodale KI-Pipeline?',
        content: 'Ein multimodales KI-System akzeptiert mehrere Eingabetypen (Sprache, Bilder, Text) und erzeugt mehrere Ausgabetypen (Text, Sprache). Das Cloud-Äquivalent ist GPT-5.5 — ein einzelnes Modell, das Audio, Bilder und Text in beliebiger Kombination akzeptiert.',
        items: [
          '**Cloud-Ansatz (GPT-5.5):** Ein riesiges Modell, das simultan auf allen Modalitäten trainiert wurde. Modalitätsübergreifendes Reasoning wird beim Training gelernt — das Modell kann die Beziehung zwischen Bildinhalt und Sprachabfragen nativ verstehen.',
          '**Lokaler Ansatz (dieser Leitfaden):** Separate spezialisierte Modelle für jede Modalität, verbunden durch einen Orchestrator. Modularer und günstiger im Betrieb, erzeugt aber „Nähte" — Vision-Modell-Ausgabe wird zu Text serialisiert, bevor sie an das LLM übergeben wird.',
          '**Warum lokal aufbauen:** Datenschutz (medizinische Bilder, proprietäre Dokumente, vertrauliche Screenshots), Kosten (null API-Gebühren pro Abfrage), Offline-Fähigkeit (kein Internet nach dem Modell-Download erforderlich), Anpassbarkeit (jede Komponente tauschbar).',
          '**Modularer Vorteil:** Sie können jede einzelne Komponente unabhängig aktualisieren. Wenn ein besseres lokales STT-Modell erscheint, ersetzen Sie nur die STT-Schicht.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Kosten: Lokale Pipeline vs. Cloud-APIs (monatlich)',
        content: 'Bei moderater Nutzung (100+ Abfragen/Tag) amortisiert sich eine lokale multimodale Pipeline in 3–6 Monaten.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Eine lokale multimodale Pipeline kostet nach der einmaligen Hardware-Investition (600–3.500 $) 0 $/Monat an API-Gebühren, mit einem Break-even gegenüber GPT-5.5-API-Kosten (135–225 $/Monat) in 3–18 Monaten je nach Abfragevolumen.' },
        ],
        columns: ['Nutzung', 'GPT-5.5 API', 'Google Cloud', 'Lokal'],
        rows: [
          { 'Nutzung': '100 Sprachabfragen/Tag', 'GPT-5.5 API': '$90–150/Mo.', 'Google Cloud': '$60–120/Mo.', 'Lokal': '$0' },
          { 'Nutzung': '50 Bildanalysen/Tag', 'GPT-5.5 API': '$45–75/Mo.', 'Google Cloud': '$30–60/Mo.', 'Lokal': '$0' },
          { 'Nutzung': 'Kombiniert (typisch)', 'GPT-5.5 API': '$135–225/Mo.', 'Google Cloud': '$90–180/Mo.', 'Lokal': '$0' },
          { 'Nutzung': 'Hardware (einmalig)', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', 'Lokal': '$600–3.500' },
          { 'Nutzung': 'Break-even', 'GPT-5.5 API': '—', 'Google Cloud': '—', 'Lokal': '3–18 Monate' },
        ],
        note: 'Die lokale Pipeline amortisiert sich in 3–6 Monaten bei moderater Nutzung (100+ Abfragen/Tag). Bei geringer Nutzung (10 Abfragen/Tag) verlängert sich der Break-even auf 12–18 Monate.',
      },
      architecture: {
        id: 'architecture',
        title: 'Architekturübersicht',
        content: 'Die lokale multimodale Pipeline verwendet ein Router-Orchestrator-Muster: Eingaben werden an der Grenze typisiert, an das entsprechende Modell weitergeleitet, und die Ausgaben werden vom Orchestrator kombiniert, bevor die endgültige Antwort generiert wird.',
        items: [
          '**Eingabetypen:** Mikrofon-Audio (Sprache), Kamera- oder Dateibild (Vision), Tastatur-Text (Text).',
          '**Router-Logik:** Eingabetyp an der Grenze erkennen. Audio → STT-Modell. Bild → VLM. Text → direkt zum LLM. Wenn Audio und Bild gemeinsam eintreffen, parallel verarbeiten und kombinieren.',
          '**Modell-Registry:** Jeder Eingabetyp wird einer Handler-Funktion zugeordnet, die das entsprechende Modell aufruft und eine Textbeschreibung/Transkript zurückgibt.',
          '**Orchestrator:** Sammelt alle Modellausgaben, kombiniert sie zu einem einzelnen Prompt für das Text-LLM, erhält die LLM-Antwort und leitet sie zur Sprachausgabe an TTS oder als Text auf den Bildschirm weiter.',
          '**Ausgabetypen:** Sprachantwort (Piper TTS), Text auf dem Bildschirm oder strukturierte Daten (JSON) zur Integration mit anderen Systemen.',
          '**Parallele Verarbeitung:** STT und VLM können simultan verarbeiten — eine Audio-Abfrage zu einem Bild kann beides parallel verarbeiten, wodurch die Gesamtlatenz um 40–60 % gegenüber sequenzieller Verarbeitung reduziert wird.',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: 'Der Component-Stack',
        content: 'Vollständiger Stack mit VRAM-Anforderungen und der Rolle jeder Komponente.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Der vollständige lokale multimodale Stack benötigt ~15 GB VRAM: Whisper large-v3 (3 GB) + LLaVA 1.6 7B (6 GB) + Llama 3.3 8B (6 GB); Piper TTS läuft kostenlos auf der CPU.' },
          { type: 'plain-terms', text: 'Sie können VRAM auf 8 GB reduzieren, indem Sie Llama 3.2 Vision 11B sowohl als Vision- als auch als Text-Modell verwenden — es verarbeitet Fotos UND Konversation in einem Modell.' },
        ],
        columns: ['Schicht', 'Tool', 'Modell', 'VRAM', 'Rolle'],
        rows: [
          { 'Schicht': 'STT', 'Tool': 'whisper.cpp', 'Modell': 'Whisper large-v3', 'VRAM': '~3 GB', 'Rolle': 'Sprache → Texttranskript' },
          { 'Schicht': 'Vision', 'Tool': 'Ollama', 'Modell': 'LLaVA 1.6 7B', 'VRAM': '~6 GB', 'Rolle': 'Bild → Textbeschreibung' },
          { 'Schicht': 'Reasoning', 'Tool': 'Ollama', 'Modell': 'Llama 3.3 8B Q4', 'VRAM': '~6 GB', 'Rolle': 'Text → Textantwort' },
          { 'Schicht': 'TTS', 'Tool': 'Piper', 'Modell': 'en_US-lessac-medium', 'VRAM': 'Nur CPU', 'Rolle': 'Text → Sprachausgabe' },
          { 'Schicht': 'Gesamt (separate Modelle)', 'Tool': '', 'Modell': '', 'VRAM': '~15 GB', 'Rolle': 'Vollständige Pipeline' },
        ],
        callouts: [
          { type: 'tip', text: 'Verwenden Sie Llama 3.2 Vision 11B anstelle von separatem LLaVA + Llama 3.3 8B, um VRAM auf ~8 GB zu reduzieren.' },
          { type: 'tip', text: 'Alternatives VLM: Qwen2-VL 7B (~6 GB VRAM) — stärker als LLaVA bei mehrsprachiger OCR und Dokumentenverständnis.' },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Hardware-Tiers für Multimodal',
        content: 'Fünf Hardware-Konfigurationen, geordnet nach Leistungsfähigkeit und VRAM.',
        columns: ['Stufe', 'GPU', 'RAM', 'Kann ausführen', 'Latenz (Sprach-Abfrage + Bild)'],
        rows: [
          { 'Stufe': 'Einsteiger', 'GPU': 'RTX 3060 12 GB', 'RAM': '16 GB', 'Kann ausführen': 'STT + Phi-4 (Vision separat, sequenziell)', 'Latenz (Sprach-Abfrage + Bild)': '5–10 Sek.' },
          { 'Stufe': 'Mittel', 'GPU': 'RTX 4070 12 GB', 'RAM': '32 GB', 'Kann ausführen': 'Vollständiger Stack mit 7B-Modellen (LLaVA 7B + Llama 3.3 8B, knapper Fit)', 'Latenz (Sprach-Abfrage + Bild)': '3–6 Sek.' },
          { 'Stufe': 'Hoch', 'GPU': 'RTX 4090 24 GB', 'RAM': '64 GB', 'Kann ausführen': 'Vollständiger Stack mit 13B-VLM + 8B-LLM simultan', 'Latenz (Sprach-Abfrage + Bild)': '2–4 Sek.' },
          { 'Stufe': 'Apple Mittel', 'GPU': 'M5 Pro 36 GB', 'RAM': '36 GB Unified', 'Kann ausführen': 'Vollständiger Stack mit 8B-Modellen via Metal (empfohlen)', 'Latenz (Sprach-Abfrage + Bild)': '2–4 Sek.' },
          { 'Stufe': 'Apple Hoch', 'GPU': 'M5 Max 128 GB', 'RAM': '128 GB Unified', 'Kann ausführen': 'Vollständiger Stack mit 70B-Modellen — beste lokale Qualität', 'Latenz (Sprach-Abfrage + Bild)': '1–3 Sek.' },
        ],
        note: 'Latenz wird vom Ende der Sprachabfrage bis zum Start der TTS-Wiedergabe gemessen, einschließlich Bildverarbeitung, falls ein Bild vorhanden ist.',
        callouts: [
          { type: 'tip', text: 'Der M5 Max mit 128 GB Unified Memory ist die ultimative lokale multimodale Plattform. Er kann Whisper large-v3 (3 GB) + Llama 3.2 Vision 90B (~64 GB) + Piper TTS simultan ausführen.' },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: 'Use Case 1: Sprachgesteuerter Dokumenten-Analysator',
        content: '**Sprechen Sie eine Frage zu einem Dokumentenbild aus; die Pipeline transkribiert Ihre Stimme, verarbeitet das Dokument visuell und liest die Antwort laut vor.**',
        items: [
          '**Beispiel:** Fotografieren Sie eine Rechnung und fragen Sie: „Wie hoch ist der fällige Gesamtbetrag und was ist die Zahlungsfrist?"',
          '**Pipeline:** Whisper transkribiert die Frage → Bild wird an LLaVA oder Llama 3.2 Vision gesendet → VLM extrahiert Rechnungstext und Struktur → LLM kombiniert Frage + VLM-Ausgabe → Piper liest die Antwort laut vor.',
          '**Prompt:** „Hier ist ein Bild: [VLM-Beschreibung]. Der Benutzer fragt: [Transkript]. Beantworten Sie die Frage basierend auf dem Bildinhalt."',
          '**Bestes VLM:** MiniCPM-V 2.6 oder Llama 3.2 Vision 11B für Rechnungs-/Dokument-OCR-Genauigkeit.',
          '**Datenschutzwert:** Medizinische Unterlagen, rechtliche Dokumente, Finanzauszüge — vollständig lokal verarbeitet, ohne dass Daten das Gerät verlassen.',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: 'Use Case 2: Visueller Q&A-Assistent',
        content: '**Richten Sie eine Kamera auf ein Objekt oder eine Szene, stellen Sie eine Frage verbal und erhalten Sie eine gesprochene Antwort.**',
        items: [
          '**Anwendungen:** Lagerbestandsverwaltung, Feldinspektionen, Barrierefreiheit für sehbeeinträchtigte Benutzer.',
          '**Implementierung:** Kamera-Frame aufnehmen (OpenCV), als JPEG speichern, zusammen mit dem Whisper-Transkript an das VLM übergeben.',
          '**Beste Modelle:** LLaVA 1.6 7B oder Llama 3.2 Vision 11B für allgemeines Objekt-/Szenenverständnis.',
          '**Latenz:** 3–6 Sekunden für Bildaufnahme + VLM-Verarbeitung + LLM + TTS auf RTX 4070.',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: 'Use Case 3: Meeting-Transkription + Folienanalyse',
        content: '**Führen Sie Whisper kontinuierlich während eines Meetings aus, um ein Transkript zu erstellen, während periodisch Folien-Screenshots für die VLM-Analyse aufgenommen werden. Am Ende werden Transkript + Folieninhalt für eine lokale Zusammenfassung kombiniert — null Cloud, null Datenexposition.**',
        items: [
          '**STT:** Führen Sie faster-whisper im Streaming-Modus während des Meetings aus.',
          '**Vision:** Jedes Mal, wenn eine neue Folie erscheint, nehmen Sie einen Screenshot auf und übergeben ihn an LLaVA zur Beschreibung.',
          '**Kombination:** Am Ende des Meetings übergeben Sie Transkript + Folienbeschreibungen an Llama 3.3 8B für Zusammenfassung und Aktionspunkte.',
          '**Ausgabe:** Sprachgelesene Zusammenfassung (Piper TTS) + lokal gespeicherte Textdatei.',
          '**DSGVO-Wert:** Die gesamte Meeting-Verarbeitung ist lokal. Kein Audio, Transkript oder Folien werden an einen Cloud-Dienst gesendet.',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: 'Use Case 4: Lokales Zugänglichkeitstool',
        content: '**Eine lokale multimodale Pipeline kann als Screenreader und sprachgesteuerter UI-Assistent für Benutzer mit Seh- oder Motorikbeeinträchtigungen dienen — offline ohne Datenschutzbedenken bei Cloud-Zugänglichkeitsdiensten.**',
        items: [
          '**Screenreader:** Screenshot alle 2 Sekunden aufnehmen → LLaVA beschreibt den Bildschirminhalt → Piper liest ihn laut vor.',
          '**Sprachnavigation:** Whisper transkribiert Sprachbefehle → LLM interpretiert die Absicht → Tastatur-/Mausaktionen via pyautogui ausführen.',
          '**Datenschutzvorteil:** Benutzer mit Behinderungen nutzen Zugänglichkeitstools oft in sensiblen Kontexten. Ein lokales Tool stellt sicher, dass kein Bildschirminhalt an Dritte übertragen wird.',
          '**Modellwahl für Zugänglichkeit:** Moondream 2 für schnelle Bildschirmbeschreibungen (2 GB VRAM). LLaVA 7B für reichhaltigere Beschreibungen (6 GB VRAM).',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: 'Use Case 5: Lokale Sicherheitskameraanalyse',
        content: '**Frames von einer IP-Kamera aufnehmen, Bewegungserkennung lokal durchführen und VLM-Analyse nur bei Bewegungserkennung auslösen — ohne Cloud-Kameradienste oder Drittanbieter-Videospeicherung.**',
        items: [
          '**Frame-Aufnahme:** OpenCV verwenden, um alle 5–10 Sekunden einen Frame von einer IP-Kamera via RTSP aufzunehmen.',
          '**Bewegungserkennung:** Differenz zwischen aufeinanderfolgenden Frames berechnen. Frames unterhalb des Bewegungsschwellenwerts überspringen.',
          '**VLM-Analyse:** Bei erkannter Bewegung den Frame an das VLM senden: „Beschreiben Sie, was passiert. Ist eine Person anwesend?"',
          '**Alert-Ausgabe:** Wenn eine Person erkannt wird, eine lokale Desktop-Benachrichtigung und eine Piper-TTS-Ansage auslösen.',
          '**Datenschutzvorteil:** Ring und Nest senden Video an AWS- bzw. Google-Server. Dieses Setup hält alle Aufnahmen auf Ihrer Hardware.',
          '**Bestes VLM für Geschwindigkeit:** Moondream 2 (~1 Sekunde pro Frame, ~2 GB VRAM) oder LLaVA 7B (~3 Sekunden, ~6 GB VRAM).',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: 'Den Python-Orchestrator aufbauen',
        content: 'Ein asynchroner Python-Orchestrator leitet Eingaben an das richtige Modell weiter und kombiniert Ausgaben. asyncio ermöglicht die parallele Ausführung von STT und Vision-Verarbeitung.',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": VISION_MODEL, "prompt": "Describe the content of this image in detail.", "images": [image_b64], "stream": False},
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    if image_description:
        prompt = f"The user asked (via voice): {transcript}\\n\\nThe image shows: {image_description}\\n\\nAnswer based on the image. Be concise."
    else:
        prompt = transcript
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL, json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}', shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    if image_path:
        transcript, image_desc = await asyncio.gather(transcribe_audio(audio), describe_image(image_path))
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None
    if not transcript or len(transcript) < 3:
        return
    response = await reason(transcript, image_desc)
    await speak(response)

async def main():
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: 'Performance-Optimierung',
        content: 'Wichtige Optimierungen für akzeptable Latenz beim vollständigen multimodalen Stack:',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die zwei größten Optimierungen sind: (1) STT und VLM mit asyncio parallel ausführen, wenn sowohl Audio als auch Bild verfügbar sind, und (2) LLM-Ausgabe satzweise an TTS streamen, damit Audio beginnt, bevor das LLM fertig ist.' },
          { type: 'plain-terms', text: 'Ohne Parallelisierung: STT (0,5 s) + VLM (3 s) + LLM (1 s) + TTS (0,1 s) = 4,6 s. Mit parallelem STT + VLM: max(0,5 s, 3 s) + LLM (1 s) + TTS (0,1 s) = 4,1 s. Mit Streaming-TTS → Benutzer hört Audio bei 3,5 s.' },
        ],
        items: [
          '**Paralleles STT + VLM:** `asyncio.gather(transcribe_audio(), describe_image())` verwenden, um beide simultan auszuführen. Spart 0,3–2 Sekunden.',
          '**Modelle warm halten:** Ollama hält Modelle automatisch zwischen Anfragen im VRAM. Nie zwischen Abfragen neu laden.',
          '**LLM → TTS streamen:** Satzgrenzen in der LLM-Ausgabe erkennen. Jeden abgeschlossenen Satz an Piper übergeben, während das LLM weiter generiert.',
          '**VRAM-Management:** Bei engem VRAM das VLM nach der Bildverarbeitung entladen, bevor das Text-LLM geladen wird. Fügt ~2–3 Sekunden hinzu, ermöglicht aber 8-GB-GPUs den vollständigen Stack.',
          '**Llama 3.2 Vision als kombiniertes VLM + LLM verwenden:** Eliminiert Modell-Wechsel-Overhead — ein Modell verarbeitet sowohl Vision als auch Textreasoning.',
          '**TTS erster Audio-Zielwert:** Piper generiert erstes Audio innerhalb von 50–100 ms. Satzweise streamen für sub-sekündliche wahrgenommene Latenz.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Einschränkungen und ehrliche Einschätzung',
        content: '**Eine lokale multimodale Pipeline ist nicht GPT-5.5.** Klarheit über die Lücken verhindert Frustration und hilft bei der Umgehungsplanung.',
        items: [
          '**Modalitätsnähte:** Vision-Ausgabe wird zu Text serialisiert, bevor sie an das Text-LLM übergeben wird. Das LLM kann nicht direkt über Bildmerkmale nachdenken — es denkt über eine Textbeschreibung des Bildes nach.',
          '**Kein Echtzeit-Video:** Lokale VLMs verarbeiten einzelne Frames, kein kontinuierliches Video. Für Video: Frames bei 0,5–2 FPS extrahieren und sequenziell verarbeiten.',
          '**VLM-Qualitätslücke:** Lokale Vision-Modelle (LLaVA 7B, Llama 3.2 Vision 11B) liegen hinter GPT-5.5 Vision bei komplexen Infografiken, handgeschriebenem Text und mehrdeutigen Szenen.',
          '**VRAM-Druck:** Drei Modelle simultan auf einer einzelnen GPU zu betreiben erfordert sorgfältiges VRAM-Management. Auf 12-GB-GPUs müssen Modellgrößen sorgfältig gewählt werden.',
          '**Latenz vs. Cloud:** Ein Cloud-Multimodal-Aufruf (GPT-5.5) dauert 1–3 Sekunden. Eine lokale Pipeline dauert 3–8 Sekunden auf vergleichbarer Hardware.',
          '**Konsistenz:** Lokale Modelle produzieren variablere Ausgabequalität als Cloud-Modelle. Gelegentliche Halluzinationen sind zu erwarten.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich Llama 3.2 Vision allein für Sprache, Vision und Text verwenden?',
            a: 'Ja. Llama 3.2 Vision 11B kann Bilder und Text verarbeiten. Sie können es als einziges Modell verwenden und whisper.cpp für Spracheingabe + Piper für Sprachausgabe hinzufügen. Dies reduziert die VRAM-Anforderungen von ~15 GB (separate VLM + LLM) auf ~8 GB (Llama 3.2 Vision 11B allein). Der Nachteil: kein spezialisiertes VLM für komplexe Bildanalyse — Kompromiss zwischen Geschwindigkeit und Qualität.',
          },
          {
            q: 'Sollte ich die Vision und das Text-LLM zusammen oder getrennt ausführen?',
            a: 'Zusammen, wenn Sie 12+ GB VRAM haben (eine Ollama-Instanz, beide Modelle geladen). Getrennt (swapout), wenn Sie 8 GB haben — laden Sie die VLM, speichern Sie die Bildbeschreibung, entladen Sie, laden Sie das Text-LLM. Getrennt hat ~2–3 Sekunden Latenz-Overhead pro Anfrage, aber spart VRAM. Für interaktive Anwendungen (Voice-Assistent) ist zusammen besser.',
          },
          {
            q: 'Kann ich auf einem Mac M5 Pro 36 GB die komplette Pipeline mit vollem Durchsatz ausführen?',
            a: 'Ja, aber mit Vorsicht bei der Parallelisierung. whisper.cpp ist CPU-basiert und nutzt ARM-Kerne gut. Die Vision + LLM sollten auf GPU laufen (Metal-beschleunigt), aber nicht beide gleichzeitig — stellen Sie sicher, dass Ihre async-Tasks nicht Spike-Latenz verursachen. Best practice: STT parallel starten, dann VLM + LLM sequenziell auf GPU.',
          },
          {
            q: 'Ist eine lokale multimodale Pipeline schnell genug für Echtzeit-Sprachassistenten?',
            a: 'Für Echtzeit-Voice-Output: Ja, wenn Sie optimieren. whisper.cpp ~1–2 Sekunden, LLM ~1–2 Sekunden, TTS ~0,1 Sekunden. Gesamt: ~2–4 Sekunden von Spracheingabe zu Sprachausgabe. Schneller als viele Cloud-APIs, aber nicht synchron wie ein menschliches Gespräch. Für asynchrone Assistenten (Notizen, Zusammenfassungen) ist es perfekt.',
          },
          {
            q: 'Kann ich die Pipeline auf einer RTX 3060 12 GB mit allen vier Modellen ausführen?',
            a: 'Nein, nicht alle vier gleichzeitig — 3060 hat 12 GB, aber die Stack-Anforderungen sind ~15 GB (whisper 3 + LLaVA 6 + Llama 3.3 8 6 + Piper CPU). Lösung: Verwenden Sie Llama 3.2 Vision 11B (8 GB) allein oder quantisieren Sie die Modelle auf INT4 (reduziert auf ~10 GB). Oder swappen Sie Models in/out je nach Eingabetyp.',
          },
          {
            q: 'Welches Vision-Modell sollte ich wählen: LLaVA 1.6, Qwen2-VL oder Llama 3.2 Vision?',
            a: 'LLaVA 1.6 7B: schnell (~1 Sekunde), ausreichende Genauigkeit, ältere Architektur. Qwen2-VL 7B: bessere Bildverständnis, ~1,5 Sekunden. Llama 3.2 Vision 11B: beste Qualität, kombiniert VLM + Text-Reasoning in einem Modell, ~2 Sekunden. Für Geschwindigkeit: LLaVA. Für Qualität: Llama 3.2 Vision. Für Balance: Qwen2-VL.',
          },
          {
            q: 'Kann ich Web-Suche zur multimodalen Pipeline hinzufügen?',
            a: 'Ja. Fügen Sie einen Suche-Schritt zwischen den Orchestrator und das Text-LLM ein. Verwenden Sie die DuckDuckGo API oder ein lokales RAG-System (AnythingLLM, PrivateGPT), um Kontext vor dem LLM-Reasoning-Schritt abzurufen. Das LLM argumentiert dann über das Transkript + Bildbeschreibung + Suchergebnisse kombiniert. Dies addiert 0,5–2 Sekunden Latenz, ermöglicht aber die Beantwortung von aktuelle-Ereignisse-Fragen neben Bildanalyse.',
          },
          {
            q: 'Wie viel Elektrizität verbraucht der komplette multimodale Stack 24/7?',
            a: 'Ruhe mit Modellen warm in VRAM: ~50–80 W (Desktop-GPU), ~15–25 W (Mac Mini M5 Pro). Aktive Verarbeitung: ~150–300 W (Desktop-GPU), ~30–60 W (Mac Mini M5 Pro). Monatliche Kosten bei $0,15/kWh: ungefähr $5–15 (Mac Mini) oder $15–35 (Desktop). Dies ist weniger als eine Cloud-API bei vergleichbarem Query-Volumen — ein Mac Mini mit dem kompletten Stack 24/7 kostet weniger Elektrizität pro Monat als zwei Tage GPT-5.5 API-Nutzung bei 100 Queries/Tag.',
          },
          {
            q: 'Ist die lokale multimodale Pipeline GDPR-konform für medizinische oder rechtliche Nutzung?',
            a: 'Eine lokale multimodale Pipeline, die Null-Netzwerk-Traffic während der Operation generiert, ist per Design konform für interne Anwendungsfälle — keine Datenverarbeitungsvereinbarung ist erforderlich, da keine persönlichen Daten Ihre Systeme verlassen. Zur Überprüfung der Konformität: Führen Sie Wireshark während des Betriebs aus und bestätigen Sie Null ausgehende Pakete vom Pipeline-Prozess. Speicherung ist auch wichtig — wenn Ihr Orchestrator Gesprächsverlauf oder Bilddateien speichert, unterliegen diese Speicher auch Aufbewahrungsanforderungen. Verwenden Sie kurzlebigen In-Memory-Speicher oder verschlüsselt lokalen Speicher mit angemessenen Aufbewahrungsrichtlinien.',
          },
          {
            q: 'Kann ich die Pipeline auf einem Laptop ohne externe GPU ausführen?',
            a: 'Mit CPU-only: Ja, aber langsam. whisper.cpp auf CPU ~5–10 Sekunden. LLaVA auf CPU ~20+ Sekunden. Total: ~30+ Sekunden latency — nicht für Echtzeit-Assistenten. Mit integrierten GPU (Mac Metal, Intel Arc): besser, aber immer noch nicht ideal. Empfehlung: externe GPU (RTX 4070 via Thunderbolt) oder verwenden Sie eine Cloud-Alternative für GPU-intensive Modelle.',
          },
          {
            q: 'Sollte ich einen spezialisierten VLM oder ein generalistisches Modell wie Llama 3.2 Vision verwenden?',
            a: 'Spezialisiert (LLaVA 1.6): schneller (~1 Sekunde), leichter (6 GB). Generalistisch (Llama 3.2 Vision 11B): besser für komplexe Szenen, kombiniert Sehen + Reasoning. Wenn Sie einfache Bildtitel oder Objekterkennung brauchen: spezialisiert. Für komplexes Szenen-Verständnis und kontextuelle Fragen: generalistisch. In der Praxis: spezialisiert + Reasoning-LLM erzeugt oft bessere Outputs als ein großes generalistisches Modell allein.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Ollama](https://ollama.ai) — Lokale LLM-Orchestration, unterstützt Vision-Modelle und Chat-APIs.',
          '[whisper.cpp auf GitHub](https://github.com/ggerganov/whisper.cpp) — Schnelle CPU-basierte Speech-to-Text, Metal/CUDA-beschleunigt.',
          '[LLaVA auf Hugging Face](https://huggingface.co/liuhaotian/llava-v1.6-7b-hf) — Vision-Language-Modell, Open Source.',
          '[Llama 3.2 Vision](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision) — Multimodales LLM mit Vision und Text, 11B.',
          '[Piper TTS auf GitHub](https://github.com/rhasspy/piper) — Schnelle lokale Text-to-Speech.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Lokale Spracherkennung 2026: Whisper.cpp vs. faster-whisper](/de/power-local-llm/local-whisper-stt-comparison-2026) — STT-Komponente im Detail.',
          '[Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision und Ollama](/de/power-local-llm/local-vision-models-llava-ollama-2026) — Vision-Komponente im Detail.',
          '[Lokales TTS und Voice Cloning 2026](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS-Komponente im Detail.',
          '[Vollständig offline: Sprachassistenten selbst entwickeln 2026](/de/power-local-llm/build-local-voice-assistant-2026) — Die reine Sprachversion (einfacher, ohne Vision).',
          '[Hardware-Guide für lokale LLMs 2026](/de/local-llms/local-llm-hardware-guide-2026) — Hardware-Auswahl für Multi-Modell-Pipelines.',
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
    title: 'Pipeline IA multimodale locale 2026 : combiner voix, vision et texte hors ligne',
    seoTitle: 'Pipeline multimodal local 2026 : voix, vision, texte',
    intro:
      'Un pipeline IA multimodal local combine des modèles spécialisés pour chaque modalité — whisper.cpp pour la saisie vocale, LLaVA ou Llama 3.2 Vision pour la compréhension d\'images, un LLM Ollama pour le raisonnement textuel et Piper TTS pour la sortie vocale — orchestrés en un système cohérent fonctionnant 100 % hors ligne. C\'est l\'équivalent local des capacités multimodales de GPT-5.5 : aucun modèle unique ne comprend tout, mais l\'orchestrateur route chaque type d\'entrée vers le bon modèle et combine les sorties.',
    metaDescription:
      'Construire un pipeline IA multimodal local en 2026 : whisper.cpp pour la saisie vocale, LLaVA 1.6 pour la vision, Ollama pour le raisonnement textuel, Piper TTS pour la sortie vocale. Architecture, niveaux matériels, cas d\'usage et code Python de l\'orchestrateur. Entièrement hors ligne.',
    twitterDescription:
      'IA multimodale locale 2026 : combiner Whisper STT + vision LLaVA + LLM Ollama + Piper TTS dans un pipeline hors ligne. Guide d\'architecture, niveaux matériels et code Python.',
    readTime: '16 min de lecture',
    educationalLevel: 'Advanced',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Un pipeline multimodal local repose sur quatre modèles orchestrés séparément — pas un modèle unique comme GPT-5.5.** whisper.cpp gère la voix, un VLM (LLaVA ou Llama 3.2 Vision) gère les images, un LLM gère le raisonnement textuel et Piper gère la sortie vocale. L\'orchestrateur route les entrées vers le bon modèle et combine les sorties.',
          '**Llama 3.2 Vision 11B peut remplacer à la fois le VLM et le LLM textuel en un seul modèle.** Il accepte texte et images simultanément et gère description et raisonnement en un seul passage — réduisant la VRAM de ~15 Go (modèles séparés) à ~8 Go (Llama 3.2 Vision 11B seul).',
          '**Matériel minimum pour le stack complet : RTX 4070 12 Go ou Apple M5 Pro 36 Go.** Un RTX 3060 12 Go peut exécuter une version contrainte (Phi-4 au lieu de Llama 3.3 8B, ou chargement séquentiel des modèles) — utilisable mais plus lent.',
          '**Cinq cas d\'usage pratiques justifient la complexité :** analyse de documents par commande vocale, Q&A visuel avec interaction vocale, transcription de réunions combinée à l\'analyse de diapositives, outils d\'accessibilité de lecteur d\'écran local et analyse locale de caméras de sécurité.',
          '**L\'orchestration async est essentielle pour des performances acceptables.** STT et vision peuvent fonctionner en parallèle lorsque des entrées audio et image sont disponibles — le LLM textuel attend les deux, puis génère une réponse combinée.',
          '**Le streaming de la sortie LLM vers TTS réduit la latence perçue de 0,3–0,7 seconde.** La génération audio commence dès la première phrase complète pendant que le LLM rédige encore le reste de la réponse.',
          '**Ce n\'est pas GPT-5.5.** Des modèles séparés produisent des « coutures » — la description du modèle de vision passe sous forme de texte au LLM, perdant une partie du raisonnement cross-modal. La qualité sur les tâches multimodales complexes est inférieure aux modèles fermés de pointe, mais suffisante pour les documents structurés et les photos claires.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**VRAM totale pour le stack complet :** ~15 Go (Whisper 3 Go + LLaVA 7B 6 Go + Llama 3.3 8B 6 Go). Piper tourne sur CPU.',
          '**Stack simplifié (Llama 3.2 Vision 11B) :** ~8 Go VRAM — gère vision et raisonnement textuel en un seul modèle.',
          '**Latence vocale (Whisper small, RTX 4070) :** ~200–500 ms STT. 500–1500 ms premier token LLM. 100 ms Piper TTS.',
          '**Latence traitement image (LLaVA 7B, RTX 4070) :** ~2–5 secondes par image selon résolution et prompt.',
          '**Pas de vidéo temps réel :** Les VLMs traitent des images individuelles, pas des flux vidéo continus. Pour la vidéo, extraire des images à 1 FPS et traiter chacune.',
          '**Même instance Ollama pour VLM + LLM :** Ollama peut servir Llama 3.2 Vision comme modèle de vision et modèle textuel, économisant la VRAM.',
          '**Tous les composants sous licence MIT ou Apache 2.0** (whisper.cpp MIT, LLaVA MIT, Llama 3.3 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'Qu\'est-ce qu\'un pipeline IA multimodal ?',
        content: 'Un système IA multimodal accepte plusieurs types d\'entrée (voix, images, texte) et produit plusieurs types de sortie (texte, parole). L\'équivalent cloud est GPT-5.5 — un seul modèle acceptant audio, images et texte en toute combinaison.',
        items: [
          '**Approche cloud (GPT-5.5) :** Un modèle géant entraîné simultanément sur toutes les modalités. Le raisonnement cross-modal est appris à l\'entraînement — le modèle peut raisonner nativement sur la relation entre contenu image et requêtes vocales.',
          '**Approche locale (ce guide) :** Modèles spécialisés séparés pour chaque modalité, connectés par un orchestrateur. Plus modulaire et moins coûteux à exécuter, mais produit des « coutures » — la sortie du modèle de vision est sérialisée en texte avant d\'être transmise au LLM.',
          '**Pourquoi construire localement :** Confidentialité (images médicales, documents propriétaires, captures d\'écran confidentielles), coût (zéro frais par requête), capacité hors ligne (aucun Internet requis après téléchargement du modèle), personnalisation (échange de tout composant).',
          '**Avantage modulaire :** Vous pouvez mettre à niveau n\'importe quel composant indépendamment. Quand un meilleur modèle STT local sort, remplacez uniquement la couche STT.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Coût : Pipeline locale vs APIs cloud (mensuel)',
        content: 'À usage modéré (100+ requêtes/jour), un pipeline multimodal local s\'amortit en 3–6 mois.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Un pipeline multimodal local coûte 0 $/mois en frais d\'API après l\'investissement matériel unique (600–3 500 $), avec un seuil de rentabilité face aux coûts API GPT-5.5 (135–225 $/mois) en 3–18 mois selon le volume de requêtes.' },
        ],
        columns: ['Usage', 'GPT-5.5 API', 'Google Cloud', 'Local'],
        rows: [
          { 'Usage': '100 requêtes vocales/jour', 'GPT-5.5 API': '$90–150/mois', 'Google Cloud': '$60–120/mois', 'Local': '$0' },
          { 'Usage': '50 analyses d\'images/jour', 'GPT-5.5 API': '$45–75/mois', 'Google Cloud': '$30–60/mois', 'Local': '$0' },
          { 'Usage': 'Combiné (typique)', 'GPT-5.5 API': '$135–225/mois', 'Google Cloud': '$90–180/mois', 'Local': '$0' },
          { 'Usage': 'Matériel (une fois)', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', 'Local': '$600–3 500' },
          { 'Usage': 'Seuil de rentabilité', 'GPT-5.5 API': '—', 'Google Cloud': '—', 'Local': '3–18 mois' },
        ],
        note: 'Le pipeline local s\'amortit en 3–6 mois à usage modéré (100+ requêtes/jour). À usage léger (10 requêtes/jour), le seuil de rentabilité s\'étend à 12–18 mois.',
      },
      architecture: {
        id: 'architecture',
        title: 'Vue d\'ensemble de l\'architecture',
        content: 'Le pipeline multimodal local utilise un pattern router-orchestrateur : les entrées sont typées à la frontière, routées vers le modèle approprié, et les sorties sont combinées par l\'orchestrateur avant de générer la réponse finale.',
        items: [
          '**Types d\'entrée :** Audio microphone (voix), image caméra ou fichier (vision), texte clavier (texte).',
          '**Logique de routage :** Détecter le type d\'entrée à la frontière. Audio → modèle STT. Image → VLM. Texte → LLM directement. Si audio et image arrivent ensemble, traiter en parallèle et combiner.',
          '**Registre de modèles :** Chaque type d\'entrée est mappé à une fonction handler qui appelle le modèle approprié et retourne une description texte/transcription.',
          '**Orchestrateur :** Collecte toutes les sorties de modèles, les combine en un seul prompt pour le LLM textuel, obtient la réponse LLM et la route vers TTS pour la sortie vocale ou vers l\'écran en texte.',
          '**Types de sortie :** Réponse vocale (Piper TTS), texte à l\'écran, ou données structurées (JSON) pour intégration avec d\'autres systèmes.',
          '**Traitement parallèle :** STT et VLM peuvent traiter simultanément — une requête audio sur une image peut avoir les deux traités en parallèle, réduisant la latence totale de 40–60 % vs. traitement séquentiel.',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: 'Le stack de composants',
        content: 'Stack complet avec exigences VRAM et rôle de chaque composant.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Le stack multimodal local complet utilise ~15 Go VRAM : Whisper large-v3 (3 Go) + LLaVA 1.6 7B (6 Go) + Llama 3.3 8B (6 Go) ; Piper TTS tourne sur CPU sans coût VRAM.' },
          { type: 'plain-terms', text: 'Vous pouvez réduire la VRAM à 8 Go en utilisant Llama 3.2 Vision 11B comme modèle de vision ET de texte — il gère photos ET conversation en un seul modèle.' },
        ],
        columns: ['Couche', 'Outil', 'Modèle', 'VRAM', 'Rôle'],
        rows: [
          { 'Couche': 'STT', 'Outil': 'whisper.cpp', 'Modèle': 'Whisper large-v3', 'VRAM': '~3 Go', 'Rôle': 'Voix → transcription texte' },
          { 'Couche': 'Vision', 'Outil': 'Ollama', 'Modèle': 'LLaVA 1.6 7B', 'VRAM': '~6 Go', 'Rôle': 'Image → description texte' },
          { 'Couche': 'Raisonnement', 'Outil': 'Ollama', 'Modèle': 'Llama 3.3 8B Q4', 'VRAM': '~6 Go', 'Rôle': 'Texte → réponse texte' },
          { 'Couche': 'TTS', 'Outil': 'Piper', 'Modèle': 'en_US-lessac-medium', 'VRAM': 'CPU uniquement', 'Rôle': 'Texte → sortie vocale' },
          { 'Couche': 'Total (modèles séparés)', 'Outil': '', 'Modèle': '', 'VRAM': '~15 Go', 'Rôle': 'Pipeline complet' },
        ],
        callouts: [
          { type: 'tip', text: 'Utilisez Llama 3.2 Vision 11B au lieu de LLaVA + Llama 3.3 8B séparés pour réduire la VRAM à ~8 Go.' },
          { type: 'tip', text: 'VLM alternatif : Qwen2-VL 7B (~6 Go VRAM) — plus puissant que LLaVA sur l\'OCR multilingue et la compréhension de documents.' },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Niveaux matériels pour le multimodal',
        content: 'Cinq configurations matérielles, classées par capacité et VRAM.',
        columns: ['Niveau', 'GPU', 'RAM', 'Peut exécuter', 'Latence (requête vocale + image)'],
        rows: [
          { 'Niveau': 'Entrée de gamme', 'GPU': 'RTX 3060 12 Go', 'RAM': '16 Go', 'Peut exécuter': 'STT + Phi-4 (vision séparée, séquentiel)', 'Latence (requête vocale + image)': '5–10 sec' },
          { 'Niveau': 'Milieu de gamme', 'GPU': 'RTX 4070 12 Go', 'RAM': '32 Go', 'Peut exécuter': 'Stack complet avec modèles 7B (LLaVA 7B + Llama 3.3 8B, ajustement serré)', 'Latence (requête vocale + image)': '3–6 sec' },
          { 'Niveau': 'Haut de gamme', 'GPU': 'RTX 4090 24 Go', 'RAM': '64 Go', 'Peut exécuter': 'Stack complet avec VLM 13B + LLM 8B simultanément', 'Latence (requête vocale + image)': '2–4 sec' },
          { 'Niveau': 'Apple milieu', 'GPU': 'M5 Pro 36 Go', 'RAM': '36 Go unifié', 'Peut exécuter': 'Stack complet avec modèles 8B via Metal (recommandé)', 'Latence (requête vocale + image)': '2–4 sec' },
          { 'Niveau': 'Apple haut de gamme', 'GPU': 'M5 Max 128 Go', 'RAM': '128 Go unifié', 'Peut exécuter': 'Stack complet avec modèles 70B — meilleure qualité locale', 'Latence (requête vocale + image)': '1–3 sec' },
        ],
        note: 'La latence est mesurée de la fin de la requête vocale au début de la lecture TTS, traitement image inclus si une image est présente.',
        callouts: [
          { type: 'tip', text: 'Le M5 Max avec 128 Go de mémoire unifiée est la plateforme multimodale locale ultime. Il peut exécuter Whisper large-v3 (3 Go) + Llama 3.2 Vision 90B (~64 Go) + Piper TTS simultanément.' },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: 'Cas d\'usage 1 : Analyseur de documents par commande vocale',
        content: '**Posez une question sur un document image ; le pipeline transcrit votre voix, traite le document visuellement et lit la réponse à voix haute.**',
        items: [
          '**Exemple :** Photographiez une facture et dites « Quel est le montant total dû et quelle est la date limite de paiement ? »',
          '**Pipeline :** Whisper transcrit la question → image envoyée à LLaVA ou Llama 3.2 Vision → VLM extrait texte et structure de la facture → LLM combine question + sortie VLM → Piper lit la réponse à voix haute.',
          '**Prompt :** « Voici une image : [description VLM]. L\'utilisateur demande : [transcription]. Répondez à la question basée sur le contenu de l\'image. »',
          '**Meilleur VLM :** MiniCPM-V 2.6 ou Llama 3.2 Vision 11B pour la précision OCR facture/document.',
          '**Valeur confidentialité :** Dossiers médicaux, documents juridiques, relevés financiers — traités entièrement localement sans aucune donnée quittant la machine.',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: 'Cas d\'usage 2 : Assistant Q&A visuel',
        content: '**Pointez une caméra vers un objet ou une scène, posez une question verbalement et recevez une réponse vocale.**',
        items: [
          '**Applications :** Inventaire d\'entrepôt, inspection de terrain, accessibilité pour malvoyants.',
          '**Implémentation :** Capturer une image caméra (OpenCV), sauvegarder en JPEG, passer au VLM avec la transcription Whisper.',
          '**Meilleurs modèles :** LLaVA 1.6 7B ou Llama 3.2 Vision 11B pour la compréhension générale d\'objets/scènes.',
          '**Latence :** 3–6 secondes pour capture image + traitement VLM + LLM + TTS sur RTX 4070.',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: 'Cas d\'usage 3 : Transcription de réunion + Analyse de diapositives',
        content: '**Exécutez Whisper en continu pendant une réunion pour construire une transcription, tout en capturant périodiquement des captures d\'écran de diapositives pour analyse VLM. À la fin, combinez transcription + contenu des diapositives pour un résumé local — zéro cloud, zéro exposition de données.**',
        items: [
          '**STT :** Exécuter faster-whisper en mode streaming pendant la réunion.',
          '**Vision :** À chaque nouvelle diapositive, capturer un screenshot et le passer à LLaVA pour description.',
          '**Combinaison :** En fin de réunion, passer transcription + descriptions de diapositives à Llama 3.3 8B pour résumé et points d\'action.',
          '**Sortie :** Résumé lu à voix haute (Piper TTS) + fichier texte sauvegardé localement.',
          '**Valeur RGPD :** Traitement complet de la réunion en local. Aucun audio, transcription ou diapositive envoyé à un service cloud.',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: 'Cas d\'usage 4 : Outil d\'accessibilité local',
        content: '**Un pipeline multimodal local peut servir de lecteur d\'écran et d\'assistant UI à commande vocale pour les utilisateurs ayant des déficiences visuelles ou motrices — fonctionnant hors ligne sans les problèmes de confidentialité des services d\'accessibilité cloud.**',
        items: [
          '**Lecteur d\'écran :** Capturer un screenshot toutes les 2 secondes → LLaVA décrit ce qui est à l\'écran → Piper le lit à voix haute.',
          '**Navigation vocale :** Whisper transcrit les commandes vocales → LLM interprète l\'intention → exécuter actions clavier/souris via pyautogui.',
          '**Bénéfice confidentialité :** Les utilisateurs handicapés utilisent souvent des outils d\'accessibilité dans des contextes sensibles. Un outil local garantit qu\'aucun contenu d\'écran n\'est transmis à des tiers.',
          '**Choix de modèle pour l\'accessibilité :** Moondream 2 pour des descriptions d\'écran rapides (2 Go VRAM). LLaVA 7B pour des descriptions plus riches (6 Go VRAM).',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: 'Cas d\'usage 5 : Analyse locale de caméra de sécurité',
        content: '**Capturer des images d\'une caméra IP, exécuter la détection de mouvement localement et déclencher l\'analyse VLM uniquement quand un mouvement est détecté — sans services de caméra cloud ni stockage vidéo tiers.**',
        items: [
          '**Capture d\'image :** Utiliser OpenCV pour capturer une image toutes les 5–10 secondes depuis une caméra IP via RTSP.',
          '**Détection de mouvement :** Calculer la différence entre images consécutives. Ignorer les images sous le seuil de mouvement.',
          '**Analyse VLM :** Quand un mouvement est détecté, envoyer l\'image au VLM : « Décrivez ce qui se passe. Y a-t-il une personne ? »',
          '**Sortie alerte :** Si une personne est détectée, déclencher une notification de bureau locale et une annonce Piper TTS.',
          '**Avantage confidentialité :** Ring et Nest envoient la vidéo vers AWS et les serveurs Google respectivement. Cette configuration garde toutes les images sur votre matériel.',
          '**Meilleur VLM pour la vitesse :** Moondream 2 (~1 seconde par image, ~2 Go VRAM) ou LLaVA 7B (~3 secondes, ~6 Go VRAM).',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: 'Construire l\'orchestrateur Python',
        content: 'Un orchestrateur Python async route les entrées vers le bon modèle et combine les sorties. asyncio permet à STT et au traitement vision de s\'exécuter en parallèle.',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": VISION_MODEL, "prompt": "Describe the content of this image in detail.", "images": [image_b64], "stream": False},
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    if image_description:
        prompt = f"The user asked (via voice): {transcript}\\n\\nThe image shows: {image_description}\\n\\nAnswer based on the image. Be concise."
    else:
        prompt = transcript
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL, json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}', shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    if image_path:
        transcript, image_desc = await asyncio.gather(transcribe_audio(audio), describe_image(image_path))
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None
    if not transcript or len(transcript) < 3:
        return
    response = await reason(transcript, image_desc)
    await speak(response)

async def main():
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: 'Optimisation des performances',
        content: 'Optimisations clés pour atteindre une latence acceptable sur le stack multimodal complet :',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Les deux plus grandes optimisations sont : (1) exécuter STT et VLM en parallèle avec asyncio quand audio et image sont disponibles, et (2) streamer la sortie LLM vers TTS phrase par phrase pour que l\'audio commence avant la fin du LLM.' },
          { type: 'plain-terms', text: 'Sans parallélisme : STT (0,5s) + VLM (3s) + LLM (1s) + TTS (0,1s) = 4,6s. Avec STT + VLM parallèles : max(0,5s, 3s) + LLM (1s) + TTS (0,1s) = 4,1s. Avec TTS streaming → l\'utilisateur entend l\'audio à 3,5s.' },
        ],
        items: [
          '**STT + VLM parallèles :** Utiliser `asyncio.gather(transcribe_audio(), describe_image())` pour exécuter les deux simultanément. Économise 0,3–2 secondes.',
          '**Garder les modèles chauds :** Ollama garde automatiquement les modèles en VRAM entre les requêtes. Ne jamais recharger entre les requêtes.',
          '**Streamer LLM → TTS :** Détecter les limites de phrases dans la sortie LLM. Passer chaque phrase complète à Piper pendant que le LLM continue de générer.',
          '**Gestion VRAM :** Si la VRAM est serrée, décharger le VLM après traitement image avant de charger le LLM textuel. Ajoute ~2–3 secondes mais permet à un GPU 8 Go de gérer le stack complet.',
          '**Utiliser Llama 3.2 Vision comme VLM + LLM combiné :** Élimine l\'overhead de commutation de modèle — un modèle gère vision et raisonnement textuel.',
          '**Cible premier audio TTS :** Piper génère le premier audio en 50–100 ms. Streamer une phrase à la fois pour une latence TTS perçue inférieure à une seconde.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitations et évaluation honnête',
        content: '**Un pipeline multimodal local n\'est pas GPT-5.5.** Être clair sur les lacunes évite la frustration et aide à concevoir des contournements.',
        items: [
          '**Coutures modales :** La sortie vision est sérialisée en texte avant d\'être transmise au LLM textuel. Le LLM ne peut pas raisonner directement sur les features visuelles — il raisonne sur une description texte de l\'image.',
          '**Pas de vidéo temps réel :** Les VLMs locaux traitent des images individuelles, pas de vidéo continue. Pour la vidéo, extraire des images à 0,5–2 FPS et traiter séquentiellement.',
          '**Écart de qualité VLM :** Les modèles de vision locaux (LLaVA 7B, Llama 3.2 Vision 11B) sont en retrait par rapport à GPT-5.5 Vision sur les infographies complexes, le texte manuscrit et les scènes ambiguës.',
          '**Pression VRAM :** Exécuter trois modèles simultanément sur un seul GPU nécessite une gestion VRAM soigneuse. Sur les GPU 12 Go, les tailles de modèles doivent être choisies avec soin.',
          '**Latence vs. cloud :** Un appel multimodal cloud (GPT-5.5) prend 1–3 secondes. Un pipeline local prend 3–8 secondes sur du matériel comparable.',
          '**Cohérence :** Les modèles locaux produisent une qualité de sortie plus variable que les modèles cloud. Des hallucinations occasionnelles sont à prévoir.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Puis-je utiliser Llama 3.2 Vision seul pour la voix, la vision et le texte?', a: 'Oui. Llama 3.2 Vision 11B peut traiter les images et le texte. Vous pouvez l\'utiliser comme modèle unique avec whisper.cpp pour la voix et Piper pour la sortie. Cela réduit VRAM de ~15 GB à ~8 GB. Inconvénient : pas de VLM spécialisé pour l\'analyse d\'images complexes.' },
          { q: 'Dois-je exécuter la vision et le LLM ensemble ou séparément?', a: 'Ensemble si 12+ GB VRAM. Séparé (échange) si 8 GB — charge VLM, stocke description, décharge, charge LLM. Séparé ajoute ~2–3 sec latence mais économise VRAM. Pour interactif : ensemble.' },
          { q: 'Quel modèle de vision: LLaVA 1.6, Qwen2-VL ou Llama 3.2 Vision?', a: 'LLaVA 1.6: rapide (~1s), suffisant. Qwen2-VL: meilleure compréhension (~1,5s). Llama 3.2 Vision: meilleure qualité, combine vision+texte (~2s). Pour vitesse: LLaVA. Pour qualité: Llama 3.2 Vision.' },
          { q: 'Le pipeline est-il assez rapide pour les assistants vocaux temps réel?', a: 'Oui si optimisé. whisper ~1–2s, LLM ~1–2s, TTS ~0,1s = ~2–4s total. Plus rapide que cloud APIs, mais pas synchrone. Parfait pour assistants asynchrones.' },
          { q: 'Puis-je exécuter le pipeline sur RTX 3060 12 GB?', a: 'Non les quatre simultanément (~15 GB requis). Solution: Llama 3.2 Vision 11B (8 GB) seul ou quantifiez à INT4 (~10 GB). Ou échangez modèles selon type d\'entrée.' },
          { q: 'Est-ce conforme au RGPD pour utilisation médicale/juridique?', a: 'Oui par conception — zéro trafic réseau, zéro données personnelles qui quittent vos systèmes. Vérifiez avec Wireshark. Attention au stockage — si vous gardez historique/images, respectez les périodes de rétention (Article 5 RGPD).' },
          { q: 'Puis-je ajouter recherche web au pipeline?', a: 'Oui. Ajoutez étape recherche (DuckDuckGo API ou RAG local) entre orchestrateur et LLM texte. Ajoute 0,5–2s latence mais permet questions d\'actualité.' },
          { q: 'Consommation électrique 24/7?', a: 'Au repos: ~50–80 W (GPU), ~15–25 W (Mac M5 Pro). Actif: ~150–300 W (GPU), ~30–60 W (Mac). Coût: $5–15 (Mac) ou $15–35 (desktop) par mois. Moins qu\'API cloud comparable.' },
          { q: 'Puis-je exécuter sur laptop sans GPU externe?', a: 'CPU seul: très lent (~30s+ latence). GPU intégré (Metal, Arc): mieux mais pas idéal. Mieux: GPU externe ou cloud.' },
          { q: 'VLM spécialisé ou généraliste?', a: 'Spécialisé (LLaVA): plus rapide, plus léger. Généraliste (Llama 3.2 Vision): meilleur pour scènes complexes. Pratique: spécialisé + LLM reasoning donne souvent meilleurs résultats.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama](https://ollama.ai) — Orchestration locale LLM, supporte modèles vision et APIs chat.',
          '[whisper.cpp sur GitHub](https://github.com/ggerganov/whisper.cpp) — Speech-to-text rapide CPU, accélération Metal/CUDA.',
          '[LLaVA sur Hugging Face](https://huggingface.co/liuhaotian/llava-v1.6-7b-hf) — Modèle Vision-Language open source.',
          '[Llama 3.2 Vision](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision) — LLM multimodal, 11B.',
          '[Piper TTS sur GitHub](https://github.com/rhasspy/piper) — Text-to-speech local rapide.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecture complémentaire',
        items: [
          '[Reconnaissance vocale locale 2026 : Whisper.cpp vs faster-whisper](/fr/power-local-llm/local-whisper-stt-comparison-2026) — Analyse approfondie du composant STT.',
          '[Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision et Ollama](/fr/power-local-llm/local-vision-models-llava-ollama-2026) — Analyse approfondie du composant vision.',
          '[TTS local et clonage vocal 2026](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Analyse approfondie du composant TTS.',
          '[Construire un assistant vocal 100 % hors ligne en 2026](/fr/power-local-llm/build-local-voice-assistant-2026) — La version voix uniquement (plus simple, sans vision).',
          '[Guide matériel pour LLMs locaux 2026](/fr/local-llms/local-llm-hardware-guide-2026) — Sélection du matériel pour les pipelines multi-modèles.',
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
    title: 'ローカルマルチモーダルAIパイプライン2026：音声・ビジョン・テキストモデルをオフラインで統合',
    seoTitle: 'ローカルマルチモーダルAIパイプライン2026：音声+ビジョン+テキストをオフラインで',
    intro:
      'ローカルマルチモーダルAIパイプラインは、各モダリティに特化した独立したモデルを組み合わせます。音声入力にwhisper.cpp、画像理解にLLaVAまたはLlama 3.2 Vision、テキスト推論にOllama LLM、音声出力にPiper TTSを使用し、100%オフラインで動作する一貫したシステムとして統合します。これはGPT-5.5のマルチモーダル機能のローカル版です：単一のモデルがすべてを理解するのではなく、オーケストレーターが各入力タイプを適切なモデルに振り分け、出力を結合します。',
    metaDescription:
      '2026年にローカルマルチモーダルAIパイプラインを構築：音声入力にwhisper.cpp、ビジョンにLLaVA 1.6、テキスト推論にOllama、音声出力にPiper TTS。アーキテクチャ、ハードウェア階層、ユースケース、Pythonオーケストレーターコード。完全オフライン対応。',
    twitterDescription:
      'ローカルマルチモーダルAI 2026：Whisper STT + LLaVAビジョン + Ollama LLM + Piper TTSを1つのオフラインパイプラインに統合。アーキテクチャガイド、ハードウェア階層、Pythonコード。',
    readTime: '18分で読める',
    educationalLevel: 'Advanced',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**ローカルマルチモーダルパイプラインは4つの独立したモデルを組み合わせたもの — GPT-5.5のような単一モデルではありません。** whisper.cppが音声を、VLM（LLaVAまたはLlama 3.2 Vision）が画像を、LLMがテキスト推論を、PiperがSTTを担当します。オーケストレーターが入力を適切なモデルに振り分け、出力を結合します。',
          '**Llama 3.2 Vision 11BはVLMとテキストLLMの両方を1つのモデルで代替できます。** テキストと画像を同時に受け付け、説明と推論を1回のパスで処理 — VRAMを~15 GB（個別モデル）から~8 GB（Llama 3.2 Vision 11B単体）に削減します。',
          '**フルスタックの最低ハードウェア：RTX 4070 12 GBまたはApple M5 Pro 36 GB。** RTX 3060 12 GBは制限版（Llama 3.3 8BではなくPhi-4、またはシーケンシャルなモデルロード）を実行可能 — 使えますが遅くなります。',
          '**5つの実用的なユースケースが複雑さを正当化します：** 音声制御ドキュメント分析、音声インタラクションを伴うビジュアルQ&A、スライド分析と組み合わせた会議転写、ローカルスクリーンリーダーアクセシビリティツール、ローカルセキュリティカメラ分析。',
          '**非同期オーケストレーションは許容可能なパフォーマンスに不可欠です。** 音声とビジョンの両入力が利用可能な場合、STTとビジョンは並列実行できます — テキストLLMは両方を待ってから結合された応答を生成します。',
          '**LLM出力をTTSにストリーミングすると知覚レイテンシが0.3〜0.7秒短縮されます。** LLMがまだ残りの応答を書いている間に、最初の完成した文から音声生成を開始します。',
          '**これはGPT-5.5ではありません。** 個別のモデルは「継ぎ目」を生じさせます — ビジョンモデルの説明がテキストとしてLLMに渡され、一部のクロスモーダル推論が失われます。複雑なマルチモーダルタスクの品質はフロンティアクローズドモデルより低いですが、構造化ドキュメントや明確な写真タスクには十分です。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**フルスタックの総VRAM：** ~15 GB（Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB）。PiperはCPU上で動作。',
          '**簡略化スタック（Llama 3.2 Vision 11B）：** ~8 GB VRAM — ビジョンとテキスト推論の両方を1つのモデルで処理。',
          '**音声レイテンシ（Whisper small、RTX 4070）：** STT ~200〜500 ms。LLM最初のトークン500〜1500 ms。Piper TTS 100 ms。',
          '**画像処理レイテンシ（LLaVA 7B、RTX 4070）：** 解像度とプロンプトにより画像1枚あたり~2〜5秒。',
          '**リアルタイムビデオ非対応：** VLMは個別フレームを処理し、継続的なビデオストリームは処理しません。ビデオの場合は1 FPSでフレームを抽出して各フレームを処理。',
          '**VLM + LLMに同じOllamaインスタンス：** OllamaはLlama 3.2 Visionをビジョンモデルとテキストモデルの両方として提供でき、VRAMを節約。',
          '**全コンポーネントがMITまたはApache 2.0ライセンス**（whisper.cpp MIT、LLaVA MIT、Llama 3.3 8B Llama 3コミュニティライセンス、Piper MIT）。',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'マルチモーダルAIパイプラインとは？',
        content: 'マルチモーダルAIシステムは複数の入力タイプ（音声、画像、テキスト）を受け付け、複数の出力タイプ（テキスト、音声）を生成します。クラウド版はGPT-5.5 — 音声、画像、テキストを任意の組み合わせで受け付ける単一モデルです。',
        items: [
          '**クラウドアプローチ（GPT-5.5）：** 全モダリティで同時に訓練された巨大なモデル。クロスモーダル推論は訓練中に学習 — 画像コンテンツと音声クエリの関係をネイティブに推論できます。',
          '**ローカルアプローチ（このガイド）：** オーケストレーターで接続された各モダリティ向けの個別特化モデル。よりモジュラーで運用コストが低いですが、「継ぎ目」が生じます — ビジョンモデルの出力はLLMに渡される前にテキストにシリアライズされます。',
          '**ローカルで構築する理由：** プライバシー（医療画像、プロプライエタリ文書、機密スクリーンショット）、コスト（クエリごとの費用ゼロ）、オフライン機能（モデルダウンロード後はインターネット不要）、カスタマイズ性（任意のコンポーネントの交換）。',
          '**モジュラーの利点：** 任意の1つのコンポーネントを独立してアップグレードできます。より良いローカルSTTモデルが登場したら、STTレイヤーのみを置き換えます。',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'コスト：ローカルパイプライン vs クラウドAPI（月次）',
        content: '中程度の使用量（1日100件以上のクエリ）では、ローカルマルチモーダルパイプラインは3〜6ヶ月で元が取れます。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'ローカルマルチモーダルパイプラインは一回限りのハードウェア投資（600〜3,500ドル）後、API費用が0ドル/月となり、GPT-5.5 APIコスト（135〜225ドル/月）に対して3〜18ヶ月（クエリ量により異なる）で損益分岐点に達します。' },
        ],
        columns: ['用途', 'GPT-5.5 API', 'Google Cloud', 'ローカル'],
        rows: [
          { '用途': '音声クエリ100件/日', 'GPT-5.5 API': '$90〜150/月', 'Google Cloud': '$60〜120/月', 'ローカル': '$0' },
          { '用途': '画像分析50件/日', 'GPT-5.5 API': '$45〜75/月', 'Google Cloud': '$30〜60/月', 'ローカル': '$0' },
          { '用途': '複合（典型的）', 'GPT-5.5 API': '$135〜225/月', 'Google Cloud': '$90〜180/月', 'ローカル': '$0' },
          { '用途': 'ハードウェア（一回限り）', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', 'ローカル': '$600〜3,500' },
          { '用途': '損益分岐点', 'GPT-5.5 API': '—', 'Google Cloud': '—', 'ローカル': '3〜18ヶ月' },
        ],
        note: 'ローカルパイプラインは中程度の使用量（1日100件以上のクエリ）で3〜6ヶ月で元が取れます。軽い使用量（1日10件のクエリ）では損益分岐点が12〜18ヶ月に延びます。',
      },
      architecture: {
        id: 'architecture',
        title: 'アーキテクチャの概要',
        content: 'ローカルマルチモーダルパイプラインはルーター・オーケストレーターパターンを使用します：入力は境界でタイプ分けされ、適切なモデルにルーティングされ、最終応答を生成する前にオーケストレーターが出力を結合します。',
        items: [
          '**入力タイプ：** マイク音声（音声）、カメラまたはファイル画像（ビジョン）、キーボードテキスト（テキスト）。',
          '**ルーターロジック：** 境界で入力タイプを検出。音声 → STTモデル。画像 → VLM。テキスト → 直接LLM。音声と画像が同時に来た場合は並列処理して結合。',
          '**モデルレジストリ：** 各入力タイプは適切なモデルを呼び出してテキスト説明/転写を返すハンドラー関数にマッピングされます。',
          '**オーケストレーター：** 全モデル出力を収集し、テキストLLM用の単一プロンプトに結合し、LLM応答を取得し、音声出力のTTSまたは画面テキストにルーティングします。',
          '**出力タイプ：** 音声応答（Piper TTS）、画面上のテキスト、または他のシステムとの統合用構造化データ（JSON）。',
          '**並列処理：** STTとVLMは同時処理が可能 — 画像に関する音声クエリは両方を並列処理でき、シーケンシャル処理と比較してレイテンシを40〜60%削減します。',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: 'コンポーネントスタック',
        content: 'VRAM要件と各コンポーネントの役割を含むフルスタック。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'フルローカルマルチモーダルスタックは~15 GB VRAMを使用：Whisper large-v3（3 GB）+ LLaVA 1.6 7B（6 GB）+ Llama 3.3 8B（6 GB）；Piper TTSはVRAMコストゼロでCPU上で動作します。' },
          { type: 'plain-terms', text: 'Llama 3.2 Vision 11Bをビジョンモデルとテキストモデルとして両方使用することで、VRAMを8 GBに削減できます — 写真と会話の両方を1つのモデルで処理します。' },
        ],
        columns: ['レイヤー', 'ツール', 'モデル', 'VRAM', '役割'],
        rows: [
          { 'レイヤー': 'STT', 'ツール': 'whisper.cpp', 'モデル': 'Whisper large-v3', 'VRAM': '~3 GB', '役割': '音声 → テキスト転写' },
          { 'レイヤー': 'ビジョン', 'ツール': 'Ollama', 'モデル': 'LLaVA 1.6 7B', 'VRAM': '~6 GB', '役割': '画像 → テキスト説明' },
          { 'レイヤー': '推論', 'ツール': 'Ollama', 'モデル': 'Llama 3.3 8B Q4', 'VRAM': '~6 GB', '役割': 'テキスト → テキスト応答' },
          { 'レイヤー': 'TTS', 'ツール': 'Piper', 'モデル': 'en_US-lessac-medium', 'VRAM': 'CPUのみ', '役割': 'テキスト → 音声出力' },
          { 'レイヤー': '合計（個別モデル）', 'ツール': '', 'モデル': '', 'VRAM': '~15 GB', '役割': 'フルパイプライン' },
        ],
        callouts: [
          { type: 'tip', text: '個別のLLaVA + Llama 3.3 8Bの代わりにLlama 3.2 Vision 11Bを使用してVRAMを~8 GBに削減できます。' },
          { type: 'tip', text: '代替VLM：Qwen2-VL 7B（~6 GB VRAM）— 多言語OCRとドキュメント理解でLLaVAより優れています。' },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'マルチモーダル向けハードウェア階層',
        content: '5つのハードウェア構成、能力とVRAMの順に並べています。',
        columns: ['ティア', 'GPU', 'RAM', '実行可能', 'レイテンシ（音声クエリ＋画像）'],
        rows: [
          { 'ティア': 'エントリー', 'GPU': 'RTX 3060 12 GB', 'RAM': '16 GB', '実行可能': 'STT + Phi-4（ビジョンは別途、シーケンシャル）', 'レイテンシ（音声クエリ＋画像）': '5〜10秒' },
          { 'ティア': 'ミッド', 'GPU': 'RTX 4070 12 GB', 'RAM': '32 GB', '実行可能': '7Bモデルでフルスタック（LLaVA 7B + Llama 3.3 8B、ぎりぎり）', 'レイテンシ（音声クエリ＋画像）': '3〜6秒' },
          { 'ティア': 'ハイ', 'GPU': 'RTX 4090 24 GB', 'RAM': '64 GB', '実行可能': '13B VLM + 8B LLM同時のフルスタック', 'レイテンシ（音声クエリ＋画像）': '2〜4秒' },
          { 'ティア': 'Appleミッド', 'GPU': 'M5 Pro 36 GB', 'RAM': '36 GB統合', '実行可能': 'Metal経由で8Bモデルのフルスタック（推奨）', 'レイテンシ（音声クエリ＋画像）': '2〜4秒' },
          { 'ティア': 'Appleハイ', 'GPU': 'M5 Max 128 GB', 'RAM': '128 GB統合', '実行可能': '70Bモデルのフルスタック — 最高のローカル品質', 'レイテンシ（音声クエリ＋画像）': '1〜3秒' },
        ],
        note: 'レイテンシは音声クエリの終了からTTS再生の開始まで測定され、画像が存在する場合は画像処理を含みます。',
        callouts: [
          { type: 'tip', text: '128 GB統合メモリのM5 Maxは究極のローカルマルチモーダルプラットフォームです。Whisper large-v3（3 GB）+ Llama 3.2 Vision 90B（~64 GB）+ Piper TTSを同時に実行できます。' },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: 'ユースケース1：音声制御ドキュメントアナライザー',
        content: '**ドキュメント画像について質問を話しかけると、パイプラインが音声を転写し、ドキュメントを視覚的に処理し、回答を読み上げます。**',
        items: [
          '**例：** 請求書を撮影して「合計金額と支払期限はいつですか？」と尋ねます。',
          '**パイプライン：** Whisperが質問を転写 → 画像がLLaVAまたはLlama 3.2 Visionに送信 → VLMが請求書テキストと構造を抽出 → LLMが質問 + VLM出力を結合 → Piperが回答を読み上げます。',
          '**プロンプト：** 「こちらが画像です：[VLM説明]。ユーザーが尋ねています：[転写]。画像の内容に基づいて質問に答えてください。」',
          '**最適なVLM：** 請求書/ドキュメントOCR精度にはMiniCPM-V 2.6またはLlama 3.2 Vision 11B。',
          '**プライバシーの価値：** 医療記録、法的文書、財務諸表 — データがマシンを離れることなく完全にローカルで処理されます。',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: 'ユースケース2：ビジュアルQ&Aアシスタント',
        content: '**カメラをオブジェクトやシーンに向け、口頭で質問し、音声回答を受け取ります。**',
        items: [
          '**アプリケーション：** 倉庫在庫、現場検査、視覚障害者向けアクセシビリティ。',
          '**実装：** カメラフレームを取得（OpenCV）、JPEGとして保存、Whisper転写とともにVLMに渡します。',
          '**最適なモデル：** 一般的なオブジェクト/シーン理解にはLLaVA 1.6 7BまたはLlama 3.2 Vision 11B。',
          '**レイテンシ：** RTX 4070で画像取得 + VLM処理 + LLM + TTSに3〜6秒。',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: 'ユースケース3：会議転写 + スライド分析',
        content: '**会議中継続してWhisperを実行して転写を構築しながら、定期的にスライドのスクリーンショットをVLM分析のために取得します。終了時に転写 + スライドコンテンツを組み合わせてローカルサマリーを作成 — クラウドゼロ、データ露出ゼロ。**',
        items: [
          '**STT：** 会議中にfaster-whisperをストリーミングモードで実行します。',
          '**ビジョン：** 新しいスライドが表示されるたびにスクリーンショットを取得し、LLaVAに説明を依頼します。',
          '**結合：** 会議終了時に転写 + スライド説明をLlama 3.3 8Bに渡してサマリーとアクションアイテムを作成します。',
          '**出力：** 音声読み上げサマリー（Piper TTS）+ ローカル保存テキストファイル。',
          '**GDPRの価値：** 会議処理全体がローカル。音声、転写、スライドはいかなるクラウドサービスにも送信されません。',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: 'ユースケース4：ローカルアクセシビリティツール',
        content: '**ローカルマルチモーダルパイプラインは、視覚または運動障害のあるユーザー向けのスクリーンリーダーおよび音声制御UIアシスタントとして機能できます — クラウドアクセシビリティサービスのプライバシーの懸念なしにオフラインで動作します。**',
        items: [
          '**スクリーンリーダー：** 2秒ごとにスクリーンショットを取得 → LLaVAが画面の内容を説明 → Piperが読み上げます。',
          '**音声ナビゲーション：** Whisperが音声コマンドを転写 → LLMが意図を解釈 → pyautoguiでキーボード/マウスアクションを実行。',
          '**プライバシーの利点：** 障害のあるユーザーはしばしば敏感なコンテキストでアクセシビリティツールを使用します。ローカルツールは画面コンテンツがサードパーティに送信されないことを保証します。',
          '**アクセシビリティ向けモデル選択：** 高速な画面説明にはMoondream 2（2 GB VRAM）。より豊かな説明にはLLaVA 7B（6 GB VRAM）。',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: 'ユースケース5：ローカルセキュリティカメラ分析',
        content: '**IPカメラからフレームを取得し、動作検出をローカルで実行し、動きが検出された場合にのみVLM分析をトリガーします — クラウドカメラサービスやサードパーティビデオストレージなしで。**',
        items: [
          '**フレーム取得：** OpenCVを使用してIPカメラからRTSP経由で5〜10秒ごとにフレームを取得します。',
          '**動作検出：** 連続するフレーム間の差分を計算します。動作しきい値以下のフレームをスキップします。',
          '**VLM分析：** 動きが検出されたら、フレームをVLMに送信します：「何が起きているか説明してください。人はいますか？」',
          '**アラート出力：** 人が検出されたら、ローカルデスクトップ通知とPiper TTS告知をトリガーします。',
          '**プライバシーの利点：** RingとNestはそれぞれAWSとGoogleサーバーにビデオを送信します。このセットアップはすべての映像をあなたのハードウェアに保持します。',
          '**速度向けの最適なVLM：** Moondream 2（フレームあたり~1秒、~2 GB VRAM）またはLLaVA 7B（~3秒、~6 GB VRAM）。',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: 'Pythonオーケストレーターの構築',
        content: '非同期Pythonオーケストレーターが入力を適切なモデルにルーティングし、出力を結合します。asyncioを使用することでSTTとビジョン処理を並列実行できます。',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": VISION_MODEL, "prompt": "Describe the content of this image in detail.", "images": [image_b64], "stream": False},
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    if image_description:
        prompt = f"The user asked (via voice): {transcript}\\n\\nThe image shows: {image_description}\\n\\nAnswer based on the image. Be concise."
    else:
        prompt = transcript
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL, json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}', shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    if image_path:
        transcript, image_desc = await asyncio.gather(transcribe_audio(audio), describe_image(image_path))
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None
    if not transcript or len(transcript) < 3:
        return
    response = await reason(transcript, image_desc)
    await speak(response)

async def main():
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: 'パフォーマンス最適化',
        content: 'フルマルチモーダルスタックで許容可能なレイテンシを実現するための主要な最適化：',
        snippetBlocks: [
          { type: 'one-sentence', text: '2つの最大の最適化：（1）音声と画像の両方が利用可能な場合にasyncioでSTTとVLMを並列実行する、（2）LLMが終わる前に音声を開始できるようにLLM出力をTTSに文ごとにストリーミングする。' },
          { type: 'plain-terms', text: '並列処理なし：STT（0.5秒）+ VLM（3秒）+ LLM（1秒）+ TTS（0.1秒）= 4.6秒。並列STT + VLMあり：max（0.5秒、3秒）+ LLM（1秒）+ TTS（0.1秒）= 4.1秒。ストリーミングTTS追加 → ユーザーは3.5秒で音声を聞きます。' },
        ],
        items: [
          '**並列STT + VLM：** `asyncio.gather(transcribe_audio(), describe_image())`を使用して両方を同時に実行します。0.3〜2秒を節約します。',
          '**モデルをウォームに保つ：** Ollamaはリクエスト間でモデルをVRAMに自動的に保持します。クエリ間で再ロードしないでください。',
          '**LLM → TTSストリーミング：** LLM出力の文境界を検出します。LLMが生成を続けている間に各完成した文をPiperに渡します。',
          '**VRAM管理：** VRAMが限られている場合、テキストLLMをロードする前に画像処理後にVLMをアンロードします。~2〜3秒追加されますが、8 GB GPUでフルスタックを処理できます。',
          '**Llama 3.2 VisionをVLM + LLMとして使用：** モデル切り替えのオーバーヘッドを完全に排除 — 1つのモデルがビジョンとテキスト推論の両方を処理します。',
          '**TTS最初の音声目標：** Piperはテキストを受信してから50〜100 ms以内に最初の音声を生成します。1文ずつストリーミングしてサブ秒の知覚レイテンシを実現します。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '制限と正直な評価',
        content: '**ローカルマルチモーダルパイプラインはGPT-5.5ではありません。** ギャップを明確にすることで、フラストレーションを防ぎ、制限を回避した設計ができます。',
        items: [
          '**モダリティの継ぎ目：** ビジョン出力はテキストLLMに渡される前にテキストにシリアライズされます。LLMは画像の特徴について直接推論できません — 画像のテキスト説明について推論します。',
          '**リアルタイムビデオなし：** ローカルVLMは単一フレームを処理し、継続的なビデオは処理しません。ビデオの場合は0.5〜2 FPSでフレームを抽出してシーケンシャルに処理します。',
          '**VLM品質のギャップ：** ローカルビジョンモデル（LLaVA 7B、Llama 3.2 Vision 11B）は複雑なインフォグラフィック、手書きテキスト、曖昧なシーンでGPT-5.5 Visionより劣っています。',
          '**VRAMプレッシャー：** 1つのGPUで3つのモデルを同時実行するには慎重なVRAM管理が必要です。12 GB GPUではモデルサイズを慎重に選択する必要があります。',
          '**レイテンシ vs クラウド：** クラウドマルチモーダル呼び出し（GPT-5.5）は1〜3秒かかります。ローカルパイプラインは同等のハードウェアで3〜8秒かかります。',
          '**一貫性：** ローカルモデルはクラウドモデルより変動しやすい出力品質を生成します。ビジョン説明とLLM応答の両方で時折ハルシネーションが発生することを想定してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Llama 3.2 Vision だけで音声、ビジョン、テキストを処理できますか？', a: 'はい。Llama 3.2 Vision 11B は画像とテキストを処理できます。これを単一モデルとして使用し、whisper.cpp を音声入力に、Piper を出力に追加します。VRAM を ~15 GB から ~8 GB に削減します。' },
          { q: 'ビジョンとテキスト LLM を一緒に実行すべきですか、それとも別々に？', a: '12+ GB VRAM がある場合は一緒に。8 GB の場合は別々（スワップ）— VLM をロード、説明を保存、アンロード、LLM をロード。別々は ~2–3 秒のレイテンシオーバーヘッドですが、VRAM を節約。' },
          { q: 'ビジョンモデルの選択：LLaVA 1.6、Qwen2-VL、Llama 3.2 Vision？', a: 'LLaVA 1.6：高速（~1秒）、十分な精度。Qwen2-VL：より良い画像理解（~1.5秒）。Llama 3.2 Vision：最高品質、ビジョン+テキスト推論を統合（~2秒）。' },
          { q: 'パイプラインはリアルタイム音声アシスタントに十分に高速ですか？', a: '最適化されていれば はい。whisper ~1–2秒、LLM ~1–2秒、TTS ~0.1秒 = 計 ~2–4秒。クラウド API より高速ですが、人間の会話ほど同期的ではありません。非同期アシスタントに最適。' },
          { q: 'RTX 3060 12GB でパイプラインを実行できますか？', a: '4つ全て同時実行は不可（~15 GB 必要）。解決策：Llama 3.2 Vision 11B（8 GB）のみ、または INT4 量子化（~10 GB）。入力タイプに応じてモデルをスワップ。' },
          { q: '医療・法的用途で GDPR 準拠ですか？', a: '設計上準拠 — ゼロネットワークトラフィック。Wireshark で検証。ストレージに注意 — 会話履歴やファイルを保存する場合は保持期間（GDPR 記事 5）を守る。' },
          { q: 'パイプラインにウェブ検索を追加できますか？', a: 'はい。オーケストレーターとテキスト LLM の間に検索ステップを追加。DuckDuckGo API またはローカル RAG を使用。0.5–2 秒のレイテンシを追加するが、時事問題に対応可能。' },
          { q: '24/7 で消費する電力量は？', a: 'アイドル時：~50–80 W（GPU）、~15–25 W（Mac M5 Pro）。処理中：~150–300 W（GPU）、~30–60 W（Mac）。コスト：月 $5–15（Mac）または $15–35（デスクトップ）。' },
          { q: '外部 GPU なしのラップトップで実行できますか？', a: 'CPU のみ：非常に遅い（~30+ 秒レイテンシ）。統合 GPU（Metal、Arc）：良好だが理想的ではない。推奨：外部 GPU またはクラウド。' },
          { q: '専門 VLM vs 汎用モデル？', a: '専門（LLaVA）：より高速、より軽量。汎用（Llama 3.2 Vision）：複雑なシーン向け。実践的：専門 + 推論 LLM が大規模汎用モデル単体より優れた結果。' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          '[Ollama](https://ollama.ai) — ローカル LLM オーケストレーション、ビジョンモデルとチャット API をサポート。',
          '[whisper.cpp on GitHub](https://github.com/ggerganov/whisper.cpp) — 高速 CPU ベース音声認識、Metal/CUDA アクセラレーション。',
          '[LLaVA on Hugging Face](https://huggingface.co/liuhaotian/llava-v1.6-7b-hf) — ビジョン言語モデル、オープンソース。',
          '[Llama 3.2 Vision](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision) — マルチモーダル LLM、11B。',
          '[Piper TTS on GitHub](https://github.com/rhasspy/piper) — ローカル テキスト音声変換、高速。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声認識2026：Whisper.cpp vs faster-whisper](/ja/power-local-llm/local-whisper-stt-comparison-2026) — STTコンポーネントの詳細解説。',
          '[ローカルビジョンモデル2026：LLaVA、Llama 3.2 Vision、Ollama](/ja/power-local-llm/local-vision-models-llava-ollama-2026) — ビジョンコンポーネントの詳細解説。',
          '[ローカルTTSと音声クローニング2026](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTSコンポーネントの詳細解説。',
          '[2026年：完全オフライン音声アシスタントの構築](/ja/power-local-llm/build-local-voice-assistant-2026) — 音声のみのバージョン（ビジョンなし、よりシンプル）。',
          '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) — マルチモデルパイプライン向けハードウェア選択。',
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
    title: '本地多模态AI流水线2026：离线整合语音、视觉与文本模型',
    seoTitle: '本地多模态AI流水线2026：语音+视觉+文本模型离线整合',
    intro:
      '本地多模态AI流水线将多个专业模型组合在一起——whisper.cpp用于语音输入，LLaVA或Llama 3.2 Vision用于图像理解，Ollama LLM用于文本推理，Piper TTS用于语音输出——整合成一个100%离线运行的连贯系统。这是GPT-5.5多模态能力的本地替代方案：没有单个模型能理解一切，但编排器将每种输入类型路由到正确的模型并组合输出结果。',
    metaDescription:
      '2026年构建本地多模态AI流水线：语音输入用whisper.cpp，视觉用LLaVA 1.6，文本推理用Ollama，语音输出用Piper TTS。包含架构设计、硬件配置层级、使用场景和Python编排器代码。完全离线运行。',
    twitterDescription:
      '本地多模态AI 2026：将Whisper STT + LLaVA视觉 + Ollama LLM + Piper TTS整合成一个离线流水线。架构指南、硬件层级和Python代码。',
    readTime: '阅读约18分钟',
    educationalLevel: 'Advanced',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**本地多模态流水线由四个独立模型协同编排而成 — 不是像GPT-5.5那样的单一模型。** whisper.cpp处理语音，VLM（LLaVA或Llama 3.2 Vision）处理图像，LLM处理文本推理，Piper处理语音输出。编排器将输入路由到正确的模型并组合输出。',
          '**Llama 3.2 Vision 11B可以用一个模型替代VLM和文本LLM两者。** 它同时接受文本和图像，在一次推理中处理描述和推理 — 将VRAM从~15 GB（独立模型）降至~8 GB（单个Llama 3.2 Vision 11B）。',
          '**完整堆栈的最低硬件：RTX 4070 12 GB或Apple M5 Pro 36 GB。** RTX 3060 12 GB可以运行受限版本（用Phi-4替代Llama 3.3 8B，或顺序加载模型）— 可用但较慢。',
          '**五个实用场景证明复杂度是值得的：** 语音控制文档分析、带语音交互的视觉问答、会议转录结合幻灯片分析、本地屏幕阅读器无障碍工具以及本地安全摄像头分析。',
          '**异步编排对于可接受的性能至关重要。** 当音频和图像输入都可用时，STT和视觉可以并行运行 — 文本LLM等待两者完成，然后生成组合响应。',
          '**将LLM输出流式传输到TTS可将感知延迟降低0.3〜0.7秒。** 在LLM还在生成剩余响应时，从第一个完整句子开始生成音频。',
          '**这不是GPT-5.5。** 独立模型会产生"缝隙" — 视觉模型的描述作为文本传递给LLM，失去了部分跨模态推理能力。复杂多模态任务的质量低于前沿闭源模型，但对结构化文档和清晰照片任务已经足够。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**完整堆栈总VRAM：** ~15 GB（Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB）。Piper在CPU上运行。',
          '**简化堆栈（Llama 3.2 Vision 11B）：** ~8 GB VRAM — 一个模型同时处理视觉和文本推理。',
          '**语音延迟（Whisper small，RTX 4070）：** STT ~200〜500 ms。LLM首个token 500〜1500 ms。Piper TTS 100 ms。',
          '**图像处理延迟（LLaVA 7B，RTX 4070）：** 根据分辨率和提示词，每张图像~2〜5秒。',
          '**不支持实时视频：** VLM处理单个帧，而非连续视频流。对于视频，以1 FPS提取帧并逐帧处理。',
          '**VLM + LLM使用同一Ollama实例：** Ollama可同时将Llama 3.2 Vision作为视觉模型和文本模型提供服务，节省VRAM。',
          '**所有组件均为MIT或Apache 2.0许可**（whisper.cpp MIT、LLaVA MIT、Llama 3.3 8B Llama 3社区许可、Piper MIT）。',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: '什么是多模态AI流水线？',
        content: '多模态AI系统接受多种输入类型（语音、图像、文本）并产生多种输出类型（文本、语音）。云端等价物是GPT-5.5 — 一个单一模型，可接受任意组合的音频、图像和文本。',
        items: [
          '**云端方式（GPT-5.5）：** 一个在所有模态上同时训练的超大模型。跨模态推理在训练期间学习 — 模型可以原生推理图像内容与语音查询之间的关系。',
          '**本地方式（本指南）：** 为每种模态提供独立的专用模型，由编排器连接。更模块化，运行成本更低，但会产生"缝隙" — 视觉模型输出在传递给LLM之前被序列化为文本。',
          '**为什么选择本地构建：** 隐私（医学图像、专有文档、机密截图）、成本（每次查询费用为零）、离线能力（模型下载后无需联网）、可定制性（可替换任意组件）。',
          '**模块化优势：** 您可以独立升级任意一个组件。当更好的本地STT模型发布时，只替换STT层。',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: '成本：本地流水线 vs 云端API（每月）',
        content: '在中等使用量（每天100+次查询）下，本地多模态流水线可在3〜6个月内收回成本。',
        snippetBlocks: [
          { type: 'one-sentence', text: '本地多模态流水线在一次性硬件投资（600〜3,500美元）后，每月API费用为0美元，相对于GPT-5.5 API成本（135〜225美元/月），根据查询量在3〜18个月内达到盈亏平衡。' },
        ],
        columns: ['用途', 'GPT-5.5 API', 'Google Cloud', '本地'],
        rows: [
          { '用途': '每天100次语音查询', 'GPT-5.5 API': '$90〜150/月', 'Google Cloud': '$60〜120/月', '本地': '$0' },
          { '用途': '每天50次图像分析', 'GPT-5.5 API': '$45〜75/月', 'Google Cloud': '$30〜60/月', '本地': '$0' },
          { '用途': '综合使用（典型）', 'GPT-5.5 API': '$135〜225/月', 'Google Cloud': '$90〜180/月', '本地': '$0' },
          { '用途': '硬件（一次性）', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', '本地': '$600〜3,500' },
          { '用途': '盈亏平衡点', 'GPT-5.5 API': '—', 'Google Cloud': '—', '本地': '3〜18个月' },
        ],
        note: '本地流水线在中等使用量（每天100+次查询）下3〜6个月收回成本。在轻度使用量（每天10次查询）下，盈亏平衡点延长至12〜18个月。',
      },
      architecture: {
        id: 'architecture',
        title: '架构概述',
        content: '本地多模态流水线使用路由器-编排器模式：输入在边界处进行类型分类，路由到相应模型，输出由编排器组合后再生成最终响应。',
        items: [
          '**输入类型：** 麦克风音频（语音）、摄像头或文件图像（视觉）、键盘文本（文本）。',
          '**路由逻辑：** 在边界检测输入类型。音频 → STT模型。图像 → VLM。文本 → 直接到LLM。如果音频和图像同时到达，则并行处理并组合。',
          '**模型注册表：** 每种输入类型映射到一个处理函数，该函数调用相应模型并返回文本描述/转录。',
          '**编排器：** 收集所有模型输出，将其组合成文本LLM的单一提示词，获取LLM响应，并将其路由到TTS用于语音输出或显示为屏幕文本。',
          '**输出类型：** 语音响应（Piper TTS）、屏幕上的文本，或用于与其他系统集成的结构化数据（JSON）。',
          '**并行处理：** STT和VLM可以同时处理 — 关于图像的音频查询可以同时处理两者，与顺序处理相比将总延迟降低40〜60%。',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: '组件堆栈',
        content: '包含VRAM需求和每个组件角色的完整堆栈。',
        snippetBlocks: [
          { type: 'one-sentence', text: '完整的本地多模态堆栈使用~15 GB VRAM：Whisper large-v3（3 GB）+ LLaVA 1.6 7B（6 GB）+ Llama 3.3 8B（6 GB）；Piper TTS在CPU上运行，无VRAM成本。' },
          { type: 'plain-terms', text: '通过将Llama 3.2 Vision 11B同时用作视觉模型和文本模型，可以将VRAM削减到8 GB — 它用一个模型处理照片和对话。' },
        ],
        columns: ['层级', '工具', '模型', 'VRAM', '作用'],
        rows: [
          { '层级': 'STT', '工具': 'whisper.cpp', '模型': 'Whisper large-v3', 'VRAM': '~3 GB', '作用': '语音 → 文本转录' },
          { '层级': '视觉', '工具': 'Ollama', '模型': 'LLaVA 1.6 7B', 'VRAM': '~6 GB', '作用': '图像 → 文本描述' },
          { '层级': '推理', '工具': 'Ollama', '模型': 'Llama 3.3 8B Q4', 'VRAM': '~6 GB', '作用': '文本 → 文本响应' },
          { '层级': 'TTS', '工具': 'Piper', '模型': 'en_US-lessac-medium', 'VRAM': '仅CPU', '作用': '文本 → 语音输出' },
          { '层级': '合计（独立模型）', '工具': '', '模型': '', 'VRAM': '~15 GB', '作用': '完整流水线' },
        ],
        callouts: [
          { type: 'tip', text: '使用Llama 3.2 Vision 11B替代独立的LLaVA + Llama 3.3 8B，将VRAM降至~8 GB。' },
          { type: 'tip', text: '备选VLM：Qwen2-VL 7B（~6 GB VRAM）— 在多语言OCR和文档理解方面强于LLaVA。' },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: '多模态硬件层级',
        content: '五种硬件配置，按能力和VRAM排序。',
        columns: ['层级', 'GPU', 'RAM', '可运行', '延迟（语音查询+图像）'],
        rows: [
          { '层级': '入门级', 'GPU': 'RTX 3060 12 GB', 'RAM': '16 GB', '可运行': 'STT + Phi-4（视觉单独，顺序）', '延迟（语音查询+图像）': '5〜10秒' },
          { '层级': '中端', 'GPU': 'RTX 4070 12 GB', 'RAM': '32 GB', '可运行': '7B模型完整堆栈（LLaVA 7B + Llama 3.3 8B，紧凑配置）', '延迟（语音查询+图像）': '3〜6秒' },
          { '层级': '高端', 'GPU': 'RTX 4090 24 GB', 'RAM': '64 GB', '可运行': '13B VLM + 8B LLM同时运行的完整堆栈', '延迟（语音查询+图像）': '2〜4秒' },
          { '层级': 'Apple中端', 'GPU': 'M5 Pro 36 GB', 'RAM': '36 GB统一内存', '可运行': '通过Metal运行8B模型完整堆栈（推荐）', '延迟（语音查询+图像）': '2〜4秒' },
          { '层级': 'Apple高端', 'GPU': 'M5 Max 128 GB', 'RAM': '128 GB统一内存', '可运行': '70B模型完整堆栈 — 最佳本地质量', '延迟（语音查询+图像）': '1〜3秒' },
        ],
        note: '延迟从语音查询结束到TTS播放开始测量，如果有图像则包含图像处理时间。',
        callouts: [
          { type: 'tip', text: '搭载128 GB统一内存的M5 Max是终极本地多模态平台。它可以同时运行Whisper large-v3（3 GB）+ Llama 3.2 Vision 90B（~64 GB）+ Piper TTS。' },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: '用例1：语音控制文档分析器',
        content: '**对文档图像提出问题；流水线转录您的语音，视觉处理文档，并大声朗读答案。**',
        items: [
          '**示例：** 拍摄发票并说"应付总金额和付款截止日期是什么？"',
          '**流水线：** Whisper转录问题 → 图像发送至LLaVA或Llama 3.2 Vision → VLM提取发票文本和结构 → LLM组合问题 + VLM输出 → Piper大声朗读答案。',
          '**提示词：** "这是一张图像：[VLM描述]。用户询问：[转录]。根据图像内容回答问题。"',
          '**最佳VLM：** MiniCPM-V 2.6或Llama 3.2 Vision 11B用于发票/文档OCR准确性。',
          '**隐私价值：** 医疗记录、法律文件、财务报表 — 完全在本地处理，无数据离开设备。',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: '用例2：视觉问答助手',
        content: '**将摄像头对准物体或场景，口头提问，接收语音回答。**',
        items: [
          '**应用场景：** 仓库库存管理、现场检查、视觉障碍用户的无障碍服务。',
          '**实现方式：** 捕获摄像头帧（OpenCV），保存为JPEG，与Whisper转录一起传递给VLM。',
          '**最佳模型：** LLaVA 1.6 7B或Llama 3.2 Vision 11B用于通用物体/场景理解。',
          '**延迟：** RTX 4070上图像捕获 + VLM处理 + LLM + TTS需要3〜6秒。',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: '用例3：会议转录 + 幻灯片分析',
        content: '**在会议期间持续运行Whisper以构建转录，同时定期捕获幻灯片截图进行VLM分析。结束时，将转录 + 幻灯片内容组合生成本地摘要 — 零云端，零数据暴露。**',
        items: [
          '**STT：** 在会议期间以流式模式运行faster-whisper。',
          '**视觉：** 每当出现新幻灯片时，捕获截图并传递给LLaVA进行描述。',
          '**组合：** 会议结束时，将转录 + 幻灯片描述传递给Llama 3.3 8B生成摘要和行动项。',
          '**输出：** 语音朗读摘要（Piper TTS）+ 本地保存的文本文件。',
          '**GDPR价值：** 整个会议处理在本地进行。不向任何云服务发送音频、转录或幻灯片。',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: '用例4：本地无障碍工具',
        content: '**本地多模态流水线可以作为屏幕阅读器和语音控制UI助手，为视觉或运动障碍用户服务 — 离线运行，无云端无障碍服务的隐私顾虑。**',
        items: [
          '**屏幕阅读器：** 每2秒捕获截图 → LLaVA描述屏幕内容 → Piper大声朗读。',
          '**语音导航：** Whisper转录语音命令 → LLM解读意图 → 通过pyautogui执行键盘/鼠标操作。',
          '**隐私优势：** 残障用户通常在敏感场景中使用无障碍工具。本地工具确保屏幕内容不传输给第三方。',
          '**无障碍模型选择：** Moondream 2用于快速屏幕描述（2 GB VRAM）。LLaVA 7B用于更丰富的描述（6 GB VRAM）。',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: '用例5：本地安全摄像头分析',
        content: '**从IP摄像头捕获帧，在本地运行动作检测，仅在检测到移动时触发VLM分析 — 无需云端摄像头服务或第三方视频存储。**',
        items: [
          '**帧捕获：** 使用OpenCV通过RTSP每5〜10秒从IP摄像头捕获一帧。',
          '**动作检测：** 计算连续帧之间的差异。跳过低于动作阈值的帧。',
          '**VLM分析：** 检测到动作时，将帧发送给VLM："描述正在发生的事情。有人吗？"',
          '**告警输出：** 如果检测到人，触发本地桌面通知和Piper TTS播报。',
          '**隐私优势：** Ring和Nest分别将视频发送到AWS和Google服务器。此设置将所有录像保存在您的硬件上。',
          '**速度最佳VLM：** Moondream 2（每帧~1秒，~2 GB VRAM）或LLaVA 7B（~3秒，~6 GB VRAM）。',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: '构建Python编排器',
        content: '异步Python编排器将输入路由到正确的模型并组合输出。使用asyncio允许STT和视觉处理并行运行。',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": VISION_MODEL, "prompt": "Describe the content of this image in detail.", "images": [image_b64], "stream": False},
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    if image_description:
        prompt = f"The user asked (via voice): {transcript}\\n\\nThe image shows: {image_description}\\n\\nAnswer based on the image. Be concise."
    else:
        prompt = transcript
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL, json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}', shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    if image_path:
        transcript, image_desc = await asyncio.gather(transcribe_audio(audio), describe_image(image_path))
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None
    if not transcript or len(transcript) < 3:
        return
    response = await reason(transcript, image_desc)
    await speak(response)

async def main():
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: '性能优化',
        content: '在完整多模态堆栈上实现可接受延迟的关键优化：',
        snippetBlocks: [
          { type: 'one-sentence', text: '两个最大优化：（1）当音频和图像都可用时，使用asyncio并行运行STT和VLM；（2）将LLM输出逐句流式传输到TTS，使音频在LLM完成前就开始播放。' },
          { type: 'plain-terms', text: '无并行处理：STT（0.5秒）+ VLM（3秒）+ LLM（1秒）+ TTS（0.1秒）= 4.6秒。并行STT + VLM：max（0.5秒，3秒）+ LLM（1秒）+ TTS（0.1秒）= 4.1秒。添加流式TTS → 用户在3.5秒时听到音频。' },
        ],
        items: [
          '**并行STT + VLM：** 使用`asyncio.gather(transcribe_audio(), describe_image())`同时运行两者。节省0.3〜2秒。',
          '**保持模型预热：** Ollama在请求之间自动将模型保持在VRAM中。不要在查询之间重新加载。',
          '**流式LLM → TTS：** 检测LLM输出中的句子边界。在LLM继续生成时将每个完整句子传递给Piper。',
          '**VRAM管理：** 如果VRAM紧张，在加载文本LLM之前卸载图像处理后的VLM。增加~2〜3秒但允许8 GB GPU处理完整堆栈。',
          '**使用Llama 3.2 Vision作为组合VLM + LLM：** 完全消除模型切换开销 — 一个模型处理视觉和文本推理两者。',
          '**TTS首个音频目标：** Piper在收到文本后50〜100 ms内生成首个音频。每次流式传输一个句子以实现亚秒级感知延迟。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '局限性与诚实评估',
        content: '**本地多模态流水线不是GPT-5.5。** 清楚了解差距可以防止挫败感，并帮助围绕局限性进行设计。',
        items: [
          '**模态缝隙：** 视觉输出在传递给文本LLM之前被序列化为文本。LLM无法直接推理图像特征 — 它推理的是图像的文本描述。',
          '**不支持实时视频：** 本地VLM处理单个帧，而非连续视频。对于视频，以0.5〜2 FPS提取帧并顺序处理。',
          '**VLM质量差距：** 本地视觉模型（LLaVA 7B、Llama 3.2 Vision 11B）在复杂信息图、手写文本和模糊场景上落后于GPT-5.5 Vision。',
          '**VRAM压力：** 在单个GPU上同时运行三个模型需要仔细的VRAM管理。在12 GB GPU上，模型大小必须仔细选择。',
          '**延迟 vs 云端：** 云端多模态调用（GPT-5.5）需要1〜3秒。本地流水线在相当硬件上需要3〜8秒。',
          '**一致性：** 本地模型产生的输出质量比云端模型更不稳定。视觉描述和LLM响应中都会出现偶发幻觉。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '我能仅用 Llama 3.2 Vision 处理语音、视觉和文本吗？', a: '可以。Llama 3.2 Vision 11B 可以处理图像和文本。将其用作单一模型，为语音输入添加 whisper.cpp，为输出添加 Piper。将 VRAM 从 ~15 GB 减少到 ~8 GB。缺点：没有专门的 VLM 进行复杂图像分析。' },
          { q: '我应该一起运行视觉和文本 LLM，还是分别运行？', a: '如果有 12+ GB VRAM，一起运行。如果有 8 GB，分别运行（交换）— 加载 VLM、存储描述、卸载、加载 LLM。分别运行会增加 ~2–3 秒延迟，但节省 VRAM。对于交互式应用，一起更好。' },
          { q: '选择哪个视觉模型：LLaVA 1.6、Qwen2-VL 还是 Llama 3.2 Vision？', a: 'LLaVA 1.6：快速（~1秒），精度足够。Qwen2-VL：更好的图像理解（~1.5秒）。Llama 3.2 Vision：最高质量，整合视觉+文本推理（~2秒）。速度优先：LLaVA。质量优先：Llama 3.2 Vision。' },
          { q: '流水线对实时语音助手足够快吗？', a: '如果优化得当，可以。whisper ~1–2秒，LLM ~1–2秒，TTS ~0.1秒 = 总计 ~2–4秒。比许多云 API 快，但不像人类对话那样同步。对异步助手完美。' },
          { q: '我能在 RTX 3060 12GB 上运行流水线吗？', a: '不能同时运行全部四个（需要 ~15 GB）。解决方案：仅使用 Llama 3.2 Vision 11B（8 GB）或量化为 INT4（~10 GB）。或根据输入类型交换模型。' },
          { q: '用于医疗或法律用途符合 GDPR 吗？', a: '设计上符合 — 零网络流量。用 Wireshark 验证。注意存储 — 如果保存对话历史或文件，遵守保留期限（GDPR 第 5 条）。' },
          { q: '我能给流水线添加网络搜索吗？', a: '可以。在编排器和文本 LLM 之间添加搜索步骤。使用 DuckDuckGo API 或本地 RAG。增加 0.5–2 秒延迟，但支持时事问题。' },
          { q: '24/7 运行消耗多少电力？', a: '空闲时：~50–80 W（GPU）、~15–25 W（Mac M5 Pro）。处理中：~150–300 W（GPU）、~30–60 W（Mac）。成本：月 $5–15（Mac）或 $15–35（桌面）。' },
          { q: '我能在没有外部 GPU 的笔记本上运行它吗？', a: '仅 CPU：非常慢（~30+ 秒延迟）。集成 GPU（Metal、Arc）：更好但非理想。建议：外部 GPU 或云替代方案。' },
          { q: '专门 VLM vs 通用模型？', a: '专门（LLaVA）：更快、更轻。通用（Llama 3.2 Vision）：复杂场景更好。实际上：专门 + 推理 LLM 通常比大型通用模型单独产生更好结果。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '资源',
        items: [
          '[Ollama](https://ollama.ai) — 本地 LLM 编排，支持视觉模型和聊天 API。',
          '[whisper.cpp on GitHub](https://github.com/ggerganov/whisper.cpp) — 快速 CPU 基础语音识别，Metal/CUDA 加速。',
          '[LLaVA on Hugging Face](https://huggingface.co/liuhaotian/llava-v1.6-7b-hf) — 视觉语言模型，开源。',
          '[Llama 3.2 Vision](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision) — 多模态 LLM，11B。',
          '[Piper TTS on GitHub](https://github.com/rhasspy/piper) — 本地文本转语音，快速。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音识别2026：Whisper.cpp vs faster-whisper](/zh/power-local-llm/local-whisper-stt-comparison-2026) — STT组件深度解析。',
          '[本地视觉模型2026：LLaVA、Llama 3.2 Vision和Ollama](/zh/power-local-llm/local-vision-models-llava-ollama-2026) — 视觉组件深度解析。',
          '[本地TTS与语音克隆2026](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS组件深度解析。',
          '[2026年构建完全离线语音助手](/zh/power-local-llm/build-local-voice-assistant-2026) — 纯语音版本（更简单，无视觉）。',
          '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) — 多模型流水线的硬件选择。',
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
    title: 'Pipeline multimodal de IA local 2026: combina voz, visión y texto sin conexión',
    seoTitle: 'Pipeline multimodal local 2026: voz + visión + texto',
    intro:
      'Un pipeline multimodal de IA local combina modelos especializados independientes para cada modalidad — whisper.cpp para la entrada de voz, LLaVA o Llama 3.2 Vision para la comprensión de imágenes, un LLM de Ollama para el razonamiento textual y Piper TTS para la salida de voz — orquestados en un sistema coherente que funciona 100 % sin conexión. Este es el equivalente local de las capacidades multimodales de GPT-5.5: ningún modelo individual lo entiende todo, pero el orquestador dirige cada tipo de entrada al modelo correcto y combina las salidas. Esta guía muestra cómo construir un pipeline multimodal local con estos componentes de código abierto — cubriendo la arquitectura, el stack de componentes, los niveles de hardware, cinco casos de uso prácticos y un orquestador asíncrono en Python que procesa entradas de voz y visión en paralelo.',
    metaDescription:
      'Ejecuta IA de voz, visión y texto en local en 2026 con whisper.cpp, LLaVA 1.6, Ollama y Piper TTS. Orquestador Python completo, sin nube ni claves de API.',
    twitterDescription:
      'IA multimodal local en 2026: combina Whisper STT + visión LLaVA + LLM Ollama + Piper TTS en un pipeline sin conexión. Guía de arquitectura, niveles de hardware y código Python.',
    readTime: '16 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'pipeline multimodal de IA local',
    targetKeywords: [
      'pipeline multimodal IA local 2026',
      'whisper llava ollama piper',
      'IA multimodal sin conexión',
      'voz visión texto IA local',
      'alternativa local a GPT-5.5',
      'construir IA multimodal offline',
      'pipeline voz visión local',
      'integración llava whisper',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'LLaVA 1.6 7B',
      'Qwen2-VL 7B',
      'Llama 3.2 Vision 11B',
      'Llama 3.3 8B',
      'Moondream 2',
      'Piper TTS',
      'Coqui TTS',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Pro 36 GB',
      'Apple M5 Max 128 GB',
    ],
    leadAnswerBlock:
      '**Un pipeline multimodal de IA local en 2026 requiere como mínimo 12 GB de VRAM en la GPU para ejecutar STT + visión + LLM + TTS simultáneamente.** La configuración mínima viable es una RTX 4070 (12 GB) o Mac M5 Pro (36 GB de memoria unificada), ejecutando whisper.cpp para entrada de voz, LLaVA 1.6 7B para visión, Llama 3.3 8B para razonamiento textual y Piper para salida de voz. En una RTX 3060 12 GB puedes ejecutar el stack con un LLM más pequeño (Phi-4) sin visión — o intercambiar modelos en/fuera de la VRAM según sea necesario. La decisión arquitectónica clave es si compartir la VRAM entre el modelo de visión y el LLM (requiere 12+ GB) o ejecutarlos secuencialmente en una GPU más pequeña.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo construyes un pipeline multimodal de IA local con voz, visión y texto en 2026?',
        answer:
          'Combina cuatro modelos especializados: whisper.cpp (voz → texto), un modelo de visión-lenguaje como LLaVA 1.6 o Llama 3.2 Vision (imagen → descripción de texto), un LLM de Ollama como Llama 3.3 8B (texto → razonamiento textual) y Piper TTS (texto → voz). Un orquestador asíncrono en Python detecta el tipo de entrada y lo enruta al modelo correcto, combinando las salidas en una respuesta coherente. VRAM mínima: 12 GB para una configuración de VRAM compartida; 8 GB si intercambias modelos.',
        bullets: [
          'Entrada de voz: whisper.cpp (Metal en Mac, CUDA en NVIDIA) → transcripción de texto.',
          'Entrada de imagen: LLaVA 1.6 7B o Llama 3.2 Vision 11B vía Ollama → descripción textual.',
          'Razonamiento textual: Ollama + Llama 3.3 8B → texto de respuesta.',
          'Salida de voz: Piper TTS (CPU, ~0,1 seg de latencia) → reproducción de audio.',
          'Hardware mínimo: RTX 4070 12 GB o M5 Pro 36 GB para el stack completo simultáneo.',
          'Visión + LLM pueden compartir una instancia de Ollama (Llama 3.2 Vision maneja ambos).',
          'VRAM total para el stack completo: ~15 GB (whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB + Piper CPU).',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué es un pipeline multimodal?', anchor: '#what-is-multimodal' },
      { label: 'Costo: pipeline local vs APIs en la nube', anchor: '#cost-comparison' },
      { label: 'Visión general de la arquitectura', anchor: '#architecture' },
      { label: 'El stack de componentes', anchor: '#component-stack' },
      { label: 'Niveles de hardware', anchor: '#hardware-tiers' },
      { label: 'Caso de uso 1: Analizador de documentos por voz', anchor: '#use-case-1' },
      { label: 'Caso de uso 2: Asistente de Q&A visual', anchor: '#use-case-2' },
      { label: 'Caso de uso 3: Transcripción de reunión + análisis de diapositivas', anchor: '#use-case-3' },
      { label: 'Caso de uso 4: Herramienta de accesibilidad local', anchor: '#use-case-4' },
      { label: 'Caso de uso 5: Análisis local de cámara de seguridad', anchor: '#use-case-5' },
      { label: 'Construyendo el orquestador Python', anchor: '#orchestrator' },
      { label: 'Optimización del rendimiento', anchor: '#performance' },
      { label: 'Limitaciones y evaluación honesta', anchor: '#limitations' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Un pipeline multimodal local son cuatro modelos orquestados por separado — no un único modelo como GPT-5.5.** whisper.cpp gestiona la voz, un VLM (LLaVA o Llama 3.2 Vision) gestiona las imágenes, un LLM gestiona el razonamiento textual y Piper gestiona la salida de voz. El orquestador dirige las entradas al modelo correcto y combina las salidas.',
          '**Llama 3.2 Vision 11B puede reemplazar tanto el VLM como el LLM de texto en un solo modelo.** Acepta texto e imágenes simultáneamente y maneja tanto la descripción como el razonamiento en un único paso — reduciendo la VRAM de ~15 GB (modelos separados) a ~8 GB (Llama 3.2 Vision 11B único).',
          '**Hardware mínimo para el stack completo: RTX 4070 12 GB o Apple M5 Pro 36 GB.** Una RTX 3060 12 GB puede ejecutar una versión limitada (Phi-4 en lugar de Llama 3.3 8B, o carga secuencial de modelos) — funcional pero más lenta.',
          '**Cinco casos de uso prácticos justifican la complejidad:** análisis de documentos por voz, Q&A visual con interacción de voz, transcripción de reuniones combinada con análisis de diapositivas, herramientas de accesibilidad con lector de pantalla local y análisis local de cámara de seguridad.',
          '**La orquestación asíncrona es esencial para un rendimiento aceptable.** STT y visión pueden ejecutarse en paralelo cuando hay entradas de audio e imagen disponibles — el LLM de texto espera a ambos y luego genera una respuesta combinada.',
          '**Transmitir la salida del LLM al TTS reduce la latencia percibida en 0,3–0,7 segundos.** Comienza a generar audio desde la primera oración completada mientras el LLM todavía escribe el resto de la respuesta.',
          '**Esto no es GPT-5.5.** Los modelos separados producen "costuras" — la descripción del modelo de visión se pasa como texto al LLM, perdiendo algo de razonamiento cross-modal. La calidad en tareas multimodales complejas está por debajo de los modelos cerrados de frontera, pero es adecuada para documentos estructurados y tareas con fotos claras.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**VRAM total para el stack completo:** ~15 GB (Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB). Piper corre en CPU.',
          '**Stack simplificado (Llama 3.2 Vision 11B):** ~8 GB VRAM — maneja visión y razonamiento textual en un solo modelo.',
          '**Latencia de voz (Whisper small, RTX 4070):** STT ~200–500 ms. Primer token LLM 500–1500 ms. Piper TTS 100 ms.',
          '**Latencia de procesamiento de imagen (LLaVA 7B, RTX 4070):** ~2–5 segundos por imagen dependiendo de la resolución y el prompt.',
          '**Sin video en tiempo real:** Los VLM procesan frames individuales, no flujos de video continuos. Para video, extrae frames a 1 FPS y procesa cada uno.',
          '**Misma instancia de Ollama para VLM + LLM:** Ollama puede servir Llama 3.2 Vision como modelo de visión y modelo de texto a la vez, ahorrando VRAM.',
          '**Todos los componentes con licencia MIT o Apache 2.0** (whisper.cpp MIT, LLaVA MIT, Llama 3.3 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: '¿Qué es un pipeline multimodal de IA?',
        content:
          'Un sistema de IA multimodal acepta múltiples tipos de entrada (voz, imágenes, texto) y produce múltiples tipos de salida (texto, voz). El equivalente en la nube es GPT-5.5 — un único modelo que acepta audio, imágenes y texto en cualquier combinación.',
        items: [
          '**Enfoque en la nube (GPT-5.5):** Un modelo gigante entrenado en todas las modalidades simultáneamente. El razonamiento cross-modal se aprende durante el entrenamiento — el modelo puede razonar nativamente sobre la relación entre el contenido de la imagen y las consultas de voz.',
          '**Enfoque local (esta guía):** Modelos especializados independientes para cada modalidad, conectados por un orquestador. Más modular y económico de ejecutar, pero produce "costuras" — la salida del modelo de visión se serializa a texto antes de pasarse al LLM.',
          '**Por qué construir localmente:** Privacidad (imágenes médicas, documentos propietarios, capturas de pantalla confidenciales), costo (cero tarifas por consulta), capacidad sin conexión (no se requiere internet después de descargar el modelo), personalización (intercambia cualquier componente).',
          '**Ventaja modular:** Puedes actualizar cualquier componente de forma independiente. Cuando aparezca un mejor modelo STT local, reemplaza solo la capa STT. Cuando aparezca un mejor VLM, intercambia solo el modelo de visión — el resto del pipeline no cambia.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Costo: pipeline local vs APIs en la nube (mensual)',
        content:
          'Con uso moderado (más de 100 consultas al día), un pipeline multimodal local se amortiza en 3–6 meses. Con uso ligero (10 consultas al día), el punto de equilibrio se extiende a 12–18 meses.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un pipeline multimodal local cuesta $0/mes en tarifas de API tras la inversión única en hardware ($600–3.500), con punto de equilibrio frente a los costos de la API de GPT-5.5 ($135–225/mes) en 3–18 meses según el volumen de consultas.',
          },
        ],
        columns: ['Uso', 'GPT-5.5 API', 'Google Cloud', 'Local'],
        rows: [
          { 'Uso': '100 consultas de voz/día', 'GPT-5.5 API': '$90–150/mes', 'Google Cloud': '$60–120/mes', 'Local': '$0' },
          { 'Uso': '50 análisis de imagen/día', 'GPT-5.5 API': '$45–75/mes', 'Google Cloud': '$30–60/mes', 'Local': '$0' },
          { 'Uso': 'Combinado (típico)', 'GPT-5.5 API': '$135–225/mes', 'Google Cloud': '$90–180/mes', 'Local': '$0' },
          { 'Uso': 'Hardware (una sola vez)', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', 'Local': '$600–3.500' },
          { 'Uso': 'Punto de equilibrio', 'GPT-5.5 API': '—', 'Google Cloud': '—', 'Local': '3–18 meses' },
        ],
        note: 'El pipeline local se amortiza en 3–6 meses con uso moderado (más de 100 consultas al día). Con uso ligero (10 consultas al día), el punto de equilibrio se extiende a 12–18 meses.',
      },
      architecture: {
        id: 'architecture',
        title: 'Visión general de la arquitectura',
        content:
          'El pipeline multimodal local usa un patrón de router-orquestador: las entradas se tipifican en el límite, se dirigen al modelo apropiado, y las salidas se combinan por el orquestador antes de generar la respuesta final.',
        items: [
          '**Tipos de entrada:** Audio de micrófono (voz), imagen de cámara o archivo (visión), texto de teclado (texto).',
          '**Lógica del router:** Detecta el tipo de entrada en el límite. Audio → modelo STT. Imagen → VLM. Texto → LLM directamente. Si llegan tanto audio como imagen juntos, procesar en paralelo y combinar.',
          '**Registro de modelos:** Cada tipo de entrada se mapea a una función manejadora que llama al modelo apropiado y devuelve una descripción/transcripción de texto.',
          '**Orquestador:** Recoge todas las salidas de los modelos, las combina en un único prompt para el LLM de texto, obtiene la respuesta del LLM y la dirige al TTS para la salida de voz o a la pantalla como texto.',
          '**Tipos de salida:** Respuesta de voz (Piper TTS), texto en pantalla, o datos estructurados (JSON) para integración con otros sistemas.',
          '**Procesamiento paralelo:** STT y VLM pueden procesar simultáneamente — una consulta de audio sobre una imagen puede tener ambos procesados en paralelo, reduciendo la latencia total en un 40–60 % frente al procesamiento secuencial.',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: 'El stack de componentes',
        content:
          'Stack completo con requisitos de VRAM y el rol de cada componente.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El stack multimodal local completo usa ~15 GB de VRAM: Whisper large-v3 (3 GB) + LLaVA 1.6 7B (6 GB) + Llama 3.3 8B (6 GB); Piper TTS corre en CPU sin costo de VRAM.',
          },
          {
            type: 'plain-terms',
            text: 'Puedes reducir la VRAM a 8 GB usando Llama 3.2 Vision 11B tanto como modelo de visión como de texto — maneja fotos Y conversación en un único modelo, mientras Whisper sigue haciendo la voz y Piper la salida de voz.',
          },
        ],
        columns: ['Capa', 'Herramienta', 'Modelo', 'VRAM', 'Rol'],
        rows: [
          {
            'Capa': 'STT',
            'Herramienta': 'whisper.cpp',
            'Modelo': 'Whisper large-v3',
            'VRAM': '~3 GB',
            'Rol': 'Voz → transcripción de texto',
          },
          {
            'Capa': 'Visión',
            'Herramienta': 'Ollama',
            'Modelo': 'LLaVA 1.6 7B',
            'VRAM': '~6 GB',
            'Rol': 'Imagen → descripción de texto',
          },
          {
            'Capa': 'Razonamiento',
            'Herramienta': 'Ollama',
            'Modelo': 'Llama 3.3 8B Q4',
            'VRAM': '~6 GB',
            'Rol': 'Texto → respuesta de texto',
          },
          {
            'Capa': 'TTS',
            'Herramienta': 'Piper',
            'Modelo': 'en_US-lessac-medium',
            'VRAM': 'Solo CPU',
            'Rol': 'Texto → salida de voz',
          },
          {
            'Capa': 'Total (modelos separados)',
            'Herramienta': '',
            'Modelo': '',
            'VRAM': '~15 GB',
            'Rol': 'Pipeline completo',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Usa Llama 3.2 Vision 11B en lugar de LLaVA + Llama 3.3 8B separados para reducir la VRAM a ~8 GB. Llama 3.2 Vision maneja tanto la descripción de imágenes como el razonamiento textual en un solo modelo, eliminando la necesidad de un VLM separado.',
          },
          {
            type: 'tip',
            text: 'VLM alternativo: [Qwen2-VL 7B](/es/power-local-llm/local-vision-models-llava-ollama-2026) (~6 GB VRAM) — más potente que LLaVA en OCR multilingüe y comprensión de documentos. Recomendado si procesas documentos en chino, japonés o coreano.',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Niveles de hardware para multimodal',
        content:
          'Cinco configuraciones de hardware ordenadas por capacidad y VRAM. Cada una soporta un subconjunto diferente del stack multimodal completo.',
        columns: ['Nivel', 'GPU', 'RAM', 'Puede ejecutar', 'Latencia (consulta de voz + imagen)'],
        rows: [
          {
            'Nivel': 'Básico',
            'GPU': 'RTX 3060 12 GB',
            'RAM': '16 GB',
            'Puede ejecutar': 'STT + Phi-4 (visión por separado, secuencial)',
            'Latencia (consulta de voz + imagen)': '5–10 seg',
          },
          {
            'Nivel': 'Medio',
            'GPU': 'RTX 4070 12 GB',
            'RAM': '32 GB',
            'Puede ejecutar': 'Stack completo con modelos 7B (LLaVA 7B + Llama 3.3 8B, ajuste justo)',
            'Latencia (consulta de voz + imagen)': '3–6 seg',
          },
          {
            'Nivel': 'Alto',
            'GPU': 'RTX 4090 24 GB',
            'RAM': '64 GB',
            'Puede ejecutar': 'Stack completo con VLM 13B + LLM 8B simultáneamente',
            'Latencia (consulta de voz + imagen)': '2–4 seg',
          },
          {
            'Nivel': 'Apple Medio',
            'GPU': 'M5 Pro 36 GB',
            'RAM': '36 GB unificada',
            'Puede ejecutar': 'Stack completo con modelos 8B vía Metal (recomendado). Qwen2-VL 7B + Llama 3.3 8B caben cómodamente en 36 GB con espacio para Whisper large-v3.',
            'Latencia (consulta de voz + imagen)': '2–4 seg',
          },
          {
            'Nivel': 'Apple Alto',
            'GPU': 'M5 Max 128 GB',
            'RAM': '128 GB unificada',
            'Puede ejecutar': 'Stack completo con modelos 70B — mejor calidad local',
            'Latencia (consulta de voz + imagen)': '1–3 seg',
          },
        ],
        note: 'La latencia se mide desde el final de la consulta de voz hasta el inicio de la reproducción TTS, incluyendo el procesamiento de imagen si hay una imagen presente.',
        callouts: [
          {
            type: 'tip',
            text: 'El M5 Max con 128 GB de memoria unificada es la plataforma multimodal local definitiva. Puede ejecutar Whisper large-v3 (3 GB) + Llama 3.2 Vision 90B (~64 GB) + Piper TTS simultáneamente — el modelo VLM local de mayor calidad disponible, aproximándose a GPT-5.5 en tareas de documentos y fotos. Ninguna configuración de GPU discreta puede igualar esto sin configuraciones multi-GPU que cuestan 2–3 veces más.',
          },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: 'Caso de uso 1: Analizador de documentos controlado por voz',
        content:
          '**Habla una pregunta sobre una imagen de documento; el pipeline transcribe tu voz, procesa el documento visualmente y lee la respuesta en voz alta.** Este es el caso de uso principal para combinar STT + VLM + LLM + TTS.',
        items: [
          '**Ejemplo:** Fotografía una factura y di "¿Cuál es el importe total a pagar y el plazo de pago?"',
          '**Pipeline:** Whisper transcribe la pregunta → imagen enviada a LLaVA o Llama 3.2 Vision → VLM extrae texto y estructura de la factura → LLM combina pregunta + salida del VLM → Piper lee la respuesta en voz alta.',
          '**Prompt:** "Aquí hay una imagen: [descripción VLM]. El usuario pregunta: [transcripción]. Responde la pregunta basándote en el contenido de la imagen."',
          '**Mejor VLM:** MiniCPM-V 2.6 o Llama 3.2 Vision 11B para precisión de OCR en facturas y documentos.',
          '**Valor de privacidad:** Historial médico, documentos legales, estados financieros — procesados completamente en local sin que ningún dato salga de la máquina.',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: 'Caso de uso 2: Asistente de Q&A visual',
        content:
          '**Apunta una cámara a un objeto o escena, haz una pregunta de forma verbal y recibe una respuesta hablada.** Este caso de uso es el equivalente local más cercano a Google Lens con interacción de voz.',
        items: [
          '**Aplicaciones:** Inventario de almacén (fotografía un estante, pregunta "¿Cuántas unidades de SKU-4429 hay?"), inspección de campo (fotografía daños en maquinaria, pregunta "¿Es seguro operar esto?"), accesibilidad (describe objetos para usuarios con discapacidad visual).',
          '**Implementación:** Captura un frame de cámara (OpenCV `cv2.VideoCapture(0).read()`), guárdalo como JPEG, pásalo al VLM junto con la transcripción de Whisper.',
          '**Mejores modelos:** LLaVA 1.6 7B o Llama 3.2 Vision 11B para comprensión general de objetos y escenas.',
          '**Latencia:** 3–6 segundos para captura de imagen + procesamiento VLM + LLM + TTS en RTX 4070. Reduce con VLM más pequeño (Moondream 2 para identificación simple de objetos).',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: 'Caso de uso 3: Transcripción de reunión + análisis de diapositivas',
        content:
          '**Ejecuta Whisper continuamente durante una reunión para construir una transcripción, mientras capturas periódicamente capturas de pantalla de diapositivas para análisis con VLM. Al final, combina transcripción + contenido de diapositivas para un resumen local y puntos de acción — cero nube, cero exposición de datos.**',
        items: [
          '**STT:** Ejecuta faster-whisper en modo de streaming durante la reunión. Acumula segmentos en un buffer de transcripción.',
          '**Visión:** Cada vez que aparezca una nueva diapositiva (detectar mediante diff de captura de pantalla), captura una imagen y pásala a LLaVA para descripción.',
          '**Combinación:** Al final de la reunión (o bajo demanda), pasa transcripción + descripciones de diapositivas a Llama 3.3 8B: "Resume esta reunión y lista los puntos de acción. Aquí está la transcripción: [...]. Aquí están los contenidos de las diapositivas: [...]."',
          '**Salida:** Resumen leído en voz alta (Piper TTS) + archivo de texto guardado localmente.',
          '**Valor GDPR:** Todo el procesamiento de la reunión es local. No se envía audio, transcripción ni diapositivas a ningún servicio en la nube. Cumple para contextos legales, médicos y corporativos.',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: 'Caso de uso 4: Herramienta de accesibilidad local',
        content:
          '**Un pipeline multimodal local puede servir como lector de pantalla y asistente de UI controlado por voz para usuarios con discapacidades visuales o motoras — funcionando sin conexión sin las preocupaciones de privacidad de los servicios de accesibilidad en la nube.**',
        items: [
          '**Lector de pantalla:** Captura una captura de pantalla cada 2 segundos → LLaVA describe lo que hay en pantalla → Piper lo lee en voz alta. Agrega comandos de voz (Whisper) para controlar qué describir a continuación.',
          '**Navegación por voz:** Whisper transcribe comandos de voz → LLM interpreta la intención → ejecuta acciones de teclado/ratón mediante pyautogui. No se requiere internet.',
          '**Beneficio de privacidad:** Los usuarios con discapacidades suelen usar herramientas de accesibilidad en contextos sensibles (portales médicos, cuentas financieras). Una herramienta local garantiza que ningún contenido de pantalla se transmita a terceros.',
          '**Uso con conectividad limitada:** Funciona en hospitales, edificios gubernamentales y áreas con internet restringido — importante para implementaciones institucionales de accesibilidad.',
          '**Elección de modelo para accesibilidad:** Moondream 2 para descripciones de pantalla rápidas (2 GB VRAM, ~1 seg por frame). LLaVA 7B para descripciones más ricas (6 GB VRAM, ~3 seg por frame).',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: 'Caso de uso 5: Análisis local de cámara de seguridad',
        content:
          '**Captura frames de una cámara IP, ejecuta detección de movimiento localmente y activa el análisis VLM solo cuando se detecta movimiento — sin servicios de cámara en la nube ni almacenamiento de video de terceros.**',
        items: [
          '**Captura de frames:** Usa OpenCV para capturar un frame cada 5–10 segundos desde una cámara IP vía RTSP (`cv2.VideoCapture("rtsp://camera-ip:554/stream")`). Para cámaras USB, usa el índice de dispositivo 0.',
          '**Detección de movimiento:** Calcula la diferencia entre frames consecutivos con `cv2.absdiff()`. Omite frames por debajo del umbral de movimiento — esto evita llamadas VLM innecesarias en escenas estáticas.',
          '**Análisis VLM:** Cuando se detecta movimiento, envía el frame al VLM: "Describe qué está pasando. ¿Hay una persona? ¿Qué están haciendo?"',
          '**Salida de alerta:** Si la respuesta indica una persona o anomalía, activa una notificación de escritorio local y un anuncio de Piper TTS ("Persona detectada en la puerta principal"). No se requiere servicio de notificación en la nube.',
          '**Ventaja de privacidad:** Ring y Nest envían video a los servidores de AWS y Google respectivamente. Esta configuración mantiene toda la grabación en tu hardware — sin suscripción, sin almacenamiento de video de terceros, sin compartición de datos con servicios externos.',
          '**Mejor VLM para velocidad:** Moondream 2 para procesamiento rápido de frames (~1 segundo por frame, ~2 GB VRAM) o LLaVA 7B para descripciones de escena más ricas (~3 segundos por frame, ~6 GB VRAM).',
          '**Nota de hardware:** Un Mac Mini M5 dedicado (~$600) ejecutando este stack 24/7 consume ~15–25W en reposo — menos electricidad anualmente que una suscripción a Ring Doorbell Pro.',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: 'Construyendo el orquestador Python',
        content:
          'Un orquestador Python asíncrono dirige las entradas al modelo correcto y combina las salidas. Usar asyncio permite que STT y el procesamiento de visión corran en paralelo.',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"        # or "llama3.2-vision" for combined VLM+LLM
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    """Convert audio array to text using whisper.cpp."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    """Get text description of an image using local VLM via Ollama."""
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={
            "model": VISION_MODEL,
            "prompt": "Describe the content of this image in detail, including any text visible.",
            "images": [image_b64],
            "stream": False,
        },
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    """Generate a response combining transcript and optional image description."""
    if image_description:
        prompt = (
            f"The user asked (via voice): {transcript}\\n\\n"
            f"The image shows: {image_description}\\n\\n"
            "Answer the question based on the image content. Be concise — 2-3 sentences."
        )
    else:
        prompt = transcript
    # Note: /api/generate is for single-turn queries.
    # For multi-turn conversation with context, use
    # /api/chat with a messages array instead.
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    """Convert text to speech using Piper TTS."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}',
            shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    """Process a multimodal query: transcribe audio and optionally describe image in parallel."""
    if image_path:
        # Run STT and vision in parallel
        transcript, image_desc = await asyncio.gather(
            transcribe_audio(audio),
            describe_image(image_path),
        )
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None

    if not transcript or len(transcript) < 3:
        return

    print(f"You: {transcript}")
    if image_desc:
        print(f"Image: {image_desc[:100]}...")

    response = await reason(transcript, image_desc)
    print(f"Assistant: {response}")
    await speak(response)

async def main():
    print("Multimodal assistant ready. Ctrl+C to stop.")
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)  # Pass image_path="photo.jpg" for image queries

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: 'Optimización del rendimiento',
        content:
          'Optimizaciones clave para lograr una latencia aceptable en el stack multimodal completo:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Las dos optimizaciones más grandes son: (1) ejecutar STT y VLM en paralelo con asyncio cuando tanto el audio como la imagen estén disponibles, y (2) transmitir la salida del LLM al TTS oración por oración para que el audio comience antes de que el LLM termine.',
          },
          {
            type: 'plain-terms',
            text: 'Sin paralelismo, el pipeline es: STT (0,5 seg) → VLM (3 seg) → LLM (1 seg) → TTS (0,1 seg) = 4,6 seg en total. Con STT + VLM paralelos, se convierte en: max(STT, VLM) (3 seg) → LLM (1 seg) → TTS (0,1 seg) = 4,1 seg. Agrega TTS en streaming y el usuario escucha audio a los 3,5 seg en lugar de 4,6 seg.',
          },
        ],
        items: [
          '**STT + VLM paralelos:** Usa `asyncio.gather(transcribe_audio(), describe_image())` para ejecutar ambos simultáneamente. Ahorra 0,3–2 segundos dependiendo del tamaño del modelo STT.',
          '**Mantén los modelos calientes:** Ollama mantiene los modelos en VRAM automáticamente entre solicitudes. whisper.cpp en modo stream permanece cargado. Nunca recargues entre consultas.',
          '**Transmite LLM → TTS:** Detecta los límites de oración en la salida del LLM en streaming (`.`, `!`, `?`). Pasa cada oración completada a Piper mientras el LLM continúa generando.',
          '**Gestión de VRAM:** Si la VRAM total es ajustada, descarga el VLM después del procesamiento de imagen (endpoint HTTP de eliminación de Ollama) antes de cargar el LLM de texto. Agrega ~2–3 segundos pero permite que una GPU de 8 GB maneje el stack completo.',
          '**Usa Llama 3.2 Vision como VLM + LLM combinado:** Elimina por completo el overhead del cambio de modelo — un modelo maneja tanto la descripción visual como el razonamiento textual. Contrapartida: razonamiento de texto puro ligeramente más débil en comparación con Llama 3.3 8B dedicado.',
          '**Objetivo de primer audio TTS:** Piper genera el primer audio en 50–100 ms tras recibir texto. Transmite una oración a la vez para una latencia TTS percibida de menos de un segundo.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitaciones y evaluación honesta',
        content:
          '**Un pipeline multimodal local no es GPT-5.5.** Ser claros sobre las brechas previene la frustración y ayuda a diseñar en torno a las limitaciones.',
        items: [
          '**Costuras de modalidad:** La salida de visión se serializa a texto antes de pasarse al LLM de texto. El LLM no puede razonar directamente sobre las características de la imagen — razona sobre una descripción textual de la imagen. Esto pierde información en tareas que requieren razonamiento visual sutil.',
          '**Sin video en tiempo real:** Los VLM locales procesan frames individuales, no video continuo. Para video, extrae frames a 0,5–2 FPS y procésalos secuencialmente. Esto significa que no puedes preguntar "qué acaba de pasar en los últimos 5 segundos de este video".',
          '**Brecha de calidad del VLM:** Los modelos de visión locales (LLaVA 7B, Llama 3.2 Vision 11B) están por detrás de GPT-5.5 Vision en infografías complejas, texto manuscrito, escenas ambiguas y tareas que requieren amplio conocimiento del mundo junto a la comprensión visual.',
          '**Presión de VRAM:** Ejecutar tres modelos simultáneamente en una única GPU requiere una gestión cuidadosa de la VRAM. En GPUs de 12 GB estás en el límite — los tamaños de los modelos deben elegirse cuidadosamente para evitar errores OOM (sin memoria).',
          '**Latencia vs. nube:** Una llamada multimodal en la nube (GPT-5.5) tarda 1–3 segundos para audio + imagen + texto. Un pipeline local tarda 3–8 segundos en hardware comparable — más lento, pero con total privacidad y costo cero por consulta.',
          '**Consistencia:** Los modelos locales producen calidad de salida más variable que los modelos en la nube con extenso RLHF. Espera alucinaciones ocasionales tanto en descripciones de visión como en respuestas del LLM.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar un único modelo tanto para visión como para razonamiento textual?',
            a: 'Sí. Llama 3.2 Vision 11B maneja tanto la comprensión de imágenes como el razonamiento textual en un solo modelo — puedes omitir la configuración separada de LLaVA + Llama 3.3 8B. Esto reduce la VRAM de ~15 GB a ~8 GB y elimina una llamada a la API de Ollama. La contrapartida es un rendimiento ligeramente peor en tareas de razonamiento de texto puro en comparación con Llama 3.3 8B dedicado.',
          },
          {
            q: '¿Cómo manejo la entrada de video en un pipeline multimodal local?',
            a: 'Extrae frames del video usando OpenCV (`cv2.VideoCapture`) y procesa cada frame individualmente a través del VLM. Para un video de 1 minuto a 1 FPS, obtienes 60 frames — cada uno tardando 2–5 segundos en procesarse, por lo que el video completo tardaría 2–5 minutos en analizarse. Para monitoreo de video en tiempo real, procesa solo 1 frame cada 2–3 segundos y usa detección de movimiento para omitir frames estáticos. La comprensión completa de video (seguimiento de objetos entre frames, comprensión de secuencias temporales) está más allá de las capacidades actuales de los VLM locales.',
          },
          {
            q: '¿Cuál es la VRAM mínima en GPU para el stack multimodal completo?',
            a: 'En una configuración de VRAM compartida (todos los modelos en VRAM simultáneamente), se requieren 15 GB para Whisper large-v3 + LLaVA 7B + Llama 3.3 8B. Con Llama 3.2 Vision 11B reemplazando tanto VLM como LLM de texto, son suficientes 8 GB de VRAM. En una GPU de 12 GB (RTX 4070), puedes ejecutar el stack completo de modelos separados con VRAM muy ajustada con cuantización pequeña, o usar Llama 3.2 Vision 11B para el enfoque combinado. En 8 GB de VRAM (RTX 4060), usa Llama 3.2 Vision 11B con cuantización agresiva (Q3_K) o intercambia modelos entre consultas de visión y texto.',
          },
          {
            q: '¿Puede el pipeline multimodal procesar PDFs?',
            a: 'No directamente — los VLM locales aceptan entrada de imagen, no de PDF. Convierte primero las páginas del PDF a imágenes usando pdf2image (`pip install pdf2image`) o pypdfium2 (`pip install pypdfium2`). Luego pasa cada imagen de página al VLM por separado. Para un PDF de 10 páginas, generas 10 descripciones de imagen separadas, luego pasas todas las descripciones al LLM de texto para un análisis o resumen combinado. Es más lento que el soporte nativo de PDF pero produce buenos resultados en documentos estructurados.',
          },
          {
            q: '¿Es el pipeline multimodal local compatible con GDPR para uso médico o legal?',
            a: 'Un pipeline multimodal local que genera cero tráfico de red durante la operación es conforme por diseño para casos de uso interno — no se necesita un acuerdo de procesamiento de datos porque ningún dato personal sale de tus sistemas. Para verificar el cumplimiento: ejecuta Wireshark durante la operación y confirma cero paquetes salientes del proceso del pipeline. El almacenamiento también es importante — si tu orquestador almacena historial de conversaciones o archivos de imagen, esos almacenes están sujetos a requisitos de retención. Usa almacenamiento efímero en memoria o almacenamiento local cifrado con políticas de retención apropiadas.',
          },
          {
            q: '¿Puedo agregar búsqueda web al pipeline multimodal?',
            a: 'Sí. Agrega un paso de búsqueda entre el orquestador y el LLM de texto. Usa la API de DuckDuckGo o un sistema RAG local (AnythingLLM, PrivateGPT) para recuperar contexto antes del paso de razonamiento del LLM. El LLM entonces razona sobre la transcripción + descripción de imagen + resultados de búsqueda combinados. Esto agrega 0,5–2 segundos a la latencia pero permite responder preguntas de actualidad junto al análisis visual.',
          },
          {
            q: '¿Cuánta electricidad consume el stack multimodal completo funcionando 24/7?',
            a: 'Reposo con modelos calientes en VRAM: ~50–80 W (GPU de escritorio), ~15–25 W (Mac Mini M5 Pro). Procesamiento activo: ~150–300 W (GPU de escritorio), ~30–60 W (Mac Mini M5 Pro). Costo mensual a $0,15/kWh: aproximadamente $5–15 (Mac Mini) o $15–35 (escritorio). Esto es menos que ejecutar una API en la nube con volúmenes de consultas comparables — un Mac Mini ejecutando el stack completo 24/7 cuesta menos en electricidad por mes que dos días de uso de la API de GPT-5.5 a 100 consultas/día.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[whisper.cpp en GitHub](https://github.com/ggerganov/whisper.cpp) — Fuente y documentación del componente STT.',
          '[faster-whisper en GitHub](https://github.com/SYSTRAN/faster-whisper) — Alternativa STT en Python con VAD integrado para streaming.',
          '[Página del proyecto LLaVA](https://llava-vl.github.io) — Arquitectura del modelo de visión y tarjetas de modelo.',
          '[Tarjeta del modelo Llama 3.2 Vision](https://huggingface.co/meta-llama) — Modelo multimodal de Meta que soporta razonamiento con imagen + texto.',
          '[Documentación de Ollama](https://ollama.com) — API de modelos de visión, formato de solicitud multimodal.',
          '[Piper TTS en GitHub](https://github.com/rhasspy/piper) — Componente de salida TTS, biblioteca de packs de voz.',
          '[Coqui TTS en GitHub](https://github.com/coqui-ai/TTS) — TTS alternativo con soporte de clonación de voz.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Reconocimiento de voz local 2026: Whisper.cpp vs faster-whisper](/es/power-local-llm/local-whisper-stt-comparison-2026) — Análisis detallado del componente STT.',
          '[Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision y Ollama](/es/power-local-llm/local-vision-models-llava-ollama-2026) — Análisis detallado del componente de visión.',
          '[TTS local y clonación de voz 2026](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Análisis detallado del componente TTS.',
          '[Cómo construir un asistente de voz completamente offline en 2026](/es/power-local-llm/build-local-voice-assistant-2026) — La versión solo de voz (más simple, voz + LLM + TTS sin visión).',
          '[Guía de hardware para LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) — Selección de hardware para pipelines multi-modelo.',
          '[Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) — Cómo encajar múltiples modelos en VRAM limitada mediante cuantización.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Pipeline multimodal de IA local 2026: combina voz, visión y texto sin conexión',
       description: 'Ejecuta IA de voz + visión + texto localmente en 2026. Combina whisper.cpp, LLaVA 1.6, Ollama y Piper TTS. Orquestador Python completo — sin nube, sin claves de API.',
       url: 'https://www.promptquorum.com/es/power-local-llm/local-multimodal-pipeline-voice-vision-text',
       inLanguage: 'es',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
       'proficiencyLevel': 'Advanced',
     },
},

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Pipeline multimodal de IA local 2026: combine voz, visão e texto offline',
    seoTitle: 'Pipeline multimodal local 2026: voz + visão + texto',
    intro:
      'Um pipeline multimodal de IA local combina modelos especializados independentes para cada modalidade — whisper.cpp para a entrada de voz, LLaVA ou Llama 3.2 Vision para a compreensão de imagens, um LLM do Ollama para o raciocínio textual e Piper TTS para a saída de voz — orquestrados em um sistema coerente que funciona 100% offline. Este é o equivalente local das capacidades multimodais do GPT-5.5: nenhum modelo individual entende tudo, mas o orquestrador direciona cada tipo de entrada para o modelo correto e combina as saídas. Este guia mostra como construir um pipeline multimodal local com esses componentes de código aberto — cobrindo a arquitetura, o stack de componentes, os níveis de hardware, cinco casos de uso práticos e um orquestrador assíncrono em Python que processa entradas de voz e visão em paralelo.',
    metaDescription:
      'Rode IA de voz, visão e texto localmente em 2026 com whisper.cpp, LLaVA 1.6, Ollama e Piper TTS. Orquestrador Python completo, sem nuvem nem chaves de API.',
    twitterDescription:
      'IA multimodal local em 2026: combine Whisper STT + visão LLaVA + LLM Ollama + Piper TTS em um pipeline offline. Guia de arquitetura, níveis de hardware e código Python.',
    readTime: '16 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'pipeline multimodal de IA local',
    targetKeywords: [
      'pipeline multimodal IA local 2026',
      'whisper llava ollama piper',
      'IA multimodal offline',
      'voz visão texto IA local',
      'alternativa local ao GPT-5.5',
      'construir IA multimodal offline',
      'pipeline voz visão local',
      'integração llava whisper',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'LLaVA 1.6 7B',
      'Qwen2-VL 7B',
      'Llama 3.2 Vision 11B',
      'Llama 3.3 8B',
      'Moondream 2',
      'Piper TTS',
      'Coqui TTS',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Pro 36 GB',
      'Apple M5 Max 128 GB',
    ],
    leadAnswerBlock:
      '**Um pipeline multimodal de IA local em 2026 requer no mínimo 12 GB de VRAM na GPU para rodar STT + visão + LLM + TTS simultaneamente.** A configuração mínima viável é uma RTX 4070 (12 GB) ou Mac M5 Pro (36 GB de memória unificada), rodando whisper.cpp para entrada de voz, LLaVA 1.6 7B para visão, Llama 3.3 8B para raciocínio textual e Piper para saída de voz. Em uma RTX 3060 12 GB você pode rodar o stack com um LLM menor (Phi-4) sem visão — ou trocar modelos dentro/fora da VRAM conforme necessário. A decisão arquitetural-chave é se compartilhar a VRAM entre o modelo de visão e o LLM (requer 12+ GB) ou rodá-los sequencialmente em uma GPU menor.',
    quickAnswerTop: {
      pt: {
        question: 'Como você constrói um pipeline multimodal de IA local com voz, visão e texto em 2026?',
        answer:
          'Combine quatro modelos especializados: whisper.cpp (voz → texto), um modelo de visão-linguagem como LLaVA 1.6 ou Llama 3.2 Vision (imagem → descrição de texto), um LLM do Ollama como Llama 3.3 8B (texto → raciocínio textual) e Piper TTS (texto → voz). Um orquestrador assíncrono em Python detecta o tipo de entrada e o roteia para o modelo correto, combinando as saídas em uma resposta coerente. VRAM mínima: 12 GB para uma configuração de VRAM compartilhada; 8 GB se você trocar modelos.',
        bullets: [
          'Entrada de voz: whisper.cpp (Metal no Mac, CUDA na NVIDIA) → transcrição de texto.',
          'Entrada de imagem: LLaVA 1.6 7B ou Llama 3.2 Vision 11B via Ollama → descrição textual.',
          'Raciocínio textual: Ollama + Llama 3.3 8B → texto de resposta.',
          'Saída de voz: Piper TTS (CPU, ~0,1 seg de latência) → reprodução de áudio.',
          'Hardware mínimo: RTX 4070 12 GB ou M5 Pro 36 GB para o stack completo simultâneo.',
          'Visão + LLM podem compartilhar uma instância do Ollama (o Llama 3.2 Vision gerencia ambos).',
          'VRAM total para o stack completo: ~15 GB (whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB + Piper CPU).',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Dados rápidos', anchor: '#quick-facts' },
      { label: 'O que é um pipeline multimodal?', anchor: '#what-is-multimodal' },
      { label: 'Custo: pipeline local vs APIs na nuvem', anchor: '#cost-comparison' },
      { label: 'Visão geral da arquitetura', anchor: '#architecture' },
      { label: 'O stack de componentes', anchor: '#component-stack' },
      { label: 'Níveis de hardware', anchor: '#hardware-tiers' },
      { label: 'Caso de uso 1: Analisador de documentos por voz', anchor: '#use-case-1' },
      { label: 'Caso de uso 2: Assistente de Q&A visual', anchor: '#use-case-2' },
      { label: 'Caso de uso 3: Transcrição de reunião + análise de slides', anchor: '#use-case-3' },
      { label: 'Caso de uso 4: Ferramenta de acessibilidade local', anchor: '#use-case-4' },
      { label: 'Caso de uso 5: Análise local de câmera de segurança', anchor: '#use-case-5' },
      { label: 'Construindo o orquestrador Python', anchor: '#orchestrator' },
      { label: 'Otimização do desempenho', anchor: '#performance' },
      { label: 'Limitações e avaliação honesta', anchor: '#limitations' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Um pipeline multimodal local são quatro modelos orquestrados separadamente — não um único modelo como o GPT-5.5.** O whisper.cpp gerencia a voz, um VLM (LLaVA ou Llama 3.2 Vision) gerencia as imagens, um LLM gerencia o raciocínio textual e o Piper gerencia a saída de voz. O orquestrador direciona as entradas para o modelo correto e combina as saídas.',
          '**O Llama 3.2 Vision 11B pode substituir tanto o VLM quanto o LLM de texto em um único modelo.** Ele aceita texto e imagens simultaneamente e gerencia tanto a descrição quanto o raciocínio em um único passo — reduzindo a VRAM de ~15 GB (modelos separados) para ~8 GB (Llama 3.2 Vision 11B único).',
          '**Hardware mínimo para o stack completo: RTX 4070 12 GB ou Apple M5 Pro 36 GB.** Uma RTX 3060 12 GB pode rodar uma versão limitada (Phi-4 em vez de Llama 3.3 8B, ou carregamento sequencial de modelos) — funcional, mas mais lenta.',
          '**Cinco casos de uso práticos justificam a complexidade:** análise de documentos por voz, Q&A visual com interação de voz, transcrição de reuniões combinada com análise de slides, ferramentas de acessibilidade com leitor de tela local e análise local de câmera de segurança.',
          '**A orquestração assíncrona é essencial para um desempenho aceitável.** O STT e a visão podem rodar em paralelo quando há entradas de áudio e imagem disponíveis — o LLM de texto espera por ambos e depois gera uma resposta combinada.',
          '**Transmitir a saída do LLM para o TTS reduz a latência percebida em 0,3–0,7 segundo.** Comece a gerar áudio a partir da primeira frase concluída enquanto o LLM ainda está escrevendo o resto da resposta.',
          '**Isto não é o GPT-5.5.** Os modelos separados produzem "costuras" — a descrição do modelo de visão é passada como texto para o LLM, perdendo parte do raciocínio cross-modal. A qualidade em tarefas multimodais complexas está abaixo dos modelos fechados de fronteira, mas é adequada para documentos estruturados e tarefas com fotos claras.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Dados rápidos',
        items: [
          '**VRAM total para o stack completo:** ~15 GB (Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB). O Piper roda na CPU.',
          '**Stack simplificado (Llama 3.2 Vision 11B):** ~8 GB VRAM — gerencia visão e raciocínio textual em um único modelo.',
          '**Latência de voz (Whisper small, RTX 4070):** STT ~200–500 ms. Primeiro token do LLM 500–1500 ms. Piper TTS 100 ms.',
          '**Latência de processamento de imagem (LLaVA 7B, RTX 4070):** ~2–5 segundos por imagem dependendo da resolução e do prompt.',
          '**Sem vídeo em tempo real:** Os VLMs processam frames individuais, não fluxos de vídeo contínuos. Para vídeo, extraia frames a 1 FPS e processe cada um.',
          '**Mesma instância do Ollama para VLM + LLM:** O Ollama pode servir o Llama 3.2 Vision como modelo de visão e modelo de texto ao mesmo tempo, economizando VRAM.',
          '**Todos os componentes com licença MIT ou Apache 2.0** (whisper.cpp MIT, LLaVA MIT, Llama 3.3 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'O que é um pipeline multimodal de IA?',
        content:
          'Um sistema de IA multimodal aceita múltiplos tipos de entrada (voz, imagens, texto) e produz múltiplos tipos de saída (texto, voz). O equivalente na nuvem é o GPT-5.5 — um único modelo que aceita áudio, imagens e texto em qualquer combinação.',
        items: [
          '**Abordagem na nuvem (GPT-5.5):** Um modelo gigante treinado em todas as modalidades simultaneamente. O raciocínio cross-modal é aprendido durante o treinamento — o modelo pode raciocinar nativamente sobre a relação entre o conteúdo da imagem e as consultas de voz.',
          '**Abordagem local (este guia):** Modelos especializados independentes para cada modalidade, conectados por um orquestrador. Mais modular e econômico de rodar, mas produz "costuras" — a saída do modelo de visão é serializada para texto antes de ser passada ao LLM.',
          '**Por que construir localmente:** Privacidade (imagens médicas, documentos proprietários, capturas de tela confidenciais), custo (zero taxas por consulta), capacidade offline (não requer internet após baixar o modelo), personalização (troque qualquer componente).',
          '**Vantagem modular:** Você pode atualizar qualquer componente de forma independente. Quando aparecer um melhor modelo STT local, substitua apenas a camada STT. Quando aparecer um melhor VLM, troque apenas o modelo de visão — o resto do pipeline não muda.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Custo: pipeline local vs APIs na nuvem (mensal)',
        content:
          'Com uso moderado (mais de 100 consultas por dia), um pipeline multimodal local se paga em 3–6 meses. Com uso leve (10 consultas por dia), o ponto de equilíbrio se estende a 12–18 meses.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Um pipeline multimodal local custa $0/mês em taxas de API após o investimento único em hardware ($600–3.500), com ponto de equilíbrio frente aos custos da API do GPT-5.5 ($135–225/mês) em 3–18 meses conforme o volume de consultas.',
          },
        ],
        columns: ['Uso', 'GPT-5.5 API', 'Google Cloud', 'Local'],
        rows: [
          { 'Uso': '100 consultas de voz/dia', 'GPT-5.5 API': '$90–150/mês', 'Google Cloud': '$60–120/mês', 'Local': '$0' },
          { 'Uso': '50 análises de imagem/dia', 'GPT-5.5 API': '$45–75/mês', 'Google Cloud': '$30–60/mês', 'Local': '$0' },
          { 'Uso': 'Combinado (típico)', 'GPT-5.5 API': '$135–225/mês', 'Google Cloud': '$90–180/mês', 'Local': '$0' },
          { 'Uso': 'Hardware (uma única vez)', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', 'Local': '$600–3.500' },
          { 'Uso': 'Ponto de equilíbrio', 'GPT-5.5 API': '—', 'Google Cloud': '—', 'Local': '3–18 meses' },
        ],
        note: 'O pipeline local se paga em 3–6 meses com uso moderado (mais de 100 consultas por dia). Com uso leve (10 consultas por dia), o ponto de equilíbrio se estende a 12–18 meses.',
      },
      architecture: {
        id: 'architecture',
        title: 'Visão geral da arquitetura',
        content:
          'O pipeline multimodal local usa um padrão de router-orquestrador: as entradas são tipificadas no limite, roteadas para o modelo apropriado, e as saídas são combinadas pelo orquestrador antes de gerar a resposta final.',
        items: [
          '**Tipos de entrada:** Áudio de microfone (voz), imagem de câmera ou arquivo (visão), texto de teclado (texto).',
          '**Lógica do router:** Detecta o tipo de entrada no limite. Áudio → modelo STT. Imagem → VLM. Texto → LLM diretamente. Se chegarem áudio e imagem juntos, processar em paralelo e combinar.',
          '**Registro de modelos:** Cada tipo de entrada é mapeado para uma função handler que chama o modelo apropriado e retorna uma descrição/transcrição de texto.',
          '**Orquestrador:** Coleta todas as saídas dos modelos, combina-as em um único prompt para o LLM de texto, obtém a resposta do LLM e a direciona para o TTS para a saída de voz ou para a tela como texto.',
          '**Tipos de saída:** Resposta de voz (Piper TTS), texto na tela ou dados estruturados (JSON) para integração com outros sistemas.',
          '**Processamento paralelo:** STT e VLM podem processar simultaneamente — uma consulta de áudio sobre uma imagem pode ter ambos processados em paralelo, reduzindo a latência total em 40–60% frente ao processamento sequencial.',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: 'O stack de componentes',
        content:
          'Stack completo com requisitos de VRAM e o papel de cada componente.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O stack multimodal local completo usa ~15 GB de VRAM: Whisper large-v3 (3 GB) + LLaVA 1.6 7B (6 GB) + Llama 3.3 8B (6 GB); o Piper TTS roda na CPU sem custo de VRAM.',
          },
          {
            type: 'plain-terms',
            text: 'Você pode reduzir a VRAM para 8 GB usando o Llama 3.2 Vision 11B tanto como modelo de visão quanto de texto — ele gerencia fotos E conversa em um único modelo, enquanto o Whisper continua fazendo a voz e o Piper a saída de voz.',
          },
        ],
        columns: ['Camada', 'Ferramenta', 'Modelo', 'VRAM', 'Papel'],
        rows: [
          {
            'Camada': 'STT',
            'Ferramenta': 'whisper.cpp',
            'Modelo': 'Whisper large-v3',
            'VRAM': '~3 GB',
            'Papel': 'Voz → transcrição de texto',
          },
          {
            'Camada': 'Visão',
            'Ferramenta': 'Ollama',
            'Modelo': 'LLaVA 1.6 7B',
            'VRAM': '~6 GB',
            'Papel': 'Imagem → descrição de texto',
          },
          {
            'Camada': 'Raciocínio',
            'Ferramenta': 'Ollama',
            'Modelo': 'Llama 3.3 8B Q4',
            'VRAM': '~6 GB',
            'Papel': 'Texto → resposta de texto',
          },
          {
            'Camada': 'TTS',
            'Ferramenta': 'Piper',
            'Modelo': 'en_US-lessac-medium',
            'VRAM': 'Só CPU',
            'Papel': 'Texto → saída de voz',
          },
          {
            'Camada': 'Total (modelos separados)',
            'Ferramenta': '',
            'Modelo': '',
            'VRAM': '~15 GB',
            'Papel': 'Pipeline completo',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use o Llama 3.2 Vision 11B em vez de LLaVA + Llama 3.3 8B separados para reduzir a VRAM para ~8 GB. O Llama 3.2 Vision gerencia tanto a descrição de imagens quanto o raciocínio textual em um único modelo, eliminando a necessidade de um VLM separado.',
          },
          {
            type: 'tip',
            text: 'VLM alternativo: [Qwen2-VL 7B](/pt/power-local-llm/local-vision-models-llava-ollama-2026) (~6 GB VRAM) — mais forte que o LLaVA em OCR multilíngue e compreensão de documentos. Recomendado se você processa documentos em chinês, japonês ou coreano.',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Níveis de hardware para multimodal',
        content:
          'Cinco configurações de hardware ordenadas por capacidade e VRAM. Cada uma suporta um subconjunto diferente do stack multimodal completo.',
        columns: ['Nível', 'GPU', 'RAM', 'Pode rodar', 'Latência (consulta de voz + imagem)'],
        rows: [
          {
            'Nível': 'Básico',
            'GPU': 'RTX 3060 12 GB',
            'RAM': '16 GB',
            'Pode rodar': 'STT + Phi-4 (visão separadamente, sequencial)',
            'Latência (consulta de voz + imagem)': '5–10 seg',
          },
          {
            'Nível': 'Médio',
            'GPU': 'RTX 4070 12 GB',
            'RAM': '32 GB',
            'Pode rodar': 'Stack completo com modelos 7B (LLaVA 7B + Llama 3.3 8B, ajuste justo)',
            'Latência (consulta de voz + imagem)': '3–6 seg',
          },
          {
            'Nível': 'Alto',
            'GPU': 'RTX 4090 24 GB',
            'RAM': '64 GB',
            'Pode rodar': 'Stack completo com VLM 13B + LLM 8B simultaneamente',
            'Latência (consulta de voz + imagem)': '2–4 seg',
          },
          {
            'Nível': 'Apple Médio',
            'GPU': 'M5 Pro 36 GB',
            'RAM': '36 GB unificada',
            'Pode rodar': 'Stack completo com modelos 8B via Metal (recomendado). Qwen2-VL 7B + Llama 3.3 8B cabem confortavelmente em 36 GB com espaço para o Whisper large-v3.',
            'Latência (consulta de voz + imagem)': '2–4 seg',
          },
          {
            'Nível': 'Apple Alto',
            'GPU': 'M5 Max 128 GB',
            'RAM': '128 GB unificada',
            'Pode rodar': 'Stack completo com modelos 70B — melhor qualidade local',
            'Latência (consulta de voz + imagem)': '1–3 seg',
          },
        ],
        note: 'A latência é medida do fim da consulta de voz até o início da reprodução TTS, incluindo o processamento de imagem se houver uma imagem presente.',
        callouts: [
          {
            type: 'tip',
            text: 'O M5 Max com 128 GB de memória unificada é a plataforma multimodal local definitiva. Pode rodar Whisper large-v3 (3 GB) + Llama 3.2 Vision 90B (~64 GB) + Piper TTS simultaneamente — o modelo de visão 90B é o VLM local de maior qualidade disponível, aproximando-se do GPT-5.5 em tarefas de documentos e fotos. Nenhuma configuração de GPU discreta consegue igualar isso sem configurações multi-GPU que custam 2–3 vezes mais.',
          },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: 'Caso de uso 1: Analisador de documentos controlado por voz',
        content:
          '**Fale uma pergunta sobre uma imagem de documento; o pipeline transcreve a sua voz, processa o documento visualmente e lê a resposta em voz alta.** Este é o caso de uso principal para combinar STT + VLM + LLM + TTS.',
        items: [
          '**Exemplo:** Fotografe uma fatura e diga "Qual é o valor total a pagar e o prazo de pagamento?"',
          '**Pipeline:** O Whisper transcreve a pergunta → imagem enviada ao LLaVA ou Llama 3.2 Vision → o VLM extrai texto e estrutura da fatura → o LLM combina pergunta + saída do VLM → o Piper lê a resposta em voz alta.',
          '**Prompt:** "Aqui está uma imagem: [descrição do VLM]. O usuário pergunta: [transcrição]. Responda a pergunta com base no conteúdo da imagem."',
          '**Melhor VLM:** MiniCPM-V 2.6 ou Llama 3.2 Vision 11B para precisão de OCR em faturas e documentos.',
          '**Valor de privacidade:** Histórico médico, documentos jurídicos, demonstrações financeiras — processados completamente localmente, sem que nenhum dado saia da máquina.',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: 'Caso de uso 2: Assistente de Q&A visual',
        content:
          '**Aponte uma câmera para um objeto ou cena, faça uma pergunta de forma verbal e receba uma resposta falada.** Este caso de uso é o equivalente local mais próximo do Google Lens com interação de voz.',
        items: [
          '**Aplicações:** Inventário de almoxarifado (fotografe uma prateleira, pergunte "Quantas unidades de SKU-4429 há?"), inspeção de campo (fotografe danos em máquinas, pergunte "É seguro operar isto?"), acessibilidade (descreva objetos para usuários com deficiência visual).',
          '**Implementação:** Capture um frame de câmera (OpenCV `cv2.VideoCapture(0).read()`), salve como JPEG, passe-o ao VLM junto com a transcrição do Whisper.',
          '**Melhores modelos:** LLaVA 1.6 7B ou Llama 3.2 Vision 11B para compreensão geral de objetos e cenas.',
          '**Latência:** 3–6 segundos para captura de imagem + processamento do VLM + LLM + TTS na RTX 4070. Reduza com um VLM menor (Moondream 2 para identificação simples de objetos).',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: 'Caso de uso 3: Transcrição de reunião + análise de slides',
        content:
          '**Rode o Whisper continuamente durante uma reunião para construir uma transcrição, enquanto captura periodicamente capturas de tela de slides para análise com VLM. Ao final, combine transcrição + conteúdo dos slides para um resumo local e itens de ação — zero nuvem, zero exposição de dados.**',
        items: [
          '**STT:** Rode o faster-whisper em modo de streaming durante a reunião. Acumule segmentos em um buffer de transcrição.',
          '**Visão:** Cada vez que aparecer um novo slide (detectar via diff de captura de tela), capture uma imagem e passe-a ao LLaVA para descrição.',
          '**Combinação:** Ao final da reunião (ou sob demanda), passe transcrição + descrições de slides ao Llama 3.3 8B: "Resuma esta reunião e liste os itens de ação. Aqui está a transcrição: [...]. Aqui estão os conteúdos dos slides: [...]."',
          '**Saída:** Resumo lido em voz alta (Piper TTS) + arquivo de texto salvo localmente.',
          '**Valor GDPR:** Todo o processamento da reunião é local. Nenhum áudio, transcrição ou slide é enviado a qualquer serviço na nuvem. Em conformidade para contextos jurídicos, médicos e corporativos.',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: 'Caso de uso 4: Ferramenta de acessibilidade local',
        content:
          '**Um pipeline multimodal local pode servir como leitor de tela e assistente de UI controlado por voz para usuários com deficiências visuais ou motoras — funcionando offline sem as preocupações de privacidade dos serviços de acessibilidade na nuvem.**',
        items: [
          '**Leitor de tela:** Capture uma captura de tela a cada 2 segundos → o LLaVA descreve o que há na tela → o Piper lê em voz alta. Adicione comandos de voz (Whisper) para controlar o que descrever em seguida.',
          '**Navegação por voz:** O Whisper transcreve comandos de voz → o LLM interpreta a intenção → executa ações de teclado/mouse via pyautogui. Não requer internet.',
          '**Benefício de privacidade:** Usuários com deficiências costumam usar ferramentas de acessibilidade em contextos sensíveis (portais médicos, contas financeiras). Uma ferramenta local garante que nenhum conteúdo de tela seja transmitido a terceiros.',
          '**Uso com conectividade limitada:** Funciona em hospitais, prédios governamentais e áreas com internet restrita — importante para implantações institucionais de acessibilidade.',
          '**Escolha de modelo para acessibilidade:** Moondream 2 para descrições de tela rápidas (2 GB VRAM, ~1 seg por frame). LLaVA 7B para descrições mais ricas (6 GB VRAM, ~3 seg por frame).',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: 'Caso de uso 5: Análise local de câmera de segurança',
        content:
          '**Capture frames de uma câmera IP, rode a detecção de movimento localmente e acione a análise VLM apenas quando o movimento for detectado — sem serviços de câmera na nuvem nem armazenamento de vídeo de terceiros.**',
        items: [
          '**Captura de frames:** Use o OpenCV para capturar um frame a cada 5–10 segundos de uma câmera IP via RTSP (`cv2.VideoCapture("rtsp://camera-ip:554/stream")`). Para câmeras USB, use o índice de dispositivo 0.',
          '**Detecção de movimento:** Calcule a diferença entre frames consecutivos com `cv2.absdiff()`. Pule frames abaixo do limiar de movimento — isso evita chamadas VLM desnecessárias em cenas estáticas e vazias.',
          '**Análise VLM:** Quando o movimento for detectado, envie o frame ao VLM: "Descreva o que está acontecendo. Há uma pessoa? O que ela está fazendo?"',
          '**Saída de alerta:** Se a resposta indicar uma pessoa ou anomalia, acione uma notificação de desktop local e um anúncio do Piper TTS ("Pessoa detectada na porta principal"). Não requer serviço de notificação na nuvem.',
          '**Vantagem de privacidade:** Ring e Nest enviam vídeo para os servidores da AWS e do Google respectivamente. Esta configuração mantém toda a gravação no seu hardware — sem assinatura, sem armazenamento de vídeo de terceiros, sem compartilhamento de dados com serviços externos.',
          '**Melhor VLM para velocidade:** Moondream 2 para processamento rápido de frames (~1 segundo por frame, ~2 GB VRAM) ou LLaVA 7B para descrições de cena mais ricas (~3 segundos por frame, ~6 GB VRAM).',
          '**Nota de hardware:** Um Mac Mini M5 dedicado (~$600) rodando este stack 24/7 consome ~15–25W em repouso — menos eletricidade anualmente do que uma assinatura do Ring Doorbell Pro.',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: 'Construindo o orquestrador Python',
        content:
          'Um orquestrador Python assíncrono direciona as entradas para o modelo correto e combina as saídas. Usar asyncio permite que o STT e o processamento de visão rodem em paralelo.',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"        # or "llama3.2-vision" for combined VLM+LLM
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    """Convert audio array to text using whisper.cpp."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    """Get text description of an image using local VLM via Ollama."""
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={
            "model": VISION_MODEL,
            "prompt": "Describe the content of this image in detail, including any text visible.",
            "images": [image_b64],
            "stream": False,
        },
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    """Generate a response combining transcript and optional image description."""
    if image_description:
        prompt = (
            f"The user asked (via voice): {transcript}\\n\\n"
            f"The image shows: {image_description}\\n\\n"
            "Answer the question based on the image content. Be concise — 2-3 sentences."
        )
    else:
        prompt = transcript
    # Note: /api/generate is for single-turn queries.
    # For multi-turn conversation with context, use
    # /api/chat with a messages array instead.
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    """Convert text to speech using Piper TTS."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}',
            shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    """Process a multimodal query: transcribe audio and optionally describe image in parallel."""
    if image_path:
        # Run STT and vision in parallel
        transcript, image_desc = await asyncio.gather(
            transcribe_audio(audio),
            describe_image(image_path),
        )
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None

    if not transcript or len(transcript) < 3:
        return

    print(f"You: {transcript}")
    if image_desc:
        print(f"Image: {image_desc[:100]}...")

    response = await reason(transcript, image_desc)
    print(f"Assistant: {response}")
    await speak(response)

async def main():
    print("Multimodal assistant ready. Ctrl+C to stop.")
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)  # Pass image_path="photo.jpg" for image queries

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: 'Otimização do desempenho',
        content:
          'Otimizações-chave para alcançar uma latência aceitável no stack multimodal completo:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'As duas maiores otimizações são: (1) rodar STT e VLM em paralelo com asyncio quando tanto o áudio quanto a imagem estiverem disponíveis, e (2) transmitir a saída do LLM para o TTS frase por frase para que o áudio comece antes de o LLM terminar.',
          },
          {
            type: 'plain-terms',
            text: 'Sem paralelismo, o pipeline é: STT (0,5 seg) → VLM (3 seg) → LLM (1 seg) → TTS (0,1 seg) = 4,6 seg no total. Com STT + VLM paralelos, torna-se: max(STT, VLM) (3 seg) → LLM (1 seg) → TTS (0,1 seg) = 4,1 seg. Adicione TTS em streaming e o usuário ouve áudio aos 3,5 seg em vez de 4,6 seg.',
          },
        ],
        items: [
          '**STT + VLM paralelos:** Use `asyncio.gather(transcribe_audio(), describe_image())` para rodar ambos simultaneamente. Economiza 0,3–2 segundos dependendo do tamanho do modelo STT.',
          '**Mantenha os modelos quentes:** O Ollama mantém os modelos na VRAM automaticamente entre solicitações. O whisper.cpp em modo stream permanece carregado. Nunca recarregue entre consultas.',
          '**Transmita LLM → TTS:** Detecte os limites de frase na saída do LLM em streaming (`.`, `!`, `?`). Passe cada frase concluída ao Piper enquanto o LLM continua gerando.',
          '**Gestão de VRAM:** Se a VRAM total estiver apertada, descarregue o VLM após o processamento de imagem (endpoint HTTP de exclusão do Ollama) antes de carregar o LLM de texto. Adiciona ~2–3 segundos, mas permite que uma GPU de 8 GB gerencie o stack completo.',
          '**Use o Llama 3.2 Vision como VLM + LLM combinado:** Elimina completamente o overhead da troca de modelo — um modelo gerencia tanto a descrição visual quanto o raciocínio textual. Contrapartida: raciocínio de texto puro ligeiramente mais fraco em comparação com o Llama 3.3 8B dedicado.',
          '**Meta de primeiro áudio do TTS:** O Piper gera o primeiro áudio em 50–100 ms após receber texto. Transmita uma frase por vez para uma latência TTS percebida de menos de um segundo.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitações e avaliação honesta',
        content:
          '**Um pipeline multimodal local não é o GPT-5.5.** Ser claro sobre as lacunas previne a frustração e ajuda a projetar em torno das limitações.',
        items: [
          '**Costuras de modalidade:** A saída de visão é serializada para texto antes de ser passada ao LLM de texto. O LLM não pode raciocinar diretamente sobre as características da imagem — ele raciocina sobre uma descrição textual da imagem. Isso perde informação em tarefas que exigem raciocínio visual sutil.',
          '**Sem vídeo em tempo real:** Os VLMs locais processam frames individuais, não vídeo contínuo. Para vídeo, extraia frames a 0,5–2 FPS e processe sequencialmente. Isso significa que você não pode perguntar "o que acabou de acontecer nos últimos 5 segundos deste vídeo".',
          '**Lacuna de qualidade do VLM:** Os modelos de visão locais (LLaVA 7B, Llama 3.2 Vision 11B) ficam atrás do GPT-5.5 Vision em infográficos complexos, texto manuscrito, cenas ambíguas e tarefas que exigem amplo conhecimento do mundo junto à compreensão visual.',
          '**Pressão de VRAM:** Rodar três modelos simultaneamente em uma única GPU exige uma gestão cuidadosa da VRAM. Em GPUs de 12 GB você está no limite — os tamanhos dos modelos devem ser escolhidos cuidadosamente para evitar erros OOM (sem memória).',
          '**Latência vs. nuvem:** Uma chamada multimodal na nuvem (GPT-5.5) leva 1–3 segundos para áudio + imagem + texto. Um pipeline local leva 3–8 segundos em hardware comparável — mais lento, mas com total privacidade e custo zero por consulta.',
          '**Consistência:** Os modelos locais produzem qualidade de saída mais variável do que os modelos na nuvem com extenso RLHF. Espere alucinações ocasionais tanto em descrições de visão quanto em respostas do LLM.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar um único modelo tanto para visão quanto para raciocínio textual?',
            a: 'Sim. O Llama 3.2 Vision 11B gerencia tanto a compreensão de imagens quanto o raciocínio textual em um único modelo — você pode pular a configuração separada de LLaVA + Llama 3.3 8B. Isso reduz a VRAM de ~15 GB para ~8 GB e elimina uma chamada à API do Ollama. A contrapartida é um desempenho ligeiramente pior em tarefas de raciocínio de texto puro em comparação com um Llama 3.3 8B dedicado.',
          },
          {
            q: 'Como lido com a entrada de vídeo em um pipeline multimodal local?',
            a: 'Extraia frames do vídeo usando o OpenCV (`cv2.VideoCapture`) e processe cada frame individualmente através do VLM. Para um vídeo de 1 minuto a 1 FPS, você obtém 60 frames — cada um levando 2–5 segundos para processar, então o vídeo completo levaria 2–5 minutos para ser analisado. Para monitoramento de vídeo em tempo real, processe apenas 1 frame a cada 2–3 segundos e use detecção de movimento para pular frames estáticos. A compreensão completa de vídeo (rastreamento de objetos entre frames, compreensão de sequências temporais) está além das capacidades atuais dos VLMs locais.',
          },
          {
            q: 'Qual é a VRAM mínima na GPU para o stack multimodal completo?',
            a: 'Em uma configuração de VRAM compartilhada (todos os modelos na VRAM simultaneamente), são necessários 15 GB para Whisper large-v3 + LLaVA 7B + Llama 3.3 8B. Com o Llama 3.2 Vision 11B substituindo tanto o VLM quanto o LLM de texto, 8 GB de VRAM são suficientes. Em uma GPU de 12 GB (RTX 4070), você pode rodar o stack completo de modelos separados com VRAM bem apertada com quantização pequena, ou usar o Llama 3.2 Vision 11B para a abordagem combinada. Em 8 GB de VRAM (RTX 4060), use o Llama 3.2 Vision 11B com quantização agressiva (Q3_K) ou troque modelos entre consultas de visão e texto.',
          },
          {
            q: 'O pipeline multimodal pode processar PDFs?',
            a: 'Não diretamente — os VLMs locais aceitam entrada de imagem, não de PDF. Converta primeiro as páginas do PDF em imagens usando pdf2image (`pip install pdf2image`) ou pypdfium2 (`pip install pypdfium2`). Depois passe cada imagem de página ao VLM separadamente. Para um PDF de 10 páginas, você gera 10 descrições de imagem separadas, depois passa todas as descrições ao LLM de texto para uma análise ou resumo combinado. É mais lento que o suporte nativo a PDF, mas produz bons resultados em documentos estruturados.',
          },
          {
            q: 'O pipeline multimodal local é compatível com o GDPR para uso médico ou jurídico?',
            a: 'Um pipeline multimodal local que gera zero tráfego de rede durante a operação é compatível por design para casos de uso interno — não é necessário um acordo de processamento de dados porque nenhum dado pessoal sai dos seus sistemas. Para verificar a conformidade: rode o Wireshark durante a operação e confirme zero pacotes de saída do processo do pipeline. O armazenamento também é importante — se o seu orquestrador armazena histórico de conversas ou arquivos de imagem, esses armazenamentos estão sujeitos a requisitos de retenção. Use armazenamento efêmero em memória ou armazenamento local criptografado com políticas de retenção apropriadas.',
          },
          {
            q: 'Posso adicionar busca na web ao pipeline multimodal?',
            a: 'Sim. Adicione um passo de busca entre o orquestrador e o LLM de texto. Use a API do DuckDuckGo ou um sistema RAG local (AnythingLLM, PrivateGPT) para recuperar contexto antes do passo de raciocínio do LLM. O LLM então raciocina sobre a transcrição + descrição de imagem + resultados de busca combinados. Isso adiciona 0,5–2 segundos à latência, mas permite responder perguntas de atualidade junto à análise visual.',
          },
          {
            q: 'Quanta eletricidade o stack multimodal completo consome funcionando 24/7?',
            a: 'Repouso com modelos quentes na VRAM: ~50–80 W (GPU de desktop), ~15–25 W (Mac Mini M5 Pro). Processamento ativo: ~150–300 W (GPU de desktop), ~30–60 W (Mac Mini M5 Pro). Custo mensal a $0,15/kWh: aproximadamente $5–15 (Mac Mini) ou $15–35 (desktop). Isso é menos que rodar uma API na nuvem com volumes de consultas comparáveis — um Mac Mini rodando o stack completo 24/7 custa menos em eletricidade por mês do que dois dias de uso da API do GPT-5.5 a 100 consultas/dia.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[whisper.cpp no GitHub](https://github.com/ggerganov/whisper.cpp) — Fonte e documentação do componente STT.',
          '[faster-whisper no GitHub](https://github.com/SYSTRAN/faster-whisper) — Alternativa STT em Python com VAD integrado para streaming.',
          '[Página do projeto LLaVA](https://llava-vl.github.io) — Arquitetura do modelo de visão e fichas de modelo.',
          '[Ficha do modelo Llama 3.2 Vision](https://huggingface.co/meta-llama) — Modelo multimodal da Meta que suporta raciocínio com imagem + texto.',
          '[Documentação do Ollama](https://ollama.com) — API de modelos de visão, formato de solicitação multimodal.',
          '[Piper TTS no GitHub](https://github.com/rhasspy/piper) — Componente de saída TTS, biblioteca de packs de voz.',
          '[Coqui TTS no GitHub](https://github.com/coqui-ai/TTS) — TTS alternativo com suporte a clonagem de voz.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Reconhecimento de voz local 2026: Whisper.cpp vs faster-whisper](/pt/power-local-llm/local-whisper-stt-comparison-2026) — Análise detalhada do componente STT.',
          '[Modelos de visão locais 2026: LLaVA, Llama 3.2 Vision e Ollama](/pt/power-local-llm/local-vision-models-llava-ollama-2026) — Análise detalhada do componente de visão.',
          '[TTS local e clonagem de voz 2026](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Análise detalhada do componente TTS.',
          '[Como construir um assistente de voz totalmente offline em 2026](/pt/power-local-llm/build-local-voice-assistant-2026) — A versão só de voz (mais simples, voz + LLM + TTS sem visão).',
          '[Guia de hardware para LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) — Seleção de hardware para pipelines multi-modelo.',
          '[Quantização de LLM explicada](/pt/local-llms/llm-quantization-explained) — Como encaixar múltiplos modelos em VRAM limitada via quantização.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Pipeline multimodal de IA local 2026: combine voz, visão e texto offline',
       description: 'Rode IA de voz + visão + texto localmente em 2026. Combine whisper.cpp, LLaVA 1.6, Ollama e Piper TTS. Orquestrador Python completo — sem nuvem, sem chaves de API.',
       url: 'https://www.promptquorum.com/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text',
       inLanguage: 'pt-BR',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
       'proficiencyLevel': 'Advanced',
     },
},

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'خط أنابيب الذكاء الاصطناعي متعدد الوسائط المحلي ⁨2026⁩: دمج الصوت والرؤية والنص دون اتصال',
    seoTitle: 'خط أنابيب ⁨LLM⁩ متعدد الوسائط محلياً: صوت ورؤية ونص',
    intro:
      'يجمع خط أنابيب الذكاء الاصطناعي متعدد الوسائط المحلي بين نماذج متخصصة مستقلة لكل وسيط — whisper.cpp لإدخال الصوت، وLLaVA أو Llama 3.2 Vision لفهم الصور، ونموذج Ollama LLM للاستدلال النصي، وبرنامج Piper TTS لإخراج الصوت — تُنسَّق جميعها في نظام متماسك يعمل بنسبة 100% دون اتصال بالإنترنت. هذا هو المعادل المحلي لقدرات GPT-5.5 متعددة الوسائط: لا يفهم نموذج واحد كل شيء، لكن المنسِّق يوجه كل نوع من أنواع المدخلات إلى النموذج الصحيح ويجمع المخرجات. يوضح هذا الدليل كيفية بناء قدرات خط أنابيب متعدد الوسائط محليًا من هذه المكونات مفتوحة المصدر — متضمنًا البنية المعمارية ومجموعة المكونات ومستويات الأجهزة وخمس حالات استخدام عملية ومنسِّق Python غير متزامن يعالج مدخلات الصوت والرؤية بشكل متوازٍ.',
    metaDescription:
      'خط أنابيب بدون اتصال: whisper.cpp للصوت وLLaVA للرؤية وOllama للنص وPiper TTS للإخراج. منسِّق Python غير متزامن مع 5 حالات استخدام عملية محلية.',
    twitterDescription:
      'ذكاء اصطناعي متعدد الوسائط محلي في 2026: دمج Whisper STT + رؤية LLaVA + Ollama LLM + Piper TTS في خط أنابيب دون اتصال. دليل البنية المعمارية ومستويات الأجهزة وكود Python.',
    audience:
      'المطورون الذين يبنون أنظمة ذكاء اصطناعي متعددة الوسائط محليًا بالكامل — دمج معالجة الصوت والرؤية والنص في خط أنابيب واحد دون اتصال لتحليل المستندات وأدوات إمكانية الوصول ومساعدي الاجتماعات أو الإجابة على الأسئلة البصرية.',
    readTime: '16 دقيقة قراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'خط أنابيب الذكاء الاصطناعي متعدد الوسائط المحلي',
    targetKeywords: [
      'خط أنابيب الذكاء الاصطناعي متعدد الوسائط المحلي 2026',
      'whisper llava ollama piper عربي',
      'ذكاء اصطناعي متعدد الوسائط دون اتصال',
      'صوت رؤية نص ذكاء اصطناعي محلي',
      'بديل محلي لـ GPT-5.5',
      'بناء ذكاء اصطناعي متعدد الوسائط دون إنترنت',
      'خط أنابيب الصوت والرؤية محليًا',
      'دمج llava whisper محلي',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'LLaVA 1.6 7B',
      'Qwen2-VL 7B',
      'Llama 3.2 Vision 11B',
      'Llama 3.3 8B',
      'Moondream 2',
      'Piper TTS',
      'Coqui TTS',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Pro 36 GB',
      'Apple M5 Max 128 GB',
    ],
    leadAnswerBlock:
      '**يتطلب خط أنابيب الذكاء الاصطناعي متعدد الوسائط المحلي في 2026 ما لا يقل عن 12 غيغابايت من ذاكرة VRAM في وحدة معالجة الرسومات لتشغيل STT + الرؤية + LLM + TTS في آنٍ واحد.** الحد الأدنى العملي القابل للتطبيق هو RTX 4070 (12 غيغابايت) أو Mac M5 Pro (ذاكرة موحدة 36 غيغابايت)، مع تشغيل whisper.cpp لإدخال الصوت وLLaVA 1.6 7B للرؤية وLlama 3.3 8B للاستدلال النصي وبرنامج Piper لإخراج الصوت. على RTX 3060 12 غيغابايت يمكنك تشغيل المجموعة بنموذج LLM أصغر (Phi-4) دون رؤية — أو تبادل النماذج داخل وخارج ذاكرة VRAM حسب الحاجة. القرار المعماري الرئيسي هو ما إذا كنت ستتشارك VRAM بين نموذج الرؤية وLLM (يتطلب 12 غيغابايت أو أكثر) أو تشغيلهما بشكل متسلسل على وحدة معالجة رسومات أصغر.',
    quickAnswerTop: {
      ar: {
        question: 'كيف تبني خط أنابيب ذكاء اصطناعي متعدد الوسائط محليًا بالصوت والرؤية والنص في 2026؟',
        answer:
          'ادمج أربعة نماذج متخصصة: whisper.cpp (الصوت ← النص)، ونموذج رؤية-لغة مثل LLaVA 1.6 أو Llama 3.2 Vision (الصورة ← وصف نصي)، ونموذج Ollama LLM مثل Llama 3.3 8B (النص ← استدلال نصي)، وبرنامج Piper TTS (النص ← كلام). يكشف منسِّق Python غير متزامن نوع المدخل ويوجهه إلى النموذج الصحيح، ويجمع المخرجات في استجابة متماسكة. الحد الأدنى من VRAM: 12 غيغابايت لإعداد VRAM مشترك؛ 8 غيغابايت في حال تبادل النماذج.',
        bullets: [
          'إدخال الصوت: whisper.cpp (Metal على Mac، CUDA على NVIDIA) ← نص مُفرَّغ.',
          'إدخال الصورة: LLaVA 1.6 7B أو Llama 3.2 Vision 11B عبر Ollama ← وصف نصي.',
          'الاستدلال النصي: Ollama + Llama 3.3 8B ← نص الاستجابة.',
          'إخراج الصوت: Piper TTS (وحدة المعالجة المركزية، ~0.1 ثانية تأخير) ← تشغيل صوتي.',
          'الحد الأدنى من الأجهزة: RTX 4070 12 غيغابايت أو M5 Pro 36 غيغابايت للمجموعة الكاملة المتزامنة.',
          'يمكن للرؤية وLLM مشاركة مثيل Ollama واحد (يتولى Llama 3.2 Vision الاثنين).',
          'إجمالي VRAM للمجموعة الكاملة: ~15 غيغابايت (whisper 3 غيغابايت + LLaVA 7B 6 غيغابايت + Llama 3.3 8B 6 غيغابايت + Piper CPU).',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'ما هو خط الأنابيب متعدد الوسائط؟', anchor: '#what-is-multimodal' },
      { label: 'التكلفة: خط الأنابيب المحلي مقابل واجهات برمجة التطبيقات السحابية', anchor: '#cost-comparison' },
      { label: 'نظرة عامة على البنية المعمارية', anchor: '#architecture' },
      { label: 'مجموعة المكونات', anchor: '#component-stack' },
      { label: 'مستويات الأجهزة', anchor: '#hardware-tiers' },
      { label: 'حالة الاستخدام 1: محلل المستندات بالتحكم الصوتي', anchor: '#use-case-1' },
      { label: 'حالة الاستخدام 2: مساعد الأسئلة والأجوبة البصري', anchor: '#use-case-2' },
      { label: 'حالة الاستخدام 3: نسخ الاجتماعات + تحليل الشرائح', anchor: '#use-case-3' },
      { label: 'حالة الاستخدام 4: أداة إمكانية الوصول المحلية', anchor: '#use-case-4' },
      { label: 'حالة الاستخدام 5: تحليل كاميرا الأمان المحلية', anchor: '#use-case-5' },
      { label: 'بناء منسِّق Python', anchor: '#orchestrator' },
      { label: 'تحسين الأداء', anchor: '#performance' },
      { label: 'القيود والتقييم الصادق', anchor: '#limitations' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'مزيد من القراءة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**خط الأنابيب متعدد الوسائط المحلي هو أربعة نماذج تُنسَّق بشكل منفصل — وليس نموذجًا واحدًا مثل GPT-5.5.** يتولى whisper.cpp الصوت، ويتولى VLM (LLaVA أو Llama 3.2 Vision) الصور، ويتولى LLM الاستدلال النصي، ويتولى برنامج Piper إخراج الصوت. يوجه المنسِّق المدخلات إلى النموذج الصحيح ويجمع المخرجات.',
          '**يمكن لـ Llama 3.2 Vision 11B أن يحل محل كل من VLM وLLM النصي في نموذج واحد.** يقبل النص والصور في آنٍ واحد ويتولى كلًا من الوصف والاستدلال في خطوة واحدة — مما يقلل VRAM من ~15 غيغابايت (نماذج منفصلة) إلى ~8 غيغابايت (Llama 3.2 Vision 11B منفردًا).',
          '**الحد الأدنى من الأجهزة للمجموعة الكاملة: RTX 4070 12 غيغابايت أو Apple M5 Pro 36 غيغابايت.** يمكن لـ RTX 3060 12 غيغابايت تشغيل نسخة مقيدة (Phi-4 بدلًا من Llama 3.3 8B، أو تحميل النماذج بشكل متسلسل) — صالحة للاستخدام لكن أبطأ.',
          '**خمس حالات استخدام عملية تبرر التعقيد:** تحليل المستندات بالتحكم الصوتي، والأسئلة والأجوبة البصرية مع التفاعل الصوتي، ونسخ الاجتماعات مع تحليل الشرائح، وأدوات إمكانية الوصول بقارئ الشاشة المحلي، وتحليل كاميرا الأمان المحلية.',
          '**التنسيق غير المتزامن ضروري لأداء مقبول.** يمكن لـ STT والرؤية العمل بشكل متوازٍ عند توفر كلٍّ من مدخلات الصوت والصورة — يانتظر LLM النصي كليهما ثم يُنشئ استجابة مجمّعة.',
          '**يُقلل بث مخرجات LLM إلى TTS من التأخير المُدرَك بمقدار 0.3–0.7 ثانية.** ابدأ في توليد الصوت من الجملة الأولى المكتملة بينما لا يزال LLM يكتب بقية الاستجابة.',
          '**هذا ليس GPT-5.5.** تُنتج النماذج المنفصلة "درزات" — يُمرَّر وصف نموذج الرؤية نصًا إلى LLM، مما يفقد بعض الاستدلال متعدد الوسائط. جودة المهام المعقدة متعددة الوسائط أدنى من النماذج الحدية المغلقة، لكنها كافية للمستندات المنظمة والمهام ذات الصور الواضحة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**إجمالي VRAM للمجموعة الكاملة:** ~15 غيغابايت (Whisper 3 غيغابايت + LLaVA 7B 6 غيغابايت + Llama 3.3 8B 6 غيغابايت). يعمل برنامج Piper على وحدة المعالجة المركزية.',
          '**المجموعة المبسطة (Llama 3.2 Vision 11B):** ~8 غيغابايت VRAM — يتولى الرؤية والاستدلال النصي معًا في نموذج واحد.',
          '**تأخير الصوت (Whisper small، RTX 4070):** ~200–500 مللي ثانية STT. 500–1500 مللي ثانية أول رمز LLM. 100 مللي ثانية Piper TTS.',
          '**تأخير معالجة الصورة (LLaVA 7B، RTX 4070):** ~2–5 ثوانٍ لكل صورة تبعًا للدقة والمطالبة.',
          '**لا فيديو في الوقت الفعلي:** تعالج VLMs الإطارات الفردية، وليس تدفقات الفيديو المستمرة. للفيديو، استخرج الإطارات بمعدل 1 إطار في الثانية وعالج كل منها.',
          '**نفس مثيل Ollama لـ VLM + LLM:** يمكن لـ Ollama تشغيل Llama 3.2 Vision كنموذج رؤية ونموذج نصي في آنٍ واحد، مما يوفر VRAM.',
          '**جميع المكونات مرخصة بموجب MIT أو Apache 2.0** (whisper.cpp MIT، LLaVA MIT، Llama 3.3 8B Llama 3 Community License، Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'ما هو خط الأنابيب متعدد الوسائط للذكاء الاصطناعي؟',
        content:
          'يقبل نظام الذكاء الاصطناعي متعدد الوسائط أنواعًا متعددة من المدخلات (الصوت، الصور، النص) ويُنتج أنواعًا متعددة من المخرجات (نص، كلام). المعادل السحابي هو GPT-5.5 — نموذج واحد يقبل الصوت والصور والنص بأي تركيبة.',
        items: [
          '**النهج السحابي (GPT-5.5):** نموذج ضخم مدرَّب على جميع الوسائط في آنٍ واحد. يُكتسب الاستدلال متعدد الوسائط أثناء التدريب — يمكن للنموذج الاستدلال أصليًا على العلاقة بين محتوى الصورة واستفسارات الصوت.',
          '**النهج المحلي (هذا الدليل):** نماذج متخصصة مستقلة لكل وسيط، تُربط بواسطة منسِّق. أكثر نمطية وأقل تكلفة في التشغيل، لكنه يُنتج "درزات" — تُسلسَل مخرجات نموذج الرؤية إلى نص قبل تمريرها إلى LLM.',
          '**لماذا البناء محليًا:** الخصوصية (الصور الطبية، المستندات المملوكة، لقطات الشاشة السرية)، التكلفة (صفر رسوم لكل استعلام)، القدرة على العمل دون اتصال (لا حاجة للإنترنت بعد تنزيل النموذج)، التخصيص (استبدال أي مكوِّن).',
          '**ميزة النمطية:** يمكنك ترقية أي مكوِّن بشكل مستقل. عند ظهور نموذج STT محلي أفضل، استبدل طبقة STT فقط. عند ظهور VLM أفضل، استبدل نموذج الرؤية فقط — يبقى باقي خط الأنابيب دون تغيير.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'التكلفة: خط الأنابيب المحلي مقابل واجهات برمجة التطبيقات السحابية (شهريًا)',
        content:
          'عند الاستخدام المعتدل (أكثر من 100 استعلام/يوم)، يستعيد خط الأنابيب متعدد الوسائط المحلي تكلفته في 3–6 أشهر. عند الاستخدام الخفيف (10 استعلامات/يوم)، يمتد نقطة التعادل إلى 12–18 شهرًا.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يكلف خط الأنابيب متعدد الوسائط المحلي 0 دولار/شهريًا في رسوم API بعد الاستثمار الأولي في الأجهزة (600–3,500 دولار)، مع تعادل مقابل تكاليف API لـ GPT-5.5 (135–225 دولار/شهر) في غضون 3–18 شهرًا حسب حجم الاستعلامات.',
          },
        ],
        columns: ['الاستخدام', 'GPT-5.5 API', 'Google Cloud', 'محلي'],
        rows: [
          { 'الاستخدام': '100 استعلام صوتي/يوم', 'GPT-5.5 API': '$90–150/شهر', 'Google Cloud': '$60–120/شهر', 'محلي': '$0' },
          { 'الاستخدام': '50 تحليل صورة/يوم', 'GPT-5.5 API': '$45–75/شهر', 'Google Cloud': '$30–60/شهر', 'محلي': '$0' },
          { 'الاستخدام': 'مجمَّع (نموذجي)', 'GPT-5.5 API': '$135–225/شهر', 'Google Cloud': '$90–180/شهر', 'محلي': '$0' },
          { 'الاستخدام': 'الأجهزة (مرة واحدة)', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', 'محلي': '$600–3,500' },
          { 'الاستخدام': 'نقطة التعادل', 'GPT-5.5 API': '—', 'Google Cloud': '—', 'محلي': '3–18 شهرًا' },
        ],
        note: 'يستعيد خط الأنابيب المحلي تكلفته في 3–6 أشهر عند الاستخدام المعتدل (أكثر من 100 استعلام/يوم). عند الاستخدام الخفيف (10 استعلامات/يوم)، يمتد نقطة التعادل إلى 12–18 شهرًا.',
      },
      architecture: {
        id: 'architecture',
        title: 'نظرة عامة على البنية المعمارية',
        content:
          'يستخدم خط الأنابيب متعدد الوسائط المحلي نمط الموجِّه-المنسِّق: تُصنَّف المدخلات عند الحد، وتُوجَّه إلى النموذج المناسب، وتُجمع المخرجات بواسطة المنسِّق قبل توليد الاستجابة النهائية.',
        items: [
          '**أنواع المدخلات:** صوت الميكروفون (كلام)، صورة الكاميرا أو الملف (رؤية)، نص لوحة المفاتيح (نص).',
          '**منطق التوجيه:** اكتشف نوع المدخل عند الحد. الصوت ← نموذج STT. الصورة ← VLM. النص ← مباشرةً إلى LLM. إذا وصل الصوت والصورة معًا، عالج بشكل متوازٍ واجمع.',
          '**سجل النماذج:** يُعيَّن كل نوع مدخل إلى دالة معالج تستدعي النموذج المناسب وتُعيد وصفًا نصيًا/نصًا مفرَّغًا.',
          '**المنسِّق:** يجمع جميع مخرجات النماذج، يجمعها في مطالبة واحدة لـ LLM النصي، يحصل على استجابة LLM، ويوجهها إلى TTS للإخراج الصوتي أو إلى الشاشة كنص.',
          '**أنواع المخرجات:** استجابة صوتية (Piper TTS)، نص على الشاشة، أو بيانات منظمة (JSON) للتكامل مع أنظمة أخرى.',
          '**المعالجة المتوازية:** يمكن لـ STT وVLM المعالجة في آنٍ واحد — يمكن لاستعلام صوتي حول صورة معالجة كليهما بالتوازي، مما يقلل إجمالي التأخير بنسبة 40–60% مقارنةً بالمعالجة المتسلسلة.',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: 'مجموعة المكونات',
        content:
          'المجموعة الكاملة مع متطلبات VRAM ودور كل مكوِّن.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تستخدم مجموعة الوسائط المتعددة المحلية الكاملة ~15 غيغابايت VRAM: Whisper large-v3 (3 غيغابايت) + LLaVA 1.6 7B (6 غيغابايت) + Llama 3.3 8B (6 غيغابايت)؛ يعمل Piper TTS على وحدة المعالجة المركزية دون تكلفة VRAM.',
          },
          {
            type: 'plain-terms',
            text: 'يمكنك خفض VRAM إلى 8 غيغابايت باستخدام Llama 3.2 Vision 11B كنموذج للرؤية والنص معًا — يتولى الصور والمحادثة في نموذج واحد، بينما يظل برنامج Whisper يتولى الصوت وبرنامج Piper يتولى الإخراج الصوتي.',
          },
        ],
        columns: ['الطبقة', 'الأداة', 'النموذج', 'VRAM', 'الدور'],
        rows: [
          {
            'الطبقة': 'STT',
            'الأداة': 'whisper.cpp',
            'النموذج': 'Whisper large-v3',
            'VRAM': '~3 غيغابايت',
            'الدور': 'الصوت ← نص مفرَّغ',
          },
          {
            'الطبقة': 'الرؤية',
            'الأداة': 'Ollama',
            'النموذج': 'LLaVA 1.6 7B',
            'VRAM': '~6 غيغابايت',
            'الدور': 'الصورة ← وصف نصي',
          },
          {
            'الطبقة': 'الاستدلال',
            'الأداة': 'Ollama',
            'النموذج': 'Llama 3.3 8B Q4',
            'VRAM': '~6 غيغابايت',
            'الدور': 'نص ← استجابة نصية',
          },
          {
            'الطبقة': 'TTS',
            'الأداة': 'Piper',
            'النموذج': 'en_US-lessac-medium',
            'VRAM': 'وحدة المعالجة المركزية فقط',
            'الدور': 'نص ← إخراج صوتي',
          },
          {
            'الطبقة': 'المجموع (نماذج منفصلة)',
            'الأداة': '',
            'النموذج': '',
            'VRAM': '~15 غيغابايت',
            'الدور': 'خط الأنابيب الكامل',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'استخدم Llama 3.2 Vision 11B بدلًا من LLaVA + Llama 3.3 8B المنفصلَين لخفض VRAM إلى ~8 غيغابايت. يتولى Llama 3.2 Vision وصف الصور والاستدلال النصي معًا في نموذج واحد، مما يلغي الحاجة إلى VLM منفصل.',
          },
          {
            type: 'tip',
            text: 'VLM بديل: [Qwen2-VL 7B](/ar/power-local-llm/local-vision-models-llava-ollama-2026) (~6 غيغابايت VRAM) — أقوى من LLaVA في التعرف البصري على الحروف متعدد اللغات وفهم المستندات. مُوصى به عند معالجة المستندات الصينية أو اليابانية أو الكورية.',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'مستويات الأجهزة لمتعدد الوسائط',
        content:
          'خمس تكوينات أجهزة مُرتَّبة حسب القدرة وحجم VRAM. كل منها يدعم مجموعة فرعية مختلفة من المجموعة متعددة الوسائط الكاملة.',
        columns: ['المستوى', 'وحدة معالجة الرسومات', 'الذاكرة العشوائية', 'يمكن تشغيله', 'التأخير (استعلام صوتي + صورة)'],
        rows: [
          {
            'المستوى': 'أساسي',
            'وحدة معالجة الرسومات': 'RTX 3060 12 غيغابايت',
            'الذاكرة العشوائية': '16 غيغابايت',
            'يمكن تشغيله': 'STT + Phi-4 (الرؤية بشكل منفصل، متسلسل)',
            'التأخير (استعلام صوتي + صورة)': '5–10 ثوانٍ',
          },
          {
            'المستوى': 'متوسط',
            'وحدة معالجة الرسومات': 'RTX 4070 12 غيغابايت',
            'الذاكرة العشوائية': '32 غيغابايت',
            'يمكن تشغيله': 'المجموعة الكاملة مع نماذج 7B (LLaVA 7B + Llama 3.3 8B، ملاءمة ضيقة)',
            'التأخير (استعلام صوتي + صورة)': '3–6 ثوانٍ',
          },
          {
            'المستوى': 'عالي',
            'وحدة معالجة الرسومات': 'RTX 4090 24 غيغابايت',
            'الذاكرة العشوائية': '64 غيغابايت',
            'يمكن تشغيله': 'المجموعة الكاملة مع VLM 13B + LLM 8B في آنٍ واحد',
            'التأخير (استعلام صوتي + صورة)': '2–4 ثوانٍ',
          },
          {
            'المستوى': 'Apple متوسط',
            'وحدة معالجة الرسومات': 'M5 Pro 36 غيغابايت',
            'الذاكرة العشوائية': '36 غيغابايت موحدة',
            'يمكن تشغيله': 'المجموعة الكاملة مع نماذج 8B عبر Metal (مُوصى به). يتناسب Qwen2-VL 7B + Llama 3.3 8B بشكل مريح في 36 غيغابايت مع مساحة لـ Whisper large-v3.',
            'التأخير (استعلام صوتي + صورة)': '2–4 ثوانٍ',
          },
          {
            'المستوى': 'Apple عالي',
            'وحدة معالجة الرسومات': 'M5 Max 128 غيغابايت',
            'الذاكرة العشوائية': '128 غيغابايت موحدة',
            'يمكن تشغيله': 'المجموعة الكاملة مع نماذج 70B — أفضل جودة محلية',
            'التأخير (استعلام صوتي + صورة)': '1–3 ثوانٍ',
          },
        ],
        note: 'يُقاس التأخير من نهاية الاستعلام الصوتي حتى بدء تشغيل TTS، بما في ذلك معالجة الصورة إذا كانت موجودة.',
        callouts: [
          {
            type: 'tip',
            text: 'يُعدّ M5 Max بذاكرة موحدة 128 غيغابايت المنصة المثلى لمتعدد الوسائط محليًا. يمكنه تشغيل Whisper large-v3 (3 غيغابايت) + Llama 3.2 Vision 90B (~64 غيغابايت) + Piper TTS في آنٍ واحد — يُعدّ نموذج الرؤية 90B أعلى جودة VLM محلي متاح، يقترب من GPT-5.5 في مهام المستندات والصور. لا يمكن لأي إعداد GPU منفصل مجاراة ذلك دون تكوينات متعددة GPU تكلف 2–3 أضعاف أكثر.',
          },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: 'حالة الاستخدام 1: محلل المستندات بالتحكم الصوتي',
        content:
          '**انطق بسؤال حول صورة مستند؛ يُفرِّغ خط الأنابيب صوتك، ويعالج المستند بصريًا، ويقرأ الإجابة بصوت عالٍ.** هذه حالة الاستخدام الأساسية لدمج STT + VLM + LLM + TTS.',
        items: [
          '**مثال:** التقط صورة لفاتورة وقل "ما المبلغ الإجمالي المستحق وما الموعد النهائي للدفع؟"',
          '**خط الأنابيب:** يُفرِّغ Whisper السؤال ← تُرسل الصورة إلى LLaVA أو Llama 3.2 Vision ← يستخرج VLM نص الفاتورة وبنيتها ← يجمع LLM السؤال + مخرجات VLM ← يقرأ Piper الإجابة بصوت عالٍ.',
          '**المطالبة:** "إليك صورة: [وصف VLM]. يسأل المستخدم: [النص المفرَّغ]. أجب على السؤال استنادًا إلى محتوى الصورة."',
          '**أفضل VLM:** MiniCPM-V 2.6 أو Llama 3.2 Vision 11B لدقة التعرف البصري على الحروف في الفواتير والمستندات.',
          '**قيمة الخصوصية:** السجلات الطبية، الوثائق القانونية، البيانات المالية — تُعالَج محليًا بالكامل دون خروج أي بيانات من الجهاز.',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: 'حالة الاستخدام 2: مساعد الأسئلة والأجوبة البصري',
        content:
          '**وجِّه الكاميرا نحو كائن أو مشهد، اطرح سؤالًا شفهيًا، واستلم إجابة منطوقة.** هذه حالة الاستخدام الأقرب محليًا إلى Google Lens مع التفاعل الصوتي.',
        items: [
          '**التطبيقات:** جرد المستودعات (التقط صورة لرف، اسأل "كم عدد وحدات SKU-4429 الموجودة؟")، التفتيش الميداني (التقط صورة لتلف الآلات، اسأل "هل هذا آمن للتشغيل؟")، إمكانية الوصول (وصف الأشياء للمستخدمين ضعاف البصر).',
          '**التنفيذ:** التقط إطار كاميرا (OpenCV `cv2.VideoCapture(0).read()`)، احفظه بصيغة JPEG، مرره إلى VLM مع النص المفرَّغ من Whisper.',
          '**أفضل النماذج:** LLaVA 1.6 7B أو Llama 3.2 Vision 11B لفهم الكائنات والمشاهد العامة.',
          '**التأخير:** 3–6 ثوانٍ لالتقاط الصورة + معالجة VLM + LLM + TTS على RTX 4070. قلله باستخدام VLM أصغر (Moondream 2 لتحديد الكائنات البسيطة).',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: 'حالة الاستخدام 3: نسخ الاجتماعات + تحليل الشرائح',
        content:
          '**شغِّل Whisper باستمرار خلال الاجتماع لبناء نص مفرَّغ، مع التقاط لقطات شاشة للشرائح بصفة دورية لتحليل VLM. في النهاية، ادمج النص المفرَّغ + محتوى الشرائح للحصول على ملخص محلي وبنود عمل — صفر سحابة، صفر تعرض للبيانات.**',
        items: [
          '**STT:** شغِّل faster-whisper في وضع البث خلال الاجتماع. اجمع المقاطع في مخزن مؤقت للنص المفرَّغ.',
          '**الرؤية:** في كل مرة تظهر شريحة جديدة (اكتشف بالتفاضل بين لقطات الشاشة)، التقط لقطة شاشة ومررها إلى LLaVA للوصف.',
          '**الدمج:** في نهاية الاجتماع (أو عند الطلب)، مرر النص المفرَّغ + أوصاف الشرائح إلى Llama 3.3 8B: "لخِّص هذا الاجتماع وسرد بنود العمل. إليك النص المفرَّغ: [...]. إليك محتوى الشرائح: [...]."',
          '**المخرجات:** ملخص يُقرأ بصوت عالٍ (Piper TTS) + ملف نصي محفوظ محليًا.',
          '**قيمة اللائحة العامة لحماية البيانات:** معالجة الاجتماع بالكامل محلية. لا يُرسَل صوت أو نص مفرَّغ أو شرائح إلى أي خدمة سحابية. متوافق مع السياقات القانونية والطبية والمؤسسية.',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: 'حالة الاستخدام 4: أداة إمكانية الوصول المحلية',
        content:
          '**يمكن لخط الأنابيب متعدد الوسائط المحلي أن يعمل كقارئ شاشة ومساعد واجهة مستخدم بالتحكم الصوتي للمستخدمين ذوي الإعاقات البصرية أو الحركية — يعمل دون اتصال بدون مخاوف خصوصية خدمات إمكانية الوصول السحابية.**',
        items: [
          '**قارئ الشاشة:** التقط لقطة شاشة كل ثانيتين ← يصف LLaVA محتوى الشاشة ← يقرؤها Piper بصوت عالٍ. أضف أوامر صوتية (Whisper) للتحكم في ما يُوصَف تاليًا.',
          '**التنقل الصوتي:** يُفرِّغ Whisper الأوامر الصوتية ← يفسر LLM القصد ← ينفذ إجراءات لوحة المفاتيح/الفأرة عبر pyautogui. لا يتطلب إنترنت.',
          '**ميزة الخصوصية:** يستخدم المستخدمون ذوو الإعاقات أدوات إمكانية الوصول في سياقات حساسة (بوابات طبية، حسابات مالية). تضمن الأداة المحلية عدم إرسال محتوى الشاشة إلى أطراف ثالثة.',
          '**الاستخدام في ظل محدودية الاتصال:** يعمل في المستشفيات والمباني الحكومية والمناطق ذات الإنترنت المقيد — مهم للنشر المؤسسي لإمكانية الوصول.',
          '**اختيار النموذج لإمكانية الوصول:** Moondream 2 لأوصاف الشاشة السريعة (2 غيغابايت VRAM، ~1 ثانية/إطار). LLaVA 7B لأوصاف أغنى (6 غيغابايت VRAM، ~3 ثوانٍ/إطار).',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: 'حالة الاستخدام 5: تحليل كاميرا الأمان المحلية',
        content:
          '**التقط إطارات من كاميرا IP، شغِّل كشف الحركة محليًا، وفعِّل تحليل VLM فقط عند اكتشاف الحركة — دون خدمات كاميرا سحابية أو تخزين فيديو تابع لطرف ثالث.**',
        items: [
          '**التقاط الإطارات:** استخدم OpenCV لالتقاط إطار كل 5–10 ثوانٍ من كاميرا IP عبر RTSP (`cv2.VideoCapture("rtsp://camera-ip:554/stream")`). للكاميرات USB، استخدم فهرس الجهاز 0.',
          '**كشف الحركة:** احسب الفرق بين الإطارات المتتالية باستخدام `cv2.absdiff()`. تجاهل الإطارات التي تقل عن حد الحركة — هذا يتجنب استدعاءات VLM غير الضرورية على المشاهد الساكنة.',
          '**تحليل VLM:** عند اكتشاف الحركة، أرسل الإطار إلى VLM: "صف ما يحدث. هل يوجد شخص؟ ماذا يفعل؟"',
          '**مخرجات التنبيه:** إذا أشارت الاستجابة إلى شخص أو خلل، فعِّل إشعار سطح المكتب المحلي وإعلان Piper TTS ("تم اكتشاف شخص عند الباب الأمامي"). لا تتطلب خدمة إشعارات سحابية.',
          '**ميزة الخصوصية:** ترسل Ring وNest مقاطع الفيديو إلى خوادم AWS وGoogle على التوالي. يحتفظ هذا الإعداد بجميع اللقطات على أجهزتك — بدون اشتراك، بدون تخزين فيديو تابع لطرف ثالث، بدون مشاركة بيانات مع خدمات خارجية.',
          '**أفضل VLM للسرعة:** Moondream 2 لمعالجة الإطارات السريعة (~1 ثانية/إطار، ~2 غيغابايت VRAM) أو LLaVA 7B لأوصاف مشهد أغنى (~3 ثوانٍ/إطار، ~6 غيغابايت VRAM).',
          '**ملاحظة الأجهزة:** يستهلك Mac Mini M5 مخصص (~600 دولار) يُشغِّل هذه المجموعة 24/7 ما بين ~15–25 واط في وضع الخمول — أقل كهرباءً سنويًا من اشتراك Ring Doorbell Pro.',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: 'بناء منسِّق Python',
        content:
          'يوجِّه منسِّق Python غير متزامن المدخلات إلى النموذج الصحيح ويجمع المخرجات. يتيح استخدام asyncio تشغيل STT ومعالجة الرؤية بشكل متوازٍ.',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"        # or "llama3.2-vision" for combined VLM+LLM
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    """Convert audio array to text using whisper.cpp."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    """Get text description of an image using local VLM via Ollama."""
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={
            "model": VISION_MODEL,
            "prompt": "Describe the content of this image in detail, including any text visible.",
            "images": [image_b64],
            "stream": False,
        },
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    """Generate a response combining transcript and optional image description."""
    if image_description:
        prompt = (
            f"The user asked (via voice): {transcript}\\n\\n"
            f"The image shows: {image_description}\\n\\n"
            "Answer the question based on the image content. Be concise — 2-3 sentences."
        )
    else:
        prompt = transcript
    # Note: /api/generate is for single-turn queries.
    # For multi-turn conversation with context, use
    # /api/chat with a messages array instead.
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    """Convert text to speech using Piper TTS."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}',
            shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    """Process a multimodal query: transcribe audio and optionally describe image in parallel."""
    if image_path:
        # Run STT and vision in parallel
        transcript, image_desc = await asyncio.gather(
            transcribe_audio(audio),
            describe_image(image_path),
        )
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None

    if not transcript or len(transcript) < 3:
        return

    print(f"You: {transcript}")
    if image_desc:
        print(f"Image: {image_desc[:100]}...")

    response = await reason(transcript, image_desc)
    print(f"Assistant: {response}")
    await speak(response)

async def main():
    print("Multimodal assistant ready. Ctrl+C to stop.")
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)  # Pass image_path="photo.jpg" for image queries

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: 'تحسين الأداء',
        content:
          'التحسينات الرئيسية لتحقيق تأخير مقبول على المجموعة متعددة الوسائط الكاملة:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أكبر تحسينَين: (1) تشغيل STT وVLM بالتوازي باستخدام asyncio عند توفر كلٍّ من الصوت والصورة، و(2) بث مخرجات LLM إلى TTS جملةً جملة حتى يبدأ الصوت قبل أن ينتهي LLM.',
          },
          {
            type: 'plain-terms',
            text: 'بدون تعددية: STT (0.5 ث) + VLM (3 ث) + LLM (1 ث) + TTS (0.1 ث) = 4.6 ث إجمالًا. مع STT + VLM متوازيَين: max(0.5 ث، 3 ث) + LLM (1 ث) + TTS (0.1 ث) = 4.1 ث. أضف بث TTS ويسمع المستخدم الصوت عند 3.5 ث بدلًا من 4.6 ث.',
          },
        ],
        items: [
          '**STT + VLM متوازيَان:** استخدم `asyncio.gather(transcribe_audio(), describe_image())` لتشغيل كليهما في آنٍ واحد. يوفر 0.3–2 ثانية حسب حجم نموذج STT.',
          '**أبقِ النماذج دافئة:** يحتفظ Ollama بالنماذج تلقائيًا في VRAM بين الطلبات. يبقى whisper.cpp في وضع البث محمَّلًا. لا تُعد التحميل بين الاستعلامات أبدًا.',
          '**ابث LLM ← TTS:** اكتشف حدود الجمل في مخرجات LLM المُبثَّثة (`.`، `!`، `?`). مرر كل جملة مكتملة إلى Piper بينما يواصل LLM التوليد.',
          '**إدارة VRAM:** إذا كانت إجمالي VRAM ضيقة، ألغِ تحميل VLM بعد معالجة الصورة (نقطة نهاية HTTP الحذف في Ollama) قبل تحميل LLM النصي. يضيف ~2–3 ثوانٍ لكن يتيح لـ GPU بسعة 8 غيغابايت التعامل مع المجموعة الكاملة.',
          '**استخدم Llama 3.2 Vision كـ VLM + LLM مدمجَين:** يلغي عبء التبديل بين النماذج كليًا — نموذج واحد يتولى وصف الرؤية والاستدلال النصي معًا. المقايضة: أداء أضعف قليلًا في الاستدلال النصي الخالص مقارنةً بـ Llama 3.3 8B المخصص.',
          '**هدف أول صوت TTS:** يُولِّد Piper أول صوت في غضون 50–100 مللي ثانية من استلام النص. ابث جملة واحدة في كل مرة لتأخير TTS مُدرَك دون ثانية.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'القيود والتقييم الصادق',
        content:
          '**خط الأنابيب متعدد الوسائط المحلي ليس GPT-5.5.** الوضوح بشأن الفجوات يمنع الإحباط ويساعد في التصميم حول القيود.',
        items: [
          '**درزات الوسائط:** تُسلسَل مخرجات الرؤية إلى نص قبل تمريرها إلى LLM النصي. لا يمكن لـ LLM الاستدلال مباشرةً على ميزات الصورة — يستدل على وصف نصي للصورة. يفقد هذا معلومات للمهام التي تتطلب استدلالًا بصريًا دقيقًا.',
          '**لا فيديو في الوقت الفعلي:** تعالج VLMs المحلية الإطارات الفردية، وليس الفيديو المستمر. للفيديو، استخرج الإطارات بمعدل 0.5–2 إطار/ثانية وعالجها بشكل متسلسل. هذا يعني أنك لا تستطيع السؤال "ماذا حدث للتو في آخر 5 ثوانٍ من هذا الفيديو".',
          '**فجوة جودة VLM:** نماذج الرؤية المحلية (LLaVA 7B، Llama 3.2 Vision 11B) متأخرة عن GPT-5.5 Vision في الرسوم البيانية المعقدة والنص المكتوب بخط اليد والمشاهد الغامضة والمهام التي تتطلب معرفة واسعة بالعالم إلى جانب فهم الرؤية.',
          '**ضغط VRAM:** تشغيل ثلاثة نماذج في آنٍ واحد على GPU واحدة يتطلب إدارة دقيقة لـ VRAM. على وحدات GPU بسعة 12 غيغابايت أنت عند الحد — يجب اختيار أحجام النماذج بعناية لتجنب أخطاء OOM (نفاد الذاكرة).',
          '**التأخير مقابل السحابة:** تستغرق استدعاء متعدد الوسائط السحابي (GPT-5.5) 1–3 ثوانٍ للصوت + الصورة + النص. يستغرق خط الأنابيب المحلي 3–8 ثوانٍ على أجهزة مماثلة — أبطأ، لكن مع خصوصية كاملة وتكلفة صفر لكل استعلام.',
          '**الاتساق:** تُنتج النماذج المحلية جودة مخرجات أكثر تفاوتًا من النماذج السحابية ذات RLHF الموسّع. توقع هلوسات عرضية في كلٍّ من أوصاف الرؤية واستجابات LLM.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استخدام نموذج واحد لكلٍّ من الرؤية والاستدلال النصي؟',
            a: 'نعم. يتولى Llama 3.2 Vision 11B فهم الصور والاستدلال النصي معًا في نموذج واحد — يمكنك تخطي إعداد LLaVA + Llama 3.3 8B المنفصل. يقلل هذا VRAM من ~15 غيغابايت إلى ~8 غيغابايت ويلغي استدعاء Ollama API إضافيًا. المقايضة هي أداء أضعف قليلًا في مهام الاستدلال النصي الخالص مقارنةً بـ Llama 3.3 8B المخصص.',
          },
          {
            q: 'كيف أتعامل مع إدخال الفيديو في خط الأنابيب متعدد الوسائط المحلي؟',
            a: 'استخرج الإطارات من الفيديو باستخدام OpenCV (`cv2.VideoCapture`) وعالج كل إطار بشكل فردي عبر VLM. لفيديو مدته دقيقة واحدة بمعدل 1 إطار/ثانية، تحصل على 60 إطارًا — كل منها يستغرق 2–5 ثوانٍ للمعالجة، لذا سيستغرق الفيديو الكامل 2–5 دقائق للتحليل. لمراقبة الفيديو في الوقت الفعلي، عالج إطارًا واحدًا فقط كل 2–3 ثوانٍ واستخدم كشف الحركة لتخطي الإطارات الساكنة. فهم الفيديو الكامل (تتبع الكائنات عبر الإطارات، فهم التسلسلات الزمنية) يتجاوز قدرات VLMs المحلية الحالية.',
          },
          {
            q: 'ما هو الحد الأدنى من VRAM في GPU للمجموعة متعددة الوسائط الكاملة؟',
            a: 'في إعداد VRAM مشترك (جميع النماذج في VRAM في آنٍ واحد)، يُطلب 15 غيغابايت لـ Whisper large-v3 + LLaVA 7B + Llama 3.3 8B. مع Llama 3.2 Vision 11B الذي يحل محل كلٍّ من VLM وLLM النصي، تكفي 8 غيغابايت VRAM. على GPU بسعة 12 غيغابايت (RTX 4070)، يمكنك تشغيل مجموعة النماذج المنفصلة الكاملة بـ VRAM ضيقة جدًا مع تكميم صغير، أو استخدام Llama 3.2 Vision 11B للنهج المدمج. على 8 غيغابايت VRAM (RTX 4060)، استخدم Llama 3.2 Vision 11B مع تكميم مكثف (Q3_K) أو تبادل النماذج بين استعلامات الرؤية والنص.',
          },
          {
            q: 'هل يمكن لخط الأنابيب متعدد الوسائط معالجة ملفات PDF؟',
            a: 'ليس مباشرةً — تقبل VLMs المحلية إدخال الصور، وليس ملفات PDF. حوِّل صفحات PDF إلى صور أولًا باستخدام pdf2image (`pip install pdf2image`) أو pypdfium2 (`pip install pypdfium2`). ثم مرر كل صورة صفحة إلى VLM بشكل منفصل. لملف PDF من 10 صفحات، تُولِّد 10 أوصاف صور منفصلة، ثم تمرر جميع الأوصاف إلى LLM النصي للتحليل أو الملخص المدمج. هذا أبطأ من دعم PDF الأصلي لكن يُنتج نتائج جيدة على المستندات المنظمة.',
          },
          {
            q: 'هل خط الأنابيب متعدد الوسائط المحلي متوافق مع اللائحة العامة لحماية البيانات للاستخدام الطبي أو القانوني؟',
            a: 'خط الأنابيب متعدد الوسائط المحلي الذي يُولِّد حركة مرور شبكية صفرية أثناء التشغيل متوافق بطبيعة تصميمه لحالات الاستخدام الداخلية — لا تتطلب اتفاقية معالجة بيانات لأنه لا تغادر بيانات شخصية أنظمتك. للتحقق من التوافق: شغِّل Wireshark أثناء التشغيل وتأكد من وجود صفر حزم صادرة من عملية خط الأنابيب. يُعدّ التخزين مهمًا أيضًا — إذا خزَّن منسِّقك سجلات المحادثات أو ملفات الصور، فإن تلك المخازن تخضع لمتطلبات الاحتفاظ بالبيانات. استخدم تخزينًا مؤقتًا في الذاكرة أو تخزينًا محليًا مشفرًا مع سياسات احتفاظ مناسبة.',
          },
          {
            q: 'هل يمكنني إضافة بحث على الويب إلى خط الأنابيب متعدد الوسائط؟',
            a: 'نعم. أضف خطوة بحث بين المنسِّق وLLM النصي. استخدم DuckDuckGo API أو نظام RAG محلي (AnythingLLM، PrivateGPT) لاسترداد السياق قبل خطوة استدلال LLM. يستدل LLM بعد ذلك على النص المفرَّغ + وصف الصورة + نتائج البحث مجتمعةً. يضيف هذا 0.5–2 ثانية إلى التأخير لكنه يتيح الإجابة على أسئلة الأحداث الراهنة إلى جانب التحليل البصري.',
          },
          {
            q: 'كم تستهلك المجموعة متعددة الوسائط الكاملة من الكهرباء عند التشغيل 24/7؟',
            a: 'في وضع الخمول مع النماذج الدافئة في VRAM: ~50–80 واط (GPU سطح المكتب)، ~15–25 واط (Mac Mini M5 Pro). المعالجة النشطة: ~150–300 واط (GPU سطح المكتب)، ~30–60 واط (Mac Mini M5 Pro). التكلفة الشهرية بسعر $0.15/كيلوواط ساعة: تقريبًا $5–15 (Mac Mini) أو $15–35 (سطح المكتب). هذا أقل من تشغيل API سحابية بأحجام استعلامات مماثلة — Mac Mini يُشغِّل المجموعة الكاملة 24/7 يكلف كهرباءً أقل شهريًا من يومَين باستخدام API لـ GPT-5.5 بمعدل 100 استعلام/يوم.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[whisper.cpp على GitHub](https://github.com/ggerganov/whisper.cpp) — مصدر مكوِّن STT وتوثيقه.',
          '[faster-whisper على GitHub](https://github.com/SYSTRAN/faster-whisper) — بديل STT بلغة Python مع VAD مدمج للبث.',
          '[صفحة مشروع LLaVA](https://llava-vl.github.io) — بنية نموذج الرؤية وبطاقات النموذج.',
          '[بطاقة نموذج Llama 3.2 Vision](https://huggingface.co/meta-llama) — النموذج متعدد الوسائط من Meta الذي يدعم استدلال الصورة + النص.',
          '[توثيق Ollama](https://ollama.com) — API نماذج الرؤية، تنسيق الطلبات متعددة الوسائط.',
          '[Piper TTS على GitHub](https://github.com/rhasspy/piper) — مكوِّن إخراج TTS، مكتبة حزم الأصوات.',
          '[Coqui TTS على GitHub](https://github.com/coqui-ai/TTS) — TTS بديل مع دعم استنساخ الصوت.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مزيد من القراءة',
        items: [
          '[التعرف على الكلام المحلي 2026: Whisper.cpp مقابل faster-whisper](/ar/power-local-llm/local-whisper-stt-comparison-2026) — تحليل معمّق لمكوِّن STT.',
          '[نماذج الرؤية المحلية 2026: LLaVA وLlama 3.2 Vision وOllama](/ar/power-local-llm/local-vision-models-llava-ollama-2026) — تحليل معمّق لمكوِّن الرؤية.',
          '[TTS المحلي واستنساخ الصوت 2026](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — تحليل معمّق لمكوِّن TTS.',
          '[بناء مساعد صوتي يعمل بالكامل دون اتصال في 2026](/ar/power-local-llm/build-local-voice-assistant-2026) — النسخة الصوتية فقط (أبسط، صوت + LLM + TTS بدون رؤية).',
          '[دليل أجهزة LLM المحلي 2026](/ar/local-llms/local-llm-hardware-guide-2026) — اختيار الأجهزة لخطوط الأنابيب متعددة النماذج.',
          '[شرح تكميم LLM](/ar/local-llms/llm-quantization-explained) — ملاءمة نماذج متعددة في VRAM محدودة عبر التكميم.',
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
    title: '로컬 멀티모달 AI 파이프라인 2026: 음성·비전·텍스트를 오프라인으로 결합하기',
    seoTitle: '로컬 멀티모달 파이프라인 2026: 음성 + 비전 + 텍스트',
    intro:
      '로컬 멀티모달 AI 파이프라인은 각 모달리티에 특화된 독립 모델들을 결합합니다 — 음성 입력에는 whisper.cpp, 이미지 이해에는 LLaVA 또는 Llama 3.2 Vision, 텍스트 추론에는 Ollama의 LLM, 음성 출력에는 Piper TTS — 이 모델들이 100% 오프라인으로 동작하는 일관된 시스템으로 오케스트레이션됩니다. 이는 GPT-5.5의 멀티모달 기능에 해당하는 로컬 버전입니다. 단일 모델이 모든 것을 이해하는 것이 아니라, 오케스트레이터가 각 입력 유형을 적절한 모델로 라우팅하고 출력을 결합합니다. 이 가이드는 오픈소스 컴포넌트를 사용하여 로컬 멀티모달 파이프라인을 구축하는 방법을 설명합니다 — 아키텍처, 컴포넌트 스택, 하드웨어 등급, 다섯 가지 실용적인 사용 사례, 그리고 음성과 비전 입력을 병렬로 처리하는 Python 비동기 오케스트레이터를 다룹니다.',
    metaDescription:
      '2026년 whisper.cpp, LLaVA 1.6, Ollama, Piper TTS로 음성·비전·텍스트 AI를 로컬에서 실행하세요. 완전한 Python 오케스트레이터 코드 포함, 클라우드나 API 키 불필요.',
    twitterDescription:
      '2026년 로컬 멀티모달 AI: Whisper STT + LLaVA 비전 + Ollama LLM + Piper TTS를 오프라인 파이프라인으로 결합. 아키텍처 가이드, 하드웨어 등급, Python 코드 포함.',
    readTime: '16분 분량',
    educationalLevel: 'Advanced',
    primaryTerm: '로컬 멀티모달 AI 파이프라인',
    targetKeywords: [
      '로컬 멀티모달 AI 파이프라인 2026',
      'whisper llava ollama piper 한국어',
      '오프라인 멀티모달 AI',
      '음성 비전 텍스트 로컬 AI',
      'GPT-5.5 로컬 대안',
      '오프라인 멀티모달 AI 구축',
      '음성 비전 로컬 파이프라인',
      'llava whisper 통합',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'LLaVA 1.6 7B',
      'Qwen2-VL 7B',
      'Llama 3.2 Vision 11B',
      'Llama 3.3 8B',
      'Moondream 2',
      'Piper TTS',
      'Coqui TTS',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Pro 36 GB',
      'Apple M5 Max 128 GB',
    ],
    leadAnswerBlock:
      '**2026년 로컬 멀티모달 AI 파이프라인은 STT + 비전 + LLM + TTS를 동시에 실행하려면 GPU VRAM 최소 12 GB가 필요합니다.** 최소 실행 가능 구성은 RTX 4070(12 GB) 또는 Mac M5 Pro(36 GB 통합 메모리)로, 음성 입력에는 whisper.cpp, 비전에는 LLaVA 1.6 7B, 텍스트 추론에는 Llama 3.3 8B, 음성 출력에는 Piper를 사용합니다. RTX 3060 12 GB에서는 비전 없이 소형 LLM(Phi-4)으로 스택을 실행하거나, 필요에 따라 모델을 VRAM에 교체하여 사용할 수 있습니다. 핵심 아키텍처 결정은 비전 모델과 LLM이 VRAM을 공유(12 GB 이상 필요)할지, 아니면 소형 GPU에서 순차적으로 실행할지 선택하는 것입니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 음성·비전·텍스트를 결합한 로컬 멀티모달 AI 파이프라인은 어떻게 구축합니까?',
        answer:
          '네 가지 특화 모델을 결합합니다: whisper.cpp(음성 → 텍스트), LLaVA 1.6 또는 Llama 3.2 Vision 같은 비전-언어 모델(이미지 → 텍스트 설명), Ollama의 Llama 3.3 8B 같은 LLM(텍스트 → 텍스트 추론), 그리고 Piper TTS(텍스트 → 음성). Python 비동기 오케스트레이터가 입력 유형을 감지하여 올바른 모델로 라우팅하고 출력을 일관된 응답으로 결합합니다. 최소 VRAM: 공유 VRAM 구성에서 12 GB, 모델 교체 방식에서 8 GB.',
        bullets: [
          '음성 입력: whisper.cpp(Mac에서 Metal, NVIDIA에서 CUDA) → 텍스트 전사.',
          '이미지 입력: LLaVA 1.6 7B 또는 Llama 3.2 Vision 11B(Ollama 경유) → 텍스트 설명.',
          '텍스트 추론: Ollama + Llama 3.3 8B → 응답 텍스트.',
          '음성 출력: Piper TTS(CPU, ~0.1초 지연) → 오디오 재생.',
          '최소 하드웨어: 동시 전체 스택 실행을 위한 RTX 4070 12 GB 또는 M5 Pro 36 GB.',
          '비전 + LLM은 Ollama 인스턴스를 공유 가능(Llama 3.2 Vision이 두 작업 모두 처리).',
          '전체 스택 총 VRAM: ~15 GB(whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB + Piper CPU).',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '멀티모달 파이프라인이란?', anchor: '#what-is-multimodal' },
      { label: '비용: 로컬 파이프라인 vs 클라우드 API', anchor: '#cost-comparison' },
      { label: '아키텍처 개요', anchor: '#architecture' },
      { label: '컴포넌트 스택', anchor: '#component-stack' },
      { label: '하드웨어 등급', anchor: '#hardware-tiers' },
      { label: '사용 사례 1: 음성 제어 문서 분석기', anchor: '#use-case-1' },
      { label: '사용 사례 2: 시각적 Q&A 어시스턴트', anchor: '#use-case-2' },
      { label: '사용 사례 3: 회의 전사 + 슬라이드 분석', anchor: '#use-case-3' },
      { label: '사용 사례 4: 로컬 접근성 도구', anchor: '#use-case-4' },
      { label: '사용 사례 5: 로컬 보안 카메라 분석', anchor: '#use-case-5' },
      { label: 'Python 오케스트레이터 구축', anchor: '#orchestrator' },
      { label: '성능 최적화', anchor: '#performance' },
      { label: '한계와 솔직한 평가', anchor: '#limitations' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '출처', anchor: '#sources' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**로컬 멀티모달 파이프라인은 GPT-5.5와 같은 단일 모델이 아니라 별도로 오케스트레이션된 네 가지 모델입니다.** whisper.cpp가 음성을, VLM(LLaVA 또는 Llama 3.2 Vision)이 이미지를, LLM이 텍스트 추론을, Piper가 음성 출력을 담당합니다. 오케스트레이터가 입력을 올바른 모델로 라우팅하고 출력을 결합합니다.',
          '**Llama 3.2 Vision 11B는 단일 모델로 VLM과 텍스트 LLM 두 역할을 모두 대체할 수 있습니다.** 텍스트와 이미지를 동시에 수용하며 단일 단계에서 설명과 추론을 모두 처리합니다 — VRAM을 ~15 GB(별도 모델)에서 ~8 GB(단일 Llama 3.2 Vision 11B)로 줄여줍니다.',
          '**전체 스택 최소 하드웨어: RTX 4070 12 GB 또는 Apple M5 Pro 36 GB.** RTX 3060 12 GB는 제한된 버전(Llama 3.3 8B 대신 Phi-4, 또는 순차 모델 로딩)을 실행할 수 있습니다 — 기능은 하지만 더 느립니다.',
          '**다섯 가지 실용적인 사용 사례가 복잡성을 정당화합니다:** 음성 문서 분석, 음성 상호작용을 통한 시각적 Q&A, 슬라이드 분석과 결합된 회의 전사, 로컬 화면 읽기 도구를 활용한 접근성 도구, 로컬 보안 카메라 분석.',
          '**허용 가능한 성능을 위해서는 비동기 오케스트레이션이 필수입니다.** 오디오와 이미지 입력이 모두 있을 때 STT와 비전을 병렬로 실행할 수 있습니다 — 텍스트 LLM은 두 작업이 완료될 때까지 기다린 후 결합된 응답을 생성합니다.',
          '**LLM 출력을 TTS로 스트리밍하면 인지 지연이 0.3–0.7초 줄어듭니다.** LLM이 나머지 응답을 작성하는 동안 첫 번째 완성된 문장부터 오디오 생성을 시작합니다.',
          '**이것은 GPT-5.5가 아닙니다.** 별도 모델은 "이음새"를 만듭니다 — 비전 모델의 설명이 텍스트로 LLM에 전달되어 일부 크로스 모달 추론이 손실됩니다. 복잡한 멀티모달 작업에서의 품질은 폐쇄형 프론티어 모델에 비해 낮지만, 구조화된 문서와 명확한 사진 작업에는 적합합니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**전체 스택 총 VRAM:** ~15 GB (Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.3 8B 6 GB). Piper는 CPU에서 실행됩니다.',
          '**단순화된 스택 (Llama 3.2 Vision 11B):** ~8 GB VRAM — 단일 모델로 비전과 텍스트 추론을 처리합니다.',
          '**음성 지연 (Whisper small, RTX 4070):** STT ~200–500 ms. LLM 첫 토큰 500–1500 ms. Piper TTS 100 ms.',
          '**이미지 처리 지연 (LLaVA 7B, RTX 4070):** 해상도와 프롬프트에 따라 이미지당 ~2–5초.',
          '**실시간 비디오 없음:** 로컬 VLM은 연속 비디오 스트림이 아닌 개별 프레임을 처리합니다. 비디오의 경우 1 FPS로 프레임을 추출하여 각각 처리하십시오.',
          '**VLM + LLM에 동일한 Ollama 인스턴스 사용:** Ollama는 Llama 3.2 Vision을 비전 모델과 텍스트 모델로 동시에 서빙하여 VRAM을 절약할 수 있습니다.',
          '**모든 컴포넌트는 MIT 또는 Apache 2.0 라이선스입니다** (whisper.cpp MIT, LLaVA MIT, Llama 3.3 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: '멀티모달 AI 파이프라인이란 무엇입니까?',
        content:
          '멀티모달 AI 시스템은 여러 유형의 입력(음성, 이미지, 텍스트)을 수용하고 여러 유형의 출력(텍스트, 음성)을 생성합니다. 클라우드에서의 동등물은 GPT-5.5입니다 — 오디오, 이미지, 텍스트를 어떤 조합으로든 수용하는 단일 모델입니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 멀티모달 파이프라인은 각 모달리티(STT, 비전, LLM, TTS)를 처리하는 네 가지 특화 오픈소스 모델을 오케스트레이터로 연결하며, 인터넷이나 API 키 없이 완전 오프라인으로 실행됩니다.',
          },
          {
            type: 'plain-terms',
            text: '단일 AI가 모든 것을 처리하는 대신, 각 작업에 최적화된 별도 프로그램들이 있습니다: 음성 인식용 프로그램 하나, 이미지 이해용 프로그램 하나, 텍스트 응답 생성용 프로그램 하나, 음성 출력용 프로그램 하나 — 조율 레이어가 이들을 하나의 연결된 시스템처럼 보이게 만듭니다.',
          },
        ],
        items: [
          '**클라우드 접근 방식 (GPT-5.5):** 모든 모달리티로 동시에 훈련된 거대 단일 모델. 크로스 모달 추론이 훈련 중에 학습됩니다 — 모델이 이미지 내용과 음성 쿼리 간의 관계를 네이티브로 추론할 수 있습니다.',
          '**로컬 접근 방식 (이 가이드):** 오케스트레이터로 연결된 각 모달리티별 독립적인 특화 모델. 더 모듈화되고 실행 비용이 적지만 "이음새"가 생깁니다 — 비전 모델의 출력이 LLM에 전달되기 전에 텍스트로 직렬화됩니다.',
          '**로컬 구축 이유:** 개인 정보 보호(의료 이미지, 독점 문서, 기밀 스크린샷), 비용(쿼리당 수수료 없음), 오프라인 기능(모델 다운로드 후 인터넷 불필요), 맞춤화(어떤 컴포넌트든 교체 가능).',
          '**모듈식 장점:** 어떤 컴포넌트든 독립적으로 업그레이드할 수 있습니다. 더 나은 로컬 STT 모델이 나오면 STT 레이어만 교체하십시오. 더 나은 VLM이 나오면 비전 모델만 교체하십시오 — 파이프라인의 나머지는 변경되지 않습니다.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: '비용: 로컬 파이프라인 vs 클라우드 API (월간)',
        content:
          '적당한 사용량(하루 100개 이상의 쿼리)으로 로컬 멀티모달 파이프라인은 3–6개월 안에 본전을 찾습니다. 가벼운 사용량(하루 10개 쿼리)으로는 손익분기점이 12–18개월로 늘어납니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 멀티모달 파이프라인은 하드웨어 일회성 투자($600–3,500) 후 API 수수료가 $0/월이며, 쿼리 볼륨에 따라 GPT-5.5 API 비용($135–225/월) 대비 3–18개월 안에 손익분기점에 도달합니다.',
          },
        ],
        columns: ['사용량', 'GPT-5.5 API', 'Google Cloud', '로컬'],
        rows: [
          { '사용량': '음성 쿼리 100건/일', 'GPT-5.5 API': '$90–150/월', 'Google Cloud': '$60–120/월', '로컬': '$0' },
          { '사용량': '이미지 분석 50건/일', 'GPT-5.5 API': '$45–75/월', 'Google Cloud': '$30–60/월', '로컬': '$0' },
          { '사용량': '합산 (일반적)', 'GPT-5.5 API': '$135–225/월', 'Google Cloud': '$90–180/월', '로컬': '$0' },
          { '사용량': '하드웨어 (일회성)', 'GPT-5.5 API': '$0', 'Google Cloud': '$0', '로컬': '$600–3,500' },
          { '사용량': '손익분기점', 'GPT-5.5 API': '—', 'Google Cloud': '—', '로컬': '3–18개월' },
        ],
        note: '적당한 사용량(하루 100개 이상의 쿼리)으로 로컬 파이프라인은 3–6개월 안에 본전을 찾습니다. 가벼운 사용량(하루 10개 쿼리)으로는 손익분기점이 12–18개월로 늘어납니다.',
      },
      architecture: {
        id: 'architecture',
        title: '아키텍처 개요',
        content:
          '로컬 멀티모달 파이프라인은 라우터-오케스트레이터 패턴을 사용합니다: 입력이 경계에서 유형별로 분류되고, 적절한 모델로 라우팅되며, 최종 응답 생성 전에 오케스트레이터가 출력을 결합합니다.',
        items: [
          '**입력 유형:** 마이크 오디오(음성), 카메라 또는 파일 이미지(비전), 키보드 텍스트(텍스트).',
          '**라우터 로직:** 경계에서 입력 유형을 감지합니다. 오디오 → STT 모델. 이미지 → VLM. 텍스트 → LLM 직접. 오디오와 이미지가 함께 도착하면 병렬로 처리하고 결합합니다.',
          '**모델 레지스트리:** 각 입력 유형이 적절한 모델을 호출하고 텍스트 설명/전사를 반환하는 핸들러 함수에 매핑됩니다.',
          '**오케스트레이터:** 모든 모델 출력을 수집하고, 텍스트 LLM을 위한 단일 프롬프트로 결합하고, LLM 응답을 얻어 음성 출력을 위한 TTS나 화면의 텍스트로 라우팅합니다.',
          '**출력 유형:** 음성 응답(Piper TTS), 화면 텍스트, 또는 다른 시스템과의 통합을 위한 구조화된 데이터(JSON).',
          '**병렬 처리:** STT와 VLM이 동시에 처리할 수 있습니다 — 이미지에 대한 오디오 쿼리는 두 작업을 병렬로 처리하여 순차 처리 대비 총 지연을 40–60% 줄일 수 있습니다.',
        ],
      },
      componentStack: {
        id: 'component-stack',
        title: '컴포넌트 스택',
        content:
          '각 컴포넌트의 VRAM 요구 사항과 역할을 포함한 전체 스택입니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '전체 로컬 멀티모달 스택은 ~15 GB의 VRAM을 사용합니다: Whisper large-v3(3 GB) + LLaVA 1.6 7B(6 GB) + Llama 3.3 8B(6 GB); Piper TTS는 VRAM 비용 없이 CPU에서 실행됩니다.',
          },
          {
            type: 'plain-terms',
            text: 'Llama 3.2 Vision 11B를 비전 모델과 텍스트 모델 두 역할 모두에 사용하면 VRAM을 8 GB로 줄일 수 있습니다 — Whisper가 계속 음성을 처리하고 Piper가 음성 출력을 담당하는 동안, 이 단일 모델이 사진 이해와 대화를 모두 처리합니다.',
          },
        ],
        columns: ['레이어', '도구', '모델', 'VRAM', '역할'],
        rows: [
          {
            '레이어': 'STT',
            '도구': 'whisper.cpp',
            '모델': 'Whisper large-v3',
            'VRAM': '~3 GB',
            '역할': '음성 → 텍스트 전사',
          },
          {
            '레이어': '비전',
            '도구': 'Ollama',
            '모델': 'LLaVA 1.6 7B',
            'VRAM': '~6 GB',
            '역할': '이미지 → 텍스트 설명',
          },
          {
            '레이어': '추론',
            '도구': 'Ollama',
            '모델': 'Llama 3.3 8B Q4',
            'VRAM': '~6 GB',
            '역할': '텍스트 → 텍스트 응답',
          },
          {
            '레이어': 'TTS',
            '도구': 'Piper',
            '모델': 'en_US-lessac-medium',
            'VRAM': 'CPU 전용',
            '역할': '텍스트 → 음성 출력',
          },
          {
            '레이어': '합계 (별도 모델)',
            '도구': '',
            '모델': '',
            'VRAM': '~15 GB',
            '역할': '전체 파이프라인',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'VRAM을 ~8 GB로 줄이려면 LLaVA + Llama 3.3 8B 조합 대신 Llama 3.2 Vision 11B를 사용하십시오. Llama 3.2 Vision은 단일 모델에서 이미지 설명과 텍스트 추론을 모두 처리하여 별도의 VLM이 필요 없습니다.',
          },
          {
            type: 'tip',
            text: '대안 VLM: [Qwen2-VL 7B](/ko/power-local-llm/local-vision-models-llava-ollama-2026)(~6 GB VRAM) — 다국어 OCR 및 문서 이해에서 LLaVA보다 강력합니다. 한국어, 일본어, 중국어 문서를 처리하는 경우 권장합니다.',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: '멀티모달을 위한 하드웨어 등급',
        content:
          '용량과 VRAM 순으로 정렬된 다섯 가지 하드웨어 구성입니다. 각각 전체 멀티모달 스택의 다른 하위 집합을 지원합니다.',
        columns: ['등급', 'GPU', 'RAM', '실행 가능', '지연 (음성 + 이미지 쿼리)'],
        rows: [
          {
            '등급': '기본',
            'GPU': 'RTX 3060 12 GB',
            'RAM': '16 GB',
            '실행 가능': 'STT + Phi-4 (비전은 별도로, 순차적)',
            '지연 (음성 + 이미지 쿼리)': '5–10초',
          },
          {
            '등급': '중간',
            'GPU': 'RTX 4070 12 GB',
            'RAM': '32 GB',
            '실행 가능': '7B 모델로 전체 스택(LLaVA 7B + Llama 3.3 8B, 빠듯하게 맞음)',
            '지연 (음성 + 이미지 쿼리)': '3–6초',
          },
          {
            '등급': '고급',
            'GPU': 'RTX 4090 24 GB',
            'RAM': '64 GB',
            '실행 가능': 'VLM 13B + LLM 8B 동시 전체 스택',
            '지연 (음성 + 이미지 쿼리)': '2–4초',
          },
          {
            '등급': 'Apple 중간',
            'GPU': 'M5 Pro 36 GB',
            'RAM': '36 GB 통합',
            '실행 가능': 'Metal을 통한 8B 모델로 전체 스택(권장). Qwen2-VL 7B + Llama 3.3 8B는 Whisper large-v3를 위한 여유 공간과 함께 36 GB에 편안하게 들어맞습니다.',
            '지연 (음성 + 이미지 쿼리)': '2–4초',
          },
          {
            '등급': 'Apple 고급',
            'GPU': 'M5 Max 128 GB',
            'RAM': '128 GB 통합',
            '실행 가능': '70B 모델로 전체 스택 — 최고 로컬 품질',
            '지연 (음성 + 이미지 쿼리)': '1–3초',
          },
        ],
        note: '지연은 음성 쿼리 종료 시점부터 TTS 재생 시작까지 측정하며, 이미지가 있는 경우 이미지 처리를 포함합니다.',
        callouts: [
          {
            type: 'tip',
            text: '128 GB 통합 메모리를 탑재한 M5 Max는 최고의 로컬 멀티모달 플랫폼입니다. Whisper large-v3(3 GB) + Llama 3.2 Vision 90B(~64 GB) + Piper TTS를 동시에 실행할 수 있습니다 — 가장 높은 품질의 로컬 VLM 모델로 문서 및 사진 작업에서 GPT-5.5에 근접합니다. 어떤 단일 GPU 구성도 2–3배 더 비싼 다중 GPU 설정 없이는 이를 따라잡을 수 없습니다.',
          },
        ],
      },
      useCase1: {
        id: 'use-case-1',
        title: '사용 사례 1: 음성 제어 문서 분석기',
        content:
          '**문서 이미지에 대해 음성으로 질문하면 파이프라인이 음성을 전사하고, 문서를 시각적으로 처리한 후 답을 소리 내어 읽어줍니다.** 이것이 STT + VLM + LLM + TTS 결합의 주요 사용 사례입니다.',
        items: [
          '**예시:** 청구서를 촬영하고 "총 결제 금액과 납부 기한이 언제입니까?"라고 말합니다.',
          '**파이프라인:** Whisper가 질문을 전사 → 이미지를 LLaVA 또는 Llama 3.2 Vision으로 전송 → VLM이 청구서의 텍스트와 구조를 추출 → LLM이 질문 + VLM 출력을 결합 → Piper가 답을 소리 내어 읽습니다.',
          '**프롬프트:** "이미지가 있습니다: [VLM 설명]. 사용자가 묻습니다: [전사]. 이미지 내용을 바탕으로 질문에 답하십시오."',
          '**최적 VLM:** 청구서 및 문서의 OCR 정확도를 위한 MiniCPM-V 2.6 또는 Llama 3.2 Vision 11B.',
          '**개인 정보 보호 가치:** 의료 기록, 법적 문서, 재무 명세서 — 데이터가 기기를 떠나지 않고 완전히 로컬에서 처리됩니다.',
        ],
      },
      useCase2: {
        id: 'use-case-2',
        title: '사용 사례 2: 시각적 Q&A 어시스턴트',
        content:
          '**카메라를 물체나 장면에 향하고 음성으로 질문하면 음성 응답을 받습니다.** 이 사용 사례는 음성 상호작용이 가능한 Google Lens에 가장 가까운 로컬 동등물입니다.',
        items: [
          '**응용 프로그램:** 창고 재고(선반을 촬영하고 "SKU-4429는 몇 개나 있습니까?"라고 질문), 현장 검사(기계 손상을 촬영하고 "이것을 운영하는 것이 안전합니까?"라고 질문), 접근성(시각 장애인 사용자를 위한 물체 설명).',
          '**구현:** OpenCV `cv2.VideoCapture(0).read()`로 카메라 프레임을 캡처하고, JPEG로 저장하여 Whisper 전사와 함께 VLM에 전달합니다.',
          '**최적 모델:** 일반적인 물체 및 장면 이해를 위한 LLaVA 1.6 7B 또는 Llama 3.2 Vision 11B.',
          '**지연:** RTX 4070에서 이미지 캡처 + VLM 처리 + LLM + TTS에 3–6초. 더 작은 VLM(단순 물체 식별을 위한 Moondream 2)으로 줄일 수 있습니다.',
        ],
      },
      useCase3: {
        id: 'use-case-3',
        title: '사용 사례 3: 회의 전사 + 슬라이드 분석',
        content:
          '**회의 중 Whisper를 지속적으로 실행하여 전사를 구축하고, 주기적으로 슬라이드 스크린샷을 캡처하여 VLM으로 분석합니다. 마지막에 전사 + 슬라이드 내용을 결합하여 로컬 요약과 실행 항목을 생성합니다 — 클라우드 없음, 데이터 노출 없음.**',
        items: [
          '**STT:** 회의 중 faster-whisper를 스트리밍 모드로 실행합니다. 전사 버퍼에 세그먼트를 누적합니다.',
          '**비전:** 새 슬라이드가 나타날 때마다(스크린샷 차이로 감지), 이미지를 캡처하여 설명을 위해 LLaVA에 전달합니다.',
          '**결합:** 회의 종료 시(또는 요청 시) 전사 + 슬라이드 설명을 Llama 3.3 8B에 전달합니다: "이 회의를 요약하고 실행 항목을 나열하십시오. 전사: [...]. 슬라이드 내용: [...]."',
          '**출력:** 소리 내어 읽는 요약(Piper TTS) + 로컬에 저장된 텍스트 파일.',
          '**GDPR 가치:** 모든 회의 처리가 로컬입니다. 오디오, 전사, 슬라이드가 어떤 클라우드 서비스로도 전송되지 않습니다. 법적, 의료적, 기업 환경에서 규정 준수 가능.',
        ],
      },
      useCase4: {
        id: 'use-case-4',
        title: '사용 사례 4: 로컬 접근성 도구',
        content:
          '**로컬 멀티모달 파이프라인은 시각 또는 운동 장애가 있는 사용자를 위한 화면 읽기 도구 및 음성 제어 UI 어시스턴트 역할을 할 수 있습니다 — 클라우드 접근성 서비스의 개인 정보 우려 없이 오프라인으로 작동합니다.**',
        items: [
          '**화면 읽기:** 2초마다 스크린샷 캡처 → LLaVA가 화면에 있는 내용 설명 → Piper가 소리 내어 읽음. 다음에 설명할 내용을 제어하기 위한 음성 명령(Whisper)을 추가합니다.',
          '**음성 탐색:** Whisper가 음성 명령을 전사 → LLM이 의도를 해석 → pyautogui를 통해 키보드/마우스 동작 실행. 인터넷 불필요.',
          '**개인 정보 혜택:** 장애가 있는 사용자는 종종 민감한 환경(의료 포털, 금융 계정)에서 접근성 도구를 사용합니다. 로컬 도구는 화면 내용이 제3자에게 전송되지 않도록 보장합니다.',
          '**제한된 연결에서의 사용:** 병원, 정부 건물, 인터넷이 제한된 지역에서 작동합니다 — 기관 접근성 배포에 중요합니다.',
          '**접근성을 위한 모델 선택:** 빠른 화면 설명을 위한 Moondream 2(2 GB VRAM, 프레임당 ~1초). 더 풍부한 설명을 위한 LLaVA 7B(6 GB VRAM, 프레임당 ~3초).',
        ],
      },
      useCase5: {
        id: 'use-case-5',
        title: '사용 사례 5: 로컬 보안 카메라 분석',
        content:
          '**IP 카메라에서 프레임을 캡처하고, 로컬에서 움직임을 감지하여 움직임이 감지될 때만 VLM 분석을 트리거합니다 — 클라우드 카메라 서비스나 제3자 비디오 저장 없음.**',
        items: [
          '**프레임 캡처:** OpenCV를 사용하여 RTSP(`cv2.VideoCapture("rtsp://camera-ip:554/stream")`)로 IP 카메라에서 5–10초마다 프레임을 캡처합니다. USB 카메라의 경우 장치 인덱스 0을 사용합니다.',
          '**움직임 감지:** `cv2.absdiff()`로 연속 프레임 간의 차이를 계산합니다. 움직임 임계값 이하의 프레임은 건너뜁니다 — 이는 정적 장면에서 불필요한 VLM 호출을 방지합니다.',
          '**VLM 분석:** 움직임이 감지되면 프레임을 VLM에 전송합니다: "무슨 일이 일어나고 있는지 설명하십시오. 사람이 있습니까? 무엇을 하고 있습니까?"',
          '**알림 출력:** 응답이 사람이나 이상을 나타내면 로컬 데스크톱 알림과 Piper TTS 공지를 트리거합니다("정문에서 사람 감지됨"). 클라우드 알림 서비스 불필요.',
          '**개인 정보 보호 장점:** Ring과 Nest는 각각 AWS와 Google 서버로 비디오를 전송합니다. 이 설정은 모든 녹화를 사용자의 하드웨어에 보관합니다 — 구독 없음, 제3자 비디오 저장 없음, 외부 서비스와 데이터 공유 없음.',
          '**속도를 위한 최적 VLM:** 빠른 프레임 처리를 위한 Moondream 2(프레임당 ~1초, ~2 GB VRAM) 또는 더 풍부한 장면 설명을 위한 LLaVA 7B(프레임당 ~3초, ~6 GB VRAM).',
          '**하드웨어 참고:** 이 스택을 24/7 실행하는 전용 Mac Mini M5(~$600)는 대기 중 ~15–25W를 소비합니다 — Ring Doorbell Pro 구독보다 연간 전기료가 더 적습니다.',
        ],
      },
      orchestrator: {
        id: 'orchestrator',
        title: 'Python 오케스트레이터 구축',
        content:
          'Python 비동기 오케스트레이터가 입력을 올바른 모델로 라우팅하고 출력을 결합합니다. asyncio를 사용하면 STT와 비전 처리가 병렬로 실행될 수 있습니다.',
        codeBlock: `#!/usr/bin/env python3
"""Local multimodal orchestrator: voice + vision + text, all offline."""

import asyncio
import base64
import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
VISION_MODEL = "llava:7b"
TEXT_MODEL = "llama3.1:8b"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SAMPLE_RATE = 16000

async def transcribe_audio(audio: np.ndarray) -> str:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, lambda: subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        ))
    return result.stdout.strip()

async def describe_image(image_path: str) -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={
            "model": VISION_MODEL,
            "prompt": "Describe the content of this image in detail, including any text visible.",
            "images": [image_b64],
            "stream": False,
        },
    ))
    return response.json()["response"]

async def reason(transcript: str, image_description: str | None = None) -> str:
    if image_description:
        prompt = (
            f"The user asked (via voice): {transcript}\\n\\n"
            f"The image shows: {image_description}\\n\\n"
            "Answer the question based on the image content. Be concise — 2-3 sentences."
        )
    else:
        prompt = transcript
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: requests.post(
        OLLAMA_URL,
        json={"model": TEXT_MODEL, "prompt": prompt, "stream": False},
    ))
    return response.json()["response"]

async def speak(text: str) -> None:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        await asyncio.get_event_loop().run_in_executor(None, lambda: subprocess.run(
            f'echo "{text}" | piper --model {PIPER_VOICE} --output_file {f.name}',
            shell=True, check=True
        ))
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

async def process_query(audio: np.ndarray, image_path: str | None = None) -> None:
    if image_path:
        transcript, image_desc = await asyncio.gather(
            transcribe_audio(audio),
            describe_image(image_path),
        )
    else:
        transcript = await transcribe_audio(audio)
        image_desc = None

    if not transcript or len(transcript) < 3:
        return

    print(f"You: {transcript}")
    if image_desc:
        print(f"Image: {image_desc[:100]}...")

    response = await reason(transcript, image_desc)
    print(f"Assistant: {response}")
    await speak(response)

async def main():
    print("Multimodal assistant ready. Ctrl+C to stop.")
    while True:
        audio = sd.rec(int(5 * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
        sd.wait()
        await process_query(audio)

if __name__ == "__main__":
    asyncio.run(main())`,
        codeLanguage: 'python',
      },
      performance: {
        id: 'performance',
        title: '성능 최적화',
        content:
          '전체 멀티모달 스택에서 허용 가능한 지연을 달성하기 위한 핵심 최적화:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '가장 큰 두 가지 최적화는: (1) 오디오와 이미지 모두 있을 때 asyncio로 STT와 VLM을 병렬 실행하는 것, (2) LLM 출력을 문장별로 TTS에 스트리밍하여 LLM이 완료되기 전에 오디오가 시작되게 하는 것입니다.',
          },
          {
            type: 'plain-terms',
            text: '병렬 처리 없이 파이프라인은: STT(0.5초) → VLM(3초) → LLM(1초) → TTS(0.1초) = 총 4.6초. STT + VLM 병렬로: max(STT, VLM)(3초) → LLM(1초) → TTS(0.1초) = 4.1초. TTS 스트리밍을 추가하면 사용자는 4.6초 대신 3.5초에 오디오를 듣게 됩니다.',
          },
        ],
        items: [
          '**STT + VLM 병렬 처리:** `asyncio.gather(transcribe_audio(), describe_image())`를 사용하여 두 작업을 동시에 실행합니다. STT 모델 크기에 따라 0.3–2초를 절약합니다.',
          '**모델을 웜 상태로 유지:** Ollama는 요청 사이에 VRAM에 모델을 자동으로 유지합니다. 스트리밍 모드의 whisper.cpp는 로드된 상태를 유지합니다. 쿼리 사이에 재로드하지 마십시오.',
          '**LLM → TTS 스트리밍:** 스트리밍 LLM 출력에서 문장 경계(`.`, `!`, `?`)를 감지합니다. LLM이 계속 생성하는 동안 완성된 각 문장을 Piper에 전달합니다.',
          '**VRAM 관리:** 총 VRAM이 빠듯하면 이미지 처리 후 VLM을 언로드하고(Ollama HTTP 삭제 엔드포인트) 텍스트 LLM을 로드합니다. ~2–3초가 추가되지만 8 GB GPU에서도 전체 스택 처리가 가능합니다.',
          '**Llama 3.2 Vision을 결합 VLM + LLM으로 사용:** 모델 전환 오버헤드를 완전히 제거합니다 — 단일 모델이 시각적 설명과 텍스트 추론을 모두 처리합니다. 절충점: 전용 Llama 3.3 8B에 비해 순수 텍스트 추론이 약간 약합니다.',
          '**TTS 첫 오디오 목표:** Piper는 텍스트를 받은 후 50–100 ms에 첫 오디오를 생성합니다. 인지 TTS 지연 1초 미만을 위해 한 번에 한 문장씩 스트리밍합니다.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '한계와 솔직한 평가',
        content:
          '**로컬 멀티모달 파이프라인은 GPT-5.5가 아닙니다.** 격차를 명확히 하면 좌절을 예방하고 한계를 감안한 설계를 돕습니다.',
        items: [
          '**모달리티 이음새:** 비전 출력이 텍스트 LLM에 전달되기 전에 텍스트로 직렬화됩니다. LLM은 이미지 특성에 대해 직접 추론할 수 없습니다 — 이미지의 텍스트 설명에 대해 추론합니다. 이는 미묘한 시각적 추론이 필요한 작업에서 정보를 잃습니다.',
          '**실시간 비디오 없음:** 로컬 VLM은 연속 비디오가 아닌 개별 프레임을 처리합니다. 비디오의 경우 0.5–2 FPS로 프레임을 추출하여 순차적으로 처리합니다. 즉, "이 비디오의 마지막 5초 동안 무슨 일이 일어났습니까?"라고 물을 수 없습니다.',
          '**VLM 품질 격차:** 로컬 비전 모델(LLaVA 7B, Llama 3.2 Vision 11B)은 복잡한 인포그래픽, 손글씨, 모호한 장면, 시각적 이해와 함께 광범위한 세계 지식이 필요한 작업에서 GPT-5.5 Vision에 뒤처집니다.',
          '**VRAM 압박:** 단일 GPU에서 세 가지 모델을 동시에 실행하려면 신중한 VRAM 관리가 필요합니다. 12 GB GPU에서는 한계에 있습니다 — OOM(메모리 부족) 오류를 피하기 위해 모델 크기를 신중하게 선택해야 합니다.',
          '**클라우드 대비 지연:** 클라우드 멀티모달 호출(GPT-5.5)은 오디오 + 이미지 + 텍스트에 1–3초가 걸립니다. 로컬 파이프라인은 동등한 하드웨어에서 3–8초가 걸립니다 — 더 느리지만 완전한 개인 정보 보호와 쿼리당 비용 없음.',
          '**일관성:** 로컬 모델은 광범위한 RLHF를 갖춘 클라우드 모델보다 더 가변적인 출력 품질을 생성합니다. 비전 설명과 LLM 응답 모두에서 가끔 환각이 발생할 것으로 예상하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '비전과 텍스트 추론 모두에 단일 모델을 사용할 수 있습니까?',
            a: '예. Llama 3.2 Vision 11B는 단일 모델에서 이미지 이해와 텍스트 추론을 모두 처리합니다 — 별도의 LLaVA + Llama 3.3 8B 설정을 건너뛸 수 있습니다. 이는 VRAM을 ~15 GB에서 ~8 GB로 줄이고 Ollama API 호출 하나를 제거합니다. 절충점은 전용 Llama 3.3 8B에 비해 순수 텍스트 추론 작업의 성능이 약간 저하된다는 것입니다.',
          },
          {
            q: '로컬 멀티모달 파이프라인에서 비디오 입력을 어떻게 처리합니까?',
            a: 'OpenCV(`cv2.VideoCapture`)를 사용하여 비디오에서 프레임을 추출하고 VLM을 통해 각 프레임을 개별적으로 처리합니다. 1 FPS의 1분 비디오의 경우 60개의 프레임이 생성됩니다 — 각 처리에 2–5초가 걸리므로 전체 비디오 분석에 2–5분이 걸립니다. 실시간 비디오 모니터링의 경우 2–3초마다 1개의 프레임만 처리하고 정적 프레임을 건너뛰기 위해 움직임 감지를 사용합니다. 완전한 비디오 이해(프레임 간 객체 추적, 시간적 시퀀스 이해)는 현재 로컬 VLM의 기능을 넘어섭니다.',
          },
          {
            q: '전체 멀티모달 스택을 위한 최소 GPU VRAM은 얼마입니까?',
            a: '공유 VRAM 구성(모든 모델이 동시에 VRAM에)에서 Whisper large-v3 + LLaVA 7B + Llama 3.3 8B에는 15 GB가 필요합니다. Llama 3.2 Vision 11B가 VLM과 텍스트 LLM 모두를 대체하면 8 GB VRAM으로 충분합니다. 12 GB GPU(RTX 4070)에서는 소형 양자화로 아주 빠듯하게 별도 모델 전체 스택을 실행하거나, 결합 접근 방식을 위해 Llama 3.2 Vision 11B를 사용할 수 있습니다. 8 GB VRAM(RTX 4060)에서는 공격적 양자화(Q3_K)로 Llama 3.2 Vision 11B를 사용하거나 비전과 텍스트 쿼리 사이에 모델을 교체합니다.',
          },
          {
            q: '멀티모달 파이프라인이 PDF를 처리할 수 있습니까?',
            a: '직접은 안 됩니다 — 로컬 VLM은 PDF가 아닌 이미지 입력을 수용합니다. 먼저 pdf2image(`pip install pdf2image`) 또는 pypdfium2(`pip install pypdfium2`)를 사용하여 PDF 페이지를 이미지로 변환하십시오. 그런 다음 각 페이지 이미지를 VLM에 별도로 전달합니다. 10페이지 PDF의 경우 10개의 별도 이미지 설명을 생성한 후, 결합된 분석이나 요약을 위해 모든 설명을 텍스트 LLM에 전달합니다. 네이티브 PDF 지원보다 느리지만 구조화된 문서에서 좋은 결과를 냅니다.',
          },
          {
            q: '로컬 멀티모달 파이프라인이 의료 또는 법적 사용을 위한 GDPR에 적합합니까?',
            a: '운영 중 네트워크 트래픽을 전혀 생성하지 않는 로컬 멀티모달 파이프라인은 내부 사용 사례에서 설계상 준수됩니다 — 개인 데이터가 시스템을 떠나지 않으므로 데이터 처리 계약이 필요하지 않습니다. 준수 여부 확인: 운영 중 Wireshark를 실행하고 파이프라인 프로세스에서 발신 패킷이 없음을 확인합니다. 저장도 중요합니다 — 오케스트레이터가 대화 기록이나 이미지 파일을 저장하는 경우 해당 저장소는 보존 요건의 적용을 받습니다. 적절한 보존 정책이 있는 임시 인메모리 저장소 또는 암호화된 로컬 저장소를 사용하십시오.',
          },
          {
            q: '멀티모달 파이프라인에 웹 검색을 추가할 수 있습니까?',
            a: '예. 오케스트레이터와 텍스트 LLM 사이에 검색 단계를 추가합니다. LLM 추론 단계 전에 컨텍스트를 검색하기 위해 DuckDuckGo API나 로컬 RAG 시스템(AnythingLLM, PrivateGPT)을 사용합니다. 그러면 LLM은 전사 + 이미지 설명 + 검색 결과를 결합하여 추론합니다. 지연이 0.5–2초 추가되지만 시각적 분석과 함께 시사성 질문에 답할 수 있습니다.',
          },
          {
            q: '전체 멀티모달 스택을 24/7 실행할 때 전기 소비량은 얼마입니까?',
            a: 'VRAM에 모델이 웜 상태인 대기: ~50–80 W(데스크톱 GPU), ~15–25 W(Mac Mini M5 Pro). 활성 처리: ~150–300 W(데스크톱 GPU), ~30–60 W(Mac Mini M5 Pro). $0.15/kWh에서 월간 비용: 약 $5–15(Mac Mini) 또는 $15–35(데스크톱). 이는 비슷한 쿼리 볼륨으로 클라우드 API를 실행하는 것보다 적습니다 — 전체 스택을 24/7 실행하는 Mac Mini는 하루 100개 쿼리 기준 GPT-5.5 API 2일 사용보다 월 전기료가 더 적습니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 whisper.cpp](https://github.com/ggerganov/whisper.cpp) — STT 컴포넌트 소스 및 문서.',
          '[GitHub의 faster-whisper](https://github.com/SYSTRAN/faster-whisper) — 스트리밍을 위한 내장 VAD가 있는 Python STT 대안.',
          '[LLaVA 프로젝트 페이지](https://llava-vl.github.io) — 비전 모델 아키텍처 및 모델 카드.',
          '[Llama 3.2 Vision 모델 카드](https://huggingface.co/meta-llama) — 이미지 + 텍스트 추론을 지원하는 Meta의 멀티모달 모델.',
          '[Ollama 문서](https://ollama.com) — 비전 모델 API, 멀티모달 요청 형식.',
          '[GitHub의 Piper TTS](https://github.com/rhasspy/piper) — TTS 출력 컴포넌트, 음성 팩 라이브러리.',
          '[GitHub의 Coqui TTS](https://github.com/coqui-ai/TTS) — 음성 클로닝 지원이 있는 대안 TTS.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 음성 인식 2026: Whisper.cpp vs faster-whisper](/ko/power-local-llm/local-whisper-stt-comparison-2026) — STT 컴포넌트 심층 분석.',
          '[로컬 비전 모델 2026: LLaVA, Llama 3.2 Vision, Ollama](/ko/power-local-llm/local-vision-models-llava-ollama-2026) — 비전 컴포넌트 심층 분석.',
          '[로컬 TTS 및 음성 클로닝 2026](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS 컴포넌트 심층 분석.',
          '[2026년 완전 오프라인 음성 어시스턴트 구축](/ko/power-local-llm/build-local-voice-assistant-2026) — 음성 전용 버전(더 간단, 비전 없이 음성 + LLM + TTS).',
          '[로컬 LLM 하드웨어 가이드 2026](/ko/local-llms/local-llm-hardware-guide-2026) — 다중 모델 파이프라인을 위한 하드웨어 선택.',
          '[LLM 양자화 설명](/ko/local-llms/llm-quantization-explained) — 양자화를 통해 제한된 VRAM에 여러 모델 맞추는 방법.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 멀티모달 AI 파이프라인 2026: 음성·비전·텍스트를 오프라인으로 결합하기',
      description: '2026년 음성 + 비전 + 텍스트 AI를 로컬에서 실행하세요. whisper.cpp, LLaVA 1.6, Ollama, Piper TTS를 결합합니다. 완전한 Python 오케스트레이터 — 클라우드 없음, API 키 없음.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text',
      inLanguage: 'ko',
      datePublished: '2026-05-14',
      dateModified: '2026-05-14',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: '로컬 멀티모달 AI 파이프라인 2026', item: 'https://www.promptquorum.com/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text' },
      ],
    },
  },

}
