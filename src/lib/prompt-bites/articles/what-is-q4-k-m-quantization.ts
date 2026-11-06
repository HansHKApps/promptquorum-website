import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: 'What Is Q4_K_M Quantization?',
    dateModified: '2026-11-06',
    seoTitle: 'Q4_K_M Quantization Guide 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M means 4-bit k-quant at medium quality. Lower perplexity than Q4_0, smaller than Q8_0. Use Q4_K_M as your default for Ollama. Quick guide from PromptQuorum.',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-en.webp',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers running local LLMs for the first time',
    parentArticle: '/local-llms/quantization-levels-comparison',
    siblingBites: ['q4-k-m-vs-q8-0', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '**Q4_K_M is a llama.cpp k-quant format: 4-bit quantization with a medium-size mix of tensor types.** On Llama 3 8B it scores a perplexity of 6.41 against 6.70 for Q4_0, for a file 0.24 GiB larger.',
    quickAnswerTop: {
      en: {
        question: 'What is Q4_K_M quantization?',
        answer: 'Q4_K_M means 4-bit quantization using k-quant (K) compression at medium (M) quality. It is a common default for most models: lower perplexity than Q4_0, smaller than Q8_0.',
        bullets: [
          'Q = quantized, 4 = 4-bit, K = k-quant, M = medium',
          'Lower perplexity than Q4_0 (6.41 vs 6.70 on Llama 3 8B) for a file 0.24 GiB larger',
          'Use Q4_K_M as your default quantization',
        ],
        updatedDate: '2026-11',
      },
      de: {
        question: 'Was bedeutet Q4_K_M-Quantisierung?',
        answer: 'Q4_K_M = 4-Bit-Quantisierung mit K-Quant-Kompression auf mittlerem Qualitätsniveau. Niedrigere Perplexität als Q4_0, kleiner als Q8_0. Verwenden Sie es als Standard.',
        bullets: [
          'Q = quantisiert, 4 = 4 Bit, K = K-Quant, M = mittel',
          'Niedrigere Perplexität als Q4_0 (6,41 vs. 6,70 bei Llama 3 8B) bei einer um 0,24 GiB größeren Datei',
          'Q4_K_M als Standard-Quantisierung verwenden',
        ],
        updatedDate: '2026-11',
      },
      fr: {
        question: 'Qu\'est-ce que la quantisation Q4_K_M ?',
        answer: 'Q4_K_M signifie quantisation 4 bits avec compression k-quant à qualité moyenne. Perplexité plus basse que Q4_0, plus petite que Q8_0. À utiliser comme standard.',
        bullets: [
          'Q = quantisé, 4 = 4 bits, K = k-quant, M = moyen',
          'Perplexité plus basse que Q4_0 (6,41 contre 6,70 sur Llama 3 8B) pour un fichier plus grand de 0,24 GiB',
          'Utiliser Q4_K_M comme quantisation par défaut',
        ],
        updatedDate: '2026-11',
      },
      ja: {
        question: 'Q4_K_M量子化とは何ですか？',
        answer: 'Q4_K_MはK-Quant（K）圧縮を使用した4ビット量子化で、品質は中程度（M）です。ほとんどのモデルで一般的なデフォルトです：Q4_0よりパープレキシティが低く、Q8_0より小さいです。',
        bullets: [
          'Q=量子化済み、4=4ビット、K=K-Quant、M=中程度',
          'Q4_0よりパープレキシティが低い（Llama 3 8Bで6.41対6.70）、ファイルは0.24 GiB大きい',
          'Q4_K_Mをデフォルトの量子化として使用する',
        ],
        updatedDate: '2026-11',
      },
      zh: {
        question: 'Q4_K_M量化是什么？',
        answer: 'Q4_K_M表示使用K-Quant（K）压缩的4位量化，品质为中等（M）。这是大多数模型常用的默认选择：困惑度低于Q4_0，文件大小小于Q8_0。',
        bullets: [
          'Q=量化，4=4位，K=K-Quant，M=中等',
          '困惑度低于Q4_0（Llama 3 8B上为6.41对6.70），文件大0.24 GiB',
          '将Q4_K_M作为默认量化格式使用',
        ],
        updatedDate: '2026-11',
      },
      es: {
        question: '¿Qué es la cuantización Q4_K_M?',
        answer: 'Q4_K_M significa cuantización de 4 bits con compresión k-quant (K) a calidad media (M). Es una opción por defecto habitual para la mayoría de modelos: menor perplejidad que Q4_0, menor tamaño que Q8_0.',
        bullets: [
          'Q = cuantizado, 4 = 4 bits, K = k-quant, M = medio',
          'Menor perplejidad que Q4_0 (6,41 frente a 6,70 en Llama 3 8B) con un archivo 0,24 GiB mayor',
          'Usa Q4_K_M como cuantización predeterminada',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = 4-bit quantization with k-quant compression at medium quality — lower perplexity than Q4_0 for a slightly larger file',
          'Llama 3.1 8B at Q4_K_M is 4.58 GiB on disk; with a 4k-token KV cache (about 0.5 GiB, calculated) it needs about 5.1 GiB of VRAM before runtime overhead',
          'Use Q4_K_M as your default — on the Llama 3 8B test it adds under 3% perplexity over f16 at about 58% of the Q8_0 file size',
        ],
      },
      body1: {
        title: 'What Each Letter in Q4_K_M Means',
        content: [
          '<strong>Q4_K_M exists because the older 4-bit format Q4_0 loses more quality than necessary.</strong> On Llama 3 8B, llama.cpp\'s perplexity test gives 6.41 for Q4_K_M and 6.70 for Q4_0 (lower is better; f16 is 6.23), for a file that is 0.24 GiB larger (4.58 vs 4.34 GiB). Source: <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp perplexity README</a>.',
          'The "K" marks the k-quant family introduced in <a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp pull request #1684</a>. Q4_K_M mixes two tensor types: it uses 6-bit Q6_K for half of the attention.wv and feed_forward.w2 tensors and for output.weight, and 4-bit Q4_K for the remaining tensors. On Llama 3.1 8B this averages 4.89 bits per weight (llama.cpp quantize README), above the nominal 4.',
          'The "M" is the size variant within the family. Q4_K_S (small) uses Q4_K for every tensor: 4.36 GiB versus 4.58 GiB for Q4_K_M on Llama 3.1 8B, with higher perplexity (6.50 vs 6.41 on Llama 3 8B without an importance matrix). Q5_K_M is the next step up at 5.33 GiB.',
          '<strong>K-quant works on blocks of weights.</strong> Q4_K groups 32 weights into a block and 8 blocks into a super-block, storing block scales and minimums with 6 bits, which is 4.5 bits per weight (pull request #1684). Q4_K_M lands at 4.89 because of its Q6_K tensors, which is why it sits between Q4_K_S (4.67) and Q5_K_M (5.70) in size. For when the M tier is not enough, see <a href="/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>.',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-en.webp',
        imageCaption: 'What Each Letter in Q4_K_M Means -- Decoding the format name',
      },
      body2: {
        title: 'How Q4_K_M Compares to Other Quantizations',
        content: [
          'The table shows llama.cpp\'s Llama 3 8B perplexity test (wikitext, no importance matrix; lower is better). Percentages are calculated against f16 (6.2332). Q4_K_M adds under 3% perplexity at 4.58 GiB, about 58% of the Q8_0 file size (calculated: 4.58 / 7.96).',
          'For a direct comparison of Q4_K_M vs Q8_0, see the <a href="/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0 decision guide</a>. For the full quantization reference, see the <a href="/local-llms/quantization-levels-comparison" class="text-primary hover:underline">quantization levels comparison</a>.',
        ],
        columns: ['Format', 'Size, Llama 3 8B (GiB)', 'Perplexity (change vs f16)'],
        rows: [
          { 'Format': 'Q4_0', 'Size, Llama 3 8B (GiB)': '4.34', 'Perplexity (change vs f16)': '6.70 (+7.5%)' },
          { 'Format': 'Q4_K_M', 'Size, Llama 3 8B (GiB)': '4.58', 'Perplexity (change vs f16)': '6.41 (+2.8%)' },
          { 'Format': 'Q5_K_M', 'Size, Llama 3 8B (GiB)': '5.33', 'Perplexity (change vs f16)': '6.29 (+0.9%)' },
          { 'Format': 'Q8_0', 'Size, Llama 3 8B (GiB)': '7.96', 'Perplexity (change vs f16)': '6.23 (+0.02%)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Quantization',
        faqs: [
          {
            q: 'Is Q4_K_M the same as Q4_0?',
            a: 'No. On Llama 3 8B, Q4_K_M reaches a perplexity of 6.41 against 6.70 for Q4_0, for a file 0.24 GiB larger (4.58 vs 4.34 GiB; llama.cpp, no importance matrix). Prefer Q4_K_M over Q4_0. See the <a href="/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0 guide</a> for when to go higher.',
          },
          {
            q: 'Which quantization should I use for 8 GB VRAM?',
            a: 'Q4_K_M for 8B models: the Llama 3.1 8B file is 4.58 GiB, or about 5.1 GiB with a 4k-token KV cache (calculated, before runtime overhead). Q5_K_M is 5.33 GiB, about 5.8 GiB with the same cache (calculated), and cuts the perplexity increase over f16 from +2.8% to +0.9% on Llama 3 8B. At a 4k context both fit in 8 GB before runtime overhead; Q8_0 (7.95 GiB file) does not.',
          },
          {
            q: "What does the 'M' in Q4_K_M stand for?",
            a: 'Medium: it is the size variant within the k-quant family. Q4_K_S (small) is smaller (4.36 GiB vs 4.58 GiB on Llama 3.1 8B) with higher perplexity, and Q4_K_M (medium) is the usual default. llama.cpp\'s quantize tool has no Q4_K_L type; the next step up is Q5_K_M.',
          },
          {
            q: 'Which models on Ollama use Q4_K_M by default?',
            a: 'Several. For Llama 3.1 8B, Qwen3 8B, Mistral 7B and Phi-4 mini, the default tag in the Ollama library shares its digest with a tag that has q4_K_M in its name (for Mistral 7B: the v0.3 tag) (checked 2026-11-06); the library pages do not label the default quantization, and other models can differ, so check the tag list of the model. Other quantizations are separate tags whose names vary by model, for example <code>llama3.1:8b-instruct-q5_K_M</code> or <code>llama3.1:8b-instruct-q8_0</code>.',
          },
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: 'Was ist Q4_K_M-Quantisierung?',
    seoTitle: 'Q4_K_M erklärt: k-quant 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M = 4-Bit-K-Quant auf mittlerem Qualitätsniveau. Niedrigere Perplexität als Q4_0, kleiner als Q8_0. Verwenden Sie es als Standard. Schnelle Antwort von PromptQuorum.',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-de.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M ist ein k-Quant-Format von llama.cpp: 4-Bit-Quantisierung mit einer mittelgroßen Mischung aus Tensortypen.** Bei Llama 3 8B erreicht es eine Perplexität von 6,41 gegenüber 6,70 bei Q4_0, bei einer um 0,24 GiB größeren Datei.',
    quickAnswerTop: {
      de: {
        question: 'Was bedeutet Q4_K_M-Quantisierung?',
        answer: 'Q4_K_M = 4-Bit-Quantisierung mit K-Quant-Kompression auf mittlerem Qualitätsniveau. Niedrigere Perplexität als Q4_0, kleiner als Q8_0. Verwenden Sie es als Standard.',
        bullets: [
          'Q = quantisiert, 4 = 4 Bit, K = K-Quant, M = mittel',
          'Niedrigere Perplexität als Q4_0 (6,41 vs. 6,70 bei Llama 3 8B) bei einer um 0,24 GiB größeren Datei',
          'Q4_K_M als Standard-Quantisierung verwenden',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = 4-Bit-Quantisierung mit K-Quant-Kompression auf mittlerem Qualitätsniveau — niedrigere Perplexität als Q4_0 bei etwas größerer Datei',
          'Llama 3.1 8B bei Q4_K_M ist 4,58 GiB groß; mit 4k-Token-KV-Cache (etwa 0,5 GiB, berechnet) braucht es etwa 5,1 GiB VRAM vor Laufzeit-Overhead',
          'Verwenden Sie Q4_K_M als Standard — im Llama-3-8B-Test erhöht es die Perplexität gegenüber f16 um unter 3 % bei etwa 58 % der Dateigröße von Q8_0',
        ],
      },
      body1: {
        title: 'Was jeder Buchstabe in Q4_K_M bedeutet',
        content: [
          '<strong>Q4_K_M existiert, weil das ältere 4-Bit-Format Q4_0 mehr Qualität verliert als nötig.</strong> Bei Llama 3 8B ergibt der Perplexitätstest von llama.cpp 6,41 für Q4_K_M und 6,70 für Q4_0 (niedriger ist besser; f16 liegt bei 6,23), bei einer um 0,24 GiB größeren Datei (4,58 vs. 4,34 GiB). Quelle: <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp-Perplexity-README</a>.',
          'Das "K" steht für die K-Quant-Familie aus <a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp Pull Request #1684</a>. Q4_K_M mischt zwei Tensor-Typen: 6-Bit-Q6_K für die Hälfte der Tensoren attention.wv und feed_forward.w2 sowie für output.weight und 4-Bit-Q4_K für die übrigen Tensoren. Bei Llama 3.1 8B ergibt das im Mittel 4,89 Bit pro Gewicht (llama.cpp-Quantize-README), also mehr als nominell 4.',
          'Das "M" ist die Größenvariante innerhalb der Familie. Q4_K_S (small) nutzt Q4_K für jeden Tensor: 4,36 GiB gegenüber 4,58 GiB bei Q4_K_M (Llama 3.1 8B), mit höherer Perplexität (6,50 vs. 6,41 bei Llama 3 8B ohne Importance-Matrix). Q5_K_M ist die nächste Stufe mit 5,33 GiB.',
          '<strong>K-Quant arbeitet mit Blöcken von Gewichten.</strong> Q4_K fasst 32 Gewichte zu einem Block und 8 Blöcke zu einem Super-Block zusammen und speichert Block-Skalen und -Minima mit 6 Bit, das sind 4,5 Bit pro Gewicht (Pull Request #1684). Q4_K_M liegt wegen seiner Q6_K-Tensoren bei 4,89 und damit in der Größe zwischen Q4_K_S (4,67) und Q5_K_M (5,70). Wenn die M-Stufe nicht reicht, siehe <a href="/de/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs. Q8_0</a>.',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-de.webp',
        imageCaption: 'Was Jeder Buchstabe in Q4_K_M Bedeutet -- Den Formatnamen entschlüsseln',
      },
      body2: {
        title: 'Wie Q4_K_M im Vergleich zu anderen Quantisierungen abschneidet',
        content: [
          'Die Tabelle zeigt den Perplexitätstest von llama.cpp für Llama 3 8B (wikitext, ohne Importance-Matrix; niedriger ist besser). Die Prozentwerte sind gegenüber f16 (6,2332) berechnet. Q4_K_M erhöht die Perplexität um unter 3 % bei 4,58 GiB, etwa 58 % der Dateigröße von Q8_0 (berechnet: 4,58 / 7,96).',
          'Für einen direkten Vergleich von Q4_K_M vs. Q8_0, siehe den <a href="/de/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs. Q8_0 Entscheidungsleitfaden</a>. Für die vollständige Quantisierungsreferenz, siehe den <a href="/de/local-llms/quantization-levels-comparison" class="text-primary hover:underline">Quantisierungsstufen-Vergleich</a>.',
        ],
        columns: ['Format', 'Größe, Llama 3 8B (GiB)', 'Perplexität (Änderung vs. f16)'],
        rows: [
          { 'Format': 'Q4_0', 'Größe, Llama 3 8B (GiB)': '4,34', 'Perplexität (Änderung vs. f16)': '6,70 (+7,5 %)' },
          { 'Format': 'Q4_K_M', 'Größe, Llama 3 8B (GiB)': '4,58', 'Perplexität (Änderung vs. f16)': '6,41 (+2,8 %)' },
          { 'Format': 'Q5_K_M', 'Größe, Llama 3 8B (GiB)': '5,33', 'Perplexität (Änderung vs. f16)': '6,29 (+0,9 %)' },
          { 'Format': 'Q8_0', 'Größe, Llama 3 8B (GiB)': '7,96', 'Perplexität (Änderung vs. f16)': '6,23 (+0,02 %)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zur Quantisierung',
        faqs: [
          {
            q: 'Ist Q4_K_M dasselbe wie Q4_0?',
            a: 'Nein. Bei Llama 3 8B erreicht Q4_K_M eine Perplexität von 6,41 gegenüber 6,70 bei Q4_0, bei einer um 0,24 GiB größeren Datei (4,58 vs. 4,34 GiB; llama.cpp, ohne Importance-Matrix). Bevorzugen Sie Q4_K_M gegenüber Q4_0. Siehe den <a href="/de/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs. Q8_0 Leitfaden</a>, wenn Sie höher gehen wollen.',
          },
          {
            q: 'Welche Quantisierung sollte ich für 8 GB VRAM verwenden?',
            a: 'Q4_K_M für 8B-Modelle: Die Datei von Llama 3.1 8B ist 4,58 GiB groß, mit 4k-Token-KV-Cache etwa 5,1 GiB (berechnet, vor Laufzeit-Overhead). Q5_K_M ist 5,33 GiB groß, mit demselben Cache etwa 5,8 GiB (berechnet), und senkt den Perplexitätsanstieg gegenüber f16 bei Llama 3 8B von +2,8 % auf +0,9 %. Bei 4k Kontext passen beide vor dem Laufzeit-Overhead in 8 GB; Q8_0 (7,95-GiB-Datei) nicht.',
          },
          {
            q: 'Wofür steht das "M" in Q4_K_M?',
            a: 'Medium (mittel) — die Größenvariante innerhalb der K-Quant-Familie. Q4_K_S (small) ist kleiner (4,36 GiB vs. 4,58 GiB bei Llama 3.1 8B) mit höherer Perplexität, Q4_K_M (medium) ist der übliche Standard. Das Quantize-Tool von llama.cpp hat keinen Typ Q4_K_L; die nächste Stufe ist Q5_K_M.',
          },
          {
            q: 'Welche Modelle auf Ollama verwenden standardmäßig Q4_K_M?',
            a: 'Mehrere. Bei Llama 3.1 8B, Qwen3 8B, Mistral 7B und Phi-4 mini hat der Standard-Tag in der Ollama-Bibliothek denselben Digest wie ein Tag mit q4_K_M im Namen (bei Mistral 7B: der v0.3-Tag) (geprüft am 2026-11-06); die Bibliotheksseiten nennen die Standard-Quantisierung nicht ausdrücklich, und andere Modelle können abweichen, prüfen Sie daher die Tag-Liste des Modells. Andere Quantisierungen sind eigene Tags, deren Namen je nach Modell variieren, zum Beispiel <code>llama3.1:8b-instruct-q5_K_M</code> oder <code>llama3.1:8b-instruct-q8_0</code>.',
          },
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: 'Qu\'est-ce que la quantisation Q4_K_M ?',
    seoTitle: 'Q4_K_M : format k-quant 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M = k-quant 4 bits à qualité moyenne. Perplexité plus basse que Q4_0, plus petite que Q8_0. À utiliser comme standard. Réponse rapide par PromptQuorum.',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-fr.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M est un format k-quant de llama.cpp : une quantisation 4 bits avec un mélange de types de tenseurs de taille moyenne.** Sur Llama 3 8B, il atteint une perplexité de 6,41 contre 6,70 pour Q4_0, avec un fichier plus grand de 0,24 GiB.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que la quantisation Q4_K_M ?',
        answer: 'Q4_K_M signifie quantisation 4 bits avec compression k-quant à qualité moyenne. Perplexité plus basse que Q4_0, plus petite que Q8_0. À utiliser comme standard.',
        bullets: [
          'Q = quantisé, 4 = 4 bits, K = k-quant, M = moyen',
          'Perplexité plus basse que Q4_0 (6,41 contre 6,70 sur Llama 3 8B) pour un fichier plus grand de 0,24 GiB',
          'Utiliser Q4_K_M comme quantisation par défaut',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = quantisation 4 bits avec compression k-quant à qualité moyenne — perplexité plus basse que Q4_0 pour un fichier un peu plus grand',
          'Llama 3.1 8B en Q4_K_M fait 4,58 GiB sur disque ; avec un cache KV de 4k tokens (environ 0,5 GiB, calculé), il faut environ 5,1 GiB de VRAM hors surcoût d\'exécution',
          'Utilisez Q4_K_M par défaut — dans le test Llama 3 8B, il ajoute moins de 3 % de perplexité par rapport à f16 pour environ 58 % de la taille de Q8_0',
        ],
      },
      body1: {
        title: 'Ce que signifie chaque lettre de Q4_K_M',
        content: [
          '<strong>Q4_K_M existe parce que l\'ancien format 4 bits Q4_0 perd plus de qualité que nécessaire.</strong> Sur Llama 3 8B, le test de perplexité de llama.cpp donne 6,41 pour Q4_K_M et 6,70 pour Q4_0 (plus bas est meilleur ; f16 : 6,23), pour un fichier plus grand de 0,24 GiB (4,58 contre 4,34 GiB). Source : <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README perplexity de llama.cpp</a>.',
          'Le « K » désigne la famille k-quant introduite dans la <a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">pull request #1684 de llama.cpp</a>. Q4_K_M mélange deux types de tenseurs : du Q6_K 6 bits pour la moitié des tenseurs attention.wv et feed_forward.w2 ainsi que pour output.weight, et du Q4_K 4 bits pour les autres tenseurs. Sur Llama 3.1 8B, cela donne en moyenne 4,89 bits par poids (README de quantize de llama.cpp), au-dessus des 4 nominaux.',
          'Le « M » est la variante de taille dans la famille. Q4_K_S (small) utilise Q4_K pour tous les tenseurs : 4,36 GiB contre 4,58 GiB pour Q4_K_M sur Llama 3.1 8B, avec une perplexité plus élevée (6,50 contre 6,41 sur Llama 3 8B sans matrice d\'importance). Q5_K_M est l\'étape suivante à 5,33 GiB.',
          '<strong>K-quant travaille sur des blocs de poids.</strong> Q4_K regroupe 32 poids en un bloc et 8 blocs en un super-bloc, et stocke échelles et minimums de bloc sur 6 bits, soit 4,5 bits par poids (pull request #1684). Q4_K_M atteint 4,89 à cause de ses tenseurs Q6_K, d\'où sa place entre Q4_K_S (4,67) et Q5_K_M (5,70) en taille. Quand le niveau M ne suffit pas, voir <a href="/fr/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>.',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-fr.webp',
        imageCaption: 'Ce que Signifie Chaque Lettre dans Q4_K_M -- Décoder le nom du format',
      },
      body2: {
        title: 'Comment Q4_K_M se compare aux autres quantisations',
        content: [
          'Le tableau reprend le test de perplexité de llama.cpp sur Llama 3 8B (wikitext, sans matrice d\'importance ; plus bas est meilleur). Les pourcentages sont calculés par rapport à f16 (6,2332). Q4_K_M ajoute moins de 3 % de perplexité pour 4,58 GiB, environ 58 % de la taille de Q8_0 (calculé : 4,58 / 7,96).',
          'Pour une comparaison directe Q4_K_M vs Q8_0, voir le <a href="/fr/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guide de décision Q4_K_M vs Q8_0</a>. Pour la référence complète des quantisations, voir la <a href="/fr/local-llms/quantization-levels-comparison" class="text-primary hover:underline">comparaison des niveaux de quantisation</a>.',
        ],
        columns: ['Format', 'Taille, Llama 3 8B (GiB)', 'Perplexité (écart vs f16)'],
        rows: [
          { 'Format': 'Q4_0', 'Taille, Llama 3 8B (GiB)': '4,34', 'Perplexité (écart vs f16)': '6,70 (+7,5 %)' },
          { 'Format': 'Q4_K_M', 'Taille, Llama 3 8B (GiB)': '4,58', 'Perplexité (écart vs f16)': '6,41 (+2,8 %)' },
          { 'Format': 'Q5_K_M', 'Taille, Llama 3 8B (GiB)': '5,33', 'Perplexité (écart vs f16)': '6,29 (+0,9 %)' },
          { 'Format': 'Q8_0', 'Taille, Llama 3 8B (GiB)': '7,96', 'Perplexité (écart vs f16)': '6,23 (+0,02 %)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la quantisation',
        faqs: [
          {
            q: 'Q4_K_M est-il identique à Q4_0 ?',
            a: 'Non. Sur Llama 3 8B, Q4_K_M atteint une perplexité de 6,41 contre 6,70 pour Q4_0, pour un fichier plus grand de 0,24 GiB (4,58 contre 4,34 GiB ; llama.cpp, sans matrice d\'importance). Préférez Q4_K_M à Q4_0. Voir le <a href="/fr/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guide Q4_K_M vs Q8_0</a> pour savoir quand monter en gamme.',
          },
          {
            q: 'Quelle quantisation utiliser avec 8 Go de VRAM ?',
            a: 'Q4_K_M pour les modèles 8B : le fichier de Llama 3.1 8B fait 4,58 GiB, soit environ 5,1 GiB avec un cache KV de 4k tokens (calculé, hors surcoût d\'exécution). Q5_K_M fait 5,33 GiB, environ 5,8 GiB avec le même cache (calculé), et réduit la hausse de perplexité par rapport à f16 de +2,8 % à +0,9 % sur Llama 3 8B. Avec un contexte de 4k, les deux tiennent dans 8 Go avant le surcoût d\'exécution ; Q8_0 (fichier de 7,95 GiB) non.',
          },
          {
            q: 'Que signifie le "M" dans Q4_K_M ?',
            a: 'Medium (moyen) — la variante de taille dans la famille k-quant. Q4_K_S (small) est plus petit (4,36 GiB contre 4,58 GiB sur Llama 3.1 8B) avec une perplexité plus élevée, Q4_K_M (medium) est le standard habituel. L\'outil quantize de llama.cpp n\'a pas de type Q4_K_L ; l\'étape suivante est Q5_K_M.',
          },
          {
            q: 'Quels modèles sur Ollama utilisent Q4_K_M par défaut ?',
            a: 'Plusieurs. Pour Llama 3.1 8B, Qwen3 8B, Mistral 7B et Phi-4 mini, le tag par défaut de la bibliothèque Ollama partage son empreinte (digest) avec un tag dont le nom contient q4_K_M (pour Mistral 7B : le tag v0.3) (vérifié le 2026-11-06) ; les pages de la bibliothèque n\'indiquent pas la quantisation par défaut et d\'autres modèles peuvent différer, consultez donc la liste des tags du modèle. Les autres quantisations sont des tags distincts dont le nom varie selon le modèle, par exemple <code>llama3.1:8b-instruct-q5_K_M</code> ou <code>llama3.1:8b-instruct-q8_0</code>.',
          },
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M量子化とは何ですか？',
    seoTitle: 'Q4_K_M量化の完全解説 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_Mは中品質のK-Quant 4ビット量子化です。Q4_0よりパープレキシティが低く、Q8_0より小さいです。デフォルトとして使用してください。PromptQuorumの解説。',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-ja.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_Mはllama.cppのK-Quant形式で、中程度（M）の規模の4ビット量子化です。**Llama 3 8Bのパープレキシティは6.41で、Q4_0の6.70より低くなります。',
    quickAnswerTop: {
      ja: {
        question: 'Q4_K_M量子化とは何ですか？',
        answer: 'Q4_K_MはK-Quant（K）圧縮を使用した4ビット量子化で、品質は中程度（M）です。ほとんどのモデルで一般的なデフォルトです：Q4_0よりパープレキシティが低く、Q8_0より小さいです。',
        bullets: [
          'Q=量子化済み、4=4ビット、K=K-Quant、M=中程度',
          'Q4_0よりパープレキシティが低い（Llama 3 8Bで6.41対6.70）、ファイルは0.24 GiB大きい',
          'Q4_K_Mをデフォルトの量子化として使用する',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = K-Quant圧縮による中程度品質の4ビット量子化 — Q4_0よりパープレキシティが低く、ファイルはやや大きい',
          'Llama 3.1 8BのQ4_K_Mはディスク上で4.58 GiB。4kトークンのKVキャッシュ（約0.5 GiB、計算値）を加えると、実行時オーバーヘッドを除いて約5.1 GiBのVRAMが必要です',
          'Q4_K_Mをデフォルトとして使用 — Llama 3 8Bのテストでは、f16に対するパープレキシティの増加は3%未満で、ファイルサイズはQ8_0の約58%です',
        ],
      },
      body1: {
        title: 'Q4_K_Mの各文字の意味',
        content: [
          '<strong>Q4_K_Mが存在するのは、旧来の4ビット形式Q4_0が必要以上に品質を失うためです。</strong>Llama 3 8Bでは、llama.cppのパープレキシティテストでQ4_K_Mが6.41、Q4_0が6.70（低いほど良い。f16は6.23）で、ファイルは0.24 GiB大きくなります（4.58対4.34 GiB）。出典：<a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp perplexity README</a>。',
          '「K」は<a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp プルリクエスト #1684</a>で導入されたk-quantファミリーを示します。Q4_K_Mは2種類のテンソル型を混ぜています。attention.wvとfeed_forward.w2テンソルの半分およびoutput.weightには6ビットのQ6_K、残りのテンソルには4ビットのQ4_Kを使います。Llama 3.1 8Bでは平均で1重みあたり4.89ビット（llama.cpp quantize README）となり、名目上の4を上回ります。',
          '「M」はファミリー内のサイズ違いです。Q4_K_S（small）はすべてのテンソルにQ4_Kを使います。Llama 3.1 8Bで4.36 GiB対Q4_K_Mの4.58 GiBで、パープレキシティは高くなります（Llama 3 8B、重要度行列なしで6.50対6.41）。次の段階はQ5_K_Mで5.33 GiBです。',
          '<strong>K-quantは重みのブロック単位で動作します。</strong>Q4_Kは32個の重みを1ブロック、8ブロックを1スーパーブロックにまとめ、ブロックのスケールと最小値を6ビットで保存します。これは1重みあたり4.5ビットです（プルリクエスト #1684）。Q4_K_MはQ6_Kテンソルを含むため4.89ビットとなり、サイズはQ4_K_S（4.67）とQ5_K_M（5.70）の間に位置します。Mでは足りない場合は<a href="/ja/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>を参照してください。',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-ja.webp',
        imageCaption: 'Q4_K_Mの各文字が意味すること -- フォーマット名を読み解く',
      },
      body2: {
        title: 'Q4_K_Mと他の量子化の比較',
        content: [
          'この表は、llama.cppのLlama 3 8Bパープレキシティテスト（wikitext、重要度行列なし。低いほど良い）を示しています。割合はf16（6.2332）に対する計算値です。Q4_K_Mは4.58 GiBでパープレキシティの増加は3%未満で、Q8_0のファイルサイズの約58%です（計算値：4.58 / 7.96）。',
          'Q4_K_MとQ8_0の直接比較については、<a href="/ja/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0決定ガイド</a>を参照してください。完全な量子化リファレンスについては、<a href="/ja/local-llms/quantization-levels-comparison" class="text-primary hover:underline">量子化レベル比較</a>を参照してください。',
        ],
        columns: ['フォーマット', 'サイズ、Llama 3 8B（GiB）', 'パープレキシティ（f16との差）'],
        rows: [
          { 'フォーマット': 'Q4_0', 'サイズ、Llama 3 8B（GiB）': '4.34', 'パープレキシティ（f16との差）': '6.70（+7.5%）' },
          { 'フォーマット': 'Q4_K_M', 'サイズ、Llama 3 8B（GiB）': '4.58', 'パープレキシティ（f16との差）': '6.41（+2.8%）' },
          { 'フォーマット': 'Q5_K_M', 'サイズ、Llama 3 8B（GiB）': '5.33', 'パープレキシティ（f16との差）': '6.29（+0.9%）' },
          { 'フォーマット': 'Q8_0', 'サイズ、Llama 3 8B（GiB）': '7.96', 'パープレキシティ（f16との差）': '6.23（+0.02%）' },
        ],
      },
      faq: {
        id: 'faq',
        title: '量子化に関するよくある質問',
        faqs: [
          {
            q: 'Q4_K_MはQ4_0と同じですか？',
            a: 'いいえ。Llama 3 8Bでは、Q4_K_MのパープレキシティはQ4_0の6.70に対して6.41で、ファイルは0.24 GiB大きくなります（4.58対4.34 GiB、llama.cpp、重要度行列なし）。Q4_0よりQ4_K_Mを選んでください。さらに上げるタイミングは<a href="/ja/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0ガイド</a>を参照してください。',
          },
          {
            q: '8 GB VRAMにはどの量子化を使うべきですか？',
            a: '8BモデルならQ4_K_Mです。Llama 3.1 8Bのファイルは4.58 GiBで、4kトークンのKVキャッシュを加えると約5.1 GiB（計算値、実行時オーバーヘッドを除く）です。Q5_K_Mは5.33 GiB、同じキャッシュで約5.8 GiB（計算値）となり、Llama 3 8Bのf16に対するパープレキシティ増加を+2.8%から+0.9%に抑えます。4kコンテキストなら、どちらも実行時オーバーヘッドを除いて8 GBに収まりますが、Q8_0（ファイル7.95 GiB）は収まりません。',
          },
          {
            q: 'Q4_K_Mの「M」は何を意味しますか？',
            a: 'Medium（中程度）です。k-quantファミリー内のサイズ違いを表します。Q4_K_S（small）はより小さく（Llama 3.1 8Bで4.36 GiB対4.58 GiB）パープレキシティは高く、Q4_K_M（medium）が通常のデフォルトです。llama.cppのquantizeツールにはQ4_K_Lという型はなく、次の段階はQ5_K_Mです。',
          },
          {
            q: 'OllamaのどのモデルがデフォルトでQ4_K_Mを使用していますか？',
            a: '複数あります。Llama 3.1 8B、Qwen3 8B、Mistral 7B、Phi-4 miniでは、Ollamaライブラリのデフォルトタグが、名前にq4_K_Mを含むタグとダイジェストを共有しています（Mistral 7Bの場合はv0.3のタグ）（2026-11-06確認）。ライブラリのページにはデフォルトの量子化が明記されておらず、他のモデルは異なる場合があるため、モデルのタグ一覧で確認してください。他の量子化は別タグで、名前はモデルごとに異なります。例：<code>llama3.1:8b-instruct-q5_K_M</code>、<code>llama3.1:8b-instruct-q8_0</code>。',
          },
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M量化是什么？',
    seoTitle: 'Q4_K_M量化格式完整解析 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M是中等质量的K-Quant 4位量化格式。困惑度低于Q4_0，体积小于Q8_0。将其作为默认格式使用。PromptQuorum快速解答。',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-zh.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M是llama.cpp的K-Quant格式，即中等（M）规模的4位量化。**在Llama 3 8B上困惑度为6.41，低于Q4_0的6.70。',
    quickAnswerTop: {
      zh: {
        question: 'Q4_K_M量化是什么？',
        answer: 'Q4_K_M表示使用K-Quant（K）压缩的4位量化，品质为中等（M）。这是大多数模型常用的默认选择：困惑度低于Q4_0，文件大小小于Q8_0。',
        bullets: [
          'Q=量化，4=4位，K=K-Quant，M=中等',
          '困惑度低于Q4_0（Llama 3 8B上为6.41对6.70），文件大0.24 GiB',
          '将Q4_K_M作为默认量化格式使用',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = 采用K-Quant压缩的中等质量4位量化 — 困惑度低于Q4_0，文件略大',
          'Llama 3.1 8B的Q4_K_M磁盘文件为4.58 GiB；加上4k token的KV缓存（约0.5 GiB，计算值），在不含运行时开销的情况下约需5.1 GiB显存',
          '将Q4_K_M作为默认格式——在Llama 3 8B测试中，相对f16的困惑度增加不到3%，文件大小约为Q8_0的58%',
        ],
      },
      body1: {
        title: 'Q4_K_M中每个字母的含义',
        content: [
          '<strong>Q4_K_M之所以存在，是因为较早的4位格式Q4_0损失了不必要的质量。</strong>在Llama 3 8B上，llama.cpp的困惑度测试中Q4_K_M为6.41，Q4_0为6.70（越低越好；f16为6.23），文件大0.24 GiB（4.58对4.34 GiB）。来源：<a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp perplexity README</a>。',
          '“K”表示<a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp拉取请求#1684</a>引入的k-quant系列。Q4_K_M混合了两种张量类型：attention.wv和feed_forward.w2张量的一半以及output.weight使用6位Q6_K，其余张量使用4位Q4_K。在Llama 3.1 8B上，平均每个权重为4.89位（llama.cpp quantize README），高于名义上的4位。',
          '“M”是该系列内的大小变体。Q4_K_S（small）对所有张量使用Q4_K：在Llama 3.1 8B上为4.36 GiB，Q4_K_M为4.58 GiB，困惑度更高（Llama 3 8B、无重要性矩阵时为6.50对6.41）。再往上一级是Q5_K_M，为5.33 GiB。',
          '<strong>K-quant以权重块为单位工作。</strong>Q4_K把32个权重组成一个块，8个块组成一个超级块，块的缩放因子和最小值用6位存储，合计每个权重4.5位（拉取请求#1684）。Q4_K_M因含有Q6_K张量而达到4.89位，所以其大小介于Q4_K_S（4.67）和Q5_K_M（5.70）之间。M等级不够用时，请参阅<a href="/zh/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>。',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-zh.webp',
        imageCaption: 'Q4_K_M中每个字母的含义 -- 解读格式名称',
      },
      body2: {
        title: 'Q4_K_M与其他量化格式的比较',
        content: [
          '该表展示llama.cpp在Llama 3 8B上的困惑度测试（wikitext，无重要性矩阵；越低越好）。百分比是相对f16（6.2332）计算得出。Q4_K_M在4.58 GiB下困惑度增加不到3%，约为Q8_0文件大小的58%（计算值：4.58 / 7.96）。',
          '关于Q4_K_M与Q8_0的直接比较，请参阅<a href="/zh/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0决策指南</a>。完整的量化参考请查看<a href="/zh/local-llms/quantization-levels-comparison" class="text-primary hover:underline">量化级别比较</a>。',
        ],
        columns: ['格式', '大小，Llama 3 8B（GiB）', '困惑度（相对f16的变化）'],
        rows: [
          { '格式': 'Q4_0', '大小，Llama 3 8B（GiB）': '4.34', '困惑度（相对f16的变化）': '6.70（+7.5%）' },
          { '格式': 'Q4_K_M', '大小，Llama 3 8B（GiB）': '4.58', '困惑度（相对f16的变化）': '6.41（+2.8%）' },
          { '格式': 'Q5_K_M', '大小，Llama 3 8B（GiB）': '5.33', '困惑度（相对f16的变化）': '6.29（+0.9%）' },
          { '格式': 'Q8_0', '大小，Llama 3 8B（GiB）': '7.96', '困惑度（相对f16的变化）': '6.23（+0.02%）' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于量化的常见问题',
        faqs: [
          {
            q: 'Q4_K_M和Q4_0是一样的吗？',
            a: '不是。在Llama 3 8B上，Q4_K_M的困惑度为6.41，Q4_0为6.70，文件大0.24 GiB（4.58对4.34 GiB；llama.cpp，无重要性矩阵）。请优先选择Q4_K_M而不是Q4_0。何时升级请参阅<a href="/zh/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0指南</a>。',
          },
          {
            q: '8 GB显存应该使用哪种量化？',
            a: '8B模型选Q4_K_M：Llama 3.1 8B的文件为4.58 GiB，加上4k token的KV缓存约为5.1 GiB（计算值，不含运行时开销）。Q5_K_M为5.33 GiB，同样缓存下约5.8 GiB（计算值），并把Llama 3 8B相对f16的困惑度增幅从+2.8%降到+0.9%。在4k上下文下，两者在计入运行时开销之前都能放进8 GB；Q8_0（文件7.95 GiB）放不下。',
          },
          {
            q: 'Q4_K_M中的"M"代表什么？',
            a: 'Medium（中等）——k-quant系列内的大小变体。Q4_K_S（small）更小（Llama 3.1 8B上为4.36 GiB对4.58 GiB），困惑度更高；Q4_K_M（medium）是常用默认选项。llama.cpp的quantize工具没有Q4_K_L类型，再往上一级是Q5_K_M。',
          },
          {
            q: 'Ollama上哪些模型默认使用Q4_K_M？',
            a: '有几个。Llama 3.1 8B、Qwen3 8B、Mistral 7B和Phi-4 mini在Ollama库中的默认标签，与名称含q4_K_M的某个标签共享同一摘要（digest）（Mistral 7B对应v0.3标签）（2026-11-06核对）；库页面并未明确标注默认量化，其他模型可能不同，请查看该模型的标签列表。其他量化是单独的标签，名称因模型而异，例如<code>llama3.1:8b-instruct-q5_K_M</code>或<code>llama3.1:8b-instruct-q8_0</code>。',
          },
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: 'O que é a quantização Q4_K_M?',
    seoTitle: 'Guia de quantização Q4_K_M 2026 | PromptQuorum',
    metaDescription: 'Q4_K_M é quantização de 4 bits k-quant de qualidade média: perplexidade menor que Q4_0, menor que Q8_0. Use-a como padrão no Ollama. Guia rápido do PromptQuorum.',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-pt.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M é um formato k-quant do llama.cpp: quantização de 4 bits com uma mistura de tipos de tensor de tamanho médio.** No Llama 3 8B, ele atinge perplexidade de 6,41 contra 6,70 do Q4_0, com um arquivo 0,24 GiB maior.',
    quickAnswerTop: {
      pt: {
        question: 'O que é a quantização Q4_K_M?',
        answer: 'Q4_K_M significa quantização de 4 bits com compressão k-quant (K) em qualidade média (M). É um padrão comum para a maioria dos modelos: perplexidade menor que Q4_0, tamanho menor que Q8_0.',
        bullets: [
          'Q = quantizado, 4 = 4 bits, K = k-quant, M = médio',
          'Perplexidade menor que Q4_0 (6,41 contra 6,70 no Llama 3 8B) com arquivo 0,24 GiB maior',
          'Use Q4_K_M como quantização padrão',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = quantização de 4 bits com compressão k-quant em qualidade média — perplexidade menor que Q4_0 com arquivo um pouco maior',
          'O Llama 3.1 8B em Q4_K_M tem 4,58 GiB em disco; com cache KV de 4k tokens (cerca de 0,5 GiB, calculado), precisa de cerca de 5,1 GiB de VRAM antes do overhead de execução',
          'Use Q4_K_M como padrão — no teste do Llama 3 8B, soma menos de 3% de perplexidade sobre o f16 com cerca de 58% do tamanho do Q8_0',
        ],
      },
      body1: {
        title: 'O que cada letra em Q4_K_M significa',
        content: [
          '<strong>Q4_K_M existe porque o formato antigo de 4 bits, Q4_0, perde mais qualidade do que o necessário.</strong> No Llama 3 8B, o teste de perplexidade do llama.cpp dá 6,41 para Q4_K_M e 6,70 para Q4_0 (menor é melhor; f16 é 6,23), com arquivo 0,24 GiB maior (4,58 contra 4,34 GiB). Fonte: <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README de perplexity do llama.cpp</a>.',
          'O "K" marca a família k-quant introduzida no <a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">pull request #1684 do llama.cpp</a>. Q4_K_M mistura dois tipos de tensor: Q6_K de 6 bits para metade dos tensores attention.wv e feed_forward.w2 e para o output.weight, e Q4_K de 4 bits para os demais tensores. No Llama 3.1 8B isso dá em média 4,89 bits por peso (README do quantize do llama.cpp), acima dos 4 nominais.',
          'O "M" é a variante de tamanho dentro da família. Q4_K_S (small) usa Q4_K em todos os tensores: 4,36 GiB contra 4,58 GiB do Q4_K_M no Llama 3.1 8B, com perplexidade maior (6,50 contra 6,41 no Llama 3 8B sem matriz de importância). Q5_K_M é o próximo degrau, com 5,33 GiB.',
          '<strong>O k-quant trabalha com blocos de pesos.</strong> Q4_K agrupa 32 pesos em um bloco e 8 blocos em um super-bloco, guardando escalas e mínimos dos blocos com 6 bits, o que dá 4,5 bits por peso (pull request #1684). Q4_K_M chega a 4,89 por causa dos tensores Q6_K, por isso fica entre Q4_K_S (4,67) e Q5_K_M (5,70) em tamanho. Quando o nível M não basta, veja <a href="/pt/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>.',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-pt.webp',
        imageCaption: 'O Que Cada Letra em Q4_K_M Significa -- Decodificando o nome do formato',
      },
      body2: {
        title: 'Como Q4_K_M se compara a outras quantizações',
        content: [
          'A tabela mostra o teste de perplexidade do llama.cpp no Llama 3 8B (wikitext, sem matriz de importância; menor é melhor). As porcentagens são calculadas em relação ao f16 (6,2332). Q4_K_M soma menos de 3% de perplexidade com 4,58 GiB, cerca de 58% do tamanho do Q8_0 (calculado: 4,58 / 7,96).',
          'Para uma comparação direta de Q4_K_M vs Q8_0, veja o <a href="/pt/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guia de decisão Q4_K_M vs Q8_0</a>. Para a referência completa de quantização, veja a <a href="/pt/local-llms/quantization-levels-comparison" class="text-primary hover:underline">comparação de níveis de quantização</a>.',
        ],
        columns: ['Formato', 'Tamanho, Llama 3 8B (GiB)', 'Perplexidade (variação vs f16)'],
        rows: [
          { 'Formato': 'Q4_0', 'Tamanho, Llama 3 8B (GiB)': '4,34', 'Perplexidade (variação vs f16)': '6,70 (+7,5%)' },
          { 'Formato': 'Q4_K_M', 'Tamanho, Llama 3 8B (GiB)': '4,58', 'Perplexidade (variação vs f16)': '6,41 (+2,8%)' },
          { 'Formato': 'Q5_K_M', 'Tamanho, Llama 3 8B (GiB)': '5,33', 'Perplexidade (variação vs f16)': '6,29 (+0,9%)' },
          { 'Formato': 'Q8_0', 'Tamanho, Llama 3 8B (GiB)': '7,96', 'Perplexidade (variação vs f16)': '6,23 (+0,02%)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre quantização',
        faqs: [
          {
            q: 'Q4_K_M é o mesmo que Q4_0?',
            a: 'Não. No Llama 3 8B, Q4_K_M atinge perplexidade de 6,41 contra 6,70 do Q4_0, com arquivo 0,24 GiB maior (4,58 contra 4,34 GiB; llama.cpp, sem matriz de importância). Prefira Q4_K_M ao Q4_0. Veja o <a href="/pt/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guia Q4_K_M vs Q8_0</a> para saber quando subir de nível.',
          },
          {
            q: 'Qual quantização devo usar com 8 GB de VRAM?',
            a: 'Q4_K_M para modelos 8B: o arquivo do Llama 3.1 8B tem 4,58 GiB, ou cerca de 5,1 GiB com cache KV de 4k tokens (calculado, antes do overhead de execução). Q5_K_M tem 5,33 GiB, cerca de 5,8 GiB com o mesmo cache (calculado), e reduz o aumento de perplexidade sobre o f16 de +2,8% para +0,9% no Llama 3 8B. Com contexto de 4k, ambos cabem em 8 GB antes do overhead de execução; Q8_0 (arquivo de 7,95 GiB) não.',
          },
          {
            q: "O que significa o 'M' em Q4_K_M?",
            a: 'Medium (médio) — a variante de tamanho dentro da família k-quant. Q4_K_S (small) é menor (4,36 GiB contra 4,58 GiB no Llama 3.1 8B) com perplexidade maior, e Q4_K_M (medium) é o padrão usual. A ferramenta quantize do llama.cpp não tem um tipo Q4_K_L; o próximo degrau é Q5_K_M.',
          },
          {
            q: 'Quais modelos no Ollama usam Q4_K_M por padrão?',
            a: 'Vários. No Llama 3.1 8B, Qwen3 8B, Mistral 7B e Phi-4 mini, a tag padrão na biblioteca Ollama tem o mesmo digest de uma tag com q4_K_M no nome (no Mistral 7B: a tag v0.3) (verificado em 2026-11-06); as páginas da biblioteca não indicam a quantização padrão e outros modelos podem diferir, então consulte a lista de tags do modelo. As outras quantizações são tags separadas, com nomes que variam por modelo, por exemplo <code>llama3.1:8b-instruct-q5_K_M</code> ou <code>llama3.1:8b-instruct-q8_0</code>.',
          },
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: '¿Qué es la cuantización Q4_K_M?',
    seoTitle: 'Guía de cuantización Q4_K_M 2026 | PromptQuorum',
    metaDescription: 'Q4_K_M es cuantización de 4 bits k-quant de calidad media: menor perplejidad que Q4_0, más pequeña que Q8_0. Úsala por defecto en Ollama. Guía rápida de PromptQuorum.',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-es.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M es un formato k-quant de llama.cpp: cuantización de 4 bits con una mezcla de tipos de tensor de tamaño medio.** En Llama 3 8B logra una perplejidad de 6,41 frente a 6,70 de Q4_0, con un archivo 0,24 GiB mayor.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es la cuantización Q4_K_M?',
        answer: 'Q4_K_M significa cuantización de 4 bits con compresión k-quant (K) a calidad media (M). Es una opción por defecto habitual para la mayoría de modelos: menor perplejidad que Q4_0, menor tamaño que Q8_0.',
        bullets: [
          'Q = cuantizado, 4 = 4 bits, K = k-quant, M = medio',
          'Menor perplejidad que Q4_0 (6,41 frente a 6,70 en Llama 3 8B) con un archivo 0,24 GiB mayor',
          'Usa Q4_K_M como cuantización predeterminada',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = cuantización de 4 bits con compresión k-quant a calidad media — menor perplejidad que Q4_0 con un archivo algo mayor',
          'Llama 3.1 8B en Q4_K_M ocupa 4,58 GiB en disco; con una caché KV de 4k tokens (unos 0,5 GiB, calculado) necesita unos 5,1 GiB de VRAM antes de la sobrecarga de ejecución',
          'Usa Q4_K_M como predeterminado — en la prueba de Llama 3 8B añade menos del 3 % de perplejidad sobre f16 con alrededor del 58 % del tamaño de Q8_0',
        ],
      },
      body1: {
        title: 'Qué significa cada letra de Q4_K_M',
        content: [
          '<strong>Q4_K_M existe porque el formato antiguo de 4 bits, Q4_0, pierde más calidad de la necesaria.</strong> En Llama 3 8B, la prueba de perplejidad de llama.cpp da 6,41 para Q4_K_M y 6,70 para Q4_0 (menor es mejor; f16 es 6,23), con un archivo 0,24 GiB mayor (4,58 frente a 4,34 GiB). Fuente: <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">README de perplexity de llama.cpp</a>.',
          'La "K" marca la familia k-quant introducida en el <a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">pull request #1684 de llama.cpp</a>. Q4_K_M mezcla dos tipos de tensor: Q6_K de 6 bits para la mitad de los tensores attention.wv y feed_forward.w2 y para output.weight, y Q4_K de 4 bits para el resto de los tensores. En Llama 3.1 8B esto da una media de 4,89 bits por peso (README de quantize de llama.cpp), por encima de los 4 nominales.',
          'La "M" es la variante de tamaño dentro de la familia. Q4_K_S (small) usa Q4_K en todos los tensores: 4,36 GiB frente a 4,58 GiB de Q4_K_M en Llama 3.1 8B, con mayor perplejidad (6,50 frente a 6,41 en Llama 3 8B sin matriz de importancia). Q5_K_M es el siguiente escalón, con 5,33 GiB.',
          '<strong>K-quant trabaja con bloques de pesos.</strong> Q4_K agrupa 32 pesos en un bloque y 8 bloques en un superbloque, y guarda escalas y mínimos de bloque con 6 bits, lo que supone 4,5 bits por peso (pull request #1684). Q4_K_M llega a 4,89 por sus tensores Q6_K, por eso queda entre Q4_K_S (4,67) y Q5_K_M (5,70) en tamaño. Cuando el nivel M no basta, consulta <a href="/es/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>.',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-es.webp',
        imageCaption: 'Qué Significa Cada Letra en Q4_K_M -- Descifrando el nombre del formato',
      },
      body2: {
        title: 'Cómo se compara Q4_K_M con otras cuantizaciones',
        content: [
          'La tabla muestra la prueba de perplejidad de llama.cpp en Llama 3 8B (wikitext, sin matriz de importancia; menor es mejor). Los porcentajes se calculan respecto a f16 (6,2332). Q4_K_M añade menos del 3 % de perplejidad con 4,58 GiB, aproximadamente el 58 % del tamaño de Q8_0 (calculado: 4,58 / 7,96).',
          'Para una comparación directa de Q4_K_M vs Q8_0, consulta la <a href="/es/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guía de decisión Q4_K_M vs Q8_0</a>. Para la referencia completa de cuantización, consulta la <a href="/es/local-llms/quantization-levels-comparison" class="text-primary hover:underline">comparación de niveles de cuantización</a>.',
        ],
        columns: ['Formato', 'Tamaño, Llama 3 8B (GiB)', 'Perplejidad (cambio vs f16)'],
        rows: [
          { 'Formato': 'Q4_0', 'Tamaño, Llama 3 8B (GiB)': '4,34', 'Perplejidad (cambio vs f16)': '6,70 (+7,5 %)' },
          { 'Formato': 'Q4_K_M', 'Tamaño, Llama 3 8B (GiB)': '4,58', 'Perplejidad (cambio vs f16)': '6,41 (+2,8 %)' },
          { 'Formato': 'Q5_K_M', 'Tamaño, Llama 3 8B (GiB)': '5,33', 'Perplejidad (cambio vs f16)': '6,29 (+0,9 %)' },
          { 'Formato': 'Q8_0', 'Tamaño, Llama 3 8B (GiB)': '7,96', 'Perplejidad (cambio vs f16)': '6,23 (+0,02 %)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre cuantización',
        faqs: [
          {
            q: '¿Es Q4_K_M lo mismo que Q4_0?',
            a: 'No. En Llama 3 8B, Q4_K_M alcanza una perplejidad de 6,41 frente a 6,70 de Q4_0, con un archivo 0,24 GiB mayor (4,58 frente a 4,34 GiB; llama.cpp, sin matriz de importancia). Prefiere Q4_K_M a Q4_0. Consulta la <a href="/es/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guía Q4_K_M vs Q8_0</a> para saber cuándo subir de nivel.',
          },
          {
            q: '¿Qué cuantización debo usar con 8 GB de VRAM?',
            a: 'Q4_K_M para modelos 8B: el archivo de Llama 3.1 8B ocupa 4,58 GiB, o unos 5,1 GiB con una caché KV de 4k tokens (calculado, antes de la sobrecarga de ejecución). Q5_K_M ocupa 5,33 GiB, unos 5,8 GiB con la misma caché (calculado), y reduce el aumento de perplejidad sobre f16 de +2,8 % a +0,9 % en Llama 3 8B. Con un contexto de 4k ambos caben en 8 GB antes de la sobrecarga de ejecución; Q8_0 (archivo de 7,95 GiB) no.',
          },
          {
            q: "¿Qué significa la 'M' en Q4_K_M?",
            a: 'Medium (medio) — la variante de tamaño dentro de la familia k-quant. Q4_K_S (small) es más pequeño (4,36 GiB frente a 4,58 GiB en Llama 3.1 8B) con mayor perplejidad, y Q4_K_M (medium) es el valor predeterminado habitual. La herramienta quantize de llama.cpp no tiene un tipo Q4_K_L; el siguiente escalón es Q5_K_M.',
          },
          {
            q: '¿Qué modelos en Ollama usan Q4_K_M por defecto?',
            a: 'Varios. En Llama 3.1 8B, Qwen3 8B, Mistral 7B y Phi-4 mini, la etiqueta por defecto de la biblioteca de Ollama comparte su digest con una etiqueta que lleva q4_K_M en el nombre (en Mistral 7B: la etiqueta v0.3) (comprobado el 2026-11-06); las páginas de la biblioteca no indican la cuantización por defecto y otros modelos pueden diferir, así que consulta la lista de etiquetas del modelo. Las demás cuantizaciones son etiquetas aparte cuyos nombres varían según el modelo, por ejemplo <code>llama3.1:8b-instruct-q5_K_M</code> o <code>llama3.1:8b-instruct-q8_0</code>.',
          },
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: 'ما هو تكميم ⁨Q4⁩_⁨K⁩_⁨M⁩؟',
    seoTitle: '⁨Q4⁩_⁨K⁩_⁨M⁩: ضغط ⁨k-quant 4-bit 2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: 'Q4_K_M تكميم 4-bit من عائلة k-quant بجودة متوسطة: حيرة أقل من Q4_0 وحجم أصغر من Q8_0. ملف Llama 3.1 8B بصيغته 4.58 GiB. استخدمه افتراضيًا في Ollama.',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-ar.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    leadAnswerBlock: '**Q4_K_M صيغة k-quant في llama.cpp: تكميم 4-bit بمزيج من أنواع التنسورات بحجم متوسط.** في Llama 3 8B تبلغ حيرته (perplexity) 6.41 مقابل 6.70 لـ Q4_0، بملف أكبر بمقدار 0.24 GiB.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو تكميم Q4_K_M؟',
        answer: 'يعني Q4_K_M تكميم 4-bit مع ضغط k-quant (K) بجودة متوسطة (M). وهو خيار افتراضي شائع لمعظم النماذج: حيرة أقل من Q4_0، وحجم أصغر من Q8_0.',
        bullets: [
          'Q = مضغوط، 4 = 4 بت، K = k-quant، M = متوسط',
          'حيرة (perplexity) أقل من Q4_0 (6.41 مقابل 6.70 في Llama 3 8B) بملف أكبر بمقدار 0.24 GiB',
          'استخدم Q4_K_M كتكميم افتراضي',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = تكميم 4-bit مع ضغط k-quant بجودة متوسطة — حيرة أقل من Q4_0 بملف أكبر قليلًا',
          'حجم Llama 3.1 8B بصيغة Q4_K_M هو 4.58 GiB على القرص؛ ومع ذاكرة KV بسياق 4k رمز (حوالي 0.5 GiB، محسوب) يحتاج إلى حوالي 5.1 GiB من VRAM قبل الحمل الإضافي لوقت التشغيل',
          'استخدم Q4_K_M كافتراضي — في اختبار Llama 3 8B يضيف أقل من 3% إلى الحيرة مقارنة بـ f16 بنحو 58% من حجم ملف Q8_0',
        ],
      },
      body1: {
        title: 'ماذا تعني كل حرف في Q4_K_M',
        content: [
          '<strong>يوجد Q4_K_M لأن صيغة 4-bit الأقدم Q4_0 تفقد جودة أكثر من اللازم.</strong> في Llama 3 8B يعطي اختبار الحيرة في llama.cpp القيمة 6.41 لـ Q4_K_M و6.70 لـ Q4_0 (الأقل أفضل؛ f16 هو 6.23)، بملف أكبر بمقدار 0.24 GiB (4.58 مقابل 4.34 GiB). المصدر: <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">ملف README الخاص بـ perplexity في llama.cpp</a>.',
          'يشير الحرف K إلى عائلة k-quant التي قُدّمت في <a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">طلب السحب رقم 1684 في llama.cpp</a>. يمزج Q4_K_M نوعين من التنسورات: Q6_K بـ 6 بتات لنصف تنسورات attention.wv وfeed_forward.w2 ولـ output.weight، وQ4_K بـ 4 بتات لبقية التنسورات. في Llama 3.1 8B يعطي ذلك متوسط 4.89 بت لكل وزن (ملف README الخاص بـ quantize في llama.cpp)، أي أعلى من 4 الاسمية.',
          'الحرف M هو متغير الحجم داخل العائلة. يستخدم Q4_K_S (صغير) الصيغة Q4_K لكل التنسورات: ‏4.36 GiB مقابل 4.58 GiB لـ Q4_K_M في Llama 3.1 8B، بحيرة أعلى (6.50 مقابل 6.41 في Llama 3 8B دون مصفوفة أهمية). والدرجة الأعلى التالية هي Q5_K_M بحجم 5.33 GiB.',
          '<strong>يعمل k-quant على كتل من الأوزان.</strong> يجمع Q4_K كل 32 وزنًا في كتلة و8 كتل في كتلة عليا، ويخزّن مقاييس الكتل وقيمها الدنيا بـ 6 بتات، أي 4.5 بت لكل وزن (طلب السحب رقم 1684). يصل Q4_K_M إلى 4.89 بسبب تنسورات Q6_K فيه، ولذلك يقع حجمه بين Q4_K_S (4.67) وQ5_K_M (5.70). عندما لا يكفي المستوى M، راجع <a href="/ar/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M مقابل Q8_0</a>.',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-ar.webp',
        imageCaption: 'ماذا يعني كل حرف في Q4_K_M -- فك رموز اسم الصيغة',
      },
      body2: {
        title: 'كيف يُقارَن Q4_K_M بمستويات التكميم الأخرى',
        content: [
          'يعرض الجدول اختبار الحيرة في llama.cpp على Llama 3 8B (بيانات wikitext، دون مصفوفة أهمية؛ الأقل أفضل). النسب المئوية محسوبة بالنسبة إلى f16 (6.2332). يضيف Q4_K_M أقل من 3% إلى الحيرة بحجم 4.58 GiB، أي حوالي 58% من حجم ملف Q8_0 (محسوب: 4.58 / 7.96).',
          'للمقارنة المباشرة بين Q4_K_M و Q8_0، راجع <a href="/ar/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">دليل قرار Q4_K_M مقابل Q8_0</a>. للمرجع الكامل حول التكميم، راجع <a href="/ar/local-llms/quantization-levels-comparison" class="text-primary hover:underline">مقارنة مستويات التكميم</a>.',
        ],
        columns: ['الصيغة', 'الحجم، Llama 3 8B (GiB)', 'الحيرة (التغيّر عن f16)'],
        rows: [
          { 'الصيغة': 'Q4_0', 'الحجم، Llama 3 8B (GiB)': '4.34', 'الحيرة (التغيّر عن f16)': '6.70 (+7.5%)' },
          { 'الصيغة': 'Q4_K_M', 'الحجم، Llama 3 8B (GiB)': '4.58', 'الحيرة (التغيّر عن f16)': '6.41 (+2.8%)' },
          { 'الصيغة': 'Q5_K_M', 'الحجم، Llama 3 8B (GiB)': '5.33', 'الحيرة (التغيّر عن f16)': '6.29 (+0.9%)' },
          { 'الصيغة': 'Q8_0', 'الحجم، Llama 3 8B (GiB)': '7.96', 'الحيرة (التغيّر عن f16)': '6.23 (+0.02%)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول التكميم',
        faqs: [
          {
            q: 'هل Q4_K_M هو نفسه Q4_0؟',
            a: 'لا. في Llama 3 8B تبلغ حيرة Q4_K_M ‏6.41 مقابل 6.70 لـ Q4_0، بملف أكبر بمقدار 0.24 GiB (4.58 مقابل 4.34 GiB؛ llama.cpp، دون مصفوفة أهمية). فضّل Q4_K_M على Q4_0. راجع <a href="/ar/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">دليل Q4_K_M مقابل Q8_0</a> لمعرفة متى ترتقي بالمستوى.',
          },
          {
            q: 'ما التكميم المناسب مع 8 GB VRAM؟',
            a: 'Q4_K_M لنماذج 8B: ملف Llama 3.1 8B حجمه 4.58 GiB، أو حوالي 5.1 GiB مع ذاكرة KV بسياق 4k رمز (محسوب، قبل الحمل الإضافي لوقت التشغيل). حجم Q5_K_M هو 5.33 GiB، وحوالي 5.8 GiB مع الذاكرة نفسها (محسوب)، ويخفض زيادة الحيرة عن f16 في Llama 3 8B من +2.8% إلى +0.9%. عند سياق 4k يتسع كلاهما في 8 GB قبل الحمل الإضافي لوقت التشغيل؛ أما Q8_0 (ملف 7.95 GiB) فلا.',
          },
          {
            q: 'ماذا تعني "M" في Q4_K_M؟',
            a: 'Medium (متوسط) — متغير الحجم داخل عائلة k-quant. يكون Q4_K_S (صغير) أصغر (4.36 GiB مقابل 4.58 GiB في Llama 3.1 8B) بحيرة أعلى، ويُعدّ Q4_K_M (متوسط) الخيار الافتراضي المعتاد. لا تحتوي أداة quantize في llama.cpp على نوع Q4_K_L؛ والدرجة الأعلى التالية هي Q5_K_M.',
          },
          {
            q: 'ما النماذج في Ollama التي تستخدم Q4_K_M افتراضيًا؟',
            a: 'عدة نماذج. في Llama 3.1 8B وQwen3 8B وMistral 7B وPhi-4 mini يشترك الوسم الافتراضي في مكتبة Ollama في الـ digest نفسه مع وسم يحمل q4_K_M في اسمه (في Mistral 7B: وسم v0.3) (جرى التحقق في 2026-11-06)؛ ولا تذكر صفحات المكتبة التكميم الافتراضي صراحةً، وقد تختلف النماذج الأخرى، لذا راجع قائمة وسوم النموذج. التكميمات الأخرى وسوم منفصلة تختلف أسماؤها حسب النموذج، مثل <code>llama3.1:8b-instruct-q5_K_M</code> أو <code>llama3.1:8b-instruct-q8_0</code>.',
          },
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M 양자화란 무엇입니까?',
    seoTitle: 'Q4_K_M 양자화 완전 가이드 2026 | PromptQuorum',
    metaDescription: 'Q4_K_M은 중간 품질의 4비트 k-quant 양자화입니다. Q4_0보다 퍼플렉시티가 낮고 Q8_0보다 파일 크기가 작습니다. Ollama의 기본 설정으로 사용하십시오.',
    heroImage: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-ko.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-11-06',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    targetKeywords: [
      'Q4_K_M 양자화',
      'k-quant 4비트 차이',
      'Ollama 기본 양자화',
      'Q4_K_M vs Q4_0',
      'VRAM 8GB 양자화 추천',
    ],
    readTime: '3분 분량',
    leadAnswerBlock: '**Q4_K_M은 llama.cpp의 k-quant 형식으로, 중간(M) 규모의 4비트 양자화입니다.** Llama 3 8B에서 퍼플렉시티는 6.41로 Q4_0의 6.70보다 낮습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Q4_K_M 양자화란 무엇입니까?',
        answer: 'Q4_K_M은 k-quant(K) 압축 방식을 사용하는 4비트 양자화로, 중간(M) 품질 수준을 의미합니다. 대부분의 모델에서 흔히 쓰이는 기본 설정입니다. Q4_0보다 퍼플렉시티가 낮고 Q8_0보다 파일 크기가 작습니다.',
        bullets: [
          'Q = 양자화, 4 = 4비트, K = k-quant, M = 중간',
          'Q4_0보다 낮은 퍼플렉시티(Llama 3 8B에서 6.41 대 6.70), 파일은 0.24 GiB 더 큼',
          'Q4_K_M을 기본 양자화 설정으로 사용하십시오',
        ],
        updatedDate: '2026-11',
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      inLanguage: 'ko',
      headline: 'Q4_K_M 양자화란 무엇입니까?',
      description: 'Q4_K_M은 중간 품질의 4비트 k-quant 양자화입니다. Llama 3 8B에서 Q4_0보다 퍼플렉시티가 낮고 Q8_0보다 파일 크기가 작으며, Llama 3.1 8B, Qwen3 8B, Mistral 7B, Phi-4 mini 등 일부 Ollama 모델의 기본 태그와 같은 digest를 공유합니다.',
      url: 'https://www.promptquorum.com/ko/prompt-bites/what-is-q4-k-m-quantization',
      datePublished: '2026-05-18',
      dateModified: '2026-11-06',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: 'https://www.promptquorum.com/ko',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Prompt Bites',
          item: 'https://www.promptquorum.com/ko/prompt-bites',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Q4_K_M 양자화란 무엇입니까?',
          item: 'https://www.promptquorum.com/ko/prompt-bites/what-is-q4-k-m-quantization',
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = k-quant 압축을 사용하는 중간 품질의 4비트 양자화 — Q4_0보다 퍼플렉시티가 낮고 파일은 약간 큽니다',
          'Q4_K_M의 Llama 3.1 8B는 디스크에서 4.58 GiB입니다. 4k 토큰 KV 캐시(약 0.5 GiB, 계산값)를 더하면 런타임 오버헤드를 제외하고 약 5.1 GiB의 VRAM이 필요합니다',
          'Q4_K_M을 기본값으로 사용하십시오 — Llama 3 8B 테스트에서 f16 대비 퍼플렉시티 증가가 3% 미만이며 파일 크기는 Q8_0의 약 58%입니다',
        ],
      },
      body1: {
        title: 'Q4_K_M의 각 문자가 의미하는 것',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M은 k-quant 압축을 사용하는 4비트 양자화 형식으로, Llama 3 8B에서 Q4_0보다 퍼플렉시티가 낮으며(6.41 대 6.70) 파일은 0.24 GiB 더 큽니다.',
          },
          {
            type: 'plain-terms',
            text: 'Q4_K_M에서 Q는 양자화, 4는 4비트, K는 k-quant 계열, M은 중간 크기 변형을 의미하며, 일부 텐서에는 6비트(Q6_K)를, 나머지에는 4비트(Q4_K)를 사용합니다.',
          },
        ],
        content: [
          '<strong>Q4_K_M이 존재하는 이유는 기존 4비트 형식인 Q4_0가 필요 이상으로 품질을 잃기 때문입니다.</strong> Llama 3 8B에서 llama.cpp의 퍼플렉시티 테스트는 Q4_K_M이 6.41, Q4_0가 6.70(낮을수록 좋음, f16은 6.23)이며, 파일은 0.24 GiB 더 큽니다(4.58 대 4.34 GiB). 출처: <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/perplexity/README.md" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp perplexity README</a>.',
          '"K"는 <a href="https://github.com/ggml-org/llama.cpp/pull/1684" class="text-primary hover:underline" rel="noopener noreferrer">llama.cpp 풀 리퀘스트 #1684</a>에서 도입된 k-quant 계열을 뜻합니다. Q4_K_M은 두 가지 텐서 유형을 섞습니다. attention.wv와 feed_forward.w2 텐서의 절반과 output.weight에는 6비트 Q6_K를, 나머지 텐서에는 4비트 Q4_K를 사용합니다. Llama 3.1 8B에서는 가중치당 평균 4.89비트(llama.cpp quantize README)로, 명목상의 4비트보다 높습니다.',
          '"M"은 계열 내의 크기 변형입니다. Q4_K_S(small)는 모든 텐서에 Q4_K를 사용합니다. Llama 3.1 8B에서 4.36 GiB 대 Q4_K_M의 4.58 GiB이며 퍼플렉시티는 더 높습니다(Llama 3 8B, 중요도 행렬 없음에서 6.50 대 6.41). 다음 단계는 5.33 GiB의 Q5_K_M입니다.',
          '<strong>K-quant는 가중치 블록 단위로 동작합니다.</strong> Q4_K는 가중치 32개를 한 블록으로, 8개 블록을 한 슈퍼 블록으로 묶고 블록 스케일과 최솟값을 6비트로 저장하며, 이는 가중치당 4.5비트입니다(풀 리퀘스트 #1684). Q4_K_M은 Q6_K 텐서 때문에 4.89비트가 되며, 그래서 크기가 Q4_K_S(4.67)와 Q5_K_M(5.70) 사이에 있습니다. M 등급으로 부족하다면 <a href="/ko/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>를 참조하십시오.',
        ],
        image: '/images/what-is-q4-k-m-quantization-letter-breakdown-hero-ko.webp',
        imageCaption: 'Q4_K_M의 각 글자가 의미하는 것 -- 형식 이름 해독하기',
      },
      body2: {
        title: 'Q4_K_M과 다른 양자화 형식 비교',
        content: [
          '이 표는 llama.cpp의 Llama 3 8B 퍼플렉시티 테스트(wikitext, 중요도 행렬 없음, 낮을수록 좋음)를 보여줍니다. 백분율은 f16(6.2332) 대비 계산한 값입니다. Q4_K_M은 4.58 GiB에서 퍼플렉시티 증가가 3% 미만이며, 이는 Q8_0 파일 크기의 약 58%입니다(계산값: 4.58 / 7.96).',
          'Q4_K_M과 Q8_0의 직접 비교는 <a href="/ko/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0 결정 가이드</a>를 참조하십시오. 전체 양자화 참고 자료는 <a href="/ko/local-llms/quantization-levels-comparison" class="text-primary hover:underline">양자화 수준 비교</a>를 참조하십시오.',
        ],
        columns: ['형식', '크기, Llama 3 8B (GiB)', '퍼플렉시티 (f16 대비 변화)'],
        rows: [
          { '형식': 'Q4_0', '크기, Llama 3 8B (GiB)': '4.34', '퍼플렉시티 (f16 대비 변화)': '6.70 (+7.5%)' },
          { '형식': 'Q4_K_M', '크기, Llama 3 8B (GiB)': '4.58', '퍼플렉시티 (f16 대비 변화)': '6.41 (+2.8%)' },
          { '형식': 'Q5_K_M', '크기, Llama 3 8B (GiB)': '5.33', '퍼플렉시티 (f16 대비 변화)': '6.29 (+0.9%)' },
          { '형식': 'Q8_0', '크기, Llama 3 8B (GiB)': '7.96', '퍼플렉시티 (f16 대비 변화)': '6.23 (+0.02%)' },
        ],
      },
      faq: {
        id: 'faq',
        title: '양자화에 관한 자주 묻는 질문',
        faqs: [
          {
            q: 'Q4_K_M은 Q4_0과 같습니까?',
            a: '아닙니다. Llama 3 8B에서 Q4_K_M의 퍼플렉시티는 6.41로 Q4_0의 6.70보다 낮고, 파일은 0.24 GiB 더 큽니다(4.58 대 4.34 GiB, llama.cpp, 중요도 행렬 없음). Q4_0보다 Q4_K_M을 선택하십시오. 언제 더 높은 형식으로 갈지는 <a href="/ko/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0 가이드</a>를 참조하십시오.',
          },
          {
            q: 'VRAM 8GB에서 어떤 양자화를 사용해야 합니까?',
            a: '8B 모델에는 Q4_K_M입니다. Llama 3.1 8B 파일은 4.58 GiB이고, 4k 토큰 KV 캐시를 더하면 약 5.1 GiB입니다(계산값, 런타임 오버헤드 제외). Q5_K_M은 5.33 GiB이고 같은 캐시로 약 5.8 GiB(계산값)이며, Llama 3 8B에서 f16 대비 퍼플렉시티 증가를 +2.8%에서 +0.9%로 줄입니다. 4k 컨텍스트에서 둘 다 런타임 오버헤드 전에는 8 GB에 들어가지만 Q8_0(파일 7.95 GiB)은 들어가지 않습니다.',
          },
          {
            q: "Q4_K_M에서 'M'은 무엇을 의미합니까?",
            a: 'Medium(중간)입니다. k-quant 계열 내의 크기 변형을 뜻합니다. Q4_K_S(small)는 더 작고(Llama 3.1 8B에서 4.36 GiB 대 4.58 GiB) 퍼플렉시티는 더 높으며, Q4_K_M(medium)이 일반적인 기본값입니다. llama.cpp의 quantize 도구에는 Q4_K_L 유형이 없으며, 다음 단계는 Q5_K_M입니다.',
          },
          {
            q: 'Ollama에서 기본적으로 Q4_K_M을 사용하는 모델은 무엇입니까?',
            a: '여러 모델이 그렇습니다. Llama 3.1 8B, Qwen3 8B, Mistral 7B, Phi-4 mini에서 Ollama 라이브러리의 기본 태그는 이름에 q4_K_M이 들어간 태그와 같은 digest를 공유합니다(Mistral 7B는 v0.3 태그)(2026-11-06 확인). 라이브러리 페이지가 기본 양자화를 명시하지는 않으며 다른 모델은 다를 수 있으니 모델의 태그 목록을 확인하십시오. 다른 양자화는 별도 태그이며 이름은 모델마다 다릅니다. 예: <code>llama3.1:8b-instruct-q5_K_M</code>, <code>llama3.1:8b-instruct-q8_0</code>.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[Q4_K_M vs Q8_0: 결정 가이드](/ko/prompt-bites/q4-k-m-vs-q8-0)',
          '[로컬 LLM에 필요한 VRAM 용량](/ko/prompt-bites/how-much-vram-for-local-llm)',
          '[양자화 수준 전체 비교](/ko/local-llms/quantization-levels-comparison)',
          '[6GB VRAM을 위한 최적의 양자화](/ko/prompt-bites/best-quantization-6gb-vram)',
        ],
      },
    },
  },
}
