// Auto-generated from src/lib/local-llms/content.ts
// Slug: run-70b-models-24gb-vram
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Hardware & Performance',
      title: 'How to Run 70B Models on 24GB VRAM: Advanced Techniques',
      seoTitle: 'Run 70B Models on 24 GB VRAM: Complete Setup Guide 2026',
      intro: 'Running a 70B model (normally requires 40+ GB) on 24 GB VRAM is possible with aggressive quantization (Q2-Q3) and layer offloading, but the result is slow (~3-5 tokens/sec). As of April 2026, this is impractical for real-time chat but viable for batch processing or experimentation.',
      metaDescription: 'Run 70B models on 24GB VRAM 2026: quantization (Q4_K_M), offloading, layer splitting. Techniques with trade-offs and performance data.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Running a 70B model (normally requires 40+ GB) on 24 GB VRAM is possible with aggressive quantization (Q2-Q3) and layer offloading, but the result is slow (~3-5 tokens/sec).**',
      audience: 'Engineers deploying local LLMs in production or enterprise environments',
      readTime: '10 min read',
      educationalLevel: 'Advanced',
      primaryTerm: '70B model optimization',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Theoretical Limits', anchor: '#limits' },
        { label: 'Quantization Strategy', anchor: '#quantization' },
        { label: 'Offloading Strategy', anchor: '#offloading' },
        { label: 'Practical Setup', anchor: '#setup' },
        { label: 'Realistic Performance', anchor: '#performance' },
        { label: 'Better Alternatives', anchor: '#alternatives' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Related Reading', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Llama 3.1 70B at Q4 = 35 GB (too large for 24GB). At Q3 = 26 GB (still too large). At Q2 = 17 GB (fits!).',
            'Trade-off: Q2 has noticeable quality loss. ~70% of FP16 quality.',
            'Speed: 3-5 tokens/sec with 20 GB offloaded to system RAM (ultra-slow).',
            'Better option: Use 13B model at Q5, or buy a second GPU for layer splitting.',
            'As of April 2026, this is a constraint workaround, not a recommended approach.',
          ],
        },
        limits: {
          id: 'limits',
          title: 'The Theoretical VRAM Math',
          content: [
            '**Llama 3.1 70B at various quantizations:**',
          ],
          rows: [
            { 'Quantization': 'FP16 (baseline)', 'Size': '140 GB', 'Fits 24GB?': 'No' },
            { 'Quantization': 'Q8 (8-bit)', 'Size': '70 GB', 'Fits 24GB?': 'No' },
            { 'Quantization': 'Q5 (5-bit)', 'Size': '43.75 GB', 'Fits 24GB?': 'No' },
            { 'Quantization': 'Q4 (4-bit)', 'Size': '35 GB', 'Fits 24GB?': 'No (with offloading: maybe)' },
            { 'Quantization': 'Q3 (3-bit)', 'Size': '26 GB', 'Fits 24GB?': 'No (barely)' },
            { 'Quantization': 'Q2 (2-bit)', 'Size': '17.5 GB', 'Fits 24GB?': 'Yes' },
          ],
          columns: ['Quantization', 'Model Size', 'Fits 24GB?'],
        },
        quantization: {
          id: 'quantization',
          title: 'Aggressive Quantization: The Primary Tool',
          content: [
            '**To fit 70B in 24GB, you must use Q2 or Q3 quantization.**',
            '- **Q3**: 26 GB (still 2 GB over). Can offload 2 GB to RAM. Slightly better quality than Q2.',
            '- **Q2**: 17.5 GB (fits!). 70% quality vs FP16. Noticeable degradation but usable.',
            'Download the quantized model: `ollama pull llama3.1:70b-q2` (if available) or use conversion tools like llama.cpp.',
          ],
        },
        offloading: {
          id: 'offloading',
          title: 'Offloading to System RAM',
          content: [
            '**If using Q4 (35 GB) on 24GB GPU, you can offload the remaining 11 GB to system RAM.** Speed penalty is severe (10× slower).',
            'Only practical for batch processing where you can wait hours for results.',
          ],
        },
        setup: {
          id: 'setup',
          title: 'Practical Setup: Running 70B on 24GB',
          content: 'Step-by-step:',
          numberedItems: [
            'Use Q2 quantization: `ollama pull llama3.1:70b-q2` (if available, else convert with llama.cpp)',
            'Verify VRAM: `nvidia-smi` should show ~18 GB used',
            'Run the model: `ollama run llama3.1:70b-q2`',
            'Expect 3-5 tokens/sec (very slow)',
            'Use only for batch/offline processing, not interactive chat',
          ],
        },
        performance: {
          id: 'performance',
          title: 'Realistic Performance Expectations',
          content: [
            '**Running 70B on 24GB VRAM is slow:**',
          ],
          rows: [
            { 'Quantization': 'Q2 (24GB VRAM)', 'Speed': '5-8 tok/sec', 'Latency': '2-4 sec per token', 'Use Case': 'Batch processing only' },
            { 'Quantization': 'Q3 + offload (24GB)', 'Speed': '3-5 tok/sec', 'Latency': '3-5 sec per token', 'Use Case': 'Extremely limited' },
            { 'Quantization': 'Q4 + offload (24GB)', 'Speed': '1-3 tok/sec', 'Latency': '5-10 sec per token', 'Use Case': 'Overnight batch only' },
          ],
          columns: ['Quantization', 'Speed', 'Latency', 'Use Case'],
        },
        alternatives: {
          id: 'alternatives',
          title: 'Better Alternatives to Constrained 70B',
          content: 'Instead of struggling with 70B on limited VRAM, consider:',
          items: [
            'Use a 13B model (Llama 3.1 13B at Q5 = 8 GB, very fast)',
            'Buy a second RTX 4090 for layer splitting (2× 24GB = 48GB, 100+ tok/sec)',
            'Use a cloud API (GPT-4o for important tasks, local for experimentation)',
            'Wait for more efficient models (smaller, same quality)',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common Mistakes With Constrained 70B',
          items: [
            '**Expecting Q2 to be usable for chat.** It is not. Quality degradation is too severe for real-time interaction.',
            '**Not measuring actual speed before committing.** Test with a small prompt (10 tokens) and verify speed before running large batch jobs.',
            '**Assuming offloading is "free".** System RAM is 100× slower than GPU VRAM. Offloading makes inference impractical.',
            '**Not considering alternatives.** A 13B model is dramatically faster and often sufficient in quality.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Can I actually run a 70B model on a single RTX 4090?',
              a: 'Yes, but with significant caveats. At Q2 quantization (17.5 GB), the model fits in 24 GB VRAM but runs at 5–8 tokens/sec and has ~70% of FP16 quality. At Q4 (35 GB), you need to offload 11 GB to system RAM, dropping speed to 1–3 tokens/sec. Neither is suitable for real-time chat — only offline batch processing.',
            },
            {
              q: 'What quantization is needed to fit 70B in 24 GB VRAM?',
              a: 'Q2 quantization fits in 24 GB (17.5 GB model size). Q3 (26 GB) requires 2 GB of RAM offloading. Q4 (35 GB) requires 11 GB offloading and makes inference very slow. Q5 and above (44–70 GB) cannot fit even with offloading on a 24 GB GPU. Q2 is the only option that runs fully in VRAM.',
            },
            {
              q: 'How slow is a 70B model on 24 GB VRAM?',
              a: 'At Q2 (fully in VRAM): 5–8 tokens/sec. At Q3 with 2 GB RAM offload: 3–5 tokens/sec. At Q4 with 11 GB RAM offload: 1–3 tokens/sec. Compare to a 13B model at Q5 on the same GPU: 80–100 tokens/sec. The 70B constrained setup is 10–20× slower than a properly sized smaller model.',
            },
            {
              q: 'Is it better to use a 13B model than a constrained 70B?',
              a: 'For most tasks, yes. A 13B model at Q5 quantization runs at 80–100 tokens/sec on an RTX 4090 and delivers strong quality. A 70B model at Q2 runs at 5–8 tokens/sec with degraded quality. The 13B wins on speed and often on practical quality due to Q2 degradation. Only use 70B-on-24GB if you need specific 70B capabilities and can tolerate batch-only usage.',
            },
            {
              q: 'What is the best use case for 70B on 24 GB VRAM?',
              a: 'Overnight batch processing — tasks where you submit 100+ prompts and retrieve results hours later. Examples: document analysis, code review batches, dataset annotation. Real-time chat is impractical at 1–8 tokens/sec. For interactive use, a second RTX 4090 ($1,800) with layer splitting achieves ~100 tokens/sec — a far better investment.',
            },
            {
              q: 'How do I download Q2 quantized 70B models?',
              a: 'Via Ollama: `ollama pull llama3.1:70b-instruct-q2_K` (availability varies). Via llama.cpp: download GGUF Q2_K files from Hugging Face (search "llama-3.1-70b GGUF"). TheBloke and bartowski publish quantized versions. Verify the model with `nvidia-smi` after loading — VRAM usage should be ~18–20 GB for Q2.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) -- Buy better hardware instead.',
            '[Multi-GPU Local LLMs](/local-llms/multi-gpu-local-llms) -- Use layer splitting instead.',
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) -- Smaller models often sufficient.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'llama.cpp Quantization -- github.com/ggerganov/llama.cpp/blob/master/gguf-py/gguf/quants.py',
            'Model Card: Llama 3.1 70B -- huggingface.co/meta-llama/Llama-3.1-70B',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Run 70B Models on 24 GB VRAM: Complete Setup Guide 2026',
        description: 'Run 70B models on 24GB VRAM 2026: quantization (Q4_K_M), offloading, layer splitting. Techniques with trade-offs and performance data.',
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Advanced',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I actually run a 70B model on a single RTX 4090?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, but with significant caveats. At Q2 quantization (17.5 GB), the model fits in 24 GB VRAM but runs at 5–8 tokens/sec and has ~70% of FP16 quality. At Q4 (35 GB), you need to offload 11 GB to system RAM, dropping speed to 1–3 tokens/sec. Neither is suitable for real-time chat.' },
          },
          {
            '@type': 'Question',
            name: 'What quantization is needed to fit 70B in 24 GB VRAM?',
            acceptedAnswer: { '@type': 'Answer', text: 'Q2 quantization fits in 24 GB (17.5 GB model size). Q3 (26 GB) requires 2 GB of RAM offloading. Q4 (35 GB) requires 11 GB offloading and makes inference very slow. Q5 and above cannot fit even with offloading. Q2 is the only option that runs fully in VRAM.' },
          },
          {
            '@type': 'Question',
            name: 'How slow is a 70B model on 24 GB VRAM?',
            acceptedAnswer: { '@type': 'Answer', text: 'At Q2 (fully in VRAM): 5–8 tokens/sec. At Q3 with 2 GB RAM offload: 3–5 tokens/sec. At Q4 with 11 GB RAM offload: 1–3 tokens/sec. A 13B model at Q5 on the same GPU runs at 80–100 tokens/sec — 10–20× faster.' },
          },
          {
            '@type': 'Question',
            name: 'Is it better to use a 13B model than a constrained 70B?',
            acceptedAnswer: { '@type': 'Answer', text: 'For most tasks, yes. A 13B model at Q5 runs at 80–100 tokens/sec on an RTX 4090. A 70B model at Q2 runs at 5–8 tokens/sec with degraded quality. The 13B wins on speed and often on practical quality. Only use 70B-on-24GB if you need specific 70B capabilities and can tolerate batch-only usage.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Techniques to Run 70B Models on 24 GB VRAM',
        numberOfItems: 3,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Q2 Quantization (17.5 GB)', description: 'Fits fully in 24 GB VRAM. Quality: ~70% of FP16. Speed: 5–8 tokens/sec.' },
          { '@type': 'ListItem', position: 2, name: 'Q4 + CPU Offloading (11 GB offloaded)', description: 'Better quality but very slow: 1–3 tokens/sec. Suitable only for overnight batch.' },
          { '@type': 'ListItem', position: 3, name: 'Layer Splitting (2× RTX 4090)', description: 'Best option: 48 GB total, runs Q5 at ~100 tokens/sec. Recommended over single-GPU constraint.' },
        ],
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Hardware & Performance',
      title: '70B-Modelle auf 24GB VRAM ausführen: Fortgeschrittene Techniken',
      seoTitle: '70B-Modelle auf 24GB VRAM ausführen: Kompletter Setup-Guide 2026',
      intro: 'Ein 70B-Modell (normalerweise 40+ GB erforderlich) auf 24 GB VRAM auszuführen ist mit aggressiver Quantisierung (Q2-Q3) und Layer-Offloading möglich, aber das Ergebnis ist langsam (~3-5 Token/Sek.). Ab April 2026 ist dies unpraktisch für Echtzeit-Chat, aber praktikabel für Batch-Verarbeitung oder Experimente.',
      metaDescription: '70B-Modelle auf 24GB VRAM 2026: Quantisierung (Q4_K_M), Offloading, Layer-Splitting. Techniken mit Trade-offs und Leistungsdaten.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Ein 70B-Modell (normalerweise 40+ GB erforderlich) auf 24 GB VRAM auszuführen ist mit aggressiver Quantisierung (Q2-Q3) und Layer-Offloading möglich, aber das Ergebnis ist langsam (~3-5 Token/Sek.).**',
      audience: 'Ingenieure, die lokale LLMs in Produktions- oder Unternehmensumgebungen einsetzen',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Advanced',
      primaryTerm: '70B-Modell-Optimierung',
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Theoretische Grenzen', anchor: '#limits' },
        { label: 'Quantisierungsstrategie', anchor: '#quantization' },
        { label: 'Offloading-Strategie', anchor: '#offloading' },
        { label: 'Praktisches Setup', anchor: '#setup' },
        { label: 'Realistische Leistung', anchor: '#performance' },
        { label: 'Bessere Alternativen', anchor: '#alternatives' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Weiterführendes Material', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Llama 3.1 70B bei Q4 = 35 GB (zu groß für 24GB). Bei Q3 = 26 GB (immer noch zu groß). Bei Q2 = 17 GB (passt!).',
            'Trade-off: Q2 hat spürbaren Qualitätsverlust. ~70% der FP16-Qualität.',
            'Geschwindigkeit: 3-5 Token/Sek. mit 20 GB auf System-RAM ausgelagert (ultra-langsam).',
            'Bessere Option: 13B-Modell bei Q5 verwenden oder eine zweite GPU für Layer-Splitting kaufen.',
            'Ab April 2026 ist dies eine Constraint-Behebung, keine empfohlene Methode.',
          ],
        },
        limits: {
          id: 'limits',
          title: 'Die theoretische VRAM-Mathematik',
          content: [
            '**Llama 3.1 70B bei verschiedenen Quantisierungen:**',
          ],
          rows: [
            { 'Quantisierung': 'FP16 (Baseline)', 'Größe': '140 GB', 'Passt in 24GB?': 'Nein' },
            { 'Quantisierung': 'Q8 (8-Bit)', 'Größe': '70 GB', 'Passt in 24GB?': 'Nein' },
            { 'Quantisierung': 'Q5 (5-Bit)', 'Größe': '43,75 GB', 'Passt in 24GB?': 'Nein' },
            { 'Quantisierung': 'Q4 (4-Bit)', 'Größe': '35 GB', 'Passt in 24GB?': 'Nein (mit Offloading: vielleicht)' },
            { 'Quantisierung': 'Q3 (3-Bit)', 'Größe': '26 GB', 'Passt in 24GB?': 'Nein (knapp)' },
            { 'Quantisierung': 'Q2 (2-Bit)', 'Größe': '17,5 GB', 'Passt in 24GB?': 'Ja' },
          ],
          columns: ['Quantisierung', 'Modellgröße', 'Passt in 24GB?'],
        },
        quantization: {
          id: 'quantization',
          title: 'Aggressive Quantisierung: Das Hauptwerkzeug',
          content: [
            '**Um 70B in 24GB zu passen, müssen Sie Q2 oder Q3 Quantisierung verwenden.**',
            '- **Q3**: 26 GB (immer noch 2 GB über). Kann 2 GB zu RAM auslagern. Etwas bessere Qualität als Q2.',
            '- **Q2**: 17,5 GB (passt!). 70% Qualität gegenüber FP16. Bemerkenswerter Qualitätsverlust, aber nutzbar.',
            'Das quantisierte Modell herunterladen: `ollama pull llama3.1:70b-q2` (falls verfügbar) oder Konvertierungstools wie llama.cpp verwenden.',
          ],
        },
        offloading: {
          id: 'offloading',
          title: 'Offloading zu System-RAM',
          content: [
            '**Wenn Sie Q4 (35 GB) auf einer 24GB GPU verwenden, können Sie die verbleibenden 11 GB zu System-RAM auslagern.** Die Geschwindigkeitseinbuße ist schwerwiegend (10× langsamer).',
            'Nur praktisch für Batch-Verarbeitung, bei der Sie Stunden auf Ergebnisse warten können.',
          ],
        },
        setup: {
          id: 'setup',
          title: 'Praktisches Setup: 70B auf 24GB ausführen',
          content: 'Schritt-für-Schritt:',
          numberedItems: [
            'Q2-Quantisierung verwenden: `ollama pull llama3.1:70b-q2` (falls verfügbar, sonst mit llama.cpp konvertieren)',
            'VRAM überprüfen: `nvidia-smi` sollte ~18 GB Auslastung anzeigen',
            'Modell ausführen: `ollama run llama3.1:70b-q2`',
            'Erwarten Sie 3-5 Token/Sek. (sehr langsam)',
            'Nur für Batch-/Offline-Verarbeitung verwenden, nicht für interaktiven Chat',
          ],
        },
        performance: {
          id: 'performance',
          title: 'Realistische Leistungserwartungen',
          content: [
            '**70B auf 24GB VRAM auszuführen ist langsam:**',
          ],
          rows: [
            { 'Quantisierung': 'Q2 (24GB VRAM)', 'Geschwindigkeit': '5-8 Token/Sek.', 'Latenz': '2-4 Sek. pro Token', 'Anwendungsfall': 'Nur Batch-Verarbeitung' },
            { 'Quantisierung': 'Q3 + Offload (24GB)', 'Geschwindigkeit': '3-5 Token/Sek.', 'Latenz': '3-5 Sek. pro Token', 'Anwendungsfall': 'Extrem begrenzt' },
            { 'Quantisierung': 'Q4 + Offload (24GB)', 'Geschwindigkeit': '1-3 Token/Sek.', 'Latenz': '5-10 Sek. pro Token', 'Anwendungsfall': 'Nur Overnight-Batch' },
          ],
          columns: ['Quantisierung', 'Geschwindigkeit', 'Latenz', 'Anwendungsfall'],
        },
        alternatives: {
          id: 'alternatives',
          title: 'Bessere Alternativen zu beschränktem 70B',
          content: 'Statt sich mit 70B bei limitiertem VRAM abzumühen, erwägen Sie:',
          items: [
            'Ein 13B-Modell verwenden (Llama 3.1 13B bei Q5 = 8 GB, sehr schnell)',
            'Eine zweite RTX 4090 für Layer-Splitting kaufen (2× 24GB = 48GB, 100+ Token/Sek.)',
            'Eine Cloud-API verwenden (GPT-4o für wichtige Aufgaben, lokal für Experimente)',
            'Auf effizientere Modelle warten (kleiner, gleiche Qualität)',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Häufige Fehler bei beschränktem 70B',
          items: [
            '**Erwartet, dass Q2 für Chat brauchbar ist.** Das ist es nicht. Der Qualitätsverlust ist zu schwerwiegend für die Echtzeit-Interaktion.',
            '**Nicht vorher die tatsächliche Geschwindigkeit messen.** Vor größeren Batch-Jobs mit einem kleinen Prompt (10 Token) testen und die Geschwindigkeit überprüfen.',
            '**Annahme, dass Offloading "kostenlos" ist.** System-RAM ist 100× langsamer als GPU VRAM. Das Offloading macht die Inferenz unpraktisch.',
            '**Keine Alternativen erwägen.** Ein 13B-Modell ist dramatisch schneller und oft in der Qualität ausreichend.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Kann ich eine 70B-Modell wirklich auf einer einzelnen RTX 4090 ausführen?',
              a: 'Ja, aber mit erheblichen Einschränkungen. Bei Q2-Quantisierung (17,5 GB) passt das Modell in 24 GB VRAM, läuft aber mit 5-8 Token/Sek. und hat ~70% der FP16-Qualität. Bei Q4 (35 GB) müssen Sie 11 GB zu System-RAM auslagern, wodurch die Geschwindigkeit auf 1-3 Token/Sek. sinkt. Keine ist für Echtzeit-Chat geeignet — nur für Offline-Batch-Verarbeitung.',
            },
            {
              q: 'Welche Quantisierung ist erforderlich, um 70B in 24 GB VRAM zu passen?',
              a: 'Q2-Quantisierung passt in 24 GB (17,5 GB Modellgröße). Q3 (26 GB) erfordert 2 GB RAM-Offloading. Q4 (35 GB) erfordert 11 GB Offloading und macht die Inferenz sehr langsam. Q5 und höher (44-70 GB) können nicht passen, auch nicht mit Offloading auf einer 24 GB GPU. Q2 ist die einzige Option, die vollständig in VRAM läuft.',
            },
            {
              q: 'Wie langsam ist eine 70B-Modell auf 24 GB VRAM?',
              a: 'Bei Q2 (vollständig in VRAM): 5-8 Token/Sek. Bei Q3 mit 2 GB RAM-Offload: 3-5 Token/Sek. Bei Q4 mit 11 GB RAM-Offload: 1-3 Token/Sek. Vergleichen Sie mit einem 13B-Modell bei Q5 auf der gleichen GPU: 80-100 Token/Sek. Das beschränkte 70B-Setup ist 10-20× langsamer als ein richtig dimensioniertes kleineres Modell.',
            },
            {
              q: 'Ist es besser, ein 13B-Modell statt eines beschränkten 70B zu verwenden?',
              a: 'Für die meisten Aufgaben ja. Ein 13B-Modell bei Q5-Quantisierung läuft auf einer RTX 4090 mit 80-100 Token/Sek. und liefert starke Qualität. Ein 70B-Modell bei Q2 läuft mit 5-8 Token/Sek. mit verminderter Qualität. Das 13B-Modell gewinnt bei Geschwindigkeit und oft bei praktischer Qualität aufgrund von Q2-Verschlechterung. Verwenden Sie 70B-auf-24GB nur, wenn Sie spezifische 70B-Fähigkeiten benötigen und Batch-only-Verwendung tolerieren können.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführendes Material',
          items: [
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) -- Kaufen Sie bessere Hardware.',
            '[Multi-GPU Local LLMs](/local-llms/multi-gpu-local-llms?lang=de) -- Verwenden Sie statt dessen Layer-Splitting.',
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding?lang=de) -- Kleinere Modelle sind oft ausreichend.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'llama.cpp Quantisierung -- github.com/ggerganov/llama.cpp/blob/master/gguf-py/gguf/quants.py',
            'Model Card: Llama 3.1 70B -- huggingface.co/meta-llama/Llama-3.1-70B',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/local-llms/run-70b-models-24gb-vram?lang=de',
        inLanguage: 'de',
        headline: '70B-Modelle auf 24GB VRAM ausführen: Kompletter Setup-Guide 2026',
        description: '70B-Modelle auf 24GB VRAM 2026: Quantisierung (Q4_K_M), Offloading, Layer-Splitting. Techniken mit Trade-offs und Leistungsdaten.',
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        author: { '@type': 'Person', name: 'Hans Kuepper' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Advanced',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Kann ich eine 70B-Modell wirklich auf einer einzelnen RTX 4090 ausführen?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja, aber mit erheblichen Einschränkungen. Bei Q2-Quantisierung (17,5 GB) passt das Modell in 24 GB VRAM, läuft aber mit 5-8 Token/Sek. und hat ~70% der FP16-Qualität. Bei Q4 (35 GB) müssen Sie 11 GB zu System-RAM auslagern, wodurch die Geschwindigkeit auf 1-3 Token/Sek. sinkt.' },
          },
          {
            '@type': 'Question',
            name: 'Welche Quantisierung ist erforderlich, um 70B in 24 GB VRAM zu passen?',
            acceptedAnswer: { '@type': 'Answer', text: 'Q2-Quantisierung passt in 24 GB (17,5 GB Modellgröße). Q3 (26 GB) erfordert 2 GB RAM-Offloading. Q4 (35 GB) erfordert 11 GB Offloading und macht die Inferenz sehr langsam. Q5 und höher können nicht passen, auch nicht mit Offloading. Q2 ist die einzige Option, die vollständig in VRAM läuft.' },
          },
          {
            '@type': 'Question',
            name: 'Wie langsam ist eine 70B-Modell auf 24 GB VRAM?',
            acceptedAnswer: { '@type': 'Answer', text: 'Bei Q2 (vollständig in VRAM): 5-8 Token/Sek. Bei Q3 mit 2 GB RAM-Offload: 3-5 Token/Sek. Bei Q4 mit 11 GB RAM-Offload: 1-3 Token/Sek. Ein 13B-Modell bei Q5 auf der gleichen GPU läuft mit 80-100 Token/Sek. — 10-20× schneller.' },
          },
          {
            '@type': 'Question',
            name: 'Ist es besser, ein 13B-Modell statt eines beschränkten 70B zu verwenden?',
            acceptedAnswer: { '@type': 'Answer', text: 'Für die meisten Aufgaben ja. Ein 13B-Modell bei Q5 läuft auf einer RTX 4090 mit 80-100 Token/Sek. Ein 70B-Modell bei Q2 läuft mit 5-8 Token/Sek. mit verminderter Qualität. Das 13B gewinnt bei Geschwindigkeit und oft bei praktischer Qualität. Verwenden Sie 70B-auf-24GB nur, wenn Sie spezifische 70B-Fähigkeiten benötigen und Batch-only-Verwendung tolerieren können.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'de',
        name: 'Techniken zum Ausführen von 70B-Modellen auf 24 GB VRAM',
        numberOfItems: 3,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Q2-Quantisierung (17,5 GB)', description: 'Passt vollständig in 24 GB VRAM. Qualität: ~70% von FP16. Geschwindigkeit: 5-8 Token/Sek.' },
          { '@type': 'ListItem', position: 2, name: 'Q4 + CPU-Offloading (11 GB ausgelagert)', description: 'Bessere Qualität, aber sehr langsam: 1-3 Token/Sek. Nur für Overnight-Batch geeignet.' },
          { '@type': 'ListItem', position: 3, name: 'Layer-Splitting (2× RTX 4090)', description: 'Beste Option: 48 GB gesamt, läuft Q5 mit ~100 Token/Sek. Empfohlen statt Single-GPU-Constraint.' },
        ],
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Hardware & Performance',
      title: 'Exécuter des modèles 70B sur 24 Go de VRAM : Techniques avancées',
      seoTitle: 'Exécuter des modèles 70B sur 24 Go de VRAM : Guide complet 2026',
      intro: 'Exécuter un modèle 70B (nécessite normalement 40+ Go) sur 24 Go de VRAM est possible avec une quantification agressive (Q2-Q3) et un déchargement de couches, mais le résultat est lent (~3-5 tokens/sec). Depuis avril 2026, c\'est peu pratique pour le chat en temps réel, mais viable pour le traitement par lot ou les expériences.',
      metaDescription: 'Modèles 70B sur 24 Go de VRAM 2026 : quantification (Q4_K_M), déchargement, division de couches. Techniques avec compromis et données de performance.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Exécuter un modèle 70B (nécessite normalement 40+ Go) sur 24 Go de VRAM est possible avec une quantification agressive (Q2-Q3) et un déchargement de couches, mais le résultat est lent (~3-5 tokens/sec).**',
      audience: 'Ingénieurs déployer des LLMs locaux dans des environnements de production ou d\'entreprise',
      readTime: '10 min de lecture',
      educationalLevel: 'Advanced',
      primaryTerm: 'Optimisation modèle 70B',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Limites théoriques', anchor: '#limits' },
        { label: 'Stratégie de quantification', anchor: '#quantization' },
        { label: 'Stratégie de déchargement', anchor: '#offloading' },
        { label: 'Configuration pratique', anchor: '#setup' },
        { label: 'Performance réaliste', anchor: '#performance' },
        { label: 'Meilleures alternatives', anchor: '#alternatives' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Lectures connexes', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Llama 3.1 70B en Q4 = 35 Go (trop grand pour 24 Go). En Q3 = 26 Go (toujours trop). En Q2 = 17 Go (convient!).',
            'Compromis : Q2 a une dégradation notable de qualité. ~70% de la qualité FP16.',
            'Vitesse : 3-5 tokens/sec avec 20 Go déchargé sur RAM système (ultra-lent).',
            'Meilleure option : utiliser un modèle 13B en Q5, ou acheter un GPU secondaire pour la division de couches.',
            'Depuis avril 2026, c\'est une solution de contournement, pas une approche recommandée.',
          ],
        },
        limits: {
          id: 'limits',
          title: 'Les mathématiques théoriques du VRAM',
          content: [
            '**Llama 3.1 70B à différentes quantifications :**',
          ],
          rows: [
            { 'Quantification': 'FP16 (baseline)', 'Taille': '140 Go', 'Convient en 24 Go?': 'Non' },
            { 'Quantification': 'Q8 (8-bit)', 'Taille': '70 Go', 'Convient en 24 Go?': 'Non' },
            { 'Quantification': 'Q5 (5-bit)', 'Taille': '43.75 Go', 'Convient en 24 Go?': 'Non' },
            { 'Quantification': 'Q4 (4-bit)', 'Taille': '35 Go', 'Convient en 24 Go?': 'Non (avec déchargement : peut-être)' },
            { 'Quantification': 'Q3 (3-bit)', 'Taille': '26 Go', 'Convient en 24 Go?': 'Non (juste)' },
            { 'Quantification': 'Q2 (2-bit)', 'Taille': '17.5 Go', 'Convient en 24 Go?': 'Oui' },
          ],
          columns: ['Quantification', 'Taille du modèle', 'Convient en 24 Go?'],
        },
        quantization: {
          id: 'quantization',
          title: 'Quantification agressive : l\'outil principal',
          content: [
            '**Pour adapter 70B à 24 Go, vous devez utiliser la quantification Q2 ou Q3.**',
            '- **Q3** : 26 Go (encore 2 Go de plus). Peut décharger 2 Go vers la RAM. Qualité légèrement meilleure que Q2.',
            '- **Q2** : 17.5 Go (convient!). 70% de qualité par rapport à FP16. Dégradation notable mais utilisable.',
            'Téléchargez le modèle quantifié : `ollama pull llama3.1:70b-q2` (si disponible) ou utilisez des outils de conversion comme llama.cpp.',
          ],
        },
        offloading: {
          id: 'offloading',
          title: 'Déchargement vers la RAM système',
          content: [
            '**Si vous utilisez Q4 (35 Go) sur un GPU 24 Go, vous pouvez décharger les 11 Go restants vers la RAM système.** La pénalité de vitesse est sévère (10× plus lent).',
            'Pratique uniquement pour le traitement par lot où vous pouvez attendre des heures.',
          ],
        },
        setup: {
          id: 'setup',
          title: 'Configuration pratique : exécuter 70B sur 24 Go',
          content: 'Étape par étape :',
          numberedItems: [
            'Utilisez la quantification Q2 : `ollama pull llama3.1:70b-q2` (si disponible, sinon convertir avec llama.cpp)',
            'Vérifiez le VRAM : `nvidia-smi` devrait afficher ~18 Go utilisés',
            'Exécutez le modèle : `ollama run llama3.1:70b-q2`',
            'Attendez-vous à 3-5 tokens/sec (très lent)',
            'Utilisez uniquement pour le traitement par lot hors ligne, pas pour le chat interactif',
          ],
        },
        performance: {
          id: 'performance',
          title: 'Attentes réalistes de performance',
          content: [
            '**Exécuter 70B sur 24 Go de VRAM est lent :**',
          ],
          rows: [
            { 'Quantification': 'Q2 (24 Go VRAM)', 'Vitesse': '5-8 tok/sec', 'Latence': '2-4 sec par token', 'Cas d\'usage': 'Traitement par lot uniquement' },
            { 'Quantification': 'Q3 + déchargement (24 Go)', 'Vitesse': '3-5 tok/sec', 'Latence': '3-5 sec par token', 'Cas d\'usage': 'Extrêmement limité' },
            { 'Quantification': 'Q4 + déchargement (24 Go)', 'Vitesse': '1-3 tok/sec', 'Latence': '5-10 sec par token', 'Cas d\'usage': 'Uniquement batch nocturne' },
          ],
          columns: ['Quantification', 'Vitesse', 'Latence', 'Cas d\'usage'],
        },
        alternatives: {
          id: 'alternatives',
          title: 'Meilleures alternatives à un 70B contraint',
          content: 'Au lieu de vous débattre avec un 70B avec VRAM limité, considérez :',
          items: [
            'Utiliser un modèle 13B (Llama 3.1 13B en Q5 = 8 Go, très rapide)',
            'Acheter un GPU RTX 4090 secondaire pour la division de couches (2× 24 Go = 48 Go, 100+ tokens/sec)',
            'Utiliser une API cloud (GPT-4o pour les tâches importantes, local pour les expériences)',
            'Attendre des modèles plus efficaces (plus petit, même qualité)',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erreurs courantes avec un 70B contraint',
          items: [
            '**S\'attendre à ce que Q2 soit utilisable pour le chat.** Ce n\'est pas le cas. La dégradation de qualité est trop grave pour l\'interaction en temps réel.',
            '**Ne pas mesurer la vitesse réelle à l\'avance.** Testez avec un petit prompt (10 tokens) et vérifiez la vitesse avant d\'exécuter de grands travaux par lot.',
            '**Supposer que le déchargement est "gratuit".** La RAM système est 100× plus lente que le VRAM du GPU. Le déchargement rend l\'inférence peu pratique.',
            '**Ne pas considérer les alternatives.** Un modèle 13B est dramatiquement plus rapide et souvent suffisant en qualité.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Puis-je vraiment exécuter un modèle 70B sur une seule RTX 4090?',
              a: 'Oui, mais avec des réserves importantes. En quantification Q2 (17.5 Go), le modèle convient en 24 Go de VRAM mais fonctionne à 5-8 tokens/sec et a ~70% de la qualité FP16. En Q4 (35 Go), vous devez décharger 11 Go vers la RAM système, réduisant la vitesse à 1-3 tokens/sec. Aucun n\'est adapté au chat en temps réel — seulement pour le traitement par lot hors ligne.',
            },
            {
              q: 'Quelle quantification est nécessaire pour adapter 70B à 24 Go de VRAM?',
              a: 'La quantification Q2 convient en 24 Go (taille du modèle 17.5 Go). Q3 (26 Go) nécessite 2 Go de déchargement RAM. Q4 (35 Go) nécessite 11 Go de déchargement et rend l\'inférence très lente. Q5 et supérieur (44-70 Go) ne peuvent pas convenir même avec déchargement sur un GPU 24 Go. Q2 est la seule option qui fonctionne entièrement en VRAM.',
            },
            {
              q: 'Quelle est la lenteur d\'un modèle 70B sur 24 Go de VRAM?',
              a: 'En Q2 (entièrement en VRAM) : 5-8 tokens/sec. En Q3 avec 2 Go de déchargement RAM : 3-5 tokens/sec. En Q4 avec 11 Go de déchargement RAM : 1-3 tokens/sec. Comparez avec un modèle 13B en Q5 sur le même GPU : 80-100 tokens/sec. La configuration 70B contrainte est 10-20× plus lente qu\'un modèle plus petit correctement dimensionné.',
            },
            {
              q: 'Est-il préférable d\'utiliser un modèle 13B plutôt qu\'un 70B contraint?',
              a: 'Pour la plupart des tâches, oui. Un modèle 13B en quantification Q5 fonctionne à 80-100 tokens/sec sur une RTX 4090 et offre une qualité forte. Un modèle 70B en Q2 fonctionne à 5-8 tokens/sec avec une qualité réduite. Le 13B gagne en vitesse et souvent en qualité pratique due à la dégradation Q2. Utilisez 70B-sur-24 Go uniquement si vous avez besoin de capacités spécifiques au 70B et pouvez tolérer une utilisation par lot uniquement.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures connexes',
          items: [
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr) -- Achetez du meilleur matériel.',
            '[Multi-GPU Local LLMs](/local-llms/multi-gpu-local-llms?lang=fr) -- Utilisez plutôt la division de couches.',
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding?lang=fr) -- Les modèles plus petits suffisent souvent.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Quantification llama.cpp -- github.com/ggerganov/llama.cpp/blob/master/gguf-py/gguf/quants.py',
            'Carte modèle : Llama 3.1 70B -- huggingface.co/meta-llama/Llama-3.1-70B',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/local-llms/run-70b-models-24gb-vram?lang=fr',
        inLanguage: 'fr',
        headline: 'Exécuter des modèles 70B sur 24 Go de VRAM : Guide complet 2026',
        description: 'Modèles 70B sur 24 Go de VRAM 2026 : quantification (Q4_K_M), déchargement, division de couches. Techniques avec compromis et données de performance.',
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        author: { '@type': 'Person', name: 'Hans Kuepper' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Advanced',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Puis-je vraiment exécuter un modèle 70B sur une seule RTX 4090?',
            acceptedAnswer: { '@type': 'Answer', text: 'Oui, mais avec des réserves importantes. En quantification Q2 (17.5 Go), le modèle convient en 24 Go de VRAM mais fonctionne à 5-8 tokens/sec et a ~70% de la qualité FP16. En Q4 (35 Go), vous devez décharger 11 Go vers la RAM système, réduisant la vitesse à 1-3 tokens/sec.' },
          },
          {
            '@type': 'Question',
            name: 'Quelle quantification est nécessaire pour adapter 70B à 24 Go de VRAM?',
            acceptedAnswer: { '@type': 'Answer', text: 'La quantification Q2 convient en 24 Go (taille du modèle 17.5 Go). Q3 (26 Go) nécessite 2 Go de déchargement RAM. Q4 (35 Go) nécessite 11 Go de déchargement et rend l\'inférence très lente. Q5 et supérieur ne peuvent pas convenir même avec déchargement. Q2 est la seule option qui fonctionne entièrement en VRAM.' },
          },
          {
            '@type': 'Question',
            name: 'Quelle est la lenteur d\'un modèle 70B sur 24 Go de VRAM?',
            acceptedAnswer: { '@type': 'Answer', text: 'En Q2 (entièrement en VRAM) : 5-8 tokens/sec. En Q3 avec 2 Go de déchargement RAM : 3-5 tokens/sec. En Q4 avec 11 Go de déchargement RAM : 1-3 tokens/sec. Un modèle 13B en Q5 sur le même GPU fonctionne à 80-100 tokens/sec — 10-20× plus rapide.' },
          },
          {
            '@type': 'Question',
            name: 'Est-il préférable d\'utiliser un modèle 13B plutôt qu\'un 70B contraint?',
            acceptedAnswer: { '@type': 'Answer', text: 'Pour la plupart des tâches, oui. Un modèle 13B en Q5 fonctionne à 80-100 tokens/sec sur une RTX 4090. Un modèle 70B en Q2 fonctionne à 5-8 tokens/sec avec une qualité réduite. Le 13B gagne en vitesse et souvent en qualité pratique. Utilisez 70B-sur-24 Go uniquement si vous avez besoin de capacités spécifiques et pouvez tolérer une utilisation par lot uniquement.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'fr',
        name: 'Techniques pour exécuter des modèles 70B sur 24 Go de VRAM',
        numberOfItems: 3,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Quantification Q2 (17.5 Go)', description: 'Convient entièrement en 24 Go de VRAM. Qualité : ~70% de FP16. Vitesse : 5-8 tokens/sec.' },
          { '@type': 'ListItem', position: 2, name: 'Q4 + Déchargement CPU (11 Go déchargé)', description: 'Meilleure qualité mais très lent : 1-3 tokens/sec. Adapté uniquement pour le lot nocturne.' },
          { '@type': 'ListItem', position: 3, name: 'Division de couches (2× RTX 4090)', description: 'Meilleure option : 48 Go total, exécute Q5 à ~100 tokens/sec. Recommandé plutôt qu\'une contrainte single-GPU.' },
        ],
      },
    },
  };
