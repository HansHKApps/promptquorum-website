import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-en.webp',
    title: 'Qwen 14B vs Llama 3 8B: Which Runs Better Locally?',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B vs Llama 3 8B: VRAM, Speed, MMLU',
    metaDescription: 'Qwen3 14B vs Llama 3 8B: 9.3 GB vs 4.7 GB download, 81.1 vs 66.6 MMLU (base models), 32K vs 8K context. Which fits your VRAM? Quick answer.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: ['Llama 3 8B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 14B', 'Qwen3.5 9B'],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing between Llama 8B and Qwen 14B locally',
    parentArticle: '/local-llms/qwen-vs-llama-vs-mistral',
    siblingBites: ['best-14b-models-coding', 'best-moe-models-local-coding'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Qwen 14B vs Llama 3 8B: which runs better locally?',
        answer: 'Llama 3 8B is the lighter model: a 4.7 GB download that fits 6 GB cards and generates faster. Qwen3 14B is a 9.3 GB download that needs roughly 10–12 GB VRAM, but its base model scores about 14 points higher on MMLU (81.1 vs 66.6). With 12 GB VRAM, pick Qwen3 14B for quality.',
        bullets: [
          'Llama 3 8B: 4.7 GB (ollama run llama3), 8K context, roughly 25 tok/s on an RTX 3060',
          'Qwen3 14B: 9.3 GB (ollama run qwen3:14b), 32K native context (131K with YaRN), roughly 15 tok/s',
          'Need 128K context on a small card? Llama 3.1 8B (4.9 GB) is the current Llama 8B',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Qwen 14B vs. Llama 3 8B: Welches läuft lokal besser?',
        answer: 'Llama 3 8B ist das leichtere Modell: 4,7 GB Download, passt auf 6-GB-Karten und generiert schneller. Qwen3 14B ist ein 9,3-GB-Download und braucht etwa 10–12 GB VRAM, erzielt als Basismodell aber rund 14 Punkte mehr auf MMLU (81,1 vs. 66,6). Mit 12 GB VRAM gewinnt Qwen3 14B bei der Qualität.',
        bullets: [
          'Llama 3 8B: 4,7 GB (ollama run llama3), 8K Kontext, etwa 25 tok/s auf einer RTX 3060',
          'Qwen3 14B: 9,3 GB (ollama run qwen3:14b), 32K nativer Kontext (131K mit YaRN), etwa 15 tok/s',
          'Brauchen Sie 128K Kontext auf einer kleinen Karte? Llama 3.1 8B (4,9 GB) ist das aktuelle Llama 8B',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Qwen 14B vs Llama 3 8B : lequel tourne mieux en local ?',
        answer: 'Llama 3 8B est le modèle le plus léger : 4,7 Go à télécharger, il tient sur une carte de 6 Go et génère plus vite. Qwen3 14B pèse 9,3 Go et demande environ 10 à 12 Go de VRAM, mais son modèle de base obtient environ 14 points de plus sur MMLU (81,1 contre 66,6). Avec 12 Go de VRAM, Qwen3 14B l\'emporte en qualité.',
        bullets: [
          'Llama 3 8B : 4,7 Go (ollama run llama3), contexte 8K, environ 25 tok/s sur RTX 3060',
          'Qwen3 14B : 9,3 Go (ollama run qwen3:14b), contexte natif 32K (131K avec YaRN), environ 15 tok/s',
          'Besoin de 128K de contexte sur une petite carte ? Llama 3.1 8B (4,9 Go) est le Llama 8B actuel',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: 'Qwen 14B対Llama 3 8B：ローカルでどちらが優れているか？',
        answer: 'Llama 3 8Bは軽量なモデルで、ダウンロードは4.7 GB、6 GBのカードに収まり高速に動作します。Qwen3 14Bはダウンロード9.3 GBで約10〜12 GBのVRAMが必要ですが、ベースモデルのMMLUは約14ポイント高い（81.1対66.6）です。VRAMが12 GBあれば、品質面でQwen3 14Bが勝ります。',
        bullets: [
          'Llama 3 8B：4.7 GB（ollama run llama3）、コンテキスト8K、RTX 3060で約25 tok/s',
          'Qwen3 14B：9.3 GB（ollama run qwen3:14b）、ネイティブ32Kコンテキスト（YaRNで131K）、約15 tok/s',
          '小型カードで128Kコンテキストが必要？ 現行のLlama 8BはLlama 3.1 8B（4.9 GB）です',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: 'Qwen 14B 对比 Llama 3 8B：哪款本地运行更好？',
        answer: 'Llama 3 8B 更轻量：下载 4.7 GB，6 GB 显卡即可运行，生成速度更快。Qwen3 14B 下载 9.3 GB，需要约 10–12 GB VRAM，但其基础模型在 MMLU 上高出约 14 分（81.1 对 66.6）。拥有 12 GB VRAM 时，Qwen3 14B 在质量上更胜一筹。',
        bullets: [
          'Llama 3 8B：4.7 GB（ollama run llama3），8K 上下文，RTX 3060 上约 25 tok/s',
          'Qwen3 14B：9.3 GB（ollama run qwen3:14b），原生 32K 上下文（YaRN 下 131K），约 15 tok/s',
          '小显卡需要 128K 上下文？当前的 Llama 8B 是 Llama 3.1 8B（4.9 GB）',
        ],
        updatedDate: '2026-10',
      },
      pt: {
        question: 'Qwen 14B vs Llama 3 8B: qual roda melhor localmente?',
        answer: 'O Llama 3 8B é o modelo mais leve: download de 4,7 GB, cabe em placas de 6 GB e gera mais rápido. O Qwen3 14B é um download de 9,3 GB que precisa de cerca de 10–12 GB de VRAM, mas seu modelo base marca cerca de 14 pontos a mais no MMLU (81,1 contra 66,6). Com 12 GB de VRAM, o Qwen3 14B vence em qualidade.',
        bullets: [
          'Llama 3 8B: 4,7 GB (ollama run llama3), contexto de 8K, cerca de 25 tok/s em uma RTX 3060',
          'Qwen3 14B: 9,3 GB (ollama run qwen3:14b), contexto nativo de 32K (131K com YaRN), cerca de 15 tok/s',
          'Precisa de 128K de contexto em uma placa pequena? O Llama 3.1 8B (4,9 GB) é o Llama 8B atual',
        ],
        updatedDate: '2026-10',
      },
      es: {
        question: 'Qwen 14B vs Llama 3 8B: ¿cuál funciona mejor en local?',
        answer: 'Llama 3 8B es el modelo más ligero: descarga de 4,7 GB, cabe en tarjetas de 6 GB y genera más rápido. Qwen3 14B es una descarga de 9,3 GB que necesita unos 10–12 GB de VRAM, pero su modelo base puntúa unos 14 puntos más en MMLU (81,1 frente a 66,6). Con 12 GB de VRAM, Qwen3 14B gana en calidad.',
        bullets: [
          'Llama 3 8B: 4,7 GB (ollama run llama3), contexto de 8K, unos 25 tok/s en una RTX 3060',
          'Qwen3 14B: 9,3 GB (ollama run qwen3:14b), contexto nativo de 32K (131K con YaRN), unos 15 tok/s',
          '¿Necesitas 128K de contexto en una tarjeta pequeña? Llama 3.1 8B (4,9 GB) es el Llama 8B actual',
        ],
        updatedDate: '2026-10',
      },
      ar: {
        question: 'Qwen 14B مقابل Llama 3 8B: أيهما يعمل بشكل أفضل محليًا؟',
        answer: 'Llama 3 8B هو النموذج الأخف: تنزيل 4.7 جيجابايت، يناسب بطاقات 6 جيجابايت ويولّد أسرع. أما Qwen3 14B فتنزيله 9.3 جيجابايت ويحتاج نحو 10–12 جيجابايت VRAM، لكن نموذجه الأساسي يتفوق بنحو 14 نقطة في MMLU‏ (81.1 مقابل 66.6). مع 12 جيجابايت VRAM يفوز Qwen3 14B من حيث الجودة.',
        bullets: [
          'Llama 3 8B: ‏4.7 جيجابايت (ollama run llama3)، سياق 8K، نحو 25 tok/s على RTX 3060',
          'Qwen3 14B: ‏9.3 جيجابايت (ollama run qwen3:14b)، سياق أصلي 32K (131K مع YaRN)، نحو 15 tok/s',
          'تحتاج سياق 128K على بطاقة صغيرة؟ Llama 8B الحالي هو Llama 3.1 8B (‏4.9 جيجابايت)',
        ],
        updatedDate: '2026-10',
      },
      ko: {
        question: 'Qwen 14B vs Llama 3 8B: 로컬에서 어느 쪽이 더 잘 실행됩니까?',
        answer: 'Llama 3 8B는 더 가벼운 모델로, 다운로드 4.7 GB에 6 GB 그래픽카드에 적재되며 더 빠르게 생성합니다. Qwen3 14B는 다운로드 9.3 GB에 약 10~12 GB VRAM이 필요하지만 베이스 모델의 MMLU가 약 14점 더 높습니다(81.1 대 66.6). 12 GB VRAM 환경에서는 Qwen3 14B가 품질 면에서 우위입니다.',
        bullets: [
          'Llama 3 8B: 4.7 GB(ollama run llama3), 컨텍스트 8K, RTX 3060에서 약 25 tok/s',
          'Qwen3 14B: 9.3 GB(ollama run qwen3:14b), 기본 32K 컨텍스트(YaRN 적용 시 131K), 약 15 tok/s',
          '작은 그래픽카드에서 128K 컨텍스트가 필요하다면? 현재의 Llama 8B는 Llama 3.1 8B(4.9 GB)입니다',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B (4.7 GB download) fits 6 GB VRAM and generates roughly 25 tok/s on an RTX 3060 — the right pick for interactive speed on small cards',
          'Qwen3 14B (9.3 GB download) needs about 10 GB VRAM at minimum and runs at roughly 15 tok/s, but its base model scores 81.1 on MMLU against 66.6 for Llama 3 8B in Qwen\'s own comparison tables',
          'The practical crossover is 12 GB VRAM: up to 8 GB use Llama 3 8B or Qwen3 8B, at 12 GB Qwen3 14B wins on quality',
          'The gap is larger on code and math: EvalPlus 72.2 vs 44.1 and GSM8K 92.5 vs 55.3 (base models, Qwen-reported)',
          'Context differs too: Llama 3 8B is limited to 8K, Qwen3 14B has 32K natively (131K with YaRN), and Llama 3.1 8B offers 128K',
        ],
      },
      body1: {
        title: 'Llama 3 8B Wins on Speed and VRAM Fit',
        content: [
          '<strong>Llama 3 8B is a 4.7 GB download in Ollama and generates roughly 25 tokens per second on an RTX 3060 12 GB, which makes it the default choice for any setup with under 10 GB VRAM.</strong> Its 8B parameter count gives snappy, interactive responses that feel natural for chat and short code sessions.',
          'Qwen3 14B is a 9.3 GB download, so it needs about 10 GB VRAM before the context cache, and 12 GB to run comfortably. It produces roughly 15 tok/s on the same card. The lower throughput is noticeable in real-time conversation but acceptable for batch summarization or long-document work where quality matters more than latency.',
          'At those speeds Llama 3 8B writes a 200-token answer in about 8 seconds and Qwen3 14B in about 13. For single-turn queries the gap is minor; over a multi-turn session it compounds. The tok/s figures are rough single-user estimates for an RTX 3060 12 GB, not PromptQuorum benchmarks — run <code>ollama run --verbose</code> to measure your own card.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Llama 3 8B needs a 4.7 GB download and runs faster; Qwen3 14B needs 9.3 GB but scores about 14 points higher on MMLU (81.1 vs 66.6, base models).' },
          { type: 'plain-terms', text: 'With 6–8 GB of VRAM use Llama 3 8B or Qwen3 8B. With 12 GB or more, use Qwen3 14B for better answers.' },
        ],
        columns: ['Model', 'Ollama command', 'Download size', 'Native context', 'MMLU (base)'],
        rows: [
          { 'Model': 'Llama 3 8B', 'Ollama command': 'ollama run llama3', 'Download size': '4.7 GB', 'Native context': '8K', 'MMLU (base)': '66.6' },
          { 'Model': 'Qwen3 8B', 'Ollama command': 'ollama run qwen3:8b', 'Download size': '5.2 GB', 'Native context': '32K (131K with YaRN)', 'MMLU (base)': '76.9' },
          { 'Model': 'Qwen3 14B', 'Ollama command': 'ollama run qwen3:14b', 'Download size': '9.3 GB', 'Native context': '32K (131K with YaRN)', 'MMLU (base)': '81.1' },
        ],
      },
      body2: {
        title: 'Qwen3 14B Wins on Quality When VRAM Allows',
        content: [
          '<strong>Qwen3 14B Base scores 81.1 on MMLU versus 66.6 for Llama 3 8B Base — a gap of about 14 points that shows up as better multi-step reasoning, instruction following and structured-output consistency.</strong> These are base-model figures from Qwen\'s own technical report, evaluated with one shared pipeline; vendor-reported numbers, and instruct versions will differ.',
          'The gap widens on code and math. In the same tables Qwen3 14B Base reaches 72.2 on EvalPlus against 44.1 for Llama 3 8B, and 92.5 on GSM8K against 55.3. Qwen3 8B sits in between (76.9 MMLU, 67.7 EvalPlus), so if you are choosing between Qwen 8B and 14B, the 14B adds about 4 MMLU points for 4.1 GB more download.',
          'Version check: Llama 3 8B is limited to 8K context. Llama 3.1 8B (4.9 GB) is the current Llama 8B with 128K context. Qwen3 14B has 32K native context and 131K with YaRN scaling. Meta has no 14B Llama, and Qwen3.5 on Ollama offers a 9B (6.6–7.6 GB, 256K context) but no 14B, so Qwen3 14B remains the 14B option.',
          '≤8 GB VRAM: Llama 3 8B (4.7 GB) or Qwen3 8B (5.2 GB). 10–12 GB VRAM: Qwen3 14B fits at the tipping point. 16+ GB VRAM: either model works with long context. For code-specific picks and benchmark tables, see the <a href="/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">best 14B models for coding</a> comparison.',
        ],
        columns: ['Benchmark (base models)', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { 'Benchmark (base models)': 'MMLU', 'Llama 3 8B': '66.6', 'Qwen3 8B': '76.9', 'Qwen3 14B': '81.1' },
          { 'Benchmark (base models)': 'MMLU-Pro', 'Llama 3 8B': '35.4', 'Qwen3 8B': '56.7', 'Qwen3 14B': '61.0' },
          { 'Benchmark (base models)': 'GSM8K (math)', 'Llama 3 8B': '55.3', 'Qwen3 8B': '89.8', 'Qwen3 14B': '92.5' },
          { 'Benchmark (base models)': 'MATH', 'Llama 3 8B': '20.5', 'Qwen3 8B': '60.8', 'Qwen3 14B': '62.0' },
          { 'Benchmark (base models)': 'EvalPlus (code)', 'Llama 3 8B': '44.1', 'Qwen3 8B': '67.7', 'Qwen3 14B': '72.2' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Can Qwen3 14B run on a 6 GB VRAM GPU?',
            a: 'No. The qwen3:14b download alone is 9.3 GB, so you need about 10 GB VRAM at minimum. On a 6 GB card, Llama 3 8B (4.7 GB) is the safe choice.',
          },
          {
            q: 'Is Qwen3 14B or Llama 3 8B better for coding?',
            a: 'Qwen3 14B. In Qwen\'s own base-model tables it scores 72.2 on EvalPlus against 44.1 for Llama 3 8B. Use Llama 3 8B only when VRAM rules out the 14B.',
          },
          {
            q: 'Does Qwen3 14B support longer context than Llama 3 8B?',
            a: 'Yes. Qwen3 14B has 32K native context and was validated up to 131K with YaRN scaling (Ollama lists 40K by default). Llama 3 8B is limited to 8K. If you want a long-context Llama, use Llama 3.1 8B, which supports 128K.',
          },
          {
            q: 'Is Qwen3 8B or Qwen3 14B the better choice?',
            a: 'Qwen3 14B is stronger (MMLU 81.1 vs 76.9, MMLU-Pro 61.0 vs 56.7 for the base models) but needs 9.3 GB instead of 5.2 GB. Choose the 14B with 12 GB VRAM or more, and the 8B for 8 GB cards.',
          },
          {
            q: 'Is there a Llama 14B model?',
            a: 'No. Meta\'s Llama 3.x text models come as 1B, 3B, 8B, 70B and 405B, with no 14B. The usual 14B alternative to a Llama 8B is Qwen3 14B.',
          },
          {
            q: 'What is the correct Ollama command for Qwen 14B?',
            a: 'Use ollama run qwen3:14b. Tags like qwen3.8:14b do not exist. The default 9.3 GB download is a 4-bit quantization; the model\'s Tags page on ollama.com lists the other quantizations, such as higher-bit variants for 16 GB cards.',
          },
          {
            q: 'Where do the tok/s numbers come from?',
            a: 'They are rough single-user estimates for an RTX 3060 12 GB, not PromptQuorum measurements. Speed depends on quantization, context length and runtime, so run ollama run --verbose and read the eval rate on your own hardware.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Reading',
        items: [
          '[Best 14B Models for Coding](/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B](/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral: Full Comparison](/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-de.webp',
    title: 'Qwen 14B vs. Llama 3 8B: Welches läuft lokal besser?',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B vs. Llama 3 8B: VRAM, Tempo, MMLU',
    metaDescription: 'Qwen3 14B vs. Llama 3 8B: 9,3 vs. 4,7 GB Download, MMLU 81,1 vs. 66,6 (Basismodelle), 32K vs. 8K Kontext. Was passt zu Ihrem VRAM? Schnelle Antwort.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Qwen 14B vs. Llama 3 8B: Welches läuft lokal besser?',
        answer: 'Llama 3 8B ist das leichtere Modell: 4,7 GB Download, passt auf 6-GB-Karten und generiert schneller. Qwen3 14B ist ein 9,3-GB-Download und braucht etwa 10–12 GB VRAM, erzielt als Basismodell aber rund 14 Punkte mehr auf MMLU (81,1 vs. 66,6). Mit 12 GB VRAM gewinnt Qwen3 14B bei der Qualität.',
        bullets: [
          'Llama 3 8B: 4,7 GB (ollama run llama3), 8K Kontext, etwa 25 tok/s auf einer RTX 3060',
          'Qwen3 14B: 9,3 GB (ollama run qwen3:14b), 32K nativer Kontext (131K mit YaRN), etwa 15 tok/s',
          'Brauchen Sie 128K Kontext auf einer kleinen Karte? Llama 3.1 8B (4,9 GB) ist das aktuelle Llama 8B',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B (4,7 GB Download) passt in 6 GB VRAM und liefert etwa 25 tok/s auf einer RTX 3060 — die richtige Wahl für interaktives Tempo auf kleinen Karten',
          'Qwen3 14B (9,3 GB Download) braucht mindestens etwa 10 GB VRAM und läuft mit etwa 15 tok/s, erzielt in Qwens eigenen Vergleichstabellen als Basismodell aber 81,1 auf MMLU gegenüber 66,6 für Llama 3 8B',
          'Der praktische Wendepunkt liegt bei 12 GB VRAM: bis 8 GB Llama 3 8B oder Qwen3 8B, ab 12 GB gewinnt Qwen3 14B bei der Qualität',
          'Bei Code und Mathematik ist der Abstand größer: EvalPlus 72,2 vs. 44,1 und GSM8K 92,5 vs. 55,3 (Basismodelle, von Qwen berichtet)',
          'Auch der Kontext unterscheidet sich: Llama 3 8B ist auf 8K begrenzt, Qwen3 14B hat nativ 32K (131K mit YaRN), Llama 3.1 8B bietet 128K',
        ],
      },
      body1: {
        title: 'Llama 3 8B gewinnt bei Geschwindigkeit und VRAM-Bedarf',
        content: [
          '<strong>Llama 3 8B ist in Ollama ein 4,7-GB-Download und erzeugt auf einer RTX 3060 12 GB etwa 25 Tokens pro Sekunde — damit ist es die Standardwahl für jedes System mit weniger als 10 GB VRAM.</strong> Die 8B-Parameter liefern schnelle, interaktive Antworten, die sich für Chat und kurze Code-Sitzungen natürlich anfühlen.',
          'Qwen3 14B ist ein 9,3-GB-Download und braucht daher etwa 10 GB VRAM vor dem Kontext-Cache, für entspanntes Arbeiten 12 GB. Auf derselben Karte erzeugt es etwa 15 tok/s. Der geringere Durchsatz ist in Echtzeit-Konversationen spürbar, aber akzeptabel für Batch-Zusammenfassungen oder lange Dokumente, bei denen Qualität wichtiger ist als Latenz.',
          'Bei diesen Geschwindigkeiten schreibt Llama 3 8B eine 200-Token-Antwort in etwa 8 Sekunden, Qwen3 14B in etwa 13. Bei einzelnen Anfragen ist der Unterschied gering, über eine mehrstufige Sitzung summiert er sich. Die tok/s-Werte sind grobe Schätzungen für einen Einzelnutzer auf einer RTX 3060 12 GB, keine PromptQuorum-Benchmarks — messen Sie mit <code>ollama run --verbose</code> Ihre eigene Karte.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Llama 3 8B braucht 4,7 GB Download und läuft schneller; Qwen3 14B braucht 9,3 GB, erzielt aber etwa 14 Punkte mehr auf MMLU (81,1 vs. 66,6, Basismodelle).' },
          { type: 'plain-terms', text: 'Mit 6–8 GB VRAM nehmen Sie Llama 3 8B oder Qwen3 8B. Ab 12 GB nehmen Sie Qwen3 14B für bessere Antworten.' },
        ],
        columns: ['Modell', 'Ollama-Befehl', 'Download-Größe', 'Nativer Kontext', 'MMLU (Basis)'],
        rows: [
          { 'Modell': 'Llama 3 8B', 'Ollama-Befehl': 'ollama run llama3', 'Download-Größe': '4,7 GB', 'Nativer Kontext': '8K', 'MMLU (Basis)': '66,6' },
          { 'Modell': 'Qwen3 8B', 'Ollama-Befehl': 'ollama run qwen3:8b', 'Download-Größe': '5,2 GB', 'Nativer Kontext': '32K (131K mit YaRN)', 'MMLU (Basis)': '76,9' },
          { 'Modell': 'Qwen3 14B', 'Ollama-Befehl': 'ollama run qwen3:14b', 'Download-Größe': '9,3 GB', 'Nativer Kontext': '32K (131K mit YaRN)', 'MMLU (Basis)': '81,1' },
        ],
      },
      body2: {
        title: 'Qwen3 14B gewinnt bei Qualität, wenn VRAM ausreicht',
        content: [
          '<strong>Qwen3 14B Base erzielt 81,1 auf MMLU gegenüber 66,6 für Llama 3 8B Base — ein Abstand von rund 14 Punkten, der sich in besserem mehrstufigem Reasoning, Instruktionsbefolgung und konsistenter strukturierter Ausgabe zeigt.</strong> Es sind Basismodell-Werte aus Qwens eigenem Technical Report, mit einer gemeinsamen Pipeline ausgewertet; Herstellerangaben, und Instruct-Versionen weichen ab.',
          'Bei Code und Mathematik wächst der Abstand. In denselben Tabellen erreicht Qwen3 14B Base 72,2 auf EvalPlus gegenüber 44,1 für Llama 3 8B und 92,5 auf GSM8K gegenüber 55,3. Qwen3 8B liegt dazwischen (76,9 MMLU, 67,7 EvalPlus): Wer zwischen Qwen 8B und 14B wählt, bekommt mit dem 14B etwa 4 MMLU-Punkte für 4,1 GB mehr Download.',
          'Versions-Check: Llama 3 8B ist auf 8K Kontext begrenzt. Llama 3.1 8B (4,9 GB) ist das aktuelle Llama 8B mit 128K Kontext. Qwen3 14B hat 32K nativen Kontext und 131K mit YaRN-Skalierung. Meta bietet kein 14B-Llama, und Qwen3.5 auf Ollama hat ein 9B (6,6–7,6 GB, 256K Kontext), aber kein 14B — Qwen3 14B bleibt also die 14B-Option.',
          '≤8 GB VRAM: Llama 3 8B (4,7 GB) oder Qwen3 8B (5,2 GB). 10–12 GB VRAM: Qwen3 14B passt am Wendepunkt. 16+ GB VRAM: beide Modelle funktionieren mit langem Kontext. Für Coding-Empfehlungen und Benchmark-Tabellen siehe den Vergleich <a href="/de/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">beste 14B-Modelle für Coding</a>.',
        ],
        columns: ['Benchmark (Basismodelle)', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { 'Benchmark (Basismodelle)': 'MMLU', 'Llama 3 8B': '66,6', 'Qwen3 8B': '76,9', 'Qwen3 14B': '81,1' },
          { 'Benchmark (Basismodelle)': 'MMLU-Pro', 'Llama 3 8B': '35,4', 'Qwen3 8B': '56,7', 'Qwen3 14B': '61,0' },
          { 'Benchmark (Basismodelle)': 'GSM8K (Mathe)', 'Llama 3 8B': '55,3', 'Qwen3 8B': '89,8', 'Qwen3 14B': '92,5' },
          { 'Benchmark (Basismodelle)': 'MATH', 'Llama 3 8B': '20,5', 'Qwen3 8B': '60,8', 'Qwen3 14B': '62,0' },
          { 'Benchmark (Basismodelle)': 'EvalPlus (Code)', 'Llama 3 8B': '44,1', 'Qwen3 8B': '67,7', 'Qwen3 14B': '72,2' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Qwen 14B vs. Llama 8B',
        faqs: [
          {
            q: 'Kann Qwen3 14B auf einer GPU mit 6 GB VRAM laufen?',
            a: 'Nein. Allein der Download von qwen3:14b ist 9,3 GB groß, Sie brauchen also mindestens etwa 10 GB VRAM. Auf einer 6-GB-Karte ist Llama 3 8B (4,7 GB) die sichere Wahl.',
          },
          {
            q: 'Ist Qwen3 14B oder Llama 3 8B besser für Coding?',
            a: 'Qwen3 14B. In Qwens eigenen Basismodell-Tabellen erzielt es 72,2 auf EvalPlus gegenüber 44,1 für Llama 3 8B. Nehmen Sie Llama 3 8B nur, wenn der VRAM das 14B ausschließt.',
          },
          {
            q: 'Unterstützt Qwen3 14B einen längeren Kontext als Llama 3 8B?',
            a: 'Ja. Qwen3 14B hat 32K nativen Kontext und wurde mit YaRN-Skalierung bis 131K validiert (Ollama nennt standardmäßig 40K). Llama 3 8B ist auf 8K begrenzt. Für ein Llama mit langem Kontext nehmen Sie Llama 3.1 8B mit 128K.',
          },
          {
            q: 'Ist Qwen3 8B oder Qwen3 14B die bessere Wahl?',
            a: 'Qwen3 14B ist stärker (MMLU 81,1 vs. 76,9, MMLU-Pro 61,0 vs. 56,7 bei den Basismodellen), braucht aber 9,3 GB statt 5,2 GB. Wählen Sie das 14B ab 12 GB VRAM und das 8B für 8-GB-Karten.',
          },
          {
            q: 'Gibt es ein Llama-14B-Modell?',
            a: 'Nein. Metas Llama-3.x-Textmodelle gibt es als 1B, 3B, 8B, 70B und 405B, aber nicht als 14B. Die übliche 14B-Alternative zu einem Llama 8B ist Qwen3 14B.',
          },
          {
            q: 'Wie lautet der richtige Ollama-Befehl für Qwen 14B?',
            a: 'Verwenden Sie ollama run qwen3:14b. Tags wie qwen3.8:14b existieren nicht. Der 9,3-GB-Standard-Download ist eine 4-Bit-Quantisierung; die Tags-Seite des Modells auf ollama.com listet die weiteren Quantisierungen, etwa höherbittige Varianten für 16-GB-Karten.',
          },
          {
            q: 'Woher stammen die tok/s-Werte?',
            a: 'Es sind grobe Schätzungen für einen Einzelnutzer auf einer RTX 3060 12 GB, keine PromptQuorum-Messungen. Das Tempo hängt von Quantisierung, Kontextlänge und Laufzeitumgebung ab; führen Sie ollama run --verbose aus und lesen Sie die eval rate auf Ihrer eigenen Hardware ab.',
          },
        ],
      },
      relatedReading: {
        title: 'Weiterführende Literatur',
        items: [
          '[Beste 14B-Modelle für Coding](/de/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B vs. Qwen 14B vs. Llama 8B](/de/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen vs. Llama vs. Mistral: Der große Vergleich](/de/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-fr.webp',
    title: 'Qwen 14B vs Llama 3 8B : lequel tourne mieux en local ?',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B vs Llama 3 8B : VRAM, vitesse, MMLU',
    metaDescription: 'Qwen3 14B vs Llama 3 8B : 9,3 vs 4,7 Go de téléchargement, MMLU 81,1 vs 66,6 (modèles de base), contexte 32K vs 8K. Que choisir selon votre VRAM ?',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Qwen 14B vs Llama 3 8B : lequel tourne mieux en local ?',
        answer: 'Llama 3 8B est le modèle le plus léger : 4,7 Go à télécharger, il tient sur une carte de 6 Go et génère plus vite. Qwen3 14B pèse 9,3 Go et demande environ 10 à 12 Go de VRAM, mais son modèle de base obtient environ 14 points de plus sur MMLU (81,1 contre 66,6). Avec 12 Go de VRAM, Qwen3 14B l\'emporte en qualité.',
        bullets: [
          'Llama 3 8B : 4,7 Go (ollama run llama3), contexte 8K, environ 25 tok/s sur RTX 3060',
          'Qwen3 14B : 9,3 Go (ollama run qwen3:14b), contexte natif 32K (131K avec YaRN), environ 15 tok/s',
          'Besoin de 128K de contexte sur une petite carte ? Llama 3.1 8B (4,9 Go) est le Llama 8B actuel',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B (4,7 Go à télécharger) tient en 6 Go de VRAM et produit environ 25 tok/s sur RTX 3060 — le bon choix pour la vitesse interactive sur petites cartes',
          'Qwen3 14B (9,3 Go à télécharger) demande au moins 10 Go de VRAM et tourne à environ 15 tok/s, mais son modèle de base obtient 81,1 sur MMLU contre 66,6 pour Llama 3 8B dans les tableaux comparatifs de Qwen',
          'Le seuil pratique est 12 Go de VRAM : jusqu\'à 8 Go, Llama 3 8B ou Qwen3 8B ; à 12 Go, Qwen3 14B l\'emporte en qualité',
          'L\'écart est plus grand en code et en maths : EvalPlus 72,2 contre 44,1 et GSM8K 92,5 contre 55,3 (modèles de base, chiffres publiés par Qwen)',
          'Le contexte diffère aussi : Llama 3 8B est limité à 8K, Qwen3 14B offre 32K en natif (131K avec YaRN) et Llama 3.1 8B propose 128K',
        ],
      },
      body1: {
        title: 'Llama 3 8B l\'emporte en vitesse et en besoin de VRAM',
        content: [
          '<strong>Llama 3 8B est un téléchargement de 4,7 Go dans Ollama et génère environ 25 tokens par seconde sur une RTX 3060 12 Go, ce qui en fait le choix par défaut pour toute configuration de moins de 10 Go de VRAM.</strong> Ses 8 milliards de paramètres donnent des réponses vives, naturelles pour le chat et les courtes sessions de code.',
          'Qwen3 14B pèse 9,3 Go à télécharger : comptez environ 10 Go de VRAM avant le cache de contexte, et 12 Go pour travailler confortablement. Il produit environ 15 tok/s sur la même carte. Le débit plus faible se remarque en conversation en temps réel, mais reste acceptable pour des résumés par lots ou de longs documents où la qualité prime sur la latence.',
          'À ces vitesses, Llama 3 8B écrit une réponse de 200 tokens en 8 secondes environ, Qwen3 14B en 13 secondes environ. Sur une requête isolée l\'écart est minime ; sur une session multi-tours il s\'accumule. Les valeurs tok/s sont des estimations approximatives pour un seul utilisateur sur RTX 3060 12 Go, pas des benchmarks PromptQuorum — lancez <code>ollama run --verbose</code> pour mesurer votre propre carte.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Llama 3 8B demande 4,7 Go de téléchargement et va plus vite ; Qwen3 14B demande 9,3 Go mais obtient environ 14 points de plus sur MMLU (81,1 contre 66,6, modèles de base).' },
          { type: 'plain-terms', text: 'Avec 6 à 8 Go de VRAM, utilisez Llama 3 8B ou Qwen3 8B. Avec 12 Go ou plus, utilisez Qwen3 14B pour de meilleures réponses.' },
        ],
        columns: ['Modèle', 'Commande Ollama', 'Taille du téléchargement', 'Contexte natif', 'MMLU (base)'],
        rows: [
          { 'Modèle': 'Llama 3 8B', 'Commande Ollama': 'ollama run llama3', 'Taille du téléchargement': '4,7 Go', 'Contexte natif': '8K', 'MMLU (base)': '66,6' },
          { 'Modèle': 'Qwen3 8B', 'Commande Ollama': 'ollama run qwen3:8b', 'Taille du téléchargement': '5,2 Go', 'Contexte natif': '32K (131K avec YaRN)', 'MMLU (base)': '76,9' },
          { 'Modèle': 'Qwen3 14B', 'Commande Ollama': 'ollama run qwen3:14b', 'Taille du téléchargement': '9,3 Go', 'Contexte natif': '32K (131K avec YaRN)', 'MMLU (base)': '81,1' },
        ],
      },
      body2: {
        title: 'Qwen3 14B l\'emporte en qualité quand la VRAM le permet',
        content: [
          '<strong>Qwen3 14B Base obtient 81,1 sur MMLU contre 66,6 pour Llama 3 8B Base — un écart d\'environ 14 points qui se traduit par un meilleur raisonnement multi-étapes, un meilleur suivi des consignes et des sorties structurées plus constantes.</strong> Ce sont des chiffres de modèles de base issus du rapport technique de Qwen, évalués avec un pipeline commun ; des valeurs publiées par l\'éditeur, et les versions instruct diffèrent.',
          'L\'écart se creuse en code et en maths. Dans les mêmes tableaux, Qwen3 14B Base atteint 72,2 sur EvalPlus contre 44,1 pour Llama 3 8B, et 92,5 sur GSM8K contre 55,3. Qwen3 8B se situe entre les deux (76,9 MMLU, 67,7 EvalPlus) : entre Qwen 8B et 14B, le 14B apporte environ 4 points MMLU pour 4,1 Go de téléchargement en plus.',
          'Vérification des versions : Llama 3 8B est limité à 8K de contexte. Llama 3.1 8B (4,9 Go) est le Llama 8B actuel avec 128K de contexte. Qwen3 14B offre 32K de contexte natif et 131K avec la mise à l\'échelle YaRN. Meta ne propose pas de Llama 14B, et Qwen3.5 sur Ollama a un 9B (6,6–7,6 Go, 256K de contexte) mais pas de 14B : Qwen3 14B reste donc l\'option 14B.',
          '≤8 Go de VRAM : Llama 3 8B (4,7 Go) ou Qwen3 8B (5,2 Go). 10–12 Go : Qwen3 14B tient au point de bascule. 16 Go et plus : les deux fonctionnent avec un long contexte. Pour des choix orientés code et des tableaux de benchmarks, voir le comparatif <a href="/fr/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">meilleurs modèles 14B pour le code</a>.',
        ],
        columns: ['Benchmark (modèles de base)', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { 'Benchmark (modèles de base)': 'MMLU', 'Llama 3 8B': '66,6', 'Qwen3 8B': '76,9', 'Qwen3 14B': '81,1' },
          { 'Benchmark (modèles de base)': 'MMLU-Pro', 'Llama 3 8B': '35,4', 'Qwen3 8B': '56,7', 'Qwen3 14B': '61,0' },
          { 'Benchmark (modèles de base)': 'GSM8K (maths)', 'Llama 3 8B': '55,3', 'Qwen3 8B': '89,8', 'Qwen3 14B': '92,5' },
          { 'Benchmark (modèles de base)': 'MATH', 'Llama 3 8B': '20,5', 'Qwen3 8B': '60,8', 'Qwen3 14B': '62,0' },
          { 'Benchmark (modèles de base)': 'EvalPlus (code)', 'Llama 3 8B': '44,1', 'Qwen3 8B': '67,7', 'Qwen3 14B': '72,2' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Qwen3 14B peut-il tourner sur un GPU de 6 Go de VRAM ?',
            a: 'Non. Le téléchargement de qwen3:14b fait à lui seul 9,3 Go, il faut donc au moins environ 10 Go de VRAM. Sur une carte de 6 Go, Llama 3 8B (4,7 Go) est le choix sûr.',
          },
          {
            q: 'Qwen3 14B ou Llama 3 8B : lequel est meilleur pour le code ?',
            a: 'Qwen3 14B. Dans les tableaux de modèles de base de Qwen, il obtient 72,2 sur EvalPlus contre 44,1 pour Llama 3 8B. N\'utilisez Llama 3 8B que si la VRAM exclut le 14B.',
          },
          {
            q: 'Qwen3 14B gère-t-il un contexte plus long que Llama 3 8B ?',
            a: 'Oui. Qwen3 14B a 32K de contexte natif et a été validé jusqu\'à 131K avec la mise à l\'échelle YaRN (Ollama indique 40K par défaut). Llama 3 8B est limité à 8K. Pour un Llama à long contexte, utilisez Llama 3.1 8B, qui gère 128K.',
          },
          {
            q: 'Qwen3 8B ou Qwen3 14B : lequel choisir ?',
            a: 'Qwen3 14B est plus fort (MMLU 81,1 contre 76,9, MMLU-Pro 61,0 contre 56,7 pour les modèles de base) mais demande 9,3 Go au lieu de 5,2 Go. Choisissez le 14B à partir de 12 Go de VRAM, le 8B pour les cartes de 8 Go.',
          },
          {
            q: 'Existe-t-il un modèle Llama 14B ?',
            a: 'Non. Les modèles texte Llama 3.x de Meta existent en 1B, 3B, 8B, 70B et 405B, sans 14B. L\'alternative 14B habituelle à un Llama 8B est Qwen3 14B.',
          },
          {
            q: 'Quelle est la bonne commande Ollama pour Qwen 14B ?',
            a: 'Utilisez ollama run qwen3:14b. Des tags comme qwen3.8:14b n\'existent pas. Le téléchargement par défaut de 9,3 Go est une quantification 4 bits ; la page Tags du modèle sur ollama.com liste les autres quantifications, par exemple des variantes à plus de bits pour cartes de 16 Go.',
          },
          {
            q: 'D\'où viennent les valeurs tok/s ?',
            a: 'Ce sont des estimations approximatives pour un seul utilisateur sur RTX 3060 12 Go, pas des mesures PromptQuorum. La vitesse dépend de la quantification, de la longueur de contexte et du runtime ; lancez ollama run --verbose et lisez l\'eval rate sur votre propre matériel.',
          },
        ],
      },
      relatedReading: {
        title: 'Lectures associées',
        items: [
          '[Meilleurs modèles 14B pour le code](/fr/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B](/fr/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral : comparatif complet](/fr/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-ja.webp',
    title: 'Qwen 14B対Llama 3 8B：ローカルでどちらが優れているか？',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B vs Llama 3 8B：VRAM・速度・MMLU比較',
    metaDescription: 'Qwen3 14B（9.3 GB）とLlama 3 8B（4.7 GB）を比較。MMLU 81.1 vs 66.6（ベースモデル）、コンテキスト32K vs 8K。VRAMに合うのはどちら？',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'Qwen 14B対Llama 3 8B：ローカルでどちらが優れているか？',
        answer: 'Llama 3 8Bは軽量なモデルで、ダウンロードは4.7 GB、6 GBのカードに収まり高速に動作します。Qwen3 14Bはダウンロード9.3 GBで約10〜12 GBのVRAMが必要ですが、ベースモデルのMMLUは約14ポイント高い（81.1対66.6）です。VRAMが12 GBあれば、品質面でQwen3 14Bが勝ります。',
        bullets: [
          'Llama 3 8B：4.7 GB（ollama run llama3）、コンテキスト8K、RTX 3060で約25 tok/s',
          'Qwen3 14B：9.3 GB（ollama run qwen3:14b）、ネイティブ32Kコンテキスト（YaRNで131K）、約15 tok/s',
          '小型カードで128Kコンテキストが必要？ 現行のLlama 8BはLlama 3.1 8B（4.9 GB）です',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B（ダウンロード4.7 GB）は6 GB VRAMに収まり、RTX 3060で約25 tok/s——小型カードで対話速度を重視するなら最適です',
          'Qwen3 14B（ダウンロード9.3 GB）は最低約10 GB VRAMが必要で約15 tok/sで動作しますが、Qwen自身の比較表ではベースモデルのMMLUが81.1で、Llama 3 8Bの66.6を上回ります',
          '実用上の分岐点はVRAM 12 GBです：8 GBまではLlama 3 8BまたはQwen3 8B、12 GBならQwen3 14Bが品質で勝ります',
          'コードと数学では差がさらに広がります：EvalPlus 72.2対44.1、GSM8K 92.5対55.3（ベースモデル、Qwen公表値）',
          'コンテキスト長も異なります：Llama 3 8Bは8Kまで、Qwen3 14Bはネイティブ32K（YaRNで131K）、Llama 3.1 8Bは128Kに対応します',
        ],
      },
      body1: {
        title: 'Llama 3 8Bは速度とVRAM効率で優位',
        content: [
          '<strong>Llama 3 8BはOllamaで4.7 GBのダウンロードで、RTX 3060 12 GBで毎秒約25トークンを生成します。VRAMが10 GB未満の環境では標準的な選択肢です。</strong>80億パラメータにより、チャットや短いコードセッションに適した軽快な対話応答が得られます。',
          'Qwen3 14Bは9.3 GBのダウンロードで、コンテキストキャッシュの前に約10 GB、余裕を持って動かすには12 GBのVRAMが必要です。同じカードで約15 tok/sです。スループットの低下はリアルタイムの会話では目立ちますが、レイテンシより品質が重要なバッチ要約や長文書処理では許容できます。',
          'この速度では、200トークンの回答にLlama 3 8Bは約8秒、Qwen3 14Bは約13秒かかります。単発の質問では差は小さいですが、複数ターンのセッションでは累積します。tok/sの値はRTX 3060 12 GBでの単一ユーザー向けの概算であり、PromptQuorumのベンチマークではありません。お使いのカードでは<code>ollama run --verbose</code>で実測してください。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Llama 3 8Bはダウンロード4.7 GBでより高速、Qwen3 14Bは9.3 GBですがMMLUが約14ポイント高い（81.1対66.6、ベースモデル）です。' },
          { type: 'plain-terms', text: 'VRAMが6〜8 GBならLlama 3 8BかQwen3 8Bを、12 GB以上ならより良い回答のQwen3 14Bを使ってください。' },
        ],
        columns: ['モデル', 'Ollamaコマンド', 'ダウンロードサイズ', 'ネイティブコンテキスト', 'MMLU（ベース）'],
        rows: [
          { 'モデル': 'Llama 3 8B', 'Ollamaコマンド': 'ollama run llama3', 'ダウンロードサイズ': '4.7 GB', 'ネイティブコンテキスト': '8K', 'MMLU（ベース）': '66.6' },
          { 'モデル': 'Qwen3 8B', 'Ollamaコマンド': 'ollama run qwen3:8b', 'ダウンロードサイズ': '5.2 GB', 'ネイティブコンテキスト': '32K（YaRNで131K）', 'MMLU（ベース）': '76.9' },
          { 'モデル': 'Qwen3 14B', 'Ollamaコマンド': 'ollama run qwen3:14b', 'ダウンロードサイズ': '9.3 GB', 'ネイティブコンテキスト': '32K（YaRNで131K）', 'MMLU（ベース）': '81.1' },
        ],
      },
      body2: {
        title: 'VRAMが許せばQwen3 14Bが品質で優位',
        content: [
          '<strong>Qwen3 14B BaseのMMLUは81.1で、Llama 3 8B Baseの66.6を約14ポイント上回ります。この差は、多段階推論、指示追従、構造化出力の一貫性の向上として現れます。</strong>これらはQwen自身のテクニカルレポートに基づくベースモデルの数値で、共通のパイプラインで評価されています。ベンダー公表値であり、Instruct版では異なります。',
          'コードと数学では差が広がります。同じ表で、Qwen3 14B BaseはEvalPlusで72.2（Llama 3 8Bは44.1）、GSM8Kで92.5（同55.3）です。Qwen3 8Bはその中間（MMLU 76.9、EvalPlus 67.7）なので、Qwen 8Bと14Bで迷うなら、14Bはダウンロードが4.1 GB増える代わりにMMLUが約4ポイント上がります。',
          'バージョン確認：Llama 3 8Bのコンテキストは8Kまでです。現行のLlama 8Bは、128Kコンテキストを持つLlama 3.1 8B（4.9 GB）です。Qwen3 14Bはネイティブ32Kコンテキストで、YaRNスケーリングで131Kに対応します。Metaに14BのLlamaはなく、OllamaのQwen3.5には9B（6.6〜7.6 GB、256Kコンテキスト）はあっても14Bはないため、14BクラスではQwen3 14Bが引き続き選択肢です。',
          '8 GB以下：Llama 3 8B（4.7 GB）またはQwen3 8B（5.2 GB）。10〜12 GB：Qwen3 14Bが分岐点で収まります。16 GB以上：どちらも長いコンテキストで動作します。コード特化の選択肢とベンチマーク表は、<a href="/ja/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">コーディング向け最適14Bモデル</a>の比較をご覧ください。',
        ],
        columns: ['ベンチマーク（ベースモデル）', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { 'ベンチマーク（ベースモデル）': 'MMLU', 'Llama 3 8B': '66.6', 'Qwen3 8B': '76.9', 'Qwen3 14B': '81.1' },
          { 'ベンチマーク（ベースモデル）': 'MMLU-Pro', 'Llama 3 8B': '35.4', 'Qwen3 8B': '56.7', 'Qwen3 14B': '61.0' },
          { 'ベンチマーク（ベースモデル）': 'GSM8K（数学）', 'Llama 3 8B': '55.3', 'Qwen3 8B': '89.8', 'Qwen3 14B': '92.5' },
          { 'ベンチマーク（ベースモデル）': 'MATH', 'Llama 3 8B': '20.5', 'Qwen3 8B': '60.8', 'Qwen3 14B': '62.0' },
          { 'ベンチマーク（ベースモデル）': 'EvalPlus（コード）', 'Llama 3 8B': '44.1', 'Qwen3 8B': '67.7', 'Qwen3 14B': '72.2' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Qwen 14B対Llama 8Bのよくある質問',
        faqs: [
          {
            q: 'Qwen3 14Bは6 GB VRAMのGPUで動きますか？',
            a: 'いいえ。qwen3:14bのダウンロードだけで9.3 GBあるため、最低でも約10 GBのVRAMが必要です。6 GBのカードではLlama 3 8B（4.7 GB）が安全な選択です。',
          },
          {
            q: 'コーディングにはQwen3 14BとLlama 3 8Bのどちらが向いていますか？',
            a: 'Qwen3 14Bです。Qwenのベースモデル比較表では、EvalPlusで72.2に対しLlama 3 8Bは44.1です。VRAMの制約で14Bが使えない場合にのみLlama 3 8Bを使ってください。',
          },
          {
            q: 'Qwen3 14BはLlama 3 8Bより長いコンテキストに対応しますか？',
            a: 'はい。Qwen3 14Bはネイティブ32Kコンテキストで、YaRNスケーリングにより131Kまで検証されています（Ollamaの表示は標準で40K）。Llama 3 8Bは8Kまでです。長いコンテキストのLlamaが必要なら、128K対応のLlama 3.1 8Bを使ってください。',
          },
          {
            q: 'Qwen3 8BとQwen3 14Bはどちらを選ぶべきですか？',
            a: 'Qwen3 14Bのほうが高性能ですが（ベースモデルでMMLU 81.1対76.9、MMLU-Pro 61.0対56.7）、必要容量は5.2 GBではなく9.3 GBです。VRAM 12 GB以上なら14B、8 GBのカードなら8Bを選んでください。',
          },
          {
            q: 'Llama 14Bというモデルはありますか？',
            a: 'いいえ。MetaのLlama 3.xテキストモデルは1B、3B、8B、70B、405Bで、14Bはありません。Llama 8Bの一般的な14B代替はQwen3 14Bです。',
          },
          {
            q: 'Qwen 14Bの正しいOllamaコマンドは何ですか？',
            a: 'ollama run qwen3:14bを使います。qwen3.8:14bのようなタグは存在しません。標準の9.3 GBダウンロードは4ビット量子化で、他の量子化（16 GBカード向けの高ビット版など）はollama.comのモデルのTagsページに掲載されています。',
          },
          {
            q: 'tok/sの数値の根拠は何ですか？',
            a: 'RTX 3060 12 GBでの単一ユーザー向けの概算であり、PromptQuorumの実測値ではありません。速度は量子化、コンテキスト長、ランタイムによって変わるため、ollama run --verboseを実行し、お使いのハードウェアでeval rateを確認してください。',
          },
        ],
      },
      relatedReading: {
        title: '関連記事',
        items: [
          '[コーディング向け最適14Bモデル](/ja/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B対Qwen 14B対Llama 8B](/ja/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen対Llama対Mistral：完全比較](/ja/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-zh.webp',
    title: 'Qwen 14B 对比 Llama 3 8B：哪款本地运行更好？',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B 对比 Llama 3 8B：显存、速度与 MMLU',
    metaDescription: 'Qwen3 14B（9.3 GB）对比 Llama 3 8B（4.7 GB）：MMLU 81.1 对 66.6（基础模型），上下文 32K 对 8K。哪个适合你的显存？快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: 'Qwen 14B 对比 Llama 3 8B：哪款本地运行更好？',
        answer: 'Llama 3 8B 更轻量：下载 4.7 GB，6 GB 显卡即可运行，生成速度更快。Qwen3 14B 下载 9.3 GB，需要约 10–12 GB VRAM，但其基础模型在 MMLU 上高出约 14 分（81.1 对 66.6）。拥有 12 GB VRAM 时，Qwen3 14B 在质量上更胜一筹。',
        bullets: [
          'Llama 3 8B：4.7 GB（ollama run llama3），8K 上下文，RTX 3060 上约 25 tok/s',
          'Qwen3 14B：9.3 GB（ollama run qwen3:14b），原生 32K 上下文（YaRN 下 131K），约 15 tok/s',
          '小显卡需要 128K 上下文？当前的 Llama 8B 是 Llama 3.1 8B（4.9 GB）',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B（下载 4.7 GB）可放入 6 GB VRAM，在 RTX 3060 上约 25 tok/s——小显卡追求交互速度的正确选择',
          'Qwen3 14B（下载 9.3 GB）至少需要约 10 GB VRAM，速度约 15 tok/s，但在 Qwen 自己的对比表中，其基础模型 MMLU 为 81.1，高于 Llama 3 8B 的 66.6',
          '实际分界点是 12 GB VRAM：8 GB 以内用 Llama 3 8B 或 Qwen3 8B，12 GB 时 Qwen3 14B 在质量上胜出',
          '在代码和数学上差距更大：EvalPlus 72.2 对 44.1，GSM8K 92.5 对 55.3（基础模型，Qwen 公布数据）',
          '上下文也不同：Llama 3 8B 限于 8K，Qwen3 14B 原生 32K（YaRN 下 131K），Llama 3.1 8B 支持 128K',
        ],
      },
      body1: {
        title: 'Llama 3 8B 在速度和显存适配上更胜一筹',
        content: [
          '<strong>Llama 3 8B 在 Ollama 中下载 4.7 GB，在 RTX 3060 12 GB 上每秒生成约 25 个 token，是 VRAM 低于 10 GB 的任何配置的默认选择。</strong>80 亿参数带来灵敏的交互响应，适合聊天和简短的代码会话。',
          'Qwen3 14B 下载 9.3 GB，在加上上下文缓存之前就需要约 10 GB VRAM，要运行得从容则需 12 GB。在同一张显卡上约 15 tok/s。较低的吞吐量在实时对话中较为明显，但对于质量比延迟更重要的批量摘要或长文档处理是可以接受的。',
          '按这些速度，Llama 3 8B 生成 200 个 token 的回答约需 8 秒，Qwen3 14B 约需 13 秒。单轮查询差距很小，多轮会话中会累积。tok/s 数值是 RTX 3060 12 GB 上单用户的粗略估计，并非 PromptQuorum 的基准测试——请运行 <code>ollama run --verbose</code> 测量你自己的显卡。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Llama 3 8B 下载 4.7 GB、速度更快；Qwen3 14B 需要 9.3 GB，但 MMLU 高出约 14 分（81.1 对 66.6，基础模型）。' },
          { type: 'plain-terms', text: 'VRAM 为 6–8 GB 时用 Llama 3 8B 或 Qwen3 8B；12 GB 及以上用 Qwen3 14B 获得更好的回答。' },
        ],
        columns: ['模型', 'Ollama 命令', '下载大小', '原生上下文', 'MMLU（基础）'],
        rows: [
          { '模型': 'Llama 3 8B', 'Ollama 命令': 'ollama run llama3', '下载大小': '4.7 GB', '原生上下文': '8K', 'MMLU（基础）': '66.6' },
          { '模型': 'Qwen3 8B', 'Ollama 命令': 'ollama run qwen3:8b', '下载大小': '5.2 GB', '原生上下文': '32K（YaRN 下 131K）', 'MMLU（基础）': '76.9' },
          { '模型': 'Qwen3 14B', 'Ollama 命令': 'ollama run qwen3:14b', '下载大小': '9.3 GB', '原生上下文': '32K（YaRN 下 131K）', 'MMLU（基础）': '81.1' },
        ],
      },
      body2: {
        title: 'VRAM 允许时 Qwen3 14B 在质量上胜出',
        content: [
          '<strong>Qwen3 14B Base 的 MMLU 为 81.1，高出 Llama 3 8B Base 的 66.6 约 14 分，体现为更好的多步推理、指令遵循和结构化输出一致性。</strong>这些是来自 Qwen 自家技术报告的基础模型数据，使用统一流程评测；属于厂商公布数据，Instruct 版本会有差异。',
          '在代码和数学上差距更大。同一批表格中，Qwen3 14B Base 的 EvalPlus 为 72.2（Llama 3 8B 为 44.1），GSM8K 为 92.5（对 55.3）。Qwen3 8B 介于两者之间（MMLU 76.9，EvalPlus 67.7），因此在 Qwen 8B 和 14B 之间选择时，14B 多下载 4.1 GB，换来约 4 分的 MMLU 提升。',
          '版本核对：Llama 3 8B 上下文限于 8K。当前的 Llama 8B 是 Llama 3.1 8B（4.9 GB），支持 128K 上下文。Qwen3 14B 原生 32K 上下文，YaRN 缩放下可达 131K。Meta 没有 14B 的 Llama，Ollama 上的 Qwen3.5 有 9B（6.6–7.6 GB，256K 上下文）但没有 14B，因此 14B 档位仍是 Qwen3 14B。',
          '≤8 GB VRAM：Llama 3 8B（4.7 GB）或 Qwen3 8B（5.2 GB）。10–12 GB：Qwen3 14B 刚好放得下。16 GB 以上：两者都能搭配长上下文运行。若想了解面向代码的选择和基准表，请参阅<a href="/zh/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">编程最佳14B模型</a>对比。',
        ],
        columns: ['基准测试（基础模型）', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { '基准测试（基础模型）': 'MMLU', 'Llama 3 8B': '66.6', 'Qwen3 8B': '76.9', 'Qwen3 14B': '81.1' },
          { '基准测试（基础模型）': 'MMLU-Pro', 'Llama 3 8B': '35.4', 'Qwen3 8B': '56.7', 'Qwen3 14B': '61.0' },
          { '基准测试（基础模型）': 'GSM8K（数学）', 'Llama 3 8B': '55.3', 'Qwen3 8B': '89.8', 'Qwen3 14B': '92.5' },
          { '基准测试（基础模型）': 'MATH', 'Llama 3 8B': '20.5', 'Qwen3 8B': '60.8', 'Qwen3 14B': '62.0' },
          { '基准测试（基础模型）': 'EvalPlus（代码）', 'Llama 3 8B': '44.1', 'Qwen3 8B': '67.7', 'Qwen3 14B': '72.2' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Qwen 14B 与 Llama 8B 的快速解答',
        faqs: [
          {
            q: 'Qwen3 14B 能在 6 GB VRAM 的 GPU 上运行吗？',
            a: '不能。仅 qwen3:14b 的下载就有 9.3 GB，因此至少需要约 10 GB VRAM。在 6 GB 显卡上，Llama 3 8B（4.7 GB）是稳妥之选。',
          },
          {
            q: '写代码用 Qwen3 14B 还是 Llama 3 8B 更好？',
            a: 'Qwen3 14B。在 Qwen 的基础模型对比表中，它的 EvalPlus 为 72.2，而 Llama 3 8B 为 44.1。只有在 VRAM 不允许运行 14B 时才用 Llama 3 8B。',
          },
          {
            q: 'Qwen3 14B 的上下文比 Llama 3 8B 更长吗？',
            a: '是的。Qwen3 14B 原生 32K 上下文，经 YaRN 缩放验证可达 131K（Ollama 默认列为 40K）。Llama 3 8B 限于 8K。若需要长上下文的 Llama，请用支持 128K 的 Llama 3.1 8B。',
          },
          {
            q: 'Qwen3 8B 和 Qwen3 14B 哪个更好？',
            a: 'Qwen3 14B 更强（基础模型 MMLU 81.1 对 76.9，MMLU-Pro 61.0 对 56.7），但需要 9.3 GB 而非 5.2 GB。12 GB 及以上 VRAM 选 14B，8 GB 显卡选 8B。',
          },
          {
            q: '有 Llama 14B 模型吗？',
            a: '没有。Meta 的 Llama 3.x 文本模型有 1B、3B、8B、70B 和 405B，没有 14B。Llama 8B 常见的 14B 替代是 Qwen3 14B。',
          },
          {
            q: 'Qwen 14B 正确的 Ollama 命令是什么？',
            a: '使用 ollama run qwen3:14b。像 qwen3.8:14b 这样的标签并不存在。默认 9.3 GB 的下载是 4 位量化；其他量化（如适用于 16 GB 显卡的更高位版本）列在 ollama.com 该模型的 Tags 页面。',
          },
          {
            q: 'tok/s 数值从何而来？',
            a: '它们是 RTX 3060 12 GB 上单用户的粗略估计，并非 PromptQuorum 的实测值。速度取决于量化、上下文长度和运行时；请运行 ollama run --verbose，在你自己的硬件上读取 eval rate。',
          },
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[编程最佳14B模型](/zh/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B 对比 Qwen 14B 对比 Llama 8B](/zh/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen 对比 Llama 对比 Mistral：完整对比](/zh/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-pt.webp',
    title: 'Qwen 14B vs Llama 3 8B: qual funciona melhor localmente?',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B vs Llama 3 8B: VRAM, velocidade, MMLU',
    metaDescription: 'Qwen3 14B vs Llama 3 8B: download de 9,3 vs 4,7 GB, MMLU 81,1 vs 66,6 (modelos base), contexto 32K vs 8K. Qual cabe na sua VRAM? Resposta rápida.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Qwen 14B vs Llama 3 8B: qual roda melhor localmente?',
        answer: 'O Llama 3 8B é o modelo mais leve: download de 4,7 GB, cabe em placas de 6 GB e gera mais rápido. O Qwen3 14B é um download de 9,3 GB que precisa de cerca de 10–12 GB de VRAM, mas seu modelo base marca cerca de 14 pontos a mais no MMLU (81,1 contra 66,6). Com 12 GB de VRAM, o Qwen3 14B vence em qualidade.',
        bullets: [
          'Llama 3 8B: 4,7 GB (ollama run llama3), contexto de 8K, cerca de 25 tok/s em uma RTX 3060',
          'Qwen3 14B: 9,3 GB (ollama run qwen3:14b), contexto nativo de 32K (131K com YaRN), cerca de 15 tok/s',
          'Precisa de 128K de contexto em uma placa pequena? O Llama 3.1 8B (4,9 GB) é o Llama 8B atual',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Llama 3 8B (download de 4,7 GB) cabe em 6 GB de VRAM e gera cerca de 25 tok/s em uma RTX 3060 — a escolha para velocidade interativa em placas pequenas',
          'O Qwen3 14B (download de 9,3 GB) precisa de pelo menos cerca de 10 GB de VRAM e roda a cerca de 15 tok/s, mas seu modelo base marca 81,1 no MMLU contra 66,6 do Llama 3 8B nas tabelas comparativas da própria Qwen',
          'O ponto de virada prático é 12 GB de VRAM: até 8 GB use Llama 3 8B ou Qwen3 8B; com 12 GB, o Qwen3 14B vence em qualidade',
          'A diferença é maior em código e matemática: EvalPlus 72,2 contra 44,1 e GSM8K 92,5 contra 55,3 (modelos base, números divulgados pela Qwen)',
          'O contexto também difere: o Llama 3 8B é limitado a 8K, o Qwen3 14B tem 32K nativos (131K com YaRN) e o Llama 3.1 8B oferece 128K',
        ],
      },
      body1: {
        title: 'O Llama 3 8B vence em velocidade e uso de VRAM',
        content: [
          '<strong>O Llama 3 8B é um download de 4,7 GB no Ollama e gera cerca de 25 tokens por segundo em uma RTX 3060 de 12 GB, o que o torna a escolha padrão para qualquer configuração com menos de 10 GB de VRAM.</strong> Seus 8B parâmetros dão respostas ágeis e interativas, naturais para chat e sessões curtas de código.',
          'O Qwen3 14B é um download de 9,3 GB, então precisa de cerca de 10 GB de VRAM antes do cache de contexto e de 12 GB para rodar com folga. Produz cerca de 15 tok/s na mesma placa. A vazão menor é perceptível em conversas em tempo real, mas aceitável para resumos em lote ou documentos longos, em que a qualidade importa mais que a latência.',
          'Nessas velocidades, o Llama 3 8B escreve uma resposta de 200 tokens em cerca de 8 segundos e o Qwen3 14B em cerca de 13. Em consultas únicas a diferença é pequena; em sessões com vários turnos ela se acumula. Os valores de tok/s são estimativas aproximadas para um único usuário em uma RTX 3060 de 12 GB, não benchmarks da PromptQuorum — execute <code>ollama run --verbose</code> para medir a sua própria placa.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Llama 3 8B exige um download de 4,7 GB e roda mais rápido; o Qwen3 14B exige 9,3 GB, mas marca cerca de 14 pontos a mais no MMLU (81,1 contra 66,6, modelos base).' },
          { type: 'plain-terms', text: 'Com 6–8 GB de VRAM use o Llama 3 8B ou o Qwen3 8B. Com 12 GB ou mais, use o Qwen3 14B para respostas melhores.' },
        ],
        columns: ['Modelo', 'Comando do Ollama', 'Tamanho do download', 'Contexto nativo', 'MMLU (base)'],
        rows: [
          { 'Modelo': 'Llama 3 8B', 'Comando do Ollama': 'ollama run llama3', 'Tamanho do download': '4,7 GB', 'Contexto nativo': '8K', 'MMLU (base)': '66,6' },
          { 'Modelo': 'Qwen3 8B', 'Comando do Ollama': 'ollama run qwen3:8b', 'Tamanho do download': '5,2 GB', 'Contexto nativo': '32K (131K com YaRN)', 'MMLU (base)': '76,9' },
          { 'Modelo': 'Qwen3 14B', 'Comando do Ollama': 'ollama run qwen3:14b', 'Tamanho do download': '9,3 GB', 'Contexto nativo': '32K (131K com YaRN)', 'MMLU (base)': '81,1' },
        ],
      },
      body2: {
        title: 'O Qwen3 14B vence em qualidade quando a VRAM permite',
        content: [
          '<strong>O Qwen3 14B Base marca 81,1 no MMLU contra 66,6 do Llama 3 8B Base — uma diferença de cerca de 14 pontos, que aparece como melhor raciocínio em várias etapas, melhor seguimento de instruções e saídas estruturadas mais consistentes.</strong> São números de modelos base do relatório técnico da própria Qwen, avaliados com um pipeline comum; dados divulgados pelo fabricante, e as versões instruct diferem.',
          'A diferença aumenta em código e matemática. Nas mesmas tabelas, o Qwen3 14B Base chega a 72,2 no EvalPlus contra 44,1 do Llama 3 8B, e a 92,5 no GSM8K contra 55,3. O Qwen3 8B fica no meio (76,9 no MMLU, 67,7 no EvalPlus): entre Qwen 8B e 14B, o 14B traz cerca de 4 pontos de MMLU por 4,1 GB a mais de download.',
          'Verificação de versões: o Llama 3 8B é limitado a 8K de contexto. O Llama 3.1 8B (4,9 GB) é o Llama 8B atual, com 128K de contexto. O Qwen3 14B tem 32K de contexto nativo e 131K com escalonamento YaRN. A Meta não tem um Llama 14B, e o Qwen3.5 no Ollama oferece um 9B (6,6–7,6 GB, 256K de contexto), mas nenhum 14B — o Qwen3 14B continua sendo a opção de 14B.',
          '≤8 GB de VRAM: Llama 3 8B (4,7 GB) ou Qwen3 8B (5,2 GB). 10–12 GB: o Qwen3 14B cabe no ponto de virada. 16 GB ou mais: ambos funcionam com contexto longo. Para escolhas focadas em código e tabelas de benchmarks, veja a comparação dos <a href="/pt/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">melhores modelos 14B para programação</a>.',
        ],
        columns: ['Benchmark (modelos base)', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { 'Benchmark (modelos base)': 'MMLU', 'Llama 3 8B': '66,6', 'Qwen3 8B': '76,9', 'Qwen3 14B': '81,1' },
          { 'Benchmark (modelos base)': 'MMLU-Pro', 'Llama 3 8B': '35,4', 'Qwen3 8B': '56,7', 'Qwen3 14B': '61,0' },
          { 'Benchmark (modelos base)': 'GSM8K (matemática)', 'Llama 3 8B': '55,3', 'Qwen3 8B': '89,8', 'Qwen3 14B': '92,5' },
          { 'Benchmark (modelos base)': 'MATH', 'Llama 3 8B': '20,5', 'Qwen3 8B': '60,8', 'Qwen3 14B': '62,0' },
          { 'Benchmark (modelos base)': 'EvalPlus (código)', 'Llama 3 8B': '44,1', 'Qwen3 8B': '67,7', 'Qwen3 14B': '72,2' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'O Qwen3 14B roda em uma GPU de 6 GB de VRAM?',
            a: 'Não. Só o download do qwen3:14b tem 9,3 GB, então você precisa de pelo menos cerca de 10 GB de VRAM. Em uma placa de 6 GB, o Llama 3 8B (4,7 GB) é a escolha segura.',
          },
          {
            q: 'Qwen3 14B ou Llama 3 8B: qual é melhor para programar?',
            a: 'O Qwen3 14B. Nas tabelas de modelos base da Qwen ele marca 72,2 no EvalPlus contra 44,1 do Llama 3 8B. Use o Llama 3 8B só quando a VRAM descartar o 14B.',
          },
          {
            q: 'O Qwen3 14B suporta contexto maior que o Llama 3 8B?',
            a: 'Sim. O Qwen3 14B tem 32K de contexto nativo e foi validado até 131K com escalonamento YaRN (o Ollama lista 40K por padrão). O Llama 3 8B é limitado a 8K. Para um Llama de contexto longo, use o Llama 3.1 8B, que suporta 128K.',
          },
          {
            q: 'Qwen3 8B ou Qwen3 14B: qual escolher?',
            a: 'O Qwen3 14B é mais forte (MMLU 81,1 contra 76,9, MMLU-Pro 61,0 contra 56,7 nos modelos base), mas precisa de 9,3 GB em vez de 5,2 GB. Escolha o 14B com 12 GB de VRAM ou mais e o 8B para placas de 8 GB.',
          },
          {
            q: 'Existe um modelo Llama 14B?',
            a: 'Não. Os modelos de texto Llama 3.x da Meta vêm em 1B, 3B, 8B, 70B e 405B, sem 14B. A alternativa de 14B habitual a um Llama 8B é o Qwen3 14B.',
          },
          {
            q: 'Qual é o comando correto do Ollama para o Qwen 14B?',
            a: 'Use ollama run qwen3:14b. Tags como qwen3.8:14b não existem. O download padrão de 9,3 GB é uma quantização de 4 bits; a página Tags do modelo em ollama.com lista as demais quantizações, como variantes de mais bits para placas de 16 GB.',
          },
          {
            q: 'De onde vêm os valores de tok/s?',
            a: 'São estimativas aproximadas para um único usuário em uma RTX 3060 de 12 GB, não medições da PromptQuorum. A velocidade depende da quantização, do tamanho do contexto e do runtime; execute ollama run --verbose e leia a eval rate no seu próprio hardware.',
          },
        ],
      },
      relatedReading: {
        title: 'Leituras relacionadas',
        items: [
          '[Melhores modelos 14B para programação](/pt/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B](/pt/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral: comparação completa](/pt/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-es.webp',
    title: 'Qwen 14B vs Llama 3 8B: ¿cuál funciona mejor en local?',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B vs Llama 3 8B: VRAM, velocidad, MMLU',
    metaDescription: 'Qwen3 14B vs Llama 3 8B: descarga de 9,3 vs 4,7 GB, MMLU 81,1 vs 66,6 (modelos base), contexto 32K vs 8K. ¿Cuál cabe en tu VRAM? Respuesta rápida.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: 'Qwen 14B vs Llama 3 8B: ¿cuál funciona mejor en local?',
        answer: 'Llama 3 8B es el modelo más ligero: descarga de 4,7 GB, cabe en tarjetas de 6 GB y genera más rápido. Qwen3 14B es una descarga de 9,3 GB que necesita unos 10–12 GB de VRAM, pero su modelo base puntúa unos 14 puntos más en MMLU (81,1 frente a 66,6). Con 12 GB de VRAM, Qwen3 14B gana en calidad.',
        bullets: [
          'Llama 3 8B: 4,7 GB (ollama run llama3), contexto de 8K, unos 25 tok/s en una RTX 3060',
          'Qwen3 14B: 9,3 GB (ollama run qwen3:14b), contexto nativo de 32K (131K con YaRN), unos 15 tok/s',
          '¿Necesitas 128K de contexto en una tarjeta pequeña? Llama 3.1 8B (4,9 GB) es el Llama 8B actual',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B (descarga de 4,7 GB) cabe en 6 GB de VRAM y genera unos 25 tok/s en una RTX 3060: la opción para velocidad interactiva en tarjetas pequeñas',
          'Qwen3 14B (descarga de 9,3 GB) necesita al menos unos 10 GB de VRAM y rinde unos 15 tok/s, pero su modelo base puntúa 81,1 en MMLU frente a 66,6 de Llama 3 8B en las tablas comparativas de Qwen',
          'El punto de cruce práctico son 12 GB de VRAM: hasta 8 GB usa Llama 3 8B o Qwen3 8B; con 12 GB, Qwen3 14B gana en calidad',
          'La brecha es mayor en código y matemáticas: EvalPlus 72,2 frente a 44,1 y GSM8K 92,5 frente a 55,3 (modelos base, cifras de Qwen)',
          'El contexto también difiere: Llama 3 8B se limita a 8K, Qwen3 14B tiene 32K nativos (131K con YaRN) y Llama 3.1 8B ofrece 128K',
        ],
      },
      body1: {
        title: 'Llama 3 8B gana en velocidad y ajuste de VRAM',
        content: [
          '<strong>Llama 3 8B es una descarga de 4,7 GB en Ollama y genera unos 25 tokens por segundo en una RTX 3060 de 12 GB, lo que lo convierte en la opción por defecto para cualquier equipo con menos de 10 GB de VRAM.</strong> Sus 8B parámetros dan respuestas ágiles e interactivas, naturales para chat y sesiones cortas de código.',
          'Qwen3 14B es una descarga de 9,3 GB, así que necesita unos 10 GB de VRAM antes de la caché de contexto y 12 GB para trabajar con holgura. Produce unos 15 tok/s en la misma tarjeta. El menor rendimiento se nota en conversación en tiempo real, pero es aceptable para resúmenes por lotes o documentos largos donde la calidad importa más que la latencia.',
          'A esas velocidades, Llama 3 8B escribe una respuesta de 200 tokens en unos 8 segundos y Qwen3 14B en unos 13. En consultas únicas la diferencia es pequeña; en sesiones de varios turnos se acumula. Los valores de tok/s son estimaciones aproximadas para un solo usuario en una RTX 3060 de 12 GB, no benchmarks de PromptQuorum: ejecuta <code>ollama run --verbose</code> para medir tu propia tarjeta.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Llama 3 8B requiere una descarga de 4,7 GB y va más rápido; Qwen3 14B requiere 9,3 GB pero puntúa unos 14 puntos más en MMLU (81,1 frente a 66,6, modelos base).' },
          { type: 'plain-terms', text: 'Con 6–8 GB de VRAM usa Llama 3 8B o Qwen3 8B. Con 12 GB o más, usa Qwen3 14B para obtener mejores respuestas.' },
        ],
        columns: ['Modelo', 'Comando de Ollama', 'Tamaño de descarga', 'Contexto nativo', 'MMLU (base)'],
        rows: [
          { 'Modelo': 'Llama 3 8B', 'Comando de Ollama': 'ollama run llama3', 'Tamaño de descarga': '4,7 GB', 'Contexto nativo': '8K', 'MMLU (base)': '66,6' },
          { 'Modelo': 'Qwen3 8B', 'Comando de Ollama': 'ollama run qwen3:8b', 'Tamaño de descarga': '5,2 GB', 'Contexto nativo': '32K (131K con YaRN)', 'MMLU (base)': '76,9' },
          { 'Modelo': 'Qwen3 14B', 'Comando de Ollama': 'ollama run qwen3:14b', 'Tamaño de descarga': '9,3 GB', 'Contexto nativo': '32K (131K con YaRN)', 'MMLU (base)': '81,1' },
        ],
      },
      body2: {
        title: 'Qwen3 14B gana en calidad cuando la VRAM lo permite',
        content: [
          '<strong>Qwen3 14B Base puntúa 81,1 en MMLU frente a 66,6 de Llama 3 8B Base: una brecha de unos 14 puntos que se traduce en mejor razonamiento de varios pasos, seguimiento de instrucciones y consistencia en salidas estructuradas.</strong> Son cifras de modelos base del informe técnico de Qwen, evaluadas con un mismo pipeline; datos publicados por el fabricante, y las versiones instruct varían.',
          'La brecha crece en código y matemáticas. En las mismas tablas, Qwen3 14B Base alcanza 72,2 en EvalPlus frente a 44,1 de Llama 3 8B, y 92,5 en GSM8K frente a 55,3. Qwen3 8B queda en medio (76,9 en MMLU, 67,7 en EvalPlus): si dudas entre Qwen 8B y 14B, el 14B aporta unos 4 puntos de MMLU por 4,1 GB más de descarga.',
          'Comprobación de versiones: Llama 3 8B se limita a 8K de contexto. Llama 3.1 8B (4,9 GB) es el Llama 8B actual, con 128K de contexto. Qwen3 14B tiene 32K de contexto nativo y 131K con escalado YaRN. Meta no tiene un Llama 14B, y Qwen3.5 en Ollama ofrece un 9B (6,6–7,6 GB, 256K de contexto) pero no un 14B, así que Qwen3 14B sigue siendo la opción de 14B.',
          '≤8 GB de VRAM: Llama 3 8B (4,7 GB) o Qwen3 8B (5,2 GB). 10–12 GB: Qwen3 14B cabe en el punto de equilibrio. 16 GB o más: ambos funcionan con contexto largo. Para elecciones centradas en código y tablas de benchmarks, consulta la comparativa de <a href="/es/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">mejores modelos 14B para programar</a>.',
        ],
        columns: ['Benchmark (modelos base)', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { 'Benchmark (modelos base)': 'MMLU', 'Llama 3 8B': '66,6', 'Qwen3 8B': '76,9', 'Qwen3 14B': '81,1' },
          { 'Benchmark (modelos base)': 'MMLU-Pro', 'Llama 3 8B': '35,4', 'Qwen3 8B': '56,7', 'Qwen3 14B': '61,0' },
          { 'Benchmark (modelos base)': 'GSM8K (matemáticas)', 'Llama 3 8B': '55,3', 'Qwen3 8B': '89,8', 'Qwen3 14B': '92,5' },
          { 'Benchmark (modelos base)': 'MATH', 'Llama 3 8B': '20,5', 'Qwen3 8B': '60,8', 'Qwen3 14B': '62,0' },
          { 'Benchmark (modelos base)': 'EvalPlus (código)', 'Llama 3 8B': '44,1', 'Qwen3 8B': '67,7', 'Qwen3 14B': '72,2' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: '¿Puede Qwen3 14B funcionar en una GPU de 6 GB de VRAM?',
            a: 'No. Solo la descarga de qwen3:14b ocupa 9,3 GB, así que necesitas al menos unos 10 GB de VRAM. En una tarjeta de 6 GB, Llama 3 8B (4,7 GB) es la opción segura.',
          },
          {
            q: '¿Qwen3 14B o Llama 3 8B: cuál es mejor para programar?',
            a: 'Qwen3 14B. En las tablas de modelos base de Qwen puntúa 72,2 en EvalPlus frente a 44,1 de Llama 3 8B. Usa Llama 3 8B solo cuando la VRAM descarte el 14B.',
          },
          {
            q: '¿Soporta Qwen3 14B más contexto que Llama 3 8B?',
            a: 'Sí. Qwen3 14B tiene 32K de contexto nativo y se validó hasta 131K con escalado YaRN (Ollama indica 40K por defecto). Llama 3 8B se limita a 8K. Si quieres un Llama de contexto largo, usa Llama 3.1 8B, que admite 128K.',
          },
          {
            q: '¿Es mejor Qwen3 8B o Qwen3 14B?',
            a: 'Qwen3 14B es más potente (MMLU 81,1 frente a 76,9, MMLU-Pro 61,0 frente a 56,7 en los modelos base), pero necesita 9,3 GB en lugar de 5,2 GB. Elige el 14B con 12 GB de VRAM o más, y el 8B para tarjetas de 8 GB.',
          },
          {
            q: '¿Existe un modelo Llama 14B?',
            a: 'No. Los modelos de texto Llama 3.x de Meta vienen en 1B, 3B, 8B, 70B y 405B, sin 14B. La alternativa habitual de 14B a un Llama 8B es Qwen3 14B.',
          },
          {
            q: '¿Cuál es el comando correcto de Ollama para Qwen 14B?',
            a: 'Usa ollama run qwen3:14b. Etiquetas como qwen3.8:14b no existen. La descarga por defecto de 9,3 GB es una cuantización de 4 bits; la página Tags del modelo en ollama.com lista las demás cuantizaciones, como variantes de más bits para tarjetas de 16 GB.',
          },
          {
            q: '¿De dónde salen los valores de tok/s?',
            a: 'Son estimaciones aproximadas para un solo usuario en una RTX 3060 de 12 GB, no mediciones de PromptQuorum. La velocidad depende de la cuantización, la longitud de contexto y el runtime; ejecuta ollama run --verbose y lee la eval rate en tu propio hardware.',
          },
        ],
      },
      relatedReading: {
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores modelos 14B para programar](/es/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B](/es/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral: comparativa completa](/es/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-ar.webp',
    title: '⁨Qwen 14B⁩ مقابل ⁨Llama 3 8B⁩: أيهما يعمل بشكل أفضل محليًا؟',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B مقابل Llama 3 8B: الذاكرة والسرعة وMMLU',
    metaDescription: 'Qwen3 14B (9.3 جيجابايت) مقابل Llama 3 8B (4.7 جيجابايت): MMLU ‏81.1 مقابل 66.6 (النماذج الأساسية)، وسياق 32K مقابل 8K. أيهما يناسب VRAM لديك؟',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'Qwen 14B مقابل Llama 3 8B: أيهما يعمل بشكل أفضل محليًا؟',
        answer: 'Llama 3 8B هو النموذج الأخف: تنزيل 4.7 جيجابايت، يناسب بطاقات 6 جيجابايت ويولّد أسرع. أما Qwen3 14B فتنزيله 9.3 جيجابايت ويحتاج نحو 10–12 جيجابايت VRAM، لكن نموذجه الأساسي يتفوق بنحو 14 نقطة في MMLU‏ (81.1 مقابل 66.6). مع 12 جيجابايت VRAM يفوز Qwen3 14B من حيث الجودة.',
        bullets: [
          'Llama 3 8B: ‏4.7 جيجابايت (ollama run llama3)، سياق 8K، نحو 25 tok/s على RTX 3060',
          'Qwen3 14B: ‏9.3 جيجابايت (ollama run qwen3:14b)، سياق أصلي 32K (131K مع YaRN)، نحو 15 tok/s',
          'تحتاج سياق 128K على بطاقة صغيرة؟ Llama 8B الحالي هو Llama 3.1 8B (‏4.9 جيجابايت)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يناسب Llama 3 8B (تنزيل 4.7 جيجابايت) ذاكرة VRAM بحجم 6 جيجابايت ويولّد نحو 25 tok/s على RTX 3060 — الخيار الصحيح للسرعة التفاعلية على البطاقات الصغيرة',
          'يحتاج Qwen3 14B (تنزيل 9.3 جيجابايت) إلى نحو 10 جيجابايت VRAM كحد أدنى ويعمل بنحو 15 tok/s، لكن نموذجه الأساسي يسجّل 81.1 في MMLU مقابل 66.6 لـ Llama 3 8B في جداول المقارنة الخاصة بـ Qwen',
          'نقطة التحول العملية هي 12 جيجابايت VRAM: حتى 8 جيجابايت استخدم Llama 3 8B أو Qwen3 8B، وعند 12 جيجابايت يفوز Qwen3 14B من حيث الجودة',
          'الفارق أكبر في البرمجة والرياضيات: EvalPlus ‏72.2 مقابل 44.1 وGSM8K ‏92.5 مقابل 55.3 (نماذج أساسية، أرقام أعلنتها Qwen)',
          'السياق يختلف أيضًا: Llama 3 8B محدود بـ 8K، وQwen3 14B يدعم 32K أصليًا (131K مع YaRN)، وLlama 3.1 8B يدعم 128K',
        ],
      },
      body1: {
        title: 'Llama 3 8B يفوز في السرعة وملاءمة VRAM',
        content: [
          '<strong>يبلغ تنزيل Llama 3 8B في Ollama ‏4.7 جيجابايت ويولّد نحو 25 رمزًا في الثانية على RTX 3060 بسعة 12 جيجابايت، ما يجعله الخيار الافتراضي لأي جهاز بذاكرة VRAM أقل من 10 جيجابايت.</strong> تمنح معاملاته الثمانية مليارات استجابات تفاعلية سريعة تناسب الدردشة وجلسات البرمجة القصيرة.',
          'تنزيل Qwen3 14B هو 9.3 جيجابايت، لذا يحتاج إلى نحو 10 جيجابايت VRAM قبل ذاكرة السياق المؤقتة، و12 جيجابايت للعمل براحة. ينتج نحو 15 tok/s على البطاقة نفسها. ينخفض الإنتاج بشكل ملحوظ في المحادثات الفورية، لكنه مقبول في التلخيص الدفعي أو معالجة المستندات الطويلة حيث تهم الجودة أكثر من زمن الاستجابة.',
          'بهذه السرعات يكتب Llama 3 8B إجابة من 200 رمز في نحو 8 ثوانٍ، وQwen3 14B في نحو 13 ثانية. في الاستعلامات المفردة الفارق صغير، أما في الجلسات متعددة الأدوار فيتراكم. أرقام tok/s تقديرات تقريبية لمستخدم واحد على RTX 3060 بسعة 12 جيجابايت، وليست قياسات من PromptQuorum — شغّل <code>ollama run --verbose</code> لقياس بطاقتك.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يحتاج Llama 3 8B إلى تنزيل 4.7 جيجابايت ويعمل أسرع؛ ويحتاج Qwen3 14B إلى 9.3 جيجابايت لكنه يتفوق بنحو 14 نقطة في MMLU (81.1 مقابل 66.6، نماذج أساسية).' },
          { type: 'plain-terms', text: 'مع 6–8 جيجابايت VRAM استخدم Llama 3 8B أو Qwen3 8B. ومع 12 جيجابايت أو أكثر استخدم Qwen3 14B للحصول على إجابات أفضل.' },
        ],
        columns: ['النموذج', 'أمر Ollama', 'حجم التنزيل', 'السياق الأصلي', 'MMLU (أساسي)'],
        rows: [
          { 'النموذج': 'Llama 3 8B', 'أمر Ollama': 'ollama run llama3', 'حجم التنزيل': '4.7 GB', 'السياق الأصلي': '8K', 'MMLU (أساسي)': '66.6' },
          { 'النموذج': 'Qwen3 8B', 'أمر Ollama': 'ollama run qwen3:8b', 'حجم التنزيل': '5.2 GB', 'السياق الأصلي': '32K (131K مع YaRN)', 'MMLU (أساسي)': '76.9' },
          { 'النموذج': 'Qwen3 14B', 'أمر Ollama': 'ollama run qwen3:14b', 'حجم التنزيل': '9.3 GB', 'السياق الأصلي': '32K (131K مع YaRN)', 'MMLU (أساسي)': '81.1' },
        ],
      },
      body2: {
        title: 'Qwen3 14B يفوز في الجودة عندما تسمح VRAM',
        content: [
          '<strong>يسجّل Qwen3 14B Base نتيجة 81.1 في MMLU مقابل 66.6 لـ Llama 3 8B Base — فارق نحو 14 نقطة يظهر في استدلال أفضل متعدد الخطوات، واتباع أدق للتعليمات، وثبات أكبر في المخرجات المنظمة.</strong> هذه أرقام النماذج الأساسية من التقرير التقني لـ Qwen نفسها، قُيّمت بخط تقييم موحّد؛ وهي أرقام أعلنتها الشركة المطورة، وتختلف نسخ Instruct.',
          'يتسع الفارق في البرمجة والرياضيات. في الجداول نفسها يصل Qwen3 14B Base إلى 72.2 في EvalPlus مقابل 44.1 لـ Llama 3 8B، وإلى 92.5 في GSM8K مقابل 55.3. ويقع Qwen3 8B بينهما (‏76.9 في MMLU و67.7 في EvalPlus)، فإذا كنت تختار بين Qwen 8B و14B فإن نموذج 14B يضيف نحو 4 نقاط في MMLU مقابل 4.1 جيجابايت إضافية في التنزيل.',
          'فحص الإصدارات: Llama 3 8B محدود بسياق 8K. أما Llama 3.1 8B (‏4.9 جيجابايت) فهو Llama 8B الحالي بسياق 128K. ويملك Qwen3 14B سياقًا أصليًا 32K و131K مع تحجيم YaRN. لا يوجد Llama بحجم 14B من Meta، وتقدّم Qwen3.5 على Ollama نموذج 9B (‏6.6–7.6 جيجابايت، سياق 256K) دون 14B، لذا يبقى Qwen3 14B خيار فئة 14B.',
          '≤8 جيجابايت VRAM: ‏Llama 3 8B (‏4.7 جيجابايت) أو Qwen3 8B (‏5.2 جيجابايت). 10–12 جيجابايت: يناسب Qwen3 14B عند نقطة التحول. 16 جيجابايت فأكثر: يعمل النموذجان مع سياق طويل. للاطلاع على خيارات البرمجة وجداول المقاييس راجع مقارنة <a href="/ar/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">أفضل نماذج 14B للبرمجة</a>.',
        ],
        columns: ['المقياس (النماذج الأساسية)', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { 'المقياس (النماذج الأساسية)': 'MMLU', 'Llama 3 8B': '66.6', 'Qwen3 8B': '76.9', 'Qwen3 14B': '81.1' },
          { 'المقياس (النماذج الأساسية)': 'MMLU-Pro', 'Llama 3 8B': '35.4', 'Qwen3 8B': '56.7', 'Qwen3 14B': '61.0' },
          { 'المقياس (النماذج الأساسية)': 'GSM8K (رياضيات)', 'Llama 3 8B': '55.3', 'Qwen3 8B': '89.8', 'Qwen3 14B': '92.5' },
          { 'المقياس (النماذج الأساسية)': 'MATH', 'Llama 3 8B': '20.5', 'Qwen3 8B': '60.8', 'Qwen3 14B': '62.0' },
          { 'المقياس (النماذج الأساسية)': 'EvalPlus (برمجة)', 'Llama 3 8B': '44.1', 'Qwen3 8B': '67.7', 'Qwen3 14B': '72.2' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول Qwen 14B مقابل Llama 8B',
        faqs: [
          {
            q: 'هل يعمل Qwen3 14B على بطاقة رسومات بذاكرة VRAM بحجم 6 جيجابايت؟',
            a: 'لا. تنزيل qwen3:14b وحده 9.3 جيجابايت، لذا تحتاج إلى نحو 10 جيجابايت VRAM كحد أدنى. على بطاقة 6 جيجابايت يكون Llama 3 8B (‏4.7 جيجابايت) الخيار الآمن.',
          },
          {
            q: 'هل Qwen3 14B أم Llama 3 8B أفضل للبرمجة؟',
            a: 'Qwen3 14B. ففي جداول النماذج الأساسية الخاصة بـ Qwen يسجّل 72.2 في EvalPlus مقابل 44.1 لـ Llama 3 8B. استخدم Llama 3 8B فقط عندما تمنع VRAM تشغيل نموذج 14B.',
          },
          {
            q: 'هل يدعم Qwen3 14B سياقًا أطول من Llama 3 8B؟',
            a: 'نعم. يملك Qwen3 14B سياقًا أصليًا 32K وتم التحقق منه حتى 131K مع تحجيم YaRN (تعرض Ollama 40K افتراضيًا). أما Llama 3 8B فمحدود بـ 8K. وإذا أردت Llama بسياق طويل فاستخدم Llama 3.1 8B الذي يدعم 128K.',
          },
          {
            q: 'أيهما أفضل: Qwen3 8B أم Qwen3 14B؟',
            a: 'Qwen3 14B أقوى (‏MMLU ‏81.1 مقابل 76.9 وMMLU-Pro ‏61.0 مقابل 56.7 للنماذج الأساسية) لكنه يحتاج 9.3 جيجابايت بدلًا من 5.2. اختر 14B مع 12 جيجابايت VRAM أو أكثر، و8B لبطاقات 8 جيجابايت.',
          },
          {
            q: 'هل يوجد نموذج Llama بحجم 14B؟',
            a: 'لا. نماذج Llama 3.x النصية من Meta تأتي بأحجام 1B و3B و8B و70B و405B دون 14B. والبديل المعتاد بحجم 14B لنموذج Llama 8B هو Qwen3 14B.',
          },
          {
            q: 'ما الأمر الصحيح في Ollama لتشغيل Qwen 14B؟',
            a: 'استخدم ollama run qwen3:14b. وسوم مثل qwen3.8:14b غير موجودة. التنزيل الافتراضي 9.3 جيجابايت هو تكميم 4 بت؛ وتعرض صفحة Tags للنموذج على ollama.com بقية أنواع التكميم، مثل النسخ الأعلى دقة لبطاقات 16 جيجابايت.',
          },
          {
            q: 'من أين جاءت أرقام tok/s؟',
            a: 'هي تقديرات تقريبية لمستخدم واحد على RTX 3060 بسعة 12 جيجابايت، وليست قياسات من PromptQuorum. تعتمد السرعة على التكميم وطول السياق وبيئة التشغيل؛ شغّل ollama run --verbose واقرأ eval rate على جهازك.',
          },
        ],
      },
      relatedReading: {
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل نماذج 14B للبرمجة](/ar/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B مقابل Qwen 14B مقابل Llama 8B](/ar/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen مقابل Llama مقابل Mistral: مقارنة شاملة](/ar/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    heroImage: '/images/qwen-14b-vs-llama-8b-overview-hero-ko.webp',
    title: 'Qwen 14B vs Llama 3 8B: 로컬에서 어느 쪽이 더 잘 실행됩니까?',
    dateModified: '2026-10-17',
    seoTitle: 'Qwen3 14B vs Llama 3 8B: VRAM, 속도, MMLU',
    metaDescription: 'Qwen3 14B(9.3 GB)와 Llama 3 8B(4.7 GB) 비교: MMLU 81.1 대 66.6(베이스 모델), 컨텍스트 32K 대 8K. 내 VRAM에는 어느 쪽일까요?',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    targetKeywords: [
      'Qwen 14B vs Llama 3 8B',
      'Qwen3 14B 로컬 실행',
      'Qwen3 14B 벤치마크',
      'Llama 3 8B VRAM 요구사항',
      'Qwen 8B vs 14B',
    ],
    readTime: '5분 분량',
    quickAnswerTop: {
      ko: {
        question: 'Qwen 14B vs Llama 3 8B: 로컬에서 어느 쪽이 더 잘 실행됩니까?',
        answer: 'Llama 3 8B는 더 가벼운 모델로, 다운로드 4.7 GB에 6 GB 그래픽카드에 적재되며 더 빠르게 생성합니다. Qwen3 14B는 다운로드 9.3 GB에 약 10~12 GB VRAM이 필요하지만 베이스 모델의 MMLU가 약 14점 더 높습니다(81.1 대 66.6). 12 GB VRAM 환경에서는 Qwen3 14B가 품질 면에서 우위입니다.',
        bullets: [
          'Llama 3 8B: 4.7 GB(ollama run llama3), 컨텍스트 8K, RTX 3060에서 약 25 tok/s',
          'Qwen3 14B: 9.3 GB(ollama run qwen3:14b), 기본 32K 컨텍스트(YaRN 적용 시 131K), 약 15 tok/s',
          '작은 그래픽카드에서 128K 컨텍스트가 필요하다면? 현재의 Llama 8B는 Llama 3.1 8B(4.9 GB)입니다',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B(다운로드 4.7 GB)는 6 GB VRAM에 적재되며 RTX 3060에서 약 25 tok/s를 제공합니다 — 작은 그래픽카드에서 인터랙티브 속도가 중요할 때 올바른 선택입니다',
          'Qwen3 14B(다운로드 9.3 GB)는 최소 약 10 GB VRAM이 필요하고 약 15 tok/s로 실행되지만, Qwen이 직접 발표한 비교표에서 베이스 모델의 MMLU는 81.1로 Llama 3 8B의 66.6을 앞섭니다',
          '실질적인 분기점은 VRAM 12 GB입니다: 8 GB까지는 Llama 3 8B 또는 Qwen3 8B, 12 GB에서는 품질 면에서 Qwen3 14B가 우위입니다',
          '코드와 수학에서는 격차가 더 큽니다: EvalPlus 72.2 대 44.1, GSM8K 92.5 대 55.3(베이스 모델, Qwen 발표 수치)',
          '컨텍스트도 다릅니다: Llama 3 8B는 8K로 제한되고, Qwen3 14B는 기본 32K(YaRN 적용 시 131K), Llama 3.1 8B는 128K를 지원합니다',
        ],
      },
      body1: {
        title: 'Llama 3 8B는 속도와 VRAM 효율성에서 우위입니다',
        content: [
          '<strong>Llama 3 8B는 Ollama에서 4.7 GB 다운로드이며 RTX 3060 12 GB에서 초당 약 25 토큰을 생성합니다 — VRAM 10 GB 미만 환경에서 기본 선택지입니다.</strong> 80억 개의 파라미터는 채팅 및 짧은 코드 세션에 적합한 빠른 인터랙티브 응답으로 이어집니다.',
          'Qwen3 14B는 9.3 GB 다운로드이므로 컨텍스트 캐시 이전에 약 10 GB VRAM이 필요하고, 여유 있게 실행하려면 12 GB가 필요합니다. 동일한 그래픽카드에서 약 15 tok/s를 생성합니다. 처리량 감소는 실시간 대화에서 두드러지지만, 품질이 지연시간보다 중요한 일괄 요약이나 긴 문서 처리에서는 허용할 수 있습니다.',
          '이 속도에서 Llama 3 8B는 200토큰 응답을 약 8초에, Qwen3 14B는 약 13초에 생성합니다. 단일 쿼리에서는 차이가 미미하지만 멀티턴 세션에서는 누적됩니다. tok/s 수치는 RTX 3060 12 GB에서 단일 사용자 기준의 대략적인 추정치이며 PromptQuorum의 벤치마크가 아닙니다 — 직접 측정하려면 <code>ollama run --verbose</code>를 실행하십시오.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Llama 3 8B는 4.7 GB 다운로드에 더 빠르고, Qwen3 14B는 9.3 GB가 필요하지만 MMLU가 약 14점 더 높습니다(81.1 대 66.6, 베이스 모델).' },
          { type: 'plain-terms', text: 'VRAM이 6~8 GB라면 Llama 3 8B 또는 Qwen3 8B를, 12 GB 이상이라면 더 나은 답변을 위해 Qwen3 14B를 사용하십시오.' },
        ],
        columns: ['모델', 'Ollama 명령어', '다운로드 크기', '기본 컨텍스트', 'MMLU(베이스)'],
        rows: [
          { '모델': 'Llama 3 8B', 'Ollama 명령어': 'ollama run llama3', '다운로드 크기': '4.7 GB', '기본 컨텍스트': '8K', 'MMLU(베이스)': '66.6' },
          { '모델': 'Qwen3 8B', 'Ollama 명령어': 'ollama run qwen3:8b', '다운로드 크기': '5.2 GB', '기본 컨텍스트': '32K(YaRN 적용 시 131K)', 'MMLU(베이스)': '76.9' },
          { '모델': 'Qwen3 14B', 'Ollama 명령어': 'ollama run qwen3:14b', '다운로드 크기': '9.3 GB', '기본 컨텍스트': '32K(YaRN 적용 시 131K)', 'MMLU(베이스)': '81.1' },
        ],
      },
      body2: {
        title: 'VRAM이 충분한 경우 Qwen3 14B가 품질에서 우위입니다',
        content: [
          '<strong>Qwen3 14B Base는 MMLU에서 81.1을 기록하여 Llama 3 8B Base의 66.6을 약 14점 앞서며, 이 차이는 다단계 추론, 인스트럭션 준수, 구조화된 출력 일관성에서 나타납니다.</strong> 이 수치는 Qwen 자체 기술 보고서의 베이스 모델 값으로, 동일한 파이프라인으로 평가되었습니다. 제조사 발표 수치이며 Instruct 버전은 다를 수 있습니다.',
          '코드와 수학에서는 격차가 더 커집니다. 같은 표에서 Qwen3 14B Base는 EvalPlus 72.2(Llama 3 8B는 44.1), GSM8K 92.5(55.3)를 기록합니다. Qwen3 8B는 그 중간(MMLU 76.9, EvalPlus 67.7)이므로, Qwen 8B와 14B 사이에서 고민한다면 14B는 4.1 GB를 더 다운로드하는 대가로 MMLU 약 4점을 더 얻습니다.',
          '버전 확인: Llama 3 8B의 컨텍스트는 8K로 제한됩니다. 현재의 Llama 8B는 128K 컨텍스트를 지원하는 Llama 3.1 8B(4.9 GB)입니다. Qwen3 14B는 기본 32K 컨텍스트이며 YaRN 스케일링으로 131K까지 지원합니다. Meta에는 14B Llama가 없고, Ollama의 Qwen3.5에는 9B(6.6~7.6 GB, 256K 컨텍스트)는 있지만 14B는 없으므로 14B급에서는 여전히 Qwen3 14B가 선택지입니다.',
          '8 GB VRAM 이하: Llama 3 8B(4.7 GB) 또는 Qwen3 8B(5.2 GB). 10~12 GB VRAM: Qwen3 14B가 분기점에서 적재됩니다. 16 GB 이상: 두 모델 모두 긴 컨텍스트로 실행됩니다. 코드 특화 선택지와 벤치마크 표는 <a href="/ko/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">코딩을 위한 최고의 14B 모델 비교</a>를 참조하십시오.',
        ],
        columns: ['벤치마크(베이스 모델)', 'Llama 3 8B', 'Qwen3 8B', 'Qwen3 14B'],
        rows: [
          { '벤치마크(베이스 모델)': 'MMLU', 'Llama 3 8B': '66.6', 'Qwen3 8B': '76.9', 'Qwen3 14B': '81.1' },
          { '벤치마크(베이스 모델)': 'MMLU-Pro', 'Llama 3 8B': '35.4', 'Qwen3 8B': '56.7', 'Qwen3 14B': '61.0' },
          { '벤치마크(베이스 모델)': 'GSM8K(수학)', 'Llama 3 8B': '55.3', 'Qwen3 8B': '89.8', 'Qwen3 14B': '92.5' },
          { '벤치마크(베이스 모델)': 'MATH', 'Llama 3 8B': '20.5', 'Qwen3 8B': '60.8', 'Qwen3 14B': '62.0' },
          { '벤치마크(베이스 모델)': 'EvalPlus(코드)', 'Llama 3 8B': '44.1', 'Qwen3 8B': '67.7', 'Qwen3 14B': '72.2' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Qwen 14B vs Llama 8B에 관한 자주 묻는 질문',
        faqs: [
          {
            q: 'Qwen3 14B는 6 GB VRAM GPU에서 실행될 수 있습니까?',
            a: '아닙니다. qwen3:14b 다운로드만 9.3 GB이므로 최소 약 10 GB VRAM이 필요합니다. 6 GB 그래픽카드에서는 Llama 3 8B(4.7 GB)가 안전한 선택입니다.',
          },
          {
            q: 'Qwen3 14B와 Llama 3 8B 중 코딩에 더 적합한 모델은 무엇입니까?',
            a: 'Qwen3 14B입니다. Qwen의 베이스 모델 비교표에서 EvalPlus 72.2를 기록한 반면 Llama 3 8B는 44.1입니다. VRAM 제한으로 14B를 실행할 수 없는 경우에만 Llama 3 8B를 사용하십시오.',
          },
          {
            q: 'Qwen3 14B는 Llama 3 8B보다 더 긴 컨텍스트를 지원합니까?',
            a: '그렇습니다. Qwen3 14B는 기본 32K 컨텍스트이며 YaRN 스케일링으로 131K까지 검증되었습니다(Ollama는 기본 40K로 표기). Llama 3 8B는 8K로 제한됩니다. 긴 컨텍스트의 Llama가 필요하다면 128K를 지원하는 Llama 3.1 8B를 사용하십시오.',
          },
          {
            q: 'Qwen3 8B와 Qwen3 14B 중 무엇을 선택해야 합니까?',
            a: 'Qwen3 14B가 더 강력하지만(베이스 모델 MMLU 81.1 대 76.9, MMLU-Pro 61.0 대 56.7) 5.2 GB가 아닌 9.3 GB가 필요합니다. VRAM 12 GB 이상이면 14B를, 8 GB 그래픽카드라면 8B를 선택하십시오.',
          },
          {
            q: 'Llama 14B 모델이 있습니까?',
            a: '없습니다. Meta의 Llama 3.x 텍스트 모델은 1B, 3B, 8B, 70B, 405B로 제공되며 14B는 없습니다. Llama 8B의 일반적인 14B 대안은 Qwen3 14B입니다.',
          },
          {
            q: 'Qwen 14B의 올바른 Ollama 명령어는 무엇입니까?',
            a: 'ollama run qwen3:14b를 사용하십시오. qwen3.8:14b 같은 태그는 존재하지 않습니다. 기본 9.3 GB 다운로드는 4비트 양자화이며, 다른 양자화(16 GB 그래픽카드용 고비트 변형 등)는 ollama.com의 해당 모델 Tags 페이지에 나와 있습니다.',
          },
          {
            q: 'tok/s 수치는 어디에서 나온 것입니까?',
            a: 'RTX 3060 12 GB에서 단일 사용자 기준의 대략적인 추정치이며 PromptQuorum의 실측값이 아닙니다. 속도는 양자화, 컨텍스트 길이, 런타임에 따라 달라지므로 ollama run --verbose를 실행하여 직접 하드웨어에서 eval rate를 확인하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[코딩을 위한 최고의 14B 모델 비교](/ko/prompt-bites/best-14b-models-coding)',
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B](/ko/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral: 완전 비교](/ko/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5–6 -- arxiv.org/abs/2505.09388',
          'Qwen3-14B model card (Hugging Face) -- huggingface.co/Qwen/Qwen3-14B',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
          'Ollama: llama3 -- ollama.com/library/llama3',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3.5 -- ollama.com/library/qwen3.5',
          'Meta Llama 3 8B model card (Hugging Face) -- huggingface.co/meta-llama/Meta-Llama-3-8B',
        ],
      },
    },
  },
}
