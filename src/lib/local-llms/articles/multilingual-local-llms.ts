// Auto-generated from src/lib/local-llms/content.ts
// Slug: multilingual-local-llms
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Multilingual Local LLMs: Best Models for Non-English Languages in 2026',
      seoTitle: 'Best Multilingual Local LLMs 2026: Qwen2.5 vs Mistral',
      intro: 'Qwen2.5 is the strongest multilingual local LLM family in 2026, with native support for 29 languages including Chinese, Japanese, Korean, Arabic, and all major European languages. For European languages specifically, Mistral and Llama 3.x models perform competitively. For Asian languages (Japanese, Korean, Chinese), Qwen2.5 outperforms all alternatives at every comparable model size.',
      metaDescription: 'Qwen2.5 dominates Asian languages (15-25% better than Llama on JMT-bench). Mistral competitive for European languages. Benchmark comparison -- April 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Qwen2.5 is the strongest multilingual local LLM family in 2026, with native support for 29 languages including Chinese, Japanese, Korean, Arabic, and all major European languages.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '9 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'multilingual local LLM',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Which Local LLMs Support Multiple Languages?', anchor: '#which-llms-support-multiple-languages' },
        { label: 'Best Models for European Languages', anchor: '#best-models-for-european-languages' },
        { label: 'Best Models for Asian Languages', anchor: '#best-models-for-asian-languages' },
        { label: 'Best Models for Arabic and Middle Eastern Languages', anchor: '#best-models-for-arabic' },
        { label: 'How to Benchmark Multilingual Quality', anchor: '#how-to-benchmark-multilingual-quality' },
        { label: 'Multilingual Comparison Table', anchor: '#multilingual-comparison-table' },
        { label: 'Common Mistakes with Multilingual Models', anchor: '#common-mistakes' },
        { label: 'Common Questions', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Best multilingual family**: Qwen2.5 -- 29 native languages, highest non-English benchmark scores at every model size.',
            '**European languages (German, French, Spanish, Italian)**: Mistral and Llama 3.x are competitive with Qwen2.5 for EU languages; Qwen2.5 still leads on code-mixed and formal register tasks.',
            '**Japanese and Korean**: Qwen2.5 is significantly stronger -- 15-25% better on language-specific benchmarks than Llama 3.x at the same size.',
            '**Chinese (Simplified and Traditional)**: Qwen2.5 is the dominant model -- trained on the largest Chinese corpus of any open-weight model.',
            'As of April 2026, no locally-runnable model matches GPT-4o or Claude Opus 4.7 quality in Japanese or Korean for complex tasks. Qwen2.5 is the best available locally.',
          ],
        },
        whichSupport: {
          title: 'Which Local LLMs Actually Support Multiple Languages?',
          content: [
            '**"Supporting" a language means more than generating text in that language.** True multilingual support requires: training data in the language (not just translation), tokenization optimized for the language\'s script, and fine-tuning on instruction-following in the language.',
            'Models that claim multilingual support but were primarily trained on English produce lower-quality output in other languages -- grammatical errors, cultural mismatches, and reduced instruction-following accuracy. As of April 2026, only Qwen2.5 provides genuine native-quality support for Asian languages locally.',
          ],
          rows: [
            { 'Model Family': 'Qwen2.5', 'Native Languages': '29', 'Strong Asian Support': 'Yes', 'Strong EU Support': 'Yes', 'Arabic Support': 'Yes' },
            { 'Model Family': 'Llama 3.x', 'Native Languages': '8', 'Strong Asian Support': 'Limited', 'Strong EU Support': 'Good', 'Arabic Support': 'Limited' },
            { 'Model Family': 'Mistral', 'Native Languages': '5', 'Strong Asian Support': 'No', 'Strong EU Support': 'Good', 'Arabic Support': 'Limited' },
            { 'Model Family': 'Gemma 3', 'Native Languages': '35+', 'Strong Asian Support': 'Moderate', 'Strong EU Support': 'Good', 'Arabic Support': 'Moderate' },
            { 'Model Family': 'Phi-4', 'Native Languages': '~10', 'Strong Asian Support': 'Limited', 'Strong EU Support': 'Moderate', 'Arabic Support': 'Limited' },
          ],
          columns: ['Model Family', 'Native Languages', 'Strong Asian Support', 'Strong EU Support', 'Arabic Support'],
        },
        european: {
          title: 'Which Local LLMs Perform Best for European Languages?',
          content: [
            '**For German, French, Spanish, Italian, Portuguese, Dutch, and Polish -- Qwen2.5, Mistral, and Llama 3.x all produce acceptable quality.** Mistral has a particular strength in French due to Mistral AI being a French company with French-language training data emphasis. As of April 2026, German-language benchmarks show Qwen2.5 7B leading Mistral 7B by 8-12% on instruction-following tasks in German.',
            'For GDPR-sensitive use cases in the EU, running a local model (any family) is preferable to cloud APIs for data residency reasons. German businesses using AI under the EU AI Act (effective February 2025) benefit from local inference for high-risk AI applications. Mistral AI, being a EU company, is preferred by some European organizations on governance grounds regardless of benchmark score.',
          ],
          items: [
            '**German**: Qwen2.5 7B leads on instruction-following; Mistral 7B competitive for formal text.',
            '**French**: Mistral 7B is competitive with Qwen2.5 7B; both well above Llama 3.1 8B.',
            '**Spanish, Italian, Portuguese**: Qwen2.5 7B slightly ahead; Llama 3.1 8B competitive.',
            '**Polish, Czech, Romanian**: Qwen2.5 7B leads; significant quality drop for Mistral 7B.',
          ],
        },
        asian: {
          title: 'Which Local LLMs Perform Best for Japanese, Korean, and Chinese?',
          content: [
            '**Qwen2.5 dominates Asian language performance.** The model family was developed by Alibaba with massive Chinese-language training data and explicit multilingual fine-tuning for Japanese and Korean.',
            'For Japanese: Qwen2.5 7B scores 15-20% higher than Llama 3.1 8B on JMT-bench (Japanese instruction-following benchmark). For Korean: Qwen2.5 outperforms alternatives by similar margins. For Chinese (Simplified): Qwen2.5 is in a class of its own among locally-runnable models.',
            'As of April 2026, Japan\'s METI (Ministry of Economy, Trade and Industry) has been promoting domestic AI development, and some Japanese enterprises prefer locally-deployed models for data sovereignty. Qwen2.5 is the practical choice for Japanese-language local inference.',
          ],
          rows: [
            { 'Language': 'Chinese (Simplified)', 'Best Model': 'Qwen2.5 (any size)', 'Second Best': 'Gemma 3', 'Notes': 'Qwen2.5 dominates -- largest Chinese training corpus' },
            { 'Language': 'Japanese', 'Best Model': 'Qwen2.5 7B+', 'Second Best': 'Gemma 3 9B', 'Notes': '15-20% gap over Llama on JMT-bench' },
            { 'Language': 'Korean', 'Best Model': 'Qwen2.5 7B+', 'Second Best': 'Gemma 3 9B', 'Notes': 'Qwen2.5 significantly stronger' },
            { 'Language': 'Traditional Chinese', 'Best Model': 'Qwen2.5', 'Second Best': 'Llama 3.1 8B', 'Notes': 'Qwen2.5 trained on both Simplified and Traditional' },
          ],
          columns: ['Language', 'Best Model', 'Second Best', 'Notes'],
        },
        arabic: {
          title: 'Which Local LLMs Perform Best for Arabic?',
          content: [
            '**Arabic presents a unique challenge due to its right-to-left script, morphological complexity, and the large number of dialects (Modern Standard Arabic vs.** Egyptian, Gulf, Levantine). As of April 2026, Qwen2.5 and Gemma 3 are the strongest locally-runnable Arabic models.',
            'For MSA (Modern Standard Arabic) instruction-following, Qwen2.5 14B and larger produce acceptable quality. For dialect Arabic, all local models perform significantly worse than cloud models like GPT-4o, which has broader Arabic dialect coverage.',
          ],
        },
        howToBenchmark: {
          title: 'How Do You Benchmark Multilingual Quality in Local LLMs?',
          content: 'Standard benchmarks (MMLU, HumanEval) are English-only. To evaluate multilingual quality, use these approaches:',
          numberedItems: [
            'Run MGSM (Multilingual Grade School Math) -- tests math reasoning across 10 languages. Available on Hugging Face: datasets/juletxara/mgsm.',
            'Run m-MMLU -- the multilingual version of MMLU covering 57 subjects in multiple languages.',
            'For conversational quality: write 10 test prompts in your target language covering different task types (summarization, Q&A, translation, creative writing). Evaluate responses manually or with a native speaker.',
            'For Japanese specifically: use JMT-bench (github.com/Stability-AI/lm-evaluation-harness) which covers Japanese instruction-following.',
            'Compare your local model against cloud APIs using [PromptQuorum](/) -- send the same multilingual prompt to your local Ollama model and GPT-4o simultaneously to quantify the quality gap on your specific use case.',
          ],
        },
        comparisonTable: {
          title: 'Multilingual Local LLM Comparison: Qwen2.5 vs Llama 3.x vs Mistral vs Gemma 3',
          rows: [
            { 'Language Group': 'Chinese (any dialect)', 'Qwen2.5 7B': '★★★★★', 'Llama 3.1 8B': '★★', 'Mistral 7B': '★', 'Gemma 3 9B': '★★★' },
            { 'Language Group': 'Japanese', 'Qwen2.5 7B': '★★★★', 'Llama 3.1 8B': '★★', 'Mistral 7B': '★', 'Gemma 3 9B': '★★★' },
            { 'Language Group': 'Korean', 'Qwen2.5 7B': '★★★★', 'Llama 3.1 8B': '★★', 'Mistral 7B': '★', 'Gemma 3 9B': '★★★' },
            { 'Language Group': 'French / German', 'Qwen2.5 7B': '★★★★', 'Llama 3.1 8B': '★★★', 'Mistral 7B': '★★★★', 'Gemma 3 9B': '★★★' },
            { 'Language Group': 'Spanish / Italian', 'Qwen2.5 7B': '★★★★', 'Llama 3.1 8B': '★★★', 'Mistral 7B': '★★★', 'Gemma 3 9B': '★★★' },
            { 'Language Group': 'Arabic (MSA)', 'Qwen2.5 7B': '★★★', 'Llama 3.1 8B': '★★', 'Mistral 7B': '★', 'Gemma 3 9B': '★★★' },
          ],
          columns: ['Language Group', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          image: 'multilingual-llm-comparison-en.svg',
          imageCaption: 'Multilingual LLM comparison 2026: Qwen2.5 7B leads across all Asian languages (Chinese, Japanese, Korean with ★★★★-★★★★★ ratings). Mistral 7B matches Qwen2.5 on European languages (French/German). Star ratings (1-5) reflect 2026 benchmarks.',
        },
        commonMistakes: {
          title: 'What Are the Common Mistakes When Using Multilingual Local LLMs?',
          faqs: [
            {
              q: 'Using an English-primary model for Japanese or Chinese tasks',
              a: 'Llama 3.1 8B and Mistral 7B produce grammatically plausible but semantically inconsistent Japanese and Chinese output. The errors are not obvious without native language knowledge. For Japanese or Chinese tasks, always use Qwen2.5 -- the quality difference is significant and measurable.',
            },
            {
              q: 'Prompting in English when the task is in another language',
              a: 'Local models with native multilingual support produce better results when the system prompt, user instructions, and content are all in the same target language. Mixing English instructions with Chinese content produces lower-quality output than a fully Chinese prompt. Write system prompts in the target language for best results.',
            },
            {
              q: 'Assuming the same model tag handles all scripts equally',
              a: 'Tokenization efficiency varies by script. Latin scripts use ~3-4 characters per token; Chinese characters are often 1 character per token. A "4K context" means different amounts of content for different languages. A 4096-token context holds approximately 3,000 English words but only about 2,000 Chinese characters -- plan context lengths accordingly.',
            },
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Multilingual Local LLMs',
          faqs: [
            {
              q: 'Can I run a Japanese-only fine-tuned model locally?',
              a: 'Yes -- the Japanese AI community maintains several Japanese-specific fine-tunes of Qwen2.5 and Llama models on Hugging Face. Search "Japanese instruct GGUF" on Hugging Face for current options. Load them in LM Studio or via `ollama create` with a custom Modelfile.',
            },
            {
              q: 'Does multilingual capability reduce English quality?',
              a: 'Not significantly for Qwen2.5. Benchmarks show Qwen2.5 7B scores 74% on English MMLU -- comparable to Llama 3.1 8B at 73%. The multilingual training does not meaningfully degrade English performance at this model size.',
            },
            {
              q: 'Which model is best for translation tasks locally?',
              a: 'Qwen2.5 14B or larger for high-quality translation between English, Chinese, Japanese, and Korean. For European-language translation, Mistral Small 3.1 24B produces reliable output. For production translation workloads at scale, cloud APIs (DeepL, Google Translate) still outperform locally-runnable models for most language pairs.',
            },
            {
              q: 'How do I set the language in Ollama?',
              a: 'Write your prompt in the target language. No special language parameter is needed -- the model detects the input language. For consistent output in a specific language, add a system prompt: "You are a helpful assistant. Always respond in German." Use the Ollama system parameter: `ollama run qwen2.5:7b --system "Always respond in Japanese."`',
            },
            {
              q: 'Are there privacy-compliant multilingual local LLMs for EU organizations?',
              a: 'Yes. Running Qwen2.5 or Mistral locally with Ollama keeps all data on-premises and fully offline. For EU AI Act compliance (effective February 2025), local inference eliminates the third-party data processor concern for high-risk AI applications. Mistral AI, based in France, is preferred by some EU organizations on data governance grounds even for locally-deployed models.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Qwen2.5 Technical Report -- qwenlm.github.io/blog/qwen2.5/',
            'MGSM Benchmark -- huggingface.co/datasets/juletxara/mgsm',
            'JMT-bench Japanese Evaluation -- github.com/Stability-AI/lm-evaluation-harness',
            'EU AI Act GDPR and Local AI -- artificialintelligenceact.eu',
          ],
        },
      },
    },
    de: {
      theme: 'Einstieg',
      title: 'Beste mehrsprachige lokale LLMs 2026: Qwen2.5 vs. Mistral',
      seoTitle: 'Beste mehrsprachige lokale LLMs 2026: Qwen2.5 vs. Mistral',
      intro: 'Vergleich mehrsprachiger lokaler Sprachmodelle: Qwen2.5 7B dominiert asiatische Sprachen (Chinesisch, Japanisch, Koreanisch) mit 5-Stern-Bewertungen. Mistral 7B konkurriert bei europäischen Sprachen. Testen Sie schnell offline ohne API-Kosten.',
      metaDescription: 'Mehrsprachige LLMs 2026: Qwen2.5 7B beste für Chinesisch/Japanisch/Koreanisch. Mistral konkurriert bei Französisch/Deutsch. Benchmarkvergleich.',
      publishDate: '2025-12-10',
      dateModified: '2026-04-11',
      readTime: '9 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Multilingual LLM',
      toc: [
        { label: 'Zusammenfassung', anchor: '#tldr' },
        { label: 'Welche Sprachen unterstützen lokale LLMs?', anchor: '#which-support' },
        { label: 'Beste lokale LLMs für europäische Sprachen', anchor: '#european' },
        { label: 'Beste lokale LLMs für asiatische Sprachen', anchor: '#asian' },
        { label: 'Arabische Sprachunterstützung', anchor: '#arabic' },
        { label: 'Benchmarking mehrsprachiger LLMs', anchor: '#how-to-benchmark' },
        { label: 'Vergleichstabelle: Qwen2.5 vs. Llama vs. Mistral vs. Gemma', anchor: '#comparison-table' },
        { label: 'Häufige Fehler bei mehrsprachigen LLMs', anchor: '#common-mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' }
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Qwen2.5 7B** ist das beste lokale Modell für Chinesisch, Japanisch und Koreanisch (5 Sterne für Chinesisch, 4 Sterne für Japanisch/Koreanisch).',
            '**Mistral 7B** und **Qwen2.5 7B** konkurrieren bei europäischen Sprachen (Französisch, Deutsch, Spanisch, Italienisch) mit jeweils 4 Sternen.',
            '**Quantisierung mit Q4_K_M** reduziert VRAM-Anforderungen um 75 % mit minimalem Genauigkeitsverlust (<1 %) -- essentiell für lokale Bereitstellung.',
            '**Lokale Verarbeitung** (Ollama, llama.cpp) eliminiert API-Kosten und Latenz; ideal für Datenvertraulichkeit und DSGVO-Compliance.',
            'Wählen Sie **Qwen2.5 für Asien**, **Mistral oder Qwen2.5 für Europa**, basierend auf Ihrem Hardware-Budget (8 GB VRAM für 7B-Modelle ausreichend).'
          ],
        },
        whichSupport: {
          title: 'Welche Sprachen unterstützen lokale LLMs?',
          content: 'Alle modernen lokalen Sprachmodelle (Qwen2.5, Llama 3.1, Mistral, Gemma) unterstützen mindestens die Top-10-Sprachen nach Sprecherinnen- und Sprecherzahl. Die Unterstützungsqualität variiert jedoch stark: Qwen2.5 dominiert asiatische Sprachen, während Mistral und Llama bei europäischen Sprachen konkurrieren.',
          columns: ['Sprachfamilie', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          rows: [
            {
              'Sprachfamilie': 'Chinesisch (alle Dialekte)',
              'Qwen2.5 7B': '★★★★★ (5,0)',
              'Llama 3.1 8B': '★★ (2,0)',
              'Mistral 7B': '★ (1,0)',
              'Gemma 3 9B': '★★★ (3,0)'
            },
            {
              'Sprachfamilie': 'Japanisch',
              'Qwen2.5 7B': '★★★★ (4,0)',
              'Llama 3.1 8B': '★★ (2,0)',
              'Mistral 7B': '★ (1,0)',
              'Gemma 3 9B': '★★★ (3,0)'
            },
            {
              'Sprachfamilie': 'Koreanisch',
              'Qwen2.5 7B': '★★★★ (4,0)',
              'Llama 3.1 8B': '★★ (2,0)',
              'Mistral 7B': '★ (1,0)',
              'Gemma 3 9B': '★★★ (3,0)'
            },
            {
              'Sprachfamilie': 'Französisch / Deutsch',
              'Qwen2.5 7B': '★★★★ (4,0)',
              'Llama 3.1 8B': '★★★ (3,0)',
              'Mistral 7B': '★★★★ (4,0)',
              'Gemma 3 9B': '★★★ (3,0)'
            },
            {
              'Sprachfamilie': 'Spanisch / Italienisch',
              'Qwen2.5 7B': '★★★★ (4,0)',
              'Llama 3.1 8B': '★★★ (3,0)',
              'Mistral 7B': '★★★ (3,0)',
              'Gemma 3 9B': '★★★ (3,0)'
            },
            {
              'Sprachfamilie': 'Arabisch (MSA)',
              'Qwen2.5 7B': '★★★ (3,0)',
              'Llama 3.1 8B': '★★ (2,0)',
              'Mistral 7B': '★ (1,0)',
              'Gemma 3 9B': '★★★ (3,0)'
            }
          ]
        },
        european: {
          title: 'Beste lokale LLMs für europäische Sprachen',
          content: 'Bei europäischen Sprachen (Französisch, Deutsch, Spanisch, Italienisch) sind **Mistral 7B** und **Qwen2.5 7B** gleichwertig. Mistral hat einen Vorteil bei Französisch und Deutsch; Qwen2.5 ist bei Spanisch und Italienisch leicht besser. Beide benötigen nur 8 GB VRAM im Q4_K_M-Format.',
          items: [
            '**Mistral 7B für Französisch und Deutsch**: Mistral wurde mit französischen und deutschen Trainingsdaten trainiert und liefert native Präzision. Ideal für DSGVO-Compliance und französische Datenschutzauflagen (CNIL-konform bei lokaler Verarbeitung).',
            '**Qwen2.5 7B für Spanisch und Italienisch**: Qwen2.5 bietet überlegene Qualität bei romanischen Sprachen. Mit Q4_K_M-Quantisierung läuft es auf einem MacBook Pro M2 oder Standard-Linux-GPU ohne Speicherprobleme.',
            '**Llama 3.1 8B als Fallback**: Llama 3.1 8B ist ausreichend für europäische Sprachen (3-Stern-Bewertung), aber nicht optimal. Verwenden Sie es nur, wenn Qwen2.5 oder Mistral nicht verfügbar sind.',
            '**DACH-Spezialisten (Deutsch/Österreich/Schweiz)**: Für deutschsprachige Unternehmen: Mistral 7B erfüllt BSI-Grundschutz-Anforderungen bei lokaler Verarbeitung. Keine Datentransfers zu US-Servern erforderlich.',
            '**Quantisierung: Q4_K_M ist Standard**: Verwenden Sie immer **Q4_K_M** für 7B-Modelle bei europäischen Sprachen. VRAM-Anforderung: 8 GB. Genauigkeitsverlust: <0,5 % gegenüber fp16.',
            '**Benchmarks: JMT-bench + MMLU**: Qwen2.5 und Mistral schneiden bei MMLU (Multiple-Choice-Wissenstests) mit 72-75 % Genauigkeit ab. Bei domänenspezifischen Tests (Recht, Medizin, Finanzen) sinken die Scores auf 55-70 %.'
          ]
        },
        asian: {
          title: 'Beste lokale LLMs für asiatische Sprachen',
          content: 'Qwen2.5 7B dominiert asiatische Sprachen deutlich. Bei Chinesisch, Japanisch und Koreanisch erreicht es 4-5 Sterne, während Llama und Mistral 1-2 Sterne erhalten. Für Unternehmen in Japan, Südkorea oder China ist Qwen2.5 die einzige praktische Wahl.',
          columns: ['Sprache', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B'],
          rows: [
            {
              'Sprache': 'Chinesisch (vereinfacht & traditionell)',
              'Qwen2.5 7B': '★★★★★ (5,0)',
              'Llama 3.1 8B': '★★ (2,0)',
              'Mistral 7B': '★ (1,0)'
            },
            {
              'Sprache': 'Japanisch (Hiragana, Kanji, Katakana)',
              'Qwen2.5 7B': '★★★★ (4,0)',
              'Llama 3.1 8B': '★★ (2,0)',
              'Mistral 7B': '★ (1,0)'
            },
            {
              'Sprache': 'Koreanisch (Hangul)',
              'Qwen2.5 7B': '★★★★ (4,0)',
              'Llama 3.1 8B': '★★ (2,0)',
              'Mistral 7B': '★ (1,0)'
            }
          ]
        },
        arabic: {
          title: 'Arabische Sprachunterstützung',
          content: 'Arabisch ist für lokale Modelle eine Herausforderung. Qwen2.5 erreicht 3 Sterne bei Modernes Standardarabisch (MSA), während Llama und Mistral nur 1-2 Sterne erhalten. Dialektales Arabisch (Ägyptisch, Golf-Arabisch) wird von keinem 7B-Modell gut unterstützt; 13B-Modelle oder spezialisierte Modelle sind erforderlich. Für Unternehmen im Nahen Osten: Qwen2.5 7B ist das beste verfügbare kleine Modell, aber für Produktionsaufgaben sollten Sie 13B-Modelle in Betracht ziehen.'
        },
        howToBenchmark: {
          title: 'Benchmarking mehrsprachiger LLMs',
          content: 'Benchmarks wie MMLU und JMT-bench messen nur Englisch und Japanisch. Für echte Mehrsprachigkeit testen Sie mit realen Aufgaben: Dokumentzusammenfassung in Ihrer Zielsprache, Domain-spezifische Fragen (Recht, Medizin, Finanzen) und kulturelle Kontextualisierung. Hier sind bewährte Verfahren:',
          numberedItems: [
            'Erstellen Sie einen lokalen Test-Datensatz in Ihrer Zielsprache: Schreiben Sie 20-50 repräsentative Fragen in der Zielsprache (z. B. Chinesisch, Japanisch). Verwenden Sie domänenspezifische Terminologie (Medizin, Recht, Technik). Speichern Sie sie in einer JSON-Datei.',
            'Führen Sie alle 4 Modelle gegen diesen Test-Datensatz aus: Quantisieren Sie jedes Modell mit Q4_K_M. Verwenden Sie Ollama oder llama.cpp, um sie lokal auszuführen. Vergleichen Sie Antwortqualität manuell oder mit Metriken (Ähnlichkeit zum Ground Truth).',
            'Messen Sie Latenz und VRAM-Verbrauch: Notieren Sie die Inferenzzeit pro Anfrage und den Peak-VRAM-Verbrauch. Beispiel: Qwen2.5 7B (Q4_K_M) auf M2 Max = 400 ms Latenz, 8,2 GB VRAM.',
            'Validieren Sie mit domänenspezifischen Benchmarks: Für Spezialanwendungen: Verwenden Sie JMT-bench für Japanisch, C-Eval für Chinesisch, MMLU für Englisch. Kombinieren Sie die Ergebnisse mit Ihren eigenen Tests.'
          ]
        },
        comparisonTable: {
          title: 'Vergleichstabelle: Qwen2.5 vs. Llama vs. Mistral vs. Gemma',
          content: 'Diese Tabelle fasst die Sprachunterstützung zusammen. Bewertungen basieren auf JMT-bench (Japanisch), MMLU (allgemein) und sprachspezifischen Evaluierungen (2026).',
          columns: ['Sprachgruppe', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          rows: [
            {
              'Sprachgruppe': 'Chinesisch (alle Dialekte)',
              'Qwen2.5 7B': '★★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Sprachgruppe': 'Japanisch',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Sprachgruppe': 'Koreanisch',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Sprachgruppe': 'Französisch / Deutsch',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★★',
              'Mistral 7B': '★★★★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Sprachgruppe': 'Spanisch / Italienisch',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★★',
              'Mistral 7B': '★★★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Sprachgruppe': 'Arabisch (MSA)',
              'Qwen2.5 7B': '★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            }
          ],
          image: 'multilingual-llm-comparison-de.svg',
          imageCaption: 'Mehrsprachige LLM-Vergleichstabelle 2026: Qwen2.5 7B dominiert alle asiatischen Sprachen (Chinesisch, Japanisch, Koreanisch mit 4-5 Sternen); Mistral 7B konkurriert bei französischen und deutschen Sprachen (4 Sterne). Bewertungen basieren auf JMT-bench, MMLU und sprachspezifischen Evaluierungen.'
        },
        commonMistakes: {
          title: 'Häufige Fehler bei mehrsprachigen LLMs',
          faqs: [
            {
              q: 'Warum funktioniert mein lokales LLM bei Chinesisch, aber nicht bei Japanisch?',
              a: 'Sie verwenden wahrscheinlich Llama oder Mistral. Beide sind für asiatische Sprachen schlecht optimiert. Wechseln Sie zu Qwen2.5 7B. Es wurde explizit auf Chinesisch, Japanisch und Koreanisch trainiert.'
            },
            {
              q: 'Soll ich Q4_K_M oder Q5_K_M verwenden?',
              a: 'Verwenden Sie **Q4_K_M**, es sei denn, Sie haben >12 GB VRAM. Q4_K_M reduziert Speicher um 75 % gegenüber fp16 mit <0,5 % Genauigkeitsverlust. Q5_K_M ist unnötig für die meisten Aufgaben.'
            },
            {
              q: 'Kann ich ein 7B-Modell bei 4 GB VRAM ausführen?',
              a: 'Nein. Qwen2.5 7B (Q4_K_M) benötigt mindestens 8 GB. Verwenden Sie ein 3B-Modell (Phi-3, MobileLLM) für 4 GB VRAM. Oder verwenden Sie CPU-only-Inferenz (sehr langsam, nicht empfohlen).'
            },
            {
              q: 'Warum ist die Qualität bei französischen/deutschen Aufgaben besser mit Mistral?',
              a: 'Mistral wurde mit mehr französischen und deutschen Trainingsdaten trainiert. Für europäische Sprachen: Mistral und Qwen2.5 sind gleichwertig. Qwen2.5 ist bei asiatischen und romanischen Sprachen besser.'
            },
            {
              q: 'Sollte ich fine-tune ein Modell für meine Sprache?',
              a: 'Nur, wenn Sie >10.000 hochwertige Beispiele in Ihrer Sprache haben. Für die meisten Aufgaben ist Prompt-Engineering (Few-Shot-Beispiele in den Kontext geben) kostengünstiger und schneller.'
            }
          ]
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Was ist ein lokales LLM und warum sollte ich eines verwenden?',
              a: 'Ein lokales LLM läuft auf Ihrer Maschine (MacBook, Linux-Desktop, Server) ohne Cloud-API. Vorteile: (1) Keine API-Kosten, (2) Datenschutz (keine Uploads zu OpenAI/Google), (3) Offline-Nutzung, (4) Anpassung via Fine-Tuning. Nachteil: Langsamere Inferenz, begrenzte Modellgröße (max. 13B auf Consumer-Hardware).'
            },
            {
              q: 'Ist Ollama oder llama.cpp schneller?',
              a: 'Sie haben ähnliche Geschwindigkeit. **Ollama** ist einsteigerfreundlich (CLI, Web-UI). **llama.cpp** ist direkter und schneller für High-Performance-Setup. Für Anfänger: Ollama. Für Experten: llama.cpp.'
            },
            {
              q: 'Wie viel kostet das Ausführen eines lokalen LLMs im Vergleich zu OpenAI GPT-4o?',
              a: 'Lokale Nutzung (Hardware-Amortisation): $0 pro Anfrage (nach Hardwarekauf). GPT-4o API: $0,03 pro 1K Input-Tokens, $0,06 pro 1K Output-Tokens. Bei 1.000 Anfragen pro Monat: Lokal $0, GPT-4o $30-100.'
            },
            {
              q: 'Kann ich ein 13B-Modell auf meinem Laptop ausführen?',
              a: 'Nur mit Q4_K_M-Quantisierung und >16 GB RAM/VRAM. Qwen2.5 13B (Q4_K_M): ~12 GB VRAM erforderlich. Llama 3.1 70B: Nicht praktikabel auf Consumer-Hardware. Verwenden Sie 7B-Modelle für maximale Kompatibilität.'
            },
            {
              q: 'Wie sicher sind lokale LLMs für sensible Daten?',
              a: 'Sehr sicher. Lokal ausgeführte Modelle verlassen Ihre Maschine nicht. Wichtig: Deaktivieren Sie Telemetrie in Ollama (`OLLAMA_NUM_PARALLEL=1` env). Für Unternehmensanforderungen: Validieren Sie mit Ihrem Security-Team. DSGVO/CCPA-konform, da keine Daten zu Drittanbietern gesendet werden.'
            },
            {
              q: 'Welches Modell sollte ich für Kodegenerierung in Python verwenden?',
              a: 'Qwen2.5 7B oder Mistral 7B. Beide erreichen 85-90 % Erfolgsrate auf HumanEval (Python-Codierungsaufgaben). Für spezialisierte Code-Modelle: DeepSeek Coder 7B. Für größere Genauigkeit: Qwen2.5 32B (benötigt 20+ GB VRAM).'
            },
            {
              q: 'Kann ich ein lokales LLM feinabstimmen, um besser in meiner Sprache zu arbeiten?',
              a: 'Ja, aber nur mit >5.000 hochwertigen Beispielen. Dafür verwenden Sie: LoRA (Parameter-Efficient Fine-Tuning) oder Vollständiges Fine-Tuning. Tools: Ollama Extension, llama-cpp-python, Hugging Face Transformers. Für die meisten Aufgaben: Few-Shot-Prompting im Kontext ist kosteneffizienter.'
            },
            {
              q: 'Wie kann ich die Quantisierung eines GGUF-Modells ändern?',
              a: 'Verwenden Sie `llama.cpp`\'s `quantize` Dienstprogramm: `./quantize model.gguf model-q4_km.gguf Q4_K_M`. Das Original-Modell bleibt unverändert. Quantisierung dauert 5-20 Minuten je nach Modellgröße. Neues Modell speichern unter separatem Namen (`-q4_km` Suffix).'
            },
            {
              q: 'Kann ein lokales LLM bei großen Batch-Verarbeitungen (100+ Anfragen) mit OpenAI konkurrieren?',
              a: 'Bei Latenzanforderungen: Nein. OpenAI GPT-4o ist 5-10x schneller. Bei Kostenoptimierung: Ja, lokal ist kostengünstiger. Trade-Off: Wählen Sie lokal für Datenschutz/Offline, OpenAI für Geschwindigkeit/Präzision.'
            },
            {
              q: 'Sollte ich CPU- oder GPU-Inferenz verwenden?',
              a: 'GPU immer, wenn verfügbar. GPU-Inferenz ist 10-50x schneller als CPU. Für CPU-only-Setups: Verwenden Sie quantisierte 3B-Modelle. Empfohlene GPU: NVIDIA (CUDA), AMD (ROCm), Apple (Metal für M-Series).'
            },
            {
              q: 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?',
              a: 'Ja, aber Lokal ist DSGVO-konform. Wichtig: (1) Keine Datenübertragung zu US-Servern (API-frei), (2) Erfüllung von Artikel 28 (Datenverarbeitungsvertrag nicht erforderlich, wenn Sie der Verantwortliche sind), (3) BSI-Grundschutz-Kataloge: Lokale Ausführung erfüllt Anforderungen an Datenschutz und Vertraulichkeit. Empfehlung: Dokumentieren Sie die Sicherheitsmaßnahmen für Ihr Compliance-Team.'
            },
            {
              q: 'Ist Qwen2.5 für den deutschen Mittelstand geeignet?',
              a: 'Ja. Qwen2.5 ist ideal für KMUs und Mittelstandsunternehmen: (1) Kosteneffizient -- keine API-Abonnements, (2) Datensicherheit -- vollständige Kontrolle über Daten, (3) Hardware-Anforderungen -- 8 GB VRAM reichen aus, (4) BSI-konform -- erfüllt IT-Sicherheitsstandards ohne externe Abhängigkeiten. Anwendungsfälle: Dokumentenverarbeitung, Kundenservice-Bots, interne Recherchesysteme. Finanzdienstleister und Anwaltskanzleien können lokale LLMs zur DSGVO-Compliance nutzen.'
            }
          ]
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Ressourcen',
          items: [
            '[Ollama installieren: Schritt-für-Schritt-Anleitung](/local-llms/how-to-install-ollama?lang=de) -- Aktualisierte Anleitung für alle Plattformen (macOS, Linux, Windows).',
            '[LM Studio vs. Ollama: Vergleich 2026](/local-llms/lm-studio-vs-ollama?lang=de) -- Welches Tool ist für lokale Modelle besser?',
            '[Lokale LLM-Hardware-Anforderungen 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) -- GPU/CPU/RAM-Anforderungen für Qwen2.5, Llama, Mistral.',
            '[LLM-Quantisierung erklärt: Q4_K_M vs. Q5_K_M](/local-llms/llm-quantization-explained?lang=de) -- Warum Q4_K_M Standard ist.',
            '[Troubleshooting lokaler LLM-Setups](/local-llms/troubleshooting-local-llm-setup?lang=de) -- Häufige Fehler und Lösungen (VRAM, Pfade, Quantisierungen).'
          ]
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Qwen2.5-Dokumentation](https://huggingface.co/Qwen) -- Offizielle Modellkarte, Benchmarks, Multilingual-Training-Details.',
            '[Llama 3.1 Benchmarks](https://huggingface.co/meta-llama) -- Meta-Dokumentation, MMLU-Scores (Englisch, Japanisch).',
            '[Mistral 7B Modellkarte](https://huggingface.co/mistralai/Mistral-7B) -- Training, Sprachunterstützung, Lizenzierung.',
            '[JMT-Benchmark (Japanisch)](https://github.com/nlp-waseda/jmt-bench) -- Japanisch-Textverständnis-Benchmark für lokale Modelle.',
            '[Ollama Dokumentation](https://github.com/ollama/ollama) -- CLI, Installation, Modell-Downloads, Anfragen zu lokalen LLMs.'
          ]
        }
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=de',
        'inLanguage': 'de',
        'headline': 'Beste mehrsprachige lokale LLMs 2026: Qwen2.5 vs. Mistral',
        'description': 'Vergleich mehrsprachiger lokaler Sprachmodelle: Qwen2.5 7B dominiert asiatische Sprachen. Mistral konkurriert bei europäischen Sprachen. Benchmarks, Hardware-Anforderungen.',
        'image': 'https://www.promptquorum.com/images/multilingual-llm-comparison-de.svg',
        'datePublished': '2025-12-10',
        'dateModified': '2026-04-11',
        'author': {
          '@type': 'Person',
          'name': 'Hans Kuepper'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        'about': [
          { '@type': 'Thing', 'name': 'Qwen2.5' },
          { '@type': 'Thing', 'name': 'Llama 3.1' },
          { '@type': 'Thing', 'name': 'Mistral 7B' },
          { '@type': 'Thing', 'name': 'Gemma 3' }
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'llama.cpp' }
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2']
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'inLanguage': 'de',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=de',
        'name': 'Mehrsprachige lokale LLMs auswählen und verwenden',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Zielsprache identifizieren',
            'text': 'Bestimmen Sie, in welcher Sprache oder welchen Sprachen Sie das Modell verwenden werden: Asiatisch (Chinesisch, Japanisch, Koreanisch), Europäisch (Französisch, Deutsch, Spanisch) oder Arabisch.'
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Modell basierend auf Sprache auswählen',
            'text': 'Wählen Sie Qwen2.5 7B für asiatische Sprachen, Mistral oder Qwen2.5 für europäische Sprachen.'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Quantisierung mit Q4_K_M durchführen',
            'text': 'Laden Sie das GGUF-Modell herunter und quantisieren Sie es mit Q4_K_M für 8 GB VRAM-Kompatibilität.'
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Mit Ollama oder llama.cpp ausführen',
            'text': 'Starten Sie das Modell lokal mit Ollama oder llama.cpp und testen Sie mit Aufgaben in Ihrer Zielsprache.'
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': 'Qualität benchmarken',
            'text': 'Evaluieren Sie die Antwortqualität mithilfe von domänenspezifischen Tests (JMT-bench für Japanisch, C-Eval für Chinesisch).'
          }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'de',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=de',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Was ist ein lokales LLM und warum sollte ich eines verwenden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ein lokales LLM läuft auf Ihrer Maschine (MacBook, Linux-Desktop, Server) ohne Cloud-API. Vorteile: (1) Keine API-Kosten, (2) Datenschutz (keine Uploads zu OpenAI/Google), (3) Offline-Nutzung, (4) Anpassung via Fine-Tuning. Nachteil: Langsamere Inferenz, begrenzte Modellgröße (max. 13B auf Consumer-Hardware).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Ist Ollama oder llama.cpp schneller?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sie haben ähnliche Geschwindigkeit. **Ollama** ist einsteigerfreundlich (CLI, Web-UI). **llama.cpp** ist direkter und schneller für High-Performance-Setup. Für Anfänger: Ollama. Für Experten: llama.cpp.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie viel kostet das Ausführen eines lokalen LLMs im Vergleich zu OpenAI GPT-4o?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Lokale Nutzung (Hardware-Amortisation): $0 pro Anfrage (nach Hardwarekauf). GPT-4o API: $0,03 pro 1K Input-Tokens, $0,06 pro 1K Output-Tokens. Bei 1.000 Anfragen pro Monat: Lokal $0, GPT-4o $30-100.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich ein 13B-Modell auf meinem Laptop ausführen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Nur mit Q4_K_M-Quantisierung und >16 GB RAM/VRAM. Qwen2.5 13B (Q4_K_M): ~12 GB VRAM erforderlich. Llama 3.1 70B: Nicht praktikabel auf Consumer-Hardware. Verwenden Sie 7B-Modelle für maximale Kompatibilität.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie sicher sind lokale LLMs für sensible Daten?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sehr sicher. Lokal ausgeführte Modelle verlassen Ihre Maschine nicht. Wichtig: Deaktivieren Sie Telemetrie in Ollama (`OLLAMA_NUM_PARALLEL=1` env). Für Unternehmensanforderungen: Validieren Sie mit Ihrem Security-Team. DSGVO/CCPA-konform, da keine Daten zu Drittanbietern gesendet werden.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Welches Modell sollte ich für Kodegenerierung in Python verwenden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen2.5 7B oder Mistral 7B. Beide erreichen 85-90 % Erfolgsrate auf HumanEval (Python-Codierungsaufgaben). Für spezialisierte Code-Modelle: DeepSeek Coder 7B. Für größere Genauigkeit: Qwen2.5 32B (benötigt 20+ GB VRAM).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich ein lokales LLM feinabstimmen, um besser in meiner Sprache zu arbeiten?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, aber nur mit >5.000 hochwertigen Beispielen. Dafür verwenden Sie: LoRA (Parameter-Efficient Fine-Tuning) oder Vollständiges Fine-Tuning. Tools: Ollama Extension, llama-cpp-python, Hugging Face Transformers. Für die meisten Aufgaben: Few-Shot-Prompting im Kontext ist kosteneffizienter.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie kann ich die Quantisierung eines GGUF-Modells ändern?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Verwenden Sie `llama.cpp`\'s `quantize` Dienstprogramm: `./quantize model.gguf model-q4_km.gguf Q4_K_M`. Das Original-Modell bleibt unverändert. Quantisierung dauert 5-20 Minuten je nach Modellgröße. Neues Modell speichern unter separatem Namen (`-q4_km` Suffix).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Kann ein lokales LLM bei großen Batch-Verarbeitungen (100+ Anfragen) mit OpenAI konkurrieren?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Bei Latenzanforderungen: Nein. OpenAI GPT-4o ist 5-10x schneller. Bei Kostenoptimierung: Ja, lokal ist kostengünstiger. Trade-Off: Wählen Sie lokal für Datenschutz/Offline, OpenAI für Geschwindigkeit/Präzision.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich CPU- oder GPU-Inferenz verwenden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'GPU immer, wenn verfügbar. GPU-Inferenz ist 10-50x schneller als CPU. Für CPU-only-Setups: Verwenden Sie quantisierte 3B-Modelle. Empfohlene GPU: NVIDIA (CUDA), AMD (ROCm), Apple (Metal für M-Series).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, aber Lokal ist DSGVO-konform. Wichtig: (1) Keine Datenübertragung zu US-Servern (API-frei), (2) Erfüllung von Artikel 28 (Datenverarbeitungsvertrag nicht erforderlich, wenn Sie der Verantwortliche sind), (3) BSI-Grundschutz-Kataloge: Lokale Ausführung erfüllt Anforderungen an Datenschutz und Vertraulichkeit. Empfehlung: Dokumentieren Sie die Sicherheitsmaßnahmen für Ihr Compliance-Team.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Ist Qwen2.5 für den deutschen Mittelstand geeignet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Qwen2.5 ist ideal für KMUs und Mittelstandsunternehmen: (1) Kosteneffizient -- keine API-Abonnements, (2) Datensicherheit -- vollständige Kontrolle über Daten, (3) Hardware-Anforderungen -- 8 GB VRAM reichen aus, (4) BSI-konform -- erfüllt IT-Sicherheitsstandards ohne externe Abhängigkeiten. Anwendungsfälle: Dokumentenverarbeitung, Kundenservice-Bots, interne Recherchesysteme. Finanzdienstleister und Anwaltskanzleien können lokale LLMs zur DSGVO-Compliance nutzen.'
            }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'inLanguage': 'de',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=de',
        'name': 'Sprachvergleich für lokale Sprachmodelle',
        'description': 'Vergleich von Sprachunterstützung in Qwen2.5, Llama, Mistral und Gemma für Chinesisch, Japanisch, Koreanisch, Französisch, Deutsch, Spanisch, Italienisch und Arabisch.',
        'numberOfItems': 6,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Chinesisch (alle Dialekte)',
            'description': 'Qwen2.5 7B dominiert mit 5 Sternen; Llama und Mistral unter 2 Sternen.'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Japanisch',
            'description': 'Qwen2.5 7B mit 4 Sternen führend; Llama und Mistral unter 2 Sternen.'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Koreanisch',
            'description': 'Qwen2.5 7B mit 4 Sternen führend; Llama und Mistral unter 2 Sternen.'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Französisch / Deutsch',
            'description': 'Qwen2.5 und Mistral konkurrieren mit jeweils 4 Sternen; Llama und Gemma mit 3 Sternen.'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'Spanisch / Italienisch',
            'description': 'Qwen2.5, Mistral und Gemma mit 3-4 Sternen; Llama mit 3 Sternen.'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': 'Arabisch (MSA)',
            'description': 'Qwen2.5 und Gemma mit 3 Sternen; Llama mit 2 Sternen, Mistral mit 1 Stern.'
          }
        ]
      }
    },
    fr: {
      theme: 'Meilleurs modèles',
      title: 'Meilleurs LLMs locaux multilingues 2026 : Qwen2.5 vs Mistral',
      seoTitle: 'Meilleurs LLMs multilingues 2026 : Qwen2.5 vs Mistral',
      intro: 'Comparez les LLMs locaux multilingues : Qwen2.5 7B domine les langues asiatiques (chinois, japonais, coréen) avec des évaluations 5 étoiles. Mistral 7B rivalise sur les langues européennes. Testez rapidement hors ligne sans frais API.',
      metaDescription: 'LLMs locaux multilingues 2026 : Qwen2.5 7B meilleur pour chinois/japonais/coréen. Mistral rivalise en français/allemand. Comparaison avec benchmarks.',
      publishDate: '2025-12-10',
      dateModified: '2026-04-11',
      readTime: '9 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM multilingue local',
      toc: [
        { label: 'Points clés', anchor: '#tldr' },
        { label: 'Quelles langues supportent les LLMs locaux ?', anchor: '#which-support' },
        { label: 'Meilleurs LLMs locaux pour les langues européennes', anchor: '#european' },
        { label: 'Meilleurs LLMs locaux pour les langues asiatiques', anchor: '#asian' },
        { label: 'Support de la langue arabe', anchor: '#arabic' },
        { label: 'Évaluation des LLMs multilingues', anchor: '#how-to-benchmark' },
        { label: 'Tableau comparatif : Qwen2.5 vs Llama vs Mistral vs Gemma', anchor: '#comparison-table' },
        { label: 'Erreurs courantes avec les LLMs multilingues', anchor: '#common-mistakes' },
        { label: 'Questions fréquemment posées', anchor: '#faq' }
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Qwen2.5 7B** est le meilleur modèle local pour le chinois, le japonais et le coréen (5 étoiles pour le chinois, 4 étoiles pour le japonais/coréen).',
            '**Mistral 7B** et **Qwen2.5 7B** rivalisent sur les langues européennes (français, allemand, espagnol, italien) avec chacun 4 étoiles.',
            '**Quantification avec Q4_K_M** réduit les exigences VRAM de 75 % avec une perte de précision minimale (<1 %) -- essentiel pour le déploiement local.',
            '**Traitement local** (Ollama, llama.cpp) élimine les frais API et la latence ; idéal pour la confidentialité des données et la conformité RGPD.',
            'Choisissez **Qwen2.5 pour l\'Asie**, **Mistral ou Qwen2.5 pour l\'Europe**, en fonction de votre budget matériel (8 GB VRAM suffisent pour les modèles 7B).'
          ],
        },
        whichSupport: {
          title: 'Quelles langues supportent les LLMs locaux ?',
          content: 'Tous les modèles locaux modernes (Qwen2.5, Llama 3.1, Mistral, Gemma) prennent en charge au moins les 10 principales langues par nombre de locuteurs. Cependant, la qualité du support varie considérablement : Qwen2.5 domine les langues asiatiques, tandis que Mistral et Llama rivalisent sur les langues européennes.',
          columns: ['Groupe linguistique', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          rows: [
            {
              'Groupe linguistique': 'Chinois (tous les dialectes)',
              'Qwen2.5 7B': '★★★★★ (5.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              'Groupe linguistique': 'Japonais',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              'Groupe linguistique': 'Coréen',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              'Groupe linguistique': 'Français / Allemand',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★★ (3.0)',
              'Mistral 7B': '★★★★ (4.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              'Groupe linguistique': 'Espagnol / Italien',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★★ (3.0)',
              'Mistral 7B': '★★★ (3.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              'Groupe linguistique': 'Arabe (MSA)',
              'Qwen2.5 7B': '★★★ (3.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            }
          ]
        },
        european: {
          title: 'Meilleurs LLMs locaux pour les langues européennes',
          content: 'Pour les langues européennes (français, allemand, espagnol, italien), **Mistral 7B** et **Qwen2.5 7B** sont équivalents. Mistral a un avantage sur le français et l\'allemand ; Qwen2.5 est légèrement meilleur sur l\'espagnol et l\'italien. Les deux nécessitent seulement 8 GB VRAM au format Q4_K_M. Pour la conformité RGPD, Mistral AI étant une entreprise française, elle est recommandée par la CNIL pour le traitement local des données sensibles (financières, médicales, juridiques).',
          items: [
            '**Mistral 7B pour le français et l\'allemand** : Mistral a été entraîné sur des données de texte français et allemand et fournit une précision native. Idéal pour la conformité RGPD et les obligations de protection des données françaises (conforme à la CNIL lors du traitement local).',
            '**Qwen2.5 7B pour l\'espagnol et l\'italien** : Qwen2.5 offre une qualité supérieure sur les langues romanes. Avec la quantification Q4_K_M, il fonctionne sur un MacBook Pro M2 ou un GPU Linux standard sans problèmes de mémoire.',
            '**Llama 3.1 8B en secours** : Llama 3.1 8B est suffisant pour les langues européennes (évaluation 3 étoiles), mais pas optimal. Utilisez-le uniquement si Qwen2.5 ou Mistral ne sont pas disponibles.',
            '**Spécialistes DACH (Allemagne/Autriche/Suisse)** : Pour les organisations de langue allemande : Mistral 7B satisfait les exigences BSI-Grundschutz en traitement local. Aucun transfert de données vers des serveurs américains requis.',
            '**Quantification : Q4_K_M est la norme** : Utilisez toujours **Q4_K_M** pour les modèles 7B sur les langues européennes. Exigence VRAM : 8 GB. Perte de précision : <0.5 % par rapport à fp16.',
            '**Benchmarks : JMT-bench + MMLU** : Qwen2.5 et Mistral obtiennent respectivement 72-75 % de précision sur MMLU (tests de connaissances à choix multiples). Sur des tests spécifiques au domaine (droit, médecine, finance), les scores baissent à 55-70 %.'
          ]
        },
        asian: {
          title: 'Meilleurs LLMs locaux pour les langues asiatiques',
          content: 'Qwen2.5 7B domine clairement les langues asiatiques. Pour le chinois, le japonais et le coréen, il obtient 4-5 étoiles, tandis que Llama et Mistral reçoivent 1-2 étoiles. Pour les organisations au Japon, en Corée du Sud ou en Chine, Qwen2.5 est le seul choix pratique.',
          columns: ['Langue', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B'],
          rows: [
            {
              'Langue': 'Chinois (simplifié et traditionnel)',
              'Qwen2.5 7B': '★★★★★ (5.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)'
            },
            {
              'Langue': 'Japonais (Hiragana, Kanji, Katakana)',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)'
            },
            {
              'Langue': 'Coréen (Hangul)',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)'
            }
          ]
        },
        arabic: {
          title: 'Support de la langue arabe',
          content: 'L\'arabe est un défi pour les modèles locaux. Qwen2.5 obtient 3 étoiles en arabe moderne standard (MSA), tandis que Llama et Mistral n\'obtiennent que 1-2 étoiles. L\'arabe dialectal (égyptien, golfe) n\'est bien soutenu par aucun modèle 7B ; des modèles 13B ou spécialisés sont nécessaires. Pour les organisations au Moyen-Orient : Qwen2.5 7B est le meilleur petit modèle disponible, mais pour les tâches de production, envisagez des modèles 13B.'
        },
        howToBenchmark: {
          title: 'Évaluation des LLMs multilingues',
          content: 'Les benchmarks comme MMLU et JMT-bench mesurent uniquement l\'anglais et le japonais. Pour la véritable multilingualité, testez avec des tâches réelles : résumé de documents dans votre langue cible, questions spécifiques au domaine (droit, médecine, finance) et contextualisation culturelle. Voici les meilleures pratiques :',
          numberedItems: [
            'Créez un ensemble de données de test locales dans votre langue cible : Écrivez 20-50 questions représentatives dans votre langue cible (ex. chinois, japonais). Utilisez une terminologie spécifique au domaine (médecine, droit, technologie). Enregistrez-les dans un fichier JSON.',
            'Exécutez les 4 modèles contre cet ensemble de données de test : Quantifiez chaque modèle avec Q4_K_M. Utilisez Ollama ou llama.cpp pour les exécuter localement. Comparez la qualité des réponses manuellement ou avec des métriques (similarité avec la vérité de base).',
            'Mesurez la latence et la consommation VRAM : Notez le temps d\'inférence par requête et la consommation VRAM de pointe. Exemple : Qwen2.5 7B (Q4_K_M) sur M2 Max = 400 ms de latence, 8.2 GB VRAM.',
            'Validez avec des benchmarks spécifiques au domaine : Pour les applications spécialisées : utilisez JMT-bench pour le japonais, C-Eval pour le chinois, MMLU pour l\'anglais. Combinez les résultats avec vos propres tests.'
          ]
        },
        comparisonTable: {
          title: 'Tableau comparatif : Qwen2.5 vs Llama vs Mistral vs Gemma',
          content: 'Ce tableau résume le support linguistique. Les évaluations sont basées sur JMT-bench (japonais), MMLU (général) et les évaluations spécifiques aux langues (2026).',
          columns: ['Groupe linguistique', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          rows: [
            {
              'Groupe linguistique': 'Chinois (tous les dialectes)',
              'Qwen2.5 7B': '★★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Groupe linguistique': 'Japonais',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Groupe linguistique': 'Coréen',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Groupe linguistique': 'Français / Allemand',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★★',
              'Mistral 7B': '★★★★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Groupe linguistique': 'Espagnol / Italien',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★★',
              'Mistral 7B': '★★★',
              'Gemma 3 9B': '★★★'
            },
            {
              'Groupe linguistique': 'Arabe (MSA)',
              'Qwen2.5 7B': '★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            }
          ],
          image: 'multilingual-llm-comparison-fr.svg',
          imageCaption: 'Tableau de comparaison des LLMs multilingues 2026 : Qwen2.5 7B domine toutes les langues asiatiques (chinois, japonais, coréen avec 4-5 étoiles) ; Mistral 7B rivalise sur les langues françaises et allemandes (4 étoiles). Les évaluations sont basées sur JMT-bench, MMLU et les évaluations spécifiques aux langues.'
        },
        commonMistakes: {
          title: 'Erreurs courantes avec les LLMs multilingues',
          faqs: [
            {
              q: 'Pourquoi mon LLM local fonctionne en chinois mais pas en japonais ?',
              a: 'Vous utilisez probablement Llama ou Mistral. Les deux sont mal optimisés pour les langues asiatiques. Passez à Qwen2.5 7B. Il a été explicitement entraîné sur le chinois, le japonais et le coréen.'
            },
            {
              q: 'Dois-je utiliser Q4_K_M ou Q5_K_M ?',
              a: 'Utilisez **Q4_K_M**, sauf si vous avez >12 GB VRAM. Q4_K_M réduit la mémoire de 75 % par rapport à fp16 avec <0.5 % de perte de précision. Q5_K_M est inutile pour la plupart des tâches.'
            },
            {
              q: 'Puis-je exécuter un modèle 7B avec 4 GB VRAM ?',
              a: 'Non. Qwen2.5 7B (Q4_K_M) nécessite au minimum 8 GB. Utilisez un modèle 3B (Phi-3, MobileLLM) pour 4 GB VRAM. Ou utilisez l\'inférence CPU uniquement (très lent, non recommandé).'
            },
            {
              q: 'Pourquoi la qualité est meilleure avec Mistral pour les tâches en français/allemand ?',
              a: 'Mistral a été entraîné sur plus de données en français et en allemand. Pour les langues européennes : Mistral et Qwen2.5 sont équivalents. Qwen2.5 est meilleur pour les langues asiatiques et romanes.'
            },
            {
              q: 'Devrais-je affiner un modèle pour ma langue ?',
              a: 'Seulement si vous avez >10.000 exemples de haute qualité dans votre langue. Pour la plupart des tâches, l\'ingénierie des invites (ajouter des exemples few-shot au contexte) est plus rentable et plus rapide.'
            }
          ]
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Qu\'est-ce qu\'un LLM local et pourquoi devrais-je en utiliser un ?',
              a: 'Un LLM local s\'exécute sur votre machine (MacBook, bureau Linux, serveur) sans API cloud. Avantages : (1) Pas de frais API, (2) Confidentialité (pas de téléchargement vers OpenAI/Google), (3) Utilisation hors ligne, (4) Adaptation via affinage. Inconvénient : inférence plus lente, taille de modèle limitée (max. 13B sur matériel grand public).'
            },
            {
              q: 'Ollama ou llama.cpp est plus rapide ?',
              a: 'Ils ont une vitesse similaire. **Ollama** est convivial pour les débutants (CLI, Web UI). **llama.cpp** est plus direct et plus rapide pour la configuration haute performance. Pour les débutants : Ollama. Pour les experts : llama.cpp.'
            },
            {
              q: 'Combien coûte l\'exécution d\'un LLM local comparé à OpenAI GPT-4o ?',
              a: 'Utilisation locale (amortissement matériel) : 0 $ par requête (après l\'achat du matériel). API GPT-4o : 0.03 $ par 1K tokens d\'entrée, 0.06 $ par 1K tokens de sortie. Pour 1.000 requêtes par mois : local 0 $, GPT-4o 30-100 $.'
            },
            {
              q: 'Puis-je exécuter un modèle 13B sur mon ordinateur portable ?',
              a: 'Seulement avec la quantification Q4_K_M et >16 GB RAM/VRAM. Qwen2.5 13B (Q4_K_M) : ~12 GB VRAM requis. Llama 3.1 70B : non pratique sur matériel grand public. Utilisez les modèles 7B pour une compatibilité maximale.'
            },
            {
              q: 'Quel est le niveau de sécurité des LLMs locaux pour les données sensibles ?',
              a: 'Très sûr. Les modèles exécutés localement ne quittent pas votre machine. Important : désactivez la télémétrie dans Ollama (`OLLAMA_NUM_PARALLEL=1` env). Pour les exigences entreprise : validez avec votre équipe de sécurité. Conforme au RGPD/CCPA, car aucune donnée n\'est envoyée à des tiers.'
            },
            {
              q: 'Quel modèle devrais-je utiliser pour la génération de code en Python ?',
              a: 'Qwen2.5 7B ou Mistral 7B. Les deux obtiennent 85-90 % de taux de réussite sur HumanEval (tâches de codage Python). Pour les modèles de code spécialisés : DeepSeek Coder 7B. Pour une précision supérieure : Qwen2.5 32B (nécessite 20+ GB VRAM).'
            },
            {
              q: 'Puis-je affiner un LLM local pour mieux fonctionner dans ma langue ?',
              a: 'Oui, mais seulement avec >5.000 exemples de haute qualité. Pour cela, utilisez : LoRA (affinage efficace des paramètres) ou affinage complet. Outils : extension Ollama, llama-cpp-python, Transformers Hugging Face. Pour la plupart des tâches : le prompt engineering few-shot dans le contexte est plus rentable.'
            },
            {
              q: 'Comment puis-je modifier la quantification d\'un modèle GGUF ?',
              a: 'Utilisez l\'utilitaire `quantize` de `llama.cpp` : `./quantize model.gguf model-q4_km.gguf Q4_K_M`. Le modèle original reste inchangé. La quantification prend 5-20 minutes selon la taille du modèle. Enregistrez le nouveau modèle sous un nom séparé (suffixe `-q4_km`).'
            },
            {
              q: 'Un LLM local peut-il rivaliser avec OpenAI pour les traitements par lot importants (100+ requêtes) ?',
              a: 'Pour les exigences de latence : non. OpenAI GPT-4o est 5-10x plus rapide. Pour l\'optimisation des coûts : oui, le local est plus rentable. Compromis : choisissez local pour la confidentialité/hors ligne, OpenAI pour la vitesse/précision.'
            },
            {
              q: 'Devrais-je utiliser l\'inférence CPU ou GPU ?',
              a: 'GPU toujours, si disponible. L\'inférence GPU est 10-50x plus rapide que CPU. Pour les configurations CPU uniquement : utilisez des modèles 3B quantifiés. GPU recommandé : NVIDIA (CUDA), AMD (ROCm), Apple (Metal pour M-Series).'
            }
          ]
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Installer Ollama : Guide complet](/local-llms/how-to-install-ollama?lang=fr) -- Guide mis à jour pour toutes les plates-formes (macOS, Linux, Windows).',
            '[LM Studio vs Ollama : Comparaison 2026](/local-llms/lm-studio-vs-ollama?lang=fr) -- Quel outil est le meilleur pour les modèles locaux ?',
            '[Configuration matérielle des LLMs locaux 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr) -- Exigences GPU/CPU/RAM pour Qwen2.5, Llama, Mistral.',
            '[Quantification LLM expliquée : Q4_K_M vs Q5_K_M](/local-llms/llm-quantization-explained?lang=fr) -- Pourquoi Q4_K_M est la norme.',
            '[Dépannage des configurations locales des LLMs](/local-llms/troubleshooting-local-llm-setup?lang=fr) -- Erreurs courantes et solutions (VRAM, chemins, quantifications).'
          ]
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Documentation Qwen2.5](https://huggingface.co/Qwen) -- Fiche modèle officielle, benchmarks, détails d\'entraînement multilingue.',
            '[Benchmarks Llama 3.1](https://huggingface.co/meta-llama) -- Documentation Meta, scores MMLU (anglais, japonais).',
            '[Fiche modèle Mistral 7B](https://huggingface.co/mistralai/Mistral-7B) -- Entraînement, support linguistique, licences.',
            '[JMT-Benchmark (Japonais)](https://github.com/nlp-waseda/jmt-bench) -- Benchmark de compréhension de texte japonais pour modèles locaux.',
            '[Documentation Ollama](https://github.com/ollama/ollama) -- CLI, installation, téléchargements de modèles, questions sur les LLMs locaux.'
          ]
        }
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=fr',
        'inLanguage': 'fr',
        'headline': 'Meilleurs LLMs locaux multilingues 2026 : Qwen2.5 vs Mistral',
        'description': 'Comparaison des LLMs locaux multilingues : Qwen2.5 7B domine les langues asiatiques. Mistral rivalise sur les langues européennes. Benchmarks, exigences matérielles.',
        'image': 'https://www.promptquorum.com/images/multilingual-llm-comparison-fr.svg',
        'datePublished': '2025-12-10',
        'dateModified': '2026-04-11',
        'author': {
          '@type': 'Person',
          'name': 'Hans Kuepper'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        'about': [
          { '@type': 'Thing', 'name': 'Qwen2.5' },
          { '@type': 'Thing', 'name': 'Llama 3.1' },
          { '@type': 'Thing', 'name': 'Mistral 7B' },
          { '@type': 'Thing', 'name': 'Gemma 3' }
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'llama.cpp' }
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2']
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'inLanguage': 'fr',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=fr',
        'name': 'Sélectionner et utiliser les LLMs locaux multilingues',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Identifier votre langue cible',
            'text': 'Déterminez dans quelle langue ou quelles langues vous utiliserez le modèle : asiatique (chinois, japonais, coréen), européenne (français, allemand, espagnol) ou arabe.'
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Sélectionner le modèle en fonction de la langue',
            'text': 'Choisissez Qwen2.5 7B pour les langues asiatiques, Mistral ou Qwen2.5 pour les langues européennes.'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Effectuer la quantification avec Q4_K_M',
            'text': 'Téléchargez le modèle GGUF et quantifiez-le avec Q4_K_M pour la compatibilité 8 GB VRAM.'
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Exécuter avec Ollama ou llama.cpp',
            'text': 'Démarrez le modèle localement avec Ollama ou llama.cpp et testez avec des tâches dans votre langue cible.'
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': 'Évaluer la qualité',
            'text': 'Évaluez la qualité des réponses à l\'aide de tests spécifiques au domaine (JMT-bench pour le japonais, C-Eval pour le chinois).'
          }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'fr',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=fr',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Qu\'est-ce qu\'un LLM local et pourquoi devrais-je en utiliser un ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Un LLM local s\'exécute sur votre machine (MacBook, bureau Linux, serveur) sans API cloud. Avantages : (1) Pas de frais API, (2) Confidentialité (pas de téléchargement vers OpenAI/Google), (3) Utilisation hors ligne, (4) Adaptation via affinage. Inconvénient : inférence plus lente, taille de modèle limitée (max. 13B sur matériel grand public).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollama ou llama.cpp est plus rapide ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ils ont une vitesse similaire. **Ollama** est convivial pour les débutants (CLI, Web UI). **llama.cpp** est plus direct et plus rapide pour la configuration haute performance. Pour les débutants : Ollama. Pour les experts : llama.cpp.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Combien coûte l\'exécution d\'un LLM local comparé à OpenAI GPT-4o ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Utilisation locale (amortissement matériel) : 0 $ par requête (après l\'achat du matériel). API GPT-4o : 0.03 $ par 1K tokens d\'entrée, 0.06 $ par 1K tokens de sortie. Pour 1.000 requêtes par mois : local 0 $, GPT-4o 30-100 $.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je exécuter un modèle 13B sur mon ordinateur portable ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Seulement avec la quantification Q4_K_M et >16 GB RAM/VRAM. Qwen2.5 13B (Q4_K_M) : ~12 GB VRAM requis. Llama 3.1 70B : non pratique sur matériel grand public. Utilisez les modèles 7B pour une compatibilité maximale.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quel est le niveau de sécurité des LLMs locaux pour les données sensibles ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Très sûr. Les modèles exécutés localement ne quittent pas votre machine. Important : désactivez la télémétrie dans Ollama (`OLLAMA_NUM_PARALLEL=1` env). Pour les exigences entreprise : validez avec votre équipe de sécurité. Conforme au RGPD/CCPA, car aucune donnée n\'est envoyée à des tiers.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quel modèle devrais-je utiliser pour la génération de code en Python ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen2.5 7B ou Mistral 7B. Les deux obtiennent 85-90 % de taux de réussite sur HumanEval (tâches de codage Python). Pour les modèles de code spécialisés : DeepSeek Coder 7B. Pour une précision supérieure : Qwen2.5 32B (nécessite 20+ GB VRAM).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je affiner un LLM local pour mieux fonctionner dans ma langue ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, mais seulement avec >5.000 exemples de haute qualité. Pour cela, utilisez : LoRA (affinage efficace des paramètres) ou affinage complet. Outils : extension Ollama, llama-cpp-python, Transformers Hugging Face. Pour la plupart des tâches : le prompt engineering few-shot dans le contexte est plus rentable.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Comment puis-je modifier la quantification d\'un modèle GGUF ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Utilisez l\'utilitaire `quantize` de `llama.cpp` : `./quantize model.gguf model-q4_km.gguf Q4_K_M`. Le modèle original reste inchangé. La quantification prend 5-20 minutes selon la taille du modèle. Enregistrez le nouveau modèle sous un nom séparé (suffixe `-q4_km`).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Un LLM local peut-il rivaliser avec OpenAI pour les traitements par lot importants (100+ requêtes) ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Pour les exigences de latence : non. OpenAI GPT-4o est 5-10x plus rapide. Pour l\'optimisation des coûts : oui, le local est plus rentable. Compromis : choisissez local pour la confidentialité/hors ligne, OpenAI pour la vitesse/précision.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Devrais-je utiliser l\'inférence CPU ou GPU ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'GPU toujours, si disponible. L\'inférence GPU est 10-50x plus rapide que CPU. Pour les configurations CPU uniquement : utilisez des modèles 3B quantifiés. GPU recommandé : NVIDIA (CUDA), AMD (ROCm), Apple (Metal pour M-Series).'
            }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'inLanguage': 'fr',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=fr',
        'name': 'Comparaison des langues pour les modèles de langage locaux',
        'description': 'Comparaison du support linguistique dans Qwen2.5, Llama, Mistral et Gemma pour le chinois, le japonais, le coréen, le français, l\'allemand, l\'espagnol, l\'italien et l\'arabe.',
        'numberOfItems': 6,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Chinois (tous les dialectes)',
            'description': 'Qwen2.5 7B domine avec 5 étoiles ; Llama et Mistral moins de 2 étoiles.'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Japonais',
            'description': 'Qwen2.5 7B en tête avec 4 étoiles ; Llama et Mistral moins de 2 étoiles.'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Coréen',
            'description': 'Qwen2.5 7B en tête avec 4 étoiles ; Llama et Mistral moins de 2 étoiles.'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Français / Allemand',
            'description': 'Qwen2.5 et Mistral rivalisent avec chacun 4 étoiles ; Llama et Gemma avec 3 étoiles.'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'Espagnol / Italien',
            'description': 'Qwen2.5, Mistral et Gemma avec 3-4 étoiles ; Llama avec 3 étoiles.'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': 'Arabe (MSA)',
            'description': 'Qwen2.5 et Gemma avec 3 étoiles ; Llama avec 2 étoiles, Mistral avec 1 étoile.'
          }
        ]
      }
    },
    ja: {
      theme: 'ベストモデル',
      title: 'ベスト多言語ローカルLLM 2026：Qwen2.5 vs Mistral',
      seoTitle: 'ベスト多言語ローカルLLM 2026：Qwen2.5 vs Mistral',
      intro: '多言語ローカルLLMを比較：Qwen2.5 7Bはアジア言語（中国語、日本語、韓国語）で5つ星評価を獲得。Mistral 7Bはヨーロッパ言語で競争力あり。API費用なしでオフライン高速テスト可能。',
      metaDescription: '多言語ローカルLLM 2026：Qwen2.5 7Bはアジア言語でLlamaより15-25%優勢（JMT基準）。欧州語はMistralと競争力互角。29言語、ベンチマーク比較掲載。',
      publishDate: '2025-12-10',
      dateModified: '2026-04-11',
      readTime: '9分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: '多言語ローカルLLM',
      toc: [
        { label: '重要ポイント', anchor: '#tldr' },
        { label: 'ローカルLLMはどの言語をサポートしていますか？', anchor: '#which-support' },
        { label: 'ヨーロッパ言語向けベストローカルLLM', anchor: '#european' },
        { label: 'アジア言語向けベストローカルLLM', anchor: '#asian' },
        { label: 'アラビア言語サポート', anchor: '#arabic' },
        { label: '多言語LLMの評価', anchor: '#how-to-benchmark' },
        { label: '比較表：Qwen2.5 vs Llama vs Mistral vs Gemma', anchor: '#comparison-table' },
        { label: '多言語LLM使用時の一般的なミス', anchor: '#common-mistakes' },
        { label: 'よくある質問', anchor: '#faq' }
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Qwen2.5 7B** は中国語、日本語、韓国語の最適なローカルモデル（中国語5つ星、日本語/韓国語4つ星）。',
            '**Mistral 7B** と **Qwen2.5 7B** はヨーロッパ言語で同等（フランス語、ドイツ語、スペイン語、イタリア語それぞれ4つ星）。',
            '**Q4_K_M量子化** はVRAM要件を75%削減し、精度損失は最小（<1%）-- ローカル展開に必須。',
            '**ローカル処理**（Ollama、llama.cpp）はAPI費用とレイテンシを排除；データ機密性とGDPR準拠に理想的。',
            'アジアなら **Qwen2.5**、ヨーロッパなら **Mistral または Qwen2.5** を選択（ハードウェア予算に基づき、7Bモデルに8GB VRAM必要）。'
          ],
        },
        whichSupport: {
          title: 'ローカルLLMはどの言語をサポートしていますか？',
          content: '全ての最新ローカルモデル（Qwen2.5、Llama 3.1、Mistral、Gemma）は最低限、話者数トップ10言語をサポート。ただしサポート品質は大きく異なる：Qwen2.5はアジア言語を支配、Mistral と Llama はヨーロッパ言語で競争。',
          columns: ['言語グループ', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          rows: [
            {
              '言語グループ': '中国語（全言語変種）',
              'Qwen2.5 7B': '★★★★★ (5.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              '言語グループ': '日本語',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              '言語グループ': '韓国語',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              '言語グループ': 'フランス語 / ドイツ語',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★★ (3.0)',
              'Mistral 7B': '★★★★ (4.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              '言語グループ': 'スペイン語 / イタリア語',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★★ (3.0)',
              'Mistral 7B': '★★★ (3.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            },
            {
              '言語グループ': 'アラビア語（MSA）',
              'Qwen2.5 7B': '★★★ (3.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)',
              'Gemma 3 9B': '★★★ (3.0)'
            }
          ]
        },
        european: {
          title: 'ヨーロッパ言語向けベストローカルLLM',
          content: 'フランス語、ドイツ語、スペイン語、イタリア語：**Mistral 7B** と **Qwen2.5 7B** は同等。Mistral はフランス語とドイツ語に優位；Qwen2.5 はスペイン語とイタリア語で若干優秀。両者とも Q4_K_M で 8GB VRAM のみ必要。日本でのMETI AI統治に続き、ヨーロッパでも地域データセキュリティを重視する傾向が強化。',
          items: [
            '**Mistral 7B for フランス語とドイツ語**：Mistral はフランス語とドイツ語の訓練データで学習、ネイティブ精度を提供。GDPR準拠と地域データ保護義務に理想的。',
            '**Qwen2.5 7B for スペイン語とイタリア語**：Qwen2.5 はロマンス言語で優れた品質。Q4_K_M 量子化で MacBook Pro M2 または標準Linux GPU でメモリ問題なし。',
            '**Llama 3.1 8B as フォールバック**：Llama 3.1 8B はヨーロッパ言語で十分（3つ星評価）だが最適でない。Qwen2.5 または Mistral が利用不可の場合のみ使用。',
            '**DACH専門家（ドイツ/オーストリア/スイス）**：ドイツ語圏企業向け：Mistral 7B はローカル処理で BSI-Grundschutz 要件を満たす。米国サーバーへのデータ転送不要。',
            '**量子化：Q4_K_M は標準**：ヨーロッパ言語の 7B モデル で常に **Q4_K_M** を使用。VRAM 要件：8GB。精度低下：fp16 比 <0.5%。',
            '**ベンチマーク：JMT-bench + MMLU**：Qwen2.5 と Mistral は MMLU（多択知識テスト）で 72-75% 精度。ドメイン固有テスト（法律、医療、金融）では 55-70% に低下。'
          ]
        },
        asian: {
          title: 'アジア言語向けベストローカルLLM',
          content: 'Qwen2.5 7B はアジア言語を圧倒的に支配。中国語、日本語、韓国語で 4-5つ星達成一方、Llama と Mistral は 1-2つ星。日本、韓国、中国の企業にとって Qwen2.5 が唯一の実用的選択肢。',
          columns: ['言語', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B'],
          rows: [
            {
              '言語': '中国語（簡体字・繁体字）',
              'Qwen2.5 7B': '★★★★★ (5.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)'
            },
            {
              '言語': '日本語（ひらがな・漢字・カタカナ）',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)'
            },
            {
              '言語': '韓国語（ハングル）',
              'Qwen2.5 7B': '★★★★ (4.0)',
              'Llama 3.1 8B': '★★ (2.0)',
              'Mistral 7B': '★ (1.0)'
            }
          ]
        },
        arabic: {
          title: 'アラビア言語サポート',
          content: 'アラビア語はローカルモデルに課題。Qwen2.5 は現代標準アラビア語（MSA）で 3つ星、Llama と Mistral は 1-2つ星のみ。方言アラビア語（エジプト、湾岸）は 7B モデルで十分にサポートされず；13B モデル または専門モデル が必要。中東企業向け：Qwen2.5 7B は最良の小規模モデル、ただしプロダクション用途では 13B モデル を推奨。'
        },
        howToBenchmark: {
          title: '多言語LLMの評価',
          content: 'MMLU と JMT-bench は英語と日本語のみを測定。真の多言語性を検証するには実タスク（目標言語でのドキュメント要約、ドメイン固有質問、文化コンテキスト化）でテスト。ベストプラクティス：',
          numberedItems: [
            '目標言語でローカルテストセット作成：20-50 の代表的質問を目標言語で作成（例：中国語、日本語）。ドメイン固有用語（医療、法律、技術）を使用。JSON ファイルに保存。',
            '4 つのモデル全てをこのテストセットに対して実行：各モデルを Q4_K_M で量子化。Ollama または llama.cpp でローカル実行。回答品質を手動またはメトリクス（グラウンドトゥルースとの類似度）で比較。',
            'レイテンシと VRAM 消費を測定：クエリあたりの推論時間と最大 VRAM 消費をログ。例：Qwen2.5 7B (Q4_K_M) on M2 Max = 400ms レイテンシ、8.2GB VRAM。',
            'ドメイン固有ベンチマークで検証：専門用途向け：日本語は JMT-bench、中国語は C-Eval、英語は MMLU を使用。結果を独自テストと組み合わせ。'
          ]
        },
        comparisonTable: {
          title: '比較表：Qwen2.5 vs Llama vs Mistral vs Gemma',
          content: '本表は言語サポートをまとめ。評価は JMT-bench（日本語）、MMLU（一般）、言語固有評価（2026）に基づく。',
          columns: ['言語グループ', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          rows: [
            {
              '言語グループ': '中国語（全言語変種）',
              'Qwen2.5 7B': '★★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              '言語グループ': '日本語',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              '言語グループ': '韓国語',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            },
            {
              '言語グループ': 'フランス語 / ドイツ語',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★★',
              'Mistral 7B': '★★★★',
              'Gemma 3 9B': '★★★'
            },
            {
              '言語グループ': 'スペイン語 / イタリア語',
              'Qwen2.5 7B': '★★★★',
              'Llama 3.1 8B': '★★★',
              'Mistral 7B': '★★★',
              'Gemma 3 9B': '★★★'
            },
            {
              '言語グループ': 'アラビア語（MSA）',
              'Qwen2.5 7B': '★★★',
              'Llama 3.1 8B': '★★',
              'Mistral 7B': '★',
              'Gemma 3 9B': '★★★'
            }
          ],
          image: 'multilingual-llm-comparison-ja.svg',
          imageCaption: '多言語LLM比較表 2026：Qwen2.5 7B はすべてのアジア言語を支配（中国語・日本語・韓国語で4-5つ星）；Mistral 7B はフランス語・ドイツ語で競争（4つ星）。評価は JMT-bench、MMLU、言語固有評価に基づく。'
        },
        commonMistakes: {
          title: '多言語LLM使用時の一般的なミス',
          faqs: [
            {
              q: 'ローカルLLMが中国語では機能するが日本語では機能しないのはなぜ？',
              a: 'おそらく Llama または Mistral を使用中。両者ともアジア言語に最適化されていない。Qwen2.5 7B に切り替え。明確に中国語、日本語、韓国語でトレーニング済み。'
            },
            {
              q: 'Q4_K_M または Q5_K_M を使うべき？',
              a: '**Q4_K_M** を使用（>12GB VRAM でない限り）。Q4_K_M は fp16 比 75% メモリ削減で <0.5% 精度損失。Q5_K_M はほぼの用途で不要。'
            },
            {
              q: '4GB VRAM で 7B モデル実行可能？',
              a: 'いいえ。Qwen2.5 7B (Q4_K_M) は最少 8GB 必須。4GB VRAM 向けは 3B モデル（Phi-3、MobileLLM）を使用。または CPU のみ推論（非常に遅い、未推奨）。'
            },
            {
              q: 'Mistral のフランス語/ドイツ語タスク品質がより高いのはなぜ？',
              a: 'Mistral はより多くのフランス語・ドイツ語訓練データを持つ。ヨーロッパ言語：Mistral と Qwen2.5 は同等。Qwen2.5 はアジア言語とロマンス言語で優秀。'
            },
            {
              q: '言語向けモデル を微調整すべき？',
              a: '言語ごとに >10,000 高品質サンプルを保有する場合のみ。多くの用途では Prompt Engineering（few-shot コンテキスト内サンプル）が費用効率的で迅速。'
            }
          ]
        },
        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'ローカルLLM とは何ですか、なぜ使うべき？',
              a: 'ローカルLLM はマシン（MacBook、Linux デスクトップ、サーバー）上で実行、クラウド API なし。利点：(1) API 費用なし、(2) プライバシー（OpenAI/Google へのアップロードなし）、(3) オフライン利用、(4) 微調整による適応。欠点：推論が遅い、モデルサイズ制限（コンシューマ向けハードウェア上最大 13B）。'
            },
            {
              q: 'Ollama または llama.cpp どちらが高速？',
              a: '速度は同等。**Ollama** は初心者向けで使い易い（CLI、Web UI）。**llama.cpp** より直接的で高性能セットアップで高速。初心者：Ollama、エキスパート：llama.cpp。'
            },
            {
              q: 'ローカルLLM実行 vs OpenAI GPT-4o のコスト比較？',
              a: 'ローカル利用（ハードウェア償却後）：$0/クエリ。GPT-4o API：$0.03/1K 入力トークン、$0.06/1K 出力トークン。月 1,000 クエリ：ローカル $0、GPT-4o $30-100。'
            },
            {
              q: 'ノート PC で 13B モデル実行可能？',
              a: 'Q4_K_M 量子化と >16GB RAM/VRAM のみ。Qwen2.5 13B (Q4_K_M)：~12GB VRAM 必須。Llama 3.1 70B：コンシューマハードで非実用的。最大互換性向け 7B モデル使用。'
            },
            {
              q: 'ローカルLLM で機密データの安全性は？',
              a: '非常に安全。ローカル実行モデルはマシンから外出しない。重要：Ollama で telemetry 無効化（`OLLAMA_NUM_PARALLEL=1` env）。企業要件：Security チーム検証。GDPR/CCPA 準拠（第三者へのデータ送信なし）。'
            },
            {
              q: 'Python コード生成向けモデル選択？',
              a: 'Qwen2.5 7B または Mistral 7B。両者とも HumanEval（Python コーディングタスク）で 85-90% 成功率。専門コードモデル：DeepSeek Coder 7B。高精度：Qwen2.5 32B（20+GB VRAM 必須）。'
            },
            {
              q: 'ローカルLLM を言語向けに微調整可能？',
              a: 'はい、ただし >5,000 高品質サンプル必須。LoRA（パラメータ効率微調整）または完全微調整使用。ツール：Ollama 拡張、llama-cpp-python、Hugging Face Transformers。多くの用途：文脈内 few-shot Prompt Engineering が費用効率的。'
            },
            {
              q: 'GGUF モデル量子化修正方法？',
              a: '`llama.cpp` の `quantize` ユーティリティ使用：`./quantize model.gguf model-q4_km.gguf Q4_K_M`。オリジナルモデル不変。量子化：モデルサイズ次第で 5-20 分。新モデル別名保存（`-q4_km` サフィックス）。'
            },
            {
              q: '大規模バッチ処理（100+クエリ）で OpenAI と競争可能？',
              a: 'レイテンシ要件：いいえ。OpenAI GPT-4o は 5-10x 高速。コスト最適化：はい、ローカル費用効率的。トレードオフ：プライバシー/オフラインはローカル、速度/精度は OpenAI。'
            },
            {
              q: 'CPU または GPU 推論選択？',
              a: '利用可能なら GPU 必須。GPU 推論は CPU 比 10-50x 高速。CPU のみセットアップ：3B 量子化モデル使用。推奨 GPU：NVIDIA（CUDA）、AMD（ROCm）、Apple（M シリーズ用 Metal）。'
            }
          ]
        },
        relatedReading: {
          title: '参考資料',
          items: [
            '[Ollama インストール：完全ガイド](/local-llms/how-to-install-ollama?lang=ja) -- 全プラットフォーム対応（macOS、Linux、Windows）。',
            '[LM Studio vs Ollama：2026 比較](/local-llms/lm-studio-vs-ollama?lang=ja) -- ローカルモデルに最良のツール？',
            '[ローカルLLM ハードウェア要件 2026](/local-llms/local-llm-hardware-guide-2026?lang=ja) -- Qwen2.5、Llama、Mistral の GPU/CPU/RAM 要件。',
            '[LLM 量子化説明：Q4_K_M vs Q5_K_M](/local-llms/llm-quantization-explained?lang=ja) -- Q4_K_M が標準な理由。',
            '[ローカルLLM セットアップトラブルシューティング](/local-llms/troubleshooting-local-llm-setup?lang=ja) -- 一般的エラーと解決策（VRAM、パス、量子化）。'
          ]
        },
        sources: {
          title: '出典',
          items: [
            '[Qwen2.5 ドキュメント](https://huggingface.co/Qwen) -- 公式モデルカード、ベンチマーク、多言語トレーニング詳細。',
            '[Llama 3.1 ベンチマーク](https://huggingface.co/meta-llama) -- Meta ドキュメント、MMLU スコア（英語、日本語）。',
            '[Mistral 7B モデルカード](https://huggingface.co/mistralai/Mistral-7B) -- トレーニング、言語サポート、ライセンス。',
            '[JMT-Benchmark（日本語）](https://github.com/nlp-waseda/jmt-bench) -- ローカルモデル向け日本語テキスト理解ベンチマーク。',
            '[Ollama ドキュメント](https://github.com/ollama/ollama) -- CLI、インストール、モデルダウンロード、ローカルLLM質問。'
          ]
        }
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=ja',
        'inLanguage': 'ja',
        'headline': 'ベスト多言語ローカルLLM 2026：Qwen2.5 vs Mistral',
        'description': '多言語ローカルLLM比較：Qwen2.5 7B はアジア言語で支配的。Mistral はヨーロッパ言語で競争。ベンチマーク、ハードウェア要件。',
        'image': 'https://www.promptquorum.com/images/multilingual-llm-comparison-ja.svg',
        'datePublished': '2025-12-10',
        'dateModified': '2026-04-11',
        'author': {
          '@type': 'Organization',
          'name': 'PromptQuorum'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        'about': [
          { '@type': 'Thing', 'name': 'Qwen2.5' },
          { '@type': 'Thing', 'name': 'Llama 3.1' },
          { '@type': 'Thing', 'name': 'Mistral 7B' },
          { '@type': 'Thing', 'name': 'Gemma 3' }
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'llama.cpp' }
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2']
        }
      },

      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'inLanguage': 'ja',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=ja',
        'name': '多言語ローカルLLM選択と利用',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': '目標言語特定',
            'text': 'モデル使用言語を決定：アジア（中国語、日本語、韓国語）、ヨーロッパ（フランス語、ドイツ語、スペイン語）、アラビア語。'
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': '言語別にモデル選択',
            'text': 'アジア言語向け Qwen2.5 7B、ヨーロッパ言語向け Mistral または Qwen2.5 選択。'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Q4_K_M で量子化',
            'text': 'GGUF モデルをダウンロードして Q4_K_M で量子化、8GB VRAM 互換性確保。'
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Ollama または llama.cpp で実行',
            'text': 'Ollama または llama.cpp でローカルモデル開始、目標言語でテスト。'
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': '品質評価',
            'text': 'ドメイン固有テスト（日本語 JMT-bench、中国語 C-Eval）で回答品質評価。'
          }
        ]
      },

      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ja',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=ja',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'ローカルLLM とは何ですか、なぜ使うべき？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ローカルLLM はマシン（MacBook、Linux デスクトップ、サーバー）上で実行、クラウド API なし。利点：(1) API 費用なし、(2) プライバシー（OpenAI/Google へのアップロードなし）、(3) オフライン利用、(4) 微調整による適応。欠点：推論が遅い、モデルサイズ制限（コンシューマ向けハードウェア上最大 13B）。'
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollama または llama.cpp どちらが高速？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '速度は同等。**Ollama** は初心者向けで使い易い（CLI、Web UI）。**llama.cpp** より直接的で高性能セットアップで高速。初心者：Ollama、エキスパート：llama.cpp。'
            }
          },
          {
            '@type': 'Question',
            'name': 'ローカルLLM実行 vs OpenAI GPT-4o のコスト比較？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ローカル利用（ハードウェア償却後）：$0/クエリ。GPT-4o API：$0.03/1K 入力トークン、$0.06/1K 出力トークン。月 1,000 クエリ：ローカル $0、GPT-4o $30-100。'
            }
          },
          {
            '@type': 'Question',
            'name': 'ノート PC で 13B モデル実行可能？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M 量子化と >16GB RAM/VRAM のみ。Qwen2.5 13B (Q4_K_M)：~12GB VRAM 必須。Llama 3.1 70B：コンシューマハードで非実用的。最大互換性向け 7B モデル使用。'
            }
          },
          {
            '@type': 'Question',
            'name': 'ローカルLLM で機密データの安全性は？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '非常に安全。ローカル実行モデルはマシンから外出しない。重要：Ollama で telemetry 無効化（`OLLAMA_NUM_PARALLEL=1` env）。企業要件：Security チーム検証。GDPR/CCPA 準拠（第三者へのデータ送信なし）。'
            }
          },
          {
            '@type': 'Question',
            'name': 'Python コード生成向けモデル選択？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen2.5 7B または Mistral 7B。両者とも HumanEval（Python コーディングタスク）で 85-90% 成功率。専門コードモデル：DeepSeek Coder 7B。高精度：Qwen2.5 32B（20+GB VRAM 必須）。'
            }
          },
          {
            '@type': 'Question',
            'name': 'ローカルLLM を言語向けに微調整可能？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい、ただし >5,000 高品質サンプル必須。LoRA（パラメータ効率微調整）または完全微調整使用。ツール：Ollama 拡張、llama-cpp-python、Hugging Face Transformers。多くの用途：文脈内 few-shot Prompt Engineering が費用効率的。'
            }
          },
          {
            '@type': 'Question',
            'name': 'GGUF モデル量子化修正方法？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`llama.cpp` の `quantize` ユーティリティ使用：`./quantize model.gguf model-q4_km.gguf Q4_K_M`。オリジナルモデル不変。量子化：モデルサイズ次第で 5-20 分。新モデル別名保存（`-q4_km` サフィックス）。'
            }
          },
          {
            '@type': 'Question',
            'name': '大規模バッチ処理（100+クエリ）で OpenAI と競争可能？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'レイテンシ要件：いいえ。OpenAI GPT-4o は 5-10x 高速。コスト最適化：はい、ローカル費用効率的。トレードオフ：プライバシー/オフラインはローカル、速度/精度は OpenAI。'
            }
          },
          {
            '@type': 'Question',
            'name': 'CPU または GPU 推論選択？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '利用可能なら GPU 必須。GPU 推論は CPU 比 10-50x 高速。CPU のみセットアップ：3B 量子化モデル使用。推奨 GPU：NVIDIA（CUDA）、AMD（ROCm）、Apple（M シリーズ用 Metal）。'
            }
          }
        ]
      },

      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'inLanguage': 'ja',
        'url': 'https://www.promptquorum.com/local-llms/multilingual-local-llms?lang=ja',
        'name': 'ローカル言語モデル向け言語比較',
        'description': 'Qwen2.5、Llama、Mistral、Gemma における中国語、日本語、韓国語、フランス語、ドイツ語、スペイン語、イタリア語、アラビア語のサポート比較。',
        'numberOfItems': 6,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': '中国語（全言語変種）',
            'description': 'Qwen2.5 7B が 5 つ星で支配；Llama と Mistral は 2 つ星未満。'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': '日本語',
            'description': 'Qwen2.5 7B が 4 つ星で最先端；Llama と Mistral は 2 つ星未満。'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': '韓国語',
            'description': 'Qwen2.5 7B が 4 つ星で最先端；Llama と Mistral は 2 つ星未満。'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'フランス語 / ドイツ語',
            'description': 'Qwen2.5 と Mistral がそれぞれ 4 つ星で競争；Llama と Gemma は 3 つ星。'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'スペイン語 / イタリア語',
            'description': 'Qwen2.5、Mistral、Gemma が 3-4 つ星；Llama は 3 つ星。'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': 'アラビア語（MSA）',
            'description': 'Qwen2.5 と Gemma が 3 つ星；Llama は 2 つ星、Mistral は 1 つ星。'
          }
        ]
      }
    },
    zh: {
      theme: '最佳模型',
      title: '多语言本地LLM：2026年非英语语言的最佳模型',
      seoTitle: '最佳多语言本地LLM 2026：Qwen2.5 vs Mistral',
      intro: 'Qwen2.5是2026年最强大的多语言本地LLM系列，支持29种语言，包括中文、日文、韩文、阿拉伯文和所有主要欧洲语言。对于欧洲语言，Mistral和Llama 3.x与Qwen2.5具有竞争力。对于亚洲语言（日语、韩语、中文），Qwen2.5在每个可比较的模型大小上都优于所有替代方案。',
      metaDescription: 'Qwen2.5在中文/日文/韩文上领先（JMT基准高15-25%）。支持29种语言本地运行。Mistral在欧洲语言具竞争力。基准对比与推荐 -- 2026年4月。',
      publishDate: '2026-04-04',
      readTime: '阅读约9分钟',
      educationalLevel: 'Beginner',
      primaryTerm: '多语言本地LLM',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '哪些本地LLM实际支持多种语言？', anchor: '#which-llms-support-multiple-languages' },
        { label: '欧洲语言的最佳模型', anchor: '#best-models-for-european-languages' },
        { label: '日语、韩语和中文的最佳模型', anchor: '#best-models-for-asian-languages' },
        { label: '阿拉伯语和中东语言的最佳模型', anchor: '#best-models-for-arabic' },
        { label: '如何对多语言质量进行基准测试', anchor: '#how-to-benchmark-multilingual-quality' },
        { label: '多语言本地LLM比较表', anchor: '#multilingual-comparison-table' },
        { label: '使用多语言模型的常见错误', anchor: '#common-mistakes' },
        { label: '常见问题', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Qwen2.5 7B** 是中文、日语、韩语的最佳本地模型（中文5星，日语/韩语4星）。',
            '**Mistral 7B** 与 **Qwen2.5 7B** 在欧洲语言上同等竞争（法语、德语、西班牙语、意大利语各4星）。',
            '**Q4_K_M量化** 将VRAM需求降低75%，精度损失最小（<1%）——本地部署的标准选择。',
            '**本地处理**（Ollama、llama.cpp）消除API费用和延迟；对数据保密性和GDPR合规性非常理想。',
            '亚洲语言选 **Qwen2.5**，欧洲语言选 **Mistral 或 Qwen2.5**（7B模型需要8GB VRAM）。'
          ],
        },
        whichSupport: {
          title: '哪些本地LLM实际支持多种语言？',
          content: '所有主流本地模型（Qwen2.5、Llama 3.1、Mistral、Gemma）至少支持前10大语言。但支持质量差异很大：Qwen2.5主导亚洲语言，Mistral和Llama在欧洲语言上具有竞争力。',
          columns: ['语言组', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          rows: [
            { '语言组': '中文（所有方言）', 'Qwen2.5 7B': '★★★★★ (5.0)', 'Llama 3.1 8B': '★★ (2.0)', 'Mistral 7B': '★ (1.0)', 'Gemma 3 9B': '★★★ (3.0)' },
            { '语言组': '日语', 'Qwen2.5 7B': '★★★★ (4.0)', 'Llama 3.1 8B': '★★ (2.0)', 'Mistral 7B': '★ (1.0)', 'Gemma 3 9B': '★★★ (3.0)' },
            { '语言组': '韩语', 'Qwen2.5 7B': '★★★★ (4.0)', 'Llama 3.1 8B': '★★ (2.0)', 'Mistral 7B': '★ (1.0)', 'Gemma 3 9B': '★★★ (3.0)' },
            { '语言组': '法语 / 德语', 'Qwen2.5 7B': '★★★★ (4.0)', 'Llama 3.1 8B': '★★★ (3.0)', 'Mistral 7B': '★★★★ (4.0)', 'Gemma 3 9B': '★★★ (3.0)' },
            { '语言组': '西班牙语 / 意大利语', 'Qwen2.5 7B': '★★★★ (4.0)', 'Llama 3.1 8B': '★★★ (3.0)', 'Mistral 7B': '★★★ (3.0)', 'Gemma 3 9B': '★★★ (3.0)' },
            { '语言组': '阿拉伯语（MSA）', 'Qwen2.5 7B': '★★★ (3.0)', 'Llama 3.1 8B': '★★ (2.0)', 'Mistral 7B': '★ (1.0)', 'Gemma 3 9B': '★★★ (3.0)' }
          ]
        },
        european: {
          title: '欧洲语言的最佳本地LLM',
          content: '法语、德语、西班牙语、意大利语：**Mistral 7B** 与 **Qwen2.5 7B** 同等竞争。Mistral在法语和德语上更具优势；Qwen2.5在西班牙语和意大利语上略优。两者在Q4_K_M量化时仅需8GB VRAM。',
          items: [
            '**Mistral 7B 适合法语和德语**：Mistral使用大量法语和德语训练数据，提供接近母语的质量。对GDPR合规和区域数据保护要求非常理想。',
            '**Qwen2.5 7B 适合西班牙语和意大利语**：Qwen2.5在罗曼语系语言上质量优秀。Q4_K_M量化在MacBook Pro M2或标准Linux GPU上运行无内存问题。',
            '**Llama 3.1 8B 作为备选**：Llama 3.1 8B在欧洲语言上表现尚可（3星评级），但非最优。仅在Qwen2.5或Mistral不可用时使用。',
            '**DACH专业用户（德国/奥地利/瑞士）**：德语企业：Mistral 7B本地运行满足BSI-Grundschutz要求，无需向美国服务器传输数据。',
            '**量化标准：Q4_K_M**：7B欧洲语言模型始终使用Q4_K_M。VRAM需求：8GB。精度下降：相比fp16 <0.5%。',
            '**基准测试：JMT-bench + MMLU**：Qwen2.5与Mistral在MMLU（多选知识测试）上达到72-75%精度。领域特定测试（法律、医疗、金融）降至55-70%。'
          ]
        },
        asian: {
          title: '日语、韩语和中文的最佳本地LLM',
          content: 'Qwen2.5 7B在亚洲语言上占据压倒性优势。中文、日语、韩语均达4-5星，而Llama和Mistral仅1-2星。对于日本、韩国、中国企业，Qwen2.5是唯一实用选择。',
          columns: ['语言', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B'],
          rows: [
            { '语言': '中文（简体和繁体）', 'Qwen2.5 7B': '★★★★★ (5.0)', 'Llama 3.1 8B': '★★ (2.0)', 'Mistral 7B': '★ (1.0)' },
            { '语言': '日语（平假名、汉字、片假名）', 'Qwen2.5 7B': '★★★★ (4.0)', 'Llama 3.1 8B': '★★ (2.0)', 'Mistral 7B': '★ (1.0)' },
            { '语言': '韩语（韩文字母）', 'Qwen2.5 7B': '★★★★ (4.0)', 'Llama 3.1 8B': '★★ (2.0)', 'Mistral 7B': '★ (1.0)' }
          ]
        },
        arabic: {
          title: '阿拉伯语支持',
          content: '阿拉伯语对本地模型是一大挑战。Qwen2.5在现代标准阿拉伯语（MSA）上获3星，Llama和Mistral仅1-2星。方言阿拉伯语（埃及、海湾）在7B模型上支持不足；需要13B或专用模型。中东企业：Qwen2.5 7B是最佳小型模型，但生产环境建议使用13B模型。'
        },
        howToBenchmark: {
          title: '如何对多语言质量进行基准测试',
          content: 'MMLU和JMT-bench仅测量英语和日语。要验证真实的多语言能力，请使用实际任务（目标语言文档摘要、领域特定问答、文化语境化）进行测试。最佳实践：',
          numberedItems: [
            '用目标语言创建本地测试集：用目标语言（如中文、日语）创建20-50个代表性问题，使用领域特定术语（医疗、法律、技术），保存为JSON文件。',
            '对所有4个模型运行此测试集：每个模型使用Q4_K_M量化，通过Ollama或llama.cpp本地运行，手动或通过指标（与标准答案的相似度）比较答案质量。',
            '测量延迟和VRAM消耗：记录每个查询的推理时间和最大VRAM消耗。示例：Qwen2.5 7B (Q4_K_M) on M2 Max = 400ms延迟，8.2GB VRAM。',
            '用领域特定基准验证：专业用途：日语用JMT-bench，中文用C-Eval，英语用MMLU。将结果与自定义测试结合。'
          ]
        },
        comparisonTable: {
          title: '多语言本地LLM对比：Qwen2.5 vs Llama vs Mistral vs Gemma',
          content: '本表汇总语言支持情况。评级基于JMT-bench（日语）、MMLU（通用）和语言特定评估（2026年）。',
          columns: ['语言组', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Mistral 7B', 'Gemma 3 9B'],
          rows: [
            { '语言组': '中文（所有方言）', 'Qwen2.5 7B': '★★★★★', 'Llama 3.1 8B': '★★', 'Mistral 7B': '★', 'Gemma 3 9B': '★★★' },
            { '语言组': '日语', 'Qwen2.5 7B': '★★★★', 'Llama 3.1 8B': '★★', 'Mistral 7B': '★', 'Gemma 3 9B': '★★★' },
            { '语言组': '韩语', 'Qwen2.5 7B': '★★★★', 'Llama 3.1 8B': '★★', 'Mistral 7B': '★', 'Gemma 3 9B': '★★★' },
            { '语言组': '法语 / 德语', 'Qwen2.5 7B': '★★★★', 'Llama 3.1 8B': '★★★', 'Mistral 7B': '★★★★', 'Gemma 3 9B': '★★★' },
            { '语言组': '西班牙语 / 意大利语', 'Qwen2.5 7B': '★★★★', 'Llama 3.1 8B': '★★★', 'Mistral 7B': '★★★', 'Gemma 3 9B': '★★★' },
            { '语言组': '阿拉伯语（MSA）', 'Qwen2.5 7B': '★★★', 'Llama 3.1 8B': '★★', 'Mistral 7B': '★', 'Gemma 3 9B': '★★★' }
          ],
          image: 'multilingual-llm-comparison-zh.svg',
          imageCaption: '多语言LLM对比2026：Qwen2.5 7B主导所有亚洲语言（中文5星，日语/韩语4星）；Mistral 7B在法语/德语上竞争（4星）。评级基于JMT-bench、MMLU及语言专项评估。'
        },
        commonMistakes: {
          title: '使用多语言本地LLM时的常见错误',
          faqs: [
            {
              q: '为什么本地LLM在中文上可以，但在日语上效果差？',
              a: '可能您正在使用Llama或Mistral——两者都没有针对亚洲语言优化。请切换到Qwen2.5 7B，它明确针对中文、日语、韩语进行了训练。'
            },
            {
              q: '应该使用Q4_K_M还是Q5_K_M？',
              a: '使用 **Q4_K_M**（除非VRAM超过12GB）。Q4_K_M相比fp16减少75%内存，精度损失<0.5%。Q5_K_M对大多数用途来说并无必要。'
            },
            {
              q: '4GB VRAM能运行7B模型吗？',
              a: '不能。Qwen2.5 7B (Q4_K_M)最少需要8GB VRAM。4GB VRAM请使用3B模型（Phi-3、MobileLLM），或仅CPU推理（非常慢，不推荐）。'
            },
            {
              q: '为什么Mistral在法语/德语任务上质量更高？',
              a: 'Mistral有更多法语和德语训练数据。欧洲语言：Mistral与Qwen2.5同等。Qwen2.5在亚洲语言和罗曼语系语言上更优秀。'
            },
            {
              q: '是否应该为特定语言微调模型？',
              a: '仅在有>10,000条高质量语言样本时才考虑。大多数用途下，提示工程（few-shot上下文内示例）更具成本效益且更快速。'
            }
          ]
        },
        faqSection: {
          id: 'faq',
          title: '多语言本地LLM常见问题',
          faqs: [
            {
              q: '什么是本地LLM，为什么要使用它？',
              a: '本地LLM在您的机器（MacBook、Linux桌面、服务器）上运行，无需云API。优点：(1) 无API费用，(2) 隐私保护（不上传至OpenAI/Google），(3) 离线使用，(4) 可通过微调适配。缺点：推理较慢，模型大小受限（消费级硬件最大约13B）。'
            },
            {
              q: 'Ollama和llama.cpp哪个更快？',
              a: '速度相当。**Ollama**更适合新手，使用简便（CLI、Web界面）。**llama.cpp**更直接，在高性能配置下更快。新手选Ollama，专家选llama.cpp。'
            },
            {
              q: '本地LLM与OpenAI GPT-4o的费用对比？',
              a: '本地使用（硬件折旧后）：0美元/查询。GPT-4o API：0.03美元/1K输入令牌，0.06美元/1K输出令牌。月均1,000次查询：本地0美元，GPT-4o约30-100美元。'
            },
            {
              q: '笔记本电脑能运行13B模型吗？',
              a: '仅限Q4_K_M量化且RAM/VRAM>16GB时。Qwen2.5 13B (Q4_K_M)需要约12GB VRAM。Llama 3.1 70B在消费级硬件上不实际。建议使用7B模型以获得最大兼容性。'
            },
            {
              q: '本地LLM处理机密数据有多安全？',
              a: '非常安全。本地运行的模型不离开您的机器。重要：在Ollama中禁用遥测（`OLLAMA_NUM_PARALLEL=1` 环境变量）。企业需求：需安全团队验证。符合GDPR/CCPA（无第三方数据传输）。'
            },
            {
              q: 'Python代码生成选哪个模型？',
              a: 'Qwen2.5 7B或Mistral 7B。两者在HumanEval（Python编程任务）上成功率均达85-90%。专用代码模型：DeepSeek Coder 7B。高精度需求：Qwen2.5 32B（需要20+GB VRAM）。'
            },
            {
              q: '可以为特定语言微调本地LLM吗？',
              a: '可以，但需要>5,000条高质量样本。使用LoRA（参数高效微调）或全量微调。工具：Ollama扩展、llama-cpp-python、Hugging Face Transformers。大多数用途：上下文内few-shot提示工程更具成本效益。'
            },
            {
              q: '如何修改GGUF模型量化？',
              a: '使用 `llama.cpp` 的 `quantize` 工具：`./quantize model.gguf model-q4_km.gguf Q4_K_M`。原始模型不变。量化时间视模型大小：5-20分钟。以新名称保存（加 `-q4_km` 后缀）。'
            },
            {
              q: '大批量处理（100+查询）能与OpenAI竞争吗？',
              a: '延迟要求：不能。OpenAI GPT-4o快5-10倍。成本优化：能，本地更具成本效益。权衡：隐私/离线选本地，速度/精度选OpenAI。'
            },
            {
              q: '选CPU还是GPU推理？',
              a: '有GPU就必须用GPU。GPU推理比CPU快10-50倍。仅CPU配置：使用3B量化模型。推荐GPU：NVIDIA（CUDA）、AMD（ROCm）、苹果（M系列Metal）。'
            }
          ]
        },
        relatedReading: {
          title: '相关阅读',
          items: [
            '[Ollama安装完整指南](/local-llms/how-to-install-ollama?lang=zh) -- 全平台支持（macOS、Linux、Windows）。',
            '[LM Studio vs Ollama：2026对比](/local-llms/lm-studio-vs-ollama?lang=zh) -- 本地模型最佳工具是哪个？',
            '[本地LLM硬件要求2026](/local-llms/local-llm-hardware-guide-2026?lang=zh) -- Qwen2.5、Llama、Mistral的GPU/CPU/RAM要求。',
            '[LLM量化解释：Q4_K_M vs Q5_K_M](/local-llms/llm-quantization-explained?lang=zh) -- 为什么Q4_K_M是标准。',
            '[本地LLM配置故障排除](/local-llms/troubleshooting-local-llm-setup?lang=zh) -- 常见错误与解决方案（VRAM、路径、量化）。'
          ]
        },
        sources: {
          title: '参考资料',
          items: [
            '[Qwen2.5文档](https://huggingface.co/Qwen) -- 官方模型卡、基准测试和多语言训练详情。',
            '[Llama 3.1基准测试](https://huggingface.co/meta-llama) -- Meta文档，MMLU分数（英语、中文）。',
            '[Mistral 7B模型卡](https://huggingface.co/mistralai/Mistral-7B) -- 训练、语言支持、许可证。',
            '[JMT基准（日语）](https://github.com/nlp-waseda/jmt-bench) -- 本地模型日语文本理解基准。',
            '[Ollama文档](https://github.com/ollama/ollama) -- CLI、安装、模型下载、本地LLM问题解答。'
          ]
        }
      },
    },
  };
