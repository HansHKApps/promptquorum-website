import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best MoE Models for Local Coding?',
    dateModified: '2026-10-17',
    seoTitle: 'Best MoE Models for Local Coding 2026 (16–32 GB)',
    metaDescription: 'gpt-oss-20b runs in 16 GB, Qwen3-Coder-30B-A3B in 24 GB, Qwen3.6-35B-A3B in 32 GB. Compare active parameters, Ollama sizes and SWE-bench scores.',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-en.webp',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: ['Qwen3.6-35B-A3B', 'Qwen3-Coder-30B-A3B', 'Qwen3-Coder-Next', 'GLM-4.7-Flash', 'gpt-oss-20b', 'gpt-oss-120b'],
    current_benchmarks_used: ['SWE-bench Verified'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB GPU', '32 GB unified memory', '64 GB unified memory', '80 GB GPU'],
    educationalLevel: 'Advanced',
    audience: 'Developers evaluating MoE models for local coding tasks',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-14b-models-coding', 'qwen-14b-vs-llama-8b'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best MoE models for local coding?',
        answer: 'Qwen3.6-35B-A3B has the highest vendor-reported SWE-bench Verified score of the models compared here and suits 32 GB of memory, Qwen3-Coder-30B-A3B fits a 24 GB GPU, and gpt-oss-20b fits 16 GB. MoE models compute only 3–5B active parameters per token, so they run fast, but they still need memory for all experts.',
        bullets: [
          '16 GB: gpt-oss-20b (21B total, 3.6B active, 14 GB on Ollama)',
          '24 GB: Qwen3-Coder-30B-A3B or GLM-4.7-Flash (19 GB each)',
          '32 GB+: Qwen3.6-35B-A3B (~24 GB); 64–80 GB: Qwen3-Coder-Next, gpt-oss-120b',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoE models load every expert into memory but compute only 3–5B active parameters per token, so they run faster than dense models of the same file size, not in less memory',
          'gpt-oss-20b (14 GB on Ollama) is the MoE pick for 16 GB; Qwen3-Coder-30B-A3B and GLM-4.7-Flash (19 GB each) fit a 24 GB GPU',
          'Qwen3.6-35B-A3B (~24 GB) reports 73.4 on SWE-bench Verified on its model card, the highest figure of the models compared here, and suits 32 GB of memory',
          'Qwen3-Coder-Next (52 GB) and gpt-oss-120b (65 GB) need 64–80 GB of unified memory or VRAM',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6-35B-A3B (35B total, 3B active, about 24 GB on Ollama) has the highest vendor-reported SWE-bench Verified score of the models compared here and suits 32 GB of memory; gpt-oss-20b covers 16 GB and Qwen3-Coder-30B-A3B covers a 24 GB GPU.' },
          { type: 'plain-terms', text: 'A MoE model holds many expert sub-networks and uses only a few per token, so it generates quickly but still needs memory for all of them. Choose a model whose Ollama download leaves several GB of headroom for the context cache.' },
        ],
      },
      body1: {
        title: 'MoE Models Need Memory for Total Parameters, Not Active Ones',
        content: [
          '<strong>A Mixture of Experts (MoE) model routes each token through a few expert sub-networks, so speed follows the active parameters while memory follows the total parameters.</strong> Qwen3.6-35B-A3B has 256 experts and activates 8 routed plus 1 shared expert per token (3B of 35B parameters), according to its Hugging Face model card.',
          'A 3B-active MoE therefore generates tokens at roughly the cost of a small dense model, but its 14–24 GB download must still sit in VRAM or fast unified memory. The sizes in the table are Ollama downloads; add headroom for the context cache.',
          'Model-card benchmark scores are vendor-reported on different agent setups: SWE-bench Verified is 73.4 for Qwen3.6-35B-A3B, 70.6 for Qwen3-Coder-Next and 59.2 for GLM-4.7-Flash. Treat them as directional rather than a head-to-head; PromptQuorum did not re-run them.',
        ],
        columns: ['Model', 'Total / active', 'Ollama size', 'Memory tier'],
        rows: [
          { 'Model': 'Qwen3.6-35B-A3B', 'Total / active': '35B / 3B', 'Ollama size': '~24 GB', 'Memory tier': '32 GB' },
          { 'Model': 'Qwen3-Coder-30B-A3B', 'Total / active': '30B / 3.3B', 'Ollama size': '19 GB', 'Memory tier': '24 GB' },
          { 'Model': 'GLM-4.7-Flash', 'Total / active': '30B / 3B', 'Ollama size': '19 GB', 'Memory tier': '24 GB' },
          { 'Model': 'gpt-oss-20b', 'Total / active': '21B / 3.6B', 'Ollama size': '14 GB', 'Memory tier': '16 GB' },
          { 'Model': 'Qwen3-Coder-Next', 'Total / active': '80B / 3B', 'Ollama size': '52 GB', 'Memory tier': '64 GB' },
          { 'Model': 'gpt-oss-120b', 'Total / active': '117B / 5.1B', 'Ollama size': '65 GB', 'Memory tier': '80 GB' },
        ],
      },
      body2: {
        title: 'Pick the MoE Model That Matches Your Memory',
        content: [
          '<strong>For 16 GB of VRAM, run gpt-oss-20b: 21B total, 3.6B active, 14 GB on Ollama.</strong> That leaves about 2 GB for context on a 16 GB card, so keep the context window modest.',
          'For a 24 GB GPU, run Qwen3-Coder-30B-A3B (19 GB, 256K context, tuned for code) or GLM-4.7-Flash (19 GB, MIT license). Both are 30B-A3B MoE models with 3–3.3B active parameters.',
          'For 32 GB of unified memory or a 32 GB GPU, run Qwen3.6-35B-A3B (about 24 GB, 256K context, Apache 2.0). It is tight on a 24 GB GPU, where part of the model spills into system RAM and speed drops.',
          'For 64–80 GB, Qwen3-Coder-Next (80B total, 3B active, 52 GB at Q4_K_M) suits a 64 GB machine, and gpt-oss-120b (117B total, 5.1B active, 65 GB) targets a single 80 GB GPU according to OpenAI\'s model card.',
          'Below 16 GB, MoE stops being practical; see the <a href="/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">best 14B models for coding</a> for dense alternatives.',
        ],
      },
      body3: {
        title: 'Run MoE Models with Ollama',
        content: [
          '<strong>Each model in the table is one command:</strong> <code>ollama run gpt-oss:20b</code>, <code>ollama run qwen3-coder:30b</code>, <code>ollama run glm-4.7-flash</code>, <code>ollama run qwen3.6:35b</code>, <code>ollama run qwen3-coder-next</code> and <code>ollama run gpt-oss:120b</code>.',
          'Ollama splits layers between GPU and system RAM when a model exceeds VRAM. In llama.cpp you can steer this for MoE models: the <code>--cpu-moe</code> and <code>--n-cpu-moe</code> flags keep expert weights in system RAM while attention stays on the GPU, so a 19–24 GB model can run on a 16 GB card at lower speed. PromptQuorum has not measured the speed.',
          'A common mistake is judging fit by active parameters: a "3B active" model is not a 3B-size download. Check the file size on the model\'s Ollama page before pulling it.',
          'For dense alternatives at every VRAM tier, see the <a href="/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">best local LLMs for coding guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About MoE Models for Coding',
        faqs: [
          {
            q: 'What is a MoE model and why does it matter for local coding?',
            a: 'MoE stands for Mixture of Experts. The model contains many expert sub-networks but activates only a few per token, so generation speed matches a much smaller dense model while the full parameter count supplies broad knowledge across languages and frameworks.',
          },
          {
            q: 'Which MoE model is best for 16 GB of VRAM?',
            a: 'gpt-oss-20b. It has 21B total and 3.6B active parameters, downloads at 14 GB on Ollama and is released under Apache 2.0. The 19 GB models (Qwen3-Coder-30B-A3B, GLM-4.7-Flash) need a 24 GB GPU or CPU offload.',
          },
          {
            q: 'What is the best small MoE model?',
            a: 'By active parameters, GLM-4.7-Flash (3B), Qwen3-Coder-30B-A3B (3.3B) and gpt-oss-20b (3.6B) are the smallest here. By memory, gpt-oss-20b is smallest at 14 GB; the other two are 19 GB.',
          },
          {
            q: 'Does a MoE model need less VRAM than a dense model?',
            a: 'No. All experts must be loaded, so memory follows total parameters. The benefit is speed: only the active parameters are computed for each token.',
          },
          {
            q: 'Which MoE coding models are on Ollama?',
            a: 'Ollama lists <code>qwen3.6:35b</code>, <code>qwen3-coder:30b</code>, <code>glm-4.7-flash</code>, <code>gpt-oss:20b</code>, <code>qwen3-coder-next</code> and <code>gpt-oss:120b</code>, with download sizes of about 24, 19, 19, 14, 52 and 65 GB.',
          },
          {
            q: 'Is a MoE model better than a dense model for coding?',
            a: 'Not automatically. MoE trades memory for speed. A dense model with a similar file size, such as <code>qwen3.6:27b</code> (18–19 GB), can be slower per token, so test both on your own repositories before choosing.',
          },
          {
            q: 'Why does this page no longer feature Mixtral 8x22B or DeepSeek-V2?',
            a: 'Both are 2024 models that newer MoE releases have replaced for local coding. An earlier version of this page also gave wrong memory figures: Mixtral 8x22B has 141B total parameters (46.7B belongs to Mixtral 8x7B), and DeepSeek-V2 has 236B total parameters, far more than 16 GB can hold.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best 14B Models for Coding](/prompt-bites/best-14b-models-coding) -- dense coding models for 10–16 GB',
          '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) -- coding models by VRAM tier',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          '[Qwen3.6-35B-A3B model card](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — architecture, experts, license and SWE-bench Verified score.',
          '[Qwen3-Coder-Next model card](https://huggingface.co/Qwen/Qwen3-Coder-Next) — 80B total, 3B active, SWE-bench Verified score.',
          '[GLM-4.7-Flash model card](https://huggingface.co/zai-org/GLM-4.7-Flash) — 30B-A3B MoE, MIT license, SWE-bench Verified score.',
          '[gpt-oss-120b model card](https://huggingface.co/openai/gpt-oss-120b) — total and active parameters and memory targets for gpt-oss-120b and gpt-oss-20b.',
          '[Ollama library: qwen3-coder](https://ollama.com/library/qwen3-coder) — tags and download sizes; see also [gpt-oss](https://ollama.com/library/gpt-oss), [glm-4.7-flash](https://ollama.com/library/glm-4.7-flash), [qwen3.6](https://ollama.com/library/qwen3.6) and [qwen3-coder-next](https://ollama.com/library/qwen3-coder-next).',
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Beste MoE-Modelle für lokales Coding?',
    seoTitle: 'Beste MoE-Modelle für lokales Coding 2026 (16–32 GB)',
    metaDescription: 'gpt-oss-20b läuft mit 16 GB, Qwen3-Coder-30B-A3B mit 24 GB, Qwen3.6-35B-A3B mit 32 GB. Aktive Parameter, Ollama-Größen und SWE-bench im Vergleich.',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-de.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Beste MoE-Modelle für lokales Coding?',
        answer: 'Qwen3.6-35B-A3B hat den höchsten herstellerseitig gemeldeten SWE-bench-Verified-Wert der hier verglichenen Modelle und passt zu 32 GB Speicher, Qwen3-Coder-30B-A3B passt auf eine 24-GB-GPU und gpt-oss-20b auf 16 GB. MoE-Modelle berechnen pro Token nur 3–5B aktive Parameter und laufen daher schnell, benötigen aber weiterhin Speicher für alle Experten.',
        bullets: [
          '16 GB: gpt-oss-20b (21B gesamt, 3,6B aktiv, 14 GB auf Ollama)',
          '24 GB: Qwen3-Coder-30B-A3B oder GLM-4.7-Flash (je 19 GB)',
          '32 GB+: Qwen3.6-35B-A3B (~24 GB); 64–80 GB: Qwen3-Coder-Next, gpt-oss-120b',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoE-Modelle laden alle Experten in den Speicher, berechnen aber pro Token nur 3–5B aktive Parameter — sie laufen schneller als Dense-Modelle gleicher Dateigröße, brauchen aber nicht weniger Speicher',
          'gpt-oss-20b (14 GB auf Ollama) ist die MoE-Wahl für 16 GB; Qwen3-Coder-30B-A3B und GLM-4.7-Flash (je 19 GB) passen auf eine 24-GB-GPU',
          'Qwen3.6-35B-A3B (~24 GB) nennt auf seiner Model Card 73,4 bei SWE-bench Verified, den höchsten Wert der hier verglichenen Modelle, und eignet sich für 32 GB Speicher',
          'Qwen3-Coder-Next (52 GB) und gpt-oss-120b (65 GB) brauchen 64–80 GB Unified Memory oder VRAM',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6-35B-A3B (35B gesamt, 3B aktiv, rund 24 GB auf Ollama) hat den höchsten herstellerseitig gemeldeten SWE-bench-Verified-Wert der hier verglichenen Modelle und passt zu 32 GB Speicher; gpt-oss-20b deckt 16 GB ab, Qwen3-Coder-30B-A3B eine 24-GB-GPU.' },
          { type: 'plain-terms', text: 'Ein MoE-Modell enthält viele Experten-Subnetze und nutzt pro Token nur wenige. Es generiert schnell, braucht aber Speicher für alle Experten. Wählen Sie ein Modell, dessen Ollama-Download einige GB Spielraum für den Kontext-Cache lässt.' },
        ],
      },
      body1: {
        title: 'MoE-Modelle brauchen Speicher für alle Parameter, nicht nur die aktiven',
        content: [
          '<strong>Ein Mixture-of-Experts-Modell (MoE) leitet jeden Token durch einige Experten-Subnetze: Die Geschwindigkeit folgt den aktiven Parametern, der Speicherbedarf den Gesamtparametern.</strong> Qwen3.6-35B-A3B hat laut Hugging-Face-Model-Card 256 Experten und aktiviert pro Token 8 geroutete plus 1 geteilten Experten (3B von 35B Parametern).',
          'Ein MoE mit 3B aktiven Parametern generiert Tokens daher ungefähr zum Aufwand eines kleinen Dense-Modells, doch der Download von 14–24 GB muss trotzdem in VRAM oder schnellen Unified Memory passen. Die Größen in der Tabelle sind Ollama-Downloads; rechnen Sie Spielraum für den Kontext-Cache ein.',
          'Benchmark-Werte auf Model Cards stammen von den Herstellern und aus unterschiedlichen Agent-Setups: SWE-bench Verified liegt bei 73,4 für Qwen3.6-35B-A3B, 70,6 für Qwen3-Coder-Next und 59,2 für GLM-4.7-Flash. Verstehen Sie sie als Orientierung, nicht als direkten Vergleich; PromptQuorum hat sie nicht erneut gemessen.',
        ],
        columns: ['Modell', 'Gesamt / aktiv', 'Ollama-Größe', 'Speicherstufe'],
        rows: [
          { 'Modell': 'Qwen3.6-35B-A3B', 'Gesamt / aktiv': '35B / 3B', 'Ollama-Größe': '~24 GB', 'Speicherstufe': '32 GB' },
          { 'Modell': 'Qwen3-Coder-30B-A3B', 'Gesamt / aktiv': '30B / 3.3B', 'Ollama-Größe': '19 GB', 'Speicherstufe': '24 GB' },
          { 'Modell': 'GLM-4.7-Flash', 'Gesamt / aktiv': '30B / 3B', 'Ollama-Größe': '19 GB', 'Speicherstufe': '24 GB' },
          { 'Modell': 'gpt-oss-20b', 'Gesamt / aktiv': '21B / 3.6B', 'Ollama-Größe': '14 GB', 'Speicherstufe': '16 GB' },
          { 'Modell': 'Qwen3-Coder-Next', 'Gesamt / aktiv': '80B / 3B', 'Ollama-Größe': '52 GB', 'Speicherstufe': '64 GB' },
          { 'Modell': 'gpt-oss-120b', 'Gesamt / aktiv': '117B / 5.1B', 'Ollama-Größe': '65 GB', 'Speicherstufe': '80 GB' },
        ],
      },
      body2: {
        title: 'Das MoE-Modell passend zum eigenen Speicher wählen',
        content: [
          '<strong>Für 16 GB VRAM eignet sich gpt-oss-20b: 21B gesamt, 3,6B aktiv, 14 GB auf Ollama.</strong> Auf einer 16-GB-Karte bleiben etwa 2 GB für den Kontext, halten Sie das Kontextfenster daher moderat.',
          'Für eine 24-GB-GPU eignen sich Qwen3-Coder-30B-A3B (19 GB, 256K Kontext, auf Code abgestimmt) oder GLM-4.7-Flash (19 GB, MIT-Lizenz). Beide sind 30B-A3B-MoE-Modelle mit 3–3,3B aktiven Parametern.',
          'Für 32 GB Unified Memory oder eine 32-GB-GPU eignet sich Qwen3.6-35B-A3B (etwa 24 GB, 256K Kontext, Apache 2.0). Auf einer 24-GB-GPU wird es knapp: Teile des Modells landen im Arbeitsspeicher und die Geschwindigkeit sinkt.',
          'Für 64–80 GB passt Qwen3-Coder-Next (80B gesamt, 3B aktiv, 52 GB bei Q4_K_M) auf einen 64-GB-Rechner; gpt-oss-120b (117B gesamt, 5,1B aktiv, 65 GB) zielt laut OpenAI-Model-Card auf eine einzelne 80-GB-GPU.',
          'Unter 16 GB sind MoE-Modelle kaum praktikabel; Dense-Alternativen finden Sie bei den <a href="/de/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">besten 14B-Modellen für Coding</a>.',
        ],
      },
      body3: {
        title: 'MoE-Modelle mit Ollama ausführen',
        content: [
          '<strong>Jedes Modell der Tabelle startet mit einem Befehl:</strong> <code>ollama run gpt-oss:20b</code>, <code>ollama run qwen3-coder:30b</code>, <code>ollama run glm-4.7-flash</code>, <code>ollama run qwen3.6:35b</code>, <code>ollama run qwen3-coder-next</code> und <code>ollama run gpt-oss:120b</code>.',
          'Ollama verteilt Layer auf GPU und Arbeitsspeicher, wenn ein Modell den VRAM übersteigt. In llama.cpp lässt sich das für MoE-Modelle steuern: Die Optionen <code>--cpu-moe</code> und <code>--n-cpu-moe</code> halten Experten-Gewichte im Arbeitsspeicher, während Attention auf der GPU bleibt. So läuft ein 19–24-GB-Modell auf einer 16-GB-Karte mit geringerer Geschwindigkeit. PromptQuorum hat die Geschwindigkeit nicht gemessen.',
          'Ein häufiger Fehler ist, den Speicherbedarf an den aktiven Parametern festzumachen: Ein Modell mit „3B aktiv“ ist kein 3B-großer Download. Prüfen Sie die Dateigröße auf der Ollama-Seite des Modells, bevor Sie es laden.',
          'Dense-Alternativen für jede VRAM-Stufe finden Sie im <a href="/de/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">Leitfaden zu den besten lokalen LLMs für Coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu MoE-Modellen für Coding',
        faqs: [
          {
            q: 'Was ist ein MoE-Modell und warum ist es für lokales Coding relevant?',
            a: 'MoE steht für Mixture of Experts. Das Modell enthält viele Experten-Subnetze, aktiviert aber pro Token nur wenige. Die Generierungsgeschwindigkeit entspricht daher einem viel kleineren Dense-Modell, während die volle Parameterzahl breites Wissen über Sprachen und Frameworks liefert.',
          },
          {
            q: 'Welches MoE-Modell ist am besten für 16 GB VRAM?',
            a: 'gpt-oss-20b. Es hat 21B Gesamt- und 3,6B aktive Parameter, ist auf Ollama 14 GB groß und steht unter Apache 2.0. Die 19-GB-Modelle (Qwen3-Coder-30B-A3B, GLM-4.7-Flash) brauchen eine 24-GB-GPU oder CPU-Offload.',
          },
          {
            q: 'Was ist das beste kleine MoE-Modell?',
            a: 'Nach aktiven Parametern sind GLM-4.7-Flash (3B), Qwen3-Coder-30B-A3B (3,3B) und gpt-oss-20b (3,6B) hier am kleinsten. Nach Speicherbedarf ist gpt-oss-20b mit 14 GB am kleinsten; die beiden anderen brauchen 19 GB.',
          },
          {
            q: 'Braucht ein MoE-Modell weniger VRAM als ein Dense-Modell?',
            a: 'Nein. Alle Experten müssen geladen werden, der Speicherbedarf folgt also den Gesamtparametern. Der Vorteil ist die Geschwindigkeit: Pro Token werden nur die aktiven Parameter berechnet.',
          },
          {
            q: 'Welche MoE-Coding-Modelle gibt es auf Ollama?',
            a: 'Ollama führt <code>qwen3.6:35b</code>, <code>qwen3-coder:30b</code>, <code>glm-4.7-flash</code>, <code>gpt-oss:20b</code>, <code>qwen3-coder-next</code> und <code>gpt-oss:120b</code>, mit Downloadgrößen von etwa 24, 19, 19, 14, 52 und 65 GB.',
          },
          {
            q: 'Ist ein MoE-Modell für Coding besser als ein Dense-Modell?',
            a: 'Nicht automatisch. MoE tauscht Speicher gegen Geschwindigkeit. Ein Dense-Modell ähnlicher Dateigröße wie <code>qwen3.6:27b</code> (18–19 GB) ist pro Token womöglich langsamer; testen Sie beide an Ihren eigenen Repositories, bevor Sie sich entscheiden.',
          },
          {
            q: 'Warum kommen Mixtral 8x22B und DeepSeek-V2 auf dieser Seite nicht mehr vor?',
            a: 'Beide stammen aus 2024 und wurden für lokales Coding von neueren MoE-Releases abgelöst. Eine frühere Version dieser Seite nannte zudem falsche Speicherwerte: Mixtral 8x22B hat 141B Gesamtparameter (46,7B gehören zu Mixtral 8x7B), DeepSeek-V2 hat 236B Gesamtparameter — weit mehr, als 16 GB fassen.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Beste 14B-Modelle für Coding](/de/prompt-bites/best-14b-models-coding) -- Dense-Coding-Modelle für 10–16 GB',
          '[Beste lokale LLMs für Coding](/de/local-llms/best-local-llms-for-coding) -- Coding-Modelle nach VRAM-Stufe',
          '[Cursor Pro vs Continue.dev: Welches KI-Coding-Tool?](/de/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
      sources: {
        title: 'Quellen',
        items: [
          '[Qwen3.6-35B-A3B Model Card](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — Architektur, Experten, Lizenz und SWE-bench-Verified-Wert.',
          '[Qwen3-Coder-Next Model Card](https://huggingface.co/Qwen/Qwen3-Coder-Next) — 80B gesamt, 3B aktiv, SWE-bench-Verified-Wert.',
          '[GLM-4.7-Flash Model Card](https://huggingface.co/zai-org/GLM-4.7-Flash) — 30B-A3B-MoE, MIT-Lizenz, SWE-bench-Verified-Wert.',
          '[gpt-oss-120b Model Card](https://huggingface.co/openai/gpt-oss-120b) — Gesamt- und aktive Parameter sowie Speicherziele für gpt-oss-120b und gpt-oss-20b.',
          '[Ollama-Bibliothek: qwen3-coder](https://ollama.com/library/qwen3-coder) — Tags und Downloadgrößen; siehe auch [gpt-oss](https://ollama.com/library/gpt-oss), [glm-4.7-flash](https://ollama.com/library/glm-4.7-flash), [qwen3.6](https://ollama.com/library/qwen3.6) und [qwen3-coder-next](https://ollama.com/library/qwen3-coder-next).',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Meilleurs modèles MoE pour le codage local ?',
    seoTitle: 'Meilleurs modèles MoE pour coder en local 2026 (16–32 Go)',
    metaDescription: 'gpt-oss-20b tient dans 16 Go, Qwen3-Coder-30B-A3B dans 24 Go, Qwen3.6-35B-A3B dans 32 Go. Paramètres actifs, tailles Ollama et scores SWE-bench comparés.',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-fr.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Meilleurs modèles MoE pour le codage local ?',
        answer: 'Qwen3.6-35B-A3B affiche le score SWE-bench Verified publié par l\'éditeur le plus élevé des modèles comparés et convient à 32 Go de mémoire, Qwen3-Coder-30B-A3B tient sur un GPU de 24 Go et gpt-oss-20b sur 16 Go. Les modèles MoE ne calculent que 3 à 5 Md de paramètres actifs par token, donc ils sont rapides, mais ils exigent quand même de la mémoire pour tous les experts.',
        bullets: [
          '16 Go : gpt-oss-20b (21B au total, 3,6B actifs, 14 Go sur Ollama)',
          '24 Go : Qwen3-Coder-30B-A3B ou GLM-4.7-Flash (19 Go chacun)',
          '32 Go et plus : Qwen3.6-35B-A3B (~24 Go) ; 64–80 Go : Qwen3-Coder-Next, gpt-oss-120b',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Les modèles MoE chargent tous les experts en mémoire mais ne calculent que 3 à 5B de paramètres actifs par token : ils sont plus rapides que des modèles denses de même taille de fichier, sans consommer moins de mémoire',
          'gpt-oss-20b (14 Go sur Ollama) est le choix MoE pour 16 Go ; Qwen3-Coder-30B-A3B et GLM-4.7-Flash (19 Go chacun) tiennent sur un GPU de 24 Go',
          'Qwen3.6-35B-A3B (~24 Go) affiche 73,4 sur SWE-bench Verified dans sa fiche modèle, le chiffre le plus élevé des modèles comparés ici, et convient à 32 Go de mémoire',
          'Qwen3-Coder-Next (52 Go) et gpt-oss-120b (65 Go) demandent 64 à 80 Go de mémoire unifiée ou de VRAM',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6-35B-A3B (35B au total, 3B actifs, environ 24 Go sur Ollama) affiche le score SWE-bench Verified publié par l\'éditeur le plus élevé des modèles comparés et convient à 32 Go de mémoire ; gpt-oss-20b couvre 16 Go et Qwen3-Coder-30B-A3B un GPU de 24 Go.' },
          { type: 'plain-terms', text: 'Un modèle MoE contient de nombreux sous-réseaux experts et n\'en utilise que quelques-uns par token : il génère vite mais exige de la mémoire pour tous. Choisissez un modèle dont le téléchargement Ollama laisse quelques Go de marge pour le cache de contexte.' },
        ],
      },
      body1: {
        title: 'Les modèles MoE exigent de la mémoire pour tous les paramètres, pas seulement les actifs',
        content: [
          '<strong>Un modèle Mixture of Experts (MoE) fait passer chaque token par quelques sous-réseaux experts : la vitesse suit les paramètres actifs, la mémoire suit les paramètres totaux.</strong> Selon sa fiche Hugging Face, Qwen3.6-35B-A3B compte 256 experts et en active 8 routés plus 1 partagé par token (3B de ses 35B paramètres).',
          'Un MoE à 3B actifs génère donc des tokens pour un coût proche d\'un petit modèle dense, mais son téléchargement de 14 à 24 Go doit tout de même tenir en VRAM ou en mémoire unifiée rapide. Les tailles du tableau sont celles des téléchargements Ollama ; prévoyez une marge pour le cache de contexte.',
          'Les scores des fiches modèles sont publiés par les éditeurs, avec des configurations d\'agent différentes : SWE-bench Verified vaut 73,4 pour Qwen3.6-35B-A3B, 70,6 pour Qwen3-Coder-Next et 59,2 pour GLM-4.7-Flash. Lisez-les comme des ordres de grandeur, pas comme un duel direct ; PromptQuorum ne les a pas relancés.',
        ],
        columns: ['Modèle', 'Total / actifs', 'Taille Ollama', 'Palier mémoire'],
        rows: [
          { 'Modèle': 'Qwen3.6-35B-A3B', 'Total / actifs': '35B / 3B', 'Taille Ollama': '~24 GB', 'Palier mémoire': '32 GB' },
          { 'Modèle': 'Qwen3-Coder-30B-A3B', 'Total / actifs': '30B / 3.3B', 'Taille Ollama': '19 GB', 'Palier mémoire': '24 GB' },
          { 'Modèle': 'GLM-4.7-Flash', 'Total / actifs': '30B / 3B', 'Taille Ollama': '19 GB', 'Palier mémoire': '24 GB' },
          { 'Modèle': 'gpt-oss-20b', 'Total / actifs': '21B / 3.6B', 'Taille Ollama': '14 GB', 'Palier mémoire': '16 GB' },
          { 'Modèle': 'Qwen3-Coder-Next', 'Total / actifs': '80B / 3B', 'Taille Ollama': '52 GB', 'Palier mémoire': '64 GB' },
          { 'Modèle': 'gpt-oss-120b', 'Total / actifs': '117B / 5.1B', 'Taille Ollama': '65 GB', 'Palier mémoire': '80 GB' },
        ],
      },
      body2: {
        title: 'Choisir le modèle MoE adapté à sa mémoire',
        content: [
          '<strong>Pour 16 Go de VRAM, lancez gpt-oss-20b : 21B au total, 3,6B actifs, 14 Go sur Ollama.</strong> Il reste environ 2 Go pour le contexte sur une carte de 16 Go ; gardez une fenêtre de contexte modeste.',
          'Pour un GPU de 24 Go, lancez Qwen3-Coder-30B-A3B (19 Go, contexte 256K, conçu pour le code) ou GLM-4.7-Flash (19 Go, licence MIT). Ce sont deux MoE 30B-A3B avec 3 à 3,3B de paramètres actifs.',
          'Pour 32 Go de mémoire unifiée ou un GPU de 32 Go, lancez Qwen3.6-35B-A3B (environ 24 Go, contexte 256K, Apache 2.0). C\'est juste sur un GPU de 24 Go : une partie du modèle déborde en RAM et la vitesse chute.',
          'Pour 64 à 80 Go, Qwen3-Coder-Next (80B au total, 3B actifs, 52 Go en Q4_K_M) convient à une machine de 64 Go, et gpt-oss-120b (117B au total, 5,1B actifs, 65 Go) vise un seul GPU de 80 Go selon la fiche modèle d\'OpenAI.',
          'Sous 16 Go, le MoE n\'est plus pratique ; voyez les <a href="/fr/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">meilleurs modèles 14B pour le codage</a> pour des alternatives denses.',
        ],
      },
      body3: {
        title: 'Exécuter des modèles MoE avec Ollama',
        content: [
          '<strong>Chaque modèle du tableau se lance avec une commande :</strong> <code>ollama run gpt-oss:20b</code>, <code>ollama run qwen3-coder:30b</code>, <code>ollama run glm-4.7-flash</code>, <code>ollama run qwen3.6:35b</code>, <code>ollama run qwen3-coder-next</code> et <code>ollama run gpt-oss:120b</code>.',
          'Ollama répartit les couches entre GPU et RAM quand un modèle dépasse la VRAM. Avec llama.cpp, on peut piloter cela pour les MoE : les options <code>--cpu-moe</code> et <code>--n-cpu-moe</code> gardent les poids des experts en RAM pendant que l\'attention reste sur le GPU, ce qui permet de faire tourner un modèle de 19 à 24 Go sur une carte de 16 Go, plus lentement. PromptQuorum n\'a pas mesuré la vitesse.',
          'Une erreur courante est de juger l\'encombrement d\'après les paramètres actifs : un modèle « 3B actifs » n\'est pas un téléchargement de la taille d\'un 3B. Vérifiez la taille du fichier sur la page Ollama du modèle avant de le télécharger.',
          'Pour des alternatives denses à chaque palier de VRAM, consultez le <a href="/fr/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">guide des meilleurs LLM locaux pour le codage</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles MoE pour le codage',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'un modèle MoE et pourquoi est-ce important pour le codage local ?',
            a: 'MoE signifie Mixture of Experts. Le modèle contient de nombreux sous-réseaux experts mais n\'en active que quelques-uns par token : la vitesse de génération correspond à celle d\'un modèle dense bien plus petit, tandis que le nombre total de paramètres apporte des connaissances étendues sur les langages et les frameworks.',
          },
          {
            q: 'Quel modèle MoE choisir pour 16 Go de VRAM ?',
            a: 'gpt-oss-20b. Il compte 21B de paramètres au total dont 3,6B actifs, pèse 14 Go sur Ollama et est publié sous Apache 2.0. Les modèles de 19 Go (Qwen3-Coder-30B-A3B, GLM-4.7-Flash) demandent un GPU de 24 Go ou un déchargement CPU.',
          },
          {
            q: 'Quel est le meilleur petit modèle MoE ?',
            a: 'En paramètres actifs, GLM-4.7-Flash (3B), Qwen3-Coder-30B-A3B (3,3B) et gpt-oss-20b (3,6B) sont les plus petits ici. En mémoire, gpt-oss-20b est le plus léger avec 14 Go ; les deux autres pèsent 19 Go.',
          },
          {
            q: 'Un modèle MoE demande-t-il moins de VRAM qu\'un modèle dense ?',
            a: 'Non. Tous les experts doivent être chargés, donc la mémoire suit les paramètres totaux. L\'avantage est la vitesse : seuls les paramètres actifs sont calculés pour chaque token.',
          },
          {
            q: 'Quels modèles MoE de codage sont disponibles sur Ollama ?',
            a: 'Ollama propose <code>qwen3.6:35b</code>, <code>qwen3-coder:30b</code>, <code>glm-4.7-flash</code>, <code>gpt-oss:20b</code>, <code>qwen3-coder-next</code> et <code>gpt-oss:120b</code>, pour des téléchargements d\'environ 24, 19, 19, 14, 52 et 65 Go.',
          },
          {
            q: 'Un modèle MoE est-il meilleur qu\'un modèle dense pour coder ?',
            a: 'Pas automatiquement. Le MoE échange de la mémoire contre de la vitesse. Un modèle dense de taille de fichier voisine, comme <code>qwen3.6:27b</code> (18–19 Go), peut être plus lent par token ; testez les deux sur vos propres dépôts avant de choisir.',
          },
          {
            q: 'Pourquoi cette page ne présente-t-elle plus Mixtral 8x22B ni DeepSeek-V2 ?',
            a: 'Ce sont deux modèles de 2024, remplacés pour le codage local par des MoE plus récents. Une ancienne version de cette page donnait en outre des chiffres de mémoire erronés : Mixtral 8x22B compte 141B de paramètres au total (46,7B correspond à Mixtral 8x7B) et DeepSeek-V2 en compte 236B, bien plus que ce que 16 Go peuvent contenir.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Meilleurs modèles 14B pour le codage](/fr/prompt-bites/best-14b-models-coding) -- modèles de codage denses pour 10–16 Go',
          '[Meilleurs LLM locaux pour le codage](/fr/local-llms/best-local-llms-for-coding) -- modèles de codage par palier de VRAM',
          '[Cursor Pro vs Continue.dev : quel outil de coding IA ?](/fr/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          '[Fiche modèle Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — architecture, experts, licence et score SWE-bench Verified.',
          '[Fiche modèle Qwen3-Coder-Next](https://huggingface.co/Qwen/Qwen3-Coder-Next) — 80B au total, 3B actifs, score SWE-bench Verified.',
          '[Fiche modèle GLM-4.7-Flash](https://huggingface.co/zai-org/GLM-4.7-Flash) — MoE 30B-A3B, licence MIT, score SWE-bench Verified.',
          '[Fiche modèle gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b) — paramètres totaux et actifs et cibles mémoire de gpt-oss-120b et gpt-oss-20b.',
          '[Bibliothèque Ollama : qwen3-coder](https://ollama.com/library/qwen3-coder) — tags et tailles de téléchargement ; voir aussi [gpt-oss](https://ollama.com/library/gpt-oss), [glm-4.7-flash](https://ollama.com/library/glm-4.7-flash), [qwen3.6](https://ollama.com/library/qwen3.6) et [qwen3-coder-next](https://ollama.com/library/qwen3-coder-next).',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'ローカルコーディングに最適な MoE モデルは？',
    seoTitle: 'ローカル開発向けMoEモデル比較2026（16〜32GB）',
    metaDescription: 'gpt-oss-20bは16GB、Qwen3-Coder-30B-A3Bは24GB、Qwen3.6-35B-A3Bは32GBで動作。アクティブパラメータ、Ollamaのサイズ、SWE-benchを比較。',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-ja.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'ローカルコーディングに最適な MoE モデルは？',
        answer: '32GBのメモリならQwen3.6-35B-A3Bが、比較したモデルの中で開発元報告のSWE-bench Verifiedスコアが最も高く、24GBのGPUにはQwen3-Coder-30B-A3B、16GBにはgpt-oss-20bが収まります。MoEはトークンごとに3〜5Bのアクティブパラメータだけを計算するため高速ですが、全エキスパート分のメモリは必要です。',
        bullets: [
          '16GB：gpt-oss-20b（総計21B、アクティブ3.6B、Ollamaで14GB）',
          '24GB：Qwen3-Coder-30B-A3B または GLM-4.7-Flash（各19GB）',
          '32GB以上：Qwen3.6-35B-A3B（約24GB）。64〜80GB：Qwen3-Coder-Next、gpt-oss-120b',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoEモデルは全エキスパートをメモリに載せますが、トークンごとの計算は3〜5Bのアクティブパラメータだけです。同じファイルサイズのDenseモデルより高速ですが、必要メモリは減りません',
          'gpt-oss-20b（Ollamaで14GB）は16GB向けのMoE、Qwen3-Coder-30B-A3BとGLM-4.7-Flash（各19GB）は24GBのGPUに収まります',
          'Qwen3.6-35B-A3B（約24GB）はモデルカードでSWE-bench Verified 73.4と、ここで比較したモデルの中で最高値を報告しており、32GBのメモリ向けです',
          'Qwen3-Coder-Next（52GB）とgpt-oss-120b（65GB）には64〜80GBのユニファイドメモリまたはVRAMが必要です',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6-35B-A3B（総計35B、アクティブ3B、Ollamaで約24GB）は比較したモデルの中で開発元報告のSWE-bench Verifiedスコアが最も高く、32GBのメモリ向けで、16GBはgpt-oss-20b、24GBのGPUはQwen3-Coder-30B-A3Bが対応します。' },
          { type: 'plain-terms', text: 'MoEモデルは多数のエキスパートを持ち、トークンごとに数個だけを使うため、生成は速い一方で全エキスパート分のメモリが必要です。コンテキストキャッシュ用に数GBの余裕を残せるOllamaのダウンロードサイズを選んでください。' },
        ],
      },
      body1: {
        title: 'MoEに必要なメモリは、アクティブではなく総パラメータ分',
        content: [
          '<strong>Mixture of Experts（MoE）モデルは各トークンを少数のエキスパートに通すため、速度はアクティブパラメータに、メモリは総パラメータに比例します。</strong>Hugging Faceのモデルカードによると、Qwen3.6-35B-A3Bは256のエキスパートを持ち、トークンごとにルーティングされる8つと共有1つを使います（35Bのうち3B）。',
          'そのためアクティブ3BのMoEは小型Denseモデル並みのコストでトークンを生成しますが、14〜24GBのダウンロード分はVRAMか高速なユニファイドメモリに載せる必要があります。表のサイズはOllamaのダウンロードサイズなので、コンテキストキャッシュ分の余裕を見込んでください。',
          'モデルカードのベンチマークは各開発元の報告値で、エージェント設定も異なります。SWE-bench VerifiedはQwen3.6-35B-A3Bが73.4、Qwen3-Coder-Nextが70.6、GLM-4.7-Flashが59.2です。直接比較ではなく目安として扱ってください。PromptQuorumは再測定していません。',
        ],
        columns: ['モデル', '総計 / アクティブ', 'Ollamaサイズ', '必要メモリ'],
        rows: [
          { 'モデル': 'Qwen3.6-35B-A3B', '総計 / アクティブ': '35B / 3B', 'Ollamaサイズ': '~24 GB', '必要メモリ': '32 GB' },
          { 'モデル': 'Qwen3-Coder-30B-A3B', '総計 / アクティブ': '30B / 3.3B', 'Ollamaサイズ': '19 GB', '必要メモリ': '24 GB' },
          { 'モデル': 'GLM-4.7-Flash', '総計 / アクティブ': '30B / 3B', 'Ollamaサイズ': '19 GB', '必要メモリ': '24 GB' },
          { 'モデル': 'gpt-oss-20b', '総計 / アクティブ': '21B / 3.6B', 'Ollamaサイズ': '14 GB', '必要メモリ': '16 GB' },
          { 'モデル': 'Qwen3-Coder-Next', '総計 / アクティブ': '80B / 3B', 'Ollamaサイズ': '52 GB', '必要メモリ': '64 GB' },
          { 'モデル': 'gpt-oss-120b', '総計 / アクティブ': '117B / 5.1B', 'Ollamaサイズ': '65 GB', '必要メモリ': '80 GB' },
        ],
      },
      body2: {
        title: '手元のメモリに合うMoEモデルを選ぶ',
        content: [
          '<strong>VRAM 16GBならgpt-oss-20bです。総計21B、アクティブ3.6B、Ollamaで14GBです。</strong>16GBのカードではコンテキスト用に約2GBしか残らないため、コンテキストウィンドウは控えめにしてください。',
          '24GBのGPUならQwen3-Coder-30B-A3B（19GB、256Kコンテキスト、コード向けに調整）かGLM-4.7-Flash（19GB、MITライセンス）です。どちらも30B-A3BのMoEで、アクティブは3〜3.3Bです。',
          '32GBのユニファイドメモリまたは32GBのGPUならQwen3.6-35B-A3B（約24GB、256Kコンテキスト、Apache 2.0）です。24GBのGPUでは厳しく、一部がシステムRAMに溢れて速度が落ちます。',
          '64〜80GBなら、Qwen3-Coder-Next（総計80B、アクティブ3B、Q4_K_Mで52GB）は64GBのマシン向けで、gpt-oss-120b（総計117B、アクティブ5.1B、65GB）はOpenAIのモデルカードによると80GBのGPU1枚を想定しています。',
          '16GB未満ではMoEは実用的ではありません。Denseの代替は<a href="/ja/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">コーディング向け14Bモデル比較</a>をご覧ください。',
        ],
      },
      body3: {
        title: 'OllamaでMoEモデルを実行する',
        content: [
          '<strong>表のモデルはどれも1コマンドで起動できます。</strong><code>ollama run gpt-oss:20b</code>、<code>ollama run qwen3-coder:30b</code>、<code>ollama run glm-4.7-flash</code>、<code>ollama run qwen3.6:35b</code>、<code>ollama run qwen3-coder-next</code>、<code>ollama run gpt-oss:120b</code>です。',
          'OllamaはモデルがVRAMを超えると、レイヤーをGPUとシステムRAMに分割します。llama.cppではMoE向けに制御でき、<code>--cpu-moe</code>と<code>--n-cpu-moe</code>オプションでエキスパートの重みをシステムRAMに置き、アテンションはGPUに残せます。これで19〜24GBのモデルを16GBのカードで、速度は落ちますが実行できます。速度はPromptQuorumでは測定していません。',
          'よくある間違いは、アクティブパラメータでサイズを判断することです。「アクティブ3B」のモデルは3Bサイズのダウンロードではありません。取得前にOllamaのモデルページでファイルサイズを確認してください。',
          'VRAM帯ごとのDenseの代替は<a href="/ja/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">コーディング向けベストローカルLLMガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'コーディング向けMoEモデルのクイック回答',
        faqs: [
          {
            q: 'MoEモデルとは何で、ローカルコーディングでなぜ重要ですか？',
            a: 'MoEはMixture of Expertsの略です。多数のエキスパートを持ちながらトークンごとに少数だけを有効にするため、生成速度はずっと小さなDenseモデル並みで、総パラメータ数が複数の言語やフレームワークにわたる幅広い知識を支えます。',
          },
          {
            q: 'VRAM 16GBに最適なMoEモデルは？',
            a: 'gpt-oss-20bです。総計21B、アクティブ3.6Bで、Ollamaでは14GB、ライセンスはApache 2.0です。19GBのモデル（Qwen3-Coder-30B-A3B、GLM-4.7-Flash）には24GBのGPUかCPUオフロードが必要です。',
          },
          {
            q: '最良の小型MoEモデルは？',
            a: 'アクティブパラメータではGLM-4.7-Flash（3B）、Qwen3-Coder-30B-A3B（3.3B）、gpt-oss-20b（3.6B）が最小です。メモリではgpt-oss-20bが14GBで最小、他の2つは19GBです。',
          },
          {
            q: 'MoEモデルはDenseモデルよりVRAMが少なくて済みますか？',
            a: 'いいえ。全エキスパートを読み込む必要があるため、メモリは総パラメータに比例します。利点は速度で、トークンごとにアクティブパラメータだけを計算します。',
          },
          {
            q: 'OllamaにあるMoEコーディングモデルは？',
            a: 'Ollamaには<code>qwen3.6:35b</code>、<code>qwen3-coder:30b</code>、<code>glm-4.7-flash</code>、<code>gpt-oss:20b</code>、<code>qwen3-coder-next</code>、<code>gpt-oss:120b</code>があり、ダウンロードサイズはそれぞれ約24、19、19、14、52、65GBです。',
          },
          {
            q: 'コーディングではMoEのほうがDenseより優れていますか？',
            a: '一概には言えません。MoEはメモリと引き換えに速度を得ます。<code>qwen3.6:27b</code>（18〜19GB）のようにファイルサイズが近いDenseモデルはトークンあたりでは遅いことがあります。選ぶ前に自分のリポジトリで両方を試してください。',
          },
          {
            q: 'このページにMixtral 8x22BやDeepSeek-V2が載っていないのはなぜですか？',
            a: 'どちらも2024年のモデルで、ローカルコーディングではより新しいMoEに置き換わりました。以前のこのページにはメモリ値の誤りもありました。Mixtral 8x22Bの総パラメータは141Bで（46.7BはMixtral 8x7Bの値）、DeepSeek-V2は236Bと、16GBには収まりません。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[コーディング向け14Bモデル比較](/ja/prompt-bites/best-14b-models-coding) -- 10〜16GB向けのDenseコーディングモデル',
          '[コーディング向けベストローカルLLM](/ja/local-llms/best-local-llms-for-coding) -- VRAM帯別のコーディングモデル',
          '[Cursor Pro vs Continue.dev：どちらのAIコーディングツールが良いか？](/ja/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
      sources: {
        title: '出典',
        items: [
          '[Qwen3.6-35B-A3B モデルカード](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — アーキテクチャ、エキスパート数、ライセンス、SWE-bench Verifiedスコア。',
          '[Qwen3-Coder-Next モデルカード](https://huggingface.co/Qwen/Qwen3-Coder-Next) — 総計80B、アクティブ3B、SWE-bench Verifiedスコア。',
          '[GLM-4.7-Flash モデルカード](https://huggingface.co/zai-org/GLM-4.7-Flash) — 30B-A3B MoE、MITライセンス、SWE-bench Verifiedスコア。',
          '[gpt-oss-120b モデルカード](https://huggingface.co/openai/gpt-oss-120b) — gpt-oss-120bとgpt-oss-20bの総パラメータ、アクティブパラメータ、メモリ目安。',
          '[Ollamaライブラリ：qwen3-coder](https://ollama.com/library/qwen3-coder) — タグとダウンロードサイズ。[gpt-oss](https://ollama.com/library/gpt-oss)、[glm-4.7-flash](https://ollama.com/library/glm-4.7-flash)、[qwen3.6](https://ollama.com/library/qwen3.6)、[qwen3-coder-next](https://ollama.com/library/qwen3-coder-next)も参照。',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '本地编程最佳 MoE 模型是什么？',
    seoTitle: '本地编程最佳MoE模型2026（16–32GB）',
    metaDescription: 'gpt-oss-20b 可在 16GB 运行，Qwen3-Coder-30B-A3B 需 24GB，Qwen3.6-35B-A3B 需 32GB。对比激活参数、Ollama 体积与 SWE-bench 成绩。',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-zh.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: '本地编程最佳 MoE 模型是什么？',
        answer: 'Qwen3.6-35B-A3B 是所比较模型中厂商报告的 SWE-bench Verified 分数最高者，适合 32GB 内存，24GB 显卡可选 Qwen3-Coder-30B-A3B，16GB 可选 gpt-oss-20b。MoE 每个 token 只计算 3–5B 激活参数，所以速度快，但仍需为全部专家预留内存。',
        bullets: [
          '16GB：gpt-oss-20b（总计 21B，激活 3.6B，Ollama 14GB）',
          '24GB：Qwen3-Coder-30B-A3B 或 GLM-4.7-Flash（各 19GB）',
          '32GB 以上：Qwen3.6-35B-A3B（约 24GB）；64–80GB：Qwen3-Coder-Next、gpt-oss-120b',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoE 模型会把所有专家加载进内存，但每个 token 只计算 3–5B 激活参数：比相同文件大小的稠密模型更快，但并不更省内存',
          'gpt-oss-20b（Ollama 14GB）是 16GB 的 MoE 之选；Qwen3-Coder-30B-A3B 和 GLM-4.7-Flash（各 19GB）可放入 24GB 显卡',
          'Qwen3.6-35B-A3B（约 24GB）在模型卡上给出 SWE-bench Verified 73.4，是本文对比模型中最高的数值，适合 32GB 内存',
          'Qwen3-Coder-Next（52GB）和 gpt-oss-120b（65GB）需要 64–80GB 统一内存或显存',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6-35B-A3B（总计 35B，激活 3B，Ollama 约 24GB）是所比较模型中厂商报告的 SWE-bench Verified 分数最高者，适合 32GB 内存；gpt-oss-20b 适合 16GB，Qwen3-Coder-30B-A3B 适合 24GB 显卡。' },
          { type: 'plain-terms', text: 'MoE 模型包含大量专家子网络，每个 token 只用其中几个，因此生成很快，但仍需要为全部专家准备内存。请选择 Ollama 下载体积能为上下文缓存留出几 GB 余量的模型。' },
        ],
      },
      body1: {
        title: 'MoE 需要为总参数而非激活参数准备内存',
        content: [
          '<strong>混合专家（MoE）模型让每个 token 只经过少数专家子网络，因此速度取决于激活参数，内存取决于总参数。</strong>根据 Hugging Face 模型卡，Qwen3.6-35B-A3B 有 256 个专家，每个 token 激活 8 个路由专家加 1 个共享专家（35B 中的 3B 参数）。',
          '因此激活参数 3B 的 MoE 生成 token 的成本接近小型稠密模型，但 14–24GB 的下载体积仍必须放进显存或高速统一内存。表中的体积是 Ollama 下载大小，请为上下文缓存预留余量。',
          '模型卡上的基准分数由各厂商自行报告，且使用不同的智能体配置：SWE-bench Verified 上 Qwen3.6-35B-A3B 为 73.4，Qwen3-Coder-Next 为 70.6，GLM-4.7-Flash 为 59.2。请将其视为参考而非直接对比；PromptQuorum 未重新测试。',
        ],
        columns: ['模型', '总计 / 激活', 'Ollama 体积', '内存档位'],
        rows: [
          { '模型': 'Qwen3.6-35B-A3B', '总计 / 激活': '35B / 3B', 'Ollama 体积': '~24 GB', '内存档位': '32 GB' },
          { '模型': 'Qwen3-Coder-30B-A3B', '总计 / 激活': '30B / 3.3B', 'Ollama 体积': '19 GB', '内存档位': '24 GB' },
          { '模型': 'GLM-4.7-Flash', '总计 / 激活': '30B / 3B', 'Ollama 体积': '19 GB', '内存档位': '24 GB' },
          { '模型': 'gpt-oss-20b', '总计 / 激活': '21B / 3.6B', 'Ollama 体积': '14 GB', '内存档位': '16 GB' },
          { '模型': 'Qwen3-Coder-Next', '总计 / 激活': '80B / 3B', 'Ollama 体积': '52 GB', '内存档位': '64 GB' },
          { '模型': 'gpt-oss-120b', '总计 / 激活': '117B / 5.1B', 'Ollama 体积': '65 GB', '内存档位': '80 GB' },
        ],
      },
      body2: {
        title: '按内存大小选择合适的 MoE 模型',
        content: [
          '<strong>16GB 显存请用 gpt-oss-20b：总计 21B，激活 3.6B，Ollama 14GB。</strong>16GB 显卡上只剩约 2GB 给上下文，因此请保持较小的上下文窗口。',
          '24GB 显卡请用 Qwen3-Coder-30B-A3B（19GB，256K 上下文，针对代码调优）或 GLM-4.7-Flash（19GB，MIT 许可证）。两者都是 30B-A3B MoE，激活参数 3–3.3B。',
          '32GB 统一内存或 32GB 显卡请用 Qwen3.6-35B-A3B（约 24GB，256K 上下文，Apache 2.0）。在 24GB 显卡上会很紧张：部分模型溢出到系统内存，速度下降。',
          '64–80GB 时，Qwen3-Coder-Next（总计 80B，激活 3B，Q4_K_M 为 52GB）适合 64GB 的机器；根据 OpenAI 的模型卡，gpt-oss-120b（总计 117B，激活 5.1B，65GB）面向单张 80GB 显卡。',
          '16GB 以下 MoE 不再实用；稠密模型的替代方案见<a href="/zh/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">最佳 14B 编程模型</a>。',
        ],
      },
      body3: {
        title: '用 Ollama 运行 MoE 模型',
        content: [
          '<strong>表中每个模型只需一条命令：</strong><code>ollama run gpt-oss:20b</code>、<code>ollama run qwen3-coder:30b</code>、<code>ollama run glm-4.7-flash</code>、<code>ollama run qwen3.6:35b</code>、<code>ollama run qwen3-coder-next</code> 和 <code>ollama run gpt-oss:120b</code>。',
          '当模型超出显存时，Ollama 会把层分配到 GPU 和系统内存。在 llama.cpp 中可以针对 MoE 进行控制：<code>--cpu-moe</code> 和 <code>--n-cpu-moe</code> 选项把专家权重留在系统内存，注意力层留在 GPU，使 19–24GB 的模型能在 16GB 显卡上运行，但速度较慢。PromptQuorum 未测量具体速度。',
          '常见错误是按激活参数判断体积：“激活 3B”的模型并不是 3B 大小的下载。拉取之前请先在模型的 Ollama 页面确认文件大小。',
          '各显存档位的稠密模型替代方案见<a href="/zh/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">本地编程最佳 LLM 指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于编程 MoE 模型的快速解答',
        faqs: [
          {
            q: '什么是 MoE 模型，为什么它对本地编程重要？',
            a: 'MoE 即混合专家（Mixture of Experts）。模型包含大量专家子网络，但每个 token 只激活少数几个，因此生成速度相当于小得多的稠密模型，而总参数量则为多种语言和框架提供广泛的知识。',
          },
          {
            q: '16GB 显存最适合哪个 MoE 模型？',
            a: 'gpt-oss-20b。总计 21B、激活 3.6B 参数，Ollama 下载 14GB，采用 Apache 2.0 许可。19GB 的模型（Qwen3-Coder-30B-A3B、GLM-4.7-Flash）需要 24GB 显卡或 CPU 卸载。',
          },
          {
            q: '最好的小型 MoE 模型是哪个？',
            a: '按激活参数，GLM-4.7-Flash（3B）、Qwen3-Coder-30B-A3B（3.3B）和 gpt-oss-20b（3.6B）最小。按内存，gpt-oss-20b 最小，仅 14GB；另外两个为 19GB。',
          },
          {
            q: 'MoE 模型比稠密模型更省显存吗？',
            a: '不。所有专家都必须加载，内存取决于总参数。优势在于速度：每个 token 只计算激活参数。',
          },
          {
            q: 'Ollama 上有哪些 MoE 编程模型？',
            a: 'Ollama 提供 <code>qwen3.6:35b</code>、<code>qwen3-coder:30b</code>、<code>glm-4.7-flash</code>、<code>gpt-oss:20b</code>、<code>qwen3-coder-next</code> 和 <code>gpt-oss:120b</code>，下载体积分别约为 24、19、19、14、52 和 65GB。',
          },
          {
            q: '编程时 MoE 模型比稠密模型更好吗？',
            a: '不一定。MoE 用内存换速度。文件大小相近的稠密模型，如 <code>qwen3.6:27b</code>（18–19GB），每个 token 可能更慢；选择前请在自己的代码库上测试两者。',
          },
          {
            q: '为什么本页不再介绍 Mixtral 8x22B 和 DeepSeek-V2？',
            a: '二者都是 2024 年的模型，在本地编程场景已被更新的 MoE 取代。本页早期版本还给出了错误的内存数据：Mixtral 8x22B 总参数为 141B（46.7B 属于 Mixtral 8x7B），DeepSeek-V2 总参数为 236B，远超 16GB 所能容纳。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[最佳 14B 编程模型](/zh/prompt-bites/best-14b-models-coding) -- 适合 10–16GB 的稠密编程模型',
          '[本地编程最佳 LLM](/zh/local-llms/best-local-llms-for-coding) -- 按显存档位划分的编程模型',
          '[Cursor Pro vs Continue.dev：哪款AI编程工具更好？](/zh/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
      sources: {
        title: '来源',
        items: [
          '[Qwen3.6-35B-A3B 模型卡](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — 架构、专家数、许可证和 SWE-bench Verified 分数。',
          '[Qwen3-Coder-Next 模型卡](https://huggingface.co/Qwen/Qwen3-Coder-Next) — 总计 80B、激活 3B、SWE-bench Verified 分数。',
          '[GLM-4.7-Flash 模型卡](https://huggingface.co/zai-org/GLM-4.7-Flash) — 30B-A3B MoE、MIT 许可证、SWE-bench Verified 分数。',
          '[gpt-oss-120b 模型卡](https://huggingface.co/openai/gpt-oss-120b) — gpt-oss-120b 与 gpt-oss-20b 的总参数、激活参数和内存目标。',
          '[Ollama 模型库：qwen3-coder](https://ollama.com/library/qwen3-coder) — 标签与下载体积；另见 [gpt-oss](https://ollama.com/library/gpt-oss)、[glm-4.7-flash](https://ollama.com/library/glm-4.7-flash)、[qwen3.6](https://ollama.com/library/qwen3.6) 和 [qwen3-coder-next](https://ollama.com/library/qwen3-coder-next)。',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: '¿Los mejores modelos MoE para coding local?',
    seoTitle: 'Mejores modelos MoE para programar en local 2026 (16–32 GB)',
    metaDescription: 'gpt-oss-20b cabe en 16 GB, Qwen3-Coder-30B-A3B en 24 GB y Qwen3.6-35B-A3B en 32 GB. Parámetros activos, tamaños en Ollama y SWE-bench comparados.',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-es.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son los mejores modelos MoE para coding local?',
        answer: 'Qwen3.6-35B-A3B tiene la puntuación SWE-bench Verified más alta publicada por el fabricante entre los modelos comparados y encaja en 32 GB de memoria, Qwen3-Coder-30B-A3B cabe en una GPU de 24 GB y gpt-oss-20b en 16 GB. Los modelos MoE calculan solo 3–5B de parámetros activos por token, así que son rápidos, pero siguen necesitando memoria para todos los expertos.',
        bullets: [
          '16 GB: gpt-oss-20b (21B totales, 3,6B activos, 14 GB en Ollama)',
          '24 GB: Qwen3-Coder-30B-A3B o GLM-4.7-Flash (19 GB cada uno)',
          '32 GB o más: Qwen3.6-35B-A3B (~24 GB); 64–80 GB: Qwen3-Coder-Next, gpt-oss-120b',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Los modelos MoE cargan todos los expertos en memoria pero calculan solo 3–5B de parámetros activos por token: son más rápidos que modelos densos del mismo tamaño de archivo, no ocupan menos memoria',
          'gpt-oss-20b (14 GB en Ollama) es la opción MoE para 16 GB; Qwen3-Coder-30B-A3B y GLM-4.7-Flash (19 GB cada uno) caben en una GPU de 24 GB',
          'Qwen3.6-35B-A3B (~24 GB) indica 73,4 en SWE-bench Verified en su ficha de modelo, la cifra más alta de los modelos comparados, y encaja en 32 GB de memoria',
          'Qwen3-Coder-Next (52 GB) y gpt-oss-120b (65 GB) requieren 64–80 GB de memoria unificada o VRAM',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6-35B-A3B (35B totales, 3B activos, unos 24 GB en Ollama) tiene la puntuación SWE-bench Verified más alta publicada por el fabricante entre los modelos comparados y encaja en 32 GB de memoria; gpt-oss-20b cubre 16 GB y Qwen3-Coder-30B-A3B una GPU de 24 GB.' },
          { type: 'plain-terms', text: 'Un modelo MoE contiene muchas subredes expertas y usa solo unas pocas por token, por lo que genera rápido pero necesita memoria para todas. Elige un modelo cuya descarga en Ollama deje varios GB de margen para la caché de contexto.' },
        ],
      },
      body1: {
        title: 'Los modelos MoE necesitan memoria para los parámetros totales, no solo los activos',
        content: [
          '<strong>Un modelo Mixture of Experts (MoE) enruta cada token por unas pocas subredes expertas: la velocidad depende de los parámetros activos y la memoria de los parámetros totales.</strong> Según su ficha en Hugging Face, Qwen3.6-35B-A3B tiene 256 expertos y activa 8 enrutados más 1 compartido por token (3B de sus 35B parámetros).',
          'Por eso un MoE con 3B activos genera tokens a un coste similar al de un modelo denso pequeño, pero su descarga de 14–24 GB debe caber igualmente en VRAM o en memoria unificada rápida. Los tamaños de la tabla son descargas de Ollama; deja margen para la caché de contexto.',
          'Las puntuaciones de las fichas de modelo las publica cada fabricante con configuraciones de agente distintas: SWE-bench Verified es 73,4 para Qwen3.6-35B-A3B, 70,6 para Qwen3-Coder-Next y 59,2 para GLM-4.7-Flash. Tómalas como orientación y no como comparación directa; PromptQuorum no las ha vuelto a medir.',
        ],
        columns: ['Modelo', 'Total / activos', 'Tamaño Ollama', 'Nivel de memoria'],
        rows: [
          { 'Modelo': 'Qwen3.6-35B-A3B', 'Total / activos': '35B / 3B', 'Tamaño Ollama': '~24 GB', 'Nivel de memoria': '32 GB' },
          { 'Modelo': 'Qwen3-Coder-30B-A3B', 'Total / activos': '30B / 3.3B', 'Tamaño Ollama': '19 GB', 'Nivel de memoria': '24 GB' },
          { 'Modelo': 'GLM-4.7-Flash', 'Total / activos': '30B / 3B', 'Tamaño Ollama': '19 GB', 'Nivel de memoria': '24 GB' },
          { 'Modelo': 'gpt-oss-20b', 'Total / activos': '21B / 3.6B', 'Tamaño Ollama': '14 GB', 'Nivel de memoria': '16 GB' },
          { 'Modelo': 'Qwen3-Coder-Next', 'Total / activos': '80B / 3B', 'Tamaño Ollama': '52 GB', 'Nivel de memoria': '64 GB' },
          { 'Modelo': 'gpt-oss-120b', 'Total / activos': '117B / 5.1B', 'Tamaño Ollama': '65 GB', 'Nivel de memoria': '80 GB' },
        ],
      },
      body2: {
        title: 'Elige el modelo MoE que encaja con tu memoria',
        content: [
          '<strong>Con 16 GB de VRAM, usa gpt-oss-20b: 21B totales, 3,6B activos, 14 GB en Ollama.</strong> Quedan unos 2 GB para el contexto en una tarjeta de 16 GB, así que mantén la ventana de contexto moderada.',
          'Con una GPU de 24 GB, usa Qwen3-Coder-30B-A3B (19 GB, contexto de 256K, orientado a código) o GLM-4.7-Flash (19 GB, licencia MIT). Ambos son MoE 30B-A3B con 3–3,3B de parámetros activos.',
          'Con 32 GB de memoria unificada o una GPU de 32 GB, usa Qwen3.6-35B-A3B (unos 24 GB, contexto de 256K, Apache 2.0). En una GPU de 24 GB va justo: parte del modelo pasa a la RAM del sistema y la velocidad cae.',
          'Con 64–80 GB, Qwen3-Coder-Next (80B totales, 3B activos, 52 GB en Q4_K_M) encaja en un equipo de 64 GB, y gpt-oss-120b (117B totales, 5,1B activos, 65 GB) apunta a una sola GPU de 80 GB según la ficha de OpenAI.',
          'Por debajo de 16 GB, el MoE deja de ser práctico; consulta los <a href="/es/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">mejores modelos de 14B para coding</a> como alternativas densas.',
        ],
      },
      body3: {
        title: 'Ejecutar modelos MoE con Ollama',
        content: [
          '<strong>Cada modelo de la tabla se lanza con un comando:</strong> <code>ollama run gpt-oss:20b</code>, <code>ollama run qwen3-coder:30b</code>, <code>ollama run glm-4.7-flash</code>, <code>ollama run qwen3.6:35b</code>, <code>ollama run qwen3-coder-next</code> y <code>ollama run gpt-oss:120b</code>.',
          'Ollama reparte las capas entre GPU y RAM del sistema cuando el modelo supera la VRAM. En llama.cpp puedes controlarlo para MoE: las opciones <code>--cpu-moe</code> y <code>--n-cpu-moe</code> mantienen los pesos de los expertos en la RAM mientras la atención queda en la GPU, así un modelo de 19–24 GB puede correr en una tarjeta de 16 GB, más despacio. PromptQuorum no ha medido la velocidad.',
          'Un error habitual es juzgar el tamaño por los parámetros activos: un modelo «3B activos» no es una descarga del tamaño de un 3B. Comprueba el tamaño del archivo en la página de Ollama del modelo antes de descargarlo.',
          'Para alternativas densas en cada nivel de VRAM, consulta la <a href="/es/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">guía de los mejores LLM locales para coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre modelos MoE para coding',
        faqs: [
          {
            q: '¿Qué es un modelo MoE y por qué importa para el coding local?',
            a: 'MoE significa Mixture of Experts. El modelo contiene muchas subredes expertas pero activa solo unas pocas por token, de modo que la velocidad de generación equivale a la de un modelo denso mucho menor, mientras que el total de parámetros aporta un conocimiento amplio de lenguajes y frameworks.',
          },
          {
            q: '¿Qué modelo MoE es mejor para 16 GB de VRAM?',
            a: 'gpt-oss-20b. Tiene 21B de parámetros totales y 3,6B activos, pesa 14 GB en Ollama y se publica con licencia Apache 2.0. Los modelos de 19 GB (Qwen3-Coder-30B-A3B, GLM-4.7-Flash) requieren una GPU de 24 GB o descarga parcial a CPU.',
          },
          {
            q: '¿Cuál es el mejor modelo MoE pequeño?',
            a: 'Por parámetros activos, GLM-4.7-Flash (3B), Qwen3-Coder-30B-A3B (3,3B) y gpt-oss-20b (3,6B) son los más pequeños de esta comparación. Por memoria, gpt-oss-20b es el menor con 14 GB; los otros dos ocupan 19 GB.',
          },
          {
            q: '¿Un modelo MoE necesita menos VRAM que uno denso?',
            a: 'No. Hay que cargar todos los expertos, así que la memoria depende de los parámetros totales. La ventaja es la velocidad: solo se calculan los parámetros activos de cada token.',
          },
          {
            q: '¿Qué modelos MoE de coding hay en Ollama?',
            a: 'Ollama incluye <code>qwen3.6:35b</code>, <code>qwen3-coder:30b</code>, <code>glm-4.7-flash</code>, <code>gpt-oss:20b</code>, <code>qwen3-coder-next</code> y <code>gpt-oss:120b</code>, con descargas de unos 24, 19, 19, 14, 52 y 65 GB.',
          },
          {
            q: '¿Es un modelo MoE mejor que uno denso para programar?',
            a: 'No necesariamente. El MoE cambia memoria por velocidad. Un modelo denso de tamaño de archivo parecido, como <code>qwen3.6:27b</code> (18–19 GB), puede ser más lento por token; prueba ambos con tus propios repositorios antes de decidir.',
          },
          {
            q: '¿Por qué esta página ya no presenta Mixtral 8x22B ni DeepSeek-V2?',
            a: 'Ambos son modelos de 2024 que los MoE más recientes han sustituido para coding local. Además, una versión anterior de esta página daba cifras de memoria erróneas: Mixtral 8x22B tiene 141B de parámetros totales (46,7B corresponde a Mixtral 8x7B) y DeepSeek-V2 tiene 236B, mucho más de lo que caben en 16 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mejores modelos de 14B para coding](/es/prompt-bites/best-14b-models-coding) -- modelos de coding densos para 10–16 GB',
          '[Mejores LLM locales para coding](/es/local-llms/best-local-llms-for-coding) -- modelos de coding por nivel de VRAM',
          '[Cursor Pro vs Continue.dev: ¿Cuál herramienta de coding con IA?](/es/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
      sources: {
        title: 'Fuentes',
        items: [
          '[Ficha de modelo Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — arquitectura, expertos, licencia y puntuación SWE-bench Verified.',
          '[Ficha de modelo Qwen3-Coder-Next](https://huggingface.co/Qwen/Qwen3-Coder-Next) — 80B totales, 3B activos, puntuación SWE-bench Verified.',
          '[Ficha de modelo GLM-4.7-Flash](https://huggingface.co/zai-org/GLM-4.7-Flash) — MoE 30B-A3B, licencia MIT, puntuación SWE-bench Verified.',
          '[Ficha de modelo gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b) — parámetros totales y activos y requisitos de memoria de gpt-oss-120b y gpt-oss-20b.',
          '[Biblioteca de Ollama: qwen3-coder](https://ollama.com/library/qwen3-coder) — etiquetas y tamaños de descarga; véanse también [gpt-oss](https://ollama.com/library/gpt-oss), [glm-4.7-flash](https://ollama.com/library/glm-4.7-flash), [qwen3.6](https://ollama.com/library/qwen3.6) y [qwen3-coder-next](https://ollama.com/library/qwen3-coder-next).',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: 'Melhores modelos MoE para programação local?',
    seoTitle: 'Melhores modelos MoE para programar local 2026 (16–32 GB)',
    metaDescription: 'gpt-oss-20b roda em 16 GB, Qwen3-Coder-30B-A3B em 24 GB e Qwen3.6-35B-A3B em 32 GB. Parâmetros ativos, tamanhos no Ollama e SWE-bench comparados.',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-pt.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Quais são os melhores modelos MoE para programação local?',
        answer: 'O Qwen3.6-35B-A3B tem a maior pontuação SWE-bench Verified divulgada pelo fabricante entre os modelos comparados e serve para 32 GB de memória, o Qwen3-Coder-30B-A3B cabe em uma GPU de 24 GB e o gpt-oss-20b em 16 GB. Modelos MoE calculam só 3–5B de parâmetros ativos por token, então são rápidos, mas ainda precisam de memória para todos os especialistas.',
        bullets: [
          '16 GB: gpt-oss-20b (21B no total, 3,6B ativos, 14 GB no Ollama)',
          '24 GB: Qwen3-Coder-30B-A3B ou GLM-4.7-Flash (19 GB cada)',
          '32 GB ou mais: Qwen3.6-35B-A3B (~24 GB); 64–80 GB: Qwen3-Coder-Next, gpt-oss-120b',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Modelos MoE carregam todos os especialistas na memória, mas calculam só 3–5B de parâmetros ativos por token: são mais rápidos que modelos densos de mesmo tamanho de arquivo, não ocupam menos memória',
          'O gpt-oss-20b (14 GB no Ollama) é a escolha MoE para 16 GB; Qwen3-Coder-30B-A3B e GLM-4.7-Flash (19 GB cada) cabem em uma GPU de 24 GB',
          'O Qwen3.6-35B-A3B (~24 GB) informa 73,4 no SWE-bench Verified em sua ficha do modelo, o maior número entre os modelos comparados, e serve para 32 GB de memória',
          'Qwen3-Coder-Next (52 GB) e gpt-oss-120b (65 GB) exigem 64–80 GB de memória unificada ou VRAM',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Qwen3.6-35B-A3B (35B no total, 3B ativos, cerca de 24 GB no Ollama) tem a maior pontuação SWE-bench Verified divulgada pelo fabricante entre os modelos comparados e serve para 32 GB de memória; o gpt-oss-20b cobre 16 GB e o Qwen3-Coder-30B-A3B uma GPU de 24 GB.' },
          { type: 'plain-terms', text: 'Um modelo MoE tem muitas sub-redes especialistas e usa só algumas por token: gera rápido, mas precisa de memória para todas. Escolha um modelo cujo download no Ollama deixe alguns GB de folga para o cache de contexto.' },
        ],
      },
      body1: {
        title: 'Modelos MoE precisam de memória para os parâmetros totais, não só os ativos',
        content: [
          '<strong>Um modelo Mixture of Experts (MoE) encaminha cada token por poucas sub-redes especialistas: a velocidade acompanha os parâmetros ativos e a memória acompanha os parâmetros totais.</strong> Segundo a ficha no Hugging Face, o Qwen3.6-35B-A3B tem 256 especialistas e ativa 8 roteados mais 1 compartilhado por token (3B dos seus 35B parâmetros).',
          'Um MoE com 3B ativos gera tokens, portanto, a um custo próximo ao de um modelo denso pequeno, mas seu download de 14–24 GB ainda precisa caber em VRAM ou em memória unificada rápida. Os tamanhos da tabela são downloads do Ollama; reserve folga para o cache de contexto.',
          'As pontuações das fichas de modelo são divulgadas pelos próprios fabricantes, com configurações de agente diferentes: o SWE-bench Verified é 73,4 para o Qwen3.6-35B-A3B, 70,6 para o Qwen3-Coder-Next e 59,2 para o GLM-4.7-Flash. Use-as como referência, não como comparação direta; a PromptQuorum não as refez.',
        ],
        columns: ['Modelo', 'Total / ativos', 'Tamanho Ollama', 'Faixa de memória'],
        rows: [
          { 'Modelo': 'Qwen3.6-35B-A3B', 'Total / ativos': '35B / 3B', 'Tamanho Ollama': '~24 GB', 'Faixa de memória': '32 GB' },
          { 'Modelo': 'Qwen3-Coder-30B-A3B', 'Total / ativos': '30B / 3.3B', 'Tamanho Ollama': '19 GB', 'Faixa de memória': '24 GB' },
          { 'Modelo': 'GLM-4.7-Flash', 'Total / ativos': '30B / 3B', 'Tamanho Ollama': '19 GB', 'Faixa de memória': '24 GB' },
          { 'Modelo': 'gpt-oss-20b', 'Total / ativos': '21B / 3.6B', 'Tamanho Ollama': '14 GB', 'Faixa de memória': '16 GB' },
          { 'Modelo': 'Qwen3-Coder-Next', 'Total / ativos': '80B / 3B', 'Tamanho Ollama': '52 GB', 'Faixa de memória': '64 GB' },
          { 'Modelo': 'gpt-oss-120b', 'Total / ativos': '117B / 5.1B', 'Tamanho Ollama': '65 GB', 'Faixa de memória': '80 GB' },
        ],
      },
      body2: {
        title: 'Escolha o modelo MoE que cabe na sua memória',
        content: [
          '<strong>Com 16 GB de VRAM, use o gpt-oss-20b: 21B no total, 3,6B ativos, 14 GB no Ollama.</strong> Sobram cerca de 2 GB para o contexto em uma placa de 16 GB, então mantenha a janela de contexto modesta.',
          'Com uma GPU de 24 GB, use o Qwen3-Coder-30B-A3B (19 GB, contexto de 256K, voltado a código) ou o GLM-4.7-Flash (19 GB, licença MIT). Ambos são MoE 30B-A3B com 3–3,3B de parâmetros ativos.',
          'Com 32 GB de memória unificada ou uma GPU de 32 GB, use o Qwen3.6-35B-A3B (cerca de 24 GB, contexto de 256K, Apache 2.0). Em uma GPU de 24 GB fica apertado: parte do modelo vai para a RAM do sistema e a velocidade cai.',
          'Com 64–80 GB, o Qwen3-Coder-Next (80B no total, 3B ativos, 52 GB em Q4_K_M) serve a uma máquina de 64 GB, e o gpt-oss-120b (117B no total, 5,1B ativos, 65 GB) mira uma única GPU de 80 GB, segundo a ficha da OpenAI.',
          'Abaixo de 16 GB, o MoE deixa de ser prático; veja os <a href="/pt/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">melhores modelos de 14B para programação</a> como alternativas densas.',
        ],
      },
      body3: {
        title: 'Rodar modelos MoE com o Ollama',
        content: [
          '<strong>Cada modelo da tabela é um comando:</strong> <code>ollama run gpt-oss:20b</code>, <code>ollama run qwen3-coder:30b</code>, <code>ollama run glm-4.7-flash</code>, <code>ollama run qwen3.6:35b</code>, <code>ollama run qwen3-coder-next</code> e <code>ollama run gpt-oss:120b</code>.',
          'O Ollama divide as camadas entre GPU e RAM do sistema quando o modelo excede a VRAM. No llama.cpp dá para controlar isso em modelos MoE: as opções <code>--cpu-moe</code> e <code>--n-cpu-moe</code> mantêm os pesos dos especialistas na RAM enquanto a atenção fica na GPU, e assim um modelo de 19–24 GB roda em uma placa de 16 GB, mais devagar. A PromptQuorum não mediu a velocidade.',
          'Um erro comum é julgar o tamanho pelos parâmetros ativos: um modelo de “3B ativos” não é um download do tamanho de um 3B. Confira o tamanho do arquivo na página do modelo no Ollama antes de baixar.',
          'Para alternativas densas em cada faixa de VRAM, veja o <a href="/pt/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">guia dos melhores LLMs locais para programação</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos MoE para programação',
        faqs: [
          {
            q: 'O que é um modelo MoE e por que ele importa para programação local?',
            a: 'MoE significa Mixture of Experts. O modelo tem muitas sub-redes especialistas, mas ativa só algumas por token; a velocidade de geração equivale à de um modelo denso bem menor, enquanto o total de parâmetros dá conhecimento amplo de linguagens e frameworks.',
          },
          {
            q: 'Qual modelo MoE é o melhor para 16 GB de VRAM?',
            a: 'O gpt-oss-20b. Ele tem 21B de parâmetros no total e 3,6B ativos, pesa 14 GB no Ollama e é liberado sob Apache 2.0. Os modelos de 19 GB (Qwen3-Coder-30B-A3B, GLM-4.7-Flash) exigem uma GPU de 24 GB ou descarregamento para a CPU.',
          },
          {
            q: 'Qual é o melhor modelo MoE pequeno?',
            a: 'Por parâmetros ativos, GLM-4.7-Flash (3B), Qwen3-Coder-30B-A3B (3,3B) e gpt-oss-20b (3,6B) são os menores aqui. Por memória, o gpt-oss-20b é o menor, com 14 GB; os outros dois têm 19 GB.',
          },
          {
            q: 'Um modelo MoE precisa de menos VRAM que um modelo denso?',
            a: 'Não. Todos os especialistas precisam ser carregados, então a memória acompanha os parâmetros totais. A vantagem é a velocidade: só os parâmetros ativos são calculados a cada token.',
          },
          {
            q: 'Quais modelos MoE de programação existem no Ollama?',
            a: 'O Ollama lista <code>qwen3.6:35b</code>, <code>qwen3-coder:30b</code>, <code>glm-4.7-flash</code>, <code>gpt-oss:20b</code>, <code>qwen3-coder-next</code> e <code>gpt-oss:120b</code>, com downloads de cerca de 24, 19, 19, 14, 52 e 65 GB.',
          },
          {
            q: 'Um modelo MoE é melhor que um denso para programar?',
            a: 'Não automaticamente. O MoE troca memória por velocidade. Um modelo denso de tamanho de arquivo parecido, como o <code>qwen3.6:27b</code> (18–19 GB), pode ser mais lento por token; teste os dois nos seus próprios repositórios antes de decidir.',
          },
          {
            q: 'Por que esta página não apresenta mais o Mixtral 8x22B nem o DeepSeek-V2?',
            a: 'Ambos são modelos de 2024, substituídos por MoE mais novos para programação local. Além disso, uma versão anterior desta página trazia valores de memória errados: o Mixtral 8x22B tem 141B de parâmetros no total (46,7B é do Mixtral 8x7B) e o DeepSeek-V2 tem 236B, muito mais do que cabe em 16 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Melhores modelos de 14B para programação](/pt/prompt-bites/best-14b-models-coding) -- modelos densos de programação para 10–16 GB',
          '[Melhores LLMs locais para programação](/pt/local-llms/best-local-llms-for-coding) -- modelos de programação por faixa de VRAM',
          '[Cursor Pro vs Continue.dev: Qual ferramenta de coding com IA?](/pt/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
      sources: {
        title: 'Fontes',
        items: [
          '[Ficha do modelo Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — arquitetura, especialistas, licença e pontuação no SWE-bench Verified.',
          '[Ficha do modelo Qwen3-Coder-Next](https://huggingface.co/Qwen/Qwen3-Coder-Next) — 80B no total, 3B ativos, pontuação no SWE-bench Verified.',
          '[Ficha do modelo GLM-4.7-Flash](https://huggingface.co/zai-org/GLM-4.7-Flash) — MoE 30B-A3B, licença MIT, pontuação no SWE-bench Verified.',
          '[Ficha do modelo gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b) — parâmetros totais e ativos e alvos de memória do gpt-oss-120b e do gpt-oss-20b.',
          '[Biblioteca do Ollama: qwen3-coder](https://ollama.com/library/qwen3-coder) — tags e tamanhos de download; veja também [gpt-oss](https://ollama.com/library/gpt-oss), [glm-4.7-flash](https://ollama.com/library/glm-4.7-flash), [qwen3.6](https://ollama.com/library/qwen3.6) e [qwen3-coder-next](https://ollama.com/library/qwen3-coder-next).',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'أفضل نماذج ⁨MoE⁩ للبرمجة المحلية؟',
    seoTitle: 'أفضل نماذج ⁨MoE⁩ للبرمجة محليًا ⁨2026⁩ (⁨16⁩–⁨32 GB⁩)',
    metaDescription: 'يعمل ⁨gpt-oss-20b⁩ بذاكرة ⁨16 GB⁩ و⁨Qwen3-Coder-30B-A3B⁩ بذاكرة ⁨24 GB⁩ و⁨Qwen3.6-35B-A3B⁩ بذاكرة ⁨32 GB.⁩ مقارنة المعاملات النشطة وأحجام ⁨Ollama⁩ ونتائج ⁨SWE-bench.⁩',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-ar.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نماذج ⁨MoE⁩ للبرمجة المحلية؟',
        answer: 'يملك ⁨Qwen3.6-35B-A3B⁩ أعلى نتيجة ⁨SWE-bench Verified⁩ أعلنتها الشركة بين النماذج المقارنة ويناسب ذاكرة ⁨32 GB⁩، ويناسب ⁨Qwen3-Coder-30B-A3B⁩ بطاقة ⁨24 GB⁩، ويناسب ⁨gpt-oss-20b⁩ ذاكرة ⁨16 GB.⁩ تحسب نماذج ⁨MoE⁩ لكل رمز ⁨3⁩–⁨5B⁩ معامل نشط فقط فتعمل بسرعة، لكنها لا تزال تحتاج إلى ذاكرة لجميع الخبراء.',
        bullets: [
          '⁨16 GB: gpt-oss-20b⁩ (إجمالي ⁨21B⁩، نشط ⁨3.6B⁩، حجمه ⁨14 GB⁩ على ⁨Ollama⁩)',
          '⁨24 GB: Qwen3-Coder-30B-A3B⁩ أو ⁨GLM-4.7-Flash⁩ (⁨19 GB⁩ لكل منهما)',
          '⁨32 GB⁩ فأكثر: ⁨Qwen3.6-35B-A3B⁩ (⁨~24 GB⁩)؛ ⁨64⁩–⁨80 GB: Qwen3-Coder-Next⁩ و⁨gpt-oss-120b⁩',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تحمّل نماذج ⁨MoE⁩ جميع الخبراء في الذاكرة لكنها تحسب لكل رمز ⁨3⁩–⁨5B⁩ معامل نشط فقط، فهي أسرع من النماذج الكثيفة بالحجم نفسه لكنها لا تستهلك ذاكرة أقل',
          'يُعد ⁨gpt-oss-20b⁩ (⁨14 GB⁩ على ⁨Ollama⁩) خيار ⁨MoE⁩ لذاكرة ⁨16 GB⁩؛ ويناسب ⁨Qwen3-Coder-30B-A3B⁩ و⁨GLM-4.7-Flash⁩ (⁨19 GB⁩ لكل منهما) بطاقة ⁨24 GB⁩',
          'يعلن ⁨Qwen3.6-35B-A3B⁩ (⁨~24 GB⁩) في بطاقة نموذجه عن ⁨73.4⁩ في ⁨SWE-bench Verified⁩، وهو أعلى رقم بين النماذج المقارنة هنا، ويناسب ذاكرة ⁨32 GB⁩',
          'يحتاج ⁨Qwen3-Coder-Next⁩ (⁨52 GB⁩) و⁨gpt-oss-120b⁩ (⁨65 GB⁩) إلى ⁨64⁩–⁨80 GB⁩ من الذاكرة الموحدة أو ⁨VRAM⁩',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يملك ⁨Qwen3.6-35B-A3B⁩ (إجمالي ⁨35B⁩، نشط ⁨3B⁩، نحو ⁨24 GB⁩ على ⁨Ollama⁩) أعلى نتيجة ⁨SWE-bench Verified⁩ أعلنتها الشركة بين النماذج المقارنة ويناسب ذاكرة ⁨32 GB⁩؛ ويغطي ⁨gpt-oss-20b⁩ ذاكرة ⁨16 GB⁩ ويغطي ⁨Qwen3-Coder-30B-A3B⁩ بطاقة ⁨24 GB.⁩' },
          { type: 'plain-terms', text: 'يضم نموذج ⁨MoE⁩ كثيرًا من الشبكات الفرعية الخبيرة ويستخدم منها القليل لكل رمز، فيولّد بسرعة لكنه يحتاج إلى ذاكرة لجميعها. اختر نموذجًا يترك حجم تنزيله على ⁨Ollama⁩ بضعة غيغابايت لذاكرة السياق المؤقتة.' },
        ],
      },
      body1: {
        title: 'تحتاج نماذج ⁨MoE⁩ إلى ذاكرة للمعاملات الإجمالية لا النشطة فقط',
        content: [
          '<strong>يمرّر نموذج ⁨Mixture of Experts⁩ (⁨MoE⁩) كل رمز عبر عدد قليل من الشبكات الفرعية الخبيرة، فتتبع السرعة المعاملات النشطة وتتبع الذاكرة المعاملات الإجمالية.</strong> وفق بطاقة النموذج على ⁨Hugging Face⁩، يضم ⁨Qwen3.6-35B-A3B⁩ ‏⁨256⁩ خبيرًا ويفعّل لكل رمز ⁨8⁩ خبراء موجَّهين وخبيرًا مشتركًا واحدًا (⁨3B⁩ من أصل ⁨35B⁩).',
          'لذلك يولّد ⁨MoE⁩ بمعامل نشط ⁨3B⁩ الرموز بتكلفة قريبة من نموذج كثيف صغير، لكن تنزيله البالغ ⁨14⁩–⁨24 GB⁩ يجب أن يتسع مع ذلك في ⁨VRAM⁩ أو في ذاكرة موحدة سريعة. الأحجام في الجدول هي أحجام تنزيل ⁨Ollama⁩، فاترك هامشًا لذاكرة السياق المؤقتة.',
          'نتائج الاختبارات في بطاقات النماذج مُعلنة من الشركات المطورة وبإعدادات وكلاء مختلفة: نتيجة ⁨SWE-bench Verified⁩ هي ⁨73.4⁩ لـ ⁨Qwen3.6-35B-A3B⁩ و⁨70.6⁩ لـ ⁨Qwen3-Coder-Next⁩ و⁨59.2⁩ لـ ⁨GLM-4.7-Flash.⁩ اعتبرها مؤشرًا لا مقارنة مباشرة؛ ولم تعد ⁨PromptQuorum⁩ قياسها.',
        ],
        columns: ['النموذج', 'الإجمالي / النشط', 'حجم ⁨Ollama⁩', 'فئة الذاكرة'],
        rows: [
          { 'النموذج': '⁨Qwen3.6-35B-A3B⁩', 'الإجمالي / النشط': '⁨35B /⁩ ⁨3B⁩', 'حجم ⁨Ollama⁩': '⁨~24 GB⁩', 'فئة الذاكرة': '⁨32 GB⁩' },
          { 'النموذج': '⁨Qwen3-Coder-30B-A3B⁩', 'الإجمالي / النشط': '⁨30B /⁩ ⁨3.3B⁩', 'حجم ⁨Ollama⁩': '⁨19 GB⁩', 'فئة الذاكرة': '⁨24 GB⁩' },
          { 'النموذج': '⁨GLM-4.7-Flash⁩', 'الإجمالي / النشط': '⁨30B /⁩ ⁨3B⁩', 'حجم ⁨Ollama⁩': '⁨19 GB⁩', 'فئة الذاكرة': '⁨24 GB⁩' },
          { 'النموذج': '⁨gpt-oss-20b⁩', 'الإجمالي / النشط': '⁨21B /⁩ ⁨3.6B⁩', 'حجم ⁨Ollama⁩': '⁨14 GB⁩', 'فئة الذاكرة': '⁨16 GB⁩' },
          { 'النموذج': '⁨Qwen3-Coder-Next⁩', 'الإجمالي / النشط': '⁨80B /⁩ ⁨3B⁩', 'حجم ⁨Ollama⁩': '⁨52 GB⁩', 'فئة الذاكرة': '⁨64 GB⁩' },
          { 'النموذج': '⁨gpt-oss-120b⁩', 'الإجمالي / النشط': '⁨117B /⁩ ⁨5.1B⁩', 'حجم ⁨Ollama⁩': '⁨65 GB⁩', 'فئة الذاكرة': '⁨80 GB⁩' },
        ],
      },
      body2: {
        title: 'اختر نموذج ⁨MoE⁩ المناسب لذاكرتك',
        content: [
          '<strong>مع ⁨16 GB⁩ من ⁨VRAM⁩ استخدم ⁨gpt-oss-20b:⁩ إجمالي ⁨21B⁩، نشط ⁨3.6B⁩، وحجمه ⁨14 GB⁩ على ⁨Ollama.⁩</strong> يتبقى نحو ⁨2 GB⁩ للسياق على بطاقة ⁨16 GB⁩، فأبقِ نافذة السياق معتدلة.',
          'مع بطاقة ⁨24 GB⁩ استخدم ⁨Qwen3-Coder-30B-A3B⁩ (حجمه ⁨19 GB⁩، سياق ⁨256K⁩، مضبوط للشيفرة) أو ⁨GLM-4.7-Flash⁩ (حجمه ⁨19 GB⁩، ترخيص ⁨MIT⁩). كلاهما ⁨MoE⁩ من فئة ⁨30B-A3B⁩ بمعاملات نشطة ⁨3⁩–⁨3.3B.⁩',
          'مع ذاكرة موحدة ⁨32 GB⁩ أو بطاقة ⁨32 GB⁩ استخدم ⁨Qwen3.6-35B-A3B⁩ (نحو ⁨24 GB⁩، سياق ⁨256K⁩، ترخيص ⁨Apache 2.0⁩). الأمر ضيق على بطاقة ⁨24 GB⁩ حيث يفيض جزء من النموذج إلى ذاكرة النظام وتنخفض السرعة.',
          'مع ⁨64⁩–⁨80 GB⁩ يناسب ⁨Qwen3-Coder-Next⁩ (إجمالي ⁨80B⁩، نشط ⁨3B⁩، حجمه ⁨52 GB⁩ بصيغة ⁨Q4_K_M⁩) جهازًا بذاكرة ⁨64 GB⁩، ويستهدف ⁨gpt-oss-120b⁩ (إجمالي ⁨117B⁩، نشط ⁨5.1B⁩، حجمه ⁨65 GB⁩) بطاقة واحدة بذاكرة ⁨80 GB⁩ وفق بطاقة نموذج ⁨OpenAI.⁩',
          'دون ⁨16 GB⁩ لا يعود ⁨MoE⁩ عمليًا؛ راجع <a href="/ar/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">أفضل نماذج ⁨14B⁩ للبرمجة</a> للبدائل الكثيفة.',
        ],
      },
      body3: {
        title: 'تشغيل نماذج ⁨MoE⁩ عبر ⁨Ollama⁩',
        content: [
          '<strong>كل نموذج في الجدول يعمل بأمر واحد:</strong> <code>ollama run gpt-oss:20b</code> و<code>ollama run qwen3-coder:30b</code> و<code>ollama run glm-4.7-flash</code> و<code>ollama run qwen3.6:35b</code> و<code>ollama run qwen3-coder-next</code> و<code>ollama run gpt-oss:120b</code>.',
          'يوزّع ⁨Ollama⁩ الطبقات بين وحدة الرسوميات وذاكرة النظام عندما يتجاوز النموذج ⁨VRAM.⁩ وفي ⁨llama.cpp⁩ يمكنك التحكم في ذلك لنماذج ⁨MoE:⁩ يُبقي الخياران <code>--cpu-moe</code> و<code>--n-cpu-moe</code> أوزان الخبراء في ذاكرة النظام بينما تبقى طبقات الانتباه على وحدة الرسوميات، فيعمل نموذج حجمه ⁨19⁩–⁨24 GB⁩ على بطاقة ⁨16 GB⁩ بسرعة أقل. لم تقس ⁨PromptQuorum⁩ السرعة.',
          'من الأخطاء الشائعة الحكم على الحجم بالمعاملات النشطة: نموذج «نشط ⁨3B⁩» ليس تنزيلًا بحجم نموذج ⁨3B.⁩ تحقق من حجم الملف في صفحة النموذج على ⁨Ollama⁩ قبل تنزيله.',
          'للبدائل الكثيفة في كل فئة من ⁨VRAM⁩ راجع <a href="/ar/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">دليل أفضل نماذج ⁨LLM⁩ المحلية للبرمجة</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج ⁨MoE⁩ للبرمجة',
        faqs: [
          {
            q: 'ما نموذج ⁨MoE⁩ ولماذا يهم في البرمجة المحلية؟',
            a: '⁨MoE⁩ اختصار ⁨Mixture of Experts.⁩ يحتوي النموذج على كثير من الشبكات الفرعية الخبيرة لكنه يفعّل القليل منها لكل رمز، فتماثل سرعة التوليد نموذجًا كثيفًا أصغر بكثير، بينما يمنح العدد الإجمالي للمعاملات معرفة واسعة بعدة لغات وأطر عمل.',
          },
          {
            q: 'ما أفضل نموذج ⁨MoE⁩ لذاكرة ⁨VRAM⁩ بحجم ⁨16 GB⁩؟',
            a: '⁨gpt-oss-20b.⁩ إجمالي معاملاته ⁨21B⁩ والنشط منها ⁨3.6B⁩، وحجم تنزيله ⁨14 GB⁩ على ⁨Ollama⁩، ويصدر بترخيص ⁨Apache 2.0.⁩ أما النماذج بحجم ⁨19 GB⁩ (⁨Qwen3-Coder-30B-A3B⁩ و⁨GLM-4.7-Flash⁩) فتحتاج إلى بطاقة ⁨24 GB⁩ أو تفريغ جزئي إلى المعالج.',
          },
          {
            q: 'ما أفضل نموذج ⁨MoE⁩ صغير؟',
            a: 'من حيث المعاملات النشطة، أصغرها هنا ⁨GLM-4.7-Flash⁩ (⁨3B⁩) و⁨Qwen3-Coder-30B-A3B⁩ (⁨3.3B⁩) و⁨gpt-oss-20b⁩ (⁨3.6B⁩). ومن حيث الذاكرة، أصغرها ⁨gpt-oss-20b⁩ بحجم ⁨14 GB⁩، والآخران ⁨19 GB.⁩',
          },
          {
            q: 'هل يحتاج نموذج ⁨MoE⁩ إلى ⁨VRAM⁩ أقل من النموذج الكثيف؟',
            a: 'لا. يجب تحميل جميع الخبراء، فتتبع الذاكرة المعاملات الإجمالية. الميزة هي السرعة: تُحسب المعاملات النشطة فقط لكل رمز.',
          },
          {
            q: 'ما نماذج ⁨MoE⁩ للبرمجة المتاحة على ⁨Ollama⁩؟',
            a: 'يضم ⁨Ollama⁩ النماذج <code>qwen3.6:35b</code> و<code>qwen3-coder:30b</code> و<code>glm-4.7-flash</code> و<code>gpt-oss:20b</code> و<code>qwen3-coder-next</code> و<code>gpt-oss:120b</code>، بأحجام تنزيل تقارب ⁨24⁩ و⁨19⁩ و⁨19⁩ و⁨14⁩ و⁨52⁩ و⁨65 GB.⁩',
          },
          {
            q: 'هل نموذج ⁨MoE⁩ أفضل من الكثيف في البرمجة؟',
            a: 'ليس تلقائيًا. يستبدل ⁨MoE⁩ الذاكرة بالسرعة. وقد يكون النموذج الكثيف المقارب في حجم الملف، مثل <code>qwen3.6:27b</code> (⁨18⁩–⁨19 GB⁩)، أبطأ لكل رمز؛ جرّب الاثنين على مستودعاتك قبل الاختيار.',
          },
          {
            q: 'لماذا لم تعد هذه الصفحة تعرض ⁨Mixtral 8x22B⁩ و⁨DeepSeek-V2⁩؟',
            a: 'كلاهما من نماذج ⁨2024⁩ وقد حلّت محلهما إصدارات ⁨MoE⁩ أحدث للبرمجة المحلية. كما تضمنت نسخة سابقة من هذه الصفحة أرقام ذاكرة خاطئة: إجمالي معاملات ⁨Mixtral 8x22B⁩ هو ⁨141B⁩ (الرقم ⁨46.7B⁩ يخص ⁨Mixtral 8x7B⁩)، وإجمالي ⁨DeepSeek-V2⁩ هو ⁨236B⁩، أي أكثر بكثير مما تتسع له ذاكرة ⁨16 GB.⁩',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل نماذج ⁨14B⁩ للبرمجة](/ar/prompt-bites/best-14b-models-coding) -- نماذج برمجة كثيفة لذاكرة ⁨10⁩–⁨16 GB⁩',
          '[أفضل نماذج ⁨LLM⁩ المحلية للبرمجة](/ar/local-llms/best-local-llms-for-coding) -- نماذج البرمجة حسب فئة ⁨VRAM⁩',
          '[⁨Cursor Pro⁩ مقابل ⁨Continue.dev:⁩ أي أداة برمجة بالذكاء الاصطناعي؟](/ar/prompt-bites/cursor-pro-vs-continue-dev) -- ⁨coding tool comparison⁩',
        ],
      },
      sources: {
        title: 'المصادر',
        items: [
          '[بطاقة نموذج ⁨Qwen3.6-35B-A3B⁩](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — البنية وعدد الخبراء والترخيص ونتيجة ⁨SWE-bench Verified.⁩',
          '[بطاقة نموذج ⁨Qwen3-Coder-Next⁩](https://huggingface.co/Qwen/Qwen3-Coder-Next) — إجمالي ⁨80B⁩ ونشط ⁨3B⁩ ونتيجة ⁨SWE-bench Verified.⁩',
          '[بطاقة نموذج ⁨GLM-4.7-Flash⁩](https://huggingface.co/zai-org/GLM-4.7-Flash) — نموذج ⁨MoE⁩ من فئة ⁨30B-A3B⁩ وترخيص ⁨MIT⁩ ونتيجة ⁨SWE-bench Verified.⁩',
          '[بطاقة نموذج ⁨gpt-oss-120b⁩](https://huggingface.co/openai/gpt-oss-120b) — المعاملات الإجمالية والنشطة ومتطلبات الذاكرة لـ ⁨gpt-oss-120b⁩ و⁨gpt-oss-20b.⁩',
          '[مكتبة ⁨Ollama: qwen3-coder⁩](https://ollama.com/library/qwen3-coder) — الوسوم وأحجام التنزيل؛ انظر أيضًا [⁨gpt-oss⁩](https://ollama.com/library/gpt-oss) و[⁨glm-4.7-flash⁩](https://ollama.com/library/glm-4.7-flash) و[⁨qwen3.6⁩](https://ollama.com/library/qwen3.6) و[⁨qwen3-coder-next⁩](https://ollama.com/library/qwen3-coder-next).',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    title: '로컬 코딩을 위한 최적 MoE 모델은?',
    seoTitle: '로컬 코딩 최적 MoE 모델 2026 (16~32GB)',
    metaDescription: 'gpt-oss-20b는 16GB, Qwen3-Coder-30B-A3B는 24GB, Qwen3.6-35B-A3B는 32GB에서 실행됩니다. 활성 파라미터, Ollama 크기, SWE-bench를 비교합니다.',
    heroImage: '/images/best-moe-models-local-coding-moe-comparison-hero-ko.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ko: {
        question: '로컬 코딩을 위한 최적 MoE 모델은 무엇입니까?',
        answer: 'Qwen3.6-35B-A3B는 비교한 모델 중 개발사가 보고한 SWE-bench Verified 점수가 가장 높아 32GB 메모리에 적합하고, 24GB GPU에는 Qwen3-Coder-30B-A3B, 16GB에는 gpt-oss-20b가 맞습니다. MoE는 토큰당 3~5B 활성 파라미터만 계산해 빠르지만, 모든 전문가를 위한 메모리는 여전히 필요합니다.',
        bullets: [
          '16GB: gpt-oss-20b (전체 21B, 활성 3.6B, Ollama 14GB)',
          '24GB: Qwen3-Coder-30B-A3B 또는 GLM-4.7-Flash (각 19GB)',
          '32GB 이상: Qwen3.6-35B-A3B (~24GB), 64~80GB: Qwen3-Coder-Next, gpt-oss-120b',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoE 모델은 모든 전문가를 메모리에 올리지만 토큰당 3~5B 활성 파라미터만 계산합니다. 같은 파일 크기의 밀집 모델보다 빠르지만 메모리를 덜 쓰지는 않습니다',
          'gpt-oss-20b(Ollama 14GB)는 16GB용 MoE 선택이며, Qwen3-Coder-30B-A3B와 GLM-4.7-Flash(각 19GB)는 24GB GPU에 들어갑니다',
          'Qwen3.6-35B-A3B(~24GB)는 모델 카드에서 SWE-bench Verified 73.4를 보고하여 여기서 비교한 모델 중 가장 높으며, 32GB 메모리에 적합합니다',
          'Qwen3-Coder-Next(52GB)와 gpt-oss-120b(65GB)는 64~80GB의 통합 메모리 또는 VRAM이 필요합니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6-35B-A3B(전체 35B, 활성 3B, Ollama 약 24GB)는 비교한 모델 중 개발사 보고 SWE-bench Verified 점수가 가장 높아 32GB 메모리에 적합하며, 16GB는 gpt-oss-20b, 24GB GPU는 Qwen3-Coder-30B-A3B가 맞습니다.' },
          { type: 'plain-terms', text: 'MoE 모델은 많은 전문가 서브네트워크를 두고 토큰마다 몇 개만 사용하므로 생성은 빠르지만 모든 전문가를 위한 메모리가 필요합니다. 컨텍스트 캐시를 위해 몇 GB의 여유가 남는 Ollama 다운로드 크기를 고르십시오.' },
        ],
      },
      body1: {
        title: 'MoE에는 활성이 아닌 전체 파라미터 분량의 메모리가 필요합니다',
        content: [
          '<strong>Mixture of Experts(MoE) 모델은 각 토큰을 소수의 전문가 서브네트워크로만 보내므로, 속도는 활성 파라미터를 따르고 메모리는 전체 파라미터를 따릅니다.</strong> Hugging Face 모델 카드에 따르면 Qwen3.6-35B-A3B는 256개의 전문가를 갖고 토큰당 라우팅된 8개와 공유 1개를 활성화합니다(35B 중 3B).',
          '따라서 활성 3B의 MoE는 작은 밀집 모델 수준의 비용으로 토큰을 생성하지만, 14~24GB의 다운로드 분량은 여전히 VRAM이나 빠른 통합 메모리에 올라가야 합니다. 표의 크기는 Ollama 다운로드 크기이므로 컨텍스트 캐시 여유분을 더해 계산하십시오.',
          '모델 카드의 벤치마크 점수는 각 개발사가 서로 다른 에이전트 설정으로 보고한 값입니다. SWE-bench Verified는 Qwen3.6-35B-A3B가 73.4, Qwen3-Coder-Next가 70.6, GLM-4.7-Flash가 59.2입니다. 직접 비교가 아닌 참고용으로 보십시오. PromptQuorum은 재측정하지 않았습니다.',
        ],
        columns: ['모델', '전체 / 활성', 'Ollama 크기', '메모리 구간'],
        rows: [
          { '모델': 'Qwen3.6-35B-A3B', '전체 / 활성': '35B / 3B', 'Ollama 크기': '~24 GB', '메모리 구간': '32 GB' },
          { '모델': 'Qwen3-Coder-30B-A3B', '전체 / 활성': '30B / 3.3B', 'Ollama 크기': '19 GB', '메모리 구간': '24 GB' },
          { '모델': 'GLM-4.7-Flash', '전체 / 활성': '30B / 3B', 'Ollama 크기': '19 GB', '메모리 구간': '24 GB' },
          { '모델': 'gpt-oss-20b', '전체 / 활성': '21B / 3.6B', 'Ollama 크기': '14 GB', '메모리 구간': '16 GB' },
          { '모델': 'Qwen3-Coder-Next', '전체 / 활성': '80B / 3B', 'Ollama 크기': '52 GB', '메모리 구간': '64 GB' },
          { '모델': 'gpt-oss-120b', '전체 / 활성': '117B / 5.1B', 'Ollama 크기': '65 GB', '메모리 구간': '80 GB' },
        ],
      },
      body2: {
        title: '내 메모리에 맞는 MoE 모델 고르기',
        content: [
          '<strong>VRAM 16GB에는 gpt-oss-20b를 쓰십시오. 전체 21B, 활성 3.6B, Ollama 14GB입니다.</strong> 16GB 카드에서는 컨텍스트에 약 2GB만 남으므로 컨텍스트 창을 적당히 유지하십시오.',
          '24GB GPU에는 Qwen3-Coder-30B-A3B(19GB, 256K 컨텍스트, 코드에 맞춰 조정) 또는 GLM-4.7-Flash(19GB, MIT 라이선스)를 쓰십시오. 둘 다 활성 3~3.3B의 30B-A3B MoE입니다.',
          '32GB 통합 메모리나 32GB GPU에는 Qwen3.6-35B-A3B(약 24GB, 256K 컨텍스트, Apache 2.0)를 쓰십시오. 24GB GPU에서는 빠듯하며, 모델 일부가 시스템 RAM으로 넘치면서 속도가 떨어집니다.',
          '64~80GB에서는 Qwen3-Coder-Next(전체 80B, 활성 3B, Q4_K_M 52GB)가 64GB 장비에 맞고, gpt-oss-120b(전체 117B, 활성 5.1B, 65GB)는 OpenAI 모델 카드에 따르면 80GB GPU 한 장을 목표로 합니다.',
          '16GB 미만에서는 MoE가 실용적이지 않습니다. 밀집 모델 대안은 <a href="/ko/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">코딩용 최적 14B 모델</a>을 참조하십시오.',
        ],
      },
      body3: {
        title: 'Ollama로 MoE 모델 실행하기',
        content: [
          '<strong>표의 모든 모델은 명령 한 줄로 실행됩니다.</strong> <code>ollama run gpt-oss:20b</code>, <code>ollama run qwen3-coder:30b</code>, <code>ollama run glm-4.7-flash</code>, <code>ollama run qwen3.6:35b</code>, <code>ollama run qwen3-coder-next</code>, <code>ollama run gpt-oss:120b</code>.',
          'Ollama는 모델이 VRAM을 넘으면 레이어를 GPU와 시스템 RAM에 나눕니다. llama.cpp에서는 MoE용으로 이를 조정할 수 있습니다. <code>--cpu-moe</code>와 <code>--n-cpu-moe</code> 옵션은 전문가 가중치를 시스템 RAM에 두고 어텐션은 GPU에 남겨, 19~24GB 모델을 16GB 카드에서 더 느리게 실행할 수 있게 합니다. 속도는 PromptQuorum이 측정하지 않았습니다.',
          '흔한 실수는 활성 파라미터로 크기를 판단하는 것입니다. "활성 3B" 모델의 다운로드가 3B 크기는 아닙니다. 받기 전에 모델의 Ollama 페이지에서 파일 크기를 확인하십시오.',
          'VRAM 구간별 밀집 모델 대안은 <a href="/ko/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">코딩용 최적 로컬 LLM 가이드</a>를 참조하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'MoE 코딩 모델에 관한 빠른 답변',
        faqs: [
          {
            q: 'MoE 모델이란 무엇이며 로컬 코딩에 왜 중요합니까?',
            a: 'MoE는 Mixture of Experts의 약자입니다. 모델에는 많은 전문가 서브네트워크가 있지만 토큰당 소수만 활성화되므로 생성 속도는 훨씬 작은 밀집 모델 수준이고, 전체 파라미터 수는 여러 언어와 프레임워크에 걸친 폭넓은 지식을 제공합니다.',
          },
          {
            q: 'VRAM 16GB에 가장 좋은 MoE 모델은 무엇입니까?',
            a: 'gpt-oss-20b입니다. 전체 21B, 활성 3.6B 파라미터이며 Ollama 다운로드는 14GB, 라이선스는 Apache 2.0입니다. 19GB 모델(Qwen3-Coder-30B-A3B, GLM-4.7-Flash)은 24GB GPU 또는 CPU 오프로드가 필요합니다.',
          },
          {
            q: '가장 좋은 소형 MoE 모델은 무엇입니까?',
            a: '활성 파라미터 기준으로는 GLM-4.7-Flash(3B), Qwen3-Coder-30B-A3B(3.3B), gpt-oss-20b(3.6B)가 가장 작습니다. 메모리 기준으로는 gpt-oss-20b가 14GB로 가장 작고, 나머지 둘은 19GB입니다.',
          },
          {
            q: 'MoE 모델은 밀집 모델보다 VRAM이 덜 필요합니까?',
            a: '아니요. 모든 전문가를 로드해야 하므로 메모리는 전체 파라미터를 따릅니다. 장점은 속도이며, 토큰마다 활성 파라미터만 계산합니다.',
          },
          {
            q: 'Ollama에서 쓸 수 있는 MoE 코딩 모델은 무엇입니까?',
            a: 'Ollama에는 <code>qwen3.6:35b</code>, <code>qwen3-coder:30b</code>, <code>glm-4.7-flash</code>, <code>gpt-oss:20b</code>, <code>qwen3-coder-next</code>, <code>gpt-oss:120b</code>가 있으며 다운로드 크기는 각각 약 24, 19, 19, 14, 52, 65GB입니다.',
          },
          {
            q: '코딩에서 MoE 모델이 밀집 모델보다 더 좋습니까?',
            a: '반드시 그렇지는 않습니다. MoE는 메모리를 속도와 맞바꿉니다. <code>qwen3.6:27b</code>(18~19GB)처럼 파일 크기가 비슷한 밀집 모델은 토큰당 더 느릴 수 있으므로, 선택 전에 자신의 저장소에서 둘 다 시험해 보십시오.',
          },
          {
            q: '이 페이지에서 Mixtral 8x22B와 DeepSeek-V2를 더 이상 다루지 않는 이유는 무엇입니까?',
            a: '둘 다 2024년 모델로, 로컬 코딩에서는 더 새로운 MoE로 대체되었습니다. 이전 버전 페이지에는 잘못된 메모리 수치도 있었습니다. Mixtral 8x22B의 전체 파라미터는 141B이며(46.7B는 Mixtral 8x7B의 값), DeepSeek-V2는 236B로 16GB에 들어가지 않습니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[코딩용 최적 14B 모델](/ko/prompt-bites/best-14b-models-coding) -- 10~16GB용 밀집 코딩 모델',
          '[코딩용 최적 로컬 LLM](/ko/local-llms/best-local-llms-for-coding) -- VRAM 구간별 코딩 모델',
          '[Cursor Pro vs Continue.dev: 어떤 AI 코딩 도구?](/ko/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
      sources: {
        title: '출처',
        items: [
          '[Qwen3.6-35B-A3B 모델 카드](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — 아키텍처, 전문가 수, 라이선스, SWE-bench Verified 점수.',
          '[Qwen3-Coder-Next 모델 카드](https://huggingface.co/Qwen/Qwen3-Coder-Next) — 전체 80B, 활성 3B, SWE-bench Verified 점수.',
          '[GLM-4.7-Flash 모델 카드](https://huggingface.co/zai-org/GLM-4.7-Flash) — 30B-A3B MoE, MIT 라이선스, SWE-bench Verified 점수.',
          '[gpt-oss-120b 모델 카드](https://huggingface.co/openai/gpt-oss-120b) — gpt-oss-120b와 gpt-oss-20b의 전체·활성 파라미터 및 메모리 목표.',
          '[Ollama 라이브러리: qwen3-coder](https://ollama.com/library/qwen3-coder) — 태그와 다운로드 크기. [gpt-oss](https://ollama.com/library/gpt-oss), [glm-4.7-flash](https://ollama.com/library/glm-4.7-flash), [qwen3.6](https://ollama.com/library/qwen3.6), [qwen3-coder-next](https://ollama.com/library/qwen3-coder-next)도 참조.',
        ],
      },
    },
  },
}
