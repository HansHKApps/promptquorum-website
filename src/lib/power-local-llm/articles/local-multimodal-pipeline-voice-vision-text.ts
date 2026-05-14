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
    seoTitle: 'Local Multimodal AI Pipeline 2026: Voice + Vision + Text Models Offline',
    intro:
      'A local multimodal AI pipeline combines separate specialized models for each modality — whisper.cpp for voice input, LLaVA or Llama 3.2 Vision for image understanding, an Ollama LLM for text reasoning, and Piper TTS for voice output — orchestrated into a single coherent system that runs 100% offline. This is the local equivalent of GPT-4o\'s multimodal capabilities: no single model understands everything, but the orchestrator routes each input type to the right model and combines the outputs. This guide covers the architecture, component stack, hardware tiers, four practical use cases, and a Python async orchestrator that processes voice and vision inputs in parallel.',
    metaDescription:
      'Build a local multimodal AI pipeline in 2026: whisper.cpp for voice input, LLaVA 1.6 for vision, Ollama for text reasoning, Piper TTS for voice output. Architecture, hardware tiers, use cases, and Python orchestrator code. All offline.',
    twitterDescription:
      'Local multimodal AI in 2026: combine Whisper STT + LLaVA vision + Ollama LLM + Piper TTS into one offline pipeline. Architecture guide, hardware tiers, and Python code.',
    audience:
      'Developers building full multimodal local AI systems — combining voice, vision, and text processing into a single offline pipeline for document analysis, accessibility tools, meeting assistants, or visual Q&A.',
    readTime: '13 min read',
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
      'Llama 3.2 Vision 11B',
      'Llama 3.1 8B',
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
      { label: 'Architecture Overview', anchor: '#architecture' },
      { label: 'The Component Stack', anchor: '#component-stack' },
      { label: 'Hardware Tiers', anchor: '#hardware-tiers' },
      { label: 'Use Case 1: Voice-Controlled Document Analyzer', anchor: '#use-case-1' },
      { label: 'Use Case 2: Visual Q&A Assistant', anchor: '#use-case-2' },
      { label: 'Use Case 3: Meeting Transcription + Slide Analysis', anchor: '#use-case-3' },
      { label: 'Use Case 4: Local Accessibility Tool', anchor: '#use-case-4' },
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
          '**Four practical use cases justify the complexity:** voice-controlled document analysis, visual Q&A with voice interaction, meeting transcription combined with slide analysis, and local screen-reader accessibility tools.',
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
            'Can Run': 'Full stack with 8B models via Metal (recommended)',
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
    seoTitle: 'Lokale multimodale KI-Pipeline 2026: Sprache + Vision + Text offline',
    intro:
      'Eine lokale multimodale KI-Pipeline kombiniert separate spezialisierte Modelle für jede Modalität — whisper.cpp für Spracheingabe, LLaVA oder Llama 3.2 Vision für Bildverständnis, ein Ollama LLM für Textreasoning und Piper TTS für Sprachausgabe — orchestriert zu einem kohärenten System, das 100 % offline arbeitet. Dies ist das lokale Äquivalent zu GPT-4os multimodalen Fähigkeiten: kein einzelnes Modell versteht alles, aber der Orchestrator leitet jeden Eingabetyp an das richtige Modell weiter und kombiniert die Ausgaben.',
    metaDescription:
      'Lokale multimodale KI-Pipeline 2026 aufbauen: whisper.cpp für Spracheingabe, LLaVA 1.6 für Vision, Ollama für Textreasoning, Piper TTS für Sprachausgabe. Architektur, Hardware-Tiers, Use Cases und Python-Orchestrator-Code. Vollständig offline.',
    twitterDescription:
      'Lokale multimodale KI 2026: Whisper STT + LLaVA Vision + Ollama LLM + Piper TTS in einer Offline-Pipeline kombinieren. Architektur-Leitfaden, Hardware-Tiers und Python-Code.',
    sections: {},
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Pipeline IA multimodale locale 2026 : combiner voix, vision et texte hors ligne',
    seoTitle: 'Pipeline IA multimodale locale 2026 : voix + vision + texte hors ligne',
    intro:
      'Un pipeline IA multimodal local combine des modèles spécialisés pour chaque modalité — whisper.cpp pour la saisie vocale, LLaVA ou Llama 3.2 Vision pour la compréhension d\'images, un LLM Ollama pour le raisonnement textuel et Piper TTS pour la sortie vocale — orchestrés en un système cohérent fonctionnant 100 % hors ligne. C\'est l\'équivalent local des capacités multimodales de GPT-4o : aucun modèle unique ne comprend tout, mais l\'orchestrateur route chaque type d\'entrée vers le bon modèle et combine les sorties.',
    metaDescription:
      'Construire un pipeline IA multimodal local en 2026 : whisper.cpp pour la saisie vocale, LLaVA 1.6 pour la vision, Ollama pour le raisonnement textuel, Piper TTS pour la sortie vocale. Architecture, niveaux matériels, cas d\'usage et code Python de l\'orchestrateur. Entièrement hors ligne.',
    twitterDescription:
      'IA multimodale locale 2026 : combiner Whisper STT + vision LLaVA + LLM Ollama + Piper TTS dans un pipeline hors ligne. Guide d\'architecture, niveaux matériels et code Python.',
    sections: {},
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
    sections: {},
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
    sections: {},
  },
}
