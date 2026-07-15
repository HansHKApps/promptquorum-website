import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'Best Tool for Benchmarking Local LLM Tokens/Sec?',
    seoTitle: 'Best Local LLM Benchmarking Tool: llama-bench vs Alternatives',
    metaDescription:
      'llama-bench (bundled with llama.cpp) is the best tool for benchmarking local LLM tokens/sec — it isolates prompt-processing and generation speed under a fixed context and quantization level.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers who want to measure and compare local LLM inference speed across hardware or quantization levels',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>llama-bench, the benchmarking utility bundled with llama.cpp, is the best tool for measuring local LLM tokens-per-second</strong> — it reports prompt-processing speed and generation speed as separate numbers under a fixed context length and quantization level, so results are directly comparable across hardware. Ollama\'s built-in `--verbose` flag is a faster, less rigorous alternative for a quick sanity check.',
    toc: [
      { label: 'Best Pick: llama-bench', anchor: '#best-pick' },
      { label: 'What to Look For in a Benchmarking Tool', anchor: '#what-to-look-for' },
      { label: 'Hardware to Pair With Your Benchmark', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best tool for benchmarking local LLM tokens/sec?',
        answer:
          'llama-bench, included with llama.cpp, is the best tool for benchmarking local LLM inference speed. It reports prompt-processing and generation speed separately under a fixed context length and quantization level, making results comparable across different hardware.',
        bullets: [
          'llama-bench: the most rigorous option — separates prompt-processing speed from generation speed, controls for context length and quantization.',
          'Ollama --verbose: fastest way to get a rough tokens/sec number from a normal chat session, less controlled than llama-bench.',
          'Third-party GUIs (LM Studio\'s built-in stats) are convenient for a quick read but don\'t expose the same run-to-run controls.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench is the most rigorous benchmarking tool — it isolates prompt-processing speed from generation speed under fixed settings',
          'Ollama\'s --verbose flag gives a fast, rough tokens/sec estimate from a normal chat run, useful for quick checks',
          'Always fix context length and quantization level between runs, or the comparison is meaningless',
          'Run multiple passes and average the result — a single run is affected by thermal throttling and cold-start loading',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama-bench, bundled with llama.cpp, is the best tool for benchmarking local LLM tokens per second because it separates prompt-processing speed from generation speed under controlled settings.',
          },
          {
            type: 'plain-terms',
            text: 'In plain terms: llama-bench runs the same test multiple times at fixed settings and reports two clean speed numbers, instead of one noisy number from a normal chat session.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: llama-bench',
        content: [
          '<strong>llama-bench is the right default for anyone who needs a repeatable, hardware-comparable tokens-per-second number.</strong> It ships as part of the llama.cpp build, runs from the command line, and reports two separate figures for every test: prompt-processing speed (how fast the model reads the input) and generation speed (how fast it produces new tokens). Those two numbers behave very differently under load, so a tool that conflates them is not giving you the full picture.',
          'Ollama\'s `--verbose` flag is the practical alternative for a fast sanity check. Running `ollama run <model> --verbose` prints a tokens/sec figure at the end of a normal chat response, with no separate benchmark harness required. It is convenient, but the number comes from a single, uncontrolled generation — not a repeated, fixed-context run — so it is noisier and less suitable for comparing two different pieces of hardware.',
          'LM Studio and other desktop frontends surface a similar live tokens/sec readout in their chat UI. Use this for a quick eyeball check while you are already using the tool, but do not rely on it for a hardware-purchase decision — it doesn\'t expose the run-count or context-length controls that make a benchmark result trustworthy.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'What to Look For in a Benchmarking Tool',
        content: [
          '<strong>A trustworthy local LLM benchmarking tool holds context length, quantization level, and prompt content constant between runs, and reports prompt-processing speed and token-generation speed as separate numbers.</strong> Without those controls, a "tokens/sec" figure from one run tells you almost nothing about how the same setup will perform on a longer prompt or a different quantization.',
          'Use a benchmarking tool if you are comparing GPUs before a purchase, evaluating whether a quantization level is worth the quality trade-off, or reporting performance numbers publicly. Skip the formal benchmark and just watch the live tokens/sec counter if you only want a rough feel for whether a model is usable for chat.',
          'Avoid: single-run numbers reported without a context length or quantization level attached — they cannot be compared to anything. Avoid: tools that report only one combined tokens/sec figure, since prompt-processing and generation speed scale differently with context length and hardware.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware to Pair With Your Benchmark',
        content: [
          'If you are benchmarking with the goal of deciding whether to upgrade, run the same llama-bench command on your existing GPU and on the candidate GPU using the same model file and quantization, then compare the two prompt-processing and generation numbers side by side.',
          '<em>Disclosure: This article contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=16GB+VRAM+GPU',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: 'Check 16GB VRAM GPU pricing on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=kill+a+watt+power+meter',
            productName: 'Kill A Watt Power Meter',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: 'Check power meter price on Amazon (useful for tokens/sec-per-watt comparisons)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why do benchmark results vary between runs?',
            a: 'Thermal throttling, background processes, and cold-start model loading all affect single-run results. Average multiple runs (llama-bench supports repeated runs natively) for a reliable number instead of trusting one sample.',
          },
          {
            q: 'Does llama-bench work with GGUF models only?',
            a: 'Yes — llama-bench is part of the llama.cpp toolchain, which is built around the GGUF format. To benchmark a GPTQ or AWQ model, you need a different tool tied to the serving framework that loads that format, such as vLLM\'s built-in benchmarking scripts.',
          },
          {
            q: 'Is prompt-processing speed or generation speed more important?',
            a: 'It depends on your use case. Long-document summarization is dominated by prompt-processing speed, since most of the work is reading the input. Interactive chat is dominated by generation speed, since the model produces most of its output token by token after a short prompt.',
          },
          {
            q: 'Can I compare tokens/sec numbers I find online to my own hardware?',
            a: 'Only if the context length, quantization level, and model size match exactly. A tokens/sec figure without those details attached is not comparable to your setup — treat unattributed numbers from forums or social media as rough anecdotes, not benchmarks.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Das beste Tool zum Benchmarking von Tokens/Sek. bei lokalen LLMs?',
    seoTitle: 'Bestes Benchmarking-Tool für lokale LLMs: llama-bench im Vergleich',
    metaDescription:
      'llama-bench (im Lieferumfang von llama.cpp) ist das beste Tool zum Benchmarking der Tokens/Sek. bei lokalen LLMs — es trennt Prompt-Verarbeitung und Generierungsgeschwindigkeit bei fester Kontextlänge und Quantisierungsstufe.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die die Inferenzgeschwindigkeit lokaler LLMs über verschiedene Hardware oder Quantisierungsstufen hinweg messen und vergleichen möchten',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>llama-bench, das mit llama.cpp gelieferte Benchmarking-Werkzeug, ist das beste Tool, um Tokens pro Sekunde bei lokalen LLMs zu messen</strong> — es meldet Prompt-Verarbeitungsgeschwindigkeit und Generierungsgeschwindigkeit als getrennte Werte bei fester Kontextlänge und Quantisierungsstufe, sodass Ergebnisse über verschiedene Hardware hinweg direkt vergleichbar sind. Die `--verbose`-Option von Ollama ist eine schnellere, weniger strenge Alternative für einen kurzen Plausibilitätscheck.',
    toc: [
      { label: 'Beste Wahl: llama-bench', anchor: '#best-pick' },
      { label: 'Worauf bei einem Benchmarking-Tool zu achten ist', anchor: '#what-to-look-for' },
      { label: 'Hardware für Ihren Benchmark', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste Tool zum Benchmarking der Tokens/Sek. bei lokalen LLMs?',
        answer:
          'llama-bench, im Lieferumfang von llama.cpp enthalten, ist das beste Tool zum Benchmarking der Inferenzgeschwindigkeit lokaler LLMs. Es meldet Prompt-Verarbeitung und Generierungsgeschwindigkeit getrennt bei fester Kontextlänge und Quantisierungsstufe, wodurch Ergebnisse über unterschiedliche Hardware hinweg vergleichbar werden.',
        bullets: [
          'llama-bench: die gründlichste Option — trennt Prompt-Verarbeitungsgeschwindigkeit von Generierungsgeschwindigkeit und kontrolliert Kontextlänge und Quantisierung.',
          'Ollama --verbose: der schnellste Weg zu einer groben Tokens/Sek.-Zahl aus einer normalen Chat-Sitzung, weniger kontrolliert als llama-bench.',
          'Drittanbieter-GUIs (die eingebauten Statistiken von LM Studio) sind praktisch für einen schnellen Überblick, bieten aber nicht dieselbe Kontrolle über Wiederholungsläufe.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench ist das gründlichste Benchmarking-Tool — es trennt Prompt-Verarbeitungsgeschwindigkeit von Generierungsgeschwindigkeit unter festen Einstellungen',
          'Die --verbose-Option von Ollama liefert eine schnelle, grobe Tokens/Sek.-Schätzung aus einem normalen Chat-Lauf, nützlich für schnelle Checks',
          'Kontextlänge und Quantisierungsstufe zwischen Läufen immer konstant halten, sonst ist der Vergleich bedeutungslos',
          'Mehrere Durchläufe ausführen und das Ergebnis mitteln — ein einzelner Lauf wird durch thermisches Throttling und Kaltstart-Ladezeit beeinflusst',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama-bench, im Lieferumfang von llama.cpp, ist das beste Tool zum Benchmarking der Tokens pro Sekunde bei lokalen LLMs, weil es Prompt-Verarbeitungsgeschwindigkeit von Generierungsgeschwindigkeit unter kontrollierten Einstellungen trennt.',
          },
          {
            type: 'plain-terms',
            text: 'Einfach gesagt: llama-bench führt denselben Test mehrfach bei festen Einstellungen aus und meldet zwei saubere Geschwindigkeitswerte, statt einer verrauschten Zahl aus einer normalen Chat-Sitzung.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: llama-bench',
        content: [
          '<strong>llama-bench ist die richtige Standardwahl für alle, die eine wiederholbare, hardwarevergleichbare Tokens-pro-Sekunde-Zahl benötigen.</strong> Es ist Teil des llama.cpp-Builds, läuft über die Kommandozeile und meldet für jeden Test zwei getrennte Werte: Prompt-Verarbeitungsgeschwindigkeit (wie schnell das Modell die Eingabe liest) und Generierungsgeschwindigkeit (wie schnell es neue Tokens erzeugt). Diese beiden Werte verhalten sich unter Last sehr unterschiedlich, weshalb ein Tool, das sie vermischt, kein vollständiges Bild liefert.',
          'Die `--verbose`-Option von Ollama ist die praktische Alternative für einen schnellen Plausibilitätscheck. Der Befehl `ollama run <model> --verbose` gibt am Ende einer normalen Chat-Antwort einen Tokens/Sek.-Wert aus, ohne dass ein separater Benchmark-Rahmen nötig ist. Das ist praktisch, aber der Wert stammt aus einer einzelnen, unkontrollierten Generierung — nicht aus einem wiederholten Lauf mit festem Kontext — und ist daher verrauschter und weniger geeignet, um zwei unterschiedliche Hardware-Konfigurationen zu vergleichen.',
          'LM Studio und andere Desktop-Frontends zeigen in ihrer Chat-Oberfläche eine ähnliche Live-Anzeige der Tokens/Sek. Nutzen Sie das für einen schnellen Blick, während Sie das Tool ohnehin verwenden, aber verlassen Sie sich nicht darauf für eine Hardware-Kaufentscheidung — es bietet keine Kontrolle über Laufanzahl oder Kontextlänge, die ein Benchmark-Ergebnis vertrauenswürdig machen.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'Worauf bei einem Benchmarking-Tool zu achten ist',
        content: [
          '<strong>Ein vertrauenswürdiges Benchmarking-Tool für lokale LLMs hält Kontextlänge, Quantisierungsstufe und Prompt-Inhalt zwischen Läufen konstant und meldet Prompt-Verarbeitungsgeschwindigkeit und Token-Generierungsgeschwindigkeit als getrennte Werte.</strong> Ohne diese Kontrollen sagt eine „Tokens/Sek."-Zahl aus einem einzelnen Lauf fast nichts darüber aus, wie dasselbe Setup bei einem längeren Prompt oder einer anderen Quantisierung abschneiden wird.',
          'Nutzen Sie ein Benchmarking-Tool, wenn Sie GPUs vor einem Kauf vergleichen, bewerten, ob eine Quantisierungsstufe den Qualitätsverlust wert ist, oder Leistungswerte öffentlich berichten. Verzichten Sie auf den formalen Benchmark und schauen Sie einfach auf den Live-Tokens/Sek.-Zähler, wenn Sie nur ein grobes Gefühl dafür brauchen, ob ein Modell für den Chat nutzbar ist.',
          'Vermeiden Sie: Einzellauf-Werte, die ohne Angabe von Kontextlänge oder Quantisierungsstufe berichtet werden — sie lassen sich mit nichts vergleichen. Vermeiden Sie: Tools, die nur eine kombinierte Tokens/Sek.-Zahl melden, da Prompt-Verarbeitung und Generierungsgeschwindigkeit sich mit Kontextlänge und Hardware unterschiedlich skalieren.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware für Ihren Benchmark',
        content: [
          'Wenn Sie mit dem Ziel benchmarken, eine Upgrade-Entscheidung zu treffen, führen Sie denselben llama-bench-Befehl auf Ihrer vorhandenen GPU und auf der Kandidaten-GPU mit derselben Modelldatei und Quantisierung aus und vergleichen Sie dann die beiden Werte für Prompt-Verarbeitung und Generierung nebeneinander.',
          '<em>Hinweis: Dieser Artikel enthält Affiliate-Links. Wir erhalten möglicherweise eine Provision, wenn Sie über diese Links einkaufen — ohne Mehrkosten für Sie.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=16GB+VRAM+Grafikkarte',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: 'Preise für 16GB-VRAM-GPUs bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=kill+a+watt+strommessgeraet',
            productName: 'Kill A Watt Strommessgerät',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: 'Preis des Strommessgeräts bei Amazon prüfen (nützlich für Tokens/Sek.-pro-Watt-Vergleiche)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Warum variieren Benchmark-Ergebnisse zwischen den Läufen?',
            a: 'Thermisches Throttling, Hintergrundprozesse und Kaltstart-Ladezeiten des Modells beeinflussen alle Einzellaufergebnisse. Mitteln Sie mehrere Läufe (llama-bench unterstützt wiederholte Läufe nativ) für eine verlässliche Zahl, statt einer einzelnen Stichprobe zu vertrauen.',
          },
          {
            q: 'Funktioniert llama-bench nur mit GGUF-Modellen?',
            a: 'Ja — llama-bench ist Teil der llama.cpp-Toolchain, die um das GGUF-Format herum aufgebaut ist. Um ein GPTQ- oder AWQ-Modell zu benchmarken, benötigen Sie ein anderes Tool, das an das Serving-Framework gebunden ist, das dieses Format lädt, etwa die eingebauten Benchmarking-Skripte von vLLM.',
          },
          {
            q: 'Ist die Prompt-Verarbeitungsgeschwindigkeit oder die Generierungsgeschwindigkeit wichtiger?',
            a: 'Das hängt vom Anwendungsfall ab. Die Zusammenfassung langer Dokumente wird von der Prompt-Verarbeitungsgeschwindigkeit dominiert, da der Großteil der Arbeit im Lesen der Eingabe besteht. Interaktiver Chat wird von der Generierungsgeschwindigkeit dominiert, da das Modell die meiste Ausgabe Token für Token nach einem kurzen Prompt erzeugt.',
          },
          {
            q: 'Kann ich online gefundene Tokens/Sek.-Werte mit meiner eigenen Hardware vergleichen?',
            a: 'Nur, wenn Kontextlänge, Quantisierungsstufe und Modellgröße exakt übereinstimmen. Eine Tokens/Sek.-Zahl ohne diese Angaben ist mit Ihrem Setup nicht vergleichbar — behandeln Sie nicht zugeordnete Zahlen aus Foren oder sozialen Medien als grobe Anekdoten, nicht als Benchmarks.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: "Quel est le meilleur outil pour le benchmark des tokens/sec d'un LLM local ?",
    seoTitle: "Meilleur outil de benchmark pour LLM local : llama-bench et alternatives",
    metaDescription:
      "llama-bench (fourni avec llama.cpp) est le meilleur outil pour le benchmark des tokens/sec d'un LLM local — il isole la vitesse de traitement du prompt et la vitesse de génération sous une longueur de contexte et un niveau de quantification fixes.",
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Développeurs souhaitant mesurer et comparer la vitesse d'inférence de LLM locaux selon le matériel ou le niveau de quantification",
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      "<strong>llama-bench, l'utilitaire de benchmark fourni avec llama.cpp, est le meilleur outil pour mesurer les tokens par seconde d'un LLM local</strong> — il indique la vitesse de traitement du prompt et la vitesse de génération sous forme de deux chiffres distincts, à longueur de contexte et niveau de quantification fixes, ce qui rend les résultats directement comparables entre configurations matérielles. L'option `--verbose` d'Ollama constitue une alternative plus rapide mais moins rigoureuse pour une vérification rapide.",
    toc: [
      { label: 'Meilleur choix : llama-bench', anchor: '#best-pick' },
      { label: "Ce qu'il faut rechercher dans un outil de benchmark", anchor: '#what-to-look-for' },
      { label: 'Matériel à associer à votre benchmark', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      fr: {
        question: "Quel est le meilleur outil pour le benchmark des tokens/sec d'un LLM local ?",
        answer:
          "llama-bench, inclus avec llama.cpp, est le meilleur outil pour le benchmark de la vitesse d'inférence d'un LLM local. Il indique séparément la vitesse de traitement du prompt et la vitesse de génération à longueur de contexte et niveau de quantification fixes, rendant les résultats comparables entre différentes configurations matérielles.",
        bullets: [
          'llama-bench : l\'option la plus rigoureuse — sépare la vitesse de traitement du prompt de la vitesse de génération, contrôle la longueur de contexte et la quantification.',
          "Ollama --verbose : le moyen le plus rapide d'obtenir un chiffre approximatif de tokens/sec à partir d'une session de chat normale, moins contrôlé que llama-bench.",
          "Les interfaces graphiques tierces (statistiques intégrées de LM Studio) sont pratiques pour un aperçu rapide mais n'offrent pas le même contrôle d'une exécution à l'autre.",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench est l\'outil de benchmark le plus rigoureux — il isole la vitesse de traitement du prompt de la vitesse de génération sous des paramètres fixes',
          "L'option --verbose d'Ollama donne une estimation rapide et approximative des tokens/sec à partir d'une session de chat normale, utile pour des vérifications rapides",
          'Toujours fixer la longueur de contexte et le niveau de quantification entre les exécutions, sinon la comparaison est dénuée de sens',
          "Effectuez plusieurs passages et faites la moyenne du résultat — une seule exécution est affectée par le throttling thermique et le chargement à froid",
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "llama-bench, fourni avec llama.cpp, est le meilleur outil pour le benchmark des tokens par seconde d'un LLM local car il sépare la vitesse de traitement du prompt de la vitesse de génération sous des paramètres contrôlés.",
          },
          {
            type: 'plain-terms',
            text: "En termes simples : llama-bench exécute le même test plusieurs fois avec des paramètres fixes et indique deux chiffres de vitesse nets, au lieu d'un chiffre bruité issu d'une session de chat normale.",
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : llama-bench',
        content: [
          "<strong>llama-bench est le choix par défaut pour quiconque a besoin d'un chiffre de tokens par seconde reproductible et comparable entre configurations matérielles.</strong> Il fait partie du build llama.cpp, s'exécute en ligne de commande et indique deux chiffres distincts pour chaque test : la vitesse de traitement du prompt (la rapidité avec laquelle le modèle lit l'entrée) et la vitesse de génération (la rapidité avec laquelle il produit de nouveaux tokens). Ces deux chiffres se comportent très différemment sous charge, donc un outil qui les confond ne donne pas une image complète.",
          "L'option `--verbose` d'Ollama est l'alternative pratique pour une vérification rapide. La commande `ollama run <model> --verbose` affiche un chiffre de tokens/sec à la fin d'une réponse de chat normale, sans nécessiter de dispositif de benchmark séparé. C'est pratique, mais le chiffre provient d'une seule génération non contrôlée — pas d'une exécution répétée à contexte fixe — il est donc plus bruité et moins adapté pour comparer deux configurations matérielles différentes.",
          "LM Studio et d'autres interfaces de bureau affichent un indicateur de tokens/sec en direct similaire dans leur interface de chat. Utilisez-le pour un contrôle visuel rapide pendant que vous utilisez déjà l'outil, mais ne vous y fiez pas pour une décision d'achat matériel — il n'offre pas les contrôles du nombre d'exécutions ni de la longueur de contexte qui rendent un résultat de benchmark fiable.",
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "Ce qu'il faut rechercher dans un outil de benchmark",
        content: [
          "<strong>Un outil de benchmark fiable pour LLM local maintient constants la longueur de contexte, le niveau de quantification et le contenu du prompt entre les exécutions, et indique la vitesse de traitement du prompt et la vitesse de génération de tokens sous forme de chiffres distincts.</strong> Sans ces contrôles, un chiffre de « tokens/sec » issu d'une seule exécution ne renseigne presque rien sur la performance de la même configuration avec un prompt plus long ou une quantification différente.",
          "Utilisez un outil de benchmark si vous comparez des GPU avant un achat, si vous évaluez si un niveau de quantification vaut le compromis de qualité, ou si vous publiez des chiffres de performance. Ignorez le benchmark formel et observez simplement le compteur de tokens/sec en direct si vous voulez juste une impression approximative de l'utilisabilité d'un modèle pour le chat.",
          "À éviter : les chiffres d'une seule exécution rapportés sans longueur de contexte ni niveau de quantification associés — ils ne sont comparables à rien. À éviter : les outils qui ne rapportent qu'un chiffre combiné de tokens/sec, car la vitesse de traitement du prompt et la vitesse de génération évoluent différemment selon la longueur de contexte et le matériel.",
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Matériel à associer à votre benchmark',
        content: [
          "Si vous effectuez un benchmark dans le but de décider d'une mise à niveau, exécutez la même commande llama-bench sur votre GPU actuel et sur le GPU candidat avec le même fichier de modèle et la même quantification, puis comparez les deux chiffres de traitement du prompt et de génération côte à côte.",
          '<em>Divulgation : Cet article contient des liens affiliés. Nous pouvons percevoir une commission si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=GPU+16GB+VRAM',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: 'Vérifier le prix des GPU 16GB VRAM sur Amazon',
          },
          {
            url: 'https://www.amazon.fr/s?k=wattmetre+kill+a+watt',
            productName: 'Kill A Watt Power Meter',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: "Vérifier le prix du wattmètre sur Amazon (utile pour les comparaisons de tokens/sec par watt)",
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: "Pourquoi les résultats de benchmark varient-ils d'une exécution à l'autre ?",
            a: "Le throttling thermique, les processus en arrière-plan et le chargement à froid du modèle affectent tous les résultats d'une seule exécution. Faites la moyenne de plusieurs exécutions (llama-bench prend nativement en charge les exécutions répétées) pour obtenir un chiffre fiable plutôt que de vous fier à un seul échantillon.",
          },
          {
            q: 'llama-bench fonctionne-t-il uniquement avec les modèles GGUF ?',
            a: "Oui — llama-bench fait partie de la chaîne d'outils llama.cpp, construite autour du format GGUF. Pour évaluer un modèle GPTQ ou AWQ, vous avez besoin d'un autre outil lié au framework de service qui charge ce format, comme les scripts de benchmark intégrés de vLLM.",
          },
          {
            q: 'La vitesse de traitement du prompt ou la vitesse de génération est-elle la plus importante ?',
            a: "Cela dépend de votre cas d'usage. Le résumé de longs documents est dominé par la vitesse de traitement du prompt, car l'essentiel du travail consiste à lire l'entrée. Le chat interactif est dominé par la vitesse de génération, car le modèle produit l'essentiel de sa sortie token par token après un prompt court.",
          },
          {
            q: 'Puis-je comparer des chiffres de tokens/sec trouvés en ligne à mon propre matériel ?',
            a: "Seulement si la longueur de contexte, le niveau de quantification et la taille du modèle correspondent exactement. Un chiffre de tokens/sec sans ces détails n'est pas comparable à votre configuration — traitez les chiffres non attribués issus de forums ou de réseaux sociaux comme des anecdotes approximatives, pas des benchmarks.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: 'ローカルLLMのトークン/秒をベンチマークする最良のツールは?',
    seoTitle: 'ローカルLLMベンチマークツール比較:llama-benchと代替ツール',
    metaDescription:
      'llama.cppに同梱されるllama-benchは、ローカルLLMのトークン/秒をベンチマークする最良のツールです。固定したコンテキスト長と量子化レベルの下で、プロンプト処理速度と生成速度を分けて測定できます。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ハードウェアや量子化レベルの違いによるローカルLLMの推論速度を測定・比較したい開発者',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>llama.cppに同梱されるベンチマークユーティリティllama-benchは、ローカルLLMのトークン毎秒を測定する最良のツールです。</strong>固定したコンテキスト長と量子化レベルの下で、プロンプト処理速度と生成速度を別々の数値として報告するため、異なるハードウェア間で結果を直接比較できます。Ollamaの`--verbose`フラグは、簡易的な動作確認に使える、より高速だが厳密さに欠ける代替手段です。',
    toc: [
      { label: 'ベストピック:llama-bench', anchor: '#best-pick' },
      { label: 'ベンチマークツールに求めるべきポイント', anchor: '#what-to-look-for' },
      { label: 'ベンチマークに組み合わせるハードウェア', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMのトークン/秒をベンチマークする最良のツールは?',
        answer:
          'llama.cppに含まれるllama-benchが、ローカルLLMの推論速度をベンチマークする最良のツールです。固定したコンテキスト長と量子化レベルの下でプロンプト処理速度と生成速度を分けて報告するため、異なるハードウェア間で結果を比較できます。',
        bullets: [
          'llama-bench:最も厳密な選択肢。プロンプト処理速度と生成速度を分離し、コンテキスト長と量子化を制御します。',
          'Ollama --verbose:通常のチャットセッションから大まかなトークン/秒の数値を得る最速の方法ですが、llama-benchほど制御されていません。',
          'サードパーティ製GUI(LM Studioの内蔵統計など)は素早い確認には便利ですが、実行ごとの制御を同じレベルでは提供しません。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-benchは最も厳密なベンチマークツールで、固定設定下でプロンプト処理速度と生成速度を分離します',
          'Ollamaの--verboseフラグは通常のチャット実行から素早く大まかなトークン/秒を得られ、簡易チェックに有用です',
          'コンテキスト長と量子化レベルは実行間で必ず固定してください。そうでなければ比較に意味がありません',
          '複数回実行して結果を平均してください。1回の実行は熱によるスロットリングやコールドスタートの読み込みの影響を受けます',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama.cppに同梱されるllama-benchは、制御された設定下でプロンプト処理速度と生成速度を分離できるため、ローカルLLMのトークン毎秒をベンチマークする最良のツールです。',
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
          '<strong>llama-benchは、再現可能でハードウェア間比較が可能なトークン毎秒の数値を必要とするすべての人にとって適切な既定の選択です。</strong>llama.cppのビルドの一部として提供され、コマンドラインから実行し、テストごとに2つの別々の数値を報告します。プロンプト処理速度(モデルが入力をどれだけ速く読むか)と生成速度(新しいトークンをどれだけ速く生成するか)です。この2つの数値は負荷のかかり方が大きく異なるため、両者を混同するツールでは全体像を把握できません。',
          'Ollamaの`--verbose`フラグは、簡易的な動作確認に使える実用的な代替手段です。`ollama run <model> --verbose`を実行すると、通常のチャット応答の末尾にトークン/秒の数値が表示され、別途ベンチマーク環境を用意する必要がありません。便利ではありますが、この数値は単一の制御されていない生成から得られたものであり、繰り返しの固定コンテキスト実行ではないため、ノイズが多く、2つの異なるハードウェアを比較する用途には適していません。',
          'LM StudioなどのデスクトップフロントエンドもチャットUI内で同様のリアルタイムトークン/秒表示を提供します。すでにそのツールを使っている際の簡単な目視確認には使えますが、ハードウェア購入の判断には頼らないでください。ベンチマーク結果の信頼性を担保する実行回数やコンテキスト長の制御が公開されていません。',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'ベンチマークツールに求めるべきポイント',
        content: [
          '<strong>信頼できるローカルLLMベンチマークツールは、実行間でコンテキスト長・量子化レベル・プロンプト内容を一定に保ち、プロンプト処理速度とトークン生成速度を別々の数値として報告します。</strong>これらの制御がなければ、1回の実行から得られた「トークン/秒」の数値は、同じ構成がより長いプロンプトや異なる量子化でどう動作するかについてほとんど何も教えてくれません。',
          '購入前にGPUを比較する場合、量子化レベルが品質面のトレードオフに見合うか評価する場合、あるいはパフォーマンス数値を公開する場合はベンチマークツールを使ってください。モデルがチャットに使えるかどうかの大まかな感触だけが欲しい場合は、正式なベンチマークを省略してライブのトークン/秒カウンターを見るだけで十分です。',
          '避けるべきこと:コンテキスト長や量子化レベルが付随しない単一実行の数値。これらは何とも比較できません。避けるべきこと:プロンプト処理速度と生成速度を1つにまとめた数値しか報告しないツール。これら2つはコンテキスト長とハードウェアによって異なるスケーリングを示すためです。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ベンチマークに組み合わせるハードウェア',
        content: [
          'アップグレードの判断を目的にベンチマークを行う場合は、同じモデルファイルと量子化を使って、現在のGPUと候補のGPUで同じllama-benchコマンドを実行し、両者のプロンプト処理と生成の数値を並べて比較してください。',
          '<em>開示:この記事にはアフィリエイトリンクが含まれています。これらのリンク経由で購入された場合、追加費用なしで当サイトが手数料を得ることがあります。</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=16GB+VRAM+デスクトップGPU',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: 'Amazonで16GB VRAM GPUの価格を確認する',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=kill+a+watt+電力計',
            productName: 'Kill A Watt Power Meter',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: 'Amazonで電力計の価格を確認する(トークン/秒-per-ワット比較に便利)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'なぜベンチマーク結果は実行ごとに変動するのですか?',
            a: '熱によるスロットリング、バックグラウンドプロセス、モデルのコールドスタート読み込みはすべて単一実行の結果に影響します。単一のサンプルを信用するのではなく、複数回の実行を平均してください(llama-benchはネイティブに繰り返し実行をサポートしています)。',
          },
          {
            q: 'llama-benchはGGUFモデルでしか動作しませんか?',
            a: 'はい。llama-benchはGGUF形式を中心に構築されたllama.cppツールチェーンの一部です。GPTQやAWQモデルをベンチマークするには、その形式を読み込むサービングフレームワークに紐づいた別のツール(vLLMの内蔵ベンチマークスクリプトなど)が必要です。',
          },
          {
            q: 'プロンプト処理速度と生成速度、どちらがより重要ですか?',
            a: '用途によります。長文ドキュメントの要約はプロンプト処理速度に支配されます。作業の大部分が入力を読む処理だからです。対話型チャットは生成速度に支配されます。短いプロンプトの後、モデルが出力の大部分をトークンごとに生成するためです。',
          },
          {
            q: 'オンラインで見つけたトークン/秒の数値を自分のハードウェアと比較できますか?',
            a: 'コンテキスト長・量子化レベル・モデルサイズが完全に一致する場合に限ります。これらの詳細が付随しないトークン/秒の数値は自分の構成と比較できません。フォーラムやSNSで出典が不明な数値は、ベンチマークではなく大まかな体験談として扱ってください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: '衡量本地LLM每秒token数的最佳工具是什么?',
    seoTitle: '本地LLM基准测试工具评测:llama-bench与替代方案',
    metaDescription:
      'llama-bench(随llama.cpp附带)是衡量本地LLM每秒token数的最佳工具——它在固定上下文长度和量化级别下,分别隔离提示词处理速度和生成速度。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '希望在不同硬件或量化级别下测量并比较本地LLM推理速度的开发者',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>llama-bench是随llama.cpp附带的基准测试工具,是衡量本地LLM每秒token数的最佳工具</strong>——它在固定上下文长度和量化级别下,将提示词处理速度和生成速度报告为两个独立的数值,使结果在不同硬件之间可以直接比较。Ollama的`--verbose`标志是一个更快但不够严谨的替代方案,适合快速检查。',
    toc: [
      { label: '最佳选择:llama-bench', anchor: '#best-pick' },
      { label: '选择基准测试工具时要关注什么', anchor: '#what-to-look-for' },
      { label: '搭配基准测试的硬件', anchor: '#hardware' },
      { label: '常见问题', anchor: '#faq' },
    ],
    quickAnswerTop: {
      zh: {
        question: '衡量本地LLM每秒token数的最佳工具是什么?',
        answer:
          'llama-bench随llama.cpp附带,是衡量本地LLM推理速度的最佳工具。它在固定上下文长度和量化级别下分别报告提示词处理速度和生成速度,使结果在不同硬件之间具有可比性。',
        bullets: [
          'llama-bench:最严谨的选项——将提示词处理速度与生成速度分离,并控制上下文长度和量化级别。',
          'Ollama --verbose:从普通聊天会话中快速获得大致每秒token数的最快方式,但控制程度不如llama-bench。',
          '第三方图形界面(如LM Studio内置的统计信息)便于快速查看,但不提供相同程度的运行间控制。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench是最严谨的基准测试工具——在固定设置下将提示词处理速度与生成速度分离',
          'Ollama的--verbose标志可从普通聊天中快速获得大致的每秒token数,适合快速检查',
          '务必在多次运行之间固定上下文长度和量化级别,否则比较毫无意义',
          '多次运行并取平均值——单次运行会受到热节流和冷启动加载的影响',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama-bench随llama.cpp附带,是衡量本地LLM每秒token数的最佳工具,因为它能在受控设置下将提示词处理速度与生成速度分开。',
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
          '<strong>对于任何需要可重复、可跨硬件比较的每秒token数数值的人来说,llama-bench都是正确的默认选择。</strong>它作为llama.cpp构建的一部分发布,通过命令行运行,并为每次测试报告两个独立数值:提示词处理速度(模型读取输入的速度)和生成速度(模型生成新token的速度)。这两个数值在负载下的表现差异很大,因此混淆两者的工具无法提供完整的信息。',
          'Ollama的`--verbose`标志是快速健全性检查的实用替代方案。运行`ollama run <model> --verbose`会在普通聊天回复结束时打印每秒token数,无需单独的基准测试框架。它很方便,但该数值来自单次、不受控的生成过程——而非重复的固定上下文运行——因此噪声更大,不太适合用于比较两种不同的硬件。',
          'LM Studio和其他桌面前端在聊天界面中提供类似的实时每秒token数读数。可以在使用工具时用它快速目测,但不要依赖它做硬件购买决策——它不提供影响基准测试结果可信度的运行次数或上下文长度控制。',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: '选择基准测试工具时要关注什么',
        content: [
          '<strong>可信的本地LLM基准测试工具会在多次运行之间保持上下文长度、量化级别和提示词内容不变,并将提示词处理速度和token生成速度报告为独立的数值。</strong>没有这些控制,单次运行得到的"每秒token数"几乎无法说明同一配置在更长提示词或不同量化下的表现。',
          '如果你在购买前比较GPU、评估某个量化级别是否值得质量上的取舍,或需要公开报告性能数据,请使用基准测试工具。如果只想大致了解某个模型是否适合聊天使用,可以跳过正式基准测试,直接观察实时每秒token数计数器。',
          '要避免:未附带上下文长度或量化级别的单次运行数值——它们无法与任何东西比较。要避免:只报告单一合并每秒token数的工具,因为提示词处理速度和生成速度随上下文长度和硬件的变化规律不同。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '搭配基准测试的硬件',
        content: [
          '如果你的基准测试目标是决定是否升级,请在现有GPU和候选GPU上使用相同的模型文件和量化运行同一个llama-bench命令,然后并排比较两者的提示词处理和生成数值。',
          '<em>披露:本文包含联盟链接。如果你通过这些链接购买商品,我们可能会获得佣金,你无需为此支付额外费用。</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=16GB+VRAM+GPU',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: '在Amazon查看16GB VRAM GPU的价格',
          },
          {
            url: 'https://www.amazon.com/s?k=kill+a+watt+power+meter',
            productName: 'Kill A Watt Power Meter',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: '在Amazon查看功率计的价格(适用于每秒token数-每瓦对比)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '为什么基准测试结果在不同运行之间会有差异?',
            a: '热节流、后台进程和模型的冷启动加载都会影响单次运行的结果。请对多次运行取平均值(llama-bench原生支持重复运行),而不是相信单次样本得到的可靠数值。',
          },
          {
            q: 'llama-bench只能用于GGUF模型吗?',
            a: '是的——llama-bench是围绕GGUF格式构建的llama.cpp工具链的一部分。要对GPTQ或AWQ模型进行基准测试,你需要一个与加载该格式的服务框架绑定的不同工具,例如vLLM内置的基准测试脚本。',
          },
          {
            q: '提示词处理速度和生成速度哪个更重要?',
            a: '这取决于你的使用场景。长文档摘要主要受提示词处理速度影响,因为大部分工作是读取输入。交互式聊天主要受生成速度影响,因为模型在简短提示词之后逐token生成大部分输出。',
          },
          {
            q: '我能把网上找到的每秒token数数值与自己的硬件比较吗?',
            a: '只有在上下文长度、量化级别和模型大小完全一致的情况下才可以。没有这些细节的每秒token数数值无法与你的配置比较——把论坛或社交媒体上未注明来源的数字当作粗略的轶事,而非基准测试结果。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    title: '¿Cuál es la mejor herramienta para medir tokens/seg en un LLM local?',
    seoTitle: 'Mejor herramienta de benchmarking para LLM local: llama-bench y alternativas',
    metaDescription:
      'llama-bench (incluida con llama.cpp) es la mejor herramienta para medir tokens/seg en un LLM local — aísla la velocidad de procesamiento del prompt y la velocidad de generación bajo una longitud de contexto y un nivel de cuantización fijos.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que quieren medir y comparar la velocidad de inferencia de LLM locales entre distintos hardwares o niveles de cuantización',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>llama-bench, la utilidad de benchmarking incluida con llama.cpp, es la mejor herramienta para medir tokens por segundo en un LLM local</strong> — reporta la velocidad de procesamiento del prompt y la velocidad de generación como cifras separadas bajo una longitud de contexto y un nivel de cuantización fijos, de modo que los resultados son directamente comparables entre hardwares. La opción `--verbose` de Ollama es una alternativa más rápida pero menos rigurosa para una comprobación rápida.',
    toc: [
      { label: 'Mejor opción: llama-bench', anchor: '#best-pick' },
      { label: 'Qué buscar en una herramienta de benchmarking', anchor: '#what-to-look-for' },
      { label: 'Hardware para acompañar tu benchmark', anchor: '#hardware' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor herramienta para medir tokens/seg en un LLM local?',
        answer:
          'llama-bench, incluida con llama.cpp, es la mejor herramienta para medir la velocidad de inferencia de un LLM local. Reporta la velocidad de procesamiento del prompt y la de generación por separado, bajo una longitud de contexto y un nivel de cuantización fijos, lo que hace que los resultados sean comparables entre distintos hardwares.',
        bullets: [
          'llama-bench: la opción más rigurosa — separa la velocidad de procesamiento del prompt de la velocidad de generación y controla la longitud de contexto y la cuantización.',
          'Ollama --verbose: la forma más rápida de obtener una cifra aproximada de tokens/seg desde una sesión de chat normal, menos controlada que llama-bench.',
          'Las interfaces gráficas de terceros (las estadísticas integradas de LM Studio) son convenientes para una lectura rápida, pero no exponen el mismo control entre ejecuciones.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench es la herramienta de benchmarking más rigurosa — aísla la velocidad de procesamiento del prompt de la velocidad de generación bajo configuraciones fijas',
          'La opción --verbose de Ollama ofrece una estimación rápida y aproximada de tokens/seg desde una ejecución de chat normal, útil para comprobaciones rápidas',
          'Fija siempre la longitud de contexto y el nivel de cuantización entre ejecuciones, o la comparación carece de sentido',
          'Ejecuta varias pasadas y promedia el resultado — una sola ejecución se ve afectada por el throttling térmico y la carga en frío',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama-bench, incluida con llama.cpp, es la mejor herramienta para medir tokens por segundo en un LLM local porque separa la velocidad de procesamiento del prompt de la velocidad de generación bajo configuraciones controladas.',
          },
          {
            type: 'plain-terms',
            text: 'En términos simples: llama-bench ejecuta la misma prueba varias veces con configuraciones fijas y reporta dos cifras de velocidad claras, en lugar de una cifra ruidosa proveniente de una sesión de chat normal.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: llama-bench',
        content: [
          '<strong>llama-bench es la opción por defecto correcta para quien necesite una cifra de tokens por segundo repetible y comparable entre hardwares.</strong> Se incluye como parte del build de llama.cpp, se ejecuta desde la línea de comandos y reporta dos cifras separadas en cada prueba: velocidad de procesamiento del prompt (qué tan rápido lee el modelo la entrada) y velocidad de generación (qué tan rápido produce nuevos tokens). Estas dos cifras se comportan de forma muy distinta bajo carga, así que una herramienta que las combina no te da el panorama completo.',
          'La opción `--verbose` de Ollama es la alternativa práctica para una comprobación rápida. Ejecutar `ollama run <model> --verbose` imprime una cifra de tokens/seg al final de una respuesta de chat normal, sin necesitar un arnés de benchmark aparte. Es conveniente, pero la cifra proviene de una única generación no controlada — no de una ejecución repetida a contexto fijo — por lo que es más ruidosa y menos adecuada para comparar dos piezas de hardware distintas.',
          'LM Studio y otros frontends de escritorio muestran una lectura de tokens/seg en vivo similar en su interfaz de chat. Úsala para una comprobación visual rápida mientras ya estás usando la herramienta, pero no confíes en ella para una decisión de compra de hardware — no expone los controles de número de ejecuciones o longitud de contexto que hacen confiable un resultado de benchmark.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'Qué buscar en una herramienta de benchmarking',
        content: [
          '<strong>Una herramienta de benchmarking confiable para LLM locales mantiene constantes la longitud de contexto, el nivel de cuantización y el contenido del prompt entre ejecuciones, y reporta la velocidad de procesamiento del prompt y la velocidad de generación de tokens como cifras separadas.</strong> Sin esos controles, una cifra de "tokens/seg" de una sola ejecución casi no te dice nada sobre cómo rendirá la misma configuración con un prompt más largo o una cuantización distinta.',
          'Usa una herramienta de benchmarking si estás comparando GPU antes de una compra, evaluando si un nivel de cuantización vale la pena por la pérdida de calidad, o reportando cifras de rendimiento públicamente. Sáltate el benchmark formal y observa el contador de tokens/seg en vivo si solo quieres una idea aproximada de si un modelo es usable para chat.',
          'Evita: cifras de una sola ejecución reportadas sin longitud de contexto o nivel de cuantización asociados — no se pueden comparar con nada. Evita: herramientas que solo reportan una cifra combinada de tokens/seg, ya que la velocidad de procesamiento del prompt y la de generación escalan de forma distinta según el contexto y el hardware.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware para acompañar tu benchmark',
        content: [
          'Si estás haciendo benchmarking con el objetivo de decidir si actualizar, ejecuta el mismo comando de llama-bench en tu GPU actual y en la GPU candidata usando el mismo archivo de modelo y cuantización, y luego compara las dos cifras de procesamiento del prompt y generación una junto a la otra.',
          '<em>Divulgación: Este artículo contiene enlaces de afiliados. Podemos ganar una comisión si compras a través de estos enlaces, sin costo adicional para ti.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=16GB+VRAM+GPU',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: 'Consultar precios de GPU con 16GB VRAM en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=kill+a+watt+power+meter',
            productName: 'Kill A Watt Power Meter',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: 'Consultar el precio del medidor de consumo en Amazon (útil para comparaciones de tokens/seg por vatio)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Por qué varían los resultados del benchmark entre ejecuciones?',
            a: 'El throttling térmico, los procesos en segundo plano y la carga en frío del modelo afectan los resultados de una sola ejecución. Promedia varias ejecuciones (llama-bench admite ejecuciones repetidas de forma nativa) para obtener una cifra confiable en lugar de confiar en una sola muestra.',
          },
          {
            q: '¿llama-bench funciona solo con modelos GGUF?',
            a: 'Sí — llama-bench forma parte de la cadena de herramientas de llama.cpp, construida alrededor del formato GGUF. Para hacer benchmarking de un modelo GPTQ o AWQ necesitas una herramienta distinta vinculada al framework de servicio que carga ese formato, como los scripts de benchmarking integrados de vLLM.',
          },
          {
            q: '¿Es más importante la velocidad de procesamiento del prompt o la de generación?',
            a: 'Depende de tu caso de uso. El resumen de documentos largos está dominado por la velocidad de procesamiento del prompt, ya que la mayor parte del trabajo consiste en leer la entrada. El chat interactivo está dominado por la velocidad de generación, ya que el modelo produce la mayor parte de su salida token por token tras un prompt corto.',
          },
          {
            q: '¿Puedo comparar cifras de tokens/seg que encuentro en línea con mi propio hardware?',
            a: 'Solo si la longitud de contexto, el nivel de cuantización y el tamaño del modelo coinciden exactamente. Una cifra de tokens/seg sin esos detalles no es comparable con tu configuración — trata los números no atribuidos de foros o redes sociales como anécdotas aproximadas, no como benchmarks.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    title: 'Qual é a melhor ferramenta para benchmark de tokens/seg em um LLM local?',
    seoTitle: 'Melhor ferramenta de benchmark para LLM local: llama-bench e alternativas',
    metaDescription:
      'O llama-bench (incluído com o llama.cpp) é a melhor ferramenta para benchmark de tokens/seg em um LLM local — ele isola a velocidade de processamento do prompt e a velocidade de geração sob um comprimento de contexto e nível de quantização fixos.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores que querem medir e comparar a velocidade de inferência de LLMs locais entre diferentes hardwares ou níveis de quantização',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>O llama-bench, utilitário de benchmark incluído com o llama.cpp, é a melhor ferramenta para medir tokens por segundo em um LLM local</strong> — ele reporta a velocidade de processamento do prompt e a velocidade de geração como números separados sob um comprimento de contexto e nível de quantização fixos, tornando os resultados diretamente comparáveis entre hardwares. A flag `--verbose` do Ollama é uma alternativa mais rápida e menos rigorosa para uma verificação rápida.',
    toc: [
      { label: 'Melhor escolha: llama-bench', anchor: '#best-pick' },
      { label: 'O que procurar em uma ferramenta de benchmark', anchor: '#what-to-look-for' },
      { label: 'Hardware para acompanhar seu benchmark', anchor: '#hardware' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor ferramenta para benchmark de tokens/seg em um LLM local?',
        answer:
          'O llama-bench, incluído com o llama.cpp, é a melhor ferramenta para benchmark da velocidade de inferência de um LLM local. Ele reporta separadamente a velocidade de processamento do prompt e a velocidade de geração sob um comprimento de contexto e nível de quantização fixos, tornando os resultados comparáveis entre diferentes hardwares.',
        bullets: [
          'llama-bench: a opção mais rigorosa — separa a velocidade de processamento do prompt da velocidade de geração e controla o comprimento de contexto e a quantização.',
          'Ollama --verbose: a forma mais rápida de obter um número aproximado de tokens/seg a partir de uma sessão de chat normal, menos controlada que o llama-bench.',
          'GUIs de terceiros (as estatísticas integradas do LM Studio) são convenientes para uma leitura rápida, mas não expõem o mesmo controle entre execuções.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O llama-bench é a ferramenta de benchmark mais rigorosa — isola a velocidade de processamento do prompt da velocidade de geração sob configurações fixas',
          'A flag --verbose do Ollama fornece uma estimativa rápida e aproximada de tokens/seg a partir de uma execução de chat normal, útil para verificações rápidas',
          'Sempre fixe o comprimento de contexto e o nível de quantização entre execuções, ou a comparação não tem sentido',
          'Execute várias passagens e calcule a média do resultado — uma única execução é afetada por throttling térmico e carregamento a frio',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O llama-bench, incluído com o llama.cpp, é a melhor ferramenta para benchmark de tokens por segundo em um LLM local porque separa a velocidade de processamento do prompt da velocidade de geração sob configurações controladas.',
          },
          {
            type: 'plain-terms',
            text: 'Em termos simples: o llama-bench executa o mesmo teste várias vezes com configurações fixas e reporta dois números de velocidade claros, em vez de um número ruidoso vindo de uma sessão de chat normal.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: llama-bench',
        content: [
          '<strong>O llama-bench é a escolha padrão certa para quem precisa de um número de tokens por segundo repetível e comparável entre hardwares.</strong> Ele vem como parte do build do llama.cpp, roda pela linha de comando e reporta dois números separados para cada teste: velocidade de processamento do prompt (quão rápido o modelo lê a entrada) e velocidade de geração (quão rápido ele produz novos tokens). Esses dois números se comportam de forma muito diferente sob carga, então uma ferramenta que os mistura não te dá o quadro completo.',
          'A flag `--verbose` do Ollama é a alternativa prática para uma verificação rápida. Rodar `ollama run <model> --verbose` imprime um número de tokens/seg ao final de uma resposta de chat normal, sem exigir um framework de benchmark separado. É conveniente, mas o número vem de uma única geração não controlada — não de uma execução repetida com contexto fixo — então é mais ruidoso e menos adequado para comparar dois hardwares diferentes.',
          'O LM Studio e outros frontends de desktop mostram uma leitura de tokens/seg ao vivo semelhante na interface de chat. Use isso para uma checagem visual rápida enquanto já está usando a ferramenta, mas não confie nisso para uma decisão de compra de hardware — não expõe os controles de número de execuções ou comprimento de contexto que tornam um resultado de benchmark confiável.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'O que procurar em uma ferramenta de benchmark',
        content: [
          '<strong>Uma ferramenta de benchmark confiável para LLM local mantém o comprimento de contexto, o nível de quantização e o conteúdo do prompt constantes entre execuções, e reporta a velocidade de processamento do prompt e a velocidade de geração de tokens como números separados.</strong> Sem esses controles, um número de "tokens/seg" de uma única execução quase não te diz nada sobre como a mesma configuração vai performar com um prompt mais longo ou uma quantização diferente.',
          'Use uma ferramenta de benchmark se você está comparando GPUs antes de uma compra, avaliando se um nível de quantização vale a perda de qualidade, ou reportando números de desempenho publicamente. Pule o benchmark formal e apenas observe o contador de tokens/seg ao vivo se você só quer uma noção aproximada de se um modelo é utilizável para chat.',
          'Evite: números de uma única execução reportados sem comprimento de contexto ou nível de quantização associados — eles não podem ser comparados a nada. Evite: ferramentas que reportam apenas um número combinado de tokens/seg, já que a velocidade de processamento do prompt e a de geração escalam de forma diferente com o comprimento de contexto e o hardware.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware para acompanhar seu benchmark',
        content: [
          'Se você está fazendo benchmark com o objetivo de decidir se deve fazer upgrade, rode o mesmo comando llama-bench na sua GPU atual e na GPU candidata usando o mesmo arquivo de modelo e quantização, depois compare os dois números de processamento de prompt e geração lado a lado.',
          '<em>Divulgação: Este artigo contém links de afiliados. Podemos ganhar uma comissão se você comprar através desses links, sem custo adicional para você.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=16GB+VRAM+GPU',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: 'Verificar preços de GPU com 16GB VRAM na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=kill+a+watt+power+meter',
            productName: 'Kill A Watt Power Meter',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: 'Verificar o preço do medidor de energia na Amazon (útil para comparações de tokens/seg por watt)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Por que os resultados de benchmark variam entre execuções?',
            a: 'Throttling térmico, processos em segundo plano e o carregamento a frio do modelo afetam os resultados de uma única execução. Calcule a média de várias execuções (o llama-bench suporta execuções repetidas nativamente) para obter um número confiável em vez de confiar em uma única amostra.',
          },
          {
            q: 'O llama-bench funciona apenas com modelos GGUF?',
            a: 'Sim — o llama-bench faz parte do toolchain do llama.cpp, construído em torno do formato GGUF. Para fazer benchmark de um modelo GPTQ ou AWQ, você precisa de uma ferramenta diferente vinculada ao framework de serving que carrega esse formato, como os scripts de benchmark integrados do vLLM.',
          },
          {
            q: 'A velocidade de processamento do prompt ou a velocidade de geração é mais importante?',
            a: 'Depende do seu caso de uso. A sumarização de documentos longos é dominada pela velocidade de processamento do prompt, já que a maior parte do trabalho é ler a entrada. O chat interativo é dominado pela velocidade de geração, já que o modelo produz a maior parte da saída token por token após um prompt curto.',
          },
          {
            q: 'Posso comparar números de tokens/seg que encontro online com o meu próprio hardware?',
            a: 'Somente se o comprimento de contexto, o nível de quantização e o tamanho do modelo coincidirem exatamente. Um número de tokens/seg sem esses detalhes associados não é comparável à sua configuração — trate números não atribuídos de fóruns ou redes sociais como anedotas aproximadas, não como benchmarks.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    title: 'ما هي أفضل أداة لقياس الأداء (tokens/sec) في نماذج LLM المحلية؟',
    seoTitle: 'أفضل أداة قياس أداء لنماذج LLM المحلية: llama-bench والبدائل',
    metaDescription:
      'أداة llama-bench (المرفقة مع llama.cpp) هي أفضل أداة لقياس عدد tokens في الثانية لنماذج LLM المحلية — فهي تفصل بين سرعة معالجة الـ prompt وسرعة التوليد ضمن طول سياق ومستوى quantization ثابتين.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يريدون قياس ومقارنة سرعة الاستدلال (inference) لنماذج LLM المحلية عبر أجهزة أو مستويات quantization مختلفة',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>أداة llama-bench، أداة قياس الأداء المرفقة مع llama.cpp، هي أفضل أداة لقياس عدد tokens في الثانية في نموذج LLM محلي</strong> — فهي تُبلغ عن سرعة معالجة الـ prompt وسرعة التوليد كرقمين منفصلين ضمن طول سياق ومستوى quantization ثابتين، مما يجعل النتائج قابلة للمقارنة المباشرة بين الأجهزة المختلفة. خيار `--verbose` في Ollama بديل أسرع وأقل صرامة لإجراء فحص سريع.',
    toc: [
      { label: 'الخيار الأفضل: llama-bench', anchor: '#best-pick' },
      { label: 'ما الذي يجب البحث عنه في أداة قياس الأداء', anchor: '#what-to-look-for' },
      { label: 'الأجهزة المناسبة لعملية القياس', anchor: '#hardware' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هي أفضل أداة لقياس الأداء (tokens/sec) في نماذج LLM المحلية؟',
        answer:
          'أداة llama-bench، المرفقة مع llama.cpp، هي أفضل أداة لقياس سرعة الاستدلال في نموذج LLM محلي. تُبلغ عن سرعة معالجة الـ prompt وسرعة التوليد بشكل منفصل ضمن طول سياق ومستوى quantization ثابتين، مما يجعل النتائج قابلة للمقارنة بين أجهزة مختلفة.',
        bullets: [
          'llama-bench: الخيار الأكثر صرامة — يفصل سرعة معالجة الـ prompt عن سرعة التوليد، ويتحكم في طول السياق ومستوى الـ quantization.',
          'Ollama --verbose: أسرع طريقة للحصول على رقم تقريبي لعدد tokens في الثانية من جلسة محادثة عادية، لكنه أقل تحكمًا من llama-bench.',
          'واجهات الطرف الثالث (مثل الإحصاءات المدمجة في LM Studio) مريحة لقراءة سريعة لكنها لا توفر نفس مستوى التحكم بين التشغيلات المتكررة.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench هي أداة قياس الأداء الأكثر صرامة — تفصل سرعة معالجة الـ prompt عن سرعة التوليد ضمن إعدادات ثابتة',
          'خيار --verbose في Ollama يمنح تقديرًا سريعًا وتقريبيًا لعدد tokens في الثانية من تشغيل محادثة عادي، مفيد للفحوصات السريعة',
          'يجب دائمًا تثبيت طول السياق ومستوى quantization بين التشغيلات، وإلا فإن المقارنة تصبح بلا معنى',
          'شغّل عدة تكرارات واحسب متوسط النتيجة — التشغيل الواحد يتأثر بالتقييد الحراري (thermal throttling) والتحميل البارد (cold start)',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أداة llama-bench، المرفقة مع llama.cpp، هي أفضل أداة لقياس عدد tokens في الثانية في نموذج LLM محلي لأنها تفصل سرعة معالجة الـ prompt عن سرعة التوليد ضمن إعدادات متحكم بها.',
          },
          {
            type: 'plain-terms',
            text: 'بعبارة بسيطة: تُشغّل llama-bench الاختبار نفسه عدة مرات بإعدادات ثابتة وتُبلغ عن رقمي سرعة واضحين، بدلًا من رقم واحد مشوّش ناتج عن جلسة محادثة عادية.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'الخيار الأفضل: llama-bench',
        content: [
          '<strong>llama-bench هو الخيار الافتراضي الصحيح لكل من يحتاج إلى رقم tokens في الثانية قابل للتكرار ويمكن مقارنته بين الأجهزة.</strong> يأتي كجزء من بنية llama.cpp، ويعمل من سطر الأوامر، ويُبلغ عن رقمين منفصلين لكل اختبار: سرعة معالجة الـ prompt (مدى سرعة قراءة النموذج للمُدخل) وسرعة التوليد (مدى سرعة إنتاجه لـ tokens جديدة). يتصرف هذان الرقمان بشكل مختلف تمامًا تحت الحمل، لذا فإن أي أداة تخلط بينهما لا تعطيك الصورة الكاملة.',
          'خيار `--verbose` في Ollama هو البديل العملي لإجراء فحص سريع. تشغيل `ollama run <model> --verbose` يطبع رقم tokens في الثانية في نهاية استجابة محادثة عادية، دون الحاجة إلى إطار قياس أداء منفصل. هذا مريح، لكن الرقم يأتي من عملية توليد واحدة غير متحكم بها — وليس من تشغيل متكرر بسياق ثابت — لذا فهو أكثر تشويشًا وأقل ملاءمة لمقارنة قطعتي عتاد مختلفتين.',
          'يعرض LM Studio وواجهات سطح المكتب الأخرى قراءة مباشرة مشابهة لعدد tokens في الثانية داخل واجهة المحادثة. استخدمها للتحقق السريع بالعين أثناء استخدامك للأداة أصلًا، لكن لا تعتمد عليها لاتخاذ قرار شراء عتاد — فهي لا تكشف عناصر التحكم في عدد التشغيلات أو طول السياق التي تجعل نتيجة القياس موثوقة.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'ما الذي يجب البحث عنه في أداة قياس الأداء',
        content: [
          '<strong>أداة قياس الأداء الموثوقة لنماذج LLM المحلية تُبقي طول السياق ومستوى quantization ومحتوى الـ prompt ثابتين بين التشغيلات، وتُبلغ عن سرعة معالجة الـ prompt وسرعة توليد tokens كرقمين منفصلين.</strong> بدون هذه الضوابط، فإن رقم "tokens في الثانية" من تشغيل واحد لا يخبرك بشيء يُذكر عن كيفية أداء الإعداد نفسه مع prompt أطول أو quantization مختلف.',
          'استخدم أداة قياس الأداء إذا كنت تقارن بطاقات GPU قبل الشراء، أو تُقيّم ما إذا كان مستوى quantization يستحق التنازل عن الجودة، أو تُبلغ عن أرقام الأداء علنًا. تخطَّ القياس الرسمي واكتفِ بمراقبة عداد tokens في الثانية المباشر إذا كنت تريد فقط انطباعًا تقريبيًا عن مدى صلاحية نموذج ما للمحادثة.',
          'تجنّب: أرقام تشغيل واحد تُذكر دون طول سياق أو مستوى quantization مرفق — فهي غير قابلة للمقارنة بأي شيء. تجنّب: الأدوات التي تُبلغ عن رقم tokens في الثانية مُجمّع واحد فقط، لأن سرعة معالجة الـ prompt وسرعة التوليد تتغيران بشكل مختلف مع طول السياق والعتاد.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'الأجهزة المناسبة لعملية القياس',
        content: [
          'إذا كنت تقيس الأداء بهدف تحديد ما إذا كنت ستُرقّي عتادك، شغّل أمر llama-bench نفسه على بطاقة GPU الحالية وعلى البطاقة المرشحة باستخدام ملف النموذج ومستوى quantization نفسه، ثم قارن رقمي معالجة الـ prompt والتوليد جنبًا إلى جنب.',
          '<em>إفصاح: يحتوي هذا المقال على روابط تابعة (affiliate). قد نحصل على عمولة إذا اشتريت عبر هذه الروابط، دون أي تكلفة إضافية عليك.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=16GB+VRAM+GPU',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: 'تحقق من أسعار بطاقات GPU بذاكرة 16GB VRAM على أمازون',
          },
          {
            url: 'https://www.amazon.com/s?k=kill+a+watt+power+meter',
            productName: 'Kill A Watt Power Meter',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: 'تحقق من سعر جهاز قياس الطاقة على أمازون (مفيد لمقارنات tokens/sec لكل واط)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'لماذا تتفاوت نتائج قياس الأداء بين التشغيلات؟',
            a: 'التقييد الحراري (thermal throttling)، والعمليات في الخلفية، والتحميل البارد للنموذج تؤثر جميعها على نتائج التشغيل الواحد. احسب متوسط عدة تشغيلات (تدعم llama-bench التشغيلات المتكررة بشكل أصلي) للحصول على رقم موثوق بدلًا من الاعتماد على عينة واحدة.',
          },
          {
            q: 'هل تعمل llama-bench مع نماذج GGUF فقط؟',
            a: 'نعم — llama-bench جزء من سلسلة أدوات llama.cpp، المبنية حول تنسيق GGUF. لقياس أداء نموذج GPTQ أو AWQ، تحتاج إلى أداة مختلفة مرتبطة بإطار العمل (serving framework) الذي يُحمّل ذلك التنسيق، مثل سكربتات قياس الأداء المدمجة في vLLM.',
          },
          {
            q: 'هل سرعة معالجة الـ prompt أم سرعة التوليد أكثر أهمية؟',
            a: 'يعتمد ذلك على حالة الاستخدام. تلخيص المستندات الطويلة يهيمن عليه سرعة معالجة الـ prompt، لأن معظم العمل هو قراءة المُدخل. المحادثة التفاعلية يهيمن عليها سرعة التوليد، لأن النموذج ينتج معظم مخرجاته token تلو الآخر بعد prompt قصير.',
          },
          {
            q: 'هل يمكنني مقارنة أرقام tokens/sec التي أجدها عبر الإنترنت بعتادي الخاص؟',
            a: 'فقط إذا تطابق طول السياق ومستوى quantization وحجم النموذج تمامًا. رقم tokens/sec بدون هذه التفاصيل المرفقة غير قابل للمقارنة بإعدادك — تعامل مع الأرقام غير المنسوبة من المنتديات أو وسائل التواصل الاجتماعي على أنها انطباعات تقريبية، وليست قياسات أداء موثوقة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    title: '로컬 LLM의 초당 토큰 수를 벤치마킹하는 가장 좋은 도구는 무엇입니까?',
    seoTitle: '최고의 로컬 LLM 벤치마킹 도구: llama-bench와 대안 비교',
    metaDescription:
      'llama.cpp에 포함된 llama-bench는 로컬 LLM의 초당 토큰 수를 벤치마킹하는 가장 좋은 도구입니다. 고정된 컨텍스트 길이와 양자화 수준에서 프롬프트 처리 속도와 생성 속도를 분리하여 측정합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '하드웨어 또는 양자화 수준에 따른 로컬 LLM 추론 속도를 측정하고 비교하려는 개발자',
    affiliateDisclosure: true,
    siblingBites: ['how-much-vram-for-local-llm', 'best-quantization-6gb-vram', 'gguf-vs-gptq-vs-awq', 'best-gpu-local-llm-uae-price', 'speculative-decoding-explained', 'sglang-vs-vllm-local-serving'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>llama.cpp에 포함된 벤치마킹 유틸리티인 llama-bench는 로컬 LLM의 초당 토큰 수를 측정하는 가장 좋은 도구입니다.</strong> 고정된 컨텍스트 길이와 양자화 수준에서 프롬프트 처리 속도와 생성 속도를 별도의 수치로 보고하므로, 서로 다른 하드웨어 간 결과를 직접 비교할 수 있습니다. Ollama의 `--verbose` 플래그는 간단한 확인용으로 사용할 수 있는, 더 빠르지만 엄격함이 떨어지는 대안입니다.',
    toc: [
      { label: '최선의 선택: llama-bench', anchor: '#best-pick' },
      { label: '벤치마킹 도구에서 확인해야 할 사항', anchor: '#what-to-look-for' },
      { label: '벤치마크와 함께 사용할 하드웨어', anchor: '#hardware' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM의 초당 토큰 수를 벤치마킹하는 가장 좋은 도구는 무엇입니까?',
        answer:
          'llama.cpp에 포함된 llama-bench가 로컬 LLM의 추론 속도를 벤치마킹하는 가장 좋은 도구입니다. 고정된 컨텍스트 길이와 양자화 수준에서 프롬프트 처리 속도와 생성 속도를 별도로 보고하여, 서로 다른 하드웨어 간 결과를 비교할 수 있게 합니다.',
        bullets: [
          'llama-bench: 가장 엄격한 옵션으로, 프롬프트 처리 속도와 생성 속도를 분리하고 컨텍스트 길이와 양자화를 제어합니다.',
          'Ollama --verbose: 일반적인 채팅 세션에서 대략적인 초당 토큰 수를 가장 빠르게 얻는 방법이지만 llama-bench보다 제어 수준이 낮습니다.',
          '서드파티 GUI(LM Studio에 내장된 통계 등)는 빠르게 확인하기에는 편리하지만, 실행 간 동일한 수준의 제어는 제공하지 않습니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'llama-bench는 가장 엄격한 벤치마킹 도구로, 고정된 설정에서 프롬프트 처리 속도와 생성 속도를 분리합니다',
          'Ollama의 --verbose 플래그는 일반 채팅 실행에서 빠르고 대략적인 초당 토큰 수를 제공하며, 간단한 확인에 유용합니다',
          '실행 간에는 항상 컨텍스트 길이와 양자화 수준을 고정해야 하며, 그렇지 않으면 비교가 의미가 없습니다',
          '여러 번 실행하여 결과를 평균화하십시오. 단일 실행은 열 스로틀링과 콜드 스타트 로딩의 영향을 받습니다',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'llama.cpp에 포함된 llama-bench는 제어된 설정에서 프롬프트 처리 속도와 생성 속도를 분리할 수 있기 때문에 로컬 LLM의 초당 토큰 수를 벤치마킹하는 가장 좋은 도구입니다.',
          },
          {
            type: 'plain-terms',
            text: '쉽게 말해: llama-bench는 동일한 테스트를 고정된 설정으로 여러 번 실행하여, 일반 채팅 세션에서 나오는 잡음이 섞인 하나의 수치 대신 명확한 두 개의 속도 수치를 보고합니다.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최선의 선택: llama-bench',
        content: [
          '<strong>llama-bench는 재현 가능하고 하드웨어 간 비교가 가능한 초당 토큰 수치가 필요한 모든 사람에게 적합한 기본 선택입니다.</strong> llama.cpp 빌드의 일부로 제공되며, 명령줄에서 실행되고, 각 테스트마다 두 가지 별도 수치를 보고합니다. 프롬프트 처리 속도(모델이 입력을 읽는 속도)와 생성 속도(새 토큰을 생성하는 속도)입니다. 이 두 수치는 부하 상태에서 매우 다르게 동작하므로, 이를 혼합해서 보여주는 도구는 전체 그림을 제공하지 못합니다.',
          'Ollama의 `--verbose` 플래그는 빠른 확인을 위한 실용적인 대안입니다. `ollama run <model> --verbose`를 실행하면 별도의 벤치마크 하네스 없이 일반 채팅 응답 끝에 초당 토큰 수치가 출력됩니다. 편리하지만, 이 수치는 반복적인 고정 컨텍스트 실행이 아니라 단일한 제어되지 않은 생성에서 나온 것이므로, 더 잡음이 많고 서로 다른 두 하드웨어를 비교하는 데는 적합하지 않습니다.',
          'LM Studio 및 기타 데스크톱 프런트엔드도 채팅 UI에서 이와 비슷한 실시간 초당 토큰 수치를 보여줍니다. 이미 해당 도구를 사용하는 중에 빠르게 눈으로 확인하는 용도로는 사용할 수 있지만, 하드웨어 구매 결정에는 의존하지 마십시오. 벤치마크 결과를 신뢰할 수 있게 만드는 실행 횟수나 컨텍스트 길이 제어를 제공하지 않습니다.',
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: '벤치마킹 도구에서 확인해야 할 사항',
        content: [
          '<strong>신뢰할 수 있는 로컬 LLM 벤치마킹 도구는 실행 간에 컨텍스트 길이, 양자화 수준, 프롬프트 내용을 일정하게 유지하며, 프롬프트 처리 속도와 토큰 생성 속도를 별도의 수치로 보고합니다.</strong> 이러한 제어가 없으면 단일 실행에서 얻은 "초당 토큰 수" 수치는 동일한 설정이 더 긴 프롬프트나 다른 양자화에서 어떻게 동작할지에 대해 거의 아무것도 알려주지 않습니다.',
          '구매 전에 GPU를 비교하거나, 양자화 수준이 품질 저하를 감수할 가치가 있는지 평가하거나, 성능 수치를 공개적으로 보고하는 경우에는 벤치마킹 도구를 사용하십시오. 모델이 채팅에 사용 가능한지에 대한 대략적인 느낌만 필요하다면 정식 벤치마크를 건너뛰고 실시간 초당 토큰 카운터만 확인해도 됩니다.',
          '피해야 할 것: 컨텍스트 길이나 양자화 수준이 함께 제시되지 않은 단일 실행 수치는 아무것도 비교할 수 없습니다. 피해야 할 것: 프롬프트 처리 속도와 생성 속도가 컨텍스트 길이와 하드웨어에 따라 다르게 확장되므로, 하나로 합쳐진 초당 토큰 수치만 보고하는 도구.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '벤치마크와 함께 사용할 하드웨어',
        content: [
          '업그레이드 여부를 결정하기 위해 벤치마킹하는 경우, 동일한 모델 파일과 양자화를 사용하여 현재 GPU와 후보 GPU에서 동일한 llama-bench 명령을 실행한 다음, 두 프롬프트 처리 및 생성 수치를 나란히 비교하십시오.',
          '<em>공개: 이 글에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 구매하시면 추가 비용 없이 저희가 수수료를 받을 수 있습니다.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=16GB+VRAM+GPU',
            productName: '16GB VRAM Desktop GPU',
            productCategory: 'gpu',
            priceRange: '$450-500',
            label: 'Amazon에서 16GB VRAM GPU 가격 확인하기',
          },
          {
            url: 'https://www.amazon.com/s?k=kill+a+watt+power+meter',
            productName: 'Kill A Watt Power Meter',
            productCategory: 'accessory',
            priceRange: '$25-35',
            label: 'Amazon에서 전력 측정기 가격 확인하기(와트당 초당 토큰 수 비교에 유용)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '벤치마크 결과가 실행마다 다른 이유는 무엇입니까?',
            a: '열 스로틀링, 백그라운드 프로세스, 모델의 콜드 스타트 로딩이 모두 단일 실행 결과에 영향을 미칩니다. 하나의 샘플을 신뢰하는 대신 여러 번 실행한 결과를 평균화하십시오(llama-bench는 반복 실행을 기본적으로 지원합니다).',
          },
          {
            q: 'llama-bench는 GGUF 모델에서만 작동합니까?',
            a: '예 — llama-bench는 GGUF 형식을 중심으로 구축된 llama.cpp 툴체인의 일부입니다. GPTQ 또는 AWQ 모델을 벤치마킹하려면 해당 형식을 로드하는 서빙 프레임워크에 연결된 다른 도구(예: vLLM의 내장 벤치마킹 스크립트)가 필요합니다.',
          },
          {
            q: '프롬프트 처리 속도와 생성 속도 중 어느 것이 더 중요합니까?',
            a: '사용 사례에 따라 다릅니다. 긴 문서 요약은 입력을 읽는 작업이 대부분이므로 프롬프트 처리 속도가 지배적입니다. 대화형 채팅은 짧은 프롬프트 이후 모델이 대부분의 출력을 토큰 단위로 생성하므로 생성 속도가 지배적입니다.',
          },
          {
            q: '온라인에서 찾은 초당 토큰 수치를 제 하드웨어와 비교할 수 있습니까?',
            a: '컨텍스트 길이, 양자화 수준, 모델 크기가 정확히 일치하는 경우에만 가능합니다. 이러한 세부 정보가 함께 제시되지 않은 초당 토큰 수치는 사용자의 설정과 비교할 수 없습니다. 포럼이나 소셜 미디어의 출처가 불명확한 수치는 벤치마크가 아니라 대략적인 일화로 취급하십시오.',
          },
        ],
      },
    },
  },
}
