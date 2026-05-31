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
      'A local multimodal AI pipeline combines separate specialized models for each modality — whisper.cpp for voice input, LLaVA or Llama 3.2 Vision for image understanding, an Ollama LLM for text reasoning, and Piper TTS for voice output — orchestrated into a single coherent system that runs 100% offline. This is the local equivalent of GPT-4o\'s multimodal capabilities: no single model understands everything, but the orchestrator routes each input type to the right model and combines the outputs. This guide shows how to build local multimodal pipeline capabilities from these open-source components — covering the architecture, component stack, hardware tiers, five practical use cases, and a Python async orchestrator that processes voice and vision inputs in parallel.',
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
      'local GPT-4o alternative',
      'build multimodal AI offline',
      'local speech vision pipeline',
      'llava whisper integration',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'LLaVA 1.6 7B',
      'Qwen2-VL 7B',
      'Llama 3.2 Vision 11B',
      'Llama 3.1 8B',
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
      '**A local multimodal AI pipeline in 2026 requires at minimum 12 GB of GPU VRAM to run STT + vision + LLM + TTS simultaneously — the full stack.** The practical minimum viable setup is an RTX 4070 (12 GB) or Mac M5 Pro (36 GB unified memory), running whisper.cpp for voice input, LLaVA 1.6 7B for vision, Llama 3.1 8B for text reasoning, and Piper for voice output. On an RTX 3060 12 GB, you can run the stack with a smaller LLM (Phi-4) and no vision — or swap models in/out of VRAM as needed. The key architectural decision is whether to share VRAM between the vision model and the LLM (requires 12+ GB) or run them sequentially on a smaller GPU.',
    quickAnswerTop: {
      en: {
        question: 'How do you build a local multimodal AI pipeline with voice, vision, and text in 2026?',
        answer:
          'Combine four specialized models: whisper.cpp (voice → text), a vision-language model like LLaVA 1.6 or Llama 3.2 Vision (image → text description), an Ollama LLM like Llama 3.1 8B (text → text reasoning), and Piper TTS (text → speech). A Python async orchestrator detects the input type and routes it to the right model, combining outputs into a coherent response. Minimum VRAM: 12 GB for a shared-VRAM setup; 8 GB if you swap models in/out.',
        bullets: [
          'Voice input: whisper.cpp (Metal on Mac, CUDA on NVIDIA) → text transcript.',
          'Image input: LLaVA 1.6 7B or Llama 3.2 Vision 11B via Ollama → text description.',
          'Text reasoning: Ollama + Llama 3.1 8B → response text.',
          'Voice output: Piper TTS (CPU, ~0.1 sec latency) → audio playback.',
          'Minimum hardware: RTX 4070 12 GB or M5 Pro 36 GB for full simultaneous stack.',
          'Vision + LLM can share one Ollama instance (Llama 3.2 Vision handles both).',
          'Total VRAM for full stack: ~15 GB (whisper 3 GB + LLaVA 7B 6 GB + Llama 3.1 8B 6 GB + Piper CPU).',
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
          '**A local multimodal pipeline is four separate models orchestrated together — not a single model like GPT-4o.** whisper.cpp handles voice, a VLM (LLaVA or Llama 3.2 Vision) handles images, an LLM handles text reasoning, and Piper handles speech output. The orchestrator routes inputs to the right model and combines outputs.',
          '**Llama 3.2 Vision 11B can replace both the VLM and the text LLM in one model.** It accepts text and images simultaneously and handles both description and reasoning in one pass — reducing VRAM from ~15 GB (separate models) to ~8 GB (single Llama 3.2 Vision 11B).',
          '**Minimum hardware for the full stack: RTX 4070 12 GB or Apple M5 Pro 36 GB.** An RTX 3060 12 GB can run a constrained version (Phi-4 instead of Llama 3.1 8B, or sequential model loading) — usable but slower.',
          '**Five practical use cases justify the complexity:** voice-controlled document analysis, visual Q&A with voice interaction, meeting transcription combined with slide analysis, local screen-reader accessibility tools, and local security camera analysis.',
          '**Async orchestration is essential for acceptable performance.** STT and vision can run in parallel when both audio and image inputs are available — the text LLM waits for both, then generates a combined response.',
          '**Streaming LLM output to TTS reduces perceived latency by 0.3–0.7 seconds.** Start generating audio from the first completed sentence while the LLM is still writing the rest of the response.',
          '**This is not GPT-4o.** Separate models produce "seams" — the vision model\'s description passes as text to the LLM, losing some cross-modal reasoning. Quality on complex multimodal tasks is below frontier closed models but adequate for structured document and clear photo tasks.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Total VRAM for full stack:** ~15 GB (whisper 3 GB + LLaVA 7B 6 GB + Llama 3.1 8B 6 GB). Piper runs on CPU.',
          '**Simplified stack (Llama 3.2 Vision 11B):** ~8 GB VRAM — handles both vision and text reasoning in one model.',
          '**Voice latency (Whisper small, RTX 4070):** ~200–500 ms STT. 500–1500 ms LLM first token. 100 ms Piper TTS.',
          '**Image processing latency (LLaVA 7B, RTX 4070):** ~2–5 seconds per image depending on resolution and prompt.',
          '**No real-time video:** VLMs process individual frames, not continuous video streams. For video, extract frames at 1 FPS and process each.',
          '**Same Ollama instance for VLM + LLM:** Ollama can serve Llama 3.2 Vision as both the vision model and the text model, saving VRAM.',
          '**All components MIT or Apache 2.0 licensed** (whisper.cpp MIT, LLaVA MIT, Llama 3.1 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'What Is a Multimodal AI Pipeline?',
        content:
          'A multimodal AI system accepts multiple types of input (voice, images, text) and produces multiple types of output (text, speech). The cloud equivalent is GPT-4o — a single model that accepts audio, images, and text in any combination.',
        items: [
          '**Cloud approach (GPT-4o):** One giant model trained on all modalities simultaneously. Cross-modal reasoning is learned during training — the model can reason about the relationship between image content and voice queries natively.',
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
            text: 'A local multimodal pipeline costs $0/month in API fees after the one-time hardware investment ($600–3,500), with break-even against GPT-4o API costs ($135–225/mo) in 3–18 months depending on query volume.',
          },
        ],
        columns: ['Usage', 'GPT-4o API', 'Google Cloud', 'Local'],
        rows: [
          { 'Usage': '100 voice queries/day', 'GPT-4o API': '$90–150/mo', 'Google Cloud': '$60–120/mo', 'Local': '$0' },
          { 'Usage': '50 image analyses/day', 'GPT-4o API': '$45–75/mo', 'Google Cloud': '$30–60/mo', 'Local': '$0' },
          { 'Usage': 'Combined (typical)', 'GPT-4o API': '$135–225/mo', 'Google Cloud': '$90–180/mo', 'Local': '$0' },
          { 'Usage': 'Hardware (one-time)', 'GPT-4o API': '$0', 'Google Cloud': '$0', 'Local': '$600–3,500' },
          { 'Usage': 'Break-even', 'GPT-4o API': '—', 'Google Cloud': '—', 'Local': '3–18 months' },
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
            text: 'The full local multimodal stack uses ~15 GB VRAM: Whisper large-v3 (3 GB) + LLaVA 1.6 7B (6 GB) + Llama 3.1 8B (6 GB); Piper TTS runs on CPU at no VRAM cost.',
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
            'Model': 'Llama 3.1 8B Q4',
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
            text: 'Use Llama 3.2 Vision 11B instead of separate LLaVA + Llama 3.1 8B to cut VRAM to ~8 GB. Llama 3.2 Vision handles both image description and text reasoning in one model, eliminating the need for a separate VLM.',
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
            'Can Run': 'Full stack with 7B models (LLaVA 7B + Llama 3.1 8B, tight fit)',
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
            'Can Run': 'Full stack with 8B models via Metal (recommended). Qwen2-VL 7B + Llama 3.1 8B fits comfortably in 36 GB with room for Whisper large-v3.',
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
            text: 'The M5 Max with 128 GB unified memory is the ultimate local multimodal platform. It can run Whisper large-v3 (3 GB) + Llama 3.2 Vision 90B (~64 GB) + Piper TTS simultaneously — the 90B vision model is the highest-quality local VLM available, approaching GPT-4o on document and photo tasks. No discrete GPU setup can match this without multi-GPU configurations costing 2–3× more.',
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
          '**Combination:** At end of meeting (or on-demand), pass transcript + slide descriptions to Llama 3.1 8B: "Summarize this meeting and list action items. Here is the transcript: [...]. Here are the slide contents: [...]."',
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
          '**Use Llama 3.2 Vision as combined VLM + LLM:** Eliminates model switching overhead entirely — one model handles both vision description and text reasoning. Trade-off: slightly weaker on pure text reasoning vs. Llama 3.1 8B.',
          '**TTS first audio target:** Piper generates first audio within 50–100 ms of receiving text. Stream one sentence at a time for sub-second perceived TTS latency.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitations and Honest Assessment',
        content:
          '**A local multimodal pipeline is not GPT-4o.** Being clear about the gaps prevents frustration and helps you design around limitations.',
        items: [
          '**Modality seams:** Vision output is serialized to text before passing to the text LLM. The LLM cannot reason directly about image features — it reasons about a text description of the image. This loses information for tasks requiring subtle visual reasoning.',
          '**No real-time video:** Local VLMs process single frames, not continuous video. For video, extract frames at 0.5–2 FPS and process sequentially. This means you cannot ask "what just happened in the last 5 seconds of this video."',
          '**VLM quality gap:** Local vision models (LLaVA 7B, Llama 3.2 Vision 11B) are behind GPT-4o Vision on complex infographics, handwritten text, ambiguous scenes, and tasks requiring broad world knowledge alongside visual understanding.',
          '**VRAM pressure:** Running three models simultaneously on a single GPU requires careful VRAM management. On 12 GB GPUs, you are at the edge — model sizes must be carefully chosen to avoid OOM (out of memory) errors.',
          '**Latency vs. cloud:** A cloud multimodal call (GPT-4o) takes 1–3 seconds for audio + image + text. A local pipeline takes 3–8 seconds on comparable hardware — slower, but with full privacy and zero per-query cost.',
          '**Consistency:** Local models produce more variable output quality than cloud models with extensive RLHF. Expect occasional hallucinations in both vision descriptions and LLM responses.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can I use a single model for both vision and text reasoning?',
            a: 'Yes. Llama 3.2 Vision 11B handles both image understanding and text reasoning in one model — you can skip the separate LLaVA + Llama 3.1 8B setup. This cuts VRAM from ~15 GB to ~8 GB and eliminates one Ollama API call. The trade-off is slightly weaker performance on pure text reasoning tasks compared to a dedicated Llama 3.1 8B.',
          },
          {
            q: 'How do I handle video input in a local multimodal pipeline?',
            a: 'Extract frames from video using OpenCV (`cv2.VideoCapture`) and process each frame individually through the VLM. For a 1-minute video at 1 FPS, you get 60 frames — each taking 2–5 seconds to process, so the full video would take 2–5 minutes to analyze. For real-time video monitoring, process only 1 frame every 2–3 seconds and use motion detection to skip static frames. Full video understanding (tracking objects across frames, understanding temporal sequences) is beyond current local VLM capabilities.',
          },
          {
            q: 'What is the minimum GPU VRAM for the full multimodal stack?',
            a: 'On a shared-VRAM setup (all models in VRAM simultaneously), 15 GB is required for Whisper large-v3 + LLaVA 7B + Llama 3.1 8B. With Llama 3.2 Vision 11B replacing both VLM and text LLM, 8 GB VRAM is sufficient. On a 12 GB GPU (RTX 4070), you can run the full separate-model stack at very tight VRAM with small quantization, or use Llama 3.2 Vision 11B for the combined approach. On 8 GB VRAM (RTX 4060), use Llama 3.2 Vision 11B with aggressive quantization (Q3_K) or swap models in/out between vision and text queries.',
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
            a: 'Idle with models warm in VRAM: ~50–80W (desktop GPU), ~15–25W (Mac Mini M5 Pro). Active processing: ~150–300W (desktop GPU), ~30–60W (Mac Mini M5 Pro). Monthly cost at $0.15/kWh: approximately $5–15 (Mac Mini) or $15–35 (desktop). This is less than running a cloud API at comparable query volumes — a Mac Mini running the full stack 24/7 costs less in electricity per month than two days of GPT-4o API usage at 100 queries/day.',
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
      'Eine lokale multimodale KI-Pipeline kombiniert separate spezialisierte Modelle für jede Modalität — whisper.cpp für Spracheingabe, LLaVA oder Llama 3.2 Vision für Bildverständnis, ein Ollama LLM für Textreasoning und Piper TTS für Sprachausgabe — orchestriert zu einem kohärenten System, das 100 % offline arbeitet. Dies ist das lokale Äquivalent zu GPT-4os multimodalen Fähigkeiten: kein einzelnes Modell versteht alles, aber der Orchestrator leitet jeden Eingabetyp an das richtige Modell weiter und kombiniert die Ausgaben. Dieser Leitfaden zeigt, wie Sie lokale multimodale Pipeline-Funktionen aus diesen Open-Source-Komponenten aufbauen — mit Abdeckung der Architektur, des Component-Stacks, Hardware-Tiers, fünf praktischer Use Cases und eines Python-Async-Orchestrators, der Sprach- und Vision-Eingaben parallel verarbeitet.',
    metaDescription:
      'Lokale multimodale KI-Pipeline 2026 aufbauen: whisper.cpp für Spracheingabe, LLaVA 1.6 für Vision, Ollama für Textreasoning, Piper TTS für Sprachausgabe. Architektur, Hardware-Tiers, Use Cases und Python-Orchestrator-Code. Vollständig offline.',
    twitterDescription:
      'Lokale multimodale KI 2026: Whisper STT + LLaVA Vision + Ollama LLM + Piper TTS in einer Offline-Pipeline kombinieren. Architektur-Leitfaden, Hardware-Tiers und Python-Code.',
    readTime: '18 Min. Lesezeit',
    educationalLevel: 'Advanced',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Eine lokale multimodale Pipeline besteht aus vier separat orchestrierten Modellen — kein Einzelmodell wie GPT-4o.** whisper.cpp verarbeitet Sprache, ein VLM (LLaVA oder Llama 3.2 Vision) verarbeitet Bilder, ein LLM übernimmt das Textreasoning und Piper die Sprachausgabe. Der Orchestrator leitet Eingaben an das richtige Modell weiter und kombiniert die Ausgaben.',
          '**Llama 3.2 Vision 11B kann sowohl das VLM als auch das Text-LLM in einem Modell ersetzen.** Es akzeptiert Text und Bilder gleichzeitig und verarbeitet Beschreibung und Reasoning in einem Durchlauf — reduziert VRAM von ~15 GB (separate Modelle) auf ~8 GB (einzelnes Llama 3.2 Vision 11B).',
          '**Mindesthardware für den vollständigen Stack: RTX 4070 12 GB oder Apple M5 Pro 36 GB.** Eine RTX 3060 12 GB kann eine eingeschränkte Version ausführen (Phi-4 statt Llama 3.1 8B oder sequenzielles Modell-Laden) — nutzbar, aber langsamer.',
          '**Fünf praktische Use Cases rechtfertigen die Komplexität:** sprachgesteuerte Dokumentenanalyse, Visual Q&A mit Sprachinteraktion, Meeting-Transkription kombiniert mit Folienanalyse, lokale Screenreader-Zugänglichkeitstools und lokale Sicherheitskameraanalyse.',
          '**Async-Orchestrierung ist für akzeptable Performance entscheidend.** STT und Vision können parallel ausgeführt werden, wenn sowohl Audio- als auch Bildeingaben verfügbar sind — das Text-LLM wartet auf beide und generiert dann eine kombinierte Antwort.',
          '**Streaming der LLM-Ausgabe an TTS reduziert die wahrgenommene Latenz um 0,3–0,7 Sekunden.** Audiogenerierung aus dem ersten abgeschlossenen Satz beginnt, während das LLM noch den Rest der Antwort schreibt.',
          '**Dies ist nicht GPT-4o.** Separate Modelle erzeugen „Nähte" — die Beschreibung des Vision-Modells wird als Text an das LLM übergeben, wobei einige modalitätsübergreifende Reasoning-Fähigkeiten verloren gehen. Qualität bei komplexen multimodalen Aufgaben liegt unter Frontier-Closed-Models, ist aber für strukturierte Dokumente und klare Fotoaufgaben ausreichend.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**VRAM für den vollständigen Stack:** ~15 GB (Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.1 8B 6 GB). Piper läuft auf der CPU.',
          '**Vereinfachter Stack (Llama 3.2 Vision 11B):** ~8 GB VRAM — verarbeitet sowohl Vision als auch Textreasoning in einem Modell.',
          '**Sprach-Latenz (Whisper small, RTX 4070):** ~200–500 ms STT. 500–1500 ms LLM erster Token. 100 ms Piper TTS.',
          '**Bildverarbeitungs-Latenz (LLaVA 7B, RTX 4070):** ~2–5 Sekunden pro Bild je nach Auflösung und Prompt.',
          '**Kein Echtzeit-Video:** VLMs verarbeiten einzelne Frames, keine kontinuierlichen Videostreams. Für Video: Frames bei 1 FPS extrahieren und einzeln verarbeiten.',
          '**Gleiche Ollama-Instanz für VLM + LLM:** Ollama kann Llama 3.2 Vision sowohl als Vision- als auch als Text-Modell bereitstellen und so VRAM sparen.',
          '**Alle Komponenten MIT- oder Apache-2.0-lizenziert** (whisper.cpp MIT, LLaVA MIT, Llama 3.1 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'Was ist eine multimodale KI-Pipeline?',
        content: 'Ein multimodales KI-System akzeptiert mehrere Eingabetypen (Sprache, Bilder, Text) und erzeugt mehrere Ausgabetypen (Text, Sprache). Das Cloud-Äquivalent ist GPT-4o — ein einzelnes Modell, das Audio, Bilder und Text in beliebiger Kombination akzeptiert.',
        items: [
          '**Cloud-Ansatz (GPT-4o):** Ein riesiges Modell, das simultan auf allen Modalitäten trainiert wurde. Modalitätsübergreifendes Reasoning wird beim Training gelernt — das Modell kann die Beziehung zwischen Bildinhalt und Sprachabfragen nativ verstehen.',
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
          { type: 'one-sentence', text: 'Eine lokale multimodale Pipeline kostet nach der einmaligen Hardware-Investition (600–3.500 $) 0 $/Monat an API-Gebühren, mit einem Break-even gegenüber GPT-4o-API-Kosten (135–225 $/Monat) in 3–18 Monaten je nach Abfragevolumen.' },
        ],
        columns: ['Nutzung', 'GPT-4o API', 'Google Cloud', 'Lokal'],
        rows: [
          { 'Nutzung': '100 Sprachabfragen/Tag', 'GPT-4o API': '$90–150/Mo.', 'Google Cloud': '$60–120/Mo.', 'Lokal': '$0' },
          { 'Nutzung': '50 Bildanalysen/Tag', 'GPT-4o API': '$45–75/Mo.', 'Google Cloud': '$30–60/Mo.', 'Lokal': '$0' },
          { 'Nutzung': 'Kombiniert (typisch)', 'GPT-4o API': '$135–225/Mo.', 'Google Cloud': '$90–180/Mo.', 'Lokal': '$0' },
          { 'Nutzung': 'Hardware (einmalig)', 'GPT-4o API': '$0', 'Google Cloud': '$0', 'Lokal': '$600–3.500' },
          { 'Nutzung': 'Break-even', 'GPT-4o API': '—', 'Google Cloud': '—', 'Lokal': '3–18 Monate' },
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
          { type: 'one-sentence', text: 'Der vollständige lokale multimodale Stack benötigt ~15 GB VRAM: Whisper large-v3 (3 GB) + LLaVA 1.6 7B (6 GB) + Llama 3.1 8B (6 GB); Piper TTS läuft kostenlos auf der CPU.' },
          { type: 'plain-terms', text: 'Sie können VRAM auf 8 GB reduzieren, indem Sie Llama 3.2 Vision 11B sowohl als Vision- als auch als Text-Modell verwenden — es verarbeitet Fotos UND Konversation in einem Modell.' },
        ],
        columns: ['Schicht', 'Tool', 'Modell', 'VRAM', 'Rolle'],
        rows: [
          { 'Schicht': 'STT', 'Tool': 'whisper.cpp', 'Modell': 'Whisper large-v3', 'VRAM': '~3 GB', 'Rolle': 'Sprache → Texttranskript' },
          { 'Schicht': 'Vision', 'Tool': 'Ollama', 'Modell': 'LLaVA 1.6 7B', 'VRAM': '~6 GB', 'Rolle': 'Bild → Textbeschreibung' },
          { 'Schicht': 'Reasoning', 'Tool': 'Ollama', 'Modell': 'Llama 3.1 8B Q4', 'VRAM': '~6 GB', 'Rolle': 'Text → Textantwort' },
          { 'Schicht': 'TTS', 'Tool': 'Piper', 'Modell': 'en_US-lessac-medium', 'VRAM': 'Nur CPU', 'Rolle': 'Text → Sprachausgabe' },
          { 'Schicht': 'Gesamt (separate Modelle)', 'Tool': '', 'Modell': '', 'VRAM': '~15 GB', 'Rolle': 'Vollständige Pipeline' },
        ],
        callouts: [
          { type: 'tip', text: 'Verwenden Sie Llama 3.2 Vision 11B anstelle von separatem LLaVA + Llama 3.1 8B, um VRAM auf ~8 GB zu reduzieren.' },
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
          { 'Stufe': 'Mittel', 'GPU': 'RTX 4070 12 GB', 'RAM': '32 GB', 'Kann ausführen': 'Vollständiger Stack mit 7B-Modellen (LLaVA 7B + Llama 3.1 8B, knapper Fit)', 'Latenz (Sprach-Abfrage + Bild)': '3–6 Sek.' },
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
          '**Kombination:** Am Ende des Meetings übergeben Sie Transkript + Folienbeschreibungen an Llama 3.1 8B für Zusammenfassung und Aktionspunkte.',
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
        content: '**Eine lokale multimodale Pipeline ist nicht GPT-4o.** Klarheit über die Lücken verhindert Frustration und hilft bei der Umgehungsplanung.',
        items: [
          '**Modalitätsnähte:** Vision-Ausgabe wird zu Text serialisiert, bevor sie an das Text-LLM übergeben wird. Das LLM kann nicht direkt über Bildmerkmale nachdenken — es denkt über eine Textbeschreibung des Bildes nach.',
          '**Kein Echtzeit-Video:** Lokale VLMs verarbeiten einzelne Frames, kein kontinuierliches Video. Für Video: Frames bei 0,5–2 FPS extrahieren und sequenziell verarbeiten.',
          '**VLM-Qualitätslücke:** Lokale Vision-Modelle (LLaVA 7B, Llama 3.2 Vision 11B) liegen hinter GPT-4o Vision bei komplexen Infografiken, handgeschriebenem Text und mehrdeutigen Szenen.',
          '**VRAM-Druck:** Drei Modelle simultan auf einer einzelnen GPU zu betreiben erfordert sorgfältiges VRAM-Management. Auf 12-GB-GPUs müssen Modellgrößen sorgfältig gewählt werden.',
          '**Latenz vs. Cloud:** Ein Cloud-Multimodal-Aufruf (GPT-4o) dauert 1–3 Sekunden. Eine lokale Pipeline dauert 3–8 Sekunden auf vergleichbarer Hardware.',
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
            a: 'Nein, nicht alle vier gleichzeitig — 3060 hat 12 GB, aber die Stack-Anforderungen sind ~15 GB (whisper 3 + LLaVA 6 + Llama 3.1 8 6 + Piper CPU). Lösung: Verwenden Sie Llama 3.2 Vision 11B (8 GB) allein oder quantisieren Sie die Modelle auf INT4 (reduziert auf ~10 GB). Oder swappen Sie Models in/out je nach Eingabetyp.',
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
            a: 'Ruhe mit Modellen warm in VRAM: ~50–80 W (Desktop-GPU), ~15–25 W (Mac Mini M5 Pro). Aktive Verarbeitung: ~150–300 W (Desktop-GPU), ~30–60 W (Mac Mini M5 Pro). Monatliche Kosten bei $0,15/kWh: ungefähr $5–15 (Mac Mini) oder $15–35 (Desktop). Dies ist weniger als eine Cloud-API bei vergleichbarem Query-Volumen — ein Mac Mini mit dem kompletten Stack 24/7 kostet weniger Elektrizität pro Monat als zwei Tage GPT-4o API-Nutzung bei 100 Queries/Tag.',
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
      'Un pipeline IA multimodal local combine des modèles spécialisés pour chaque modalité — whisper.cpp pour la saisie vocale, LLaVA ou Llama 3.2 Vision pour la compréhension d\'images, un LLM Ollama pour le raisonnement textuel et Piper TTS pour la sortie vocale — orchestrés en un système cohérent fonctionnant 100 % hors ligne. C\'est l\'équivalent local des capacités multimodales de GPT-4o : aucun modèle unique ne comprend tout, mais l\'orchestrateur route chaque type d\'entrée vers le bon modèle et combine les sorties.',
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
          '**Un pipeline multimodal local repose sur quatre modèles orchestrés séparément — pas un modèle unique comme GPT-4o.** whisper.cpp gère la voix, un VLM (LLaVA ou Llama 3.2 Vision) gère les images, un LLM gère le raisonnement textuel et Piper gère la sortie vocale. L\'orchestrateur route les entrées vers le bon modèle et combine les sorties.',
          '**Llama 3.2 Vision 11B peut remplacer à la fois le VLM et le LLM textuel en un seul modèle.** Il accepte texte et images simultanément et gère description et raisonnement en un seul passage — réduisant la VRAM de ~15 Go (modèles séparés) à ~8 Go (Llama 3.2 Vision 11B seul).',
          '**Matériel minimum pour le stack complet : RTX 4070 12 Go ou Apple M5 Pro 36 Go.** Un RTX 3060 12 Go peut exécuter une version contrainte (Phi-4 au lieu de Llama 3.1 8B, ou chargement séquentiel des modèles) — utilisable mais plus lent.',
          '**Cinq cas d\'usage pratiques justifient la complexité :** analyse de documents par commande vocale, Q&A visuel avec interaction vocale, transcription de réunions combinée à l\'analyse de diapositives, outils d\'accessibilité de lecteur d\'écran local et analyse locale de caméras de sécurité.',
          '**L\'orchestration async est essentielle pour des performances acceptables.** STT et vision peuvent fonctionner en parallèle lorsque des entrées audio et image sont disponibles — le LLM textuel attend les deux, puis génère une réponse combinée.',
          '**Le streaming de la sortie LLM vers TTS réduit la latence perçue de 0,3–0,7 seconde.** La génération audio commence dès la première phrase complète pendant que le LLM rédige encore le reste de la réponse.',
          '**Ce n\'est pas GPT-4o.** Des modèles séparés produisent des « coutures » — la description du modèle de vision passe sous forme de texte au LLM, perdant une partie du raisonnement cross-modal. La qualité sur les tâches multimodales complexes est inférieure aux modèles fermés de pointe, mais suffisante pour les documents structurés et les photos claires.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**VRAM totale pour le stack complet :** ~15 Go (Whisper 3 Go + LLaVA 7B 6 Go + Llama 3.1 8B 6 Go). Piper tourne sur CPU.',
          '**Stack simplifié (Llama 3.2 Vision 11B) :** ~8 Go VRAM — gère vision et raisonnement textuel en un seul modèle.',
          '**Latence vocale (Whisper small, RTX 4070) :** ~200–500 ms STT. 500–1500 ms premier token LLM. 100 ms Piper TTS.',
          '**Latence traitement image (LLaVA 7B, RTX 4070) :** ~2–5 secondes par image selon résolution et prompt.',
          '**Pas de vidéo temps réel :** Les VLMs traitent des images individuelles, pas des flux vidéo continus. Pour la vidéo, extraire des images à 1 FPS et traiter chacune.',
          '**Même instance Ollama pour VLM + LLM :** Ollama peut servir Llama 3.2 Vision comme modèle de vision et modèle textuel, économisant la VRAM.',
          '**Tous les composants sous licence MIT ou Apache 2.0** (whisper.cpp MIT, LLaVA MIT, Llama 3.1 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'Qu\'est-ce qu\'un pipeline IA multimodal ?',
        content: 'Un système IA multimodal accepte plusieurs types d\'entrée (voix, images, texte) et produit plusieurs types de sortie (texte, parole). L\'équivalent cloud est GPT-4o — un seul modèle acceptant audio, images et texte en toute combinaison.',
        items: [
          '**Approche cloud (GPT-4o) :** Un modèle géant entraîné simultanément sur toutes les modalités. Le raisonnement cross-modal est appris à l\'entraînement — le modèle peut raisonner nativement sur la relation entre contenu image et requêtes vocales.',
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
          { type: 'one-sentence', text: 'Un pipeline multimodal local coûte 0 $/mois en frais d\'API après l\'investissement matériel unique (600–3 500 $), avec un seuil de rentabilité face aux coûts API GPT-4o (135–225 $/mois) en 3–18 mois selon le volume de requêtes.' },
        ],
        columns: ['Usage', 'GPT-4o API', 'Google Cloud', 'Local'],
        rows: [
          { 'Usage': '100 requêtes vocales/jour', 'GPT-4o API': '$90–150/mois', 'Google Cloud': '$60–120/mois', 'Local': '$0' },
          { 'Usage': '50 analyses d\'images/jour', 'GPT-4o API': '$45–75/mois', 'Google Cloud': '$30–60/mois', 'Local': '$0' },
          { 'Usage': 'Combiné (typique)', 'GPT-4o API': '$135–225/mois', 'Google Cloud': '$90–180/mois', 'Local': '$0' },
          { 'Usage': 'Matériel (une fois)', 'GPT-4o API': '$0', 'Google Cloud': '$0', 'Local': '$600–3 500' },
          { 'Usage': 'Seuil de rentabilité', 'GPT-4o API': '—', 'Google Cloud': '—', 'Local': '3–18 mois' },
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
          { type: 'one-sentence', text: 'Le stack multimodal local complet utilise ~15 Go VRAM : Whisper large-v3 (3 Go) + LLaVA 1.6 7B (6 Go) + Llama 3.1 8B (6 Go) ; Piper TTS tourne sur CPU sans coût VRAM.' },
          { type: 'plain-terms', text: 'Vous pouvez réduire la VRAM à 8 Go en utilisant Llama 3.2 Vision 11B comme modèle de vision ET de texte — il gère photos ET conversation en un seul modèle.' },
        ],
        columns: ['Couche', 'Outil', 'Modèle', 'VRAM', 'Rôle'],
        rows: [
          { 'Couche': 'STT', 'Outil': 'whisper.cpp', 'Modèle': 'Whisper large-v3', 'VRAM': '~3 Go', 'Rôle': 'Voix → transcription texte' },
          { 'Couche': 'Vision', 'Outil': 'Ollama', 'Modèle': 'LLaVA 1.6 7B', 'VRAM': '~6 Go', 'Rôle': 'Image → description texte' },
          { 'Couche': 'Raisonnement', 'Outil': 'Ollama', 'Modèle': 'Llama 3.1 8B Q4', 'VRAM': '~6 Go', 'Rôle': 'Texte → réponse texte' },
          { 'Couche': 'TTS', 'Outil': 'Piper', 'Modèle': 'en_US-lessac-medium', 'VRAM': 'CPU uniquement', 'Rôle': 'Texte → sortie vocale' },
          { 'Couche': 'Total (modèles séparés)', 'Outil': '', 'Modèle': '', 'VRAM': '~15 Go', 'Rôle': 'Pipeline complet' },
        ],
        callouts: [
          { type: 'tip', text: 'Utilisez Llama 3.2 Vision 11B au lieu de LLaVA + Llama 3.1 8B séparés pour réduire la VRAM à ~8 Go.' },
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
          { 'Niveau': 'Milieu de gamme', 'GPU': 'RTX 4070 12 Go', 'RAM': '32 Go', 'Peut exécuter': 'Stack complet avec modèles 7B (LLaVA 7B + Llama 3.1 8B, ajustement serré)', 'Latence (requête vocale + image)': '3–6 sec' },
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
          '**Combinaison :** En fin de réunion, passer transcription + descriptions de diapositives à Llama 3.1 8B pour résumé et points d\'action.',
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
        content: '**Un pipeline multimodal local n\'est pas GPT-4o.** Être clair sur les lacunes évite la frustration et aide à concevoir des contournements.',
        items: [
          '**Coutures modales :** La sortie vision est sérialisée en texte avant d\'être transmise au LLM textuel. Le LLM ne peut pas raisonner directement sur les features visuelles — il raisonne sur une description texte de l\'image.',
          '**Pas de vidéo temps réel :** Les VLMs locaux traitent des images individuelles, pas de vidéo continue. Pour la vidéo, extraire des images à 0,5–2 FPS et traiter séquentiellement.',
          '**Écart de qualité VLM :** Les modèles de vision locaux (LLaVA 7B, Llama 3.2 Vision 11B) sont en retrait par rapport à GPT-4o Vision sur les infographies complexes, le texte manuscrit et les scènes ambiguës.',
          '**Pression VRAM :** Exécuter trois modèles simultanément sur un seul GPU nécessite une gestion VRAM soigneuse. Sur les GPU 12 Go, les tailles de modèles doivent être choisies avec soin.',
          '**Latence vs. cloud :** Un appel multimodal cloud (GPT-4o) prend 1–3 secondes. Un pipeline local prend 3–8 secondes sur du matériel comparable.',
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
      'ローカルマルチモーダルAIパイプラインは、各モダリティに特化した独立したモデルを組み合わせます。音声入力にwhisper.cpp、画像理解にLLaVAまたはLlama 3.2 Vision、テキスト推論にOllama LLM、音声出力にPiper TTSを使用し、100%オフラインで動作する一貫したシステムとして統合します。これはGPT-4oのマルチモーダル機能のローカル版です：単一のモデルがすべてを理解するのではなく、オーケストレーターが各入力タイプを適切なモデルに振り分け、出力を結合します。',
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
          '**ローカルマルチモーダルパイプラインは4つの独立したモデルを組み合わせたもの — GPT-4oのような単一モデルではありません。** whisper.cppが音声を、VLM（LLaVAまたはLlama 3.2 Vision）が画像を、LLMがテキスト推論を、PiperがSTTを担当します。オーケストレーターが入力を適切なモデルに振り分け、出力を結合します。',
          '**Llama 3.2 Vision 11BはVLMとテキストLLMの両方を1つのモデルで代替できます。** テキストと画像を同時に受け付け、説明と推論を1回のパスで処理 — VRAMを~15 GB（個別モデル）から~8 GB（Llama 3.2 Vision 11B単体）に削減します。',
          '**フルスタックの最低ハードウェア：RTX 4070 12 GBまたはApple M5 Pro 36 GB。** RTX 3060 12 GBは制限版（Llama 3.1 8BではなくPhi-4、またはシーケンシャルなモデルロード）を実行可能 — 使えますが遅くなります。',
          '**5つの実用的なユースケースが複雑さを正当化します：** 音声制御ドキュメント分析、音声インタラクションを伴うビジュアルQ&A、スライド分析と組み合わせた会議転写、ローカルスクリーンリーダーアクセシビリティツール、ローカルセキュリティカメラ分析。',
          '**非同期オーケストレーションは許容可能なパフォーマンスに不可欠です。** 音声とビジョンの両入力が利用可能な場合、STTとビジョンは並列実行できます — テキストLLMは両方を待ってから結合された応答を生成します。',
          '**LLM出力をTTSにストリーミングすると知覚レイテンシが0.3〜0.7秒短縮されます。** LLMがまだ残りの応答を書いている間に、最初の完成した文から音声生成を開始します。',
          '**これはGPT-4oではありません。** 個別のモデルは「継ぎ目」を生じさせます — ビジョンモデルの説明がテキストとしてLLMに渡され、一部のクロスモーダル推論が失われます。複雑なマルチモーダルタスクの品質はフロンティアクローズドモデルより低いですが、構造化ドキュメントや明確な写真タスクには十分です。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**フルスタックの総VRAM：** ~15 GB（Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.1 8B 6 GB）。PiperはCPU上で動作。',
          '**簡略化スタック（Llama 3.2 Vision 11B）：** ~8 GB VRAM — ビジョンとテキスト推論の両方を1つのモデルで処理。',
          '**音声レイテンシ（Whisper small、RTX 4070）：** STT ~200〜500 ms。LLM最初のトークン500〜1500 ms。Piper TTS 100 ms。',
          '**画像処理レイテンシ（LLaVA 7B、RTX 4070）：** 解像度とプロンプトにより画像1枚あたり~2〜5秒。',
          '**リアルタイムビデオ非対応：** VLMは個別フレームを処理し、継続的なビデオストリームは処理しません。ビデオの場合は1 FPSでフレームを抽出して各フレームを処理。',
          '**VLM + LLMに同じOllamaインスタンス：** OllamaはLlama 3.2 Visionをビジョンモデルとテキストモデルの両方として提供でき、VRAMを節約。',
          '**全コンポーネントがMITまたはApache 2.0ライセンス**（whisper.cpp MIT、LLaVA MIT、Llama 3.1 8B Llama 3コミュニティライセンス、Piper MIT）。',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: 'マルチモーダルAIパイプラインとは？',
        content: 'マルチモーダルAIシステムは複数の入力タイプ（音声、画像、テキスト）を受け付け、複数の出力タイプ（テキスト、音声）を生成します。クラウド版はGPT-4o — 音声、画像、テキストを任意の組み合わせで受け付ける単一モデルです。',
        items: [
          '**クラウドアプローチ（GPT-4o）：** 全モダリティで同時に訓練された巨大なモデル。クロスモーダル推論は訓練中に学習 — 画像コンテンツと音声クエリの関係をネイティブに推論できます。',
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
          { type: 'one-sentence', text: 'ローカルマルチモーダルパイプラインは一回限りのハードウェア投資（600〜3,500ドル）後、API費用が0ドル/月となり、GPT-4o APIコスト（135〜225ドル/月）に対して3〜18ヶ月（クエリ量により異なる）で損益分岐点に達します。' },
        ],
        columns: ['用途', 'GPT-4o API', 'Google Cloud', 'ローカル'],
        rows: [
          { '用途': '音声クエリ100件/日', 'GPT-4o API': '$90〜150/月', 'Google Cloud': '$60〜120/月', 'ローカル': '$0' },
          { '用途': '画像分析50件/日', 'GPT-4o API': '$45〜75/月', 'Google Cloud': '$30〜60/月', 'ローカル': '$0' },
          { '用途': '複合（典型的）', 'GPT-4o API': '$135〜225/月', 'Google Cloud': '$90〜180/月', 'ローカル': '$0' },
          { '用途': 'ハードウェア（一回限り）', 'GPT-4o API': '$0', 'Google Cloud': '$0', 'ローカル': '$600〜3,500' },
          { '用途': '損益分岐点', 'GPT-4o API': '—', 'Google Cloud': '—', 'ローカル': '3〜18ヶ月' },
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
          { type: 'one-sentence', text: 'フルローカルマルチモーダルスタックは~15 GB VRAMを使用：Whisper large-v3（3 GB）+ LLaVA 1.6 7B（6 GB）+ Llama 3.1 8B（6 GB）；Piper TTSはVRAMコストゼロでCPU上で動作します。' },
          { type: 'plain-terms', text: 'Llama 3.2 Vision 11Bをビジョンモデルとテキストモデルとして両方使用することで、VRAMを8 GBに削減できます — 写真と会話の両方を1つのモデルで処理します。' },
        ],
        columns: ['レイヤー', 'ツール', 'モデル', 'VRAM', '役割'],
        rows: [
          { 'レイヤー': 'STT', 'ツール': 'whisper.cpp', 'モデル': 'Whisper large-v3', 'VRAM': '~3 GB', '役割': '音声 → テキスト転写' },
          { 'レイヤー': 'ビジョン', 'ツール': 'Ollama', 'モデル': 'LLaVA 1.6 7B', 'VRAM': '~6 GB', '役割': '画像 → テキスト説明' },
          { 'レイヤー': '推論', 'ツール': 'Ollama', 'モデル': 'Llama 3.1 8B Q4', 'VRAM': '~6 GB', '役割': 'テキスト → テキスト応答' },
          { 'レイヤー': 'TTS', 'ツール': 'Piper', 'モデル': 'en_US-lessac-medium', 'VRAM': 'CPUのみ', '役割': 'テキスト → 音声出力' },
          { 'レイヤー': '合計（個別モデル）', 'ツール': '', 'モデル': '', 'VRAM': '~15 GB', '役割': 'フルパイプライン' },
        ],
        callouts: [
          { type: 'tip', text: '個別のLLaVA + Llama 3.1 8Bの代わりにLlama 3.2 Vision 11Bを使用してVRAMを~8 GBに削減できます。' },
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
          { 'ティア': 'ミッド', 'GPU': 'RTX 4070 12 GB', 'RAM': '32 GB', '実行可能': '7Bモデルでフルスタック（LLaVA 7B + Llama 3.1 8B、ぎりぎり）', 'レイテンシ（音声クエリ＋画像）': '3〜6秒' },
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
          '**結合：** 会議終了時に転写 + スライド説明をLlama 3.1 8Bに渡してサマリーとアクションアイテムを作成します。',
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
        content: '**ローカルマルチモーダルパイプラインはGPT-4oではありません。** ギャップを明確にすることで、フラストレーションを防ぎ、制限を回避した設計ができます。',
        items: [
          '**モダリティの継ぎ目：** ビジョン出力はテキストLLMに渡される前にテキストにシリアライズされます。LLMは画像の特徴について直接推論できません — 画像のテキスト説明について推論します。',
          '**リアルタイムビデオなし：** ローカルVLMは単一フレームを処理し、継続的なビデオは処理しません。ビデオの場合は0.5〜2 FPSでフレームを抽出してシーケンシャルに処理します。',
          '**VLM品質のギャップ：** ローカルビジョンモデル（LLaVA 7B、Llama 3.2 Vision 11B）は複雑なインフォグラフィック、手書きテキスト、曖昧なシーンでGPT-4o Visionより劣っています。',
          '**VRAMプレッシャー：** 1つのGPUで3つのモデルを同時実行するには慎重なVRAM管理が必要です。12 GB GPUではモデルサイズを慎重に選択する必要があります。',
          '**レイテンシ vs クラウド：** クラウドマルチモーダル呼び出し（GPT-4o）は1〜3秒かかります。ローカルパイプラインは同等のハードウェアで3〜8秒かかります。',
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
      '本地多模态AI流水线将多个专业模型组合在一起——whisper.cpp用于语音输入，LLaVA或Llama 3.2 Vision用于图像理解，Ollama LLM用于文本推理，Piper TTS用于语音输出——整合成一个100%离线运行的连贯系统。这是GPT-4o多模态能力的本地替代方案：没有单个模型能理解一切，但编排器将每种输入类型路由到正确的模型并组合输出结果。',
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
          '**本地多模态流水线由四个独立模型协同编排而成 — 不是像GPT-4o那样的单一模型。** whisper.cpp处理语音，VLM（LLaVA或Llama 3.2 Vision）处理图像，LLM处理文本推理，Piper处理语音输出。编排器将输入路由到正确的模型并组合输出。',
          '**Llama 3.2 Vision 11B可以用一个模型替代VLM和文本LLM两者。** 它同时接受文本和图像，在一次推理中处理描述和推理 — 将VRAM从~15 GB（独立模型）降至~8 GB（单个Llama 3.2 Vision 11B）。',
          '**完整堆栈的最低硬件：RTX 4070 12 GB或Apple M5 Pro 36 GB。** RTX 3060 12 GB可以运行受限版本（用Phi-4替代Llama 3.1 8B，或顺序加载模型）— 可用但较慢。',
          '**五个实用场景证明复杂度是值得的：** 语音控制文档分析、带语音交互的视觉问答、会议转录结合幻灯片分析、本地屏幕阅读器无障碍工具以及本地安全摄像头分析。',
          '**异步编排对于可接受的性能至关重要。** 当音频和图像输入都可用时，STT和视觉可以并行运行 — 文本LLM等待两者完成，然后生成组合响应。',
          '**将LLM输出流式传输到TTS可将感知延迟降低0.3〜0.7秒。** 在LLM还在生成剩余响应时，从第一个完整句子开始生成音频。',
          '**这不是GPT-4o。** 独立模型会产生"缝隙" — 视觉模型的描述作为文本传递给LLM，失去了部分跨模态推理能力。复杂多模态任务的质量低于前沿闭源模型，但对结构化文档和清晰照片任务已经足够。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**完整堆栈总VRAM：** ~15 GB（Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.1 8B 6 GB）。Piper在CPU上运行。',
          '**简化堆栈（Llama 3.2 Vision 11B）：** ~8 GB VRAM — 一个模型同时处理视觉和文本推理。',
          '**语音延迟（Whisper small，RTX 4070）：** STT ~200〜500 ms。LLM首个token 500〜1500 ms。Piper TTS 100 ms。',
          '**图像处理延迟（LLaVA 7B，RTX 4070）：** 根据分辨率和提示词，每张图像~2〜5秒。',
          '**不支持实时视频：** VLM处理单个帧，而非连续视频流。对于视频，以1 FPS提取帧并逐帧处理。',
          '**VLM + LLM使用同一Ollama实例：** Ollama可同时将Llama 3.2 Vision作为视觉模型和文本模型提供服务，节省VRAM。',
          '**所有组件均为MIT或Apache 2.0许可**（whisper.cpp MIT、LLaVA MIT、Llama 3.1 8B Llama 3社区许可、Piper MIT）。',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: '什么是多模态AI流水线？',
        content: '多模态AI系统接受多种输入类型（语音、图像、文本）并产生多种输出类型（文本、语音）。云端等价物是GPT-4o — 一个单一模型，可接受任意组合的音频、图像和文本。',
        items: [
          '**云端方式（GPT-4o）：** 一个在所有模态上同时训练的超大模型。跨模态推理在训练期间学习 — 模型可以原生推理图像内容与语音查询之间的关系。',
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
          { type: 'one-sentence', text: '本地多模态流水线在一次性硬件投资（600〜3,500美元）后，每月API费用为0美元，相对于GPT-4o API成本（135〜225美元/月），根据查询量在3〜18个月内达到盈亏平衡。' },
        ],
        columns: ['用途', 'GPT-4o API', 'Google Cloud', '本地'],
        rows: [
          { '用途': '每天100次语音查询', 'GPT-4o API': '$90〜150/月', 'Google Cloud': '$60〜120/月', '本地': '$0' },
          { '用途': '每天50次图像分析', 'GPT-4o API': '$45〜75/月', 'Google Cloud': '$30〜60/月', '本地': '$0' },
          { '用途': '综合使用（典型）', 'GPT-4o API': '$135〜225/月', 'Google Cloud': '$90〜180/月', '本地': '$0' },
          { '用途': '硬件（一次性）', 'GPT-4o API': '$0', 'Google Cloud': '$0', '本地': '$600〜3,500' },
          { '用途': '盈亏平衡点', 'GPT-4o API': '—', 'Google Cloud': '—', '本地': '3〜18个月' },
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
          { type: 'one-sentence', text: '完整的本地多模态堆栈使用~15 GB VRAM：Whisper large-v3（3 GB）+ LLaVA 1.6 7B（6 GB）+ Llama 3.1 8B（6 GB）；Piper TTS在CPU上运行，无VRAM成本。' },
          { type: 'plain-terms', text: '通过将Llama 3.2 Vision 11B同时用作视觉模型和文本模型，可以将VRAM削减到8 GB — 它用一个模型处理照片和对话。' },
        ],
        columns: ['层级', '工具', '模型', 'VRAM', '作用'],
        rows: [
          { '层级': 'STT', '工具': 'whisper.cpp', '模型': 'Whisper large-v3', 'VRAM': '~3 GB', '作用': '语音 → 文本转录' },
          { '层级': '视觉', '工具': 'Ollama', '模型': 'LLaVA 1.6 7B', 'VRAM': '~6 GB', '作用': '图像 → 文本描述' },
          { '层级': '推理', '工具': 'Ollama', '模型': 'Llama 3.1 8B Q4', 'VRAM': '~6 GB', '作用': '文本 → 文本响应' },
          { '层级': 'TTS', '工具': 'Piper', '模型': 'en_US-lessac-medium', 'VRAM': '仅CPU', '作用': '文本 → 语音输出' },
          { '层级': '合计（独立模型）', '工具': '', '模型': '', 'VRAM': '~15 GB', '作用': '完整流水线' },
        ],
        callouts: [
          { type: 'tip', text: '使用Llama 3.2 Vision 11B替代独立的LLaVA + Llama 3.1 8B，将VRAM降至~8 GB。' },
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
          { '层级': '中端', 'GPU': 'RTX 4070 12 GB', 'RAM': '32 GB', '可运行': '7B模型完整堆栈（LLaVA 7B + Llama 3.1 8B，紧凑配置）', '延迟（语音查询+图像）': '3〜6秒' },
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
          '**组合：** 会议结束时，将转录 + 幻灯片描述传递给Llama 3.1 8B生成摘要和行动项。',
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
        content: '**本地多模态流水线不是GPT-4o。** 清楚了解差距可以防止挫败感，并帮助围绕局限性进行设计。',
        items: [
          '**模态缝隙：** 视觉输出在传递给文本LLM之前被序列化为文本。LLM无法直接推理图像特征 — 它推理的是图像的文本描述。',
          '**不支持实时视频：** 本地VLM处理单个帧，而非连续视频。对于视频，以0.5〜2 FPS提取帧并顺序处理。',
          '**VLM质量差距：** 本地视觉模型（LLaVA 7B、Llama 3.2 Vision 11B）在复杂信息图、手写文本和模糊场景上落后于GPT-4o Vision。',
          '**VRAM压力：** 在单个GPU上同时运行三个模型需要仔细的VRAM管理。在12 GB GPU上，模型大小必须仔细选择。',
          '**延迟 vs 云端：** 云端多模态调用（GPT-4o）需要1〜3秒。本地流水线在相当硬件上需要3〜8秒。',
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
      'Un pipeline multimodal de IA local combina modelos especializados independientes para cada modalidad — whisper.cpp para la entrada de voz, LLaVA o Llama 3.2 Vision para la comprensión de imágenes, un LLM de Ollama para el razonamiento textual y Piper TTS para la salida de voz — orquestados en un sistema coherente que funciona 100 % sin conexión. Este es el equivalente local de las capacidades multimodales de GPT-4o: ningún modelo individual lo entiende todo, pero el orquestador dirige cada tipo de entrada al modelo correcto y combina las salidas. Esta guía muestra cómo construir un pipeline multimodal local con estos componentes de código abierto — cubriendo la arquitectura, el stack de componentes, los niveles de hardware, cinco casos de uso prácticos y un orquestador asíncrono en Python que procesa entradas de voz y visión en paralelo.',
    metaDescription:
      'Ejecuta IA de voz + visión + texto localmente en 2026. Combina whisper.cpp, LLaVA 1.6, Ollama y Piper TTS. Orquestador Python completo — sin nube, sin claves de API.',
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
      'alternativa local a GPT-4o',
      'construir IA multimodal offline',
      'pipeline voz visión local',
      'integración llava whisper',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'LLaVA 1.6 7B',
      'Qwen2-VL 7B',
      'Llama 3.2 Vision 11B',
      'Llama 3.1 8B',
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
      '**Un pipeline multimodal de IA local en 2026 requiere como mínimo 12 GB de VRAM en la GPU para ejecutar STT + visión + LLM + TTS simultáneamente.** La configuración mínima viable es una RTX 4070 (12 GB) o Mac M5 Pro (36 GB de memoria unificada), ejecutando whisper.cpp para entrada de voz, LLaVA 1.6 7B para visión, Llama 3.1 8B para razonamiento textual y Piper para salida de voz. En una RTX 3060 12 GB puedes ejecutar el stack con un LLM más pequeño (Phi-4) sin visión — o intercambiar modelos en/fuera de la VRAM según sea necesario. La decisión arquitectónica clave es si compartir la VRAM entre el modelo de visión y el LLM (requiere 12+ GB) o ejecutarlos secuencialmente en una GPU más pequeña.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo construyes un pipeline multimodal de IA local con voz, visión y texto en 2026?',
        answer:
          'Combina cuatro modelos especializados: whisper.cpp (voz → texto), un modelo de visión-lenguaje como LLaVA 1.6 o Llama 3.2 Vision (imagen → descripción de texto), un LLM de Ollama como Llama 3.1 8B (texto → razonamiento textual) y Piper TTS (texto → voz). Un orquestador asíncrono en Python detecta el tipo de entrada y lo enruta al modelo correcto, combinando las salidas en una respuesta coherente. VRAM mínima: 12 GB para una configuración de VRAM compartida; 8 GB si intercambias modelos.',
        bullets: [
          'Entrada de voz: whisper.cpp (Metal en Mac, CUDA en NVIDIA) → transcripción de texto.',
          'Entrada de imagen: LLaVA 1.6 7B o Llama 3.2 Vision 11B vía Ollama → descripción textual.',
          'Razonamiento textual: Ollama + Llama 3.1 8B → texto de respuesta.',
          'Salida de voz: Piper TTS (CPU, ~0,1 seg de latencia) → reproducción de audio.',
          'Hardware mínimo: RTX 4070 12 GB o M5 Pro 36 GB para el stack completo simultáneo.',
          'Visión + LLM pueden compartir una instancia de Ollama (Llama 3.2 Vision maneja ambos).',
          'VRAM total para el stack completo: ~15 GB (whisper 3 GB + LLaVA 7B 6 GB + Llama 3.1 8B 6 GB + Piper CPU).',
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
          '**Un pipeline multimodal local son cuatro modelos orquestados por separado — no un único modelo como GPT-4o.** whisper.cpp gestiona la voz, un VLM (LLaVA o Llama 3.2 Vision) gestiona las imágenes, un LLM gestiona el razonamiento textual y Piper gestiona la salida de voz. El orquestador dirige las entradas al modelo correcto y combina las salidas.',
          '**Llama 3.2 Vision 11B puede reemplazar tanto el VLM como el LLM de texto en un solo modelo.** Acepta texto e imágenes simultáneamente y maneja tanto la descripción como el razonamiento en un único paso — reduciendo la VRAM de ~15 GB (modelos separados) a ~8 GB (Llama 3.2 Vision 11B único).',
          '**Hardware mínimo para el stack completo: RTX 4070 12 GB o Apple M5 Pro 36 GB.** Una RTX 3060 12 GB puede ejecutar una versión limitada (Phi-4 en lugar de Llama 3.1 8B, o carga secuencial de modelos) — funcional pero más lenta.',
          '**Cinco casos de uso prácticos justifican la complejidad:** análisis de documentos por voz, Q&A visual con interacción de voz, transcripción de reuniones combinada con análisis de diapositivas, herramientas de accesibilidad con lector de pantalla local y análisis local de cámara de seguridad.',
          '**La orquestación asíncrona es esencial para un rendimiento aceptable.** STT y visión pueden ejecutarse en paralelo cuando hay entradas de audio e imagen disponibles — el LLM de texto espera a ambos y luego genera una respuesta combinada.',
          '**Transmitir la salida del LLM al TTS reduce la latencia percibida en 0,3–0,7 segundos.** Comienza a generar audio desde la primera oración completada mientras el LLM todavía escribe el resto de la respuesta.',
          '**Esto no es GPT-4o.** Los modelos separados producen "costuras" — la descripción del modelo de visión se pasa como texto al LLM, perdiendo algo de razonamiento cross-modal. La calidad en tareas multimodales complejas está por debajo de los modelos cerrados de frontera, pero es adecuada para documentos estructurados y tareas con fotos claras.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**VRAM total para el stack completo:** ~15 GB (Whisper 3 GB + LLaVA 7B 6 GB + Llama 3.1 8B 6 GB). Piper corre en CPU.',
          '**Stack simplificado (Llama 3.2 Vision 11B):** ~8 GB VRAM — maneja visión y razonamiento textual en un solo modelo.',
          '**Latencia de voz (Whisper small, RTX 4070):** STT ~200–500 ms. Primer token LLM 500–1500 ms. Piper TTS 100 ms.',
          '**Latencia de procesamiento de imagen (LLaVA 7B, RTX 4070):** ~2–5 segundos por imagen dependiendo de la resolución y el prompt.',
          '**Sin video en tiempo real:** Los VLM procesan frames individuales, no flujos de video continuos. Para video, extrae frames a 1 FPS y procesa cada uno.',
          '**Misma instancia de Ollama para VLM + LLM:** Ollama puede servir Llama 3.2 Vision como modelo de visión y modelo de texto a la vez, ahorrando VRAM.',
          '**Todos los componentes con licencia MIT o Apache 2.0** (whisper.cpp MIT, LLaVA MIT, Llama 3.1 8B Llama 3 Community License, Piper MIT).',
        ],
      },
      whatIsMultimodal: {
        id: 'what-is-multimodal',
        title: '¿Qué es un pipeline multimodal de IA?',
        content:
          'Un sistema de IA multimodal acepta múltiples tipos de entrada (voz, imágenes, texto) y produce múltiples tipos de salida (texto, voz). El equivalente en la nube es GPT-4o — un único modelo que acepta audio, imágenes y texto en cualquier combinación.',
        items: [
          '**Enfoque en la nube (GPT-4o):** Un modelo gigante entrenado en todas las modalidades simultáneamente. El razonamiento cross-modal se aprende durante el entrenamiento — el modelo puede razonar nativamente sobre la relación entre el contenido de la imagen y las consultas de voz.',
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
            text: 'Un pipeline multimodal local cuesta $0/mes en tarifas de API tras la inversión única en hardware ($600–3.500), con punto de equilibrio frente a los costos de la API de GPT-4o ($135–225/mes) en 3–18 meses según el volumen de consultas.',
          },
        ],
        columns: ['Uso', 'GPT-4o API', 'Google Cloud', 'Local'],
        rows: [
          { 'Uso': '100 consultas de voz/día', 'GPT-4o API': '$90–150/mes', 'Google Cloud': '$60–120/mes', 'Local': '$0' },
          { 'Uso': '50 análisis de imagen/día', 'GPT-4o API': '$45–75/mes', 'Google Cloud': '$30–60/mes', 'Local': '$0' },
          { 'Uso': 'Combinado (típico)', 'GPT-4o API': '$135–225/mes', 'Google Cloud': '$90–180/mes', 'Local': '$0' },
          { 'Uso': 'Hardware (una sola vez)', 'GPT-4o API': '$0', 'Google Cloud': '$0', 'Local': '$600–3.500' },
          { 'Uso': 'Punto de equilibrio', 'GPT-4o API': '—', 'Google Cloud': '—', 'Local': '3–18 meses' },
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
            text: 'El stack multimodal local completo usa ~15 GB de VRAM: Whisper large-v3 (3 GB) + LLaVA 1.6 7B (6 GB) + Llama 3.1 8B (6 GB); Piper TTS corre en CPU sin costo de VRAM.',
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
            'Modelo': 'Llama 3.1 8B Q4',
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
            text: 'Usa Llama 3.2 Vision 11B en lugar de LLaVA + Llama 3.1 8B separados para reducir la VRAM a ~8 GB. Llama 3.2 Vision maneja tanto la descripción de imágenes como el razonamiento textual en un solo modelo, eliminando la necesidad de un VLM separado.',
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
            'Puede ejecutar': 'Stack completo con modelos 7B (LLaVA 7B + Llama 3.1 8B, ajuste justo)',
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
            'Puede ejecutar': 'Stack completo con modelos 8B vía Metal (recomendado). Qwen2-VL 7B + Llama 3.1 8B caben cómodamente en 36 GB con espacio para Whisper large-v3.',
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
            text: 'El M5 Max con 128 GB de memoria unificada es la plataforma multimodal local definitiva. Puede ejecutar Whisper large-v3 (3 GB) + Llama 3.2 Vision 90B (~64 GB) + Piper TTS simultáneamente — el modelo VLM local de mayor calidad disponible, aproximándose a GPT-4o en tareas de documentos y fotos. Ninguna configuración de GPU discreta puede igualar esto sin configuraciones multi-GPU que cuestan 2–3 veces más.',
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
          '**Combinación:** Al final de la reunión (o bajo demanda), pasa transcripción + descripciones de diapositivas a Llama 3.1 8B: "Resume esta reunión y lista los puntos de acción. Aquí está la transcripción: [...]. Aquí están los contenidos de las diapositivas: [...]."',
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
          '**Usa Llama 3.2 Vision como VLM + LLM combinado:** Elimina por completo el overhead del cambio de modelo — un modelo maneja tanto la descripción visual como el razonamiento textual. Contrapartida: razonamiento de texto puro ligeramente más débil en comparación con Llama 3.1 8B dedicado.',
          '**Objetivo de primer audio TTS:** Piper genera el primer audio en 50–100 ms tras recibir texto. Transmite una oración a la vez para una latencia TTS percibida de menos de un segundo.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Limitaciones y evaluación honesta',
        content:
          '**Un pipeline multimodal local no es GPT-4o.** Ser claros sobre las brechas previene la frustración y ayuda a diseñar en torno a las limitaciones.',
        items: [
          '**Costuras de modalidad:** La salida de visión se serializa a texto antes de pasarse al LLM de texto. El LLM no puede razonar directamente sobre las características de la imagen — razona sobre una descripción textual de la imagen. Esto pierde información en tareas que requieren razonamiento visual sutil.',
          '**Sin video en tiempo real:** Los VLM locales procesan frames individuales, no video continuo. Para video, extrae frames a 0,5–2 FPS y procésalos secuencialmente. Esto significa que no puedes preguntar "qué acaba de pasar en los últimos 5 segundos de este video".',
          '**Brecha de calidad del VLM:** Los modelos de visión locales (LLaVA 7B, Llama 3.2 Vision 11B) están por detrás de GPT-4o Vision en infografías complejas, texto manuscrito, escenas ambiguas y tareas que requieren amplio conocimiento del mundo junto a la comprensión visual.',
          '**Presión de VRAM:** Ejecutar tres modelos simultáneamente en una única GPU requiere una gestión cuidadosa de la VRAM. En GPUs de 12 GB estás en el límite — los tamaños de los modelos deben elegirse cuidadosamente para evitar errores OOM (sin memoria).',
          '**Latencia vs. nube:** Una llamada multimodal en la nube (GPT-4o) tarda 1–3 segundos para audio + imagen + texto. Un pipeline local tarda 3–8 segundos en hardware comparable — más lento, pero con total privacidad y costo cero por consulta.',
          '**Consistencia:** Los modelos locales producen calidad de salida más variable que los modelos en la nube con extenso RLHF. Espera alucinaciones ocasionales tanto en descripciones de visión como en respuestas del LLM.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar un único modelo tanto para visión como para razonamiento textual?',
            a: 'Sí. Llama 3.2 Vision 11B maneja tanto la comprensión de imágenes como el razonamiento textual en un solo modelo — puedes omitir la configuración separada de LLaVA + Llama 3.1 8B. Esto reduce la VRAM de ~15 GB a ~8 GB y elimina una llamada a la API de Ollama. La contrapartida es un rendimiento ligeramente peor en tareas de razonamiento de texto puro en comparación con Llama 3.1 8B dedicado.',
          },
          {
            q: '¿Cómo manejo la entrada de video en un pipeline multimodal local?',
            a: 'Extrae frames del video usando OpenCV (`cv2.VideoCapture`) y procesa cada frame individualmente a través del VLM. Para un video de 1 minuto a 1 FPS, obtienes 60 frames — cada uno tardando 2–5 segundos en procesarse, por lo que el video completo tardaría 2–5 minutos en analizarse. Para monitoreo de video en tiempo real, procesa solo 1 frame cada 2–3 segundos y usa detección de movimiento para omitir frames estáticos. La comprensión completa de video (seguimiento de objetos entre frames, comprensión de secuencias temporales) está más allá de las capacidades actuales de los VLM locales.',
          },
          {
            q: '¿Cuál es la VRAM mínima en GPU para el stack multimodal completo?',
            a: 'En una configuración de VRAM compartida (todos los modelos en VRAM simultáneamente), se requieren 15 GB para Whisper large-v3 + LLaVA 7B + Llama 3.1 8B. Con Llama 3.2 Vision 11B reemplazando tanto VLM como LLM de texto, son suficientes 8 GB de VRAM. En una GPU de 12 GB (RTX 4070), puedes ejecutar el stack completo de modelos separados con VRAM muy ajustada con cuantización pequeña, o usar Llama 3.2 Vision 11B para el enfoque combinado. En 8 GB de VRAM (RTX 4060), usa Llama 3.2 Vision 11B con cuantización agresiva (Q3_K) o intercambia modelos entre consultas de visión y texto.',
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
            a: 'Reposo con modelos calientes en VRAM: ~50–80 W (GPU de escritorio), ~15–25 W (Mac Mini M5 Pro). Procesamiento activo: ~150–300 W (GPU de escritorio), ~30–60 W (Mac Mini M5 Pro). Costo mensual a $0,15/kWh: aproximadamente $5–15 (Mac Mini) o $15–35 (escritorio). Esto es menos que ejecutar una API en la nube con volúmenes de consultas comparables — un Mac Mini ejecutando el stack completo 24/7 cuesta menos en electricidad por mes que dos días de uso de la API de GPT-4o a 100 consultas/día.',
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
       url: 'https://www.promptquorum.com/es/power-local-llm/local-multimodal-pipeline-voice-vision-text?lang=es',
       inLanguage: 'es',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
},
}
