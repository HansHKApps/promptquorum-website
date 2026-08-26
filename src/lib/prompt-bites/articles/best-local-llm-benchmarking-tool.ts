import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-en.webp',
    title: 'llama-bench: The Best Tool for Benchmarking Local LLM Speed',
    seoTitle: 'llama-bench: Best Tool for Local LLM Benchmarks',
    metaDescription:
      'llama-bench, bundled with llama.cpp, is the best tool for benchmarking local LLM speed — it separates prompt-processing from generation speed.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers who want to measure and compare local LLM inference speed across hardware or quantization levels',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Use llama-bench, the benchmarking utility bundled with llama.cpp, to measure and compare local LLM speed.</strong> It reports prompt-processing speed and generation speed as two separate numbers under a fixed context length and quantization level, so results are directly comparable across hardware. For a faster, less rigorous reality check, use Ollama\'s `--verbose` output instead.',
    toc: [
      { label: 'Best Pick: llama-bench', anchor: '#best-pick' },
      { label: 'Quick Test: Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: 'Best GUI: LM Studio', anchor: '#lm-studio' },
      { label: 'Benchmark Before You Buy', anchor: '#hardware' },
      { label: 'What Makes a Benchmark Useful', anchor: '#what-to-look-for' },
      { label: 'Bottom Line', anchor: '#bottom-line' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best tool for benchmarking local LLM tokens/sec?',
        answer:
          'llama-bench, included with llama.cpp, is the best tool for benchmarking local LLM speed — it separates prompt-processing speed from generation speed under a fixed context length and quantization level. For a fast reality check on your setup, use Ollama\'s `--verbose` output instead.',
        bullets: [
          'Best overall benchmark: llama-bench — separates prompt-processing speed from generation speed, controls context length and quantization.',
          'Fastest reality check: Ollama --verbose — a rough tokens/sec reading from a normal chat reply, no separate benchmark harness needed.',
          'Best GUI option: LM Studio — a live tokens/sec readout while you test and compare models, no command line required.',
          'Best for hardware comparisons: llama-bench — the only option here built for controlled, repeatable side-by-side runs.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench is the best overall benchmarking tool — it separates prompt-processing speed from generation speed under fixed, repeatable settings',
          'Ollama\'s --verbose flag is the fastest reality check for "is my setup fast enough," not a substitute for a controlled hardware comparison',
          'LM Studio is the best GUI option for quick tests, model experimentation, and viewing live performance without the command line',
          'Keep model, quantization, and context length identical between runs — comparing mismatched settings produces a meaningless number',
          'Run multiple passes and average the result, and never trust a bare tokens/sec figure found online without its settings attached',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama-bench, bundled with llama.cpp, is the best tool for benchmarking local LLM speed because it separates prompt-processing speed from generation speed under controlled, repeatable settings.',
          },
          {
            type: 'plain-terms',
            text: 'In plain terms: llama-bench runs the same test several times at fixed settings and reports two clean speed numbers, instead of the one noisy number a normal chat session gives you.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: llama-bench',
        content: [
          '<strong>llama-bench is the right default for anyone who needs a repeatable, hardware-comparable speed number.</strong> It ships as part of llama.cpp, runs from the command line, and reports two separate figures for every test: prompt-processing speed (how fast the model reads the input) and generation speed (how fast it produces new tokens). These two numbers behave very differently under load, so a tool that combines them into a single figure is hiding half the picture.',
          'Reach for llama-bench when comparing two GPUs before a purchase, testing a new Mac or PC, comparing quantization levels, publishing results publicly, or deciding whether a hardware upgrade is worth the cost. It repeats each test automatically and reports the average, so you do not need to run it five times by hand.',
          'The most common follow-up question is what the context-length and prompt/generation-length options actually control. In short: llama-bench lets you fix how long the test prompt is and how many tokens it generates, independent of each other, so you can test a short chat-style exchange or a long document-style prompt without changing anything else about the run — that separation is what makes two results comparable in the first place.',
          'llama-bench is not a commercial product — it is a free, open-source part of the <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">llama.cpp project on GitHub</a>, included automatically whenever you build or install llama.cpp.',
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: 'Quick Reality Check: Ollama --verbose',
        content: [
          '<strong>Ollama\'s `--verbose` flag is the fastest way to check whether your setup feels fast enough — not a replacement for llama-bench.</strong> Running <code>ollama run &lt;model&gt; --verbose</code> prints a tokens/sec figure at the end of a normal chat reply, with no separate benchmark step required.',
          'The number comes from a single, uncontrolled generation, not a repeated fixed-context run, so it is noisier and not suitable for comparing two different pieces of hardware. Use it to answer "is this usable for chat right now," and use llama-bench when the answer needs to hold up against another machine.',
          'Ollama is free and open source — see the <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">Ollama site</a> for setup instructions.',
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: 'Best GUI Option: LM Studio',
        content: [
          '<strong>LM Studio is the best choice if you want a live tokens/sec readout without touching a terminal.</strong> Its chat interface shows generation speed in real time, which is convenient for quick hardware checks, model experimentation, and comparing quantizations side by side while you work.',
          'Like Ollama\'s `--verbose` flag, LM Studio\'s live readout is convenient rather than rigorous — it does not expose the run-count or context-length controls that make a llama-bench result trustworthy for a hardware-purchase decision. LM Studio has a free tier; see the <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">LM Studio site</a> for downloads.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Benchmark Before You Buy',
        content: [
          'The real question behind most benchmarking searches is not "which tool should I use," it is "which hardware should I buy." A generic tokens/sec figure from a stranger\'s post does not answer that — run the same model, quantization, and context length on both GPUs you are actually considering before deciding.',
          'Once you have real numbers from your own llama-bench runs, compare them against options in our <a href="/local-llms/best-gpus-for-local-llms">best GPUs for local LLMs</a> guide if you are staying on a desktop, our <a href="/local-llms/best-mini-pcs-local-llm">best mini PCs for local LLMs</a> guide for a compact always-on box, or our <a href="/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Apple Silicon vs. NVIDIA GPU</a> comparison if you want unified memory instead of a discrete GPU.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'What Makes a Benchmark Useful',
        content: [
          '<strong>A useful comparison holds model, quantization level, context length, and prompt content constant between runs, and reports prompt-processing speed and generation speed separately.</strong> Without those controls, a single tokens/sec figure says almost nothing about how the same setup performs on a longer prompt or a different quantization.',
          'Run several passes and average the result — a single run is skewed by thermal throttling, background processes, and cold-start model loading. Treat an unattributed tokens/sec number from a forum or social post as a rough anecdote, not a benchmark, unless the model, quantization, and context length are stated alongside it.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Bottom Line',
        content: [
          '<strong>For a serious, hardware-comparable benchmark, use llama-bench.</strong> For a quick check of your setup, use Ollama\'s `--verbose` output. For the easiest GUI experience with live performance viewing, use LM Studio. And if the real goal is deciding what to buy, benchmark the exact model and quantization you care about on both machines before you commit — then compare the winner against our <a href="/local-llms/best-gpus-for-local-llms">GPU</a>, <a href="/local-llms/best-mini-pcs-local-llm">mini PC</a>, or <a href="/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Mac</a> guides.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What do llama-bench\'s context-size and prompt/generation options control?',
            a: 'llama-bench lets you fix how many tokens are in the test prompt and how many tokens it generates, independent of the context length used for the run — so you can test a short-context scenario or a long-context scenario without changing anything else about the setup. That control over settings is what keeps two runs comparable.',
          },
          {
            q: 'Why do benchmark results vary between runs?',
            a: 'Thermal throttling, background processes, and cold-start model loading all affect single-run results. Average several runs — llama-bench does this automatically — instead of trusting one sample.',
          },
          {
            q: 'Is prompt-processing speed or generation speed more important?',
            a: 'It depends on the task. Long-document summarization is dominated by prompt-processing speed, since most of the work is reading the input. Interactive chat is dominated by generation speed, since the model produces most of its output token by token after a short prompt.',
          },
          {
            q: 'Can I compare a tokens/sec number I found online to my own hardware?',
            a: 'Only if the model, quantization level, and context length match exactly. A tokens/sec figure without those details is not comparable to your setup — treat unattributed numbers from forums or social media as rough anecdotes, not benchmarks.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-de.webp',
    title: 'llama-bench: Das beste Tool zum Benchmarking lokaler LLM-Geschwindigkeit',
    seoTitle: 'llama-bench: Bestes Benchmarking-Tool für lokale LLMs',
    metaDescription:
      'llama-bench, im Lieferumfang von llama.cpp, ist das beste Tool zum Benchmarking lokaler LLM-Geschwindigkeit — es trennt Prompt-Verarbeitung von Generierung.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die die Inferenzgeschwindigkeit lokaler LLMs über verschiedene Hardware oder Quantisierungsstufen hinweg messen und vergleichen möchten',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Nutzen Sie llama-bench, das mit llama.cpp gelieferte Benchmarking-Werkzeug, um die Geschwindigkeit lokaler LLMs zu messen und zu vergleichen.</strong> Es meldet Prompt-Verarbeitungsgeschwindigkeit und Generierungsgeschwindigkeit als zwei getrennte Werte bei fester Kontextlänge und Quantisierungsstufe, sodass Ergebnisse über verschiedene Hardware hinweg direkt vergleichbar sind. Für einen schnelleren, weniger strengen Plausibilitätscheck nutzen Sie stattdessen die `--verbose`-Ausgabe von Ollama.',
    toc: [
      { label: 'Beste Wahl: llama-bench', anchor: '#best-pick' },
      { label: 'Schnelltest: Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: 'Beste GUI: LM Studio', anchor: '#lm-studio' },
      { label: 'Benchmarken vor dem Kauf', anchor: '#hardware' },
      { label: 'Was einen Benchmark nützlich macht', anchor: '#what-to-look-for' },
      { label: 'Fazit', anchor: '#bottom-line' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste Tool zum Benchmarking der Tokens/Sek. bei lokalen LLMs?',
        answer:
          'llama-bench, im Lieferumfang von llama.cpp, ist das beste Tool zum Benchmarking der Geschwindigkeit lokaler LLMs — es trennt Prompt-Verarbeitungsgeschwindigkeit von Generierungsgeschwindigkeit bei fester Kontextlänge und Quantisierungsstufe. Für einen schnellen Plausibilitätscheck Ihres aktuellen Setups nutzen Sie stattdessen die `--verbose`-Ausgabe von Ollama.',
        bullets: [
          'Bester Benchmark insgesamt: llama-bench — trennt Prompt-Verarbeitungsgeschwindigkeit von Generierungsgeschwindigkeit, kontrolliert Kontextlänge und Quantisierung.',
          'Schnellster Plausibilitätscheck: Ollama --verbose — eine grobe Tokens/Sek.-Ablesung aus einer normalen Chat-Antwort, kein separates Benchmark-Werkzeug nötig.',
          'Beste GUI-Option: LM Studio — eine Live-Anzeige der Tokens/Sek. beim Testen und Vergleichen von Modellen, keine Kommandozeile nötig.',
          'Am besten für Hardwarevergleiche: llama-bench — die einzige Option hier, die für kontrollierte, wiederholbare Seite-an-Seite-Läufe gebaut ist.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench ist das beste Benchmarking-Tool insgesamt — es trennt Prompt-Verarbeitungsgeschwindigkeit von Generierungsgeschwindigkeit unter festen, wiederholbaren Einstellungen',
          'Die --verbose-Option von Ollama ist der schnellste Plausibilitätscheck für „ist mein Setup schnell genug", kein Ersatz für einen kontrollierten Hardwarevergleich',
          'LM Studio ist die beste GUI-Option für schnelle Tests, Modell-Experimente und das Ansehen der Live-Leistung ohne Kommandozeile',
          'Halten Sie Modell, Quantisierung und Kontextlänge zwischen Läufen identisch — der Vergleich unterschiedlicher Einstellungen ergibt eine bedeutungslose Zahl',
          'Führen Sie mehrere Durchläufe aus und mitteln Sie das Ergebnis, und vertrauen Sie niemals einer bloßen Tokens/Sek.-Zahl aus dem Internet ohne die zugehörigen Einstellungen',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama-bench, im Lieferumfang von llama.cpp, ist das beste Tool zum Benchmarking der Geschwindigkeit lokaler LLMs, weil es Prompt-Verarbeitungsgeschwindigkeit von Generierungsgeschwindigkeit unter kontrollierten, wiederholbaren Einstellungen trennt.',
          },
          {
            type: 'plain-terms',
            text: 'Einfach gesagt: llama-bench führt denselben Test mehrfach bei festen Einstellungen aus und meldet zwei saubere Geschwindigkeitswerte, statt der einen verrauschten Zahl aus einer normalen Chat-Sitzung.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: llama-bench',
        content: [
          '<strong>llama-bench ist die richtige Standardwahl für alle, die eine wiederholbare, hardwarevergleichbare Geschwindigkeitszahl benötigen.</strong> Es ist Teil von llama.cpp, läuft über die Kommandozeile und meldet für jeden Test zwei getrennte Werte: Prompt-Verarbeitungsgeschwindigkeit (wie schnell das Modell die Eingabe liest) und Generierungsgeschwindigkeit (wie schnell es neue Tokens erzeugt). Diese beiden Werte verhalten sich unter Last sehr unterschiedlich, weshalb ein Tool, das sie zu einer Zahl vermischt, das halbe Bild verbirgt.',
          'Greifen Sie zu llama-bench, wenn Sie zwei GPUs vor einem Kauf vergleichen, einen neuen Mac oder PC testen, Quantisierungsstufen vergleichen, Ergebnisse öffentlich veröffentlichen oder entscheiden, ob sich ein Hardware-Upgrade lohnt. Es wiederholt jeden Test automatisch und meldet den Durchschnitt, sodass Sie ihn nicht fünfmal von Hand ausführen müssen.',
          'Die häufigste Anschlussfrage ist, was die Optionen für Kontextlänge und Prompt-/Generierungslänge eigentlich steuern. Kurz gesagt: llama-bench lässt Sie festlegen, wie lang der Testprompt ist und wie viele Tokens er erzeugt — unabhängig voneinander —, sodass Sie ein kurzes, chat-ähnliches Szenario oder ein langes, dokumentähnliches Szenario testen können, ohne sonst etwas am Lauf zu ändern. Genau diese Trennung macht zwei Ergebnisse überhaupt erst vergleichbar.',
          'llama-bench ist kein kommerzielles Produkt — es ist ein kostenloser, quelloffener Teil des <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">llama.cpp-Projekts auf GitHub</a>, das automatisch enthalten ist, sobald Sie llama.cpp bauen oder installieren.',
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: 'Schnelltest: Ollama --verbose',
        content: [
          '<strong>Die `--verbose`-Option von Ollama ist der schnellste Weg zu prüfen, ob sich Ihr aktuelles Setup schnell genug anfühlt — kein Ersatz für llama-bench.</strong> Der Befehl <code>ollama run &lt;model&gt; --verbose</code> gibt am Ende einer normalen Chat-Antwort einen Tokens/Sek.-Wert aus, ohne dass ein separater Benchmark-Schritt nötig ist.',
          'Der Wert stammt aus einer einzelnen, unkontrollierten Generierung, nicht aus einem wiederholten Lauf mit festem Kontext, und ist daher verrauschter und nicht geeignet, um zwei unterschiedliche Hardware-Konfigurationen zu vergleichen. Nutzen Sie ihn, um „ist das gerade für Chat nutzbar" zu beantworten, und llama-bench, wenn die Antwort einem Vergleich mit einer anderen Maschine standhalten muss.',
          'Ollama ist kostenlos und quelloffen — Installationshinweise finden Sie auf der <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">Ollama-Website</a>.',
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: 'Beste GUI-Option: LM Studio',
        content: [
          '<strong>LM Studio ist die beste Wahl, wenn Sie eine Live-Anzeige der Tokens/Sek. wollen, ohne ein Terminal zu öffnen.</strong> Die Chat-Oberfläche zeigt die Generierungsgeschwindigkeit in Echtzeit an, was praktisch ist für schnelle Hardware-Checks, Modell-Experimente und den Vergleich von Quantisierungen nebeneinander während der Arbeit.',
          'Wie die `--verbose`-Option von Ollama ist die Live-Anzeige von LM Studio praktisch, aber nicht streng — sie bietet nicht die Kontrolle über Laufanzahl oder Kontextlänge, die ein llama-bench-Ergebnis für eine Hardware-Kaufentscheidung vertrauenswürdig machen. LM Studio hat eine kostenlose Stufe; Downloads finden Sie auf der <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">LM-Studio-Website</a>.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Benchmarken vor dem Kauf',
        content: [
          'Die eigentliche Frage hinter den meisten Benchmarking-Suchen lautet nicht „welches Tool soll ich nutzen", sondern „welche Hardware soll ich kaufen". Eine allgemeine Tokens/Sek.-Zahl aus einem fremden Forenbeitrag beantwortet das nicht — führen Sie dasselbe Modell, dieselbe Quantisierung und dieselbe Kontextlänge auf beiden GPUs aus, die Sie tatsächlich in Betracht ziehen, bevor Sie entscheiden.',
          'Sobald Sie echte Zahlen aus Ihren eigenen llama-bench-Läufen haben, vergleichen Sie diese mit den Optionen in unserem Ratgeber <a href="/de/local-llms/best-gpus-for-local-llms">Beste GPUs für lokale LLMs</a>, wenn Sie beim Desktop bleiben, unserem Ratgeber <a href="/de/local-llms/best-mini-pcs-local-llm">Beste Mini-PCs für lokale LLMs</a> für eine kompakte Dauerlösung, oder unserem Ratgeber <a href="/de/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Apple Silicon vs. NVIDIA-GPU</a>-Vergleich, wenn Sie Unified Memory statt einer diskreten GPU wollen.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'Was einen Benchmark nützlich macht',
        content: [
          '<strong>Ein nützlicher Vergleich hält Modell, Quantisierungsstufe, Kontextlänge und Prompt-Inhalt zwischen Läufen konstant und meldet Prompt-Verarbeitungsgeschwindigkeit und Generierungsgeschwindigkeit getrennt.</strong> Ohne diese Kontrollen sagt eine einzelne Tokens/Sek.-Zahl fast nichts darüber aus, wie dasselbe Setup bei einem längeren Prompt oder einer anderen Quantisierung abschneidet.',
          'Führen Sie mehrere Durchläufe aus und mitteln Sie das Ergebnis — ein einzelner Lauf wird durch thermisches Throttling, Hintergrundprozesse und Kaltstart-Ladezeiten verzerrt. Behandeln Sie eine nicht zugeordnete Tokens/Sek.-Zahl aus einem Forum oder Social-Media-Beitrag als grobe Anekdote, nicht als Benchmark, sofern nicht Modell, Quantisierung und Kontextlänge dabeistehen.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Fazit',
        content: [
          '<strong>Für einen ernsthaften, hardwarevergleichbaren Benchmark nutzen Sie llama-bench.</strong> Für einen schnellen Check Ihres aktuellen Setups nutzen Sie die `--verbose`-Ausgabe von Ollama. Für die einfachste GUI-Erfahrung mit Live-Leistungsanzeige nutzen Sie LM Studio. Und wenn es im Kern um eine Kaufentscheidung geht, benchmarken Sie das genaue Modell und die Quantisierung, die Ihnen wichtig sind, auf beiden Maschinen, bevor Sie sich festlegen — vergleichen Sie den Sieger dann mit unseren Ratgebern zu <a href="/de/local-llms/best-gpus-for-local-llms">GPU</a>, <a href="/de/local-llms/best-mini-pcs-local-llm">Mini-PC</a> oder <a href="/de/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Mac</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was steuern die Optionen für Kontextgröße und Prompt/Generierung bei llama-bench?',
            a: 'llama-bench lässt Sie festlegen, wie viele Tokens der Testprompt enthält und wie viele Tokens erzeugt werden — unabhängig von der für den Lauf genutzten Kontextlänge —, sodass Sie ein Szenario mit kurzem oder langem Kontext testen können, ohne sonst etwas am Setup zu ändern. Genau diese Kontrolle über die Einstellungen hält zwei Läufe vergleichbar.',
          },
          {
            q: 'Warum variieren Benchmark-Ergebnisse zwischen den Läufen?',
            a: 'Thermisches Throttling, Hintergrundprozesse und Kaltstart-Ladezeiten des Modells beeinflussen alle Einzellaufergebnisse. Mitteln Sie mehrere Läufe — llama-bench macht das automatisch — statt einer einzelnen Stichprobe zu vertrauen.',
          },
          {
            q: 'Ist die Prompt-Verarbeitungsgeschwindigkeit oder die Generierungsgeschwindigkeit wichtiger?',
            a: 'Das hängt von der Aufgabe ab. Die Zusammenfassung langer Dokumente wird von der Prompt-Verarbeitungsgeschwindigkeit dominiert, da der Großteil der Arbeit im Lesen der Eingabe besteht. Interaktiver Chat wird von der Generierungsgeschwindigkeit dominiert, da das Modell die meiste Ausgabe Token für Token nach einem kurzen Prompt erzeugt.',
          },
          {
            q: 'Kann ich eine online gefundene Tokens/Sek.-Zahl mit meiner eigenen Hardware vergleichen?',
            a: 'Nur, wenn Modell, Quantisierungsstufe und Kontextlänge exakt übereinstimmen. Eine Tokens/Sek.-Zahl ohne diese Angaben ist mit Ihrem Setup nicht vergleichbar — behandeln Sie nicht zugeordnete Zahlen aus Foren oder sozialen Medien als grobe Anekdoten, nicht als Benchmarks.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-fr.webp',
    title: "llama-bench : le meilleur outil pour mesurer la vitesse d'un LLM local",
    seoTitle: "llama-bench : meilleur outil de benchmark pour LLM local",
    metaDescription:
      "llama-bench, fourni avec llama.cpp, est le meilleur outil pour mesurer la vitesse d'un LLM local — il sépare le traitement du prompt de la génération.",
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Développeurs souhaitant mesurer et comparer la vitesse d'inférence de LLM locaux selon le matériel ou le niveau de quantification",
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      "<strong>Utilisez llama-bench, l'outil de benchmark fourni avec llama.cpp, pour mesurer et comparer la vitesse d'un LLM local.</strong> Il indique la vitesse de traitement du prompt et la vitesse de génération sous forme de deux chiffres distincts, à longueur de contexte et niveau de quantification fixes, ce qui rend les résultats directement comparables entre configurations matérielles. Pour une vérification plus rapide mais moins rigoureuse, utilisez plutôt la sortie `--verbose` d'Ollama.",
    toc: [
      { label: 'Meilleur choix : llama-bench', anchor: '#best-pick' },
      { label: 'Test rapide : Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: 'Meilleure interface : LM Studio', anchor: '#lm-studio' },
      { label: "Benchmarker avant d'acheter", anchor: '#hardware' },
      { label: "Ce qui rend un benchmark utile", anchor: '#what-to-look-for' },
      { label: 'Conclusion', anchor: '#bottom-line' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      fr: {
        question: "Quel est le meilleur outil pour le benchmark des tokens/sec d'un LLM local ?",
        answer:
          "llama-bench, inclus avec llama.cpp, est le meilleur outil pour mesurer la vitesse d'un LLM local — il sépare la vitesse de traitement du prompt de la vitesse de génération à longueur de contexte et niveau de quantification fixes. Pour une vérification rapide de votre configuration actuelle, utilisez plutôt la sortie `--verbose` d'Ollama.",
        bullets: [
          "Meilleur benchmark global : llama-bench — sépare la vitesse de traitement du prompt de la vitesse de génération, contrôle la longueur de contexte et la quantification.",
          "Vérification la plus rapide : Ollama --verbose — un chiffre approximatif de tokens/sec issu d'une réponse de chat normale, sans dispositif de benchmark séparé.",
          "Meilleure interface graphique : LM Studio — un affichage en direct des tokens/sec pendant que vous testez et comparez des modèles, sans ligne de commande.",
          "Meilleur pour les comparaisons matérielles : llama-bench — la seule option ici conçue pour des exécutions côte à côte, contrôlées et reproductibles.",
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "llama-bench est le meilleur outil de benchmark dans l'ensemble — il sépare la vitesse de traitement du prompt de la vitesse de génération sous des paramètres fixes et reproductibles",
          "L'option --verbose d'Ollama est la vérification la plus rapide pour savoir si votre configuration est assez rapide, pas un substitut à une comparaison matérielle contrôlée",
          "LM Studio est la meilleure interface graphique pour des tests rapides, l'expérimentation de modèles et l'affichage des performances en direct sans ligne de commande",
          "Gardez le modèle, la quantification et la longueur de contexte identiques entre les exécutions — comparer des paramètres différents produit un chiffre dénué de sens",
          "Effectuez plusieurs passages et faites la moyenne du résultat, et ne faites jamais confiance à un chiffre de tokens/sec trouvé en ligne sans ses paramètres associés",
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "llama-bench, fourni avec llama.cpp, est le meilleur outil pour mesurer la vitesse d'un LLM local car il sépare la vitesse de traitement du prompt de la vitesse de génération sous des paramètres contrôlés et reproductibles.",
          },
          {
            type: 'plain-terms',
            text: "En termes simples : llama-bench exécute le même test plusieurs fois avec des paramètres fixes et indique deux chiffres de vitesse nets, au lieu du chiffre bruité d'une session de chat normale.",
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : llama-bench',
        content: [
          "<strong>llama-bench est le choix par défaut pour quiconque a besoin d'un chiffre de vitesse reproductible et comparable entre configurations matérielles.</strong> Il fait partie de llama.cpp, s'exécute en ligne de commande et indique deux chiffres distincts pour chaque test : la vitesse de traitement du prompt (la rapidité avec laquelle le modèle lit l'entrée) et la vitesse de génération (la rapidité avec laquelle il produit de nouveaux tokens). Ces deux chiffres se comportent très différemment sous charge, donc un outil qui les combine en un seul chiffre cache la moitié de l'image.",
          "Utilisez llama-bench pour comparer deux GPU avant un achat, tester un nouveau Mac ou PC, comparer des niveaux de quantification, publier des résultats, ou décider si une mise à niveau matérielle en vaut la peine. Il répète chaque test automatiquement et indique la moyenne, vous n'avez donc pas besoin de l'exécuter cinq fois à la main.",
          "La question la plus fréquente concerne ce que contrôlent réellement les options de longueur de contexte et de longueur de prompt/génération. En bref : llama-bench vous permet de fixer la longueur du prompt de test et le nombre de tokens générés, indépendamment l'un de l'autre, afin de tester un échange court de type chat ou un prompt long de type document sans changer quoi que ce soit d'autre dans l'exécution — c'est cette séparation qui rend deux résultats comparables.",
          "llama-bench n'est pas un produit commercial — c'est un composant gratuit et open source du <a href=\"https://github.com/ggml-org/llama.cpp\" rel=\"nofollow noopener noreferrer\" target=\"_blank\" onclick=\"try{window.umami&&window.umami.track('outbound_click',{product_name:'llama.cpp',source_page:window.location.pathname,language:'fr'})}catch(e){}\" class=\"text-primary hover:underline\">projet llama.cpp sur GitHub</a>, inclus automatiquement dès que vous compilez ou installez llama.cpp.",
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: 'Test rapide : Ollama --verbose',
        content: [
          "<strong>L'option `--verbose` d'Ollama est le moyen le plus rapide de vérifier si votre configuration actuelle est suffisamment rapide — pas un remplacement pour llama-bench.</strong> La commande <code>ollama run &lt;model&gt; --verbose</code> affiche un chiffre de tokens/sec à la fin d'une réponse de chat normale, sans étape de benchmark séparée.",
          "Le chiffre provient d'une seule génération non contrôlée, pas d'une exécution répétée à contexte fixe, il est donc plus bruité et inadapté pour comparer deux matériels différents. Utilisez-le pour répondre à « est-ce utilisable pour du chat en ce moment », et llama-bench quand la réponse doit tenir face à une autre machine.",
          "Ollama est gratuit et open source — consultez le <a href=\"https://ollama.com\" rel=\"nofollow noopener noreferrer\" target=\"_blank\" onclick=\"try{window.umami&&window.umami.track('outbound_click',{product_name:'Ollama',source_page:window.location.pathname,language:'fr'})}catch(e){}\" class=\"text-primary hover:underline\">site d'Ollama</a> pour les instructions d'installation.",
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: 'Meilleure interface graphique : LM Studio',
        content: [
          "<strong>LM Studio est le meilleur choix si vous voulez un affichage en direct des tokens/sec sans toucher à un terminal.</strong> Son interface de chat affiche la vitesse de génération en temps réel, ce qui est pratique pour des vérifications matérielles rapides, l'expérimentation de modèles et la comparaison de quantifications côte à côte pendant le travail.",
          "Comme l'option `--verbose` d'Ollama, l'affichage en direct de LM Studio est pratique plutôt que rigoureux — il n'offre pas les contrôles de nombre d'exécutions ou de longueur de contexte qui rendent un résultat llama-bench fiable pour une décision d'achat matériel. LM Studio propose un niveau gratuit ; téléchargements sur le <a href=\"https://lmstudio.ai\" rel=\"nofollow noopener noreferrer\" target=\"_blank\" onclick=\"try{window.umami&&window.umami.track('outbound_click',{product_name:'LM Studio',source_page:window.location.pathname,language:'fr'})}catch(e){}\" class=\"text-primary hover:underline\">site de LM Studio</a>.",
        ],
      },
      hardware: {
        id: 'hardware',
        title: "Benchmarker avant d'acheter",
        content: [
          "La vraie question derrière la plupart des recherches de benchmark n'est pas « quel outil utiliser », mais « quel matériel acheter ». Un chiffre générique de tokens/sec issu du post d'un inconnu n'y répond pas — exécutez le même modèle, la même quantification et la même longueur de contexte sur les deux GPU que vous envisagez réellement avant de décider.",
          "Une fois que vous avez de vrais chiffres issus de vos propres exécutions llama-bench, comparez-les aux options de notre guide <a href=\"/fr/local-llms/best-gpus-for-local-llms\">meilleurs GPU pour LLM locaux</a> si vous restez sur un poste fixe, notre guide <a href=\"/fr/local-llms/best-mini-pcs-local-llm\">meilleurs mini-PC pour LLM locaux</a> pour un boîtier compact toujours allumé, ou notre guide <a href=\"/fr/local-llms/apple-silicon-vs-nvidia-gpu-local-llm\">comparatif Apple Silicon vs GPU NVIDIA</a> si vous voulez de la mémoire unifiée plutôt qu'un GPU discret.",
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'Ce qui rend un benchmark utile',
        content: [
          "<strong>Une comparaison utile maintient constants le modèle, le niveau de quantification, la longueur de contexte et le contenu du prompt entre les exécutions, et indique séparément la vitesse de traitement du prompt et la vitesse de génération.</strong> Sans ces contrôles, un chiffre unique de tokens/sec ne dit presque rien sur la performance de la même configuration avec un prompt plus long ou une quantification différente.",
          "Effectuez plusieurs passages et faites la moyenne du résultat — une seule exécution est faussée par le throttling thermique, les processus en arrière-plan et le chargement à froid du modèle. Traitez un chiffre de tokens/sec non attribué issu d'un forum ou d'un réseau social comme une anecdote approximative, pas comme un benchmark, sauf si le modèle, la quantification et la longueur de contexte sont précisés.",
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Conclusion',
        content: [
          "<strong>Pour un benchmark sérieux et comparable entre matériels, utilisez llama-bench.</strong> Pour une vérification rapide de votre configuration actuelle, utilisez la sortie `--verbose` d'Ollama. Pour l'expérience d'interface graphique la plus simple avec affichage des performances en direct, utilisez LM Studio. Et si l'objectif réel est de décider quoi acheter, benchmarkez le modèle et la quantification exacts qui vous intéressent sur les deux machines avant de vous engager — puis comparez le gagnant à nos guides <a href=\"/fr/local-llms/best-gpus-for-local-llms\">GPU</a>, <a href=\"/fr/local-llms/best-mini-pcs-local-llm\">mini-PC</a> ou <a href=\"/fr/local-llms/apple-silicon-vs-nvidia-gpu-local-llm\">Mac</a>.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Que contrôlent les options de taille de contexte et de prompt/génération de llama-bench ?',
            a: "llama-bench vous permet de fixer le nombre de tokens du prompt de test et le nombre de tokens générés, indépendamment de la longueur de contexte utilisée pour l'exécution — ce qui permet de tester un scénario à contexte court ou long sans rien changer d'autre à la configuration. C'est ce contrôle des paramètres qui garde deux exécutions comparables.",
          },
          {
            q: "Pourquoi les résultats de benchmark varient-ils d'une exécution à l'autre ?",
            a: "Le throttling thermique, les processus en arrière-plan et le chargement à froid du modèle affectent tous les résultats d'une seule exécution. Faites la moyenne de plusieurs exécutions — llama-bench le fait automatiquement — plutôt que de vous fier à un seul échantillon.",
          },
          {
            q: 'La vitesse de traitement du prompt ou la vitesse de génération est-elle la plus importante ?',
            a: "Cela dépend de la tâche. Le résumé de longs documents est dominé par la vitesse de traitement du prompt, car l'essentiel du travail consiste à lire l'entrée. Le chat interactif est dominé par la vitesse de génération, car le modèle produit l'essentiel de sa sortie token par token après un prompt court.",
          },
          {
            q: 'Puis-je comparer un chiffre de tokens/sec trouvé en ligne à mon propre matériel ?',
            a: "Seulement si le modèle, le niveau de quantification et la longueur de contexte correspondent exactement. Un chiffre de tokens/sec sans ces détails n'est pas comparable à votre configuration — traitez les chiffres non attribués issus de forums ou de réseaux sociaux comme des anecdotes approximatives, pas des benchmarks.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-ja.webp',
    title: 'llama-bench:ローカルLLMの速度をベンチマークする最良のツール',
    seoTitle: 'llama-bench:ローカルLLMベンチマーク最良ツール',
    metaDescription:
      'llama.cppに同梱されるllama-benchは、ローカルLLMの速度をベンチマークする最良のツールです。プロンプト処理と生成速度を分けて測定し、正確なハードウェア比較ができます。',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ハードウェアや量子化レベルの違いによるローカルLLMの推論速度を測定・比較したい開発者',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>ローカルLLMの速度を測定・比較するには、llama.cppに同梱されるベンチマークツールllama-benchを使ってください。</strong>固定したコンテキスト長と量子化レベルの下で、プロンプト処理速度と生成速度を二つの別々の数値として報告するため、異なるハードウェア間で結果を直接比較できます。より手早く、厳密さに欠ける確認をしたい場合は、代わりにOllamaの`--verbose`出力を使ってください。',
    toc: [
      { label: 'ベストピック:llama-bench', anchor: '#best-pick' },
      { label: 'クイックテスト:Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: '最良のGUI:LM Studio', anchor: '#lm-studio' },
      { label: '購入前にベンチマークする', anchor: '#hardware' },
      { label: 'ベンチマークを有用にする条件', anchor: '#what-to-look-for' },
      { label: 'まとめ', anchor: '#bottom-line' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMのトークン/秒をベンチマークする最良のツールは?',
        answer:
          'llama.cppに含まれるllama-benchが、ローカルLLMの速度をベンチマークする最良のツールです。固定したコンテキスト長と量子化レベルの下でプロンプト処理速度と生成速度を分けて報告するため、異なるハードウェア間で結果を比較できます。現在のセットアップの手早い確認には、代わりにOllamaの`--verbose`出力を使ってください。',
        bullets: [
          '総合ベストベンチマーク:llama-bench — プロンプト処理速度と生成速度を分離し、コンテキスト長と量子化を制御します。',
          '最速の確認方法:Ollama --verbose — 通常のチャット応答から得られる大まかなトークン/秒の値で、別途ベンチマーク環境は不要です。',
          '最良のGUIオプション:LM Studio — モデルのテスト・比較中にトークン/秒をリアルタイム表示、コマンドライン不要。',
          'ハードウェア比較に最適:llama-bench — このリストの中で唯一、制御された再現可能な並列比較のために作られています。',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-benchは総合的に最良のベンチマークツールで、固定・再現可能な設定下でプロンプト処理速度と生成速度を分離します',
          'Ollamaの--verboseフラグは「自分のセットアップは十分速いか」を確かめる最速の方法であり、制御されたハードウェア比較の代わりにはなりません',
          'LM Studioはコマンドラインなしで素早いテスト・モデル実験・リアルタイム性能確認ができる最良のGUIオプションです',
          'モデル・量子化・コンテキスト長は実行間で必ず同一に保ってください。設定が異なる比較は無意味な数値になります',
          '複数回実行して平均を取ってください。設定が付随しないネット上の生のトークン/秒の数値は決して信用しないでください',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama.cppに同梱されるllama-benchは、制御された再現可能な設定下でプロンプト処理速度と生成速度を分離できるため、ローカルLLMの速度をベンチマークする最良のツールです。',
          },
          {
            type: 'plain-terms',
            text: '簡単に言うと:llama-benchは同じテストを固定設定で複数回実行し、通常のチャットセッションから得られるノイズの多い1つの数値ではなく、2つの明確な速度数値を報告します。',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック:llama-bench',
        content: [
          '<strong>llama-benchは、再現可能でハードウェア間比較が可能な速度数値を必要とするすべての人にとって適切な既定の選択です。</strong>llama.cppの一部として提供され、コマンドラインから実行し、テストごとに2つの別々の数値を報告します。プロンプト処理速度(モデルが入力をどれだけ速く読むか)と生成速度(新しいトークンをどれだけ速く生成するか)です。この2つの数値は負荷のかかり方が大きく異なるため、両者を1つの数値に混ぜるツールは全体像の半分を隠してしまいます。',
          '購入前に2枚のGPUを比較する場合、新しいMacやPCをテストする場合、量子化レベルを比較する場合、結果を公開する場合、ハードウェアのアップグレードが見合うか判断する場合にllama-benchを使ってください。各テストを自動的に繰り返し平均を報告するため、手動で5回実行する必要はありません。',
          '最もよくある追加の質問は、コンテキスト長やプロンプト/生成長のオプションが実際に何を制御するかです。簡単に言うと、llama-benchではテストプロンプトの長さと生成するトークン数を互いに独立して固定できるため、短いチャット的なやり取りでも長いドキュメント的なプロンプトでも、他の設定を一切変えずにテストできます。この分離があるからこそ、2つの結果を初めて比較できるのです。',
          'llama-benchは商用製品ではありません。<a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">GitHub上のllama.cppプロジェクト</a>の無料でオープンソースな一部であり、llama.cppをビルドまたはインストールすれば自動的に含まれます。',
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: 'クイックテスト:Ollama --verbose',
        content: [
          '<strong>Ollamaの`--verbose`フラグは、現在のセットアップが十分速く感じられるかを確認する最速の方法です。llama-benchの代わりにはなりません。</strong><code>ollama run &lt;model&gt; --verbose</code>を実行すると、通常のチャット応答の末尾にトークン/秒の値が表示され、別途ベンチマークの手順は不要です。',
          'この数値は単一の制御されていない生成から得られたものであり、繰り返しの固定コンテキスト実行ではないため、ノイズが多く、2つの異なるハードウェアを比較する用途には向きません。「今これはチャットに使えるか」を確認するにはこれを使い、「別のマシンと比較しても通用する答えが必要」な場合はllama-benchを使ってください。',
          'Ollamaは無料でオープンソースです。セットアップ手順は<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Ollama公式サイト</a>をご覧ください。',
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: '最良のGUIオプション:LM Studio',
        content: [
          '<strong>ターミナルを使わずにトークン/秒をリアルタイム表示したいなら、LM Studioが最良の選択です。</strong>チャットインターフェースで生成速度をリアルタイム表示するため、素早いハードウェアチェック、モデル実験、作業中の量子化の並列比較に便利です。',
          'Ollamaの`--verbose`フラグと同様、LM Studioのリアルタイム表示は便利ではありますが厳密ではありません。ハードウェア購入の判断でllama-benchの結果を信頼できるものにする、実行回数やコンテキスト長の制御は提供していません。LM Studioには無料プランがあります。ダウンロードは<a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">LM Studio公式サイト</a>から。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '購入前にベンチマークする',
        content: [
          'ベンチマーク関連の検索の大半で本当に知りたいのは「どのツールを使うべきか」ではなく「どのハードウェアを買うべきか」です。見知らぬ人の投稿にある一般的なトークン/秒の数値ではそれに答えられません。決める前に、実際に検討している両方のGPUで同じモデル・量子化・コンテキスト長を実行してください。',
          '自分のllama-bench実行から実際の数値が得られたら、デスクトップにとどまるなら<a href="/ja/local-llms/best-gpus-for-local-llms">ローカルLLM向けベストGPU</a>ガイド、コンパクトな常時稼働機なら<a href="/ja/local-llms/best-mini-pcs-local-llm">ローカルLLM向けベストミニPC</a>ガイド、ディスクリートGPUの代わりにユニファイドメモリが欲しいなら<a href="/ja/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Apple SiliconとNVIDIA GPUの比較</a>記事の選択肢と比較してください。',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'ベンチマークを有用にする条件',
        content: [
          '<strong>有用な比較は、実行間でモデル・量子化レベル・コンテキスト長・プロンプト内容を一定に保ち、プロンプト処理速度と生成速度を別々に報告します。</strong>これらの制御がなければ、単一のトークン/秒の数値は、同じ構成がより長いプロンプトや異なる量子化でどう動作するかについてほとんど何も教えてくれません。',
          '複数回実行して結果を平均してください。単一の実行は熱によるスロットリング、バックグラウンドプロセス、モデルのコールドスタート読み込みの影響を受けます。モデル・量子化・コンテキスト長が併記されていない限り、フォーラムやSNSの出典が不明なトークン/秒の数値は、ベンチマークではなく大まかな体験談として扱ってください。',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'まとめ',
        content: [
          '<strong>本格的でハードウェア間比較が可能なベンチマークにはllama-benchを使ってください。</strong>現在のセットアップの手早い確認にはOllamaの`--verbose`出力を、リアルタイム性能表示付きの最も簡単なGUI体験にはLM Studioを使ってください。そして本当の目的が購入の判断であるなら、決断する前に、気になっているまさにそのモデルと量子化を両方のマシンでベンチマークし、勝者を<a href="/ja/local-llms/best-gpus-for-local-llms">GPU</a>、<a href="/ja/local-llms/best-mini-pcs-local-llm">ミニPC</a>、<a href="/ja/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Mac</a>の各ガイドと比較してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'llama-benchのコンテキストサイズやプロンプト/生成のオプションは何を制御しますか?',
            a: 'llama-benchでは、実行に使うコンテキスト長とは独立して、テストプロンプトのトークン数と生成するトークン数を固定できます。そのため、他の設定を変えずに短いコンテキストのシナリオや長いコンテキストのシナリオをテストできます。この設定の制御こそが、2つの実行を比較可能にする理由です。',
          },
          {
            q: 'なぜベンチマーク結果は実行ごとに変動するのですか?',
            a: '熱によるスロットリング、バックグラウンドプロセス、モデルのコールドスタート読み込みはすべて単一実行の結果に影響します。単一のサンプルを信用するのではなく、複数回の実行を平均してください(llama-benchはこれを自動的に行います)。',
          },
          {
            q: 'プロンプト処理速度と生成速度、どちらがより重要ですか?',
            a: 'タスクによります。長文ドキュメントの要約はプロンプト処理速度に支配されます。作業の大部分が入力を読む処理だからです。対話型チャットは生成速度に支配されます。短いプロンプトの後、モデルが出力の大部分をトークンごとに生成するためです。',
          },
          {
            q: 'オンラインで見つけたトークン/秒の数値を自分のハードウェアと比較できますか?',
            a: 'モデル・量子化レベル・コンテキスト長が完全に一致する場合に限ります。これらの詳細が付随しないトークン/秒の数値は自分の構成と比較できません。フォーラムやSNSで出典が不明な数値は、ベンチマークではなく大まかな体験談として扱ってください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-zh.webp',
    title: 'llama-bench:衡量本地LLM速度的最佳工具',
    seoTitle: 'llama-bench:本地LLM基准测试最佳工具',
    metaDescription:
      'llama-bench随llama.cpp附带,是衡量本地LLM速度的最佳工具——它将提示词处理速度与生成速度分开测量,便于进行精确的硬件对比。',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '希望在不同硬件或量化级别下测量并比较本地LLM推理速度的开发者',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>使用随llama.cpp附带的基准测试工具llama-bench来测量和比较本地LLM速度。</strong>它在固定上下文长度和量化级别下,将提示词处理速度和生成速度报告为两个独立的数值,使结果在不同硬件之间可以直接比较。若想要更快但不够严谨的实际检查,可改用Ollama的`--verbose`输出。',
    toc: [
      { label: '最佳选择:llama-bench', anchor: '#best-pick' },
      { label: '快速测试:Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: '最佳图形界面:LM Studio', anchor: '#lm-studio' },
      { label: '购买前先做基准测试', anchor: '#hardware' },
      { label: '什么才是有用的基准测试', anchor: '#what-to-look-for' },
      { label: '结论', anchor: '#bottom-line' },
      { label: '常见问题', anchor: '#faq' },
    ],
    quickAnswerTop: {
      zh: {
        question: '衡量本地LLM每秒token数的最佳工具是什么?',
        answer:
          'llama-bench随llama.cpp附带,是衡量本地LLM速度的最佳工具——它在固定上下文长度和量化级别下,分别报告提示词处理速度和生成速度。若想快速检查当前配置,可改用Ollama的`--verbose`输出。',
        bullets: [
          '综合最佳基准工具:llama-bench——将提示词处理速度与生成速度分离,控制上下文长度和量化。',
          '最快的实际检查:Ollama --verbose——从普通聊天回复中获得大致的每秒token数,无需单独的基准测试工具。',
          '最佳图形界面选择:LM Studio——测试和比较模型时实时显示每秒token数,无需命令行。',
          '最适合硬件对比:llama-bench——这里唯一为受控、可重复的并排测试而设计的选项。',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench是综合最佳的基准测试工具——在固定、可重复的设置下将提示词处理速度与生成速度分离',
          'Ollama的--verbose标志是检查"我的配置是否够快"最快的方式,但不能替代受控的硬件对比',
          'LM Studio是无需命令行即可快速测试、体验模型、实时查看性能的最佳图形界面选择',
          '在多次运行之间保持模型、量化和上下文长度一致——比较不同设置只会得到毫无意义的数字',
          '多次运行并取平均值,切勿相信网上找到的、没有附带设置信息的每秒token数字',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama-bench随llama.cpp附带,是衡量本地LLM速度的最佳工具,因为它能在受控、可重复的设置下将提示词处理速度与生成速度分开。',
          },
          {
            type: 'plain-terms',
            text: '简单来说:llama-bench在固定设置下多次运行同一测试,报告两个清晰的速度数值,而不是普通聊天会话中一个嘈杂的数字。',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择:llama-bench',
        content: [
          '<strong>对于任何需要可重复、可跨硬件比较的速度数值的人来说,llama-bench都是正确的默认选择。</strong>它是llama.cpp的一部分,通过命令行运行,并为每次测试报告两个独立数值:提示词处理速度(模型读取输入的速度)和生成速度(模型生成新token的速度)。这两个数值在负载下的表现差异很大,因此把它们合并成一个数字的工具只能给你看到一半的画面。',
          '在购买前比较两块GPU、测试新的Mac或PC、比较量化级别、公开发布结果,或判断硬件升级是否值得时,都应使用llama-bench。它会自动重复每次测试并报告平均值,你无需手动运行五次。',
          '最常见的后续问题是上下文长度以及提示词/生成长度选项到底控制什么。简而言之:llama-bench可以让你分别固定测试提示词的长度和生成的token数量,因此你可以在不改变其他任何设置的情况下,测试类似聊天的短场景或类似文档的长场景——正是这种分离才让两次结果具备可比性。',
          'llama-bench不是商业产品——它是<a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">GitHub上llama.cpp项目</a>的一个免费开源组成部分,只要构建或安装llama.cpp就会自动包含。',
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: '快速测试:Ollama --verbose',
        content: [
          '<strong>Ollama的`--verbose`标志是检查当前配置是否足够快的最快方式——但不能替代llama-bench。</strong>运行<code>ollama run &lt;model&gt; --verbose</code>会在普通聊天回复结束时打印每秒token数,无需单独的基准测试步骤。',
          '该数值来自单次、不受控的生成过程,而非重复的固定上下文运行,因此噪声更大,不适合比较两种不同的硬件。用它来回答"现在这个配置能不能用来聊天",而当答案需要经得起与另一台机器比较时,请使用llama-bench。',
          'Ollama是免费开源的——安装说明请参见<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">Ollama官网</a>。',
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: '最佳图形界面选择:LM Studio',
        content: [
          '<strong>如果你想在不打开终端的情况下实时查看每秒token数,LM Studio是最佳选择。</strong>它的聊天界面会实时显示生成速度,便于在工作时快速检查硬件、体验模型,并并排比较不同量化。',
          '和Ollama的`--verbose`标志一样,LM Studio的实时读数便捷但不够严谨——它没有提供影响llama-bench结果可信度、用于硬件购买决策的运行次数或上下文长度控制。LM Studio提供免费版本;下载请见<a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">LM Studio官网</a>。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '购买前先做基准测试',
        content: [
          '大多数基准测试相关搜索背后真正的问题不是"我该用哪个工具",而是"我该买哪种硬件"。陌生人帖子里的通用每秒token数无法回答这个问题——在决定之前,请在你实际考虑的两块GPU上运行相同的模型、量化和上下文长度。',
          '一旦从自己的llama-bench运行中获得真实数据,如果继续使用台式机,可以将其与我们的<a href="/zh/local-llms/best-gpus-for-local-llms">本地LLM最佳GPU</a>指南中的选项进行比较;如果想要紧凑的常开设备,可参考<a href="/zh/local-llms/best-mini-pcs-local-llm">本地LLM最佳迷你主机</a>指南;如果想用统一内存而非独立GPU,可参考<a href="/zh/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Apple Silicon与NVIDIA GPU对比</a>文章。',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: '什么才是有用的基准测试',
        content: [
          '<strong>有用的比较会在多次运行之间保持模型、量化级别、上下文长度和提示词内容不变,并分别报告提示词处理速度和生成速度。</strong>没有这些控制,单次运行得到的每秒token数几乎无法说明同一配置在更长提示词或不同量化下的表现。',
          '多次运行并取平均值——单次运行会受到热节流、后台进程和模型冷启动加载的影响。除非同时注明模型、量化和上下文长度,否则请把论坛或社交媒体上未注明来源的每秒token数当作粗略的轶事,而非基准测试结果。',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: '结论',
        content: [
          '<strong>如需严谨、可跨硬件比较的基准测试,请使用llama-bench。</strong>如需快速检查当前配置,请使用Ollama的`--verbose`输出。如需最简单、带实时性能显示的图形界面体验,请使用LM Studio。如果真正的目的是决定买什么,请在决定前,在两台机器上对你真正关心的那个模型和量化进行基准测试——然后将胜出者与我们的<a href="/zh/local-llms/best-gpus-for-local-llms">GPU</a>、<a href="/zh/local-llms/best-mini-pcs-local-llm">迷你主机</a>或<a href="/zh/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Mac</a>指南进行比较。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'llama-bench的上下文大小和提示词/生成选项分别控制什么?',
            a: 'llama-bench可以让你独立于运行所用的上下文长度,固定测试提示词的token数和生成的token数——这样就能在不改变其他任何设置的情况下,测试短上下文或长上下文场景。正是这种对设置的控制,才让两次运行具有可比性。',
          },
          {
            q: '为什么基准测试结果在不同运行之间会有差异?',
            a: '热节流、后台进程和模型的冷启动加载都会影响单次运行的结果。请对多次运行取平均值——llama-bench会自动完成这一点——而不是相信单次样本得到的数值。',
          },
          {
            q: '提示词处理速度和生成速度哪个更重要?',
            a: '这取决于任务。长文档摘要主要受提示词处理速度影响,因为大部分工作是读取输入。交互式聊天主要受生成速度影响,因为模型在简短提示词之后逐token生成大部分输出。',
          },
          {
            q: '我能把网上找到的每秒token数数值与自己的硬件比较吗?',
            a: '只有在模型、量化级别和上下文长度完全一致的情况下才可以。没有这些细节的每秒token数数值无法与你的配置比较——把论坛或社交媒体上未注明来源的数字当作粗略的轶事,而非基准测试结果。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-es.webp',
    title: 'llama-bench: la mejor herramienta para medir la velocidad de un LLM local',
    seoTitle: 'llama-bench: mejor herramienta de benchmark para LLM local',
    metaDescription:
      'llama-bench, incluida con llama.cpp, es la mejor herramienta para medir la velocidad de un LLM local — separa el procesamiento del prompt de la generación.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que quieren medir y comparar la velocidad de inferencia de LLM locales entre distintos hardwares o niveles de cuantización',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Usa llama-bench, la utilidad de benchmarking incluida con llama.cpp, para medir y comparar la velocidad de un LLM local.</strong> Reporta la velocidad de procesamiento del prompt y la velocidad de generación como dos cifras separadas bajo una longitud de contexto y un nivel de cuantización fijos, de modo que los resultados son directamente comparables entre hardwares. Para una comprobación más rápida pero menos rigurosa, usa en su lugar la salida `--verbose` de Ollama.',
    toc: [
      { label: 'Mejor opción: llama-bench', anchor: '#best-pick' },
      { label: 'Prueba rápida: Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: 'Mejor interfaz gráfica: LM Studio', anchor: '#lm-studio' },
      { label: 'Haz benchmarking antes de comprar', anchor: '#hardware' },
      { label: 'Qué hace útil a un benchmark', anchor: '#what-to-look-for' },
      { label: 'Conclusión', anchor: '#bottom-line' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor herramienta para medir tokens/seg en un LLM local?',
        answer:
          'llama-bench, incluida con llama.cpp, es la mejor herramienta para medir la velocidad de un LLM local — separa la velocidad de procesamiento del prompt de la velocidad de generación bajo una longitud de contexto y un nivel de cuantización fijos. Para una comprobación rápida de tu configuración actual, usa en su lugar la salida `--verbose` de Ollama.',
        bullets: [
          'Mejor benchmark en general: llama-bench — separa la velocidad de procesamiento del prompt de la velocidad de generación, controla la longitud de contexto y la cuantización.',
          'Comprobación más rápida: Ollama --verbose — una cifra aproximada de tokens/seg desde una respuesta de chat normal, sin herramienta de benchmark aparte.',
          'Mejor opción de interfaz gráfica: LM Studio — una lectura en vivo de tokens/seg mientras pruebas y comparas modelos, sin línea de comandos.',
          'Mejor para comparaciones de hardware: llama-bench — la única opción aquí diseñada para ejecuciones controladas y reproducibles lado a lado.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench es la mejor herramienta de benchmarking en general — separa la velocidad de procesamiento del prompt de la velocidad de generación bajo configuraciones fijas y reproducibles',
          'La opción --verbose de Ollama es la comprobación más rápida de si tu configuración es lo bastante rápida, no un sustituto de una comparación de hardware controlada',
          'LM Studio es la mejor opción de interfaz gráfica para pruebas rápidas, experimentar con modelos y ver el rendimiento en vivo sin línea de comandos',
          'Mantén el modelo, la cuantización y la longitud de contexto idénticos entre ejecuciones — comparar configuraciones distintas produce una cifra sin sentido',
          'Ejecuta varias pasadas y promedia el resultado, y nunca confíes en una cifra de tokens/seg encontrada en línea sin sus configuraciones asociadas',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama-bench, incluida con llama.cpp, es la mejor herramienta para medir la velocidad de un LLM local porque separa la velocidad de procesamiento del prompt de la velocidad de generación bajo configuraciones controladas y reproducibles.',
          },
          {
            type: 'plain-terms',
            text: 'En términos simples: llama-bench ejecuta la misma prueba varias veces con configuraciones fijas y reporta dos cifras de velocidad claras, en lugar de la cifra ruidosa de una sesión de chat normal.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: llama-bench',
        content: [
          '<strong>llama-bench es la opción por defecto correcta para quien necesite una cifra de velocidad repetible y comparable entre hardwares.</strong> Es parte de llama.cpp, se ejecuta desde la línea de comandos y reporta dos cifras separadas en cada prueba: velocidad de procesamiento del prompt (qué tan rápido lee el modelo la entrada) y velocidad de generación (qué tan rápido produce nuevos tokens). Estas dos cifras se comportan de forma muy distinta bajo carga, así que una herramienta que las combina en una sola cifra te oculta la mitad del panorama.',
          'Recurre a llama-bench cuando compares dos GPU antes de una compra, pruebes un nuevo Mac o PC, compares niveles de cuantización, publiques resultados o decidas si vale la pena una actualización de hardware. Repite cada prueba automáticamente y reporta el promedio, así que no necesitas ejecutarlo cinco veces a mano.',
          'La pregunta de seguimiento más común es qué controlan realmente las opciones de longitud de contexto y longitud de prompt/generación. En resumen: llama-bench te permite fijar la longitud del prompt de prueba y cuántos tokens genera, de forma independiente entre sí, para que puedas probar un intercambio corto tipo chat o un prompt largo tipo documento sin cambiar nada más de la ejecución — esa separación es lo que hace comparables dos resultados.',
          'llama-bench no es un producto comercial — es una parte gratuita y de código abierto del <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">proyecto llama.cpp en GitHub</a>, incluida automáticamente cuando compilas o instalas llama.cpp.',
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: 'Prueba rápida: Ollama --verbose',
        content: [
          '<strong>La opción `--verbose` de Ollama es la forma más rápida de comprobar si tu configuración actual se siente lo bastante rápida — no un reemplazo de llama-bench.</strong> Ejecutar <code>ollama run &lt;model&gt; --verbose</code> imprime una cifra de tokens/seg al final de una respuesta de chat normal, sin necesitar un paso de benchmark aparte.',
          'La cifra proviene de una única generación no controlada, no de una ejecución repetida a contexto fijo, por lo que es más ruidosa y no adecuada para comparar dos piezas de hardware distintas. Úsala para responder "¿esto es usable para chatear ahora mismo?", y usa llama-bench cuando la respuesta tenga que sostenerse frente a otra máquina.',
          'Ollama es gratuita y de código abierto — consulta el <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">sitio de Ollama</a> para instrucciones de instalación.',
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: 'Mejor opción de interfaz gráfica: LM Studio',
        content: [
          '<strong>LM Studio es la mejor opción si quieres una lectura en vivo de tokens/seg sin tocar una terminal.</strong> Su interfaz de chat muestra la velocidad de generación en tiempo real, lo cual es conveniente para comprobaciones rápidas de hardware, experimentar con modelos y comparar cuantizaciones lado a lado mientras trabajas.',
          'Al igual que la opción `--verbose` de Ollama, la lectura en vivo de LM Studio es conveniente más que rigurosa — no expone los controles de número de ejecuciones o longitud de contexto que hacen confiable un resultado de llama-bench para una decisión de compra de hardware. LM Studio tiene un nivel gratuito; las descargas están en el <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">sitio de LM Studio</a>.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Haz benchmarking antes de comprar',
        content: [
          'La pregunta real detrás de la mayoría de las búsquedas de benchmarking no es "qué herramienta debo usar", sino "qué hardware debo comprar". Una cifra genérica de tokens/seg del post de un desconocido no responde eso — ejecuta el mismo modelo, cuantización y longitud de contexto en las dos GPU que realmente estás considerando antes de decidir.',
          'Una vez que tengas cifras reales de tus propias ejecuciones de llama-bench, compáralas con las opciones de nuestra guía de <a href="/es/local-llms/best-gpus-for-local-llms">mejores GPU para LLM locales</a> si te quedas en un equipo de escritorio, nuestra guía de <a href="/es/local-llms/best-mini-pcs-local-llm">mejores mini PC para LLM locales</a> para un equipo compacto siempre encendido, o nuestra guía del <a href="/es/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">comparativa Apple Silicon vs GPU NVIDIA</a> si prefieres memoria unificada en lugar de una GPU discreta.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'Qué hace útil a un benchmark',
        content: [
          '<strong>Una comparación útil mantiene constantes el modelo, el nivel de cuantización, la longitud de contexto y el contenido del prompt entre ejecuciones, y reporta la velocidad de procesamiento del prompt y la velocidad de generación por separado.</strong> Sin esos controles, una sola cifra de tokens/seg casi no te dice nada sobre cómo rendirá la misma configuración con un prompt más largo o una cuantización distinta.',
          'Ejecuta varias pasadas y promedia el resultado — una sola ejecución se ve sesgada por el throttling térmico, procesos en segundo plano y la carga en frío del modelo. Trata una cifra de tokens/seg no atribuida de un foro o red social como una anécdota aproximada, no como un benchmark, a menos que el modelo, la cuantización y la longitud de contexto estén indicados junto a ella.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Conclusión',
        content: [
          '<strong>Para un benchmark serio y comparable entre hardwares, usa llama-bench.</strong> Para una comprobación rápida de tu configuración actual, usa la salida `--verbose` de Ollama. Para la experiencia de interfaz gráfica más sencilla con visualización de rendimiento en vivo, usa LM Studio. Y si el objetivo real es decidir qué comprar, haz benchmarking del modelo y la cuantización exactos que te importan en ambas máquinas antes de decidirte — luego compara al ganador con nuestras guías de <a href="/es/local-llms/best-gpus-for-local-llms">GPU</a>, <a href="/es/local-llms/best-mini-pcs-local-llm">mini PC</a> o <a href="/es/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Mac</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué controlan las opciones de tamaño de contexto y prompt/generación de llama-bench?',
            a: 'llama-bench te permite fijar cuántos tokens tiene el prompt de prueba y cuántos tokens genera, de forma independiente a la longitud de contexto usada para la ejecución — así puedes probar un escenario de contexto corto o largo sin cambiar nada más de la configuración. Ese control sobre las configuraciones es lo que mantiene comparables dos ejecuciones.',
          },
          {
            q: '¿Por qué varían los resultados del benchmark entre ejecuciones?',
            a: 'El throttling térmico, los procesos en segundo plano y la carga en frío del modelo afectan los resultados de una sola ejecución. Promedia varias ejecuciones — llama-bench lo hace automáticamente — en lugar de confiar en una sola muestra.',
          },
          {
            q: '¿Es más importante la velocidad de procesamiento del prompt o la de generación?',
            a: 'Depende de la tarea. El resumen de documentos largos está dominado por la velocidad de procesamiento del prompt, ya que la mayor parte del trabajo consiste en leer la entrada. El chat interactivo está dominado por la velocidad de generación, ya que el modelo produce la mayor parte de su salida token por token tras un prompt corto.',
          },
          {
            q: '¿Puedo comparar una cifra de tokens/seg que encuentro en línea con mi propio hardware?',
            a: 'Solo si el modelo, el nivel de cuantización y la longitud de contexto coinciden exactamente. Una cifra de tokens/seg sin esos detalles no es comparable con tu configuración — trata los números no atribuidos de foros o redes sociales como anécdotas aproximadas, no como benchmarks.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-pt.webp',
    title: 'llama-bench: a melhor ferramenta para medir a velocidade de um LLM local',
    seoTitle: 'llama-bench: melhor ferramenta de benchmark para LLM local',
    metaDescription:
      'O llama-bench, incluído com o llama.cpp, é a melhor ferramenta para medir a velocidade de um LLM local — separa o processamento do prompt da geração.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores que querem medir e comparar a velocidade de inferência de LLMs locais entre diferentes hardwares ou níveis de quantização',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Use o llama-bench, o utilitário de benchmark incluído com o llama.cpp, para medir e comparar a velocidade de um LLM local.</strong> Ele reporta a velocidade de processamento do prompt e a velocidade de geração como dois números separados sob um comprimento de contexto e nível de quantização fixos, tornando os resultados diretamente comparáveis entre hardwares. Para uma verificação mais rápida e menos rigorosa, use a saída `--verbose` do Ollama.',
    toc: [
      { label: 'Melhor escolha: llama-bench', anchor: '#best-pick' },
      { label: 'Teste rápido: Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: 'Melhor interface: LM Studio', anchor: '#lm-studio' },
      { label: 'Faça benchmark antes de comprar', anchor: '#hardware' },
      { label: 'O que torna um benchmark útil', anchor: '#what-to-look-for' },
      { label: 'Conclusão', anchor: '#bottom-line' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor ferramenta para benchmark de tokens/seg em um LLM local?',
        answer:
          'O llama-bench, incluído com o llama.cpp, é a melhor ferramenta para medir a velocidade de um LLM local — separa a velocidade de processamento do prompt da velocidade de geração sob um comprimento de contexto e nível de quantização fixos. Para uma verificação rápida da sua configuração atual, use a saída `--verbose` do Ollama.',
        bullets: [
          'Melhor benchmark geral: llama-bench — separa a velocidade de processamento do prompt da velocidade de geração, controla o comprimento de contexto e a quantização.',
          'Verificação mais rápida: Ollama --verbose — um número aproximado de tokens/seg a partir de uma resposta de chat normal, sem ferramenta de benchmark separada.',
          'Melhor opção de interface: LM Studio — uma leitura ao vivo de tokens/seg enquanto você testa e compara modelos, sem linha de comando.',
          'Melhor para comparações de hardware: llama-bench — a única opção aqui feita para execuções controladas e reproduzíveis lado a lado.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O llama-bench é a melhor ferramenta de benchmark no geral — separa a velocidade de processamento do prompt da velocidade de geração sob configurações fixas e reproduzíveis',
          'A flag --verbose do Ollama é a verificação mais rápida para saber se sua configuração é rápida o suficiente, não um substituto para uma comparação de hardware controlada',
          'O LM Studio é a melhor opção de interface para testes rápidos, experimentação de modelos e visualização de desempenho ao vivo sem linha de comando',
          'Mantenha modelo, quantização e comprimento de contexto idênticos entre execuções — comparar configurações diferentes gera um número sem sentido',
          'Execute várias passagens e calcule a média do resultado, e nunca confie em um número de tokens/seg encontrado online sem suas configurações associadas',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O llama-bench, incluído com o llama.cpp, é a melhor ferramenta para medir a velocidade de um LLM local porque separa a velocidade de processamento do prompt da velocidade de geração sob configurações controladas e reproduzíveis.',
          },
          {
            type: 'plain-terms',
            text: 'Em termos simples: o llama-bench executa o mesmo teste várias vezes com configurações fixas e reporta dois números de velocidade claros, em vez do número ruidoso de uma sessão de chat normal.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: llama-bench',
        content: [
          '<strong>O llama-bench é a escolha padrão certa para quem precisa de um número de velocidade repetível e comparável entre hardwares.</strong> Ele faz parte do llama.cpp, roda pela linha de comando e reporta dois números separados para cada teste: velocidade de processamento do prompt (quão rápido o modelo lê a entrada) e velocidade de geração (quão rápido ele produz novos tokens). Esses dois números se comportam de forma muito diferente sob carga, então uma ferramenta que os combina em um único número esconde metade do quadro.',
          'Recorra ao llama-bench ao comparar duas GPUs antes de uma compra, testar um novo Mac ou PC, comparar níveis de quantização, publicar resultados, ou decidir se um upgrade de hardware vale a pena. Ele repete cada teste automaticamente e reporta a média, então você não precisa rodá-lo cinco vezes manualmente.',
          'A pergunta de acompanhamento mais comum é o que as opções de comprimento de contexto e comprimento de prompt/geração realmente controlam. Resumindo: o llama-bench permite fixar o tamanho do prompt de teste e quantos tokens ele gera, de forma independente um do outro, para que você possa testar uma troca curta tipo chat ou um prompt longo tipo documento sem mudar mais nada na execução — essa separação é o que torna dois resultados comparáveis.',
          'O llama-bench não é um produto comercial — é uma parte gratuita e de código aberto do <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">projeto llama.cpp no GitHub</a>, incluído automaticamente sempre que você compila ou instala o llama.cpp.',
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: 'Teste rápido: Ollama --verbose',
        content: [
          '<strong>A flag `--verbose` do Ollama é a forma mais rápida de verificar se sua configuração atual parece rápida o suficiente — não um substituto para o llama-bench.</strong> Rodar <code>ollama run &lt;model&gt; --verbose</code> imprime um número de tokens/seg ao final de uma resposta de chat normal, sem exigir uma etapa de benchmark separada.',
          'O número vem de uma única geração não controlada, não de uma execução repetida com contexto fixo, então é mais ruidoso e não é adequado para comparar dois hardwares diferentes. Use-o para responder "isso é utilizável para chat agora mesmo", e use o llama-bench quando a resposta precisar se sustentar contra outra máquina.',
          'O Ollama é gratuito e de código aberto — veja o <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">site do Ollama</a> para instruções de instalação.',
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: 'Melhor opção de interface: LM Studio',
        content: [
          '<strong>O LM Studio é a melhor escolha se você quiser uma leitura ao vivo de tokens/seg sem tocar em um terminal.</strong> Sua interface de chat mostra a velocidade de geração em tempo real, o que é conveniente para checagens rápidas de hardware, experimentação de modelos e comparação de quantizações lado a lado enquanto você trabalha.',
          'Assim como a flag `--verbose` do Ollama, a leitura ao vivo do LM Studio é conveniente, não rigorosa — não expõe os controles de número de execuções ou comprimento de contexto que tornam um resultado do llama-bench confiável para uma decisão de compra de hardware. O LM Studio tem um plano gratuito; downloads no <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">site do LM Studio</a>.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Faça benchmark antes de comprar',
        content: [
          'A pergunta real por trás da maioria das buscas por benchmark não é "qual ferramenta devo usar", e sim "qual hardware devo comprar". Um número genérico de tokens/seg do post de um estranho não responde isso — rode o mesmo modelo, quantização e comprimento de contexto nas duas GPUs que você realmente está considerando antes de decidir.',
          'Depois de ter números reais das suas próprias execuções do llama-bench, compare-os com as opções do nosso guia de <a href="/pt/local-llms/best-gpus-for-local-llms">melhores GPUs para LLMs locais</a> se você for continuar no desktop, nosso guia de <a href="/pt/local-llms/best-mini-pcs-local-llm">melhores mini PCs para LLMs locais</a> para uma máquina compacta sempre ligada, ou nosso guia do <a href="/pt/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">comparativo Apple Silicon vs. GPU NVIDIA</a> se você quiser memória unificada em vez de uma GPU discreta.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'O que torna um benchmark útil',
        content: [
          '<strong>Uma comparação útil mantém modelo, nível de quantização, comprimento de contexto e conteúdo do prompt constantes entre execuções, e reporta a velocidade de processamento do prompt e a velocidade de geração separadamente.</strong> Sem esses controles, um único número de tokens/seg quase não diz nada sobre como a mesma configuração se sai com um prompt mais longo ou uma quantização diferente.',
          'Execute várias passagens e calcule a média do resultado — uma única execução é distorcida por throttling térmico, processos em segundo plano e carregamento a frio do modelo. Trate um número de tokens/seg não atribuído de um fórum ou post de rede social como uma anedota aproximada, não como um benchmark, a menos que o modelo, a quantização e o comprimento de contexto estejam declarados junto.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Conclusão',
        content: [
          '<strong>Para um benchmark sério e comparável entre hardwares, use o llama-bench.</strong> Para uma checagem rápida da sua configuração atual, use a saída `--verbose` do Ollama. Para a experiência de interface mais fácil com visualização de desempenho ao vivo, use o LM Studio. E se o objetivo real é decidir o que comprar, faça benchmark do modelo e da quantização exatos que importam para você nas duas máquinas antes de se comprometer — depois compare o vencedor com nossos guias de <a href="/pt/local-llms/best-gpus-for-local-llms">GPU</a>, <a href="/pt/local-llms/best-mini-pcs-local-llm">mini PC</a> ou <a href="/pt/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Mac</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que as opções de tamanho de contexto e prompt/geração do llama-bench controlam?',
            a: 'O llama-bench permite fixar quantos tokens o prompt de teste tem e quantos tokens ele gera, independentemente do comprimento de contexto usado na execução — assim você pode testar um cenário de contexto curto ou longo sem mudar mais nada na configuração. Esse controle sobre as configurações é o que mantém duas execuções comparáveis.',
          },
          {
            q: 'Por que os resultados de benchmark variam entre execuções?',
            a: 'Throttling térmico, processos em segundo plano e o carregamento a frio do modelo afetam os resultados de uma única execução. Calcule a média de várias execuções — o llama-bench faz isso automaticamente — em vez de confiar em uma única amostra.',
          },
          {
            q: 'A velocidade de processamento do prompt ou a velocidade de geração é mais importante?',
            a: 'Depende da tarefa. A sumarização de documentos longos é dominada pela velocidade de processamento do prompt, já que a maior parte do trabalho é ler a entrada. O chat interativo é dominado pela velocidade de geração, já que o modelo produz a maior parte da saída token por token após um prompt curto.',
          },
          {
            q: 'Posso comparar um número de tokens/seg que encontro online com o meu próprio hardware?',
            a: 'Somente se o modelo, o nível de quantização e o comprimento de contexto coincidirem exatamente. Um número de tokens/seg sem esses detalhes não é comparável à sua configuração — trate números não atribuídos de fóruns ou redes sociais como anedotas aproximadas, não como benchmarks.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-ar.webp',
    title: 'llama-bench: أفضل أداة لقياس سرعة نماذج LLM المحلية',
    seoTitle: 'llama-bench: أفضل أداة قياس أداء لنماذج LLM المحلية',
    metaDescription:
      'أداة llama-bench، المرفقة مع llama.cpp، هي أفضل أداة لقياس سرعة نماذج LLM المحلية — تفصل سرعة معالجة الـ prompt عن سرعة التوليد لمقارنات دقيقة بين الأجهزة.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يريدون قياس ومقارنة سرعة الاستدلال (inference) لنماذج LLM المحلية عبر أجهزة أو مستويات quantization مختلفة',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>استخدم llama-bench، أداة قياس الأداء المرفقة مع llama.cpp، لقياس ومقارنة سرعة نموذج LLM محلي.</strong> تُبلغ عن سرعة معالجة الـ prompt وسرعة التوليد كرقمين منفصلين ضمن طول سياق ومستوى quantization ثابتين، مما يجعل النتائج قابلة للمقارنة المباشرة بين الأجهزة المختلفة. لإجراء فحص أسرع وأقل صرامة، استخدم بدلًا من ذلك مخرجات `--verbose` في Ollama.',
    toc: [
      { label: 'الخيار الأفضل: llama-bench', anchor: '#best-pick' },
      { label: 'اختبار سريع: Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: 'أفضل واجهة رسومية: LM Studio', anchor: '#lm-studio' },
      { label: 'قِس الأداء قبل الشراء', anchor: '#hardware' },
      { label: 'ما الذي يجعل القياس مفيدًا', anchor: '#what-to-look-for' },
      { label: 'الخلاصة', anchor: '#bottom-line' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هي أفضل أداة لقياس الأداء (tokens/sec) في نماذج LLM المحلية؟',
        answer:
          'أداة llama-bench، المرفقة مع llama.cpp، هي أفضل أداة لقياس سرعة نموذج LLM محلي — تفصل سرعة معالجة الـ prompt عن سرعة التوليد ضمن طول سياق ومستوى quantization ثابتين. لإجراء فحص سريع لإعدادك الحالي، استخدم بدلًا من ذلك مخرجات `--verbose` في Ollama.',
        bullets: [
          'أفضل أداة قياس أداء بشكل عام: llama-bench — تفصل سرعة معالجة الـ prompt عن سرعة التوليد، وتتحكم في طول السياق ومستوى الـ quantization.',
          'أسرع فحص: Ollama --verbose — رقم تقريبي لعدد tokens في الثانية من رد محادثة عادي، دون الحاجة إلى أداة قياس منفصلة.',
          'أفضل خيار واجهة رسومية: LM Studio — قراءة مباشرة لعدد tokens في الثانية أثناء اختبار ومقارنة النماذج، دون سطر أوامر.',
          'الأفضل لمقارنات الأجهزة: llama-bench — الخيار الوحيد هنا المصمم لتشغيلات متحكم بها وقابلة للتكرار جنبًا إلى جنب.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench هي أفضل أداة قياس أداء بشكل عام — تفصل سرعة معالجة الـ prompt عن سرعة التوليد ضمن إعدادات ثابتة وقابلة للتكرار',
          'خيار --verbose في Ollama هو أسرع فحص لمعرفة ما إذا كان إعدادك سريعًا بما يكفي، وليس بديلًا عن مقارنة أجهزة متحكم بها',
          'LM Studio هو أفضل خيار واجهة رسومية للاختبارات السريعة وتجربة النماذج ومشاهدة الأداء المباشر دون سطر أوامر',
          'حافظ على ثبات النموذج ومستوى الـ quantization وطول السياق بين التشغيلات — مقارنة إعدادات مختلفة تُنتج رقمًا بلا معنى',
          'شغّل عدة تكرارات واحسب متوسط النتيجة، ولا تثق أبدًا برقم tokens/sec مُوجَد على الإنترنت دون الإعدادات المرافقة له',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أداة llama-bench، المرفقة مع llama.cpp، هي أفضل أداة لقياس سرعة نموذج LLM محلي لأنها تفصل سرعة معالجة الـ prompt عن سرعة التوليد ضمن إعدادات متحكم بها وقابلة للتكرار.',
          },
          {
            type: 'plain-terms',
            text: 'بعبارة بسيطة: تُشغّل llama-bench الاختبار نفسه عدة مرات بإعدادات ثابتة وتُبلغ عن رقمي سرعة واضحين، بدلًا من الرقم المشوّش الناتج عن جلسة محادثة عادية.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'الخيار الأفضل: llama-bench',
        content: [
          '<strong>llama-bench هو الخيار الافتراضي الصحيح لكل من يحتاج إلى رقم سرعة قابل للتكرار ويمكن مقارنته بين الأجهزة.</strong> هو جزء من llama.cpp، ويعمل من سطر الأوامر، ويُبلغ عن رقمين منفصلين لكل اختبار: سرعة معالجة الـ prompt (مدى سرعة قراءة النموذج للمُدخل) وسرعة التوليد (مدى سرعة إنتاجه لـ tokens جديدة). يتصرف هذان الرقمان بشكل مختلف تمامًا تحت الحمل، لذا فإن أي أداة تدمجهما في رقم واحد تُخفي نصف الصورة.',
          'استخدم llama-bench عند مقارنة بطاقتي GPU قبل الشراء، أو اختبار جهاز Mac أو PC جديد، أو مقارنة مستويات الـ quantization، أو نشر النتائج علنًا، أو تحديد ما إذا كانت ترقية الأجهزة تستحق التكلفة. يُكرر كل اختبار تلقائيًا ويُبلغ عن المتوسط، لذا لست بحاجة لتشغيله خمس مرات يدويًا.',
          'السؤال الأكثر شيوعًا الذي يليها هو ما الذي تتحكم فيه فعليًا خيارات طول السياق وطول الـ prompt/التوليد. باختصار: تتيح لك llama-bench تثبيت طول الـ prompt الاختباري وعدد الـ tokens التي يولّدها، بشكل مستقل عن بعضهما، بحيث يمكنك اختبار تبادل قصير شبيه بالمحادثة أو prompt طويل شبيه بالمستند دون تغيير أي شيء آخر في التشغيل — هذا الفصل هو ما يجعل نتيجتين قابلتين للمقارنة أصلًا.',
          'llama-bench ليست منتجًا تجاريًا — إنها جزء مجاني ومفتوح المصدر من <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">مشروع llama.cpp على GitHub</a>، وتأتي تلقائيًا مع بناء أو تثبيت llama.cpp.',
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: 'اختبار سريع: Ollama --verbose',
        content: [
          '<strong>خيار `--verbose` في Ollama هو أسرع طريقة للتحقق مما إذا كان إعدادك الحالي يبدو سريعًا بما يكفي — وليس بديلًا عن llama-bench.</strong> تشغيل <code>ollama run &lt;model&gt; --verbose</code> يطبع رقم tokens في الثانية في نهاية استجابة محادثة عادية، دون الحاجة إلى خطوة قياس أداء منفصلة.',
          'يأتي الرقم من عملية توليد واحدة غير متحكم بها، وليس من تشغيل متكرر بسياق ثابت، لذا فهو أكثر تشويشًا وغير مناسب لمقارنة قطعتي عتاد مختلفتين. استخدمه للإجابة على سؤال "هل هذا صالح للمحادثة الآن"، واستخدم llama-bench عندما تحتاج الإجابة إلى أن تصمد أمام مقارنة بجهاز آخر.',
          'Ollama مجانية ومفتوحة المصدر — راجع <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">موقع Ollama</a> للحصول على تعليمات التثبيت.',
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: 'أفضل خيار واجهة رسومية: LM Studio',
        content: [
          '<strong>LM Studio هو الخيار الأفضل إذا أردت قراءة مباشرة لعدد tokens في الثانية دون فتح طرفية (terminal).</strong> تعرض واجهة المحادثة فيه سرعة التوليد في الوقت الفعلي، وهو أمر مريح للفحوصات السريعة للأجهزة، وتجربة النماذج، ومقارنة مستويات الـ quantization جنبًا إلى جنب أثناء العمل.',
          'مثل خيار `--verbose` في Ollama، القراءة المباشرة في LM Studio مريحة وليست صارمة — فهي لا تكشف عناصر التحكم في عدد التشغيلات أو طول السياق التي تجعل نتيجة llama-bench موثوقة لقرار شراء عتاد. يوفر LM Studio مستوى مجانيًا؛ التنزيلات على <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">موقع LM Studio</a>.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'قِس الأداء قبل الشراء',
        content: [
          'السؤال الحقيقي وراء معظم عمليات البحث عن قياس الأداء ليس "أي أداة يجب أن أستخدم"، بل "أي عتاد يجب أن أشتري". رقم tokens/sec عام من منشور شخص غريب لا يجيب عن ذلك — شغّل نفس النموذج ومستوى الـ quantization وطول السياق على بطاقتي GPU اللتين تفكر فيهما فعليًا قبل اتخاذ القرار.',
          'بمجرد حصولك على أرقام حقيقية من تشغيلات llama-bench الخاصة بك، قارنها بالخيارات في دليلنا <a href="/ar/local-llms/best-gpus-for-local-llms">أفضل بطاقات GPU لنماذج LLM المحلية</a> إذا كنت ستبقى على جهاز مكتبي، أو دليلنا <a href="/ar/local-llms/best-mini-pcs-local-llm">أفضل أجهزة Mini PC لنماذج LLM المحلية</a> لجهاز مدمج يعمل باستمرار، أو دليلنا <a href="/ar/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">مقارنة Apple Silicon مقابل GPU من NVIDIA</a> إذا كنت تفضل الذاكرة الموحدة بدلًا من بطاقة GPU منفصلة.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'ما الذي يجعل القياس مفيدًا',
        content: [
          '<strong>المقارنة المفيدة تُبقي النموذج ومستوى الـ quantization وطول السياق ومحتوى الـ prompt ثابتين بين التشغيلات، وتُبلغ عن سرعة معالجة الـ prompt وسرعة التوليد بشكل منفصل.</strong> بدون هذه الضوابط، فإن رقم tokens/sec واحد لا يخبرك بشيء يُذكر عن كيفية أداء الإعداد نفسه مع prompt أطول أو quantization مختلف.',
          'شغّل عدة تكرارات واحسب متوسط النتيجة — التشغيل الواحد يتأثر بالتقييد الحراري (thermal throttling) والعمليات في الخلفية والتحميل البارد للنموذج. تعامل مع رقم tokens/sec غير المنسوب من منتدى أو منشور على وسائل التواصل الاجتماعي على أنه انطباع تقريبي، وليس قياس أداء موثوقًا، ما لم يُذكر النموذج ومستوى الـ quantization وطول السياق معه.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'الخلاصة',
        content: [
          '<strong>لقياس أداء جاد وقابل للمقارنة بين الأجهزة، استخدم llama-bench.</strong> لفحص سريع لإعدادك الحالي، استخدم مخرجات `--verbose` في Ollama. لأسهل تجربة واجهة رسومية مع عرض مباشر للأداء، استخدم LM Studio. وإذا كان الهدف الحقيقي هو تحديد ما ستشتريه، فقِس أداء النموذج ومستوى الـ quantization اللذين يهمانك بالضبط على كلا الجهازين قبل أن تلتزم — ثم قارن الفائز بأدلتنا حول <a href="/ar/local-llms/best-gpus-for-local-llms">بطاقات GPU</a> أو <a href="/ar/local-llms/best-mini-pcs-local-llm">أجهزة Mini PC</a> أو <a href="/ar/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">أجهزة Mac</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ماذا تتحكم خيارات حجم السياق والـ prompt/التوليد في llama-bench؟',
            a: 'تتيح لك llama-bench تثبيت عدد الـ tokens في الـ prompt الاختباري وعدد الـ tokens التي يولّدها، بشكل مستقل عن طول السياق المستخدم في التشغيل — بحيث يمكنك اختبار سيناريو سياق قصير أو طويل دون تغيير أي شيء آخر في الإعداد. هذا التحكم في الإعدادات هو ما يُبقي تشغيلين قابلين للمقارنة.',
          },
          {
            q: 'لماذا تتفاوت نتائج قياس الأداء بين التشغيلات؟',
            a: 'التقييد الحراري، والعمليات في الخلفية، والتحميل البارد للنموذج تؤثر جميعها على نتائج التشغيل الواحد. احسب متوسط عدة تشغيلات — تفعل llama-bench ذلك تلقائيًا — بدلًا من الاعتماد على عينة واحدة.',
          },
          {
            q: 'هل سرعة معالجة الـ prompt أم سرعة التوليد أكثر أهمية؟',
            a: 'يعتمد ذلك على المهمة. تلخيص المستندات الطويلة يهيمن عليه سرعة معالجة الـ prompt، لأن معظم العمل هو قراءة المُدخل. المحادثة التفاعلية يهيمن عليها سرعة التوليد، لأن النموذج ينتج معظم مخرجاته token تلو الآخر بعد prompt قصير.',
          },
          {
            q: 'هل يمكنني مقارنة رقم tokens/sec الذي أجده عبر الإنترنت بعتادي الخاص؟',
            a: 'فقط إذا تطابق النموذج ومستوى الـ quantization وطول السياق تمامًا. رقم tokens/sec بدون هذه التفاصيل غير قابل للمقارنة بإعدادك — تعامل مع الأرقام غير المنسوبة من المنتديات أو وسائل التواصل الاجتماعي على أنها انطباعات تقريبية، وليست قياسات أداء موثوقة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-benchmarking-tool-overview-hero-ko.webp',
    title: 'llama-bench: 로컬 LLM 속도를 벤치마킹하는 가장 좋은 도구',
    seoTitle: 'llama-bench: 최고의 로컬 LLM 벤치마킹 도구',
    metaDescription:
      'llama.cpp에 포함된 llama-bench는 로컬 LLM 속도를 벤치마킹하는 가장 좋은 도구입니다. 프롬프트 처리 속도와 생성 속도를 분리해 정확한 하드웨어 비교를 제공합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '하드웨어 또는 양자화 수준에 따른 로컬 LLM 추론 속도를 측정하고 비교하려는 개발자',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>로컬 LLM의 속도를 측정하고 비교하려면 llama.cpp에 포함된 벤치마킹 도구인 llama-bench를 사용하세요.</strong> 고정된 컨텍스트 길이와 양자화 수준에서 프롬프트 처리 속도와 생성 속도를 두 개의 별도 수치로 보고하므로, 서로 다른 하드웨어 간 결과를 직접 비교할 수 있습니다. 더 빠르지만 엄격함이 떨어지는 확인을 원한다면 대신 Ollama의 `--verbose` 출력을 사용하세요.',
    toc: [
      { label: '최선의 선택: llama-bench', anchor: '#best-pick' },
      { label: '빠른 확인: Ollama --verbose', anchor: '#ollama-quick-test' },
      { label: '최고의 GUI: LM Studio', anchor: '#lm-studio' },
      { label: '구매 전 벤치마킹하기', anchor: '#hardware' },
      { label: '유용한 벤치마크의 조건', anchor: '#what-to-look-for' },
      { label: '결론', anchor: '#bottom-line' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM의 초당 토큰 수를 벤치마킹하는 가장 좋은 도구는 무엇입니까?',
        answer:
          'llama.cpp에 포함된 llama-bench가 로컬 LLM의 속도를 벤치마킹하는 가장 좋은 도구입니다. 고정된 컨텍스트 길이와 양자화 수준에서 프롬프트 처리 속도와 생성 속도를 분리하여 보고합니다. 현재 설정을 빠르게 확인하려면 대신 Ollama의 `--verbose` 출력을 사용하세요.',
        bullets: [
          '전반적으로 최고의 벤치마크: llama-bench — 프롬프트 처리 속도와 생성 속도를 분리하고 컨텍스트 길이와 양자화를 제어합니다.',
          '가장 빠른 확인: Ollama --verbose — 일반 채팅 응답에서 얻는 대략적인 초당 토큰 수치로, 별도의 벤치마크 도구가 필요 없습니다.',
          '최고의 GUI 옵션: LM Studio — 모델을 테스트하고 비교하는 동안 초당 토큰 수를 실시간으로 표시하며, 명령줄이 필요 없습니다.',
          '하드웨어 비교에 가장 적합: llama-bench — 이 중 유일하게 통제되고 재현 가능한 나란히 비교를 위해 만들어진 옵션입니다.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench는 전반적으로 최고의 벤치마킹 도구로, 고정되고 재현 가능한 설정에서 프롬프트 처리 속도와 생성 속도를 분리합니다',
          'Ollama의 --verbose 플래그는 "내 설정이 충분히 빠른가"를 확인하는 가장 빠른 방법이며, 통제된 하드웨어 비교를 대체하지는 않습니다',
          'LM Studio는 명령줄 없이 빠른 테스트, 모델 실험, 실시간 성능 확인이 가능한 최고의 GUI 옵션입니다',
          '실행 간에는 모델, 양자화, 컨텍스트 길이를 동일하게 유지하세요. 서로 다른 설정을 비교하면 의미 없는 수치가 나옵니다',
          '여러 번 실행하여 결과를 평균화하고, 설정 정보가 없는 온라인상의 초당 토큰 수치는 절대 신뢰하지 마십시오',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama.cpp에 포함된 llama-bench는 통제되고 재현 가능한 설정에서 프롬프트 처리 속도와 생성 속도를 분리할 수 있기 때문에 로컬 LLM의 속도를 벤치마킹하는 가장 좋은 도구입니다.',
          },
          {
            type: 'plain-terms',
            text: '쉽게 말해: llama-bench는 동일한 테스트를 고정된 설정으로 여러 번 실행하여, 일반 채팅 세션에서 나오는 잡음 섞인 하나의 수치 대신 명확한 두 개의 속도 수치를 보고합니다.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최선의 선택: llama-bench',
        content: [
          '<strong>llama-bench는 재현 가능하고 하드웨어 간 비교가 가능한 속도 수치가 필요한 모든 사람에게 적합한 기본 선택입니다.</strong> llama.cpp의 일부이며, 명령줄에서 실행되고, 각 테스트마다 두 가지 별도 수치를 보고합니다. 프롬프트 처리 속도(모델이 입력을 읽는 속도)와 생성 속도(새 토큰을 생성하는 속도)입니다. 이 두 수치는 부하 상태에서 매우 다르게 동작하므로, 이를 하나의 수치로 합치는 도구는 전체 그림의 절반을 가리는 셈입니다.',
          '구매 전에 두 GPU를 비교하거나, 새 Mac이나 PC를 테스트하거나, 양자화 수준을 비교하거나, 결과를 공개적으로 게시하거나, 하드웨어 업그레이드가 그만한 가치가 있는지 판단할 때 llama-bench를 사용하세요. 각 테스트를 자동으로 반복하고 평균을 보고하므로 수동으로 다섯 번 실행할 필요가 없습니다.',
          '가장 흔한 후속 질문은 컨텍스트 길이와 프롬프트/생성 길이 옵션이 실제로 무엇을 제어하는지입니다. 간단히 말해, llama-bench는 테스트 프롬프트의 길이와 생성할 토큰 수를 서로 독립적으로 고정할 수 있게 해주므로, 다른 설정을 전혀 바꾸지 않고도 짧은 채팅형 시나리오나 긴 문서형 시나리오를 테스트할 수 있습니다. 바로 이 분리가 두 결과를 애초에 비교 가능하게 만드는 요소입니다.',
          'llama-bench는 상업용 제품이 아닙니다. <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">GitHub의 llama.cpp 프로젝트</a>의 무료 오픈소스 구성 요소이며, llama.cpp를 빌드하거나 설치하면 자동으로 포함됩니다.',
        ],
      },
      ollamaQuickTest: {
        id: 'ollama-quick-test',
        title: '빠른 확인: Ollama --verbose',
        content: [
          '<strong>Ollama의 `--verbose` 플래그는 현재 설정이 충분히 빠르게 느껴지는지 확인하는 가장 빠른 방법입니다. llama-bench를 대체하지는 않습니다.</strong> <code>ollama run &lt;model&gt; --verbose</code>를 실행하면 별도의 벤치마크 단계 없이 일반 채팅 응답 끝에 초당 토큰 수치가 출력됩니다.',
          '이 수치는 반복적인 고정 컨텍스트 실행이 아니라 단일한 통제되지 않은 생성에서 나온 것이므로, 더 잡음이 많고 서로 다른 두 하드웨어를 비교하는 데는 적합하지 않습니다. "지금 이게 채팅에 쓸 만한가"를 답하는 데 사용하고, 다른 기기와 비교해도 통할 답이 필요할 때는 llama-bench를 사용하세요.',
          'Ollama는 무료 오픈소스입니다. 설치 방법은 <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">Ollama 공식 사이트</a>를 참고하세요.',
        ],
      },
      lmStudioGui: {
        id: 'lm-studio',
        title: '최고의 GUI 옵션: LM Studio',
        content: [
          '<strong>터미널을 건드리지 않고 초당 토큰 수를 실시간으로 확인하고 싶다면 LM Studio가 최선의 선택입니다.</strong> 채팅 인터페이스에서 생성 속도를 실시간으로 표시하므로, 빠른 하드웨어 확인, 모델 실험, 작업 중 양자화 비교에 편리합니다.',
          'Ollama의 `--verbose` 플래그와 마찬가지로 LM Studio의 실시간 표시는 편리하지만 엄격하지는 않습니다. 하드웨어 구매 결정에서 llama-bench 결과를 신뢰할 수 있게 만드는 실행 횟수나 컨텍스트 길이 제어를 제공하지 않습니다. LM Studio는 무료 플랜을 제공하며, 다운로드는 <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">LM Studio 공식 사이트</a>에서 가능합니다.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '구매 전 벤치마킹하기',
        content: [
          '대부분의 벤치마킹 검색 뒤에 있는 진짜 질문은 "어떤 도구를 써야 하나"가 아니라 "어떤 하드웨어를 사야 하나"입니다. 낯선 사람의 게시물에 있는 일반적인 초당 토큰 수치는 그 질문에 답하지 못합니다. 결정하기 전에 실제로 고려 중인 두 GPU에서 동일한 모델, 양자화, 컨텍스트 길이로 실행해 보세요.',
          '자신의 llama-bench 실행에서 실제 수치를 얻었다면, 데스크톱을 계속 사용할 경우 <a href="/ko/local-llms/best-gpus-for-local-llms">로컬 LLM을 위한 최고의 GPU</a> 가이드, 상시 가동되는 소형 기기를 원한다면 <a href="/ko/local-llms/best-mini-pcs-local-llm">로컬 LLM을 위한 최고의 미니 PC</a> 가이드, 개별 GPU 대신 통합 메모리를 원한다면 <a href="/ko/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Apple Silicon과 NVIDIA GPU 비교</a> 글의 옵션과 비교해 보세요.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: '유용한 벤치마크의 조건',
        content: [
          '<strong>유용한 비교는 실행 간에 모델, 양자화 수준, 컨텍스트 길이, 프롬프트 내용을 일정하게 유지하며, 프롬프트 처리 속도와 생성 속도를 별도로 보고합니다.</strong> 이러한 제어가 없으면 단일 초당 토큰 수치는 동일한 설정이 더 긴 프롬프트나 다른 양자화에서 어떻게 동작할지에 대해 거의 아무것도 알려주지 않습니다.',
          '여러 번 실행하여 결과를 평균화하십시오. 단일 실행은 열 스로틀링, 백그라운드 프로세스, 모델의 콜드 스타트 로딩에 의해 왜곡됩니다. 모델, 양자화, 컨텍스트 길이가 함께 명시되지 않은 한, 포럼이나 소셜 미디어 게시물의 출처가 불명확한 초당 토큰 수치는 벤치마크가 아니라 대략적인 일화로 취급하십시오.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: '결론',
        content: [
          '<strong>진지하고 하드웨어 간 비교가 가능한 벤치마크에는 llama-bench를 사용하세요.</strong> 현재 설정을 빠르게 확인하려면 Ollama의 `--verbose` 출력을 사용하세요. 실시간 성능 확인이 가능한 가장 쉬운 GUI 경험을 원한다면 LM Studio를 사용하세요. 그리고 진짜 목적이 무엇을 살지 결정하는 것이라면, 결정하기 전에 관심 있는 정확한 모델과 양자화를 두 기기 모두에서 벤치마킹한 다음, 승자를 저희의 <a href="/ko/local-llms/best-gpus-for-local-llms">GPU</a>, <a href="/ko/local-llms/best-mini-pcs-local-llm">미니 PC</a>, <a href="/ko/local-llms/apple-silicon-vs-nvidia-gpu-local-llm">Mac</a> 가이드와 비교해 보세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'llama-bench의 컨텍스트 크기 및 프롬프트/생성 옵션은 무엇을 제어합니까?',
            a: 'llama-bench는 실행에 사용되는 컨텍스트 길이와 독립적으로 테스트 프롬프트의 토큰 수와 생성할 토큰 수를 고정할 수 있게 해줍니다. 그래서 다른 설정을 바꾸지 않고도 짧은 컨텍스트 시나리오나 긴 컨텍스트 시나리오를 테스트할 수 있습니다. 이러한 설정 제어가 두 실행을 비교 가능하게 유지하는 요소입니다.',
          },
          {
            q: '벤치마크 결과가 실행마다 다른 이유는 무엇입니까?',
            a: '열 스로틀링, 백그라운드 프로세스, 모델의 콜드 스타트 로딩이 모두 단일 실행 결과에 영향을 미칩니다. 하나의 샘플을 신뢰하는 대신 여러 번 실행한 결과를 평균화하십시오 — llama-bench는 이를 자동으로 수행합니다.',
          },
          {
            q: '프롬프트 처리 속도와 생성 속도 중 어느 것이 더 중요합니까?',
            a: '작업에 따라 다릅니다. 긴 문서 요약은 입력을 읽는 작업이 대부분이므로 프롬프트 처리 속도가 지배적입니다. 대화형 채팅은 짧은 프롬프트 이후 모델이 대부분의 출력을 토큰 단위로 생성하므로 생성 속도가 지배적입니다.',
          },
          {
            q: '온라인에서 찾은 초당 토큰 수치를 제 하드웨어와 비교할 수 있습니까?',
            a: '모델, 양자화 수준, 컨텍스트 길이가 정확히 일치하는 경우에만 가능합니다. 이러한 세부 정보가 함께 제시되지 않은 초당 토큰 수치는 사용자의 설정과 비교할 수 없습니다. 포럼이나 소셜 미디어의 출처가 불명확한 수치는 벤치마크가 아니라 대략적인 일화로 취급하십시오.',
          },
        ],
      },
    },
  },
}
