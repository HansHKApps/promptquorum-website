import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Ollama Models for 4 GB VRAM?',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-en.webp',
    seoTitle: 'Best Ollama Models Under 4 GB VRAM (2026)',
    metaDescription: 'Phi-4 Mini and Qwen3 4B (2.5 GB each), Qwen3.5 2B (1.9 GB) and Gemma 3 1B (0.8 GB) fit in 4 GB VRAM. Llama 3.1 8B (4.9 GB) does not. Includes 4-bit tags.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: ['Phi-4 Mini', 'Qwen3 4B', 'Llama 3.2 3B', 'Qwen3.5 2B', 'Qwen3 1.7B', 'Gemma 3 1B', 'Gemma 4 E2B'],
    current_hardware_mentioned: ['RTX 3050 4 GB', 'GTX 1650 Super 4 GB', 'RX 6500 XT 4 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 4 GB VRAM GPUs running local LLMs',
    parentArticle: '/local-llms/fastest-local-llms-low-end-pcs',
    siblingBites: ['best-local-llm-6gb-vram', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for 4 GB VRAM?',
        answer: '4 GB VRAM fits models up to about 4 billion parameters at 4-bit quantization: Phi-4 Mini and Qwen3 4B (~2.5 GB each), Llama 3.2 3B (~2.0 GB), Qwen3.5 2B (~1.9 GB) and Gemma 3 1B (~0.8 GB). Llama 3.1 8B (~4.9 GB) does not fit.',
        bullets: [
          'Phi-4 Mini and Qwen3 4B: largest models with headroom (2.5 GB each)',
          'Qwen3.5 2B: newest family, text and image input (1.9 GB at q4_K_M)',
          'Gemma 3 1B: smallest option (0.8 GB)',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Beste Ollama-Modelle für 4 GB VRAM?',
        answer: 'In 4 GB VRAM passen Modelle bis etwa 4 Milliarden Parameter bei 4-Bit-Quantisierung: Phi-4 Mini und Qwen3 4B (je ~2,5 GB), Llama 3.2 3B (~2,0 GB), Qwen3.5 2B (~1,9 GB) und Gemma 3 1B (~0,8 GB). Llama 3.1 8B (~4,9 GB) passt nicht.',
        bullets: [
          'Phi-4 Mini und Qwen3 4B: größte Modelle mit Reserve (je 2,5 GB)',
          'Qwen3.5 2B: neueste Familie, Text- und Bildeingabe (1,9 GB bei q4_K_M)',
          'Gemma 3 1B: kleinste Option (0,8 GB)',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Meilleurs modèles Ollama pour 4 Go de VRAM ?',
        answer: '4 Go de VRAM accueillent des modèles jusqu\'à environ 4 milliards de paramètres en quantification 4 bits : Phi-4 Mini et Qwen3 4B (~2,5 Go chacun), Llama 3.2 3B (~2,0 Go), Qwen3.5 2B (~1,9 Go) et Gemma 3 1B (~0,8 Go). Llama 3.1 8B (~4,9 Go) ne rentre pas.',
        bullets: [
          'Phi-4 Mini et Qwen3 4B : les plus grands modèles avec de la marge (2,5 Go chacun)',
          'Qwen3.5 2B : famille la plus récente, texte et image (1,9 Go en q4_K_M)',
          'Gemma 3 1B : l\'option la plus petite (0,8 Go)',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: '4 GB VRAM向け最良Ollamaモデルは？',
        answer: '4 GB VRAMには、4ビット量子化で約40億パラメータまでのモデルが収まります。Phi-4 MiniとQwen3 4B（各約2.5 GB）、Llama 3.2 3B（約2.0 GB）、Qwen3.5 2B（約1.9 GB）、Gemma 3 1B（約0.8 GB）です。Llama 3.1 8B（約4.9 GB）は収まりません。',
        bullets: [
          'Phi-4 MiniとQwen3 4B: 余裕を残せる最大クラス（各2.5 GB）',
          'Qwen3.5 2B: 最新ファミリー、テキストと画像入力（q4_K_Mで1.9 GB）',
          'Gemma 3 1B: 最小の選択肢（0.8 GB）',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: '4 GB显存最佳Ollama模型？',
        answer: '4 GB显存可容纳4位量化下约40亿参数以内的模型：Phi-4 Mini和Qwen3 4B（各约2.5 GB）、Llama 3.2 3B（约2.0 GB）、Qwen3.5 2B（约1.9 GB）和Gemma 3 1B（约0.8 GB）。Llama 3.1 8B（约4.9 GB）放不下。',
        bullets: [
          'Phi-4 Mini和Qwen3 4B：仍留有余量的最大模型（各2.5 GB）',
          'Qwen3.5 2B：最新系列，支持文本和图像输入（q4_K_M为1.9 GB）',
          'Gemma 3 1B：最小的选择（0.8 GB）',
        ],
        updatedDate: '2026-10',
      },
      es: {
        question: '¿Mejores modelos Ollama para 4 GB de VRAM?',
        answer: 'Con 4 GB de VRAM caben modelos de hasta unos 4000 millones de parámetros con cuantización de 4 bits: Phi-4 Mini y Qwen3 4B (~2,5 GB cada uno), Llama 3.2 3B (~2,0 GB), Qwen3.5 2B (~1,9 GB) y Gemma 3 1B (~0,8 GB). Llama 3.1 8B (~4,9 GB) no cabe.',
        bullets: [
          'Phi-4 Mini y Qwen3 4B: los mayores con margen (2,5 GB cada uno)',
          'Qwen3.5 2B: familia más reciente, entrada de texto e imagen (1,9 GB en q4_K_M)',
          'Gemma 3 1B: la opción más pequeña (0,8 GB)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 Mini and Qwen3 4B (2.5 GB each) are the largest models that leave headroom on a 4 GB GPU',
          'Most default Ollama tags are already 4-bit (Q4_K_M); check the download size, not the parameter count',
          'Llama 3.1 8B (4.9 GB) and Gemma 4 E2B (4.6 GB) do not fit',
          'With only 4 GB of system RAM, stay under about 1.5 GB: Qwen3 0.6B, Gemma 3 1B, Llama 3.2 1B',
        ],
      },
      body1: {
        title: 'What Fits in 4 GB VRAM',
        content: [
          '<strong>On a 4 GB GPU, models up to about 4 billion parameters fit at 4-bit quantization, and the Ollama download size is the number to check.</strong> A model needs its file size plus room for the context cache (the KV cache), which grows as the conversation gets longer. As a rule of thumb, keep the file at or below about 3 GB so the whole model stays on the GPU.',
          'Phi-4 Mini and Qwen3 4B are the largest models in the table that leave that headroom, at 2.5 GB each. Qwen3.5 2B is the newest family and accepts images as well as text. Gemma 3 1B and Qwen3 1.7B suit a small file with a long context. File sizes come from the <a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">Ollama model library</a>; speed depends on your GPU, so no tokens-per-second figures are quoted here. Newer generations do not replace them at this size: Qwen3.6 starts at 27B (17 GB), and no Gemma 4 download is smaller than 4.3 GB.',
        ],
        columns: ['Model', 'Ollama tag', 'File size', 'Notes'],
        rows: [
          { 'Model': 'Phi-4 Mini', 'Ollama tag': 'phi4-mini', 'File size': '2.5 GB', 'Notes': '3.8B parameters, 128K context' },
          { 'Model': 'Qwen3 4B', 'Ollama tag': 'qwen3:4b', 'File size': '2.5 GB', 'Notes': '4B parameters, thinking mode' },
          { 'Model': 'Llama 3.2 3B', 'Ollama tag': 'llama3.2:3b', 'File size': '2.0 GB', 'Notes': '3B parameters, Llama family' },
          { 'Model': 'Qwen3.5 2B', 'Ollama tag': 'qwen3.5:2b-q4_K_M', 'File size': '1.9 GB', 'Notes': 'Text and image input' },
          { 'Model': 'Qwen3 1.7B', 'Ollama tag': 'qwen3:1.7b', 'File size': '1.4 GB', 'Notes': 'Leaves most of the VRAM free' },
          { 'Model': 'Gemma 3 1B', 'Ollama tag': 'gemma3:1b', 'File size': '0.8 GB', 'Notes': 'Smallest option in this table' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'On 4 GB of VRAM, Phi-4 Mini (2.5 GB), Qwen3 4B (2.5 GB), Llama 3.2 3B (2.0 GB), Qwen3.5 2B (1.9 GB) and Gemma 3 1B (0.8 GB) fit at 4-bit; Llama 3.1 8B (4.9 GB) does not.' },
          { type: 'plain-terms', text: 'If your GPU has 4 GB, pick a model whose download is about 3 GB or less and start with phi4-mini or qwen3:4b. 8B models need a 6 GB card or more.' },
        ],
      },
      body2: {
        title: 'What Won\'t Fit in 4 GB',
        content: [
          'These models are commonly requested, but their default Ollama downloads are close to or above 4 GB:',
          'A 6 GB card makes 8B models such as Llama 3.1 8B practical. See the <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best local LLMs for 6 GB VRAM</a>. For a full hardware comparison, see <a href="/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">fastest local LLMs for low-end PCs</a>.',
        ],
        items: [
          'Llama 3.1 8B (llama3.1:8b) — 4.9 GB download, no room left for context',
          'Gemma 4 E2B (gemma4:e2b-it-q4_K_M) — 4.6 GB download despite the "2B" name',
          'Gemma 4 E4B (gemma4:e4b-it-q4_K_M) — 6.6 GB download',
          'Qwen3.5 4B (qwen3.5:4b-q4_K_M) and Gemma 3 4B (gemma3:4b) — 3.3 and 3.4 GB; marginal, a long context pushes layers to system RAM',
        ],
      },
      body3: {
        title: 'Which Ollama Models Are 4-Bit?',
        content: [
          '<strong>Most Ollama default tags are already 4-bit: phi4-mini, qwen3:1.7b, gemma3:4b and llama3.1:8b share their file hash with the q4_K_M entry, a 4-bit quantization.</strong> The library page often does not name the quantization on the default tag, so for certainty pull the tag with it in the name, for example ollama run qwen3:4b-q4_K_M.',
          'Not every small model defaults to 4-bit, and the default can be much larger than the 4-bit file:',
        ],
        items: [
          'gemma2:2b — default is q4_0 (1.6 GB)',
          'smollm2:1.7b — default is q8_0 (1.8 GB); the q4_K_M file is 1.1 GB',
          'qwen3.5:2b — default is 2.7 GB; qwen3.5:2b-q4_K_M is 1.9 GB',
          'llama3.2:1b — default matches q8_0 (1.3 GB)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 4 GB VRAM Models',
        faqs: [
          {
            q: 'Is 4 GB VRAM enough for a useful LLM?',
            a: 'Yes, for basic tasks. A 2–4B model such as Phi-4 Mini or Qwen3 4B handles Q&A, short summaries and light coding help. Long documents, multi-step agents and large contexts are limited by the context cache, so 6 GB or more is more comfortable.',
          },
          {
            q: 'Which Ollama model has 4-bit quantization?',
            a: 'Most of them. Default tags such as phi4-mini and gemma3:4b share their hash with the q4_K_M (4-bit) entry. Some defaults differ: smollm2 is q8_0 and gemma2:2b is q4_0. Pull the tag with q4_K_M in its name to be sure.',
          },
          {
            q: 'Can I run Llama 3 on 4 GB VRAM?',
            a: 'Not the 8B model: llama3.1:8b is a 4.9 GB download. Llama 3.2 3B fits at 2.0 GB if you specifically want a Llama variant. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the full VRAM requirements guide</a>.',
          },
          {
            q: 'What GPU has 4 GB VRAM?',
            a: 'The RTX 3050 and 3050 Ti (laptop versions), GTX 1650 Super and AMD RX 6500 XT come with 4 GB. NVIDIA cards need compute capability 5.0 or higher. The RX 6500 XT is not on Ollama\'s ROCm list, so check the <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">Ollama GPU documentation</a> before buying.',
          },
          {
            q: 'Can CPU-only mode bypass the 4 GB VRAM limit?',
            a: 'Partly. When a model is larger than VRAM, Ollama splits its layers between the GPU and system RAM, which still runs but more slowly. With no GPU it runs on the CPU entirely, and speed then depends on your RAM and processor.',
          },
          {
            q: 'What can I run with only 4 GB of system RAM?',
            a: 'As a rule of thumb, stay under about 1.5 GB: qwen3:0.6b (0.5 GB), gemma3:1b (0.8 GB), llama3.2:1b (1.3 GB) or qwen3:1.7b (1.4 GB). The operating system and Ollama need part of the 4 GB, so larger models start swapping to disk.',
          },
          {
            q: 'What are the minimum requirements for Ollama?',
            a: 'There is no single minimum: the requirement is the model\'s file size plus the context cache. The smallest models (Gemma 3 270M at 0.3 GB, Qwen3 0.6B at 0.5 GB) run on almost any machine; 3–4B models want about 3 GB of free VRAM or RAM.',
          },
          {
            q: 'Do Gemma 4 and Qwen3.5 fit in 4 GB?',
            a: 'Qwen3.5 0.8B and 2B fit comfortably, and the 4B (q4_K_M, 3.3 GB) is marginal. Gemma 4 E2B does not fit: its q4_K_M file is 4.6 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best local LLMs for 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram)',
          '[Full VRAM requirements guide](/prompt-bites/how-much-vram-for-local-llm)',
          '[Fastest local LLMs for low-end PCs](/local-llms/fastest-local-llms-low-end-pcs)',
          '[Can you run RAG on 2 GB RAM?](/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Beste Ollama-Modelle für 4 GB VRAM?',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-de.webp',
    seoTitle: 'Beste Ollama-Modelle für 4 GB VRAM (2026)',
    metaDescription: 'Phi-4 Mini und Qwen3 4B (je 2,5 GB), Qwen3.5 2B (1,9 GB) und Gemma 3 1B (0,8 GB) passen in 4 GB VRAM. Llama 3.1 8B (4,9 GB) nicht. Mit 4-Bit-Tags.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 Mini und Qwen3 4B (je 2,5 GB) sind die größten Modelle, die auf einer 4-GB-GPU Reserve lassen',
          'Die meisten Standard-Tags in Ollama sind bereits 4-Bit (Q4_K_M); entscheidend ist die Downloadgröße, nicht die Parameterzahl',
          'Llama 3.1 8B (4,9 GB) und Gemma 4 E2B (4,6 GB) passen nicht',
          'Bei nur 4 GB Arbeitsspeicher: unter etwa 1,5 GB bleiben, etwa Qwen3 0.6B, Gemma 3 1B, Llama 3.2 1B',
        ],
      },
      body1: {
        title: 'Was in 4 GB VRAM passt',
        content: [
          '<strong>Auf einer 4-GB-GPU passen Modelle bis etwa 4 Milliarden Parameter bei 4-Bit-Quantisierung; maßgeblich ist die Ollama-Downloadgröße.</strong> Ein Modell braucht seine Dateigröße plus Platz für den Kontext-Cache (KV-Cache), der mit dem Gesprächsverlauf wächst. Als Faustregel sollte die Datei höchstens etwa 3 GB groß sein, damit das ganze Modell auf der GPU bleibt.',
          'Phi-4 Mini und Qwen3 4B sind mit je 2,5 GB die größten Modelle der Tabelle, die diese Reserve lassen. Qwen3.5 2B ist die neueste Familie und verarbeitet neben Text auch Bilder. Gemma 3 1B und Qwen3 1.7B eignen sich für kleine Dateien mit langem Kontext. Die Dateigrößen stammen aus der <a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">Ollama-Modellbibliothek</a>; die Geschwindigkeit hängt von Ihrer GPU ab, daher nennen wir keine Tokens-pro-Sekunde-Werte. Neuere Generationen ersetzen sie in dieser Größe nicht: Qwen3.6 beginnt bei 27B (17 GB), und kein Gemma-4-Download ist kleiner als 4,3 GB.',
        ],
        columns: ['Modell', 'Ollama-Tag', 'Dateigröße', 'Hinweise'],
        rows: [
          { 'Modell': 'Phi-4 Mini', 'Ollama-Tag': 'phi4-mini', 'Dateigröße': '2,5 GB', 'Hinweise': '3,8 Mrd. Parameter, 128K Kontext' },
          { 'Modell': 'Qwen3 4B', 'Ollama-Tag': 'qwen3:4b', 'Dateigröße': '2,5 GB', 'Hinweise': '4 Mrd. Parameter, Denkmodus' },
          { 'Modell': 'Llama 3.2 3B', 'Ollama-Tag': 'llama3.2:3b', 'Dateigröße': '2,0 GB', 'Hinweise': '3 Mrd. Parameter, Llama-Familie' },
          { 'Modell': 'Qwen3.5 2B', 'Ollama-Tag': 'qwen3.5:2b-q4_K_M', 'Dateigröße': '1,9 GB', 'Hinweise': 'Text- und Bildeingabe' },
          { 'Modell': 'Qwen3 1.7B', 'Ollama-Tag': 'qwen3:1.7b', 'Dateigröße': '1,4 GB', 'Hinweise': 'Lässt den Großteil des VRAM frei' },
          { 'Modell': 'Gemma 3 1B', 'Ollama-Tag': 'gemma3:1b', 'Dateigröße': '0,8 GB', 'Hinweise': 'Kleinste Option in dieser Tabelle' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mit 4 GB VRAM passen Phi-4 Mini (2,5 GB), Qwen3 4B (2,5 GB), Llama 3.2 3B (2,0 GB), Qwen3.5 2B (1,9 GB) und Gemma 3 1B (0,8 GB) in 4-Bit; Llama 3.1 8B (4,9 GB) passt nicht.' },
          { type: 'plain-terms', text: 'Hat Ihre GPU 4 GB, wählen Sie ein Modell mit etwa 3 GB Download oder weniger und beginnen Sie mit phi4-mini oder qwen3:4b. 8B-Modelle brauchen eine Karte mit 6 GB oder mehr.' },
        ],
      },
      body2: {
        title: 'Was nicht in 4 GB passt',
        content: [
          'Diese Modelle werden häufig angefragt, ihr Standard-Download bei Ollama liegt aber nahe an oder über 4 GB:',
          'Eine 6-GB-Karte macht 8B-Modelle wie Llama 3.1 8B praktikabel. Siehe <a href="/de/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">beste lokale LLMs für 6 GB VRAM</a>. Für einen vollständigen Hardware-Vergleich siehe <a href="/de/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">schnellste lokale LLMs für Low-End-PCs</a>.',
        ],
        items: [
          'Llama 3.1 8B (llama3.1:8b) — 4,9 GB Download, kein Platz mehr für den Kontext',
          'Gemma 4 E2B (gemma4:e2b-it-q4_K_M) — 4,6 GB Download trotz „2B“ im Namen',
          'Gemma 4 E4B (gemma4:e4b-it-q4_K_M) — 6,6 GB Download',
          'Qwen3.5 4B (qwen3.5:4b-q4_K_M) und Gemma 3 4B (gemma3:4b) — 3,3 und 3,4 GB; grenzwertig, ein langer Kontext verlagert Schichten in den Arbeitsspeicher',
        ],
      },
      body3: {
        title: 'Welche Ollama-Modelle sind 4-Bit?',
        content: [
          '<strong>Die meisten Standard-Tags bei Ollama sind bereits 4-Bit: phi4-mini, qwen3:1.7b, gemma3:4b und llama3.1:8b haben denselben Datei-Hash wie der Eintrag q4_K_M, eine 4-Bit-Quantisierung.</strong> Die Bibliotheksseite nennt die Quantisierung beim Standard-Tag oft nicht; für Gewissheit laden Sie den Tag mit der Quantisierung im Namen, zum Beispiel ollama run qwen3:4b-q4_K_M.',
          'Nicht jedes kleine Modell nutzt standardmäßig 4-Bit, und der Standard kann deutlich größer sein als die 4-Bit-Datei:',
        ],
        items: [
          'gemma2:2b — Standard ist q4_0 (1,6 GB)',
          'smollm2:1.7b — Standard ist q8_0 (1,8 GB); die q4_K_M-Datei hat 1,1 GB',
          'qwen3.5:2b — Standard hat 2,7 GB; qwen3.5:2b-q4_K_M hat 1,9 GB',
          'llama3.2:1b — Standard entspricht q8_0 (1,3 GB)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu 4-GB-VRAM-Modellen',
        faqs: [
          {
            q: 'Reichen 4 GB VRAM für ein nützliches LLM?',
            a: 'Ja, für grundlegende Aufgaben. Ein Modell mit 2–4 Mrd. Parametern wie Phi-4 Mini oder Qwen3 4B bewältigt Q&A, kurze Zusammenfassungen und leichte Coding-Hilfe. Lange Dokumente, mehrstufige Agenten und große Kontexte werden vom Kontext-Cache begrenzt; 6 GB oder mehr sind komfortabler.',
          },
          {
            q: 'Welches Ollama-Modell hat 4-Bit-Quantisierung?',
            a: 'Die meisten. Standard-Tags wie phi4-mini und gemma3:4b haben denselben Hash wie der Eintrag q4_K_M (4-Bit). Einige Standards weichen ab: smollm2 ist q8_0, gemma2:2b ist q4_0. Laden Sie den Tag mit q4_K_M im Namen, um sicherzugehen.',
          },
          {
            q: 'Kann ich Llama 3 mit 4 GB VRAM ausführen?',
            a: 'Das 8B-Modell nicht: llama3.1:8b ist ein Download von 4,9 GB. Llama 3.2 3B passt mit 2,0 GB, wenn es unbedingt eine Llama-Variante sein soll. Siehe <a href="/de/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">den vollständigen Leitfaden zum VRAM-Bedarf</a>.',
          },
          {
            q: 'Welche GPU hat 4 GB VRAM?',
            a: 'RTX 3050 und 3050 Ti (Notebook-Versionen), GTX 1650 Super und AMD RX 6500 XT haben 4 GB. NVIDIA-Karten brauchen Compute Capability 5.0 oder höher. Die RX 6500 XT steht nicht auf Ollamas ROCm-Liste; prüfen Sie vor dem Kauf die <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">Ollama-GPU-Dokumentation</a>.',
          },
          {
            q: 'Kann der CPU-Modus das 4-GB-VRAM-Limit umgehen?',
            a: 'Teilweise. Ist ein Modell größer als der VRAM, teilt Ollama die Schichten zwischen GPU und Arbeitsspeicher auf; das läuft, aber langsamer. Ohne GPU läuft alles auf der CPU, und die Geschwindigkeit hängt von RAM und Prozessor ab.',
          },
          {
            q: 'Was läuft mit nur 4 GB Arbeitsspeicher?',
            a: 'Als Faustregel unter etwa 1,5 GB bleiben: qwen3:0.6b (0,5 GB), gemma3:1b (0,8 GB), llama3.2:1b (1,3 GB) oder qwen3:1.7b (1,4 GB). Betriebssystem und Ollama brauchen einen Teil der 4 GB, größere Modelle beginnen daher, auf die Festplatte auszulagern.',
          },
          {
            q: 'Was sind die Mindestanforderungen für Ollama?',
            a: 'Es gibt kein festes Minimum: Maßgeblich sind die Dateigröße des Modells plus der Kontext-Cache. Die kleinsten Modelle (Gemma 3 270M mit 0,3 GB, Qwen3 0.6B mit 0,5 GB) laufen auf fast jedem Rechner; Modelle mit 3–4 Mrd. Parametern brauchen etwa 3 GB freien VRAM oder RAM.',
          },
          {
            q: 'Passen Gemma 4 und Qwen3.5 in 4 GB?',
            a: 'Qwen3.5 0.8B und 2B passen bequem, die 4B-Version (q4_K_M, 3,3 GB) ist grenzwertig. Gemma 4 E2B passt nicht: Die q4_K_M-Datei hat 4,6 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Beste lokale LLMs für 6 GB VRAM](/de/prompt-bites/best-local-llm-6gb-vram)',
          '[Vollständiger Leitfaden zum VRAM-Bedarf](/de/prompt-bites/how-much-vram-for-local-llm)',
          '[Schnellste lokale LLMs für Low-End-PCs](/de/local-llms/fastest-local-llms-low-end-pcs)',
          '[Kann man RAG mit 2 GB RAM ausführen?](/de/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Meilleurs modèles Ollama pour 4 Go de VRAM ?',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-fr.webp',
    seoTitle: 'Meilleurs modèles Ollama 4 Go VRAM (2026)',
    metaDescription: 'Phi-4 Mini et Qwen3 4B (2,5 Go chacun), Qwen3.5 2B (1,9 Go) et Gemma 3 1B (0,8 Go) tiennent dans 4 Go de VRAM. Pas Llama 3.1 8B (4,9 Go).',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 Mini et Qwen3 4B (2,5 Go chacun) sont les plus grands modèles qui laissent de la marge sur un GPU de 4 Go',
          'La plupart des tags Ollama par défaut sont déjà en 4 bits (Q4_K_M) ; vérifiez la taille du téléchargement, pas le nombre de paramètres',
          'Llama 3.1 8B (4,9 Go) et Gemma 4 E2B (4,6 Go) ne rentrent pas',
          'Avec seulement 4 Go de RAM système, restez sous environ 1,5 Go : Qwen3 0.6B, Gemma 3 1B, Llama 3.2 1B',
        ],
      },
      body1: {
        title: 'Ce qui tient dans 4 Go de VRAM',
        content: [
          '<strong>Sur un GPU de 4 Go, les modèles jusqu\'à environ 4 milliards de paramètres tiennent en quantification 4 bits, et la taille du téléchargement Ollama est le chiffre à vérifier.</strong> Un modèle exige sa taille de fichier plus de la place pour le cache de contexte (cache KV), qui grandit avec la conversation. En règle générale, gardez le fichier à environ 3 Go au plus pour que tout le modèle reste sur le GPU.',
          'Phi-4 Mini et Qwen3 4B sont les plus grands modèles du tableau à laisser cette marge, avec 2,5 Go chacun. Qwen3.5 2B est la famille la plus récente et accepte les images en plus du texte. Gemma 3 1B et Qwen3 1.7B conviennent pour un petit fichier et un long contexte. Les tailles proviennent de la <a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">bibliothèque de modèles Ollama</a> ; la vitesse dépend de votre GPU, aucun chiffre de tokens par seconde n\'est donc cité. Les générations plus récentes ne les remplacent pas à cette taille : Qwen3.6 commence à 27B (17 Go) et aucun téléchargement Gemma 4 ne fait moins de 4,3 Go.',
        ],
        columns: ['Modèle', 'Tag Ollama', 'Taille', 'Remarques'],
        rows: [
          { 'Modèle': 'Phi-4 Mini', 'Tag Ollama': 'phi4-mini', 'Taille': '2,5 Go', 'Remarques': '3,8 Md de paramètres, contexte 128K' },
          { 'Modèle': 'Qwen3 4B', 'Tag Ollama': 'qwen3:4b', 'Taille': '2,5 Go', 'Remarques': '4 Md de paramètres, mode réflexion' },
          { 'Modèle': 'Llama 3.2 3B', 'Tag Ollama': 'llama3.2:3b', 'Taille': '2,0 Go', 'Remarques': '3 Md de paramètres, famille Llama' },
          { 'Modèle': 'Qwen3.5 2B', 'Tag Ollama': 'qwen3.5:2b-q4_K_M', 'Taille': '1,9 Go', 'Remarques': 'Entrée texte et image' },
          { 'Modèle': 'Qwen3 1.7B', 'Tag Ollama': 'qwen3:1.7b', 'Taille': '1,4 Go', 'Remarques': 'Laisse l\'essentiel de la VRAM libre' },
          { 'Modèle': 'Gemma 3 1B', 'Tag Ollama': 'gemma3:1b', 'Taille': '0,8 Go', 'Remarques': 'Option la plus petite du tableau' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Avec 4 Go de VRAM, Phi-4 Mini (2,5 Go), Qwen3 4B (2,5 Go), Llama 3.2 3B (2,0 Go), Qwen3.5 2B (1,9 Go) et Gemma 3 1B (0,8 Go) tiennent en 4 bits ; Llama 3.1 8B (4,9 Go) non.' },
          { type: 'plain-terms', text: 'Si votre GPU a 4 Go, choisissez un modèle dont le téléchargement fait environ 3 Go ou moins et commencez par phi4-mini ou qwen3:4b. Les modèles 8B demandent une carte de 6 Go ou plus.' },
        ],
      },
      body2: {
        title: 'Ce qui ne tient pas dans 4 Go',
        content: [
          'Ces modèles sont souvent demandés, mais leur téléchargement Ollama par défaut approche ou dépasse 4 Go :',
          'Une carte de 6 Go rend les modèles 8B comme Llama 3.1 8B praticables. Voir les <a href="/fr/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">meilleurs LLM locaux pour 6 Go de VRAM</a>. Pour une comparaison matérielle complète, voir les <a href="/fr/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">LLM locaux les plus rapides pour PC d\'entrée de gamme</a>.',
        ],
        items: [
          'Llama 3.1 8B (llama3.1:8b) — 4,9 Go de téléchargement, plus de place pour le contexte',
          'Gemma 4 E2B (gemma4:e2b-it-q4_K_M) — 4,6 Go malgré le « 2B » du nom',
          'Gemma 4 E4B (gemma4:e4b-it-q4_K_M) — 6,6 Go de téléchargement',
          'Qwen3.5 4B (qwen3.5:4b-q4_K_M) et Gemma 3 4B (gemma3:4b) — 3,3 et 3,4 Go ; limite, un long contexte déporte des couches vers la RAM système',
        ],
      },
      body3: {
        title: 'Quels modèles Ollama sont en 4 bits ?',
        content: [
          '<strong>La plupart des tags Ollama par défaut sont déjà en 4 bits : phi4-mini, qwen3:1.7b, gemma3:4b et llama3.1:8b partagent leur empreinte avec l\'entrée q4_K_M, une quantification 4 bits.</strong> La page de la bibliothèque ne nomme souvent pas la quantification du tag par défaut ; pour être sûr, téléchargez le tag qui la contient, par exemple ollama run qwen3:4b-q4_K_M.',
          'Tous les petits modèles ne sont pas en 4 bits par défaut, et le défaut peut être bien plus lourd que le fichier 4 bits :',
        ],
        items: [
          'gemma2:2b — par défaut q4_0 (1,6 Go)',
          'smollm2:1.7b — par défaut q8_0 (1,8 Go) ; le fichier q4_K_M fait 1,1 Go',
          'qwen3.5:2b — par défaut 2,7 Go ; qwen3.5:2b-q4_K_M fait 1,9 Go',
          'llama3.2:1b — le défaut correspond à q8_0 (1,3 Go)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles pour 4 Go de VRAM',
        faqs: [
          {
            q: '4 Go de VRAM suffisent-ils pour un LLM utile ?',
            a: 'Oui, pour les tâches de base. Un modèle de 2 à 4 Md de paramètres comme Phi-4 Mini ou Qwen3 4B gère les questions-réponses, les résumés courts et une aide légère au code. Documents longs, agents multi-étapes et grands contextes sont limités par le cache de contexte ; 6 Go ou plus sont plus confortables.',
          },
          {
            q: 'Quel modèle Ollama est en quantification 4 bits ?',
            a: 'La plupart. Les tags par défaut comme phi4-mini et gemma3:4b partagent leur empreinte avec l\'entrée q4_K_M (4 bits). Certains défauts diffèrent : smollm2 est en q8_0, gemma2:2b en q4_0. Téléchargez le tag avec q4_K_M dans le nom pour en être sûr.',
          },
          {
            q: 'Puis-je exécuter Llama 3 avec 4 Go de VRAM ?',
            a: 'Pas le modèle 8B : llama3.1:8b pèse 4,9 Go. Llama 3.2 3B tient en 2,0 Go si vous voulez une variante Llama. Voir <a href="/fr/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">le guide complet des besoins en VRAM</a>.',
          },
          {
            q: 'Quels GPU ont 4 Go de VRAM ?',
            a: 'Les RTX 3050 et 3050 Ti (versions portables), GTX 1650 Super et AMD RX 6500 XT ont 4 Go. Les cartes NVIDIA exigent une compute capability de 5.0 ou plus. La RX 6500 XT ne figure pas sur la liste ROCm d\'Ollama ; consultez la <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">documentation GPU d\'Ollama</a> avant d\'acheter.',
          },
          {
            q: 'Le mode CPU seul contourne-t-il la limite de 4 Go de VRAM ?',
            a: 'En partie. Quand un modèle dépasse la VRAM, Ollama répartit ses couches entre le GPU et la RAM système ; cela fonctionne, mais plus lentement. Sans GPU, tout tourne sur le CPU et la vitesse dépend de la RAM et du processeur.',
          },
          {
            q: 'Que lancer avec seulement 4 Go de RAM système ?',
            a: 'En règle générale, restez sous environ 1,5 Go : qwen3:0.6b (0,5 Go), gemma3:1b (0,8 Go), llama3.2:1b (1,3 Go) ou qwen3:1.7b (1,4 Go). Le système et Ollama occupent une partie des 4 Go ; les modèles plus gros commencent à swapper sur le disque.',
          },
          {
            q: 'Quelle est la configuration minimale d\'Ollama ?',
            a: 'Il n\'y a pas de minimum unique : il faut la taille de fichier du modèle plus le cache de contexte. Les plus petits modèles (Gemma 3 270M à 0,3 Go, Qwen3 0.6B à 0,5 Go) tournent sur presque toute machine ; les modèles de 3 à 4 Md de paramètres demandent environ 3 Go de VRAM ou RAM libre.',
          },
          {
            q: 'Gemma 4 et Qwen3.5 tiennent-ils dans 4 Go ?',
            a: 'Qwen3.5 0.8B et 2B tiennent confortablement, la version 4B (q4_K_M, 3,3 Go) est limite. Gemma 4 E2B ne tient pas : son fichier q4_K_M fait 4,6 Go.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Meilleurs LLM locaux pour 6 Go de VRAM](/fr/prompt-bites/best-local-llm-6gb-vram)',
          '[Guide complet des besoins en VRAM](/fr/prompt-bites/how-much-vram-for-local-llm)',
          '[LLM locaux les plus rapides pour PC d\'entrée de gamme](/fr/local-llms/fastest-local-llms-low-end-pcs)',
          '[Peut-on exécuter du RAG avec 2 Go de RAM ?](/fr/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '4 GB VRAM向け最良Ollamaモデルは？',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-ja.webp',
    seoTitle: '4 GB VRAMで動くOllamaモデル一覧（2026）',
    metaDescription: '4 GB VRAMにはPhi-4 MiniとQwen3 4B（各2.5 GB）、Qwen3.5 2B（1.9 GB）、Gemma 3 1B（0.8 GB）が収まります。Llama 3.1 8B（4.9 GB）は不可。',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 MiniとQwen3 4B（各2.5 GB）は、4 GB GPUで余裕を残せる最大のモデルです',
          'Ollamaの既定タグの多くはすでに4ビット（Q4_K_M）です。パラメータ数ではなくダウンロードサイズを確認してください',
          'Llama 3.1 8B（4.9 GB）とGemma 4 E2B（4.6 GB）は収まりません',
          'システムRAMが4 GBだけの場合は約1.5 GB未満に抑えます（Qwen3 0.6B、Gemma 3 1B、Llama 3.2 1B）',
        ],
      },
      body1: {
        title: '4 GB VRAMに収まるモデル',
        content: [
          '<strong>4 GB GPUでは、4ビット量子化で約40億パラメータまでのモデルが収まり、確認すべき数値はOllamaのダウンロードサイズです。</strong>モデルにはファイルサイズに加え、会話が長くなるほど増えるコンテキストキャッシュ（KVキャッシュ）の余裕が必要です。目安として、モデル全体をGPUに載せるにはファイルを約3 GB以下に抑えます。',
          'Phi-4 MiniとQwen3 4Bは、表の中でこの余裕を残せる最大のモデルで、各2.5 GBです。Qwen3.5 2Bは最新ファミリーで、テキストに加えて画像も扱えます。Gemma 3 1BとQwen3 1.7Bは、小さなファイルで長いコンテキストを使いたい場合に向きます。ファイルサイズは<a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">Ollamaモデルライブラリ</a>によるものです。速度はGPUに依存するため、トークン毎秒の数値は掲載していません。この容量帯では新世代が代わりにならない点にも注意が必要です。Qwen3.6は27B（17 GB）からで、Gemma 4には4.3 GB未満のダウンロードがありません。',
        ],
        columns: ['モデル', 'Ollamaタグ', 'サイズ', '備考'],
        rows: [
          { 'モデル': 'Phi-4 Mini', 'Ollamaタグ': 'phi4-mini', 'サイズ': '2.5 GB', '備考': '38億パラメータ、128Kコンテキスト' },
          { 'モデル': 'Qwen3 4B', 'Ollamaタグ': 'qwen3:4b', 'サイズ': '2.5 GB', '備考': '40億パラメータ、思考モード' },
          { 'モデル': 'Llama 3.2 3B', 'Ollamaタグ': 'llama3.2:3b', 'サイズ': '2.0 GB', '備考': '30億パラメータ、Llamaファミリー' },
          { 'モデル': 'Qwen3.5 2B', 'Ollamaタグ': 'qwen3.5:2b-q4_K_M', 'サイズ': '1.9 GB', '備考': 'テキストと画像入力' },
          { 'モデル': 'Qwen3 1.7B', 'Ollamaタグ': 'qwen3:1.7b', 'サイズ': '1.4 GB', '備考': 'VRAMの大半を空けられる' },
          { 'モデル': 'Gemma 3 1B', 'Ollamaタグ': 'gemma3:1b', 'サイズ': '0.8 GB', '備考': 'この表で最小の選択肢' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '4 GB VRAMには、Phi-4 Mini（2.5 GB）、Qwen3 4B（2.5 GB）、Llama 3.2 3B（2.0 GB）、Qwen3.5 2B（1.9 GB）、Gemma 3 1B（0.8 GB）が4ビットで収まりますが、Llama 3.1 8B（4.9 GB）は収まりません。' },
          { type: 'plain-terms', text: 'GPUが4 GBなら、ダウンロードが約3 GB以下のモデルを選び、まずphi4-miniかqwen3:4bから始めてください。8Bモデルには6 GB以上のカードが必要です。' },
        ],
      },
      body2: {
        title: '4 GBに収まらないモデル',
        content: [
          '次のモデルはよく求められますが、Ollamaの既定のダウンロードが4 GB前後かそれ以上です。',
          '6 GBのカードがあれば、Llama 3.1 8Bのような8Bモデルが現実的になります。<a href="/ja/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB VRAM向けローカルLLM</a>を参照してください。ハードウェアの総合比較は<a href="/ja/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">低スペックPC向け高速ローカルLLM</a>を参照してください。',
        ],
        items: [
          'Llama 3.1 8B（llama3.1:8b）— ダウンロード4.9 GB、コンテキスト用の余地なし',
          'Gemma 4 E2B（gemma4:e2b-it-q4_K_M）— 名前に「2B」とあってもダウンロード4.6 GB',
          'Gemma 4 E4B（gemma4:e4b-it-q4_K_M）— ダウンロード6.6 GB',
          'Qwen3.5 4B（qwen3.5:4b-q4_K_M）とGemma 3 4B（gemma3:4b）— 3.3 GBと3.4 GB。ぎりぎりで、長いコンテキストでは一部の層がシステムRAMに移ります',
        ],
      },
      body3: {
        title: '4ビットのOllamaモデルはどれか',
        content: [
          '<strong>Ollamaの既定タグの多くはすでに4ビットです。phi4-mini、qwen3:1.7b、gemma3:4b、llama3.1:8bは、4ビット量子化であるq4_K_Mと同じファイルハッシュを持ちます。</strong>ライブラリのページでは既定タグの量子化が明記されないことが多いため、確実にするには量子化名入りのタグを取得します（例: ollama run qwen3:4b-q4_K_M）。',
          'すべての小型モデルが既定で4ビットとは限らず、既定が4ビット版よりかなり大きいこともあります。',
        ],
        items: [
          'gemma2:2b — 既定はq4_0（1.6 GB）',
          'smollm2:1.7b — 既定はq8_0（1.8 GB）。q4_K_Mは1.1 GB',
          'qwen3.5:2b — 既定は2.7 GB。qwen3.5:2b-q4_K_Mは1.9 GB',
          'llama3.2:1b — 既定はq8_0相当（1.3 GB）',
        ],
      },
      faq: {
        id: 'faq',
        title: '4 GB VRAMモデルに関するよくある質問',
        faqs: [
          {
            q: '4 GB VRAMで実用的なLLMを動かせますか？',
            a: 'はい、基本的な用途なら可能です。Phi-4 MiniやQwen3 4Bのような20〜40億パラメータのモデルで、質疑応答、短い要約、軽いコーディング支援をこなせます。長い文書、多段階エージェント、大きなコンテキストはコンテキストキャッシュが制約になるため、6 GB以上のほうが快適です。',
          },
          {
            q: '4ビット量子化のOllamaモデルはどれですか？',
            a: 'ほとんどです。phi4-miniやgemma3:4bなどの既定タグは、q4_K_M（4ビット）と同じハッシュを持ちます。例外もあり、smollm2はq8_0、gemma2:2bはq4_0です。確実にするにはq4_K_M入りのタグを取得してください。',
          },
          {
            q: '4 GB VRAMでLlama 3を動かせますか？',
            a: '8Bモデルは無理です。llama3.1:8bのダウンロードは4.9 GBあります。Llamaにこだわるなら、Llama 3.2 3Bが2.0 GBで収まります。<a href="/ja/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM要件の完全ガイド</a>を参照してください。',
          },
          {
            q: '4 GB VRAMのGPUはどれですか？',
            a: 'RTX 3050と3050 Ti（ノートPC版）、GTX 1650 Super、AMD RX 6500 XTが4 GBです。NVIDIAカードはcompute capability 5.0以上が必要です。RX 6500 XTはOllamaのROCm対応リストに載っていないため、購入前に<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">OllamaのGPUドキュメント</a>を確認してください。',
          },
          {
            q: 'CPUのみのモードで4 GB VRAMの制限を回避できますか？',
            a: '部分的に可能です。モデルがVRAMより大きい場合、OllamaはGPUとシステムRAMに層を分割して動かしますが、速度は落ちます。GPUなしならすべてCPUで動き、速度はRAMとプロセッサ次第です。',
          },
          {
            q: 'システムRAMが4 GBだけでも動くモデルは？',
            a: '目安は約1.5 GB未満です。qwen3:0.6b（0.5 GB）、gemma3:1b（0.8 GB）、llama3.2:1b（1.3 GB）、qwen3:1.7b（1.4 GB）などです。OSとOllamaが4 GBの一部を使うため、これより大きいモデルはディスクへのスワップが始まります。',
          },
          {
            q: 'Ollamaの最小要件は？',
            a: '固定の最小値はなく、モデルのファイルサイズとコンテキストキャッシュが必要量になります。最小クラス（Gemma 3 270Mは0.3 GB、Qwen3 0.6Bは0.5 GB）はほぼどのマシンでも動き、30〜40億パラメータのモデルは約3 GBの空きVRAMまたはRAMが目安です。',
          },
          {
            q: 'Gemma 4とQwen3.5は4 GBに収まりますか？',
            a: 'Qwen3.5 0.8Bと2Bは余裕で収まり、4B（q4_K_M、3.3 GB）はぎりぎりです。Gemma 4 E2Bはq4_K_Mのファイルが4.6 GBで、収まりません。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[6 GB VRAM向けローカルLLM](/ja/prompt-bites/best-local-llm-6gb-vram)',
          '[VRAM要件の完全ガイド](/ja/prompt-bites/how-much-vram-for-local-llm)',
          '[低スペックPC向け高速ローカルLLM](/ja/local-llms/fastest-local-llms-low-end-pcs)',
          '[2 GB RAMでRAGを動かせますか？](/ja/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '4 GB显存最佳Ollama模型？',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-zh.webp',
    seoTitle: '4 GB显存可用的Ollama模型推荐（2026）',
    metaDescription: '4 GB显存可运行Phi-4 Mini和Qwen3 4B（各2.5 GB）、Qwen3.5 2B（1.9 GB）、Gemma 3 1B（0.8 GB）；Llama 3.1 8B（4.9 GB）放不下。含4位量化标签。',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 Mini和Qwen3 4B（各2.5 GB）是4 GB显卡上仍留有余量的最大模型',
          'Ollama的大多数默认标签已是4位（Q4_K_M）；应看下载大小，而不是参数量',
          'Llama 3.1 8B（4.9 GB）和Gemma 4 E2B（4.6 GB）放不下',
          '系统内存只有4 GB时，请控制在约1.5 GB以内：Qwen3 0.6B、Gemma 3 1B、Llama 3.2 1B',
        ],
      },
      body1: {
        title: '4 GB显存能容纳的模型',
        content: [
          '<strong>在4 GB显卡上，4位量化下约40亿参数以内的模型可以放下，需要核对的数字是Ollama的下载大小。</strong>模型除文件大小外，还需要为上下文缓存（KV缓存）留出空间，缓存会随对话变长而增长。经验法则是文件不超过约3 GB，这样整个模型才能留在GPU上。',
          'Phi-4 Mini和Qwen3 4B是表中仍能留出这一余量的最大模型，各2.5 GB。Qwen3.5 2B是最新系列，除文本外还支持图像。Gemma 3 1B和Qwen3 1.7B适合文件小、上下文长的需求。文件大小来自<a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">Ollama模型库</a>；速度取决于你的GPU，因此这里不列出每秒token数。新一代模型在这个体量上也无法替代它们：Qwen3.6从27B（17 GB）起步，Gemma 4的下载都不小于4.3 GB。',
        ],
        columns: ['模型', 'Ollama标签', '文件大小', '说明'],
        rows: [
          { '模型': 'Phi-4 Mini', 'Ollama标签': 'phi4-mini', '文件大小': '2.5 GB', '说明': '38亿参数，128K上下文' },
          { '模型': 'Qwen3 4B', 'Ollama标签': 'qwen3:4b', '文件大小': '2.5 GB', '说明': '40亿参数，思考模式' },
          { '模型': 'Llama 3.2 3B', 'Ollama标签': 'llama3.2:3b', '文件大小': '2.0 GB', '说明': '30亿参数，Llama系列' },
          { '模型': 'Qwen3.5 2B', 'Ollama标签': 'qwen3.5:2b-q4_K_M', '文件大小': '1.9 GB', '说明': '支持文本和图像输入' },
          { '模型': 'Qwen3 1.7B', 'Ollama标签': 'qwen3:1.7b', '文件大小': '1.4 GB', '说明': '留出大部分显存' },
          { '模型': 'Gemma 3 1B', 'Ollama标签': 'gemma3:1b', '文件大小': '0.8 GB', '说明': '本表中最小的选择' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '4 GB显存可以运行4位的Phi-4 Mini（2.5 GB）、Qwen3 4B（2.5 GB）、Llama 3.2 3B（2.0 GB）、Qwen3.5 2B（1.9 GB）和Gemma 3 1B（0.8 GB）；Llama 3.1 8B（4.9 GB）放不下。' },
          { type: 'plain-terms', text: '如果你的GPU是4 GB，请选择下载约3 GB或更小的模型，先试phi4-mini或qwen3:4b。8B模型需要6 GB或更大的显卡。' },
        ],
      },
      body2: {
        title: '4 GB放不下的模型',
        content: [
          '以下模型经常被问到，但它们的Ollama默认下载接近或超过4 GB：',
          '6 GB显卡可让Llama 3.1 8B这类8B模型变得实用。参见<a href="/zh/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB显存的最佳本地LLM</a>。完整硬件对比参见<a href="/zh/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">低端电脑上最快的本地LLM</a>。',
        ],
        items: [
          'Llama 3.1 8B（llama3.1:8b）— 下载4.9 GB，没有上下文空间',
          'Gemma 4 E2B（gemma4:e2b-it-q4_K_M）— 名称带“2B”，但下载达4.6 GB',
          'Gemma 4 E4B（gemma4:e4b-it-q4_K_M）— 下载6.6 GB',
          'Qwen3.5 4B（qwen3.5:4b-q4_K_M）和Gemma 3 4B（gemma3:4b）— 3.3 GB和3.4 GB；处于边缘，长上下文会把部分层挤到系统内存',
        ],
      },
      body3: {
        title: '哪些Ollama模型是4位的？',
        content: [
          '<strong>Ollama的大多数默认标签已是4位：phi4-mini、qwen3:1.7b、gemma3:4b和llama3.1:8b与q4_K_M条目的文件哈希相同，q4_K_M即4位量化。</strong>模型库页面通常不标明默认标签的量化方式，想确认可以拉取名称里带量化的标签，例如ollama run qwen3:4b-q4_K_M。',
          '并非所有小模型默认都是4位，默认版本也可能比4位文件大得多：',
        ],
        items: [
          'gemma2:2b — 默认是q4_0（1.6 GB）',
          'smollm2:1.7b — 默认是q8_0（1.8 GB）；q4_K_M文件为1.1 GB',
          'qwen3.5:2b — 默认为2.7 GB；qwen3.5:2b-q4_K_M为1.9 GB',
          'llama3.2:1b — 默认对应q8_0（1.3 GB）',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于4 GB显存模型的快速解答',
        faqs: [
          {
            q: '4 GB显存够运行有用的LLM吗？',
            a: '够用于基础任务。Phi-4 Mini或Qwen3 4B这类20亿至40亿参数的模型可以处理问答、简短摘要和轻量编程辅助。长文档、多步骤智能体和大上下文受上下文缓存限制，6 GB或更多会更从容。',
          },
          {
            q: '哪个Ollama模型是4位量化？',
            a: '大多数都是。phi4-mini和gemma3:4b等默认标签与q4_K_M（4位）条目的哈希相同。也有例外：smollm2默认是q8_0，gemma2:2b默认是q4_0。拉取名称里带q4_K_M的标签即可确保无误。',
          },
          {
            q: '4 GB显存能运行Llama 3吗？',
            a: '8B模型不行：llama3.1:8b下载大小为4.9 GB。如果一定要Llama系列，Llama 3.2 3B只需2.0 GB。参见<a href="/zh/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">完整的显存需求指南</a>。',
          },
          {
            q: '哪些GPU有4 GB显存？',
            a: 'RTX 3050和3050 Ti（笔记本版）、GTX 1650 Super以及AMD RX 6500 XT为4 GB。NVIDIA显卡需要compute capability 5.0或更高。RX 6500 XT不在Ollama的ROCm支持列表中，购买前请查看<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">Ollama GPU文档</a>。',
          },
          {
            q: '纯CPU模式能绕过4 GB显存限制吗？',
            a: '部分可以。模型大于显存时，Ollama会把层拆分到GPU和系统内存，仍能运行但更慢。没有GPU时完全在CPU上运行，速度取决于内存和处理器。',
          },
          {
            q: '系统内存只有4 GB能运行什么？',
            a: '经验法则是控制在约1.5 GB以内：qwen3:0.6b（0.5 GB）、gemma3:1b（0.8 GB）、llama3.2:1b（1.3 GB）或qwen3:1.7b（1.4 GB）。操作系统和Ollama会占用这4 GB的一部分，更大的模型会开始使用磁盘交换。',
          },
          {
            q: 'Ollama的最低配置要求是什么？',
            a: '没有统一的最低要求：需求是模型文件大小加上上下文缓存。最小的模型（Gemma 3 270M为0.3 GB，Qwen3 0.6B为0.5 GB）几乎能在任何机器上运行；30亿至40亿参数的模型需要约3 GB的空闲显存或内存。',
          },
          {
            q: 'Gemma 4和Qwen3.5能放进4 GB吗？',
            a: 'Qwen3.5 0.8B和2B可以轻松放下，4B版本（q4_K_M，3.3 GB）处于边缘。Gemma 4 E2B放不下：其q4_K_M文件为4.6 GB。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[6 GB显存的最佳本地LLM](/zh/prompt-bites/best-local-llm-6gb-vram)',
          '[显存需求完整指南](/zh/prompt-bites/how-much-vram-for-local-llm)',
          '[低端电脑上最快的本地LLM](/zh/local-llms/fastest-local-llms-low-end-pcs)',
          '[能在2 GB内存上运行RAG吗？](/zh/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Mejores modelos Ollama para 4 GB de VRAM?',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-es.webp',
    seoTitle: 'Mejores modelos Ollama para 4 GB de VRAM (2026)',
    metaDescription: 'Phi-4 Mini y Qwen3 4B (2,5 GB cada uno), Qwen3.5 2B (1,9 GB) y Gemma 3 1B (0,8 GB) caben en 4 GB de VRAM. Llama 3.1 8B (4,9 GB) no.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 Mini y Qwen3 4B (2,5 GB cada uno) son los mayores modelos que dejan margen en una GPU de 4 GB',
          'La mayoría de las etiquetas predeterminadas de Ollama ya son de 4 bits (Q4_K_M); mire el tamaño de descarga, no el número de parámetros',
          'Llama 3.1 8B (4,9 GB) y Gemma 4 E2B (4,6 GB) no caben',
          'Con solo 4 GB de RAM del sistema, manténgase por debajo de unos 1,5 GB: Qwen3 0.6B, Gemma 3 1B, Llama 3.2 1B',
        ],
      },
      body1: {
        title: 'Qué cabe en 4 GB de VRAM',
        content: [
          '<strong>En una GPU de 4 GB caben modelos de hasta unos 4000 millones de parámetros con cuantización de 4 bits, y el dato a comprobar es el tamaño de descarga de Ollama.</strong> Un modelo necesita su tamaño de archivo más espacio para la caché de contexto (caché KV), que crece a medida que la conversación se alarga. Como regla general, mantenga el archivo en unos 3 GB o menos para que todo el modelo quede en la GPU.',
          'Phi-4 Mini y Qwen3 4B son los mayores modelos de la tabla que dejan ese margen, con 2,5 GB cada uno. Qwen3.5 2B es la familia más reciente y admite imágenes además de texto. Gemma 3 1B y Qwen3 1.7B sirven para un archivo pequeño con contexto largo. Los tamaños proceden de la <a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">biblioteca de modelos de Ollama</a>; la velocidad depende de su GPU, así que no se citan tokens por segundo. Las generaciones más nuevas no los sustituyen a este tamaño: Qwen3.6 empieza en 27B (17 GB) y ninguna descarga de Gemma 4 es menor de 4,3 GB.',
        ],
        columns: ['Modelo', 'Etiqueta Ollama', 'Tamaño', 'Notas'],
        rows: [
          { 'Modelo': 'Phi-4 Mini', 'Etiqueta Ollama': 'phi4-mini', 'Tamaño': '2,5 GB', 'Notas': '3800 M de parámetros, contexto 128K' },
          { 'Modelo': 'Qwen3 4B', 'Etiqueta Ollama': 'qwen3:4b', 'Tamaño': '2,5 GB', 'Notas': '4000 M de parámetros, modo de razonamiento' },
          { 'Modelo': 'Llama 3.2 3B', 'Etiqueta Ollama': 'llama3.2:3b', 'Tamaño': '2,0 GB', 'Notas': '3000 M de parámetros, familia Llama' },
          { 'Modelo': 'Qwen3.5 2B', 'Etiqueta Ollama': 'qwen3.5:2b-q4_K_M', 'Tamaño': '1,9 GB', 'Notas': 'Entrada de texto e imagen' },
          { 'Modelo': 'Qwen3 1.7B', 'Etiqueta Ollama': 'qwen3:1.7b', 'Tamaño': '1,4 GB', 'Notas': 'Deja libre la mayor parte de la VRAM' },
          { 'Modelo': 'Gemma 3 1B', 'Etiqueta Ollama': 'gemma3:1b', 'Tamaño': '0,8 GB', 'Notas': 'La opción más pequeña de la tabla' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Con 4 GB de VRAM caben en 4 bits Phi-4 Mini (2,5 GB), Qwen3 4B (2,5 GB), Llama 3.2 3B (2,0 GB), Qwen3.5 2B (1,9 GB) y Gemma 3 1B (0,8 GB); Llama 3.1 8B (4,9 GB) no.' },
          { type: 'plain-terms', text: 'Si su GPU tiene 4 GB, elija un modelo cuya descarga ronde los 3 GB o menos y empiece por phi4-mini o qwen3:4b. Los modelos de 8B necesitan una tarjeta de 6 GB o más.' },
        ],
      },
      body2: {
        title: 'Qué no cabe en 4 GB',
        content: [
          'Estos modelos se piden con frecuencia, pero su descarga predeterminada en Ollama se acerca o supera los 4 GB:',
          'Una tarjeta de 6 GB hace prácticos los modelos de 8B como Llama 3.1 8B. Consulte los <a href="/es/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">mejores LLM locales para 6 GB de VRAM</a>. Para una comparación completa de hardware, consulte los <a href="/es/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">LLM locales más rápidos para PC de gama baja</a>.',
        ],
        items: [
          'Llama 3.1 8B (llama3.1:8b) — descarga de 4,9 GB, sin espacio para el contexto',
          'Gemma 4 E2B (gemma4:e2b-it-q4_K_M) — descarga de 4,6 GB pese al «2B» del nombre',
          'Gemma 4 E4B (gemma4:e4b-it-q4_K_M) — descarga de 6,6 GB',
          'Qwen3.5 4B (qwen3.5:4b-q4_K_M) y Gemma 3 4B (gemma3:4b) — 3,3 y 3,4 GB; al límite, un contexto largo pasa capas a la RAM del sistema',
        ],
      },
      body3: {
        title: '¿Qué modelos de Ollama son de 4 bits?',
        content: [
          '<strong>La mayoría de las etiquetas predeterminadas de Ollama ya son de 4 bits: phi4-mini, qwen3:1.7b, gemma3:4b y llama3.1:8b comparten el hash de archivo con la entrada q4_K_M, una cuantización de 4 bits.</strong> La página de la biblioteca suele no nombrar la cuantización de la etiqueta predeterminada; para asegurarse, descargue la etiqueta que la incluya en el nombre, por ejemplo ollama run qwen3:4b-q4_K_M.',
          'No todos los modelos pequeños usan 4 bits por defecto, y el predeterminado puede ser mucho mayor que el archivo de 4 bits:',
        ],
        items: [
          'gemma2:2b — el predeterminado es q4_0 (1,6 GB)',
          'smollm2:1.7b — el predeterminado es q8_0 (1,8 GB); el archivo q4_K_M pesa 1,1 GB',
          'qwen3.5:2b — el predeterminado pesa 2,7 GB; qwen3.5:2b-q4_K_M pesa 1,9 GB',
          'llama3.2:1b — el predeterminado coincide con q8_0 (1,3 GB)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre modelos para 4 GB de VRAM',
        faqs: [
          {
            q: '¿Bastan 4 GB de VRAM para un LLM útil?',
            a: 'Sí, para tareas básicas. Un modelo de 2 a 4 mil millones de parámetros como Phi-4 Mini o Qwen3 4B resuelve preguntas y respuestas, resúmenes cortos y ayuda ligera de programación. Los documentos largos, los agentes de varios pasos y los contextos grandes están limitados por la caché de contexto; 6 GB o más es más cómodo.',
          },
          {
            q: '¿Qué modelo de Ollama tiene cuantización de 4 bits?',
            a: 'La mayoría. Etiquetas predeterminadas como phi4-mini y gemma3:4b comparten el hash con la entrada q4_K_M (4 bits). Algunas difieren: smollm2 es q8_0 y gemma2:2b es q4_0. Descargue la etiqueta con q4_K_M en el nombre para estar seguro.',
          },
          {
            q: '¿Puedo ejecutar Llama 3 con 4 GB de VRAM?',
            a: 'El modelo de 8B no: llama3.1:8b son 4,9 GB de descarga. Llama 3.2 3B cabe con 2,0 GB si busca una variante de Llama. Consulte <a href="/es/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">la guía completa de requisitos de VRAM</a>.',
          },
          {
            q: '¿Qué GPU tiene 4 GB de VRAM?',
            a: 'La RTX 3050 y la 3050 Ti (versiones de portátil), la GTX 1650 Super y la AMD RX 6500 XT traen 4 GB. Las tarjetas NVIDIA requieren compute capability 5.0 o superior. La RX 6500 XT no figura en la lista ROCm de Ollama; revise la <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">documentación de GPU de Ollama</a> antes de comprar.',
          },
          {
            q: '¿Puede el modo solo CPU saltarse el límite de 4 GB de VRAM?',
            a: 'En parte. Cuando un modelo supera la VRAM, Ollama reparte sus capas entre la GPU y la RAM del sistema; funciona, pero más lento. Sin GPU todo corre en la CPU y la velocidad depende de la RAM y del procesador.',
          },
          {
            q: '¿Qué puedo ejecutar con solo 4 GB de RAM del sistema?',
            a: 'Como regla general, manténgase por debajo de unos 1,5 GB: qwen3:0.6b (0,5 GB), gemma3:1b (0,8 GB), llama3.2:1b (1,3 GB) o qwen3:1.7b (1,4 GB). El sistema operativo y Ollama usan parte de los 4 GB, así que los modelos mayores empiezan a usar el disco.',
          },
          {
            q: '¿Cuáles son los requisitos mínimos de Ollama?',
            a: 'No hay un mínimo único: el requisito es el tamaño de archivo del modelo más la caché de contexto. Los modelos más pequeños (Gemma 3 270M con 0,3 GB, Qwen3 0.6B con 0,5 GB) funcionan en casi cualquier equipo; los de 3 a 4 mil millones de parámetros piden unos 3 GB de VRAM o RAM libre.',
          },
          {
            q: '¿Caben Gemma 4 y Qwen3.5 en 4 GB?',
            a: 'Qwen3.5 0.8B y 2B caben con holgura y la versión 4B (q4_K_M, 3,3 GB) va justa. Gemma 4 E2B no cabe: su archivo q4_K_M pesa 4,6 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mejores LLM locales para 6 GB de VRAM](/es/prompt-bites/best-local-llm-6gb-vram)',
          '[Guía completa de requisitos de VRAM](/es/prompt-bites/how-much-vram-for-local-llm)',
          '[LLM locales más rápidos para PC de gama baja](/es/local-llms/fastest-local-llms-low-end-pcs)',
          '[¿Se puede ejecutar RAG con 2 GB de RAM?](/es/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    title: 'Melhores modelos Ollama para 4 GB de VRAM?',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-pt.webp',
    seoTitle: 'Melhores modelos Ollama para 4 GB de VRAM (2026)',
    metaDescription: 'Phi-4 Mini e Qwen3 4B (2,5 GB cada), Qwen3.5 2B (1,9 GB) e Gemma 3 1B (0,8 GB) cabem em 4 GB de VRAM. Llama 3.1 8B (4,9 GB) não cabe.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Melhores modelos Ollama para 4 GB de VRAM?',
        answer: 'Com 4 GB de VRAM cabem modelos de até cerca de 4 bilhões de parâmetros em quantização de 4 bits: Phi-4 Mini e Qwen3 4B (~2,5 GB cada), Llama 3.2 3B (~2,0 GB), Qwen3.5 2B (~1,9 GB) e Gemma 3 1B (~0,8 GB). Llama 3.1 8B (~4,9 GB) não cabe.',
        bullets: [
          'Phi-4 Mini e Qwen3 4B: os maiores com folga (2,5 GB cada)',
          'Qwen3.5 2B: família mais recente, entrada de texto e imagem (1,9 GB em q4_K_M)',
          'Gemma 3 1B: a menor opção (0,8 GB)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 Mini e Qwen3 4B (2,5 GB cada) são os maiores modelos que deixam folga em uma GPU de 4 GB',
          'A maioria das tags padrão do Ollama já é de 4 bits (Q4_K_M); verifique o tamanho do download, não a contagem de parâmetros',
          'Llama 3.1 8B (4,9 GB) e Gemma 4 E2B (4,6 GB) não cabem',
          'Com apenas 4 GB de RAM do sistema, fique abaixo de cerca de 1,5 GB: Qwen3 0.6B, Gemma 3 1B, Llama 3.2 1B',
        ],
      },
      body1: {
        title: 'O que cabe em 4 GB de VRAM',
        content: [
          '<strong>Em uma GPU de 4 GB cabem modelos de até cerca de 4 bilhões de parâmetros em quantização de 4 bits, e o número a conferir é o tamanho do download no Ollama.</strong> Um modelo precisa do tamanho do arquivo mais espaço para o cache de contexto (cache KV), que cresce conforme a conversa se alonga. Como regra prática, mantenha o arquivo em cerca de 3 GB ou menos para que o modelo inteiro fique na GPU.',
          'Phi-4 Mini e Qwen3 4B são os maiores modelos da tabela que deixam essa folga, com 2,5 GB cada. Qwen3.5 2B é a família mais recente e aceita imagens além de texto. Gemma 3 1B e Qwen3 1.7B servem para um arquivo pequeno com contexto longo. Os tamanhos vêm da <a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">biblioteca de modelos do Ollama</a>; a velocidade depende da sua GPU, então não citamos tokens por segundo. As gerações mais novas não os substituem nesse tamanho: o Qwen3.6 começa em 27B (17 GB) e nenhum download do Gemma 4 é menor que 4,3 GB.',
        ],
        columns: ['Modelo', 'Tag do Ollama', 'Tamanho', 'Observações'],
        rows: [
          { 'Modelo': 'Phi-4 Mini', 'Tag do Ollama': 'phi4-mini', 'Tamanho': '2,5 GB', 'Observações': '3,8 bi de parâmetros, contexto de 128K' },
          { 'Modelo': 'Qwen3 4B', 'Tag do Ollama': 'qwen3:4b', 'Tamanho': '2,5 GB', 'Observações': '4 bi de parâmetros, modo de raciocínio' },
          { 'Modelo': 'Llama 3.2 3B', 'Tag do Ollama': 'llama3.2:3b', 'Tamanho': '2,0 GB', 'Observações': '3 bi de parâmetros, família Llama' },
          { 'Modelo': 'Qwen3.5 2B', 'Tag do Ollama': 'qwen3.5:2b-q4_K_M', 'Tamanho': '1,9 GB', 'Observações': 'Entrada de texto e imagem' },
          { 'Modelo': 'Qwen3 1.7B', 'Tag do Ollama': 'qwen3:1.7b', 'Tamanho': '1,4 GB', 'Observações': 'Deixa a maior parte da VRAM livre' },
          { 'Modelo': 'Gemma 3 1B', 'Tag do Ollama': 'gemma3:1b', 'Tamanho': '0,8 GB', 'Observações': 'Menor opção desta tabela' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Com 4 GB de VRAM cabem em 4 bits Phi-4 Mini (2,5 GB), Qwen3 4B (2,5 GB), Llama 3.2 3B (2,0 GB), Qwen3.5 2B (1,9 GB) e Gemma 3 1B (0,8 GB); Llama 3.1 8B (4,9 GB) não.' },
          { type: 'plain-terms', text: 'Se a sua GPU tem 4 GB, escolha um modelo com download de cerca de 3 GB ou menos e comece por phi4-mini ou qwen3:4b. Modelos de 8B exigem uma placa de 6 GB ou mais.' },
        ],
      },
      body2: {
        title: 'O que não cabe em 4 GB',
        content: [
          'Estes modelos são muito pedidos, mas o download padrão no Ollama fica perto ou acima de 4 GB:',
          'Uma placa de 6 GB torna práticos os modelos de 8B, como o Llama 3.1 8B. Veja os <a href="/pt/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">melhores LLMs locais para 6 GB de VRAM</a>. Para uma comparação completa de hardware, veja os <a href="/pt/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">LLMs locais mais rápidos para PCs de baixo custo</a>.',
        ],
        items: [
          'Llama 3.1 8B (llama3.1:8b) — download de 4,9 GB, sem espaço para o contexto',
          'Gemma 4 E2B (gemma4:e2b-it-q4_K_M) — download de 4,6 GB apesar do «2B» no nome',
          'Gemma 4 E4B (gemma4:e4b-it-q4_K_M) — download de 6,6 GB',
          'Qwen3.5 4B (qwen3.5:4b-q4_K_M) e Gemma 3 4B (gemma3:4b) — 3,3 e 3,4 GB; no limite, um contexto longo move camadas para a RAM do sistema',
        ],
      },
      body3: {
        title: 'Quais modelos do Ollama são de 4 bits?',
        content: [
          '<strong>A maioria das tags padrão do Ollama já é de 4 bits: phi4-mini, qwen3:1.7b, gemma3:4b e llama3.1:8b compartilham o hash do arquivo com a entrada q4_K_M, uma quantização de 4 bits.</strong> A página da biblioteca muitas vezes não nomeia a quantização da tag padrão; para ter certeza, baixe a tag com a quantização no nome, por exemplo ollama run qwen3:4b-q4_K_M.',
          'Nem todo modelo pequeno usa 4 bits por padrão, e o padrão pode ser bem maior que o arquivo de 4 bits:',
        ],
        items: [
          'gemma2:2b — o padrão é q4_0 (1,6 GB)',
          'smollm2:1.7b — o padrão é q8_0 (1,8 GB); o arquivo q4_K_M tem 1,1 GB',
          'qwen3.5:2b — o padrão tem 2,7 GB; qwen3.5:2b-q4_K_M tem 1,9 GB',
          'llama3.2:1b — o padrão corresponde a q8_0 (1,3 GB)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos com 4 GB de VRAM',
        faqs: [
          {
            q: '4 GB de VRAM bastam para um LLM útil?',
            a: 'Sim, para tarefas básicas. Um modelo de 2 a 4 bilhões de parâmetros, como Phi-4 Mini ou Qwen3 4B, resolve perguntas e respostas, resumos curtos e ajuda leve de programação. Documentos longos, agentes de várias etapas e contextos grandes são limitados pelo cache de contexto; 6 GB ou mais é mais confortável.',
          },
          {
            q: 'Qual modelo do Ollama tem quantização de 4 bits?',
            a: 'A maioria. Tags padrão como phi4-mini e gemma3:4b compartilham o hash com a entrada q4_K_M (4 bits). Algumas diferem: smollm2 é q8_0 e gemma2:2b é q4_0. Baixe a tag com q4_K_M no nome para ter certeza.',
          },
          {
            q: 'Posso executar o Llama 3 com 4 GB de VRAM?',
            a: 'O modelo de 8B não: llama3.1:8b tem 4,9 GB de download. O Llama 3.2 3B cabe com 2,0 GB se você quiser uma variante Llama. Veja <a href="/pt/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">o guia completo de requisitos de VRAM</a>.',
          },
          {
            q: 'Qual GPU tem 4 GB de VRAM?',
            a: 'A RTX 3050 e a 3050 Ti (versões de notebook), a GTX 1650 Super e a AMD RX 6500 XT vêm com 4 GB. Placas NVIDIA exigem compute capability 5.0 ou superior. A RX 6500 XT não está na lista ROCm do Ollama; consulte a <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">documentação de GPU do Ollama</a> antes de comprar.',
          },
          {
            q: 'O modo somente CPU contorna o limite de 4 GB de VRAM?',
            a: 'Em parte. Quando o modelo é maior que a VRAM, o Ollama divide as camadas entre a GPU e a RAM do sistema; funciona, porém mais devagar. Sem GPU, tudo roda na CPU e a velocidade depende da RAM e do processador.',
          },
          {
            q: 'O que posso executar com apenas 4 GB de RAM do sistema?',
            a: 'Como regra prática, fique abaixo de cerca de 1,5 GB: qwen3:0.6b (0,5 GB), gemma3:1b (0,8 GB), llama3.2:1b (1,3 GB) ou qwen3:1.7b (1,4 GB). O sistema operacional e o Ollama usam parte dos 4 GB, então modelos maiores passam a usar o disco.',
          },
          {
            q: 'Quais são os requisitos mínimos do Ollama?',
            a: 'Não há um mínimo único: o requisito é o tamanho do arquivo do modelo mais o cache de contexto. Os menores modelos (Gemma 3 270M com 0,3 GB, Qwen3 0.6B com 0,5 GB) rodam em quase qualquer máquina; modelos de 3 a 4 bilhões de parâmetros pedem cerca de 3 GB de VRAM ou RAM livre.',
          },
          {
            q: 'Gemma 4 e Qwen3.5 cabem em 4 GB?',
            a: 'Qwen3.5 0.8B e 2B cabem com folga e a versão 4B (q4_K_M, 3,3 GB) fica no limite. O Gemma 4 E2B não cabe: o arquivo q4_K_M tem 4,6 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Melhores LLMs locais para 6 GB de VRAM](/pt/prompt-bites/best-local-llm-6gb-vram)',
          '[Guia completo de requisitos de VRAM](/pt/prompt-bites/how-much-vram-for-local-llm)',
          '[LLMs locais mais rápidos para PCs de baixo custo](/pt/local-llms/fastest-local-llms-low-end-pcs)',
          '[É possível executar RAG com 2 GB de RAM?](/pt/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    title: 'أفضل نماذج ⁨Ollama⁩ لـ⁨4 GB VRAM⁩؟',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-ar.webp',
    seoTitle: 'أفضل نماذج ⁨Ollama⁩ لـ⁨4 GB VRAM⁩ ⁨(2026)⁩',
    metaDescription: '⁨4 GB VRAM⁩ تتسع لـ⁨Phi-4 Mini⁩ و⁨Qwen3 4B⁩ (⁨2.5 GB⁩ لكل منهما) و⁨Qwen3.5 2B⁩ (⁨1.9 GB⁩) و⁨Gemma 3 1B⁩ (⁨0.8 GB⁩). أما ⁨Llama 3.1 8B⁩ (⁨4.9 GB⁩) فلا يتسع.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نماذج Ollama لـ4 GB VRAM؟',
        answer: 'تتسع 4 GB VRAM لنماذج حتى نحو 4 مليارات معامل بتكميم 4 بت: Phi-4 Mini وQwen3 4B (~2.5 GB لكل منهما) وLlama 3.2 3B (~2.0 GB) وQwen3.5 2B (~1.9 GB) وGemma 3 1B (~0.8 GB). أما Llama 3.1 8B (~4.9 GB) فلا يتسع.',
        bullets: [
          'Phi-4 Mini وQwen3 4B: أكبر النماذج مع هامش (‏2.5 GB لكل منهما)',
          'Qwen3.5 2B: أحدث عائلة، إدخال نص وصورة (‏1.9 GB بصيغة q4_K_M)',
          'Gemma 3 1B: أصغر خيار (‏0.8 GB)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 Mini وQwen3 4B (‏2.5 GB لكل منهما) هما أكبر نموذجين يتركان هامشاً على بطاقة 4 GB',
          'معظم وسوم Ollama الافتراضية بتكميم 4 بت أصلاً (Q4_K_M)؛ انظر إلى حجم التنزيل لا إلى عدد المعاملات',
          'Llama 3.1 8B (‏4.9 GB) وGemma 4 E2B (‏4.6 GB) لا يتسعان',
          'مع 4 GB فقط من ذاكرة النظام، ابقَ دون نحو 1.5 GB: Qwen3 0.6B وGemma 3 1B وLlama 3.2 1B',
        ],
      },
      body1: {
        title: 'ما يتسع في 4 GB VRAM',
        content: [
          '<strong>على بطاقة 4 GB تتسع النماذج حتى نحو 4 مليارات معامل بتكميم 4 بت، والرقم الذي يجب فحصه هو حجم تنزيل Ollama.</strong> يحتاج النموذج إلى حجم ملفه إضافة إلى مساحة لذاكرة السياق (ذاكرة KV) التي تكبر مع طول المحادثة. كقاعدة عامة، أبقِ الملف عند نحو 3 GB أو أقل ليبقى النموذج كله على البطاقة.',
          'Phi-4 Mini وQwen3 4B هما أكبر نموذجين في الجدول يتركان هذا الهامش، بواقع 2.5 GB لكل منهما. Qwen3.5 2B هو أحدث عائلة ويقبل الصور إضافة إلى النص. يناسب Gemma 3 1B وQwen3 1.7B ملفاً صغيراً بسياق طويل. الأحجام من <a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">مكتبة نماذج Ollama</a>؛ والسرعة تعتمد على بطاقتك، لذلك لا نذكر أرقام الرموز في الثانية. ولا تحلّ الأجيال الأحدث محلها بهذا الحجم: يبدأ Qwen3.6 من 27B (‏17 GB)، ولا يوجد تنزيل لـGemma 4 أصغر من 4.3 GB.',
        ],
        columns: ['النموذج', 'وسم Ollama', 'حجم الملف', 'ملاحظات'],
        rows: [
          { 'النموذج': 'Phi-4 Mini', 'وسم Ollama': 'phi4-mini', 'حجم الملف': '2.5 GB', 'ملاحظات': '3.8 مليار معامل، سياق 128K' },
          { 'النموذج': 'Qwen3 4B', 'وسم Ollama': 'qwen3:4b', 'حجم الملف': '2.5 GB', 'ملاحظات': '4 مليارات معامل، وضع التفكير' },
          { 'النموذج': 'Llama 3.2 3B', 'وسم Ollama': 'llama3.2:3b', 'حجم الملف': '2.0 GB', 'ملاحظات': '3 مليارات معامل، عائلة Llama' },
          { 'النموذج': 'Qwen3.5 2B', 'وسم Ollama': 'qwen3.5:2b-q4_K_M', 'حجم الملف': '1.9 GB', 'ملاحظات': 'إدخال نص وصورة' },
          { 'النموذج': 'Qwen3 1.7B', 'وسم Ollama': 'qwen3:1.7b', 'حجم الملف': '1.4 GB', 'ملاحظات': 'يترك معظم VRAM حراً' },
          { 'النموذج': 'Gemma 3 1B', 'وسم Ollama': 'gemma3:1b', 'حجم الملف': '0.8 GB', 'ملاحظات': 'أصغر خيار في هذا الجدول' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'مع 4 GB VRAM تتسع بتكميم 4 بت النماذج Phi-4 Mini (‏2.5 GB) وQwen3 4B (‏2.5 GB) وLlama 3.2 3B (‏2.0 GB) وQwen3.5 2B (‏1.9 GB) وGemma 3 1B (‏0.8 GB)؛ أما Llama 3.1 8B (‏4.9 GB) فلا يتسع.' },
          { type: 'plain-terms', text: 'إذا كانت بطاقتك 4 GB فاختر نموذجاً بحجم تنزيل نحو 3 GB أو أقل وابدأ بـphi4-mini أو qwen3:4b. نماذج 8B تحتاج بطاقة 6 GB أو أكثر.' },
        ],
      },
      body2: {
        title: 'ما لا يتسع في 4 GB',
        content: [
          'هذه النماذج تُطلب كثيراً، لكن تنزيلها الافتراضي في Ollama قريب من 4 GB أو أكبر:',
          'بطاقة 6 GB تجعل نماذج 8B مثل Llama 3.1 8B عملية. راجع <a href="/ar/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">أفضل نماذج اللغة الكبيرة المحلية لـ6 GB VRAM</a>. للمقارنة الشاملة للعتاد، راجع <a href="/ar/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">أسرع نماذج اللغة الكبيرة المحلية للحواسيب منخفضة المستوى</a>.',
        ],
        items: [
          'Llama 3.1 8B (llama3.1:8b) — تنزيل 4.9 GB، بلا مساحة للسياق',
          'Gemma 4 E2B (gemma4:e2b-it-q4_K_M) — تنزيل 4.6 GB رغم «2B» في الاسم',
          'Gemma 4 E4B (gemma4:e4b-it-q4_K_M) — تنزيل 6.6 GB',
          'Qwen3.5 4B (qwen3.5:4b-q4_K_M) وGemma 3 4B (gemma3:4b) — 3.3 و3.4 GB؛ على الحد، والسياق الطويل ينقل طبقات إلى ذاكرة النظام',
        ],
      },
      body3: {
        title: 'أي نماذج Ollama بتكميم 4 بت؟',
        content: [
          '<strong>معظم وسوم Ollama الافتراضية بتكميم 4 بت أصلاً: phi4-mini وqwen3:1.7b وgemma3:4b وllama3.1:8b تشترك في بصمة الملف مع إدخال q4_K_M، وهو تكميم 4 بت.</strong> كثيراً ما لا تذكر صفحة المكتبة التكميم في الوسم الافتراضي، ولليقين نزّل الوسم الذي يحمل التكميم في اسمه، مثل ollama run qwen3:4b-q4_K_M.',
          'ليس كل نموذج صغير افتراضياً بتكميم 4 بت، وقد يكون الافتراضي أكبر بكثير من ملف 4 بت:',
        ],
        items: [
          'gemma2:2b — الافتراضي q4_0 (‏1.6 GB)',
          'smollm2:1.7b — الافتراضي q8_0 (‏1.8 GB)؛ وملف q4_K_M حجمه 1.1 GB',
          'qwen3.5:2b — الافتراضي 2.7 GB؛ وqwen3.5:2b-q4_K_M حجمه 1.9 GB',
          'llama3.2:1b — الافتراضي يطابق q8_0 (‏1.3 GB)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول النماذج بـ4 GB VRAM',
        faqs: [
          {
            q: 'هل 4 GB VRAM كافية لنموذج لغة مفيد؟',
            a: 'نعم، للمهام الأساسية. نموذج من 2 إلى 4 مليارات معامل مثل Phi-4 Mini أو Qwen3 4B يتعامل مع الأسئلة والأجوبة والتلخيص القصير ومساعدة البرمجة الخفيفة. المستندات الطويلة والوكلاء متعددو الخطوات والسياقات الكبيرة يحدّها حجم ذاكرة السياق، فتكون 6 GB أو أكثر أريح.',
          },
          {
            q: 'أي نموذج Ollama بتكميم 4 بت؟',
            a: 'معظمها. الوسوم الافتراضية مثل phi4-mini وgemma3:4b تشترك في البصمة مع إدخال q4_K_M (4 بت). بعض الافتراضيات تختلف: smollm2 هو q8_0 وgemma2:2b هو q4_0. نزّل الوسم الذي يحمل q4_K_M في اسمه لتتأكد.',
          },
          {
            q: 'هل يمكنني تشغيل Llama 3 بـ4 GB VRAM؟',
            a: 'ليس نموذج 8B: حجم تنزيل llama3.1:8b هو 4.9 GB. أما Llama 3.2 3B فيتسع بـ2.0 GB إذا أردت متغيراً من Llama. راجع <a href="/ar/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">الدليل الشامل لمتطلبات VRAM</a>.',
          },
          {
            q: 'ما بطاقات GPU التي تحتوي 4 GB VRAM؟',
            a: 'RTX 3050 وRTX 3050 Ti (نسخ الحواسيب المحمولة) وGTX 1650 Super وAMD RX 6500 XT تأتي بسعة 4 GB. بطاقات NVIDIA تحتاج compute capability بقيمة 5.0 أو أعلى. بطاقة RX 6500 XT غير مدرجة في قائمة ROCm لدى Ollama، فراجع <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">وثائق GPU في Ollama</a> قبل الشراء.',
          },
          {
            q: 'هل يمكن لوضع CPU فقط تجاوز حد 4 GB VRAM؟',
            a: 'جزئياً. عندما يكون النموذج أكبر من VRAM، يوزّع Ollama طبقاته بين البطاقة وذاكرة النظام، ويعمل لكن أبطأ. بدون بطاقة يعمل كل شيء على المعالج وتعتمد السرعة على الذاكرة والمعالج.',
          },
          {
            q: 'ماذا أشغّل بـ4 GB فقط من ذاكرة النظام؟',
            a: 'كقاعدة عامة ابقَ دون نحو 1.5 GB: qwen3:0.6b (‏0.5 GB) أو gemma3:1b (‏0.8 GB) أو llama3.2:1b (‏1.3 GB) أو qwen3:1.7b (‏1.4 GB). يستهلك النظام وOllama جزءاً من الـ4 GB، فتبدأ النماذج الأكبر باستخدام القرص.',
          },
          {
            q: 'ما الحد الأدنى لمتطلبات Ollama؟',
            a: 'لا يوجد حد أدنى واحد: المتطلب هو حجم ملف النموذج مضافاً إليه ذاكرة السياق. أصغر النماذج (Gemma 3 270M بحجم 0.3 GB وQwen3 0.6B بحجم 0.5 GB) تعمل على أي جهاز تقريباً؛ ونماذج 3 إلى 4 مليارات معامل تحتاج نحو 3 GB من VRAM أو الذاكرة الحرة.',
          },
          {
            q: 'هل يتسع Gemma 4 وQwen3.5 في 4 GB؟',
            a: 'يتسع Qwen3.5 بنسختي 0.8B و2B براحة، ونسخة 4B (‏q4_K_M، ‏3.3 GB) على الحد. أما Gemma 4 E2B فلا يتسع: ملفه بصيغة q4_K_M حجمه 4.6 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل نماذج اللغة الكبيرة المحلية لـ6 GB VRAM](/ar/prompt-bites/best-local-llm-6gb-vram)',
          '[الدليل الشامل لمتطلبات VRAM](/ar/prompt-bites/how-much-vram-for-local-llm)',
          '[أسرع نماذج اللغة الكبيرة المحلية للحواسيب منخفضة المستوى](/ar/local-llms/fastest-local-llms-low-end-pcs)',
          '[هل يمكن تشغيل RAG بـ2 GB RAM؟](/ar/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    title: '4GB VRAM에 최적화된 Ollama 모델은?',
    heroImage: '/images/best-ollama-models-4gb-vram-overview-hero-ko.webp',
    seoTitle: 'Ollama 4GB VRAM 모델 추천 (2026)',
    metaDescription: '4GB VRAM에는 Phi-4 Mini와 Qwen3 4B(각 2.5GB), Qwen3.5 2B(1.9GB), Gemma 3 1B(0.8GB)가 들어갑니다. Llama 3.1 8B(4.9GB)는 불가합니다.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ko: {
        question: '4GB VRAM에 최적화된 Ollama 모델은 무엇입니까?',
        answer: '4GB VRAM에는 4비트 양자화 기준 약 40억 파라미터까지의 모델이 들어갑니다: Phi-4 Mini와 Qwen3 4B(각 ~2.5GB), Llama 3.2 3B(~2.0GB), Qwen3.5 2B(~1.9GB), Gemma 3 1B(~0.8GB). Llama 3.1 8B(~4.9GB)는 들어가지 않습니다.',
        bullets: [
          'Phi-4 Mini와 Qwen3 4B: 여유를 남기는 최대 모델 (각 2.5GB)',
          'Qwen3.5 2B: 최신 계열, 텍스트와 이미지 입력 (q4_K_M 기준 1.9GB)',
          'Gemma 3 1B: 가장 작은 선택지 (0.8GB)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Phi-4 Mini와 Qwen3 4B(각 2.5GB)는 4GB GPU에서 여유를 남기는 가장 큰 모델입니다',
          'Ollama 기본 태그의 대부분은 이미 4비트(Q4_K_M)입니다. 파라미터 수가 아니라 다운로드 크기를 확인하십시오',
          'Llama 3.1 8B(4.9GB)와 Gemma 4 E2B(4.6GB)는 들어가지 않습니다',
          '시스템 RAM이 4GB뿐이라면 약 1.5GB 미만으로 유지하십시오: Qwen3 0.6B, Gemma 3 1B, Llama 3.2 1B',
        ],
      },
      body1: {
        title: '4GB VRAM에 들어가는 모델',
        content: [
          '<strong>4GB GPU에는 4비트 양자화 기준 약 40억 파라미터까지의 모델이 들어가며, 확인해야 할 숫자는 Ollama 다운로드 크기입니다.</strong> 모델에는 파일 크기에 더해 대화가 길어질수록 커지는 컨텍스트 캐시(KV 캐시) 공간이 필요합니다. 경험상 모델 전체를 GPU에 두려면 파일을 약 3GB 이하로 유지하십시오.',
          'Phi-4 Mini와 Qwen3 4B는 표에서 이 여유를 남기는 가장 큰 모델이며 각 2.5GB입니다. Qwen3.5 2B는 최신 계열로 텍스트와 함께 이미지도 처리합니다. Gemma 3 1B와 Qwen3 1.7B는 작은 파일에 긴 컨텍스트가 필요할 때 적합합니다. 파일 크기는 <a href="https://ollama.com/library" class="text-primary hover:underline" rel="noopener">Ollama 모델 라이브러리</a> 기준이며, 속도는 GPU에 따라 달라 초당 토큰 수치는 싣지 않았습니다. 이 크기에서는 최신 세대가 대체하지 못합니다. Qwen3.6은 27B(17GB)부터 시작하고, Gemma 4에는 4.3GB보다 작은 다운로드가 없습니다.',
        ],
        columns: ['모델', 'Ollama 태그', '파일 크기', '비고'],
        rows: [
          { '모델': 'Phi-4 Mini', 'Ollama 태그': 'phi4-mini', '파일 크기': '2.5 GB', '비고': '38억 파라미터, 128K 컨텍스트' },
          { '모델': 'Qwen3 4B', 'Ollama 태그': 'qwen3:4b', '파일 크기': '2.5 GB', '비고': '40억 파라미터, 사고 모드' },
          { '모델': 'Llama 3.2 3B', 'Ollama 태그': 'llama3.2:3b', '파일 크기': '2.0 GB', '비고': '30억 파라미터, Llama 계열' },
          { '모델': 'Qwen3.5 2B', 'Ollama 태그': 'qwen3.5:2b-q4_K_M', '파일 크기': '1.9 GB', '비고': '텍스트·이미지 입력' },
          { '모델': 'Qwen3 1.7B', 'Ollama 태그': 'qwen3:1.7b', '파일 크기': '1.4 GB', '비고': 'VRAM 대부분을 비워 둠' },
          { '모델': 'Gemma 3 1B', 'Ollama 태그': 'gemma3:1b', '파일 크기': '0.8 GB', '비고': '이 표에서 가장 작은 선택지' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '4GB VRAM에는 Phi-4 Mini(2.5GB), Qwen3 4B(2.5GB), Llama 3.2 3B(2.0GB), Qwen3.5 2B(1.9GB), Gemma 3 1B(0.8GB)가 4비트로 들어가며, Llama 3.1 8B(4.9GB)는 들어가지 않습니다.' },
          { type: 'plain-terms', text: 'GPU가 4GB라면 다운로드가 약 3GB 이하인 모델을 고르고 phi4-mini나 qwen3:4b부터 시작하십시오. 8B 모델에는 6GB 이상의 카드가 필요합니다.' },
        ],
      },
      body2: {
        title: '4GB에 들어가지 않는 모델',
        content: [
          '다음 모델들은 자주 요청되지만 Ollama 기본 다운로드가 4GB에 가깝거나 그 이상입니다:',
          '6GB 카드가 있으면 Llama 3.1 8B 같은 8B 모델을 현실적으로 쓸 수 있습니다. <a href="/ko/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6GB VRAM 최적 로컬 LLM</a>을 참조하십시오. 전체 하드웨어 비교는 <a href="/ko/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">저사양 PC용 최속 로컬 LLM</a>을 참조하십시오.',
        ],
        items: [
          'Llama 3.1 8B(llama3.1:8b) — 다운로드 4.9GB, 컨텍스트 여유 없음',
          'Gemma 4 E2B(gemma4:e2b-it-q4_K_M) — 이름에 "2B"가 있어도 다운로드 4.6GB',
          'Gemma 4 E4B(gemma4:e4b-it-q4_K_M) — 다운로드 6.6GB',
          'Qwen3.5 4B(qwen3.5:4b-q4_K_M)와 Gemma 3 4B(gemma3:4b) — 3.3GB와 3.4GB. 한계선이며 긴 컨텍스트에서는 일부 레이어가 시스템 RAM으로 넘어갑니다',
        ],
      },
      body3: {
        title: '어떤 Ollama 모델이 4비트입니까?',
        content: [
          '<strong>Ollama 기본 태그의 대부분은 이미 4비트입니다: phi4-mini, qwen3:1.7b, gemma3:4b, llama3.1:8b는 4비트 양자화인 q4_K_M 항목과 파일 해시가 같습니다.</strong> 라이브러리 페이지는 기본 태그의 양자화를 명시하지 않는 경우가 많으므로, 확실히 하려면 이름에 양자화가 들어 있는 태그를 받으십시오. 예: ollama run qwen3:4b-q4_K_M.',
          '모든 소형 모델이 기본으로 4비트인 것은 아니며, 기본 태그가 4비트 파일보다 훨씬 클 수 있습니다:',
        ],
        items: [
          'gemma2:2b — 기본은 q4_0(1.6GB)',
          'smollm2:1.7b — 기본은 q8_0(1.8GB). q4_K_M 파일은 1.1GB',
          'qwen3.5:2b — 기본은 2.7GB. qwen3.5:2b-q4_K_M은 1.9GB',
          'llama3.2:1b — 기본은 q8_0과 일치(1.3GB)',
        ],
      },
      faq: {
        id: 'faq',
        title: '4GB VRAM 모델에 관한 자주 묻는 질문',
        faqs: [
          {
            q: '4GB VRAM으로 유용한 LLM을 실행할 수 있습니까?',
            a: '예, 기본 작업에는 충분합니다. Phi-4 Mini나 Qwen3 4B 같은 20억~40억 파라미터 모델은 질의응답, 짧은 요약, 가벼운 코딩 보조를 처리합니다. 긴 문서, 다단계 에이전트, 큰 컨텍스트는 컨텍스트 캐시가 한계가 되므로 6GB 이상이 더 여유롭습니다.',
          },
          {
            q: '어떤 Ollama 모델이 4비트 양자화입니까?',
            a: '대부분입니다. phi4-mini, gemma3:4b 같은 기본 태그는 q4_K_M(4비트) 항목과 해시가 같습니다. 예외도 있어 smollm2는 q8_0, gemma2:2b는 q4_0입니다. 확실히 하려면 이름에 q4_K_M이 들어간 태그를 받으십시오.',
          },
          {
            q: '4GB VRAM으로 Llama 3를 실행할 수 있습니까?',
            a: '8B 모델은 불가합니다. llama3.1:8b는 다운로드가 4.9GB입니다. Llama 변형을 원하신다면 Llama 3.2 3B가 2.0GB로 들어갑니다. <a href="/ko/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">전체 VRAM 요구사항 가이드</a>를 참조하십시오.',
          },
          {
            q: '4GB VRAM을 갖춘 GPU는 어떤 것이 있습니까?',
            a: 'RTX 3050과 3050 Ti(노트북 버전), GTX 1650 Super, AMD RX 6500 XT가 4GB입니다. NVIDIA 카드는 compute capability 5.0 이상이 필요합니다. RX 6500 XT는 Ollama의 ROCm 지원 목록에 없으므로 구매 전에 <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" rel="noopener">Ollama GPU 문서</a>를 확인하십시오.',
          },
          {
            q: 'CPU 전용 모드로 4GB VRAM 제한을 우회할 수 있습니까?',
            a: '부분적으로 가능합니다. 모델이 VRAM보다 크면 Ollama가 레이어를 GPU와 시스템 RAM에 나누어 실행하며, 동작은 하지만 느려집니다. GPU가 없으면 전부 CPU에서 실행되고 속도는 RAM과 프로세서에 달려 있습니다.',
          },
          {
            q: '시스템 RAM이 4GB뿐이라면 무엇을 실행할 수 있습니까?',
            a: '경험상 약 1.5GB 미만으로 유지하십시오: qwen3:0.6b(0.5GB), gemma3:1b(0.8GB), llama3.2:1b(1.3GB), qwen3:1.7b(1.4GB). 운영체제와 Ollama가 4GB의 일부를 쓰므로 더 큰 모델은 디스크 스와핑이 시작됩니다.',
          },
          {
            q: 'Ollama의 최소 요구 사양은 무엇입니까?',
            a: '단일 최소값은 없으며, 모델 파일 크기에 컨텍스트 캐시를 더한 만큼이 필요합니다. 가장 작은 모델(Gemma 3 270M은 0.3GB, Qwen3 0.6B는 0.5GB)은 거의 모든 기기에서 실행되고, 30억~40억 파라미터 모델은 약 3GB의 여유 VRAM 또는 RAM이 필요합니다.',
          },
          {
            q: 'Gemma 4와 Qwen3.5는 4GB에 들어갑니까?',
            a: 'Qwen3.5 0.8B와 2B는 여유 있게 들어가고, 4B(q4_K_M, 3.3GB)는 한계선입니다. Gemma 4 E2B는 q4_K_M 파일이 4.6GB라서 들어가지 않습니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[6GB VRAM 최적 로컬 LLM](/ko/prompt-bites/best-local-llm-6gb-vram)',
          '[VRAM 요구사항 전체 가이드](/ko/prompt-bites/how-much-vram-for-local-llm)',
          '[저사양 PC용 최속 로컬 LLM](/ko/local-llms/fastest-local-llms-low-end-pcs)',
          '[2 GB RAM으로 RAG를 실행할 수 있습니까?](/ko/prompt-bites/can-you-run-rag-on-2gb-ram)',
        ],
      },
    },
  },
}
