import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-en.webp',
    title: 'Best Local LLM for Coding on AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'Best Coding LLM for Ryzen 5700X + RTX 3070 Ti (8 GB)',
    metaDescription: 'Best local coding LLMs for a Ryzen 7 5700X and RTX 3070 Ti 8 GB: Qwen3 8B (5.2 GB) for chat, Qwen2.5-Coder 7B (4.7 GB) for autocomplete.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3 8B', 'Qwen2.5-Coder 7B', 'Qwen2.5-Coder 14B', 'Qwen3-Coder 30B'],
    current_hardware_mentioned: ['AMD Ryzen 7 5700X', 'RTX 3070 Ti 8 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with an AMD 5700X and RTX 3070 Ti choosing a local coding LLM',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-local-llm-coding-12gb-vram', 'best-14b-models-coding', 'radeon-6800m-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Which LLM models for coders can I run locally on an AMD 5700X and RTX 3070 Ti?',
        answer: 'On an RTX 3070 Ti with 8 GB VRAM, run Qwen3 8B (qwen3:8b, 5.2 GB download) for coding chat and explanations, and Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4.7 GB) for editor autocomplete. Both fit entirely in VRAM. The Ryzen 7 5700X is not the bottleneck: the 8 GB of VRAM is, so 14B coding models (about 9 GB) do not fit fully on the GPU.',
        bullets: [
          'Qwen3 8B: 5.2 GB download, 40K context, best single model for coding chat on 8 GB',
          'Qwen2.5-Coder 7B: 4.7 GB download, trained for fill-in-the-middle autocomplete',
          '14B coders and Qwen3-Coder 30B need CPU offload on this card and run much slower',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3 8B (5.2 GB) is the best single coding model for an 8 GB RTX 3070 Ti; Qwen2.5-Coder 7B (4.7 GB) is the pick for editor autocomplete. Both fit fully in VRAM',
          '14B coders (qwen2.5-coder:14b is 9.0 GB, qwen3:14b is 9.3 GB) exceed 8 GB and only run with partial CPU offload, which slows generation sharply',
          'Qwen3-Coder 30B is a 19 GB mixture-of-experts download; on 8 GB VRAM most of it sits in system RAM, so treat it as a 32 GB-RAM experiment, not a daily driver',
          'The Ryzen 7 5700X is not the limit here: VRAM is. Keep context at 8K to 16K tokens and stay at Q4 or higher for code',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'The best local coding LLMs for an RTX 3070 Ti with 8 GB VRAM are Qwen3 8B (5.2 GB) for chat and Qwen2.5-Coder 7B (4.7 GB) for autocomplete.' },
          { type: 'plain-terms', text: 'Pick a model whose download is under about 6 GB so it fits in the 3070 Ti\'s 8 GB together with its context; the Ryzen 7 5700X does not limit speed.' },
        ],
      },
      body1: {
        title: 'Qwen3 8B and Qwen2.5-Coder 7B Fit an 8 GB Card',
        content: [
            '<strong>For coding on an RTX 3070 Ti (8 GB), run Qwen3 8B for chat, explanations and refactoring, and Qwen2.5-Coder 7B for inline autocomplete.</strong> Both are on Ollama at the default Q4 quantization: qwen3:8b is a 5.2 GB download with a 40K context window, qwen2.5-coder:7b is 4.7 GB with 32K. Either leaves roughly 2 to 3 GB of the 8 GB for the KV cache and your desktop.',
            'Qwen2.5-Coder is trained for fill-in-the-middle (FIM), the completion mode that editor plugins such as Continue use for tab-autocomplete. Qwen3 8B is the stronger general reasoner and has a thinking mode you can switch off with /no_think when you want faster answers. If you only want one model, start with Qwen3 8B. Download sizes and context windows are as listed on ollama.com; we have not benchmarked this exact rig, so no speed figure is claimed.',
            'For larger GPUs and the wider field of coding models, see the <a href="/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">best local LLMs for coding</a> guide.',
          ],
        columns: [
            'Model',
            'Ollama tag',
            'Download',
            'Fits 8 GB?',
            'Best for',
          ],
        rows: [
          { 'Model': 'Qwen3 8B', 'Ollama tag': 'qwen3:8b', 'Download': '5.2 GB', 'Fits 8 GB?': 'Yes, fully in VRAM', 'Best for': 'Chat, explanation, refactoring' },
          { 'Model': 'Qwen2.5-Coder 7B', 'Ollama tag': 'qwen2.5-coder:7b', 'Download': '4.7 GB', 'Fits 8 GB?': 'Yes, fully in VRAM', 'Best for': 'Editor autocomplete (FIM)' },
          { 'Model': 'Qwen2.5-Coder 1.5B', 'Ollama tag': 'qwen2.5-coder:1.5b', 'Download': '986 MB', 'Fits 8 GB?': 'Yes, with room to spare', 'Best for': 'Light autocomplete beside a chat model' },
          { 'Model': 'Qwen2.5-Coder 14B', 'Ollama tag': 'qwen2.5-coder:14b', 'Download': '9.0 GB', 'Fits 8 GB?': 'No, needs CPU offload', 'Best for': 'Larger coder, only with offload' },
          { 'Model': 'Qwen3-Coder 30B', 'Ollama tag': 'qwen3-coder:30b', 'Download': '19 GB', 'Fits 8 GB?': 'No, mostly system RAM', 'Best for': 'Agentic coding on 32 GB+ RAM, slow' },
        ],
      },
      body2: {
        title: 'What Does Not Fit: 14B, 30B and Long Context',
        content: [
            '<strong>A model must fit in VRAM together with its KV cache, and 8 GB runs out faster than the download size suggests.</strong> When layers spill into system RAM, Ollama still runs, but generation slows sharply because DDR4 is far slower than the card\'s 608 GB/s GDDR6X. The 5700X\'s 8 Zen 3 cores handle offload better than a 4-core CPU, but offload is a fallback, not a plan.',
            'Qwen3-Coder 30B is listed on Ollama at 19 GB with a 256K context window. It is a mixture-of-experts model with about 3B active parameters, so it can run with most weights in system RAM, but on an 8 GB card that is where most of it lives. Expect slow responses in agentic use with only 8 GB of VRAM; results vary with RAM and settings, so treat it as an experiment that needs 32 GB of RAM.',
            'Long context grows the KV cache. Keep the context at 8K to 16K tokens on this card and raise it only if nvidia-smi shows spare VRAM. For code, stay at Q4 or higher; Q3 and below can introduce subtle syntax errors.',
          ],
      },
      body3: {
        title: 'Set Up Chat and Autocomplete in VS Code',
        content: ['Install Ollama, pull the two models, then point an editor extension such as Continue at http://localhost:11434: qwen3:8b for chat, qwen2.5-coder:7b for autocomplete. Run ollama ps to check the PROCESSOR column. 100% GPU means the model fits; a CPU/GPU split means model plus context no longer fits in 8 GB. On this card Ollama may unload one 7B to 8B model to load the other, so for autocomplete next to the chat model use the 986 MB qwen2.5-coder:1.5b instead.'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: 'Upgrade the GPU, Not the CPU',
        content: [
            '<strong>If you want 14B coding models at full speed, the GPU is the upgrade target.</strong> A 12 GB card such as an RTX 3060 12 GB or RTX 4070 runs a roughly 9 GB Q4 coder like qwen2.5-coder:14b fully in VRAM. See <a href="/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">best coding LLM for 12 GB VRAM</a> and <a href="/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">best 14B model for coding</a>.',
            'The 5800X3D is the top AM4 CPU upgrade, but its 3D V-Cache helps gaming and CPU-bound work; LLM inference on the GPU is bound by VRAM bandwidth, and the 5700X is not the limit.',
            'For the full GPU buying guide, see <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs</a>.',
          ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Coding LLMs for AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Which LLM models for coders can I use locally on an AMD 5700X and RTX 3070 Ti?',
            a: 'Qwen3 8B (qwen3:8b, 5.2 GB) for chat and explanations and Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4.7 GB) for editor autocomplete. Both fit entirely in the 3070 Ti\'s 8 GB of VRAM.',
          },
          {
            q: 'Can I run a 14B coding model on an RTX 3070 Ti 8 GB?',
            a: 'Not fully on the GPU: qwen2.5-coder:14b is a 9.0 GB download, above the 8 GB limit. With partial CPU offload it runs, but much slower. A 12 GB card runs it fully in VRAM.',
          },
          {
            q: 'Is the Ryzen 7 5700X a bottleneck for local LLMs?',
            a: 'No. When the model fits in VRAM, generation speed is set by the GPU. The CPU matters only for layers offloaded to system RAM.',
          },
          {
            q: 'Can an RTX 3070 Ti run Qwen3-Coder 30B?',
            a: 'Only with most of the 19 GB model in system RAM. It is a mixture-of-experts model with about 3B active parameters, so it starts, but responses are slow in agentic use. Plan for 32 GB of RAM and treat it as an experiment.',
          },
          {
            q: 'Which model should I use for autocomplete and which for chat?',
            a: 'Use Qwen2.5-Coder 7B (or the 1.5B version) for tab-autocomplete because it is trained for fill-in-the-middle, and Qwen3 8B for chat, explanations and refactoring.',
          },
          {
            q: 'Does RAM speed matter for CPU offload?',
            a: 'Yes, as a secondary factor. Faster DDR4 raises throughput for layers that live in RAM, but the GPU stays the main constraint for layers that fit in VRAM.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-de.webp',
    title: 'Bestes lokales Coding-LLM für AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'Bestes Coding-LLM für Ryzen 5700X + RTX 3070 Ti (8 GB)',
    metaDescription: 'Beste lokale Coding-LLMs für Ryzen 7 5700X und RTX 3070 Ti 8 GB: Qwen3 8B (5,2 GB) für Chat, Qwen2.5-Coder 7B (4,7 GB) für Autovervollständigung.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Welche LLM-Modelle für Coder kann ich lokal auf AMD 5700X und RTX 3070 Ti nutzen?',
        answer: 'Auf einer RTX 3070 Ti mit 8 GB VRAM laufen Qwen3 8B (qwen3:8b, 5,2 GB Download) für Coding-Chat und Erklärungen sowie Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4,7 GB) für die Autovervollständigung im Editor. Beide passen komplett in den VRAM. Der Ryzen 7 5700X ist nicht der Engpass, sondern die 8 GB VRAM: 14B-Coding-Modelle (rund 9 GB) passen nicht vollständig auf die GPU.',
        bullets: [
          'Qwen3 8B: 5,2 GB Download, 40K Kontext, bestes Einzelmodell für Coding-Chat mit 8 GB',
          'Qwen2.5-Coder 7B: 4,7 GB Download, für Fill-in-the-Middle-Autovervollständigung trainiert',
          '14B-Coder und Qwen3-Coder 30B brauchen auf dieser Karte CPU-Offload und laufen deutlich langsamer',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3 8B (5,2 GB) ist das beste Einzelmodell für Coding auf einer RTX 3070 Ti mit 8 GB; Qwen2.5-Coder 7B (4,7 GB) ist die Wahl für Editor-Autovervollständigung. Beide passen komplett in den VRAM',
          '14B-Coder (qwen2.5-coder:14b hat 9,0 GB, qwen3:14b 9,3 GB) überschreiten 8 GB und laufen nur mit teilweisem CPU-Offload, was die Generierung stark bremst',
          'Qwen3-Coder 30B ist ein 19-GB-Download (Mixture-of-Experts); bei 8 GB VRAM liegt das meiste im Arbeitsspeicher. Betrachten Sie es als Experiment mit 32 GB RAM, nicht als Alltagsmodell',
          'Der Ryzen 7 5700X ist hier nicht die Grenze, sondern der VRAM. Halten Sie den Kontext bei 8K bis 16K Token und bleiben Sie für Code bei Q4 oder höher',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die besten lokalen Coding-LLMs für eine RTX 3070 Ti mit 8 GB VRAM sind Qwen3 8B (5,2 GB) für Chat und Qwen2.5-Coder 7B (4,7 GB) für Autovervollständigung.' },
          { type: 'plain-terms', text: 'Wählen Sie ein Modell mit unter etwa 6 GB Download, damit es samt Kontext in die 8 GB der 3070 Ti passt; der Ryzen 7 5700X begrenzt die Geschwindigkeit nicht.' },
        ],
      },
      body1: {
        title: 'Qwen3 8B und Qwen2.5-Coder 7B passen auf eine 8-GB-Karte',
        content: [
            '<strong>Zum Programmieren auf einer RTX 3070 Ti (8 GB) nutzen Sie Qwen3 8B für Chat, Erklärungen und Refactoring und Qwen2.5-Coder 7B für die Inline-Autovervollständigung.</strong> Beide gibt es bei Ollama in der Standard-Quantisierung Q4: qwen3:8b hat 5,2 GB Download und 40K Kontext, qwen2.5-coder:7b 4,7 GB und 32K. Beide lassen von den 8 GB etwa 2 bis 3 GB für den KV-Cache und Ihren Desktop.',
            'Qwen2.5-Coder ist auf Fill-in-the-Middle (FIM) trainiert, den Vervollständigungsmodus, den Editor-Plugins wie Continue für Tab-Autovervollständigung nutzen. Qwen3 8B ist der stärkere Allround-Denker und hat einen Denkmodus, den Sie mit /no_think abschalten, wenn Sie schnellere Antworten wollen. Wenn Sie nur ein Modell möchten, beginnen Sie mit Qwen3 8B. Downloadgrößen und Kontextfenster entsprechen den Angaben auf ollama.com; wir haben genau diese Konfiguration nicht gemessen, daher nennen wir keine Geschwindigkeitswerte.',
            'Für größere GPUs und mehr Coding-Modelle siehe den Leitfaden <a href="/de/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">beste lokale LLMs für Coding</a>.',
          ],
        columns: [
            'Modell',
            'Ollama-Tag',
            'Download',
            'Passt in 8 GB?',
            'Am besten für',
          ],
        rows: [
          { 'Modell': 'Qwen3 8B', 'Ollama-Tag': 'qwen3:8b', 'Download': '5.2 GB', 'Passt in 8 GB?': 'Ja, komplett im VRAM', 'Am besten für': 'Chat, Erklärungen, Refactoring' },
          { 'Modell': 'Qwen2.5-Coder 7B', 'Ollama-Tag': 'qwen2.5-coder:7b', 'Download': '4.7 GB', 'Passt in 8 GB?': 'Ja, komplett im VRAM', 'Am besten für': 'Editor-Autovervollständigung (FIM)' },
          { 'Modell': 'Qwen2.5-Coder 1.5B', 'Ollama-Tag': 'qwen2.5-coder:1.5b', 'Download': '986 MB', 'Passt in 8 GB?': 'Ja, mit viel Reserve', 'Am besten für': 'Leichte Autovervollständigung neben einem Chat-Modell' },
          { 'Modell': 'Qwen2.5-Coder 14B', 'Ollama-Tag': 'qwen2.5-coder:14b', 'Download': '9.0 GB', 'Passt in 8 GB?': 'Nein, braucht CPU-Offload', 'Am besten für': 'Größerer Coder, nur mit Offload' },
          { 'Modell': 'Qwen3-Coder 30B', 'Ollama-Tag': 'qwen3-coder:30b', 'Download': '19 GB', 'Passt in 8 GB?': 'Nein, meist im Arbeitsspeicher', 'Am besten für': 'Agentisches Coding ab 32 GB RAM, langsam' },
        ],
      },
      body2: {
        title: 'Was nicht passt: 14B, 30B und langer Kontext',
        content: [
            '<strong>Ein Modell muss samt KV-Cache in den VRAM passen, und 8 GB sind schneller voll, als die Downloadgröße vermuten lässt.</strong> Wenn Schichten in den Arbeitsspeicher auslagern, läuft Ollama weiter, aber die Generierung bricht ein, weil DDR4 viel langsamer ist als die 608 GB/s GDDR6X der Karte. Die 8 Zen-3-Kerne des 5700X verkraften Offload besser als eine 4-Kern-CPU, doch Offload ist ein Notbehelf, kein Plan.',
            'Qwen3-Coder 30B ist bei Ollama mit 19 GB und 256K Kontext gelistet. Es ist ein Mixture-of-Experts-Modell mit rund 3B aktiven Parametern und kann daher mit dem Großteil der Gewichte im Arbeitsspeicher laufen, aber auf einer 8-GB-Karte liegt genau dort der Hauptteil. Bei agentischer Nutzung mit nur 8 GB VRAM sind langsame Antworten zu erwarten; die Ergebnisse hängen von RAM und Einstellungen ab. Betrachten Sie es als Experiment mit 32 GB RAM.',
            'Langer Kontext vergrößert den KV-Cache. Halten Sie den Kontext auf dieser Karte bei 8K bis 16K Token und erhöhen Sie ihn nur, wenn nvidia-smi freien VRAM zeigt. Für Code bleiben Sie bei Q4 oder höher; Q3 und darunter kann subtile Syntaxfehler verursachen.',
          ],
      },
      body3: {
        title: 'Chat und Autovervollständigung in VS Code einrichten',
        content: ['Installieren Sie Ollama, laden Sie die beiden Modelle und richten Sie eine Editor-Erweiterung wie Continue auf http://localhost:11434 aus: qwen3:8b für Chat, qwen2.5-coder:7b für Autovervollständigung. Prüfen Sie mit ollama ps die Spalte PROCESSOR. 100% GPU heißt, das Modell passt; eine CPU/GPU-Aufteilung heißt, dass Modell plus Kontext nicht mehr in 8 GB passen. Auf dieser Karte kann Ollama ein 7B- bis 8B-Modell entladen, um das andere zu laden; für Autovervollständigung neben dem Chat-Modell nehmen Sie daher das 986 MB große qwen2.5-coder:1.5b.'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: 'GPU upgraden, nicht die CPU',
        content: [
            '<strong>Wenn Sie 14B-Coding-Modelle in voller Geschwindigkeit wollen, ist die GPU das Upgrade-Ziel.</strong> Eine 12-GB-Karte wie die RTX 3060 12 GB oder RTX 4070 führt einen rund 9 GB großen Q4-Coder wie qwen2.5-coder:14b komplett im VRAM aus. Siehe <a href="/de/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">bestes Coding-LLM für 12 GB VRAM</a> und <a href="/de/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">bestes 14B-Modell für Coding</a>.',
            'Der 5800X3D ist das beste AM4-CPU-Upgrade, doch sein 3D-V-Cache hilft bei Gaming und CPU-lastigen Aufgaben; die LLM-Inferenz auf der GPU wird von der VRAM-Bandbreite begrenzt, und der 5700X ist nicht die Grenze.',
            'Den vollständigen GPU-Ratgeber finden Sie unter <a href="/de/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">beste GPUs für lokale LLMs</a>.',
          ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Coding-LLMs für AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Welche LLM-Modelle für Coder kann ich lokal auf AMD 5700X und RTX 3070 Ti nutzen?',
            a: 'Qwen3 8B (qwen3:8b, 5,2 GB) für Chat und Erklärungen und Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4,7 GB) für Editor-Autovervollständigung. Beide passen komplett in die 8 GB VRAM der 3070 Ti.',
          },
          {
            q: 'Kann ich ein 14B-Coding-Modell auf einer RTX 3070 Ti 8 GB ausführen?',
            a: 'Nicht vollständig auf der GPU: qwen2.5-coder:14b hat 9,0 GB Download und liegt über dem 8-GB-Limit. Mit teilweisem CPU-Offload läuft es, aber deutlich langsamer. Eine 12-GB-Karte führt es komplett im VRAM aus.',
          },
          {
            q: 'Ist der Ryzen 7 5700X ein Engpass für lokale LLMs?',
            a: 'Nein. Passt das Modell in den VRAM, bestimmt die GPU die Generierungsgeschwindigkeit. Die CPU zählt nur für Schichten, die in den Arbeitsspeicher ausgelagert sind.',
          },
          {
            q: 'Kann eine RTX 3070 Ti Qwen3-Coder 30B ausführen?',
            a: 'Nur, wenn der Großteil des 19-GB-Modells im Arbeitsspeicher liegt. Es ist ein Mixture-of-Experts-Modell mit rund 3B aktiven Parametern, startet also, antwortet aber bei agentischer Nutzung langsam. Planen Sie 32 GB RAM ein und betrachten Sie es als Experiment.',
          },
          {
            q: 'Welches Modell nehme ich für Autovervollständigung, welches für Chat?',
            a: 'Nutzen Sie Qwen2.5-Coder 7B (oder die 1.5B-Version) für Tab-Autovervollständigung, weil es auf Fill-in-the-Middle trainiert ist, und Qwen3 8B für Chat, Erklärungen und Refactoring.',
          },
          {
            q: 'Spielt die RAM-Geschwindigkeit beim CPU-Offload eine Rolle?',
            a: 'Ja, als Nebenfaktor. Schnelleres DDR4 erhöht den Durchsatz für Schichten im Arbeitsspeicher, aber die GPU bleibt die Hauptgrenze für Schichten, die in den VRAM passen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-fr.webp',
    title: 'Meilleur LLM local pour coder avec AMD 5700X + RTX 3070 Ti ?',
    seoTitle: 'Meilleur LLM de code : Ryzen 5700X + RTX 3070 Ti (8 Go)',
    metaDescription: 'Meilleurs LLM de code locaux pour Ryzen 7 5700X et RTX 3070 Ti 8 Go : Qwen3 8B (5,2 Go) pour le chat, Qwen2.5-Coder 7B (4,7 Go) pour l\'autocomplétion.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles LLM pour coder puis-je utiliser en local avec un AMD 5700X et une RTX 3070 Ti ?',
        answer: 'Avec une RTX 3070 Ti de 8 Go de VRAM, utilisez Qwen3 8B (qwen3:8b, 5,2 Go à télécharger) pour le chat de code et les explications, et Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4,7 Go) pour l\'autocomplétion dans l\'éditeur. Les deux tiennent entièrement en VRAM. Le Ryzen 7 5700X n\'est pas le goulot d\'étranglement : ce sont les 8 Go de VRAM, donc les modèles de code 14B (environ 9 Go) ne tiennent pas entièrement sur le GPU.',
        bullets: [
          'Qwen3 8B : 5,2 Go à télécharger, contexte 40K, meilleur modèle unique pour le chat de code avec 8 Go',
          'Qwen2.5-Coder 7B : 4,7 Go, entraîné pour l\'autocomplétion fill-in-the-middle',
          'Les modèles de code 14B et Qwen3-Coder 30B exigent un offload CPU sur cette carte et sont bien plus lents',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3 8B (5,2 Go) est le meilleur modèle unique pour coder sur une RTX 3070 Ti de 8 Go ; Qwen2.5-Coder 7B (4,7 Go) convient à l\'autocomplétion. Les deux tiennent en VRAM',
          'Les modèles de code 14B (qwen2.5-coder:14b pèse 9,0 Go, qwen3:14b 9,3 Go) dépassent 8 Go et ne tournent qu\'avec offload CPU partiel, ce qui ralentit fortement la génération',
          'Qwen3-Coder 30B est un téléchargement de 19 Go (mixture-of-experts) ; avec 8 Go de VRAM, l\'essentiel reste en RAM système : une expérience avec 32 Go de RAM, pas un modèle du quotidien',
          'Le Ryzen 7 5700X n\'est pas la limite ici : c\'est la VRAM. Gardez un contexte de 8K à 16K tokens et restez en Q4 ou plus pour le code',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Les meilleurs LLM locaux pour coder sur une RTX 3070 Ti de 8 Go de VRAM sont Qwen3 8B (5,2 Go) pour le chat et Qwen2.5-Coder 7B (4,7 Go) pour l\'autocomplétion.' },
          { type: 'plain-terms', text: 'Choisissez un modèle de moins de 6 Go environ pour qu\'il tienne avec son contexte dans les 8 Go de la 3070 Ti ; le Ryzen 7 5700X ne limite pas la vitesse.' },
        ],
      },
      body1: {
        title: 'Qwen3 8B et Qwen2.5-Coder 7B tiennent sur une carte de 8 Go',
        content: [
            '<strong>Pour coder sur une RTX 3070 Ti (8 Go), utilisez Qwen3 8B pour le chat, les explications et le refactoring, et Qwen2.5-Coder 7B pour l\'autocomplétion en ligne.</strong> Les deux sont sur Ollama en quantification Q4 par défaut : qwen3:8b pèse 5,2 Go avec 40K de contexte, qwen2.5-coder:7b 4,7 Go avec 32K. Il reste environ 2 à 3 Go pour le cache KV et le bureau.',
            'Qwen2.5-Coder est entraîné au fill-in-the-middle (FIM), le mode de complétion que des extensions comme Continue utilisent pour l\'autocomplétion par tabulation. Qwen3 8B raisonne mieux en général et propose un mode réflexion désactivable avec /no_think pour des réponses plus rapides. Si vous ne voulez qu\'un modèle, commencez par Qwen3 8B. Tailles et contextes sont ceux d\'ollama.com ; nous n\'avons pas mesuré cette configuration, donc aucune vitesse n\'est annoncée.',
            'Pour les GPU plus grands et plus de modèles, voir le guide <a href="/fr/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">meilleurs LLM locaux pour coder</a>.',
          ],
        columns: [
            'Modèle',
            'Tag Ollama',
            'Téléchargement',
            'Tient dans 8 Go ?',
            'Idéal pour',
          ],
        rows: [
          { 'Modèle': 'Qwen3 8B', 'Tag Ollama': 'qwen3:8b', 'Téléchargement': '5,2 Go', 'Tient dans 8 Go ?': 'Oui, entièrement en VRAM', 'Idéal pour': 'Chat, explications, refactoring' },
          { 'Modèle': 'Qwen2.5-Coder 7B', 'Tag Ollama': 'qwen2.5-coder:7b', 'Téléchargement': '4,7 Go', 'Tient dans 8 Go ?': 'Oui, entièrement en VRAM', 'Idéal pour': 'Autocomplétion dans l\'éditeur (FIM)' },
          { 'Modèle': 'Qwen2.5-Coder 1.5B', 'Tag Ollama': 'qwen2.5-coder:1.5b', 'Téléchargement': '986 Mo', 'Tient dans 8 Go ?': 'Oui, avec de la marge', 'Idéal pour': 'Autocomplétion légère à côté d\'un modèle de chat' },
          { 'Modèle': 'Qwen2.5-Coder 14B', 'Tag Ollama': 'qwen2.5-coder:14b', 'Téléchargement': '9,0 Go', 'Tient dans 8 Go ?': 'Non, offload CPU requis', 'Idéal pour': 'Modèle de code plus grand, avec offload' },
          { 'Modèle': 'Qwen3-Coder 30B', 'Tag Ollama': 'qwen3-coder:30b', 'Téléchargement': '19 Go', 'Tient dans 8 Go ?': 'Non, surtout en RAM système', 'Idéal pour': 'Codage agentique à partir de 32 Go de RAM, lent' },
        ],
      },
      body2: {
        title: 'Ce qui ne tient pas : 14B, 30B et long contexte',
        content: [
            '<strong>Un modèle doit tenir en VRAM avec son cache KV, et 8 Go se remplissent plus vite que la taille du téléchargement ne le laisse croire.</strong> Quand des couches passent en RAM système, Ollama fonctionne encore, mais la génération chute car la DDR4 est bien plus lente que les 608 Go/s de GDDR6X de la carte. Les 8 cœurs Zen 3 du 5700X gèrent mieux l\'offload qu\'un CPU à 4 cœurs, mais c\'est un pis-aller, pas un plan.',
            'Qwen3-Coder 30B est listé chez Ollama à 19 Go avec 256K de contexte. C\'est un modèle mixture-of-experts à environ 3B de paramètres actifs : il peut tourner avec la plupart des poids en RAM système, mais sur une carte de 8 Go c\'est là que se trouve l\'essentiel. Attendez-vous à des réponses lentes en usage agentique avec seulement 8 Go de VRAM ; les résultats varient selon la RAM et les réglages. Voyez-y une expérience avec 32 Go de RAM.',
            'Un long contexte fait grossir le cache KV. Gardez 8K à 16K tokens sur cette carte et n\'augmentez que si nvidia-smi montre de la VRAM libre. Pour le code, restez en Q4 ou plus ; Q3 et en dessous peut introduire des erreurs de syntaxe subtiles.',
          ],
      },
      body3: {
        title: 'Configurer chat et autocomplétion dans VS Code',
        content: ['Installez Ollama, téléchargez les deux modèles, puis pointez une extension comme Continue vers http://localhost:11434 : qwen3:8b pour le chat, qwen2.5-coder:7b pour l\'autocomplétion. Lancez ollama ps et regardez la colonne PROCESSOR. 100% GPU signifie que le modèle tient ; une répartition CPU/GPU signifie que modèle et contexte dépassent 8 Go. Sur cette carte, Ollama peut décharger un modèle 7B à 8B pour charger l\'autre ; pour l\'autocomplétion à côté du chat, prenez plutôt qwen2.5-coder:1.5b (986 Mo).'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: 'Changer de GPU, pas de CPU',
        content: [
            '<strong>Pour des modèles de code 14B à pleine vitesse, le GPU est la cible de mise à niveau.</strong> Une carte de 12 Go comme la RTX 3060 12 Go ou la RTX 4070 exécute entièrement en VRAM un modèle Q4 d\'environ 9 Go comme qwen2.5-coder:14b. Voir <a href="/fr/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">meilleur LLM de code pour 12 Go de VRAM</a> et <a href="/fr/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">meilleur modèle 14B pour coder</a>.',
            'Le 5800X3D est la meilleure mise à niveau CPU AM4, mais son 3D V-Cache profite au jeu et aux tâches limitées par le CPU ; l\'inférence sur GPU est limitée par la bande passante de la VRAM, et le 5700X n\'est pas la limite.',
            'Le guide d\'achat GPU complet : <a href="/fr/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">meilleurs GPU pour LLM locaux</a>.',
          ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLM de code pour AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Quels modèles LLM pour coder utiliser en local avec un AMD 5700X et une RTX 3070 Ti ?',
            a: 'Qwen3 8B (qwen3:8b, 5,2 Go) pour le chat et les explications et Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4,7 Go) pour l\'autocomplétion. Les deux tiennent entièrement dans les 8 Go de VRAM de la 3070 Ti.',
          },
          {
            q: 'Puis-je exécuter un modèle de code 14B sur une RTX 3070 Ti 8 Go ?',
            a: 'Pas entièrement sur le GPU : qwen2.5-coder:14b pèse 9,0 Go, au-delà de la limite de 8 Go. Avec offload CPU partiel il tourne, mais bien plus lentement. Une carte de 12 Go l\'exécute entièrement en VRAM.',
          },
          {
            q: 'Le Ryzen 7 5700X est-il un goulot d\'étranglement pour les LLM locaux ?',
            a: 'Non. Quand le modèle tient en VRAM, le GPU fixe la vitesse de génération. Le CPU n\'intervient que pour les couches déchargées en RAM système.',
          },
          {
            q: 'Une RTX 3070 Ti peut-elle exécuter Qwen3-Coder 30B ?',
            a: 'Seulement avec l\'essentiel des 19 Go en RAM système. C\'est un modèle mixture-of-experts à environ 3B de paramètres actifs : il démarre, mais les réponses sont lentes en usage agentique. Prévoyez 32 Go de RAM et voyez-y une expérience.',
          },
          {
            q: 'Quel modèle pour l\'autocomplétion et lequel pour le chat ?',
            a: 'Qwen2.5-Coder 7B (ou la version 1.5B) pour l\'autocomplétion par tabulation, car il est entraîné au fill-in-the-middle, et Qwen3 8B pour le chat, les explications et le refactoring.',
          },
          {
            q: 'La vitesse de la RAM compte-t-elle pour l\'offload CPU ?',
            a: 'Oui, comme facteur secondaire. Une DDR4 plus rapide augmente le débit des couches en RAM, mais le GPU reste la contrainte principale pour les couches qui tiennent en VRAM.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-ja.webp',
    title: 'AMD 5700X + RTX 3070 Tiでコーディングに最適なローカルLLMは？',
    seoTitle: 'RTX 3070 Ti + Ryzen 5700X向けコーディングLLM（8GB）',
    metaDescription: 'Ryzen 7 5700XとRTX 3070 Ti 8GBに最適なコーディング用ローカルLLM。チャットはQwen3 8B（5.2GB）、補完はQwen2.5-Coder 7B（4.7GB）。Ollamaタグ付き。',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'AMD 5700XとRTX 3070 Tiでローカル実行できるコーダー向けLLMは？',
        answer: 'VRAM 8GBのRTX 3070 Tiでは、コーディングのチャットと解説にQwen3 8B（qwen3:8b、ダウンロード5.2GB）、エディタの補完にQwen2.5-Coder 7B（qwen2.5-coder:7b、4.7GB）が最適です。どちらもVRAMに完全に収まります。ボトルネックはRyzen 7 5700Xではなく8GBのVRAMで、14Bのコーディングモデル（約9GB）はGPUに全部は載りません。',
        bullets: [
          'Qwen3 8B：ダウンロード5.2GB、コンテキスト40K、8GBでコーディングチャットに最適な単一モデル',
          'Qwen2.5-Coder 7B：4.7GB、fill-in-the-middle補完向けに学習',
          '14BコーダーとQwen3-Coder 30BはこのカードではCPUオフロードが必要で大幅に遅くなります',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3 8B（5.2GB）は8GBのRTX 3070 Ti向けの最良の単一コーディングモデル、Qwen2.5-Coder 7B（4.7GB）はエディタ補完向けです。どちらもVRAMに完全に収まります',
          '14Bコーダー（qwen2.5-coder:14bは9.0GB、qwen3:14bは9.3GB）は8GBを超え、部分的なCPUオフロードでしか動かず、生成速度が大きく落ちます',
          'Qwen3-Coder 30Bは19GBのMixture-of-Expertsモデルで、VRAM 8GBでは大半がシステムRAMに載ります。32GB RAMでの実験用であり、日常使い向けではありません',
          'ここでの上限はRyzen 7 5700XではなくVRAMです。コンテキストは8K〜16Kトークンに抑え、コードにはQ4以上を使ってください',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'VRAM 8GBのRTX 3070 Ti向けのコーディング用ローカルLLMは、チャットがQwen3 8B（5.2GB）、補完がQwen2.5-Coder 7B（4.7GB）です。' },
          { type: 'plain-terms', text: 'ダウンロードが約6GB未満のモデルを選べば、コンテキストと合わせて3070 Tiの8GBに収まります。Ryzen 7 5700Xは速度の制約になりません。' },
        ],
      },
      body1: {
        title: 'Qwen3 8BとQwen2.5-Coder 7Bは8GBカードに収まる',
        content: [
            '<strong>RTX 3070 Ti（8GB）でのコーディングには、チャット・解説・リファクタリングにQwen3 8B、インライン補完にQwen2.5-Coder 7Bを使います。</strong>どちらもOllamaの標準Q4量子化で、qwen3:8bはダウンロード5.2GB・コンテキスト40K、qwen2.5-coder:7bは4.7GB・32Kです。8GBのうちKVキャッシュとデスクトップ用に約2〜3GBが残ります。',
            'Qwen2.5-Coderは、Continueなどのエディタ拡張がタブ補完に使うfill-in-the-middle（FIM）向けに学習されています。Qwen3 8Bは汎用の推論力が高く、/no_thinkで切り替え可能な思考モードがあり、速い応答が欲しいときはオフにできます。1つだけ選ぶならQwen3 8Bから始めてください。ダウンロードサイズとコンテキストはollama.comの記載どおりで、この構成の実測は行っていないため速度の数値は示しません。',
            'より大きなGPUや他のコーディングモデルについては<a href="/ja/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">コーディング向けベストローカルLLM</a>を参照してください。',
          ],
        columns: [
            'モデル',
            'Ollamaタグ',
            'ダウンロード',
            '8GBに収まる？',
            '最適な用途',
          ],
        rows: [
          { 'モデル': 'Qwen3 8B', 'Ollamaタグ': 'qwen3:8b', 'ダウンロード': '5.2 GB', '8GBに収まる？': 'はい、VRAMに完全収容', '最適な用途': 'チャット、解説、リファクタリング' },
          { 'モデル': 'Qwen2.5-Coder 7B', 'Ollamaタグ': 'qwen2.5-coder:7b', 'ダウンロード': '4.7 GB', '8GBに収まる？': 'はい、VRAMに完全収容', '最適な用途': 'エディタ補完（FIM）' },
          { 'モデル': 'Qwen2.5-Coder 1.5B', 'Ollamaタグ': 'qwen2.5-coder:1.5b', 'ダウンロード': '986 MB', '8GBに収まる？': 'はい、余裕あり', '最適な用途': 'チャットモデルと併用する軽量補完' },
          { 'モデル': 'Qwen2.5-Coder 14B', 'Ollamaタグ': 'qwen2.5-coder:14b', 'ダウンロード': '9.0 GB', '8GBに収まる？': 'いいえ、CPUオフロードが必要', '最適な用途': 'より大きなコーダー（オフロード時のみ）' },
          { 'モデル': 'Qwen3-Coder 30B', 'Ollamaタグ': 'qwen3-coder:30b', 'ダウンロード': '19 GB', '8GBに収まる？': 'いいえ、主にシステムRAM', '最適な用途': '32GB以上のRAMでのエージェント型コーディング（低速）' },
        ],
      },
      body2: {
        title: '収まらないもの：14B、30B、長いコンテキスト',
        content: [
            '<strong>モデルはKVキャッシュと合わせてVRAMに収める必要があり、8GBはダウンロードサイズから想像するより早く埋まります。</strong>レイヤーがシステムRAMに溢れてもOllamaは動きますが、DDR4はカードの608GB/s GDDR6Xよりはるかに遅いため、生成速度が急落します。5700Xの8コアZen 3は4コアCPUよりオフロードに強いものの、オフロードは代替手段であって計画ではありません。',
            'Qwen3-Coder 30BはOllamaで19GB・256Kコンテキストと記載されています。アクティブパラメータ約3BのMixture-of-Expertsモデルなので重みの大半をシステムRAMに置いて動かせますが、8GBカードでは大半がそこに載ることになります。VRAM 8GBだけではエージェント用途で応答が遅くなると考えられ、結果はRAMや設定で変わります。32GB RAMが必要な実験として扱ってください。',
            '長いコンテキストはKVキャッシュを増やします。このカードでは8K〜16Kトークンに抑え、nvidia-smiでVRAMに余裕があるときだけ増やしてください。コードにはQ4以上を使ってください。Q3以下は微妙な構文エラーを招くことがあります。',
          ],
      },
      body3: {
        title: 'VS Codeでチャットと補完を設定する',
        content: ['Ollamaをインストールして2つのモデルを取得し、Continueなどのエディタ拡張をhttp://localhost:11434に向けます。チャットにqwen3:8b、補完にqwen2.5-coder:7bを使います。ollama psでPROCESSOR列を確認してください。100% GPUならモデルが収まっています。CPU/GPUに分かれている場合は、モデルとコンテキストが8GBに収まっていません。このカードではOllamaが一方の7B〜8Bモデルをアンロードして他方をロードすることがあるため、チャットモデルと併用する補完には986MBのqwen2.5-coder:1.5bを使ってください。'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: 'アップグレードするのはCPUではなくGPU',
        content: [
            '<strong>14Bのコーディングモデルをフルスピードで動かしたいなら、アップグレード対象はGPUです。</strong>RTX 3060 12GBやRTX 4070などの12GBカードなら、qwen2.5-coder:14bのような約9GBのQ4コーダーをVRAMに完全収容できます。<a href="/ja/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12GB VRAM向けベストコーディングLLM</a>と<a href="/ja/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">コーディング向けベスト14Bモデル</a>を参照してください。',
            '5800X3DはAM4最良のCPUアップグレードですが、3D V-Cacheが効くのはゲームやCPU依存の作業です。GPUでのLLM推論はVRAM帯域が上限で、5700Xは制約になりません。',
            'GPU選びの全体ガイドは<a href="/ja/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">ローカルLLM向けベストGPU</a>を参照してください。',
          ],
      },
      faq: {
        id: 'faq',
        title: 'AMD 5700X + RTX 3070 Ti向けコーディングLLMのよくある質問',
        faqs: [
          {
            q: 'AMD 5700XとRTX 3070 Tiでローカル実行できるコーダー向けLLMは？',
            a: 'チャットと解説にはQwen3 8B（qwen3:8b、5.2GB）、エディタ補完にはQwen2.5-Coder 7B（qwen2.5-coder:7b、4.7GB）が適しています。どちらも3070 Tiの8GB VRAMに完全に収まります。',
          },
          {
            q: 'RTX 3070 Ti 8GBで14Bのコーディングモデルは動かせますか？',
            a: 'GPUには全部載りません。qwen2.5-coder:14bはダウンロード9.0GBで8GBの上限を超えます。部分的なCPUオフロードなら動きますが、かなり遅くなります。12GBカードならVRAMに完全に収まります。',
          },
          {
            q: 'Ryzen 7 5700XはローカルLLMのボトルネックですか？',
            a: 'いいえ。モデルがVRAMに収まるなら、生成速度はGPUで決まります。CPUが関わるのはシステムRAMにオフロードされたレイヤーだけです。',
          },
          {
            q: 'RTX 3070 TiでQwen3-Coder 30Bは動きますか？',
            a: '19GBのモデルの大半をシステムRAMに置く場合に限ります。アクティブパラメータ約3BのMixture-of-Expertsなので起動はしますが、エージェント用途では応答が遅くなります。32GB RAMを前提に、実験として扱ってください。',
          },
          {
            q: '補完とチャットではどのモデルを使えばいいですか？',
            a: 'タブ補完にはfill-in-the-middle向けに学習されたQwen2.5-Coder 7B（または1.5B版）、チャット・解説・リファクタリングにはQwen3 8Bを使います。',
          },
          {
            q: 'CPUオフロードではRAMの速度は重要ですか？',
            a: 'はい、副次的な要因として重要です。高速なDDR4はRAM上のレイヤーのスループットを上げますが、VRAMに収まるレイヤーではGPUが主な制約のままです。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-zh.webp',
    title: 'AMD 5700X + RTX 3070 Ti 最适合哪款本地编程 LLM？',
    seoTitle: 'RTX 3070 Ti + 锐龙 5700X 编程 LLM 推荐（8GB）',
    metaDescription: '锐龙 7 5700X + RTX 3070 Ti 8GB 的本地编程 LLM：聊天用 Qwen3 8B（5.2GB），补全用 Qwen2.5-Coder 7B（4.7GB），附 Ollama 标签。',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: 'AMD 5700X 和 RTX 3070 Ti 可以本地运行哪些适合程序员的 LLM？',
        answer: 'RTX 3070 Ti 拥有 8 GB 显存，编程聊天和代码讲解用 Qwen3 8B（qwen3:8b，下载 5.2 GB），编辑器自动补全用 Qwen2.5-Coder 7B（qwen2.5-coder:7b，4.7 GB）。两者都能完整放进显存。瓶颈不是锐龙 7 5700X，而是 8 GB 显存，所以 14B 编程模型（约 9 GB）无法完全放进 GPU。',
        bullets: [
          'Qwen3 8B：下载 5.2 GB，40K 上下文，8 GB 显存下最适合编程聊天的单一模型',
          'Qwen2.5-Coder 7B：4.7 GB，专为 fill-in-the-middle 自动补全训练',
          '14B 编程模型和 Qwen3-Coder 30B 在这张卡上需要 CPU 卸载，速度会慢很多',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3 8B（5.2 GB）是 8 GB RTX 3070 Ti 上最好的单一编程模型；Qwen2.5-Coder 7B（4.7 GB）适合编辑器自动补全。两者都能完整放进显存',
          '14B 编程模型（qwen2.5-coder:14b 为 9.0 GB，qwen3:14b 为 9.3 GB）超出 8 GB，只能靠部分 CPU 卸载运行，生成速度会大幅下降',
          'Qwen3-Coder 30B 是 19 GB 的混合专家模型下载；8 GB 显存下大部分权重在系统内存里，应视为 32 GB 内存下的实验，而非日常主力',
          '这里的上限是显存，而不是锐龙 7 5700X。上下文保持在 8K 到 16K token，代码任务使用 Q4 或更高量化',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '8 GB 显存的 RTX 3070 Ti 上最好的本地编程 LLM 是：聊天用 Qwen3 8B（5.2 GB），自动补全用 Qwen2.5-Coder 7B（4.7 GB）。' },
          { type: 'plain-terms', text: '选择下载大小在约 6 GB 以内的模型，这样连同上下文能放进 3070 Ti 的 8 GB；锐龙 7 5700X 不会限制速度。' },
        ],
      },
      body1: {
        title: 'Qwen3 8B 和 Qwen2.5-Coder 7B 都能放进 8 GB 显卡',
        content: [
            '<strong>在 RTX 3070 Ti（8 GB）上写代码，聊天、讲解和重构用 Qwen3 8B，行内自动补全用 Qwen2.5-Coder 7B。</strong>两者在 Ollama 上都是默认 Q4 量化：qwen3:8b 下载 5.2 GB、40K 上下文，qwen2.5-coder:7b 为 4.7 GB、32K。8 GB 中大约还剩 2 到 3 GB 给 KV 缓存和桌面。',
            'Qwen2.5-Coder 针对 fill-in-the-middle（FIM）训练，Continue 等编辑器插件的 Tab 补全就用这种模式。Qwen3 8B 的通用推理更强，并带有思考模式，需要更快回答时可用 /no_think 关闭。只想用一个模型的话，先从 Qwen3 8B 开始。下载大小和上下文窗口以 ollama.com 标注为准；我们没有实测这套配置，因此不给出速度数字。',
            '想了解更大的 GPU 和更多编程模型，请参阅<a href="/zh/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">最佳本地编程 LLM</a>。',
          ],
        columns: [
            '模型',
            'Ollama 标签',
            '下载大小',
            '能放进 8 GB？',
            '最适合',
          ],
        rows: [
          { '模型': 'Qwen3 8B', 'Ollama 标签': 'qwen3:8b', '下载大小': '5.2 GB', '能放进 8 GB？': '能，完整放进显存', '最适合': '聊天、讲解、重构' },
          { '模型': 'Qwen2.5-Coder 7B', 'Ollama 标签': 'qwen2.5-coder:7b', '下载大小': '4.7 GB', '能放进 8 GB？': '能，完整放进显存', '最适合': '编辑器自动补全（FIM）' },
          { '模型': 'Qwen2.5-Coder 1.5B', 'Ollama 标签': 'qwen2.5-coder:1.5b', '下载大小': '986 MB', '能放进 8 GB？': '能，余量充足', '最适合': '与聊天模型并用的轻量补全' },
          { '模型': 'Qwen2.5-Coder 14B', 'Ollama 标签': 'qwen2.5-coder:14b', '下载大小': '9.0 GB', '能放进 8 GB？': '不能，需要 CPU 卸载', '最适合': '更大的编程模型（仅限卸载）' },
          { '模型': 'Qwen3-Coder 30B', 'Ollama 标签': 'qwen3-coder:30b', '下载大小': '19 GB', '能放进 8 GB？': '不能，主要在系统内存', '最适合': '32 GB 以上内存的智能体编程（较慢）' },
        ],
      },
      body2: {
        title: '放不下的：14B、30B 和长上下文',
        content: [
            '<strong>模型必须连同 KV 缓存一起放进显存，8 GB 比下载大小所暗示的更容易用完。</strong>当部分层溢出到系统内存时，Ollama 仍能运行，但生成速度会骤降，因为 DDR4 远慢于显卡的 608 GB/s GDDR6X。5700X 的 8 个 Zen 3 核心处理卸载比 4 核 CPU 更好，但卸载只是退路，不是方案。',
            'Qwen3-Coder 30B 在 Ollama 上标注为 19 GB、256K 上下文。它是约 3B 激活参数的混合专家模型，因此可以让大部分权重留在系统内存中运行，但在 8 GB 显卡上，大部分权重就是在那里。仅有 8 GB 显存时，智能体场景下响应预计会很慢；结果因内存和设置而异。请把它当作需要 32 GB 内存的实验。',
            '长上下文会增大 KV 缓存。这张卡上请把上下文保持在 8K 到 16K token，只有当 nvidia-smi 显示显存有余量时再调大。代码任务请使用 Q4 或更高量化；Q3 及以下可能引入细微的语法错误。',
          ],
      },
      body3: {
        title: '在 VS Code 中设置聊天和自动补全',
        content: ['安装 Ollama，拉取两个模型，然后把 Continue 等编辑器扩展指向 http://localhost:11434：聊天用 qwen3:8b，自动补全用 qwen2.5-coder:7b。运行 ollama ps 查看 PROCESSOR 列。100% GPU 表示模型能放下；出现 CPU/GPU 拆分则说明模型加上下文已超出 8 GB。在这张卡上，Ollama 可能卸载一个 7B 到 8B 模型来加载另一个，因此要在聊天模型旁做自动补全，请改用 986 MB 的 qwen2.5-coder:1.5b。'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: '升级 GPU，而不是 CPU',
        content: [
            '<strong>想让 14B 编程模型全速运行，升级目标是 GPU。</strong>RTX 3060 12 GB 或 RTX 4070 这类 12 GB 显卡，可以把 qwen2.5-coder:14b 这样约 9 GB 的 Q4 编程模型完整放进显存。参见<a href="/zh/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB 显存最佳编程 LLM</a>和<a href="/zh/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">最佳 14B 编程模型</a>。',
            '5800X3D 是 AM4 上最好的 CPU 升级，但它的 3D V-Cache 只对游戏和受 CPU 限制的任务有帮助；GPU 上的 LLM 推理受显存带宽限制，5700X 不是瓶颈。',
            '完整的 GPU 选购指南请见<a href="/zh/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">本地 LLM 最佳 GPU</a>。',
          ],
      },
      faq: {
        id: 'faq',
        title: '关于 AMD 5700X + RTX 3070 Ti 编程 LLM 的快速解答',
        faqs: [
          {
            q: 'AMD 5700X 和 RTX 3070 Ti 可以本地运行哪些适合程序员的 LLM？',
            a: '聊天和讲解用 Qwen3 8B（qwen3:8b，5.2 GB），编辑器自动补全用 Qwen2.5-Coder 7B（qwen2.5-coder:7b，4.7 GB）。两者都能完整放进 3070 Ti 的 8 GB 显存。',
          },
          {
            q: 'RTX 3070 Ti 8 GB 能运行 14B 编程模型吗？',
            a: '无法完全放进 GPU：qwen2.5-coder:14b 下载 9.0 GB，超出 8 GB 上限。启用部分 CPU 卸载可以运行，但慢得多。12 GB 显卡可以完整放进显存。',
          },
          {
            q: '锐龙 7 5700X 会成为本地 LLM 的瓶颈吗？',
            a: '不会。模型能放进显存时，生成速度由 GPU 决定。CPU 只影响被卸载到系统内存的层。',
          },
          {
            q: 'RTX 3070 Ti 能运行 Qwen3-Coder 30B 吗？',
            a: '只有把 19 GB 模型的大部分放在系统内存里才行。它是约 3B 激活参数的混合专家模型，所以能启动，但智能体场景下响应很慢。请准备 32 GB 内存，并把它当作实验。',
          },
          {
            q: '自动补全和聊天分别该用哪个模型？',
            a: '自动补全用 Qwen2.5-Coder 7B（或 1.5B 版本），因为它针对 fill-in-the-middle 训练；聊天、讲解和重构用 Qwen3 8B。',
          },
          {
            q: 'CPU 卸载时内存速度重要吗？',
            a: '重要，但属于次要因素。更快的 DDR4 能提高内存中各层的吞吐量，但对能放进显存的层来说，GPU 仍是主要限制。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-es.webp',
    title: '¿Mejor LLM local para programar con AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'Mejor LLM para programar: Ryzen 5700X + RTX 3070 Ti (8 GB)',
    metaDescription: 'Mejores LLM locales para programar con un Ryzen 7 5700X y RTX 3070 Ti de 8 GB: Qwen3 8B (5,2 GB) para chat, Qwen2.5-Coder 7B (4,7 GB) para autocompletado.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: '¿Qué modelos LLM para programadores puedo usar en local con un AMD 5700X y una RTX 3070 Ti?',
        answer: 'Con una RTX 3070 Ti de 8 GB de VRAM, usa Qwen3 8B (qwen3:8b, 5,2 GB de descarga) para el chat de código y las explicaciones, y Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4,7 GB) para el autocompletado en el editor. Ambos caben completos en la VRAM. El Ryzen 7 5700X no es el cuello de botella: lo son los 8 GB de VRAM, así que los modelos de código de 14B (unos 9 GB) no caben por completo en la GPU.',
        bullets: [
          'Qwen3 8B: 5,2 GB de descarga, contexto de 40K, el mejor modelo único para chat de código con 8 GB',
          'Qwen2.5-Coder 7B: 4,7 GB, entrenado para autocompletado fill-in-the-middle',
          'Los modelos de código de 14B y Qwen3-Coder 30B necesitan offload a CPU en esta tarjeta y van mucho más lentos',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3 8B (5,2 GB) es el mejor modelo único para programar con una RTX 3070 Ti de 8 GB; Qwen2.5-Coder 7B (4,7 GB) es la opción para autocompletar en el editor. Ambos caben en la VRAM',
          'Los modelos de código de 14B (qwen2.5-coder:14b pesa 9,0 GB, qwen3:14b 9,3 GB) superan los 8 GB y solo funcionan con offload parcial a CPU, lo que frena mucho la generación',
          'Qwen3-Coder 30B es una descarga de 19 GB (mixture-of-experts); con 8 GB de VRAM casi todo queda en la RAM del sistema, así que es un experimento con 32 GB de RAM, no un modelo de uso diario',
          'El Ryzen 7 5700X no es el límite aquí: lo es la VRAM. Mantén el contexto entre 8K y 16K tokens y usa Q4 o superior para código',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Los mejores LLM locales para programar con una RTX 3070 Ti de 8 GB de VRAM son Qwen3 8B (5,2 GB) para chat y Qwen2.5-Coder 7B (4,7 GB) para autocompletado.' },
          { type: 'plain-terms', text: 'Elige un modelo de menos de unos 6 GB para que quepa con su contexto en los 8 GB de la 3070 Ti; el Ryzen 7 5700X no limita la velocidad.' },
        ],
      },
      body1: {
        title: 'Qwen3 8B y Qwen2.5-Coder 7B caben en una tarjeta de 8 GB',
        content: [
            '<strong>Para programar con una RTX 3070 Ti (8 GB), usa Qwen3 8B para chat, explicaciones y refactorización, y Qwen2.5-Coder 7B para el autocompletado en línea.</strong> Ambos están en Ollama con cuantización Q4 por defecto: qwen3:8b pesa 5,2 GB con 40K de contexto, qwen2.5-coder:7b 4,7 GB con 32K. Quedan unos 2 a 3 GB para la caché KV y el escritorio.',
            'Qwen2.5-Coder está entrenado para fill-in-the-middle (FIM), el modo de completado que extensiones como Continue usan para el autocompletado con tabulador. Qwen3 8B razona mejor en general y tiene un modo de pensamiento que se desactiva con /no_think para respuestas más rápidas. Si solo quieres un modelo, empieza con Qwen3 8B. Los tamaños y contextos son los de ollama.com; no hemos medido esta configuración, por eso no damos cifras de velocidad.',
            'Para GPU más grandes y más modelos, consulta la guía <a href="/es/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">mejores LLM locales para programar</a>.',
          ],
        columns: [
            'Modelo',
            'Etiqueta Ollama',
            'Descarga',
            '¿Cabe en 8 GB?',
            'Ideal para',
          ],
        rows: [
          { 'Modelo': 'Qwen3 8B', 'Etiqueta Ollama': 'qwen3:8b', 'Descarga': '5,2 GB', '¿Cabe en 8 GB?': 'Sí, completo en VRAM', 'Ideal para': 'Chat, explicaciones, refactorización' },
          { 'Modelo': 'Qwen2.5-Coder 7B', 'Etiqueta Ollama': 'qwen2.5-coder:7b', 'Descarga': '4,7 GB', '¿Cabe en 8 GB?': 'Sí, completo en VRAM', 'Ideal para': 'Autocompletado en el editor (FIM)' },
          { 'Modelo': 'Qwen2.5-Coder 1.5B', 'Etiqueta Ollama': 'qwen2.5-coder:1.5b', 'Descarga': '986 MB', '¿Cabe en 8 GB?': 'Sí, con margen', 'Ideal para': 'Autocompletado ligero junto a un modelo de chat' },
          { 'Modelo': 'Qwen2.5-Coder 14B', 'Etiqueta Ollama': 'qwen2.5-coder:14b', 'Descarga': '9,0 GB', '¿Cabe en 8 GB?': 'No, requiere offload a CPU', 'Ideal para': 'Modelo de código mayor, solo con offload' },
          { 'Modelo': 'Qwen3-Coder 30B', 'Etiqueta Ollama': 'qwen3-coder:30b', 'Descarga': '19 GB', '¿Cabe en 8 GB?': 'No, sobre todo en RAM del sistema', 'Ideal para': 'Programación agéntica con 32 GB+ de RAM, lento' },
        ],
      },
      body2: {
        title: 'Lo que no cabe: 14B, 30B y contexto largo',
        content: [
            '<strong>Un modelo debe caber en la VRAM junto con su caché KV, y 8 GB se agotan antes de lo que sugiere el tamaño de descarga.</strong> Cuando las capas pasan a la RAM del sistema, Ollama sigue funcionando, pero la generación se desploma porque la DDR4 es mucho más lenta que los 608 GB/s de GDDR6X de la tarjeta. Los 8 núcleos Zen 3 del 5700X soportan mejor el offload que una CPU de 4 núcleos, pero es un recurso de emergencia, no un plan.',
            'Qwen3-Coder 30B figura en Ollama con 19 GB y 256K de contexto. Es un modelo mixture-of-experts con unos 3B de parámetros activos, así que puede funcionar con la mayoría de los pesos en la RAM del sistema, pero en una tarjeta de 8 GB ahí está casi todo. Con solo 8 GB de VRAM, espera respuestas lentas en uso agéntico; los resultados varían según la RAM y los ajustes. Considéralo un experimento con 32 GB de RAM.',
            'Un contexto largo hace crecer la caché KV. Mantén 8K a 16K tokens en esta tarjeta y súbelo solo si nvidia-smi muestra VRAM libre. Para código, usa Q4 o superior; Q3 e inferiores pueden introducir errores de sintaxis sutiles.',
          ],
      },
      body3: {
        title: 'Configurar chat y autocompletado en VS Code',
        content: ['Instala Ollama, descarga los dos modelos y apunta una extensión como Continue a http://localhost:11434: qwen3:8b para el chat, qwen2.5-coder:7b para el autocompletado. Ejecuta ollama ps y mira la columna PROCESSOR. 100% GPU significa que el modelo cabe; un reparto CPU/GPU indica que modelo y contexto ya no caben en 8 GB. En esta tarjeta Ollama puede descargar un modelo de 7B a 8B para cargar el otro; para autocompletar junto al chat usa mejor qwen2.5-coder:1.5b (986 MB).'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: 'Mejora la GPU, no la CPU',
        content: [
            '<strong>Si quieres modelos de código de 14B a máxima velocidad, el objetivo de mejora es la GPU.</strong> Una tarjeta de 12 GB como la RTX 3060 12 GB o la RTX 4070 ejecuta completo en VRAM un modelo Q4 de unos 9 GB como qwen2.5-coder:14b. Consulta <a href="/es/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">mejor LLM de código para 12 GB de VRAM</a> y <a href="/es/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">mejor modelo 14B para programar</a>.',
            'El 5800X3D es la mejor mejora de CPU para AM4, pero su 3D V-Cache ayuda en juegos y tareas limitadas por CPU; la inferencia en GPU está limitada por el ancho de banda de la VRAM, y el 5700X no es el límite.',
            'La guía completa de compra de GPU: <a href="/es/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">mejores GPU para LLM locales</a>.',
          ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre LLM de código para AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: '¿Qué modelos LLM para programadores puedo usar en local con un AMD 5700X y una RTX 3070 Ti?',
            a: 'Qwen3 8B (qwen3:8b, 5,2 GB) para chat y explicaciones y Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4,7 GB) para autocompletado en el editor. Ambos caben completos en los 8 GB de VRAM de la 3070 Ti.',
          },
          {
            q: '¿Puedo ejecutar un modelo de código de 14B en una RTX 3070 Ti de 8 GB?',
            a: 'No por completo en la GPU: qwen2.5-coder:14b pesa 9,0 GB, por encima del límite de 8 GB. Con offload parcial a CPU funciona, pero mucho más lento. Una tarjeta de 12 GB lo ejecuta completo en VRAM.',
          },
          {
            q: '¿Es el Ryzen 7 5700X un cuello de botella para los LLM locales?',
            a: 'No. Cuando el modelo cabe en la VRAM, la GPU marca la velocidad de generación. La CPU solo importa para las capas descargadas a la RAM del sistema.',
          },
          {
            q: '¿Puede una RTX 3070 Ti ejecutar Qwen3-Coder 30B?',
            a: 'Solo con la mayor parte de los 19 GB en la RAM del sistema. Es un modelo mixture-of-experts con unos 3B de parámetros activos: arranca, pero las respuestas son lentas en uso agéntico. Cuenta con 32 GB de RAM y considéralo un experimento.',
          },
          {
            q: '¿Qué modelo uso para autocompletar y cuál para chat?',
            a: 'Qwen2.5-Coder 7B (o la versión 1.5B) para el autocompletado con tabulador, porque está entrenado para fill-in-the-middle, y Qwen3 8B para chat, explicaciones y refactorización.',
          },
          {
            q: '¿Importa la velocidad de la RAM en el offload a CPU?',
            a: 'Sí, como factor secundario. Una DDR4 más rápida mejora el rendimiento de las capas en RAM, pero la GPU sigue siendo la restricción principal para las capas que caben en la VRAM.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-pt.webp',
    title: 'Melhor LLM local para programar com AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'Melhor LLM para programar: Ryzen 5700X + RTX 3070 Ti (8 GB)',
    metaDescription: 'Melhores LLMs locais para programar com Ryzen 7 5700X e RTX 3070 Ti de 8 GB: Qwen3 8B (5,2 GB) para chat, Qwen2.5-Coder 7B (4,7 GB) para autocompletar.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Quais modelos de LLM para programadores posso usar localmente com um AMD 5700X e uma RTX 3070 Ti?',
        answer: 'Com uma RTX 3070 Ti de 8 GB de VRAM, use o Qwen3 8B (qwen3:8b, download de 5,2 GB) para chat de código e explicações, e o Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4,7 GB) para autocompletar no editor. Ambos cabem inteiros na VRAM. O Ryzen 7 5700X não é o gargalo: o gargalo são os 8 GB de VRAM, então modelos de código de 14B (cerca de 9 GB) não cabem totalmente na GPU.',
        bullets: [
          'Qwen3 8B: download de 5,2 GB, contexto de 40K, melhor modelo único para chat de código com 8 GB',
          'Qwen2.5-Coder 7B: 4,7 GB, treinado para autocompletar fill-in-the-middle',
          'Modelos de código de 14B e o Qwen3-Coder 30B exigem offload para a CPU nesta placa e ficam bem mais lentos',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Qwen3 8B (5,2 GB) é o melhor modelo único para programar numa RTX 3070 Ti de 8 GB; o Qwen2.5-Coder 7B (4,7 GB) é a escolha para autocompletar no editor. Ambos cabem na VRAM',
          'Modelos de código de 14B (qwen2.5-coder:14b tem 9,0 GB, qwen3:14b tem 9,3 GB) passam de 8 GB e só rodam com offload parcial para a CPU, o que reduz muito a geração',
          'O Qwen3-Coder 30B é um download de 19 GB (mixture-of-experts); com 8 GB de VRAM, a maior parte fica na RAM do sistema, então é um experimento com 32 GB de RAM, não um modelo para o dia a dia',
          'O Ryzen 7 5700X não é o limite aqui: a VRAM é. Mantenha o contexto entre 8K e 16K tokens e use Q4 ou superior para código',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Os melhores LLMs locais para programar numa RTX 3070 Ti de 8 GB de VRAM são o Qwen3 8B (5,2 GB) para chat e o Qwen2.5-Coder 7B (4,7 GB) para autocompletar.' },
          { type: 'plain-terms', text: 'Escolha um modelo com download abaixo de cerca de 6 GB para que ele caiba com o contexto nos 8 GB da 3070 Ti; o Ryzen 7 5700X não limita a velocidade.' },
        ],
      },
      body1: {
        title: 'Qwen3 8B e Qwen2.5-Coder 7B cabem numa placa de 8 GB',
        content: [
            '<strong>Para programar numa RTX 3070 Ti (8 GB), use o Qwen3 8B para chat, explicações e refatoração, e o Qwen2.5-Coder 7B para autocompletar em linha.</strong> Ambos estão no Ollama com quantização Q4 padrão: o qwen3:8b tem download de 5,2 GB e 40K de contexto, o qwen2.5-coder:7b tem 4,7 GB e 32K. Sobram cerca de 2 a 3 GB para o cache KV e a área de trabalho.',
            'O Qwen2.5-Coder é treinado para fill-in-the-middle (FIM), o modo de completar que extensões como o Continue usam para autocompletar com Tab. O Qwen3 8B raciocina melhor em geral e tem um modo de raciocínio que dá para desligar com /no_think para respostas mais rápidas. Se quiser um só modelo, comece pelo Qwen3 8B. Tamanhos e contextos seguem o ollama.com; não medimos esta configuração, por isso não citamos velocidades.',
            'Para GPUs maiores e mais modelos, veja o guia <a href="/pt/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">melhores LLMs locais para programar</a>.',
          ],
        columns: [
            'Modelo',
            'Tag do Ollama',
            'Download',
            'Cabe em 8 GB?',
            'Melhor para',
          ],
        rows: [
          { 'Modelo': 'Qwen3 8B', 'Tag do Ollama': 'qwen3:8b', 'Download': '5,2 GB', 'Cabe em 8 GB?': 'Sim, inteiro na VRAM', 'Melhor para': 'Chat, explicações, refatoração' },
          { 'Modelo': 'Qwen2.5-Coder 7B', 'Tag do Ollama': 'qwen2.5-coder:7b', 'Download': '4,7 GB', 'Cabe em 8 GB?': 'Sim, inteiro na VRAM', 'Melhor para': 'Autocompletar no editor (FIM)' },
          { 'Modelo': 'Qwen2.5-Coder 1.5B', 'Tag do Ollama': 'qwen2.5-coder:1.5b', 'Download': '986 MB', 'Cabe em 8 GB?': 'Sim, com folga', 'Melhor para': 'Autocompletar leve ao lado de um modelo de chat' },
          { 'Modelo': 'Qwen2.5-Coder 14B', 'Tag do Ollama': 'qwen2.5-coder:14b', 'Download': '9,0 GB', 'Cabe em 8 GB?': 'Não, exige offload para a CPU', 'Melhor para': 'Modelo de código maior, só com offload' },
          { 'Modelo': 'Qwen3-Coder 30B', 'Tag do Ollama': 'qwen3-coder:30b', 'Download': '19 GB', 'Cabe em 8 GB?': 'Não, em sua maioria na RAM do sistema', 'Melhor para': 'Programação agêntica com 32 GB+ de RAM, lento' },
        ],
      },
      body2: {
        title: 'O que não cabe: 14B, 30B e contexto longo',
        content: [
            '<strong>Um modelo precisa caber na VRAM junto com o cache KV, e 8 GB acabam mais rápido do que o tamanho do download sugere.</strong> Quando camadas vão para a RAM do sistema, o Ollama continua funcionando, mas a geração despenca porque a DDR4 é muito mais lenta que os 608 GB/s de GDDR6X da placa. Os 8 núcleos Zen 3 do 5700X lidam melhor com offload que uma CPU de 4 núcleos, mas offload é um recurso de emergência, não um plano.',
            'O Qwen3-Coder 30B aparece no Ollama com 19 GB e 256K de contexto. É um modelo mixture-of-experts com cerca de 3B de parâmetros ativos, então pode rodar com a maior parte dos pesos na RAM do sistema, mas numa placa de 8 GB é lá que fica quase tudo. Com apenas 8 GB de VRAM, espere respostas lentas em uso agêntico; os resultados variam com a RAM e as configurações. Trate como experimento com 32 GB de RAM.',
            'Contexto longo aumenta o cache KV. Mantenha 8K a 16K tokens nesta placa e aumente só se o nvidia-smi mostrar VRAM livre. Para código, use Q4 ou superior; Q3 e abaixo podem introduzir erros sutis de sintaxe.',
          ],
      },
      body3: {
        title: 'Configurar chat e autocompletar no VS Code',
        content: ['Instale o Ollama, baixe os dois modelos e aponte uma extensão como o Continue para http://localhost:11434: qwen3:8b para o chat, qwen2.5-coder:7b para autocompletar. Rode ollama ps e veja a coluna PROCESSOR. 100% GPU significa que o modelo cabe; uma divisão CPU/GPU indica que modelo e contexto já não cabem em 8 GB. Nesta placa o Ollama pode descarregar um modelo de 7B a 8B para carregar o outro; para autocompletar ao lado do chat, use o qwen2.5-coder:1.5b (986 MB).'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: 'Atualize a GPU, não a CPU',
        content: [
            '<strong>Se você quer modelos de código de 14B em velocidade total, a GPU é o alvo do upgrade.</strong> Uma placa de 12 GB como a RTX 3060 12 GB ou a RTX 4070 roda inteiro na VRAM um modelo Q4 de cerca de 9 GB, como o qwen2.5-coder:14b. Veja <a href="/pt/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">melhor LLM de código para 12 GB de VRAM</a> e <a href="/pt/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">melhor modelo 14B para programar</a>.',
            'O 5800X3D é o melhor upgrade de CPU para AM4, mas o 3D V-Cache ajuda em jogos e tarefas limitadas pela CPU; a inferência na GPU é limitada pela largura de banda da VRAM, e o 5700X não é o limite.',
            'O guia completo de compra de GPU: <a href="/pt/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">melhores GPUs para LLMs locais</a>.',
          ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs de código para AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Quais modelos de LLM para programadores posso usar localmente com um AMD 5700X e uma RTX 3070 Ti?',
            a: 'Qwen3 8B (qwen3:8b, 5,2 GB) para chat e explicações e Qwen2.5-Coder 7B (qwen2.5-coder:7b, 4,7 GB) para autocompletar no editor. Ambos cabem inteiros nos 8 GB de VRAM da 3070 Ti.',
          },
          {
            q: 'Posso rodar um modelo de código de 14B numa RTX 3070 Ti de 8 GB?',
            a: 'Não totalmente na GPU: o qwen2.5-coder:14b tem 9,0 GB de download, acima do limite de 8 GB. Com offload parcial para a CPU ele roda, mas bem mais lento. Uma placa de 12 GB roda inteiro na VRAM.',
          },
          {
            q: 'O Ryzen 7 5700X é um gargalo para LLMs locais?',
            a: 'Não. Quando o modelo cabe na VRAM, a GPU define a velocidade de geração. A CPU só importa para as camadas descarregadas para a RAM do sistema.',
          },
          {
            q: 'Uma RTX 3070 Ti roda o Qwen3-Coder 30B?',
            a: 'Só com a maior parte dos 19 GB na RAM do sistema. É um modelo mixture-of-experts com cerca de 3B de parâmetros ativos: ele inicia, mas as respostas são lentas em uso agêntico. Conte com 32 GB de RAM e trate como experimento.',
          },
          {
            q: 'Qual modelo uso para autocompletar e qual para chat?',
            a: 'Qwen2.5-Coder 7B (ou a versão 1.5B) para autocompletar com Tab, porque é treinado para fill-in-the-middle, e Qwen3 8B para chat, explicações e refatoração.',
          },
          {
            q: 'A velocidade da RAM importa no offload para a CPU?',
            a: 'Sim, como fator secundário. DDR4 mais rápida aumenta a vazão das camadas na RAM, mas a GPU continua sendo a principal restrição para as camadas que cabem na VRAM.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-ar.webp',
    title: 'ما أفضل نموذج لغوي محلي للبرمجة على AMD 5700X + RTX 3070 Ti؟',
    seoTitle: 'أفضل LLM للبرمجة: Ryzen 5700X مع RTX 3070 Ti (8 GB)',
    metaDescription: 'أفضل نماذج LLM المحلية للمبرمجين مع Ryzen 7 5700X وRTX 3070 Ti بسعة 8 GB: Qwen3 8B (5.2 GB) للدردشة وQwen2.5-Coder 7B (4.7 GB) للإكمال التلقائي.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'ما نماذج LLM المناسبة للمبرمجين التي يمكنني تشغيلها محليًا على AMD 5700X وRTX 3070 Ti؟',
        answer: 'على RTX 3070 Ti بذاكرة 8 GB، استخدم Qwen3 8B (‏qwen3:8b، تنزيل 5.2 GB) للدردشة البرمجية والشرح، وQwen2.5-Coder 7B (‏qwen2.5-coder:7b، ‏4.7 GB) للإكمال التلقائي في المحرر. كلاهما يتسع بالكامل في VRAM. العائق ليس Ryzen 7 5700X بل ذاكرة 8 GB، لذلك لا تتسع نماذج البرمجة بحجم 14B (نحو 9 GB) بالكامل في وحدة المعالجة الرسومية.',
        bullets: [
          'Qwen3 8B: تنزيل 5.2 GB، سياق 40K، أفضل نموذج منفرد للدردشة البرمجية مع 8 GB',
          'Qwen2.5-Coder 7B: ‏4.7 GB، مُدرَّب على الإكمال التلقائي بأسلوب fill-in-the-middle',
          'نماذج البرمجة 14B وQwen3-Coder 30B تحتاج إلى تفريغ جزئي على المعالج في هذه البطاقة وتعمل أبطأ بكثير',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3 8B (‏5.2 GB) هو أفضل نموذج برمجة منفرد لبطاقة RTX 3070 Ti بسعة 8 GB، وQwen2.5-Coder 7B (‏4.7 GB) خيار الإكمال التلقائي في المحرر. كلاهما يتسع بالكامل في VRAM',
          'نماذج البرمجة 14B (حجم qwen2.5-coder:14b ‏9.0 GB وqwen3:14b ‏9.3 GB) تتجاوز 8 GB ولا تعمل إلا بتفريغ جزئي على المعالج، مما يبطئ التوليد بشدة',
          'Qwen3-Coder 30B تنزيل بحجم 19 GB من نوع مزيج الخبراء؛ مع VRAM بسعة 8 GB يبقى معظمه في ذاكرة النظام، فاعتبره تجربة مع 32 GB من RAM لا نموذجًا يوميًا',
          'الحد هنا ليس Ryzen 7 5700X بل VRAM. أبقِ السياق بين 8K و16K رمز واستخدم Q4 أو أعلى للشيفرة',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'أفضل نماذج LLM المحلية للبرمجة على RTX 3070 Ti بذاكرة 8 GB هي Qwen3 8B (‏5.2 GB) للدردشة وQwen2.5-Coder 7B (‏4.7 GB) للإكمال التلقائي.' },
          { type: 'plain-terms', text: 'اختر نموذجًا حجم تنزيله أقل من نحو 6 GB ليتسع مع سياقه في 8 GB من بطاقة 3070 Ti؛ فـ Ryzen 7 5700X لا يحدّ السرعة.' },
        ],
      },
      body1: {
        title: 'Qwen3 8B وQwen2.5-Coder 7B يتسعان في بطاقة 8 GB',
        content: [
            '<strong>للبرمجة على RTX 3070 Ti (بسعة 8 GB)، شغّل Qwen3 8B للدردشة والشرح وإعادة الهيكلة، وQwen2.5-Coder 7B للإكمال التلقائي داخل السطر.</strong> كلاهما متوفر في Ollama بتكميم Q4 الافتراضي: qwen3:8b تنزيله 5.2 GB بسياق 40K، وqwen2.5-coder:7b حجمه 4.7 GB بسياق 32K. يتبقى نحو 2 إلى 3 GB من الـ 8 GB لذاكرة KV وسطح المكتب.',
            'تدرّب Qwen2.5-Coder على أسلوب fill-in-the-middle (FIM)، وهو نمط الإكمال الذي تستخدمه إضافات المحررات مثل Continue للإكمال بزر Tab. أما Qwen3 8B فأقوى في الاستدلال العام وله وضع تفكير يمكن إيقافه بـ /no_think عند الرغبة في إجابات أسرع. إن أردت نموذجًا واحدًا فابدأ بـ Qwen3 8B. أحجام التنزيل ونوافذ السياق وفق ما يعرضه ollama.com؛ ولم نختبر هذا الجهاز بالتحديد، لذا لا نذكر أرقام سرعة.',
            'لبطاقات أكبر ونماذج برمجة أكثر، راجع دليل <a href="/ar/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">أفضل نماذج LLM المحلية للبرمجة</a>.',
          ],
        columns: [
            'النموذج',
            'وسم Ollama',
            'حجم التنزيل',
            'هل يتسع في 8 GB؟',
            'الأنسب لـ',
          ],
        rows: [
          { 'النموذج': 'Qwen3 8B', 'وسم Ollama': 'qwen3:8b', 'حجم التنزيل': '5.2 GB', 'هل يتسع في 8 GB؟': 'نعم، بالكامل في VRAM', 'الأنسب لـ': 'الدردشة والشرح وإعادة الهيكلة' },
          { 'النموذج': 'Qwen2.5-Coder 7B', 'وسم Ollama': 'qwen2.5-coder:7b', 'حجم التنزيل': '4.7 GB', 'هل يتسع في 8 GB؟': 'نعم، بالكامل في VRAM', 'الأنسب لـ': 'الإكمال التلقائي في المحرر (FIM)' },
          { 'النموذج': 'Qwen2.5-Coder 1.5B', 'وسم Ollama': 'qwen2.5-coder:1.5b', 'حجم التنزيل': '986 MB', 'هل يتسع في 8 GB؟': 'نعم، مع هامش واسع', 'الأنسب لـ': 'إكمال خفيف بجانب نموذج دردشة' },
          { 'النموذج': 'Qwen2.5-Coder 14B', 'وسم Ollama': 'qwen2.5-coder:14b', 'حجم التنزيل': '9.0 GB', 'هل يتسع في 8 GB؟': 'لا، يحتاج تفريغًا على المعالج', 'الأنسب لـ': 'نموذج برمجة أكبر، مع التفريغ فقط' },
          { 'النموذج': 'Qwen3-Coder 30B', 'وسم Ollama': 'qwen3-coder:30b', 'حجم التنزيل': '19 GB', 'هل يتسع في 8 GB؟': 'لا، معظمه في ذاكرة النظام', 'الأنسب لـ': 'برمجة وكيلية مع 32 GB+ من RAM، بطيء' },
        ],
      },
      body2: {
        title: 'ما لا يتسع: 14B و30B والسياق الطويل',
        content: [
            '<strong>يجب أن يتسع النموذج في VRAM مع ذاكرة KV الخاصة به، وتنفد سعة 8 GB أسرع مما يوحي به حجم التنزيل.</strong> عندما تنتقل بعض الطبقات إلى ذاكرة النظام يستمر Ollama في العمل لكن التوليد ينهار، لأن DDR4 أبطأ بكثير من 608 GB/s الخاصة بذاكرة GDDR6X في البطاقة. أنوية Zen 3 الثمانية في 5700X تتعامل مع التفريغ أفضل من معالج رباعي الأنوية، لكن التفريغ حل احتياطي لا خطة.',
            'يظهر Qwen3-Coder 30B في Ollama بحجم 19 GB وسياق 256K. وهو نموذج مزيج خبراء بنحو 3B معامل نشط، فيمكن تشغيله مع بقاء معظم الأوزان في ذاكرة النظام، لكن في بطاقة 8 GB يكون معظمه هناك. مع 8 GB فقط من VRAM توقّع استجابات بطيئة في الاستخدام الوكيلي، وتختلف النتائج بحسب الذاكرة والإعدادات. اعتبره تجربة تتطلب 32 GB من RAM.',
            'السياق الطويل يكبّر ذاكرة KV. أبقِ السياق بين 8K و16K رمز في هذه البطاقة ولا ترفعه إلا إذا أظهر nvidia-smi مساحة VRAM فارغة. للشيفرة استخدم Q4 أو أعلى؛ فـ Q3 وما دونه قد يُدخل أخطاء نحوية خفية.',
          ],
      },
      body3: {
        title: 'إعداد الدردشة والإكمال التلقائي في VS Code',
        content: ['ثبّت Ollama ونزّل النموذجين، ثم وجّه إضافة محرر مثل Continue إلى http://localhost:11434: النموذج qwen3:8b للدردشة وqwen2.5-coder:7b للإكمال التلقائي. شغّل ollama ps وانظر إلى عمود PROCESSOR. القيمة 100% GPU تعني أن النموذج يتسع؛ أما التقسيم بين CPU وGPU فيعني أن النموذج مع السياق لم يعد يتسع في 8 GB. في هذه البطاقة قد يُفرّغ Ollama نموذجًا بحجم 7B إلى 8B ليحمّل الآخر، لذا للإكمال التلقائي بجانب نموذج الدردشة استخدم qwen2.5-coder:1.5b بحجم 986 MB.'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: 'رقِّ البطاقة الرسومية لا المعالج',
        content: [
            '<strong>إن أردت نماذج برمجة 14B بأقصى سرعة فهدف الترقية هو البطاقة الرسومية.</strong> بطاقة بسعة 12 GB مثل RTX 3060 12 GB أو RTX 4070 تشغّل نموذج Q4 بحجم نحو 9 GB مثل qwen2.5-coder:14b بالكامل في VRAM. راجع <a href="/ar/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">أفضل LLM للبرمجة مع 12 GB من VRAM</a> و<a href="/ar/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">أفضل نموذج 14B للبرمجة</a>.',
            'المعالج 5800X3D أفضل ترقية لمنصة AM4، لكن ذاكرة 3D V-Cache تفيد الألعاب والمهام المحدودة بالمعالج؛ واستدلال LLM على البطاقة الرسومية يحدّه عرض نطاق VRAM، و5700X ليس الحد.',
            'دليل شراء البطاقات الكامل: <a href="/ar/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">أفضل بطاقات GPU لنماذج LLM المحلية</a>.',
          ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج LLM للبرمجة على AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'ما نماذج LLM المناسبة للمبرمجين التي يمكنني استخدامها محليًا على AMD 5700X وRTX 3070 Ti؟',
            a: 'نموذج Qwen3 8B (‏qwen3:8b، ‏5.2 GB) للدردشة والشرح، وQwen2.5-Coder 7B (‏qwen2.5-coder:7b، ‏4.7 GB) للإكمال التلقائي في المحرر. كلاهما يتسع بالكامل في 8 GB من VRAM في 3070 Ti.',
          },
          {
            q: 'هل أستطيع تشغيل نموذج برمجة 14B على RTX 3070 Ti بسعة 8 GB؟',
            a: 'ليس بالكامل على البطاقة الرسومية: حجم qwen2.5-coder:14b ‏9.0 GB وهو فوق حد 8 GB. مع التفريغ الجزئي على المعالج يعمل لكن أبطأ بكثير. بطاقة بسعة 12 GB تشغّله بالكامل في VRAM.',
          },
          {
            q: 'هل Ryzen 7 5700X عائق أمام نماذج LLM المحلية؟',
            a: 'لا. عندما يتسع النموذج في VRAM تحدد البطاقة الرسومية سرعة التوليد. يهم المعالج فقط للطبقات المفرَّغة إلى ذاكرة النظام.',
          },
          {
            q: 'هل تشغّل RTX 3070 Ti النموذج Qwen3-Coder 30B؟',
            a: 'فقط إذا بقي معظم النموذج البالغ 19 GB في ذاكرة النظام. هو نموذج مزيج خبراء بنحو 3B معامل نشط، فيبدأ العمل لكن استجاباته بطيئة في الاستخدام الوكيلي. خطّط لـ 32 GB من RAM واعتبره تجربة.',
          },
          {
            q: 'أي نموذج أستخدم للإكمال التلقائي وأيّها للدردشة؟',
            a: 'استخدم Qwen2.5-Coder 7B (أو نسخة 1.5B) للإكمال بزر Tab لأنه مُدرَّب على fill-in-the-middle، وQwen3 8B للدردشة والشرح وإعادة الهيكلة.',
          },
          {
            q: 'هل تهم سرعة الذاكرة RAM في التفريغ على المعالج؟',
            a: 'نعم، كعامل ثانوي. تزيد DDR4 الأسرع إنتاجية الطبقات الموجودة في RAM، لكن تبقى البطاقة الرسومية القيد الرئيسي للطبقات التي تتسع في VRAM.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-ko.webp',
    title: 'AMD 5700X + RTX 3070 Ti에서 코딩용으로 가장 좋은 로컬 LLM은?',
    seoTitle: '라이젠 5700X + RTX 3070 Ti 코딩 LLM 추천 (8GB)',
    metaDescription: '라이젠 7 5700X와 RTX 3070 Ti 8GB용 코딩 로컬 LLM: 채팅은 Qwen3 8B(5.2GB), 자동 완성은 Qwen2.5-Coder 7B(4.7GB). Ollama 태그 포함.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    targetKeywords: [
      'AMD 5700X RTX 3070 Ti 코딩 LLM',
      'RTX 3070 Ti 로컬 코딩 모델',
      '3070 Ti 8GB VRAM 코딩 추천 모델',
      '코더용 로컬 LLM',
    ],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: 'AMD 5700X와 RTX 3070 Ti에서 로컬로 쓸 수 있는 코더용 LLM은 무엇인가요?',
        answer: 'VRAM 8GB의 RTX 3070 Ti에서는 코딩 채팅과 설명에 Qwen3 8B(qwen3:8b, 다운로드 5.2GB), 에디터 자동 완성에 Qwen2.5-Coder 7B(qwen2.5-coder:7b, 4.7GB)를 쓰세요. 둘 다 VRAM에 완전히 들어갑니다. 병목은 라이젠 7 5700X가 아니라 8GB VRAM이어서, 14B 코딩 모델(약 9GB)은 GPU에 전부 올라가지 않습니다.',
        bullets: [
          'Qwen3 8B: 다운로드 5.2GB, 컨텍스트 40K, 8GB에서 코딩 채팅에 가장 좋은 단일 모델',
          'Qwen2.5-Coder 7B: 4.7GB, fill-in-the-middle 자동 완성용으로 학습',
          '14B 코더와 Qwen3-Coder 30B는 이 카드에서 CPU 오프로드가 필요해 훨씬 느립니다',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen3 8B(5.2GB)는 8GB RTX 3070 Ti에서 가장 좋은 단일 코딩 모델이고, Qwen2.5-Coder 7B(4.7GB)는 에디터 자동 완성에 알맞습니다. 둘 다 VRAM에 완전히 들어갑니다',
          '14B 코더(qwen2.5-coder:14b는 9.0GB, qwen3:14b는 9.3GB)는 8GB를 넘어 부분 CPU 오프로드로만 실행되며 생성 속도가 크게 떨어집니다',
          'Qwen3-Coder 30B는 19GB짜리 전문가 혼합 모델이라 VRAM 8GB에서는 대부분이 시스템 RAM에 놓입니다. 32GB RAM에서 해보는 실험일 뿐 일상용 모델이 아닙니다',
          '여기서 한계는 라이젠 7 5700X가 아니라 VRAM입니다. 컨텍스트는 8K~16K 토큰으로 유지하고 코드에는 Q4 이상을 쓰세요',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'VRAM 8GB의 RTX 3070 Ti에 맞는 코딩용 로컬 LLM은 채팅용 Qwen3 8B(5.2GB)와 자동 완성용 Qwen2.5-Coder 7B(4.7GB)입니다.' },
          { type: 'plain-terms', text: '다운로드가 약 6GB 미만인 모델을 고르면 컨텍스트와 함께 3070 Ti의 8GB에 들어가며, 라이젠 7 5700X는 속도를 제한하지 않습니다.' },
        ],
      },
      body1: {
        title: 'Qwen3 8B와 Qwen2.5-Coder 7B는 8GB 카드에 들어갑니다',
        content: [
            '<strong>RTX 3070 Ti(8GB)에서 코딩할 때는 채팅·설명·리팩터링에 Qwen3 8B, 인라인 자동 완성에 Qwen2.5-Coder 7B를 쓰세요.</strong> 둘 다 Ollama 기본 Q4 양자화로 제공되며, qwen3:8b는 다운로드 5.2GB에 컨텍스트 40K, qwen2.5-coder:7b는 4.7GB에 32K입니다. 8GB 중 KV 캐시와 데스크톱용으로 약 2~3GB가 남습니다.',
            'Qwen2.5-Coder는 Continue 같은 에디터 플러그인이 탭 자동 완성에 쓰는 fill-in-the-middle(FIM) 방식으로 학습되었습니다. Qwen3 8B는 범용 추론이 더 강하고 /no_think로 끌 수 있는 사고 모드가 있어 빠른 답이 필요할 때 끄면 됩니다. 모델을 하나만 쓴다면 Qwen3 8B부터 시작하세요. 다운로드 크기와 컨텍스트는 ollama.com 표기를 따랐으며 이 구성을 직접 측정하지 않았으므로 속도 수치는 제시하지 않습니다.',
            '더 큰 GPU와 다른 코딩 모델은 <a href="/ko/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">코딩용 최고의 로컬 LLM</a> 가이드를 참고하세요.',
          ],
        columns: [
            '모델',
            'Ollama 태그',
            '다운로드',
            '8GB에 들어가나요?',
            '적합한 용도',
          ],
        rows: [
          { '모델': 'Qwen3 8B', 'Ollama 태그': 'qwen3:8b', '다운로드': '5.2 GB', '8GB에 들어가나요?': '예, VRAM에 완전히 적재', '적합한 용도': '채팅, 설명, 리팩터링' },
          { '모델': 'Qwen2.5-Coder 7B', 'Ollama 태그': 'qwen2.5-coder:7b', '다운로드': '4.7 GB', '8GB에 들어가나요?': '예, VRAM에 완전히 적재', '적합한 용도': '에디터 자동 완성(FIM)' },
          { '모델': 'Qwen2.5-Coder 1.5B', 'Ollama 태그': 'qwen2.5-coder:1.5b', '다운로드': '986 MB', '8GB에 들어가나요?': '예, 여유 있음', '적합한 용도': '채팅 모델과 함께 쓰는 가벼운 자동 완성' },
          { '모델': 'Qwen2.5-Coder 14B', 'Ollama 태그': 'qwen2.5-coder:14b', '다운로드': '9.0 GB', '8GB에 들어가나요?': '아니요, CPU 오프로드 필요', '적합한 용도': '더 큰 코더(오프로드 시에만)' },
          { '모델': 'Qwen3-Coder 30B', 'Ollama 태그': 'qwen3-coder:30b', '다운로드': '19 GB', '8GB에 들어가나요?': '아니요, 대부분 시스템 RAM', '적합한 용도': '32GB 이상 RAM의 에이전트형 코딩(느림)' },
        ],
      },
      body2: {
        title: '들어가지 않는 것: 14B, 30B, 긴 컨텍스트',
        content: [
            '<strong>모델은 KV 캐시와 함께 VRAM에 들어가야 하며, 8GB는 다운로드 크기가 시사하는 것보다 빨리 찹니다.</strong> 레이어가 시스템 RAM으로 넘치면 Ollama는 계속 동작하지만, DDR4가 카드의 608GB/s GDDR6X보다 훨씬 느려 생성 속도가 급락합니다. 5700X의 Zen 3 8코어는 4코어 CPU보다 오프로드를 잘 처리하지만 오프로드는 대안일 뿐 계획이 아닙니다.',
            'Qwen3-Coder 30B는 Ollama에 19GB, 컨텍스트 256K로 올라와 있습니다. 활성 파라미터가 약 3B인 전문가 혼합 모델이라 가중치 대부분을 시스템 RAM에 두고 실행할 수 있지만, 8GB 카드에서는 대부분이 그곳에 놓입니다. VRAM이 8GB뿐이면 에이전트형 사용에서 응답이 느릴 것으로 예상되며, 결과는 RAM과 설정에 따라 다릅니다. 32GB RAM이 필요한 실험으로 취급하세요.',
            '긴 컨텍스트는 KV 캐시를 키웁니다. 이 카드에서는 8K~16K 토큰으로 유지하고 nvidia-smi에서 VRAM 여유가 보일 때만 늘리세요. 코드에는 Q4 이상을 쓰세요. Q3 이하는 미묘한 구문 오류를 일으킬 수 있습니다.',
          ],
      },
      body3: {
        title: 'VS Code에서 채팅과 자동 완성 설정하기',
        content: ['Ollama를 설치하고 두 모델을 받은 뒤 Continue 같은 에디터 확장을 http://localhost:11434로 지정하세요. 채팅은 qwen3:8b, 자동 완성은 qwen2.5-coder:7b입니다. ollama ps로 PROCESSOR 열을 확인하세요. 100% GPU면 모델이 들어간 것이고, CPU/GPU로 나뉘면 모델과 컨텍스트가 8GB에 더는 들어가지 않는다는 뜻입니다. 이 카드에서는 Ollama가 7B~8B 모델 하나를 내리고 다른 하나를 올릴 수 있으므로, 채팅 모델 옆의 자동 완성에는 986MB짜리 qwen2.5-coder:1.5b를 쓰세요.'],
        codeBlock: 'ollama pull qwen3:8b\nollama pull qwen2.5-coder:7b\nollama ps',
        codeLanguage: 'bash',
      },
      body4: {
        title: 'CPU가 아니라 GPU를 업그레이드하세요',
        content: [
            '<strong>14B 코딩 모델을 최고 속도로 쓰고 싶다면 업그레이드 대상은 GPU입니다.</strong> RTX 3060 12GB나 RTX 4070 같은 12GB 카드는 qwen2.5-coder:14b처럼 약 9GB인 Q4 코더를 VRAM에 완전히 올릴 수 있습니다. <a href="/ko/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12GB VRAM용 최고의 코딩 LLM</a>과 <a href="/ko/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">코딩용 최고의 14B 모델</a>을 참고하세요.',
            '5800X3D는 AM4 최고의 CPU 업그레이드지만 3D V-Cache는 게임과 CPU 의존 작업에 도움이 됩니다. GPU의 LLM 추론은 VRAM 대역폭이 한계이고 5700X는 병목이 아닙니다.',
            'GPU 구매 가이드 전체는 <a href="/ko/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">로컬 LLM용 최고의 GPU</a>를 참고하세요.',
          ],
      },
      faq: {
        id: 'faq',
        title: 'AMD 5700X + RTX 3070 Ti 코딩 LLM 빠른 답변',
        faqs: [
          {
            q: 'AMD 5700X와 RTX 3070 Ti에서 로컬로 쓸 수 있는 코더용 LLM은 무엇인가요?',
            a: '채팅과 설명에는 Qwen3 8B(qwen3:8b, 5.2GB), 에디터 자동 완성에는 Qwen2.5-Coder 7B(qwen2.5-coder:7b, 4.7GB)가 알맞습니다. 둘 다 3070 Ti의 8GB VRAM에 완전히 들어갑니다.',
          },
          {
            q: 'RTX 3070 Ti 8GB에서 14B 코딩 모델을 실행할 수 있나요?',
            a: 'GPU에 전부 올라가지는 않습니다. qwen2.5-coder:14b는 다운로드 9.0GB로 8GB 한도를 넘습니다. 부분 CPU 오프로드로는 실행되지만 훨씬 느립니다. 12GB 카드는 VRAM에 완전히 올릴 수 있습니다.',
          },
          {
            q: '라이젠 7 5700X가 로컬 LLM의 병목인가요?',
            a: '아닙니다. 모델이 VRAM에 들어가면 생성 속도는 GPU가 결정합니다. CPU는 시스템 RAM으로 오프로드된 레이어에만 영향을 줍니다.',
          },
          {
            q: 'RTX 3070 Ti에서 Qwen3-Coder 30B를 실행할 수 있나요?',
            a: '19GB 모델의 대부분을 시스템 RAM에 두어야만 가능합니다. 활성 파라미터 약 3B의 전문가 혼합 모델이라 실행은 되지만 에이전트형 사용에서는 응답이 느립니다. 32GB RAM을 전제로 실험으로 취급하세요.',
          },
          {
            q: '자동 완성과 채팅에는 각각 어떤 모델을 쓰나요?',
            a: '탭 자동 완성에는 fill-in-the-middle로 학습된 Qwen2.5-Coder 7B(또는 1.5B 버전), 채팅·설명·리팩터링에는 Qwen3 8B를 쓰세요.',
          },
          {
            q: 'CPU 오프로드에서 RAM 속도가 중요한가요?',
            a: '네, 부차적인 요인으로 중요합니다. 더 빠른 DDR4는 RAM에 있는 레이어의 처리량을 높이지만, VRAM에 들어가는 레이어는 여전히 GPU가 주된 제약입니다.',
          },
        ],
      },
    },
  },
}
