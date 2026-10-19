import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Local LLM for 6 GB VRAM?',
    dateModified: '2026-10-19',
    seoTitle: 'Best LLM for 6 GB VRAM 2026: Qwen3.5 4B | PromptQuorum',
    metaDescription: 'Qwen3.5 4B Q4_K_M (3.3 GB) is the best fit for 6 GB VRAM; Qwen3 8B (5.2 GB) is stronger but tight. Coding model picks, 6 GB GPUs and Ollama tags.',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-en.webp',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: ['Qwen3.5 4B', 'Qwen3 8B', 'Phi-4-mini', 'Qwen2.5-Coder 7B'],
    current_hardware_mentioned: ['GTX 1060 6GB', 'RTX 2060', 'RTX 3050 6GB', 'RTX 3060 Laptop', 'RTX 4050 Laptop'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 6 GB VRAM GPUs',
    parentArticle: '/local-llms/how-much-vram-local-llm',
    siblingBites: ['best-ollama-models-4gb-vram', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM for 6 GB VRAM?',
        answer: 'For 6 GB VRAM, Qwen3.5 4B Q4_K_M is the best fit: a 3.3 GB download that leaves about 2.7 GB for context. Qwen3 8B Q4_K_M (5.2 GB) is more capable but tight, and Phi-4-mini (2.5 GB) is the lightest option.',
        bullets: [
          'Qwen3.5 4B Q4_K_M: best fit for 6 GB (3.3 GB, text and image input)',
          'Qwen3 8B Q4_K_M: more capable but tight (5.2 GB, short context only)',
          'Phi-4-mini Q4_K_M: lightest option (2.5 GB, most context headroom)',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Bestes lokales LLM für 6 GB VRAM?',
        answer: 'Für 6 GB VRAM passt Qwen3.5 4B Q4_K_M am besten: ein 3,3-GB-Download, der rund 2,7 GB für den Kontext übrig lässt. Qwen3 8B Q4_K_M (5,2 GB) ist leistungsfähiger, aber knapp, und Phi-4-mini (2,5 GB) ist die leichteste Option.',
        bullets: [
          'Qwen3.5 4B Q4_K_M: beste Passform für 6 GB (3,3 GB, Text- und Bildeingabe)',
          'Qwen3 8B Q4_K_M: leistungsfähiger, aber knapp (5,2 GB, nur kurzer Kontext)',
          'Phi-4-mini Q4_K_M: leichteste Option (2,5 GB, meiste Kontext-Reserve)',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Quel est le meilleur LLM local pour 6 Go de VRAM ?',
        answer: 'Pour 6 Go de VRAM, Qwen3.5 4B Q4_K_M convient le mieux : un téléchargement de 3,3 Go qui laisse environ 2,7 Go pour le contexte. Qwen3 8B Q4_K_M (5,2 Go) est plus capable mais juste, et Phi-4-mini (2,5 Go) est l\'option la plus légère.',
        bullets: [
          'Qwen3.5 4B Q4_K_M : le plus adapté à 6 Go (3,3 Go, texte et image en entrée)',
          'Qwen3 8B Q4_K_M : plus capable mais juste (5,2 Go, contexte court uniquement)',
          'Phi-4-mini Q4_K_M : option la plus légère (2,5 Go, le plus de marge pour le contexte)',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: '6 GB VRAMに最適なローカルLLMは？',
        answer: '6 GB VRAMにはQwen3.5 4B Q4_K_Mが最適です。ダウンロードは3.3 GBで、コンテキスト用に約2.7 GBが残ります。Qwen3 8B Q4_K_M（5.2 GB）は高性能ですが余裕が少なく、Phi-4-mini（2.5 GB）は最も軽量な選択肢です。',
        bullets: [
          'Qwen3.5 4B Q4_K_M：6 GBに最適（3.3 GB、テキストと画像入力）',
          'Qwen3 8B Q4_K_M：高性能だが余裕が少ない（5.2 GB、短いコンテキストのみ）',
          'Phi-4-mini Q4_K_M：最軽量（2.5 GB、コンテキストの余裕が最大）',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: '6 GB显存最佳本地LLM是什么？',
        answer: '6 GB显存最适合Qwen3.5 4B Q4_K_M：下载3.3 GB，可为上下文留出约2.7 GB。Qwen3 8B Q4_K_M（5.2 GB）能力更强但余量紧张，Phi-4-mini（2.5 GB）是最轻量的选择。',
        bullets: [
          'Qwen3.5 4B Q4_K_M：最适合6 GB（3.3 GB，支持文本和图像输入）',
          'Qwen3 8B Q4_K_M：能力更强但余量紧张（5.2 GB，仅适合短上下文）',
          'Phi-4-mini Q4_K_M：最轻量（2.5 GB，上下文余量最大）',
        ],
        updatedDate: '2026-10',
      },
      es: {
        question: '¿Mejor LLM local para 6 GB de VRAM?',
        answer: 'Para 6 GB de VRAM, Qwen3.5 4B Q4_K_M es la mejor opción: una descarga de 3,3 GB que deja unos 2,7 GB para el contexto. Qwen3 8B Q4_K_M (5,2 GB) es más capaz pero va justo, y Phi-4-mini (2,5 GB) es la opción más ligera.',
        bullets: [
          'Qwen3.5 4B Q4_K_M: la mejor opción para 6 GB (3,3 GB, entrada de texto e imagen)',
          'Qwen3 8B Q4_K_M: más capaz pero justo (5,2 GB, solo contexto corto)',
          'Phi-4-mini Q4_K_M: la opción más ligera (2,5 GB, más margen de contexto)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3.5 4B Q4_K_M (3.3 GB) is the best fit for 6 GB VRAM: it loads fully on the GPU and leaves room for context',
          'Qwen3 8B Q4_K_M (5.2 GB) is more capable but leaves under 1 GB for context, so keep prompts short',
          'Not in 6 GB: Qwen3.5 9B (6.6 GB), Ministral 3 8B (6.0 GB) and Gemma 4 E4B (6.1 GB and up) exceed it before any context',
        ],
      },
      body1: {
        title: 'Top 3 Models for 6 GB VRAM',
        content: [
          '<strong>On 6 GB VRAM, choose a model whose file is about 4 GB or smaller, so the context cache and your desktop still fit on the card.</strong> Sizes below are download sizes from the <a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama library</a>; the context window needs extra memory on top, and Windows reserves some VRAM for the display.',
          'Qwen3.5 4B is a 2026 release with text and image input, tool calling and a thinking mode that is on by default (it adds tokens before the answer). PromptQuorum has not benchmarked these models on 6 GB cards, so generation speed depends on your GPU — smaller files generally generate faster.',
        ],
        columns: ['Model', 'Size', 'Ollama tag', 'Best For'],
        rows: [
          { 'Model': 'Qwen3.5 4B Q4_K_M', 'Size': '3.3 GB', 'Ollama tag': 'qwen3.5:4b', 'Best For': 'Chat, coding, images' },
          { 'Model': 'Qwen3 8B Q4_K_M', 'Size': '5.2 GB', 'Ollama tag': 'qwen3:8b', 'Best For': 'Max quality, short context' },
          { 'Model': 'Phi-4-mini Q4_K_M', 'Size': '2.5 GB', 'Ollama tag': 'phi4-mini', 'Best For': 'Lightweight, long context' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-en.webp',
        imageCaption: 'Best Local LLMs for 6 GB VRAM -- Model size vs use case',
      },
      body2: {
        title: 'Which GPUs Have 6 GB and What Fits',
        content: [
          '<strong>Common 6 GB cards are the GTX 1060 6 GB, GTX 1660 Super, RTX 2060 (6 GB version), RTX 3050 6 GB, RTX 3060 Laptop and RTX 4050 Laptop.</strong> Ollama runs on all of them through CUDA; older cards such as the GTX 1060 work but generate more slowly because they lack tensor cores.',
          'If a model does not fit, Ollama moves some layers to system RAM and the CPU. The model still runs, but generation slows sharply, so Qwen3 8B on a 6 GB card is a trade-off, not a free upgrade. Run <code>ollama ps</code> to see the GPU/CPU split.',
          'Apple Silicon is a different case: a Mac shares unified memory between CPU and GPU, and by default macOS lets the GPU use roughly two-thirds of it on a 16 GB machine, so a 16 GB MacBook can run models this page lists as too large. See <a href="/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">best local LLM for a 16 GB RAM laptop</a>.',
          'Moving from 6 GB to 8 GB lets Qwen3 8B Q4_K_M run with room for context. For 12 GB options and 14B models, see <a href="/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">best Ollama models for RTX 3060 12 GB</a>. For the full VRAM reference, see <a href="/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">how much VRAM a local LLM needs</a>.',
        ],
      },
      body3: {
        title: 'Best Coding Model for 6 GB VRAM',
        content: [
          '<strong>Qwen3.5 4B Q4_K_M is the starting point for coding on 6 GB VRAM; Qwen2.5-Coder 7B Q4_K_M (4.7 GB) is the code-specialist option for completion.</strong> The <a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Qwen3.5 4B model card</a> reports 55.8 on LiveCodeBench v6 (vendor-reported, thinking mode). Qwen2.5-Coder is a 2024 family with a 32K context window, so the 7B file leaves little room for long prompts.',
          'LM Studio loads the same GGUF files, and Aider or an editor plugin can use an Ollama model through its local API. Raise the context window above the default — for example <code>/set parameter num_ctx 8192</code> in the Ollama prompt — because code prompts are long and truncated context gives wrong answers.',
        ],
        columns: ['Model', 'Size', 'Use'],
        rows: [
          { 'Model': 'Qwen3.5 4B Q4_K_M', 'Size': '3.3 GB', 'Use': 'Coding + chat, tool calling' },
          { 'Model': 'Qwen2.5-Coder 7B Q4_K_M', 'Size': '4.7 GB', 'Use': 'Completion, short context' },
          { 'Model': 'Qwen2.5-Coder 3B Q4_K_M', 'Size': '1.9 GB', 'Use': 'Fast autocomplete' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 6 GB VRAM Models',
        faqs: [
          {
            q: 'Is 6 GB VRAM enough for local LLMs?',
            a: 'Yes, for 3–4B models and for quantized 7–8B models with a short context. Qwen3.5 4B Q4_K_M handles chat, summarization and coding help fully on the GPU. Expect weaker results than cloud models on long or hard tasks.',
          },
          {
            q: 'Does Qwen3 8B fit in 6 GB VRAM?',
            a: 'Only just. The Ollama download is 5.2 GB, and the context cache plus the display\'s VRAM use come on top, so a longer context pushes layers onto the CPU. Cap it with <code>/set parameter num_ctx 2048</code> or use Qwen3.5 4B (3.3 GB). Run <code>ollama ps</code> to confirm the model is on 100% GPU.',
          },
          {
            q: 'Do Ministral 8B, Gemma 4 or Qwen3.5 9B fit in 6 GB?',
            a: 'Not at their default quantization. In Ollama, Ministral 3 8B is 6.0 GB, Qwen3.5 9B Q4_K_M is 6.6 GB and Gemma 4 E4B is 6.1–6.6 GB, so all exceed 6 GB before any context. The smaller Gemma 4 E2B QAT (<code>gemma4:e2b-it-qat</code>, 4.3 GB) does fit.',
          },
          {
            q: 'What is the best coding model for 6 GB VRAM?',
            a: 'Start with Qwen3.5 4B Q4_K_M. For editor code completion, Qwen2.5-Coder 7B Q4_K_M (4.7 GB) or Qwen2.5-Coder 3B (1.9 GB) are the code-specialist options. LM Studio loads the same GGUF files, and Aider can use an Ollama model with the <code>ollama_chat/</code> prefix.',
          },
          {
            q: 'Which GPUs have 6 GB of VRAM?',
            a: 'The GTX 1060 6 GB, GTX 1660 Super, RTX 2060 (6 GB version), RTX 3050 6 GB, RTX 3060 Laptop and RTX 4050 Laptop. The RTX 4050 exists only as a laptop GPU.',
          },
          {
            q: 'What if I have 6 GB of system RAM, not VRAM?',
            a: 'System RAM runs models on the CPU, which is slower, and the operating system already uses part of it. Use a 1–2B model such as Qwen3.5 2B Q4_K_M (<code>qwen3.5:2b</code>, 1.9 GB) and keep the context short.',
          },
          {
            q: 'Can I run 13B or 14B models on 6 GB VRAM?',
            a: 'No. Phi-4 (14B) at Q4_K_M needs about 9 GB, so 12 GB is the practical minimum for 14B models. See <a href="/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">best Ollama models for RTX 3060 12 GB</a>.',
          },
          {
            q: 'Can I use 6 GB VRAM for image generation too?',
            a: 'Stable Diffusion 1.5 runs on 6 GB. SDXL needs memory-saving modes on 6 GB and runs slowly; 8 GB is more comfortable. Do not keep an LLM and an image model loaded at the same time — unload one first.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Can You Run RAG on 2 GB RAM?](/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[Best Quantization for 6 GB VRAM](/prompt-bites/best-quantization-6gb-vram) -- Q4_K_M vs Q5_K_M',
          '[Best Local LLM for a 16 GB RAM Laptop](/prompt-bites/best-local-llm-16gb-ram-laptop) -- laptop tier',
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Bestes lokales LLM für 6 GB VRAM?',
    seoTitle: 'Bestes LLM für 6 GB VRAM 2026: Qwen3.5 4B | PromptQuorum',
    metaDescription: 'Qwen3.5 4B Q4_K_M (3,3 GB) passt am besten zu 6 GB VRAM; Qwen3 8B (5,2 GB) ist stärker, aber knapp. Coding-Tipps, GPUs und Ollama-Tags im Überblick.',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-de.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    quickAnswerTop: {
      de: {
        question: 'Bestes lokales LLM für 6 GB VRAM?',
        answer: 'Für 6 GB VRAM passt Qwen3.5 4B Q4_K_M am besten: ein 3,3-GB-Download, der rund 2,7 GB für den Kontext übrig lässt. Qwen3 8B Q4_K_M (5,2 GB) ist leistungsfähiger, aber knapp, und Phi-4-mini (2,5 GB) ist die leichteste Option.',
        bullets: [
          'Qwen3.5 4B Q4_K_M: beste Passform für 6 GB (3,3 GB, Text- und Bildeingabe)',
          'Qwen3 8B Q4_K_M: leistungsfähiger, aber knapp (5,2 GB, nur kurzer Kontext)',
          'Phi-4-mini Q4_K_M: leichteste Option (2,5 GB, meiste Kontext-Reserve)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3.5 4B Q4_K_M (3,3 GB) passt am besten zu 6 GB VRAM: Es läuft komplett auf der GPU und lässt Platz für Kontext',
          'Qwen3 8B Q4_K_M (5,2 GB) ist leistungsfähiger, lässt aber unter 1 GB für Kontext — halten Sie Prompts kurz',
          'Nicht in 6 GB: Qwen3.5 9B (6,6 GB), Ministral 3 8B (6,0 GB) und Gemma 4 E4B (ab 6,1 GB) überschreiten die Grenze schon vor dem Kontext',
        ],
      },
      body1: {
        title: 'Top 3 Modelle für 6 GB VRAM',
        content: [
          '<strong>Wählen Sie bei 6 GB VRAM ein Modell mit etwa 4 GB Dateigröße oder weniger, damit Kontext-Cache und Desktop noch auf die Karte passen.</strong> Die Größen unten sind Download-Größen aus der <a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama-Bibliothek</a>; das Kontextfenster braucht zusätzlichen Speicher, und Windows reserviert VRAM für die Anzeige.',
          'Qwen3.5 4B ist ein Release von 2026 mit Text- und Bildeingabe, Tool-Aufrufen und einem Denkmodus, der standardmäßig aktiv ist (er erzeugt vor der Antwort zusätzliche Tokens). PromptQuorum hat diese Modelle nicht auf 6-GB-Karten gemessen; die Geschwindigkeit hängt von Ihrer GPU ab — kleinere Dateien erzeugen in der Regel schneller.',
        ],
        columns: ['Modell', 'Größe', 'Ollama-Tag', 'Anwendungsbereich'],
        rows: [
          { 'Modell': 'Qwen3.5 4B Q4_K_M', 'Größe': '3,3 GB', 'Ollama-Tag': 'qwen3.5:4b', 'Anwendungsbereich': 'Chat, Coding, Bilder' },
          { 'Modell': 'Qwen3 8B Q4_K_M', 'Größe': '5,2 GB', 'Ollama-Tag': 'qwen3:8b', 'Anwendungsbereich': 'Max. Qualität, kurzer Kontext' },
          { 'Modell': 'Phi-4-mini Q4_K_M', 'Größe': '2,5 GB', 'Ollama-Tag': 'phi4-mini', 'Anwendungsbereich': 'Leichtgewicht, langer Kontext' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-de.webp',
        imageCaption: 'Beste lokale LLMs für 6 GB VRAM -- Modellgröße vs. Anwendungsfall',
      },
      body2: {
        title: 'Welche GPUs 6 GB haben und was passt',
        content: [
          '<strong>Gängige 6-GB-Karten sind GTX 1060 6 GB, GTX 1660 Super, RTX 2060 (6-GB-Version), RTX 3050 6 GB, RTX 3060 Laptop und RTX 4050 Laptop.</strong> Ollama läuft auf allen über CUDA; ältere Karten wie die GTX 1060 funktionieren, erzeugen aber langsamer, weil ihnen Tensor-Kerne fehlen.',
          'Passt ein Modell nicht, verlagert Ollama einzelne Schichten in den Arbeitsspeicher und auf die CPU. Das Modell läuft weiter, aber die Erzeugung wird deutlich langsamer — Qwen3 8B auf einer 6-GB-Karte ist also ein Kompromiss, kein kostenloses Upgrade. Mit <code>ollama ps</code> sehen Sie die GPU/CPU-Aufteilung.',
          'Apple Silicon ist ein anderer Fall: Ein Mac teilt Unified Memory zwischen CPU und GPU, und macOS lässt die GPU bei 16 GB standardmäßig etwa zwei Drittel davon nutzen — ein MacBook mit 16 GB kann also Modelle ausführen, die diese Seite als zu groß einstuft. Siehe <a href="/de/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">bestes lokales LLM für einen Laptop mit 16 GB RAM</a>.',
          'Der Wechsel von 6 GB auf 8 GB lässt Qwen3 8B Q4_K_M mit Platz für Kontext laufen. Für 12-GB-Optionen und 14B-Modelle siehe <a href="/de/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">beste Ollama-Modelle für RTX 3060 12 GB</a>. Die vollständige VRAM-Referenz finden Sie unter <a href="/de/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">wie viel VRAM ein lokales LLM benötigt</a>.',
        ],
      },
      body3: {
        title: 'Bestes Coding-Modell für 6 GB VRAM',
        content: [
          '<strong>Qwen3.5 4B Q4_K_M ist der Ausgangspunkt für Coding mit 6 GB VRAM; Qwen2.5-Coder 7B Q4_K_M (4,7 GB) ist die Spezialistenoption für Code-Vervollständigung.</strong> Die <a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Modellkarte von Qwen3.5 4B</a> nennt 55,8 bei LiveCodeBench v6 (Herstellerangabe, Denkmodus). Qwen2.5-Coder ist eine Familie von 2024 mit 32K-Kontextfenster, daher lässt die 7B-Datei wenig Platz für lange Prompts.',
          'LM Studio lädt dieselben GGUF-Dateien, und Aider oder ein Editor-Plugin kann ein Ollama-Modell über die lokale API nutzen. Erhöhen Sie das Kontextfenster über den Standard — etwa mit <code>/set parameter num_ctx 8192</code> im Ollama-Prompt —, denn Code-Prompts sind lang und abgeschnittener Kontext führt zu falschen Antworten.',
        ],
        columns: ['Modell', 'Größe', 'Einsatz'],
        rows: [
          { 'Modell': 'Qwen3.5 4B Q4_K_M', 'Größe': '3,3 GB', 'Einsatz': 'Coding + Chat, Tool-Aufrufe' },
          { 'Modell': 'Qwen2.5-Coder 7B Q4_K_M', 'Größe': '4,7 GB', 'Einsatz': 'Vervollständigung, kurzer Kontext' },
          { 'Modell': 'Qwen2.5-Coder 3B Q4_K_M', 'Größe': '1,9 GB', 'Einsatz': 'Schnelle Autovervollständigung' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen zu 6-GB-VRAM-Modellen',
        faqs: [
          {
            q: 'Reichen 6 GB VRAM für lokale LLMs?',
            a: 'Ja, für 3–4B-Modelle und quantisierte 7–8B-Modelle mit kurzem Kontext. Qwen3.5 4B Q4_K_M bewältigt Chat, Zusammenfassungen und Coding-Hilfe komplett auf der GPU. Bei langen oder schwierigen Aufgaben sind die Ergebnisse schwächer als bei Cloud-Modellen.',
          },
          {
            q: 'Passt Qwen3 8B in 6 GB VRAM?',
            a: 'Nur knapp. Der Ollama-Download ist 5,2 GB groß, dazu kommen Kontext-Cache und der VRAM-Bedarf der Anzeige — ein längerer Kontext schiebt Schichten auf die CPU. Begrenzen Sie ihn mit <code>/set parameter num_ctx 2048</code> oder nutzen Sie Qwen3.5 4B (3,3 GB). Mit <code>ollama ps</code> prüfen Sie, ob das Modell zu 100 % auf der GPU liegt.',
          },
          {
            q: 'Passen Ministral 8B, Gemma 4 oder Qwen3.5 9B in 6 GB?',
            a: 'Nicht in der Standard-Quantisierung. In Ollama ist Ministral 3 8B 6,0 GB groß, Qwen3.5 9B Q4_K_M 6,6 GB und Gemma 4 E4B 6,1–6,6 GB — alle überschreiten 6 GB schon vor dem Kontext. Das kleinere Gemma 4 E2B QAT (<code>gemma4:e2b-it-qat</code>, 4,3 GB) passt.',
          },
          {
            q: 'Was ist das beste Coding-Modell für 6 GB VRAM?',
            a: 'Beginnen Sie mit Qwen3.5 4B Q4_K_M. Für Code-Vervollständigung im Editor sind Qwen2.5-Coder 7B Q4_K_M (4,7 GB) oder Qwen2.5-Coder 3B (1,9 GB) die Spezialistenoptionen. LM Studio lädt dieselben GGUF-Dateien, und Aider kann ein Ollama-Modell mit dem Präfix <code>ollama_chat/</code> nutzen.',
          },
          {
            q: 'Welche GPUs haben 6 GB VRAM?',
            a: 'GTX 1060 6 GB, GTX 1660 Super, RTX 2060 (6-GB-Version), RTX 3050 6 GB, RTX 3060 Laptop und RTX 4050 Laptop. Die RTX 4050 gibt es nur als Laptop-GPU.',
          },
          {
            q: 'Was, wenn ich 6 GB Arbeitsspeicher habe, nicht VRAM?',
            a: 'Arbeitsspeicher führt Modelle auf der CPU aus, was langsamer ist, und das Betriebssystem belegt davon bereits einen Teil. Nutzen Sie ein 1–2B-Modell wie Qwen3.5 2B Q4_K_M (<code>qwen3.5:2b</code>, 1,9 GB) und halten Sie den Kontext kurz.',
          },
          {
            q: 'Kann ich 13B- oder 14B-Modelle mit 6 GB VRAM betreiben?',
            a: 'Nein. Phi-4 (14B) bei Q4_K_M braucht etwa 9 GB, daher sind 12 GB das praktische Minimum für 14B-Modelle. Siehe <a href="/de/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">beste Ollama-Modelle für RTX 3060 12 GB</a>.',
          },
          {
            q: 'Kann ich 6 GB VRAM auch für Bildgenerierung nutzen?',
            a: 'Stable Diffusion 1.5 läuft mit 6 GB. SDXL braucht dort Speicher-Sparmodi und läuft langsam; 8 GB sind komfortabler. Halten Sie nicht gleichzeitig ein LLM und ein Bildmodell geladen — entladen Sie zuerst eines.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Kann man RAG mit 2 GB RAM ausführen?](/de/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[Beste Quantisierung für 6 GB VRAM](/de/prompt-bites/best-quantization-6gb-vram) -- Q4_K_M vs. Q5_K_M',
          '[Bestes lokales LLM für einen Laptop mit 16 GB RAM](/de/prompt-bites/best-local-llm-16gb-ram-laptop) -- Laptop-Klasse',
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Meilleur LLM local pour 6 Go de VRAM ?',
    seoTitle: 'Meilleur LLM 6 Go de VRAM 2026 : Qwen3.5 4B | PromptQuorum',
    metaDescription: 'Qwen3.5 4B Q4_K_M (3,3 Go) convient le mieux à 6 Go de VRAM ; Qwen3 8B (5,2 Go) est plus puissant mais juste. Choix pour le code, GPU et tags Ollama.',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-fr.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour 6 Go de VRAM ?',
        answer: 'Pour 6 Go de VRAM, Qwen3.5 4B Q4_K_M convient le mieux : un téléchargement de 3,3 Go qui laisse environ 2,7 Go pour le contexte. Qwen3 8B Q4_K_M (5,2 Go) est plus capable mais juste, et Phi-4-mini (2,5 Go) est l\'option la plus légère.',
        bullets: [
          'Qwen3.5 4B Q4_K_M : le plus adapté à 6 Go (3,3 Go, texte et image en entrée)',
          'Qwen3 8B Q4_K_M : plus capable mais juste (5,2 Go, contexte court uniquement)',
          'Phi-4-mini Q4_K_M : option la plus légère (2,5 Go, le plus de marge pour le contexte)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3.5 4B Q4_K_M (3,3 Go) convient le mieux à 6 Go de VRAM : il tient entièrement sur le GPU et laisse de la place au contexte',
          'Qwen3 8B Q4_K_M (5,2 Go) est plus capable mais laisse moins de 1 Go pour le contexte : gardez des prompts courts',
          'Ne tiennent pas dans 6 Go : Qwen3.5 9B (6,6 Go), Ministral 3 8B (6,0 Go) et Gemma 4 E4B (dès 6,1 Go) dépassent la limite avant tout contexte',
        ],
      },
      body1: {
        title: 'Top 3 des modèles pour 6 Go de VRAM',
        content: [
          '<strong>Avec 6 Go de VRAM, choisissez un modèle d\'environ 4 Go ou moins, pour que le cache de contexte et votre bureau tiennent encore sur la carte.</strong> Les tailles ci-dessous sont les tailles de téléchargement de la <a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">bibliothèque Ollama</a> ; la fenêtre de contexte demande de la mémoire en plus, et Windows réserve une partie de la VRAM pour l\'affichage.',
          'Qwen3.5 4B est une sortie de 2026 avec entrée texte et image, appel d\'outils et un mode réflexion activé par défaut (il ajoute des tokens avant la réponse). PromptQuorum n\'a pas mesuré ces modèles sur des cartes de 6 Go ; la vitesse dépend de votre GPU — les fichiers plus petits génèrent en général plus vite.',
        ],
        columns: ['Modèle', 'Taille', 'Tag Ollama', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Qwen3.5 4B Q4_K_M', 'Taille': '3,3 Go', 'Tag Ollama': 'qwen3.5:4b', 'Idéal pour': 'Chat, code, images' },
          { 'Modèle': 'Qwen3 8B Q4_K_M', 'Taille': '5,2 Go', 'Tag Ollama': 'qwen3:8b', 'Idéal pour': 'Qualité max., contexte court' },
          { 'Modèle': 'Phi-4-mini Q4_K_M', 'Taille': '2,5 Go', 'Tag Ollama': 'phi4-mini', 'Idéal pour': 'Léger, contexte long' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-fr.webp',
        imageCaption: 'Meilleurs LLM locaux pour 6 Go de VRAM -- Taille du modèle vs cas d\'usage',
      },
      body2: {
        title: 'Quels GPU ont 6 Go et ce qui tient',
        content: [
          '<strong>Les cartes courantes à 6 Go sont la GTX 1060 6 Go, la GTX 1660 Super, la RTX 2060 (version 6 Go), la RTX 3050 6 Go, la RTX 3060 Laptop et la RTX 4050 Laptop.</strong> Ollama fonctionne sur toutes via CUDA ; les cartes plus anciennes comme la GTX 1060 marchent mais génèrent plus lentement faute de cœurs Tensor.',
          'Si un modèle ne tient pas, Ollama déplace certaines couches vers la RAM système et le CPU. Le modèle tourne encore, mais la génération ralentit fortement : Qwen3 8B sur une carte de 6 Go est donc un compromis, pas une mise à niveau gratuite. Lancez <code>ollama ps</code> pour voir la répartition GPU/CPU.',
          'Apple Silicon est un autre cas : un Mac partage la mémoire unifiée entre CPU et GPU, et macOS laisse par défaut le GPU en utiliser environ les deux tiers sur une machine de 16 Go ; un MacBook de 16 Go peut donc exécuter des modèles que cette page juge trop gros. Voir <a href="/fr/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">le meilleur LLM local pour un portable avec 16 Go de RAM</a>.',
          'Passer de 6 à 8 Go permet d\'exécuter Qwen3 8B Q4_K_M avec de la marge pour le contexte. Pour les options 12 Go et les modèles 14B, voir <a href="/fr/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">les meilleurs modèles Ollama pour RTX 3060 12 Go</a>. Pour la référence complète sur la VRAM, voir <a href="/fr/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">la VRAM nécessaire à un LLM local</a>.',
        ],
      },
      body3: {
        title: 'Meilleur modèle de code pour 6 Go de VRAM',
        content: [
          '<strong>Qwen3.5 4B Q4_K_M est le point de départ pour coder avec 6 Go de VRAM ; Qwen2.5-Coder 7B Q4_K_M (4,7 Go) est l\'option spécialisée pour la complétion de code.</strong> La <a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">fiche du modèle Qwen3.5 4B</a> indique 55,8 sur LiveCodeBench v6 (chiffre de l\'éditeur, mode réflexion). Qwen2.5-Coder est une famille de 2024 avec une fenêtre de 32K ; le fichier 7B laisse donc peu de place aux longs prompts.',
          'LM Studio charge les mêmes fichiers GGUF, et Aider ou un plugin d\'éditeur peut utiliser un modèle Ollama via son API locale. Augmentez la fenêtre de contexte au-delà de la valeur par défaut — par exemple <code>/set parameter num_ctx 8192</code> dans l\'invite Ollama — car les prompts de code sont longs et un contexte tronqué donne des réponses fausses.',
        ],
        columns: ['Modèle', 'Taille', 'Usage'],
        rows: [
          { 'Modèle': 'Qwen3.5 4B Q4_K_M', 'Taille': '3,3 Go', 'Usage': 'Code + chat, appel d\'outils' },
          { 'Modèle': 'Qwen2.5-Coder 7B Q4_K_M', 'Taille': '4,7 Go', 'Usage': 'Complétion, contexte court' },
          { 'Modèle': 'Qwen2.5-Coder 3B Q4_K_M', 'Taille': '1,9 Go', 'Usage': 'Autocomplétion rapide' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles pour 6 Go de VRAM',
        faqs: [
          {
            q: '6 Go de VRAM suffisent-ils pour les LLM locaux ?',
            a: 'Oui, pour les modèles de 3–4B et les modèles 7–8B quantifiés avec un contexte court. Qwen3.5 4B Q4_K_M gère le chat, les résumés et l\'aide au code entièrement sur le GPU. Attendez-vous à de moins bons résultats que les modèles cloud sur les tâches longues ou difficiles.',
          },
          {
            q: 'Qwen3 8B tient-il dans 6 Go de VRAM ?',
            a: 'De justesse. Le téléchargement Ollama fait 5,2 Go, auquel s\'ajoutent le cache de contexte et la VRAM utilisée par l\'affichage : un contexte plus long repousse des couches vers le CPU. Limitez-le avec <code>/set parameter num_ctx 2048</code> ou utilisez Qwen3.5 4B (3,3 Go). Lancez <code>ollama ps</code> pour vérifier que le modèle est à 100 % sur le GPU.',
          },
          {
            q: 'Ministral 8B, Gemma 4 ou Qwen3.5 9B tiennent-ils dans 6 Go ?',
            a: 'Pas dans leur quantification par défaut. Dans Ollama, Ministral 3 8B fait 6,0 Go, Qwen3.5 9B Q4_K_M 6,6 Go et Gemma 4 E4B 6,1–6,6 Go : tous dépassent 6 Go avant tout contexte. Le plus petit Gemma 4 E2B QAT (<code>gemma4:e2b-it-qat</code>, 4,3 Go) tient.',
          },
          {
            q: 'Quel est le meilleur modèle de code pour 6 Go de VRAM ?',
            a: 'Commencez par Qwen3.5 4B Q4_K_M. Pour la complétion de code dans un éditeur, Qwen2.5-Coder 7B Q4_K_M (4,7 Go) ou Qwen2.5-Coder 3B (1,9 Go) sont les options spécialisées. LM Studio charge les mêmes fichiers GGUF, et Aider peut utiliser un modèle Ollama avec le préfixe <code>ollama_chat/</code>.',
          },
          {
            q: 'Quels GPU ont 6 Go de VRAM ?',
            a: 'La GTX 1060 6 Go, la GTX 1660 Super, la RTX 2060 (version 6 Go), la RTX 3050 6 Go, la RTX 3060 Laptop et la RTX 4050 Laptop. La RTX 4050 n\'existe qu\'en GPU pour portable.',
          },
          {
            q: 'Et si j\'ai 6 Go de RAM système, pas de VRAM ?',
            a: 'La RAM système exécute les modèles sur le CPU, ce qui est plus lent, et le système d\'exploitation en occupe déjà une partie. Utilisez un modèle de 1–2B comme Qwen3.5 2B Q4_K_M (<code>qwen3.5:2b</code>, 1,9 Go) et gardez un contexte court.',
          },
          {
            q: 'Puis-je exécuter des modèles 13B ou 14B avec 6 Go de VRAM ?',
            a: 'Non. Phi-4 (14B) en Q4_K_M demande environ 9 Go ; 12 Go est donc le minimum pratique pour les modèles 14B. Voir <a href="/fr/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">les meilleurs modèles Ollama pour RTX 3060 12 Go</a>.',
          },
          {
            q: 'Puis-je aussi utiliser 6 Go de VRAM pour générer des images ?',
            a: 'Stable Diffusion 1.5 tourne avec 6 Go. SDXL demande des modes d\'économie de mémoire et reste lent ; 8 Go sont plus confortables. Ne gardez pas un LLM et un modèle d\'image chargés en même temps : déchargez-en un d\'abord.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Peut-on faire tourner RAG avec 2 Go de RAM ?](/fr/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[Meilleure quantification pour 6 Go de VRAM](/fr/prompt-bites/best-quantization-6gb-vram) -- Q4_K_M vs Q5_K_M',
          '[Meilleur LLM local pour un portable avec 16 Go de RAM](/fr/prompt-bites/best-local-llm-16gb-ram-laptop) -- catégorie portable',
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '6 GB VRAMに最適なローカルLLMは？',
    seoTitle: '6 GB VRAM向けLLM 2026：Qwen3.5 4B',
    metaDescription: '6 GB VRAMにはQwen3.5 4B Q4_K_M（3.3 GB）が最適。Qwen3 8B（5.2 GB）は高性能ですが余裕が少なめ。コーディング向けとGPUも解説。',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-ja.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    quickAnswerTop: {
      ja: {
        question: '6 GB VRAMに最適なローカルLLMは？',
        answer: '6 GB VRAMにはQwen3.5 4B Q4_K_Mが最適です。ダウンロードは3.3 GBで、コンテキスト用に約2.7 GBが残ります。Qwen3 8B Q4_K_M（5.2 GB）は高性能ですが余裕が少なく、Phi-4-mini（2.5 GB）は最も軽量な選択肢です。',
        bullets: [
          'Qwen3.5 4B Q4_K_M：6 GBに最適（3.3 GB、テキストと画像入力）',
          'Qwen3 8B Q4_K_M：高性能だが余裕が少ない（5.2 GB、短いコンテキストのみ）',
          'Phi-4-mini Q4_K_M：最軽量（2.5 GB、コンテキストの余裕が最大）',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3.5 4B Q4_K_M（3.3 GB）は6 GB VRAMに最適：GPUに全体が載り、コンテキスト用の余裕も残ります',
          'Qwen3 8B Q4_K_M（5.2 GB）は高性能ですが、コンテキスト用に1 GB未満しか残らないため、プロンプトは短く保ってください',
          '6 GBに収まらないもの：Qwen3.5 9B（6.6 GB）、Ministral 3 8B（6.0 GB）、Gemma 4 E4B（6.1 GB以上）はコンテキスト以前に上限を超えます',
        ],
      },
      body1: {
        title: '6 GB VRAM向けトップ3モデル',
        content: [
          '<strong>6 GB VRAMでは、ファイルサイズが約4 GB以下のモデルを選ぶと、コンテキストキャッシュとデスクトップ表示もカードに収まります。</strong>以下のサイズは<a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollamaライブラリ</a>のダウンロードサイズです。コンテキストウィンドウには別途メモリが必要で、Windowsは表示用にVRAMの一部を確保します。',
          'Qwen3.5 4Bは2026年にリリースされ、テキストと画像の入力、ツール呼び出し、既定で有効な思考モード（回答の前にトークンが増えます）に対応します。PromptQuorumは6 GBカードでこれらのモデルを計測していないため、生成速度はお使いのGPUによります。一般にファイルが小さいほど速く生成できます。',
        ],
        columns: ['モデル', 'サイズ', 'Ollamaタグ', '最適な用途'],
        rows: [
          { 'モデル': 'Qwen3.5 4B Q4_K_M', 'サイズ': '3.3 GB', 'Ollamaタグ': 'qwen3.5:4b', '最適な用途': 'チャット、コーディング、画像' },
          { 'モデル': 'Qwen3 8B Q4_K_M', 'サイズ': '5.2 GB', 'Ollamaタグ': 'qwen3:8b', '最適な用途': '最高品質、短いコンテキスト' },
          { 'モデル': 'Phi-4-mini Q4_K_M', 'サイズ': '2.5 GB', 'Ollamaタグ': 'phi4-mini', '最適な用途': '軽量、長いコンテキスト' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-ja.webp',
        imageCaption: '6 GB VRAM向けベストローカルLLM -- モデルサイズと用途',
      },
      body2: {
        title: '6 GBのGPUと収まるモデル',
        content: [
          '<strong>6 GBの代表的なカードは、GTX 1060 6 GB、GTX 1660 Super、RTX 2060（6 GB版）、RTX 3050 6 GB、RTX 3060 Laptop、RTX 4050 Laptopです。</strong>OllamaはCUDA経由でいずれも動作します。GTX 1060のような古いカードも動きますが、Tensorコアがないため生成は遅くなります。',
          'モデルが収まらない場合、Ollamaは一部のレイヤーをシステムRAMとCPUに移します。動作はしますが生成速度は大きく落ちるため、6 GBカードでのQwen3 8Bは無料のアップグレードではなくトレードオフです。<code>ollama ps</code>でGPU/CPUの割合を確認できます。',
          'Apple Siliconは別のケースです。Macはユニファイドメモリを CPUとGPUで共有し、macOSは既定で16 GBのマシンではその約3分の2をGPUに使わせるため、16 GBのMacBookではこのページが大きすぎるとするモデルも動かせます。<a href="/ja/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">16 GB RAMノートPC向けベストローカルLLM</a>をご覧ください。',
          '6 GBから8 GBにすると、Qwen3 8B Q4_K_Mをコンテキストの余裕を持って動かせます。12 GBの選択肢と14Bモデルは<a href="/ja/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12 GB向けベストOllamaモデル</a>を、VRAMの詳しい基準は<a href="/ja/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">ローカルLLMに必要なVRAM</a>をご覧ください。',
        ],
      },
      body3: {
        title: '6 GB VRAM向けベストコーディングモデル',
        content: [
          '<strong>6 GB VRAMでのコーディングはQwen3.5 4B Q4_K_Mが出発点で、コード補完にはコード特化のQwen2.5-Coder 7B Q4_K_M（4.7 GB）も選択肢です。</strong><a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Qwen3.5 4Bのモデルカード</a>はLiveCodeBench v6で55.8と報告しています（開発元の数値、思考モード）。Qwen2.5-Coderは2024年のファミリーでコンテキストは32Kのため、7Bのファイルでは長いプロンプトの余裕がほとんどありません。',
          'LM Studioは同じGGUFファイルを読み込めます。Aiderやエディタのプラグインは、ローカルAPI経由でOllamaモデルを使えます。コードのプロンプトは長く、コンテキストが切り詰められると誤った回答になるため、既定値より大きくしてください（例：Ollamaのプロンプトで<code>/set parameter num_ctx 8192</code>）。',
        ],
        columns: ['モデル', 'サイズ', '用途'],
        rows: [
          { 'モデル': 'Qwen3.5 4B Q4_K_M', 'サイズ': '3.3 GB', '用途': 'コーディング＋チャット、ツール呼び出し' },
          { 'モデル': 'Qwen2.5-Coder 7B Q4_K_M', 'サイズ': '4.7 GB', '用途': 'コード補完、短いコンテキスト' },
          { 'モデル': 'Qwen2.5-Coder 3B Q4_K_M', 'サイズ': '1.9 GB', '用途': '高速オートコンプリート' },
        ],
      },
      faq: {
        id: 'faq',
        title: '6 GB VRAMモデルに関するよくある質問',
        faqs: [
          {
            q: '6 GB VRAMでローカルLLMは十分に使えますか？',
            a: 'はい。3〜4Bモデルや、短いコンテキストの量子化7〜8Bモデルなら使えます。Qwen3.5 4B Q4_K_Mはチャット、要約、コーディング支援をすべてGPU上でこなします。長い、または難しいタスクではクラウドモデルより結果が劣ります。',
          },
          {
            q: 'Qwen3 8Bは6 GB VRAMに収まりますか？',
            a: 'ぎりぎりです。Ollamaのダウンロードは5.2 GBで、さらにコンテキストキャッシュと表示用のVRAMが加わるため、コンテキストが長いとレイヤーがCPUに回ります。<code>/set parameter num_ctx 2048</code>で上限を設けるか、Qwen3.5 4B（3.3 GB）を使ってください。<code>ollama ps</code>で100% GPUか確認できます。',
          },
          {
            q: 'Ministral 8B、Gemma 4、Qwen3.5 9Bは6 GBに収まりますか？',
            a: '既定の量子化では収まりません。Ollamaでは、Ministral 3 8Bが6.0 GB、Qwen3.5 9B Q4_K_Mが6.6 GB、Gemma 4 E4Bが6.1〜6.6 GBで、いずれもコンテキスト以前に6 GBを超えます。小さいGemma 4 E2B QAT（<code>gemma4:e2b-it-qat</code>、4.3 GB）は収まります。',
          },
          {
            q: '6 GB VRAMに最適なコーディングモデルは？',
            a: 'まずQwen3.5 4B Q4_K_Mから始めてください。エディタでのコード補完には、コード特化のQwen2.5-Coder 7B Q4_K_M（4.7 GB）やQwen2.5-Coder 3B（1.9 GB）があります。LM Studioは同じGGUFファイルを読み込め、Aiderは<code>ollama_chat/</code>プレフィックスでOllamaモデルを使えます。',
          },
          {
            q: '6 GB VRAMのGPUはどれですか？',
            a: 'GTX 1060 6 GB、GTX 1660 Super、RTX 2060（6 GB版）、RTX 3050 6 GB、RTX 3060 Laptop、RTX 4050 Laptopです。RTX 4050はノートPC向けGPUのみです。',
          },
          {
            q: 'VRAMではなく6 GBのシステムRAMしかない場合は？',
            a: 'システムRAMではモデルはCPUで実行されるため遅く、OSもその一部を使います。Qwen3.5 2B Q4_K_M（<code>qwen3.5:2b</code>、1.9 GB）のような1〜2Bモデルを使い、コンテキストは短く保ってください。',
          },
          {
            q: '6 GB VRAMで13Bや14Bモデルは動かせますか？',
            a: 'いいえ。Phi-4（14B）のQ4_K_Mは約9 GB必要なので、14Bモデルには12 GBが現実的な最低ラインです。<a href="/ja/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12 GB向けベストOllamaモデル</a>をご覧ください。',
          },
          {
            q: '6 GB VRAMで画像生成もできますか？',
            a: 'Stable Diffusion 1.5は6 GBで動きます。SDXLは6 GBではメモリ節約モードが必要で遅く、8 GBの方が快適です。LLMと画像モデルを同時にロードせず、先に一方をアンロードしてください。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[2 GBのRAMでRAGは実行できますか？](/ja/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[6 GB VRAM向けベスト量子化](/ja/prompt-bites/best-quantization-6gb-vram) -- Q4_K_MとQ5_K_Mの比較',
          '[16 GB RAMノートPC向けベストローカルLLM](/ja/prompt-bites/best-local-llm-16gb-ram-laptop) -- ノートPC向け',
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '6 GB显存最佳本地LLM是什么？',
    seoTitle: '6 GB显存最佳LLM 2026：Qwen3.5 4B',
    metaDescription: 'Qwen3.5 4B Q4_K_M（3.3 GB）最适合6 GB显存；Qwen3 8B（5.2 GB）更强但余量紧张。含编码模型与显卡对照。',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-zh.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    quickAnswerTop: {
      zh: {
        question: '6 GB显存最佳本地LLM是什么？',
        answer: '6 GB显存最适合Qwen3.5 4B Q4_K_M：下载3.3 GB，可为上下文留出约2.7 GB。Qwen3 8B Q4_K_M（5.2 GB）能力更强但余量紧张，Phi-4-mini（2.5 GB）是最轻量的选择。',
        bullets: [
          'Qwen3.5 4B Q4_K_M：最适合6 GB（3.3 GB，支持文本和图像输入）',
          'Qwen3 8B Q4_K_M：能力更强但余量紧张（5.2 GB，仅适合短上下文）',
          'Phi-4-mini Q4_K_M：最轻量（2.5 GB，上下文余量最大）',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3.5 4B Q4_K_M（3.3 GB）最适合6 GB显存：可完全加载到GPU，并为上下文留出空间',
          'Qwen3 8B Q4_K_M（5.2 GB）能力更强，但留给上下文的空间不足1 GB，请保持提示词简短',
          '6 GB放不下：Qwen3.5 9B（6.6 GB）、Ministral 3 8B（6.0 GB）和Gemma 4 E4B（6.1 GB起）在加载上下文之前就已超出',
        ],
      },
      body1: {
        title: '6 GB显存的前3名模型',
        content: [
          '<strong>6 GB显存应选择文件约4 GB或更小的模型，这样上下文缓存和桌面显示仍能放进显卡。</strong>下表大小为<a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama模型库</a>中的下载大小；上下文窗口还需要额外内存，Windows也会为显示预留一部分显存。',
          'Qwen3.5 4B发布于2026年，支持文本和图像输入、工具调用，以及默认开启的思考模式（会在回答前多生成一些token）。PromptQuorum没有在6 GB显卡上测试过这些模型，生成速度取决于你的GPU——文件越小，通常生成越快。',
        ],
        columns: ['模型', '大小', 'Ollama标签', '最适合'],
        rows: [
          { '模型': 'Qwen3.5 4B Q4_K_M', '大小': '3.3 GB', 'Ollama标签': 'qwen3.5:4b', '最适合': '聊天、编码、图像' },
          { '模型': 'Qwen3 8B Q4_K_M', '大小': '5.2 GB', 'Ollama标签': 'qwen3:8b', '最适合': '最高质量、短上下文' },
          { '模型': 'Phi-4-mini Q4_K_M', '大小': '2.5 GB', 'Ollama标签': 'phi4-mini', '最适合': '轻量、长上下文' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-zh.webp',
        imageCaption: '6 GB显存最佳本地LLM -- 模型大小与用途',
      },
      body2: {
        title: '哪些显卡有6 GB，以及能放下什么',
        content: [
          '<strong>常见的6 GB显卡有GTX 1060 6 GB、GTX 1660 Super、RTX 2060（6 GB版）、RTX 3050 6 GB、RTX 3060笔记本版和RTX 4050笔记本版。</strong>Ollama通过CUDA可在这些显卡上运行；GTX 1060等旧卡也能用，但因缺少Tensor核心而生成更慢。',
          '如果模型放不下，Ollama会把部分层移到系统内存和CPU。模型仍能运行，但生成速度会明显下降，因此在6 GB显卡上运行Qwen3 8B是权衡，不是免费升级。运行<code>ollama ps</code>可查看GPU/CPU的分配比例。',
          'Apple芯片是另一种情况：Mac的CPU和GPU共享统一内存，macOS默认允许GPU使用16 GB机器上约三分之二的内存，因此16 GB的MacBook可以运行本页认为过大的模型。参见<a href="/zh/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">16 GB内存笔记本的最佳本地LLM</a>。',
          '从6 GB升级到8 GB后，Qwen3 8B Q4_K_M可带着上下文余量运行。12 GB方案和14B模型请参见<a href="/zh/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12 GB最佳Ollama模型</a>；完整的显存参考请参见<a href="/zh/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">本地LLM需要多少显存</a>。',
        ],
      },
      body3: {
        title: '6 GB显存最佳编码模型',
        content: [
          '<strong>在6 GB显存上编码，Qwen3.5 4B Q4_K_M是起点；Qwen2.5-Coder 7B Q4_K_M（4.7 GB）是专用于代码补全的选项。</strong><a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Qwen3.5 4B模型卡</a>报告其LiveCodeBench v6得分为55.8（厂商数据，思考模式）。Qwen2.5-Coder是2024年的系列，上下文窗口为32K，7B文件几乎不给长提示词留余量。',
          'LM Studio可加载相同的GGUF文件，Aider或编辑器插件可通过本地API使用Ollama模型。请把上下文窗口调到高于默认值（例如在Ollama提示符下输入<code>/set parameter num_ctx 8192</code>），因为代码提示词很长，上下文被截断会导致错误回答。',
        ],
        columns: ['模型', '大小', '用途'],
        rows: [
          { '模型': 'Qwen3.5 4B Q4_K_M', '大小': '3.3 GB', '用途': '编码+聊天、工具调用' },
          { '模型': 'Qwen2.5-Coder 7B Q4_K_M', '大小': '4.7 GB', '用途': '代码补全、短上下文' },
          { '模型': 'Qwen2.5-Coder 3B Q4_K_M', '大小': '1.9 GB', '用途': '快速自动补全' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于6 GB显存模型的快速解答',
        faqs: [
          {
            q: '6 GB显存够用来跑本地LLM吗？',
            a: '够用，适合3–4B模型，以及短上下文的量化7–8B模型。Qwen3.5 4B Q4_K_M可完全在GPU上完成聊天、摘要和编码辅助。在长任务或难任务上，效果会不如云端模型。',
          },
          {
            q: 'Qwen3 8B能放进6 GB显存吗？',
            a: '勉强可以。Ollama下载大小为5.2 GB，再加上上下文缓存和显示占用的显存，上下文变长会把部分层挤到CPU。可用<code>/set parameter num_ctx 2048</code>限制上下文，或改用Qwen3.5 4B（3.3 GB）。运行<code>ollama ps</code>可确认模型是否100%在GPU上。',
          },
          {
            q: 'Ministral 8B、Gemma 4或Qwen3.5 9B能放进6 GB吗？',
            a: '默认量化下放不下。在Ollama中，Ministral 3 8B为6.0 GB，Qwen3.5 9B Q4_K_M为6.6 GB，Gemma 4 E4B为6.1–6.6 GB，加载上下文之前就都超过6 GB。较小的Gemma 4 E2B QAT（<code>gemma4:e2b-it-qat</code>，4.3 GB）可以放下。',
          },
          {
            q: '6 GB显存最佳的编码模型是什么？',
            a: '先从Qwen3.5 4B Q4_K_M开始。编辑器中的代码补全可选专用的Qwen2.5-Coder 7B Q4_K_M（4.7 GB）或Qwen2.5-Coder 3B（1.9 GB）。LM Studio可加载相同的GGUF文件，Aider可用<code>ollama_chat/</code>前缀调用Ollama模型。',
          },
          {
            q: '哪些显卡有6 GB显存？',
            a: 'GTX 1060 6 GB、GTX 1660 Super、RTX 2060（6 GB版）、RTX 3050 6 GB、RTX 3060笔记本版和RTX 4050笔记本版。RTX 4050只有笔记本GPU版本。',
          },
          {
            q: '如果我有的是6 GB系统内存而不是显存呢？',
            a: '系统内存让模型在CPU上运行，速度更慢，而且操作系统已经占用了一部分。请使用1–2B模型，例如Qwen3.5 2B Q4_K_M（<code>qwen3.5:2b</code>，1.9 GB），并保持上下文简短。',
          },
          {
            q: '6 GB显存能运行13B或14B模型吗？',
            a: '不能。Phi-4（14B）的Q4_K_M约需9 GB，因此14B模型的实际最低配置是12 GB。参见<a href="/zh/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12 GB最佳Ollama模型</a>。',
          },
          {
            q: '6 GB显存也能用来生成图像吗？',
            a: 'Stable Diffusion 1.5可在6 GB上运行。SDXL在6 GB上需要开启省显存模式且速度较慢，8 GB更舒适。不要同时加载LLM和图像模型，请先卸载其中一个。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[能在2 GB内存上运行RAG吗？](/zh/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[6 GB显存最佳量化](/zh/prompt-bites/best-quantization-6gb-vram) -- Q4_K_M与Q5_K_M对比',
          '[16 GB内存笔记本的最佳本地LLM](/zh/prompt-bites/best-local-llm-16gb-ram-laptop) -- 笔记本档位',
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Mejor LLM local para 6 GB de VRAM?',
    seoTitle: 'Mejor LLM para 6 GB de VRAM 2026: Qwen3.5 4B | PromptQuorum',
    metaDescription: 'Qwen3.5 4B Q4_K_M (3,3 GB) es la mejor opción para 6 GB de VRAM; Qwen3 8B (5,2 GB) rinde más pero va justo. Opciones para código, GPU y tags de Ollama.',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-es.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    quickAnswerTop: {
      es: {
        question: '¿Mejor LLM local para 6 GB de VRAM?',
        answer: 'Para 6 GB de VRAM, Qwen3.5 4B Q4_K_M es la mejor opción: una descarga de 3,3 GB que deja unos 2,7 GB para el contexto. Qwen3 8B Q4_K_M (5,2 GB) es más capaz pero va justo, y Phi-4-mini (2,5 GB) es la opción más ligera.',
        bullets: [
          'Qwen3.5 4B Q4_K_M: la mejor opción para 6 GB (3,3 GB, entrada de texto e imagen)',
          'Qwen3 8B Q4_K_M: más capaz pero justo (5,2 GB, solo contexto corto)',
          'Phi-4-mini Q4_K_M: la opción más ligera (2,5 GB, más margen de contexto)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3.5 4B Q4_K_M (3,3 GB) es la mejor opción para 6 GB de VRAM: cabe entero en la GPU y deja espacio para el contexto',
          'Qwen3 8B Q4_K_M (5,2 GB) es más capaz, pero deja menos de 1 GB para el contexto: mantén los prompts cortos',
          'No caben en 6 GB: Qwen3.5 9B (6,6 GB), Ministral 3 8B (6,0 GB) y Gemma 4 E4B (desde 6,1 GB) superan el límite antes de cualquier contexto',
        ],
      },
      body1: {
        title: 'Top 3 modelos para 6 GB de VRAM',
        content: [
          '<strong>Con 6 GB de VRAM, elige un modelo de unos 4 GB o menos, para que la caché de contexto y tu escritorio sigan cabiendo en la tarjeta.</strong> Los tamaños de abajo son los de descarga de la <a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">biblioteca de Ollama</a>; la ventana de contexto necesita memoria adicional y Windows reserva algo de VRAM para la pantalla.',
          'Qwen3.5 4B es un lanzamiento de 2026 con entrada de texto e imagen, llamadas a herramientas y un modo de razonamiento activado por defecto (añade tokens antes de la respuesta). PromptQuorum no ha medido estos modelos en tarjetas de 6 GB, así que la velocidad depende de tu GPU; los archivos más pequeños suelen generar más rápido.',
        ],
        columns: ['Modelo', 'Tamaño', 'Etiqueta Ollama', 'Ideal para'],
        rows: [
          { 'Modelo': 'Qwen3.5 4B Q4_K_M', 'Tamaño': '3,3 GB', 'Etiqueta Ollama': 'qwen3.5:4b', 'Ideal para': 'Chat, código, imágenes' },
          { 'Modelo': 'Qwen3 8B Q4_K_M', 'Tamaño': '5,2 GB', 'Etiqueta Ollama': 'qwen3:8b', 'Ideal para': 'Máx. calidad, contexto corto' },
          { 'Modelo': 'Phi-4-mini Q4_K_M', 'Tamaño': '2,5 GB', 'Etiqueta Ollama': 'phi4-mini', 'Ideal para': 'Ligero, contexto largo' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-es.webp',
        imageCaption: 'Mejores LLM locales para 6 GB de VRAM -- Tamaño del modelo vs caso de uso',
      },
      body2: {
        title: 'Qué GPU tienen 6 GB y qué cabe',
        content: [
          '<strong>Las tarjetas habituales de 6 GB son la GTX 1060 6 GB, la GTX 1660 Super, la RTX 2060 (versión de 6 GB), la RTX 3050 6 GB, la RTX 3060 Laptop y la RTX 4050 Laptop.</strong> Ollama funciona en todas mediante CUDA; las tarjetas antiguas como la GTX 1060 sirven, pero generan más despacio porque no tienen núcleos Tensor.',
          'Si un modelo no cabe, Ollama mueve algunas capas a la RAM del sistema y a la CPU. El modelo sigue funcionando, pero la generación se ralentiza mucho, así que Qwen3 8B en una tarjeta de 6 GB es un compromiso, no una mejora gratuita. Ejecuta <code>ollama ps</code> para ver el reparto GPU/CPU.',
          'Apple Silicon es otro caso: un Mac comparte la memoria unificada entre CPU y GPU, y por defecto macOS deja que la GPU use aproximadamente dos tercios en una máquina de 16 GB, así que un MacBook de 16 GB puede ejecutar modelos que esta página considera demasiado grandes. Consulta <a href="/es/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">el mejor LLM local para un portátil con 16 GB de RAM</a>.',
          'Pasar de 6 GB a 8 GB permite ejecutar Qwen3 8B Q4_K_M con margen para el contexto. Para opciones de 12 GB y modelos de 14B, consulta <a href="/es/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">los mejores modelos de Ollama para RTX 3060 12 GB</a>. Para la referencia completa de VRAM, consulta <a href="/es/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">cuánta VRAM necesita un LLM local</a>.',
        ],
      },
      body3: {
        title: 'Mejor modelo de código para 6 GB de VRAM',
        content: [
          '<strong>Qwen3.5 4B Q4_K_M es el punto de partida para programar con 6 GB de VRAM; Qwen2.5-Coder 7B Q4_K_M (4,7 GB) es la opción especializada para completar código.</strong> La <a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ficha del modelo Qwen3.5 4B</a> indica 55,8 en LiveCodeBench v6 (dato del fabricante, modo de razonamiento). Qwen2.5-Coder es una familia de 2024 con ventana de 32K, así que el archivo de 7B deja poco margen para prompts largos.',
          'LM Studio carga los mismos archivos GGUF, y Aider o un plugin de editor pueden usar un modelo de Ollama mediante su API local. Aumenta la ventana de contexto por encima del valor por defecto —por ejemplo <code>/set parameter num_ctx 8192</code> en el prompt de Ollama—, porque los prompts de código son largos y un contexto truncado da respuestas erróneas.',
        ],
        columns: ['Modelo', 'Tamaño', 'Uso'],
        rows: [
          { 'Modelo': 'Qwen3.5 4B Q4_K_M', 'Tamaño': '3,3 GB', 'Uso': 'Código + chat, herramientas' },
          { 'Modelo': 'Qwen2.5-Coder 7B Q4_K_M', 'Tamaño': '4,7 GB', 'Uso': 'Completado, contexto corto' },
          { 'Modelo': 'Qwen2.5-Coder 3B Q4_K_M', 'Tamaño': '1,9 GB', 'Uso': 'Autocompletado rápido' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre modelos para 6 GB de VRAM',
        faqs: [
          {
            q: '¿Bastan 6 GB de VRAM para LLM locales?',
            a: 'Sí, para modelos de 3–4B y modelos cuantizados de 7–8B con contexto corto. Qwen3.5 4B Q4_K_M gestiona chat, resúmenes y ayuda con código por completo en la GPU. Espera peores resultados que los modelos en la nube en tareas largas o difíciles.',
          },
          {
            q: '¿Cabe Qwen3 8B en 6 GB de VRAM?',
            a: 'Por los pelos. La descarga de Ollama es de 5,2 GB, y a eso se suman la caché de contexto y la VRAM que usa la pantalla, así que un contexto más largo empuja capas a la CPU. Limítalo con <code>/set parameter num_ctx 2048</code> o usa Qwen3.5 4B (3,3 GB). Ejecuta <code>ollama ps</code> para confirmar que el modelo está al 100 % en la GPU.',
          },
          {
            q: '¿Caben Ministral 8B, Gemma 4 o Qwen3.5 9B en 6 GB?',
            a: 'No con su cuantización por defecto. En Ollama, Ministral 3 8B ocupa 6,0 GB, Qwen3.5 9B Q4_K_M 6,6 GB y Gemma 4 E4B 6,1–6,6 GB: todos superan los 6 GB antes de cualquier contexto. El Gemma 4 E2B QAT, más pequeño (<code>gemma4:e2b-it-qat</code>, 4,3 GB), sí cabe.',
          },
          {
            q: '¿Cuál es el mejor modelo de código para 6 GB de VRAM?',
            a: 'Empieza con Qwen3.5 4B Q4_K_M. Para completar código en el editor, Qwen2.5-Coder 7B Q4_K_M (4,7 GB) o Qwen2.5-Coder 3B (1,9 GB) son las opciones especializadas. LM Studio carga los mismos archivos GGUF, y Aider puede usar un modelo de Ollama con el prefijo <code>ollama_chat/</code>.',
          },
          {
            q: '¿Qué GPU tienen 6 GB de VRAM?',
            a: 'La GTX 1060 6 GB, GTX 1660 Super, RTX 2060 (versión de 6 GB), RTX 3050 6 GB, RTX 3060 Laptop y RTX 4050 Laptop. La RTX 4050 solo existe como GPU de portátil.',
          },
          {
            q: '¿Y si tengo 6 GB de RAM del sistema, no de VRAM?',
            a: 'La RAM del sistema ejecuta los modelos en la CPU, que es más lenta, y el sistema operativo ya usa una parte. Usa un modelo de 1–2B como Qwen3.5 2B Q4_K_M (<code>qwen3.5:2b</code>, 1,9 GB) y mantén el contexto corto.',
          },
          {
            q: '¿Puedo ejecutar modelos de 13B o 14B con 6 GB de VRAM?',
            a: 'No. Phi-4 (14B) en Q4_K_M necesita unos 9 GB, así que 12 GB es el mínimo práctico para modelos de 14B. Consulta <a href="/es/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">los mejores modelos de Ollama para RTX 3060 12 GB</a>.',
          },
          {
            q: '¿Puedo usar 6 GB de VRAM también para generar imágenes?',
            a: 'Stable Diffusion 1.5 funciona con 6 GB. SDXL necesita modos de ahorro de memoria en 6 GB y va lento; 8 GB es más cómodo. No tengas cargados a la vez un LLM y un modelo de imagen: descarga uno primero.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[¿Puedes ejecutar RAG con 2 GB de RAM?](/es/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[Mejor cuantización para 6 GB de VRAM](/es/prompt-bites/best-quantization-6gb-vram) -- Q4_K_M vs Q5_K_M',
          '[Mejor LLM local para un portátil con 16 GB de RAM](/es/prompt-bites/best-local-llm-16gb-ram-laptop) -- gama portátil',
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    title: 'Melhor LLM local para 6 GB de VRAM?',
    seoTitle: 'Melhor LLM 6 GB de VRAM 2026: Qwen3.5 4B | PromptQuorum',
    metaDescription: 'Qwen3.5 4B Q4_K_M (3,3 GB) é a melhor opção para 6 GB de VRAM; Qwen3 8B (5,2 GB) rende mais, mas fica apertado. Opções para código, GPUs e tags do Ollama.',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-pt.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    quickAnswerTop: {
      pt: {
        question: 'Melhor LLM local para 6 GB de VRAM?',
        answer: 'Para 6 GB de VRAM, o Qwen3.5 4B Q4_K_M é a melhor opção: um download de 3,3 GB que deixa cerca de 2,7 GB para o contexto. O Qwen3 8B Q4_K_M (5,2 GB) é mais capaz, mas apertado, e o Phi-4-mini (2,5 GB) é a opção mais leve.',
        bullets: [
          'Qwen3.5 4B Q4_K_M: melhor opção para 6 GB (3,3 GB, entrada de texto e imagem)',
          'Qwen3 8B Q4_K_M: mais capaz, mas apertado (5,2 GB, apenas contexto curto)',
          'Phi-4-mini Q4_K_M: opção mais leve (2,5 GB, mais margem de contexto)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Qwen3.5 4B Q4_K_M (3,3 GB) é a melhor opção para 6 GB de VRAM: cabe inteiro na GPU e deixa espaço para o contexto',
          'O Qwen3 8B Q4_K_M (5,2 GB) é mais capaz, mas deixa menos de 1 GB para o contexto: mantenha os prompts curtos',
          'Não cabem em 6 GB: Qwen3.5 9B (6,6 GB), Ministral 3 8B (6,0 GB) e Gemma 4 E4B (a partir de 6,1 GB) passam do limite antes de qualquer contexto',
        ],
      },
      body1: {
        title: 'Top 3 modelos para 6 GB de VRAM',
        content: [
          '<strong>Com 6 GB de VRAM, escolha um modelo de cerca de 4 GB ou menos, para que o cache de contexto e a sua área de trabalho ainda caibam na placa.</strong> Os tamanhos abaixo são os de download da <a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">biblioteca do Ollama</a>; a janela de contexto precisa de memória adicional e o Windows reserva parte da VRAM para o vídeo.',
          'O Qwen3.5 4B é um lançamento de 2026 com entrada de texto e imagem, chamada de ferramentas e um modo de raciocínio ativado por padrão (ele gera tokens extras antes da resposta). A PromptQuorum não mediu esses modelos em placas de 6 GB, então a velocidade depende da sua GPU; arquivos menores costumam gerar mais rápido.',
        ],
        columns: ['Modelo', 'Tamanho', 'Tag do Ollama', 'Melhor para'],
        rows: [
          { 'Modelo': 'Qwen3.5 4B Q4_K_M', 'Tamanho': '3,3 GB', 'Tag do Ollama': 'qwen3.5:4b', 'Melhor para': 'Chat, programação, imagens' },
          { 'Modelo': 'Qwen3 8B Q4_K_M', 'Tamanho': '5,2 GB', 'Tag do Ollama': 'qwen3:8b', 'Melhor para': 'Qualidade máx., contexto curto' },
          { 'Modelo': 'Phi-4-mini Q4_K_M', 'Tamanho': '2,5 GB', 'Tag do Ollama': 'phi4-mini', 'Melhor para': 'Leve, contexto longo' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-pt.webp',
        imageCaption: 'Melhores LLMs locais para 6 GB de VRAM -- Tamanho do modelo vs caso de uso',
      },
      body2: {
        title: 'Quais GPUs têm 6 GB e o que cabe',
        content: [
          '<strong>As placas comuns de 6 GB são a GTX 1060 6 GB, a GTX 1660 Super, a RTX 2060 (versão de 6 GB), a RTX 3050 6 GB, a RTX 3060 Laptop e a RTX 4050 Laptop.</strong> O Ollama roda em todas via CUDA; placas mais antigas, como a GTX 1060, funcionam, mas geram mais devagar por não terem núcleos Tensor.',
          'Se um modelo não cabe, o Ollama move algumas camadas para a RAM do sistema e a CPU. O modelo continua rodando, mas a geração fica bem mais lenta, então o Qwen3 8B numa placa de 6 GB é uma troca, não um upgrade grátis. Execute <code>ollama ps</code> para ver a divisão GPU/CPU.',
          'O Apple Silicon é outro caso: o Mac compartilha a memória unificada entre CPU e GPU, e por padrão o macOS deixa a GPU usar cerca de dois terços dela em uma máquina de 16 GB, então um MacBook de 16 GB pode rodar modelos que esta página considera grandes demais. Veja <a href="/pt/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">o melhor LLM local para um notebook com 16 GB de RAM</a>.',
          'Passar de 6 GB para 8 GB permite rodar o Qwen3 8B Q4_K_M com margem para o contexto. Para opções de 12 GB e modelos 14B, veja <a href="/pt/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">os melhores modelos Ollama para RTX 3060 12 GB</a>. Para a referência completa de VRAM, veja <a href="/pt/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">quanta VRAM um LLM local precisa</a>.',
        ],
      },
      body3: {
        title: 'Melhor modelo de programação para 6 GB de VRAM',
        content: [
          '<strong>O Qwen3.5 4B Q4_K_M é o ponto de partida para programar com 6 GB de VRAM; o Qwen2.5-Coder 7B Q4_K_M (4,7 GB) é a opção especializada em completar código.</strong> O <a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">cartão do modelo Qwen3.5 4B</a> informa 55,8 no LiveCodeBench v6 (dado do fabricante, modo de raciocínio). O Qwen2.5-Coder é uma família de 2024 com janela de 32K, então o arquivo de 7B deixa pouca margem para prompts longos.',
          'O LM Studio carrega os mesmos arquivos GGUF, e o Aider ou um plugin de editor pode usar um modelo do Ollama pela API local. Aumente a janela de contexto acima do padrão — por exemplo, <code>/set parameter num_ctx 8192</code> no prompt do Ollama —, porque prompts de código são longos e um contexto truncado gera respostas erradas.',
        ],
        columns: ['Modelo', 'Tamanho', 'Uso'],
        rows: [
          { 'Modelo': 'Qwen3.5 4B Q4_K_M', 'Tamanho': '3,3 GB', 'Uso': 'Código + chat, ferramentas' },
          { 'Modelo': 'Qwen2.5-Coder 7B Q4_K_M', 'Tamanho': '4,7 GB', 'Uso': 'Completar, contexto curto' },
          { 'Modelo': 'Qwen2.5-Coder 3B Q4_K_M', 'Tamanho': '1,9 GB', 'Uso': 'Autocompletar rápido' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos com 6 GB de VRAM',
        faqs: [
          {
            q: '6 GB de VRAM bastam para LLMs locais?',
            a: 'Sim, para modelos de 3–4B e modelos quantizados de 7–8B com contexto curto. O Qwen3.5 4B Q4_K_M cuida de chat, resumos e ajuda com código inteiramente na GPU. Espere resultados piores que os de modelos em nuvem em tarefas longas ou difíceis.',
          },
          {
            q: 'O Qwen3 8B cabe em 6 GB de VRAM?',
            a: 'Por pouco. O download do Ollama tem 5,2 GB, e somam-se o cache de contexto e a VRAM usada pelo vídeo, então um contexto maior empurra camadas para a CPU. Limite-o com <code>/set parameter num_ctx 2048</code> ou use o Qwen3.5 4B (3,3 GB). Execute <code>ollama ps</code> para confirmar que o modelo está 100% na GPU.',
          },
          {
            q: 'Ministral 8B, Gemma 4 ou Qwen3.5 9B cabem em 6 GB?',
            a: 'Não na quantização padrão. No Ollama, o Ministral 3 8B tem 6,0 GB, o Qwen3.5 9B Q4_K_M tem 6,6 GB e o Gemma 4 E4B tem 6,1–6,6 GB: todos passam de 6 GB antes de qualquer contexto. O Gemma 4 E2B QAT, menor (<code>gemma4:e2b-it-qat</code>, 4,3 GB), cabe.',
          },
          {
            q: 'Qual é o melhor modelo de programação para 6 GB de VRAM?',
            a: 'Comece pelo Qwen3.5 4B Q4_K_M. Para completar código no editor, o Qwen2.5-Coder 7B Q4_K_M (4,7 GB) ou o Qwen2.5-Coder 3B (1,9 GB) são as opções especializadas. O LM Studio carrega os mesmos arquivos GGUF, e o Aider pode usar um modelo do Ollama com o prefixo <code>ollama_chat/</code>.',
          },
          {
            q: 'Quais GPUs têm 6 GB de VRAM?',
            a: 'GTX 1060 6 GB, GTX 1660 Super, RTX 2060 (versão de 6 GB), RTX 3050 6 GB, RTX 3060 Laptop e RTX 4050 Laptop. A RTX 4050 existe apenas como GPU de notebook.',
          },
          {
            q: 'E se eu tiver 6 GB de RAM do sistema, não de VRAM?',
            a: 'A RAM do sistema roda os modelos na CPU, que é mais lenta, e o sistema operacional já usa parte dela. Use um modelo de 1–2B, como o Qwen3.5 2B Q4_K_M (<code>qwen3.5:2b</code>, 1,9 GB), e mantenha o contexto curto.',
          },
          {
            q: 'Posso executar modelos 13B ou 14B com 6 GB de VRAM?',
            a: 'Não. O Phi-4 (14B) em Q4_K_M precisa de cerca de 9 GB, então 12 GB é o mínimo prático para modelos 14B. Veja <a href="/pt/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">os melhores modelos Ollama para RTX 3060 12 GB</a>.',
          },
          {
            q: 'Posso usar 6 GB de VRAM também para gerar imagens?',
            a: 'O Stable Diffusion 1.5 roda com 6 GB. O SDXL precisa de modos de economia de memória em 6 GB e fica lento; 8 GB é mais confortável. Não mantenha um LLM e um modelo de imagem carregados ao mesmo tempo — descarregue um antes.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[É possível executar RAG com 2 GB de RAM?](/pt/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[Melhor quantização para 6 GB de VRAM](/pt/prompt-bites/best-quantization-6gb-vram) -- Q4_K_M vs Q5_K_M',
          '[Melhor LLM local para um notebook com 16 GB de RAM](/pt/prompt-bites/best-local-llm-16gb-ram-laptop) -- faixa de notebook',
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    title: 'أفضل نموذج لغوي محلي لـ ⁨6 GB⁩ من ⁨VRAM⁩؟',
    seoTitle: 'أفضل LLM لـ 6 GB VRAM في 2026: Qwen3.5 4B',
    metaDescription: '⁨Qwen3.5 4B Q4⁩_⁨K⁩_⁨M⁩ (⁨3.3 GB⁩) هو الأنسب لـ⁨6 GB VRAM⁩؛ و⁨Qwen3 8B⁩ (⁨5.2 GB⁩) أقوى لكن الهامش ضيق. خيارات البرمجة وبطاقات الرسوميات.',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-ar.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نموذج لغوي محلي لـ 6 GB من VRAM؟',
        answer: 'مع 6 GB من VRAM، يُعدّ Qwen3.5 4B Q4_K_M الأنسب: تنزيل بحجم 3.3 GB يترك نحو 2.7 GB للسياق. أما Qwen3 8B Q4_K_M (5.2 GB) فأقدر لكن هامشه ضيق، وPhi-4-mini (2.5 GB) هو الخيار الأخف.',
        bullets: [
          'Qwen3.5 4B Q4_K_M: الأنسب لـ 6 GB (3.3 GB، إدخال نص وصورة)',
          'Qwen3 8B Q4_K_M: أقدر لكن هامشه ضيق (5.2 GB، سياق قصير فقط)',
          'Phi-4-mini Q4_K_M: الأخف (2.5 GB، أكبر هامش للسياق)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3.5 4B Q4_K_M (3.3 GB) هو الأنسب لـ 6 GB من VRAM: يُحمَّل كاملًا على وحدة الرسوميات ويترك مساحة للسياق',
          'Qwen3 8B Q4_K_M (5.2 GB) أقدر، لكنه يترك أقل من 1 GB للسياق، فأبقِ الأوامر قصيرة',
          'لا تتسع في 6 GB: Qwen3.5 9B (6.6 GB) وMinistral 3 8B (6.0 GB) وGemma 4 E4B (من 6.1 GB) تتجاوز الحد قبل أي سياق',
        ],
      },
      body1: {
        title: 'أفضل 3 نماذج لـ 6 GB من VRAM',
        content: [
          '<strong>مع 6 GB من VRAM، اختر نموذجًا حجم ملفه نحو 4 GB أو أقل، كي يتسع ذاكرة السياق المؤقتة وسطح المكتب على البطاقة.</strong> الأحجام أدناه هي أحجام التنزيل من <a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">مكتبة Ollama</a>؛ فنافذة السياق تحتاج ذاكرة إضافية، ويحجز Windows جزءًا من VRAM للعرض.',
          'Qwen3.5 4B إصدار عام 2026 يدعم إدخال النص والصورة واستدعاء الأدوات ووضع تفكير مفعّلًا افتراضيًا (يضيف رموزًا قبل الإجابة). لم تقِس PromptQuorum هذه النماذج على بطاقات 6 GB، لذا تعتمد سرعة التوليد على بطاقتك؛ والملفات الأصغر تولّد عادةً أسرع.',
        ],
        columns: ['النموذج', 'الحجم', 'وسم Ollama', 'الأنسب لـ'],
        rows: [
          { 'النموذج': 'Qwen3.5 4B Q4_K_M', 'الحجم': '3.3 GB', 'وسم Ollama': 'qwen3.5:4b', 'الأنسب لـ': 'محادثة، برمجة، صور' },
          { 'النموذج': 'Qwen3 8B Q4_K_M', 'الحجم': '5.2 GB', 'وسم Ollama': 'qwen3:8b', 'الأنسب لـ': 'أعلى جودة، سياق قصير' },
          { 'النموذج': 'Phi-4-mini Q4_K_M', 'الحجم': '2.5 GB', 'وسم Ollama': 'phi4-mini', 'الأنسب لـ': 'خفيف، سياق طويل' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-ar.webp',
        imageCaption: 'أفضل نماذج LLM المحلية لـ 6 GB من VRAM -- حجم النموذج مقابل حالة الاستخدام',
      },
      body2: {
        title: 'أي البطاقات تملك 6 GB وما الذي يتسع',
        content: [
          '<strong>بطاقات 6 GB الشائعة هي GTX 1060 6 GB وGTX 1660 Super وRTX 2060 (إصدار 6 GB) وRTX 3050 6 GB وRTX 3060 Laptop وRTX 4050 Laptop.</strong> يعمل Ollama عليها جميعًا عبر CUDA؛ والبطاقات الأقدم مثل GTX 1060 تعمل لكنها تولّد أبطأ لأنها بلا أنوية Tensor.',
          'إذا لم يتسع النموذج، ينقل Ollama بعض الطبقات إلى ذاكرة النظام ووحدة المعالجة المركزية. يستمر النموذج بالعمل لكن التوليد يبطؤ كثيرًا، فتشغيل Qwen3 8B على بطاقة 6 GB مفاضلة وليس ترقية مجانية. نفّذ <code>ollama ps</code> لرؤية توزيع GPU/CPU.',
          'Apple Silicon حالة مختلفة: يتشارك Mac الذاكرة الموحدة بين المعالج والرسوميات، ويسمح macOS افتراضيًا للرسوميات باستخدام نحو ثلثيها في جهاز 16 GB، لذا يستطيع MacBook بذاكرة 16 GB تشغيل نماذج تعدّها هذه الصفحة كبيرة جدًا. راجع <a href="/ar/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">أفضل LLM محلي للابتوب بذاكرة 16 GB</a>.',
          'الانتقال من 6 GB إلى 8 GB يتيح تشغيل Qwen3 8B Q4_K_M مع هامش للسياق. لخيارات 12 GB ونماذج 14B راجع <a href="/ar/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">أفضل نماذج Ollama لبطاقة RTX 3060 12 GB</a>. وللمرجع الكامل عن VRAM راجع <a href="/ar/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">كم VRAM يحتاج LLM محلي</a>.',
        ],
      },
      body3: {
        title: 'أفضل نموذج برمجة لـ 6 GB من VRAM',
        content: [
          '<strong>Qwen3.5 4B Q4_K_M هو نقطة البداية للبرمجة على 6 GB من VRAM؛ أما Qwen2.5-Coder 7B Q4_K_M (4.7 GB) فخيار متخصص لإكمال الشيفرة.</strong> تذكر <a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">بطاقة نموذج Qwen3.5 4B</a> نتيجة 55.8 في LiveCodeBench v6 (رقم من الجهة المطوّرة، وضع التفكير). وQwen2.5-Coder عائلة من 2024 بنافذة 32K، فملف 7B يترك هامشًا ضئيلًا للأوامر الطويلة.',
          'يحمّل LM Studio ملفات GGUF نفسها، ويمكن لـ Aider أو إضافة محرر استخدام نموذج Ollama عبر واجهته المحلية. ارفع نافذة السياق فوق القيمة الافتراضية — مثل <code>/set parameter num_ctx 8192</code> في موجّه Ollama — لأن أوامر الشيفرة طويلة، والسياق المقتطع يعطي إجابات خاطئة.',
        ],
        columns: ['النموذج', 'الحجم', 'الاستخدام'],
        rows: [
          { 'النموذج': 'Qwen3.5 4B Q4_K_M', 'الحجم': '3.3 GB', 'الاستخدام': 'برمجة + محادثة، أدوات' },
          { 'النموذج': 'Qwen2.5-Coder 7B Q4_K_M', 'الحجم': '4.7 GB', 'الاستخدام': 'إكمال، سياق قصير' },
          { 'النموذج': 'Qwen2.5-Coder 3B Q4_K_M', 'الحجم': '1.9 GB', 'الاستخدام': 'إكمال تلقائي سريع' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن نماذج 6 GB من VRAM',
        faqs: [
          {
            q: 'هل يكفي 6 GB من VRAM لتشغيل LLM محلية؟',
            a: 'نعم، لنماذج 3–4B ولنماذج 7–8B المكمَّمة مع سياق قصير. يتولى Qwen3.5 4B Q4_K_M المحادثة والتلخيص ومساعدة البرمجة كليًا على وحدة الرسوميات. توقّع نتائج أضعف من النماذج السحابية في المهام الطويلة أو الصعبة.',
          },
          {
            q: 'هل يتسع Qwen3 8B في 6 GB من VRAM؟',
            a: 'بالكاد. حجم تنزيل Ollama 5.2 GB، ويُضاف إليه مخزن السياق المؤقت وVRAM الذي يستخدمه العرض، فيدفع السياق الأطول بعض الطبقات إلى المعالج. قيّده بـ <code>/set parameter num_ctx 2048</code> أو استخدم Qwen3.5 4B (3.3 GB). نفّذ <code>ollama ps</code> للتأكد أن النموذج على GPU بنسبة 100%.',
          },
          {
            q: 'هل تتسع Ministral 8B أو Gemma 4 أو Qwen3.5 9B في 6 GB؟',
            a: 'ليس بالتكميم الافتراضي. في Ollama حجم Ministral 3 8B هو 6.0 GB وQwen3.5 9B Q4_K_M هو 6.6 GB وGemma 4 E4B هو 6.1–6.6 GB، وكلها تتجاوز 6 GB قبل أي سياق. أما Gemma 4 E2B QAT الأصغر (<code>gemma4:e2b-it-qat</code>، 4.3 GB) فيتسع.',
          },
          {
            q: 'ما أفضل نموذج برمجة لـ 6 GB من VRAM؟',
            a: 'ابدأ بـ Qwen3.5 4B Q4_K_M. ولإكمال الشيفرة في المحرر، يُعدّ Qwen2.5-Coder 7B Q4_K_M (4.7 GB) أو Qwen2.5-Coder 3B (1.9 GB) خيارين متخصصين. يحمّل LM Studio ملفات GGUF نفسها، ويستطيع Aider استخدام نموذج Ollama بالبادئة <code>ollama_chat/</code>.',
          },
          {
            q: 'أي البطاقات تملك 6 GB من VRAM؟',
            a: 'GTX 1060 6 GB وGTX 1660 Super وRTX 2060 (إصدار 6 GB) وRTX 3050 6 GB وRTX 3060 Laptop وRTX 4050 Laptop. تتوفر RTX 4050 كبطاقة للابتوب فقط.',
          },
          {
            q: 'ماذا لو كان لديّ 6 GB من ذاكرة النظام لا VRAM؟',
            a: 'ذاكرة النظام تشغّل النماذج على المعالج وهو أبطأ، ويستهلك نظام التشغيل جزءًا منها أصلًا. استخدم نموذجًا بحجم 1–2B مثل Qwen3.5 2B Q4_K_M (<code>qwen3.5:2b</code>، 1.9 GB) وأبقِ السياق قصيرًا.',
          },
          {
            q: 'هل أستطيع تشغيل نماذج 13B أو 14B على 6 GB من VRAM؟',
            a: 'لا. يحتاج Phi-4 (14B) بصيغة Q4_K_M إلى نحو 9 GB، لذا فإن 12 GB هو الحد الأدنى العملي لنماذج 14B. راجع <a href="/ar/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">أفضل نماذج Ollama لبطاقة RTX 3060 12 GB</a>.',
          },
          {
            q: 'هل أستخدم 6 GB من VRAM لتوليد الصور أيضًا؟',
            a: 'يعمل Stable Diffusion 1.5 على 6 GB. أما SDXL فيحتاج أوضاع توفير الذاكرة على 6 GB ويكون بطيئًا؛ و8 GB أريح. لا تُبقِ LLM ونموذج صور محمّلين معًا — أفرغ أحدهما أولًا.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[هل يمكن تشغيل RAG بـ2 GB RAM؟](/ar/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[أفضل تكميم لـ 6 GB من VRAM](/ar/prompt-bites/best-quantization-6gb-vram) -- Q4_K_M مقابل Q5_K_M',
          '[أفضل LLM محلي للابتوب بذاكرة 16 GB](/ar/prompt-bites/best-local-llm-16gb-ram-laptop) -- فئة اللابتوب',
        ],
      },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    title: '6 GB VRAM에 최적인 로컬 LLM은?',
    seoTitle: '6 GB VRAM 최적 LLM 2026: Qwen3.5 4B',
    metaDescription: '6 GB VRAM에는 Qwen3.5 4B Q4_K_M(3.3 GB)이 가장 적합합니다. Qwen3 8B(5.2 GB)는 더 강력하지만 여유가 빠듯합니다. 코딩 모델과 GPU 정리.',
    heroImage: '/images/best-local-llm-6gb-vram-model-comparison-hero-ko.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    quickAnswerTop: {
      ko: {
        question: '6 GB VRAM에 최적인 로컬 LLM은?',
        answer: '6 GB VRAM에는 Qwen3.5 4B Q4_K_M이 가장 적합합니다. 다운로드 3.3 GB로 컨텍스트용 약 2.7 GB가 남습니다. Qwen3 8B Q4_K_M(5.2 GB)은 더 강력하지만 여유가 빠듯하고, Phi-4-mini(2.5 GB)는 가장 가벼운 선택지입니다.',
        bullets: [
          'Qwen3.5 4B Q4_K_M: 6 GB에 가장 적합(3.3 GB, 텍스트·이미지 입력)',
          'Qwen3 8B Q4_K_M: 더 강력하지만 빠듯함(5.2 GB, 짧은 컨텍스트만)',
          'Phi-4-mini Q4_K_M: 가장 가벼움(2.5 GB, 컨텍스트 여유 최대)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3.5 4B Q4_K_M(3.3 GB)은 6 GB VRAM에 가장 적합합니다: GPU에 전부 올라가고 컨텍스트 여유도 남습니다',
          'Qwen3 8B Q4_K_M(5.2 GB)은 더 강력하지만 컨텍스트용으로 1 GB 미만만 남으므로 프롬프트를 짧게 유지하세요',
          '6 GB에 들어가지 않는 모델: Qwen3.5 9B(6.6 GB), Ministral 3 8B(6.0 GB), Gemma 4 E4B(6.1 GB 이상)는 컨텍스트 이전에 한도를 넘습니다',
        ],
      },
      body1: {
        title: '6 GB VRAM용 상위 3개 모델',
        content: [
          '<strong>6 GB VRAM에서는 파일 크기가 약 4 GB 이하인 모델을 고르면 컨텍스트 캐시와 데스크톱 화면도 카드에 함께 들어갑니다.</strong> 아래 크기는 <a href="https://ollama.com/library/qwen3.5" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama 라이브러리</a>의 다운로드 크기입니다. 컨텍스트 윈도우에는 추가 메모리가 필요하고, Windows는 화면 출력용으로 VRAM 일부를 예약합니다.',
          'Qwen3.5 4B는 2026년에 출시되었으며 텍스트·이미지 입력, 도구 호출, 기본으로 켜진 사고 모드(답변 전에 토큰이 추가로 생성됨)를 지원합니다. PromptQuorum은 6 GB 카드에서 이 모델들을 측정하지 않았으므로 생성 속도는 사용하는 GPU에 따라 다르며, 파일이 작을수록 보통 더 빠르게 생성됩니다.',
        ],
        columns: ['모델', '크기', 'Ollama 태그', '적합한 용도'],
        rows: [
          { '모델': 'Qwen3.5 4B Q4_K_M', '크기': '3.3 GB', 'Ollama 태그': 'qwen3.5:4b', '적합한 용도': '채팅, 코딩, 이미지' },
          { '모델': 'Qwen3 8B Q4_K_M', '크기': '5.2 GB', 'Ollama 태그': 'qwen3:8b', '적합한 용도': '최고 품질, 짧은 컨텍스트' },
          { '모델': 'Phi-4-mini Q4_K_M', '크기': '2.5 GB', 'Ollama 태그': 'phi4-mini', '적합한 용도': '경량, 긴 컨텍스트' },
        ],
        image: '/images/best-local-llm-6gb-vram-model-comparison-hero-ko.webp',
        imageCaption: '6 GB VRAM용 최고의 로컬 LLM -- 모델 크기 vs 사용 사례',
      },
      body2: {
        title: '6 GB GPU와 들어가는 모델',
        content: [
          '<strong>흔한 6 GB 카드는 GTX 1060 6 GB, GTX 1660 Super, RTX 2060(6 GB 버전), RTX 3050 6 GB, RTX 3060 Laptop, RTX 4050 Laptop입니다.</strong> Ollama는 CUDA를 통해 모두에서 동작하며, GTX 1060 같은 오래된 카드도 작동하지만 Tensor 코어가 없어 생성이 더 느립니다.',
          '모델이 들어가지 않으면 Ollama는 일부 레이어를 시스템 RAM과 CPU로 옮깁니다. 모델은 계속 실행되지만 생성 속도가 크게 떨어지므로, 6 GB 카드에서 Qwen3 8B는 공짜 업그레이드가 아니라 절충입니다. <code>ollama ps</code>로 GPU/CPU 분배를 확인하세요.',
          'Apple Silicon은 다른 경우입니다. Mac은 CPU와 GPU가 통합 메모리를 공유하고, macOS는 기본적으로 16 GB 기기에서 GPU가 그 약 3분의 2를 쓰게 하므로 16 GB MacBook은 이 페이지가 너무 크다고 보는 모델도 실행할 수 있습니다. <a href="/ko/prompt-bites/best-local-llm-16gb-ram-laptop" class="text-primary hover:underline">16 GB RAM 노트북용 최고의 로컬 LLM</a>을 참고하세요.',
          '6 GB에서 8 GB로 올리면 Qwen3 8B Q4_K_M을 컨텍스트 여유를 두고 실행할 수 있습니다. 12 GB 옵션과 14B 모델은 <a href="/ko/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12 GB용 최고의 Ollama 모델</a>을, VRAM 전체 기준은 <a href="/ko/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">로컬 LLM에 필요한 VRAM</a>을 참고하세요.',
        ],
      },
      body3: {
        title: '6 GB VRAM용 최고의 코딩 모델',
        content: [
          '<strong>6 GB VRAM에서 코딩을 시작한다면 Qwen3.5 4B Q4_K_M이 출발점이며, 코드 자동 완성에는 코드 특화 Qwen2.5-Coder 7B Q4_K_M(4.7 GB)도 선택지입니다.</strong> <a href="https://huggingface.co/Qwen/Qwen3.5-4B" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Qwen3.5 4B 모델 카드</a>는 LiveCodeBench v6에서 55.8을 보고합니다(개발사 수치, 사고 모드). Qwen2.5-Coder는 2024년 계열로 컨텍스트 윈도우가 32K라서, 7B 파일은 긴 프롬프트를 위한 여유가 거의 없습니다.',
          'LM Studio는 같은 GGUF 파일을 불러오며, Aider나 에디터 플러그인은 로컬 API를 통해 Ollama 모델을 사용할 수 있습니다. 코드 프롬프트는 길고 컨텍스트가 잘리면 잘못된 답이 나오므로 기본값보다 크게 설정하세요(예: Ollama 프롬프트에서 <code>/set parameter num_ctx 8192</code>).',
        ],
        columns: ['모델', '크기', '용도'],
        rows: [
          { '모델': 'Qwen3.5 4B Q4_K_M', '크기': '3.3 GB', '용도': '코딩 + 채팅, 도구 호출' },
          { '모델': 'Qwen2.5-Coder 7B Q4_K_M', '크기': '4.7 GB', '용도': '코드 완성, 짧은 컨텍스트' },
          { '모델': 'Qwen2.5-Coder 3B Q4_K_M', '크기': '1.9 GB', '용도': '빠른 자동 완성' },
        ],
      },
      faq: {
        id: 'faq',
        title: '6 GB VRAM 모델에 대한 빠른 답변',
        faqs: [
          {
            q: '6 GB VRAM으로 로컬 LLM을 충분히 쓸 수 있나요?',
            a: '네. 3~4B 모델과 짧은 컨텍스트의 양자화 7~8B 모델이라면 가능합니다. Qwen3.5 4B Q4_K_M은 채팅, 요약, 코딩 보조를 모두 GPU에서 처리합니다. 길거나 어려운 작업에서는 클라우드 모델보다 결과가 떨어집니다.',
          },
          {
            q: 'Qwen3 8B가 6 GB VRAM에 들어가나요?',
            a: '간신히 들어갑니다. Ollama 다운로드가 5.2 GB이고 여기에 컨텍스트 캐시와 화면 출력용 VRAM이 더해지므로, 컨텍스트가 길어지면 레이어가 CPU로 밀려납니다. <code>/set parameter num_ctx 2048</code>로 제한하거나 Qwen3.5 4B(3.3 GB)를 쓰세요. <code>ollama ps</code>로 모델이 100% GPU에 있는지 확인할 수 있습니다.',
          },
          {
            q: 'Ministral 8B, Gemma 4, Qwen3.5 9B는 6 GB에 들어가나요?',
            a: '기본 양자화로는 들어가지 않습니다. Ollama에서 Ministral 3 8B는 6.0 GB, Qwen3.5 9B Q4_K_M은 6.6 GB, Gemma 4 E4B는 6.1~6.6 GB로, 모두 컨텍스트 이전에 6 GB를 넘습니다. 더 작은 Gemma 4 E2B QAT(<code>gemma4:e2b-it-qat</code>, 4.3 GB)는 들어갑니다.',
          },
          {
            q: '6 GB VRAM에 가장 좋은 코딩 모델은 무엇인가요?',
            a: 'Qwen3.5 4B Q4_K_M으로 시작하세요. 에디터의 코드 완성에는 코드 특화 Qwen2.5-Coder 7B Q4_K_M(4.7 GB)이나 Qwen2.5-Coder 3B(1.9 GB)가 있습니다. LM Studio는 같은 GGUF 파일을 불러오고, Aider는 <code>ollama_chat/</code> 접두사로 Ollama 모델을 사용할 수 있습니다.',
          },
          {
            q: '어떤 GPU가 6 GB VRAM인가요?',
            a: 'GTX 1060 6 GB, GTX 1660 Super, RTX 2060(6 GB 버전), RTX 3050 6 GB, RTX 3060 Laptop, RTX 4050 Laptop입니다. RTX 4050은 노트북용 GPU로만 존재합니다.',
          },
          {
            q: 'VRAM이 아니라 시스템 RAM이 6 GB라면요?',
            a: '시스템 RAM에서는 모델이 CPU로 실행되어 더 느리고, 운영체제도 이미 일부를 사용합니다. Qwen3.5 2B Q4_K_M(<code>qwen3.5:2b</code>, 1.9 GB) 같은 1~2B 모델을 쓰고 컨텍스트를 짧게 유지하세요.',
          },
          {
            q: '6 GB VRAM에서 13B나 14B 모델을 실행할 수 있나요?',
            a: '아니요. Phi-4(14B)의 Q4_K_M은 약 9 GB가 필요하므로 14B 모델에는 12 GB가 현실적인 최소치입니다. <a href="/ko/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12 GB용 최고의 Ollama 모델</a>을 참고하세요.',
          },
          {
            q: '6 GB VRAM으로 이미지 생성도 할 수 있나요?',
            a: 'Stable Diffusion 1.5는 6 GB에서 실행됩니다. SDXL은 6 GB에서 메모리 절약 모드가 필요하고 느리며, 8 GB가 더 쾌적합니다. LLM과 이미지 모델을 동시에 올려두지 말고 하나를 먼저 내리세요.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[2 GB RAM으로 RAG를 실행할 수 있습니까?](/ko/prompt-bites/can-you-run-rag-on-2gb-ram) -- RAG on low RAM',
          '[6 GB VRAM용 최적 양자화](/ko/prompt-bites/best-quantization-6gb-vram) -- Q4_K_M vs Q5_K_M',
          '[16 GB RAM 노트북용 최고의 로컬 LLM](/ko/prompt-bites/best-local-llm-16gb-ram-laptop) -- 노트북 등급',
        ],
      },
    },
  },
}
