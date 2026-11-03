import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-en.webp',
    title: 'Best Quantization for 6 GB VRAM: Which Level Fits?',
    dateModified: '2026-11-02',
    seoTitle: 'Best Quantization for 6 GB VRAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Pick Q4_K_M for 8B models on 6 GB VRAM: a 4.6–5.0 GB file plus a 4k-token KV cache still fits. Q5_K_M is tight; Q6_K and Q8_0 do not fit. Sizes sourced.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    educationalLevel: 'Beginner',
    parentArticle: '/local-llms/llm-quantization-explained',
    siblingBites: ['best-local-llm-6gb-vram', 'what-is-q4-k-m-quantization'],
    is_living_page: false,
    leadAnswerBlock: '**Q4_K_M is the best quantization for a 6 GB GPU: an 8B model\'s file is 4.6–5.0 GB, so a 4k-token context still fits.** Q5_K_M is tight, and Q6_K and Q8_0 do not fit.',
    quickAnswerTop: {
      en: {
        question: 'What quantization level is best for 6 GB VRAM?',
        answer: 'Q4_K_M. At this level the Llama 3.1 8B file is 4.58 GiB and the Qwen3 8B file is 5.03 GB; a 4k-token KV cache for Qwen3 8B adds about 0.56 GiB (calculated), which still fits 6 GB. Q5_K_M is too tight, and Q6_K and above do not fit.',
        bullets: [
          'Llama 3.1 8B at Q4_K_M: 4.58 GiB; Qwen3 8B at Q4_K_M: 5.03 GB (llama.cpp README, Hugging Face)',
          'Qwen3 8B at Q5_K_M: 5.85 GB, about 6.0 GiB with a 4k KV cache (calculated): too tight',
          'Qwen3 14B at Q4_K_M: 9 GB: no quantization level makes it comfortable on 6 GB',
        ],
        updatedDate: '2026-11',
      },
      de: {
        question: 'Welche Quantisierungsstufe ist die beste für 6 GB VRAM?',
        answer: 'Q4_K_M. Auf dieser Stufe ist die Datei von Llama 3.1 8B 4,58 GiB und die von Qwen3 8B 5,03 GB groß; ein 4k-Token-KV-Cache für Qwen3 8B kommt mit etwa 0,56 GiB hinzu (berechnet) und passt noch in 6 GB. Q5_K_M ist zu knapp, Q6_K und höher passen nicht.',
        bullets: [
          'Llama 3.1 8B bei Q4_K_M: 4,58 GiB; Qwen3 8B bei Q4_K_M: 5,03 GB (llama.cpp-README, Hugging Face)',
          'Qwen3 8B bei Q5_K_M: 5,85 GB, mit 4k-KV-Cache etwa 6,0 GiB (berechnet): zu knapp',
          'Qwen3 14B bei Q4_K_M: 9 GB: Keine Quantisierungsstufe macht es auf 6 GB komfortabel',
        ],
        updatedDate: '2026-11',
      },
      fr: {
        question: 'Quel niveau de quantisation est le meilleur pour 6 Go de VRAM ?',
        answer: 'Q4_K_M. À ce niveau, le fichier de Llama 3.1 8B fait 4.58 GiB et celui de Qwen3 8B 5.03 Go ; un cache KV de 4k tokens pour Qwen3 8B ajoute environ 0.56 GiB (calculé), ce qui tient encore dans 6 Go. Q5_K_M est trop juste, Q6_K et au-dessus ne tiennent pas.',
        bullets: [
          'Llama 3.1 8B en Q4_K_M : 4.58 GiB ; Qwen3 8B en Q4_K_M : 5.03 Go (README llama.cpp, Hugging Face)',
          'Qwen3 8B en Q5_K_M : 5.85 Go, soit environ 6.0 GiB avec un cache KV de 4k (calculé) : trop juste',
          'Qwen3 14B en Q4_K_M : 9 Go : aucun niveau de quantisation ne le rend confortable sur 6 Go',
        ],
        updatedDate: '2026-11',
      },
      ja: {
        question: '6 GB VRAM に最適な量子化レベルはどれですか？',
        answer: 'Q4_K_M です。このレベルでは Llama 3.1 8B のファイルが 4.58 GiB、Qwen3 8B が 5.03 GB で、Qwen3 8B の 4k トークン分の KV キャッシュ約 0.56 GiB（計算値）を足しても 6 GB に収まります。Q5_K_M は余裕がなく、Q6_K 以上は収まりません。',
        bullets: [
          'Q4_K_M の Llama 3.1 8B は 4.58 GiB、Qwen3 8B は 5.03 GB（llama.cpp README、Hugging Face）',
          'Qwen3 8B の Q5_K_M は 5.85 GB で、4k の KV キャッシュを足すと約 6.0 GiB（計算値）：余裕なし',
          'Qwen3 14B の Q4_K_M は 9 GB：どの量子化でも 6 GB では快適に動きません',
        ],
        updatedDate: '2026-11',
      },
      zh: {
        question: '6 GB 显存最佳量化等级是哪个？',
        answer: 'Q4_K_M。该等级下 Llama 3.1 8B 文件为 4.58 GiB，Qwen3 8B 为 5.03 GB；Qwen3 8B 的 4k tokens KV 缓存约增加 0.56 GiB（计算值），仍可放入 6 GB。Q5_K_M 余量太小，Q6_K 及以上放不下。',
        bullets: [
          'Q4_K_M 下 Llama 3.1 8B 为 4.58 GiB，Qwen3 8B 为 5.03 GB（llama.cpp README、Hugging Face）',
          'Qwen3 8B 的 Q5_K_M 为 5.85 GB，加 4k KV 缓存约 6.0 GiB（计算值）：余量太小',
          'Qwen3 14B 的 Q4_K_M 为 9 GB：任何量化等级在 6 GB 上都不宽裕',
        ],
        updatedDate: '2026-11',
      },
      es: {
        question: '¿Cuál es el mejor nivel de cuantización para 6 GB de VRAM?',
        answer: 'Q4_K_M. En este nivel el archivo de Llama 3.1 8B pesa 4.58 GiB y el de Qwen3 8B 5.03 GB; una caché KV de 4k tokens para Qwen3 8B añade unos 0.56 GiB (calculado) y aún cabe en 6 GB. Q5_K_M queda demasiado justo; Q6_K y superiores no caben.',
        bullets: [
          'Llama 3.1 8B en Q4_K_M: 4.58 GiB; Qwen3 8B en Q4_K_M: 5.03 GB (README de llama.cpp, Hugging Face)',
          'Qwen3 8B en Q5_K_M: 5.85 GB, unos 6.0 GiB con caché KV de 4k (calculado): demasiado justo',
          'Qwen3 14B en Q4_K_M: 9 GB: ningún nivel de cuantización lo hace cómodo en 6 GB',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'On a 6 GB card, use Q4_K_M for 7B–8B models: Qwen3 8B is 5.03 GB and Llama 3.1 8B is 4.58 GiB at this level',
          'Rule of thumb: model file + KV cache + runtime overhead must stay below your VRAM; a 4k-token KV cache for Qwen3 8B is about 0.56 GiB (calculated, f16)',
          'Q5_K_M (Qwen3 8B: 5.85 GB) plus a 4k KV cache is about 6.0 GiB (calculated): too tight, so use it only with a 2k context',
          'Qwen3 14B at Q4_K_M is 9 GB: not viable on 6 GB, so choose a smaller model instead of a lower quantization',
        ],
      },
      body1: {
        title: 'How to Choose a Quantization Level for 6 GB VRAM',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M is the highest common quantization level whose 8B model file plus a 4k-token KV cache fits in 6 GB of VRAM.' },
          { type: 'plain-terms', text: 'Pick the highest quantization level whose model file plus KV cache still fits your VRAM. Lower levels save memory but lose more accuracy; higher levels keep accuracy but need more memory.' },
        ],
        content: [
          'Choose the highest quantization level whose model file plus KV cache still fits your VRAM. Lower levels (Q2_K, Q3_K_M) save memory but lose more accuracy; higher levels (Q6_K, Q8_0) keep more accuracy but need more memory. The table uses file sizes from the [llama.cpp quantize README](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md) (Llama 3.1 8B, in GiB) and the [Qwen3-8B-GGUF model card](https://huggingface.co/Qwen/Qwen3-8B-GGUF) (Qwen3 8B, in GB). That repository lists no Q2_K or Q3_K_M file, shown as n/a.',
          'KV cache calculation for Qwen3 8B: its [config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json) lists 36 layers, 8 key-value heads and a head dimension of 128. At f16, one token needs 2 × 36 × 8 × 128 × 2 bytes = 147,456 bytes, so 4,096 tokens need about 0.56 GiB and 8,192 tokens about 1.1 GiB. This is a calculation, not a measurement; the CUDA runtime and your display also use VRAM.',
          'With Qwen3 8B, Q4_K_M leaves about 0.75 GiB of a 6 GiB card at 4k tokens (6 − 4.69 − 0.56). Q5_K_M leaves none at 4k and about 0.3 GiB at 2k, so use it only with a short context. Ollama defaults to a 4k context on GPUs under 24 GiB ([Ollama context-length docs](https://docs.ollama.com/context-length)), so set `num_ctx` explicitly when you test Q5_K_M.',
        ],
        columns: ['Quantization', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (GB)', 'Qwen3 8B + 4k KV (GiB)', 'On a 6 GB card'],
        rows: [
          { 'Quantization': 'Q2_K', 'Llama 3.1 8B (GiB)': '2.95', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', 'On a 6 GB card': 'Fits; largest quality loss' },
          { 'Quantization': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3.74', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', 'On a 6 GB card': 'Fits; lower quality than Q4' },
          { 'Quantization': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4.58', 'Qwen3 8B (GB)': '5.03', 'Qwen3 8B + 4k KV (GiB)': '~5.25', 'On a 6 GB card': 'Fits; recommended' },
          { 'Quantization': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5.33', 'Qwen3 8B (GB)': '5.85', 'Qwen3 8B + 4k KV (GiB)': '~6.01', 'On a 6 GB card': 'Tight; short context only' },
          { 'Quantization': 'Q6_K', 'Llama 3.1 8B (GiB)': '6.14', 'Qwen3 8B (GB)': '6.73', 'Qwen3 8B + 4k KV (GiB)': '~6.83', 'On a 6 GB card': 'Does not fit' },
          { 'Quantization': 'Q8_0', 'Llama 3.1 8B (GiB)': '7.95', 'Qwen3 8B (GB)': '8.71', 'Qwen3 8B + 4k KV (GiB)': '~8.67', 'On a 6 GB card': 'Does not fit' },
        ],
      },
      body2: {
        title: 'Models That Work at Q4_K_M on 6 GB VRAM',
        content: [
          'Qwen3 8B is a current 8B option. Its Hugging Face GGUF file at Q4_K_M is 5.03 GB, the license is Apache-2.0, and the model card states 32,768 tokens of native context (131,072 with YaRN); on 6 GB you will run far less. Run `ollama run qwen3:8b` (the [Ollama library](https://ollama.com/library/qwen3:8b) lists 5.2 GB at Q4_K_M).',
          'Llama 3.1 8B has the smaller file: 4.58 GiB at Q4_K_M in the llama.cpp table, and the Ollama library lists `llama3.1:8b` at 4.9 GB (Q4_K_M), which is the same size in decimal GB. Both fit 6 GB with a short context.',
          'If you need more context headroom than an 8B model leaves, use a smaller model instead of a lower quantization. `ollama run phi4-mini` is a 3.8B model listed at 2.5 GB in the Ollama library. At Q8_0 (8.5 bits per weight in the llama.cpp table) a 3.8B model would be about 4.0 GB by calculation (3.8 × 10⁹ × 8.5 / 8 bytes).',
          'Do not attempt 14B models on 6 GB. Qwen3 14B at Q4_K_M is 9 GB ([Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)). Even at the Q2_K rate of 3.16 bits per weight from the llama.cpp table, 14.8 billion parameters need about 5.8 GB (calculated) before any KV cache, and Q2_K has the largest quality loss. Use a smaller model at Q4_K_M instead.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Quantization on 6 GB VRAM',
        faqs: [
          {
            q: 'Can I run a 14B model on 6 GB VRAM?',
            a: 'Not comfortably. Qwen3 14B at Q4_K_M is 9 GB (Hugging Face). Q2_K would need about 5.8 GB for the weights alone (calculated from 3.16 bits per weight), which leaves no room for context, and it has the largest quality loss. Run a 7B–8B model at Q4_K_M instead.',
          },
          {
            q: 'Is Q4_K_M or Q4_K_S better for 6 GB VRAM?',
            a: 'Q4_K_M. In the llama.cpp table for Llama 3.1 8B, Q4_K_S is 4.36 GiB and Q4_K_M is 4.58 GiB, a difference of 0.22 GiB. Q4_K_M already fits 6 GB with a 4k context, so Q4_K_S is only worth considering if you need that last bit of memory.',
          },
          {
            q: 'Should I use Q5_K_M instead of Q4_K_M at 6 GB VRAM?',
            a: 'Only with a short context. Qwen3 8B at Q5_K_M is 5.85 GB; with a 4k KV cache (about 0.56 GiB, calculated) the total is about 6.0 GiB, which leaves nothing for the CUDA runtime or display. At 2k tokens the total is about 5.7 GiB. Set `num_ctx` to 2048 in Ollama and check with `ollama ps` that the model stays at 100% GPU.',
          },
          {
            q: 'What happens if my model exceeds 6 GB VRAM?',
            a: 'Ollama can load a model partly onto the GPU and partly into system memory, and `ollama ps` shows the split in its PROCESSOR column (for example 48%/52% CPU/GPU, as in the Ollama FAQ). Layers that run from system memory generally make generation much slower. If you see a CPU share, choose a smaller quantization, a smaller model or a shorter context.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best Local LLM for 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram) -- 6GB VRAM guide',
          '[Best Ollama Models for 4 GB VRAM](/prompt-bites/best-ollama-models-4gb-vram) -- 4GB VRAM models',
          '[Q4_K_M vs Q8_0: Which Quantization to Use?](/prompt-bites/q4-k-m-vs-q8-0) -- quantization comparison',
          '[What Is Q4_K_M Quantization?](/prompt-bites/what-is-q4-k-m-quantization) -- quantization explainer',
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-de.webp',
    title: 'Beste Quantisierung für 6 GB VRAM: Welche Stufe passt?',
    seoTitle: 'Beste Quantisierung für 6 GB VRAM 2026',
    metaDescription: 'Q4_K_M für 8B-Modelle bei 6 GB VRAM: 4,6–5,0 GB Datei plus 4k-Token-KV-Cache passen noch. Q5_K_M ist knapp, Q6_K und Q8_0 passen nicht. Mit Quellen.',
    publishDate: '2026-05-23',
    dateModified: '2026-11-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    leadAnswerBlock: '**Q4_K_M ist die beste Quantisierung für eine 6-GB-GPU: Die Datei eines 8B-Modells ist 4,6–5,0 GB groß, ein 4k-Token-Kontext passt also noch.** Q5_K_M ist knapp, Q6_K und Q8_0 passen nicht.',
    quickAnswerTop: {
      de: {
        question: 'Welche Quantisierungsstufe ist die beste für 6 GB VRAM?',
        answer: 'Q4_K_M. Auf dieser Stufe ist die Datei von Llama 3.1 8B 4,58 GiB und die von Qwen3 8B 5,03 GB groß; ein 4k-Token-KV-Cache für Qwen3 8B kommt mit etwa 0,56 GiB hinzu (berechnet) und passt noch in 6 GB. Q5_K_M ist zu knapp, Q6_K und höher passen nicht.',
        bullets: [
          'Llama 3.1 8B bei Q4_K_M: 4,58 GiB; Qwen3 8B bei Q4_K_M: 5,03 GB (llama.cpp-README, Hugging Face)',
          'Qwen3 8B bei Q5_K_M: 5,85 GB, mit 4k-KV-Cache etwa 6,0 GiB (berechnet): zu knapp',
          'Qwen3 14B bei Q4_K_M: 9 GB: Keine Quantisierungsstufe macht es auf 6 GB komfortabel',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Auf einer 6-GB-Karte nutzen Sie Q4_K_M für 7B–8B-Modelle: Qwen3 8B ist hier 5,03 GB, Llama 3.1 8B 4,58 GiB groß',
          'Faustregel: Modelldatei + KV-Cache + Laufzeit-Overhead müssen unter Ihrem VRAM bleiben; ein 4k-Token-KV-Cache für Qwen3 8B beträgt etwa 0,56 GiB (berechnet, f16)',
          'Q5_K_M (Qwen3 8B: 5,85 GB) plus 4k-KV-Cache ergibt etwa 6,0 GiB (berechnet): zu knapp, nur mit 2k Kontext verwenden',
          'Qwen3 14B bei Q4_K_M ist 9 GB groß: auf 6 GB nicht praktikabel, wählen Sie lieber ein kleineres Modell als eine niedrigere Quantisierung',
        ],
      },
      body1: {
        title: 'So wählen Sie die Quantisierungsstufe für 6 GB VRAM',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M ist die höchste gängige Quantisierungsstufe, deren 8B-Modelldatei samt 4k-Token-KV-Cache in 6 GB VRAM passt.' },
          { type: 'plain-terms', text: 'Wählen Sie die höchste Quantisierungsstufe, deren Modelldatei plus KV-Cache noch in Ihren VRAM passt. Niedrigere Stufen sparen Speicher, verlieren aber mehr Genauigkeit; höhere behalten die Genauigkeit, brauchen aber mehr Speicher.' },
        ],
        content: [
          'Wählen Sie die höchste Quantisierungsstufe, deren Modelldatei plus KV-Cache noch in Ihren VRAM passt. Niedrigere Stufen (Q2_K, Q3_K_M) sparen Speicher, verlieren aber mehr Genauigkeit; höhere Stufen (Q6_K, Q8_0) behalten mehr Genauigkeit, brauchen aber mehr Speicher. Die Tabelle nutzt Dateigrößen aus dem [llama.cpp-quantize-README](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md) (Llama 3.1 8B, in GiB) und der [Qwen3-8B-GGUF-Modellkarte](https://huggingface.co/Qwen/Qwen3-8B-GGUF) (Qwen3 8B, in GB). Dieses Repository listet keine Q2_K- oder Q3_K_M-Datei (in der Tabelle n/a).',
          'KV-Cache-Berechnung für Qwen3 8B: Die [config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json) nennt 36 Schichten, 8 Key-Value-Köpfe und eine Kopfdimension von 128. Bei f16 braucht ein Token 2 × 36 × 8 × 128 × 2 Byte = 147.456 Byte, also benötigen 4.096 Token etwa 0,56 GiB und 8.192 Token etwa 1,1 GiB. Das ist eine Berechnung, keine Messung; auch die CUDA-Laufzeit und Ihre Bildschirmausgabe belegen VRAM.',
          'Bei Qwen3 8B lässt Q4_K_M mit 4k Token etwa 0,75 GiB einer 6-GiB-Karte frei (6 − 4,69 − 0,56). Q5_K_M lässt bei 4k nichts frei und bei 2k etwa 0,3 GiB, verwenden Sie es daher nur mit kurzem Kontext. Ollama nutzt auf GPUs unter 24 GiB standardmäßig 4k Kontext ([Ollama-Dokumentation zur Kontextlänge](https://docs.ollama.com/context-length)); setzen Sie `num_ctx` beim Test von Q5_K_M daher ausdrücklich.',
        ],
        columns: ['Quantisierung', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (GB)', 'Qwen3 8B + 4k KV (GiB)', 'Auf 6-GB-Karte'],
        rows: [
          { 'Quantisierung': 'Q2_K', 'Llama 3.1 8B (GiB)': '2,95', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', 'Auf 6-GB-Karte': 'Passt; größter Qualitätsverlust' },
          { 'Quantisierung': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3,74', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', 'Auf 6-GB-Karte': 'Passt; schlechter als Q4' },
          { 'Quantisierung': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4,58', 'Qwen3 8B (GB)': '5,03', 'Qwen3 8B + 4k KV (GiB)': '~5,25', 'Auf 6-GB-Karte': 'Passt; empfohlen' },
          { 'Quantisierung': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5,33', 'Qwen3 8B (GB)': '5,85', 'Qwen3 8B + 4k KV (GiB)': '~6,01', 'Auf 6-GB-Karte': 'Knapp; nur kurzer Kontext' },
          { 'Quantisierung': 'Q6_K', 'Llama 3.1 8B (GiB)': '6,14', 'Qwen3 8B (GB)': '6,73', 'Qwen3 8B + 4k KV (GiB)': '~6,83', 'Auf 6-GB-Karte': 'Passt nicht' },
          { 'Quantisierung': 'Q8_0', 'Llama 3.1 8B (GiB)': '7,95', 'Qwen3 8B (GB)': '8,71', 'Qwen3 8B + 4k KV (GiB)': '~8,67', 'Auf 6-GB-Karte': 'Passt nicht' },
        ],
      },
      body2: {
        title: 'Modelle für Q4_K_M auf 6 GB VRAM',
        content: [
          'Qwen3 8B ist eine aktuelle 8B-Option. Die GGUF-Datei auf Hugging Face ist bei Q4_K_M 5,03 GB groß, die Lizenz ist Apache-2.0, und die Modellkarte nennt 32.768 Token nativen Kontext (131.072 mit YaRN); auf 6 GB nutzen Sie deutlich weniger. Starten Sie mit `ollama run qwen3:8b` (die [Ollama-Bibliothek](https://ollama.com/library/qwen3:8b) nennt 5,2 GB bei Q4_K_M).',
          'Llama 3.1 8B hat die kleinere Datei: 4,58 GiB bei Q4_K_M in der llama.cpp-Tabelle; die Ollama-Bibliothek nennt `llama3.1:8b` mit 4,9 GB (Q4_K_M), das ist dieselbe Größe in dezimalen GB. Beide passen mit kurzem Kontext auf 6 GB.',
          'Brauchen Sie mehr Kontextspielraum, als ein 8B-Modell lässt, nehmen Sie ein kleineres Modell statt einer niedrigeren Quantisierung. `ollama run phi4-mini` ist ein 3,8B-Modell, das die Ollama-Bibliothek mit 2,5 GB listet. Bei Q8_0 (8,5 Bit pro Gewicht laut llama.cpp-Tabelle) wäre ein 3,8B-Modell rechnerisch etwa 4,0 GB groß (3,8 × 10⁹ × 8,5 / 8 Byte).',
          'Versuchen Sie keine 14B-Modelle auf 6 GB. Qwen3 14B bei Q4_K_M ist 9 GB groß ([Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)). Selbst mit der Q2_K-Rate von 3,16 Bit pro Gewicht aus der llama.cpp-Tabelle brauchen 14,8 Milliarden Parameter etwa 5,8 GB (berechnet), noch vor dem KV-Cache, und Q2_K hat den größten Qualitätsverlust. Nehmen Sie stattdessen ein kleineres Modell bei Q4_K_M.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zur Quantisierung bei 6 GB VRAM',
        faqs: [
          {
            q: 'Kann ich ein 14B-Modell auf 6 GB VRAM betreiben?',
            a: 'Nicht komfortabel. Qwen3 14B bei Q4_K_M ist 9 GB groß (Hugging Face). Q2_K bräuchte allein für die Gewichte etwa 5,8 GB (berechnet aus 3,16 Bit pro Gewicht), lässt also keinen Platz für Kontext und hat den größten Qualitätsverlust. Nutzen Sie stattdessen ein 7B–8B-Modell bei Q4_K_M.',
          },
          {
            q: 'Ist Q4_K_M oder Q4_K_S besser für 6 GB VRAM?',
            a: 'Q4_K_M. In der llama.cpp-Tabelle für Llama 3.1 8B ist Q4_K_S 4,36 GiB und Q4_K_M 4,58 GiB groß, ein Unterschied von 0,22 GiB. Q4_K_M passt mit 4k Kontext bereits in 6 GB; Q4_K_S lohnt nur, wenn Sie diesen letzten Rest Speicher brauchen.',
          },
          {
            q: 'Sollte ich Q5_K_M statt Q4_K_M bei 6 GB VRAM verwenden?',
            a: 'Nur mit kurzem Kontext. Qwen3 8B bei Q5_K_M ist 5,85 GB groß; mit 4k-KV-Cache (etwa 0,56 GiB, berechnet) ergeben sich etwa 6,0 GiB, sodass nichts für CUDA-Laufzeit oder Bildschirmausgabe bleibt. Bei 2k Token sind es etwa 5,7 GiB. Setzen Sie in Ollama `num_ctx` auf 2048 und prüfen Sie mit `ollama ps`, dass das Modell bei 100% GPU bleibt.',
          },
          {
            q: 'Was passiert, wenn mein Modell 6 GB VRAM überschreitet?',
            a: 'Ollama kann ein Modell teils auf der GPU und teils im Arbeitsspeicher laden; `ollama ps` zeigt die Aufteilung in der Spalte PROCESSOR (etwa 48%/52% CPU/GPU, wie in der Ollama-FAQ). Schichten, die im Arbeitsspeicher laufen, machen die Generierung in der Regel deutlich langsamer. Sehen Sie einen CPU-Anteil, wählen Sie eine kleinere Quantisierung, ein kleineres Modell oder einen kürzeren Kontext.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Bestes lokales LLM für 6 GB VRAM](/de/prompt-bites/best-local-llm-6gb-vram) -- Leitfaden für 6 GB VRAM',
          '[Beste Ollama-Modelle für 4 GB VRAM](/de/prompt-bites/best-ollama-models-4gb-vram) -- Modelle für 4 GB VRAM',
          '[Q4_K_M vs. Q8_0: Welche Quantisierung?](/de/prompt-bites/q4-k-m-vs-q8-0) -- Quantisierungsvergleich',
          '[Was ist Q4_K_M-Quantisierung?](/de/prompt-bites/what-is-q4-k-m-quantization) -- Quantisierung erklärt',
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-fr.webp',
    title: 'Meilleure quantisation pour 6 Go de VRAM : quel niveau choisir ?',
    seoTitle: 'Meilleure quantisation 6 Go VRAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M pour les modèles 8B avec 6 Go de VRAM : un fichier de 4.6–5.0 Go plus un cache KV de 4k tokens tient encore. Q5_K_M est juste ; Q6_K et Q8_0 non.',
    publishDate: '2026-05-23',
    dateModified: '2026-11-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    leadAnswerBlock: '**Q4_K_M est la meilleure quantisation pour un GPU de 6 Go : le fichier d\'un modèle 8B fait 4.6–5.0 Go, donc un contexte de 4k tokens tient encore.** Q5_K_M est juste, Q6_K et Q8_0 ne tiennent pas.',
    quickAnswerTop: {
      fr: {
        question: 'Quel niveau de quantisation est le meilleur pour 6 Go de VRAM ?',
        answer: 'Q4_K_M. À ce niveau, le fichier de Llama 3.1 8B fait 4.58 GiB et celui de Qwen3 8B 5.03 Go ; un cache KV de 4k tokens pour Qwen3 8B ajoute environ 0.56 GiB (calculé), ce qui tient encore dans 6 Go. Q5_K_M est trop juste, Q6_K et au-dessus ne tiennent pas.',
        bullets: [
          'Llama 3.1 8B en Q4_K_M : 4.58 GiB ; Qwen3 8B en Q4_K_M : 5.03 Go (README llama.cpp, Hugging Face)',
          'Qwen3 8B en Q5_K_M : 5.85 Go, soit environ 6.0 GiB avec un cache KV de 4k (calculé) : trop juste',
          'Qwen3 14B en Q4_K_M : 9 Go : aucun niveau de quantisation ne le rend confortable sur 6 Go',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Sur une carte de 6 Go, utilisez Q4_K_M pour les modèles 7B–8B : Qwen3 8B fait 5.03 Go et Llama 3.1 8B 4.58 GiB à ce niveau',
          'Règle pratique : fichier du modèle + cache KV + surcoût d\'exécution doivent rester sous votre VRAM ; un cache KV de 4k tokens pour Qwen3 8B représente environ 0.56 GiB (calculé, f16)',
          'Q5_K_M (Qwen3 8B : 5.85 Go) plus un cache KV de 4k donne environ 6.0 GiB (calculé) : trop juste, à réserver à un contexte de 2k',
          'Qwen3 14B en Q4_K_M fait 9 Go : inutilisable sur 6 Go, choisissez un modèle plus petit plutôt qu\'une quantisation plus basse',
        ],
      },
      body1: {
        title: 'Comment choisir le niveau de quantisation pour 6 Go de VRAM',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M est le plus haut niveau de quantisation courant dont le fichier d\'un modèle 8B plus un cache KV de 4k tokens tient dans 6 Go de VRAM.' },
          { type: 'plain-terms', text: 'Choisissez le plus haut niveau de quantisation dont le fichier du modèle plus le cache KV tient encore dans votre VRAM. Les niveaux bas économisent de la mémoire mais perdent plus de précision ; les niveaux hauts gardent la précision mais demandent plus de mémoire.' },
        ],
        content: [
          'Choisissez le plus haut niveau de quantisation dont le fichier du modèle plus le cache KV tient encore dans votre VRAM. Les niveaux bas (Q2_K, Q3_K_M) économisent de la mémoire mais perdent plus de précision ; les niveaux hauts (Q6_K, Q8_0) gardent plus de précision mais demandent plus de mémoire. Le tableau reprend les tailles de fichier du [README quantize de llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md) (Llama 3.1 8B, en GiB) et de la [fiche du modèle Qwen3-8B-GGUF](https://huggingface.co/Qwen/Qwen3-8B-GGUF) (Qwen3 8B, en Go). Ce dépôt ne propose aucun fichier Q2_K ni Q3_K_M (n/a dans le tableau).',
          'Calcul du cache KV pour Qwen3 8B : son [config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json) indique 36 couches, 8 têtes clé-valeur et une dimension de tête de 128. En f16, un token demande 2 × 36 × 8 × 128 × 2 octets = 147 456 octets ; 4 096 tokens représentent donc environ 0.56 GiB et 8 192 tokens environ 1.1 GiB. C\'est un calcul, pas une mesure ; le runtime CUDA et votre affichage utilisent aussi de la VRAM.',
          'Avec Qwen3 8B, Q4_K_M laisse environ 0.75 GiB sur une carte de 6 GiB à 4k tokens (6 − 4.69 − 0.56). Q5_K_M n\'en laisse aucun à 4k et environ 0.3 GiB à 2k : réservez-le à un contexte court. Ollama utilise par défaut un contexte de 4k sur les GPU de moins de 24 GiB ([documentation Ollama sur la longueur de contexte](https://docs.ollama.com/context-length)) ; définissez donc `num_ctx` explicitement pour tester Q5_K_M.',
        ],
        columns: ['Quantisation', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (Go)', 'Qwen3 8B + KV 4k (GiB)', 'Sur carte de 6 Go'],
        rows: [
          { 'Quantisation': 'Q2_K', 'Llama 3.1 8B (GiB)': '2.95', 'Qwen3 8B (Go)': 'n/a', 'Qwen3 8B + KV 4k (GiB)': 'n/a', 'Sur carte de 6 Go': 'Tient ; plus forte perte' },
          { 'Quantisation': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3.74', 'Qwen3 8B (Go)': 'n/a', 'Qwen3 8B + KV 4k (GiB)': 'n/a', 'Sur carte de 6 Go': 'Tient ; qualité sous Q4' },
          { 'Quantisation': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4.58', 'Qwen3 8B (Go)': '5.03', 'Qwen3 8B + KV 4k (GiB)': '~5.25', 'Sur carte de 6 Go': 'Tient ; recommandé' },
          { 'Quantisation': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5.33', 'Qwen3 8B (Go)': '5.85', 'Qwen3 8B + KV 4k (GiB)': '~6.01', 'Sur carte de 6 Go': 'Juste ; contexte court' },
          { 'Quantisation': 'Q6_K', 'Llama 3.1 8B (GiB)': '6.14', 'Qwen3 8B (Go)': '6.73', 'Qwen3 8B + KV 4k (GiB)': '~6.83', 'Sur carte de 6 Go': 'Ne tient pas' },
          { 'Quantisation': 'Q8_0', 'Llama 3.1 8B (GiB)': '7.95', 'Qwen3 8B (Go)': '8.71', 'Qwen3 8B + KV 4k (GiB)': '~8.67', 'Sur carte de 6 Go': 'Ne tient pas' },
        ],
      },
      body2: {
        title: 'Modèles adaptés à Q4_K_M avec 6 Go de VRAM',
        content: [
          'Qwen3 8B est une option 8B actuelle. Son fichier GGUF sur Hugging Face en Q4_K_M fait 5.03 Go, la licence est Apache-2.0 et la fiche indique 32 768 tokens de contexte natif (131 072 avec YaRN) ; sur 6 Go, vous en utiliserez bien moins. Lancez `ollama run qwen3:8b` (la [bibliothèque Ollama](https://ollama.com/library/qwen3:8b) indique 5.2 Go en Q4_K_M).',
          'Llama 3.1 8B a le fichier le plus petit : 4.58 GiB en Q4_K_M dans le tableau llama.cpp ; la bibliothèque Ollama indique `llama3.1:8b` à 4.9 Go (Q4_K_M), soit la même taille en Go décimaux. Les deux tiennent dans 6 Go avec un contexte court.',
          'Si vous voulez plus de marge de contexte qu\'un modèle 8B n\'en laisse, prenez un modèle plus petit plutôt qu\'une quantisation plus basse. `ollama run phi4-mini` est un modèle 3.8B indiqué à 2.5 Go dans la bibliothèque Ollama. En Q8_0 (8.5 bits par poids dans le tableau llama.cpp), un modèle 3.8B ferait environ 4.0 Go par calcul (3.8 × 10⁹ × 8.5 / 8 octets).',
          'N\'essayez pas les modèles 14B sur 6 Go. Qwen3 14B en Q4_K_M fait 9 Go ([Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)). Même au taux Q2_K de 3.16 bits par poids du tableau llama.cpp, 14.8 milliards de paramètres demandent environ 5.8 Go (calculé) avant tout cache KV, et Q2_K a la plus forte perte de qualité. Prenez plutôt un modèle plus petit en Q4_K_M.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la quantisation avec 6 Go de VRAM',
        faqs: [
          {
            q: 'Puis-je exécuter un modèle 14B avec 6 Go de VRAM ?',
            a: 'Pas confortablement. Qwen3 14B en Q4_K_M fait 9 Go (Hugging Face). Q2_K demanderait environ 5.8 Go pour les seuls poids (calculé à 3.16 bits par poids), sans place pour le contexte, avec la plus forte perte de qualité. Utilisez plutôt un modèle 7B–8B en Q4_K_M.',
          },
          {
            q: 'Q4_K_M ou Q4_K_S pour 6 Go de VRAM ?',
            a: 'Q4_K_M. Dans le tableau llama.cpp pour Llama 3.1 8B, Q4_K_S fait 4.36 GiB et Q4_K_M 4.58 GiB, soit 0.22 GiB d\'écart. Q4_K_M tient déjà dans 6 Go avec un contexte de 4k ; Q4_K_S ne vaut le coup que si vous avez besoin de ce dernier reste de mémoire.',
          },
          {
            q: 'Faut-il utiliser Q5_K_M plutôt que Q4_K_M avec 6 Go de VRAM ?',
            a: 'Seulement avec un contexte court. Qwen3 8B en Q5_K_M fait 5.85 Go ; avec un cache KV de 4k (environ 0.56 GiB, calculé), le total atteint environ 6.0 GiB, sans rien pour le runtime CUDA ni l\'affichage. À 2k tokens, le total est d\'environ 5.7 GiB. Réglez `num_ctx` sur 2048 dans Ollama et vérifiez avec `ollama ps` que le modèle reste à 100% GPU.',
          },
          {
            q: 'Que se passe-t-il si mon modèle dépasse 6 Go de VRAM ?',
            a: 'Ollama peut charger un modèle en partie sur le GPU et en partie en mémoire système ; `ollama ps` affiche la répartition dans la colonne PROCESSOR (par exemple 48%/52% CPU/GPU, comme dans la FAQ d\'Ollama). Les couches exécutées depuis la mémoire système ralentissent en général fortement la génération. Si une part CPU apparaît, choisissez une quantisation plus petite, un modèle plus petit ou un contexte plus court.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Meilleur LLM local pour 6 Go de VRAM](/fr/prompt-bites/best-local-llm-6gb-vram) -- guide 6 Go de VRAM',
          '[Meilleurs modèles Ollama pour 4 Go de VRAM](/fr/prompt-bites/best-ollama-models-4gb-vram) -- modèles pour 4 Go de VRAM',
          '[Q4_K_M ou Q8_0 : quelle quantisation choisir ?](/fr/prompt-bites/q4-k-m-vs-q8-0) -- comparaison de quantisations',
          '[Qu\'est-ce que la quantisation Q4_K_M ?](/fr/prompt-bites/what-is-q4-k-m-quantization) -- explication de la quantisation',
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-ja.webp',
    title: '6 GB VRAM に最適な量子化レベルは？',
    seoTitle: '6 GB VRAM 最適量子化 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '6 GB VRAMの8BモデルはQ4_K_Mが適合：4.6〜5.0 GBのファイルに4kトークンのKVキャッシュを足しても収まります。Q5_K_Mは余裕なし、Q6_K以上は不可。',
    publishDate: '2026-05-23',
    dateModified: '2026-11-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    leadAnswerBlock: '**6 GB GPUにはQ4_K_Mが最適です。8Bモデルのファイルは4.6〜5.0 GBで、4kトークンのコンテキストも収まります。** Q5_K_Mは余裕がなく、Q6_KとQ8_0は収まりません。',
    quickAnswerTop: {
      ja: {
        question: '6 GB VRAM に最適な量子化レベルはどれですか？',
        answer: 'Q4_K_M です。このレベルでは Llama 3.1 8B のファイルが 4.58 GiB、Qwen3 8B が 5.03 GB で、Qwen3 8B の 4k トークン分の KV キャッシュ約 0.56 GiB（計算値）を足しても 6 GB に収まります。Q5_K_M は余裕がなく、Q6_K 以上は収まりません。',
        bullets: [
          'Q4_K_M の Llama 3.1 8B は 4.58 GiB、Qwen3 8B は 5.03 GB（llama.cpp README、Hugging Face）',
          'Qwen3 8B の Q5_K_M は 5.85 GB で、4k の KV キャッシュを足すと約 6.0 GiB（計算値）：余裕なし',
          'Qwen3 14B の Q4_K_M は 9 GB：どの量子化でも 6 GB では快適に動きません',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '6 GB カードでは 7B〜8B モデルに Q4_K_M を使います。このレベルで Qwen3 8B は 5.03 GB、Llama 3.1 8B は 4.58 GiB です',
          '目安：モデルファイル + KV キャッシュ + ランタイムのオーバーヘッドが VRAM 未満であること。Qwen3 8B の 4k トークン分の KV キャッシュは約 0.56 GiB（計算値、f16）です',
          'Q5_K_M（Qwen3 8B：5.85 GB）に 4k の KV キャッシュを足すと約 6.0 GiB（計算値）で余裕がないため、2k コンテキストでのみ使います',
          'Qwen3 14B の Q4_K_M は 9 GB で、6 GB では実用的ではありません。量子化を下げるより小さいモデルを選んでください',
        ],
      },
      body1: {
        title: '6 GB VRAM で量子化レベルを選ぶ方法',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M は、8B モデルのファイルと 4k トークンの KV キャッシュが 6 GB VRAM に収まる最も高い一般的な量子化レベルです。' },
          { type: 'plain-terms', text: 'モデルファイルと KV キャッシュの合計が VRAM に収まる最も高い量子化レベルを選びます。低いレベルはメモリを節約しますが精度の低下が大きく、高いレベルは精度を保てますがメモリを多く使います。' },
        ],
        content: [
          'モデルファイルと KV キャッシュの合計が VRAM に収まる最も高い量子化レベルを選びます。低いレベル（Q2_K、Q3_K_M）はメモリを節約しますが精度の低下が大きく、高いレベル（Q6_K、Q8_0）は精度を保てますがメモリを多く使います。表のファイルサイズは [llama.cpp quantize README](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)（Llama 3.1 8B、GiB）と [Qwen3-8B-GGUF モデルカード](https://huggingface.co/Qwen/Qwen3-8B-GGUF)（Qwen3 8B、GB）によります。このリポジトリには Q2_K と Q3_K_M のファイルがないため、表では n/a としています。',
          'Qwen3 8B の KV キャッシュの計算：[config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json) には 36 層、8 個の key-value ヘッド、ヘッド次元 128 とあります。f16 では 1 トークンあたり 2 × 36 × 8 × 128 × 2 バイト = 147,456 バイトで、4,096 トークンなら約 0.56 GiB、8,192 トークンなら約 1.1 GiB です。これは計算値であり実測ではありません。CUDA ランタイムやディスプレイ出力も VRAM を使います。',
          'Qwen3 8B の場合、4k トークンでの Q4_K_M は 6 GiB カードの約 0.75 GiB を残します（6 − 4.69 − 0.56）。Q5_K_M は 4k では残りがなく、2k で約 0.3 GiB のため、短いコンテキストでのみ使ってください。Ollama は 24 GiB 未満の GPU で既定のコンテキストを 4k にします（[Ollama のコンテキスト長ドキュメント](https://docs.ollama.com/context-length)）。Q5_K_M を試すときは `num_ctx` を明示してください。',
        ],
        columns: ['量子化', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (GB)', 'Qwen3 8B + 4k KV (GiB)', '6 GB カードでの可否'],
        rows: [
          { '量子化': 'Q2_K', 'Llama 3.1 8B (GiB)': '2.95', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', '6 GB カードでの可否': '収まる。品質低下が最大' },
          { '量子化': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3.74', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', '6 GB カードでの可否': '収まる。Q4 より低品質' },
          { '量子化': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4.58', 'Qwen3 8B (GB)': '5.03', 'Qwen3 8B + 4k KV (GiB)': '~5.25', '6 GB カードでの可否': '収まる。推奨' },
          { '量子化': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5.33', 'Qwen3 8B (GB)': '5.85', 'Qwen3 8B + 4k KV (GiB)': '~6.01', '6 GB カードでの可否': '余裕なし。短い文脈のみ' },
          { '量子化': 'Q6_K', 'Llama 3.1 8B (GiB)': '6.14', 'Qwen3 8B (GB)': '6.73', 'Qwen3 8B + 4k KV (GiB)': '~6.83', '6 GB カードでの可否': '収まらない' },
          { '量子化': 'Q8_0', 'Llama 3.1 8B (GiB)': '7.95', 'Qwen3 8B (GB)': '8.71', 'Qwen3 8B + 4k KV (GiB)': '~8.67', '6 GB カードでの可否': '収まらない' },
        ],
      },
      body2: {
        title: '6 GB VRAM で Q4_K_M を使えるモデル',
        content: [
          'Qwen3 8B は現行の 8B の選択肢です。Hugging Face の GGUF ファイルは Q4_K_M で 5.03 GB、ライセンスは Apache-2.0、モデルカードによるネイティブのコンテキストは 32,768 トークン（YaRN で 131,072）ですが、6 GB ではそれよりかなり短くなります。`ollama run qwen3:8b` で実行できます（[Ollama ライブラリ](https://ollama.com/library/qwen3:8b)では Q4_K_M で 5.2 GB）。',
          'Llama 3.1 8B はファイルが小さく、llama.cpp の表では Q4_K_M で 4.58 GiB、Ollama ライブラリでは `llama3.1:8b` が 4.9 GB（Q4_K_M）で、十進 GB では同じサイズです。どちらも短いコンテキストなら 6 GB に収まります。',
          '8B モデルより大きなコンテキストの余裕が必要なら、量子化を下げるのではなく小さいモデルを使います。`ollama run phi4-mini` は 3.8B モデルで、Ollama ライブラリでは 2.5 GB です。Q8_0（llama.cpp の表で 1 重みあたり 8.5 ビット）なら 3.8B モデルは計算上約 4.0 GB になります（3.8 × 10⁹ × 8.5 / 8 バイト）。',
          '6 GB で 14B モデルは試さないでください。Qwen3 14B の Q4_K_M は 9 GB です（[Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)）。llama.cpp の表の Q2_K の 1 重みあたり 3.16 ビットでも、148 億パラメータで KV キャッシュ以前に約 5.8 GB（計算値）が必要で、Q2_K は品質低下が最大です。代わりに小さいモデルを Q4_K_M で使ってください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '6 GB VRAM の量子化に関するクイック回答',
        faqs: [
          {
            q: '6 GB VRAM で 14B モデルを動かせますか？',
            a: '快適には動きません。Qwen3 14B の Q4_K_M は 9 GB です（Hugging Face）。Q2_K は重みだけで約 5.8 GB（1 重みあたり 3.16 ビットからの計算値）必要で、コンテキストの余地がなく、品質低下も最大です。代わりに 7B〜8B モデルを Q4_K_M で使ってください。',
          },
          {
            q: '6 GB VRAM では Q4_K_M と Q4_K_S のどちらが良いですか？',
            a: 'Q4_K_M です。llama.cpp の Llama 3.1 8B の表では Q4_K_S が 4.36 GiB、Q4_K_M が 4.58 GiB で、差は 0.22 GiB です。Q4_K_M は 4k コンテキストでもすでに 6 GB に収まるため、Q4_K_S はその分のメモリが本当に必要な場合のみ検討してください。',
          },
          {
            q: '6 GB VRAM で Q4_K_M の代わりに Q5_K_M を使うべきですか？',
            a: '短いコンテキストの場合のみです。Qwen3 8B の Q5_K_M は 5.85 GB で、4k の KV キャッシュ（約 0.56 GiB、計算値）を足すと約 6.0 GiB になり、CUDA ランタイムやディスプレイの分が残りません。2k トークンなら合計は約 5.7 GiB です。Ollama で `num_ctx` を 2048 に設定し、`ollama ps` でモデルが 100% GPU のままか確認してください。',
          },
          {
            q: 'モデルが 6 GB VRAM を超えるとどうなりますか？',
            a: 'Ollama はモデルを GPU とシステムメモリに分けて読み込めます。`ollama ps` の PROCESSOR 列に配分が表示されます（Ollama FAQ の例では 48%/52% CPU/GPU）。システムメモリで動く層があると、一般に生成速度は大きく低下します。CPU の割合が表示される場合は、より小さい量子化、より小さいモデル、または短いコンテキストを選んでください。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[6 GB VRAM に最適なローカル LLM](/ja/prompt-bites/best-local-llm-6gb-vram) -- 6 GB VRAM ガイド',
          '[4 GB VRAM に最適な Ollama モデル](/ja/prompt-bites/best-ollama-models-4gb-vram) -- 4 GB VRAM 向けモデル',
          '[Q4_K_M と Q8_0：どちらを選ぶか](/ja/prompt-bites/q4-k-m-vs-q8-0) -- 量子化の比較',
          '[Q4_K_M 量子化とは](/ja/prompt-bites/what-is-q4-k-m-quantization) -- 量子化の解説',
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-zh.webp',
    title: '6 GB 显存最佳量化等级是哪个？',
    seoTitle: '6 GB 显存最佳量化 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '6 GB 显存跑 8B 模型选 Q4_K_M：4.6–5.0 GB 的文件加上 4k tokens 的 KV 缓存仍可容纳。Q5_K_M 余量很小，Q6_K 及以上放不下。',
    publishDate: '2026-05-23',
    dateModified: '2026-11-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    leadAnswerBlock: '**6 GB 显卡最适合 Q4_K_M：8B 模型文件为 4.6–5.0 GB，4k tokens 上下文仍可容纳。** Q5_K_M 余量很小，Q6_K 和 Q8_0 放不下。',
    quickAnswerTop: {
      zh: {
        question: '6 GB 显存最佳量化等级是哪个？',
        answer: 'Q4_K_M。该等级下 Llama 3.1 8B 文件为 4.58 GiB，Qwen3 8B 为 5.03 GB；Qwen3 8B 的 4k tokens KV 缓存约增加 0.56 GiB（计算值），仍可放入 6 GB。Q5_K_M 余量太小，Q6_K 及以上放不下。',
        bullets: [
          'Q4_K_M 下 Llama 3.1 8B 为 4.58 GiB，Qwen3 8B 为 5.03 GB（llama.cpp README、Hugging Face）',
          'Qwen3 8B 的 Q5_K_M 为 5.85 GB，加 4k KV 缓存约 6.0 GiB（计算值）：余量太小',
          'Qwen3 14B 的 Q4_K_M 为 9 GB：任何量化等级在 6 GB 上都不宽裕',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '6 GB 显卡上，7B–8B 模型使用 Q4_K_M：该等级下 Qwen3 8B 为 5.03 GB，Llama 3.1 8B 为 4.58 GiB',
          '经验规则：模型文件 + KV 缓存 + 运行时开销必须低于显存；Qwen3 8B 的 4k tokens KV 缓存约 0.56 GiB（计算值，f16）',
          'Q5_K_M（Qwen3 8B：5.85 GB）加 4k KV 缓存约 6.0 GiB（计算值）：余量太小，仅适合 2k 上下文',
          'Qwen3 14B 的 Q4_K_M 为 9 GB：6 GB 上不可行，应选择更小的模型，而不是更低的量化',
        ],
      },
      body1: {
        title: '如何为 6 GB 显存选择量化等级',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M 是 8B 模型文件加 4k tokens KV 缓存仍能放入 6 GB 显存的最高常用量化等级。' },
          { type: 'plain-terms', text: '选择模型文件加 KV 缓存仍能放入显存的最高量化等级。等级越低越省内存但精度损失越大；等级越高精度越好但占用更多内存。' },
        ],
        content: [
          '选择模型文件加 KV 缓存仍能放入显存的最高量化等级。较低等级（Q2_K、Q3_K_M）省内存但精度损失更大；较高等级（Q6_K、Q8_0）精度保留更多但需要更多内存。表中文件大小来自 [llama.cpp quantize README](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)（Llama 3.1 8B，单位 GiB）和 [Qwen3-8B-GGUF 模型卡](https://huggingface.co/Qwen/Qwen3-8B-GGUF)（Qwen3 8B，单位 GB）。该仓库没有 Q2_K 和 Q3_K_M 文件，表中标为 n/a。',
          'Qwen3 8B 的 KV 缓存计算：其 [config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json) 列出 36 层、8 个 key-value 头、头维度 128。f16 下每个 token 需要 2 × 36 × 8 × 128 × 2 字节 = 147,456 字节，所以 4,096 tokens 约 0.56 GiB，8,192 tokens 约 1.1 GiB。这是计算值而非实测；CUDA 运行时和显示输出也会占用显存。',
          '对 Qwen3 8B，4k tokens 下 Q4_K_M 在 6 GiB 显卡上约剩 0.75 GiB（6 − 4.69 − 0.56）。Q5_K_M 在 4k 下没有余量，在 2k 下约剩 0.3 GiB，因此仅适合短上下文。Ollama 在低于 24 GiB 显存的 GPU 上默认使用 4k 上下文（[Ollama 上下文长度文档](https://docs.ollama.com/context-length)），测试 Q5_K_M 时请显式设置 `num_ctx`。',
        ],
        columns: ['量化等级', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (GB)', 'Qwen3 8B + 4k KV (GiB)', '6 GB 显卡上'],
        rows: [
          { '量化等级': 'Q2_K', 'Llama 3.1 8B (GiB)': '2.95', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', '6 GB 显卡上': '可容纳；质量损失最大' },
          { '量化等级': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3.74', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', '6 GB 显卡上': '可容纳；质量低于 Q4' },
          { '量化等级': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4.58', 'Qwen3 8B (GB)': '5.03', 'Qwen3 8B + 4k KV (GiB)': '~5.25', '6 GB 显卡上': '可容纳；推荐' },
          { '量化等级': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5.33', 'Qwen3 8B (GB)': '5.85', 'Qwen3 8B + 4k KV (GiB)': '~6.01', '6 GB 显卡上': '余量小；仅限短上下文' },
          { '量化等级': 'Q6_K', 'Llama 3.1 8B (GiB)': '6.14', 'Qwen3 8B (GB)': '6.73', 'Qwen3 8B + 4k KV (GiB)': '~6.83', '6 GB 显卡上': '放不下' },
          { '量化等级': 'Q8_0', 'Llama 3.1 8B (GiB)': '7.95', 'Qwen3 8B (GB)': '8.71', 'Qwen3 8B + 4k KV (GiB)': '~8.67', '6 GB 显卡上': '放不下' },
        ],
      },
      body2: {
        title: '6 GB 显存上适合 Q4_K_M 的模型',
        content: [
          'Qwen3 8B 是当前的 8B 选项。其 Hugging Face GGUF 文件在 Q4_K_M 下为 5.03 GB，许可证为 Apache-2.0，模型卡称原生上下文为 32,768 tokens（YaRN 下 131,072）；在 6 GB 上实际可用的要短得多。运行 `ollama run qwen3:8b`（[Ollama 库](https://ollama.com/library/qwen3:8b)标注 Q4_K_M 为 5.2 GB）。',
          'Llama 3.1 8B 文件更小：llama.cpp 表中 Q4_K_M 为 4.58 GiB，Ollama 库标注 `llama3.1:8b` 为 4.9 GB（Q4_K_M），按十进制 GB 是同样的大小。两者在短上下文下都能放入 6 GB。',
          '如果需要比 8B 模型更多的上下文余量，请换更小的模型，而不是更低的量化。`ollama run phi4-mini` 是 3.8B 模型，Ollama 库标注为 2.5 GB。按 Q8_0（llama.cpp 表中每权重 8.5 位）计算，3.8B 模型约 4.0 GB（3.8 × 10⁹ × 8.5 / 8 字节）。',
          '不要在 6 GB 上尝试 14B 模型。Qwen3 14B 的 Q4_K_M 为 9 GB（[Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)）。即使按 llama.cpp 表中 Q2_K 的每权重 3.16 位，148 亿参数在计入 KV 缓存之前就需要约 5.8 GB（计算值），而且 Q2_K 的质量损失最大。请改用更小的模型并选 Q4_K_M。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 6 GB 显存量化的快速解答',
        faqs: [
          {
            q: '6 GB 显存能运行 14B 模型吗？',
            a: '无法宽裕运行。Qwen3 14B 的 Q4_K_M 为 9 GB（Hugging Face）。Q2_K 仅权重就约需 5.8 GB（按每权重 3.16 位计算），没有上下文空间，且质量损失最大。请改用 Q4_K_M 的 7B–8B 模型。',
          },
          {
            q: '6 GB 显存应选 Q4_K_M 还是 Q4_K_S？',
            a: 'Q4_K_M。在 llama.cpp 的 Llama 3.1 8B 表中，Q4_K_S 为 4.36 GiB，Q4_K_M 为 4.58 GiB，相差 0.22 GiB。Q4_K_M 在 4k 上下文下已能放入 6 GB，只有确实需要这点内存时才考虑 Q4_K_S。',
          },
          {
            q: '6 GB 显存应该用 Q5_K_M 代替 Q4_K_M 吗？',
            a: '仅限短上下文。Qwen3 8B 的 Q5_K_M 为 5.85 GB；加上 4k KV 缓存（约 0.56 GiB，计算值）总计约 6.0 GiB，没有给 CUDA 运行时或显示输出留余量。2k tokens 时总计约 5.7 GiB。请在 Ollama 中把 `num_ctx` 设为 2048，并用 `ollama ps` 确认模型保持 100% GPU。',
          },
          {
            q: '模型超过 6 GB 显存会怎样？',
            a: 'Ollama 可以把模型一部分加载到 GPU、一部分放在系统内存；`ollama ps` 的 PROCESSOR 列会显示分配比例（Ollama FAQ 中的例子是 48%/52% CPU/GPU）。在系统内存中运行的层通常会让生成速度明显变慢。如果看到 CPU 占比，请选择更低的量化、更小的模型或更短的上下文。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[6 GB 显存最佳本地 LLM](/zh/prompt-bites/best-local-llm-6gb-vram) -- 6 GB 显存指南',
          '[4 GB 显存最佳 Ollama 模型](/zh/prompt-bites/best-ollama-models-4gb-vram) -- 4 GB 显存模型',
          '[Q4_K_M 与 Q8_0：该选哪种量化？](/zh/prompt-bites/q4-k-m-vs-q8-0) -- 量化对比',
          '[什么是 Q4_K_M 量化？](/zh/prompt-bites/what-is-q4-k-m-quantization) -- 量化讲解',
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-pt.webp',
    title: 'Melhor quantização para 6 GB de VRAM: qual nível cabe?',
    seoTitle: 'Melhor quantização para 6 GB VRAM 2026 | PromptQuorum',
    metaDescription: 'Q4_K_M para modelos 8B com 6 GB de VRAM: um arquivo de 4.6–5.0 GB mais cache KV de 4k tokens ainda cabe. Q5_K_M fica apertado; Q6_K e Q8_0 não cabem.',
    publishDate: '2026-05-23',
    dateModified: '2026-11-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    leadAnswerBlock: '**Q4_K_M é a melhor quantização para uma GPU de 6 GB: o arquivo de um modelo 8B tem 4.6–5.0 GB, então um contexto de 4k tokens ainda cabe.** Q5_K_M fica apertado; Q6_K e Q8_0 não cabem.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor nível de quantização para 6 GB de VRAM?',
        answer: 'Q4_K_M. Nesse nível, o arquivo do Llama 3.1 8B tem 4.58 GiB e o do Qwen3 8B tem 5.03 GB; um cache KV de 4k tokens para o Qwen3 8B soma cerca de 0.56 GiB (calculado) e ainda cabe em 6 GB. Q5_K_M fica apertado demais; Q6_K e acima não cabem.',
        bullets: [
          'Llama 3.1 8B em Q4_K_M: 4.58 GiB; Qwen3 8B em Q4_K_M: 5.03 GB (README do llama.cpp, Hugging Face)',
          'Qwen3 8B em Q5_K_M: 5.85 GB, cerca de 6.0 GiB com cache KV de 4k (calculado): apertado demais',
          'Qwen3 14B em Q4_K_M: 9 GB: nenhum nível de quantização o deixa confortável em 6 GB',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Em uma placa de 6 GB, use Q4_K_M para modelos 7B–8B: o Qwen3 8B tem 5.03 GB e o Llama 3.1 8B 4.58 GiB nesse nível',
          'Regra prática: arquivo do modelo + cache KV + overhead do runtime precisam ficar abaixo da sua VRAM; um cache KV de 4k tokens para o Qwen3 8B é de cerca de 0.56 GiB (calculado, f16)',
          'Q5_K_M (Qwen3 8B: 5.85 GB) mais um cache KV de 4k dá cerca de 6.0 GiB (calculado): apertado demais, use só com contexto de 2k',
          'O Qwen3 14B em Q4_K_M tem 9 GB: inviável em 6 GB; escolha um modelo menor em vez de uma quantização mais baixa',
        ],
      },
      body1: {
        title: 'Como escolher o nível de quantização para 6 GB de VRAM',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M é o maior nível de quantização comum cujo arquivo de modelo 8B mais um cache KV de 4k tokens cabe em 6 GB de VRAM.' },
          { type: 'plain-terms', text: 'Escolha o maior nível de quantização cujo arquivo do modelo mais o cache KV ainda caiba na sua VRAM. Níveis baixos economizam memória, mas perdem mais precisão; níveis altos mantêm a precisão, mas exigem mais memória.' },
        ],
        content: [
          'Escolha o maior nível de quantização cujo arquivo do modelo mais o cache KV ainda caiba na sua VRAM. Níveis baixos (Q2_K, Q3_K_M) economizam memória, mas perdem mais precisão; níveis altos (Q6_K, Q8_0) mantêm mais precisão, mas exigem mais memória. A tabela usa tamanhos de arquivo do [README do quantize do llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md) (Llama 3.1 8B, em GiB) e da [página do modelo Qwen3-8B-GGUF](https://huggingface.co/Qwen/Qwen3-8B-GGUF) (Qwen3 8B, em GB). Esse repositório não lista arquivos Q2_K nem Q3_K_M (n/a na tabela).',
          'Cálculo do cache KV para o Qwen3 8B: o [config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json) informa 36 camadas, 8 cabeças de chave-valor e dimensão de cabeça 128. Em f16, um token precisa de 2 × 36 × 8 × 128 × 2 bytes = 147.456 bytes; assim, 4.096 tokens exigem cerca de 0.56 GiB e 8.192 tokens cerca de 1.1 GiB. É um cálculo, não uma medição; o runtime do CUDA e a saída de vídeo também usam VRAM.',
          'Com o Qwen3 8B, o Q4_K_M deixa cerca de 0.75 GiB livres em uma placa de 6 GiB a 4k tokens (6 − 4.69 − 0.56). O Q5_K_M não deixa nada a 4k e cerca de 0.3 GiB a 2k; use-o só com contexto curto. O Ollama usa por padrão 4k de contexto em GPUs com menos de 24 GiB ([documentação do Ollama sobre tamanho de contexto](https://docs.ollama.com/context-length)); por isso, defina `num_ctx` explicitamente ao testar o Q5_K_M.',
        ],
        columns: ['Quantização', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (GB)', 'Qwen3 8B + KV 4k (GiB)', 'Em placa de 6 GB'],
        rows: [
          { 'Quantização': 'Q2_K', 'Llama 3.1 8B (GiB)': '2.95', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + KV 4k (GiB)': 'n/a', 'Em placa de 6 GB': 'Cabe; maior perda' },
          { 'Quantização': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3.74', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + KV 4k (GiB)': 'n/a', 'Em placa de 6 GB': 'Cabe; abaixo do Q4' },
          { 'Quantização': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4.58', 'Qwen3 8B (GB)': '5.03', 'Qwen3 8B + KV 4k (GiB)': '~5.25', 'Em placa de 6 GB': 'Cabe; recomendado' },
          { 'Quantização': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5.33', 'Qwen3 8B (GB)': '5.85', 'Qwen3 8B + KV 4k (GiB)': '~6.01', 'Em placa de 6 GB': 'Apertado; só contexto curto' },
          { 'Quantização': 'Q6_K', 'Llama 3.1 8B (GiB)': '6.14', 'Qwen3 8B (GB)': '6.73', 'Qwen3 8B + KV 4k (GiB)': '~6.83', 'Em placa de 6 GB': 'Não cabe' },
          { 'Quantização': 'Q8_0', 'Llama 3.1 8B (GiB)': '7.95', 'Qwen3 8B (GB)': '8.71', 'Qwen3 8B + KV 4k (GiB)': '~8.67', 'Em placa de 6 GB': 'Não cabe' },
        ],
      },
      body2: {
        title: 'Modelos que funcionam com Q4_K_M em 6 GB de VRAM',
        content: [
          'O Qwen3 8B é uma opção 8B atual. O arquivo GGUF no Hugging Face em Q4_K_M tem 5.03 GB, a licença é Apache-2.0 e a página do modelo informa 32.768 tokens de contexto nativo (131.072 com YaRN); em 6 GB você usará bem menos. Execute com `ollama run qwen3:8b` (a [biblioteca do Ollama](https://ollama.com/library/qwen3:8b) informa 5.2 GB em Q4_K_M).',
          'O Llama 3.1 8B tem o arquivo menor: 4.58 GiB em Q4_K_M na tabela do llama.cpp; a biblioteca do Ollama lista o `llama3.1:8b` com 4.9 GB (Q4_K_M), o mesmo tamanho em GB decimais. Os dois cabem em 6 GB com contexto curto.',
          'Se você precisa de mais folga de contexto do que um modelo 8B deixa, use um modelo menor em vez de uma quantização mais baixa. O `ollama run phi4-mini` é um modelo de 3.8B listado com 2.5 GB na biblioteca do Ollama. Em Q8_0 (8.5 bits por peso na tabela do llama.cpp), um modelo de 3.8B teria cerca de 4.0 GB por cálculo (3.8 × 10⁹ × 8.5 / 8 bytes).',
          'Não tente modelos 14B em 6 GB. O Qwen3 14B em Q4_K_M tem 9 GB ([Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)). Mesmo com a taxa do Q2_K de 3.16 bits por peso da tabela do llama.cpp, 14.8 bilhões de parâmetros precisam de cerca de 5.8 GB (calculado) antes de qualquer cache KV, e o Q2_K tem a maior perda de qualidade. Use um modelo menor em Q4_K_M.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre quantização com 6 GB de VRAM',
        faqs: [
          {
            q: 'Posso rodar um modelo 14B com 6 GB de VRAM?',
            a: 'Não de forma confortável. O Qwen3 14B em Q4_K_M tem 9 GB (Hugging Face). O Q2_K precisaria de cerca de 5.8 GB só para os pesos (calculado a 3.16 bits por peso), sem espaço para o contexto e com a maior perda de qualidade. Use um modelo 7B–8B em Q4_K_M.',
          },
          {
            q: 'Q4_K_M ou Q4_K_S para 6 GB de VRAM?',
            a: 'Q4_K_M. Na tabela do llama.cpp para o Llama 3.1 8B, o Q4_K_S tem 4.36 GiB e o Q4_K_M 4.58 GiB, uma diferença de 0.22 GiB. O Q4_K_M já cabe em 6 GB com contexto de 4k; o Q4_K_S só vale a pena se você precisar dessa última folga de memória.',
          },
          {
            q: 'Devo usar Q5_K_M em vez de Q4_K_M com 6 GB de VRAM?',
            a: 'Só com contexto curto. O Qwen3 8B em Q5_K_M tem 5.85 GB; com um cache KV de 4k (cerca de 0.56 GiB, calculado) o total fica em cerca de 6.0 GiB, sem nada para o runtime do CUDA ou para o vídeo. Com 2k tokens, o total é de cerca de 5.7 GiB. Defina `num_ctx` como 2048 no Ollama e confirme com `ollama ps` que o modelo continua em 100% GPU.',
          },
          {
            q: 'O que acontece se meu modelo passar de 6 GB de VRAM?',
            a: 'O Ollama pode carregar um modelo parte na GPU e parte na memória do sistema; o `ollama ps` mostra a divisão na coluna PROCESSOR (por exemplo 48%/52% CPU/GPU, como no FAQ do Ollama). Camadas executadas na memória do sistema costumam deixar a geração bem mais lenta. Se aparecer uma fatia de CPU, escolha uma quantização menor, um modelo menor ou um contexto mais curto.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Melhor LLM local para 6 GB de VRAM](/pt/prompt-bites/best-local-llm-6gb-vram) -- guia para 6 GB de VRAM',
          '[Melhores modelos Ollama para 4 GB de VRAM](/pt/prompt-bites/best-ollama-models-4gb-vram) -- modelos para 4 GB de VRAM',
          '[Q4_K_M vs Q8_0: qual quantização usar?](/pt/prompt-bites/q4-k-m-vs-q8-0) -- comparação de quantizações',
          '[O que é a quantização Q4_K_M?](/pt/prompt-bites/what-is-q4-k-m-quantization) -- explicação da quantização',
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-es.webp',
    title: '¿Mejor cuantización para 6 GB de VRAM: qué nivel cabe?',
    seoTitle: 'Mejor cuantización para 6 GB VRAM 2026 | PromptQuorum',
    metaDescription: 'Q4_K_M para modelos 8B con 6 GB de VRAM: un archivo de 4.6–5.0 GB más una caché KV de 4k tokens aún cabe. Q5_K_M queda justo; Q6_K y Q8_0 no caben.',
    publishDate: '2026-05-23',
    dateModified: '2026-11-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    leadAnswerBlock: '**Q4_K_M es la mejor cuantización para una GPU de 6 GB: el archivo de un modelo 8B pesa 4.6–5.0 GB, así que aún cabe un contexto de 4k tokens.** Q5_K_M queda justo; Q6_K y Q8_0 no caben.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor nivel de cuantización para 6 GB de VRAM?',
        answer: 'Q4_K_M. En este nivel el archivo de Llama 3.1 8B pesa 4.58 GiB y el de Qwen3 8B 5.03 GB; una caché KV de 4k tokens para Qwen3 8B añade unos 0.56 GiB (calculado) y aún cabe en 6 GB. Q5_K_M queda demasiado justo; Q6_K y superiores no caben.',
        bullets: [
          'Llama 3.1 8B en Q4_K_M: 4.58 GiB; Qwen3 8B en Q4_K_M: 5.03 GB (README de llama.cpp, Hugging Face)',
          'Qwen3 8B en Q5_K_M: 5.85 GB, unos 6.0 GiB con caché KV de 4k (calculado): demasiado justo',
          'Qwen3 14B en Q4_K_M: 9 GB: ningún nivel de cuantización lo hace cómodo en 6 GB',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'En una tarjeta de 6 GB, usa Q4_K_M para modelos 7B–8B: Qwen3 8B pesa 5.03 GB y Llama 3.1 8B 4.58 GiB en este nivel',
          'Regla práctica: archivo del modelo + caché KV + sobrecarga del runtime deben quedar por debajo de tu VRAM; una caché KV de 4k tokens para Qwen3 8B son unos 0.56 GiB (calculado, f16)',
          'Q5_K_M (Qwen3 8B: 5.85 GB) más una caché KV de 4k son unos 6.0 GiB (calculado): demasiado justo, úsalo solo con contexto de 2k',
          'Qwen3 14B en Q4_K_M pesa 9 GB: no es viable en 6 GB; elige un modelo más pequeño en lugar de una cuantización más baja',
        ],
      },
      body1: {
        title: 'Cómo elegir el nivel de cuantización para 6 GB de VRAM',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M es el nivel de cuantización común más alto cuyo archivo de modelo 8B más una caché KV de 4k tokens cabe en 6 GB de VRAM.' },
          { type: 'plain-terms', text: 'Elige el nivel de cuantización más alto cuyo archivo del modelo más la caché KV aún quepa en tu VRAM. Los niveles bajos ahorran memoria pero pierden más precisión; los altos conservan precisión pero necesitan más memoria.' },
        ],
        content: [
          'Elige el nivel de cuantización más alto cuyo archivo del modelo más la caché KV aún quepa en tu VRAM. Los niveles bajos (Q2_K, Q3_K_M) ahorran memoria pero pierden más precisión; los altos (Q6_K, Q8_0) conservan más precisión pero necesitan más memoria. La tabla usa tamaños de archivo del [README de quantize de llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md) (Llama 3.1 8B, en GiB) y de la [ficha del modelo Qwen3-8B-GGUF](https://huggingface.co/Qwen/Qwen3-8B-GGUF) (Qwen3 8B, en GB). Ese repositorio no ofrece archivos Q2_K ni Q3_K_M (n/a en la tabla).',
          'Cálculo de la caché KV para Qwen3 8B: su [config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json) indica 36 capas, 8 cabezas clave-valor y una dimensión de cabeza de 128. En f16, un token necesita 2 × 36 × 8 × 128 × 2 bytes = 147,456 bytes, así que 4,096 tokens requieren unos 0.56 GiB y 8,192 tokens unos 1.1 GiB. Es un cálculo, no una medición; el runtime de CUDA y tu pantalla también usan VRAM.',
          'Con Qwen3 8B, Q4_K_M deja unos 0.75 GiB de una tarjeta de 6 GiB a 4k tokens (6 − 4.69 − 0.56). Q5_K_M no deja nada a 4k y unos 0.3 GiB a 2k, así que úsalo solo con contexto corto. Ollama usa por defecto 4k de contexto en GPU de menos de 24 GiB ([documentación de Ollama sobre longitud de contexto](https://docs.ollama.com/context-length)); define `num_ctx` de forma explícita al probar Q5_K_M.',
        ],
        columns: ['Cuantización', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (GB)', 'Qwen3 8B + KV 4k (GiB)', 'En tarjeta de 6 GB'],
        rows: [
          { 'Cuantización': 'Q2_K', 'Llama 3.1 8B (GiB)': '2.95', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + KV 4k (GiB)': 'n/a', 'En tarjeta de 6 GB': 'Cabe; mayor pérdida' },
          { 'Cuantización': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3.74', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + KV 4k (GiB)': 'n/a', 'En tarjeta de 6 GB': 'Cabe; menos calidad que Q4' },
          { 'Cuantización': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4.58', 'Qwen3 8B (GB)': '5.03', 'Qwen3 8B + KV 4k (GiB)': '~5.25', 'En tarjeta de 6 GB': 'Cabe; recomendado' },
          { 'Cuantización': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5.33', 'Qwen3 8B (GB)': '5.85', 'Qwen3 8B + KV 4k (GiB)': '~6.01', 'En tarjeta de 6 GB': 'Justo; solo contexto corto' },
          { 'Cuantización': 'Q6_K', 'Llama 3.1 8B (GiB)': '6.14', 'Qwen3 8B (GB)': '6.73', 'Qwen3 8B + KV 4k (GiB)': '~6.83', 'En tarjeta de 6 GB': 'No cabe' },
          { 'Cuantización': 'Q8_0', 'Llama 3.1 8B (GiB)': '7.95', 'Qwen3 8B (GB)': '8.71', 'Qwen3 8B + KV 4k (GiB)': '~8.67', 'En tarjeta de 6 GB': 'No cabe' },
        ],
      },
      body2: {
        title: 'Modelos que funcionan con Q4_K_M en 6 GB de VRAM',
        content: [
          'Qwen3 8B es una opción 8B actual. Su archivo GGUF en Hugging Face en Q4_K_M pesa 5.03 GB, la licencia es Apache-2.0 y la ficha indica 32,768 tokens de contexto nativo (131,072 con YaRN); en 6 GB usarás mucho menos. Ejecútalo con `ollama run qwen3:8b` (la [biblioteca de Ollama](https://ollama.com/library/qwen3:8b) indica 5.2 GB en Q4_K_M).',
          'Llama 3.1 8B tiene el archivo más pequeño: 4.58 GiB en Q4_K_M en la tabla de llama.cpp; la biblioteca de Ollama indica `llama3.1:8b` con 4.9 GB (Q4_K_M), el mismo tamaño en GB decimales. Ambos caben en 6 GB con contexto corto.',
          'Si necesitas más margen de contexto del que deja un modelo 8B, usa un modelo más pequeño en lugar de una cuantización más baja. `ollama run phi4-mini` es un modelo de 3.8B que la biblioteca de Ollama indica con 2.5 GB. En Q8_0 (8.5 bits por peso en la tabla de llama.cpp), un modelo de 3.8B ocuparía unos 4.0 GB por cálculo (3.8 × 10⁹ × 8.5 / 8 bytes).',
          'No intentes modelos 14B en 6 GB. Qwen3 14B en Q4_K_M pesa 9 GB ([Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)). Incluso con la tasa de Q2_K de 3.16 bits por peso de la tabla de llama.cpp, 14.8 mil millones de parámetros necesitan unos 5.8 GB (calculado) antes de cualquier caché KV, y Q2_K tiene la mayor pérdida de calidad. Usa en su lugar un modelo más pequeño en Q4_K_M.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre cuantización con 6 GB de VRAM',
        faqs: [
          {
            q: '¿Puedo ejecutar un modelo 14B con 6 GB de VRAM?',
            a: 'No de forma cómoda. Qwen3 14B en Q4_K_M pesa 9 GB (Hugging Face). Q2_K necesitaría unos 5.8 GB solo para los pesos (calculado a 3.16 bits por peso), sin espacio para el contexto y con la mayor pérdida de calidad. Usa un modelo 7B–8B en Q4_K_M.',
          },
          {
            q: '¿Q4_K_M o Q4_K_S para 6 GB de VRAM?',
            a: 'Q4_K_M. En la tabla de llama.cpp para Llama 3.1 8B, Q4_K_S pesa 4.36 GiB y Q4_K_M 4.58 GiB, una diferencia de 0.22 GiB. Q4_K_M ya cabe en 6 GB con contexto de 4k; Q4_K_S solo compensa si necesitas ese último margen de memoria.',
          },
          {
            q: '¿Debo usar Q5_K_M en lugar de Q4_K_M con 6 GB de VRAM?',
            a: 'Solo con contexto corto. Qwen3 8B en Q5_K_M pesa 5.85 GB; con una caché KV de 4k (unos 0.56 GiB, calculado) el total es de unos 6.0 GiB, sin nada para el runtime de CUDA ni la pantalla. A 2k tokens el total es de unos 5.7 GiB. Fija `num_ctx` en 2048 en Ollama y comprueba con `ollama ps` que el modelo sigue al 100% GPU.',
          },
          {
            q: '¿Qué pasa si mi modelo supera los 6 GB de VRAM?',
            a: 'Ollama puede cargar un modelo en parte en la GPU y en parte en la memoria del sistema; `ollama ps` muestra el reparto en la columna PROCESSOR (por ejemplo 48%/52% CPU/GPU, como en las FAQ de Ollama). Las capas que se ejecutan desde la memoria del sistema suelen ralentizar mucho la generación. Si ves una parte en CPU, elige una cuantización más baja, un modelo más pequeño o un contexto más corto.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mejor LLM local para 6 GB de VRAM](/es/prompt-bites/best-local-llm-6gb-vram) -- guía para 6 GB de VRAM',
          '[Mejores modelos de Ollama para 4 GB de VRAM](/es/prompt-bites/best-ollama-models-4gb-vram) -- modelos para 4 GB de VRAM',
          '[Q4_K_M vs Q8_0: ¿qué cuantización usar?](/es/prompt-bites/q4-k-m-vs-q8-0) -- comparación de cuantizaciones',
          '[¿Qué es la cuantización Q4_K_M?](/es/prompt-bites/what-is-q4-k-m-quantization) -- explicación de la cuantización',
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-ar.webp',
    title: 'أفضل تكميم لـ⁨6 GB VRAM⁩: أي مستوى يتسع؟',
    seoTitle: 'أفضل تكميم لـ⁨6 GB VRAM⁩: ⁨Q4⁩_⁨K⁩_⁨M⁩ أم ⁨Q5⁩_⁨K⁩_⁨M⁩؟ ⁨2026⁩',
    metaDescription: 'اختر Q4_K_M لنماذج 8B مع 6 GB VRAM: ملف بحجم 4.6–5.0 GB مع ذاكرة KV لسياق 4k رمز يتسع. Q5_K_M ضيق، و Q6_K و Q8_0 لا يتسعان.',
    publishDate: '2026-05-23',
    dateModified: '2026-11-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    leadAnswerBlock: '**Q4_K_M هو أفضل تكميم لبطاقة بذاكرة 6 GB: ملف نموذج 8B بحجم 4.6–5.0 GB، فيتسع معه سياق بطول 4k رمز.** Q5_K_M ضيق، ولا يتسع Q6_K ولا Q8_0.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل مستوى تكميم لـ 6 GB VRAM؟',
        answer: 'Q4_K_M. عند هذا المستوى يبلغ ملف Llama 3.1 8B نحو 4.58 GiB وملف Qwen3 8B نحو 5.03 GB؛ وتضيف ذاكرة KV لسياق 4k رمز في Qwen3 8B نحو 0.56 GiB (محسوبة) ويظل المجموع داخل 6 GB. Q5_K_M ضيق جداً، ولا يتسع Q6_K وما فوقه.',
        bullets: [
          'Llama 3.1 8B عند Q4_K_M: 4.58 GiB؛ وQwen3 8B عند Q4_K_M: 5.03 GB (README الخاص بـ llama.cpp، وHugging Face)',
          'Qwen3 8B عند Q5_K_M: 5.85 GB، ونحو 6.0 GiB مع KV لسياق 4k (محسوب): ضيق جداً',
          'Qwen3 14B عند Q4_K_M: 9 GB: لا يجعله أي مستوى تكميم مريحاً على 6 GB',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'على بطاقة 6 GB استخدم Q4_K_M لنماذج 7B–8B: يبلغ Qwen3 8B نحو 5.03 GB وLlama 3.1 8B نحو 4.58 GiB عند هذا المستوى',
          'قاعدة عملية: يجب أن يبقى ملف النموذج + ذاكرة KV + حِمل التشغيل أقل من VRAM لديك؛ وذاكرة KV لسياق 4k رمز في Qwen3 8B نحو 0.56 GiB (محسوبة، f16)',
          'Q5_K_M (Qwen3 8B: 5.85 GB) مع KV لسياق 4k يبلغ نحو 6.0 GiB (محسوب): ضيق جداً، فاستخدمه مع سياق 2k فقط',
          'Qwen3 14B عند Q4_K_M بحجم 9 GB: غير عملي على 6 GB، فاختر نموذجاً أصغر بدل تكميم أدنى',
        ],
      },
      body1: {
        title: 'كيف تختار مستوى التكميم لـ 6 GB VRAM',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M هو أعلى مستوى تكميم شائع يتسع معه ملف نموذج 8B مع ذاكرة KV لسياق 4k رمز في 6 GB VRAM.' },
          { type: 'plain-terms', text: 'اختر أعلى مستوى تكميم يظل ملف النموذج مع ذاكرة KV معه داخل VRAM لديك. المستويات الأدنى توفر الذاكرة لكنها تفقد دقة أكبر، والأعلى تحفظ الدقة لكنها تحتاج ذاكرة أكثر.' },
        ],
        content: [
          'اختر أعلى مستوى تكميم يظل ملف النموذج مع ذاكرة KV معه داخل VRAM لديك. المستويات الأدنى (Q2_K وQ3_K_M) توفر الذاكرة لكنها تفقد دقة أكبر، والأعلى (Q6_K وQ8_0) تحفظ دقة أكثر لكنها تحتاج ذاكرة أكثر. يعتمد الجدول على أحجام الملفات من [README الخاص بـ quantize في llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md) (Llama 3.1 8B، بوحدة GiB) و[بطاقة نموذج Qwen3-8B-GGUF](https://huggingface.co/Qwen/Qwen3-8B-GGUF) (Qwen3 8B، بوحدة GB). لا يضم هذا المستودع ملفي Q2_K وQ3_K_M، ولذلك يظهران في الجدول بالرمز n/a.',
          'حساب ذاكرة KV لـ Qwen3 8B: يذكر [config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json) أن للنموذج 36 طبقة و8 رؤوس مفتاح-قيمة وبُعد رأس 128. بدقة f16 يحتاج كل رمز إلى 2 × 36 × 8 × 128 × 2 بايت = 147,456 بايت، فيحتاج 4,096 رمز إلى نحو 0.56 GiB و8,192 رمز إلى نحو 1.1 GiB. هذا حساب وليس قياساً؛ كما أن بيئة تشغيل CUDA وإخراج الشاشة يستهلكان VRAM أيضاً.',
          'مع Qwen3 8B يترك Q4_K_M نحو 0.75 GiB من بطاقة 6 GiB عند سياق 4k (6 − 4.69 − 0.56). أما Q5_K_M فلا يترك شيئاً عند 4k ونحو 0.3 GiB عند 2k، لذا استخدمه مع سياق قصير فقط. يستخدم Ollama سياقاً افتراضياً بطول 4k على وحدات GPU الأقل من 24 GiB ([وثائق Ollama حول طول السياق](https://docs.ollama.com/context-length))؛ فاضبط `num_ctx` صراحةً عند اختبار Q5_K_M.',
        ],
        columns: ['التكميم', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (GB)', 'Qwen3 8B + KV 4k (GiB)', 'على بطاقة 6 GB'],
        rows: [
          { 'التكميم': 'Q2_K', 'Llama 3.1 8B (GiB)': '2.95', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + KV 4k (GiB)': 'n/a', 'على بطاقة 6 GB': 'يتسع؛ أكبر فقد جودة' },
          { 'التكميم': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3.74', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + KV 4k (GiB)': 'n/a', 'على بطاقة 6 GB': 'يتسع؛ أقل جودة من Q4' },
          { 'التكميم': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4.58', 'Qwen3 8B (GB)': '5.03', 'Qwen3 8B + KV 4k (GiB)': '~5.25', 'على بطاقة 6 GB': 'يتسع؛ موصى به' },
          { 'التكميم': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5.33', 'Qwen3 8B (GB)': '5.85', 'Qwen3 8B + KV 4k (GiB)': '~6.01', 'على بطاقة 6 GB': 'ضيق؛ سياق قصير فقط' },
          { 'التكميم': 'Q6_K', 'Llama 3.1 8B (GiB)': '6.14', 'Qwen3 8B (GB)': '6.73', 'Qwen3 8B + KV 4k (GiB)': '~6.83', 'على بطاقة 6 GB': 'لا يتسع' },
          { 'التكميم': 'Q8_0', 'Llama 3.1 8B (GiB)': '7.95', 'Qwen3 8B (GB)': '8.71', 'Qwen3 8B + KV 4k (GiB)': '~8.67', 'على بطاقة 6 GB': 'لا يتسع' },
        ],
      },
      body2: {
        title: 'نماذج تعمل عند Q4_K_M على 6 GB VRAM',
        content: [
          'Qwen3 8B خيار 8B حالي. ملف GGUF الخاص به على Hugging Face عند Q4_K_M بحجم 5.03 GB، ورخصته Apache-2.0، وتذكر بطاقة النموذج سياقاً أصلياً بطول 32,768 رمز (131,072 مع YaRN)؛ وعلى 6 GB ستستخدم أقل بكثير. شغّله بالأمر `ollama run qwen3:8b` (تذكر [مكتبة Ollama](https://ollama.com/library/qwen3:8b) حجم 5.2 GB عند Q4_K_M).',
          'ملف Llama 3.1 8B أصغر: 4.58 GiB عند Q4_K_M في جدول llama.cpp، وتذكر مكتبة Ollama أن `llama3.1:8b` بحجم 4.9 GB (Q4_K_M)، وهو الحجم نفسه بالـ GB العشري. يتسع كلاهما في 6 GB مع سياق قصير.',
          'إذا احتجت هامش سياق أكبر مما يتركه نموذج 8B، فاستخدم نموذجاً أصغر بدل تكميم أدنى. `ollama run phi4-mini` نموذج بحجم 3.8B تذكره مكتبة Ollama بحجم 2.5 GB. وعند Q8_0 (8.5 بت لكل وزن في جدول llama.cpp) يبلغ حجم نموذج 3.8B نحو 4.0 GB حسابياً (3.8 × 10⁹ × 8.5 / 8 بايت).',
          'لا تحاول تشغيل نماذج 14B على 6 GB. حجم Qwen3 14B عند Q4_K_M هو 9 GB ([Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)). وحتى بمعدل Q2_K البالغ 3.16 بت لكل وزن في جدول llama.cpp تحتاج 14.8 مليار معامل إلى نحو 5.8 GB (محسوب) قبل أي ذاكرة KV، كما أن Q2_K يفقد أكبر قدر من الجودة. استخدم بدلاً منه نموذجاً أصغر عند Q4_K_M.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول التكميم على 6 GB VRAM',
        faqs: [
          {
            q: 'هل أستطيع تشغيل نموذج 14B على 6 GB VRAM؟',
            a: 'ليس بشكل مريح. حجم Qwen3 14B عند Q4_K_M هو 9 GB (Hugging Face). أما Q2_K فيحتاج نحو 5.8 GB للأوزان وحدها (محسوب بمعدل 3.16 بت لكل وزن)، فلا يبقى مكان للسياق، ويفقد أكبر قدر من الجودة. استخدم نموذج 7B–8B عند Q4_K_M.',
          },
          {
            q: 'هل Q4_K_M أم Q4_K_S أفضل لـ 6 GB VRAM؟',
            a: 'Q4_K_M. في جدول llama.cpp لـ Llama 3.1 8B يبلغ Q4_K_S نحو 4.36 GiB وQ4_K_M نحو 4.58 GiB، أي فرق 0.22 GiB. يتسع Q4_K_M أصلاً في 6 GB مع سياق 4k، فلا يستحق Q4_K_S النظر إلا إذا احتجت هذا الهامش الأخير من الذاكرة.',
          },
          {
            q: 'هل أستخدم Q5_K_M بدل Q4_K_M مع 6 GB VRAM؟',
            a: 'فقط مع سياق قصير. حجم Qwen3 8B عند Q5_K_M هو 5.85 GB؛ ومع KV لسياق 4k (نحو 0.56 GiB، محسوب) يصل المجموع إلى نحو 6.0 GiB، فلا يبقى شيء لبيئة CUDA أو الشاشة. وعند 2k رمز يكون المجموع نحو 5.7 GiB. اضبط `num_ctx` على 2048 في Ollama وتأكد بالأمر `ollama ps` أن النموذج يبقى عند 100% GPU.',
          },
          {
            q: 'ماذا يحدث إذا تجاوز نموذجي 6 GB VRAM؟',
            a: 'يستطيع Ollama تحميل النموذج جزئياً على GPU وجزئياً في ذاكرة النظام، ويعرض `ollama ps` التوزيع في عمود PROCESSOR (مثل 48%/52% CPU/GPU كما في أسئلة Ollama الشائعة). والطبقات التي تعمل من ذاكرة النظام تبطئ التوليد عادةً بشكل كبير. إذا ظهرت نسبة CPU فاختر تكميماً أدنى أو نموذجاً أصغر أو سياقاً أقصر.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل LLM محلي لـ 6 GB VRAM](/ar/prompt-bites/best-local-llm-6gb-vram) -- دليل 6 GB VRAM',
          '[أفضل نماذج Ollama لـ 4 GB VRAM](/ar/prompt-bites/best-ollama-models-4gb-vram) -- نماذج 4 GB VRAM',
          '[Q4_K_M مقابل Q8_0: أي تكميم تستخدم؟](/ar/prompt-bites/q4-k-m-vs-q8-0) -- مقارنة التكميم',
          '[ما هو تكميم Q4_K_M؟](/ar/prompt-bites/what-is-q4-k-m-quantization) -- شرح التكميم',
        ],
      },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-quantization-6gb-vram-overview-hero-ko.webp',
    title: '6GB VRAM에 최적화된 양자화: 어떤 레벨이 적합한가?',
    seoTitle: '6GB VRAM 최적 양자화 2026: Q4_K_M vs Q5_K_M | PromptQuorum',
    metaDescription: '6GB VRAM의 8B 모델에는 Q4_K_M이 적합합니다. 4.6~5.0GB 파일과 4k 토큰 KV 캐시가 들어갑니다. Q5_K_M은 여유가 없고 Q6_K 이상은 불가합니다.',
    publishDate: '2026-05-23',
    dateModified: '2026-11-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-02',
    leadAnswerBlock: '**6GB GPU에는 Q4_K_M이 가장 적합합니다. 8B 모델 파일은 4.6~5.0GB이며 4k 토큰 컨텍스트도 들어갑니다.** Q5_K_M은 여유가 없고 Q6_K와 Q8_0은 들어가지 않습니다. 계산 근거와 출처는 아래 표와 본문에 있습니다.',
    targetKeywords: [
      '6GB VRAM 양자화',
      '6GB 그래픽카드 LLM 실행',
      'Q4_K_M 6GB VRAM',
      'Ollama 6GB VRAM 모델',
      '로컬 LLM 양자화 레벨',
    ],
    readTime: '5분 분량',
    quickAnswerTop: {
      ko: {
        question: '6GB VRAM에 가장 적합한 양자화 레벨은 무엇입니까?',
        answer: 'Q4_K_M입니다. 이 레벨에서 Llama 3.1 8B 파일은 4.58 GiB, Qwen3 8B 파일은 5.03GB이며, Qwen3 8B의 4k 토큰 KV 캐시는 약 0.56 GiB(계산값)를 더하며 6GB 안에 들어갑니다. Q5_K_M은 여유가 너무 적고 Q6_K 이상은 들어가지 않습니다.',
        bullets: [
          'Q4_K_M에서 Llama 3.1 8B는 4.58 GiB, Qwen3 8B는 5.03GB (llama.cpp README, Hugging Face)',
          'Qwen3 8B의 Q5_K_M은 5.85GB이며 4k KV 캐시를 더하면 약 6.0 GiB(계산값): 여유 부족',
          'Qwen3 14B의 Q4_K_M은 9GB: 어떤 양자화 레벨로도 6GB에서 여유롭지 않습니다',
        ],
        updatedDate: '2026-11',
      },
    },
    schema: {
      inLanguage: 'ko',
      canonicalUrl: 'https://www.promptquorum.com/ko/prompt-bites/best-quantization-6gb-vram',
    },
    breadcrumbSchema: {
      items: [
        { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
        { position: 2, name: '프롬프트 바이트', url: 'https://www.promptquorum.com/ko/prompt-bites' },
        { position: 3, name: '6GB VRAM에 최적화된 양자화', url: 'https://www.promptquorum.com/ko/prompt-bites/best-quantization-6gb-vram' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '6GB 카드에서는 7B~8B 모델에 Q4_K_M을 사용합니다. 이 레벨에서 Qwen3 8B는 5.03GB, Llama 3.1 8B는 4.58 GiB입니다',
          '기준: 모델 파일 + KV 캐시 + 런타임 오버헤드가 VRAM보다 작아야 합니다. Qwen3 8B의 4k 토큰 KV 캐시는 약 0.56 GiB(계산값, f16)입니다',
          'Q5_K_M(Qwen3 8B: 5.85GB)에 4k KV 캐시를 더하면 약 6.0 GiB(계산값)로 여유가 없으므로 2k 컨텍스트에서만 사용합니다',
          'Qwen3 14B의 Q4_K_M은 9GB로 6GB에서 실용적이지 않습니다. 양자화를 낮추기보다 더 작은 모델을 선택하십시오',
        ],
      },
      body1: {
        title: '6GB VRAM에서 양자화 레벨을 고르는 방법',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M은 8B 모델 파일과 4k 토큰 KV 캐시가 6GB VRAM에 들어가는 가장 높은 일반 양자화 레벨입니다.' },
          { type: 'plain-terms', text: '모델 파일과 KV 캐시의 합이 VRAM에 들어가는 가장 높은 양자화 레벨을 고르십시오. 낮은 레벨은 메모리를 아끼지만 정확도 손실이 크고, 높은 레벨은 정확도를 유지하지만 메모리를 더 사용합니다.' },
        ],
        content: [
          '모델 파일과 KV 캐시의 합이 VRAM에 들어가는 가장 높은 양자화 레벨을 고르십시오. 낮은 레벨(Q2_K, Q3_K_M)은 메모리를 아끼지만 정확도 손실이 크고, 높은 레벨(Q6_K, Q8_0)은 정확도를 더 유지하지만 메모리를 더 사용합니다. 표의 파일 크기는 [llama.cpp quantize README](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)(Llama 3.1 8B, GiB)와 [Qwen3-8B-GGUF 모델 카드](https://huggingface.co/Qwen/Qwen3-8B-GGUF)(Qwen3 8B, GB)에서 가져왔습니다. 이 저장소에는 Q2_K와 Q3_K_M 파일이 없어 표에 n/a로 표시했습니다.',
          'Qwen3 8B KV 캐시 계산: [config.json](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json)에는 36개 레이어, 8개 key-value 헤드, 헤드 차원 128이 나와 있습니다. f16에서 토큰 하나는 2 × 36 × 8 × 128 × 2바이트 = 147,456바이트이므로 4,096 토큰은 약 0.56 GiB, 8,192 토큰은 약 1.1 GiB입니다. 이는 계산값이며 측정값이 아닙니다. CUDA 런타임과 화면 출력도 VRAM을 사용합니다.',
          'Qwen3 8B 기준으로 4k 토큰에서 Q4_K_M은 6 GiB 카드의 약 0.75 GiB를 남깁니다(6 − 4.69 − 0.56). Q5_K_M은 4k에서 남는 공간이 없고 2k에서 약 0.3 GiB이므로 짧은 컨텍스트에서만 사용하십시오. Ollama는 24 GiB 미만 GPU에서 기본 컨텍스트를 4k로 사용합니다([Ollama 컨텍스트 길이 문서](https://docs.ollama.com/context-length)). Q5_K_M을 시험할 때는 `num_ctx`를 직접 지정하십시오.',
        ],
        columns: ['양자화', 'Llama 3.1 8B (GiB)', 'Qwen3 8B (GB)', 'Qwen3 8B + 4k KV (GiB)', '6GB 카드에서'],
        rows: [
          { '양자화': 'Q2_K', 'Llama 3.1 8B (GiB)': '2.95', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', '6GB 카드에서': '들어감; 품질 손실 최대' },
          { '양자화': 'Q3_K_M', 'Llama 3.1 8B (GiB)': '3.74', 'Qwen3 8B (GB)': 'n/a', 'Qwen3 8B + 4k KV (GiB)': 'n/a', '6GB 카드에서': '들어감; Q4보다 낮은 품질' },
          { '양자화': 'Q4_K_M', 'Llama 3.1 8B (GiB)': '4.58', 'Qwen3 8B (GB)': '5.03', 'Qwen3 8B + 4k KV (GiB)': '~5.25', '6GB 카드에서': '들어감; 권장' },
          { '양자화': 'Q5_K_M', 'Llama 3.1 8B (GiB)': '5.33', 'Qwen3 8B (GB)': '5.85', 'Qwen3 8B + 4k KV (GiB)': '~6.01', '6GB 카드에서': '빠듯함; 짧은 컨텍스트만' },
          { '양자화': 'Q6_K', 'Llama 3.1 8B (GiB)': '6.14', 'Qwen3 8B (GB)': '6.73', 'Qwen3 8B + 4k KV (GiB)': '~6.83', '6GB 카드에서': '들어가지 않음' },
          { '양자화': 'Q8_0', 'Llama 3.1 8B (GiB)': '7.95', 'Qwen3 8B (GB)': '8.71', 'Qwen3 8B + 4k KV (GiB)': '~8.67', '6GB 카드에서': '들어가지 않음' },
        ],
      },
      body2: {
        title: '6GB VRAM에서 Q4_K_M으로 쓸 수 있는 모델',
        content: [
          'Qwen3 8B는 현재 쓸 수 있는 8B 선택지입니다. Hugging Face의 GGUF 파일은 Q4_K_M에서 5.03GB이고 라이선스는 Apache-2.0이며, 모델 카드에는 기본 컨텍스트 32,768 토큰(YaRN 사용 시 131,072)으로 나와 있지만 6GB에서는 훨씬 짧게 사용하게 됩니다. `ollama run qwen3:8b`로 실행합니다([Ollama 라이브러리](https://ollama.com/library/qwen3:8b)에는 Q4_K_M 5.2GB로 표시).',
          'Llama 3.1 8B는 파일이 더 작습니다. llama.cpp 표에서 Q4_K_M은 4.58 GiB이고, Ollama 라이브러리는 `llama3.1:8b`를 4.9GB(Q4_K_M)로 표시하며 십진 GB로는 같은 크기입니다. 둘 다 짧은 컨텍스트라면 6GB에 들어갑니다.',
          '8B 모델이 남기는 것보다 컨텍스트 여유가 더 필요하면 양자화를 낮추지 말고 더 작은 모델을 사용하십시오. `ollama run phi4-mini`는 3.8B 모델이며 Ollama 라이브러리에는 2.5GB로 표시됩니다. Q8_0(llama.cpp 표에서 가중치당 8.5비트)에서는 3.8B 모델이 계산상 약 4.0GB입니다(3.8 × 10⁹ × 8.5 / 8 바이트).',
          '6GB에서 14B 모델은 시도하지 마십시오. Qwen3 14B의 Q4_K_M은 9GB입니다([Hugging Face](https://huggingface.co/Qwen/Qwen3-14B-GGUF)). llama.cpp 표의 Q2_K 가중치당 3.16비트로 계산해도 148억 파라미터는 KV 캐시 이전에 약 5.8GB(계산값)가 필요하며, Q2_K는 품질 손실이 가장 큽니다. 대신 더 작은 모델을 Q4_K_M으로 사용하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '6GB VRAM 양자화에 대한 빠른 답변',
        faqs: [
          {
            q: '6GB VRAM에서 14B 모델을 실행할 수 있습니까?',
            a: '여유롭게는 불가능합니다. Qwen3 14B의 Q4_K_M은 9GB입니다(Hugging Face). Q2_K는 가중치만으로 약 5.8GB(가중치당 3.16비트로 계산)가 필요해 컨텍스트 공간이 없고 품질 손실도 가장 큽니다. 대신 7B~8B 모델을 Q4_K_M으로 사용하십시오.',
          },
          {
            q: '6GB VRAM에는 Q4_K_M과 Q4_K_S 중 무엇이 좋습니까?',
            a: 'Q4_K_M입니다. llama.cpp의 Llama 3.1 8B 표에서 Q4_K_S는 4.36 GiB, Q4_K_M은 4.58 GiB로 차이는 0.22 GiB입니다. Q4_K_M은 4k 컨텍스트에서도 이미 6GB에 들어가므로, 그 정도의 메모리가 꼭 필요할 때만 Q4_K_S를 고려하십시오.',
          },
          {
            q: '6GB VRAM에서 Q4_K_M 대신 Q5_K_M을 써도 됩니까?',
            a: '짧은 컨텍스트에서만 가능합니다. Qwen3 8B의 Q5_K_M은 5.85GB이며 4k KV 캐시(약 0.56 GiB, 계산값)를 더하면 약 6.0 GiB로 CUDA 런타임이나 화면 출력을 위한 공간이 남지 않습니다. 2k 토큰에서는 합계가 약 5.7 GiB입니다. Ollama에서 `num_ctx`를 2048로 설정하고 `ollama ps`로 모델이 100% GPU에 있는지 확인하십시오.',
          },
          {
            q: '모델이 6GB VRAM을 초과하면 어떻게 됩니까?',
            a: 'Ollama는 모델을 GPU와 시스템 메모리에 나누어 로드할 수 있으며, `ollama ps`의 PROCESSOR 열에 배분이 표시됩니다(Ollama FAQ의 예: 48%/52% CPU/GPU). 시스템 메모리에서 실행되는 레이어가 있으면 일반적으로 생성 속도가 크게 느려집니다. CPU 비율이 보이면 더 낮은 양자화, 더 작은 모델 또는 더 짧은 컨텍스트를 선택하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[6GB VRAM용 최고의 로컬 LLM](/ko/prompt-bites/best-local-llm-6gb-vram) -- 6GB VRAM 가이드',
          '[4GB VRAM용 최고의 Ollama 모델](/ko/prompt-bites/best-ollama-models-4gb-vram) -- 4GB VRAM 모델',
          '[Q4_K_M vs Q8_0: 어떤 양자화를 쓸까?](/ko/prompt-bites/q4-k-m-vs-q8-0) -- 양자화 비교',
          '[Q4_K_M 양자화란?](/ko/prompt-bites/what-is-q4-k-m-quantization) -- 양자화 설명',
        ],
      },
    },
  },
}
