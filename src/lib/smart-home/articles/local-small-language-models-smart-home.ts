import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-en.png',
    title: 'Small Language Models for Smart Home Control (2027)',
    seoTitle: 'Small Language Models for Smart Home (2027)',
    intro:
      'Small language models — roughly 1B to 4B parameters — are the practical choice for smart home voice and automation control, not because they are less capable in general but because they run fast enough on modest local hardware and specialize well at the narrow task of turning a spoken command into a device action. This article explains why smart home control favors small over large models, the architecture trade-offs involved, and how this differs from a model-picks shortlist already on this site.',
    metaDescription:
      'Why smart home voice and automation control favors small language models over large general-purpose LLMs — latency, on-device feasibility, and function-calling trade-offs.',
    twitterDescription:
      'Small language models for smart home control: why 1-4B parameter models beat large LLMs for latency and on-device feasibility.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners and Home Assistant users evaluating which model size to run for local voice/automation control',
    primaryTerm: 'small language models smart home',
    targetKeywords: [
      'small language models smart home',
      'slm home assistant control',
      'small llm voice assistant local',
      'function calling model smart home',
      'local model size home automation',
    ],
    leadAnswerBlock:
      '**Smart home voice and automation control favors small language models (roughly 1B–4B parameters) over large general-purpose LLMs because the task is narrow — parse a command, call the right function — and small models handle it with far lower latency on modest local hardware.** A larger model isn\'t wasted, it\'s simply unnecessary overhead for this specific job.',
    quickAnswerTop: {
      en: {
        question: 'Why do smart homes use small language models instead of large ones?',
        answer:
          'Smart home control is a narrow task — interpreting a spoken or typed command and mapping it to a specific device action — which small, fast, function-calling models handle well without needing the broad general knowledge a large model carries. Running a small model locally means lower latency (the light turns on faster) and lower hardware requirements (a mini PC\'s integrated GPU is enough, rather than needing a discrete GPU). For open-ended questions or complex reasoning, a smart home setup can still route to a larger model — the small model handles the common, latency-sensitive case.',
        bullets: [
          'Task is narrow: parse command → call device function, not open-ended reasoning',
          'Small models (roughly 1B-4B parameters) run with much lower latency on modest hardware',
          'A capable integrated GPU/NPU is enough — no discrete GPU required for this specific task',
          'Larger models remain useful for open-ended questions, routed to separately if needed',
          'See the model-picks shortlist for specific current model recommendations',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Small Beats Large Here', anchor: 'why-small' },
      { label: 'Function Calling Is the Key Capability', anchor: 'function-calling' },
      { label: 'Where Small Models Fall Short', anchor: 'limits' },
      { label: 'How This Differs From the Model-Picks Guide', anchor: 'differs' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Small language models (roughly 1B–4B parameters) handle smart home command parsing and function calling with lower latency than large general-purpose LLMs, which matters more for this narrow task than broad knowledge does.' },
      { type: 'plain-terms', content: 'A big AI model is like a generalist who knows a lot about everything but takes longer to answer. A small model is like a specialist trained for one job — turning "turn off the lights" into the actual command your smart home understands. For that one job, the specialist is faster and needs less powerful hardware, even though the generalist would win at answering a broad trivia question.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Smart home control is a narrow task (parse command → call function), which small models handle well',
          'Small models (roughly 1B–4B parameters) run with lower latency on modest local hardware — a capable iGPU/NPU is enough',
          'Function-calling accuracy matters more than general knowledge breadth for this specific job',
          'Larger models remain useful for open-ended questions — a setup can route to one separately if needed',
          'For specific current model recommendations, see the best local LLM models for smart home control shortlist',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: 'Why Small Beats Large Here',
        content:
          '**Latency is the deciding factor for voice control — a smart home command needs to execute in close to real time, and a small model on local hardware responds faster than a large model would on the same hardware.**',
        items: [
          'A large model needs substantially more compute per token generated, which translates directly into slower responses on the same local hardware — noticeable as lag between speaking a command and the light actually turning on.',
          'Smart home commands are typically short and structured ("turn off the bedroom lights," "set the thermostat to 68"), which doesn\'t require the broader reasoning or knowledge base a large model provides.',
          'Running a small model locally also means lower hardware requirements — see the best hardware for a local smart home guide for what a small-model-capable box looks like versus what a larger-model box would need.',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: 'Function Calling Is the Key Capability',
        content:
          '**The capability that actually matters for smart home control is reliable function calling — turning natural language into a correctly-structured call to a specific Home Assistant service, not general conversational ability.**',
        items: [
          'A model fine-tuned or specifically capable at function calling can map "make the living room warmer" to the correct climate-control service call reliably, which is a narrower and more measurable skill than open-ended chat quality.',
          'This is also where hallucination risk shows up specifically for smart homes — see the reducing LLM hallucinations in home automation guide for how to constrain a model to the actual available entities.',
          'Evaluate a candidate model on function-calling accuracy for your specific entity list, not on general benchmark scores, when choosing between small models.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'Where Small Models Fall Short',
        content:
          '**Small models are the right choice for structured command parsing, not for open-ended questions, complex multi-step reasoning, or tasks requiring broad world knowledge.**',
        items: [
          'If you want your smart home assistant to also answer general questions well, a hybrid setup that routes command-like input to a small model and open-ended questions to a larger model (local or otherwise) is a common pattern.',
          'Small models are more prone to misinterpreting ambiguous phrasing than larger models — clear, consistent command phrasing and well-scoped entity names reduce this risk more than upgrading model size does.',
          'For automations beyond simple command parsing — reasoning across multiple sensors, deciding whether an unusual pattern warrants a notification — a larger model may genuinely be worth the added latency, depending on how time-sensitive the automation is.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'How This Differs From the Model-Picks Guide',
        content:
          '**This article explains why small models are the right architecture choice for smart home control; the model-picks shortlist recommends specific current models to run.**',
        items: [
          'Read this article first if you want to understand the reasoning behind the small-model recommendation.',
          'Go to the best local LLM models for smart home control guide for specific, currently-recommended models and their hardware requirements.',
          'For mobile-device-specific small language model options (a different hardware context), see the cross-cluster guide on mobile LLM models.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is a small language model less accurate than a large one for smart home control?', a: 'Not necessarily for this specific task — function-calling accuracy for structured commands depends more on how well a model is suited to that narrow task than on overall parameter count. A large general-purpose model isn\'t automatically better at parsing "turn off the lights" than a small model tuned for it.' },
          { q: 'What size counts as a "small" language model here?', a: 'Roughly 1B to 4B parameters is the practical range discussed in this article — small enough to run responsively on a mini PC\'s integrated GPU or NPU, without needing a discrete GPU.' },
          { q: 'Can I run a small model on a Raspberry Pi?', a: 'Very small models can run on a Pi, though slowly — see the best hardware for a local smart home guide for the trade-offs between a Pi and a mini PC for this workload.' },
          { q: 'Do I need a different model for open-ended questions vs. commands?', a: 'Many setups route the two differently — a small model handles command parsing quickly, while open-ended questions can go to a larger local or cloud model if you want broader conversational ability. This is an architecture choice, not a requirement.' },
          { q: 'How does this relate to reducing hallucinations in home automation?', a: 'A smaller, well-scoped model that only needs to map commands to a known entity list is inherently less prone to inventing devices or misreading state than a general-purpose model asked to reason more broadly — see the hallucination-reduction guide for the specific techniques.' },
          { q: 'Which specific small models should I use?', a: 'See the best local LLM models for smart home control guide for current, specific recommendations — this article covers the reasoning behind the size choice, not a model list.' },
          { q: 'Does a small model need less RAM?', a: 'Yes — smaller parameter counts translate directly into lower memory requirements, which is part of why they run well on a mini PC\'s integrated hardware rather than requiring a discrete GPU.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — specific current model picks',
          '[Reducing LLM Hallucinations in Home Automation](/smart-home/reducing-llm-hallucinations-home-automation) — constraining models to avoid errors',
          '[Run Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full local-LLM stack',
          '[Mobile LLM Models: Phi, Gemma, SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — cross-cluster: small language models on mobile hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Small Language Models for Smart Home Control (2027)',
      description: 'Why smart home voice and automation control favors small language models over large general-purpose LLMs.',
      url: 'https://www.promptquorum.com/smart-home/local-small-language-models-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Small language models' }, { '@type': 'Thing', name: 'Function calling' }, { '@type': 'Thing', name: 'Home automation AI' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is a small language model less accurate than a large one for smart home control?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily — function-calling accuracy for structured commands depends more on task-fit than overall parameter count.' } },
        { '@type': 'Question', name: 'What size counts as a "small" language model here?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 1B to 4B parameters — small enough to run responsively on a mini PC\'s integrated GPU or NPU.' } },
        { '@type': 'Question', name: 'Which specific small models should I use?', acceptedAnswer: { '@type': 'Answer', text: 'See the best local LLM models for smart home control guide for current, specific recommendations.' } },
        { '@type': 'Question', name: 'Does a small model need less RAM?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — smaller parameter counts translate directly into lower memory requirements.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-de.png',
    title: 'Kleine Sprachmodelle für die Smart-Home-Steuerung (2027)',
    seoTitle: 'Kleine Sprachmodelle für Smart Home (2027)',
    intro:
      'Kleine Sprachmodelle — etwa 1 bis 4 Milliarden Parameter — sind die praktische Wahl für die Sprach- und Automatisierungssteuerung im Smart Home, nicht weil sie generell weniger leistungsfähig sind, sondern weil sie auf bescheidener lokaler Hardware schnell genug laufen und sich gut auf die enge Aufgabe spezialisieren lassen, einen gesprochenen Befehl in eine Geräteaktion umzuwandeln. Dieser Artikel erklärt, warum die Smart-Home-Steuerung kleine gegenüber großen Modellen bevorzugt, welche Architektur-Kompromisse dabei eine Rolle spielen, und wie sich das von einer bereits auf dieser Website vorhandenen Model-Picks-Kurzliste unterscheidet.',
    metaDescription:
      'Warum die Sprach- und Automatisierungssteuerung im Smart Home kleine Sprachmodelle gegenüber großen, universell einsetzbaren LLMs bevorzugt — Latenz, Machbarkeit auf dem Gerät und Function-Calling-Kompromisse.',
    twitterDescription:
      'Kleine Sprachmodelle für die Smart-Home-Steuerung: Warum Modelle mit 1-4 Milliarden Parametern große LLMs bei Latenz und On-Device-Machbarkeit schlagen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Smart-Home-Besitzer und Home-Assistant-Nutzer, die abwägen, welche Modellgröße sie für die lokale Sprach-/Automatisierungssteuerung einsetzen sollen',
    primaryTerm: 'kleine sprachmodelle smart home',
    targetKeywords: [
      'kleine sprachmodelle smart home',
      'slm home assistant steuerung',
      'kleines llm sprachassistent lokal',
      'function calling modell smart home',
      'lokale modellgroesse hausautomation',
    ],
    leadAnswerBlock:
      '**Die Sprach- und Automatisierungssteuerung im Smart Home bevorzugt kleine Sprachmodelle (etwa 1-4 Milliarden Parameter) gegenüber großen, universell einsetzbaren LLMs, weil die Aufgabe eng begrenzt ist — einen Befehl parsen, die richtige Funktion aufrufen — und kleine Modelle das mit deutlich geringerer Latenz auf bescheidener lokaler Hardware bewältigen.** Ein größeres Modell ist nicht verschwendet, es ist für diese spezifische Aufgabe schlicht unnötiger Overhead.',
    quickAnswerTop: {
      de: {
        question: 'Warum nutzen Smart Homes kleine statt großer Sprachmodelle?',
        answer:
          'Die Smart-Home-Steuerung ist eine eng begrenzte Aufgabe — einen gesprochenen oder getippten Befehl interpretieren und ihn einer bestimmten Geräteaktion zuordnen —, die kleine, schnelle, Function-Calling-fähige Modelle gut bewältigen, ohne das breite Allgemeinwissen zu benötigen, das ein großes Modell mitbringt. Ein kleines Modell lokal auszuführen bedeutet geringere Latenz (das Licht geht schneller an) und geringere Hardware-Anforderungen (die integrierte GPU eines Mini-PCs reicht aus, statt eine dedizierte GPU zu benötigen). Für offene Fragen oder komplexes Schlussfolgern kann ein Smart-Home-Setup weiterhin an ein größeres Modell weiterleiten — das kleine Modell übernimmt den häufigen, latenzsensitiven Fall.',
        bullets: [
          'Die Aufgabe ist eng begrenzt: Befehl parsen → Gerätefunktion aufrufen, kein offenes Schlussfolgern',
          'Kleine Modelle (etwa 1-4 Milliarden Parameter) laufen mit deutlich geringerer Latenz auf bescheidener Hardware',
          'Eine leistungsfähige integrierte GPU/NPU reicht aus — für diese spezifische Aufgabe ist keine dedizierte GPU nötig',
          'Größere Modelle bleiben für offene Fragen nützlich und werden bei Bedarf separat angesteuert',
          'Konkrete aktuelle Modellempfehlungen findest du in der Model-Picks-Kurzliste',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Warum klein hier gewinnt', anchor: 'why-small' },
      { label: 'Function Calling ist die Schlüsselfähigkeit', anchor: 'function-calling' },
      { label: 'Wo kleine Modelle an ihre Grenzen stoßen', anchor: 'limits' },
      { label: 'Wie sich das vom Model-Picks-Leitfaden unterscheidet', anchor: 'differs' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Kleine Sprachmodelle (etwa 1-4 Milliarden Parameter) übernehmen das Parsen von Smart-Home-Befehlen und Function Calling mit geringerer Latenz als große, universell einsetzbare LLMs, was für diese eng begrenzte Aufgabe mehr zählt als breites Wissen.' },
      { type: 'plain-terms', content: 'Ein großes KI-Modell ist wie ein Generalist, der über vieles Bescheid weiß, aber länger für eine Antwort braucht. Ein kleines Modell ist wie ein Spezialist, der auf eine einzige Aufgabe trainiert ist — "mach das Licht aus" in den tatsächlichen Befehl umzuwandeln, den dein Smart Home versteht. Für genau diese eine Aufgabe ist der Spezialist schneller und braucht weniger leistungsfähige Hardware, auch wenn der Generalist bei einer breiten Wissensfrage gewinnen würde.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Die Smart-Home-Steuerung ist eine eng begrenzte Aufgabe (Befehl parsen → Funktion aufrufen), die kleine Modelle gut bewältigen',
          'Kleine Modelle (etwa 1-4 Milliarden Parameter) laufen mit geringerer Latenz auf bescheidener lokaler Hardware — eine leistungsfähige iGPU/NPU reicht aus',
          'Function-Calling-Genauigkeit zählt für diese spezifische Aufgabe mehr als die Breite des Allgemeinwissens',
          'Größere Modelle bleiben für offene Fragen nützlich — ein Setup kann bei Bedarf separat dorthin weiterleiten',
          'Konkrete aktuelle Modellempfehlungen findest du in der Kurzliste der besten lokalen LLM-Modelle für die Smart-Home-Steuerung',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: 'Warum klein hier gewinnt',
        content:
          '**Latenz ist der entscheidende Faktor bei der Sprachsteuerung — ein Smart-Home-Befehl muss nahezu in Echtzeit ausgeführt werden, und ein kleines Modell auf lokaler Hardware antwortet schneller, als ein großes Modell auf derselben Hardware es könnte.**',
        items: [
          'Ein großes Modell benötigt deutlich mehr Rechenleistung pro erzeugtem Token, was sich auf derselben lokalen Hardware direkt in langsameren Antworten niederschlägt — spürbar als Verzögerung zwischen dem Aussprechen eines Befehls und dem tatsächlichen Einschalten des Lichts.',
          'Smart-Home-Befehle sind typischerweise kurz und strukturiert ("Schlafzimmerlicht ausschalten", "Thermostat auf 20 Grad stellen"), was nicht das breitere Schlussfolgern oder die Wissensbasis erfordert, die ein großes Modell mitbringt.',
          'Ein kleines Modell lokal auszuführen bedeutet außerdem geringere Hardware-Anforderungen — siehe den Leitfaden zur besten Hardware für ein lokales Smart Home dazu, wie ein für kleine Modelle geeigneter Rechner im Vergleich zu einem für größere Modelle nötigen Rechner aussieht.',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: 'Function Calling ist die Schlüsselfähigkeit',
        content:
          '**Die Fähigkeit, die für die Smart-Home-Steuerung tatsächlich zählt, ist zuverlässiges Function Calling — natürliche Sprache in einen korrekt strukturierten Aufruf eines bestimmten Home-Assistant-Dienstes umzuwandeln, nicht allgemeine Konversationsfähigkeit.**',
        items: [
          'Ein Modell, das für Function Calling feinabgestimmt oder speziell geeignet ist, kann "mach es im Wohnzimmer wärmer" zuverlässig dem richtigen Klimasteuerungs-Dienstaufruf zuordnen — eine engere und messbarere Fähigkeit als offene Chat-Qualität.',
          'Genau hier zeigt sich auch das Halluzinationsrisiko speziell für Smart Homes — siehe den Leitfaden zur Reduzierung von LLM-Halluzinationen in der Hausautomation dafür, wie man ein Modell auf die tatsächlich verfügbaren Entitäten beschränkt.',
          'Bewerte ein Kandidatenmodell bei der Wahl zwischen kleinen Modellen anhand der Function-Calling-Genauigkeit für deine spezifische Entitätsliste, nicht anhand allgemeiner Benchmark-Werte.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'Wo kleine Modelle an ihre Grenzen stoßen',
        content:
          '**Kleine Modelle sind die richtige Wahl für strukturiertes Befehls-Parsing, nicht für offene Fragen, komplexes mehrstufiges Schlussfolgern oder Aufgaben, die breites Weltwissen erfordern.**',
        items: [
          'Wenn dein Smart-Home-Assistent auch allgemeine Fragen gut beantworten soll, ist ein Hybrid-Setup, das befehlsartige Eingaben an ein kleines Modell und offene Fragen an ein größeres Modell (lokal oder anderweitig) weiterleitet, ein gängiges Muster.',
          'Kleine Modelle neigen eher als größere dazu, mehrdeutige Formulierungen misszuverstehen — klare, konsistente Befehlsformulierungen und gut abgegrenzte Entitätsnamen reduzieren dieses Risiko wirksamer als eine größere Modellgröße.',
          'Für Automatisierungen jenseits des einfachen Befehls-Parsings — das Schlussfolgern über mehrere Sensoren hinweg, die Entscheidung, ob ein ungewöhnliches Muster eine Benachrichtigung rechtfertigt — kann ein größeres Modell die zusätzliche Latenz durchaus wert sein, je nachdem, wie zeitkritisch die Automatisierung ist.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'Wie sich das vom Model-Picks-Leitfaden unterscheidet',
        content:
          '**Dieser Artikel erklärt, warum kleine Modelle die richtige Architekturwahl für die Smart-Home-Steuerung sind; die Model-Picks-Kurzliste empfiehlt konkrete, aktuell einzusetzende Modelle.**',
        items: [
          'Lies diesen Artikel zuerst, wenn du die Überlegungen hinter der Empfehlung für kleine Modelle verstehen möchtest.',
          'Gehe zum Leitfaden über die besten lokalen LLM-Modelle für die Smart-Home-Steuerung für konkrete, aktuell empfohlene Modelle und ihre Hardware-Anforderungen.',
          'Für spezifische Optionen kleiner Sprachmodelle auf Mobilgeräten (ein anderer Hardware-Kontext) siehe den Cluster-übergreifenden Leitfaden zu mobilen LLM-Modellen.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist ein kleines Sprachmodell für die Smart-Home-Steuerung weniger genau als ein großes?', a: 'Nicht zwangsläufig für diese spezifische Aufgabe — die Function-Calling-Genauigkeit für strukturierte Befehle hängt stärker davon ab, wie gut ein Modell zu dieser eng begrenzten Aufgabe passt, als von der reinen Parameteranzahl. Ein großes universell einsetzbares Modell ist nicht automatisch besser darin, "mach das Licht aus" zu parsen, als ein kleines, dafür abgestimmtes Modell.' },
          { q: 'Welche Größe zählt hier als "kleines" Sprachmodell?', a: 'Etwa 1 bis 4 Milliarden Parameter ist der praktische Bereich, um den es in diesem Artikel geht — klein genug, um auf der integrierten GPU oder NPU eines Mini-PCs reaktionsschnell zu laufen, ohne eine dedizierte GPU zu benötigen.' },
          { q: 'Kann ich ein kleines Modell auf einem Raspberry Pi ausführen?', a: 'Sehr kleine Modelle können auf einem Pi laufen, wenn auch langsam — siehe den Leitfaden zur besten Hardware für ein lokales Smart Home für die Abwägungen zwischen einem Pi und einem Mini-PC für diese Aufgabe.' },
          { q: 'Brauche ich ein anderes Modell für offene Fragen als für Befehle?', a: 'Viele Setups leiten beides unterschiedlich weiter — ein kleines Modell übernimmt das Befehls-Parsing schnell, während offene Fragen an ein größeres lokales oder Cloud-Modell gehen können, wenn du breitere Konversationsfähigkeit möchtest. Das ist eine Architekturentscheidung, keine Pflicht.' },
          { q: 'Wie hängt das mit der Reduzierung von Halluzinationen in der Hausautomation zusammen?', a: 'Ein kleineres, gut abgegrenztes Modell, das Befehle nur einer bekannten Entitätsliste zuordnen muss, neigt von Natur aus weniger dazu, Geräte zu erfinden oder Zustände falsch zu lesen, als ein universell einsetzbares Modell, das breiter schlussfolgern soll — siehe den Leitfaden zur Halluzinationsreduzierung für die konkreten Techniken.' },
          { q: 'Welche konkreten kleinen Modelle sollte ich verwenden?', a: 'Siehe den Leitfaden über die besten lokalen LLM-Modelle für die Smart-Home-Steuerung für aktuelle, konkrete Empfehlungen — dieser Artikel behandelt die Überlegungen hinter der Größenwahl, keine Modellliste.' },
          { q: 'Braucht ein kleines Modell weniger RAM?', a: 'Ja — eine geringere Parameteranzahl übersetzt sich direkt in geringere Speicheranforderungen, was mit ein Grund dafür ist, dass sie gut auf der integrierten Hardware eines Mini-PCs laufen, statt eine dedizierte GPU zu benötigen.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Die besten lokalen LLM-Modelle für die Smart-Home-Steuerung](/de/smart-home/best-local-llm-models-smart-home) — konkrete aktuelle Modellempfehlungen',
          '[LLM-Halluzinationen in der Hausautomation reduzieren](/de/smart-home/reducing-llm-hallucinations-home-automation) — Modelle einschränken, um Fehler zu vermeiden',
          '[Dein Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) — der komplette lokale LLM-Stack',
          '[Mobile LLM-Modelle: Phi, Gemma, SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Cluster-übergreifend: kleine Sprachmodelle auf mobiler Hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Kleine Sprachmodelle für die Smart-Home-Steuerung (2027)',
      description: 'Warum die Sprach- und Automatisierungssteuerung im Smart Home kleine Sprachmodelle gegenüber großen, universell einsetzbaren LLMs bevorzugt.',
      url: 'https://www.promptquorum.com/de/smart-home/local-small-language-models-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Kleine Sprachmodelle' }, { '@type': 'Thing', name: 'Function Calling' }, { '@type': 'Thing', name: 'KI für Hausautomation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist ein kleines Sprachmodell für die Smart-Home-Steuerung weniger genau als ein großes?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht zwangsläufig — die Function-Calling-Genauigkeit für strukturierte Befehle hängt stärker von der Aufgabenpassung als von der reinen Parameteranzahl ab.' } },
        { '@type': 'Question', name: 'Welche Größe zählt hier als "kleines" Sprachmodell?', acceptedAnswer: { '@type': 'Answer', text: 'Etwa 1 bis 4 Milliarden Parameter — klein genug, um auf der integrierten GPU oder NPU eines Mini-PCs reaktionsschnell zu laufen.' } },
        { '@type': 'Question', name: 'Welche konkreten kleinen Modelle sollte ich verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Siehe den Leitfaden über die besten lokalen LLM-Modelle für die Smart-Home-Steuerung für aktuelle, konkrete Empfehlungen.' } },
        { '@type': 'Question', name: 'Braucht ein kleines Modell weniger RAM?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — eine geringere Parameteranzahl übersetzt sich direkt in geringere Speicheranforderungen.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-fr.png',
    title: 'Petits modèles de langage pour le contrôle de la maison connectée (2027)',
    seoTitle: 'Petits modèles de langage pour maison connectée (2027)',
    intro:
      "Les petits modèles de langage — environ 1 à 4 milliards de paramètres — sont le choix pratique pour le contrôle vocal et l'automatisation de la maison connectée, non pas parce qu'ils sont globalement moins capables, mais parce qu'ils tournent assez vite sur du matériel local modeste et se spécialisent bien dans la tâche étroite consistant à transformer une commande vocale en action sur un appareil. Cet article explique pourquoi le contrôle de la maison connectée privilégie les petits modèles par rapport aux grands, les compromis d'architecture impliqués, et en quoi cela diffère d'une liste de modèles recommandés déjà présente sur ce site.",
    metaDescription:
      "Pourquoi le contrôle vocal et l'automatisation de la maison connectée privilégient les petits modèles de langage par rapport aux grands LLM généralistes — latence, faisabilité sur l'appareil, et compromis liés à l'appel de fonctions.",
    twitterDescription:
      "Petits modèles de langage pour le contrôle de la maison connectée : pourquoi les modèles de 1 à 4 milliards de paramètres battent les grands LLM en latence et en faisabilité sur l'appareil.",
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    audience: "Propriétaires de maison connectée et utilisateurs de Home Assistant évaluant quelle taille de modèle utiliser pour le contrôle vocal/automatisation en local",
    primaryTerm: 'petits modeles de langage maison connectee',
    targetKeywords: [
      'petits modeles de langage maison connectee',
      'slm controle home assistant',
      'petit llm assistant vocal local',
      'modele function calling maison connectee',
      'taille modele local automatisation maison',
    ],
    leadAnswerBlock:
      "**Le contrôle vocal et l'automatisation de la maison connectée privilégient les petits modèles de langage (environ 1 à 4 milliards de paramètres) par rapport aux grands LLM généralistes, car la tâche est étroite — analyser une commande, appeler la bonne fonction — et les petits modèles la gèrent avec une latence bien plus faible sur du matériel local modeste.** Un modèle plus grand n'est pas gaspillé, il représente simplement une surcharge inutile pour cette tâche spécifique.",
    quickAnswerTop: {
      fr: {
        question: 'Pourquoi les maisons connectées utilisent-elles de petits modèles de langage plutôt que de grands ?',
        answer:
          "Le contrôle de la maison connectée est une tâche étroite — interpréter une commande parlée ou tapée et la faire correspondre à une action précise sur un appareil — que les petits modèles rapides et capables d'appel de fonctions gèrent bien, sans avoir besoin des vastes connaissances générales que porte un grand modèle. Exécuter un petit modèle en local signifie une latence plus faible (la lumière s'allume plus vite) et des exigences matérielles réduites (le GPU intégré d'un mini PC suffit, sans besoin d'un GPU dédié). Pour les questions ouvertes ou le raisonnement complexe, une configuration de maison connectée peut toujours router vers un modèle plus grand — le petit modèle gère le cas courant et sensible à la latence.",
        bullets: [
          "La tâche est étroite : analyser la commande → appeler la fonction de l'appareil, pas de raisonnement ouvert",
          "Les petits modèles (environ 1 à 4 milliards de paramètres) tournent avec une latence bien plus faible sur du matériel modeste",
          "Un GPU/NPU intégré capable suffit — aucun GPU dédié n'est requis pour cette tâche spécifique",
          "Les modèles plus grands restent utiles pour les questions ouvertes, routées séparément si besoin",
          "Consultez la liste de modèles recommandés pour des recommandations précises et actuelles",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Pourquoi le petit bat le grand ici', anchor: 'why-small' },
      { label: "L'appel de fonctions est la capacité clé", anchor: 'function-calling' },
      { label: 'Où les petits modèles montrent leurs limites', anchor: 'limits' },
      { label: 'En quoi cela diffère du guide de modèles recommandés', anchor: 'differs' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Les petits modèles de langage (environ 1 à 4 milliards de paramètres) gèrent l'analyse des commandes de maison connectée et l'appel de fonctions avec une latence plus faible que les grands LLM généralistes, ce qui compte davantage pour cette tâche étroite que des connaissances larges." },
      { type: 'plain-terms', content: "Un grand modèle d'IA est comme un généraliste qui en sait beaucoup sur tout mais met plus de temps à répondre. Un petit modèle est comme un spécialiste formé pour une seule tâche — transformer « éteins les lumières » en la commande réelle que comprend votre maison connectée. Pour cette tâche précise, le spécialiste est plus rapide et a besoin d'un matériel moins puissant, même si le généraliste gagnerait pour répondre à une vaste question de culture générale." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Le contrôle de la maison connectée est une tâche étroite (analyser la commande → appeler la fonction), que les petits modèles gèrent bien",
          "Les petits modèles (environ 1 à 4 milliards de paramètres) tournent avec une latence plus faible sur du matériel local modeste — un iGPU/NPU capable suffit",
          "La précision de l'appel de fonctions compte plus que l'étendue des connaissances générales pour cette tâche spécifique",
          "Les modèles plus grands restent utiles pour les questions ouvertes — une configuration peut y router séparément si besoin",
          "Pour des recommandations précises et actuelles, consultez la liste des meilleurs modèles LLM locaux pour le contrôle de la maison connectée",
        ],
      },
      whySmall: {
        id: 'why-small',
        title: 'Pourquoi le petit bat le grand ici',
        content:
          "**La latence est le facteur décisif pour le contrôle vocal — une commande de maison connectée doit s'exécuter quasiment en temps réel, et un petit modèle sur du matériel local répond plus vite qu'un grand modèle ne le ferait sur le même matériel.**",
        items: [
          "Un grand modèle nécessite nettement plus de calcul par token généré, ce qui se traduit directement par des réponses plus lentes sur le même matériel local — perceptible comme un délai entre le moment où l'on prononce une commande et celui où la lumière s'allume réellement.",
          "Les commandes de maison connectée sont généralement courtes et structurées (« éteins les lumières de la chambre », « règle le thermostat à 20 »), ce qui ne nécessite pas le raisonnement plus large ni la base de connaissances qu'apporte un grand modèle.",
          "Exécuter un petit modèle en local signifie aussi des exigences matérielles réduites — voir le guide du meilleur matériel pour une maison connectée locale pour ce à quoi ressemble une machine capable de faire tourner un petit modèle par rapport à ce qu'exigerait une machine pour un modèle plus grand.",
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: "L'appel de fonctions est la capacité clé",
        content:
          "**La capacité qui compte réellement pour le contrôle de la maison connectée est un appel de fonctions fiable — transformer le langage naturel en un appel correctement structuré vers un service Home Assistant précis, et non une capacité conversationnelle générale.**",
        items: [
          "Un modèle affiné ou spécifiquement doué pour l'appel de fonctions peut faire correspondre de manière fiable « réchauffe le salon » au bon appel de service de contrôle climatique, une compétence plus étroite et plus mesurable que la qualité d'un chat ouvert.",
          "C'est aussi là que se manifeste spécifiquement le risque d'hallucination pour les maisons connectées — voir le guide sur la réduction des hallucinations LLM dans l'automatisation domestique pour savoir comment contraindre un modèle aux entités réellement disponibles.",
          "Évaluez un modèle candidat sur la précision de l'appel de fonctions pour votre liste d'entités spécifique, et non sur des scores de benchmark généraux, lors du choix entre petits modèles.",
        ],
      },
      limits: {
        id: 'limits',
        title: 'Où les petits modèles montrent leurs limites',
        content:
          "**Les petits modèles sont le bon choix pour l'analyse de commandes structurées, pas pour les questions ouvertes, le raisonnement complexe en plusieurs étapes, ou les tâches nécessitant de vastes connaissances générales.**",
        items: [
          "Si vous voulez que votre assistant de maison connectée réponde aussi bien à des questions générales, une configuration hybride qui route les entrées de type commande vers un petit modèle et les questions ouvertes vers un modèle plus grand (local ou non) est un schéma courant.",
          "Les petits modèles sont plus enclins que les grands à mal interpréter des formulations ambiguës — des formulations de commande claires et cohérentes, ainsi que des noms d'entités bien délimités, réduisent ce risque plus efficacement qu'une augmentation de la taille du modèle.",
          "Pour des automatisations allant au-delà de la simple analyse de commandes — raisonner sur plusieurs capteurs, décider si un schéma inhabituel justifie une notification — un modèle plus grand peut réellement valoir la latence supplémentaire, selon le degré de sensibilité au temps de l'automatisation.",
        ],
      },
      differs: {
        id: 'differs',
        title: 'En quoi cela diffère du guide de modèles recommandés',
        content:
          "**Cet article explique pourquoi les petits modèles constituent le bon choix d'architecture pour le contrôle de la maison connectée ; la liste de modèles recommandés propose des modèles précis et actuels à utiliser.**",
        items: [
          "Lisez d'abord cet article si vous voulez comprendre le raisonnement derrière la recommandation des petits modèles.",
          "Consultez le guide des meilleurs modèles LLM locaux pour le contrôle de la maison connectée pour des modèles précis et actuellement recommandés, ainsi que leurs exigences matérielles.",
          "Pour des options de petits modèles de langage spécifiques aux appareils mobiles (un contexte matériel différent), voir le guide inter-cluster sur les modèles LLM mobiles.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Un petit modèle de langage est-il moins précis qu\'un grand pour le contrôle de la maison connectée ?', a: "Pas nécessairement pour cette tâche spécifique — la précision de l'appel de fonctions pour des commandes structurées dépend davantage de l'adéquation du modèle à cette tâche étroite que du nombre total de paramètres. Un grand modèle généraliste n'est pas automatiquement meilleur pour analyser « éteins les lumières » qu'un petit modèle adapté à cet effet." },
          { q: 'Quelle taille compte ici comme un « petit » modèle de langage ?', a: "Environ 1 à 4 milliards de paramètres est la plage pratique évoquée dans cet article — assez petit pour tourner de manière réactive sur le GPU ou le NPU intégré d'un mini PC, sans nécessiter de GPU dédié." },
          { q: 'Puis-je exécuter un petit modèle sur un Raspberry Pi ?', a: "Des modèles très petits peuvent tourner sur un Pi, bien que lentement — voir le guide du meilleur matériel pour une maison connectée locale pour les compromis entre un Pi et un mini PC pour cette charge de travail." },
          { q: "Ai-je besoin d'un modèle différent pour les questions ouvertes et pour les commandes ?", a: "De nombreuses configurations les routent différemment — un petit modèle gère rapidement l'analyse des commandes, tandis que les questions ouvertes peuvent aller vers un modèle local ou cloud plus grand si vous voulez une capacité conversationnelle plus large. C'est un choix d'architecture, pas une obligation." },
          { q: 'Quel est le lien avec la réduction des hallucinations dans l\'automatisation domestique ?', a: "Un modèle plus petit et bien délimité, qui n'a besoin que de faire correspondre des commandes à une liste d'entités connue, est intrinsèquement moins enclin à inventer des appareils ou à mal lire un état qu'un modèle généraliste censé raisonner plus largement — voir le guide de réduction des hallucinations pour les techniques précises." },
          { q: 'Quels petits modèles précis dois-je utiliser ?', a: "Voir le guide des meilleurs modèles LLM locaux pour le contrôle de la maison connectée pour des recommandations précises et actuelles — cet article couvre le raisonnement derrière le choix de la taille, pas une liste de modèles." },
          { q: "Un petit modèle a-t-il besoin de moins de RAM ?", a: "Oui — un nombre de paramètres plus faible se traduit directement par des exigences de mémoire réduites, ce qui explique en partie pourquoi ils tournent bien sur le matériel intégré d'un mini PC plutôt que de nécessiter un GPU dédié." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Meilleurs modèles LLM locaux pour le contrôle de la maison connectée](/fr/smart-home/best-local-llm-models-smart-home) — recommandations précises et actuelles de modèles',
          "[Réduire les hallucinations des LLM dans l'automatisation domestique](/fr/smart-home/reducing-llm-hallucinations-home-automation) — contraindre les modèles pour éviter les erreurs",
          '[Faire fonctionner sa maison connectée avec un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — la pile complète du LLM local',
          '[Modèles LLM mobiles : Phi, Gemma, SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — inter-cluster : petits modèles de langage sur matériel mobile',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Petits modèles de langage pour le contrôle de la maison connectée (2027)',
      description: "Pourquoi le contrôle vocal et l'automatisation de la maison connectée privilégient les petits modèles de langage par rapport aux grands LLM généralistes.",
      url: 'https://www.promptquorum.com/fr/smart-home/local-small-language-models-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Petits modèles de langage' }, { '@type': 'Thing', name: 'Appel de fonctions' }, { '@type': 'Thing', name: "IA pour l'automatisation domestique" }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Un petit modèle de langage est-il moins précis qu\'un grand pour le contrôle de la maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: "Pas nécessairement — la précision de l'appel de fonctions pour des commandes structurées dépend davantage de l'adéquation à la tâche que du nombre total de paramètres." } },
        { '@type': 'Question', name: 'Quelle taille compte ici comme un « petit » modèle de langage ?', acceptedAnswer: { '@type': 'Answer', text: "Environ 1 à 4 milliards de paramètres — assez petit pour tourner de manière réactive sur le GPU ou le NPU intégré d'un mini PC." } },
        { '@type': 'Question', name: 'Quels petits modèles précis dois-je utiliser ?', acceptedAnswer: { '@type': 'Answer', text: "Voir le guide des meilleurs modèles LLM locaux pour le contrôle de la maison connectée pour des recommandations précises et actuelles." } },
        { '@type': 'Question', name: "Un petit modèle a-t-il besoin de moins de RAM ?", acceptedAnswer: { '@type': 'Answer', text: "Oui — un nombre de paramètres plus faible se traduit directement par des exigences de mémoire réduites." } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-ja.png',
    title: 'スマートホーム制御のための小規模言語モデル（2027年）',
    seoTitle: 'スマートホーム向け小規模言語モデル（2027年）',
    intro:
      '小規模言語モデル——おおよそ10億〜40億パラメータ——は、スマートホームの音声・自動化制御にとって現実的な選択肢です。全般的な能力が低いからではなく、控えめなローカルハードウェア上でも十分速く動作し、話された指示をデバイス操作に変換するという狭いタスクに特化しやすいためです。この記事では、なぜスマートホーム制御が大規模モデルより小規模モデルを優先するのか、そこに関わるアーキテクチャ上のトレードオフ、そしてこのサイトに既にあるモデル選定の短いリストとどう違うのかを説明します。',
    metaDescription:
      'スマートホームの音声・自動化制御が大規模な汎用LLMより小規模言語モデルを優先する理由——レイテンシ、デバイス上での実現可能性、ファンクションコールのトレードオフ。',
    twitterDescription:
      'スマートホーム制御のための小規模言語モデル：10億〜40億パラメータのモデルがレイテンシとデバイス上での実現可能性で大規模LLMに勝る理由。',
    readTime: '読了時間7分',
    educationalLevel: 'Intermediate',
    audience: 'ローカルの音声・自動化制御にどのサイズのモデルを使うべきか検討しているスマートホーム所有者やHome Assistantユーザー',
    primaryTerm: 'スマートホーム 小規模言語モデル',
    targetKeywords: [
      'スマートホーム 小規模言語モデル',
      'slm home assistant 制御',
      '小型llm 音声アシスタント ローカル',
      'ファンクションコール モデル スマートホーム',
      'ローカルモデルサイズ 家庭自動化',
    ],
    leadAnswerBlock:
      '**スマートホームの音声・自動化制御は、大規模な汎用LLMよりも小規模言語モデル（おおよそ10億〜40億パラメータ）を優先します。理由は、タスクが狭く——指示を解析し、正しい関数を呼び出す——小規模モデルがこれを控えめなローカルハードウェア上でもはるかに低いレイテンシでこなせるからです。** より大きなモデルが無駄になるわけではなく、この特定の仕事に対しては単に不要なオーバーヘッドになるということです。',
    quickAnswerTop: {
      ja: {
        question: 'なぜスマートホームは大規模モデルではなく小規模言語モデルを使うのですか？',
        answer:
          'スマートホーム制御は狭いタスクです——話されたり入力されたりした指示を解釈し、特定のデバイス操作に対応付ける——これは、大規模モデルが持つ広範な一般知識を必要とせずに、小さく高速でファンクションコールが得意なモデルが十分にこなせます。小規模モデルをローカルで実行すれば、レイテンシが下がり（照明がより速く点灯する）、ハードウェア要件も下がります（ディスクリートGPUを必要とせず、ミニPCの統合GPUで十分）。オープンエンドな質問や複雑な推論に対しては、スマートホームのセットアップは引き続きより大規模なモデルにルーティングできます——小規模モデルはレイテンシに敏感な一般的なケースを担当します。',
        bullets: [
          'タスクは狭い：指示を解析→デバイス関数を呼び出す、オープンエンドな推論ではない',
          '小規模モデル（おおよそ10億〜40億パラメータ）は控えめなハードウェア上でもはるかに低いレイテンシで動作する',
          '有能な統合GPU/NPUで十分——この特定のタスクにディスクリートGPUは不要',
          'より大規模なモデルはオープンエンドな質問に引き続き有用で、必要に応じて別途ルーティングされる',
          '現在の具体的なモデル推奨についてはモデル選定の短いリストを参照',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'なぜここでは小規模が大規模に勝るのか', anchor: 'why-small' },
      { label: 'ファンクションコールが鍵となる能力', anchor: 'function-calling' },
      { label: '小規模モデルが不十分な点', anchor: 'limits' },
      { label: 'モデル選定ガイドとの違い', anchor: 'differs' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '小規模言語モデル（おおよそ10億〜40億パラメータ）は、大規模な汎用LLMよりも低いレイテンシでスマートホームの指示解析とファンクションコールをこなし、これはこの狭いタスクにおいて広範な知識よりも重要です。' },
      { type: 'plain-terms', content: '大きなAIモデルは、あらゆることに広く詳しいけれど答えるのに時間がかかるゼネラリストのようなものです。小さなモデルは、一つの仕事のために訓練されたスペシャリストのようなものです——「照明を消して」を、あなたのスマートホームが理解する実際のコマンドに変換します。その一つの仕事に関しては、スペシャリストの方が速く、必要なハードウェアも控えめで済みます。たとえ幅広い雑学の質問に答えるのはゼネラリストの方が勝るとしても。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'スマートホーム制御は狭いタスク（指示を解析→関数を呼び出す）であり、小規模モデルがうまくこなせる',
          '小規模モデル（おおよそ10億〜40億パラメータ）は控えめなローカルハードウェア上でも低いレイテンシで動作する——有能なiGPU/NPUで十分',
          'この特定の仕事では、ファンクションコールの精度が一般知識の広さよりも重要になる',
          'より大規模なモデルはオープンエンドな質問に引き続き有用——必要に応じてセットアップから別途ルーティングできる',
          '現在の具体的なモデル推奨については、スマートホーム制御向けベストなローカルLLMモデルの短いリストを参照',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: 'なぜここでは小規模が大規模に勝るのか',
        content:
          '**音声制御ではレイテンシが決定的な要因です——スマートホームの指示はほぼリアルタイムで実行される必要があり、同じローカルハードウェア上では小規模モデルの方が大規模モデルよりも速く応答します。**',
        items: [
          '大規模モデルは生成トークンごとに大幅に多くの計算量を必要とし、これは同じローカルハードウェア上での応答速度の低下に直結します——指示を発してから実際に照明が点灯するまでの遅延として体感されます。',
          'スマートホームの指示は通常短く構造化されており（「寝室の照明を消して」「サーモスタットを20度に設定して」）、大規模モデルが提供するような広範な推論や知識ベースを必要としません。',
          '小規模モデルをローカルで実行することは、ハードウェア要件の低減にもつながります——小規模モデル向けのマシンと、より大規模なモデルに必要なマシンの違いについては、ローカルスマートホーム向けベストハードウェアのガイドを参照してください。',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: 'ファンクションコールが鍵となる能力',
        content:
          '**スマートホーム制御にとって実際に重要な能力は、信頼性の高いファンクションコール——自然言語を特定のHome Assistantサービスへの正しく構造化された呼び出しに変換すること——であり、一般的な会話能力ではありません。**',
        items: [
          'ファンクションコールに特化してファインチューニングされた、あるいは元来得意なモデルは、「リビングを暖かくして」を正しい空調制御サービス呼び出しに信頼性高く対応付けることができます。これはオープンエンドなチャット品質よりも狭く、測定しやすいスキルです。',
          'これはまさに、スマートホームに特有のハルシネーションリスクが表れる箇所でもあります——モデルを実際に利用可能なエンティティに制約する方法については、家庭自動化におけるLLMハルシネーションの削減ガイドを参照してください。',
          '小規模モデル間で選ぶ際は、一般的なベンチマークスコアではなく、あなたの具体的なエンティティリストに対するファンクションコールの精度で候補モデルを評価してください。',
        ],
      },
      limits: {
        id: 'limits',
        title: '小規模モデルが不十分な点',
        content:
          '**小規模モデルは構造化された指示解析には適切な選択ですが、オープンエンドな質問、複雑な多段階推論、広範な世界知識を必要とするタスクには向いていません。**',
        items: [
          'スマートホームアシスタントに一般的な質問にもうまく答えてほしい場合、コマンドらしい入力を小規模モデルに、オープンエンドな質問を（ローカルまたはそれ以外の）大規模モデルにルーティングするハイブリッド構成が一般的なパターンです。',
          '小規模モデルは大規模モデルよりも曖昧な言い回しを誤解しやすい傾向があります——明確で一貫した指示の言い回しと、範囲を絞ったエンティティ名は、モデルサイズを上げるよりもこのリスクを効果的に減らします。',
          '単純な指示解析を超えた自動化——複数のセンサーにまたがる推論、通知に値する異常なパターンかどうかの判断——については、自動化がどれだけ時間に敏感かによって、より大規模なモデルが追加のレイテンシに見合う価値を持つ場合もあります。',
        ],
      },
      differs: {
        id: 'differs',
        title: 'モデル選定ガイドとの違い',
        content:
          '**この記事は、スマートホーム制御にとって小規模モデルが正しいアーキテクチャ選択である理由を説明しています。モデル選定の短いリストは、実際に使用すべき具体的な現行モデルを推奨しています。**',
        items: [
          '小規模モデル推奨の背後にある論理を理解したい場合は、まずこの記事を読んでください。',
          '具体的かつ現在推奨されるモデルとそのハードウェア要件については、スマートホーム制御向けベストなローカルLLMモデルのガイドを参照してください。',
          'モバイルデバイス向けの小規模言語モデルの選択肢（異なるハードウェアの文脈）については、モバイルLLMモデルに関するクラスター横断ガイドを参照してください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'スマートホーム制御において、小規模言語モデルは大規模モデルより精度が低いのですか？', a: 'この特定のタスクに関しては必ずしもそうではありません——構造化された指示に対するファンクションコールの精度は、パラメータ数全体よりも、モデルがその狭いタスクにどれだけ適しているかに大きく依存します。大規模な汎用モデルが「照明を消して」の解析において、それ用に調整された小規模モデルより自動的に優れているわけではありません。' },
          { q: 'ここで言う「小規模」言語モデルとはどのくらいのサイズを指しますか？', a: 'この記事で扱う実用的な範囲はおおよそ10億〜40億パラメータです——ディスクリートGPUを必要とせず、ミニPCの統合GPUやNPU上で応答性よく動作するのに十分な小ささです。' },
          { q: 'Raspberry Piで小規模モデルを実行できますか？', a: '非常に小さなモデルはPiで動作しますが、速度は遅くなります——このワークロードにおけるPiとミニPCのトレードオフについては、ローカルスマートホーム向けベストハードウェアのガイドを参照してください。' },
          { q: 'オープンエンドな質問とコマンドで異なるモデルが必要ですか？', a: '多くのセットアップでは両者を別々にルーティングします——小規模モデルが指示解析を高速に処理する一方、より広い会話能力が欲しい場合はオープンエンドな質問をより大規模なローカルまたはクラウドモデルに送ることができます。これはアーキテクチャ上の選択であり、必須ではありません。' },
          { q: '家庭自動化におけるハルシネーション削減とはどう関係しますか？', a: '既知のエンティティリストにコマンドを対応付けるだけでよい、小規模で範囲が絞られたモデルは、より広範に推論するよう求められる汎用モデルに比べて、本質的にデバイスを作り上げたり状態を誤読したりしにくい傾向があります——具体的な手法についてはハルシネーション削減ガイドを参照してください。' },
          { q: 'どの具体的な小規模モデルを使うべきですか？', a: '現在の具体的な推奨については、スマートホーム制御向けベストなローカルLLMモデルのガイドを参照してください——この記事はモデルリストではなく、サイズ選択の背後にある論理を扱っています。' },
          { q: '小規模モデルは必要なRAMも少なくて済みますか？', a: 'はい——パラメータ数が少ないことは直接的にメモリ要件の低下につながり、これが小規模モデルがディスクリートGPUを必要とせず、ミニPCの統合ハードウェア上でうまく動作する理由の一部です。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[スマートホーム制御向けベストなローカルLLMモデル](/ja/smart-home/best-local-llm-models-smart-home) — 具体的な現行モデルの選定',
          '[家庭自動化におけるLLMハルシネーションの削減](/ja/smart-home/reducing-llm-hallucinations-home-automation) — エラーを避けるためにモデルを制約する',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — 完全なローカルLLMスタック',
          '[モバイルLLMモデル：Phi、Gemma、SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — クラスター横断：モバイルハードウェア上の小規模言語モデル',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホーム制御のための小規模言語モデル（2027年）',
      description: 'スマートホームの音声・自動化制御が大規模な汎用LLMより小規模言語モデルを優先する理由。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-small-language-models-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '小規模言語モデル' }, { '@type': 'Thing', name: 'ファンクションコール' }, { '@type': 'Thing', name: '家庭自動化AI' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'スマートホーム制御において、小規模言語モデルは大規模モデルより精度が低いのですか？', acceptedAnswer: { '@type': 'Answer', text: '必ずしもそうではありません——構造化された指示に対するファンクションコールの精度は、パラメータ数全体よりもタスクへの適合度に大きく依存します。' } },
        { '@type': 'Question', name: 'ここで言う「小規模」言語モデルとはどのくらいのサイズを指しますか？', acceptedAnswer: { '@type': 'Answer', text: 'おおよそ10億〜40億パラメータです——ミニPCの統合GPUやNPU上で応答性よく動作するのに十分な小ささです。' } },
        { '@type': 'Question', name: 'どの具体的な小規模モデルを使うべきですか？', acceptedAnswer: { '@type': 'Answer', text: '現在の具体的な推奨については、スマートホーム制御向けベストなローカルLLMモデルのガイドを参照してください。' } },
        { '@type': 'Question', name: '小規模モデルは必要なRAMも少なくて済みますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい——パラメータ数が少ないことは直接的にメモリ要件の低下につながります。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-zh.png',
    title: '智能家居控制的小型语言模型（2027年）',
    seoTitle: '智能家居小型语言模型（2027年）',
    intro:
      '小型语言模型——大约10亿到40亿参数——是智能家居语音和自动化控制的实用选择，这不是因为它们整体能力较弱，而是因为它们能在配置一般的本地硬件上足够快速地运行，并很好地专精于将口头指令转化为设备操作这一狭窄任务。本文将解释为什么智能家居控制偏好小型模型而非大型模型，其中涉及的架构权衡，以及这与本网站已有的模型推荐简明清单有何不同。',
    metaDescription:
      '为什么智能家居语音和自动化控制偏好小型语言模型而非大型通用LLM——延迟、设备端可行性以及函数调用方面的权衡。',
    twitterDescription:
      '智能家居控制的小型语言模型：为什么10-40亿参数的模型在延迟和设备端可行性上胜过大型LLM。',
    readTime: '阅读需7分钟',
    educationalLevel: 'Intermediate',
    audience: '正在评估应为本地语音/自动化控制运行何种规模模型的智能家居用户和Home Assistant用户',
    primaryTerm: '智能家居 小型语言模型',
    targetKeywords: [
      '智能家居 小型语言模型',
      'slm home assistant 控制',
      '小型llm 语音助手 本地',
      '函数调用模型 智能家居',
      '本地模型规模 家庭自动化',
    ],
    leadAnswerBlock:
      '**智能家居语音和自动化控制偏好小型语言模型（大约10亿-40亿参数）而非大型通用LLM，因为任务范围狭窄——解析指令、调用正确的函数——而小型模型能在配置一般的本地硬件上以远低得多的延迟完成这项工作。**更大的模型并非被浪费，只是对这项特定工作而言是不必要的开销。',
    quickAnswerTop: {
      zh: {
        question: '为什么智能家居使用小型语言模型而不是大型模型？',
        answer:
          '智能家居控制是一项狭窄的任务——解读口头或文字输入的指令，并将其映射到特定的设备操作——小型、快速、擅长函数调用的模型能很好地完成这项任务，而无需大型模型所具备的广泛通识知识。在本地运行小型模型意味着更低的延迟（灯亮得更快）和更低的硬件要求（迷你主机的集成显卡就足够，无需独立显卡）。对于开放式问题或复杂推理，智能家居系统仍可以路由到更大的模型——小型模型负责处理常见的、对延迟敏感的场景。',
        bullets: [
          '任务范围狭窄：解析指令→调用设备函数，而非开放式推理',
          '小型模型（大约10亿-40亿参数）在配置一般的硬件上运行延迟低得多',
          '一颗给力的集成显卡/NPU就够了——这项特定任务不需要独立显卡',
          '更大的模型对开放式问题仍然有用，需要时可单独路由',
          '具体的当前模型推荐请参见模型推荐简明清单',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '为什么小模型在这里更胜一筹', anchor: 'why-small' },
      { label: '函数调用是关键能力', anchor: 'function-calling' },
      { label: '小型模型的不足之处', anchor: 'limits' },
      { label: '这与模型推荐指南有何不同', anchor: 'differs' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '小型语言模型（大约10亿-40亿参数）处理智能家居指令解析和函数调用时延迟低于大型通用LLM，这对这项狭窄任务来说比广泛知识更重要。' },
      { type: 'plain-terms', content: '大型AI模型就像一位通才，对各种事情都了解不少，但回答起来需要更长时间。小型模型就像一位专为单一工作训练的专才——把"关灯"转化为你的智能家居真正能理解的指令。对于这一件工作，专才更快，需要的硬件也不那么强大，尽管通才在回答广泛的常识问题时会更胜一筹。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '智能家居控制是一项狭窄的任务（解析指令→调用函数），小型模型能很好地胜任',
          '小型模型（大约10亿-40亿参数）在配置一般的本地硬件上延迟更低——一颗给力的iGPU/NPU就够用',
          '对于这项特定工作，函数调用的准确性比通识知识的广度更重要',
          '更大的模型对开放式问题仍然有用——需要时系统可单独路由过去',
          '具体的当前模型推荐请参见智能家居控制最佳本地LLM模型简明清单',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: '为什么小模型在这里更胜一筹',
        content:
          '**延迟是语音控制的决定性因素——智能家居指令需要接近实时执行，而在本地硬件上，小型模型的响应速度比大型模型在相同硬件上的响应速度更快。**',
        items: [
          '大型模型每生成一个token所需的计算量要大得多，这直接转化为在相同本地硬件上更慢的响应速度——表现为从说出指令到灯真正亮起之间可察觉的延迟。',
          '智能家居指令通常简短且结构化（"关闭卧室的灯""把温控器设到20度"），并不需要大型模型所提供的更广泛的推理能力或知识库。',
          '在本地运行小型模型也意味着更低的硬件要求——关于适合小型模型的设备与更大模型所需设备的区别，请参见本地智能家居最佳硬件指南。',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: '函数调用是关键能力',
        content:
          '**对智能家居控制真正重要的能力是可靠的函数调用——把自然语言转化为对特定Home Assistant服务的、结构正确的调用，而不是通用的对话能力。**',
        items: [
          '一个经过微调或本身就擅长函数调用的模型，能够可靠地将"让客厅暖和一点"映射到正确的气候控制服务调用，这是一项比开放式聊天质量更狭窄、也更可衡量的技能。',
          '这也正是智能家居特有的幻觉风险显现的地方——关于如何将模型约束到实际可用的实体，请参见减少家庭自动化中LLM幻觉的指南。',
          '在小型模型之间做选择时，应根据候选模型在你具体实体列表上的函数调用准确性来评估，而不是依据通用的基准分数。',
        ],
      },
      limits: {
        id: 'limits',
        title: '小型模型的不足之处',
        content:
          '**小型模型是结构化指令解析的正确选择，但不适合开放式问题、复杂的多步推理，或需要广泛世界知识的任务。**',
        items: [
          '如果你希望智能家居助手也能很好地回答一般性问题，一种常见模式是采用混合架构：将命令式输入路由给小型模型，把开放式问题路由给更大的模型（本地或其他方式）。',
          '相比大型模型，小型模型更容易误解含糊不清的措辞——清晰一致的指令措辞和范围明确的实体名称，比单纯升级模型规模更能降低这一风险。',
          '对于超出简单指令解析范围的自动化——跨多个传感器进行推理、判断某种异常模式是否值得发出通知——更大的模型可能确实值得付出额外的延迟，这取决于该自动化对时间的敏感程度。',
        ],
      },
      differs: {
        id: 'differs',
        title: '这与模型推荐指南有何不同',
        content:
          '**本文解释了为什么小型模型是智能家居控制的正确架构选择；模型推荐简明清单则推荐了当前应实际使用的具体模型。**',
        items: [
          '如果你想了解小型模型推荐背后的推理逻辑，请先阅读本文。',
          '有关当前推荐的具体模型及其硬件要求，请参见智能家居控制最佳本地LLM模型指南。',
          '有关移动设备专用的小型语言模型选项（一种不同的硬件场景），请参见跨系列的移动LLM模型指南。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '在智能家居控制方面，小型语言模型是否比大型模型准确性更低？', a: '对这项特定任务而言未必如此——结构化指令的函数调用准确性，更多取决于模型对这项狭窄任务的适配程度，而非整体参数量。一个大型通用模型在解析"关灯"时，并不会自动比一个为此调优的小型模型更强。' },
          { q: '本文所说的"小型"语言模型指多大的规模？', a: '本文讨论的实用范围大约是10亿到40亿参数——足够小，能在迷你主机的集成显卡或NPU上响应灵敏地运行，无需独立显卡。' },
          { q: '我可以在树莓派上运行小型模型吗？', a: '非常小的模型可以在树莓派上运行，但速度较慢——关于树莓派与迷你主机在这项工作负载上的权衡，请参见本地智能家居最佳硬件指南。' },
          { q: '开放式问题和指令是否需要不同的模型？', a: '许多系统会分别路由这两类请求——小型模型快速处理指令解析，而如果你想要更广泛的对话能力，开放式问题可以路由给更大的本地或云端模型。这是一种架构选择，而非硬性要求。' },
          { q: '这与减少家庭自动化中的幻觉有什么关系？', a: '一个更小、范围明确的模型，只需要将指令映射到已知的实体列表，相比被要求进行更广泛推理的通用模型，本质上更不容易凭空捏造设备或误读状态——具体技巧请参见幻觉减少指南。' },
          { q: '我应该使用哪些具体的小型模型？', a: '具体的当前推荐请参见智能家居控制最佳本地LLM模型指南——本文讲的是规模选择背后的推理逻辑，而不是模型清单。' },
          { q: '小型模型需要的内存更少吗？', a: '是的——较少的参数量直接转化为更低的内存要求，这也是小型模型能在迷你主机的集成硬件上良好运行、而无需独立显卡的部分原因。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[智能家居控制最佳本地LLM模型](/zh/smart-home/best-local-llm-models-smart-home) — 具体的当前模型推荐',
          '[减少家庭自动化中的LLM幻觉](/zh/smart-home/reducing-llm-hallucinations-home-automation) — 约束模型以避免错误',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 完整的本地LLM技术栈',
          '[移动LLM模型：Phi、Gemma、SmolLM](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 跨系列：移动硬件上的小型语言模型',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居控制的小型语言模型（2027年）',
      description: '为什么智能家居语音和自动化控制偏好小型语言模型而非大型通用LLM。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-small-language-models-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '小型语言模型' }, { '@type': 'Thing', name: '函数调用' }, { '@type': 'Thing', name: '家庭自动化AI' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '在智能家居控制方面，小型语言模型是否比大型模型准确性更低？', acceptedAnswer: { '@type': 'Answer', text: '未必——结构化指令的函数调用准确性，更多取决于任务适配度，而非整体参数量。' } },
        { '@type': 'Question', name: '本文所说的"小型"语言模型指多大的规模？', acceptedAnswer: { '@type': 'Answer', text: '大约10亿到40亿参数——足够小，能在迷你主机的集成显卡或NPU上响应灵敏地运行。' } },
        { '@type': 'Question', name: '我应该使用哪些具体的小型模型？', acceptedAnswer: { '@type': 'Answer', text: '具体的当前推荐请参见智能家居控制最佳本地LLM模型指南。' } },
        { '@type': 'Question', name: '小型模型需要的内存更少吗？', acceptedAnswer: { '@type': 'Answer', text: '是的——较少的参数量直接转化为更低的内存要求。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-es.png',
    title: 'Modelos de lenguaje pequeños para el control del hogar inteligente (2027)',
    seoTitle: 'Modelos de lenguaje pequeños para hogar inteligente (2027)',
    intro:
      'Los modelos de lenguaje pequeños — de aproximadamente 1.000 a 4.000 millones de parámetros — son la opción práctica para el control por voz y la automatización del hogar inteligente, no porque sean menos capaces en general, sino porque funcionan lo bastante rápido en hardware local modesto y se especializan bien en la tarea acotada de convertir un comando hablado en una acción sobre un dispositivo. Este artículo explica por qué el control del hogar inteligente favorece los modelos pequeños frente a los grandes, los compromisos de arquitectura implicados, y en qué se diferencia de una lista breve de modelos recomendados ya presente en este sitio.',
    metaDescription:
      'Por qué el control por voz y la automatización del hogar inteligente favorecen los modelos de lenguaje pequeños frente a los grandes LLM de propósito general — latencia, viabilidad en el dispositivo y compromisos de la llamada a funciones.',
    twitterDescription:
      'Modelos de lenguaje pequeños para el control del hogar inteligente: por qué los modelos de 1.000-4.000 millones de parámetros superan a los grandes LLM en latencia y viabilidad en el dispositivo.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de hogar inteligente y usuarios de Home Assistant que evalúan qué tamaño de modelo ejecutar para el control local por voz/automatización',
    primaryTerm: 'modelos de lenguaje pequenos hogar inteligente',
    targetKeywords: [
      'modelos de lenguaje pequenos hogar inteligente',
      'slm control home assistant',
      'llm pequeno asistente de voz local',
      'modelo function calling hogar inteligente',
      'tamano modelo local automatizacion hogar',
    ],
    leadAnswerBlock:
      '**El control por voz y la automatización del hogar inteligente favorecen los modelos de lenguaje pequeños (aproximadamente 1.000-4.000 millones de parámetros) frente a los grandes LLM de propósito general porque la tarea es acotada — analizar un comando, llamar a la función correcta — y los modelos pequeños la gestionan con una latencia mucho menor en hardware local modesto.** Un modelo más grande no se desperdicia, simplemente supone una sobrecarga innecesaria para esta tarea específica.',
    quickAnswerTop: {
      es: {
        question: '¿Por qué los hogares inteligentes usan modelos de lenguaje pequeños en lugar de grandes?',
        answer:
          'El control del hogar inteligente es una tarea acotada — interpretar un comando hablado o escrito y asignarlo a una acción específica sobre un dispositivo — que los modelos pequeños, rápidos y capaces de llamada a funciones gestionan bien sin necesitar el amplio conocimiento general que aporta un modelo grande. Ejecutar un modelo pequeño localmente implica menor latencia (la luz se enciende más rápido) y menores requisitos de hardware (la GPU integrada de un mini PC es suficiente, en lugar de necesitar una GPU dedicada). Para preguntas abiertas o razonamiento complejo, una configuración de hogar inteligente aún puede enrutar a un modelo más grande — el modelo pequeño gestiona el caso habitual y sensible a la latencia.',
        bullets: [
          'La tarea es acotada: analizar el comando → llamar a la función del dispositivo, no razonamiento abierto',
          'Los modelos pequeños (aproximadamente 1.000-4.000 millones de parámetros) funcionan con una latencia mucho menor en hardware modesto',
          'Una GPU/NPU integrada capaz es suficiente — no se requiere una GPU dedicada para esta tarea específica',
          'Los modelos más grandes siguen siendo útiles para preguntas abiertas, enrutadas por separado si es necesario',
          'Consulta la lista breve de modelos recomendados para recomendaciones actuales y específicas',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Por qué lo pequeño gana aquí', anchor: 'why-small' },
      { label: 'La llamada a funciones es la capacidad clave', anchor: 'function-calling' },
      { label: 'Dónde los modelos pequeños se quedan cortos', anchor: 'limits' },
      { label: 'En qué se diferencia de la guía de modelos recomendados', anchor: 'differs' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Los modelos de lenguaje pequeños (aproximadamente 1.000-4.000 millones de parámetros) gestionan el análisis de comandos del hogar inteligente y la llamada a funciones con menor latencia que los grandes LLM de propósito general, algo que importa más para esta tarea acotada que el conocimiento amplio.' },
      { type: 'plain-terms', content: 'Un modelo de IA grande es como un generalista que sabe mucho de todo pero tarda más en responder. Un modelo pequeño es como un especialista entrenado para un solo trabajo — convertir "apaga las luces" en el comando real que entiende tu hogar inteligente. Para ese único trabajo, el especialista es más rápido y necesita hardware menos potente, aunque el generalista ganaría al responder una pregunta amplia de cultura general.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'El control del hogar inteligente es una tarea acotada (analizar el comando → llamar a la función), que los modelos pequeños gestionan bien',
          'Los modelos pequeños (aproximadamente 1.000-4.000 millones de parámetros) funcionan con menor latencia en hardware local modesto — una iGPU/NPU capaz es suficiente',
          'La precisión de la llamada a funciones importa más que la amplitud del conocimiento general para esta tarea específica',
          'Los modelos más grandes siguen siendo útiles para preguntas abiertas — una configuración puede enrutar a uno por separado si es necesario',
          'Para recomendaciones actuales y específicas, consulta la lista breve de los mejores modelos LLM locales para el control del hogar inteligente',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: 'Por qué lo pequeño gana aquí',
        content:
          '**La latencia es el factor decisivo para el control por voz — un comando de hogar inteligente necesita ejecutarse casi en tiempo real, y un modelo pequeño en hardware local responde más rápido de lo que lo haría un modelo grande en el mismo hardware.**',
        items: [
          'Un modelo grande necesita sustancialmente más cómputo por token generado, lo que se traduce directamente en respuestas más lentas en el mismo hardware local — perceptible como un retraso entre decir un comando y que la luz realmente se encienda.',
          'Los comandos del hogar inteligente suelen ser cortos y estructurados ("apaga las luces del dormitorio", "pon el termostato a 20 grados"), lo que no requiere el razonamiento más amplio ni la base de conocimiento que aporta un modelo grande.',
          'Ejecutar un modelo pequeño localmente también implica menores requisitos de hardware — consulta la guía del mejor hardware para un hogar inteligente local para ver cómo es un equipo capaz de ejecutar modelos pequeños frente a lo que necesitaría uno para modelos más grandes.',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: 'La llamada a funciones es la capacidad clave',
        content:
          '**La capacidad que realmente importa para el control del hogar inteligente es la llamada a funciones fiable — convertir lenguaje natural en una llamada correctamente estructurada a un servicio específico de Home Assistant, no la capacidad conversacional general.**',
        items: [
          'Un modelo afinado o especialmente capaz en la llamada a funciones puede asignar de forma fiable "haz que el salón esté más cálido" a la llamada de servicio de control climático correcta, una habilidad más acotada y medible que la calidad de un chat abierto.',
          'Aquí es también donde aparece específicamente el riesgo de alucinación para hogares inteligentes — consulta la guía sobre cómo reducir las alucinaciones de LLM en la automatización del hogar para saber cómo restringir un modelo a las entidades realmente disponibles.',
          'Evalúa un modelo candidato según la precisión de la llamada a funciones para tu lista específica de entidades, no según puntuaciones de benchmark generales, al elegir entre modelos pequeños.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'Dónde los modelos pequeños se quedan cortos',
        content:
          '**Los modelos pequeños son la opción correcta para el análisis de comandos estructurados, no para preguntas abiertas, razonamiento complejo de varios pasos, ni tareas que requieran conocimiento amplio del mundo.**',
        items: [
          'Si quieres que tu asistente de hogar inteligente también responda bien a preguntas generales, una configuración híbrida que enrute la entrada tipo comando a un modelo pequeño y las preguntas abiertas a un modelo más grande (local o no) es un patrón común.',
          'Los modelos pequeños son más propensos que los grandes a malinterpretar frases ambiguas — una redacción de comandos clara y consistente, junto con nombres de entidades bien delimitados, reduce este riesgo más que aumentar el tamaño del modelo.',
          'Para automatizaciones más allá del simple análisis de comandos — razonar a través de varios sensores, decidir si un patrón inusual justifica una notificación — un modelo más grande puede realmente valer la latencia adicional, dependiendo de lo sensible al tiempo que sea la automatización.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'En qué se diferencia de la guía de modelos recomendados',
        content:
          '**Este artículo explica por qué los modelos pequeños son la elección arquitectónica correcta para el control del hogar inteligente; la lista breve de modelos recomendados sugiere modelos actuales específicos para ejecutar.**',
        items: [
          'Lee primero este artículo si quieres entender el razonamiento detrás de la recomendación de modelos pequeños.',
          'Ve a la guía de los mejores modelos LLM locales para el control del hogar inteligente para modelos específicos y actualmente recomendados, junto con sus requisitos de hardware.',
          'Para opciones de modelos de lenguaje pequeños específicas de dispositivos móviles (un contexto de hardware diferente), consulta la guía intercluster sobre modelos LLM móviles.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es un modelo de lenguaje pequeño menos preciso que uno grande para el control del hogar inteligente?', a: 'No necesariamente para esta tarea específica — la precisión de la llamada a funciones para comandos estructurados depende más de qué tan adecuado es un modelo para esa tarea acotada que del número total de parámetros. Un modelo grande de propósito general no es automáticamente mejor al analizar "apaga las luces" que un modelo pequeño ajustado para ello.' },
          { q: '¿Qué tamaño cuenta aquí como un modelo de lenguaje "pequeño"?', a: 'Aproximadamente entre 1.000 y 4.000 millones de parámetros es el rango práctico que se trata en este artículo — lo bastante pequeño para funcionar de forma ágil en la GPU o NPU integrada de un mini PC, sin necesitar una GPU dedicada.' },
          { q: '¿Puedo ejecutar un modelo pequeño en una Raspberry Pi?', a: 'Los modelos muy pequeños pueden ejecutarse en una Pi, aunque lentamente — consulta la guía del mejor hardware para un hogar inteligente local para ver los compromisos entre una Pi y un mini PC para esta carga de trabajo.' },
          { q: '¿Necesito un modelo diferente para preguntas abiertas frente a comandos?', a: 'Muchas configuraciones enrutan ambos de forma diferente — un modelo pequeño gestiona el análisis de comandos rápidamente, mientras que las preguntas abiertas pueden ir a un modelo local o en la nube más grande si quieres una capacidad conversacional más amplia. Esto es una elección de arquitectura, no un requisito.' },
          { q: '¿Cómo se relaciona esto con la reducción de alucinaciones en la automatización del hogar?', a: 'Un modelo más pequeño y bien delimitado que solo necesita asignar comandos a una lista de entidades conocida es inherentemente menos propenso a inventar dispositivos o malinterpretar el estado que un modelo de propósito general al que se le pide razonar de forma más amplia — consulta la guía de reducción de alucinaciones para las técnicas específicas.' },
          { q: '¿Qué modelos pequeños específicos debería usar?', a: 'Consulta la guía de los mejores modelos LLM locales para el control del hogar inteligente para recomendaciones actuales y específicas — este artículo cubre el razonamiento detrás de la elección del tamaño, no una lista de modelos.' },
          { q: '¿Necesita un modelo pequeño menos RAM?', a: 'Sí — un menor número de parámetros se traduce directamente en menores requisitos de memoria, lo cual es parte de por qué funcionan bien en el hardware integrado de un mini PC en lugar de requerir una GPU dedicada.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Los mejores modelos LLM locales para el control del hogar inteligente](/es/smart-home/best-local-llm-models-smart-home) — recomendaciones específicas de modelos actuales',
          '[Reducir las alucinaciones de LLM en la automatización del hogar](/es/smart-home/reducing-llm-hallucinations-home-automation) — restringir modelos para evitar errores',
          '[Ejecuta tu hogar inteligente con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — la pila completa de LLM local',
          '[Modelos LLM móviles: Phi, Gemma, SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — intercluster: modelos de lenguaje pequeños en hardware móvil',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Modelos de lenguaje pequeños para el control del hogar inteligente (2027)',
      description: 'Por qué el control por voz y la automatización del hogar inteligente favorecen los modelos de lenguaje pequeños frente a los grandes LLM de propósito general.',
      url: 'https://www.promptquorum.com/es/smart-home/local-small-language-models-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Modelos de lenguaje pequeños' }, { '@type': 'Thing', name: 'Llamada a funciones' }, { '@type': 'Thing', name: 'IA para automatización del hogar' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Es un modelo de lenguaje pequeño menos preciso que uno grande para el control del hogar inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'No necesariamente — la precisión de la llamada a funciones para comandos estructurados depende más de la adecuación a la tarea que del número total de parámetros.' } },
        { '@type': 'Question', name: '¿Qué tamaño cuenta aquí como un modelo de lenguaje "pequeño"?', acceptedAnswer: { '@type': 'Answer', text: 'Aproximadamente entre 1.000 y 4.000 millones de parámetros — lo bastante pequeño para funcionar de forma ágil en la GPU o NPU integrada de un mini PC.' } },
        { '@type': 'Question', name: '¿Qué modelos pequeños específicos debería usar?', acceptedAnswer: { '@type': 'Answer', text: 'Consulta la guía de los mejores modelos LLM locales para el control del hogar inteligente para recomendaciones actuales y específicas.' } },
        { '@type': 'Question', name: '¿Necesita un modelo pequeño menos RAM?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — un menor número de parámetros se traduce directamente en menores requisitos de memoria.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-pt.png',
    title: 'Modelos de linguagem pequenos para o controle da casa inteligente (2027)',
    seoTitle: 'Modelos de linguagem pequenos para casa inteligente (2027)',
    intro:
      'Os modelos de linguagem pequenos — aproximadamente 1 a 4 bilhões de parâmetros — são a escolha prática para o controle por voz e a automação da casa inteligente, não porque sejam menos capazes em geral, mas porque rodam rápido o suficiente em hardware local modesto e se especializam bem na tarefa restrita de transformar um comando falado em uma ação sobre um dispositivo. Este artigo explica por que o controle da casa inteligente favorece modelos pequenos em vez de grandes, os trade-offs de arquitetura envolvidos, e como isso difere de uma lista curta de modelos recomendados já presente neste site.',
    metaDescription:
      'Por que o controle por voz e a automação da casa inteligente favorecem modelos de linguagem pequenos em vez de LLMs grandes de propósito geral — latência, viabilidade no dispositivo e trade-offs de chamada de função.',
    twitterDescription:
      'Modelos de linguagem pequenos para o controle da casa inteligente: por que modelos de 1-4 bilhões de parâmetros superam LLMs grandes em latência e viabilidade no dispositivo.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casa inteligente e usuários do Home Assistant avaliando qual tamanho de modelo executar para o controle local de voz/automação',
    primaryTerm: 'modelos de linguagem pequenos casa inteligente',
    targetKeywords: [
      'modelos de linguagem pequenos casa inteligente',
      'slm controle home assistant',
      'llm pequeno assistente de voz local',
      'modelo function calling casa inteligente',
      'tamanho modelo local automacao residencial',
    ],
    leadAnswerBlock:
      '**O controle por voz e a automação da casa inteligente favorecem modelos de linguagem pequenos (aproximadamente 1-4 bilhões de parâmetros) em vez de LLMs grandes de propósito geral porque a tarefa é restrita — analisar um comando, chamar a função certa — e os modelos pequenos lidam com isso com latência muito menor em hardware local modesto.** Um modelo maior não é desperdiçado, é simplesmente uma sobrecarga desnecessária para essa tarefa específica.',
    quickAnswerTop: {
      pt: {
        question: 'Por que casas inteligentes usam modelos de linguagem pequenos em vez de grandes?',
        answer:
          'O controle da casa inteligente é uma tarefa restrita — interpretar um comando falado ou digitado e mapeá-lo para uma ação específica de dispositivo — que modelos pequenos, rápidos e capazes de chamada de função lidam bem sem precisar do amplo conhecimento geral que um modelo grande carrega. Executar um modelo pequeno localmente significa menor latência (a luz acende mais rápido) e menores requisitos de hardware (a GPU integrada de um mini PC é suficiente, em vez de precisar de uma GPU dedicada). Para perguntas abertas ou raciocínio complexo, uma configuração de casa inteligente ainda pode rotear para um modelo maior — o modelo pequeno cuida do caso comum e sensível à latência.',
        bullets: [
          'A tarefa é restrita: analisar o comando → chamar a função do dispositivo, não raciocínio aberto',
          'Modelos pequenos (aproximadamente 1-4 bilhões de parâmetros) rodam com latência muito menor em hardware modesto',
          'Uma GPU/NPU integrada capaz já é suficiente — nenhuma GPU dedicada é necessária para essa tarefa específica',
          'Modelos maiores continuam úteis para perguntas abertas, roteados separadamente se necessário',
          'Veja a lista curta de modelos recomendados para recomendações específicas e atuais',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Por que o pequeno vence o grande aqui', anchor: 'why-small' },
      { label: 'A chamada de função é a capacidade-chave', anchor: 'function-calling' },
      { label: 'Onde os modelos pequenos ficam aquém', anchor: 'limits' },
      { label: 'Como isso difere do guia de modelos recomendados', anchor: 'differs' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Modelos de linguagem pequenos (aproximadamente 1-4 bilhões de parâmetros) lidam com a análise de comandos da casa inteligente e chamada de função com menor latência do que LLMs grandes de propósito geral, o que importa mais para essa tarefa restrita do que conhecimento amplo.' },
      { type: 'plain-terms', content: 'Um modelo de IA grande é como um generalista que sabe muito sobre tudo, mas demora mais para responder. Um modelo pequeno é como um especialista treinado para um único trabalho — transformar "apague as luzes" no comando real que sua casa inteligente entende. Para esse único trabalho, o especialista é mais rápido e precisa de hardware menos potente, mesmo que o generalista vencesse ao responder uma pergunta ampla de conhecimentos gerais.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O controle da casa inteligente é uma tarefa restrita (analisar comando → chamar função), que modelos pequenos lidam bem',
          'Modelos pequenos (aproximadamente 1-4 bilhões de parâmetros) rodam com menor latência em hardware local modesto — uma iGPU/NPU capaz é suficiente',
          'A precisão de chamada de função importa mais do que a amplitude de conhecimento geral para esse trabalho específico',
          'Modelos maiores continuam úteis para perguntas abertas — uma configuração pode rotear para um separadamente, se necessário',
          'Para recomendações específicas e atuais, veja a lista curta dos melhores modelos LLM locais para o controle da casa inteligente',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: 'Por que o pequeno vence o grande aqui',
        content:
          '**A latência é o fator decisivo para o controle por voz — um comando de casa inteligente precisa ser executado quase em tempo real, e um modelo pequeno em hardware local responde mais rápido do que um modelo grande responderia no mesmo hardware.**',
        items: [
          'Um modelo grande precisa de substancialmente mais computação por token gerado, o que se traduz diretamente em respostas mais lentas no mesmo hardware local — perceptível como um atraso entre falar um comando e a luz realmente acender.',
          'Comandos de casa inteligente são tipicamente curtos e estruturados ("apague as luzes do quarto", "ajuste o termostato para 20 graus"), o que não exige o raciocínio mais amplo ou a base de conhecimento que um modelo grande oferece.',
          'Executar um modelo pequeno localmente também significa menores requisitos de hardware — veja o guia do melhor hardware para uma casa inteligente local para entender como é uma máquina capaz de rodar modelos pequenos em comparação com o que uma máquina para modelos maiores exigiria.',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: 'A chamada de função é a capacidade-chave',
        content:
          '**A capacidade que realmente importa para o controle da casa inteligente é a chamada de função confiável — transformar linguagem natural em uma chamada corretamente estruturada para um serviço específico do Home Assistant, não a capacidade conversacional geral.**',
        items: [
          'Um modelo ajustado ou especificamente capaz em chamada de função pode mapear "deixe a sala de estar mais quente" de forma confiável para a chamada de serviço de controle climático correta, uma habilidade mais restrita e mensurável do que a qualidade de um chat aberto.',
          'É também aqui que o risco de alucinação aparece especificamente para casas inteligentes — veja o guia sobre como reduzir alucinações de LLM na automação residencial para saber como restringir um modelo às entidades realmente disponíveis.',
          'Avalie um modelo candidato pela precisão de chamada de função para sua lista específica de entidades, não por pontuações gerais de benchmark, ao escolher entre modelos pequenos.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'Onde os modelos pequenos ficam aquém',
        content:
          '**Modelos pequenos são a escolha certa para a análise de comandos estruturados, não para perguntas abertas, raciocínio complexo em múltiplas etapas, ou tarefas que exijam amplo conhecimento de mundo.**',
        items: [
          'Se você quer que seu assistente de casa inteligente também responda bem a perguntas gerais, uma configuração híbrida que roteia entradas do tipo comando para um modelo pequeno e perguntas abertas para um modelo maior (local ou não) é um padrão comum.',
          'Modelos pequenos são mais propensos do que os grandes a interpretar mal frases ambíguas — uma fraseologia de comando clara e consistente, junto com nomes de entidades bem delimitados, reduz esse risco mais do que aumentar o tamanho do modelo.',
          'Para automações além da simples análise de comandos — raciocinar entre vários sensores, decidir se um padrão incomum justifica uma notificação — um modelo maior pode realmente valer a latência adicional, dependendo de quão sensível ao tempo a automação é.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'Como isso difere do guia de modelos recomendados',
        content:
          '**Este artigo explica por que modelos pequenos são a escolha arquitetural certa para o controle da casa inteligente; a lista curta de modelos recomendados sugere modelos atuais específicos para executar.**',
        items: [
          'Leia este artigo primeiro se quiser entender o raciocínio por trás da recomendação de modelos pequenos.',
          'Acesse o guia dos melhores modelos LLM locais para o controle da casa inteligente para modelos específicos e atualmente recomendados, e seus requisitos de hardware.',
          'Para opções de modelos de linguagem pequenos específicas para dispositivos móveis (um contexto de hardware diferente), veja o guia entre clusters sobre modelos LLM móveis.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Um modelo de linguagem pequeno é menos preciso do que um grande para o controle da casa inteligente?', a: 'Não necessariamente para essa tarefa específica — a precisão de chamada de função para comandos estruturados depende mais de quão adequado o modelo é para essa tarefa restrita do que da contagem total de parâmetros. Um modelo grande de propósito geral não é automaticamente melhor em analisar "apague as luzes" do que um modelo pequeno ajustado para isso.' },
          { q: 'Que tamanho conta como um modelo de linguagem "pequeno" aqui?', a: 'Aproximadamente 1 a 4 bilhões de parâmetros é a faixa prática discutida neste artigo — pequeno o suficiente para rodar de forma responsiva na GPU ou NPU integrada de um mini PC, sem precisar de uma GPU dedicada.' },
          { q: 'Posso executar um modelo pequeno em um Raspberry Pi?', a: 'Modelos muito pequenos podem rodar em um Pi, embora lentamente — veja o guia do melhor hardware para uma casa inteligente local para os trade-offs entre um Pi e um mini PC para essa carga de trabalho.' },
          { q: 'Preciso de um modelo diferente para perguntas abertas versus comandos?', a: 'Muitas configurações roteiam os dois de forma diferente — um modelo pequeno lida com a análise de comandos rapidamente, enquanto perguntas abertas podem ir para um modelo local ou em nuvem maior se você quiser capacidade conversacional mais ampla. Essa é uma escolha de arquitetura, não uma exigência.' },
          { q: 'Como isso se relaciona com a redução de alucinações na automação residencial?', a: 'Um modelo menor e bem delimitado, que só precisa mapear comandos para uma lista de entidades conhecida, é inerentemente menos propenso a inventar dispositivos ou interpretar mal o estado do que um modelo de propósito geral solicitado a raciocinar de forma mais ampla — veja o guia de redução de alucinações para as técnicas específicas.' },
          { q: 'Quais modelos pequenos específicos devo usar?', a: 'Veja o guia dos melhores modelos LLM locais para o controle da casa inteligente para recomendações atuais e específicas — este artigo cobre o raciocínio por trás da escolha do tamanho, não uma lista de modelos.' },
          { q: 'Um modelo pequeno precisa de menos RAM?', a: 'Sim — uma contagem menor de parâmetros se traduz diretamente em requisitos de memória mais baixos, o que é parte do motivo pelo qual eles rodam bem no hardware integrado de um mini PC em vez de exigir uma GPU dedicada.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Os melhores modelos LLM locais para o controle da casa inteligente](/pt/smart-home/best-local-llm-models-smart-home) — recomendações específicas de modelos atuais',
          '[Reduzindo alucinações de LLM na automação residencial](/pt/smart-home/reducing-llm-hallucinations-home-automation) — restringindo modelos para evitar erros',
          '[Execute sua casa inteligente com um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — a stack completa de LLM local',
          '[Modelos LLM móveis: Phi, Gemma, SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — entre clusters: modelos de linguagem pequenos em hardware móvel',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Modelos de linguagem pequenos para o controle da casa inteligente (2027)',
      description: 'Por que o controle por voz e a automação da casa inteligente favorecem modelos de linguagem pequenos em vez de LLMs grandes de propósito geral.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-small-language-models-smart-home',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Modelos de linguagem pequenos' }, { '@type': 'Thing', name: 'Chamada de função' }, { '@type': 'Thing', name: 'IA para automação residencial' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Um modelo de linguagem pequeno é menos preciso do que um grande para o controle da casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'Não necessariamente — a precisão de chamada de função para comandos estruturados depende mais da adequação à tarefa do que da contagem total de parâmetros.' } },
        { '@type': 'Question', name: 'Que tamanho conta como um modelo de linguagem "pequeno" aqui?', acceptedAnswer: { '@type': 'Answer', text: 'Aproximadamente 1 a 4 bilhões de parâmetros — pequeno o suficiente para rodar de forma responsiva na GPU ou NPU integrada de um mini PC.' } },
        { '@type': 'Question', name: 'Quais modelos pequenos específicos devo usar?', acceptedAnswer: { '@type': 'Answer', text: 'Veja o guia dos melhores modelos LLM locais para o controle da casa inteligente para recomendações atuais e específicas.' } },
        { '@type': 'Question', name: 'Um modelo pequeno precisa de menos RAM?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — uma contagem menor de parâmetros se traduz diretamente em requisitos de memória mais baixos.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-ar.png',
    title: 'نماذج اللغة الصغيرة للتحكم في المنزل الذكي (⁨2027⁩)',
    seoTitle: 'نماذج اللغة الصغيرة للمنزل الذكي (⁨2027⁩)',
    intro:
      'نماذج اللغة الصغيرة — التي تتراوح تقريبًا بين مليار و4 مليارات معلمة — هي الخيار العملي للتحكم الصوتي والأتمتة في المنزل الذكي، ليس لأنها أقل قدرة بشكل عام، بل لأنها تعمل بسرعة كافية على أجهزة محلية متواضعة وتتخصص جيدًا في المهمة الضيقة المتمثلة في تحويل أمر منطوق إلى إجراء على جهاز. يوضح هذا المقال لماذا يفضّل التحكم في المنزل الذكي النماذج الصغيرة على الكبيرة، والمقايضات المعمارية المرتبطة بذلك، وكيف يختلف ذلك عن قائمة مختصرة لاختيار النماذج موجودة بالفعل على هذا الموقع.',
    metaDescription:
      'لماذا يفضّل التحكم الصوتي والأتمتة في المنزل الذكي نماذج اللغة الصغيرة على نماذج اللغة الكبيرة متعددة الأغراض — زمن الاستجابة، وقابلية التشغيل على الجهاز، ومقايضات استدعاء الوظائف.',
    twitterDescription:
      'نماذج اللغة الصغيرة للتحكم في المنزل الذكي: لماذا تتفوق النماذج بين مليار و4 مليارات معلمة على النماذج الكبيرة في زمن الاستجابة وقابلية التشغيل على الجهاز.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'أصحاب المنازل الذكية ومستخدمو Home Assistant الذين يقيّمون حجم النموذج المناسب للتشغيل من أجل التحكم الصوتي/الأتمتة محليًا',
    primaryTerm: 'نماذج اللغة الصغيرة المنزل الذكي',
    targetKeywords: [
      'نماذج اللغة الصغيرة المنزل الذكي',
      'slm home assistant تحكم',
      'llm صغير مساعد صوتي محلي',
      'نموذج استدعاء الوظائف المنزل الذكي',
      'حجم النموذج المحلي أتمتة المنزل',
    ],
    leadAnswerBlock:
      '**يفضّل التحكم الصوتي والأتمتة في المنزل الذكي نماذج اللغة الصغيرة (بين مليار و4 مليارات معلمة تقريبًا) على نماذج اللغة الكبيرة متعددة الأغراض لأن المهمة ضيقة — تحليل أمر واستدعاء الوظيفة الصحيحة — وتتعامل النماذج الصغيرة معها بزمن استجابة أقل بكثير على أجهزة محلية متواضعة.** النموذج الأكبر ليس مهدرًا، بل يمثل ببساطة عبئًا إضافيًا غير ضروري لهذه المهمة المحددة.',
    quickAnswerTop: {
      ar: {
        question: 'لماذا تستخدم المنازل الذكية نماذج لغة صغيرة بدلًا من الكبيرة؟',
        answer:
          'التحكم في المنزل الذكي مهمة ضيقة — تفسير أمر منطوق أو مكتوب وربطه بإجراء محدد على جهاز — تتعامل معها النماذج الصغيرة والسريعة والقادرة على استدعاء الوظائف بشكل جيد دون الحاجة إلى المعرفة العامة الواسعة التي يحملها نموذج كبير. تشغيل نموذج صغير محليًا يعني زمن استجابة أقل (يضيء الضوء بشكل أسرع) ومتطلبات أجهزة أقل (تكفي وحدة معالجة الرسومات المدمجة في جهاز الكمبيوتر المصغر، دون الحاجة إلى وحدة معالجة رسومات منفصلة). بالنسبة للأسئلة المفتوحة أو الاستدلال المعقد، لا يزال بإمكان إعداد المنزل الذكي التوجيه إلى نموذج أكبر — يتعامل النموذج الصغير مع الحالة الشائعة الحساسة لزمن الاستجابة.',
        bullets: [
          'المهمة ضيقة: تحليل الأمر → استدعاء وظيفة الجهاز، وليست استدلالًا مفتوحًا',
          'تعمل النماذج الصغيرة (بين مليار و4 مليارات معلمة تقريبًا) بزمن استجابة أقل بكثير على أجهزة متواضعة',
          'تكفي وحدة معالجة رسومات/معالج عصبي مدمج قادر — لا حاجة إلى وحدة معالجة رسومات منفصلة لهذه المهمة المحددة',
          'تظل النماذج الأكبر مفيدة للأسئلة المفتوحة، ويتم توجيهها بشكل منفصل عند الحاجة',
          'راجع القائمة المختصرة لاختيار النماذج للحصول على توصيات محددة وحالية',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'لماذا يتفوق الصغير على الكبير هنا', anchor: 'why-small' },
      { label: 'استدعاء الوظائف هو القدرة الأساسية', anchor: 'function-calling' },
      { label: 'أين تقصّر النماذج الصغيرة', anchor: 'limits' },
      { label: 'كيف يختلف هذا عن دليل اختيار النماذج', anchor: 'differs' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'تتعامل نماذج اللغة الصغيرة (بين مليار و4 مليارات معلمة تقريبًا) مع تحليل أوامر المنزل الذكي واستدعاء الوظائف بزمن استجابة أقل من نماذج اللغة الكبيرة متعددة الأغراض، وهو أمر يهم أكثر لهذه المهمة الضيقة من اتساع المعرفة.' },
      { type: 'plain-terms', content: 'نموذج الذكاء الاصطناعي الكبير أشبه بموسوعي يعرف الكثير عن كل شيء لكنه يستغرق وقتًا أطول للإجابة. النموذج الصغير أشبه بمتخصص مدرّب لمهمة واحدة — تحويل "أطفئ الأضواء" إلى الأمر الفعلي الذي يفهمه منزلك الذكي. لهذه المهمة الواحدة، يكون المتخصص أسرع ويحتاج إلى أجهزة أقل قوة، رغم أن الموسوعي قد يتفوق في الإجابة عن سؤال ثقافة عامة واسع.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'التحكم في المنزل الذكي مهمة ضيقة (تحليل الأمر → استدعاء الوظيفة)، تتعامل معها النماذج الصغيرة بشكل جيد',
          'تعمل النماذج الصغيرة (بين مليار و4 مليارات معلمة تقريبًا) بزمن استجابة أقل على أجهزة محلية متواضعة — تكفي وحدة معالجة رسومات/معالج عصبي مدمج قادر',
          'تهم دقة استدعاء الوظائف أكثر من اتساع المعرفة العامة لهذه المهمة المحددة',
          'تظل النماذج الأكبر مفيدة للأسئلة المفتوحة — يمكن للإعداد التوجيه إلى نموذج منفصل عند الحاجة',
          'للحصول على توصيات محددة وحالية، راجع القائمة المختصرة لأفضل نماذج LLM المحلية للتحكم في المنزل الذكي',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: 'لماذا يتفوق الصغير على الكبير هنا',
        content:
          '**زمن الاستجابة هو العامل الحاسم في التحكم الصوتي — يحتاج أمر المنزل الذكي إلى التنفيذ في وقت قريب من الزمن الفعلي، ويستجيب نموذج صغير على أجهزة محلية بشكل أسرع مما يفعله نموذج كبير على الأجهزة نفسها.**',
        items: [
          'يحتاج النموذج الكبير إلى حساب أكبر بكثير لكل رمز يتم توليده، وهو ما يترجم مباشرة إلى استجابات أبطأ على الأجهزة المحلية نفسها — ملحوظ كتأخير بين نطق الأمر وإضاءة الضوء فعليًا.',
          'عادةً ما تكون أوامر المنزل الذكي قصيرة ومنظمة ("أطفئ أضواء غرفة النوم"، "اضبط الترموستات على 20 درجة")، وهو ما لا يتطلب الاستدلال الأوسع أو قاعدة المعرفة التي يوفرها نموذج كبير.',
          'يعني تشغيل نموذج صغير محليًا أيضًا متطلبات أجهزة أقل — راجع دليل أفضل الأجهزة لمنزل ذكي محلي لمعرفة كيف يبدو جهاز قادر على تشغيل نماذج صغيرة مقارنة بما يحتاجه جهاز لنماذج أكبر.',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: 'استدعاء الوظائف هو القدرة الأساسية',
        content:
          '**القدرة التي تهم فعليًا للتحكم في المنزل الذكي هي استدعاء الوظائف الموثوق — تحويل اللغة الطبيعية إلى استدعاء منظم بشكل صحيح لخدمة محددة في Home Assistant، وليست القدرة على المحادثة العامة.**',
        items: [
          'يمكن لنموذج تم ضبطه بدقة أو قادر تحديدًا على استدعاء الوظائف أن يربط بشكل موثوق "اجعل غرفة المعيشة أدفأ" باستدعاء خدمة التحكم بالمناخ الصحيح، وهي مهارة أضيق وأكثر قابلية للقياس من جودة الدردشة المفتوحة.',
          'هنا أيضًا يظهر خطر الهلوسة تحديدًا في المنازل الذكية — راجع دليل تقليل هلوسات LLM في أتمتة المنزل لمعرفة كيفية تقييد نموذج بالكيانات المتاحة فعليًا.',
          'قيّم نموذجًا مرشحًا بناءً على دقة استدعاء الوظائف لقائمة الكيانات المحددة لديك، وليس بناءً على درجات المعايير العامة، عند الاختيار بين النماذج الصغيرة.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'أين تقصّر النماذج الصغيرة',
        content:
          '**النماذج الصغيرة هي الخيار الصحيح لتحليل الأوامر المنظمة، وليست للأسئلة المفتوحة، أو الاستدلال المعقد متعدد الخطوات، أو المهام التي تتطلب معرفة واسعة بالعالم.**',
        items: [
          'إذا كنت تريد أن يجيب مساعد منزلك الذكي أيضًا بشكل جيد عن أسئلة عامة، فإن الإعداد الهجين الذي يوجّه المدخلات الشبيهة بالأوامر إلى نموذج صغير والأسئلة المفتوحة إلى نموذج أكبر (محلي أو غير ذلك) هو نمط شائع.',
          'النماذج الصغيرة أكثر عرضة من الكبيرة لإساءة تفسير الصياغات الغامضة — تقلل صياغة الأوامر الواضحة والمتسقة وأسماء الكيانات محددة النطاق بشكل جيد من هذا الخطر أكثر من ترقية حجم النموذج.',
          'بالنسبة للأتمتة التي تتجاوز تحليل الأوامر البسيط — الاستدلال عبر عدة أجهزة استشعار، وتحديد ما إذا كان نمط غير معتاد يستدعي إشعارًا — قد يكون نموذج أكبر جديرًا فعليًا بزمن الاستجابة الإضافي، اعتمادًا على مدى حساسية الأتمتة للوقت.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'كيف يختلف هذا عن دليل اختيار النماذج',
        content:
          '**يوضح هذا المقال لماذا تُعد النماذج الصغيرة الاختيار المعماري الصحيح للتحكم في المنزل الذكي؛ توصي القائمة المختصرة لاختيار النماذج بنماذج حالية محددة للتشغيل.**',
        items: [
          'اقرأ هذا المقال أولًا إذا كنت تريد فهم المنطق وراء التوصية بالنماذج الصغيرة.',
          'انتقل إلى دليل أفضل نماذج LLM المحلية للتحكم في المنزل الذكي للحصول على نماذج محددة وموصى بها حاليًا ومتطلبات أجهزتها.',
          'للحصول على خيارات نماذج لغة صغيرة خاصة بالأجهزة المحمولة (سياق أجهزة مختلف)، راجع الدليل المشترك بين المجموعات حول نماذج LLM للأجهزة المحمولة.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل يكون نموذج اللغة الصغير أقل دقة من الكبير في التحكم بالمنزل الذكي؟', a: 'ليس بالضرورة لهذه المهمة المحددة — تعتمد دقة استدعاء الوظائف للأوامر المنظمة على مدى ملاءمة النموذج لتلك المهمة الضيقة أكثر من اعتمادها على العدد الإجمالي للمعلمات. لا يكون النموذج الكبير متعدد الأغراض أفضل تلقائيًا في تحليل "أطفئ الأضواء" من نموذج صغير مضبوط لذلك.' },
          { q: 'ما الحجم الذي يُعد نموذج لغة "صغيرًا" هنا؟', a: 'النطاق العملي الذي يتناوله هذا المقال هو تقريبًا بين مليار و4 مليارات معلمة — صغير بما يكفي للعمل بسرعة استجابة جيدة على وحدة معالجة الرسومات أو المعالج العصبي المدمج في جهاز كمبيوتر مصغر، دون الحاجة إلى وحدة معالجة رسومات منفصلة.' },
          { q: 'هل يمكنني تشغيل نموذج صغير على جهاز Raspberry Pi؟', a: 'يمكن تشغيل نماذج صغيرة جدًا على جهاز Pi، وإن كان ذلك ببطء — راجع دليل أفضل الأجهزة لمنزل ذكي محلي للاطلاع على المقايضات بين جهاز Pi وجهاز كمبيوتر مصغر لهذا العبء.' },
          { q: 'هل أحتاج إلى نموذج مختلف للأسئلة المفتوحة مقابل الأوامر؟', a: 'توجّه العديد من الإعدادات الاثنين بشكل مختلف — يتعامل نموذج صغير مع تحليل الأوامر بسرعة، بينما يمكن توجيه الأسئلة المفتوحة إلى نموذج محلي أو سحابي أكبر إذا كنت تريد قدرة محادثة أوسع. هذا خيار معماري، وليس شرطًا.' },
          { q: 'كيف يرتبط هذا بتقليل الهلوسات في أتمتة المنزل؟', a: 'النموذج الأصغر والمحدد النطاق جيدًا، والذي يحتاج فقط إلى ربط الأوامر بقائمة كيانات معروفة، يكون بطبيعته أقل عرضة لاختلاق أجهزة أو إساءة قراءة الحالة من نموذج متعدد الأغراض يُطلب منه الاستدلال بشكل أوسع — راجع دليل تقليل الهلوسات للاطلاع على التقنيات المحددة.' },
          { q: 'ما النماذج الصغيرة المحددة التي يجب أن أستخدمها؟', a: 'راجع دليل أفضل نماذج LLM المحلية للتحكم في المنزل الذكي للحصول على توصيات حالية ومحددة — يغطي هذا المقال المنطق وراء اختيار الحجم، وليس قائمة نماذج.' },
          { q: 'هل يحتاج النموذج الصغير إلى ذاكرة وصول عشوائي أقل؟', a: 'نعم — يترجم عدد المعلمات الأصغر مباشرة إلى متطلبات ذاكرة أقل، وهو جزء من سبب عملها بشكل جيد على الأجهزة المدمجة في جهاز الكمبيوتر المصغر بدلًا من الحاجة إلى وحدة معالجة رسومات منفصلة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل نماذج LLM المحلية للتحكم في المنزل الذكي](/ar/smart-home/best-local-llm-models-smart-home) — اختيارات نماذج حالية محددة',
          '[تقليل هلوسات LLM في أتمتة المنزل](/ar/smart-home/reducing-llm-hallucinations-home-automation) — تقييد النماذج لتجنب الأخطاء',
          '[شغّل منزلك الذكي باستخدام LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — حزمة LLM المحلية الكاملة',
          '[نماذج LLM للأجهزة المحمولة: Phi وGemma وSmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — مشترك بين المجموعات: نماذج اللغة الصغيرة على أجهزة محمولة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'نماذج اللغة الصغيرة للتحكم في المنزل الذكي (⁨2027⁩)',
      description: 'لماذا يفضّل التحكم الصوتي والأتمتة في المنزل الذكي نماذج اللغة الصغيرة على نماذج اللغة الكبيرة متعددة الأغراض.',
      url: 'https://www.promptquorum.com/ar/smart-home/local-small-language-models-smart-home',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'نماذج اللغة الصغيرة' }, { '@type': 'Thing', name: 'استدعاء الوظائف' }, { '@type': 'Thing', name: 'ذكاء اصطناعي لأتمتة المنزل' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يكون نموذج اللغة الصغير أقل دقة من الكبير في التحكم بالمنزل الذكي؟', acceptedAnswer: { '@type': 'Answer', text: 'ليس بالضرورة — تعتمد دقة استدعاء الوظائف للأوامر المنظمة على ملاءمة المهمة أكثر من اعتمادها على العدد الإجمالي للمعلمات.' } },
        { '@type': 'Question', name: 'ما الحجم الذي يُعد نموذج لغة "صغيرًا" هنا؟', acceptedAnswer: { '@type': 'Answer', text: 'تقريبًا بين مليار و4 مليارات معلمة — صغير بما يكفي للعمل بسرعة استجابة جيدة على وحدة معالجة الرسومات أو المعالج العصبي المدمج في جهاز كمبيوتر مصغر.' } },
        { '@type': 'Question', name: 'ما النماذج الصغيرة المحددة التي يجب أن أستخدمها؟', acceptedAnswer: { '@type': 'Answer', text: 'راجع دليل أفضل نماذج LLM المحلية للتحكم في المنزل الذكي للحصول على توصيات حالية ومحددة.' } },
        { '@type': 'Question', name: 'هل يحتاج النموذج الصغير إلى ذاكرة وصول عشوائي أقل؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — يترجم عدد المعلمات الأصغر مباشرة إلى متطلبات ذاكرة أقل.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/local-small-language-models-smart-home-overview-hero-ko.png',
    title: '스마트홈 제어를 위한 소형 언어 모델 (2027년)',
    seoTitle: '스마트홈용 소형 언어 모델 (2027년)',
    intro:
      '소형 언어 모델—대략 10억~40억 파라미터—은 스마트홈 음성 및 자동화 제어에 실용적인 선택입니다. 전반적으로 성능이 낮아서가 아니라, 사양이 소박한 로컬 하드웨어에서도 충분히 빠르게 실행되며 음성 명령을 기기 동작으로 변환하는 좁은 작업에 잘 특화되기 때문입니다. 이 글은 왜 스마트홈 제어가 대형 모델보다 소형 모델을 선호하는지, 여기에 관련된 아키텍처 트레이드오프, 그리고 이 사이트에 이미 있는 모델 추천 목록과 어떻게 다른지 설명합니다.',
    metaDescription:
      '스마트홈 음성 및 자동화 제어가 대형 범용 LLM보다 소형 언어 모델을 선호하는 이유—지연 시간, 온디바이스 실현 가능성, 함수 호출 트레이드오프.',
    twitterDescription:
      '스마트홈 제어를 위한 소형 언어 모델: 10억~40억 파라미터 모델이 지연 시간과 온디바이스 실현 가능성에서 대형 LLM을 이기는 이유.',
    readTime: '읽는 시간 7분',
    educationalLevel: 'Intermediate',
    audience: '로컬 음성/자동화 제어에 어떤 크기의 모델을 실행할지 평가하는 스마트홈 소유자 및 Home Assistant 사용자',
    primaryTerm: '스마트홈 소형 언어 모델',
    targetKeywords: [
      '스마트홈 소형 언어 모델',
      'slm home assistant 제어',
      '소형 llm 음성 비서 로컬',
      '함수 호출 모델 스마트홈',
      '로컬 모델 크기 홈 오토메이션',
    ],
    leadAnswerBlock:
      '**스마트홈 음성 및 자동화 제어는 대형 범용 LLM보다 소형 언어 모델(대략 10억~40억 파라미터)을 선호합니다. 작업이 좁기 때문입니다—명령을 파싱하고 올바른 함수를 호출하는 것—그리고 소형 모델은 사양이 소박한 로컬 하드웨어에서도 훨씬 낮은 지연 시간으로 이를 처리합니다.** 더 큰 모델이 낭비되는 것은 아니며, 이 특정 작업에는 그저 불필요한 오버헤드일 뿐입니다.',
    quickAnswerTop: {
      ko: {
        question: '스마트홈은 왜 대형 모델 대신 소형 언어 모델을 사용하나요?',
        answer:
          '스마트홈 제어는 좁은 작업입니다—음성 또는 텍스트로 입력된 명령을 해석하여 특정 기기 동작에 매핑하는 것—대형 모델이 갖춘 폭넓은 일반 지식을 필요로 하지 않으면서, 작고 빠르며 함수 호출에 능한 모델이 이를 잘 처리합니다. 소형 모델을 로컬로 실행하면 지연 시간이 낮아지고(조명이 더 빨리 켜짐) 하드웨어 요구 사항도 낮아집니다(개별 GPU가 필요 없이 미니 PC의 내장 GPU로 충분함). 개방형 질문이나 복잡한 추론의 경우, 스마트홈 설정은 여전히 더 큰 모델로 라우팅할 수 있습니다—소형 모델은 흔하고 지연 시간에 민감한 경우를 처리합니다.',
        bullets: [
          '작업이 좁음: 명령 파싱 → 기기 함수 호출, 개방형 추론이 아님',
          '소형 모델(대략 10억~40억 파라미터)은 사양이 소박한 하드웨어에서도 훨씬 낮은 지연 시간으로 실행됨',
          '성능이 좋은 내장 GPU/NPU면 충분함—이 특정 작업에는 개별 GPU가 필요하지 않음',
          '더 큰 모델은 개방형 질문에 여전히 유용하며, 필요 시 별도로 라우팅됨',
          '구체적인 현재 모델 추천은 모델 추천 목록을 참조하세요',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '여기서 소형 모델이 대형 모델을 이기는 이유', anchor: 'why-small' },
      { label: '함수 호출이 핵심 역량입니다', anchor: 'function-calling' },
      { label: '소형 모델이 부족한 부분', anchor: 'limits' },
      { label: '모델 추천 가이드와 이 글의 차이점', anchor: 'differs' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '소형 언어 모델(대략 10억~40억 파라미터)은 대형 범용 LLM보다 낮은 지연 시간으로 스마트홈 명령 파싱과 함수 호출을 처리하며, 이는 이 좁은 작업에서 폭넓은 지식보다 더 중요합니다.' },
      { type: 'plain-terms', content: '거대한 AI 모델은 모든 것에 대해 많이 알지만 답하는 데 시간이 더 걸리는 제너럴리스트와 같습니다. 소형 모델은 하나의 작업을 위해 훈련된 스페셜리스트와 같습니다—"불 꺼줘"를 당신의 스마트홈이 이해하는 실제 명령으로 변환하는 것입니다. 그 한 가지 작업에서는 스페셜리스트가 더 빠르고 덜 강력한 하드웨어만 있으면 되지만, 폭넓은 상식 질문에 답하는 데는 제너럴리스트가 더 나을 것입니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '스마트홈 제어는 좁은 작업(명령 파싱 → 함수 호출)이며, 소형 모델이 이를 잘 처리함',
          '소형 모델(대략 10억~40억 파라미터)은 사양이 소박한 로컬 하드웨어에서도 낮은 지연 시간으로 실행됨—성능이 좋은 iGPU/NPU면 충분함',
          '이 특정 작업에서는 함수 호출 정확도가 일반 지식의 폭보다 더 중요함',
          '더 큰 모델은 개방형 질문에 여전히 유용함—필요 시 설정에서 별도로 라우팅할 수 있음',
          '구체적인 현재 모델 추천은 스마트홈 제어용 최고의 로컬 LLM 모델 목록을 참조하세요',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: '여기서 소형 모델이 대형 모델을 이기는 이유',
        content:
          '**음성 제어에서 결정적인 요인은 지연 시간입니다—스마트홈 명령은 실시간에 가깝게 실행되어야 하며, 로컬 하드웨어에서 소형 모델은 동일한 하드웨어의 대형 모델보다 더 빠르게 응답합니다.**',
        items: [
          '대형 모델은 생성되는 토큰마다 상당히 더 많은 연산을 필요로 하며, 이는 동일한 로컬 하드웨어에서 더 느린 응답으로 직결됩니다—명령을 말하고 실제로 조명이 켜지기까지의 지연으로 체감됩니다.',
          '스마트홈 명령은 일반적으로 짧고 구조화되어 있어("침실 조명 꺼줘", "온도조절기 20도로 설정") 대형 모델이 제공하는 더 폭넓은 추론이나 지식 기반이 필요하지 않습니다.',
          '소형 모델을 로컬로 실행하면 하드웨어 요구 사항도 낮아집니다—소형 모델을 감당할 수 있는 기기와 더 큰 모델에 필요한 기기가 어떻게 다른지는 로컬 스마트홈용 최고의 하드웨어 가이드를 참조하세요.',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: '함수 호출이 핵심 역량입니다',
        content:
          '**스마트홈 제어에 실제로 중요한 역량은 신뢰할 수 있는 함수 호출입니다—자연어를 특정 Home Assistant 서비스에 대한 올바르게 구조화된 호출로 변환하는 것이지, 일반적인 대화 능력이 아닙니다.**',
        items: [
          '함수 호출에 맞게 미세 조정되었거나 본래 그 능력이 뛰어난 모델은 "거실을 더 따뜻하게 해줘"를 올바른 온도 제어 서비스 호출에 신뢰성 있게 매핑할 수 있으며, 이는 개방형 채팅 품질보다 더 좁고 측정 가능한 능력입니다.',
          '이는 또한 스마트홈에 특유한 환각 위험이 나타나는 지점이기도 합니다—모델을 실제로 사용 가능한 엔티티로 제한하는 방법은 홈 오토메이션에서 LLM 환각 줄이기 가이드를 참조하세요.',
          '소형 모델 중에서 선택할 때는 일반적인 벤치마크 점수가 아니라, 당신의 구체적인 엔티티 목록에 대한 함수 호출 정확도로 후보 모델을 평가하세요.',
        ],
      },
      limits: {
        id: 'limits',
        title: '소형 모델이 부족한 부분',
        content:
          '**소형 모델은 구조화된 명령 파싱에는 올바른 선택이지만, 개방형 질문, 복잡한 다단계 추론, 또는 폭넓은 세계 지식을 요구하는 작업에는 적합하지 않습니다.**',
        items: [
          '스마트홈 비서가 일반적인 질문에도 잘 답하길 원한다면, 명령형 입력은 소형 모델로, 개방형 질문은 (로컬이든 아니든) 더 큰 모델로 라우팅하는 하이브리드 설정이 일반적인 패턴입니다.',
          '소형 모델은 대형 모델보다 모호한 표현을 잘못 해석하기 쉽습니다—명확하고 일관된 명령 표현과 범위가 잘 정해진 엔티티 이름이 모델 크기를 키우는 것보다 이 위험을 더 효과적으로 줄여줍니다.',
          '단순한 명령 파싱을 넘어서는 자동화—여러 센서에 걸친 추론, 특이한 패턴이 알림을 보낼 만한지 판단하는 것—의 경우, 자동화가 얼마나 시간에 민감한지에 따라 더 큰 모델이 추가 지연 시간을 감수할 만한 가치가 있을 수 있습니다.',
        ],
      },
      differs: {
        id: 'differs',
        title: '모델 추천 가이드와 이 글의 차이점',
        content:
          '**이 글은 왜 소형 모델이 스마트홈 제어에 올바른 아키텍처 선택인지 설명하며, 모델 추천 목록은 실제로 실행할 구체적인 현재 모델을 추천합니다.**',
        items: [
          '소형 모델 추천 뒤에 있는 논리를 이해하고 싶다면 이 글을 먼저 읽으세요.',
          '구체적이고 현재 추천되는 모델과 그 하드웨어 요구 사항은 스마트홈 제어용 최고의 로컬 LLM 모델 가이드를 참조하세요.',
          '모바일 기기 전용 소형 언어 모델 옵션(다른 하드웨어 맥락)은 클러스터 간 모바일 LLM 모델 가이드를 참조하세요.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '스마트홈 제어에서 소형 언어 모델이 대형 모델보다 정확도가 낮나요?', a: '이 특정 작업에서는 반드시 그렇지는 않습니다—구조화된 명령에 대한 함수 호출 정확도는 전체 파라미터 수보다 모델이 그 좁은 작업에 얼마나 잘 맞는지에 더 좌우됩니다. 대형 범용 모델이 "불 꺼줘"를 파싱하는 데 있어 그 용도로 튜닝된 소형 모델보다 자동으로 더 뛰어난 것은 아닙니다.' },
          { q: '여기서 "소형" 언어 모델은 어느 정도 크기를 말하나요?', a: '이 글에서 다루는 실용적인 범위는 대략 10억에서 40억 파라미터입니다—개별 GPU 없이도 미니 PC의 내장 GPU나 NPU에서 반응성 있게 실행될 만큼 충분히 작습니다.' },
          { q: 'Raspberry Pi에서 소형 모델을 실행할 수 있나요?', a: '매우 작은 모델은 Pi에서 실행할 수 있지만 속도는 느립니다—이 작업 부하에 대해 Pi와 미니 PC 사이의 트레이드오프는 로컬 스마트홈용 최고의 하드웨어 가이드를 참조하세요.' },
          { q: '개방형 질문과 명령에 서로 다른 모델이 필요한가요?', a: '많은 설정이 둘을 다르게 라우팅합니다—소형 모델이 명령 파싱을 빠르게 처리하고, 더 폭넓은 대화 능력을 원한다면 개방형 질문은 더 큰 로컬 또는 클라우드 모델로 보낼 수 있습니다. 이는 아키텍처 선택이지 필수 사항이 아닙니다.' },
          { q: '이것이 홈 오토메이션의 환각 줄이기와 어떻게 관련되나요?', a: '알려진 엔티티 목록에 명령을 매핑하기만 하면 되는, 더 작고 범위가 잘 정해진 모델은 더 폭넓게 추론하도록 요구받는 범용 모델보다 본질적으로 기기를 지어내거나 상태를 잘못 읽을 가능성이 낮습니다—구체적인 기법은 환각 줄이기 가이드를 참조하세요.' },
          { q: '구체적으로 어떤 소형 모델을 사용해야 하나요?', a: '구체적인 현재 추천은 스마트홈 제어용 최고의 로컬 LLM 모델 가이드를 참조하세요—이 글은 모델 목록이 아니라 크기 선택 뒤에 있는 논리를 다룹니다.' },
          { q: '소형 모델은 RAM이 더 적게 필요한가요?', a: '네—더 적은 파라미터 수는 직접적으로 더 낮은 메모리 요구 사항으로 이어지며, 이는 소형 모델이 개별 GPU 없이도 미니 PC의 내장 하드웨어에서 잘 실행되는 이유의 일부입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[스마트홈 제어용 최고의 로컬 LLM 모델](/ko/smart-home/best-local-llm-models-smart-home) — 구체적인 현재 모델 추천',
          '[홈 오토메이션에서 LLM 환각 줄이기](/ko/smart-home/reducing-llm-hallucinations-home-automation) — 오류를 피하기 위해 모델을 제한하기',
          '[로컬 LLM으로 스마트홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — 로컬 LLM 스택 전체',
          '[모바일 LLM 모델: Phi, Gemma, SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 클러스터 간: 모바일 하드웨어에서의 소형 언어 모델',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '스마트홈 제어를 위한 소형 언어 모델 (2027년)',
      description: '스마트홈 음성 및 자동화 제어가 대형 범용 LLM보다 소형 언어 모델을 선호하는 이유.',
      url: 'https://www.promptquorum.com/ko/smart-home/local-small-language-models-smart-home',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '소형 언어 모델' }, { '@type': 'Thing', name: '함수 호출' }, { '@type': 'Thing', name: '홈 오토메이션 AI' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '스마트홈 제어에서 소형 언어 모델이 대형 모델보다 정확도가 낮나요?', acceptedAnswer: { '@type': 'Answer', text: '반드시 그렇지는 않습니다—구조화된 명령에 대한 함수 호출 정확도는 전체 파라미터 수보다 작업 적합성에 더 좌우됩니다.' } },
        { '@type': 'Question', name: '여기서 "소형" 언어 모델은 어느 정도 크기를 말하나요?', acceptedAnswer: { '@type': 'Answer', text: '대략 10억에서 40억 파라미터입니다—미니 PC의 내장 GPU나 NPU에서 반응성 있게 실행될 만큼 충분히 작습니다.' } },
        { '@type': 'Question', name: '구체적으로 어떤 소형 모델을 사용해야 하나요?', acceptedAnswer: { '@type': 'Answer', text: '구체적인 현재 추천은 스마트홈 제어용 최고의 로컬 LLM 모델 가이드를 참조하세요.' } },
        { '@type': 'Question', name: '소형 모델은 RAM이 더 적게 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '네—더 적은 파라미터 수는 직접적으로 더 낮은 메모리 요구 사항으로 이어집니다.' } },
      ],
    },
  },
}
