import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Technique & Concept Explainers',
    title: 'What Is Speculative Decoding?',
    seoTitle: 'Speculative Decoding Explained | Prompt Bites',
    metaDescription:
      'Speculative decoding speeds up local LLM inference by having a small draft model propose tokens that a larger model verifies in parallel, with no quality loss.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: 'When Speculative Decoding Helps Most', anchor: '#when-it-helps' },
      { label: 'Setting Up a Draft Model', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
  de: {
    theme: 'Technique & Concept Explainers',
    title: 'Was ist Spekulatives Dekodieren?',
    seoTitle: 'Spekulatives Dekodieren erklärt | Prompt Bites',
    metaDescription:
      'Spekulatives Dekodieren beschleunigt lokale LLM-Inferenz, indem ein kleines Draft-Modell Tokens vorschlägt, die ein größeres Modell parallel prüft, ohne Qualitätsverlust.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: 'Wann Spekulatives Dekodieren am meisten hilft', anchor: '#when-it-helps' },
      { label: 'Ein Draft-Modell einrichten', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
  fr: {
    theme: 'Technique & Concept Explainers',
    title: "Qu'est-ce que le décodage spéculatif ?",
    seoTitle: 'Le décodage spéculatif expliqué | Prompt Bites',
    metaDescription:
      "Le décodage spéculatif accélère l'inférence LLM locale en faisant proposer des tokens par un petit modèle de brouillon qu'un modèle plus grand vérifie en parallèle, sans perte de qualité.",
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: 'Quand le décodage spéculatif aide le plus', anchor: '#when-it-helps' },
      { label: 'Configurer un modèle de brouillon', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
  ja: {
    theme: 'Technique & Concept Explainers',
    title: '投機的デコーディングとは',
    seoTitle: '投機的デコーディングを解説 | Prompt Bites',
    metaDescription:
      '投機的デコーディングは、小さなドラフトモデルがトークンを提案し、より大きなモデルが並列に検証することで、品質を落とさずローカルLLMの推論を高速化する手法です。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: '投機的デコーディングが最も効果的な場面', anchor: '#when-it-helps' },
      { label: 'ドラフトモデルのセットアップ', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
  zh: {
    theme: 'Technique & Concept Explainers',
    title: '什么是推测解码？',
    seoTitle: '推测解码详解 | Prompt Bites',
    metaDescription: '推测解码通过让小型草稿模型提出候选词元、由大模型并行验证，加速本地LLM推理，且不降低输出质量。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: '推测解码最有效的场景', anchor: '#when-it-helps' },
      { label: '配置草稿模型', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
  es: {
    theme: 'Technique & Concept Explainers',
    title: '¿Qué es la decodificación especulativa?',
    seoTitle: 'Decodificación especulativa explicada | Prompt Bites',
    metaDescription:
      'La decodificación especulativa acelera la inferencia de LLM local haciendo que un modelo borrador pequeño proponga tokens que un modelo más grande verifica en paralelo, sin pérdida de calidad.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: 'Cuándo ayuda más la decodificación especulativa', anchor: '#when-it-helps' },
      { label: 'Configurar un modelo borrador', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
  pt: {
    theme: 'Technique & Concept Explainers',
    title: 'O que é decodificação especulativa?',
    seoTitle: 'Decodificação especulativa explicada | Prompt Bites',
    metaDescription:
      'A decodificação especulativa acelera a inferência de LLM local ao fazer um modelo rascunho pequeno propor tokens que um modelo maior verifica em paralelo, sem perda de qualidade.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: 'Quando a decodificação especulativa ajuda mais', anchor: '#when-it-helps' },
      { label: 'Configurando um modelo rascunho', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
  ar: {
    theme: 'Technique & Concept Explainers',
    title: 'ما هو فك التشفير التخميني؟',
    seoTitle: 'شرح فك التشفير التخميني | Prompt Bites',
    metaDescription:
      'يسرّع فك التشفير التخميني استدلال نماذج اللغة المحلية عبر جعل نموذج مسودة صغير يقترح رموزًا يتحقق منها نموذج أكبر بالتوازي، دون أي فقدان في الجودة.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: 'متى يفيد فك التشفير التخميني أكثر', anchor: '#when-it-helps' },
      { label: 'إعداد نموذج مسودة', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
  ko: {
    theme: 'Technique & Concept Explainers',
    title: '추측 디코딩이란 무엇입니까?',
    seoTitle: '추측 디코딩 설명 | Prompt Bites',
    metaDescription:
      '추측 디코딩은 작은 드래프트 모델이 토큰을 제안하고 더 큰 모델이 이를 병렬로 검증하도록 하여, 품질 손실 없이 로컬 LLM 추론 속도를 높입니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
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
      { label: '추측 디코딩이 가장 도움이 되는 경우', anchor: '#when-it-helps' },
      { label: '드래프트 모델 설정하기', anchor: '#setup' },
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
        updatedDate: '2026-07',
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
        ],
      },
    },
  },
}
