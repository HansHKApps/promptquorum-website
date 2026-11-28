import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-en.webp',
    title: 'How Much VRAM for a 70B Model?',
    dateModified: '2026-11-28',
    seoTitle: '70B VRAM: 3 Run Options 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'A 70B model at Q4_K_M is a 43 GB download, so plan about 48 GB. Options: two used RTX 3090s ($3,000–3,450, cards only), a 64 GB+ Mac or cloud.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Llama 3.3 70B'],
    current_hardware_mentioned: ['RTX 3090', 'M5 Max', 'Mac mini M5 Pro'],
    educationalLevel: 'Advanced',
    audience: 'Developers planning to run 70B models locally',
    parentArticle: '/local-llms/run-70b-models-24gb-vram',
    siblingBites: ['how-much-ram-for-7b-model', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much VRAM for a 70B model?',
        answer: 'Plan about 48 GB. The Llama 3.3 70B Q4_K_M download is 43 GB, and context needs memory on top. Options include two 24 GB GPUs such as the RTX 3090, a Mac with 64 GB or more of unified memory, or a rented cloud GPU.',
        bullets: [
          'Llama 3.3 70B Q4_K_M: 43 GB download, plus memory for context',
          'Two used RTX 3090s (48 GB): $3,000–3,450 for the cards alone',
          'Mac with 64 GB or more: one machine, no splitting between two cards',
        ],
        updatedDate: '2026-11',
      },
      de: {
        question: 'Wie viel VRAM braucht ein 70B-Modell?',
        answer: 'Planen Sie etwa 48 GB ein. Der Q4_K_M-Download von Llama 3.3 70B ist 43 GB groß, der Kontext braucht zusätzlichen Speicher. Möglich sind zwei 24-GB-GPUs wie die RTX 3090, ein Mac mit mindestens 64 GB Unified Memory oder eine gemietete Cloud-GPU.',
        bullets: [
          'Llama 3.3 70B Q4_K_M: 43 GB Download, dazu Speicher für den Kontext',
          'Zwei gebrauchte RTX 3090 (48 GB): 3.000–3.450 USD allein für die Karten',
          'Mac ab 64 GB: ein Gerät, keine Aufteilung auf zwei Karten',
        ],
        updatedDate: '2026-11',
      },
      fr: {
        question: 'De combien de VRAM a besoin un modèle 70B ?',
        answer: 'Prévoyez environ 48 Go. Le téléchargement Q4_K_M de Llama 3.3 70B pèse 43 Go et le contexte demande de la mémoire en plus. Options : deux GPU de 24 Go comme la RTX 3090, un Mac avec au moins 64 Go de mémoire unifiée ou un GPU cloud loué.',
        bullets: [
          'Llama 3.3 70B Q4_K_M : 43 Go à télécharger, plus la mémoire du contexte',
          'Deux RTX 3090 d\'occasion (48 Go) : 3 000–3 450 $ pour les seules cartes',
          'Mac d\'au moins 64 Go : une seule machine, sans répartition entre deux cartes',
        ],
        updatedDate: '2026-11',
      },
      ja: {
        question: '70BモデルにはどれくらいのVRAMが必要ですか？',
        answer: '約48GBを目安にしてください。Llama 3.3 70BのQ4_K_M版は43GBで、コンテキストには追加のメモリが必要です。RTX 3090などの24GB GPU 2枚、64GB以上のユニファイドメモリを持つMac、レンタルのクラウドGPUが選択肢です。',
        bullets: [
          'Llama 3.3 70B Q4_K_M：43GBのダウンロードとコンテキスト分のメモリ',
          '中古RTX 3090 ×2（48GB）：カードだけで$3,000–3,450',
          '64GB以上のMac：1台で完結し、2枚への分割が不要',
        ],
        updatedDate: '2026-11',
      },
      zh: {
        question: '运行70B模型需要多少显存？',
        answer: '建议按约48GB规划。Llama 3.3 70B的Q4_K_M版本下载体积为43GB，上下文还需要额外内存。可选方案包括两张24GB显卡（如RTX 3090）、统一内存64GB及以上的Mac，或租用云端GPU。',
        bullets: [
          'Llama 3.3 70B Q4_K_M：下载43GB，另需上下文内存',
          '两张二手RTX 3090（48GB）：仅显卡$3,000–3,450',
          '64GB及以上的Mac：单机即可，无需拆分到两张卡',
        ],
        updatedDate: '2026-11',
      },
      es: {
        question: '¿Cuánta VRAM necesita un modelo 70B?',
        answer: 'Cuenta con unos 48 GB. La descarga Q4_K_M de Llama 3.3 70B ocupa 43 GB y el contexto necesita memoria adicional. Opciones: dos GPU de 24 GB como la RTX 3090, un Mac con 64 GB o más de memoria unificada o una GPU alquilada en la nube.',
        bullets: [
          'Llama 3.3 70B Q4_K_M: descarga de 43 GB, más memoria para el contexto',
          'Dos RTX 3090 usadas (48 GB): $3.000–3.450 solo en tarjetas',
          'Mac con 64 GB o más: un solo equipo, sin repartir entre dos tarjetas',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A Llama 3.3 70B model at Q4_K_M is a 43 GB download; context needs memory on top, so plan about 48 GB',
          'Two common local options: two 24 GB GPUs, or a Mac with 64 GB or more of unified memory',
          'For light use, renting costs less than buying: RunPod listed 48 GB GPUs from $0.33 an hour (28 November 2026)',
        ],
      },
      body1: {
        title: 'Hardware Options for Running a 70B Model',
        content: [
          '<strong>A Llama 3.3 70B model at Q4_K_M is a 43 GB download (<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>), about 1.8 times the 24 GB on one RTX 4090 or RTX 3090.</strong> That is why one 24 GB card cannot hold it. Two 24 GB cards, a Mac with enough unified memory or a rented GPU can.',
          'A Mac with 64 GB or more of unified memory is the simpler single-machine route, because the model is not split between two cards. Two RTX 3090s need a desktop with room, power and cooling for both. The speeds below come from different sources: the dual-3090 range is a <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">ComputingForGeeks test</a> of 19 October 2026 (19.5 tok/s with the default layer split, 31.9 with tensor split), the Mac figures are estimates from our <a href="/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">70B hardware guide</a>, and the offload range covers estimates from <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a> and that guide. PromptQuorum has not benchmarked these setups.',
        ],
        columns: ['Hardware', 'Total VRAM', 'Speed'],
        rows: [
          { 'Hardware': 'Dual RTX 3090', 'Total VRAM': '48 GB', 'Speed': '19.5–31.9 tok/s (test)' },
          { 'Hardware': 'RTX 3090 + CPU offload', 'Total VRAM': '24 GB + 32 GB RAM', 'Speed': '~1–5 tok/s (estimates)' },
          { 'Hardware': 'Mac mini M5 Pro 64 GB', 'Total VRAM': '64 GB unified', 'Speed': '~4–5 tok/s (estimate)' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'Total VRAM': '128 GB unified', 'Speed': '~9–11 tok/s (estimate)' },
          { 'Hardware': 'Cloud GPU, 48 GB', 'Total VRAM': '48 GB', 'Speed': 'Not compared' },
        ],
      },
      body2: {
        title: 'When Cloud Makes More Sense Than Local',
        content: [
          'On 28 November 2026, <a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a> listed the 48 GB RTX A6000 at $0.33 an hour on Community Cloud and $0.69 on Secure Cloud, and the 48 GB A40 at $0.35 and $0.59. Two used RTX 3090s cost $3,000–3,450 for the cards alone (<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">InsiderLLM price tracker</a>, dated 23 November 2026). That equals about 4,300–10,500 hours of A6000 rental at $0.69–0.33 an hour. The comparison ignores the rest of the PC, electricity, storage fees, resale value and speed differences. See <a href="/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">the single-card buy-vs-rent breakdown</a> for the same question on one RTX 3090.',
          'At 5 hours a week, even 4,300 hours takes more than 16 years, so for light use renting costs less than buying two cards. Local 70B makes sense when data must stay on your own hardware, or when use is heavy and sustained. For smaller models that fit on consumer GPUs, see <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the VRAM tier guide</a>.',
          'For a full breakdown of 70B deployment strategies, see <a href="/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">how to run 70B models with 24 GB VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 70B Model VRAM',
        faqs: [
          {
            q: 'Can a single RTX 3090 run a 70B model?',
            a: 'Partially. A single RTX 3090 (24 GB) can run a 70B model with CPU offload, but published estimates are only roughly 1–5 tok/s, which is slow for interactive use. To keep the 43 GB Q4_K_M model on GPUs, plan about 48 GB.',
          },
          {
            q: 'Can I run a 70B model on a MacBook?',
            a: 'Yes, if it has enough unified memory: plan 64 GB or more for Q4_K_M. A 32 GB MacBook cannot hold the model. If you do not need a laptop, the M5 Pro Mac mini can be configured with 64 GB, but the $1,699 base model has only 24 GB: Fstoppers listed an 18-core, 1 TB, 64 GB configuration at $3,199 on 21 September 2026. The Mac Studio M5 Max starts at $2,499 with 36 GB, so it needs a memory upgrade too. See <a href="/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">the RAM sizing guide</a> for smaller model alternatives.',
          },
          {
            q: 'Is there a cheaper way to run 70B models locally?',
            a: 'Yes, with trade-offs. Two used Tesla P40s cost about $500–640 for the cards but are old and much slower, and running on the CPU needs no purchase if your PC already has 64 GB of RAM. Q2_K shrinks the download to 26 GB but loses more quality, and it still does not fit on one 24 GB card. See <a href="/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">our price comparison of 70B options</a>.',
          },
          {
            q: 'How does 70B VRAM compare to a 13B model?',
            a: 'A 13B model at Q4 needs about 9 GB of VRAM, while the 70B Q4_K_M download alone is 43 GB. Whether the smaller model is good enough depends on your task, so test it with your own prompts. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM requirements by model size</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Related Guides',
      items: [
        '[RTX 3090 for Local LLMs: Buy Used or Rent?](/power-local-llm/rtx-3090-local-llm-buy-or-rent) — should you buy one RTX 3090, or rent it by the hour?',
        '[How Much VRAM Do You Need for a Local LLM?](/prompt-bites/how-much-vram-for-local-llm) — VRAM tier table for all model sizes',
        '[Cheapest Ways to Run a 70B Model Locally](/prompt-bites/cheapest-way-to-run-70b-model-locally) — price against speed for each option',
        '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide) — full hardware guide for 70B-capable builds',
        '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — which 70B models are worth the hardware cost',
      ],
    },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-de.webp',
    title: 'Wie viel VRAM braucht ein 70B-Modell?',
    seoTitle: 'VRAM für 70B-Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ein 70B-Modell in Q4_K_M ist ein 43-GB-Download: etwa 48 GB einplanen. Zwei gebrauchte RTX 3090 (3.000–3.450 USD), ein Mac ab 64 GB oder Cloud.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.3 70B in Q4_K_M ist ein 43-GB-Download; der Kontext braucht zusätzlichen Speicher, planen Sie daher etwa 48 GB ein',
          'Zwei gängige lokale Wege: zwei 24-GB-GPUs oder ein Mac mit mindestens 64 GB Unified Memory',
          'Bei geringer Nutzung ist Mieten günstiger als Kaufen: RunPod listete 48-GB-GPUs ab 0,33 USD pro Stunde (28. November 2026)',
        ],
      },
      body1: {
        title: 'Hardware-Optionen für ein 70B-Modell',
        content: [
          '<strong>Llama 3.3 70B in Q4_K_M ist ein 43-GB-Download (<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>), rund das 1,8-Fache der 24 GB einer RTX 4090 oder RTX 3090.</strong> Deshalb fasst eine einzelne 24-GB-Karte das Modell nicht. Zwei 24-GB-Karten, ein Mac mit genügend Unified Memory oder eine gemietete GPU schaffen das.',
          'Ein Mac mit mindestens 64 GB Unified Memory ist der einfachere Weg mit einem Gerät, weil das Modell nicht auf zwei Karten verteilt wird. Zwei RTX 3090 brauchen einen Desktop-PC mit Platz, Strom und Kühlung für beide. Die Geschwindigkeiten unten stammen aus verschiedenen Quellen: Die Spanne für zwei RTX 3090 ist ein <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">Test von ComputingForGeeks</a> vom 19. Oktober 2026 (19,5 Tok/s mit dem standardmäßigen Layer-Split, 31,9 mit Tensor-Split), die Mac-Werte sind Schätzungen aus unserem <a href="/de/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">70B-Hardware-Leitfaden</a>, und die Offload-Spanne umfasst Schätzungen von <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a> und diesem Leitfaden. PromptQuorum hat diese Aufbauten nicht selbst gemessen.',
        ],
        columns: ['Hardware', 'Gesamt-VRAM', 'Geschwindigkeit'],
        rows: [
          { 'Hardware': 'Zwei RTX 3090', 'Gesamt-VRAM': '48 GB', 'Geschwindigkeit': '19,5–31,9 Tok/s (Test)' },
          { 'Hardware': 'RTX 3090 + CPU-Offload', 'Gesamt-VRAM': '24 GB + 32 GB RAM', 'Geschwindigkeit': '~1–5 Tok/s (Schätzungen)' },
          { 'Hardware': 'Mac mini M5 Pro 64 GB', 'Gesamt-VRAM': '64 GB unified', 'Geschwindigkeit': '~4–5 Tok/s (Schätzung)' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'Gesamt-VRAM': '128 GB unified', 'Geschwindigkeit': '~9–11 Tok/s (Schätzung)' },
          { 'Hardware': 'Cloud-GPU, 48 GB', 'Gesamt-VRAM': '48 GB', 'Geschwindigkeit': 'Nicht verglichen' },
        ],
      },
      body2: {
        title: 'Wann Cloud sinnvoller ist als lokale Hardware',
        content: [
          'Am 28. November 2026 listete <a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a> die RTX A6000 mit 48 GB für 0,33 USD pro Stunde in der Community Cloud und 0,69 USD in der Secure Cloud, die A40 mit 48 GB für 0,35 und 0,59 USD. Zwei gebrauchte RTX 3090 kosten allein als Karten 3.000–3.450 USD (<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">Preistracker von InsiderLLM</a>, Stand 23. November 2026). Das entspricht etwa 4.300–10.500 Mietstunden der A6000 bei 0,69–0,33 USD pro Stunde. Der Vergleich lässt den übrigen PC, Strom, Speichergebühren, Wiederverkaufswert und Tempounterschiede außen vor. Dieselbe Frage für eine einzelne RTX 3090 beantwortet <a href="/de/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">die Kaufen-oder-Mieten-Rechnung</a>.',
          'Bei 5 Stunden pro Woche dauern selbst 4.300 Stunden mehr als 16 Jahre; bei geringer Nutzung ist Mieten daher günstiger als der Kauf von zwei Karten. Lokales 70B lohnt sich, wenn Daten auf der eigenen Hardware bleiben müssen oder die Nutzung intensiv und dauerhaft ist. Für kleinere Modelle, die auf Consumer-GPUs passen, siehe <a href="/de/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">den VRAM-Tier-Leitfaden</a>.',
          'Für eine vollständige Aufschlüsselung der 70B-Deployment-Strategien, siehe <a href="/de/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">wie man 70B-Modelle mit 24 GB VRAM betreibt</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen zum VRAM-Bedarf von 70B-Modellen',
        faqs: [
          {
            q: 'Kann eine einzelne RTX 3090 ein 70B-Modell ausführen?',
            a: 'Teilweise. Eine einzelne RTX 3090 (24 GB) kann ein 70B-Modell mit CPU-Offload betreiben, veröffentlichte Schätzungen liegen aber nur bei grob 1–5 Tok/s – langsam für interaktive Nutzung. Um das 43 GB große Q4_K_M-Modell auf GPUs zu halten, planen Sie etwa 48 GB ein.',
          },
          {
            q: 'Kann ich ein 70B-Modell auf einem MacBook ausführen?',
            a: 'Ja, wenn genug Unified Memory vorhanden ist: Planen Sie für Q4_K_M mindestens 64 GB ein. Ein MacBook mit 32 GB fasst das Modell nicht. Braucht es kein Notebook zu sein, lässt sich der Mac mini M5 Pro mit 64 GB konfigurieren, das Basismodell für 1.699 USD hat aber nur 24 GB: Fstoppers listete am 21. September 2026 eine Konfiguration mit 18 Kernen, 1 TB und 64 GB für 3.199 USD. Der Mac Studio M5 Max startet bei 2.499 USD mit 36 GB und braucht daher ebenfalls ein Speicher-Upgrade. Kleinere Modelle als Alternative zeigt <a href="/de/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">der RAM-Größenleitfaden</a>.',
          },
          {
            q: 'Gibt es einen günstigeren Weg, 70B-Modelle lokal zu betreiben?',
            a: 'Ja, mit Abstrichen. Zwei gebrauchte Tesla P40 kosten rund 500–640 USD für die Karten, sind aber alt und viel langsamer, und der CPU-Betrieb erfordert keinen Kauf, wenn Ihr PC bereits 64 GB RAM hat. Q2_K verkleinert den Download auf 26 GB, verliert aber mehr Qualität und passt trotzdem nicht auf eine 24-GB-Karte. Siehe <a href="/de/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">unseren Preisvergleich der 70B-Optionen</a>.',
          },
          {
            q: 'Wie unterscheidet sich der VRAM-Bedarf von 70B vs. 13B?',
            a: 'Ein 13B-Modell in Q4 braucht etwa 9 GB VRAM, während allein der 70B-Q4_K_M-Download 43 GB groß ist. Ob das kleinere Modell reicht, hängt von Ihrer Aufgabe ab – testen Sie es mit eigenen Prompts. Siehe <a href="/de/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM-Anforderungen nach Modellgröße</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Verwandte Anleitungen',
      items: [
        '[Wie viel VRAM braucht man für ein lokales LLM?](/de/prompt-bites/how-much-vram-for-local-llm) — VRAM-Tabelle für alle Modellgrößen',
        '[Günstigste Wege, ein 70B-Modell lokal zu betreiben](/de/prompt-bites/cheapest-way-to-run-70b-model-locally) — Preis und Tempo je Option im Vergleich',
        '[Lokaler LLM Hardware-Leitfaden](/de/local-llms/local-llm-hardware-guide) — vollständiger Leitfaden für 70B-fähige Hardware',
        '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) — welche 70B-Modelle den Hardwarepreis wert sind',
      ],
    },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-fr.webp',
    title: 'Combien de VRAM pour un modèle 70B ?',
    seoTitle: 'VRAM pour 70B : 3 options 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Un 70B en Q4_K_M pèse 43 Go à télécharger : prévoyez environ 48 Go. Deux RTX 3090 d\'occasion (3 000–3 450 $), un Mac 64 Go+ ou le cloud.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.3 70B en Q4_K_M pèse 43 Go ; le contexte demande de la mémoire en plus, prévoyez donc environ 48 Go',
          'Deux solutions locales courantes : deux GPU de 24 Go, ou un Mac avec au moins 64 Go de mémoire unifiée',
          'Pour un usage léger, louer coûte moins qu\'acheter : RunPod affichait des GPU de 48 Go à partir de 0,33 $ de l\'heure (28 novembre 2026)',
        ],
      },
      body1: {
        title: 'Options matérielles pour un modèle 70B',
        content: [
          '<strong>Llama 3.3 70B en Q4_K_M représente un téléchargement de 43 Go (<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>), soit environ 1.8 fois les 24 Go d\'une RTX 4090 ou d\'une RTX 3090.</strong> Une seule carte de 24 Go ne peut donc pas le contenir. Deux cartes de 24 Go, un Mac doté d\'assez de mémoire unifiée ou un GPU loué le peuvent.',
          'Un Mac avec au moins 64 Go de mémoire unifiée est la solution en un seul appareil la plus simple, car le modèle n\'est pas réparti entre deux cartes. Deux RTX 3090 exigent un PC de bureau offrant la place, l\'alimentation et le refroidissement pour les deux. Les vitesses ci-dessous viennent de sources différentes : la plage à deux RTX 3090 est un <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">test de ComputingForGeeks</a> du 19 octobre 2026 (19.5 tok/s avec la répartition par couches par défaut, 31.9 avec la répartition par tenseurs), les chiffres Mac sont des estimations de notre <a href="/fr/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">guide matériel 70B</a>, et la plage avec offload couvre les estimations d\'<a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a> et de ce guide. PromptQuorum n\'a pas mesuré ces configurations.',
        ],
        columns: ['Matériel', 'VRAM total', 'Vitesse'],
        rows: [
          { 'Matériel': 'Deux RTX 3090', 'VRAM total': '48 Go', 'Vitesse': '19.5–31.9 tok/s (test)' },
          { 'Matériel': 'RTX 3090 + offload CPU', 'VRAM total': '24 Go + 32 Go de RAM', 'Vitesse': '~1–5 tok/s (estimations)' },
          { 'Matériel': 'Mac mini M5 Pro 64 Go', 'VRAM total': '64 Go unifiés', 'Vitesse': '~4–5 tok/s (estimation)' },
          { 'Matériel': 'Apple M5 Max 128 Go', 'VRAM total': '128 Go unifiés', 'Vitesse': '~9–11 tok/s (estimation)' },
          { 'Matériel': 'GPU cloud, 48 Go', 'VRAM total': '48 Go', 'Vitesse': 'Non comparé' },
        ],
      },
      body2: {
        title: 'Quand le cloud est plus judicieux que le local',
        content: [
          'Le 28 novembre 2026, <a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a> affichait la RTX A6000 48 Go à 0,33 $ de l\'heure en Community Cloud et 0,69 $ en Secure Cloud, et l\'A40 48 Go à 0,35 $ et 0,59 $. Deux RTX 3090 d\'occasion coûtent 3 000–3 450 $ pour les seules cartes (<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">suivi des prix d\'InsiderLLM</a>, daté du 23 novembre 2026). Cela équivaut à environ 4 300–10 500 heures de location d\'une A6000 à 0,69–0,33 $ de l\'heure. La comparaison ignore le reste du PC, l\'électricité, le stockage, la revente et les écarts de vitesse. Pour une seule RTX 3090, voir <a href="/fr/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">le calcul acheter ou louer</a>.',
          'À 5 heures par semaine, même 4 300 heures demandent plus de 16 ans : pour un usage léger, louer coûte moins qu\'acheter deux cartes. Un 70B local se justifie quand les données doivent rester sur votre matériel ou quand l\'usage est intensif et durable. Pour des modèles plus petits adaptés aux GPU grand public, consultez <a href="/fr/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">le guide des niveaux de VRAM</a>.',
          'Pour une analyse complète des stratégies de déploiement 70B, consultez <a href="/fr/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">comment faire tourner des modèles 70B avec 24 Go de VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes sur le VRAM des modèles 70B',
        faqs: [
          {
            q: 'Une seule RTX 3090 peut-elle faire tourner un modèle 70B ?',
            a: 'Partiellement. Une seule RTX 3090 (24 Go) peut exécuter un 70B avec offload CPU, mais les estimations publiées ne donnent qu\'environ 1–5 tok/s, ce qui est lent en usage interactif. Pour garder sur GPU le modèle Q4_K_M de 43 Go, prévoyez environ 48 Go.',
          },
          {
            q: 'Puis-je faire tourner un modèle 70B sur un MacBook ?',
            a: 'Oui, s\'il a assez de mémoire unifiée : prévoyez au moins 64 Go en Q4_K_M. Un MacBook de 32 Go ne peut pas contenir le modèle. Si un portable n\'est pas nécessaire, le Mac mini M5 Pro peut être configuré avec 64 Go, mais le modèle de base à 1 699 $ n\'en a que 24 : le 21 septembre 2026, Fstoppers indiquait 3 199 $ pour une configuration 18 cœurs, 1 To et 64 Go. Le Mac Studio M5 Max démarre à 2 499 $ avec 36 Go et demande donc aussi une extension de mémoire. Pour des modèles plus petits, voir <a href="/fr/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">le guide de dimensionnement de la RAM</a>.',
          },
          {
            q: 'Existe-t-il un moyen moins cher d\'exécuter des modèles 70B localement ?',
            a: 'Oui, avec des compromis. Deux Tesla P40 d\'occasion coûtent environ 500–640 $ pour les cartes, mais elles sont anciennes et bien plus lentes, et le mode CPU ne demande aucun achat si votre PC a déjà 64 Go de RAM. Q2_K réduit le téléchargement à 26 Go, perd davantage en qualité et ne tient toujours pas sur une carte de 24 Go. Voir <a href="/fr/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">notre comparatif de prix des options 70B</a>.',
          },
          {
            q: 'Comment se compare le VRAM d\'un 70B par rapport à un 13B ?',
            a: 'Un 13B en Q4 demande environ 9 Go de VRAM, alors que le seul téléchargement du 70B Q4_K_M pèse 43 Go. Le petit modèle suffit-il ? Cela dépend de votre tâche : testez-le avec vos propres prompts. Voir <a href="/fr/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">les besoins en VRAM selon la taille du modèle</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Guides connexes',
      items: [
        '[De combien de VRAM avez-vous besoin pour un LLM local ?](/fr/prompt-bites/how-much-vram-for-local-llm) — tableau VRAM pour toutes les tailles de modèles',
        '[Les options les moins chères pour un 70B en local](/fr/prompt-bites/cheapest-way-to-run-70b-model-locally) — prix et vitesse de chaque option',
        '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide) — guide complet pour les configurations capables de 70B',
        '[Meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) — quels modèles 70B valent le coût matériel',
      ],
    },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-ja.webp',
    title: '70BモデルにはどれくらいのVRAMが必要ですか？',
    seoTitle: '70BモデルのVRAM：3つの方法 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '70BモデルのQ4_K_M版は43GBのダウンロードで、約48GBが目安です。中古RTX 3090 2枚（カードのみ$3,000–3,450）、64GB以上のMac、クラウドGPUを比較します。',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.3 70BのQ4_K_M版は43GBのダウンロードです。コンテキストには追加のメモリが必要なため、約48GBを目安にしてください',
          'ローカルの代表的な方法は、24GB GPU 2枚か、64GB以上のユニファイドメモリを持つMacです',
          '利用が少ないなら購入よりレンタルが安くなります。RunPodは48GB GPUを1時間$0.33から掲載していました（2026年11月28日）',
        ],
      },
      body1: {
        title: '70Bモデルを動かすハードウェアの選択肢',
        content: [
          '<strong>Llama 3.3 70BのQ4_K_M版は43GBのダウンロードで（<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>）、RTX 4090やRTX 3090 1枚の24GBの約1.8倍です。</strong> そのため24GBカード1枚には収まりません。24GBカード2枚、十分なユニファイドメモリを持つMac、レンタルGPUなら収められます。',
          '64GB以上のユニファイドメモリを持つMacは、モデルを2枚のカードに分割しないため、1台で済む簡単な方法です。RTX 3090 2枚には、両方を収める空間、電源、冷却を備えたデスクトップPCが必要です。以下の速度は出典が異なります。RTX 3090 2枚の値は2026年10月19日の<a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">ComputingForGeeksのテスト</a>（標準のレイヤー分割で19.5 tok/s、テンソル分割で31.9）、Macの値は当サイトの<a href="/ja/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">70Bハードウェアガイド</a>の推定、オフロード時の範囲は<a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>と同ガイドの推定です。PromptQuorumはこれらの構成を実測していません。',
        ],
        columns: ['ハードウェア', '合計VRAM', '速度'],
        rows: [
          { 'ハードウェア': 'RTX 3090 ×2', '合計VRAM': '48 GB', '速度': '19.5–31.9 tok/s（テスト）' },
          { 'ハードウェア': 'RTX 3090 + CPUオフロード', '合計VRAM': '24 GB + 32 GB RAM', '速度': '約1–5 tok/s（推定値）' },
          { 'ハードウェア': 'Mac mini M5 Pro 64GB', '合計VRAM': '64 GB統合メモリ', '速度': '約4–5 tok/s（推定）' },
          { 'ハードウェア': 'Apple M5 Max 128 GB', '合計VRAM': '128 GB統合メモリ', '速度': '約9–11 tok/s（推定）' },
          { 'ハードウェア': 'クラウドGPU 48GB', '合計VRAM': '48 GB', '速度': '比較なし' },
        ],
      },
      body2: {
        title: 'クラウドの方がローカルより合理的な場合',
        content: [
          '2026年11月28日時点で、<a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a>は48GBのRTX A6000をCommunity Cloudで1時間$0.33、Secure Cloudで$0.69、48GBのA40をそれぞれ$0.35と$0.59で掲載していました。中古RTX 3090 2枚はカードだけで$3,000–3,450です（<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">InsiderLLMの価格トラッカー</a>、2026年11月23日付）。これは1時間$0.69–0.33のA6000レンタル約4,300–10,500時間分に当たります。この比較は、PCの他の部品、電気代、ストレージ料金、売却価格、速度差を考慮していません。RTX 3090 1枚の場合は<a href="/ja/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">購入とレンタルの比較</a>をご覧ください。',
          '週5時間の利用では、4,300時間でも16年以上かかります。利用が少ないなら、カード2枚を買うよりレンタルが安くなります。データを自分のハードウェアに留める必要がある場合や、継続的に多く使う場合は、ローカルの70Bに意味があります。コンシューマー向けGPUに収まる小さなモデルは<a href="/ja/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM階層ガイド</a>をご覧ください。',
          '70Bの導入方法の詳しい解説は<a href="/ja/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">24GB VRAMで70Bモデルを動かす方法</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '70BモデルのVRAMに関するよくある質問',
        faqs: [
          {
            q: 'RTX 3090 1枚で70Bモデルを動かせますか？',
            a: '部分的には可能です。RTX 3090（24GB）1枚でもCPUオフロードで70Bモデルを動かせますが、公表されている推定値は約1–5 tok/sにとどまり、対話用途には遅めです。43GBのQ4_K_MモデルをGPUに載せ切るには、約48GBを目安にしてください。',
          },
          {
            q: 'MacBookで70Bモデルを動かせますか？',
            a: 'ユニファイドメモリが十分なら可能です。Q4_K_Mには64GB以上を目安にしてください。32GBのMacBookには収まりません。ノート型でなくてよければ、M5 Pro Mac miniは64GBに構成できます。ただし$1,699の基本モデルは24GBです。Fstoppersは2026年9月21日、18コア・1TB・64GBの構成を$3,199と掲載しました。Mac Studio M5 Maxは36GBで$2,499からのため、こちらもメモリの増設構成が必要です。小さなモデルの選択肢は<a href="/ja/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">RAM容量ガイド</a>をご覧ください。',
          },
          {
            q: '70Bモデルをローカルで動かす安価な方法はありますか？',
            a: '条件付きで可能です。中古Tesla P40 2枚はカード代が約$500–640ですが、旧世代で大幅に遅くなります。PCにすでに64GBのRAMがあれば、CPU実行に購入は不要です。Q2_Kならダウンロードは26GBに小さくなりますが、品質低下は大きく、24GBカード1枚にはやはり収まりません。<a href="/ja/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">70Bの選択肢の価格比較</a>をご覧ください。',
          },
          {
            q: '70BのVRAM必要量は13Bと比べてどうですか？',
            a: 'Q4の13Bモデルに必要なVRAMは約9GBですが、70BのQ4_K_Mはダウンロードだけで43GBです。小さいモデルで足りるかは用途によるため、ご自身のプロンプトで試してください。<a href="/ja/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">モデルサイズ別のVRAM要件</a>をご覧ください。',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: '関連ガイド',
      items: [
        '[ローカルLLMに必要なVRAM量は？](/ja/prompt-bites/how-much-vram-for-local-llm) — 全モデルサイズのVRAM早見表',
        '[70Bモデルをローカルで安く動かす方法](/ja/prompt-bites/cheapest-way-to-run-70b-model-locally) — 選択肢ごとの価格と速度',
        '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide) — 70B対応構成の完全ガイド',
        '[ベストローカルLLM 2026](/ja/local-llms/best-local-llms-2026) — ハードウェアコストに見合う70Bモデル',
      ],
    },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-zh.webp',
    title: '运行70B模型需要多少显存？',
    seoTitle: '70B模型VRAM：3种方案 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '70B模型的Q4_K_M版本下载体积为43GB，建议按约48GB规划。对比两张二手RTX 3090（仅显卡$3,000–3,450）、64GB以上的Mac与云端GPU。',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.3 70B的Q4_K_M版本下载体积为43GB；上下文需要额外内存，建议按约48GB规划',
          '常见的两种本地方案：两张24GB显卡，或统一内存64GB及以上的Mac',
          '使用量少时租用比购买便宜：RunPod列出的48GB GPU为每小时$0.33起（2026年11月28日）',
        ],
      },
      body1: {
        title: '运行70B模型的硬件选项',
        content: [
          '<strong>Llama 3.3 70B的Q4_K_M版本下载体积为43GB（<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>），约为单张RTX 4090或RTX 3090的24GB的1.8倍。</strong> 因此单张24GB显卡装不下。两张24GB显卡、统一内存足够的Mac或租用的GPU可以装下。',
          '统一内存64GB及以上的Mac是更简单的单机方案，因为模型无需拆分到两张卡。两张RTX 3090需要空间、供电和散热都能容纳两张卡的台式机。下表速度来自不同来源：双RTX 3090的区间来自2026年10月19日的<a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">ComputingForGeeks测试</a>（默认按层拆分19.5 tok/s，张量拆分31.9），Mac数值是本站<a href="/zh/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">70B硬件指南</a>的估算，卸载区间综合了<a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>和该指南的估算。PromptQuorum没有实测这些配置。',
        ],
        columns: ['硬件', '显存总量', '速度'],
        rows: [
          { '硬件': '双RTX 3090', '显存总量': '48 GB', '速度': '19.5–31.9 tok/s（测试）' },
          { '硬件': 'RTX 3090 + CPU卸载', '显存总量': '24 GB + 32 GB RAM', '速度': '约1–5 tok/s（估算）' },
          { '硬件': 'Mac mini M5 Pro 64GB', '显存总量': '64 GB统一内存', '速度': '约4–5 tok/s（估算）' },
          { '硬件': 'Apple M5 Max 128 GB', '显存总量': '128 GB统一内存', '速度': '约9–11 tok/s（估算）' },
          { '硬件': '云端GPU 48GB', '显存总量': '48 GB', '速度': '未比较' },
        ],
      },
      body2: {
        title: '何时云端比本地更合理',
        content: [
          '2026年11月28日，<a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a>列出48GB的RTX A6000在Community Cloud每小时$0.33、Secure Cloud $0.69，48GB的A40分别为$0.35和$0.59。两张二手RTX 3090仅显卡就要$3,000–3,450（<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">InsiderLLM价格追踪页</a>，数据日期2026年11月23日），相当于按每小时$0.69–0.33租用A6000约4,300–10,500小时。该比较未计入主机其他部件、电费、存储费、转售价值和速度差异。单张RTX 3090的同类问题见<a href="/zh/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">单卡买还是租的分析</a>。',
          '按每周5小时计算，即使4,300小时也需要16年以上，因此使用量少时租用比买两张卡便宜。当数据必须留在自有硬件上，或使用量大且持续时，本地70B才更有意义。适合消费级GPU的较小模型请参阅<a href="/zh/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">显存层级指南</a>。',
          '70B部署策略的完整分析，请参阅<a href="/zh/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">如何用24 GB显存运行70B模型</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于70B模型显存的常见问题',
        faqs: [
          {
            q: '单张RTX 3090能运行70B模型吗？',
            a: '部分可以。单张RTX 3090（24GB）可借助CPU卸载运行70B模型，但公开估算仅约1–5 tok/s，对交互使用偏慢。要让43GB的Q4_K_M模型留在GPU上，建议按约48GB规划。',
          },
          {
            q: '能在MacBook上运行70B模型吗？',
            a: '可以，前提是统一内存足够：Q4_K_M建议64GB及以上。32GB的MacBook装不下该模型。如果不需要笔记本，M5 Pro版Mac mini可配置到64GB，但$1,699的基础款只有24GB：Fstoppers在2026年9月21日列出18核、1TB、64GB配置为$3,199。Mac Studio M5 Max起价$2,499、内存36GB，同样需要升级内存。较小模型的方案请参阅<a href="/zh/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">RAM容量指南</a>。',
          },
          {
            q: '有没有更便宜的方式在本地运行70B模型？',
            a: '有，但需要取舍。两张二手Tesla P40显卡约$500–640，但型号老、速度慢得多；如果电脑已有64GB内存，用CPU运行无需购买。Q2_K可把下载体积降到26GB，但质量损失更大，而且单张24GB显卡仍然装不下。请参阅<a href="/zh/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">本站70B方案价格对比</a>。',
          },
          {
            q: '70B与13B的显存需求对比如何？',
            a: 'Q4量化的13B模型约需9GB显存，而仅70B Q4_K_M的下载体积就有43GB。较小模型是否够用取决于您的任务，请用自己的提示词测试。请参阅<a href="/zh/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">按模型大小划分的显存需求</a>。',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: '相关指南',
      items: [
        '[本地LLM需要多少VRAM？](/zh/prompt-bites/how-much-vram-for-local-llm) — 所有模型大小的VRAM快速参考表',
        '[本地运行70B模型的省钱方案](/zh/prompt-bites/cheapest-way-to-run-70b-model-locally) — 各方案的价格与速度对比',
        '[本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide) — 70B级别配置完整指南',
        '[2026年最佳本地LLMs](/zh/local-llms/best-local-llms-2026) — 哪些70B模型值得硬件成本',
      ],
    },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-pt.webp',
    title: 'Quanta VRAM um modelo 70B precisa?',
    seoTitle: 'VRAM para 70B: 3 opções 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Um 70B em Q4_K_M é um download de 43 GB: planeje cerca de 48 GB. Duas RTX 3090 usadas ($3.000–3.450, só placas), um Mac de 64 GB+ ou a nuvem.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Quanta VRAM um modelo 70B precisa?',
        answer: 'Planeje cerca de 48 GB. O download Q4_K_M do Llama 3.3 70B tem 43 GB, e o contexto precisa de memória adicional. Opções: duas GPUs de 24 GB, como a RTX 3090, um Mac com 64 GB ou mais de memória unificada ou uma GPU alugada na nuvem.',
        bullets: [
          'Llama 3.3 70B Q4_K_M: download de 43 GB, mais memória para o contexto',
          'Duas RTX 3090 usadas (48 GB): $3.000–3.450 só nas placas',
          'Mac com 64 GB ou mais: uma única máquina, sem divisão entre duas placas',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Llama 3.3 70B em Q4_K_M é um download de 43 GB; o contexto precisa de memória adicional, então planeje cerca de 48 GB',
          'Duas opções locais comuns: duas GPUs de 24 GB ou um Mac com 64 GB ou mais de memória unificada',
          'Para uso leve, alugar custa menos que comprar: a RunPod listava GPUs de 48 GB a partir de $0,33 por hora (28 de novembro de 2026)',
        ],
      },
      body1: {
        title: 'Opções de hardware para executar um modelo 70B',
        content: [
          '<strong>O Llama 3.3 70B em Q4_K_M é um download de 43 GB (<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>), cerca de 1.8 vez os 24 GB de uma RTX 4090 ou RTX 3090.</strong> Por isso uma única placa de 24 GB não o comporta. Duas placas de 24 GB, um Mac com memória unificada suficiente ou uma GPU alugada conseguem.',
          'Um Mac com 64 GB ou mais de memória unificada é o caminho de máquina única mais simples, porque o modelo não é dividido entre duas placas. Duas RTX 3090 exigem um desktop com espaço, energia e refrigeração para ambas. As velocidades abaixo vêm de fontes diferentes: a faixa com duas RTX 3090 é um <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">teste do ComputingForGeeks</a> de 19 de outubro de 2026 (19.5 tok/s com a divisão por camadas padrão e 31.9 com a divisão por tensores), os números de Mac são estimativas do nosso <a href="/pt/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">guia de hardware para 70B</a>, e a faixa com offload reúne estimativas do <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a> e desse guia. A PromptQuorum não mediu essas configurações.',
        ],
        columns: ['Hardware', 'VRAM total', 'Velocidade'],
        rows: [
          { 'Hardware': 'Duas RTX 3090', 'VRAM total': '48 GB', 'Velocidade': '19.5–31.9 tok/s (teste)' },
          { 'Hardware': 'RTX 3090 + offload CPU', 'VRAM total': '24 GB + 32 GB RAM', 'Velocidade': '~1–5 tok/s (estimativas)' },
          { 'Hardware': 'Mac mini M5 Pro 64 GB', 'VRAM total': '64 GB unificada', 'Velocidade': '~4–5 tok/s (estimativa)' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'VRAM total': '128 GB unificada', 'Velocidade': '~9–11 tok/s (estimativa)' },
          { 'Hardware': 'GPU na nuvem, 48 GB', 'VRAM total': '48 GB', 'Velocidade': 'Não comparada' },
        ],
      },
      body2: {
        title: 'Quando a nuvem faz mais sentido que o local',
        content: [
          'Em 28 de novembro de 2026, a <a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a> listava a RTX A6000 de 48 GB por $0,33 por hora no Community Cloud e $0,69 no Secure Cloud, e a A40 de 48 GB por $0,35 e $0,59. Duas RTX 3090 usadas custam $3.000–3.450 só em placas (<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">monitor de preços do InsiderLLM</a>, datado de 23 de novembro de 2026). Isso equivale a cerca de 4.300–10.500 horas de aluguel da A6000 a $0,69–0,33 por hora. A comparação ignora o restante do PC, energia, armazenamento, revenda e diferenças de velocidade. Para uma única RTX 3090, veja <a href="/pt/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">a conta de comprar ou alugar</a>.',
          'Com 5 horas por semana, mesmo 4.300 horas levam mais de 16 anos, então para uso leve alugar custa menos que comprar duas placas. Um 70B local faz sentido quando os dados precisam ficar no seu hardware ou o uso é intenso e contínuo. Para modelos menores que cabem em GPUs de consumo, veja <a href="/pt/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">o guia de níveis de VRAM</a>.',
          'Para uma análise completa das estratégias de implantação 70B, veja <a href="/pt/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">como executar modelos 70B com 24 GB de VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre VRAM para modelos 70B',
        faqs: [
          {
            q: 'Um único RTX 3090 pode executar um modelo 70B?',
            a: 'Em parte. Uma única RTX 3090 (24 GB) consegue rodar um 70B com offload para a CPU, mas as estimativas publicadas ficam em apenas 1–5 tok/s, lento para uso interativo. Para manter nas GPUs o modelo Q4_K_M de 43 GB, planeje cerca de 48 GB.',
          },
          {
            q: 'Posso executar um modelo 70B em um MacBook?',
            a: 'Sim, se tiver memória unificada suficiente: planeje 64 GB ou mais para Q4_K_M. Um MacBook de 32 GB não comporta o modelo. Se não precisar de um notebook, o Mac mini M5 Pro pode ser configurado com 64 GB, mas o modelo base de $1.699 tem só 24 GB: em 21 de setembro de 2026, o Fstoppers listou uma configuração de 18 núcleos, 1 TB e 64 GB por $3.199. O Mac Studio M5 Max parte de $2.499 com 36 GB, então também precisa de upgrade de memória. Para modelos menores, veja <a href="/pt/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">o guia de dimensionamento de RAM</a>.',
          },
          {
            q: 'Existe uma forma mais barata de executar modelos 70B localmente?',
            a: 'Sim, com concessões. Duas Tesla P40 usadas custam cerca de $500–640 pelas placas, mas são antigas e bem mais lentas, e rodar na CPU não exige compra se o seu PC já tem 64 GB de RAM. O Q2_K reduz o download para 26 GB, mas perde mais qualidade e ainda não cabe em uma placa de 24 GB. Veja <a href="/pt/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">nossa comparação de preços das opções para 70B</a>.',
          },
          {
            q: 'Como a VRAM do 70B se compara a um modelo 13B?',
            a: 'Um modelo 13B em Q4 precisa de cerca de 9 GB de VRAM, enquanto só o download do 70B Q4_K_M tem 43 GB. Se o modelo menor basta depende da sua tarefa, então teste com seus próprios prompts. Veja <a href="/pt/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">os requisitos de VRAM por tamanho de modelo</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Guias Relacionados',
      items: [
        '[Quanto VRAM Você Precisa para um LLM Local?](/pt/prompt-bites/how-much-vram-for-local-llm) — tabela de VRAM para todos os tamanhos de modelo',
        '[As formas mais baratas de rodar um 70B localmente](/pt/prompt-bites/cheapest-way-to-run-70b-model-locally) — preço e velocidade de cada opção',
        '[Guia de Hardware LLM Local](/pt/local-llms/local-llm-hardware-guide) — guia completo para configurações capazes de 70B',
        '[Melhores LLMs Locais 2026](/pt/local-llms/best-local-llms-2026) — quais modelos 70B valem o custo do hardware',
      ],
    },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-es.webp',
    title: '¿Cuánta VRAM necesita un modelo 70B?',
    seoTitle: 'VRAM para 70B: 3 opciones 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Un 70B en Q4_K_M es una descarga de 43 GB: cuenta con unos 48 GB. Dos RTX 3090 usadas ($3.000–3.450, solo tarjetas), un Mac de 64 GB+ o la nube.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Cuánta VRAM necesita un modelo 70B?',
        answer: 'Cuenta con unos 48 GB. La descarga Q4_K_M de Llama 3.3 70B ocupa 43 GB y el contexto necesita memoria adicional. Opciones: dos GPU de 24 GB como la RTX 3090, un Mac con 64 GB o más de memoria unificada o una GPU alquilada en la nube.',
        bullets: [
          'Llama 3.3 70B Q4_K_M: descarga de 43 GB, más memoria para el contexto',
          'Dos RTX 3090 usadas (48 GB): $3.000–3.450 solo en tarjetas',
          'Mac con 64 GB o más: un solo equipo, sin repartir entre dos tarjetas',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.3 70B en Q4_K_M es una descarga de 43 GB; el contexto necesita memoria adicional, así que cuenta con unos 48 GB',
          'Dos opciones locales habituales: dos GPU de 24 GB o un Mac con 64 GB o más de memoria unificada',
          'Para un uso ligero, alquilar sale más barato que comprar: RunPod listaba GPU de 48 GB desde $0,33 por hora (28 de noviembre de 2026)',
        ],
      },
      body1: {
        title: 'Opciones de hardware para ejecutar un modelo 70B',
        content: [
          '<strong>Llama 3.3 70B en Q4_K_M es una descarga de 43 GB (<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>), unas 1.8 veces los 24 GB de una RTX 4090 o una RTX 3090.</strong> Por eso una sola tarjeta de 24 GB no puede contenerlo. Dos tarjetas de 24 GB, un Mac con suficiente memoria unificada o una GPU alquilada sí pueden.',
          'Un Mac con 64 GB o más de memoria unificada es la vía de un solo equipo más sencilla, porque el modelo no se reparte entre dos tarjetas. Dos RTX 3090 necesitan un PC de sobremesa con espacio, alimentación y refrigeración para ambas. Las velocidades de abajo proceden de fuentes distintas: el rango con dos RTX 3090 es una <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">prueba de ComputingForGeeks</a> del 19 de octubre de 2026 (19.5 tok/s con el reparto por capas predeterminado y 31.9 con el reparto por tensores), las cifras de Mac son estimaciones de nuestra <a href="/es/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">guía de hardware para 70B</a> y el rango con offload recoge estimaciones de <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a> y de esa guía. PromptQuorum no ha medido estos equipos.',
        ],
        columns: ['Hardware', 'VRAM total', 'Velocidad'],
        rows: [
          { 'Hardware': 'Dos RTX 3090', 'VRAM total': '48 GB', 'Velocidad': '19.5–31.9 tok/s (prueba)' },
          { 'Hardware': 'RTX 3090 + offload CPU', 'VRAM total': '24 GB + 32 GB RAM', 'Velocidad': '~1–5 tok/s (estimaciones)' },
          { 'Hardware': 'Mac mini M5 Pro 64 GB', 'VRAM total': '64 GB unificada', 'Velocidad': '~4–5 tok/s (estimación)' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'VRAM total': '128 GB unificada', 'Velocidad': '~9–11 tok/s (estimación)' },
          { 'Hardware': 'GPU en la nube, 48 GB', 'VRAM total': '48 GB', 'Velocidad': 'No comparada' },
        ],
      },
      body2: {
        title: 'Cuándo la nube tiene más sentido que lo local',
        content: [
          'El 28 de noviembre de 2026, <a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a> listaba la RTX A6000 de 48 GB a $0,33 por hora en Community Cloud y $0,69 en Secure Cloud, y la A40 de 48 GB a $0,35 y $0,59. Dos RTX 3090 usadas cuestan $3.000–3.450 solo en tarjetas (<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">seguimiento de precios de InsiderLLM</a>, con fecha 23 de noviembre de 2026). Eso equivale a unas 4.300–10.500 horas de alquiler de la A6000 a $0,69–0,33 por hora. La comparación no incluye el resto del PC, la electricidad, el almacenamiento, la reventa ni las diferencias de velocidad. Para una sola RTX 3090, consulta <a href="/es/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">el cálculo de comprar o alquilar</a>.',
          'A 5 horas por semana, incluso 4.300 horas suponen más de 16 años, así que para un uso ligero alquilar sale más barato que comprar dos tarjetas. Un 70B local tiene sentido cuando los datos deben quedarse en tu hardware o el uso es intenso y sostenido. Para modelos más pequeños que caben en GPU de consumo, consulta <a href="/es/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">la guía de niveles de VRAM</a>.',
          'Para un desglose completo de estrategias de despliegue 70B, consulta <a href="/es/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">cómo ejecutar modelos 70B con 24 GB de VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la VRAM de modelos 70B',
        faqs: [
          {
            q: '¿Puede una sola RTX 3090 ejecutar un modelo 70B?',
            a: 'En parte. Una sola RTX 3090 (24 GB) puede ejecutar un 70B con offload a la CPU, pero las estimaciones publicadas rondan solo 1–5 tok/s, lento para uso interactivo. Para mantener en GPU el modelo Q4_K_M de 43 GB, cuenta con unos 48 GB.',
          },
          {
            q: '¿Puedo ejecutar un modelo 70B en un MacBook?',
            a: 'Sí, si tiene suficiente memoria unificada: cuenta con 64 GB o más para Q4_K_M. Un MacBook de 32 GB no puede contener el modelo. Si no necesitas un portátil, el Mac mini M5 Pro se puede configurar con 64 GB, pero el modelo base de $1.699 solo tiene 24 GB: Fstoppers listó el 21 de septiembre de 2026 una configuración de 18 núcleos, 1 TB y 64 GB por $3.199. El Mac Studio M5 Max parte de $2.499 con 36 GB, así que también necesita ampliar memoria. Para modelos más pequeños, consulta <a href="/es/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">la guía de dimensionamiento de RAM</a>.',
          },
          {
            q: '¿Hay alguna forma más barata de ejecutar modelos 70B localmente?',
            a: 'Sí, con concesiones. Dos Tesla P40 usadas cuestan unos $500–640 por las tarjetas, pero son antiguas y mucho más lentas, y usar la CPU no exige comprar nada si tu PC ya tiene 64 GB de RAM. Q2_K reduce la descarga a 26 GB, pero pierde más calidad y sigue sin caber en una tarjeta de 24 GB. Consulta <a href="/es/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">nuestra comparativa de precios de opciones para 70B</a>.',
          },
          {
            q: '¿Cómo se compara la VRAM de un 70B con un modelo 13B?',
            a: 'Un modelo 13B en Q4 necesita unos 9 GB de VRAM, mientras que solo la descarga del 70B Q4_K_M ocupa 43 GB. Que el modelo pequeño baste depende de tu tarea, así que pruébalo con tus propios prompts. Consulta <a href="/es/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">los requisitos de VRAM por tamaño de modelo</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Guías Relacionadas',
      items: [
        '[¿Cuánta VRAM Necesitas para un LLM Local?](/es/prompt-bites/how-much-vram-for-local-llm) — tabla de VRAM para todos los tamaños de modelo',
        '[Las formas más baratas de ejecutar un 70B en local](/es/prompt-bites/cheapest-way-to-run-70b-model-locally) — precio y velocidad de cada opción',
        '[Guía de Hardware LLM Local](/es/local-llms/local-llm-hardware-guide) — guía completa para configuraciones capaces de 70B',
        '[Mejores LLMs Locales 2026](/es/local-llms/best-local-llms-2026) — qué modelos 70B valen el costo del hardware',
      ],
    },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-ar.webp',
    title: 'كم من ⁨VRAM⁩ يحتاج نموذج ⁨70B⁩؟',
    seoTitle: '⁨VRAM⁩ لنموذج ⁨70B⁩: ⁨3⁩ خيارات ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: 'نموذج 70B بصيغة Q4_K_M تنزيل بحجم 43 جيجابايت، فخطّط لنحو 48. قارن بين بطاقتي RTX 3090 مستعملتين ($3,000–3,450) وMac بذاكرة 64+ والسحابة.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'كم من VRAM يحتاج نموذج 70B؟',
        answer: 'خطّط لنحو 48 جيجابايت. حجم تنزيل Llama 3.3 70B بصيغة Q4_K_M هو 43 جيجابايت، ويحتاج السياق إلى ذاكرة إضافية. من الخيارات بطاقتان بسعة 24 جيجابايت مثل RTX 3090، أو جهاز Mac بذاكرة موحدة 64 جيجابايت فأكثر، أو GPU سحابي مستأجر.',
        bullets: [
          'Llama 3.3 70B Q4_K_M: تنزيل بحجم 43 جيجابايت إضافة إلى ذاكرة السياق',
          'بطاقتا RTX 3090 مستعملتان (48 جيجابايت): $3,000–3,450 للبطاقتين وحدهما',
          'Mac بذاكرة 64 جيجابايت فأكثر: جهاز واحد دون تقسيم على بطاقتين',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.3 70B بصيغة Q4_K_M تنزيل بحجم 43 جيجابايت؛ ويحتاج السياق إلى ذاكرة إضافية، فخطّط لنحو 48 جيجابايت',
          'خياران محليان شائعان: بطاقتان بسعة 24 جيجابايت، أو Mac بذاكرة موحدة 64 جيجابايت فأكثر',
          'في الاستخدام الخفيف يكون الاستئجار أرخص من الشراء: أدرجت RunPod بطاقات بسعة 48 جيجابايت ابتداءً من $0.33 في الساعة (28 نوفمبر 2026)',
        ],
      },
      body1: {
        title: 'خيارات الأجهزة لتشغيل نموذج 70B',
        content: [
          '<strong>Llama 3.3 70B بصيغة Q4_K_M تنزيل بحجم 43 جيجابايت (<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>)، أي نحو 1.8 ضعف سعة 24 جيجابايت في بطاقة RTX 4090 أو RTX 3090 واحدة.</strong> لذلك لا تستوعبه بطاقة واحدة بسعة 24 جيجابايت. أما بطاقتان بسعة 24، أو Mac بذاكرة موحدة كافية، أو GPU مستأجر، فتستطيع ذلك.',
          'جهاز Mac بذاكرة موحدة 64 جيجابايت فأكثر هو الطريق الأبسط بجهاز واحد، لأن النموذج لا يُقسَّم على بطاقتين. وتحتاج بطاقتا RTX 3090 إلى حاسوب مكتبي يتسع لهما ويوفر لهما الطاقة والتبريد. تأتي السرعات أدناه من مصادر مختلفة: نطاق البطاقتين من <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">اختبار ComputingForGeeks</a> بتاريخ 19 أكتوبر 2026 (19.5 رمز/ثانية بالتقسيم الافتراضي على الطبقات، و31.9 بتقسيم الموترات)، وأرقام Mac تقديرات من <a href="/ar/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">دليلنا لعتاد 70B</a>، ونطاق التفريغ يجمع تقديرات <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a> وذلك الدليل. لم تقم PromptQuorum بقياس هذه الإعدادات.',
        ],
        columns: ['الجهاز', 'إجمالي VRAM', 'السرعة'],
        rows: [
          { 'الجهاز': 'RTX 3090 مزدوجة', 'إجمالي VRAM': '48 GB', 'السرعة': '19.5–31.9 tok/s (اختبار)' },
          { 'الجهاز': 'RTX 3090 + تفريغ CPU', 'إجمالي VRAM': '24 GB + 32 GB RAM', 'السرعة': '~1–5 tok/s (تقديرات)' },
          { 'الجهاز': 'Mac mini M5 Pro 64 GB', 'إجمالي VRAM': '64 GB موحدة', 'السرعة': '~4–5 tok/s (تقدير)' },
          { 'الجهاز': 'Apple M5 Max 128 GB', 'إجمالي VRAM': '128 GB موحدة', 'السرعة': '~9–11 tok/s (تقدير)' },
          { 'الجهاز': 'GPU سحابي 48 GB', 'إجمالي VRAM': '48 GB', 'السرعة': 'لم تُقارن' },
        ],
      },
      body2: {
        title: 'متى تكون السحابة أجدى من المحلي',
        content: [
          'في 28 نوفمبر 2026 أدرجت <a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a> بطاقة RTX A6000 بسعة 48 جيجابايت بسعر $0.33 في الساعة على Community Cloud و$0.69 على Secure Cloud، وبطاقة A40 بسعة 48 بسعر $0.35 و$0.59. وتكلّف بطاقتا RTX 3090 المستعملتان $3,000–3,450 للبطاقتين وحدهما (<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">متتبّع الأسعار لدى InsiderLLM</a>، بتاريخ 23 نوفمبر 2026). ويعادل ذلك نحو 4,300–10,500 ساعة من استئجار A6000 بسعر $0.69–0.33 في الساعة. ولا تشمل المقارنة بقية الحاسوب ولا الكهرباء ولا رسوم التخزين ولا قيمة إعادة البيع ولا فروق السرعة. وللسؤال نفسه عن بطاقة واحدة، راجع <a href="/ar/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">حساب الشراء مقابل الاستئجار</a>.',
          'بمعدل 5 ساعات أسبوعيًا، تستغرق حتى 4,300 ساعة أكثر من 16 عامًا، لذا يكون الاستئجار في الاستخدام الخفيف أرخص من شراء بطاقتين. ويكون تشغيل 70B محليًا منطقيًا حين يجب أن تبقى البيانات على عتادك، أو حين يكون الاستخدام كثيفًا ومستمرًا. وللنماذج الأصغر التي تتسع لها بطاقات المستهلك، راجع <a href="/ar/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">دليل مستويات VRAM</a>.',
          'للاطلاع على تفصيل كامل لاستراتيجيات تشغيل 70B، راجع <a href="/ar/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">كيفية تشغيل نماذج 70B على 24 GB VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول VRAM لنماذج 70B',
        faqs: [
          {
            q: 'هل يمكن لـ RTX 3090 منفردة تشغيل نموذج 70B؟',
            a: 'جزئيًا. تستطيع بطاقة RTX 3090 واحدة (24 جيجابايت) تشغيل نموذج 70B مع التفريغ إلى المعالج، لكن التقديرات المنشورة لا تتجاوز نحو 1–5 رمز/ثانية، وهو بطيء للاستخدام التفاعلي. ولإبقاء نموذج Q4_K_M البالغ 43 جيجابايت على البطاقات، خطّط لنحو 48 جيجابايت.',
          },
          {
            q: 'هل يمكنني تشغيل نموذج 70B على MacBook؟',
            a: 'نعم، إذا كانت ذاكرته الموحدة كافية: خطّط لـ64 جيجابايت فأكثر لصيغة Q4_K_M. ولا يتسع MacBook بذاكرة 32 جيجابايت للنموذج. وإذا لم تكن بحاجة إلى حاسوب محمول، فيمكن تهيئة Mac mini M5 Pro بذاكرة 64 جيجابايت، لكن الطراز الأساسي بسعر $1,699 لا يحمل سوى 24: أدرج Fstoppers في 21 سبتمبر 2026 تهيئة بـ18 نواة و1 تيرابايت و64 جيجابايت بسعر $3,199. ويبدأ Mac Studio M5 Max من $2,499 بذاكرة 36 جيجابايت، فيحتاج هو أيضًا إلى ترقية الذاكرة. للنماذج الأصغر راجع <a href="/ar/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">دليل تحديد حجم RAM</a>.',
          },
          {
            q: 'هل توجد طريقة أرخص لتشغيل نماذج 70B محليًا؟',
            a: 'نعم، مع تنازلات. تكلّف بطاقتا Tesla P40 المستعملتان نحو $500–640، لكنهما قديمتان وأبطأ بكثير، والتشغيل على المعالج لا يتطلب شراءً إذا كان في حاسوبك 64 جيجابايت من RAM. وتقلّص صيغة Q2_K حجم التنزيل إلى 26 جيجابايت، لكنها تفقد جودة أكبر ولا تزال لا تتسع على بطاقة واحدة بسعة 24. راجع <a href="/ar/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">مقارنتنا لأسعار خيارات 70B</a>.',
          },
          {
            q: 'كيف تُقارَن VRAM لنموذج 70B بنموذج 13B؟',
            a: 'يحتاج نموذج 13B بصيغة Q4 إلى نحو 9 جيجابايت من VRAM، بينما يبلغ تنزيل 70B بصيغة Q4_K_M وحده 43 جيجابايت. وكفاية النموذج الأصغر تتوقف على مهمتك، فاختبره بمُدخلاتك. راجع <a href="/ar/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">متطلبات VRAM حسب حجم النموذج</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'أدلة ذات صلة',
      items: [
        '[كم تحتاج من VRAM لتشغيل نموذج LLM محلي؟](/ar/prompt-bites/how-much-vram-for-local-llm) — جدول VRAM لجميع أحجام النماذج',
        '[أرخص الطرق لتشغيل نموذج 70B محليًا](/ar/prompt-bites/cheapest-way-to-run-70b-model-locally) — سعر كل خيار وسرعته',
        '[دليل أجهزة LLM المحلية](/ar/local-llms/local-llm-hardware-guide) — الدليل الكامل لتكوينات قادرة على 70B',
        '[أفضل LLMs المحلية 2026](/ar/local-llms/best-local-llms-2026) — أي نماذج 70B تستحق تكلفة الأجهزة',
      ],
    },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-ko.webp',
    title: '70B 모델에 VRAM이 얼마나 필요합니까?',
    seoTitle: '70B VRAM: 3가지 실행 옵션 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '70B 모델의 Q4_K_M 다운로드는 43GB이므로 약 48GB가 필요합니다. 중고 RTX 3090 2장(카드만 $3,000–3,450), 64GB 이상 Mac, 클라우드를 비교합니다.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ko: {
        question: '70B 모델에 VRAM이 얼마나 필요합니까?',
        answer: '약 48GB를 기준으로 하십시오. Llama 3.3 70B의 Q4_K_M 다운로드는 43GB이며 컨텍스트에는 메모리가 추가로 필요합니다. RTX 3090 같은 24GB GPU 2장, 64GB 이상 통합 메모리의 Mac, 대여 클라우드 GPU가 선택지입니다.',
        bullets: [
          'Llama 3.3 70B Q4_K_M: 43GB 다운로드와 컨텍스트용 메모리',
          '중고 RTX 3090 2장(48GB): 카드만 $3,000–3,450',
          '64GB 이상 Mac: 한 대로 해결, 두 카드로 분할할 필요 없음',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.3 70B의 Q4_K_M 다운로드는 43GB입니다. 컨텍스트에는 메모리가 추가로 필요하므로 약 48GB를 기준으로 하십시오',
          '대표적인 로컬 방법은 24GB GPU 2장 또는 64GB 이상 통합 메모리의 Mac입니다',
          '사용량이 적으면 구매보다 대여가 저렴합니다. RunPod에는 48GB GPU가 시간당 $0.33부터 등록되어 있었습니다(2026년 11월 28일)',
        ],
      },
      body1: {
        title: '70B 모델 실행을 위한 하드웨어 옵션',
        content: [
          '<strong>Llama 3.3 70B의 Q4_K_M 다운로드는 43GB(<a href="https://ollama.com/library/llama3.3/tags" class="text-primary hover:underline">Ollama</a>)로, RTX 4090이나 RTX 3090 한 장의 24GB의 약 1.8배입니다.</strong> 따라서 24GB 카드 한 장에는 담을 수 없습니다. 24GB 카드 2장, 통합 메모리가 충분한 Mac, 대여 GPU라면 가능합니다.',
          '64GB 이상 통합 메모리를 갖춘 Mac은 모델을 두 카드로 나누지 않으므로 한 대로 끝나는 더 간단한 방법입니다. RTX 3090 2장은 두 장을 위한 공간, 전원, 냉각을 갖춘 데스크톱이 필요합니다. 아래 속도는 출처가 서로 다릅니다. RTX 3090 2장 범위는 2026년 10월 19일 <a href="https://computingforgeeks.com/build-dual-rtx-3090-llm/" class="text-primary hover:underline">ComputingForGeeks 테스트</a>(기본 레이어 분할 19.5 tok/s, 텐서 분할 31.9)이고, Mac 수치는 당사 <a href="/ko/local-llms/70b-models-consumer-hardware" class="text-primary hover:underline">70B 하드웨어 가이드</a>의 추정치이며, 오프로드 범위는 <a href="https://insiderllm.com/guides/running-70b-models-locally-vram-guide/" class="text-primary hover:underline">InsiderLLM</a>과 해당 가이드의 추정치를 합친 것입니다. PromptQuorum은 이 구성들을 직접 측정하지 않았습니다.',
        ],
        columns: ['하드웨어', 'VRAM 합계', '속도'],
        rows: [
          { '하드웨어': '듀얼 RTX 3090', 'VRAM 합계': '48 GB', '속도': '19.5–31.9 tok/s (테스트)' },
          { '하드웨어': 'RTX 3090 + CPU 오프로드', 'VRAM 합계': '24 GB + 32 GB RAM', '속도': '약 1–5 tok/s (추정치)' },
          { '하드웨어': 'Mac mini M5 Pro 64GB', 'VRAM 합계': '64 GB 통합', '속도': '약 4–5 tok/s (추정)' },
          { '하드웨어': 'Apple M5 Max 128 GB', 'VRAM 합계': '128 GB 통합', '속도': '약 9–11 tok/s (추정)' },
          { '하드웨어': '클라우드 GPU 48GB', 'VRAM 합계': '48 GB', '속도': '비교하지 않음' },
        ],
      },
      body2: {
        title: '클라우드가 로컬보다 유리한 경우',
        content: [
          '2026년 11월 28일 <a href="https://www.runpod.io/pricing" class="text-primary hover:underline">RunPod</a>에는 48GB RTX A6000이 Community Cloud 시간당 $0.33, Secure Cloud $0.69로, 48GB A40이 각각 $0.35와 $0.59로 등록되어 있었습니다. 중고 RTX 3090 2장은 카드만 $3,000–3,450입니다(<a href="https://insiderllm.com/guides/nvidia-gpu-prices-rising/" class="text-primary hover:underline">InsiderLLM 가격 추적 페이지</a>, 2026년 11월 23일 기준). 이는 시간당 $0.69–0.33의 A6000 대여 약 4,300–10,500시간에 해당합니다. 이 비교에는 PC의 나머지 부품, 전기료, 저장 요금, 재판매 가치, 속도 차이가 빠져 있습니다. RTX 3090 한 장의 경우는 <a href="/ko/power-local-llm/rtx-3090-local-llm-buy-or-rent" class="text-primary hover:underline">구매와 대여 비교 분석</a>을 참고하십시오.',
          '주 5시간 사용이라면 4,300시간도 16년 이상 걸리므로, 사용량이 적을 때는 카드 2장을 사는 것보다 대여가 저렴합니다. 데이터가 자체 하드웨어에 남아야 하거나 사용량이 많고 지속적이라면 로컬 70B가 의미가 있습니다. 소비자용 GPU에 들어가는 더 작은 모델은 <a href="/ko/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM 등급 가이드</a>를 참고하십시오.',
          '70B 배포 전략의 전체 분석은 <a href="/ko/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">24GB VRAM으로 70B 모델을 실행하는 방법</a>을 참고하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '70B 모델의 VRAM에 관한 빠른 답변',
        faqs: [
          {
            q: '단일 RTX 3090으로 70B 모델을 실행할 수 있습니까?',
            a: '부분적으로 가능합니다. RTX 3090(24GB) 한 장도 CPU 오프로드로 70B 모델을 실행할 수 있지만, 공개된 추정치는 약 1–5 tok/s에 그쳐 대화형 사용에는 느립니다. 43GB의 Q4_K_M 모델을 GPU에 유지하려면 약 48GB를 기준으로 하십시오.',
          },
          {
            q: 'MacBook에서 70B 모델을 실행할 수 있습니까?',
            a: '통합 메모리가 충분하면 가능합니다. Q4_K_M에는 64GB 이상을 권장합니다. 32GB MacBook에는 담을 수 없습니다. 노트북이 꼭 필요하지 않다면 M5 Pro Mac mini를 64GB로 구성할 수 있습니다. 다만 $1,699 기본 모델은 24GB입니다. Fstoppers는 2026년 9월 21일 18코어·1TB·64GB 구성을 $3,199로 게재했습니다. Mac Studio M5 Max는 36GB 기준 $2,499부터이므로 역시 메모리 업그레이드가 필요합니다. 더 작은 모델은 <a href="/ko/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">RAM 용량 가이드</a>를 참고하십시오.',
          },
          {
            q: '70B 모델을 로컬에서 더 저렴하게 실행하는 방법이 있습니까?',
            a: '있지만 절충이 필요합니다. 중고 Tesla P40 2장은 카드 가격이 약 $500–640이지만 구형이고 훨씬 느립니다. PC에 이미 64GB RAM이 있다면 CPU 실행에는 구매가 필요 없습니다. Q2_K는 다운로드를 26GB로 줄이지만 품질 손실이 더 크고, 24GB 카드 한 장에는 여전히 들어가지 않습니다. <a href="/ko/prompt-bites/cheapest-way-to-run-70b-model-locally" class="text-primary hover:underline">70B 선택지 가격 비교</a>를 참고하십시오.',
          },
          {
            q: '70B 모델의 VRAM은 13B 모델과 어떻게 비교됩니까?',
            a: 'Q4의 13B 모델은 약 9GB VRAM이 필요하지만, 70B Q4_K_M은 다운로드만 43GB입니다. 작은 모델로 충분한지는 작업에 따라 다르므로 직접 사용하는 프롬프트로 시험하십시오. <a href="/ko/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">모델 크기별 VRAM 요구량</a>을 참고하십시오.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: '관련 가이드',
      items: [
        '[로컬 LLM에 VRAM이 얼마나 필요한가?](/ko/prompt-bites/how-much-vram-for-local-llm) — 모든 모델 크기의 VRAM 참조 표',
        '[70B 모델을 로컬에서 저렴하게 실행하는 방법](/ko/prompt-bites/cheapest-way-to-run-70b-model-locally) — 선택지별 가격과 속도',
        '[로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide) — 70B 지원 구성을 위한 완전한 가이드',
        '[2026년 최고의 로컬 LLMs](/ko/local-llms/best-local-llms-2026) — 하드웨어 비용에 가치 있는 70B 모델',
      ],
    },
    },
  },
}
