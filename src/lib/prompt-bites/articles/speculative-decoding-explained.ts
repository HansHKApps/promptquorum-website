import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-en.webp',
    title: 'What Is Speculative Decoding?',
    seoTitle: 'Speculative Decoding Explained | Prompt Bites',
    metaDescription:
      'Speculative decoding speeds up local LLM inference by having a small draft model propose tokens that a larger model verifies in parallel, with no quality loss.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers curious how local inference speed can be improved without new hardware',
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Speculative decoding speeds up inference by using a small, fast draft model to propose several tokens at once, which a larger target model then verifies in a single parallel pass instead of generating each token sequentially.</strong> When the draft model guesses correctly, generation is effectively faster with no quality loss.',
    toc: [
      { label: 'How It Works', anchor: '#how-it-works' },
      { label: 'Acceptance Rate Decides the Speedup', anchor: '#acceptance-rate' },
      { label: 'When Speculative Decoding Helps Most', anchor: '#when-it-helps' },
      { label: 'Setting Up a Draft Model', anchor: '#setup' },
      { label: 'Draftless Speculation (Prompt Lookup)', anchor: '#draftless' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is speculative decoding and why is it faster?',
        answer:
          'Speculative decoding pairs a small draft model with a larger target model. The draft model proposes several tokens ahead, and the target model verifies them all in one parallel forward pass instead of one sequential pass per token, which speeds up generation when the draft guesses are accepted.',
        bullets: [
          'A small draft model proposes multiple tokens ahead of the main model.',
          'The larger target model verifies the proposed tokens in a single parallel pass.',
          'Output quality matches the target model exactly — speculative decoding does not change what gets generated, only how fast.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A small draft model proposes tokens ahead; the larger target model verifies them in one parallel pass',
          'Output quality is identical to running the target model alone — only speed changes',
          'Speedup is largest on predictable text (code, repetitive structure) where the draft model guesses correctly more often',
          'The draft model must share the same tokenizer and vocabulary as the target model',
          'The acceptance rate decides the speedup; draft models from the same family usually get accepted more often',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Speculative decoding speeds up LLM inference by having a small draft model propose tokens that a larger model verifies in parallel, rather than generating one token at a time.' },
          { type: 'plain-terms', text: 'In plain terms: a fast small model guesses ahead, and the slow accurate model checks the guesses all at once instead of working through them one by one.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'How It Works',
        content: [
          'A draft model, much smaller and faster than the target model, generates a short sequence of candidate tokens. The target model then evaluates that entire sequence in a single forward pass, accepting tokens that match what it would have generated on its own and discarding the rest, along with anything generated after the first mismatch.',
          'Because verifying several tokens in parallel costs roughly the same as generating one token sequentially on the target model, accepted guesses translate directly into a speed gain with no change to the final output. The target model always has final say — a wrong draft guess only costs the (small) time spent generating it, it never gets accepted into the output.',
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: 'Acceptance Rate Decides the Speedup',
        content: [
          'The acceptance rate — the share of draft tokens the target model keeps — decides how much faster generation gets. A high rate means each expensive target pass yields several tokens; a low rate means most draft work is thrown away and the gain shrinks or disappears.',
          'Drafts from the same model family usually earn higher acceptance because they share training data and tokenization with the target. Size matters in both directions: a draft that is too small guesses poorly, while one that is too large is slow enough to cancel the gain. The [LM Studio documentation](https://lmstudio.ai/docs/app/advanced/speculative-decoding) suggests pairing a 7B-class main model with a draft of up to 1B, a 14B-class model with up to 3B, and a 32B-class model with up to 7B, and expects no speedup for a 3B-class main model. llama.cpp prints acceptance statistics, so you can measure the rate on your own prompts.',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: 'When Speculative Decoding Helps Most',
        content: [
          'Use speculative decoding when generating code, structured data, or other predictable text, where the draft model\'s guesses are accepted at a high rate and the speedup is largest. Use it when you are already inference-bound on generation speed rather than prompt-processing speed, since speculative decoding specifically accelerates the token-by-token generation step.',
          'Skip speculative decoding when generating highly creative, unpredictable text (open-ended fiction, brainstorming), where the draft model\'s guesses are accepted less often and the speedup shrinks — the extra draft-model overhead can offset the gain in the worst case. Skip it if you don\'t have a compatible smaller model from the same family available to use as a draft model.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Setting Up a Draft Model',
        content: [
          'The draft model must share the same tokenizer and vocabulary as the target model — pairing models from different families (or even different sizes of a model where the vocabulary changed between versions) will not work. The most common setup uses a smaller model from the same family as the target (for example, a 1B-class model drafting for a 13B-class model from the same family).',
          'Several local inference tools (including llama.cpp) support speculative decoding natively — the setup typically requires specifying both the target model and the draft model at launch, with no changes needed to how you prompt the model.',
          'In LM Studio, the feature lives in the chat sidebar: switch to Power User mode or higher, load the main model, then pick a Draft Model under Speculative Decoding. Per the [LM Studio documentation](https://lmstudio.ai/docs/app/advanced/speculative-decoding), the draft must share the main model\'s vocabulary. In llama.cpp, pass the draft model next to the target with the -md option, for example llama-server -m target.gguf -md draft.gguf (see the [llama.cpp documentation](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)).',
        ],
      },
      draftless: {
        id: 'draftless',
        title: 'Draftless Speculation: Prompt Lookup and N-gram Methods',
        content: [
          'Some methods skip the draft model entirely. Prompt lookup and n-gram speculation search the existing prompt and generated text for a repeating pattern and propose the tokens that followed it last time; the target model then verifies them exactly as it would with a draft model.',
          'These methods add no extra VRAM and need no compatible second model, but they only pay off when the output repeats earlier text — editing a document, refactoring code, quoting from the context, or summarizing with copied phrases. llama.cpp supports several n-gram variants, and draftless methods take precedence if a draft model is also configured.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does speculative decoding reduce output quality?',
            a: 'No — the target model still determines every accepted token. Speculative decoding only changes how fast tokens are produced, not which tokens are produced.',
          },
          {
            q: 'Does speculative decoding require extra VRAM?',
            a: 'Yes — you need to load both the draft model and the target model simultaneously, so total VRAM use is higher than running the target model alone. The draft model is chosen to be small specifically to keep this overhead manageable.',
          },
          {
            q: 'Can I use any small model as the draft model?',
            a: 'No — the draft model must share the target model\'s tokenizer and vocabulary for token-level verification to work. In practice, this usually means using a smaller model from the same model family as the target.',
          },
          {
            q: 'How much faster is speculative decoding in practice?',
            a: 'The speedup depends heavily on how often the draft model\'s guesses are accepted, which varies by content type — predictable text (code, structured output) sees a larger speedup than open-ended creative text. There is no single fixed multiplier; test with your own workload to see the actual gain.',
          },
          {
            q: 'Does LM Studio support speculative decoding?',
            a: 'Yes — in Power User mode or higher, load the main model and select a Draft Model in the Speculative Decoding section of the chat sidebar. The draft must share the main model\'s vocabulary. If the draft model is too slow or its suggestions are poor, generation can get slower instead of faster.',
          },
          {
            q: 'What is a good acceptance rate for speculative decoding?',
            a: 'There is no authoritative threshold; the official documentation names none. Community guides quote different figures, and the real number depends on hardware, draft size, and content type. Measure on your own workload — llama.cpp prints acceptance statistics.',
          },
          {
            q: 'Can I use the same model as both draft and target?',
            a: 'The vocabulary would match, but it defeats the purpose: acceptance would be very high, yet the draft costs as much as the target, so there is no speedup and you pay double the VRAM. The draft model must be much smaller than the target.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-de.webp',
    title: 'Was ist Spekulatives Dekodieren?',
    seoTitle: 'Spekulatives Dekodieren erklärt | Prompt Bites',
    metaDescription:
      'Spekulatives Dekodieren beschleunigt lokale LLM-Inferenz, indem ein kleines Draft-Modell Tokens vorschlägt, die ein größeres Modell parallel prüft, ohne Qualitätsverlust.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die wissen möchten, wie sich lokale Inferenzgeschwindigkeit ohne neue Hardware verbessern lässt',
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Spekulatives Dekodieren beschleunigt die Inferenz, indem ein kleines, schnelles Draft-Modell mehrere Tokens auf einmal vorschlägt, die ein größeres Zielmodell dann in einem einzigen parallelen Durchgang prüft, statt jedes Token sequenziell zu erzeugen.</strong> Wenn das Draft-Modell richtig rät, läuft die Generierung effektiv schneller ab, ohne Qualitätsverlust.',
    toc: [
      { label: 'So funktioniert es', anchor: '#how-it-works' },
      { label: 'Akzeptanzrate bestimmt den Geschwindigkeitsgewinn', anchor: '#acceptance-rate' },
      { label: 'Wann Spekulatives Dekodieren am meisten hilft', anchor: '#when-it-helps' },
      { label: 'Ein Draft-Modell einrichten', anchor: '#setup' },
      { label: 'Spekulation ohne Draft-Modell (Prompt Lookup)', anchor: '#draftless' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist spekulatives Dekodieren und warum ist es schneller?',
        answer:
          'Spekulatives Dekodieren kombiniert ein kleines Draft-Modell mit einem größeren Zielmodell. Das Draft-Modell schlägt mehrere Tokens im Voraus vor, und das Zielmodell prüft sie alle in einem parallelen Forward-Pass statt in einem sequenziellen Durchgang pro Token, was die Generierung beschleunigt, wenn die Vorschläge akzeptiert werden.',
        bullets: [
          'Ein kleines Draft-Modell schlägt mehrere Tokens vor, bevor das Hauptmodell dran ist.',
          'Das größere Zielmodell prüft die vorgeschlagenen Tokens in einem einzigen parallelen Durchgang.',
          'Die Ausgabequalität entspricht exakt der des Zielmodells — spekulatives Dekodieren ändert nicht, was erzeugt wird, nur wie schnell.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ein kleines Draft-Modell schlägt Tokens vor; das größere Zielmodell prüft sie in einem parallelen Durchgang',
          'Die Ausgabequalität ist identisch mit dem alleinigen Betrieb des Zielmodells — nur die Geschwindigkeit ändert sich',
          'Der Geschwindigkeitsgewinn ist am größten bei vorhersehbarem Text (Code, repetitive Struktur), wo das Draft-Modell häufiger richtig rät',
          'Das Draft-Modell muss denselben Tokenizer und Vokabular wie das Zielmodell verwenden',
          'Die Akzeptanzrate bestimmt den Geschwindigkeitsgewinn; Draft-Modelle aus derselben Familie werden meist häufiger akzeptiert',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Spekulatives Dekodieren beschleunigt LLM-Inferenz, indem ein kleines Draft-Modell Tokens vorschlägt, die ein größeres Modell parallel prüft, statt ein Token nach dem anderen zu erzeugen.' },
          { type: 'plain-terms', text: 'Einfach ausgedrückt: Ein schnelles kleines Modell rät im Voraus, und das langsame, genaue Modell prüft die Vermutungen alle auf einmal statt nacheinander.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'So funktioniert es',
        content: [
          'Ein Draft-Modell, deutlich kleiner und schneller als das Zielmodell, erzeugt eine kurze Folge von Kandidaten-Tokens. Das Zielmodell bewertet diese gesamte Folge dann in einem einzigen Forward-Pass, akzeptiert Tokens, die mit dem übereinstimmen, was es selbst erzeugt hätte, und verwirft den Rest — inklusive allem, was nach der ersten Abweichung erzeugt wurde.',
          'Da die parallele Prüfung mehrerer Tokens auf dem Zielmodell ungefähr gleich viel kostet wie die sequenzielle Erzeugung eines einzigen Tokens, führen akzeptierte Vorschläge direkt zu einem Geschwindigkeitsgewinn, ohne die endgültige Ausgabe zu verändern. Das Zielmodell hat immer das letzte Wort — ein falscher Vorschlag des Draft-Modells kostet nur die (kurze) Zeit für seine Erzeugung und landet nie in der Ausgabe.',
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: 'Akzeptanzrate bestimmt den Geschwindigkeitsgewinn',
        content: [
          'Die Akzeptanzrate — der Anteil der Draft-Tokens, die das Zielmodell übernimmt — bestimmt, wie viel schneller die Generierung wird. Eine hohe Rate bedeutet, dass jeder aufwendige Durchgang des Zielmodells mehrere Tokens liefert; bei einer niedrigen Rate wird der Großteil der Draft-Arbeit verworfen, und der Gewinn schrumpft oder verschwindet.',
          'Drafts aus derselben Modellfamilie erreichen meist eine höhere Akzeptanz, weil sie Trainingsdaten und Tokenisierung mit dem Zielmodell teilen. Die Größe wirkt in beide Richtungen: Ein zu kleines Draft-Modell rät schlecht, ein zu großes ist so langsam, dass es den Gewinn aufhebt. Die [LM-Studio-Dokumentation](https://lmstudio.ai/docs/app/advanced/speculative-decoding) empfiehlt, ein Hauptmodell der 7B-Klasse mit einem Draft von bis zu 1B zu kombinieren, ein Modell der 14B-Klasse mit bis zu 3B und ein Modell der 32B-Klasse mit bis zu 7B; bei einem Hauptmodell der 3B-Klasse erwartet sie keinen Geschwindigkeitsgewinn. llama.cpp gibt Akzeptanzstatistiken aus, sodass Sie die Rate mit Ihren eigenen Prompts messen können.',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: 'Wann Spekulatives Dekodieren am meisten hilft',
        content: [
          'Setzen Sie spekulatives Dekodieren ein, wenn Sie Code, strukturierte Daten oder anderen vorhersehbaren Text erzeugen, bei dem die Vorschläge des Draft-Modells häufig akzeptiert werden und der Geschwindigkeitsgewinn am größten ist. Nutzen Sie es, wenn Sie bereits durch die Generierungsgeschwindigkeit begrenzt sind und nicht durch die Verarbeitung des Prompts, da spekulatives Dekodieren gezielt den Token-für-Token-Generierungsschritt beschleunigt.',
          'Verzichten Sie auf spekulatives Dekodieren bei hochkreativem, unvorhersehbarem Text (offene Fiktion, Brainstorming), bei dem die Vorschläge des Draft-Modells seltener akzeptiert werden und der Geschwindigkeitsgewinn schrumpft — der zusätzliche Aufwand für das Draft-Modell kann den Gewinn im schlechtesten Fall sogar zunichtemachen. Verzichten Sie ebenfalls darauf, wenn kein kompatibles kleineres Modell aus derselben Modellfamilie als Draft-Modell verfügbar ist.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Ein Draft-Modell einrichten',
        content: [
          'Das Draft-Modell muss denselben Tokenizer und dasselbe Vokabular wie das Zielmodell verwenden — die Kombination von Modellen aus unterschiedlichen Familien (oder sogar unterschiedlichen Größen eines Modells, bei dem sich das Vokabular zwischen Versionen geändert hat) funktioniert nicht. Am gängigsten ist ein kleineres Modell aus derselben Familie wie das Zielmodell (zum Beispiel ein Modell der 1B-Klasse als Draft für ein Modell der 13B-Klasse aus derselben Familie).',
          'Mehrere lokale Inferenz-Tools (darunter llama.cpp) unterstützen spekulatives Dekodieren nativ — die Einrichtung erfordert in der Regel nur die Angabe von Ziel- und Draft-Modell beim Start, ohne Änderungen daran, wie Sie das Modell anschließend prompten.',
          'In LM Studio finden Sie die Funktion in der Chat-Seitenleiste: Wechseln Sie in den Power-User-Modus oder höher, laden Sie das Hauptmodell und wählen Sie unter „Speculative Decoding“ ein Draft-Modell aus. Laut [LM-Studio-Dokumentation](https://lmstudio.ai/docs/app/advanced/speculative-decoding) muss es dasselbe Vokabular wie das Hauptmodell verwenden. In llama.cpp übergeben Sie das Draft-Modell neben dem Zielmodell mit der Option -md, zum Beispiel llama-server -m target.gguf -md draft.gguf (siehe [llama.cpp-Dokumentation](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)).',
        ],
      },
      draftless: {
        id: 'draftless',
        title: 'Spekulation ohne Draft-Modell: Prompt Lookup und N-Gramm-Verfahren',
        content: [
          'Manche Verfahren kommen ganz ohne Draft-Modell aus. Prompt Lookup und N-Gramm-Spekulation durchsuchen den vorhandenen Prompt und den bereits erzeugten Text nach einem sich wiederholenden Muster und schlagen die Tokens vor, die dem Muster zuvor gefolgt sind; das Zielmodell prüft sie anschließend genau wie bei einem Draft-Modell.',
          'Diese Verfahren benötigen keinen zusätzlichen VRAM und kein kompatibles zweites Modell, lohnen sich aber nur, wenn die Ausgabe früheren Text wiederholt — etwa beim Überarbeiten eines Dokuments, beim Refactoring von Code, beim Zitieren aus dem Kontext oder bei Zusammenfassungen mit übernommenen Formulierungen. llama.cpp unterstützt mehrere N-Gramm-Varianten, und Verfahren ohne Draft-Modell haben Vorrang, wenn zusätzlich ein Draft-Modell konfiguriert ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Verringert spekulatives Dekodieren die Ausgabequalität?',
            a: 'Nein — das Zielmodell bestimmt weiterhin jedes akzeptierte Token. Spekulatives Dekodieren ändert nur, wie schnell Tokens erzeugt werden, nicht welche Tokens erzeugt werden.',
          },
          {
            q: 'Benötigt spekulatives Dekodieren zusätzlichen VRAM?',
            a: 'Ja — Sie müssen Draft- und Zielmodell gleichzeitig laden, sodass der gesamte VRAM-Bedarf höher ist als beim alleinigen Betrieb des Zielmodells. Das Draft-Modell wird bewusst klein gewählt, um diesen Mehraufwand handhabbar zu halten.',
          },
          {
            q: 'Kann ich ein beliebiges kleines Modell als Draft-Modell verwenden?',
            a: 'Nein — das Draft-Modell muss den Tokenizer und das Vokabular des Zielmodells teilen, damit die Prüfung auf Token-Ebene funktioniert. In der Praxis bedeutet das meist ein kleineres Modell aus derselben Modellfamilie wie das Zielmodell.',
          },
          {
            q: 'Wie viel schneller ist spekulatives Dekodieren in der Praxis?',
            a: 'Der Geschwindigkeitsgewinn hängt stark davon ab, wie oft die Vorschläge des Draft-Modells akzeptiert werden, was je nach Inhaltstyp variiert — vorhersehbarer Text (Code, strukturierte Ausgabe) profitiert mehr als offener kreativer Text. Es gibt keinen festen Multiplikator; testen Sie mit Ihrer eigenen Arbeitslast, um den tatsächlichen Gewinn zu sehen.',
          },
          {
            q: 'Unterstützt LM Studio spekulatives Dekodieren?',
            a: 'Ja — wählen Sie im Power-User-Modus oder höher nach dem Laden des Hauptmodells in der Chat-Seitenleiste unter „Speculative Decoding“ ein Draft-Modell aus. Es muss dasselbe Vokabular wie das Hauptmodell verwenden. Ist das Draft-Modell zu langsam oder liegen seine Vorschläge oft daneben, kann die Generierung langsamer statt schneller werden.',
          },
          {
            q: 'Welche Akzeptanzrate ist beim spekulativen Dekodieren gut?',
            a: 'Es gibt keinen verbindlichen Schwellenwert; die offizielle Dokumentation nennt keinen. Community-Leitfäden nennen unterschiedliche Werte, und der tatsächliche Wert hängt von Hardware, Draft-Größe und Inhaltstyp ab. Messen Sie mit Ihrer eigenen Arbeitslast — llama.cpp gibt Akzeptanzstatistiken aus.',
          },
          {
            q: 'Kann ich dasselbe Modell als Draft- und Zielmodell verwenden?',
            a: 'Das Vokabular würde passen, aber es verfehlt den Zweck: Die Akzeptanz wäre sehr hoch, doch das Draft-Modell kostet genauso viel wie das Zielmodell — Sie erhalten keinen Geschwindigkeitsgewinn und brauchen doppelt so viel VRAM. Das Draft-Modell muss deutlich kleiner als das Zielmodell sein.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-fr.webp',
    title: "Qu'est-ce que le décodage spéculatif ?",
    seoTitle: 'Le décodage spéculatif expliqué | Prompt Bites',
    metaDescription:
      "Le décodage spéculatif accélère l'inférence LLM locale en faisant proposer des tokens par un petit modèle de brouillon qu'un modèle plus grand vérifie en parallèle, sans perte de qualité.",
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Développeurs curieux de savoir comment accélérer l'inférence locale sans nouveau matériel",
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      "<strong>Le décodage spéculatif accélère l'inférence en utilisant un petit modèle de brouillon rapide pour proposer plusieurs tokens à la fois, qu'un modèle cible plus grand vérifie ensuite en une seule passe parallèle au lieu de générer chaque token séquentiellement.</strong> Lorsque le modèle de brouillon devine correctement, la génération est effectivement plus rapide, sans perte de qualité.",
    toc: [
      { label: 'Comment ça fonctionne', anchor: '#how-it-works' },
      { label: 'Le taux d\'acceptation détermine le gain de vitesse', anchor: '#acceptance-rate' },
      { label: 'Quand le décodage spéculatif aide le plus', anchor: '#when-it-helps' },
      { label: 'Configurer un modèle de brouillon', anchor: '#setup' },
      { label: 'Spéculation sans modèle de brouillon (Prompt Lookup)', anchor: '#draftless' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      fr: {
        question: "Qu'est-ce que le décodage spéculatif et pourquoi est-il plus rapide ?",
        answer:
          "Le décodage spéculatif associe un petit modèle de brouillon à un modèle cible plus grand. Le modèle de brouillon propose plusieurs tokens à l'avance, et le modèle cible les vérifie tous en une seule passe parallèle au lieu d'une passe séquentielle par token, ce qui accélère la génération lorsque les propositions sont acceptées.",
        bullets: [
          "Un petit modèle de brouillon propose plusieurs tokens avant le modèle principal.",
          "Le modèle cible plus grand vérifie les tokens proposés en une seule passe parallèle.",
          "La qualité de sortie correspond exactement à celle du modèle cible — le décodage spéculatif ne change pas ce qui est généré, seulement la vitesse.",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un petit modèle de brouillon propose des tokens à l\'avance ; le modèle cible plus grand les vérifie en une seule passe parallèle',
          'La qualité de sortie est identique à celle du modèle cible seul — seule la vitesse change',
          'Le gain de vitesse est maximal sur du texte prévisible (code, structure répétitive) où le modèle de brouillon devine juste plus souvent',
          'Le modèle de brouillon doit partager le même tokenizer et le même vocabulaire que le modèle cible',
          'Le taux d\'acceptation détermine le gain de vitesse ; les modèles de brouillon de la même famille sont généralement acceptés plus souvent',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Le décodage spéculatif accélère l'inférence LLM en faisant proposer des tokens par un petit modèle de brouillon, qu'un modèle plus grand vérifie en parallèle, plutôt que de générer un token à la fois." },
          { type: 'plain-terms', text: "En termes simples : un petit modèle rapide devine à l'avance, et le modèle lent et précis vérifie toutes les suppositions d'un coup au lieu de les traiter une par une." },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Comment ça fonctionne',
        content: [
          "Un modèle de brouillon, bien plus petit et rapide que le modèle cible, génère une courte séquence de tokens candidats. Le modèle cible évalue ensuite l'intégralité de cette séquence en une seule passe, acceptant les tokens qui correspondent à ce qu'il aurait généré seul et rejetant le reste, ainsi que tout ce qui a été généré après la première divergence.",
          "Comme vérifier plusieurs tokens en parallèle coûte à peu près autant que générer un seul token séquentiellement sur le modèle cible, les propositions acceptées se traduisent directement par un gain de vitesse sans changement de la sortie finale. Le modèle cible garde toujours le dernier mot — une proposition erronée du modèle de brouillon ne coûte que le (court) temps de sa génération et n'est jamais retenue dans la sortie.",
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: 'Le taux d\'acceptation détermine le gain de vitesse',
        content: [
          'Le taux d\'acceptation — la part des tokens de brouillon que le modèle cible conserve — détermine l\'accélération de la génération. Un taux élevé signifie que chaque passage coûteux du modèle cible produit plusieurs tokens ; un taux faible signifie que l\'essentiel du travail du brouillon est jeté et que le gain diminue ou disparaît.',
          'Les brouillons de la même famille de modèles obtiennent généralement un meilleur taux d\'acceptation, car ils partagent données d\'entraînement et tokenisation avec le modèle cible. La taille joue dans les deux sens : un brouillon trop petit devine mal, un brouillon trop grand est assez lent pour annuler le gain. La [documentation de LM Studio](https://lmstudio.ai/docs/app/advanced/speculative-decoding) suggère d\'associer un modèle principal de classe 7B à un brouillon allant jusqu\'à 1B, un modèle de classe 14B à un brouillon allant jusqu\'à 3B et un modèle de classe 32B à un brouillon allant jusqu\'à 7B, et n\'attend aucune accélération pour un modèle principal de classe 3B. llama.cpp affiche des statistiques d\'acceptation, ce qui permet de mesurer le taux sur vos propres prompts.',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: 'Quand le décodage spéculatif aide le plus',
        content: [
          "Utilisez le décodage spéculatif pour générer du code, des données structurées ou tout autre texte prévisible, où les propositions du modèle de brouillon sont acceptées à un taux élevé et le gain de vitesse est maximal. Utilisez-le lorsque vous êtes déjà limité par la vitesse de génération plutôt que par le traitement du prompt, puisque le décodage spéculatif accélère spécifiquement l'étape de génération token par token.",
          "Évitez le décodage spéculatif pour du texte très créatif et imprévisible (fiction ouverte, brainstorming), où les propositions du modèle de brouillon sont acceptées moins souvent et le gain de vitesse diminue — la surcharge du modèle de brouillon peut, dans le pire des cas, annuler le gain. Évitez-le également si vous ne disposez pas d'un modèle plus petit compatible de la même famille à utiliser comme modèle de brouillon.",
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configurer un modèle de brouillon',
        content: [
          "Le modèle de brouillon doit partager le même tokenizer et le même vocabulaire que le modèle cible — associer des modèles de familles différentes (ou même des tailles différentes d'un modèle dont le vocabulaire a changé entre les versions) ne fonctionnera pas. La configuration la plus courante utilise un modèle plus petit de la même famille que le modèle cible (par exemple, un modèle de classe 1B comme brouillon pour un modèle de classe 13B de la même famille).",
          "Plusieurs outils d'inférence locale (dont llama.cpp) prennent en charge nativement le décodage spéculatif — la configuration nécessite généralement de spécifier à la fois le modèle cible et le modèle de brouillon au lancement, sans modifier la façon dont vous formulez vos prompts.",
          'Dans LM Studio, la fonction se trouve dans la barre latérale du chat : passez en mode Power User ou supérieur, chargez le modèle principal, puis choisissez un modèle de brouillon sous « Speculative Decoding ». D\'après la [documentation de LM Studio](https://lmstudio.ai/docs/app/advanced/speculative-decoding), il doit partager le vocabulaire du modèle principal. Dans llama.cpp, indiquez le modèle de brouillon à côté du modèle cible avec l\'option -md, par exemple llama-server -m target.gguf -md draft.gguf (voir la [documentation de llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)).',
        ],
      },
      draftless: {
        id: 'draftless',
        title: 'Spéculation sans brouillon : Prompt Lookup et méthodes n-gram',
        content: [
          'Certaines méthodes se passent complètement de modèle de brouillon. Le Prompt Lookup et la spéculation n-gram cherchent dans le prompt et le texte déjà généré un motif qui se répète, puis proposent les tokens qui l\'ont suivi la fois précédente ; le modèle cible les vérifie ensuite exactement comme avec un modèle de brouillon.',
          'Ces méthodes n\'ajoutent aucune VRAM et ne demandent pas de second modèle compatible, mais elles ne sont rentables que lorsque la sortie reprend un texte antérieur — modification d\'un document, refactorisation de code, citation du contexte ou résumé avec des formulations reprises. llama.cpp prend en charge plusieurs variantes n-gram, et les méthodes sans brouillon sont prioritaires si un modèle de brouillon est aussi configuré.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Le décodage spéculatif réduit-il la qualité de sortie ?',
            a: "Non — le modèle cible détermine toujours chaque token accepté. Le décodage spéculatif ne change que la vitesse de production des tokens, pas les tokens produits.",
          },
          {
            q: 'Le décodage spéculatif nécessite-t-il plus de VRAM ?',
            a: "Oui — vous devez charger simultanément le modèle de brouillon et le modèle cible, donc l'utilisation totale de VRAM est plus élevée que pour le modèle cible seul. Le modèle de brouillon est délibérément choisi petit pour limiter cette surcharge.",
          },
          {
            q: 'Puis-je utiliser n\'importe quel petit modèle comme modèle de brouillon ?',
            a: "Non — le modèle de brouillon doit partager le tokenizer et le vocabulaire du modèle cible pour que la vérification au niveau des tokens fonctionne. En pratique, cela signifie généralement utiliser un modèle plus petit de la même famille que le modèle cible.",
          },
          {
            q: "Quel est le gain de vitesse réel du décodage spéculatif en pratique ?",
            a: "Le gain dépend fortement de la fréquence à laquelle les propositions du modèle de brouillon sont acceptées, ce qui varie selon le type de contenu — le texte prévisible (code, sortie structurée) profite d'un gain plus important que le texte créatif ouvert. Il n'existe pas de multiplicateur fixe unique ; testez avec votre propre charge de travail pour connaître le gain réel.",
          },
          {
            q: 'LM Studio prend-il en charge le décodage spéculatif ?',
            a: 'Oui — en mode Power User ou supérieur, chargez le modèle principal et sélectionnez un modèle de brouillon dans la section « Speculative Decoding » de la barre latérale du chat. Il doit partager le vocabulaire du modèle principal. Si le modèle de brouillon est trop lent ou ses suggestions peu pertinentes, la génération peut devenir plus lente au lieu d\'être plus rapide.',
          },
          {
            q: 'Quel taux d\'acceptation est bon pour le décodage spéculatif ?',
            a: 'Il n\'existe pas de seuil de référence ; la documentation officielle n\'en cite aucun. Les guides communautaires avancent des chiffres différents, et la valeur réelle dépend du matériel, de la taille du brouillon et du type de contenu. Mesurez sur votre propre charge de travail — llama.cpp affiche des statistiques d\'acceptation.',
          },
          {
            q: 'Puis-je utiliser le même modèle comme brouillon et comme cible ?',
            a: 'Le vocabulaire serait identique, mais cela annule l\'intérêt : l\'acceptation serait très élevée, pourtant le brouillon coûte autant que la cible, donc aucune accélération et deux fois plus de VRAM. Le modèle de brouillon doit être beaucoup plus petit que le modèle cible.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-ja.webp',
    title: '投機的デコーディングとは',
    seoTitle: '投機的デコーディングを解説 | Prompt Bites',
    metaDescription:
      '投機的デコーディングは、小さなドラフトモデルがトークンを提案し、より大きなモデルが並列に検証することで、品質を落とさずローカルLLMの推論を高速化する手法です。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '新しいハードウェアなしでローカル推論を高速化する方法を知りたい開発者',
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>投機的デコーディングは、小さく高速なドラフトモデルが複数のトークンをまとめて提案し、より大きなターゲットモデルがそれらを1回の並列パスで検証することで推論を高速化します。トークンを1つずつ逐次生成する場合と比べて高速です。</strong>ドラフトモデルの予測が正しければ、生成は実質的に速くなり、品質は変わりません。',
    toc: [
      { label: '仕組み', anchor: '#how-it-works' },
      { label: '受け入れ率が速度向上を左右する', anchor: '#acceptance-rate' },
      { label: '投機的デコーディングが最も効果的な場面', anchor: '#when-it-helps' },
      { label: 'ドラフトモデルのセットアップ', anchor: '#setup' },
      { label: 'ドラフトなしの投機（Prompt Lookup）', anchor: '#draftless' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ja: {
        question: '投機的デコーディングとは何で、なぜ速いのですか？',
        answer:
          '投機的デコーディングは、小さなドラフトモデルと大きなターゲットモデルを組み合わせます。ドラフトモデルが数トークン先まで提案し、ターゲットモデルはトークンごとに逐次検証するのではなく、1回の並列フォワードパスですべて検証します。ドラフトの提案が採用されれば、生成が高速化します。',
        bullets: [
          '小さなドラフトモデルが、メインモデルより先に複数のトークンを提案します。',
          'より大きなターゲットモデルが、提案されたトークンを1回の並列パスで検証します。',
          '出力品質はターゲットモデルとまったく同じです — 投機的デコーディングは生成内容ではなく、速度だけを変えます。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '小さなドラフトモデルが先にトークンを提案し、大きなターゲットモデルが1回の並列パスで検証する',
          '出力品質はターゲットモデル単体での実行と同一 — 変わるのは速度のみ',
          'コードや反復構造など予測しやすいテキストでは、ドラフトモデルの的中率が上がり、速度向上が最大になる',
          'ドラフトモデルはターゲットモデルと同じトークナイザーと語彙を共有する必要がある',
          '受け入れ率が速度向上を左右し、同じファミリーのドラフトモデルは受け入れられやすい傾向があります',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '投機的デコーディングは、トークンを1つずつ生成する代わりに、小さなドラフトモデルがトークンを提案し、より大きなモデルが並列に検証することでLLM推論を高速化します。' },
          { type: 'plain-terms', text: '平たく言うと、高速な小型モデルが先読みで予測し、低速だが正確なモデルがその予測をひとつずつではなく一度にまとめてチェックします。' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '仕組み',
        content: [
          'ターゲットモデルよりはるかに小さく高速なドラフトモデルが、候補トークンの短い系列を生成します。ターゲットモデルはその系列全体を1回のフォワードパスで評価し、自身が単独で生成したであろう内容と一致するトークンを採用し、それ以外（最初の不一致以降に生成されたものも含む）を破棄します。',
          '複数トークンを並列で検証するコストは、ターゲットモデル上でトークンを1つ逐次生成するコストとほぼ同じであるため、採用された提案はそのまま最終出力を変えずに速度向上へとつながります。ターゲットモデルには常に最終決定権があり、ドラフトモデルの誤った予測は、その生成に要したわずかな時間を消費するだけで、出力に採用されることはありません。',
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: '受け入れ率が速度向上を左右する',
        content: [
          '受け入れ率（ターゲットモデルが採用するドラフトトークンの割合）によって、生成がどれだけ速くなるかが決まります。受け入れ率が高ければ、負荷の大きいターゲットモデルの1回の処理で複数のトークンが得られます。低ければドラフトの作業の大半が捨てられ、効果は小さくなるか消えてしまいます。',
          '同じモデルファミリーのドラフトは、学習データとトークン化をターゲットと共有するため、受け入れ率が高くなりやすい傾向があります。サイズは大きすぎても小さすぎても問題です。小さすぎると予測が外れ、大きすぎると遅くなって効果を打ち消します。[LM Studioのドキュメント](https://lmstudio.ai/docs/app/advanced/speculative-decoding)では、7Bクラスのメインモデルには最大1B、14Bクラスには最大3B、32Bクラスには最大7Bのドラフトを組み合わせることを提案しており、3Bクラスのメインモデルでは高速化は見込めないとしています。llama.cppは受け入れ率の統計を表示するため、自分のプロンプトで測定できます。',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: '投機的デコーディングが最も効果的な場面',
        content: [
          'コードや構造化データなど、予測しやすいテキストを生成する場合に投機的デコーディングを使いましょう。ドラフトモデルの提案が高い割合で採用され、速度向上が最大になります。プロンプト処理速度ではなく生成速度がボトルネックになっている場合にも有効です。投機的デコーディングはトークンごとの生成ステップを specifically 高速化するためです。',
          '自由創作やブレインストーミングのような、非常に創造的で予測しにくいテキストを生成する場合は投機的デコーディングを避けましょう。ドラフトモデルの提案が採用される割合が下がり、速度向上が縮小します。最悪の場合、ドラフトモデルの追加オーバーヘッドが利得を相殺することもあります。同じファミリーの互換性のある小型モデルをドラフトモデルとして用意できない場合も避けるべきです。',
        ],
      },
      setup: {
        id: 'setup',
        title: 'ドラフトモデルのセットアップ',
        content: [
          'ドラフトモデルはターゲットモデルと同じトークナイザーと語彙を共有する必要があります。異なるファミリーのモデルを組み合わせたり、バージョン間で語彙が変わった同一モデルの異なるサイズを組み合わせたりすると機能しません。最も一般的な構成は、ターゲットと同じファミリーの小型モデルを使うことです（例：同じファミリーの13Bクラスモデルに対して1Bクラスのモデルをドラフトとして使う）。',
          'llama.cppを含む複数のローカル推論ツールが投機的デコーディングをネイティブにサポートしています。セットアップでは通常、起動時にターゲットモデルとドラフトモデルの両方を指定するだけでよく、プロンプトの書き方を変える必要はありません。',
          'LM Studioでは、チャットのサイドバーから設定します。Power User モード以上に切り替え、メインモデルを読み込み、「Speculative Decoding」でドラフトモデルを選びます。[LM Studioのドキュメント](https://lmstudio.ai/docs/app/advanced/speculative-decoding)によると、ドラフトはメインモデルと同じ語彙を持つ必要があります。llama.cppでは、ターゲットモデルと並べて -md オプションでドラフトモデルを指定します（例：llama-server -m target.gguf -md draft.gguf）。詳しくは[llama.cppのドキュメント](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)をご覧ください。',
        ],
      },
      draftless: {
        id: 'draftless',
        title: 'ドラフトなしの投機：Prompt Lookup と n-gram 方式',
        content: [
          'ドラフトモデルを使わない方式もあります。Prompt Lookup や n-gram 投機は、プロンプトと生成済みテキストから繰り返しパターンを探し、前回そのパターンに続いたトークンを提案します。ターゲットモデルはドラフトモデルの場合と同じように、それらを検証します。',
          'これらの方式は追加のVRAMも互換性のある2つ目のモデルも不要ですが、出力が過去のテキストを繰り返す場合にしか効果がありません。文書の編集、コードのリファクタリング、コンテキストからの引用、フレーズを引き写す要約などが該当します。llama.cppは複数の n-gram 方式に対応しており、ドラフトモデルも設定されている場合はドラフトなしの方式が優先されます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '投機的デコーディングは出力品質を低下させますか？',
            a: 'いいえ — 採用されるすべてのトークンは依然としてターゲットモデルが決定します。投機的デコーディングが変えるのはトークンが生成される速度だけで、生成される内容は変わりません。',
          },
          {
            q: '投機的デコーディングには追加のVRAMが必要ですか？',
            a: 'はい — ドラフトモデルとターゲットモデルを同時にロードする必要があるため、ターゲットモデル単体を実行する場合よりVRAM使用量は増えます。このオーバーヘッドを管理しやすくするため、ドラフトモデルは意図的に小さいものが選ばれます。',
          },
          {
            q: 'どんな小型モデルでもドラフトモデルとして使えますか？',
            a: 'いいえ — トークンレベルの検証を機能させるには、ドラフトモデルがターゲットモデルとトークナイザーおよび語彙を共有している必要があります。実際には、ターゲットと同じモデルファミリーの小型モデルを使うのが一般的です。',
          },
          {
            q: '実際のところ投機的デコーディングはどれくらい速くなりますか？',
            a: '速度向上の度合いは、ドラフトモデルの提案がどれくらいの頻度で採用されるかに大きく依存し、コンテンツの種類によって変わります。コードや構造化出力のような予測しやすいテキストは、自由な創作テキストより速度向上が大きくなります。固定の倍率はなく、実際の利得は自分のワークロードでテストして確認してください。',
          },
          {
            q: 'LM Studioは投機的デコーディングに対応していますか？',
            a: 'はい。Power User モード以上でメインモデルを読み込み、チャットのサイドバーにある「Speculative Decoding」でドラフトモデルを選択します。ドラフトはメインモデルと同じ語彙を持つ必要があります。ドラフトモデルが遅すぎる場合や提案の精度が低い場合は、速くなるどころか遅くなることがあります。',
          },
          {
            q: '投機的デコーディングの良い受け入れ率はどれくらいですか？',
            a: '決まった基準値はなく、公式ドキュメントにも記載はありません。コミュニティのガイドによって挙げる数値は異なり、実際の値はハードウェア、ドラフトのサイズ、コンテンツの種類によって変わります。ご自身のワークロードで測定してください。llama.cppは受け入れ率の統計を表示します。',
          },
          {
            q: '同じモデルをドラフトとターゲットの両方に使えますか？',
            a: '語彙は一致しますが、目的を果たしません。受け入れ率は非常に高くなっても、ドラフトのコストがターゲットと同じなので高速化はなく、VRAMは2倍必要になります。ドラフトモデルはターゲットよりはるかに小さい必要があります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-zh.webp',
    title: '什么是推测解码？',
    seoTitle: '推测解码详解 | Prompt Bites',
    metaDescription: '推测解码通过让小型草稿模型提出候选词元、由大模型并行验证，加速本地LLM推理，且不降低输出质量。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '想在不添置新硬件的情况下提升本地推理速度的开发者',
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>推测解码通过让一个小而快的草稿模型一次性提出多个候选词元，再由更大的目标模型在一次并行计算中统一验证，而不是逐个词元顺序生成，从而加速推理。</strong>当草稿模型猜测正确时，生成速度会明显提升，且输出质量不受影响。',
    toc: [
      { label: '工作原理', anchor: '#how-it-works' },
      { label: '接受率决定加速效果', anchor: '#acceptance-rate' },
      { label: '推测解码最有效的场景', anchor: '#when-it-helps' },
      { label: '配置草稿模型', anchor: '#setup' },
      { label: '无草稿模型的推测（Prompt Lookup）', anchor: '#draftless' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      zh: {
        question: '什么是推测解码？为什么它更快？',
        answer:
          '推测解码将小型草稿模型与更大的目标模型配对使用。草稿模型提前提出若干候选词元，目标模型在一次并行前向计算中统一验证这些词元，而不是每个词元都单独顺序验证，因此在草稿猜测被采纳时生成速度更快。',
        bullets: [
          '小型草稿模型会在主模型之前提出多个候选词元。',
          '更大的目标模型在一次并行计算中验证这些候选词元。',
          '输出质量与目标模型完全一致 —— 推测解码不改变生成内容，只改变生成速度。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '小型草稿模型提前提出词元；更大的目标模型在一次并行计算中完成验证',
          '输出质量与单独运行目标模型完全相同 —— 变化的只是速度',
          '在代码等可预测、结构重复的文本上，草稿模型猜测正确的概率更高，加速效果最明显',
          '草稿模型必须与目标模型使用相同的分词器和词表',
          '接受率决定加速效果；同一系列的草稿模型通常更容易被接受',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '推测解码让小型草稿模型提出候选词元，由更大的模型并行验证，而不是逐个词元生成，从而加速LLM推理。' },
          { type: 'plain-terms', text: '通俗地说：一个快速的小模型先猜测接下来的内容，速度较慢但更准确的大模型一次性核对所有猜测，而不是逐个核对。' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '工作原理',
        content: [
          '草稿模型比目标模型小得多、速度也快得多，它会生成一小段候选词元序列。目标模型随后在一次前向计算中评估整段序列，接受与它自己独立生成结果一致的词元，并丢弃其余部分（包括第一个不一致点之后生成的所有内容）。',
          '由于在目标模型上并行验证多个词元的开销与顺序生成单个词元的开销大致相同，被接受的候选词元可以直接转化为速度提升，而不会改变最终输出。目标模型始终拥有最终决定权 —— 草稿模型的错误猜测只会浪费生成它所花的（很短的）时间，绝不会被采纳进最终输出。',
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: '接受率决定加速效果',
        content: [
          '接受率，即目标模型保留的草稿 token 所占的比例，决定了生成能加快多少。接受率高，意味着目标模型每进行一次开销较大的计算就能产出多个 token；接受率低，则大部分草稿工作被丢弃，加速效果会缩小甚至消失。',
          '同一模型系列的草稿模型与目标模型共享训练数据和分词方式，通常接受率更高。草稿模型的大小过大或过小都不行：太小则猜测不准，太大则速度太慢，会抵消收益。[LM Studio 文档](https://lmstudio.ai/docs/app/advanced/speculative-decoding)建议：7B 级主模型搭配最大 1B 的草稿模型，14B 级搭配最大 3B，32B 级搭配最大 7B；3B 级主模型预计不会获得加速。llama.cpp 会输出接受率统计，因此可以用自己的提示词测量实际接受率。',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: '推测解码最有效的场景',
        content: [
          '在生成代码、结构化数据或其他可预测文本时使用推测解码，此时草稿模型的猜测采纳率高，加速效果最明显。当生成速度而非提示处理速度是瓶颈时也适合使用，因为推测解码专门加速逐词元生成这一步骤。',
          '在生成高度创意、难以预测的文本（开放式虚构写作、头脑风暴）时应避免使用推测解码，此时草稿模型的猜测采纳率较低，加速效果减弱 —— 在最坏情况下，草稿模型带来的额外开销甚至可能抵消收益。如果没有来自同一模型系列、兼容的小型模型可用作草稿模型，也应避免使用。',
        ],
      },
      setup: {
        id: 'setup',
        title: '配置草稿模型',
        content: [
          '草稿模型必须与目标模型使用相同的分词器和词表 —— 使用不同系列的模型（甚至是同一模型在不同版本间词表发生变化的不同规格版本）组合都无法正常工作。最常见的配置是使用与目标模型同系列的更小模型（例如，用同系列的1B级模型为13B级目标模型担任草稿模型）。',
          '包括llama.cpp在内的多款本地推理工具原生支持推测解码 —— 配置通常只需在启动时同时指定目标模型和草稿模型，无需改变提示词的写法。',
          '在 LM Studio 中，该功能位于聊天侧边栏：切换到 Power User 模式或更高，加载主模型，然后在“Speculative Decoding”下选择草稿模型。根据 [LM Studio 文档](https://lmstudio.ai/docs/app/advanced/speculative-decoding)，草稿模型必须与主模型共享词表。在 llama.cpp 中，用 -md 选项在目标模型旁指定草稿模型，例如 llama-server -m target.gguf -md draft.gguf（参见 [llama.cpp 文档](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)）。',
        ],
      },
      draftless: {
        id: 'draftless',
        title: '无草稿模型的推测：Prompt Lookup 与 n-gram 方法',
        content: [
          '有些方法完全不需要草稿模型。Prompt Lookup 和 n-gram 推测会在已有的提示词和已生成文本中查找重复模式，并提出上次跟在该模式之后的 token；目标模型随后像使用草稿模型时一样进行验证。',
          '这些方法不占用额外显存，也不需要兼容的第二个模型，但只有在输出会重复前文时才有收益，例如编辑文档、重构代码、引用上下文内容，或使用原文措辞的摘要。llama.cpp 支持多种 n-gram 变体；如果同时配置了草稿模型，无草稿方法优先。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '推测解码会降低输出质量吗？',
            a: '不会 —— 每一个被接受的词元仍然由目标模型决定。推测解码只改变词元生成的速度，不改变生成的内容。',
          },
          {
            q: '推测解码需要额外的显存吗？',
            a: '需要 —— 你需要同时加载草稿模型和目标模型，因此总显存占用高于单独运行目标模型。草稿模型之所以选得小，正是为了让这部分额外开销保持可控。',
          },
          {
            q: '可以用任意小模型作为草稿模型吗？',
            a: '不可以 —— 草稿模型必须与目标模型共享分词器和词表，词元级验证才能生效。实际操作中，通常使用与目标模型同一系列的小型模型。',
          },
          {
            q: '实际使用中推测解码能快多少？',
            a: '加速幅度很大程度上取决于草稿模型的猜测被采纳的频率，而这又因内容类型而异 —— 可预测的文本（代码、结构化输出）比开放式创意文本获得的加速更明显。没有固定统一的倍数，请在自己的实际工作负载上测试以了解真实收益。',
          },
          {
            q: 'LM Studio 支持推测解码吗？',
            a: '支持。在 Power User 模式或更高级别下，加载主模型，然后在聊天侧边栏的“Speculative Decoding”部分选择草稿模型。草稿模型必须与主模型共享词表。如果草稿模型太慢或建议质量差，生成速度可能不升反降。',
          },
          {
            q: '推测解码的接受率多高才算好？',
            a: '没有权威的阈值，官方文档也没有给出。各社区指南给出的数值不一，实际数值取决于硬件、草稿模型大小和内容类型。请用自己的工作负载测量——llama.cpp 会输出接受率统计。',
          },
          {
            q: '可以用同一个模型同时作为草稿模型和目标模型吗？',
            a: '词表虽然一致，但这违背了初衷：接受率会很高，但草稿模型的开销与目标模型相同，因此没有加速，还要多占一倍显存。草稿模型必须比目标模型小得多。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-es.webp',
    title: '¿Qué es la decodificación especulativa?',
    seoTitle: 'Decodificación especulativa explicada | Prompt Bites',
    metaDescription:
      'La decodificación especulativa acelera la inferencia de LLM local haciendo que un modelo borrador pequeño proponga tokens que un modelo más grande verifica en paralelo, sin pérdida de calidad.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores con curiosidad por cómo mejorar la velocidad de inferencia local sin nuevo hardware',
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>La decodificación especulativa acelera la inferencia usando un modelo borrador pequeño y rápido para proponer varios tokens a la vez, que un modelo objetivo más grande verifica luego en un único paso paralelo en lugar de generar cada token de forma secuencial.</strong> Cuando el modelo borrador acierta, la generación es efectivamente más rápida sin pérdida de calidad.',
    toc: [
      { label: 'Cómo funciona', anchor: '#how-it-works' },
      { label: 'La tasa de aceptación determina la aceleración', anchor: '#acceptance-rate' },
      { label: 'Cuándo ayuda más la decodificación especulativa', anchor: '#when-it-helps' },
      { label: 'Configurar un modelo borrador', anchor: '#setup' },
      { label: 'Especulación sin modelo borrador (Prompt Lookup)', anchor: '#draftless' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Qué es la decodificación especulativa y por qué es más rápida?',
        answer:
          'La decodificación especulativa combina un modelo borrador pequeño con un modelo objetivo más grande. El modelo borrador propone varios tokens por adelantado, y el modelo objetivo los verifica todos en un único paso paralelo en lugar de un paso secuencial por token, lo que acelera la generación cuando se aceptan las propuestas del borrador.',
        bullets: [
          'Un modelo borrador pequeño propone varios tokens antes que el modelo principal.',
          'El modelo objetivo más grande verifica los tokens propuestos en un único paso paralelo.',
          'La calidad de salida coincide exactamente con la del modelo objetivo: la decodificación especulativa no cambia lo que se genera, solo la velocidad.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un modelo borrador pequeño propone tokens por adelantado; el modelo objetivo más grande los verifica en un único paso paralelo',
          'La calidad de salida es idéntica a ejecutar el modelo objetivo solo: solo cambia la velocidad',
          'La mejora de velocidad es mayor en texto predecible (código, estructura repetitiva) donde el modelo borrador acierta con más frecuencia',
          'El modelo borrador debe compartir el mismo tokenizador y vocabulario que el modelo objetivo',
          'La tasa de aceptación determina la aceleración; los modelos borrador de la misma familia suelen aceptarse con más frecuencia',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La decodificación especulativa acelera la inferencia de LLM haciendo que un modelo borrador pequeño proponga tokens que un modelo más grande verifica en paralelo, en lugar de generar un token a la vez.' },
          { type: 'plain-terms', text: 'En términos simples: un modelo pequeño y rápido adivina por adelantado, y el modelo lento y preciso revisa todas las conjeturas de una vez en lugar de una por una.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Cómo funciona',
        content: [
          'Un modelo borrador, mucho más pequeño y rápido que el modelo objetivo, genera una secuencia corta de tokens candidatos. El modelo objetivo evalúa toda esa secuencia en un único paso, aceptando los tokens que coinciden con lo que habría generado por sí mismo y descartando el resto, junto con todo lo generado después de la primera discrepancia.',
          'Como verificar varios tokens en paralelo cuesta aproximadamente lo mismo que generar un token secuencialmente en el modelo objetivo, las propuestas aceptadas se traducen directamente en una ganancia de velocidad sin cambiar la salida final. El modelo objetivo siempre tiene la última palabra: una propuesta incorrecta del borrador solo cuesta el (breve) tiempo empleado en generarla, nunca llega a la salida final.',
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: 'La tasa de aceptación determina la aceleración',
        content: [
          'La tasa de aceptación —la proporción de tokens del borrador que el modelo objetivo conserva— determina cuánto más rápida es la generación. Una tasa alta significa que cada pasada costosa del modelo objetivo produce varios tokens; una tasa baja significa que la mayor parte del trabajo del borrador se descarta y la ganancia se reduce o desaparece.',
          'Los borradores de la misma familia de modelos suelen lograr una mayor aceptación porque comparten datos de entrenamiento y tokenización con el modelo objetivo. El tamaño importa en ambos sentidos: un borrador demasiado pequeño adivina mal, y uno demasiado grande es tan lento que anula la ganancia. La [documentación de LM Studio](https://lmstudio.ai/docs/app/advanced/speculative-decoding) sugiere combinar un modelo principal de clase 7B con un borrador de hasta 1B, uno de clase 14B con hasta 3B y uno de clase 32B con hasta 7B, y no espera aceleración para un modelo principal de clase 3B. llama.cpp muestra estadísticas de aceptación, así que puedes medir la tasa con tus propios prompts.',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: 'Cuándo ayuda más la decodificación especulativa',
        content: [
          'Usa la decodificación especulativa al generar código, datos estructurados u otro texto predecible, donde las propuestas del modelo borrador se aceptan con alta frecuencia y la mejora de velocidad es mayor. Úsala cuando ya estés limitado por la velocidad de generación y no por el procesamiento del prompt, ya que la decodificación especulativa acelera específicamente el paso de generación token por token.',
          'Evita la decodificación especulativa al generar texto muy creativo e impredecible (ficción abierta, lluvia de ideas), donde las propuestas del modelo borrador se aceptan con menos frecuencia y la mejora de velocidad se reduce; en el peor de los casos, la sobrecarga adicional del modelo borrador puede anular la ganancia. Evítala también si no tienes un modelo más pequeño compatible de la misma familia disponible como modelo borrador.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configurar un modelo borrador',
        content: [
          'El modelo borrador debe compartir el mismo tokenizador y vocabulario que el modelo objetivo: combinar modelos de familias distintas (o incluso tamaños diferentes de un modelo cuyo vocabulario cambió entre versiones) no funcionará. La configuración más habitual usa un modelo más pequeño de la misma familia que el objetivo (por ejemplo, un modelo de clase 1B como borrador para un modelo de clase 13B de la misma familia).',
          'Varias herramientas de inferencia local (incluida llama.cpp) admiten la decodificación especulativa de forma nativa: la configuración normalmente solo requiere indicar tanto el modelo objetivo como el modelo borrador al iniciar, sin cambios en cómo escribes tus prompts.',
          'En LM Studio, la función está en la barra lateral del chat: cambia al modo Power User o superior, carga el modelo principal y elige un modelo borrador en «Speculative Decoding». Según la [documentación de LM Studio](https://lmstudio.ai/docs/app/advanced/speculative-decoding), debe compartir el vocabulario del modelo principal. En llama.cpp, indica el modelo borrador junto al objetivo con la opción -md, por ejemplo llama-server -m target.gguf -md draft.gguf (consulta la [documentación de llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)).',
        ],
      },
      draftless: {
        id: 'draftless',
        title: 'Especulación sin borrador: Prompt Lookup y métodos n-gram',
        content: [
          'Algunos métodos prescinden por completo del modelo borrador. Prompt Lookup y la especulación n-gram buscan en el prompt y en el texto ya generado un patrón que se repite y proponen los tokens que lo siguieron la vez anterior; después, el modelo objetivo los verifica igual que con un modelo borrador.',
          'Estos métodos no añaden VRAM ni requieren un segundo modelo compatible, pero solo compensan cuando la salida repite texto anterior: editar un documento, refactorizar código, citar el contexto o resumir reutilizando frases. llama.cpp admite varias variantes n-gram, y los métodos sin borrador tienen prioridad si también hay un modelo borrador configurado.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿La decodificación especulativa reduce la calidad de salida?',
            a: 'No: el modelo objetivo sigue determinando cada token aceptado. La decodificación especulativa solo cambia la velocidad a la que se producen los tokens, no cuáles se producen.',
          },
          {
            q: '¿La decodificación especulativa requiere VRAM adicional?',
            a: 'Sí: necesitas cargar tanto el modelo borrador como el modelo objetivo simultáneamente, por lo que el uso total de VRAM es mayor que ejecutar solo el modelo objetivo. El modelo borrador se elige deliberadamente pequeño para mantener manejable esta sobrecarga.',
          },
          {
            q: '¿Puedo usar cualquier modelo pequeño como modelo borrador?',
            a: 'No: el modelo borrador debe compartir el tokenizador y el vocabulario del modelo objetivo para que la verificación a nivel de token funcione. En la práctica, esto suele significar usar un modelo más pequeño de la misma familia que el objetivo.',
          },
          {
            q: '¿Cuánto más rápida es la decodificación especulativa en la práctica?',
            a: 'La mejora depende en gran medida de la frecuencia con la que se aceptan las propuestas del modelo borrador, que varía según el tipo de contenido: el texto predecible (código, salida estructurada) obtiene una mejora mayor que el texto creativo abierto. No hay un multiplicador fijo único; prueba con tu propia carga de trabajo para ver la ganancia real.',
          },
          {
            q: '¿LM Studio admite la decodificación especulativa?',
            a: 'Sí: en modo Power User o superior, carga el modelo principal y selecciona un modelo borrador en la sección «Speculative Decoding» de la barra lateral del chat. El borrador debe compartir el vocabulario del modelo principal. Si el modelo borrador es demasiado lento o sus sugerencias son malas, la generación puede ser más lenta en lugar de más rápida.',
          },
          {
            q: '¿Qué tasa de aceptación es buena en la decodificación especulativa?',
            a: 'No hay un umbral oficial; la documentación oficial no cita ninguno. Las guías de la comunidad citan cifras distintas, y el valor real depende del hardware, del tamaño del borrador y del tipo de contenido. Mide con tu propia carga de trabajo: llama.cpp muestra estadísticas de aceptación.',
          },
          {
            q: '¿Puedo usar el mismo modelo como borrador y como objetivo?',
            a: 'El vocabulario coincidiría, pero pierde todo el sentido: la aceptación sería muy alta, aunque el borrador cuesta lo mismo que el objetivo, así que no hay aceleración y necesitas el doble de VRAM. El modelo borrador debe ser mucho más pequeño que el objetivo.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-pt.webp',
    title: 'O que é decodificação especulativa?',
    seoTitle: 'Decodificação especulativa explicada | Prompt Bites',
    metaDescription:
      'A decodificação especulativa acelera a inferência de LLM local ao fazer um modelo rascunho pequeno propor tokens que um modelo maior verifica em paralelo, sem perda de qualidade.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores com curiosidade sobre como melhorar a velocidade de inferência local sem novo hardware',
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>A decodificação especulativa acelera a inferência usando um modelo rascunho pequeno e rápido para propor vários tokens de uma vez, que um modelo alvo maior verifica em uma única passagem paralela em vez de gerar cada token sequencialmente.</strong> Quando o modelo rascunho acerta, a geração fica efetivamente mais rápida, sem perda de qualidade.',
    toc: [
      { label: 'Como funciona', anchor: '#how-it-works' },
      { label: 'A taxa de aceitação determina o ganho de velocidade', anchor: '#acceptance-rate' },
      { label: 'Quando a decodificação especulativa ajuda mais', anchor: '#when-it-helps' },
      { label: 'Configurando um modelo rascunho', anchor: '#setup' },
      { label: 'Especulação sem modelo rascunho (Prompt Lookup)', anchor: '#draftless' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'O que é decodificação especulativa e por que ela é mais rápida?',
        answer:
          'A decodificação especulativa combina um modelo rascunho pequeno com um modelo alvo maior. O modelo rascunho propõe vários tokens à frente, e o modelo alvo verifica todos eles em uma única passagem paralela em vez de uma passagem sequencial por token, o que acelera a geração quando as propostas do rascunho são aceitas.',
        bullets: [
          'Um modelo rascunho pequeno propõe vários tokens antes do modelo principal.',
          'O modelo alvo maior verifica os tokens propostos em uma única passagem paralela.',
          'A qualidade da saída corresponde exatamente à do modelo alvo — a decodificação especulativa não muda o que é gerado, apenas a velocidade.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Um modelo rascunho pequeno propõe tokens à frente; o modelo alvo maior os verifica em uma única passagem paralela',
          'A qualidade da saída é idêntica à de rodar o modelo alvo sozinho — só a velocidade muda',
          'O ganho de velocidade é maior em texto previsível (código, estrutura repetitiva), onde o modelo rascunho acerta com mais frequência',
          'O modelo rascunho precisa compartilhar o mesmo tokenizador e vocabulário do modelo alvo',
          'A taxa de aceitação determina o ganho de velocidade; modelos rascunho da mesma família costumam ser aceitos com mais frequência',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A decodificação especulativa acelera a inferência de LLM ao fazer um modelo rascunho pequeno propor tokens que um modelo maior verifica em paralelo, em vez de gerar um token por vez.' },
          { type: 'plain-terms', text: 'Em termos simples: um modelo pequeno e rápido chuta as próximas palavras, e o modelo lento e preciso confere todos os chutes de uma vez, em vez de um por um.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Como funciona',
        content: [
          'Um modelo rascunho, muito menor e mais rápido que o modelo alvo, gera uma sequência curta de tokens candidatos. O modelo alvo então avalia toda essa sequência em uma única passagem, aceitando os tokens que coincidem com o que ele teria gerado sozinho e descartando o restante, junto com tudo o que foi gerado após a primeira divergência.',
          'Como verificar vários tokens em paralelo custa aproximadamente o mesmo que gerar um único token sequencialmente no modelo alvo, as propostas aceitas se traduzem diretamente em ganho de velocidade sem alterar a saída final. O modelo alvo sempre tem a palavra final — um chute errado do modelo rascunho custa apenas o (curto) tempo gasto para gerá-lo, nunca é aceito na saída.',
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: 'A taxa de aceitação determina o ganho de velocidade',
        content: [
          'A taxa de aceitação — a parcela dos tokens do rascunho que o modelo alvo mantém — determina o quanto a geração fica mais rápida. Uma taxa alta significa que cada passagem cara do modelo alvo produz vários tokens; uma taxa baixa significa que a maior parte do trabalho do rascunho é descartada e o ganho diminui ou desaparece.',
          'Rascunhos da mesma família de modelos costumam ter maior aceitação porque compartilham dados de treinamento e tokenização com o modelo alvo. O tamanho importa nos dois sentidos: um rascunho pequeno demais adivinha mal, e um grande demais é lento o bastante para anular o ganho. A [documentação do LM Studio](https://lmstudio.ai/docs/app/advanced/speculative-decoding) sugere combinar um modelo principal da classe 7B com um rascunho de até 1B, um da classe 14B com até 3B e um da classe 32B com até 7B, e não espera ganho de velocidade para um modelo principal da classe 3B. O llama.cpp exibe estatísticas de aceitação, então você pode medir a taxa com os seus próprios prompts.',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: 'Quando a decodificação especulativa ajuda mais',
        content: [
          'Use decodificação especulativa ao gerar código, dados estruturados ou outro texto previsível, onde os chutes do modelo rascunho são aceitos com alta frequência e o ganho de velocidade é maior. Use-a quando você já estiver limitado pela velocidade de geração, e não pelo processamento do prompt, já que a decodificação especulativa acelera especificamente a etapa de geração token a token.',
          'Evite a decodificação especulativa ao gerar texto muito criativo e imprevisível (ficção aberta, brainstorming), onde os chutes do modelo rascunho são aceitos com menos frequência e o ganho de velocidade diminui — a sobrecarga extra do modelo rascunho pode, no pior caso, anular o ganho. Evite também se você não tiver um modelo menor compatível da mesma família disponível para usar como modelo rascunho.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configurando um modelo rascunho',
        content: [
          'O modelo rascunho precisa compartilhar o mesmo tokenizador e vocabulário do modelo alvo — combinar modelos de famílias diferentes (ou até tamanhos diferentes de um modelo cujo vocabulário mudou entre versões) não vai funcionar. A configuração mais comum usa um modelo menor da mesma família do alvo (por exemplo, um modelo de classe 1B como rascunho para um modelo de classe 13B da mesma família).',
          'Várias ferramentas de inferência local (incluindo o llama.cpp) suportam decodificação especulativa nativamente — a configuração normalmente exige apenas especificar o modelo alvo e o modelo rascunho na inicialização, sem mudanças em como você escreve os prompts.',
          'No LM Studio, o recurso fica na barra lateral do chat: mude para o modo Power User ou superior, carregue o modelo principal e escolha um modelo rascunho em “Speculative Decoding”. Segundo a [documentação do LM Studio](https://lmstudio.ai/docs/app/advanced/speculative-decoding), ele precisa compartilhar o vocabulário do modelo principal. No llama.cpp, informe o modelo rascunho junto ao modelo alvo com a opção -md, por exemplo llama-server -m target.gguf -md draft.gguf (veja a [documentação do llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)).',
        ],
      },
      draftless: {
        id: 'draftless',
        title: 'Especulação sem rascunho: Prompt Lookup e métodos n-gram',
        content: [
          'Alguns métodos dispensam o modelo rascunho por completo. O Prompt Lookup e a especulação n-gram procuram no prompt e no texto já gerado um padrão que se repete e propõem os tokens que o seguiram da vez anterior; em seguida, o modelo alvo os verifica exatamente como faria com um modelo rascunho.',
          'Esses métodos não usam VRAM extra nem exigem um segundo modelo compatível, mas só compensam quando a saída repete texto anterior — editar um documento, refatorar código, citar o contexto ou resumir reaproveitando trechos. O llama.cpp oferece suporte a várias variantes n-gram, e os métodos sem rascunho têm prioridade se um modelo rascunho também estiver configurado.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'A decodificação especulativa reduz a qualidade da saída?',
            a: 'Não — o modelo alvo ainda determina cada token aceito. A decodificação especulativa muda apenas a velocidade com que os tokens são produzidos, não quais tokens são produzidos.',
          },
          {
            q: 'A decodificação especulativa exige VRAM extra?',
            a: 'Sim — você precisa carregar o modelo rascunho e o modelo alvo simultaneamente, então o uso total de VRAM é maior do que rodar só o modelo alvo. O modelo rascunho é escolhido pequeno de propósito para manter essa sobrecarga administrável.',
          },
          {
            q: 'Posso usar qualquer modelo pequeno como modelo rascunho?',
            a: 'Não — o modelo rascunho precisa compartilhar o tokenizador e o vocabulário do modelo alvo para que a verificação em nível de token funcione. Na prática, isso geralmente significa usar um modelo menor da mesma família do modelo alvo.',
          },
          {
            q: 'Quanto mais rápida a decodificação especulativa é na prática?',
            a: 'O ganho depende muito da frequência com que os chutes do modelo rascunho são aceitos, o que varia conforme o tipo de conteúdo — texto previsível (código, saída estruturada) tem um ganho maior do que texto criativo aberto. Não existe um multiplicador fixo único; teste com sua própria carga de trabalho para ver o ganho real.',
          },
          {
            q: 'O LM Studio oferece suporte à decodificação especulativa?',
            a: 'Sim — no modo Power User ou superior, carregue o modelo principal e selecione um modelo rascunho na seção “Speculative Decoding” da barra lateral do chat. O rascunho precisa compartilhar o vocabulário do modelo principal. Se o modelo rascunho for lento demais ou suas sugestões forem ruins, a geração pode ficar mais lenta em vez de mais rápida.',
          },
          {
            q: 'Qual é uma boa taxa de aceitação na decodificação especulativa?',
            a: 'Não existe um limite oficial; a documentação oficial não cita nenhum. Os guias da comunidade citam números diferentes, e o valor real depende do hardware, do tamanho do rascunho e do tipo de conteúdo. Meça com a sua própria carga de trabalho — o llama.cpp exibe estatísticas de aceitação.',
          },
          {
            q: 'Posso usar o mesmo modelo como rascunho e como alvo?',
            a: 'O vocabulário seria idêntico, mas isso anula o propósito: a aceitação seria muito alta, porém o rascunho custa tanto quanto o alvo, então não há ganho de velocidade e você gasta o dobro de VRAM. O modelo rascunho precisa ser muito menor que o modelo alvo.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-ar.webp',
    title: 'ما هو فك التشفير التخميني؟',
    seoTitle: 'شرح فك التشفير التخميني | Prompt Bites',
    metaDescription:
      'يسرّع فك التشفير التخميني استدلال نماذج اللغة المحلية عبر جعل نموذج مسودة صغير يقترح رموزًا يتحقق منها نموذج أكبر بالتوازي، دون أي فقدان في الجودة.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون المهتمون بمعرفة كيفية تحسين سرعة الاستدلال المحلي دون عتاد جديد',
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>يسرّع فك التشفير التخميني عملية الاستدلال باستخدام نموذج مسودة (draft model) صغير وسريع يقترح عدة رموز (tokens) دفعة واحدة، ثم يتحقق منها نموذج هدف (target model) أكبر في تمريرة واحدة متوازية بدلًا من توليد كل رمز على حدة بالتسلسل.</strong> عندما يخمّن نموذج المسودة بشكل صحيح، يصبح التوليد أسرع فعليًا دون أي فقدان في الجودة.',
    toc: [
      { label: 'كيف يعمل', anchor: '#how-it-works' },
      { label: 'معدل القبول يحدد مكسب السرعة', anchor: '#acceptance-rate' },
      { label: 'متى يفيد فك التشفير التخميني أكثر', anchor: '#when-it-helps' },
      { label: 'إعداد نموذج مسودة', anchor: '#setup' },
      { label: 'التخمين بلا نموذج مسودة (Prompt Lookup)', anchor: '#draftless' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هو فك التشفير التخميني ولماذا هو أسرع؟',
        answer:
          'يجمع فك التشفير التخميني بين نموذج مسودة صغير ونموذج هدف أكبر. يقترح نموذج المسودة عدة رموز مسبقًا، ويتحقق نموذج الهدف منها جميعًا في تمريرة أمامية متوازية واحدة بدلًا من تمريرة تسلسلية لكل رمز، مما يسرّع التوليد عند قبول تخمينات المسودة.',
        bullets: [
          'يقترح نموذج مسودة صغير عدة رموز قبل النموذج الرئيسي.',
          'يتحقق نموذج الهدف الأكبر من الرموز المقترحة في تمريرة واحدة متوازية.',
          'جودة الإخراج مطابقة تمامًا لجودة نموذج الهدف — فك التشفير التخميني لا يغيّر ما يُولَّد، بل يغيّر السرعة فقط.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يقترح نموذج مسودة صغير الرموز مسبقًا؛ ويتحقق نموذج الهدف الأكبر منها في تمريرة واحدة متوازية',
          'جودة الإخراج مطابقة تمامًا لتشغيل نموذج الهدف بمفرده — تتغير السرعة فقط',
          'تكون الزيادة في السرعة أكبر مع النصوص القابلة للتنبؤ (الأكواد البرمجية، البنية المتكررة) حيث يخمّن نموذج المسودة بشكل صحيح في أغلب الأحيان',
          'يجب أن يشترك نموذج المسودة في نفس المُرمِّز (tokenizer) والمفردات مع نموذج الهدف',
          'معدل القبول هو ما يحدد مكسب السرعة؛ ونماذج المسودة من نفس العائلة تُقبل عادةً بمعدل أعلى',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يسرّع فك التشفير التخميني استدلال نماذج اللغة عبر جعل نموذج مسودة صغير يقترح رموزًا يتحقق منها نموذج أكبر بالتوازي، بدلًا من توليد رمز واحد في كل مرة.' },
          { type: 'plain-terms', text: 'بعبارة بسيطة: نموذج صغير وسريع يخمّن مسبقًا، والنموذج البطيء والدقيق يراجع كل التخمينات دفعة واحدة بدلًا من مراجعتها واحدة تلو الأخرى.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'كيف يعمل',
        content: [
          'يولّد نموذج المسودة، الأصغر والأسرع بكثير من نموذج الهدف، سلسلة قصيرة من الرموز المرشحة. ثم يقيّم نموذج الهدف هذه السلسلة بأكملها في تمريرة أمامية واحدة، فيقبل الرموز التي تطابق ما كان سيولّده بمفرده، ويتجاهل الباقي، بما في ذلك أي شيء تم توليده بعد أول اختلاف.',
          'نظرًا لأن التحقق من عدة رموز بالتوازي يكلّف تقريبًا نفس تكلفة توليد رمز واحد بالتسلسل على نموذج الهدف، فإن التخمينات المقبولة تتحوّل مباشرة إلى مكسب في السرعة دون أي تغيير في الإخراج النهائي. يظل القرار النهائي دائمًا لنموذج الهدف — فتخمين خاطئ من نموذج المسودة يكلّف فقط الوقت (القصير) المستغرق في توليده، ولا يُقبل أبدًا ضمن الإخراج.',
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: 'معدل القبول يحدد مكسب السرعة',
        content: [
          'معدل القبول — أي نسبة رموز المسودة التي يحتفظ بها نموذج الهدف — هو ما يحدد مقدار تسارع التوليد. المعدل المرتفع يعني أن كل تمريرة مكلفة لنموذج الهدف تُنتج عدة رموز، أما المعدل المنخفض فيعني أن معظم عمل المسودة يُهدر، فيتقلص المكسب أو يختفي.',
          'تحقق المسودات من نفس عائلة النماذج معدل قبول أعلى عادةً لأنها تشترك مع نموذج الهدف في بيانات التدريب والتجزئة إلى رموز. وللحجم تأثير في الاتجاهين: المسودة الصغيرة جدًا تخمّن بشكل سيئ، والكبيرة جدًا بطيئة بما يكفي لإلغاء المكسب. تقترح [وثائق LM Studio](https://lmstudio.ai/docs/app/advanced/speculative-decoding) إقران نموذج رئيسي من فئة 7B بمسودة حتى 1B، ونموذج من فئة 14B بمسودة حتى 3B، ونموذج من فئة 32B بمسودة حتى 7B، ولا تتوقع أي تسارع لنموذج رئيسي من فئة 3B. يعرض llama.cpp إحصاءات القبول، لذا يمكنك قياس المعدل على طلباتك (prompts) الخاصة.',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: 'متى يفيد فك التشفير التخميني أكثر',
        content: [
          'استخدم فك التشفير التخميني عند توليد الأكواد البرمجية أو البيانات المهيكلة أو أي نص آخر قابل للتنبؤ، حيث تُقبل تخمينات نموذج المسودة بمعدل مرتفع وتكون الزيادة في السرعة أكبر ما يمكن. استخدمه عندما تكون سرعة التوليد هي القيد الفعلي وليس سرعة معالجة الطلب (prompt)، لأن فك التشفير التخميني يسرّع تحديدًا خطوة التوليد رمزًا برمز.',
          'تجنّب فك التشفير التخميني عند توليد نص إبداعي للغاية وغير قابل للتنبؤ (كتابة قصصية مفتوحة، عصف ذهني)، حيث تُقبل تخمينات نموذج المسودة بمعدل أقل وتتقلّص الزيادة في السرعة — وفي أسوأ الحالات، قد يلغي العبء الإضافي لنموذج المسودة المكسب المحقق. تجنّبه أيضًا إذا لم يكن لديك نموذج أصغر متوافق من نفس العائلة لاستخدامه كنموذج مسودة.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'إعداد نموذج مسودة',
        content: [
          'يجب أن يشترك نموذج المسودة في نفس المُرمِّز والمفردات مع نموذج الهدف — فدمج نماذج من عائلات مختلفة (أو حتى أحجام مختلفة من نموذج واحد تغيّرت مفرداته بين الإصدارات) لن ينجح. أكثر الإعدادات شيوعًا هو استخدام نموذج أصغر من نفس عائلة نموذج الهدف (مثلًا، نموذج من فئة 1B كمسودة لنموذج من فئة 13B من نفس العائلة).',
          'تدعم عدة أدوات استدلال محلي (بما فيها llama.cpp) فك التشفير التخميني بشكل أصلي — ويتطلب الإعداد عادةً تحديد كل من نموذج الهدف ونموذج المسودة عند التشغيل، دون أي تغيير في طريقة صياغة طلباتك (prompts).',
          'في LM Studio توجد الميزة في الشريط الجانبي للمحادثة: انتقل إلى وضع Power User أو أعلى، وحمّل النموذج الرئيسي، ثم اختر نموذج مسودة ضمن «Speculative Decoding». وفق [وثائق LM Studio](https://lmstudio.ai/docs/app/advanced/speculative-decoding)، يجب أن يشترك نموذج المسودة في المفردات مع النموذج الرئيسي. وفي llama.cpp، مرّر نموذج المسودة بجانب نموذج الهدف عبر الخيار -md، مثل llama-server -m target.gguf -md draft.gguf (راجع [وثائق llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)).',
        ],
      },
      draftless: {
        id: 'draftless',
        title: 'التخمين بلا مسودة: Prompt Lookup وطرق n-gram',
        content: [
          'تستغني بعض الطرق عن نموذج المسودة تمامًا. يبحث Prompt Lookup والتخمين بطريقة n-gram في الطلب (prompt) والنص المولَّد سابقًا عن نمط متكرر، ثم يقترحان الرموز التي تبعت ذلك النمط في المرة السابقة؛ ثم يتحقق منها نموذج الهدف تمامًا كما يفعل مع نموذج المسودة.',
          'لا تضيف هذه الطرق أي VRAM ولا تحتاج إلى نموذج ثانٍ متوافق، لكنها لا تفيد إلا عندما يكرر الإخراج نصًا سابقًا — مثل تحرير مستند، أو إعادة هيكلة الكود، أو الاقتباس من السياق، أو التلخيص مع نسخ عبارات. يدعم llama.cpp عدة متغيرات من n-gram، وتكون الأولوية للطرق بلا مسودة إذا كان نموذج مسودة مُعدًّا أيضًا.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يقلّل فك التشفير التخميني من جودة الإخراج؟',
            a: 'لا — لا يزال نموذج الهدف هو من يحدد كل رمز يُقبل. يغيّر فك التشفير التخميني فقط سرعة إنتاج الرموز، وليس الرموز التي يتم إنتاجها.',
          },
          {
            q: 'هل يتطلب فك التشفير التخميني ذاكرة VRAM إضافية؟',
            a: 'نعم — تحتاج إلى تحميل نموذج المسودة ونموذج الهدف في آن واحد، لذا يكون إجمالي استخدام VRAM أعلى من تشغيل نموذج الهدف بمفرده. يُختار نموذج المسودة ليكون صغيرًا عمدًا لإبقاء هذا العبء الإضافي قابلًا للإدارة.',
          },
          {
            q: 'هل يمكنني استخدام أي نموذج صغير كنموذج مسودة؟',
            a: 'لا — يجب أن يشترك نموذج المسودة في المُرمِّز والمفردات مع نموذج الهدف حتى يعمل التحقق على مستوى الرموز. عمليًا، يعني هذا عادةً استخدام نموذج أصغر من نفس عائلة نموذج الهدف.',
          },
          {
            q: 'كم يكون فك التشفير التخميني أسرع فعليًا؟',
            a: 'تعتمد الزيادة في السرعة بشكل كبير على معدل قبول تخمينات نموذج المسودة، والذي يختلف باختلاف نوع المحتوى — إذ يحقق النص القابل للتنبؤ (الأكواد البرمجية، الإخراج المهيكل) زيادة أكبر مقارنة بالنص الإبداعي المفتوح. لا يوجد معامل ثابت واحد؛ اختبر الأمر مع عبء العمل الخاص بك لمعرفة المكسب الفعلي.',
          },
          {
            q: 'هل يدعم LM Studio فك التشفير التخميني؟',
            a: 'نعم — في وضع Power User أو أعلى، حمّل النموذج الرئيسي ثم اختر نموذج مسودة في قسم «Speculative Decoding» بالشريط الجانبي للمحادثة. يجب أن يشترك نموذج المسودة في المفردات مع النموذج الرئيسي. وإذا كان نموذج المسودة بطيئًا جدًا أو كانت اقتراحاته ضعيفة، فقد يصبح التوليد أبطأ بدلًا من أسرع.',
          },
          {
            q: 'ما معدل القبول الجيد في فك التشفير التخميني؟',
            a: 'لا يوجد حد مرجعي؛ فالوثائق الرسمية لا تذكر أي رقم. تذكر أدلة المجتمع أرقامًا مختلفة، والقيمة الفعلية تعتمد على العتاد وحجم المسودة ونوع المحتوى. قِس على عبء العمل الخاص بك — يعرض llama.cpp إحصاءات القبول.',
          },
          {
            q: 'هل يمكنني استخدام النموذج نفسه كمسودة وكهدف؟',
            a: 'ستتطابق المفردات، لكن ذلك يُفرغ الفكرة من معناها: سيكون معدل القبول مرتفعًا جدًا، غير أن المسودة تكلّف مثل الهدف تمامًا، فلا يوجد تسارع وتدفع ضعف VRAM. يجب أن يكون نموذج المسودة أصغر بكثير من نموذج الهدف.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/speculative-decoding-explained-overview-hero-ko.webp',
    title: '추측 디코딩이란 무엇입니까?',
    seoTitle: '추측 디코딩 설명 | Prompt Bites',
    metaDescription:
      '추측 디코딩은 작은 드래프트 모델이 토큰을 제안하고 더 큰 모델이 이를 병렬로 검증하도록 하여, 품질 손실 없이 로컬 LLM 추론 속도를 높입니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '새 하드웨어 없이 로컬 추론 속도를 높이는 방법이 궁금한 개발자',
    siblingBites: ['how-much-vram-for-local-llm', 'gguf-vs-gptq-vs-awq', 'q4-k-m-vs-q8-0', 'best-local-llm-benchmarking-tool', 'prompt-caching-for-local-llm-explained'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>추측 디코딩은 작고 빠른 드래프트 모델이 여러 토큰을 한 번에 제안하고, 더 큰 타깃 모델이 이를 순차적으로 하나씩 생성하는 대신 하나의 병렬 패스에서 검증하도록 하여 추론 속도를 높입니다.</strong> 드래프트 모델의 예측이 맞으면 품질 손실 없이 생성 속도가 실질적으로 빨라집니다.',
    toc: [
      { label: '작동 방식', anchor: '#how-it-works' },
      { label: '수락률이 속도 향상을 좌우합니다', anchor: '#acceptance-rate' },
      { label: '추측 디코딩이 가장 도움이 되는 경우', anchor: '#when-it-helps' },
      { label: '드래프트 모델 설정하기', anchor: '#setup' },
      { label: '드래프트 없는 추측(Prompt Lookup)', anchor: '#draftless' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ko: {
        question: '추측 디코딩이란 무엇이고 왜 더 빠릅니까?',
        answer:
          '추측 디코딩은 작은 드래프트 모델과 더 큰 타깃 모델을 짝지어 사용합니다. 드래프트 모델이 여러 토큰을 미리 제안하고, 타깃 모델은 토큰마다 순차적으로 검증하는 대신 하나의 병렬 순전파(forward pass)에서 모두 검증하며, 드래프트의 제안이 채택되면 생성 속도가 빨라집니다.',
        bullets: [
          '작은 드래프트 모델이 메인 모델보다 먼저 여러 토큰을 제안합니다.',
          '더 큰 타깃 모델이 제안된 토큰들을 하나의 병렬 패스에서 검증합니다.',
          '출력 품질은 타깃 모델과 정확히 동일합니다 — 추측 디코딩은 생성되는 내용이 아니라 속도만 바꿉니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '작은 드래프트 모델이 토큰을 미리 제안하고, 더 큰 타깃 모델이 하나의 병렬 패스에서 이를 검증합니다',
          '출력 품질은 타깃 모델 단독 실행과 동일합니다 — 속도만 달라집니다',
          '코드처럼 예측 가능하고 반복적인 구조의 텍스트에서는 드래프트 모델의 정답률이 높아져 속도 향상이 가장 큽니다',
          '드래프트 모델은 타깃 모델과 동일한 토크나이저와 어휘를 공유해야 합니다',
          '수락률이 속도 향상을 좌우하며, 같은 계열의 드래프트 모델이 더 자주 수락되는 경향이 있습니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '추측 디코딩은 작은 드래프트 모델이 토큰을 제안하고 더 큰 모델이 이를 병렬로 검증하도록 하여, 토큰을 하나씩 생성하는 대신 LLM 추론 속도를 높입니다.' },
          { type: 'plain-terms', text: '쉽게 말해, 빠른 소형 모델이 먼저 추측하고, 느리지만 정확한 모델이 그 추측을 하나씩이 아니라 한꺼번에 확인하는 방식입니다.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '작동 방식',
        content: [
          '타깃 모델보다 훨씬 작고 빠른 드래프트 모델이 짧은 후보 토큰 시퀀스를 생성합니다. 그런 다음 타깃 모델이 이 시퀀스 전체를 하나의 순전파에서 평가하여, 자신이 단독으로 생성했을 결과와 일치하는 토큰은 채택하고 나머지(첫 불일치 이후 생성된 모든 것 포함)는 폐기합니다.',
          '타깃 모델에서 여러 토큰을 병렬로 검증하는 비용은 토큰 하나를 순차적으로 생성하는 비용과 거의 같기 때문에, 채택된 제안은 최종 출력을 바꾸지 않으면서도 그대로 속도 향상으로 이어집니다. 최종 결정권은 항상 타깃 모델에 있으며, 드래프트 모델의 잘못된 추측은 그것을 생성하는 데 든 (짧은) 시간만 소모할 뿐 출력에 채택되는 일은 없습니다.',
        ],
      },
      acceptanceRate: {
        id: 'acceptance-rate',
        title: '수락률이 속도 향상을 좌우합니다',
        content: [
          '수락률, 즉 타깃 모델이 채택하는 드래프트 토큰의 비율이 생성 속도가 얼마나 빨라지는지를 결정합니다. 수락률이 높으면 비용이 큰 타깃 모델의 한 번의 연산으로 여러 토큰을 얻고, 낮으면 드래프트 작업 대부분이 버려져 이득이 줄거나 사라집니다.',
          '같은 모델 계열의 드래프트는 학습 데이터와 토큰화를 타깃과 공유하므로 대체로 수락률이 높습니다. 크기는 양쪽 모두에서 중요합니다. 너무 작으면 예측이 빗나가고, 너무 크면 느려져서 이득이 상쇄됩니다. [LM Studio 문서](https://lmstudio.ai/docs/app/advanced/speculative-decoding)는 7B급 메인 모델에는 최대 1B, 14B급에는 최대 3B, 32B급에는 최대 7B 드래프트를 짝지을 것을 제안하며, 3B급 메인 모델은 속도 향상을 기대하기 어렵다고 설명합니다. llama.cpp는 수락률 통계를 출력하므로 직접 사용하는 프롬프트로 측정할 수 있습니다.',
        ],
      },
      whenItHelps: {
        id: 'when-it-helps',
        title: '추측 디코딩이 가장 도움이 되는 경우',
        content: [
          '코드, 구조화된 데이터 등 예측 가능한 텍스트를 생성할 때 추측 디코딩을 사용하십시오. 드래프트 모델의 제안이 높은 비율로 채택되어 속도 향상이 가장 큽니다. 프롬프트 처리 속도가 아니라 생성 속도가 이미 병목인 경우에도 사용하십시오. 추측 디코딩은 토큰 단위 생성 단계를 구체적으로 가속하기 때문입니다.',
          '개방형 소설 쓰기나 브레인스토밍처럼 매우 창의적이고 예측하기 어려운 텍스트를 생성할 때는 추측 디코딩을 피하십시오. 드래프트 모델의 제안이 채택되는 빈도가 낮아져 속도 향상이 줄어들며, 최악의 경우 드래프트 모델의 추가 오버헤드가 이득을 상쇄할 수 있습니다. 같은 계열의 호환 가능한 소형 모델을 드래프트 모델로 사용할 수 없는 경우에도 피하십시오.',
        ],
      },
      setup: {
        id: 'setup',
        title: '드래프트 모델 설정하기',
        content: [
          '드래프트 모델은 타깃 모델과 동일한 토크나이저와 어휘를 공유해야 합니다 — 서로 다른 계열의 모델(또는 버전 간 어휘가 바뀐 동일 모델의 다른 크기)을 조합하면 작동하지 않습니다. 가장 일반적인 구성은 타깃 모델과 같은 계열의 더 작은 모델을 사용하는 것입니다(예: 같은 계열의 13B급 타깃 모델에 1B급 모델을 드래프트로 사용).',
          'llama.cpp를 포함한 여러 로컬 추론 도구가 추측 디코딩을 기본적으로 지원합니다 — 설정은 보통 실행 시 타깃 모델과 드래프트 모델을 함께 지정하기만 하면 되며, 프롬프트를 작성하는 방식은 바꿀 필요가 없습니다.',
          'LM Studio에서는 채팅 사이드바에서 설정합니다. Power User 모드 이상으로 전환하고 메인 모델을 불러온 뒤 \'Speculative Decoding\'에서 드래프트 모델을 선택합니다. [LM Studio 문서](https://lmstudio.ai/docs/app/advanced/speculative-decoding)에 따르면 드래프트는 메인 모델과 같은 어휘를 가져야 합니다. llama.cpp에서는 타깃 모델과 함께 -md 옵션으로 드래프트 모델을 지정합니다. 예: llama-server -m target.gguf -md draft.gguf ([llama.cpp 문서](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md) 참고).',
        ],
      },
      draftless: {
        id: 'draftless',
        title: '드래프트 없는 추측: Prompt Lookup과 n-gram 방식',
        content: [
          '드래프트 모델 없이 동작하는 방식도 있습니다. Prompt Lookup과 n-gram 추측은 기존 프롬프트와 이미 생성된 텍스트에서 반복되는 패턴을 찾아, 지난번에 그 패턴 뒤에 이어진 토큰을 제안합니다. 이후 타깃 모델이 드래프트 모델을 쓸 때와 똑같이 이를 검증합니다.',
          '이 방식은 추가 VRAM이 필요 없고 호환되는 두 번째 모델도 필요 없지만, 출력이 앞선 텍스트를 반복할 때만 효과가 있습니다. 문서 편집, 코드 리팩터링, 컨텍스트 인용, 문구를 그대로 가져오는 요약 등이 해당합니다. llama.cpp는 여러 n-gram 변형을 지원하며, 드래프트 모델도 설정되어 있으면 드래프트 없는 방식이 우선합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '추측 디코딩이 출력 품질을 낮춥니까?',
            a: '아닙니다 — 채택되는 모든 토큰은 여전히 타깃 모델이 결정합니다. 추측 디코딩은 토큰이 생성되는 속도만 바꿀 뿐, 어떤 토큰이 생성되는지는 바꾸지 않습니다.',
          },
          {
            q: '추측 디코딩에는 추가 VRAM이 필요합니까?',
            a: '예 — 드래프트 모델과 타깃 모델을 동시에 로드해야 하므로 전체 VRAM 사용량이 타깃 모델만 실행할 때보다 높습니다. 이 오버헤드를 관리 가능한 수준으로 유지하기 위해 드래프트 모델은 의도적으로 작게 선택됩니다.',
          },
          {
            q: '아무 소형 모델이나 드래프트 모델로 사용할 수 있습니까?',
            a: '아닙니다 — 토큰 수준 검증이 작동하려면 드래프트 모델이 타깃 모델과 토크나이저 및 어휘를 공유해야 합니다. 실제로는 보통 타깃 모델과 같은 계열의 더 작은 모델을 사용하는 것을 의미합니다.',
          },
          {
            q: '실제로 추측 디코딩은 얼마나 더 빠릅니까?',
            a: '속도 향상 정도는 드래프트 모델의 제안이 채택되는 빈도에 크게 좌우되며, 이는 콘텐츠 유형에 따라 달라집니다 — 코드나 구조화된 출력처럼 예측 가능한 텍스트는 개방형 창작 텍스트보다 더 큰 향상을 보입니다. 고정된 단일 배율은 없으므로, 실제 이득을 확인하려면 자신의 워크로드로 직접 테스트해 보십시오.',
          },
          {
            q: 'LM Studio는 추측 디코딩을 지원합니까?',
            a: '예. Power User 모드 이상에서 메인 모델을 불러온 뒤 채팅 사이드바의 \'Speculative Decoding\' 섹션에서 드래프트 모델을 선택합니다. 드래프트는 메인 모델과 같은 어휘를 가져야 합니다. 드래프트 모델이 너무 느리거나 제안이 부정확하면 오히려 생성이 느려질 수 있습니다.',
          },
          {
            q: '추측 디코딩에서 좋은 수락률은 어느 정도입니까?',
            a: '공인된 기준값은 없으며 공식 문서에도 언급이 없습니다. 커뮤니티 가이드마다 제시하는 수치가 다르며, 실제 값은 하드웨어, 드래프트 크기, 콘텐츠 유형에 따라 달라집니다. 직접 사용하는 워크로드로 측정하십시오. llama.cpp는 수락률 통계를 출력합니다.',
          },
          {
            q: '같은 모델을 드래프트와 타깃으로 함께 사용할 수 있습니까?',
            a: '어휘는 일치하지만 목적에 어긋납니다. 수락률은 매우 높겠지만 드래프트 비용이 타깃과 같아 속도 향상이 없고 VRAM만 두 배로 듭니다. 드래프트 모델은 타깃보다 훨씬 작아야 합니다.',
          },
        ],
      },
    },
  },
}
