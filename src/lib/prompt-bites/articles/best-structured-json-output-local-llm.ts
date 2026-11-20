import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-en.webp',
    title: 'Best Local LLM for Reliable Structured JSON Output?',
    seoTitle: 'Best Local LLM for Structured JSON Output | Prompt Bites',
    metaDescription:
      'How to get reliable JSON from a local LLM: grammar-constrained decoding in Ollama, llama.cpp and LM Studio, plus its limits and when prompting is enough.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers who need reliable machine-readable output from a local model for downstream parsing',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Reliable structured JSON output from a local LLM comes mainly from grammar-constrained decoding at the inference layer, not from prompting technique alone.</strong> Grammar-based tools force the model\'s token choices to stay valid against a schema at every generation step.',
    toc: [
      { label: 'Best Approach: Constrained Decoding', anchor: '#best-approach' },
      { label: 'Why Constrained Decoding Matters', anchor: '#constrained-decoding' },
      { label: 'When Prompting Alone Is Enough', anchor: '#when-prompting-is-enough' },
      { label: 'How to Turn On Constrained Decoding', anchor: '#how-to-enable' },
      { label: 'Where It Still Fails', anchor: '#limits' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      en: {
        question: 'How do I get reliable JSON output from a local LLM?',
        answer:
          'Use grammar-constrained decoding rather than relying on prompting alone. Local serving tools that support grammar or JSON-schema-constrained generation restrict which tokens the model is allowed to generate at each step, so the output is guaranteed to be valid JSON matching your schema. This holds only when the tool supports the schema features you use and generation is not cut off at the token limit.',
        bullets: [
          'Prompting alone ("respond only in JSON") reduces but does not eliminate malformed output.',
          'Grammar-constrained decoding restricts token choices to only valid JSON at each generation step.',
          'Most local serving tools support some form of JSON-schema-constrained generation, so any capable model can produce reliable output when paired with it.',
          'Constrained decoding enforces valid syntax only while the tool supports the schema features you use and generation is not cut off at the token limit.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Grammar-constrained decoding, not prompting alone, is what makes JSON output reliable',
          'Most local serving tools support some form of schema-constrained generation',
          'Constrained decoding guarantees valid syntax but does not guarantee semantically correct field values',
          'Prompting alone is acceptable for low-stakes, human-reviewed output where an occasional malformed response is tolerable',
          'Constrained decoding holds only while generation completes and the tool supports your schema features, so validate and keep a retry path in code',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Reliable structured JSON output from a local LLM depends on grammar-constrained decoding at the inference layer, not on prompting technique alone.' },
          { type: 'plain-terms', text: 'In plain terms: asking a model nicely for JSON in the prompt helps, but forcing it at the decoding level is what actually guarantees valid output.' },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: 'Best Approach: Constrained Decoding',
        content: [
          '<strong>Use grammar- or schema-constrained decoding whenever downstream code will automatically parse the model\'s output.</strong> This approach restricts the model\'s token choices at every generation step to only those that keep the output syntactically valid against your target schema — it does not rely on the model choosing to follow instructions correctly, so it guarantees well-formed syntax regardless of model size or prompt phrasing. This holds only when the tool supports the schema features you use and generation is not cut off at the token limit.',
          'Best for production pipelines: schema-constrained decoding through your serving tool\'s native grammar support, paired with a downstream validation step that checks semantic correctness (not just syntax) before the data is used. Best for quick scripts or prototyping: prompting alone with a clear JSON example in the prompt, accepting the occasional retry when output is malformed.',
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: 'Why Constrained Decoding Matters',
        content: [
          'Prompting a model to respond only in JSON reduces the rate of malformed output but does not eliminate it, since the model can still generate an invalid token at any step — a stray comma, an unescaped quote, or a truncated closing brace all break downstream parsing. Grammar-constrained decoding solves this at the source by restricting the set of tokens the model is allowed to sample from at each step to only those that keep the output valid against a JSON grammar or schema, which guarantees well-formed output regardless of model size. This holds only when the tool supports the schema features you use and generation is not cut off at the token limit.',
          'Constrained decoding guarantees syntactic validity, not semantic correctness — the model can still put a wrong value in a correctly formatted field. Always pair schema-constrained generation with a downstream check that validates the actual field values make sense for your use case, not just that the JSON parses.',
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: 'When Prompting Alone Is Enough',
        content: [
          'Skip constrained decoding when a human reviews every output before it is used, since an occasional malformed response is caught and can simply be regenerated. Skip it for quick prototyping when your serving stack does not yet support grammar constraints and adding that infrastructure isn\'t worth the setup time for a throwaway script.',
          'Switch to constrained decoding if malformed-output rates from prompting alone are causing pipeline failures, or if the output feeds directly into an automated system with no human in the loop to catch parsing errors.',
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: 'How to Turn On Constrained Decoding in Ollama, llama.cpp and LM Studio',
        content: [
          '<strong>All three common local runtimes expose constrained decoding through a JSON-schema parameter, so you rarely need to write a grammar by hand.</strong> Pass the schema in the request, still describe the expected fields in the prompt, and validate the parsed result in your own code.',
        ],
        items: [
          '**Ollama:** set the `format` field of the API request to a JSON schema (or `"json"` for generic JSON). The Ollama docs also recommend passing the schema as text in the prompt and lowering the temperature, for example to 0. Cloud-hosted models were listed as not supporting structured outputs at the last refresh, so check the docs if you use them.',
          '**llama.cpp:** use `-j` with a schema on the command line (or `--grammar` / `--grammar-file` for a hand-written GBNF grammar); `llama-server` accepts `json_schema` on completion endpoints and `response_format` on `/chat/completions`. The schema only constrains output and is not added to the prompt, so describe the structure in the prompt too. Only a subset of JSON Schema is supported and unsupported features can be skipped silently, so inspect the generated grammar.',
          '**LM Studio:** send `response_format` with `type` set to `json_schema` and a `json_schema` object (with `name` and `schema`) to the OpenAI-compatible `/v1/chat/completions` endpoint. GGUF models use llama.cpp grammar-based sampling and MLX models use Outlines. LM Studio notes that not all models are capable of structured output, particularly models below 7B parameters.',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: 'Where Constrained Decoding Still Fails',
        content: [
          '<strong>Constrained decoding enforces structure, not completeness or correctness.</strong> Three practical limits: (1) A response cut off by a token limit can still end mid-structure, so set a generous output limit and check that the reply parses completely. (2) Tools support only part of JSON Schema — llama.cpp lists gaps such as nested `$ref`, `patternProperties` and bounds on non-integer numbers, and skips unsupported features silently — so test your schema and simplify it if needed. (3) Small models can still fill fields with poor values, and LM Studio warns that models below 7B parameters may not handle structured output well, so validate values in code and keep a retry path.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does constrained decoding slow down generation?',
            a: 'It adds a small overhead per token to check grammar validity, but the overhead is generally minor compared to the reliability gained. The exact cost depends on the serving tool and grammar complexity.',
          },
          {
            q: 'Does constrained decoding guarantee the JSON values are correct, not just valid syntax?',
            a: 'No — constrained decoding only guarantees the output parses as valid JSON matching your schema\'s structure. It does not guarantee the field values themselves are factually or semantically correct. Always add a separate validation step for value correctness.',
          },
          {
            q: 'Do I need a specific model to use constrained decoding, or does it work with any local model?',
            a: 'Constrained decoding is a property of the serving tool, not the model — it works with essentially any local model, since it operates by restricting which tokens are eligible at each step regardless of which model generated the underlying probabilities.',
          },
          {
            q: 'Can I define a nested or complex schema for constrained generation?',
            a: 'Yes — most grammar-based constrained decoding implementations support nested objects, arrays, and typed fields, though very deeply nested or highly conditional schemas may need to be simplified for reliable grammar compilation depending on the specific tool.',
          },
          {
            q: 'How do I request JSON-schema output in Ollama?',
            a: 'Set the `format` field of the chat or generate request to your JSON schema (or to `"json"` for any valid JSON), also describe the fields in the prompt, and consider a low temperature such as 0. Parse and validate the reply in your own code, for example with a Pydantic or Zod schema as the Ollama docs show.',
          },
          {
            q: 'Does the same schema work in Ollama, llama.cpp and LM Studio?',
            a: 'Often, but not always. Each tool converts JSON Schema into its own grammar and supports a subset, and llama.cpp skips unsupported features silently. Keep schemas simple (flat objects, arrays, enums, typed fields), test them on the tool you deploy with, and avoid depending on advanced keywords.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama: Structured outputs](https://docs.ollama.com/capabilities/structured-outputs) — the `format` field, schema examples, tips',
          '[llama.cpp: Grammars and JSON schemas](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF, `-j`, supported JSON Schema subset and known gaps',
          '[LM Studio: Structured output](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format`, GGUF and MLX engines, model caveats',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-de.webp',
    title: 'Welches lokale LLM liefert zuverlässige strukturierte JSON-Ausgabe?',
    seoTitle: 'Lokales LLM für strukturierte JSON-Ausgabe | Prompt Bites',
    metaDescription:
      'Zuverlässiges JSON von einem lokalen LLM: beschränktes Dekodieren in Ollama, llama.cpp und LM Studio, mit Grenzen und wann Prompting reicht.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die für nachgelagertes Parsing zuverlässige maschinenlesbare Ausgaben von einem lokalen Modell benötigen',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Zuverlässige strukturierte JSON-Ausgabe von einem lokalen LLM stammt hauptsächlich von grammatikbeschränktem Dekodieren auf der Inferenzebene, nicht allein von Prompting-Technik.</strong> Grammatikbasierte Tools zwingen die Token-Auswahl des Modells bei jedem Generierungsschritt dazu, gültig gegenüber einem Schema zu bleiben.',
    toc: [
      { label: 'Bester Ansatz: Beschränktes Dekodieren', anchor: '#best-approach' },
      { label: 'Warum beschränktes Dekodieren wichtig ist', anchor: '#constrained-decoding' },
      { label: 'Wann Prompting allein ausreicht', anchor: '#when-prompting-is-enough' },
      { label: 'So aktivieren Sie beschränktes Dekodieren', anchor: '#how-to-enable' },
      { label: 'Wo es weiterhin scheitert', anchor: '#limits' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Wie erhalte ich zuverlässige JSON-Ausgabe von einem lokalen LLM?',
        answer:
          'Verwenden Sie grammatikbeschränktes Dekodieren, statt sich allein auf Prompting zu verlassen. Lokale Serving-Tools, die grammatik- oder JSON-Schema-beschränkte Generierung unterstützen, schränken bei jedem Schritt ein, welche Tokens das Modell erzeugen darf, sodass die Ausgabe garantiert gültiges JSON gemäß Ihrem Schema ist. Das gilt nur, wenn das Tool die verwendeten Schema-Funktionen unterstützt und die Generierung nicht am Token-Limit abgeschnitten wird.',
        bullets: [
          'Prompting allein ("antworte nur in JSON") reduziert fehlerhafte Ausgaben, eliminiert sie aber nicht.',
          'Grammatikbeschränktes Dekodieren schränkt die Token-Auswahl bei jedem Generierungsschritt auf nur gültiges JSON ein.',
          'Die meisten lokalen Serving-Tools unterstützen eine Form von JSON-Schema-beschränkter Generierung, sodass jedes leistungsfähige Modell damit zuverlässige Ausgaben liefern kann.',
          'Beschränktes Dekodieren erzwingt gültige Syntax nur, solange das Tool die verwendeten Schema-Funktionen unterstützt und die Generierung nicht am Token-Limit abgeschnitten wird.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Grammatikbeschränktes Dekodieren, nicht Prompting allein, macht JSON-Ausgabe zuverlässig',
          'Die meisten lokalen Serving-Tools unterstützen eine Form von schema-beschränkter Generierung',
          'Beschränktes Dekodieren garantiert gültige Syntax, aber nicht semantisch korrekte Feldwerte',
          'Prompting allein ist akzeptabel für risikoarme, von Menschen geprüfte Ausgaben, bei denen eine gelegentlich fehlerhafte Antwort tolerierbar ist',
          'Beschränktes Dekodieren greift nur, wenn die Generierung abgeschlossen wird und das Tool Ihre Schema-Funktionen unterstützt – validieren Sie daher im Code und halten Sie einen Wiederholungspfad bereit',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Zuverlässige strukturierte JSON-Ausgabe von einem lokalen LLM hängt von grammatikbeschränktem Dekodieren auf der Inferenzebene ab, nicht allein von Prompting-Technik.' },
          { type: 'plain-terms', text: 'Einfach ausgedrückt: Ein Modell im Prompt höflich um JSON zu bitten hilft, aber erst das Erzwingen auf der Dekodierungsebene garantiert wirklich gültige Ausgabe.' },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: 'Bester Ansatz: Beschränktes Dekodieren',
        content: [
          '<strong>Verwenden Sie grammatik- oder schema-beschränktes Dekodieren, wann immer nachgelagerter Code die Ausgabe des Modells automatisch parst.</strong> Dieser Ansatz schränkt die Token-Auswahl des Modells bei jedem Generierungsschritt auf nur diejenigen ein, die die Ausgabe syntaktisch gültig gegenüber Ihrem Zielschema halten — er verlässt sich nicht darauf, dass das Modell Anweisungen korrekt befolgt, und garantiert daher wohlgeformte Syntax unabhängig von Modellgröße oder Prompt-Formulierung. Das gilt nur, wenn das Tool die verwendeten Schema-Funktionen unterstützt und die Generierung nicht am Token-Limit abgeschnitten wird.',
          'Am besten für Produktionspipelines: schema-beschränktes Dekodieren über die native Grammatikunterstützung Ihres Serving-Tools, kombiniert mit einem nachgelagerten Validierungsschritt, der die semantische Korrektheit prüft (nicht nur die Syntax), bevor die Daten verwendet werden. Am besten für schnelle Skripte oder Prototyping: Prompting allein mit einem klaren JSON-Beispiel im Prompt, wobei gelegentliche Wiederholungen bei fehlerhafter Ausgabe akzeptiert werden.',
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: 'Warum beschränktes Dekodieren wichtig ist',
        content: [
          'Ein Modell zu bitten, nur in JSON zu antworten, reduziert die Rate fehlerhafter Ausgaben, eliminiert sie aber nicht, da das Modell weiterhin bei jedem Schritt ein ungültiges Token erzeugen kann — ein überzähliges Komma, ein nicht escapetes Anführungszeichen oder eine abgeschnittene schließende Klammer bricht alle das nachgelagerte Parsing. Grammatikbeschränktes Dekodieren löst dies an der Quelle, indem es die Menge der Tokens, aus denen das Modell bei jedem Schritt wählen darf, auf nur diejenigen einschränkt, die die Ausgabe gegenüber einer JSON-Grammatik oder einem Schema gültig halten — das garantiert wohlgeformte Ausgabe unabhängig von der Modellgröße. Das gilt nur, wenn das Tool die verwendeten Schema-Funktionen unterstützt und die Generierung nicht am Token-Limit abgeschnitten wird.',
          'Beschränktes Dekodieren garantiert syntaktische Gültigkeit, nicht semantische Korrektheit — das Modell kann weiterhin einen falschen Wert in ein korrekt formatiertes Feld setzen. Kombinieren Sie schema-beschränkte Generierung immer mit einer nachgelagerten Prüfung, die validiert, dass die tatsächlichen Feldwerte für Ihren Anwendungsfall sinnvoll sind, nicht nur, dass das JSON geparst werden kann.',
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: 'Wann Prompting allein ausreicht',
        content: [
          'Verzichten Sie auf beschränktes Dekodieren, wenn ein Mensch jede Ausgabe vor der Verwendung prüft, da eine gelegentlich fehlerhafte Antwort erkannt und einfach neu generiert werden kann. Verzichten Sie auch beim schnellen Prototyping darauf, wenn Ihr Serving-Stack noch keine Grammatikbeschränkungen unterstützt und der Aufbau dieser Infrastruktur den Zeitaufwand für ein Wegwerf-Skript nicht wert ist.',
          'Wechseln Sie zu beschränktem Dekodieren, wenn die Fehlerrate bei reinem Prompting Pipeline-Ausfälle verursacht oder wenn die Ausgabe direkt in ein automatisiertes System ohne menschliche Kontrolle einfließt, um Parsing-Fehler abzufangen.',
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: 'So aktivieren Sie beschränktes Dekodieren in Ollama, llama.cpp und LM Studio',
        content: [
          '<strong>Alle drei gängigen lokalen Laufzeitumgebungen bieten beschränktes Dekodieren über einen JSON-Schema-Parameter an, sodass Sie selten eine Grammatik von Hand schreiben müssen.</strong> Übergeben Sie das Schema in der Anfrage, beschreiben Sie die erwarteten Felder trotzdem im Prompt und validieren Sie das geparste Ergebnis in Ihrem eigenen Code.',
        ],
        items: [
          '**Ollama:** Setzen Sie das Feld `format` der API-Anfrage auf ein JSON-Schema (oder auf `"json"` für beliebiges JSON). Die Ollama-Dokumentation empfiehlt außerdem, das Schema zusätzlich als Text im Prompt zu übergeben und die Temperatur zu senken, etwa auf 0. Cloud-gehostete Modelle waren bei der letzten Aktualisierung als nicht unterstützt aufgeführt; prüfen Sie die Dokumentation, wenn Sie diese nutzen.',
          '**llama.cpp:** Verwenden Sie `-j` mit einem Schema auf der Kommandozeile (oder `--grammar` bzw. `--grammar-file` für eine selbst geschriebene GBNF-Grammatik); `llama-server` akzeptiert `json_schema` an den Completion-Endpunkten und `response_format` bei `/chat/completions`. Das Schema schränkt nur die Ausgabe ein und wird nicht in den Prompt eingefügt, beschreiben Sie die Struktur also auch im Prompt. Unterstützt wird nur eine Teilmenge von JSON Schema, nicht unterstützte Funktionen können stillschweigend übersprungen werden – prüfen Sie daher die erzeugte Grammatik.',
          '**LM Studio:** Senden Sie `response_format` mit `type` gleich `json_schema` und einem `json_schema`-Objekt (mit `name` und `schema`) an den OpenAI-kompatiblen Endpunkt `/v1/chat/completions`. GGUF-Modelle nutzen das grammatikbasierte Sampling von llama.cpp, MLX-Modelle nutzen Outlines. LM Studio weist darauf hin, dass nicht alle Modelle strukturierte Ausgaben beherrschen, insbesondere Modelle unter 7B Parametern.',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: 'Wo beschränktes Dekodieren weiterhin scheitert',
        content: [
          '<strong>Beschränktes Dekodieren erzwingt Struktur, nicht Vollständigkeit oder Korrektheit.</strong> Drei praktische Grenzen: (1) Eine am Token-Limit abgeschnittene Antwort kann mitten in der Struktur enden – setzen Sie ein großzügiges Ausgabelimit und prüfen Sie, ob sich die Antwort vollständig parsen lässt. (2) Die Tools unterstützen nur einen Teil von JSON Schema – llama.cpp nennt etwa Lücken bei verschachtelten `$ref`, `patternProperties` und Wertgrenzen für Nicht-Ganzzahlen und überspringt nicht unterstützte Funktionen stillschweigend; testen Sie das Schema und vereinfachen Sie es bei Bedarf. (3) Kleine Modelle können Felder dennoch mit schlechten Werten füllen, und LM Studio warnt, dass Modelle unter 7B Parametern strukturierte Ausgaben womöglich schlecht beherrschen; validieren Sie daher Werte im Code und halten Sie einen Wiederholungspfad bereit.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Verlangsamt beschränktes Dekodieren die Generierung?',
            a: 'Es fügt pro Token einen kleinen Mehraufwand für die Prüfung der Grammatikgültigkeit hinzu, aber dieser Aufwand ist im Vergleich zum Zuverlässigkeitsgewinn meist gering. Die genauen Kosten hängen vom Serving-Tool und der Komplexität der Grammatik ab.',
          },
          {
            q: 'Garantiert beschränktes Dekodieren, dass die JSON-Werte korrekt sind, nicht nur syntaktisch gültig?',
            a: 'Nein — beschränktes Dekodieren garantiert nur, dass die Ausgabe als gültiges JSON gemäß der Struktur Ihres Schemas geparst werden kann. Es garantiert nicht, dass die Feldwerte selbst inhaltlich oder semantisch korrekt sind. Fügen Sie immer einen separaten Validierungsschritt für die Wertkorrektheit hinzu.',
          },
          {
            q: 'Benötige ich ein bestimmtes Modell für beschränktes Dekodieren, oder funktioniert es mit jedem lokalen Modell?',
            a: 'Beschränktes Dekodieren ist eine Eigenschaft des Serving-Tools, nicht des Modells — es funktioniert im Wesentlichen mit jedem lokalen Modell, da es die zulässigen Tokens bei jedem Schritt einschränkt, unabhängig davon, welches Modell die zugrunde liegenden Wahrscheinlichkeiten erzeugt hat.',
          },
          {
            q: 'Kann ich ein verschachteltes oder komplexes Schema für beschränkte Generierung definieren?',
            a: 'Ja — die meisten grammatikbasierten Implementierungen für beschränktes Dekodieren unterstützen verschachtelte Objekte, Arrays und typisierte Felder, wobei sehr tief verschachtelte oder stark bedingte Schemas je nach verwendetem Tool für eine zuverlässige Grammatikkompilierung möglicherweise vereinfacht werden müssen.',
          },
          {
            q: 'Wie fordere ich in Ollama eine JSON-Schema-Ausgabe an?',
            a: 'Setzen Sie das Feld `format` der Chat- oder Generate-Anfrage auf Ihr JSON-Schema (oder auf `"json"` für beliebiges gültiges JSON), beschreiben Sie die Felder zusätzlich im Prompt und erwägen Sie eine niedrige Temperatur wie 0. Parsen und validieren Sie die Antwort in Ihrem eigenen Code, etwa mit einem Pydantic- oder Zod-Schema, wie es die Ollama-Dokumentation zeigt.',
          },
          {
            q: 'Funktioniert dasselbe Schema in Ollama, llama.cpp und LM Studio?',
            a: 'Oft, aber nicht immer. Jedes Tool übersetzt JSON Schema in eine eigene Grammatik und unterstützt nur eine Teilmenge; llama.cpp überspringt nicht unterstützte Funktionen stillschweigend. Halten Sie Schemas einfach (flache Objekte, Arrays, Aufzählungen, typisierte Felder), testen Sie sie mit dem Tool, mit dem Sie ausliefern, und verlassen Sie sich nicht auf fortgeschrittene Schlüsselwörter.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Ollama: Strukturierte Ausgaben](https://docs.ollama.com/capabilities/structured-outputs) — das Feld `format`, Schema-Beispiele, Tipps',
          '[llama.cpp: Grammatiken und JSON-Schemas](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF, `-j`, unterstützte JSON-Schema-Teilmenge und bekannte Lücken',
          '[LM Studio: Strukturierte Ausgabe](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format`, GGUF- und MLX-Engines, Modellhinweise',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-fr.webp',
    title: 'Quel LLM local fournit une sortie JSON structurée fiable ?',
    seoTitle: 'LLM local pour une sortie JSON structurée | Prompt Bites',
    metaDescription:
      'Obtenir un JSON fiable avec un LLM local : décodage contraint dans Ollama, llama.cpp et LM Studio, avec ses limites et les cas où le prompting suffit.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Développeurs ayant besoin d'une sortie machine-readable fiable d'un modèle local pour un parsing en aval",
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      "<strong>Une sortie JSON structurée fiable d'un LLM local provient principalement du décodage contraint par grammaire au niveau de l'inférence, et non du seul prompting.</strong> Les outils basés sur la grammaire forcent les choix de tokens du modèle à rester valides par rapport à un schéma à chaque étape de génération.",
    toc: [
      { label: 'Meilleure approche : le décodage contraint', anchor: '#best-approach' },
      { label: "Pourquoi le décodage contraint compte", anchor: '#constrained-decoding' },
      { label: 'Quand le prompting seul suffit', anchor: '#when-prompting-is-enough' },
      { label: 'Comment activer le décodage contraint', anchor: '#how-to-enable' },
      { label: 'Où il échoue encore', anchor: '#limits' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      fr: {
        question: "Comment obtenir une sortie JSON fiable d'un LLM local ?",
        answer:
          "Utilisez le décodage contraint par grammaire plutôt que de vous fier uniquement au prompting. Les outils de service locaux prenant en charge la génération contrainte par grammaire ou par schéma JSON limitent les tokens que le modèle est autorisé à générer à chaque étape, garantissant ainsi une sortie JSON valide conforme à votre schéma. Cela ne vaut que si l'outil prend en charge les fonctions de schéma utilisées et que la génération n'est pas coupée par la limite de tokens.",
        bullets: [
          'Le prompting seul ("réponds uniquement en JSON") réduit mais n\'élimine pas les sorties mal formées.',
          "Le décodage contraint par grammaire limite les choix de tokens à un JSON valide à chaque étape de génération.",
          "La plupart des outils de service locaux prennent en charge une forme de génération contrainte par schéma JSON, donc tout modèle performant peut produire une sortie fiable lorsqu'il y est associé.",
          'Le décodage contraint n\'impose une syntaxe valide que tant que l\'outil prend en charge les fonctions de schéma utilisées et que la génération n\'est pas coupée par la limite de tokens.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Le décodage contraint par grammaire, et non le prompting seul, rend la sortie JSON fiable',
          'La plupart des outils de service locaux prennent en charge une forme de génération contrainte par schéma',
          'Le décodage contraint garantit une syntaxe valide mais pas des valeurs de champs sémantiquement correctes',
          'Le prompting seul est acceptable pour les sorties à faible enjeu, révisées par un humain, où une réponse occasionnellement mal formée est tolérable',
          'Le décodage contraint ne tient que si la génération va à son terme et que l\'outil prend en charge vos fonctions de schéma : validez et prévoyez une relance dans le code',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Une sortie JSON structurée fiable d'un LLM local dépend du décodage contraint par grammaire au niveau de l'inférence, pas de la seule technique de prompting." },
          { type: 'plain-terms', text: "En termes simples : demander poliment du JSON dans le prompt aide, mais c'est le fait de l'imposer au niveau du décodage qui garantit réellement une sortie valide." },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: 'Meilleure approche : le décodage contraint',
        content: [
          "<strong>Utilisez le décodage contraint par grammaire ou par schéma chaque fois qu'un code en aval analysera automatiquement la sortie du modèle.</strong> Cette approche limite les choix de tokens du modèle à chaque étape de génération à ceux qui maintiennent la sortie syntaxiquement valide par rapport à votre schéma cible — elle ne repose pas sur le fait que le modèle choisisse de bien suivre les instructions, garantissant ainsi une syntaxe bien formée quelle que soit la taille du modèle ou la formulation du prompt. Cela ne vaut que si l'outil prend en charge les fonctions de schéma utilisées et que la génération n'est pas coupée par la limite de tokens.",
          "Idéal pour les pipelines de production : décodage contraint par schéma via le support natif de la grammaire de votre outil de service, associé à une étape de validation en aval qui vérifie la correction sémantique (pas seulement syntaxique) avant l'utilisation des données. Idéal pour les scripts rapides ou le prototypage : le prompting seul avec un exemple JSON clair dans le prompt, en acceptant les nouvelles tentatives occasionnelles en cas de sortie mal formée.",
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: 'Pourquoi le décodage contraint compte',
        content: [
          "Demander à un modèle de répondre uniquement en JSON réduit le taux de sorties mal formées mais ne l'élimine pas, car le modèle peut toujours générer un token invalide à n'importe quelle étape — une virgule superflue, une guillemet non échappé ou une accolade de fermeture tronquée cassent tous le parsing en aval. Le décodage contraint par grammaire résout ce problème à la source en limitant l'ensemble des tokens que le modèle peut échantillonner à chaque étape à ceux qui maintiennent la sortie valide par rapport à une grammaire ou un schéma JSON, ce qui garantit une sortie bien formée quelle que soit la taille du modèle.",
          "Le décodage contraint garantit la validité syntaxique, pas la justesse sémantique — le modèle peut toujours placer une valeur erronée dans un champ correctement formaté. Associez toujours la génération contrainte par schéma à une vérification en aval qui valide que les valeurs des champs elles-mêmes ont du sens pour votre cas d'usage, pas seulement que le JSON s'analyse correctement.",
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: 'Quand le prompting seul suffit',
        content: [
          "Évitez le décodage contraint lorsqu'un humain relit chaque sortie avant utilisation, car une réponse occasionnellement mal formée est détectée et peut simplement être régénérée. Évitez-le aussi pour le prototypage rapide lorsque votre pile de service ne prend pas encore en charge les contraintes de grammaire et que la mise en place de cette infrastructure ne vaut pas le temps investi pour un script jetable.",
          "Passez au décodage contraint si le taux de sorties mal formées issu du prompting seul provoque des échecs de pipeline, ou si la sortie alimente directement un système automatisé sans supervision humaine pour détecter les erreurs de parsing.",
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: 'Comment activer le décodage contraint dans Ollama, llama.cpp et LM Studio',
        content: [
          '<strong>Les trois environnements d\'exécution locaux courants proposent le décodage contraint via un paramètre de schéma JSON, de sorte que vous avez rarement besoin d\'écrire une grammaire à la main.</strong> Transmettez le schéma dans la requête, décrivez quand même les champs attendus dans le prompt et validez le résultat analysé dans votre propre code.',
        ],
        items: [
          '**Ollama :** définissez le champ `format` de la requête d\'API sur un schéma JSON (ou sur `"json"` pour un JSON quelconque). La documentation d\'Ollama recommande aussi de transmettre le schéma sous forme de texte dans le prompt et de baisser la température, par exemple à 0. Les modèles hébergés dans le cloud étaient indiqués comme non pris en charge lors de la dernière mise à jour ; consultez la documentation si vous les utilisez.',
          '**llama.cpp :** utilisez `-j` avec un schéma en ligne de commande (ou `--grammar` / `--grammar-file` pour une grammaire GBNF écrite à la main) ; `llama-server` accepte `json_schema` sur les points d\'accès de complétion et `response_format` sur `/chat/completions`. Le schéma ne fait que contraindre la sortie et n\'est pas ajouté au prompt : décrivez donc aussi la structure dans le prompt. Seul un sous-ensemble de JSON Schema est pris en charge et les fonctions non prises en charge peuvent être ignorées silencieusement ; inspectez donc la grammaire générée.',
          '**LM Studio :** envoyez `response_format` avec `type` défini sur `json_schema` et un objet `json_schema` (avec `name` et `schema`) au point d\'accès compatible OpenAI `/v1/chat/completions`. Les modèles GGUF utilisent l\'échantillonnage par grammaire de llama.cpp et les modèles MLX utilisent Outlines. LM Studio précise que tous les modèles ne gèrent pas la sortie structurée, en particulier ceux de moins de 7B paramètres.',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: 'Où le décodage contraint échoue encore',
        content: [
          '<strong>Le décodage contraint impose la structure, pas l\'exhaustivité ni la justesse.</strong> Trois limites pratiques : (1) une réponse coupée par une limite de tokens peut s\'arrêter en plein milieu de la structure ; fixez donc une limite de sortie généreuse et vérifiez que la réponse s\'analyse en entier. (2) Les outils ne prennent en charge qu\'une partie de JSON Schema — llama.cpp signale par exemple des lacunes sur les `$ref` imbriqués, `patternProperties` et les bornes des nombres non entiers, et ignore silencieusement les fonctions non prises en charge ; testez votre schéma et simplifiez-le si nécessaire. (3) Les petits modèles peuvent quand même remplir des champs avec de mauvaises valeurs, et LM Studio avertit que les modèles de moins de 7B paramètres peuvent mal gérer la sortie structurée ; validez donc les valeurs dans le code et prévoyez une relance.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Le décodage contraint ralentit-il la génération ?',
            a: "Il ajoute une légère surcharge par token pour vérifier la validité de la grammaire, mais cette surcharge est généralement mineure comparée au gain de fiabilité. Le coût exact dépend de l'outil de service et de la complexité de la grammaire.",
          },
          {
            q: 'Le décodage contraint garantit-il que les valeurs JSON sont correctes, pas seulement syntaxiquement valides ?',
            a: "Non — le décodage contraint garantit uniquement que la sortie s'analyse comme un JSON valide correspondant à la structure de votre schéma. Il ne garantit pas que les valeurs des champs elles-mêmes sont factuellement ou sémantiquement correctes. Ajoutez toujours une étape de validation distincte pour la correction des valeurs.",
          },
          {
            q: "Ai-je besoin d'un modèle spécifique pour utiliser le décodage contraint, ou fonctionne-t-il avec n'importe quel modèle local ?",
            a: "Le décodage contraint est une propriété de l'outil de service, pas du modèle — il fonctionne avec pratiquement n'importe quel modèle local, car il fonctionne en limitant les tokens éligibles à chaque étape, quel que soit le modèle ayant généré les probabilités sous-jacentes.",
          },
          {
            q: 'Puis-je définir un schéma imbriqué ou complexe pour la génération contrainte ?',
            a: "Oui — la plupart des implémentations de décodage contraint basées sur la grammaire prennent en charge les objets imbriqués, les tableaux et les champs typés, bien que des schémas très profondément imbriqués ou fortement conditionnels puissent nécessiter d'être simplifiés pour une compilation de grammaire fiable, selon l'outil spécifique.",
          },
          {
            q: 'Comment demander une sortie conforme à un schéma JSON dans Ollama ?',
            a: 'Définissez le champ `format` de la requête chat ou generate sur votre schéma JSON (ou sur `"json"` pour tout JSON valide), décrivez aussi les champs dans le prompt et envisagez une température basse, par exemple 0. Analysez et validez la réponse dans votre propre code, par exemple avec un schéma Pydantic ou Zod comme dans la documentation d\'Ollama.',
          },
          {
            q: 'Le même schéma fonctionne-t-il dans Ollama, llama.cpp et LM Studio ?',
            a: 'Souvent, mais pas toujours. Chaque outil convertit JSON Schema en sa propre grammaire et n\'en prend en charge qu\'un sous-ensemble, et llama.cpp ignore silencieusement les fonctions non prises en charge. Gardez des schémas simples (objets plats, tableaux, énumérations, champs typés), testez-les sur l\'outil que vous déployez et ne vous appuyez pas sur des mots-clés avancés.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama : sorties structurées](https://docs.ollama.com/capabilities/structured-outputs) — le champ `format`, exemples de schémas, conseils',
          '[llama.cpp : grammaires et schémas JSON](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF, `-j`, sous-ensemble de JSON Schema pris en charge et lacunes connues',
          '[LM Studio : sortie structurée](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format`, moteurs GGUF et MLX, précautions sur les modèles',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-ja.webp',
    title: '信頼性の高い構造化JSON出力に最適なローカルLLMは？',
    seoTitle: 'JSON出力向けローカルLLM | Prompt Bites',
    metaDescription:
      'ローカルLLMで信頼できるJSONを得る方法。Ollama・llama.cpp・LM Studioでの制約付きデコーディングと、その限界、プロンプトだけで足りる場面を解説します。',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '後段の処理でパースするために、ローカルモデルから信頼できる機械可読な出力が必要な開発者',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>ローカルLLMから信頼性の高い構造化JSON出力を得るには、主に推論レイヤーでの文法制約付きデコーディングが必要であり、プロンプトの工夫だけでは不十分です。</strong>文法ベースのツールは、生成の各ステップでモデルのトークン選択がスキーマに対して常に有効であるよう強制します。',
    toc: [
      { label: '最適なアプローチ：制約付きデコーディング', anchor: '#best-approach' },
      { label: '制約付きデコーディングが重要な理由', anchor: '#constrained-decoding' },
      { label: 'プロンプトだけで十分な場合', anchor: '#when-prompting-is-enough' },
      { label: '制約付きデコーディングの有効化方法', anchor: '#how-to-enable' },
      { label: 'それでも失敗する場面', anchor: '#limits' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMから信頼できるJSON出力を得るにはどうすればよいですか？',
        answer:
          'プロンプトだけに頼るのではなく、文法制約付きデコーディングを使用してください。文法またはJSONスキーマ制約付き生成をサポートするローカル配信ツールは、各ステップでモデルが生成できるトークンを制限するため、出力はスキーマに一致する有効なJSONであることが保証されます。 これは、使用するスキーマ機能をツールがサポートし、生成がトークン上限で途切れない場合にのみ当てはまります。',
        bullets: [
          'プロンプトだけ（「JSONのみで応答して」）では、不正な出力を減らせても完全にはなくせません。',
          '文法制約付きデコーディングは、生成の各ステップでトークン選択を有効なJSONのみに制限します。',
          'ほとんどのローカル配信ツールは何らかの形のJSONスキーマ制約付き生成をサポートしているため、能力の高いモデルであればどれでもこれと組み合わせて信頼できる出力を得られます。',
          '制約付きデコーディングが有効な構文を強制できるのは、使用するスキーマ機能をツールがサポートし、生成がトークン上限で途切れない場合に限られます。',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'JSON出力を信頼できるものにするのは、プロンプトだけではなく文法制約付きデコーディングである',
          'ほとんどのローカル配信ツールは何らかの形のスキーマ制約付き生成をサポートしている',
          '制約付きデコーディングは有効な構文を保証するが、意味的に正しいフィールド値までは保証しない',
          'プロンプトだけでも、人間がレビューする低リスクな出力で、たまに不正な応答が許容できる場合には十分',
          '制約付きデコーディングが成り立つのは、生成が最後まで完了し、ツールがスキーマ機能をサポートしている場合のみ。コード側で検証し、再試行の経路を用意しておく',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'ローカルLLMからの信頼性の高い構造化JSON出力は、プロンプトの工夫だけでなく、推論レイヤーでの文法制約付きデコーディングに依存します。' },
          { type: 'plain-terms', text: '平たく言うと、プロンプトで丁寧にJSONを頼むのは助けにはなりますが、実際に有効な出力を保証するのはデコーディングレベルでの強制です。' },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: '最適なアプローチ：制約付きデコーディング',
        content: [
          '<strong>後段のコードがモデルの出力を自動的にパースする場合は、常に文法またはスキーマ制約付きデコーディングを使用してください。</strong>この方法は、生成の各ステップでモデルのトークン選択を、対象スキーマに対して構文的に有効なものだけに制限します。モデルが指示を正しく守ることに依存しないため、モデルのサイズやプロンプトの表現にかかわらず、整形式の構文が保証されます。 これは、使用するスキーマ機能をツールがサポートし、生成がトークン上限で途切れない場合にのみ当てはまります。',
          '本番パイプラインには、配信ツールのネイティブな文法サポートを通じたスキーマ制約付きデコーディングを、データが使用される前に（構文だけでなく）意味的な正しさをチェックする後段の検証ステップと組み合わせるのが最適です。手早いスクリプトやプロトタイピングには、プロンプト内に明確なJSON例を示したプロンプトのみのアプローチが最適で、出力が不正な場合はたまに再試行することを許容します。',
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: '制約付きデコーディングが重要な理由',
        content: [
          'モデルにJSONのみで応答するよう指示すると不正な出力の発生率は下がりますが、なくなるわけではありません。モデルはどのステップでも無効なトークンを生成し得るためで、余分なカンマ、エスケープされていない引用符、途中で切れた閉じ括弧はいずれも後段のパースを壊します。文法制約付きデコーディングは、各ステップでモデルがサンプリングできるトークンの集合を、JSON文法またはスキーマに対して出力が有効であり続けるものだけに制限することで、この問題を根本から解決します。これにより、モデルのサイズにかかわらず整形式の出力が保証されます。 これは、使用するスキーマ機能をツールがサポートし、生成がトークン上限で途切れない場合にのみ当てはまります。',
          '制約付きデコーディングが保証するのは構文的な妥当性であり、意味的な正しさではありません。モデルは正しくフォーマットされたフィールドに誤った値を入れることがあります。スキーマ制約付き生成には、JSONがパースできるかどうかだけでなく、実際のフィールド値がユースケースにとって意味をなすかどうかを検証する後段のチェックを必ず組み合わせてください。',
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: 'プロンプトだけで十分な場合',
        content: [
          '人間がすべての出力を使用前にレビューする場合は制約付きデコーディングを省略しても構いません。たまに不正な応答があっても検出され、単純に再生成できるためです。配信スタックがまだ文法制約をサポートしておらず、使い捨てのスクリプトのためにそのインフラを構築する時間をかける価値がない場合の手早いプロトタイピングでも省略できます。',
          'プロンプトのみによる不正な出力の発生率がパイプライン障害を引き起こしている場合、またはパースエラーを検出する人間の確認なしに出力が直接自動化システムに流れ込む場合は、制約付きデコーディングに切り替えてください。',
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: 'Ollama・llama.cpp・LM Studioで制約付きデコーディングを有効にする方法',
        content: [
          '<strong>一般的な3つのローカル実行環境はいずれもJSONスキーマのパラメータで制約付きデコーディングを提供しているため、文法を手書きする必要はほとんどありません。</strong>リクエストにスキーマを渡し、期待するフィールドはプロンプトでも説明し、パースした結果は自分のコードで検証してください。',
        ],
        items: [
          '**Ollama：** APIリクエストの`format`フィールドにJSONスキーマ（任意のJSONなら`"json"`）を設定します。Ollamaのドキュメントでは、スキーマをプロンプトにもテキストで渡すこと、温度を0などに下げることも推奨されています。クラウドホスト型モデルは最終更新時点で非対応と記載されていたため、利用する場合はドキュメントを確認してください。',
          '**llama.cpp：** コマンドラインでは`-j`にスキーマを渡します（手書きのGBNF文法なら`--grammar`または`--grammar-file`）。`llama-server`は補完エンドポイントで`json_schema`、`/chat/completions`で`response_format`を受け付けます。スキーマは出力を制約するだけでプロンプトには追加されないため、構造はプロンプトでも説明してください。サポートされるのはJSON Schemaの一部で、未対応の機能は黙ってスキップされることがあるため、生成された文法を確認してください。',
          '**LM Studio：** OpenAI互換の`/v1/chat/completions`エンドポイントに、`type`を`json_schema`にした`response_format`と`json_schema`オブジェクト（`name`と`schema`を含む）を送ります。GGUFモデルはllama.cppの文法ベースサンプリング、MLXモデルはOutlinesを使います。LM Studioは、特に7B未満のパラメータのモデルなど、すべてのモデルが構造化出力に対応できるわけではないと注記しています。',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: '制約付きデコーディングがそれでも失敗する場面',
        content: [
          '<strong>制約付きデコーディングが強制するのは構造であり、完全性や正確性ではありません。</strong>実用上の限界は3つあります。（1）トークン上限で打ち切られた応答は構造の途中で終わる可能性があるため、出力上限を十分に大きく設定し、応答が最後までパースできるか確認してください。（2）ツールがサポートするのはJSON Schemaの一部です。たとえばllama.cppはネストした`$ref`、`patternProperties`、整数以外の数値の範囲指定などに制約があるとしており、未対応の機能は黙ってスキップされます。スキーマをテストし、必要なら単純化してください。（3）小さなモデルはフィールドに質の低い値を入れることがあり、LM Studioは7B未満のモデルでは構造化出力がうまく扱えない場合があると警告しています。値はコードで検証し、再試行の経路を残してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '制約付きデコーディングは生成速度を遅くしますか？',
            a: '文法の妥当性をチェックするためトークンごとにわずかなオーバーヘッドが加わりますが、得られる信頼性の向上と比べると一般的に小さなものです。正確なコストは配信ツールと文法の複雑さによって異なります。',
          },
          {
            q: '制約付きデコーディングは、単なる構文の妥当性だけでなくJSONの値が正しいことも保証しますか？',
            a: 'いいえ — 制約付きデコーディングが保証するのは、出力がスキーマの構造に一致する有効なJSONとしてパースできることだけです。フィールド値自体が事実として、あるいは意味的に正しいことは保証しません。値の正しさについては必ず別途の検証ステップを追加してください。',
          },
          {
            q: '制約付きデコーディングを使うには特定のモデルが必要ですか、それとも任意のローカルモデルで動作しますか？',
            a: '制約付きデコーディングはモデルではなく配信ツールの機能です。各ステップで許可されるトークンを制限することで動作するため、基盤となる確率をどのモデルが生成したかにかかわらず、実質的にどのローカルモデルでも動作します。',
          },
          {
            q: '制約付き生成にネストされた複雑なスキーマを定義できますか？',
            a: 'はい — ほとんどの文法ベースの制約付きデコーディング実装は、ネストされたオブジェクト、配列、型付きフィールドをサポートしていますが、非常に深くネストされたスキーマや条件分岐の多いスキーマは、使用するツールによっては信頼できる文法コンパイルのために簡略化が必要になる場合があります。',
          },
          {
            q: 'OllamaでJSONスキーマに沿った出力を要求するには？',
            a: 'チャットまたは生成リクエストの`format`フィールドにJSONスキーマ（任意の有効なJSONなら`"json"`）を設定し、フィールドの説明もプロンプトに含め、温度は0などの低い値を検討してください。応答は自分のコードでパースして検証します。Ollamaのドキュメントにあるように、PydanticやZodのスキーマを使う方法があります。',
          },
          {
            q: '同じスキーマはOllama・llama.cpp・LM Studioで動きますか？',
            a: '多くの場合は動きますが、常にとは限りません。各ツールはJSON Schemaを独自の文法に変換し、サポートするのは一部で、llama.cppは未対応の機能を黙ってスキップします。スキーマは単純に保ち（フラットなオブジェクト、配列、列挙、型付きフィールド）、実際にデプロイするツールでテストし、高度なキーワードに依存しないでください。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Ollama：構造化出力](https://docs.ollama.com/capabilities/structured-outputs) — `format`フィールド、スキーマ例、ヒント',
          '[llama.cpp：文法とJSONスキーマ](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF、`-j`、対応するJSON Schemaの範囲と既知の制約',
          '[LM Studio：構造化出力](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format`、GGUFとMLXのエンジン、モデルに関する注意',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-zh.webp',
    title: '哪种本地LLM能可靠输出结构化JSON？',
    seoTitle: '结构化JSON输出的本地LLM | Prompt Bites',
    metaDescription:
      '如何让本地LLM稳定输出JSON：在Ollama、llama.cpp和LM Studio中启用约束解码，了解其局限，以及仅靠提示词就够用的场景。',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '需要从本地模型获得可靠机器可读输出以供下游解析的开发者',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>本地LLM可靠的结构化JSON输出主要来自推理层的语法约束解码，而不仅仅依靠提示词技巧。</strong>基于语法的工具会在每一步生成中强制模型的词元选择始终符合模式（schema）的有效性要求。',
    toc: [
      { label: '最佳方案：约束解码', anchor: '#best-approach' },
      { label: '为什么约束解码很重要', anchor: '#constrained-decoding' },
      { label: '何时仅靠提示词就足够', anchor: '#when-prompting-is-enough' },
      { label: '如何启用约束解码', anchor: '#how-to-enable' },
      { label: '它仍会失败的地方', anchor: '#limits' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      zh: {
        question: '如何从本地LLM获得可靠的JSON输出？',
        answer:
          '应使用语法约束解码，而不是单纯依赖提示词。支持语法或JSON模式约束生成的本地服务工具，会在每一步限制模型可以生成的词元，从而保证输出是符合你的模式的有效JSON。 这只在工具支持你所用的模式特性、且生成没有被词元上限截断时成立。',
        bullets: [
          '单靠提示词（例如"只用JSON回答"）可以减少但无法消除格式错误的输出。',
          '语法约束解码会在每一步生成中把词元选择限制为仅有效的JSON。',
          '大多数本地服务工具都支持某种形式的JSON模式约束生成，因此任何能力足够的模型配合它都能产生可靠输出。',
          '只有在工具支持你所用的模式特性、且生成没有被词元上限截断时，约束解码才能强制输出有效语法。',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '让JSON输出可靠的关键是语法约束解码，而不仅仅是提示词',
          '大多数本地服务工具都支持某种形式的模式约束生成',
          '约束解码能保证语法有效，但不能保证字段值在语义上正确',
          '在低风险、有人工审核的场景中，偶尔出现格式错误的输出可以容忍，此时单靠提示词是可以接受的',
          '约束解码只在生成完整结束且工具支持你的模式特性时成立，因此要在代码中校验并保留重试路径',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '本地LLM可靠的结构化JSON输出依赖于推理层的语法约束解码，而不仅仅是提示词技巧。' },
          { type: 'plain-terms', text: '通俗地说：在提示词中礼貌地要求模型输出JSON会有帮助，但真正保证输出有效的是在解码层面进行强制约束。' },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: '最佳方案：约束解码',
        content: [
          '<strong>只要下游代码会自动解析模型的输出，就应使用语法或模式约束解码。</strong>这种方法在每一步生成中都将模型的词元选择限制为那些能保持输出对目标模式在语法上有效的词元 —— 它不依赖模型是否愿意正确遵循指令，因此无论模型大小或提示词措辞如何，都能保证格式良好的语法。 这只在工具支持你所用的模式特性、且生成没有被词元上限截断时成立。',
          '对于生产管线，最佳做法是通过服务工具原生的语法支持进行模式约束解码，并配合一个下游验证步骤，在数据被使用前检查语义正确性（而不仅仅是语法）。对于快速脚本或原型开发，最佳做法是仅使用提示词，并在提示中给出清晰的JSON示例，容忍偶尔因输出格式错误而需要重试。',
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: '为什么约束解码很重要',
        content: [
          '提示模型只用JSON回答可以降低格式错误输出的比例，但无法完全消除，因为模型在任何一步仍可能生成无效词元 —— 多余的逗号、未转义的引号或被截断的右括号都会破坏下游解析。语法约束解码从源头解决了这个问题：它将模型在每一步可采样的词元集合限制为那些能保持输出对JSON语法或模式有效的词元，从而无论模型大小如何都能保证输出格式良好。 这只在工具支持你所用的模式特性、且生成没有被词元上限截断时成立。',
          '约束解码保证的是语法有效性，而不是语义正确性 —— 模型仍可能在格式正确的字段中填入错误的值。请始终将模式约束生成与下游检查配合使用，该检查应验证实际字段值是否符合你的使用场景，而不仅仅是JSON能否被解析。',
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: '何时仅靠提示词就足够',
        content: [
          '当每一次输出在使用前都会经过人工审核时，可以跳过约束解码，因为偶尔的格式错误会被发现并可以直接重新生成。当你的服务栈尚不支持语法约束、而为一次性脚本搭建这套基础设施不划算时，在快速原型开发阶段也可以跳过。',
          '如果单靠提示词导致的格式错误率已经引发管线故障，或者输出会直接进入没有人工把关的自动化系统去捕获解析错误，就应切换到约束解码。',
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: '如何在Ollama、llama.cpp和LM Studio中启用约束解码',
        content: [
          '<strong>三种常见的本地运行环境都通过JSON模式参数提供约束解码，因此你很少需要手写语法。</strong>在请求中传入模式，仍然在提示词中说明期望的字段，并在自己的代码中校验解析后的结果。',
        ],
        items: [
          '**Ollama：** 将API请求的`format`字段设为JSON模式（若只需任意JSON，则设为`"json"`）。Ollama文档还建议同时把模式以文本形式放入提示词，并降低温度，例如设为0。云端托管模型在上次更新时被列为不支持，如果使用它们，请查看文档。',
          '**llama.cpp：** 在命令行中用`-j`传入模式（手写的GBNF语法则用`--grammar`或`--grammar-file`）；`llama-server`在补全端点接受`json_schema`，在`/chat/completions`接受`response_format`。模式只用于约束输出，不会被加入提示词，因此也要在提示词中描述结构。仅支持JSON Schema的一个子集，不支持的特性可能被静默跳过，因此请检查生成的语法。',
          '**LM Studio：** 向兼容OpenAI的`/v1/chat/completions`端点发送`response_format`，其中`type`为`json_schema`，并带有`json_schema`对象（含`name`和`schema`）。GGUF模型使用llama.cpp基于语法的采样，MLX模型使用Outlines。LM Studio提示，并非所有模型都能做结构化输出，尤其是参数量低于7B的模型。',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: '约束解码仍会失败的地方',
        content: [
          '<strong>约束解码强制的是结构，而不是完整性或正确性。</strong>有三个实际限制：（1）被词元上限截断的回复仍可能在结构中途结束，因此请设置宽松的输出上限，并检查回复能否完整解析。（2）各工具只支持JSON Schema的一部分——例如llama.cpp列出了嵌套`$ref`、`patternProperties`以及非整数数值范围等缺口，并会静默跳过不支持的特性——请测试你的模式，必要时加以简化。（3）小模型仍可能在字段中填入质量较差的值，LM Studio警告参数量低于7B的模型可能无法很好地处理结构化输出；请在代码中校验字段值，并保留重试路径。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '约束解码会拖慢生成速度吗？',
            a: '它会给每个词元增加少量检查语法有效性的开销，但相比获得的可靠性提升，这个开销通常很小。具体成本取决于所用的服务工具和语法的复杂程度。',
          },
          {
            q: '约束解码能保证JSON的值是正确的，而不仅仅是语法有效吗？',
            a: '不能 —— 约束解码只能保证输出能解析为符合你的模式结构的有效JSON，不能保证字段值本身在事实或语义上是正确的。请始终额外增加一个针对值正确性的独立验证步骤。',
          },
          {
            q: '使用约束解码是否需要特定模型，还是可以配合任意本地模型？',
            a: '约束解码是服务工具的特性，而不是模型的特性 —— 它几乎可以配合任何本地模型使用，因为它是通过在每一步限制哪些词元可用来运作的，与生成底层概率的模型无关。',
          },
          {
            q: '约束生成能否定义嵌套或复杂的模式？',
            a: '可以 —— 大多数基于语法的约束解码实现都支持嵌套对象、数组和带类型的字段，不过对于非常深层嵌套或高度条件化的模式，根据所用工具的不同，可能需要简化以确保语法能够可靠编译。',
          },
          {
            q: '如何在Ollama中请求符合JSON模式的输出？',
            a: '把聊天或生成请求的`format`字段设为你的JSON模式（若只需任意有效JSON，则设为`"json"`），同时在提示词中描述字段，并考虑使用较低的温度，例如0。在自己的代码中解析并校验回复，例如像Ollama文档所示使用Pydantic或Zod模式。',
          },
          {
            q: '同一个模式能在Ollama、llama.cpp和LM Studio中通用吗？',
            a: '通常可以，但并非总是如此。每个工具会把JSON Schema转换成自己的语法，且只支持其中一个子集，llama.cpp还会静默跳过不支持的特性。请保持模式简单（扁平对象、数组、枚举、带类型字段），在你实际部署的工具上测试，并避免依赖高级关键字。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Ollama：结构化输出](https://docs.ollama.com/capabilities/structured-outputs) — `format`字段、模式示例、使用提示',
          '[llama.cpp：语法与JSON模式](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF、`-j`、支持的JSON Schema子集及已知缺口',
          '[LM Studio：结构化输出](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format`、GGUF与MLX引擎、模型注意事项',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-es.webp',
    title: '¿Qué LLM local ofrece salida JSON estructurada fiable?',
    seoTitle: 'LLM local para salida JSON estructurada | Prompt Bites',
    metaDescription:
      'Cómo obtener JSON fiable de un LLM local: decodificación restringida en Ollama, llama.cpp y LM Studio, con sus límites y cuándo basta con el prompting.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que necesitan una salida legible por máquina fiable de un modelo local para su posterior análisis',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>La salida JSON estructurada fiable de un LLM local proviene principalmente de la decodificación restringida por gramática en la capa de inferencia, no solo de la técnica de prompting.</strong> Las herramientas basadas en gramática obligan a que las elecciones de tokens del modelo se mantengan válidas frente a un esquema en cada paso de generación.',
    toc: [
      { label: 'Mejor enfoque: decodificación restringida', anchor: '#best-approach' },
      { label: 'Por qué importa la decodificación restringida', anchor: '#constrained-decoding' },
      { label: 'Cuándo basta con el prompting', anchor: '#when-prompting-is-enough' },
      { label: 'Cómo activar la decodificación restringida', anchor: '#how-to-enable' },
      { label: 'Dónde sigue fallando', anchor: '#limits' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cómo obtengo salida JSON fiable de un LLM local?',
        answer:
          'Usa decodificación restringida por gramática en lugar de depender solo del prompting. Las herramientas de servicio local que admiten generación restringida por gramática o por esquema JSON limitan qué tokens puede generar el modelo en cada paso, de modo que la salida está garantizada como JSON válido conforme a tu esquema. Esto solo se cumple si la herramienta admite las funciones de esquema que usas y la generación no se corta por el límite de tokens.',
        bullets: [
          'El prompting por sí solo ("responde solo en JSON") reduce pero no elimina la salida mal formada.',
          'La decodificación restringida por gramática limita las elecciones de tokens a solo JSON válido en cada paso de generación.',
          'La mayoría de las herramientas de servicio local admiten alguna forma de generación restringida por esquema JSON, por lo que cualquier modelo capaz puede producir salida fiable al combinarse con ella.',
          'La decodificación restringida impone sintaxis válida solo mientras la herramienta admita las funciones de esquema que uses y la generación no se corte por el límite de tokens.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La decodificación restringida por gramática, no el prompting solo, es lo que hace fiable la salida JSON',
          'La mayoría de las herramientas de servicio local admiten alguna forma de generación restringida por esquema',
          'La decodificación restringida garantiza sintaxis válida pero no valores de campo semánticamente correctos',
          'El prompting solo es aceptable para salidas de bajo riesgo revisadas por humanos, donde una respuesta ocasionalmente mal formada es tolerable',
          'La decodificación restringida solo se sostiene si la generación termina y la herramienta admite tus funciones de esquema: valida y mantén una vía de reintento en el código',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La salida JSON estructurada fiable de un LLM local depende de la decodificación restringida por gramática en la capa de inferencia, no solo de la técnica de prompting.' },
          { type: 'plain-terms', text: 'En términos simples: pedirle amablemente al modelo JSON en el prompt ayuda, pero forzarlo a nivel de decodificación es lo que realmente garantiza una salida válida.' },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: 'Mejor enfoque: decodificación restringida',
        content: [
          '<strong>Usa decodificación restringida por gramática o por esquema siempre que un código posterior vaya a analizar automáticamente la salida del modelo.</strong> Este enfoque limita las elecciones de tokens del modelo en cada paso de generación solo a aquellas que mantienen la salida sintácticamente válida frente a tu esquema objetivo; no depende de que el modelo elija seguir correctamente las instrucciones, por lo que garantiza una sintaxis bien formada sin importar el tamaño del modelo o la redacción del prompt. Esto solo se cumple si la herramienta admite las funciones de esquema que usas y la generación no se corta por el límite de tokens.',
          'Lo mejor para pipelines de producción: decodificación restringida por esquema mediante el soporte nativo de gramática de tu herramienta de servicio, combinada con un paso de validación posterior que verifique la corrección semántica (no solo la sintaxis) antes de usar los datos. Lo mejor para scripts rápidos o prototipado: prompting solo con un ejemplo JSON claro en el prompt, aceptando reintentos ocasionales cuando la salida está mal formada.',
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: 'Por qué importa la decodificación restringida',
        content: [
          'Pedirle a un modelo que responda solo en JSON reduce la tasa de salidas mal formadas pero no la elimina, ya que el modelo aún puede generar un token inválido en cualquier paso: una coma sobrante, una comilla sin escapar o una llave de cierre truncada rompen el análisis posterior. La decodificación restringida por gramática resuelve esto en el origen, limitando el conjunto de tokens que el modelo puede muestrear en cada paso solo a aquellos que mantienen la salida válida frente a una gramática o esquema JSON, lo que garantiza una salida bien formada sin importar el tamaño del modelo.',
          'La decodificación restringida garantiza validez sintáctica, no corrección semántica: el modelo aún puede poner un valor incorrecto en un campo correctamente formateado. Combina siempre la generación restringida por esquema con una comprobación posterior que valide que los valores de los campos tienen sentido para tu caso de uso, no solo que el JSON se puede analizar.',
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: 'Cuándo basta con el prompting',
        content: [
          'Omite la decodificación restringida cuando un humano revisa cada salida antes de usarla, ya que una respuesta ocasionalmente mal formada se detecta y simplemente puede regenerarse. Omítela también para prototipado rápido cuando tu pila de servicio aún no admite restricciones de gramática y no vale la pena el tiempo de configurar esa infraestructura para un script desechable.',
          'Cambia a decodificación restringida si las tasas de salida mal formada del prompting solo están causando fallos en el pipeline, o si la salida alimenta directamente un sistema automatizado sin ningún humano en el bucle para detectar errores de análisis.',
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: 'Cómo activar la decodificación restringida en Ollama, llama.cpp y LM Studio',
        content: [
          '<strong>Los tres entornos de ejecución locales más habituales ofrecen decodificación restringida mediante un parámetro de esquema JSON, así que rara vez necesitas escribir una gramática a mano.</strong> Pasa el esquema en la solicitud, describe igualmente los campos esperados en el prompt y valida el resultado analizado en tu propio código.',
        ],
        items: [
          '**Ollama:** establece el campo `format` de la solicitud de la API con un esquema JSON (o con `"json"` para JSON genérico). La documentación de Ollama también recomienda pasar el esquema como texto en el prompt y bajar la temperatura, por ejemplo a 0. Los modelos alojados en la nube figuraban como no compatibles en la última actualización; consulta la documentación si los usas.',
          '**llama.cpp:** usa `-j` con un esquema en la línea de comandos (o `--grammar` / `--grammar-file` para una gramática GBNF escrita a mano); `llama-server` acepta `json_schema` en los endpoints de completado y `response_format` en `/chat/completions`. El esquema solo restringe la salida y no se añade al prompt, así que describe también la estructura en el prompt. Solo se admite un subconjunto de JSON Schema y las funciones no admitidas pueden omitirse en silencio, así que revisa la gramática generada.',
          '**LM Studio:** envía `response_format` con `type` igual a `json_schema` y un objeto `json_schema` (con `name` y `schema`) al endpoint compatible con OpenAI `/v1/chat/completions`. Los modelos GGUF usan el muestreo basado en gramática de llama.cpp y los modelos MLX usan Outlines. LM Studio señala que no todos los modelos son capaces de producir salida estructurada, en particular los de menos de 7B parámetros.',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: 'Dónde sigue fallando la decodificación restringida',
        content: [
          '<strong>La decodificación restringida impone estructura, no integridad ni corrección.</strong> Tres límites prácticos: (1) una respuesta cortada por el límite de tokens puede terminar a mitad de la estructura, así que fija un límite de salida generoso y comprueba que la respuesta se analiza completa. (2) Las herramientas solo admiten una parte de JSON Schema — llama.cpp enumera lagunas como `$ref` anidados, `patternProperties` y límites en números no enteros, y omite en silencio las funciones no admitidas —, así que prueba tu esquema y simplifícalo si hace falta. (3) Los modelos pequeños aún pueden rellenar campos con valores pobres, y LM Studio advierte de que los modelos de menos de 7B parámetros pueden manejar mal la salida estructurada; valida los valores en el código y mantén una vía de reintento.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿La decodificación restringida ralentiza la generación?',
            a: 'Añade una pequeña sobrecarga por token para verificar la validez de la gramática, pero esa sobrecarga suele ser menor comparada con la fiabilidad ganada. El costo exacto depende de la herramienta de servicio y la complejidad de la gramática.',
          },
          {
            q: '¿La decodificación restringida garantiza que los valores JSON sean correctos, no solo sintácticamente válidos?',
            a: 'No: la decodificación restringida solo garantiza que la salida se analiza como JSON válido que coincide con la estructura de tu esquema. No garantiza que los valores de los campos en sí sean factual o semánticamente correctos. Añade siempre un paso de validación separado para la corrección de valores.',
          },
          {
            q: '¿Necesito un modelo específico para usar decodificación restringida, o funciona con cualquier modelo local?',
            a: 'La decodificación restringida es una propiedad de la herramienta de servicio, no del modelo; funciona con prácticamente cualquier modelo local, ya que opera limitando qué tokens son elegibles en cada paso, independientemente de qué modelo haya generado las probabilidades subyacentes.',
          },
          {
            q: '¿Puedo definir un esquema anidado o complejo para la generación restringida?',
            a: 'Sí: la mayoría de las implementaciones de decodificación restringida basadas en gramática admiten objetos anidados, arrays y campos tipados, aunque los esquemas muy profundamente anidados o altamente condicionales pueden necesitar simplificarse para una compilación de gramática fiable, dependiendo de la herramienta específica.',
          },
          {
            q: '¿Cómo pido salida con esquema JSON en Ollama?',
            a: 'Establece el campo `format` de la solicitud de chat o generate con tu esquema JSON (o con `"json"` para cualquier JSON válido), describe también los campos en el prompt y considera una temperatura baja, como 0. Analiza y valida la respuesta en tu propio código, por ejemplo con un esquema Pydantic o Zod como muestra la documentación de Ollama.',
          },
          {
            q: '¿Sirve el mismo esquema en Ollama, llama.cpp y LM Studio?',
            a: 'A menudo, pero no siempre. Cada herramienta convierte JSON Schema en su propia gramática y admite un subconjunto, y llama.cpp omite en silencio las funciones no admitidas. Mantén los esquemas simples (objetos planos, arrays, enumeraciones, campos tipados), pruébalos en la herramienta con la que vas a desplegar y no dependas de palabras clave avanzadas.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Ollama: salidas estructuradas](https://docs.ollama.com/capabilities/structured-outputs) — el campo `format`, ejemplos de esquemas, consejos',
          '[llama.cpp: gramáticas y esquemas JSON](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF, `-j`, subconjunto de JSON Schema admitido y lagunas conocidas',
          '[LM Studio: salida estructurada](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format`, motores GGUF y MLX, advertencias sobre modelos',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-pt.webp',
    title: 'Qual LLM local oferece saída JSON estruturada confiável?',
    seoTitle: 'LLM local para saída JSON estruturada | Prompt Bites',
    metaDescription:
      'Como obter JSON confiável de um LLM local: decodificação restrita no Ollama, llama.cpp e LM Studio, com seus limites e quando só o prompt já basta.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores que precisam de saída legível por máquina confiável de um modelo local para análise posterior',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Uma saída JSON estruturada confiável de um LLM local vem principalmente da decodificação restrita por gramática na camada de inferência, não apenas da técnica de prompting.</strong> Ferramentas baseadas em gramática forçam as escolhas de tokens do modelo a permanecerem válidas em relação a um schema em cada etapa de geração.',
    toc: [
      { label: 'Melhor abordagem: decodificação restrita', anchor: '#best-approach' },
      { label: 'Por que a decodificação restrita importa', anchor: '#constrained-decoding' },
      { label: 'Quando o prompting sozinho é suficiente', anchor: '#when-prompting-is-enough' },
      { label: 'Como ativar a decodificação restrita', anchor: '#how-to-enable' },
      { label: 'Onde ela ainda falha', anchor: '#limits' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Como obtenho saída JSON confiável de um LLM local?',
        answer:
          'Use decodificação restrita por gramática em vez de depender apenas do prompting. Ferramentas de serving locais que suportam geração restrita por gramática ou por schema JSON limitam quais tokens o modelo pode gerar em cada etapa, garantindo que a saída seja um JSON válido de acordo com o seu schema. Isso só vale se a ferramenta der suporte aos recursos de schema que você usa e a geração não for cortada pelo limite de tokens.',
        bullets: [
          'O prompting sozinho ("responda apenas em JSON") reduz mas não elimina a saída malformada.',
          'A decodificação restrita por gramática limita as escolhas de tokens a apenas JSON válido em cada etapa de geração.',
          'A maioria das ferramentas de serving locais suporta alguma forma de geração restrita por schema JSON, então qualquer modelo capaz pode produzir saída confiável quando combinado com ela.',
          'A decodificação restrita só impõe sintaxe válida enquanto a ferramenta oferecer suporte aos recursos de schema que você usa e a geração não for cortada pelo limite de tokens.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A decodificação restrita por gramática, não o prompting sozinho, é o que torna a saída JSON confiável',
          'A maioria das ferramentas de serving locais suporta alguma forma de geração restrita por schema',
          'A decodificação restrita garante sintaxe válida, mas não garante valores de campo semanticamente corretos',
          'O prompting sozinho é aceitável para saídas de baixo risco, revisadas por humanos, onde uma resposta ocasionalmente malformada é tolerável',
          'A decodificação restrita só se sustenta se a geração terminar e a ferramenta der suporte aos seus recursos de schema: valide e mantenha um caminho de nova tentativa no código',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A saída JSON estruturada confiável de um LLM local depende da decodificação restrita por gramática na camada de inferência, não apenas da técnica de prompting.' },
          { type: 'plain-terms', text: 'Em termos simples: pedir educadamente por JSON no prompt ajuda, mas forçar isso no nível da decodificação é o que realmente garante uma saída válida.' },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: 'Melhor abordagem: decodificação restrita',
        content: [
          '<strong>Use decodificação restrita por gramática ou por schema sempre que um código posterior for analisar automaticamente a saída do modelo.</strong> Essa abordagem restringe as escolhas de tokens do modelo em cada etapa de geração apenas àquelas que mantêm a saída sintaticamente válida em relação ao seu schema alvo — ela não depende de o modelo escolher seguir as instruções corretamente, então garante sintaxe bem formada independentemente do tamanho do modelo ou da formulação do prompt. Isso só vale se a ferramenta der suporte aos recursos de schema que você usa e a geração não for cortada pelo limite de tokens.',
          'Melhor para pipelines de produção: decodificação restrita por schema através do suporte nativo de gramática da sua ferramenta de serving, combinada com uma etapa de validação posterior que verifica a correção semântica (não apenas a sintaxe) antes que os dados sejam usados. Melhor para scripts rápidos ou prototipagem: prompting sozinho com um exemplo JSON claro no prompt, aceitando novas tentativas ocasionais quando a saída está malformada.',
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: 'Por que a decodificação restrita importa',
        content: [
          'Pedir a um modelo que responda apenas em JSON reduz a taxa de saída malformada, mas não a elimina, já que o modelo ainda pode gerar um token inválido em qualquer etapa — uma vírgula solta, uma aspas não escapada ou uma chave de fechamento truncada quebram o parsing posterior. A decodificação restrita por gramática resolve isso na origem, restringindo o conjunto de tokens que o modelo pode amostrar em cada etapa apenas aos que mantêm a saída válida em relação a uma gramática ou schema JSON, o que garante saída bem formada independentemente do tamanho do modelo.',
          'A decodificação restrita garante validade sintática, não correção semântica — o modelo ainda pode colocar um valor errado em um campo formatado corretamente. Sempre combine a geração restrita por schema com uma verificação posterior que valide se os valores dos campos realmente fazem sentido para o seu caso de uso, não apenas se o JSON é analisável.',
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: 'Quando o prompting sozinho é suficiente',
        content: [
          'Dispense a decodificação restrita quando um humano revisa cada saída antes de usá-la, já que uma resposta ocasionalmente malformada é detectada e pode simplesmente ser regenerada. Dispense também para prototipagem rápida quando sua stack de serving ainda não suporta restrições de gramática e montar essa infraestrutura não vale o tempo para um script descartável.',
          'Mude para decodificação restrita se as taxas de saída malformada do prompting sozinho estiverem causando falhas no pipeline, ou se a saída alimentar diretamente um sistema automatizado sem nenhum humano no loop para detectar erros de parsing.',
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: 'Como ativar a decodificação restrita no Ollama, llama.cpp e LM Studio',
        content: [
          '<strong>Os três ambientes de execução locais mais comuns oferecem decodificação restrita por meio de um parâmetro de schema JSON, então você raramente precisa escrever uma gramática à mão.</strong> Envie o schema na requisição, descreva mesmo assim os campos esperados no prompt e valide o resultado analisado no seu próprio código.',
        ],
        items: [
          '**Ollama:** defina o campo `format` da requisição da API com um schema JSON (ou com `"json"` para JSON genérico). A documentação do Ollama também recomenda passar o schema como texto no prompt e reduzir a temperatura, por exemplo para 0. Os modelos hospedados na nuvem constavam como não compatíveis na última atualização; consulte a documentação se você os usa.',
          '**llama.cpp:** use `-j` com um schema na linha de comando (ou `--grammar` / `--grammar-file` para uma gramática GBNF escrita à mão); o `llama-server` aceita `json_schema` nos endpoints de completion e `response_format` em `/chat/completions`. O schema apenas restringe a saída e não é adicionado ao prompt, então descreva também a estrutura no prompt. Só há suporte a um subconjunto de JSON Schema e recursos sem suporte podem ser ignorados silenciosamente, então inspecione a gramática gerada.',
          '**LM Studio:** envie `response_format` com `type` igual a `json_schema` e um objeto `json_schema` (com `name` e `schema`) ao endpoint `/v1/chat/completions`, compatível com a OpenAI. Modelos GGUF usam a amostragem baseada em gramática do llama.cpp e modelos MLX usam Outlines. O LM Studio observa que nem todos os modelos são capazes de gerar saída estruturada, em especial os de menos de 7B parâmetros.',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: 'Onde a decodificação restrita ainda falha',
        content: [
          '<strong>A decodificação restrita impõe estrutura, não completude nem correção.</strong> Três limites práticos: (1) uma resposta cortada pelo limite de tokens pode terminar no meio da estrutura, então defina um limite de saída generoso e confira se a resposta é analisada por inteiro. (2) As ferramentas só oferecem suporte a parte do JSON Schema — o llama.cpp lista lacunas como `$ref` aninhados, `patternProperties` e limites em números não inteiros, e ignora silenciosamente recursos sem suporte —, então teste o seu schema e simplifique-o se necessário. (3) Modelos pequenos ainda podem preencher campos com valores ruins, e o LM Studio avisa que modelos de menos de 7B parâmetros podem lidar mal com saída estruturada; valide os valores no código e mantenha um caminho de nova tentativa.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'A decodificação restrita torna a geração mais lenta?',
            a: 'Ela adiciona uma pequena sobrecarga por token para verificar a validade da gramática, mas essa sobrecarga geralmente é pequena comparada ao ganho de confiabilidade. O custo exato depende da ferramenta de serving e da complexidade da gramática.',
          },
          {
            q: 'A decodificação restrita garante que os valores JSON estão corretos, não apenas com sintaxe válida?',
            a: 'Não — a decodificação restrita garante apenas que a saída é interpretada como JSON válido correspondente à estrutura do seu schema. Ela não garante que os próprios valores dos campos estejam correta ou semanticamente certos. Sempre adicione uma etapa de validação separada para a correção dos valores.',
          },
          {
            q: 'Preciso de um modelo específico para usar decodificação restrita, ou funciona com qualquer modelo local?',
            a: 'A decodificação restrita é uma propriedade da ferramenta de serving, não do modelo — ela funciona com praticamente qualquer modelo local, já que opera restringindo quais tokens são elegíveis em cada etapa, independentemente de qual modelo gerou as probabilidades subjacentes.',
          },
          {
            q: 'Posso definir um schema aninhado ou complexo para a geração restrita?',
            a: 'Sim — a maioria das implementações de decodificação restrita baseadas em gramática suporta objetos aninhados, arrays e campos tipados, embora schemas muito profundamente aninhados ou altamente condicionais possam precisar ser simplificados para uma compilação de gramática confiável, dependendo da ferramenta específica.',
          },
          {
            q: 'Como peço saída com schema JSON no Ollama?',
            a: 'Defina o campo `format` da requisição de chat ou generate com o seu schema JSON (ou com `"json"` para qualquer JSON válido), descreva também os campos no prompt e considere uma temperatura baixa, como 0. Analise e valide a resposta no seu próprio código, por exemplo com um schema Pydantic ou Zod como mostra a documentação do Ollama.',
          },
          {
            q: 'O mesmo schema funciona no Ollama, llama.cpp e LM Studio?',
            a: 'Muitas vezes, mas nem sempre. Cada ferramenta converte o JSON Schema em sua própria gramática e oferece suporte a um subconjunto, e o llama.cpp ignora silenciosamente recursos sem suporte. Mantenha os schemas simples (objetos planos, arrays, enums, campos tipados), teste-os na ferramenta que você vai usar em produção e não dependa de palavras-chave avançadas.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Ollama: saídas estruturadas](https://docs.ollama.com/capabilities/structured-outputs) — o campo `format`, exemplos de schema, dicas',
          '[llama.cpp: gramáticas e schemas JSON](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF, `-j`, subconjunto de JSON Schema compatível e lacunas conhecidas',
          '[LM Studio: saída estruturada](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format`, engines GGUF e MLX, ressalvas sobre modelos',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-ar.webp',
    title: 'ما هو أفضل نموذج لغوي محلي لإخراج JSON منظم وموثوق؟',
    seoTitle: 'نموذج لغوي محلي لإخراج JSON منظم | Prompt Bites',
    metaDescription:
      'كيف تحصل على JSON موثوق من نموذج لغوي محلي: فك التشفير المقيّد في Ollama وllama.cpp وLM Studio، مع حدوده ومتى يكفي الموجّه وحده.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يحتاجون إلى إخراج موثوق قابل للقراءة الآلية من نموذج محلي لأغراض التحليل اللاحق',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>يأتي إخراج JSON المنظم الموثوق من نموذج لغوي محلي بشكل أساسي من فك التشفير المقيّد بالقواعد النحوية على مستوى الاستدلال، وليس من تقنية الطلب (prompting) وحدها.</strong> تفرض الأدوات القائمة على القواعد النحوية أن تظل اختيارات الرموز (tokens) لدى النموذج صالحة مقابل مخطط (schema) في كل خطوة من خطوات التوليد.',
    toc: [
      { label: 'أفضل نهج: فك التشفير المقيّد', anchor: '#best-approach' },
      { label: 'لماذا يهم فك التشفير المقيّد', anchor: '#constrained-decoding' },
      { label: 'متى يكفي الطلب وحده', anchor: '#when-prompting-is-enough' },
      { label: 'كيفية تفعيل فك التشفير المقيّد', anchor: '#how-to-enable' },
      { label: 'أين لا يزال يفشل', anchor: '#limits' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'كيف أحصل على إخراج JSON موثوق من نموذج لغوي محلي؟',
        answer:
          'استخدم فك التشفير المقيّد بالقواعد النحوية بدلًا من الاعتماد على الطلب وحده. أدوات التشغيل المحلية التي تدعم التوليد المقيّد بالقواعد النحوية أو بمخطط JSON تحدّ من الرموز التي يُسمح للنموذج بتوليدها في كل خطوة، بحيث يكون الإخراج مضمونًا كـJSON صالح يطابق مخططك. ينطبق هذا فقط إذا كانت الأداة تدعم ميزات المخطط التي تستخدمها ولم يُقطع التوليد عند حد الرموز.',
        bullets: [
          'الطلب وحده ("أجب بصيغة JSON فقط") يقلل من الإخراج المشوّه لكنه لا يلغيه تمامًا.',
          'فك التشفير المقيّد بالقواعد النحوية يحصر اختيارات الرموز في JSON صالح فقط عند كل خطوة توليد.',
          'تدعم معظم أدوات التشغيل المحلية شكلًا ما من التوليد المقيّد بمخطط JSON، لذا يمكن لأي نموذج قوي إنتاج إخراج موثوق عند الجمع بينه وبين هذه التقنية.',
          'لا يفرض فك التشفير المقيّد صياغة صالحة إلا ما دامت الأداة تدعم ميزات المخطط التي تستخدمها ولم يُقطع التوليد عند حد الرموز.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'فك التشفير المقيّد بالقواعد النحوية، وليس الطلب وحده، هو ما يجعل إخراج JSON موثوقًا',
          'تدعم معظم أدوات التشغيل المحلية شكلًا ما من التوليد المقيّد بالمخطط',
          'يضمن فك التشفير المقيّد صحة الصياغة، لكنه لا يضمن أن قيم الحقول صحيحة من الناحية الدلالية',
          'يُقبل الاعتماد على الطلب وحده في الإخراج منخفض المخاطر الذي يراجعه إنسان، حيث يمكن تحمّل استجابة مشوّهة بين حين وآخر',
          'لا يصمد فك التشفير المقيّد إلا إذا اكتمل التوليد وكانت الأداة تدعم ميزات مخططك، لذا تحقق في الكود واحتفظ بمسار لإعادة المحاولة',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يعتمد إخراج JSON المنظم الموثوق من نموذج لغوي محلي على فك التشفير المقيّد بالقواعد النحوية على مستوى الاستدلال، وليس على تقنية الطلب وحدها.' },
          { type: 'plain-terms', text: 'بعبارة بسيطة: أن تطلب من النموذج بلطف إخراج JSON في الطلب أمر مفيد، لكن فرض ذلك على مستوى فك التشفير هو ما يضمن فعليًا إخراجًا صالحًا.' },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: 'أفضل نهج: فك التشفير المقيّد',
        content: [
          '<strong>استخدم فك التشفير المقيّد بالقواعد النحوية أو بالمخطط كلما كان الكود اللاحق سيحلّل إخراج النموذج تلقائيًا.</strong> يحصر هذا النهج اختيارات الرموز لدى النموذج في كل خطوة توليد بتلك التي تحافظ على صحة الصياغة مقابل مخططك المستهدف — فهو لا يعتمد على اختيار النموذج اتباع التعليمات بشكل صحيح، لذا يضمن صياغة سليمة بغض النظر عن حجم النموذج أو صياغة الطلب. ينطبق هذا فقط إذا كانت الأداة تدعم ميزات المخطط التي تستخدمها ولم يُقطع التوليد عند حد الرموز.',
          'الأنسب لخطوط الإنتاج: فك التشفير المقيّد بالمخطط عبر الدعم الأصلي للقواعد النحوية في أداة التشغيل لديك، مقترنًا بخطوة تحقق لاحقة تتحقق من الصحة الدلالية (وليس فقط الصياغية) قبل استخدام البيانات. الأنسب للسكربتات السريعة أو النماذج الأولية: الاعتماد على الطلب وحده مع مثال JSON واضح داخل الطلب، مع قبول إعادة المحاولة أحيانًا عند تشوّه الإخراج.',
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: 'لماذا يهم فك التشفير المقيّد',
        content: [
          'طلب استجابة النموذج بصيغة JSON فقط يقلل من معدل الإخراج المشوّه لكنه لا يلغيه، لأن النموذج ما زال قادرًا على توليد رمز غير صالح في أي خطوة — فاصلة زائدة، علامة اقتباس غير محمية، أو قوس إغلاق مبتور، كل ذلك يعطّل التحليل اللاحق. يحل فك التشفير المقيّد بالقواعد النحوية هذه المشكلة من جذورها، عبر حصر مجموعة الرموز التي يمكن للنموذج اختيار أحدها في كل خطوة على تلك التي تُبقي الإخراج صالحًا مقابل قواعد نحوية أو مخطط JSON، وهو ما يضمن إخراجًا سليم الصياغة بغض النظر عن حجم النموذج. ينطبق هذا فقط إذا كانت الأداة تدعم ميزات المخطط التي تستخدمها ولم يُقطع التوليد عند حد الرموز.',
          'يضمن فك التشفير المقيّد صحة الصياغة، وليس الصحة الدلالية — إذ ما زال بإمكان النموذج وضع قيمة خاطئة في حقل منسّق بشكل صحيح. اقرن دائمًا التوليد المقيّد بالمخطط بفحص لاحق يتحقق من أن قيم الحقول الفعلية منطقية لحالة استخدامك، وليس فقط أن JSON قابل للتحليل.',
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: 'متى يكفي الطلب وحده',
        content: [
          'تجاوز فك التشفير المقيّد عندما يراجع إنسان كل إخراج قبل استخدامه، إذ يمكن اكتشاف استجابة مشوّهة أحيانًا وإعادة توليدها ببساطة. تجاوزه أيضًا في النماذج الأولية السريعة عندما لا تدعم بنية التشغيل لديك بعد قيود القواعد النحوية ولا يستحق بناء هذه البنية التحتية وقت الإعداد من أجل سكربت مؤقت.',
          'انتقل إلى فك التشفير المقيّد إذا كانت معدلات الإخراج المشوّه الناتجة عن الاعتماد على الطلب وحده تتسبب في أعطال خط الأنابيب (pipeline)، أو إذا كان الإخراج يغذّي مباشرة نظامًا آليًا دون أي مراجعة بشرية لالتقاط أخطاء التحليل.',
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: 'كيفية تفعيل فك التشفير المقيّد في Ollama وllama.cpp وLM Studio',
        content: [
          '<strong>تتيح بيئات التشغيل المحلية الثلاث الشائعة جميعها فك التشفير المقيّد عبر معامل مخطط JSON، لذلك نادرًا ما تحتاج إلى كتابة قواعد نحوية يدويًا.</strong> مرّر المخطط في الطلب، وصِف الحقول المتوقعة في الموجّه أيضًا، وتحقق من النتيجة المحلَّلة في كودك الخاص.',
        ],
        items: [
          '**Ollama:** اضبط الحقل `format` في طلب API على مخطط JSON (أو على `"json"` لأي JSON). وتوصي وثائق Ollama أيضًا بتمرير المخطط كنص داخل الموجّه وخفض درجة الحرارة، مثلًا إلى 0. وكانت النماذج المستضافة سحابيًا مدرجة على أنها غير مدعومة عند آخر تحديث، فراجع الوثائق إن كنت تستخدمها.',
          '**llama.cpp:** استخدم `-j` مع مخطط في سطر الأوامر (أو `--grammar` / `--grammar-file` لقواعد GBNF مكتوبة يدويًا)؛ ويقبل `llama-server` الحقل `json_schema` في نقاط الإكمال و`response_format` في `/chat/completions`. المخطط يقيّد الإخراج فقط ولا يُضاف إلى الموجّه، لذا صِف البنية في الموجّه أيضًا. يُدعم جزء فقط من JSON Schema وقد تُتجاهل الميزات غير المدعومة بصمت، لذا افحص القواعد النحوية المولَّدة.',
          '**LM Studio:** أرسل `response_format` مع `type` يساوي `json_schema` وكائن `json_schema` (يحوي `name` و`schema`) إلى نقطة `/v1/chat/completions` المتوافقة مع OpenAI. تستخدم نماذج GGUF أخذ العينات المعتمد على القواعد النحوية في llama.cpp، وتستخدم نماذج MLX مكتبة Outlines. وتنبّه LM Studio إلى أن ليست كل النماذج قادرة على الإخراج المنظَّم، خصوصًا النماذج التي تقل عن 7B معامل.',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: 'أين لا يزال فك التشفير المقيّد يفشل',
        content: [
          '<strong>يفرض فك التشفير المقيّد البنية، لا الاكتمال ولا الصحة.</strong> ثلاثة حدود عملية: (1) قد ينتهي الرد المقطوع عند حد الرموز في منتصف البنية، لذا اضبط حدًا سخيًا للإخراج وتأكد من أن الرد يُحلَّل بالكامل. (2) تدعم الأدوات جزءًا فقط من JSON Schema — فمثلًا تذكر llama.cpp ثغرات في `$ref` المتداخلة و`patternProperties` وحدود الأعداد غير الصحيحة، وتتجاهل الميزات غير المدعومة بصمت — لذا اختبر مخططك وبسّطه عند الحاجة. (3) قد تملأ النماذج الصغيرة الحقول بقيم رديئة، وتحذّر LM Studio من أن النماذج التي تقل عن 7B معامل قد لا تتعامل جيدًا مع الإخراج المنظَّم؛ لذا تحقق من القيم في الكود واحتفظ بمسار لإعادة المحاولة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يبطئ فك التشفير المقيّد عملية التوليد؟',
            a: 'يضيف عبئًا صغيرًا لكل رمز للتحقق من صحة القواعد النحوية، لكن هذا العبء يكون عمومًا طفيفًا مقارنة بالمكسب في الموثوقية. تعتمد التكلفة الدقيقة على أداة التشغيل ومدى تعقيد القواعد النحوية.',
          },
          {
            q: 'هل يضمن فك التشفير المقيّد أن قيم JSON صحيحة، وليس فقط أن الصياغة صحيحة؟',
            a: 'لا — يضمن فك التشفير المقيّد فقط أن الإخراج يُحلَّل كـJSON صالح يطابق بنية مخططك. لا يضمن أن قيم الحقول نفسها صحيحة واقعيًا أو دلاليًا. أضف دائمًا خطوة تحقق منفصلة لصحة القيم.',
          },
          {
            q: 'هل أحتاج إلى نموذج معين لاستخدام فك التشفير المقيّد، أم يعمل مع أي نموذج محلي؟',
            a: 'فك التشفير المقيّد خاصية في أداة التشغيل وليست في النموذج — فهو يعمل عمليًا مع أي نموذج محلي تقريبًا، لأنه يعمل عبر تقييد الرموز المؤهلة في كل خطوة، بغض النظر عن أي نموذج ولّد الاحتمالات الأساسية.',
          },
          {
            q: 'هل يمكنني تعريف مخطط متداخل أو معقّد للتوليد المقيّد؟',
            a: 'نعم — تدعم معظم تطبيقات فك التشفير المقيّد القائمة على القواعد النحوية الكائنات المتداخلة والمصفوفات والحقول المحددة النوع، مع أن المخططات شديدة التداخل أو الشرطية بشكل كبير قد تحتاج إلى تبسيط لضمان تجميع موثوق للقواعد النحوية، حسب الأداة المستخدمة تحديدًا.',
          },
          {
            q: 'كيف أطلب إخراجًا وفق مخطط JSON في Ollama؟',
            a: 'اضبط الحقل `format` في طلب الدردشة أو التوليد على مخطط JSON الخاص بك (أو على `"json"` لأي JSON صالح)، وصِف الحقول أيضًا في الموجّه، وفكّر في درجة حرارة منخفضة مثل 0. حلّل الرد وتحقق منه في كودك الخاص، مثلًا بمخطط Pydantic أو Zod كما تُظهر وثائق Ollama.',
          },
          {
            q: 'هل يعمل المخطط نفسه في Ollama وllama.cpp وLM Studio؟',
            a: 'غالبًا، لكن ليس دائمًا. تحوّل كل أداة JSON Schema إلى قواعد نحوية خاصة بها وتدعم جزءًا منه، وتتجاهل llama.cpp الميزات غير المدعومة بصمت. أبقِ المخططات بسيطة (كائنات مسطّحة ومصفوفات وقوائم قيم وحقول محددة النوع)، واختبرها على الأداة التي ستنشر بها، ولا تعتمد على كلمات مفتاحية متقدمة.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Ollama: المخرجات المنظَّمة](https://docs.ollama.com/capabilities/structured-outputs) — الحقل `format` وأمثلة المخططات ونصائح',
          '[llama.cpp: القواعد النحوية ومخططات JSON](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF و`-j` والجزء المدعوم من JSON Schema والثغرات المعروفة',
          '[LM Studio: الإخراج المنظَّم](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format` ومحركا GGUF وMLX وتنبيهات النماذج',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Technique & Concept Explainers',
    heroImage: '/images/best-structured-json-output-local-llm-overview-hero-ko.webp',
    title: '신뢰할 수 있는 구조화된 JSON 출력에 가장 좋은 로컬 LLM은?',
    seoTitle: 'JSON 출력에 적합한 로컬 LLM | Prompt Bites',
    metaDescription:
      '로컬 LLM에서 안정적인 JSON을 얻는 방법: Ollama, llama.cpp, LM Studio의 제약 디코딩과 그 한계, 프롬프트만으로 충분한 경우를 설명합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-20',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '후속 파싱을 위해 로컬 모델에서 신뢰할 수 있는 기계 판독 가능한 출력이 필요한 개발자',
    siblingBites: ['gguf-vs-gptq-vs-awq', 'best-local-llm-for-sql-data-analysis', 'best-local-llm-customer-support-chatbot'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>로컬 LLM에서 신뢰할 수 있는 구조화된 JSON 출력을 얻으려면 프롬프트 기법만으로는 부족하며, 주로 추론 계층에서의 문법 제약 디코딩이 필요합니다.</strong> 문법 기반 도구는 생성의 매 단계에서 모델의 토큰 선택이 스키마에 대해 항상 유효하도록 강제합니다.',
    toc: [
      { label: '최선의 방법: 제약 디코딩', anchor: '#best-approach' },
      { label: '제약 디코딩이 중요한 이유', anchor: '#constrained-decoding' },
      { label: '프롬프트만으로 충분한 경우', anchor: '#when-prompting-is-enough' },
      { label: '제약 디코딩 활성화 방법', anchor: '#how-to-enable' },
      { label: '여전히 실패하는 경우', anchor: '#limits' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM에서 신뢰할 수 있는 JSON 출력을 얻으려면 어떻게 해야 합니까?',
        answer:
          '프롬프트에만 의존하지 말고 문법 제약 디코딩을 사용하십시오. 문법 또는 JSON 스키마 제약 생성을 지원하는 로컬 서빙 도구는 각 단계에서 모델이 생성할 수 있는 토큰을 제한하므로, 출력이 스키마에 맞는 유효한 JSON임이 보장됩니다. 이는 사용하는 스키마 기능을 도구가 지원하고 생성이 토큰 한도에서 잘리지 않는 경우에만 해당합니다.',
        bullets: [
          '프롬프트만("JSON으로만 응답하라")으로는 형식이 잘못된 출력을 줄일 수는 있지만 없애지는 못합니다.',
          '문법 제약 디코딩은 생성의 매 단계에서 토큰 선택을 유효한 JSON으로만 제한합니다.',
          '대부분의 로컬 서빙 도구는 어떤 형태로든 JSON 스키마 제약 생성을 지원하므로, 충분한 성능의 모델이라면 이를 결합해 신뢰할 수 있는 출력을 낼 수 있습니다.',
          '제약 디코딩이 유효한 구문을 강제하는 것은 사용하는 스키마 기능을 도구가 지원하고 생성이 토큰 한도에서 잘리지 않는 경우에 한합니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'JSON 출력을 신뢰할 수 있게 만드는 것은 프롬프트만이 아니라 문법 제약 디코딩입니다',
          '대부분의 로컬 서빙 도구는 어떤 형태로든 스키마 제약 생성을 지원합니다',
          '제약 디코딩은 유효한 구문을 보장하지만 의미적으로 올바른 필드 값까지 보장하지는 않습니다',
          '가끔 형식이 잘못된 응답을 감수할 수 있는, 사람이 검토하는 저위험 출력에서는 프롬프트만으로도 충분합니다',
          '제약 디코딩은 생성이 끝까지 완료되고 도구가 스키마 기능을 지원할 때만 성립하므로, 코드에서 검증하고 재시도 경로를 마련해 두어야 함',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '로컬 LLM에서 신뢰할 수 있는 구조화된 JSON 출력은 프롬프트 기법만이 아니라 추론 계층에서의 문법 제약 디코딩에 달려 있습니다.' },
          { type: 'plain-terms', text: '쉽게 말해, 프롬프트에서 JSON을 정중히 요청하는 것도 도움이 되지만, 실제로 유효한 출력을 보장하는 것은 디코딩 단계에서의 강제입니다.' },
        ],
      },
      bestApproach: {
        id: 'best-approach',
        title: '최선의 방법: 제약 디코딩',
        content: [
          '<strong>후속 코드가 모델의 출력을 자동으로 파싱할 예정이라면 항상 문법 또는 스키마 제약 디코딩을 사용하십시오.</strong> 이 방식은 생성의 매 단계에서 모델의 토큰 선택을 대상 스키마에 대해 구문적으로 유효한 것만으로 제한합니다 — 모델이 지시를 올바르게 따르기를 기대하지 않으므로, 모델 크기나 프롬프트 표현과 무관하게 형식이 올바른 구문을 보장합니다. 이는 사용하는 스키마 기능을 도구가 지원하고 생성이 토큰 한도에서 잘리지 않는 경우에만 해당합니다.',
          '프로덕션 파이프라인에는 서빙 도구의 네이티브 문법 지원을 통한 스키마 제약 디코딩을, 데이터가 사용되기 전에 (구문뿐 아니라) 의미적 정확성을 확인하는 후속 검증 단계와 결합하는 것이 가장 좋습니다. 빠른 스크립트나 프로토타이핑에는 프롬프트에 명확한 JSON 예시를 포함한 프롬프트만 사용하는 방식이 가장 좋으며, 출력 형식이 잘못될 경우 가끔 재시도하는 것을 감수합니다.',
        ],
      },
      constrainedDecoding: {
        id: 'constrained-decoding',
        title: '제약 디코딩이 중요한 이유',
        content: [
          '모델에게 JSON으로만 응답하라고 요청하면 형식 오류 출력의 비율은 줄어들지만 사라지지는 않습니다. 모델은 여전히 어느 단계에서든 유효하지 않은 토큰을 생성할 수 있기 때문입니다 — 불필요한 쉼표, 이스케이프되지 않은 따옴표, 잘린 닫는 중괄호는 모두 후속 파싱을 깨뜨립니다. 문법 제약 디코딩은 이 문제를 근본적으로 해결합니다. 매 단계에서 모델이 샘플링할 수 있는 토큰 집합을 JSON 문법이나 스키마에 대해 출력을 유효하게 유지하는 것만으로 제한함으로써, 모델 크기와 무관하게 형식이 올바른 출력을 보장합니다. 이는 사용하는 스키마 기능을 도구가 지원하고 생성이 토큰 한도에서 잘리지 않는 경우에만 해당합니다.',
          '제약 디코딩은 구문적 유효성을 보장하지만 의미적 정확성은 보장하지 않습니다 — 모델은 여전히 형식이 올바른 필드에 잘못된 값을 넣을 수 있습니다. 스키마 제약 생성은 항상 JSON이 파싱되는지 여부만이 아니라 실제 필드 값이 사용 목적에 맞게 타당한지를 검증하는 후속 점검과 함께 사용하십시오.',
        ],
      },
      whenPromptingIsEnough: {
        id: 'when-prompting-is-enough',
        title: '프롬프트만으로 충분한 경우',
        content: [
          '사람이 사용 전에 모든 출력을 검토하는 경우에는 제약 디코딩을 생략해도 됩니다. 가끔 형식이 잘못된 응답은 발견되어 간단히 다시 생성하면 되기 때문입니다. 서빙 스택이 아직 문법 제약을 지원하지 않고, 일회성 스크립트를 위해 그 인프라를 구축하는 것이 시간 투자만큼의 가치가 없는 빠른 프로토타이핑에서도 생략할 수 있습니다.',
          '프롬프트만 사용했을 때의 형식 오류 비율이 파이프라인 장애를 일으키고 있거나, 출력이 파싱 오류를 잡아낼 사람의 검토 없이 자동화 시스템으로 바로 흘러 들어가는 경우에는 제약 디코딩으로 전환하십시오.',
        ],
      },
      howToEnable: {
        id: 'how-to-enable',
        title: 'Ollama, llama.cpp, LM Studio에서 제약 디코딩을 활성화하는 방법',
        content: [
          '<strong>일반적인 로컬 실행 환경 세 가지 모두 JSON 스키마 매개변수로 제약 디코딩을 제공하므로 문법을 직접 작성할 일은 거의 없습니다.</strong> 요청에 스키마를 전달하고, 기대하는 필드는 프롬프트에서도 설명하며, 파싱한 결과는 직접 작성한 코드에서 검증하십시오.',
        ],
        items: [
          '**Ollama:** API 요청의 `format` 필드에 JSON 스키마를 설정합니다(임의의 JSON이면 `"json"`). Ollama 문서는 스키마를 프롬프트에도 텍스트로 전달하고 온도를 0 등으로 낮출 것을 권장합니다. 클라우드 호스팅 모델은 마지막 업데이트 시점에 지원되지 않는 것으로 기재되어 있었으므로, 사용하는 경우 문서를 확인하십시오.',
          '**llama.cpp:** 명령줄에서는 `-j`에 스키마를 전달합니다(직접 작성한 GBNF 문법이면 `--grammar` 또는 `--grammar-file`). `llama-server`는 완성 엔드포인트에서 `json_schema`를, `/chat/completions`에서 `response_format`을 받습니다. 스키마는 출력만 제약하며 프롬프트에 추가되지 않으므로 구조를 프롬프트에서도 설명하십시오. JSON Schema의 일부만 지원되며 지원되지 않는 기능은 조용히 건너뛸 수 있으므로 생성된 문법을 확인하십시오.',
          '**LM Studio:** OpenAI 호환 `/v1/chat/completions` 엔드포인트에 `type`을 `json_schema`로 한 `response_format`과 `json_schema` 객체(`name`과 `schema` 포함)를 보냅니다. GGUF 모델은 llama.cpp의 문법 기반 샘플링을, MLX 모델은 Outlines를 사용합니다. LM Studio는 특히 7B 미만 파라미터 모델처럼 모든 모델이 구조화 출력을 처리할 수 있는 것은 아니라고 안내합니다.',
        ],
        codeBlock: 'curl http://localhost:11434/api/chat -d \'{\n  "model": "<model-name>",\n  "messages": [{ "role": "user", "content": "Describe Canada as JSON." }],\n  "stream": false,\n  "format": {\n    "type": "object",\n    "properties": {\n      "name": { "type": "string" },\n      "capital": { "type": "string" },\n      "languages": { "type": "array", "items": { "type": "string" } }\n    },\n    "required": ["name", "capital", "languages"]\n  },\n  "options": { "temperature": 0 }\n}\'',
        codeLanguage: 'bash',
      },
      limits: {
        id: 'limits',
        title: '제약 디코딩이 여전히 실패하는 경우',
        content: [
          '<strong>제약 디코딩이 강제하는 것은 구조이며, 완전성이나 정확성이 아닙니다.</strong> 실무상 한계는 세 가지입니다. (1) 토큰 한도에서 잘린 응답은 구조 중간에 끝날 수 있으므로, 출력 한도를 넉넉하게 설정하고 응답이 끝까지 파싱되는지 확인하십시오. (2) 도구가 지원하는 것은 JSON Schema의 일부입니다. 예를 들어 llama.cpp는 중첩된 `$ref`, `patternProperties`, 정수가 아닌 숫자의 범위 지정 등에 공백이 있다고 밝히며, 지원되지 않는 기능은 조용히 건너뜁니다. 스키마를 테스트하고 필요하면 단순화하십시오. (3) 작은 모델은 여전히 필드에 품질이 낮은 값을 채울 수 있으며, LM Studio는 7B 미만 모델이 구조화 출력을 잘 처리하지 못할 수 있다고 경고합니다. 값은 코드에서 검증하고 재시도 경로를 유지하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '제약 디코딩은 생성 속도를 늦춥니까?',
            a: '문법 유효성을 확인하기 위해 토큰당 약간의 오버헤드가 추가되지만, 이 오버헤드는 얻는 신뢰성 향상에 비해 대체로 미미합니다. 정확한 비용은 서빙 도구와 문법의 복잡도에 따라 달라집니다.',
          },
          {
            q: '제약 디코딩은 구문만이 아니라 JSON 값 자체가 올바른 것도 보장합니까?',
            a: '아닙니다 — 제약 디코딩은 출력이 스키마 구조와 일치하는 유효한 JSON으로 파싱된다는 것만 보장합니다. 필드 값 자체가 사실적으로나 의미적으로 올바른지는 보장하지 않습니다. 값의 정확성을 위해서는 항상 별도의 검증 단계를 추가하십시오.',
          },
          {
            q: '제약 디코딩을 사용하려면 특정 모델이 필요합니까, 아니면 어떤 로컬 모델과도 작동합니까?',
            a: '제약 디코딩은 모델이 아니라 서빙 도구의 속성입니다 — 기본 확률을 생성한 모델이 무엇이든 관계없이 매 단계에서 어떤 토큰이 허용되는지를 제한하는 방식으로 동작하므로, 사실상 어떤 로컬 모델과도 함께 작동합니다.',
          },
          {
            q: '제약 생성에 중첩되거나 복잡한 스키마를 정의할 수 있습니까?',
            a: '예 — 대부분의 문법 기반 제약 디코딩 구현은 중첩된 객체, 배열, 타입이 지정된 필드를 지원합니다. 다만 매우 깊게 중첩되었거나 조건이 많은 스키마는 사용하는 도구에 따라 안정적인 문법 컴파일을 위해 단순화가 필요할 수 있습니다.',
          },
          {
            q: 'Ollama에서 JSON 스키마에 맞는 출력을 요청하려면 어떻게 합니까?',
            a: '채팅 또는 생성 요청의 `format` 필드에 JSON 스키마(임의의 유효한 JSON이면 `"json"`)를 설정하고, 필드 설명도 프롬프트에 포함하며, 0 같은 낮은 온도를 고려하십시오. 응답은 직접 작성한 코드에서 파싱하고 검증하십시오. Ollama 문서처럼 Pydantic 또는 Zod 스키마를 사용하는 방법이 있습니다.',
          },
          {
            q: '같은 스키마가 Ollama, llama.cpp, LM Studio에서 모두 동작합니까?',
            a: '대체로 그렇지만 항상 그런 것은 아닙니다. 각 도구는 JSON Schema를 자체 문법으로 변환하고 일부만 지원하며, llama.cpp는 지원되지 않는 기능을 조용히 건너뜁니다. 스키마는 단순하게 유지하고(평면 객체, 배열, 열거형, 타입 필드), 실제로 배포할 도구에서 테스트하며, 고급 키워드에 의존하지 마십시오.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Ollama: 구조화 출력](https://docs.ollama.com/capabilities/structured-outputs) — `format` 필드, 스키마 예시, 팁',
          '[llama.cpp: 문법과 JSON 스키마](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md) — GBNF, `-j`, 지원되는 JSON Schema 범위와 알려진 공백',
          '[LM Studio: 구조화 출력](https://lmstudio.ai/docs/developer/openai-compat/structured-output) — `response_format`, GGUF와 MLX 엔진, 모델 관련 주의',
        ],
      },
    },
  },
}
