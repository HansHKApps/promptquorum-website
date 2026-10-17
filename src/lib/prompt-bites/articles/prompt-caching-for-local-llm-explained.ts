import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-en.webp',
    title: 'What Is Prompt Caching for Local LLMs?',
    seoTitle: 'Prompt Caching for Local LLMs Explained | Prompt Bites',
    metaDescription: "Prompt caching vs KV caching vs prefix caching for local LLMs: how reuse of the KV cache speeds up repeated prompts, and how to structure prompts to benefit.",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers wanting faster repeated local LLM inference through prompt or context caching',
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Prompt caching stores the intermediate computation (the KV cache) for a prompt\'s prefix so a repeated or extended prompt doesn\'t have to reprocess that prefix from scratch.</strong> It speeds up any workload where requests share a common beginning — a fixed system prompt, a long document reused across questions, or the earlier turns of an ongoing conversation — but does nothing for requests with no shared content.',
    quickAnswerTop: {
      en: {
        question: 'What is prompt caching and when does it help local LLM inference?',
        answer: 'Prompt caching stores the computed key-value (KV) cache for a prompt\'s prefix so it doesn\'t need to be recomputed when a later request shares that same prefix — a fixed system prompt, a reused document, or earlier conversation turns. It cuts prompt-processing time significantly for repeated-prefix workloads, but provides no benefit when every request is unrelated.',
        bullets: [
          'Caches the KV cache for a prompt prefix, not the model\'s output',
          'Biggest win: long fixed system prompts, reused documents, multi-turn conversations',
          'No benefit for one-off requests with no shared prefix across calls',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Prompt caching stores the KV cache computed for a prompt\'s prefix, letting a later request reuse it instead of reprocessing the same tokens',
          'The bigger and more repeated the shared prefix, the bigger the speedup — a long, unchanging system prompt reused across thousands of requests benefits enormously',
          'Multi-turn conversations benefit automatically in most local serving setups, since each new turn shares the entire prior conversation as its prefix',
          'Caching only helps prompt processing (the input), not token generation (the output) — it reduces time-to-first-token, not tokens-per-second once generation starts',
          "Prompt caching and prefix caching mean reusing the KV cache across separate requests; the KV cache itself already exists inside every single generation",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Prompt caching stores the computed KV cache for a shared prompt prefix so later requests skip reprocessing it.' },
          { type: 'plain-terms', text: 'In plain terms: if many of your requests start with the same text, caching means the model only has to "read" that shared part once, not every time.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'How Caching Actually Speeds Things Up',
        content: [
          '<strong>Processing a prompt means the model computes a key-value (KV) representation for every input token before it can start generating a response.</strong> This step — prompt processing — happens before generation begins, and its cost scales with prompt length. Without caching, a 2,000-token system prompt gets fully reprocessed on every single request, even if it\'s byte-for-byte identical each time.',
          'Caching stores that computed KV representation for a given prefix, keyed to the exact token sequence. When a new request starts with the same tokens, the cached KV values are reused directly, and only the new, non-cached portion of the prompt needs processing. The practical effect is that time-to-first-token drops sharply for cache hits, since most of the input no longer needs recomputation.',
          'This is why multi-turn conversations benefit almost automatically: turn 3 of a conversation includes turns 1 and 2 as its prefix, so a caching-aware serving setup only processes the newly added turn, not the entire conversation history over again.',
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "Prompt Caching, Prefix Caching and KV Caching: How They Differ",
        content: [
          "<strong>Prompt caching, prefix caching and KV caching are related but not the same thing.</strong> The KV cache is the data structure: the key and value tensors a model computes for each token, which it keeps during generation so earlier tokens are not recomputed at every step. Every transformer inference engine has one, and it exists within a single request.",
          "Prefix caching and prompt caching both mean keeping that KV data and reusing it across separate requests. \"Prefix caching\" names the mechanism (matching a shared token prefix); \"prompt caching\" is the broader, user-facing term. vLLM calls its implementation automatic prefix caching: it caches the KV cache of earlier queries so a new query with the same prefix skips that computation. The llama.cpp server exposes the same idea as a per-request cache_prompt option, enabled by default, so only the part of the prompt that differs is processed.",
          "In short: KV caching happens inside every generation, while prompt or prefix caching carries the KV cache from one request to the next and depends on your serving tool and on an exact-match prefix. If you use a desktop app such as LM Studio, check that app's own documentation to see whether and how it exposes the setting.",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: 'Structuring Prompts to Actually Benefit',
        items: [
          '**Put shared, unchanging content first.** System prompts, instructions, and reference documents that stay identical across requests should come before the variable, request-specific content — caching only works on an exact-match prefix, so anything before the first point of difference is what gets reused.',
          '**Keep the shared prefix byte-identical across requests.** Even a single-character difference in a system prompt (a timestamp, a random ID) breaks the prefix match and forces full reprocessing — move any per-request variation to the end of the prompt, after the reusable content.',
          '**Don\'t expect caching to help unrelated, one-off requests.** If your workload is mostly single-shot questions with no shared setup, there\'s nothing for caching to reuse — the technique\'s value is proportional to how much of your traffic actually shares a common prefix.',
          '**Long-running conversations benefit most from cache retention settings.** Check how long your serving setup keeps cached prefixes before evicting them — a cache that\'s evicted too aggressively won\'t help conversations with gaps between turns.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does prompt caching change the model\'s output?',
            a: "In principle no — caching reuses the same computed KV values instead of recomputing them, so it changes speed, not model behavior or quality. In practice the llama.cpp server documentation notes that results are not guaranteed to be bit-for-bit identical across different batch sizes, so tiny numerical differences between a cached and an uncached run are possible.",
          },
          {
            q: 'Does prompt caching help token generation speed, or just the initial response time?',
            a: 'Only the initial response time (time-to-first-token). Once generation starts, tokens are still produced one at a time at the same generation speed regardless of caching — caching eliminates redundant prompt-processing work, not the generation step itself.',
          },
          {
            q: 'How much VRAM does caching use?',
            a: 'Cached KV data lives in VRAM alongside the model itself, and its size scales with how much context is being cached and for how many concurrent conversations. Caching many long conversations simultaneously can meaningfully add to VRAM usage — this is a real tradeoff against caching depth on VRAM-constrained hardware.',
          },
          {
            q: 'Does every local serving tool support prompt caching?',
            a: 'Support and default behavior vary by tool — some cache automatically for multi-turn use within a session, others require explicit configuration, and cache retention (how long a prefix stays cached before eviction) is also tool-specific. Check your specific serving tool\'s documentation for its caching behavior and any settings that control it.',
          },
          {
            q: "Is prompt caching the same as KV caching?",
            a: "No. The KV cache is the per-token key and value data a model keeps while generating, and it exists in every request. Prompt caching (also called prefix caching) is the reuse of that KV data across separate requests that share the same beginning, so the shared part is not computed again.",
          },
          {
            q: "What is prefix caching?",
            a: "Prefix caching is the mechanism behind prompt caching: the serving engine stores the KV cache for a sequence of tokens and, when a new request starts with exactly the same tokens, reuses it and processes only the remaining suffix. It requires an exact token-for-token match from the start of the prompt, and it speeds up prompt processing only, not token generation.",
          },
        ],
      },
    },
  },
  de: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-de.webp',
    title: 'Was ist Prompt-Caching für lokale LLMs?',
    seoTitle: 'Prompt-Caching für lokale LLMs erklärt | Prompt Bites',
    metaDescription: "Prompt-Caching, KV-Caching und Präfix-Caching bei lokalen LLMs: wie die Wiederverwendung des KV-Caches wiederholte Prompts beschleunigt und wie Sie Prompts dafür strukturieren.",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die durch Prompt- oder Kontext-Caching schnellere wiederholte lokale LLM-Inferenz erzielen möchten',
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Prompt-Caching speichert die Zwischenberechnung (den KV-Cache) für das Präfix eines Prompts, sodass ein wiederholter oder erweiterter Prompt dieses Präfix nicht von Grund auf neu verarbeiten muss.</strong> Es beschleunigt jede Aufgabe, bei der Anfragen einen gemeinsamen Anfang teilen — einen festen System-Prompt, ein langes Dokument, das für mehrere Fragen wiederverwendet wird, oder die vorherigen Runden eines laufenden Gesprächs — bringt aber nichts bei Anfragen ohne gemeinsamen Inhalt.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Prompt-Caching und wann hilft es bei lokaler LLM-Inferenz?',
        answer: 'Prompt-Caching speichert den berechneten Key-Value-(KV)-Cache für das Präfix eines Prompts, sodass er nicht neu berechnet werden muss, wenn eine spätere Anfrage dasselbe Präfix teilt — einen festen System-Prompt, ein wiederverwendetes Dokument oder frühere Gesprächsrunden. Das verkürzt die Prompt-Verarbeitungszeit bei Workloads mit wiederholtem Präfix deutlich, bringt aber keinen Vorteil, wenn jede Anfrage unabhängig ist.',
        bullets: [
          'Speichert den KV-Cache für ein Prompt-Präfix, nicht die Ausgabe des Modells',
          'Größter Vorteil: lange feste System-Prompts, wiederverwendete Dokumente, mehrstufige Gespräche',
          'Kein Vorteil bei Einzelanfragen ohne gemeinsames Präfix über mehrere Aufrufe hinweg',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Prompt-Caching speichert den für das Präfix eines Prompts berechneten KV-Cache, sodass eine spätere Anfrage ihn wiederverwenden kann, statt dieselben Token erneut zu verarbeiten',
          'Je größer und häufiger wiederholt das gemeinsame Präfix ist, desto größer der Geschwindigkeitsgewinn — ein langer, unveränderter System-Prompt, der bei Tausenden Anfragen wiederverwendet wird, profitiert enorm',
          'Mehrstufige Gespräche profitieren in den meisten lokalen Serving-Setups automatisch, da jede neue Runde das gesamte bisherige Gespräch als Präfix teilt',
          'Caching hilft nur bei der Prompt-Verarbeitung (der Eingabe), nicht bei der Token-Generierung (der Ausgabe) — es verkürzt die Zeit bis zum ersten Token, nicht die Tokens pro Sekunde nach Beginn der Generierung',
          "Prompt-Caching und Präfix-Caching bedeuten, den KV-Cache über getrennte Anfragen hinweg wiederzuverwenden; der KV-Cache selbst existiert bereits in jeder einzelnen Generierung",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Prompt-Caching speichert den berechneten KV-Cache für ein gemeinsames Prompt-Präfix, sodass spätere Anfragen die erneute Verarbeitung überspringen.' },
          { type: 'plain-terms', text: 'Einfach gesagt: Wenn viele Ihrer Anfragen mit demselben Text beginnen, bedeutet Caching, dass das Modell diesen gemeinsamen Teil nur einmal „lesen" muss, nicht jedes Mal.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Wie Caching die Verarbeitung tatsächlich beschleunigt',
        content: [
          '<strong>Die Verarbeitung eines Prompts bedeutet, dass das Modell für jedes Eingabe-Token eine Key-Value-(KV)-Repräsentation berechnet, bevor es mit der Generierung der Antwort beginnen kann.</strong> Dieser Schritt — die Prompt-Verarbeitung — findet vor Beginn der Generierung statt, und seine Kosten skalieren mit der Prompt-Länge. Ohne Caching wird ein langer System-Prompt bei jeder einzelnen Anfrage vollständig neu verarbeitet, selbst wenn er jedes Mal byte-identisch ist.',
          'Caching speichert diese berechnete KV-Repräsentation für ein gegebenes Präfix, verknüpft mit der exakten Token-Sequenz. Beginnt eine neue Anfrage mit denselben Token, werden die zwischengespeicherten KV-Werte direkt wiederverwendet, und nur der neue, nicht zwischengespeicherte Teil des Prompts muss verarbeitet werden. In der Praxis sinkt dadurch die Zeit bis zum ersten Token bei Cache-Treffern deutlich, da der Großteil der Eingabe nicht neu berechnet werden muss.',
          'Deshalb profitieren mehrstufige Gespräche fast automatisch: Runde 3 eines Gesprächs enthält die Runden 1 und 2 als Präfix, sodass ein caching-bewusstes Serving-Setup nur die neueste Runde verarbeitet, nicht den gesamten Gesprächsverlauf erneut.',
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "Prompt-Caching, Präfix-Caching und KV-Caching: die Unterschiede",
        content: [
          "<strong>Prompt-Caching, Präfix-Caching und KV-Caching sind verwandt, aber nicht dasselbe.</strong> Der KV-Cache ist die Datenstruktur: die Key- und Value-Tensoren, die ein Modell für jedes Token berechnet und während der Generierung behält, damit frühere Token nicht bei jedem Schritt neu berechnet werden. Jede Transformer-Inferenz-Engine hat einen, und er existiert innerhalb einer einzelnen Anfrage.",
          "Präfix-Caching und Prompt-Caching bedeuten beide, diese KV-Daten aufzubewahren und über getrennte Anfragen hinweg wiederzuverwenden. „Präfix-Caching“ benennt den Mechanismus (Abgleich eines gemeinsamen Token-Präfixes), „Prompt-Caching“ ist der weitere, anwendernahe Begriff. vLLM nennt seine Umsetzung Automatic Prefix Caching: Sie speichert den KV-Cache früherer Anfragen, sodass eine neue Anfrage mit demselben Präfix diese Berechnung überspringt. Der llama.cpp-Server bietet dieselbe Idee als Option cache_prompt pro Anfrage an, standardmäßig aktiviert, sodass nur der abweichende Teil des Prompts verarbeitet wird.",
          "Kurz gesagt: KV-Caching findet in jeder Generierung statt, während Prompt- oder Präfix-Caching den KV-Cache von einer Anfrage zur nächsten mitnimmt und vom Serving-Tool sowie einem exakt übereinstimmenden Präfix abhängt. Wenn Sie eine Desktop-App wie LM Studio nutzen, prüfen Sie in deren eigener Dokumentation, ob und wie sie die Einstellung bereitstellt.",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: 'Prompts so strukturieren, dass sie wirklich profitieren',
        items: [
          '**Gemeinsamen, unveränderten Inhalt zuerst platzieren.** System-Prompts, Anweisungen und Referenzdokumente, die über Anfragen hinweg identisch bleiben, sollten vor dem variablen, anfragespezifischen Inhalt stehen — Caching funktioniert nur bei einem exakt übereinstimmenden Präfix, also wird alles vor der ersten Abweichung wiederverwendet.',
          '**Das gemeinsame Präfix über Anfragen hinweg byte-identisch halten.** Schon ein einzelnes Zeichen Unterschied in einem System-Prompt (ein Zeitstempel, eine zufällige ID) bricht die Präfix-Übereinstimmung und erzwingt vollständige Neuverarbeitung — jede anfragespezifische Variation ans Ende des Prompts verschieben, nach dem wiederverwendbaren Inhalt.',
          '**Bei unabhängigen Einzelanfragen keinen Nutzen von Caching erwarten.** Wenn Ihr Workload größtenteils aus einmaligen Fragen ohne gemeinsamen Aufbau besteht, gibt es nichts, was Caching wiederverwenden könnte — der Wert der Technik ist proportional dazu, wie viel Ihres Traffics tatsächlich ein gemeinsames Präfix teilt.',
          '**Lang laufende Gespräche profitieren am meisten von den Cache-Aufbewahrungseinstellungen.** Prüfen Sie, wie lange Ihr Serving-Setup zwischengespeicherte Präfixe hält, bevor sie verdrängt werden — ein zu aggressiv geleertes Cache hilft Gesprächen mit Pausen zwischen den Runden nicht.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ändert Prompt-Caching die Ausgabe des Modells?',
            a: "Im Prinzip nein — Caching verwendet dieselben berechneten KV-Werte wieder, statt sie neu zu berechnen, und ändert daher die Geschwindigkeit, nicht Verhalten oder Qualität des Modells. In der Praxis weist die Dokumentation des llama.cpp-Servers darauf hin, dass Ergebnisse bei unterschiedlichen Batch-Größen nicht garantiert bitgenau identisch sind; winzige numerische Abweichungen zwischen einem Lauf mit und ohne Cache sind daher möglich.",
          },
          {
            q: 'Hilft Prompt-Caching bei der Geschwindigkeit der Token-Generierung oder nur bei der anfänglichen Antwortzeit?',
            a: 'Nur bei der anfänglichen Antwortzeit (Zeit bis zum ersten Token). Sobald die Generierung beginnt, werden Token weiterhin einzeln mit derselben Generierungsgeschwindigkeit erzeugt, unabhängig vom Caching — Caching eliminiert redundante Prompt-Verarbeitungsarbeit, nicht den Generierungsschritt selbst.',
          },
          {
            q: 'Wie viel VRAM benötigt Caching?',
            a: 'Zwischengespeicherte KV-Daten liegen im VRAM neben dem Modell selbst, und ihre Größe skaliert mit der Menge des zwischengespeicherten Kontexts und der Anzahl gleichzeitiger Gespräche. Das gleichzeitige Zwischenspeichern vieler langer Gespräche kann den VRAM-Verbrauch spürbar erhöhen — ein realer Kompromiss gegenüber der Caching-Tiefe auf VRAM-begrenzter Hardware.',
          },
          {
            q: 'Unterstützt jedes lokale Serving-Tool Prompt-Caching?',
            a: 'Unterstützung und Standardverhalten variieren je nach Tool — manche cachen automatisch für mehrstufige Nutzung innerhalb einer Sitzung, andere erfordern explizite Konfiguration, und auch die Cache-Aufbewahrung (wie lange ein Präfix vor der Verdrängung zwischengespeichert bleibt) ist tool-spezifisch. Prüfen Sie die Dokumentation Ihres jeweiligen Serving-Tools für dessen Caching-Verhalten und steuernde Einstellungen.',
          },
          {
            q: "Ist Prompt-Caching dasselbe wie KV-Caching?",
            a: "Nein. Der KV-Cache sind die Key- und Value-Daten pro Token, die ein Modell während der Generierung hält, und er existiert in jeder Anfrage. Prompt-Caching (auch Präfix-Caching genannt) ist die Wiederverwendung dieser KV-Daten über getrennte Anfragen mit gleichem Anfang hinweg, sodass der gemeinsame Teil nicht erneut berechnet wird.",
          },
          {
            q: "Was ist Präfix-Caching?",
            a: "Präfix-Caching ist der Mechanismus hinter Prompt-Caching: Die Serving-Engine speichert den KV-Cache für eine Token-Folge und verwendet ihn bei einer neuen Anfrage, die mit exakt denselben Token beginnt, wieder und verarbeitet nur den übrigen Rest. Es erfordert eine Token-für-Token-Übereinstimmung ab dem Prompt-Anfang und beschleunigt nur die Prompt-Verarbeitung, nicht die Token-Generierung.",
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-fr.webp',
    title: "Qu'est-ce que le cache de prompt pour les LLM locaux ?",
    seoTitle: 'Cache de prompt pour LLM locaux expliqué | Prompt Bites',
    metaDescription: "Cache de prompt, cache de préfixe et cache KV pour les LLM locaux : comment la réutilisation du cache KV accélère les prompts répétés et comment structurer vos prompts.",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Développeurs souhaitant accélérer l'inférence LLM locale répétée grâce au cache de prompt ou de contexte",
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: "<strong>Le cache de prompt stocke le calcul intermédiaire (le cache KV) pour le préfixe d'un prompt, afin qu'un prompt répété ou étendu n'ait pas à retraiter ce préfixe depuis le début.</strong> Il accélère toute tâche où les requêtes partagent un début commun — un prompt système fixe, un long document réutilisé pour plusieurs questions, ou les tours précédents d'une conversation en cours — mais n'apporte rien pour les requêtes sans contenu partagé.",
    quickAnswerTop: {
      fr: {
        question: "Qu'est-ce que le cache de prompt et quand aide-t-il l'inférence LLM locale ?",
        answer: "Le cache de prompt stocke le cache clé-valeur (KV) calculé pour le préfixe d'un prompt, afin qu'il n'ait pas besoin d'être recalculé lorsqu'une requête ultérieure partage ce même préfixe — un prompt système fixe, un document réutilisé, ou des tours de conversation précédents. Cela réduit nettement le temps de traitement du prompt pour les charges de travail à préfixe répété, mais n'apporte aucun bénéfice lorsque chaque requête est indépendante.",
        bullets: [
          "Met en cache le cache KV d'un préfixe de prompt, pas la sortie du modèle",
          'Gain le plus important : longs prompts système fixes, documents réutilisés, conversations à plusieurs tours',
          "Aucun bénéfice pour les requêtes isolées sans préfixe partagé entre les appels",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Le cache de prompt stocke le cache KV calculé pour le préfixe d'un prompt, permettant à une requête ultérieure de le réutiliser au lieu de retraiter les mêmes tokens",
          "Plus le préfixe partagé est long et répété, plus le gain de vitesse est important — un prompt système long et inchangé, réutilisé pour des milliers de requêtes, en bénéficie énormément",
          "Les conversations à plusieurs tours en profitent automatiquement dans la plupart des configurations de serving locales, car chaque nouveau tour partage toute la conversation précédente comme préfixe",
          "Le cache n'aide que le traitement du prompt (l'entrée), pas la génération de tokens (la sortie) — il réduit le délai avant le premier token, pas le nombre de tokens par seconde une fois la génération lancée",
          "Le cache de prompt et le cache de préfixe consistent à réutiliser le cache KV entre requêtes distinctes ; le cache KV lui-même existe déjà dans chaque génération",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Le cache de prompt stocke le cache KV calculé pour un préfixe de prompt partagé, afin que les requêtes ultérieures évitent de le retraiter.' },
          { type: 'plain-terms', text: "En clair : si beaucoup de vos requêtes commencent par le même texte, le cache permet au modèle de ne « lire » cette partie commune qu'une seule fois, pas à chaque fois." },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Comment le cache accélère réellement les choses',
        content: [
          "<strong>Traiter un prompt signifie que le modèle calcule une représentation clé-valeur (KV) pour chaque token d'entrée avant de pouvoir commencer à générer une réponse.</strong> Cette étape — le traitement du prompt — a lieu avant le début de la génération, et son coût augmente avec la longueur du prompt. Sans cache, un prompt système de 2 000 tokens est entièrement retraité à chaque requête, même s'il est identique au bit près à chaque fois.",
          "Le cache stocke cette représentation KV calculée pour un préfixe donné, indexée sur la séquence de tokens exacte. Lorsqu'une nouvelle requête commence par les mêmes tokens, les valeurs KV mises en cache sont directement réutilisées, et seule la partie nouvelle, non mise en cache, du prompt doit être traitée. En pratique, le délai avant le premier token chute nettement pour les correspondances en cache, puisque la majeure partie de l'entrée n'a plus besoin d'être recalculée.",
          "C'est pourquoi les conversations à plusieurs tours en profitent presque automatiquement : le tour 3 d'une conversation inclut les tours 1 et 2 comme préfixe, donc une configuration de serving qui gère le cache ne traite que le tour le plus récent, pas tout l'historique de la conversation.",
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "Cache de prompt, cache de préfixe et cache KV : les différences",
        content: [
          "<strong>Le cache de prompt, le cache de préfixe et le cache KV sont liés mais ne sont pas la même chose.</strong> Le cache KV est la structure de données : les tenseurs clés et valeurs que le modèle calcule pour chaque token et conserve pendant la génération afin de ne pas recalculer les tokens précédents à chaque étape. Tout moteur d'inférence de type transformer en possède un, et il existe au sein d'une seule requête.",
          "Le cache de préfixe et le cache de prompt désignent tous deux la conservation de ces données KV et leur réutilisation entre requêtes distinctes. « Cache de préfixe » nomme le mécanisme (faire correspondre un préfixe de tokens partagé) ; « cache de prompt » est le terme plus large, orienté utilisateur. vLLM appelle son implémentation automatic prefix caching : elle met en cache le cache KV des requêtes précédentes pour qu'une nouvelle requête au même préfixe évite ce calcul. Le serveur llama.cpp propose la même idée via l'option cache_prompt, par requête et activée par défaut, de sorte que seule la partie différente du prompt est traitée.",
          "En bref : le cache KV intervient dans chaque génération, tandis que le cache de prompt ou de préfixe transporte le cache KV d'une requête à la suivante et dépend de votre outil de serving et d'un préfixe strictement identique. Si vous utilisez une application de bureau comme LM Studio, consultez sa propre documentation pour savoir si et comment elle expose ce réglage.",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: 'Structurer les prompts pour vraiment en profiter',
        items: [
          "**Placez le contenu partagé et invariable en premier.** Les prompts système, instructions et documents de référence qui restent identiques entre les requêtes doivent précéder le contenu variable propre à chaque requête — le cache ne fonctionne que sur un préfixe correspondant exactement, donc tout ce qui précède le premier point de différence est ce qui sera réutilisé.",
          "**Gardez le préfixe partagé identique au bit près entre les requêtes.** Ne serait-ce qu'un seul caractère de différence dans un prompt système (un horodatage, un identifiant aléatoire) rompt la correspondance du préfixe et force un retraitement complet — déplacez toute variation propre à la requête à la fin du prompt, après le contenu réutilisable.",
          "**Ne comptez pas sur le cache pour des requêtes isolées et indépendantes.** Si votre charge de travail est surtout composée de questions ponctuelles sans configuration partagée, il n'y a rien à réutiliser pour le cache — la valeur de la technique est proportionnelle à la part de votre trafic qui partage réellement un préfixe commun.",
          "**Les conversations longues bénéficient le plus des paramètres de rétention du cache.** Vérifiez combien de temps votre configuration de serving conserve les préfixes en cache avant de les évincer — un cache évincé trop agressivement n'aidera pas les conversations avec des pauses entre les tours.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Le cache de prompt modifie-t-il la sortie du modèle ?',
            a: "En principe non — le cache réutilise les mêmes valeurs KV déjà calculées au lieu de les recalculer, il change donc la vitesse, pas le comportement ni la qualité du modèle. En pratique, la documentation du serveur llama.cpp précise que les résultats ne sont pas garantis identiques au bit près selon la taille de lot ; de minimes écarts numériques entre une exécution avec et sans cache sont donc possibles.",
          },
          {
            q: 'Le cache de prompt améliore-t-il la vitesse de génération des tokens, ou seulement le temps de réponse initial ?',
            a: "Seulement le temps de réponse initial (délai avant le premier token). Une fois la génération lancée, les tokens continuent d'être produits un par un à la même vitesse de génération, indépendamment du cache — le cache élimine le travail redondant de traitement du prompt, pas l'étape de génération elle-même.",
          },
          {
            q: 'Quelle quantité de VRAM le cache utilise-t-il ?',
            a: "Les données KV mises en cache résident en VRAM aux côtés du modèle lui-même, et leur taille dépend de la quantité de contexte mis en cache et du nombre de conversations simultanées. Mettre en cache de nombreuses longues conversations en même temps peut augmenter sensiblement l'utilisation de la VRAM — un compromis réel face à la profondeur du cache sur du matériel limité en VRAM.",
          },
          {
            q: 'Tous les outils de serving locaux prennent-ils en charge le cache de prompt ?',
            a: "La prise en charge et le comportement par défaut varient selon l'outil — certains mettent en cache automatiquement pour un usage à plusieurs tours au sein d'une session, d'autres nécessitent une configuration explicite, et la rétention du cache (durée pendant laquelle un préfixe reste en cache avant éviction) est également spécifique à chaque outil. Consultez la documentation de votre outil de serving pour connaître son comportement de cache et les paramètres qui le contrôlent.",
          },
          {
            q: "Le cache de prompt est-il la même chose que le cache KV ?",
            a: "Non. Le cache KV correspond aux données clés et valeurs par token que le modèle conserve pendant la génération, et il existe dans chaque requête. Le cache de prompt (ou cache de préfixe) est la réutilisation de ces données KV entre requêtes distinctes qui partagent le même début, afin que la partie commune ne soit pas recalculée.",
          },
          {
            q: "Qu'est-ce que le cache de préfixe ?",
            a: "Le cache de préfixe est le mécanisme qui sous-tend le cache de prompt : le moteur de serving stocke le cache KV d'une séquence de tokens et, lorsqu'une nouvelle requête commence par exactement les mêmes tokens, le réutilise et ne traite que le reste. Il exige une correspondance token par token dès le début du prompt et n'accélère que le traitement du prompt, pas la génération de tokens.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-ja.webp',
    title: 'ローカルLLMのプロンプトキャッシュとは？',
    seoTitle: 'ローカルLLMのプロンプトキャッシュを解説 | Prompt Bites',
    metaDescription: "ローカルLLMのプロンプトキャッシュ・プレフィックスキャッシュ・KVキャッシュの違いと、KVキャッシュの再利用が繰り返しのプロンプトをどう高速化するか、構成のコツを解説します。",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'プロンプトキャッシュやコンテキストキャッシュで繰り返しのローカルLLM推論を高速化したい開発者',
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>プロンプトキャッシュは、プロンプトのプレフィックス（先頭部分）の中間計算結果（KVキャッシュ）を保存し、繰り返しや拡張されたプロンプトがそのプレフィックスをゼロから再処理しなくて済むようにする仕組みです。</strong>固定のシステムプロンプト、複数の質問で再利用される長い文書、進行中の会話の過去のやり取りなど、リクエストが共通の先頭部分を共有するワークロードを高速化しますが、共有される内容がないリクエストには効果がありません。',
    quickAnswerTop: {
      ja: {
        question: 'プロンプトキャッシュとは何で、ローカルLLM推論のどこで役立ちますか？',
        answer: 'プロンプトキャッシュは、プロンプトのプレフィックスについて計算されたキー・バリュー（KV）キャッシュを保存し、後続のリクエストが同じプレフィックスを共有する場合に再計算を不要にする仕組みです（固定のシステムプロンプト、再利用される文書、過去の会話ターンなど）。プレフィックスが繰り返されるワークロードではプロンプト処理時間を大幅に短縮しますが、すべてのリクエストが無関係であれば効果はありません。',
        bullets: [
          'プロンプトのプレフィックスのKVキャッシュを保存するもので、モデルの出力そのものではない',
          '最大の効果：長い固定システムプロンプト、再利用される文書、複数ターンの会話',
          '呼び出しごとに共有プレフィックスがない単発リクエストには効果なし',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'プロンプトキャッシュはプロンプトのプレフィックスについて計算されたKVキャッシュを保存し、後のリクエストが同じトークンを再処理する代わりに再利用できるようにする',
          '共有されるプレフィックスが大きく、繰り返される頻度が高いほど高速化の効果も大きい — 数千のリクエストで再利用される長く変化しないシステムプロンプトは大きな恩恵を受ける',
          'ほとんどのローカルサービング環境では複数ターンの会話が自動的に恩恵を受ける。新しいターンごとにそれまでの会話全体をプレフィックスとして共有するため',
          'キャッシュはプロンプト処理（入力側）にのみ効果があり、トークン生成（出力側）には効果がない — 最初のトークンが出るまでの時間を短縮するのであって、生成開始後のトークン毎秒には影響しない',
          "プロンプトキャッシュとプレフィックスキャッシュは、別々のリクエスト間でKVキャッシュを再利用することを指します。KVキャッシュ自体はすべての生成にすでに存在します",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'プロンプトキャッシュは共有されるプロンプトのプレフィックスについて計算されたKVキャッシュを保存し、後続のリクエストが再処理をスキップできるようにします。' },
          { type: 'plain-terms', text: '簡単に言うと、多くのリクエストが同じテキストで始まる場合、キャッシュを使えばモデルはその共通部分を毎回ではなく一度だけ「読む」だけで済みます。' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'キャッシュが実際に処理を高速化する仕組み',
        content: [
          '<strong>プロンプトを処理するとは、モデルが応答の生成を始める前に、入力の各トークンについてキー・バリュー（KV）表現を計算することです。</strong>このプロンプト処理のステップは生成が始まる前に発生し、そのコストはプロンプトの長さに比例します。キャッシュがなければ、2,000トークンのシステムプロンプトは、毎回バイト単位で同一であっても、リクエストのたびに完全に再処理されます。',
          'キャッシュは、特定のプレフィックスについて計算されたこのKV表現を、正確なトークン列に紐づけて保存します。新しいリクエストが同じトークンで始まる場合、キャッシュされたKV値がそのまま再利用され、プロンプトのうち新しい・未キャッシュの部分のみが処理されます。実際の効果として、入力の大部分を再計算する必要がなくなるため、キャッシュがヒットした場合は最初のトークンが出るまでの時間が大幅に短縮されます。',
          'これが、複数ターンの会話がほぼ自動的に恩恵を受ける理由です。会話の3ターン目には1ターン目と2ターン目がプレフィックスとして含まれるため、キャッシュを意識したサービング環境では、会話履歴全体ではなく最新のターンのみを処理すれば済みます。',
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "プロンプトキャッシュ、プレフィックスキャッシュ、KVキャッシュの違い",
        content: [
          "<strong>プロンプトキャッシュ、プレフィックスキャッシュ、KVキャッシュは関連していますが、同じものではありません。</strong>KVキャッシュはデータ構造そのものです。モデルがトークンごとに計算するキーとバリューのテンソルで、生成中に保持することで、各ステップで過去のトークンを再計算せずに済みます。あらゆるTransformer推論エンジンが持っており、1回のリクエストの内部で機能します。",
          "プレフィックスキャッシュとプロンプトキャッシュは、どちらもそのKVデータを保持し、別々のリクエスト間で再利用することを指します。「プレフィックスキャッシュ」は仕組み（共通するトークンの先頭部分を照合すること）を指し、「プロンプトキャッシュ」はより広い、ユーザー向けの呼び方です。vLLMはこの実装をautomatic prefix cachingと呼び、過去のクエリのKVキャッシュを保存して、同じ先頭を持つ新しいクエリがその計算を省略できるようにします。llama.cppサーバーは同じ考え方をリクエスト単位のcache_promptオプション（デフォルトで有効）として提供し、プロンプトのうち異なる部分だけが処理されます。",
          "要するに、KVキャッシュはすべての生成の内部で働き、プロンプトキャッシュ／プレフィックスキャッシュはKVキャッシュをリクエストからリクエストへ引き継ぐもので、利用するサービングツールと完全に一致する先頭部分に依存します。LM Studioなどのデスクトップアプリを使う場合は、その設定が提供されているか、どう設定するかをアプリ自体のドキュメントで確認してください。",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: '実際に恩恵を受けるためのプロンプト構成',
        items: [
          '**共有される変化しない内容を先頭に置く。** リクエスト間で同一のまま変わらないシステムプロンプト、指示、参照文書は、リクエストごとに異なる可変部分より前に置きます。キャッシュは完全一致するプレフィックスにのみ機能するため、最初の相違点より前の部分が再利用の対象になります。',
          '**共有プレフィックスをリクエスト間でバイト単位で同一に保つ。** システムプロンプト内のたった1文字の違い（タイムスタンプやランダムなIDなど）でもプレフィックスの一致が崩れ、完全な再処理を強制されます — リクエストごとに変化する部分は、再利用可能な内容の後、プロンプトの末尾に移動させます。',
          '**無関係な単発リクエストにキャッシュの効果を期待しない。** 共有される前提のない単発の質問が中心のワークロードでは、キャッシュが再利用できるものがありません — このテクニックの価値は、トラフィックのうちどれだけ実際に共通のプレフィックスを共有しているかに比例します。',
          '**長時間続く会話は、キャッシュ保持設定の恩恵を最も受けます。** サービング環境がキャッシュされたプレフィックスを破棄するまでどれくらい保持するかを確認しましょう — 破棄が積極的すぎるキャッシュは、ターン間に間隔のある会話には役立ちません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'プロンプトキャッシュはモデルの出力を変えますか？',
            a: "原則として変わりません。キャッシュは計算済みの同じKV値を再計算せずに再利用するため、変わるのは速度であり、モデルの挙動や品質ではありません。ただし実際には、llama.cppサーバーのドキュメントが、バッチサイズが異なる場合に結果がビット単位で同一であることは保証されないと注記しているため、キャッシュありとなしの実行の間でごくわずかな数値差が生じることはあり得ます。",
          },
          {
            q: 'プロンプトキャッシュはトークン生成速度に役立ちますか、それとも初回応答時間だけですか？',
            a: '初回応答時間（最初のトークンが出るまでの時間）にのみ役立ちます。生成が始まると、キャッシュの有無にかかわらずトークンは同じ生成速度で1つずつ生成されます — キャッシュが取り除くのは無駄なプロンプト処理であり、生成ステップ自体ではありません。',
          },
          {
            q: 'キャッシュはどれくらいVRAMを使いますか？',
            a: 'キャッシュされたKVデータはモデル自体と並んでVRAM上に存在し、そのサイズはキャッシュされているコンテキストの量と同時進行の会話数に応じて増減します。長い会話を多数同時にキャッシュすると、VRAM使用量が無視できないほど増加することがあります — VRAMに制約のあるハードウェアでは、キャッシュの深さとの間に実際のトレードオフがあります。',
          },
          {
            q: 'ローカルのサービングツールはすべてプロンプトキャッシュに対応していますか？',
            a: '対応状況やデフォルトの挙動はツールによって異なります — セッション内の複数ターン利用で自動的にキャッシュするツールもあれば、明示的な設定が必要なツールもあり、キャッシュ保持期間（プレフィックスが破棄されるまでキャッシュされ続ける時間）もツールごとに異なります。使用しているサービングツールのドキュメントで、キャッシュの挙動と制御可能な設定を確認してください。',
          },
          {
            q: "プロンプトキャッシュとKVキャッシュは同じものですか？",
            a: "いいえ。KVキャッシュは、モデルが生成中に保持するトークンごとのキーとバリューのデータで、すべてのリクエストに存在します。プロンプトキャッシュ（プレフィックスキャッシュとも呼ばれます）は、同じ先頭を共有する別々のリクエスト間でそのKVデータを再利用し、共通部分を再計算しないようにすることです。",
          },
          {
            q: "プレフィックスキャッシュとは何ですか？",
            a: "プレフィックスキャッシュはプロンプトキャッシュの背後にある仕組みです。サービングエンジンがトークン列のKVキャッシュを保存し、新しいリクエストが完全に同じトークンで始まる場合にそれを再利用して、残りの部分だけを処理します。プロンプトの先頭からトークン単位で完全に一致する必要があり、高速化されるのはプロンプト処理のみで、トークン生成は速くなりません。",
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-zh.webp',
    title: '什么是本地LLM的提示词缓存？',
    seoTitle: '本地LLM提示词缓存详解 | Prompt Bites',
    metaDescription: "本地LLM的提示词缓存、前缀缓存与KV缓存有何区别：复用KV缓存如何加速重复提示词，以及如何构建提示词以真正受益。",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '希望通过提示词或上下文缓存加快重复本地LLM推理速度的开发者',
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>提示词缓存会保存提示词前缀的中间计算结果（KV缓存），这样重复或延续的提示词就不必从头重新处理该前缀。</strong>只要请求之间共享相同的开头——固定的系统提示词、跨多个问题重复使用的长文档，或正在进行的对话中的前几轮——它就能提升速度；但对没有共享内容的请求没有任何帮助。',
    quickAnswerTop: {
      zh: {
        question: '什么是提示词缓存？它在什么情况下能帮助本地LLM推理？',
        answer: '提示词缓存会保存为提示词前缀计算出的键值（KV）缓存，这样当后续请求共享相同前缀时——固定的系统提示词、重复使用的文档，或此前的对话轮次——就无需重新计算。对于前缀重复的工作负载，它能显著缩短提示词处理时间；但如果每个请求都互不相关，就没有任何收益。',
        bullets: [
          '缓存的是提示词前缀的KV缓存，而不是模型的输出',
          '最大收益场景：长而固定的系统提示词、重复使用的文档、多轮对话',
          '各次调用之间没有共享前缀的单次请求不会受益',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '提示词缓存保存为提示词前缀计算出的KV缓存，让后续请求可以直接复用，而不必重新处理相同的token',
          '共享前缀越大、重复次数越多，加速效果越明显——一段长而不变的系统提示词若被数千次请求复用，收益会非常可观',
          '在大多数本地服务部署中，多轮对话会自动受益，因为每一轮新的对话都会把之前的全部对话作为前缀共享',
          '缓存只对提示词处理（输入端）有帮助，对token生成（输出端）没有帮助——它缩短的是首个token出现的时间，而不是生成开始后每秒生成的token数',
          "提示词缓存和前缀缓存指的是在不同请求之间复用KV缓存；KV缓存本身在每一次生成中就已存在",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '提示词缓存保存共享提示词前缀计算出的KV缓存，让后续请求跳过重复处理。' },
          { type: 'plain-terms', text: '简单来说：如果你的很多请求都以相同的文本开头，缓存能让模型只"读取"一次这段共同内容，而不必每次都重新读取。' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '缓存究竟如何加快速度',
        content: [
          '<strong>处理一段提示词，意味着模型要在开始生成回复之前，为每一个输入token计算出键值（KV）表示。</strong>这一步——提示词处理——发生在生成开始之前，其成本随提示词长度增加而增加。如果没有缓存，一段2000个token的系统提示词会在每一次请求中被完整地重新处理，即使它每次都是逐字节相同的内容。',
          '缓存会保存针对某个前缀计算出的KV表示，并将其与确切的token序列绑定。当新请求以相同的token开头时，缓存的KV值会被直接复用，只有提示词中新增的、未缓存的部分才需要处理。实际效果是：对于命中缓存的情况，首个token出现所需的时间会显著缩短，因为大部分输入不再需要重新计算。',
          '这也是多轮对话几乎自动受益的原因：对话的第3轮会将第1轮和第2轮作为其前缀，因此支持缓存的服务部署只需要处理最新一轮，而不必重新处理整个对话历史。',
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "提示词缓存、前缀缓存与KV缓存的区别",
        content: [
          "<strong>提示词缓存、前缀缓存和KV缓存相互关联，但并不是同一回事。</strong>KV缓存是数据结构本身：模型为每个token计算出的键（key）和值（value）张量，在生成过程中保留下来，这样每一步都不必重新计算之前的token。所有Transformer推理引擎都有它，且它存在于单个请求之内。",
          "前缀缓存和提示词缓存都指保留这些KV数据并在不同请求之间复用。“前缀缓存”指的是机制（匹配共享的token前缀），“提示词缓存”则是更宽泛、面向用户的说法。vLLM将其实现称为automatic prefix caching：缓存之前查询的KV缓存，使具有相同前缀的新查询跳过这部分计算。llama.cpp服务器则以按请求设置的cache_prompt选项提供同样的功能，默认启用，因此只需处理提示词中不同的部分。",
          "简而言之：KV缓存发生在每一次生成内部，而提示词缓存或前缀缓存把KV缓存从一个请求带到下一个请求，并取决于你使用的服务工具以及完全一致的前缀。如果你使用桌面应用（例如LM Studio），请查阅该应用自身的文档，确认它是否提供以及如何设置该选项。",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: '如何构建提示词才能真正受益',
        items: [
          '**把共享、不变的内容放在最前面。** 在不同请求间保持一致的系统提示词、指令和参考文档，应该放在会随请求变化的内容之前——缓存只对完全匹配的前缀生效，所以第一处出现差异之前的所有内容才是可以被复用的部分。',
          '**让请求之间的共享前缀保持逐字节一致。** 系统提示词中哪怕只有一个字符的差异（比如时间戳、随机ID）都会打破前缀匹配，从而触发完整的重新处理——把每次请求特有的可变内容放到提示词末尾，放在可复用内容之后。',
          '**不要指望缓存能帮到互不相关的单次请求。** 如果你的工作负载主要是没有共享设置的一次性提问，那么缓存就没有可以复用的内容——这项技术的价值，取决于你有多少流量真正共享着同一个前缀。',
          '**长时间持续的对话最能从缓存保留设置中受益。** 检查你所用的服务部署会把缓存的前缀保留多久才驱逐——如果驱逐过于激进，对于轮次之间存在间隔的对话就起不到帮助。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '提示词缓存会改变模型的输出吗？',
            a: "原则上不会——缓存复用的是已计算好的相同KV值，而不是重新计算，所以改变的是速度，而不是模型的行为或质量。但在实践中，llama.cpp服务器文档指出，在不同批大小下结果不保证逐位完全相同，因此使用缓存与不使用缓存的两次运行之间可能出现极微小的数值差异。",
          },
          {
            q: '提示词缓存能提升token生成速度，还是只影响首次响应时间？',
            a: '只影响首次响应时间（即首个token出现所需的时间）。一旦生成开始，无论是否使用了缓存，token仍然会以相同的生成速度逐个产生——缓存消除的是冗余的提示词处理工作，而不是生成步骤本身。',
          },
          {
            q: '缓存会占用多少VRAM？',
            a: '缓存的KV数据与模型本身一同存放在VRAM中，其大小取决于被缓存的上下文量以及并发对话的数量。同时缓存多个长对话可能会明显增加VRAM占用——在VRAM有限的硬件上，这是一个需要权衡缓存深度的实际问题。',
          },
          {
            q: '所有本地服务工具都支持提示词缓存吗？',
            a: '支持情况和默认行为因工具而异——有些工具会在同一会话内的多轮使用中自动缓存，有些则需要显式配置，缓存保留时间（前缀在被驱逐前保持缓存的时长）也因工具而不同。请查阅你所使用的具体服务工具的文档，了解其缓存行为及可控制的相关设置。',
          },
          {
            q: "提示词缓存和KV缓存是一回事吗？",
            a: "不是。KV缓存是模型在生成时为每个token保留的键和值数据，每个请求中都存在。提示词缓存（也称前缀缓存）是在开头相同的不同请求之间复用这些KV数据，使共享部分不必重新计算。",
          },
          {
            q: "什么是前缀缓存？",
            a: "前缀缓存是提示词缓存背后的机制：服务引擎保存某段token序列的KV缓存，当新请求以完全相同的token开头时直接复用，只处理其余部分。它要求从提示词开头起逐个token完全匹配，并且只加速提示词处理，不加速token生成。",
          },
        ],
      },
    },
  },
  es: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-es.webp',
    title: '¿Qué es el caching de prompts para LLMs locales?',
    seoTitle: 'Caching de Prompts para LLMs Locales Explicado | Prompt Bites',
    metaDescription: "Caching de prompts, de prefijos y de KV en LLMs locales: cómo reutilizar la caché KV acelera prompts repetidos y cómo estructurar tus prompts para aprovecharlo.",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que buscan una inferencia local de LLM más rápida en solicitudes repetidas mediante el caching de prompts o contexto',
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>El caching de prompts guarda el cálculo intermedio (la caché KV) del prefijo de un prompt, de modo que un prompt repetido o extendido no tenga que reprocesar ese prefijo desde cero.</strong> Acelera cualquier carga de trabajo donde las solicitudes comparten un inicio común — un prompt de sistema fijo, un documento largo reutilizado en varias preguntas, o los turnos anteriores de una conversación en curso — pero no aporta nada en solicitudes sin contenido compartido.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es el caching de prompts y cuándo ayuda a la inferencia de LLM local?',
        answer: 'El caching de prompts guarda la caché de clave-valor (KV) calculada para el prefijo de un prompt, de modo que no necesite recalcularse cuando una solicitud posterior comparte ese mismo prefijo — un prompt de sistema fijo, un documento reutilizado o turnos de conversación anteriores. Reduce significativamente el tiempo de procesamiento del prompt en cargas de trabajo con prefijo repetido, pero no aporta ningún beneficio cuando cada solicitud es independiente.',
        bullets: [
          'Guarda en caché el KV del prefijo de un prompt, no la salida del modelo',
          'Mayor beneficio: prompts de sistema largos y fijos, documentos reutilizados, conversaciones de varios turnos',
          'Sin beneficio para solicitudes puntuales sin prefijo compartido entre llamadas',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'El caching de prompts guarda la caché KV calculada para el prefijo de un prompt, permitiendo que una solicitud posterior la reutilice en lugar de reprocesar los mismos tokens',
          'Cuanto mayor y más repetido sea el prefijo compartido, mayor será la mejora de velocidad — un prompt de sistema largo e inmutable, reutilizado en miles de solicitudes, se beneficia enormemente',
          'Las conversaciones de varios turnos se benefician automáticamente en la mayoría de las configuraciones de serving local, ya que cada nuevo turno comparte toda la conversación previa como prefijo',
          'El caching solo ayuda en el procesamiento del prompt (la entrada), no en la generación de tokens (la salida) — reduce el tiempo hasta el primer token, no los tokens por segundo una vez que empieza la generación',
          "El caching de prompts y de prefijos consiste en reutilizar la caché KV entre solicitudes distintas; la caché KV en sí ya existe dentro de cada generación",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'El caching de prompts guarda la caché KV calculada para un prefijo de prompt compartido, para que las solicitudes posteriores omitan su reprocesamiento.' },
          { type: 'plain-terms', text: 'En términos simples: si muchas de tus solicitudes empiezan con el mismo texto, el caching hace que el modelo solo tenga que "leer" esa parte compartida una vez, no cada vez.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Cómo el caching acelera realmente las cosas',
        content: [
          '<strong>Procesar un prompt significa que el modelo calcula una representación clave-valor (KV) para cada token de entrada antes de poder empezar a generar una respuesta.</strong> Este paso — el procesamiento del prompt — ocurre antes de que comience la generación, y su coste escala con la longitud del prompt. Sin caching, un prompt de sistema largo se reprocesa por completo en cada solicitud, incluso si es idéntico byte a byte cada vez.',
          'El caching guarda esa representación KV calculada para un prefijo determinado, indexada según la secuencia exacta de tokens. Cuando una nueva solicitud comienza con los mismos tokens, los valores KV en caché se reutilizan directamente, y solo la porción nueva y no cacheada del prompt necesita procesarse. El efecto práctico es que el tiempo hasta el primer token cae drásticamente en los aciertos de caché, ya que la mayor parte de la entrada ya no necesita recalcularse.',
          'Por eso las conversaciones de varios turnos se benefician casi automáticamente: el turno 3 de una conversación incluye los turnos 1 y 2 como su prefijo, así que una configuración de serving consciente del caching solo procesa el turno más reciente, no todo el historial de la conversación de nuevo.',
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "Caching de prompts, de prefijos y de KV: en qué se diferencian",
        content: [
          "<strong>El caching de prompts, el caching de prefijos y el caching de KV están relacionados, pero no son lo mismo.</strong> La caché KV es la estructura de datos: los tensores de claves y valores que el modelo calcula para cada token y conserva durante la generación para no recalcular los tokens anteriores en cada paso. Todo motor de inferencia de transformers tiene una, y existe dentro de una sola solicitud.",
          "El caching de prefijos y el de prompts significan conservar esos datos KV y reutilizarlos entre solicitudes distintas. «Caching de prefijos» nombra el mecanismo (coincidir con un prefijo de tokens compartido); «caching de prompts» es el término más amplio, de cara al usuario. vLLM llama a su implementación automatic prefix caching: guarda la caché KV de consultas anteriores para que una nueva consulta con el mismo prefijo omita ese cálculo. El servidor de llama.cpp ofrece la misma idea como opción cache_prompt por solicitud, activada por defecto, de modo que solo se procesa la parte del prompt que difiere.",
          "En resumen: el caching de KV ocurre dentro de cada generación, mientras que el caching de prompts o de prefijos lleva la caché KV de una solicitud a la siguiente y depende de tu herramienta de serving y de un prefijo exactamente igual. Si usas una aplicación de escritorio como LM Studio, consulta su propia documentación para saber si expone el ajuste y cómo.",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: 'Cómo estructurar prompts para beneficiarte realmente',
        items: [
          '**Coloca primero el contenido compartido e invariable.** Los prompts de sistema, instrucciones y documentos de referencia que permanecen idénticos entre solicitudes deben ir antes del contenido variable y específico de cada solicitud — el caching solo funciona con un prefijo que coincida exactamente, así que todo lo que precede al primer punto de diferencia es lo que se reutiliza.',
          '**Mantén el prefijo compartido idéntico byte a byte entre solicitudes.** Incluso una sola diferencia de carácter en un prompt de sistema (una marca de tiempo, un ID aleatorio) rompe la coincidencia del prefijo y fuerza un reprocesamiento completo — mueve cualquier variación específica de la solicitud al final del prompt, después del contenido reutilizable.',
          '**No esperes que el caching ayude en solicitudes puntuales y no relacionadas.** Si tu carga de trabajo consiste sobre todo en preguntas de un solo uso sin configuración compartida, no hay nada que el caching pueda reutilizar — el valor de la técnica es proporcional a cuánto de tu tráfico realmente comparte un prefijo común.',
          '**Las conversaciones de larga duración se benefician más de los ajustes de retención de caché.** Comprueba durante cuánto tiempo tu configuración de serving conserva los prefijos en caché antes de descartarlos — una caché que se descarta demasiado agresivamente no ayudará a conversaciones con pausas entre turnos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿El caching de prompts cambia la salida del modelo?',
            a: "En principio no: el caching reutiliza los mismos valores KV ya calculados en lugar de recalcularlos, así que cambia la velocidad, no el comportamiento ni la calidad del modelo. En la práctica, la documentación del servidor de llama.cpp señala que los resultados no están garantizados bit a bit idénticos con distintos tamaños de lote, por lo que son posibles diferencias numéricas mínimas entre una ejecución con caché y otra sin ella.",
          },
          {
            q: '¿El caching de prompts ayuda a la velocidad de generación de tokens, o solo al tiempo de respuesta inicial?',
            a: 'Solo al tiempo de respuesta inicial (tiempo hasta el primer token). Una vez que empieza la generación, los tokens se siguen produciendo uno a uno a la misma velocidad de generación sin importar el caching — el caching elimina el trabajo redundante de procesamiento del prompt, no el paso de generación en sí.',
          },
          {
            q: '¿Cuánta VRAM usa el caching?',
            a: 'Los datos KV en caché residen en la VRAM junto al propio modelo, y su tamaño escala con la cantidad de contexto que se está cacheando y con el número de conversaciones concurrentes. Cachear muchas conversaciones largas simultáneamente puede aumentar de forma notable el uso de VRAM — es un compromiso real frente a la profundidad de caching en hardware con VRAM limitada.',
          },
          {
            q: '¿Todas las herramientas de serving local admiten el caching de prompts?',
            a: 'El soporte y el comportamiento por defecto varían según la herramienta — algunas cachean automáticamente para uso de varios turnos dentro de una sesión, otras requieren configuración explícita, y la retención de caché (cuánto tiempo permanece un prefijo en caché antes de descartarse) también depende de la herramienta. Consulta la documentación de tu herramienta de serving específica para conocer su comportamiento de caching y los ajustes que lo controlan.',
          },
          {
            q: "¿Es lo mismo el caching de prompts que el caching de KV?",
            a: "No. La caché KV son los datos de clave y valor por token que el modelo conserva al generar, y existe en cada solicitud. El caching de prompts (también llamado caching de prefijos) es la reutilización de esos datos KV entre solicitudes distintas que comparten el mismo comienzo, para no recalcular la parte común.",
          },
          {
            q: "¿Qué es el caching de prefijos?",
            a: "El caching de prefijos es el mecanismo detrás del caching de prompts: el motor de serving guarda la caché KV de una secuencia de tokens y, cuando una nueva solicitud empieza exactamente con los mismos tokens, la reutiliza y procesa solo el resto. Exige coincidencia token a token desde el inicio del prompt y solo acelera el procesamiento del prompt, no la generación de tokens.",
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-pt.webp',
    title: 'O Que É Cache de Prompt para LLMs Locais?',
    seoTitle: 'Cache de Prompt para LLMs Locais Explicado | Prompt Bites',
    metaDescription: "Cache de prompt, de prefixo e de KV em LLMs locais: como reutilizar o cache KV acelera prompts repetidos e como estruturar seus prompts para se beneficiar.",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores que querem inferência local de LLM mais rápida em solicitações repetidas por meio de cache de prompt ou de contexto',
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O cache de prompt armazena o cálculo intermediário (o cache KV) do prefixo de um prompt, para que um prompt repetido ou estendido não precise reprocessar esse prefixo do zero.</strong> Ele acelera qualquer carga de trabalho em que as solicitações compartilham um início comum — um prompt de sistema fixo, um documento longo reutilizado em várias perguntas, ou os turnos anteriores de uma conversa em andamento — mas não traz benefício para solicitações sem conteúdo compartilhado.',
    quickAnswerTop: {
      pt: {
        question: 'O que é cache de prompt e quando ele ajuda a inferência local de LLM?',
        answer: 'O cache de prompt armazena o cache de chave-valor (KV) calculado para o prefixo de um prompt, para que não precise ser recalculado quando uma solicitação posterior compartilha esse mesmo prefixo — um prompt de sistema fixo, um documento reutilizado ou turnos anteriores de conversa. Isso reduz significativamente o tempo de processamento do prompt em cargas de trabalho com prefixo repetido, mas não traz nenhum benefício quando cada solicitação é independente.',
        bullets: [
          'Armazena em cache o KV do prefixo de um prompt, não a saída do modelo',
          'Maior ganho: prompts de sistema longos e fixos, documentos reutilizados, conversas de vários turnos',
          'Nenhum benefício para solicitações avulsas sem prefixo compartilhado entre chamadas',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O cache de prompt armazena o cache KV calculado para o prefixo de um prompt, permitindo que uma solicitação posterior o reutilize em vez de reprocessar os mesmos tokens',
          'Quanto maior e mais repetido o prefixo compartilhado, maior o ganho de velocidade — um prompt de sistema longo e imutável, reutilizado em milhares de solicitações, se beneficia enormemente',
          'Conversas de vários turnos se beneficiam automaticamente na maioria das configurações de serving local, já que cada novo turno compartilha toda a conversa anterior como prefixo',
          'O cache só ajuda no processamento do prompt (a entrada), não na geração de tokens (a saída) — ele reduz o tempo até o primeiro token, não os tokens por segundo depois que a geração começa',
          "Cache de prompt e cache de prefixo significam reutilizar o cache KV entre requisições separadas; o cache KV em si já existe dentro de cada geração",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O cache de prompt armazena o cache KV calculado para um prefixo de prompt compartilhado, para que solicitações posteriores pulem o reprocessamento.' },
          { type: 'plain-terms', text: 'Em termos simples: se várias das suas solicitações começam com o mesmo texto, o cache faz o modelo "ler" essa parte comum apenas uma vez, não a cada solicitação.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Como o Cache Realmente Acelera as Coisas',
        content: [
          '<strong>Processar um prompt significa que o modelo calcula uma representação de chave-valor (KV) para cada token de entrada antes de começar a gerar uma resposta.</strong> Essa etapa — o processamento do prompt — acontece antes do início da geração, e seu custo cresce com o comprimento do prompt. Sem cache, um prompt de sistema longo é totalmente reprocessado a cada solicitação, mesmo sendo idêntico byte a byte em todas as vezes.',
          'O cache armazena essa representação KV calculada para um determinado prefixo, indexada pela sequência exata de tokens. Quando uma nova solicitação começa com os mesmos tokens, os valores KV em cache são reutilizados diretamente, e apenas a parte nova e não cacheada do prompt precisa ser processada. O efeito prático é que o tempo até o primeiro token cai bastante nos acertos de cache, já que a maior parte da entrada não precisa mais ser recalculada.',
          'É por isso que conversas de vários turnos se beneficiam quase automaticamente: o turno 3 de uma conversa inclui os turnos 1 e 2 como seu prefixo, então uma configuração de serving com cache processa apenas o turno mais recente, não todo o histórico da conversa novamente.',
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "Cache de prompt, de prefixo e de KV: quais são as diferenças",
        content: [
          "<strong>O cache de prompt, o cache de prefixo e o cache de KV são relacionados, mas não são a mesma coisa.</strong> O cache KV é a estrutura de dados: os tensores de chaves e valores que o modelo calcula para cada token e mantém durante a geração para não recalcular os tokens anteriores a cada passo. Todo mecanismo de inferência de transformers tem um, e ele existe dentro de uma única requisição.",
          "O cache de prefixo e o cache de prompt significam manter esses dados KV e reutilizá-los entre requisições separadas. “Cache de prefixo” nomeia o mecanismo (casar um prefixo de tokens compartilhado); “cache de prompt” é o termo mais amplo, voltado ao usuário. O vLLM chama sua implementação de automatic prefix caching: ela guarda o cache KV de consultas anteriores para que uma nova consulta com o mesmo prefixo pule esse cálculo. O servidor do llama.cpp oferece a mesma ideia como a opção cache_prompt por requisição, ativada por padrão, de modo que só a parte do prompt que difere é processada.",
          "Em resumo: o cache KV acontece dentro de cada geração, enquanto o cache de prompt ou de prefixo leva o cache KV de uma requisição para a seguinte e depende da sua ferramenta de serving e de um prefixo exatamente igual. Se você usa um aplicativo de desktop como o LM Studio, consulte a documentação do próprio aplicativo para saber se e como ele expõe essa configuração.",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: 'Estruturando Prompts para Realmente Aproveitar o Cache',
        items: [
          '**Coloque o conteúdo compartilhado e imutável primeiro.** Prompts de sistema, instruções e documentos de referência que permanecem idênticos entre solicitações devem vir antes do conteúdo variável e específico de cada solicitação — o cache só funciona com um prefixo que corresponda exatamente, então tudo antes do primeiro ponto de diferença é o que será reutilizado.',
          '**Mantenha o prefixo compartilhado idêntico byte a byte entre solicitações.** Até mesmo uma única diferença de caractere em um prompt de sistema (um timestamp, um ID aleatório) quebra a correspondência do prefixo e força o reprocessamento completo — mova qualquer variação específica da solicitação para o final do prompt, depois do conteúdo reutilizável.',
          '**Não espere que o cache ajude em solicitações avulsas e não relacionadas.** Se sua carga de trabalho é composta majoritariamente por perguntas pontuais sem configuração compartilhada, não há nada para o cache reutilizar — o valor da técnica é proporcional a quanto do seu tráfego realmente compartilha um prefixo comum.',
          '**Conversas de longa duração se beneficiam mais das configurações de retenção de cache.** Verifique por quanto tempo sua configuração de serving mantém prefixos em cache antes de descartá-los — um cache descartado de forma muito agressiva não vai ajudar conversas com intervalos entre os turnos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O cache de prompt muda a saída do modelo?',
            a: "Em princípio não — o cache reutiliza os mesmos valores KV já calculados em vez de recalculá-los, então muda a velocidade, não o comportamento nem a qualidade do modelo. Na prática, a documentação do servidor do llama.cpp observa que os resultados não são garantidos bit a bit idênticos com tamanhos de lote diferentes, então pequenas diferenças numéricas entre uma execução com cache e outra sem são possíveis.",
          },
          {
            q: 'O cache de prompt ajuda na velocidade de geração de tokens, ou só no tempo de resposta inicial?',
            a: 'Apenas no tempo de resposta inicial (tempo até o primeiro token). Depois que a geração começa, os tokens continuam sendo produzidos um a um na mesma velocidade de geração, independentemente do cache — o cache elimina o trabalho redundante de processamento do prompt, não a etapa de geração em si.',
          },
          {
            q: 'Quanto de VRAM o cache usa?',
            a: 'Os dados KV em cache ficam na VRAM junto com o próprio modelo, e seu tamanho cresce conforme a quantidade de contexto em cache e o número de conversas simultâneas. Colocar em cache várias conversas longas ao mesmo tempo pode aumentar consideravelmente o uso de VRAM — uma troca real em relação à profundidade do cache em hardware com VRAM limitada.',
          },
          {
            q: 'Toda ferramenta de serving local tem suporte a cache de prompt?',
            a: 'O suporte e o comportamento padrão variam de acordo com a ferramenta — algumas fazem cache automaticamente para uso de vários turnos dentro de uma sessão, outras exigem configuração explícita, e a retenção do cache (por quanto tempo um prefixo permanece em cache antes de ser descartado) também é específica de cada ferramenta. Consulte a documentação da sua ferramenta de serving específica para saber o comportamento de cache e as configurações que o controlam.',
          },
          {
            q: "Cache de prompt é a mesma coisa que cache KV?",
            a: "Não. O cache KV são os dados de chave e valor por token que o modelo mantém ao gerar, e existe em toda requisição. O cache de prompt (também chamado de cache de prefixo) é a reutilização desses dados KV entre requisições separadas que compartilham o mesmo início, para que a parte comum não seja recalculada.",
          },
          {
            q: "O que é cache de prefixo?",
            a: "O cache de prefixo é o mecanismo por trás do cache de prompt: o mecanismo de serving guarda o cache KV de uma sequência de tokens e, quando uma nova requisição começa exatamente com os mesmos tokens, o reutiliza e processa apenas o restante. Exige correspondência token a token desde o início do prompt e acelera apenas o processamento do prompt, não a geração de tokens.",
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-ar.webp',
    title: 'ما هو التخزين المؤقت للـ Prompt في نماذج LLM المحلية؟',
    seoTitle: 'شرح التخزين المؤقت للـ Prompt في LLM المحلية | Prompt Bites',
    metaDescription: "التخزين المؤقت للـ prompt مقابل KV cache والبادئة في نماذج LLM المحلية: كيف تسرّع إعادة استخدام KV cache الطلبات المتكررة وكيف تبني الـ prompt للاستفادة منها.",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يريدون استدلالاً محليًا أسرع لنماذج LLM في الطلبات المتكررة عبر التخزين المؤقت للـ prompt أو السياق',
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>يقوم التخزين المؤقت للـ prompt بحفظ نتيجة الحساب الوسيطة (ذاكرة KV المؤقتة) لبادئة الـ prompt، بحيث لا يحتاج طلب متكرر أو ممتد إلى إعادة معالجة تلك البادئة من الصفر.</strong> يُسرّع أي حمل عمل تشترك فيه الطلبات في بداية مشتركة — system prompt ثابت، أو مستند طويل يُعاد استخدامه عبر أسئلة متعددة، أو الأدوار السابقة من محادثة جارية — لكنه لا يقدّم أي فائدة للطلبات التي لا تشترك في أي محتوى.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو التخزين المؤقت للـ prompt، ومتى يساعد استدلال LLM المحلي؟',
        answer: 'يحفظ التخزين المؤقت للـ prompt ذاكرة key-value (KV) المحسوبة لبادئة الـ prompt، بحيث لا تحتاج إلى إعادة حسابها عندما يشترك طلب لاحق في البادئة نفسها — سواء كان system prompt ثابتًا، أو مستندًا معاد استخدامه، أو أدوارًا سابقة من المحادثة. يقلّص هذا وقت معالجة الـ prompt بشكل كبير في أحمال العمل ذات البادئة المتكررة، لكنه لا يقدّم أي فائدة عندما يكون كل طلب غير مرتبط بغيره.',
        bullets: [
          'يخزّن ذاكرة KV المؤقتة لبادئة الـ prompt، وليس مخرجات النموذج نفسها',
          'أكبر فائدة: أوامر system prompt طويلة وثابتة، مستندات معاد استخدامها، محادثات متعددة الأدوار',
          'لا فائدة للطلبات المنفردة التي لا تشترك في بادئة عبر الاستدعاءات',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يحفظ التخزين المؤقت للـ prompt ذاكرة KV المحسوبة لبادئة الـ prompt، ما يتيح لطلب لاحق إعادة استخدامها بدل إعادة معالجة الـ tokens نفسها',
          'كلما كانت البادئة المشتركة أكبر وأكثر تكرارًا، زادت سرعة التحسّن — فـ system prompt طويل وثابت يُعاد استخدامه عبر آلاف الطلبات يستفيد بشكل هائل',
          'تستفيد المحادثات متعددة الأدوار تلقائيًا في معظم إعدادات الـ serving المحلية، لأن كل دور جديد يشترك في المحادثة السابقة بأكملها كبادئة له',
          'التخزين المؤقت يساعد فقط في معالجة الـ prompt (المدخلات)، وليس في توليد الـ tokens (المخرجات) — فهو يقلّل الوقت حتى ظهور أول token، وليس عدد الـ tokens في الثانية بعد بدء التوليد',
          "التخزين المؤقت للـ prompt والبادئة يعني إعادة استخدام KV cache بين طلبات منفصلة؛ أما KV cache نفسه فموجود أصلًا داخل كل عملية توليد",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يحفظ التخزين المؤقت للـ prompt ذاكرة KV المحسوبة لبادئة prompt مشتركة، بحيث تتخطى الطلبات اللاحقة إعادة معالجتها.' },
          { type: 'plain-terms', text: 'بعبارة أبسط: إذا كانت الكثير من طلباتك تبدأ بالنص نفسه، فإن التخزين المؤقت يجعل النموذج "يقرأ" ذلك الجزء المشترك مرة واحدة فقط، وليس في كل مرة.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'كيف يُسرّع التخزين المؤقت العمل فعليًا',
        content: [
          '<strong>معالجة الـ prompt تعني أن النموذج يحسب تمثيل key-value (KV) لكل token من المدخلات قبل أن يبدأ في توليد الرد.</strong> هذه الخطوة — معالجة الـ prompt — تحدث قبل بدء التوليد، وتكلفتها تتناسب مع طول الـ prompt. بدون تخزين مؤقت، يُعاد معالجة system prompt بطول 2000 token بالكامل في كل طلب على حدة، حتى لو كان مطابقًا تمامًا في كل مرة.',
          'يحفظ التخزين المؤقت ذلك التمثيل KV المحسوب لبادئة معينة، مرتبطًا بتسلسل الـ tokens الدقيق. عندما يبدأ طلب جديد بالـ tokens نفسها، يُعاد استخدام قيم KV المخزّنة مؤقتًا مباشرة، ولا يحتاج إلى المعالجة سوى الجزء الجديد وغير المخزّن من الـ prompt. الأثر العملي هو انخفاض حاد في الوقت حتى ظهور أول token عند تطابق الذاكرة المؤقتة، لأن معظم المدخلات لم تعد بحاجة إلى إعادة حساب.',
          'وهذا سبب استفادة المحادثات متعددة الأدوار بشكل شبه تلقائي: الدور الثالث من المحادثة يتضمن الدورين الأول والثاني كبادئة له، لذا فإن إعداد serving المدرك للتخزين المؤقت يعالج فقط أحدث دور، وليس سجل المحادثة بأكمله مرة أخرى.',
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "التخزين المؤقت للـ Prompt والبادئة وKV cache: ما الفرق؟",
        content: [
          "<strong>التخزين المؤقت للـ prompt والتخزين المؤقت للبادئة وKV cache مفاهيم مترابطة لكنها ليست الشيء نفسه.</strong> الـ KV cache هو بنية البيانات نفسها: موترات المفاتيح والقيم (key/value) التي يحسبها النموذج لكل token ويحتفظ بها أثناء التوليد كي لا يعيد حساب الـ tokens السابقة في كل خطوة. يمتلكه كل محرك استدلال يعتمد على transformers، ويوجد داخل طلب واحد.",
          "يعني التخزين المؤقت للبادئة والتخزين المؤقت للـ prompt الاحتفاظ ببيانات KV هذه وإعادة استخدامها بين طلبات منفصلة. «التخزين المؤقت للبادئة» يسمّي الآلية (مطابقة بادئة tokens مشتركة)، أما «التخزين المؤقت للـ prompt» فهو المصطلح الأوسع الموجّه للمستخدم. يسمّي vLLM تنفيذه automatic prefix caching: يخزّن KV cache للاستعلامات السابقة ليتجاوز الاستعلام الجديد ذو البادئة نفسها هذا الحساب. ويوفّر خادم llama.cpp الفكرة نفسها كخيار cache_prompt لكل طلب، وهو مفعّل افتراضيًا، فيُعالَج فقط الجزء المختلف من الـ prompt.",
          "باختصار: KV cache يحدث داخل كل عملية توليد، بينما ينقل التخزين المؤقت للـ prompt أو للبادئة الـ KV cache من طلب إلى التالي ويعتمد على أداة الخدمة لديك وعلى بادئة مطابقة تمامًا. إذا كنت تستخدم تطبيق سطح مكتب مثل LM Studio، فراجع وثائق التطبيق نفسه لمعرفة ما إذا كان يتيح هذا الإعداد وكيف.",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: 'هيكلة الطلبات للاستفادة الفعلية',
        items: [
          '**ضع المحتوى المشترك والثابت أولاً.** يجب أن تأتي أوامر system prompt والتعليمات والمستندات المرجعية التي تبقى ثابتة عبر الطلبات قبل المحتوى المتغيّر والخاص بكل طلب — فالتخزين المؤقت يعمل فقط مع بادئة متطابقة تمامًا، لذا فإن كل ما يسبق أول نقطة اختلاف هو ما يُعاد استخدامه.',
          '**حافظ على تطابق البادئة المشتركة تمامًا عبر الطلبات.** حتى اختلاف حرف واحد في system prompt (طابع زمني، معرّف عشوائي) يكسر تطابق البادئة ويفرض إعادة معالجة كاملة — انقل أي تغيّر خاص بالطلب إلى نهاية الـ prompt، بعد المحتوى القابل لإعادة الاستخدام.',
          '**لا تتوقّع أن يساعد التخزين المؤقت الطلبات المنفردة وغير المرتبطة.** إذا كان حمل عملك يتكوّن غالبًا من أسئلة منفردة بلا إعداد مشترك، فلا يوجد شيء يمكن للتخزين المؤقت إعادة استخدامه — قيمة هذه التقنية تتناسب مع مقدار حركة المرور التي تشترك فعليًا في بادئة مشتركة.',
          '**تستفيد المحادثات الطويلة الأمد أكثر من إعدادات الاحتفاظ بالذاكرة المؤقتة.** تحقق من المدة التي يحتفظ فيها إعداد الـ serving لديك بالبادئات المخزّنة مؤقتًا قبل إزالتها — فذاكرة مؤقتة تُزال بسرعة مفرطة لن تفيد المحادثات التي تتخللها فجوات بين الأدوار.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يغيّر التخزين المؤقت للـ prompt مخرجات النموذج؟',
            a: "من حيث المبدأ لا — فالتخزين المؤقت يعيد استخدام قيم KV المحسوبة نفسها بدل إعادة حسابها، لذا يغيّر السرعة لا سلوك النموذج ولا جودته. عمليًا، تشير وثائق خادم llama.cpp إلى أن النتائج غير مضمونة التطابق بت ببت عند اختلاف أحجام الدفعات، لذا قد تظهر فروق عددية طفيفة جدًا بين تشغيل بذاكرة مؤقتة وآخر بدونها.",
          },
          {
            q: 'هل يساعد التخزين المؤقت للـ prompt سرعة توليد الـ tokens، أم فقط وقت الاستجابة الأولي؟',
            a: 'فقط وقت الاستجابة الأولي (الوقت حتى ظهور أول token). بمجرد بدء التوليد، تستمر الـ tokens في الإنتاج واحدًا تلو الآخر بنفس سرعة التوليد بغض النظر عن التخزين المؤقت — فالتخزين المؤقت يزيل العمل الزائد لمعالجة الـ prompt، وليس خطوة التوليد نفسها.',
          },
          {
            q: 'كم من VRAM يستخدمه التخزين المؤقت؟',
            a: 'تقيم بيانات KV المخزّنة مؤقتًا في VRAM جنبًا إلى جنب مع النموذج نفسه، ويتناسب حجمها مع مقدار السياق الذي يجري تخزينه مؤقتًا وعدد المحادثات المتزامنة. تخزين العديد من المحادثات الطويلة في وقت واحد قد يزيد استهلاك VRAM بشكل ملموس — وهذه مفاضلة حقيقية أمام عمق التخزين المؤقت على الأجهزة المحدودة بـ VRAM.',
          },
          {
            q: 'هل تدعم كل أداة serving محلية التخزين المؤقت للـ prompt؟',
            a: 'يختلف الدعم والسلوك الافتراضي حسب الأداة — بعضها يخزّن تلقائيًا للاستخدام متعدد الأدوار ضمن الجلسة الواحدة، وبعضها الآخر يتطلب إعدادًا صريحًا، كما أن مدة الاحتفاظ بالذاكرة المؤقتة (المدة التي تبقى فيها البادئة مخزّنة قبل إزالتها) تختلف أيضًا حسب الأداة. راجع توثيق أداة الـ serving المحددة التي تستخدمها لمعرفة سلوك التخزين المؤقت والإعدادات التي تتحكم فيه.',
          },
          {
            q: "هل التخزين المؤقت للـ prompt هو نفسه KV cache؟",
            a: "لا. الـ KV cache هو بيانات المفتاح والقيمة لكل token التي يحتفظ بها النموذج أثناء التوليد، وهو موجود في كل طلب. أما التخزين المؤقت للـ prompt (ويُسمّى أيضًا التخزين المؤقت للبادئة) فهو إعادة استخدام بيانات KV هذه بين طلبات منفصلة تشترك في البداية نفسها، فلا يُعاد حساب الجزء المشترك.",
          },
          {
            q: "ما هو التخزين المؤقت للبادئة؟",
            a: "هو الآلية الكامنة وراء التخزين المؤقت للـ prompt: يخزّن محرك الخدمة KV cache لتسلسل من الـ tokens، وعندما يبدأ طلب جديد بالـ tokens نفسها تمامًا يعيد استخدامه ويعالج الجزء المتبقي فقط. يتطلب مطابقة token بـ token من بداية الـ prompt، ويسرّع معالجة الـ prompt فقط لا توليد الـ tokens.",
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/prompt-caching-for-local-llm-explained-overview-hero-ko.webp',
    title: '로컬 LLM을 위한 프롬프트 캐싱이란 무엇입니까?',
    seoTitle: '로컬 LLM 프롬프트 캐싱 설명 | Prompt Bites',
    metaDescription: "로컬 LLM의 프롬프트 캐싱·프리픽스 캐싱·KV 캐시 차이와, KV 캐시 재사용이 반복 프롬프트를 어떻게 가속하는지, 프롬프트 구성 방법을 설명합니다.",
    publishDate: '2026-07-15',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '프롬프트 또는 컨텍스트 캐싱을 통해 반복적인 로컬 LLM 추론을 더 빠르게 만들고자 하는 개발자',
    siblingBites: ['speculative-decoding-explained', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>프롬프트 캐싱은 프롬프트 접두부(prefix)에 대한 중간 계산 결과(KV 캐시)를 저장하여, 반복되거나 확장된 프롬프트가 그 접두부를 처음부터 다시 처리하지 않아도 되도록 합니다.</strong> 요청들이 공통된 시작 부분을 공유하는 워크로드—고정된 system prompt, 여러 질문에서 재사용되는 긴 문서, 또는 진행 중인 대화의 이전 턴—라면 어디든 속도를 높여주지만, 공유되는 내용이 없는 요청에는 아무런 도움이 되지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: '프롬프트 캐싱이란 무엇이며, 로컬 LLM 추론에서 언제 도움이 됩니까?',
        answer: '프롬프트 캐싱은 프롬프트 접두부에 대해 계산된 key-value(KV) 캐시를 저장하여, 이후 요청이 동일한 접두부를 공유할 때—고정된 system prompt, 재사용되는 문서, 또는 이전 대화 턴 등—다시 계산할 필요가 없도록 합니다. 접두부가 반복되는 워크로드에서는 프롬프트 처리 시간을 크게 줄여주지만, 모든 요청이 서로 무관하다면 아무런 이점이 없습니다.',
        bullets: [
          '모델의 출력이 아니라 프롬프트 접두부의 KV 캐시를 저장함',
          '가장 큰 이점: 길고 고정된 system prompt, 재사용되는 문서, 다중 턴 대화',
          '호출 간에 공유되는 접두부가 없는 단발성 요청에는 이점 없음',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '프롬프트 캐싱은 프롬프트 접두부에 대해 계산된 KV 캐시를 저장하여, 이후 요청이 동일한 토큰을 다시 처리하는 대신 이를 재사용할 수 있게 합니다',
          '공유되는 접두부가 크고 자주 반복될수록 속도 향상 폭이 커집니다 — 수천 건의 요청에서 재사용되는 길고 변하지 않는 system prompt는 매우 큰 이점을 얻습니다',
          '대부분의 로컬 서빙 환경에서는 다중 턴 대화가 자동으로 이점을 얻습니다. 새로운 턴마다 이전 대화 전체를 접두부로 공유하기 때문입니다',
          '캐싱은 프롬프트 처리(입력) 측면에서만 도움이 되며, 토큰 생성(출력)에는 도움이 되지 않습니다 — 첫 토큰까지의 시간을 줄여줄 뿐, 생성이 시작된 이후의 초당 토큰 수에는 영향을 주지 않습니다',
          "프롬프트 캐싱과 프리픽스 캐싱은 별개의 요청 사이에서 KV 캐시를 재사용하는 것을 뜻하며, KV 캐시 자체는 모든 생성 안에 이미 존재합니다",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '프롬프트 캐싱은 공유되는 프롬프트 접두부에 대해 계산된 KV 캐시를 저장하여, 이후 요청이 재처리를 건너뛸 수 있게 합니다.' },
          { type: 'plain-terms', text: '쉽게 말해, 많은 요청이 동일한 텍스트로 시작한다면 캐싱을 통해 모델은 그 공통 부분을 매번이 아니라 한 번만 "읽으면" 됩니다.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '캐싱이 실제로 속도를 높이는 방식',
        content: [
          '<strong>프롬프트를 처리한다는 것은, 모델이 응답 생성을 시작하기 전에 모든 입력 토큰에 대해 key-value(KV) 표현을 계산한다는 의미입니다.</strong> 이 프롬프트 처리 단계는 생성이 시작되기 전에 이루어지며, 그 비용은 프롬프트 길이에 비례합니다. 캐싱이 없다면 2,000토큰 규모의 system prompt는 매번 바이트 단위로 동일하더라도 모든 요청마다 처음부터 다시 처리됩니다.',
          '캐싱은 특정 접두부에 대해 계산된 이 KV 표현을 정확한 토큰 시퀀스에 연결하여 저장합니다. 새 요청이 동일한 토큰으로 시작하면, 캐시된 KV 값이 그대로 재사용되고 프롬프트 중 새롭고 캐시되지 않은 부분만 처리하면 됩니다. 실제 효과로는, 입력 대부분을 다시 계산할 필요가 없어지므로 캐시 히트가 발생할 때 첫 토큰까지의 시간이 크게 줄어듭니다.',
          '이것이 다중 턴 대화가 거의 자동으로 이점을 얻는 이유입니다. 대화의 3번째 턴은 1번째와 2번째 턴을 접두부로 포함하므로, 캐싱을 인식하는 서빙 환경은 전체 대화 기록을 다시 처리하지 않고 가장 최근 턴만 처리합니다.',
        ],
      },
      cachingTerms: {
        id: 'caching-terms',
        title: "프롬프트 캐싱, 프리픽스 캐싱, KV 캐시의 차이",
        content: [
          "<strong>프롬프트 캐싱, 프리픽스 캐싱, KV 캐시는 서로 관련되어 있지만 같은 것이 아닙니다.</strong> KV 캐시는 데이터 구조 자체입니다. 모델이 토큰마다 계산하는 키와 값 텐서로, 생성 중에 보관해 두어 매 단계마다 이전 토큰을 다시 계산하지 않게 합니다. 모든 트랜스포머 추론 엔진에 있으며 단일 요청 안에서 존재합니다.",
          "프리픽스 캐싱과 프롬프트 캐싱은 둘 다 그 KV 데이터를 보관해 별개의 요청 사이에서 재사용하는 것을 뜻합니다. '프리픽스 캐싱'은 메커니즘(공유되는 토큰 접두부 매칭)을 가리키고, '프롬프트 캐싱'은 더 넓은 사용자 대상 용어입니다. vLLM은 이 구현을 automatic prefix caching이라 부르며, 이전 쿼리의 KV 캐시를 저장해 같은 접두부를 가진 새 쿼리가 그 계산을 건너뛰게 합니다. llama.cpp 서버는 같은 개념을 요청별 cache_prompt 옵션(기본 활성화)으로 제공하여 프롬프트에서 달라진 부분만 처리합니다.",
          "요약하면, KV 캐시는 모든 생성 내부에서 작동하는 반면 프롬프트/프리픽스 캐싱은 KV 캐시를 한 요청에서 다음 요청으로 이어 주며, 사용하는 서빙 도구와 정확히 일치하는 접두부에 좌우됩니다. LM Studio 같은 데스크톱 앱을 쓴다면, 해당 설정을 제공하는지와 방법은 앱 자체 문서에서 확인하세요.",
        ],
      },
      structuringPrompts: {
        id: 'structuring-prompts',
        title: '실제로 이점을 얻기 위한 프롬프트 구성 방법',
        items: [
          '**공유되고 변하지 않는 내용을 앞에 배치합니다.** 요청 간에 동일하게 유지되는 system prompt, 지침, 참고 문서는 요청마다 달라지는 가변 콘텐츠보다 앞에 와야 합니다 — 캐싱은 정확히 일치하는 접두부에서만 작동하므로, 첫 번째 차이점 이전의 모든 내용이 재사용되는 부분입니다.',
          '**요청 간에 공유 접두부를 바이트 단위로 동일하게 유지합니다.** system prompt에서 한 글자만 달라져도(타임스탬프, 무작위 ID 등) 접두부 일치가 깨져 전체 재처리가 강제됩니다 — 요청별로 달라지는 부분은 재사용 가능한 내용 뒤, 즉 프롬프트 끝부분으로 옮기십시오.',
          '**서로 무관한 단발성 요청에는 캐싱이 도움이 될 것이라 기대하지 마십시오.** 워크로드가 공유되는 설정 없이 대부분 일회성 질문으로 구성되어 있다면, 캐싱이 재사용할 것이 없습니다 — 이 기법의 가치는 실제로 공통 접두부를 공유하는 트래픽의 비율에 비례합니다.',
          '**장시간 이어지는 대화는 캐시 보존 설정에서 가장 큰 이점을 얻습니다.** 사용 중인 서빙 환경이 캐시된 접두부를 제거하기 전까지 얼마나 오래 유지하는지 확인하십시오 — 너무 공격적으로 제거되는 캐시는 턴 사이에 간격이 있는 대화에는 도움이 되지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '프롬프트 캐싱이 모델의 출력을 변경합니까?',
            a: "원칙적으로는 아닙니다. 캐싱은 이미 계산된 동일한 KV 값을 다시 계산하지 않고 재사용하므로 바뀌는 것은 속도이지 모델의 동작이나 품질이 아닙니다. 다만 실제로는 llama.cpp 서버 문서에서 배치 크기가 다르면 결과가 비트 단위로 동일하다고 보장되지 않는다고 밝히고 있어, 캐시를 쓴 실행과 쓰지 않은 실행 사이에 아주 미세한 수치 차이가 생길 수 있습니다.",
          },
          {
            q: '프롬프트 캐싱이 토큰 생성 속도에도 도움이 됩니까, 아니면 초기 응답 시간에만 도움이 됩니까?',
            a: '초기 응답 시간(첫 토큰까지의 시간)에만 도움이 됩니다. 생성이 시작되면 캐싱 여부와 관계없이 토큰은 동일한 생성 속도로 하나씩 생성됩니다 — 캐싱은 중복된 프롬프트 처리 작업을 제거할 뿐, 생성 단계 자체를 없애지는 않습니다.',
          },
          {
            q: '캐싱은 VRAM을 얼마나 사용합니까?',
            a: '캐시된 KV 데이터는 모델 자체와 함께 VRAM에 존재하며, 그 크기는 캐시되는 컨텍스트의 양과 동시에 진행되는 대화 수에 비례합니다. 여러 개의 긴 대화를 동시에 캐싱하면 VRAM 사용량이 눈에 띄게 늘어날 수 있습니다 — 이는 VRAM이 제한된 하드웨어에서 캐싱 깊이와 실질적으로 절충해야 하는 부분입니다.',
          },
          {
            q: '모든 로컬 서빙 도구가 프롬프트 캐싱을 지원합니까?',
            a: '지원 여부와 기본 동작은 도구마다 다릅니다 — 일부는 세션 내 다중 턴 사용에 대해 자동으로 캐싱하고, 일부는 명시적인 설정이 필요하며, 캐시 보존 기간(접두부가 제거되기 전까지 캐시로 유지되는 시간) 또한 도구마다 다릅니다. 사용 중인 서빙 도구의 문서를 확인하여 캐싱 동작 방식과 이를 제어하는 설정을 확인하십시오.',
          },
          {
            q: "프롬프트 캐싱은 KV 캐싱과 같은 것인가요?",
            a: "아닙니다. KV 캐시는 모델이 생성하는 동안 토큰마다 보관하는 키·값 데이터이며 모든 요청에 존재합니다. 프롬프트 캐싱(프리픽스 캐싱이라고도 함)은 시작 부분이 같은 별개의 요청 사이에서 그 KV 데이터를 재사용해 공통 부분을 다시 계산하지 않는 것입니다.",
          },
          {
            q: "프리픽스 캐싱이란 무엇인가요?",
            a: "프리픽스 캐싱은 프롬프트 캐싱의 바탕이 되는 메커니즘입니다. 서빙 엔진이 토큰 시퀀스의 KV 캐시를 저장해 두었다가, 새 요청이 정확히 같은 토큰으로 시작하면 그것을 재사용하고 나머지만 처리합니다. 프롬프트 시작부터 토큰 단위로 정확히 일치해야 하며, 프롬프트 처리만 빨라지고 토큰 생성은 빨라지지 않습니다.",
          },
        ],
      },
    },
  },
}
