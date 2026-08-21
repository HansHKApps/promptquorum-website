import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-en.webp',
    title: 'Reducing LLM Hallucinations in Home Automation (2027)',
    seoTitle: 'Reducing LLM Hallucinations in Home Automation (2027)',
    intro:
      'An LLM hallucination in home automation looks different from a hallucinated fact in a chatbot: it means triggering the wrong device, misreading a sensor\'s actual state, or referencing an entity that doesn\'t exist in your Home Assistant setup. This article covers the smart-home-specific failure modes and the grounding techniques — function-calling schemas and entity-list constraints — that reduce them, building on general hallucination-reduction advice already covered elsewhere on this site.',
    metaDescription:
      "Reducing LLM hallucinations in home automation: why an AI triggers the wrong device or invents entities, and the grounding techniques that fix it.",
    twitterDescription:
      'Why a local LLM sometimes triggers the wrong smart home device — and the entity-constraint techniques that fix it.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users running LLM-driven automations who want fewer misfires',
    primaryTerm: 'llm hallucination home automation',
    targetKeywords: [
      'llm hallucination home automation',
      'ai automation wrong device triggered',
      'home assistant llm entity errors',
      'reduce ai automation mistakes',
      'function calling grounding home assistant',
    ],
    leadAnswerBlock:
      '**In home automation, an LLM hallucination usually means triggering the wrong device, misreading a sensor\'s actual state, or referencing an entity that doesn\'t exist — a different failure mode from a chatbot inventing a fact, and one that\'s reduced by constraining the model to your actual, current entity list rather than letting it reason freely about device names.** Function-calling schemas that only expose real entities are the main fix.',
    quickAnswerTop: {
      en: {
        question: 'Why does my smart home AI sometimes trigger the wrong device?',
        answer:
          'This usually happens when the model is reasoning about device names or states from its general training rather than your actual current entity list — for example, guessing "living room light" exists when your entity is actually named "lounge lamp." The fix is grounding: constrain the model\'s function-calling schema to only the entities that actually exist in your Home Assistant instance, and pass in current entity state directly rather than letting the model infer or remember it. This is a smart-home-specific narrowing of general hallucination-reduction technique, applied to the function-calling layer specifically.',
        bullets: [
          'Root cause: model guesses at device names/states instead of using your actual current entity list',
          'Fix: constrain function-calling schema to only real, current entities — not free-form device names',
          'Pass current sensor/device state into the prompt directly rather than letting the model assume or remember it',
          'Different from general chatbot hallucination — see the general guide for that broader topic',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Hallucination Looks Like in Home Automation', anchor: 'what-it-looks-like' },
      { label: 'Grounding: Constrain to Real Entities', anchor: 'grounding' },
      { label: 'Passing Current State, Not Assumed State', anchor: 'current-state' },
      { label: 'Testing and Catching Errors', anchor: 'testing' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'LLM hallucination in home automation means triggering the wrong device or inventing a nonexistent entity, fixed mainly by constraining the model\'s function-calling schema to your actual current entity list.' },
      { type: 'plain-terms', content: 'A general AI hallucination is making up a wrong fact. In a smart home, the equivalent mistake is the AI turning on the wrong light or thinking a door is locked when it isn\'t, usually because it guessed at a device name instead of checking what actually exists. The main fix is only ever letting the AI choose from a list of your real, current devices, instead of letting it invent or assume one.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home automation hallucination = wrong device triggered, misread state, or a nonexistent entity referenced — not a made-up general fact',
          'Main fix: constrain the model\'s function-calling schema to only your actual, current entity list',
          'Pass current sensor/device state into the prompt directly, rather than letting the model assume or recall it from earlier in a conversation',
          'Small, well-scoped models (see the small language models guide) are inherently less prone to this than general-purpose models given a broad, unconstrained toolset',
          'Test automations against edge cases (renamed entities, offline devices) before trusting them unsupervised',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: 'What Hallucination Looks Like in Home Automation',
        content:
          '**The three common failure modes are: triggering a similarly-named but wrong device, acting on an assumed rather than actual sensor state, and referencing an entity that doesn\'t exist in your setup at all.**',
        items: [
          'Wrong-device triggering: asking to turn off "the lamp" when you have several lamps, and the model picks one based on a guess rather than clarifying or using context correctly.',
          'Assumed state: an automation acting as if a window is closed because that\'s the common case, rather than checking the actual current sensor reading.',
          'Nonexistent entity: the model references a device name that sounds plausible (because it\'s common in training data) but was never actually set up in your Home Assistant instance.',
        ],
      },
      grounding: {
        id: 'grounding',
        title: 'Grounding: Constrain to Real Entities',
        content:
          '**The primary fix is a function-calling schema that only ever exposes your actual, current entity list to the model — it can only call functions for devices that genuinely exist, eliminating the "invented entity" failure mode structurally.**',
        items: [
          'Generate the function-calling schema (or entity list passed to the model) dynamically from Home Assistant\'s actual current entity registry, rather than a hand-written or stale list that can drift out of sync as you add/remove devices.',
          'If your setup has ambiguous entity names (multiple "light" entities), rename them to be more distinct rather than relying on the model to disambiguate correctly — this is a configuration fix, not a prompting fix, and is more reliable.',
          'The home-assistant-ollama-integration guide covers the practical setup of connecting Ollama to Home Assistant\'s conversation agent, which handles much of this schema generation automatically.',
        ],
      },
      currentState: {
        id: 'current-state',
        title: 'Passing Current State, Not Assumed State',
        content:
          '**Automations that depend on sensor state should query the actual current reading at execution time, not rely on the model\'s memory of an earlier conversation turn or an assumption about typical state.**',
        items: [
          'For any automation where "is the window open" or "is the light already on" matters to the decision, fetch that state directly as part of the automation logic, rather than trusting the model to have tracked it correctly across a conversation.',
          'This is a general principle from reducing prompt brittleness (see the cross-cluster guide on that topic), applied specifically to sensor-backed smart home state.',
          'Combining multiple sensor readings (sensor fusion) before acting can also reduce single-sensor misreads feeding into a decision — see the sensor fusion in the smart home guide.',
        ],
      },
      testing: {
        id: 'testing',
        title: 'Testing and Catching Errors',
        content:
          '**Test automations against edge cases — a renamed entity, a temporarily offline device, an ambiguous command — before trusting them to run unsupervised, the same way you\'d test any automation logic.**',
        items: [
          'Deliberately test a command that references a recently renamed or removed entity to confirm the automation fails safely (asks for clarification or does nothing) rather than guessing at a similarly-named device.',
          'Log automation-triggered actions during an initial trial period so you can review what the model actually did versus what you intended, catching silent misfires before they become routine.',
          'Start new LLM-driven automations on low-stakes devices (lighting) before extending the pattern to higher-stakes ones (locks, security systems) where a wrong action has more consequence.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'How is this different from general AI hallucination advice?', a: 'General hallucination-reduction advice (see the AI hallucinations guide) covers made-up facts in open-ended text generation. This article is specific to the function-calling failure modes that occur when an LLM maps a command to a device action.' },
          { q: 'Does a smaller model hallucinate more or less in this context?', a: 'A well-scoped small model constrained to a specific function-calling schema is often less prone to this than a general-purpose model given a broad, unconstrained toolset — see the small language models guide for why.' },
          { q: 'Can I completely eliminate wrong-device triggers?', a: 'Not completely, but constraining the function-calling schema to your real current entity list, using distinct entity names, and testing edge cases significantly reduces the failure rate — treat it as risk reduction, not a guarantee.' },
          { q: 'Should I let an LLM control locks and security systems?', a: 'Start with lower-stakes devices (lighting) to build confidence in your specific setup\'s reliability before extending LLM control to higher-consequence devices like locks — this is a risk-management choice, not a technical requirement.' },
          { q: 'Does Home Assistant\'s Ollama integration handle entity grounding automatically?', a: 'It generates the available-entity list dynamically from your current setup for the conversation agent, which handles much of the grounding described here — see the Home Assistant + Ollama integration guide for the setup details.' },
          { q: 'What should an automation do if it can\'t confidently identify the right entity?', a: 'Fail safely — ask for clarification or take no action — rather than guessing at a similarly-named entity. This is a design choice in how you structure the automation\'s function-calling logic.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smarter Home Automations with a Local LLM](/smart-home/ai-automations-local-llm) — the broader automation pattern this refines',
          '[Connect Ollama to Home Assistant: Local AI Assistant](/smart-home/home-assistant-ollama-integration) — the integration that generates the entity schema',
          '[Small Language Models for Smart Home Control](/smart-home/local-small-language-models-smart-home) — why scoped models help here',
          '[Sensor Fusion in the Smart Home](/smart-home/sensor-fusion-smart-home-2027) — reducing single-sensor state errors',
          '[Reduce AI Hallucinations: A Practical Guide](/prompt-engineering/ai-hallucinations-how-to-stop) — cross-cluster: general hallucination-reduction techniques',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reducing LLM Hallucinations in Home Automation (2027)',
      description: 'Reducing LLM hallucinations in home automation: why an AI triggers the wrong device or invents entities, and the grounding techniques that fix it.',
      url: 'https://www.promptquorum.com/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'LLM hallucination' }, { '@type': 'Thing', name: 'Function calling' }, { '@type': 'Thing', name: 'Home automation reliability' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'How is this different from general AI hallucination advice?', acceptedAnswer: { '@type': 'Answer', text: 'General advice covers made-up facts in open-ended text. This article is specific to function-calling failures when an LLM maps a command to a device action.' } },
        { '@type': 'Question', name: 'Can I completely eliminate wrong-device triggers?', acceptedAnswer: { '@type': 'Answer', text: 'Not completely, but constraining the function-calling schema to your real entity list and testing edge cases significantly reduces the failure rate.' } },
        { '@type': 'Question', name: 'Should I let an LLM control locks and security systems?', acceptedAnswer: { '@type': 'Answer', text: 'Start with lower-stakes devices like lighting before extending LLM control to higher-consequence devices.' } },
        { '@type': 'Question', name: 'What should an automation do if it can\'t confidently identify the right entity?', acceptedAnswer: { '@type': 'Answer', text: 'Fail safely — ask for clarification or take no action — rather than guessing at a similarly-named entity.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-de.webp',
    title: 'LLM-Halluzinationen in der Hausautomation reduzieren (2027)',
    seoTitle: 'LLM-Halluzinationen in der Hausautomation reduzieren (2027)',
    intro:
      'Eine LLM-Halluzination in der Hausautomation sieht anders aus als eine halluzinierte Tatsache in einem Chatbot: Sie bedeutet, dass das falsche Gerät ausgelöst wird, der tatsächliche Zustand eines Sensors falsch gelesen wird oder eine Entität referenziert wird, die in deiner Home-Assistant-Konfiguration gar nicht existiert. Dieser Artikel behandelt die Smart-Home-spezifischen Fehlermodi und die Grounding-Techniken — Function-Calling-Schemas und Entitätslisten-Beschränkungen —, die sie reduzieren, aufbauend auf den allgemeinen Hinweisen zur Halluzinationsreduktion, die an anderer Stelle auf dieser Website bereits behandelt werden.',
    metaDescription:
      'LLM-Halluzinationen in der Hausautomation reduzieren: Warum eine KI das falsche Gerät auslöst oder Entitäten erfindet, und die Grounding-Techniken, die das beheben.',
    twitterDescription:
      'Warum ein lokales LLM manchmal das falsche Smart-Home-Gerät auslöst — und die Entitätsbeschränkungs-Techniken, die das beheben.',
    readTime: '7 Min. Lesezeit',
    audience: 'Home-Assistant-Nutzer mit LLM-gesteuerten Automatisierungen, die weniger Fehlauslösungen wollen',
    primaryTerm: 'llm halluzination hausautomation',
    targetKeywords: [
      'llm halluzination hausautomation',
      'ki automatisierung falsches geraet ausgeloest',
      'home assistant llm entitaetsfehler',
      'ki automatisierungsfehler reduzieren',
      'function calling grounding home assistant',
    ],
    leadAnswerBlock:
      '**In der Hausautomation bedeutet eine LLM-Halluzination meist, dass das falsche Gerät ausgelöst wird, der tatsächliche Zustand eines Sensors falsch gelesen wird oder eine Entität referenziert wird, die gar nicht existiert — ein anderer Fehlermodus als ein Chatbot, der eine Tatsache erfindet, und einer, der reduziert wird, indem man das Modell auf deine echte, aktuelle Entitätsliste beschränkt, statt es frei über Gerätenamen spekulieren zu lassen.** Function-Calling-Schemas, die nur echte Entitäten offenlegen, sind die wichtigste Lösung.',
    quickAnswerTop: {
      de: {
        question: 'Warum löst meine Smart-Home-KI manchmal das falsche Gerät aus?',
        answer:
          'Das passiert meist, wenn das Modell über Gerätenamen oder -zustände aus seinem allgemeinen Training spekuliert, statt deine tatsächliche, aktuelle Entitätsliste zu nutzen — zum Beispiel indem es annimmt, dass "Wohnzimmerlampe" existiert, obwohl deine Entität eigentlich "Leselampe" heißt. Die Lösung ist Grounding: Beschränke das Function-Calling-Schema des Modells auf nur die Entitäten, die tatsächlich in deiner Home-Assistant-Instanz existieren, und übergib den aktuellen Entitätszustand direkt, statt das Modell ihn erschließen oder sich daran erinnern zu lassen. Dies ist eine Smart-Home-spezifische Eingrenzung der allgemeinen Technik zur Halluzinationsreduktion, konkret angewendet auf die Function-Calling-Ebene.',
        bullets: [
          'Grundursache: Modell rät bei Gerätenamen/-zuständen, statt deine echte aktuelle Entitätsliste zu nutzen',
          'Lösung: Function-Calling-Schema auf nur echte, aktuelle Entitäten beschränken — keine frei formulierten Gerätenamen',
          'Aktuellen Sensor-/Gerätezustand direkt in den Prompt übergeben, statt das Modell annehmen oder sich erinnern zu lassen',
          'Anders als allgemeine Chatbot-Halluzination — siehe den allgemeinen Leitfaden für dieses breitere Thema',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Wie sich Halluzination in der Hausautomation zeigt', anchor: 'what-it-looks-like' },
      { label: 'Grounding: Auf echte Entitäten beschränken', anchor: 'grounding' },
      { label: 'Aktuellen Zustand übergeben, nicht angenommenen Zustand', anchor: 'current-state' },
      { label: 'Testen und Fehler erkennen', anchor: 'testing' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'LLM-Halluzination in der Hausautomation bedeutet, dass das falsche Gerät ausgelöst oder eine nicht existierende Entität erfunden wird — behoben wird das vor allem, indem das Function-Calling-Schema des Modells auf deine echte, aktuelle Entitätsliste beschränkt wird.' },
      { type: 'plain-terms', content: 'Eine allgemeine KI-Halluzination bedeutet, eine falsche Tatsache zu erfinden. In einem Smart Home ist der entsprechende Fehler, dass die KI die falsche Lampe einschaltet oder denkt, eine Tür sei verriegelt, obwohl sie es nicht ist — meist weil sie einen Gerätenamen geraten hat, statt zu prüfen, was tatsächlich existiert. Die Hauptlösung besteht darin, der KI immer nur die Wahl aus einer Liste deiner echten, aktuellen Geräte zu lassen, statt sie eines erfinden oder annehmen zu lassen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Halluzination in der Hausautomation = falsches Gerät ausgelöst, falsch gelesener Zustand oder referenzierte nicht existierende Entität — keine erfundene allgemeine Tatsache',
          'Wichtigste Lösung: Function-Calling-Schema des Modells auf nur deine echte, aktuelle Entitätsliste beschränken',
          'Aktuellen Sensor-/Gerätezustand direkt in den Prompt übergeben, statt das Modell ihn früher im Gespräch annehmen oder sich daran erinnern zu lassen',
          'Kleine, gut eingegrenzte Modelle (siehe den Leitfaden zu kleinen Sprachmodellen) neigen von Natur aus weniger dazu als Allzweckmodelle mit einem breiten, unbeschränkten Toolset',
          'Automatisierungen gegen Grenzfälle testen (umbenannte Entitäten, offline Geräte), bevor du ihnen unbeaufsichtigt vertraust',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: 'Wie sich Halluzination in der Hausautomation zeigt',
        content:
          '**Die drei häufigsten Fehlermodi sind: Auslösen eines ähnlich benannten, aber falschen Geräts, Handeln nach einem angenommenen statt tatsächlichen Sensorzustand und Referenzieren einer Entität, die in deiner Konfiguration überhaupt nicht existiert.**',
        items: [
          'Falsches Gerät ausgelöst: Du bittest, "die Lampe" auszuschalten, obwohl du mehrere Lampen hast, und das Modell wählt eine basierend auf einer Vermutung, statt nachzufragen oder den Kontext korrekt zu nutzen.',
          'Angenommener Zustand: Eine Automatisierung handelt, als sei ein Fenster geschlossen, weil das der übliche Fall ist, statt die tatsächliche aktuelle Sensormessung zu prüfen.',
          'Nicht existierende Entität: Das Modell referenziert einen Gerätenamen, der plausibel klingt (weil er in den Trainingsdaten häufig vorkommt), aber in deiner Home-Assistant-Instanz nie tatsächlich eingerichtet wurde.',
        ],
      },
      grounding: {
        id: 'grounding',
        title: 'Grounding: Auf echte Entitäten beschränken',
        content:
          '**Die wichtigste Lösung ist ein Function-Calling-Schema, das dem Modell immer nur deine echte, aktuelle Entitätsliste offenlegt — es kann nur Funktionen für Geräte aufrufen, die tatsächlich existieren, wodurch der Fehlermodus "erfundene Entität" strukturell ausgeschlossen wird.**',
        items: [
          'Erzeuge das Function-Calling-Schema (bzw. die dem Modell übergebene Entitätsliste) dynamisch aus Home Assistants tatsächlichem aktuellem Entitätsregister, statt aus einer handgeschriebenen oder veralteten Liste, die beim Hinzufügen/Entfernen von Geräten aus dem Takt geraten kann.',
          'Wenn deine Konfiguration mehrdeutige Entitätsnamen hat (mehrere "Licht"-Entitäten), benenne sie eindeutiger um, statt dich darauf zu verlassen, dass das Modell korrekt disambiguiert — das ist eine Konfigurationslösung, keine Prompting-Lösung, und zuverlässiger.',
          'Der Leitfaden zur Home-Assistant-Ollama-Integration behandelt die praktische Einrichtung der Verbindung von Ollama mit Home Assistants Konversations-Agent, der einen Großteil dieser Schema-Generierung automatisch übernimmt.',
        ],
      },
      currentState: {
        id: 'current-state',
        title: 'Aktuellen Zustand übergeben, nicht angenommenen Zustand',
        content:
          '**Automatisierungen, die vom Sensorzustand abhängen, sollten die tatsächliche aktuelle Messung zum Ausführungszeitpunkt abfragen, statt sich auf die Erinnerung des Modells an einen früheren Gesprächsschritt oder eine Annahme über den typischen Zustand zu verlassen.**',
        items: [
          'Bei jeder Automatisierung, bei der "ist das Fenster offen" oder "ist das Licht schon an" für die Entscheidung wichtig ist, hole diesen Zustand direkt als Teil der Automatisierungslogik ab, statt darauf zu vertrauen, dass das Modell ihn über ein Gespräch hinweg korrekt verfolgt hat.',
          'Dies ist ein allgemeines Prinzip zur Reduktion von Prompt-Brüchigkeit (siehe den clusterübergreifenden Leitfaden zu diesem Thema), speziell angewendet auf sensorgestützten Smart-Home-Zustand.',
          'Das Kombinieren mehrerer Sensormessungen (Sensorfusion) vor dem Handeln kann ebenfalls verringern, dass ein einzelner Fehlmessung in eine Entscheidung einfließt — siehe die Sensorfusion im Smart-Home-Leitfaden.',
        ],
      },
      testing: {
        id: 'testing',
        title: 'Testen und Fehler erkennen',
        content:
          '**Teste Automatisierungen gegen Grenzfälle — eine umbenannte Entität, ein vorübergehend offline Gerät, einen mehrdeutigen Befehl —, bevor du ihnen zutraust, unbeaufsichtigt zu laufen, genauso wie du jede andere Automatisierungslogik testen würdest.**',
        items: [
          'Teste bewusst einen Befehl, der eine kürzlich umbenannte oder entfernte Entität referenziert, um zu bestätigen, dass die Automatisierung sicher fehlschlägt (nach Klärung fragt oder nichts tut), statt bei einem ähnlich benannten Gerät zu raten.',
          'Protokolliere automatisierungsausgelöste Aktionen während einer anfänglichen Testphase, damit du überprüfen kannst, was das Modell tatsächlich getan hat im Vergleich zu deiner Absicht, und stille Fehlauslösungen erkennst, bevor sie zur Routine werden.',
          'Starte neue LLM-gesteuerte Automatisierungen bei risikoarmen Geräten (Beleuchtung), bevor du das Muster auf risikoreichere ausweitest (Schlösser, Sicherheitssysteme), wo eine falsche Aktion mehr Konsequenzen hat.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Wie unterscheidet sich das von allgemeinen Hinweisen zur KI-Halluzination?', a: 'Allgemeine Hinweise zur Halluzinationsreduktion (siehe den Leitfaden zu KI-Halluzinationen) behandeln erfundene Fakten in offener Textgenerierung. Dieser Artikel ist spezifisch für die Function-Calling-Fehlermodi, die auftreten, wenn ein LLM einen Befehl auf eine Geräteaktion abbildet.' },
          { q: 'Halluziniert ein kleineres Modell in diesem Kontext mehr oder weniger?', a: 'Ein gut eingegrenztes kleines Modell, das auf ein spezifisches Function-Calling-Schema beschränkt ist, neigt oft weniger dazu als ein Allzweckmodell mit einem breiten, unbeschränkten Toolset — siehe den Leitfaden zu kleinen Sprachmodellen für die Gründe.' },
          { q: 'Kann ich falsche Geräteauslösungen vollständig eliminieren?', a: 'Nicht vollständig, aber die Beschränkung des Function-Calling-Schemas auf deine echte aktuelle Entitätsliste, die Verwendung eindeutiger Entitätsnamen und das Testen von Grenzfällen reduzieren die Fehlerrate erheblich — betrachte es als Risikoreduktion, nicht als Garantie.' },
          { q: 'Sollte ich ein LLM Schlösser und Sicherheitssysteme steuern lassen?', a: 'Beginne mit risikoärmeren Geräten (Beleuchtung), um Vertrauen in die Zuverlässigkeit deiner spezifischen Konfiguration aufzubauen, bevor du die LLM-Steuerung auf folgenreichere Geräte wie Schlösser ausweitest — das ist eine Risikomanagement-Entscheidung, keine technische Anforderung.' },
          { q: 'Übernimmt Home Assistants Ollama-Integration das Entitäts-Grounding automatisch?', a: 'Sie erzeugt die Liste verfügbarer Entitäten dynamisch aus deiner aktuellen Konfiguration für den Konversations-Agenten, was einen Großteil des hier beschriebenen Groundings übernimmt — siehe den Leitfaden zur Home-Assistant-Ollama-Integration für die Einrichtungsdetails.' },
          { q: 'Was sollte eine Automatisierung tun, wenn sie die richtige Entität nicht sicher identifizieren kann?', a: 'Sicher fehlschlagen — nach Klärung fragen oder nichts tun —, statt bei einer ähnlich benannten Entität zu raten. Das ist eine Designentscheidung dafür, wie du die Function-Calling-Logik der Automatisierung strukturierst.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Intelligentere Hausautomationen mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm) — das breitere Automatisierungsmuster, das dieser Artikel verfeinert',
          '[Ollama mit Home Assistant verbinden: Lokaler KI-Assistent](/de/smart-home/home-assistant-ollama-integration) — die Integration, die das Entitätsschema erzeugt',
          '[Kleine Sprachmodelle für die Smart-Home-Steuerung](/de/smart-home/local-small-language-models-smart-home) — warum eingegrenzte Modelle hier helfen',
          '[Sensorfusion im Smart Home](/de/smart-home/sensor-fusion-smart-home-2027) — Reduktion von Fehlern durch einzelne Sensoren',
          '[KI-Halluzinationen reduzieren: Ein praktischer Leitfaden](/de/prompt-engineering/ai-hallucinations-how-to-stop) — clusterübergreifend: allgemeine Techniken zur Halluzinationsreduktion',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM-Halluzinationen in der Hausautomation reduzieren (2027)',
      description: 'LLM-Halluzinationen in der Hausautomation reduzieren: Warum eine KI das falsche Gerät auslöst oder Entitäten erfindet, und die Grounding-Techniken, die das beheben.',
      url: 'https://www.promptquorum.com/de/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'LLM-Halluzination' }, { '@type': 'Thing', name: 'Function Calling' }, { '@type': 'Thing', name: 'Zuverlässigkeit der Hausautomation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Wie unterscheidet sich das von allgemeinen Hinweisen zur KI-Halluzination?', acceptedAnswer: { '@type': 'Answer', text: 'Allgemeine Hinweise behandeln erfundene Fakten in offenem Text. Dieser Artikel ist spezifisch für Function-Calling-Fehler, die auftreten, wenn ein LLM einen Befehl auf eine Geräteaktion abbildet.' } },
        { '@type': 'Question', name: 'Kann ich falsche Geräteauslösungen vollständig eliminieren?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht vollständig, aber die Beschränkung des Function-Calling-Schemas auf deine echte Entitätsliste und das Testen von Grenzfällen reduzieren die Fehlerrate erheblich.' } },
        { '@type': 'Question', name: 'Sollte ich ein LLM Schlösser und Sicherheitssysteme steuern lassen?', acceptedAnswer: { '@type': 'Answer', text: 'Beginne mit risikoärmeren Geräten wie Beleuchtung, bevor du die LLM-Steuerung auf folgenreichere Geräte ausweitest.' } },
        { '@type': 'Question', name: 'Was sollte eine Automatisierung tun, wenn sie die richtige Entität nicht sicher identifizieren kann?', acceptedAnswer: { '@type': 'Answer', text: 'Sicher fehlschlagen — nach Klärung fragen oder nichts tun —, statt bei einer ähnlich benannten Entität zu raten.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-fr.webp',
    title: "Réduire les hallucinations LLM dans la domotique (2027)",
    seoTitle: "Réduire les hallucinations LLM dans la domotique (2027)",
    intro:
      "Une hallucination LLM en domotique ne ressemble pas à un fait halluciné par un chatbot : elle se traduit par le déclenchement du mauvais appareil, une mauvaise lecture de l'état réel d'un capteur, ou la référence à une entité qui n'existe pas dans votre installation Home Assistant. Cet article couvre les modes de défaillance propres à la maison connectée et les techniques de grounding — schémas de function calling et contraintes de liste d'entités — qui les réduisent, en s'appuyant sur les conseils généraux de réduction des hallucinations déjà couverts ailleurs sur ce site.",
    metaDescription:
      "Réduire les hallucinations LLM en domotique : pourquoi une IA déclenche le mauvais appareil ou invente des entités, et les techniques de grounding qui corrigent cela.",
    twitterDescription:
      "Pourquoi un LLM local déclenche parfois le mauvais appareil domotique — et les techniques de contrainte d'entités qui corrigent cela.",
    readTime: '7 min de lecture',
    audience: "Utilisateurs de Home Assistant avec des automatisations pilotées par LLM qui veulent moins d'erreurs de déclenchement",
    primaryTerm: 'hallucination llm domotique',
    targetKeywords: [
      'hallucination llm domotique',
      'ia automatisation mauvais appareil declenche',
      'home assistant llm erreurs entites',
      'reduire erreurs automatisation ia',
      'function calling grounding home assistant',
    ],
    leadAnswerBlock:
      "**En domotique, une hallucination LLM signifie généralement déclencher le mauvais appareil, mal lire l'état réel d'un capteur, ou référencer une entité qui n'existe pas — un mode de défaillance différent d'un chatbot inventant un fait, et qu'on réduit en contraignant le modèle à votre liste d'entités réelle et actuelle plutôt qu'en le laissant raisonner librement sur des noms d'appareils.** Les schémas de function calling qui n'exposent que des entités réelles sont la principale solution.",
    quickAnswerTop: {
      fr: {
        question: "Pourquoi mon IA domotique déclenche-t-elle parfois le mauvais appareil ?",
        answer:
          "Cela arrive généralement quand le modèle raisonne sur des noms ou états d'appareils issus de son entraînement général plutôt que de votre liste d'entités réelle et actuelle — par exemple en supposant qu'une entité \"lampe du salon\" existe alors que la vôtre s'appelle en réalité \"lampe de lecture\". La solution est le grounding : contraindre le schéma de function calling du modèle aux seules entités qui existent réellement dans votre instance Home Assistant, et transmettre l'état actuel de l'entité directement plutôt que de laisser le modèle le déduire ou s'en souvenir. C'est un rétrécissement propre à la domotique de la technique générale de réduction des hallucinations, appliqué spécifiquement à la couche function calling.",
        bullets: [
          "Cause racine : le modèle devine les noms/états d'appareils au lieu d'utiliser votre liste d'entités réelle et actuelle",
          "Solution : contraindre le schéma de function calling aux seules entités réelles et actuelles — pas de noms d'appareils en texte libre",
          "Transmettre l'état actuel du capteur/appareil directement dans le prompt plutôt que de laisser le modèle le supposer ou s'en souvenir",
          "Différent de l'hallucination générale des chatbots — voir le guide général pour ce sujet plus large",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: "À quoi ressemble l'hallucination en domotique", anchor: 'what-it-looks-like' },
      { label: 'Grounding : se contraindre aux entités réelles', anchor: 'grounding' },
      { label: "Transmettre l'état actuel, pas un état supposé", anchor: 'current-state' },
      { label: 'Tester et détecter les erreurs', anchor: 'testing' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "L'hallucination LLM en domotique signifie déclencher le mauvais appareil ou inventer une entité inexistante, corrigée principalement en contraignant le schéma de function calling du modèle à votre liste d'entités réelle et actuelle." },
      { type: 'plain-terms', content: "Une hallucination IA générale consiste à inventer un fait erroné. Dans une maison connectée, l'erreur équivalente est que l'IA allume la mauvaise lumière ou pense qu'une porte est verrouillée alors qu'elle ne l'est pas, généralement parce qu'elle a deviné un nom d'appareil au lieu de vérifier ce qui existe réellement. La principale solution consiste à ne laisser l'IA choisir que parmi une liste de vos appareils réels et actuels, plutôt que de la laisser en inventer ou en supposer un." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Hallucination en domotique = mauvais appareil déclenché, état mal lu, ou entité inexistante référencée — pas un fait général inventé",
          "Solution principale : contraindre le schéma de function calling du modèle à votre seule liste d'entités réelle et actuelle",
          "Transmettre l'état actuel du capteur/appareil directement dans le prompt, plutôt que de laisser le modèle le supposer ou s'en souvenir depuis plus tôt dans une conversation",
          "Les modèles petits et bien cadrés (voir le guide des petits modèles de langage) y sont intrinsèquement moins sujets que les modèles généralistes disposant d'une boîte à outils large et non contrainte",
          "Tester les automatisations sur des cas limites (entités renommées, appareils hors ligne) avant de leur faire confiance sans supervision",
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: "À quoi ressemble l'hallucination en domotique",
        content:
          "**Les trois modes de défaillance courants sont : déclencher un appareil au nom similaire mais erroné, agir sur un état de capteur supposé plutôt que réel, et référencer une entité qui n'existe pas du tout dans votre installation.**",
        items: [
          "Déclenchement du mauvais appareil : demander d'éteindre \"la lampe\" quand vous en avez plusieurs, et le modèle en choisit une sur la base d'une supposition plutôt que de demander une clarification ou d'utiliser correctement le contexte.",
          "État supposé : une automatisation agit comme si une fenêtre était fermée parce que c'est le cas le plus fréquent, plutôt que de vérifier la lecture réelle et actuelle du capteur.",
          "Entité inexistante : le modèle référence un nom d'appareil qui semble plausible (parce que courant dans les données d'entraînement) mais qui n'a en réalité jamais été configuré dans votre instance Home Assistant.",
        ],
      },
      grounding: {
        id: 'grounding',
        title: 'Grounding : se contraindre aux entités réelles',
        content:
          "**La solution principale est un schéma de function calling qui n'expose au modèle que votre liste d'entités réelle et actuelle — il ne peut appeler des fonctions que pour des appareils qui existent réellement, éliminant structurellement le mode de défaillance \"entité inventée\".**",
        items: [
          "Générez le schéma de function calling (ou la liste d'entités transmise au modèle) dynamiquement à partir du registre d'entités actuel et réel de Home Assistant, plutôt qu'une liste écrite à la main ou obsolète qui peut se désynchroniser au fil de l'ajout/suppression d'appareils.",
          "Si votre installation a des noms d'entités ambigus (plusieurs entités \"lumière\"), renommez-les pour qu'elles soient plus distinctes plutôt que de compter sur le modèle pour désambiguïser correctement — c'est une correction de configuration, pas de prompting, et elle est plus fiable.",
          "Le guide d'intégration Home Assistant-Ollama couvre la mise en place pratique de la connexion d'Ollama à l'agent de conversation de Home Assistant, qui gère automatiquement une grande partie de cette génération de schéma.",
        ],
      },
      currentState: {
        id: 'current-state',
        title: "Transmettre l'état actuel, pas un état supposé",
        content:
          "**Les automatisations qui dépendent de l'état d'un capteur devraient interroger la lecture réelle et actuelle au moment de l'exécution, plutôt que de se fier à la mémoire du modèle d'un tour de conversation antérieur ou à une supposition sur l'état typique.**",
        items: [
          "Pour toute automatisation où \"la fenêtre est-elle ouverte\" ou \"la lumière est-elle déjà allumée\" compte pour la décision, récupérez cet état directement dans la logique de l'automatisation, plutôt que de faire confiance au modèle pour l'avoir correctement suivi au fil d'une conversation.",
          "Il s'agit d'un principe général de réduction de la fragilité des prompts (voir le guide transversal sur ce sujet), appliqué spécifiquement à l'état de la maison connectée reposant sur des capteurs.",
          "Combiner plusieurs lectures de capteurs (fusion de capteurs) avant d'agir peut aussi réduire le risque qu'une mauvaise lecture d'un seul capteur influence une décision — voir la fusion de capteurs dans le guide de la maison connectée.",
        ],
      },
      testing: {
        id: 'testing',
        title: 'Tester et détecter les erreurs',
        content:
          "**Testez les automatisations sur des cas limites — une entité renommée, un appareil temporairement hors ligne, une commande ambiguë — avant de leur faire confiance pour fonctionner sans supervision, de la même façon que vous testeriez n'importe quelle logique d'automatisation.**",
        items: [
          "Testez délibérément une commande qui référence une entité récemment renommée ou supprimée pour confirmer que l'automatisation échoue de manière sûre (demande une clarification ou ne fait rien) plutôt que de deviner un appareil au nom similaire.",
          "Enregistrez les actions déclenchées par l'automatisation pendant une période d'essai initiale afin de pouvoir vérifier ce que le modèle a réellement fait par rapport à votre intention, en détectant les erreurs de déclenchement silencieuses avant qu'elles ne deviennent routinières.",
          "Commencez les nouvelles automatisations pilotées par LLM sur des appareils à faible enjeu (éclairage) avant d'étendre le modèle à des appareils à enjeu plus élevé (serrures, systèmes de sécurité) où une action erronée a plus de conséquences.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: "En quoi est-ce différent des conseils généraux sur l'hallucination IA ?", a: "Les conseils généraux de réduction des hallucinations (voir le guide sur les hallucinations IA) couvrent les faits inventés dans une génération de texte ouverte. Cet article est spécifique aux modes de défaillance du function calling qui se produisent quand un LLM associe une commande à une action sur un appareil." },
          { q: 'Un modèle plus petit hallucine-t-il plus ou moins dans ce contexte ?', a: "Un petit modèle bien cadré, contraint à un schéma de function calling spécifique, est souvent moins sujet à cela qu'un modèle généraliste doté d'une boîte à outils large et non contrainte — voir le guide des petits modèles de langage pour comprendre pourquoi." },
          { q: 'Puis-je éliminer complètement les déclenchements du mauvais appareil ?', a: "Pas complètement, mais contraindre le schéma de function calling à votre liste d'entités réelle et actuelle, utiliser des noms d'entités distincts et tester les cas limites réduit significativement le taux d'erreur — considérez cela comme une réduction du risque, pas une garantie." },
          { q: 'Devrais-je laisser un LLM contrôler les serrures et les systèmes de sécurité ?', a: "Commencez par des appareils à faible enjeu (éclairage) pour bâtir la confiance dans la fiabilité de votre installation spécifique avant d'étendre le contrôle par LLM à des appareils à conséquences plus élevées comme les serrures — c'est un choix de gestion du risque, pas une exigence technique." },
          { q: "L'intégration Ollama de Home Assistant gère-t-elle automatiquement le grounding des entités ?", a: "Elle génère dynamiquement la liste des entités disponibles à partir de votre installation actuelle pour l'agent de conversation, ce qui prend en charge une grande partie du grounding décrit ici — voir le guide d'intégration Home Assistant + Ollama pour les détails de configuration." },
          { q: "Que devrait faire une automatisation si elle ne peut pas identifier avec certitude la bonne entité ?", a: "Échouer de manière sûre — demander une clarification ou ne rien faire — plutôt que de deviner une entité au nom similaire. C'est un choix de conception dans la façon dont vous structurez la logique de function calling de l'automatisation." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Des automatisations domotiques plus intelligentes avec un LLM local](/fr/smart-home/ai-automations-local-llm) — le modèle d\'automatisation plus large que cet article affine',
          "[Connecter Ollama à Home Assistant : assistant IA local](/fr/smart-home/home-assistant-ollama-integration) — l'intégration qui génère le schéma d'entités",
          '[Petits modèles de langage pour le contrôle de la maison connectée](/fr/smart-home/local-small-language-models-smart-home) — pourquoi les modèles cadrés aident ici',
          '[Fusion de capteurs dans la maison connectée](/fr/smart-home/sensor-fusion-smart-home-2027) — réduire les erreurs d\'un seul capteur',
          "[Réduire les hallucinations IA : un guide pratique](/fr/prompt-engineering/ai-hallucinations-how-to-stop) — transversal : techniques générales de réduction des hallucinations",
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: "Réduire les hallucinations LLM dans la domotique (2027)",
      description: "Réduire les hallucinations LLM en domotique : pourquoi une IA déclenche le mauvais appareil ou invente des entités, et les techniques de grounding qui corrigent cela.",
      url: 'https://www.promptquorum.com/fr/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Hallucination LLM' }, { '@type': 'Thing', name: 'Function calling' }, { '@type': 'Thing', name: 'Fiabilité de la domotique' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: "En quoi est-ce différent des conseils généraux sur l'hallucination IA ?", acceptedAnswer: { '@type': 'Answer', text: "Les conseils généraux couvrent les faits inventés dans un texte ouvert. Cet article est spécifique aux défaillances de function calling qui se produisent quand un LLM associe une commande à une action sur un appareil." } },
        { '@type': 'Question', name: 'Puis-je éliminer complètement les déclenchements du mauvais appareil ?', acceptedAnswer: { '@type': 'Answer', text: "Pas complètement, mais contraindre le schéma de function calling à votre liste d'entités réelle et tester les cas limites réduit significativement le taux d'erreur." } },
        { '@type': 'Question', name: 'Devrais-je laisser un LLM contrôler les serrures et les systèmes de sécurité ?', acceptedAnswer: { '@type': 'Answer', text: "Commencez par des appareils à faible enjeu comme l'éclairage avant d'étendre le contrôle par LLM à des appareils à conséquences plus élevées." } },
        { '@type': 'Question', name: "Que devrait faire une automatisation si elle ne peut pas identifier avec certitude la bonne entité ?", acceptedAnswer: { '@type': 'Answer', text: "Échouer de manière sûre — demander une clarification ou ne rien faire — plutôt que de deviner une entité au nom similaire." } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-ja.webp',
    title: 'ホームオートメーションにおけるLLM幻覚の低減（2027年）',
    seoTitle: 'ホームオートメーションにおけるLLM幻覚の低減（2027年）',
    intro:
      'ホームオートメーションにおけるLLM幻覚は、チャットボットの事実に関する幻覚とは様子が異なります。それは、間違ったデバイスを作動させる、センサーの実際の状態を誤って読み取る、あるいはHome Assistantのセットアップに存在しないエンティティを参照することを意味します。この記事では、スマートホーム特有の失敗モードと、それを減らすためのグラウンディング技術（関数呼び出しスキーマとエンティティリストによる制約）を扱います。これは、このサイトの他の箇所で既に扱われている一般的な幻覚低減のアドバイスを土台にしています。',
    metaDescription:
      'ホームオートメーションにおけるLLM幻覚の低減：AIが間違ったデバイスを作動させたりエンティティを作り出したりする理由と、それを解決するグラウンディング技術。',
    twitterDescription:
      'ローカルLLMが時折間違ったスマートホームデバイスを作動させる理由と、それを解決するエンティティ制約技術。',
    readTime: '読了時間7分',
    audience: '誤作動を減らしたい、LLM駆動の自動化を運用するHome Assistantユーザー',
    primaryTerm: 'llm 幻覚 ホームオートメーション',
    targetKeywords: [
      'llm 幻覚 ホームオートメーション',
      'ai 自動化 間違ったデバイス 作動',
      'home assistant llm エンティティエラー',
      'ai 自動化ミス 削減',
      'function calling グラウンディング home assistant',
    ],
    leadAnswerBlock:
      '**ホームオートメーションでは、LLM幻覚は通常、間違ったデバイスを作動させる、センサーの実際の状態を誤って読み取る、あるいは存在しないエンティティを参照することを意味します — これはチャットボットが事実を作り出すのとは異なる失敗モードであり、モデルにデバイス名について自由に推論させるのではなく、実際の現在のエンティティリストに制約することで低減されます。** 実在するエンティティのみを公開する関数呼び出しスキーマが主な対策です。',
    quickAnswerTop: {
      ja: {
        question: 'なぜスマートホームAIが時々間違ったデバイスを作動させるのですか？',
        answer:
          'これは通常、モデルが実際の現在のエンティティリストではなく、一般的な学習内容からデバイス名や状態を推論している場合に発生します — 例えば、実際のエンティティ名が「読書灯」であるにもかかわらず、「リビングライト」が存在すると推測してしまうケースです。解決策はグラウンディングです：モデルの関数呼び出しスキーマを、Home Assistantインスタンスに実際に存在するエンティティのみに制約し、モデルに推測や記憶に頼らせるのではなく、現在のエンティティ状態を直接渡します。これは一般的な幻覚低減技術をスマートホームに特化して絞り込んだものであり、具体的には関数呼び出し層に適用されます。',
        bullets: [
          '根本原因：実際の現在のエンティティリストを使う代わりに、モデルがデバイス名/状態を推測している',
          '対策：関数呼び出しスキーマを実在する現在のエンティティのみに制約する — 自由形式のデバイス名は使わない',
          'モデルに状態を推測させたり記憶させたりするのではなく、現在のセンサー/デバイス状態を直接プロンプトに渡す',
          '一般的なチャットボットの幻覚とは異なる — その広いトピックについては一般ガイドを参照',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'ホームオートメーションにおける幻覚の実例', anchor: 'what-it-looks-like' },
      { label: 'グラウンディング：実在するエンティティに制約する', anchor: 'grounding' },
      { label: '想定状態ではなく現在の状態を渡す', anchor: 'current-state' },
      { label: 'テストとエラーの検出', anchor: 'testing' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ホームオートメーションにおけるLLM幻覚とは、間違ったデバイスを作動させたり存在しないエンティティを作り出したりすることであり、主にモデルの関数呼び出しスキーマを実際の現在のエンティティリストに制約することで解決されます。' },
      { type: 'plain-terms', content: '一般的なAI幻覚とは、間違った事実を作り出すことです。スマートホームでは、それに相当する誤りは、AIが間違ったライトを点けたり、鍵がかかっていないのにかかっていると判断したりすることで、たいていは実際に存在するものを確認する代わりにデバイス名を推測したことが原因です。主な解決策は、AIに実在するものを作らせたり推測させたりするのではなく、常に実際の現在のデバイスのリストからのみ選ばせることです。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'ホームオートメーションの幻覚＝間違ったデバイスの作動、誤って読み取られた状態、または存在しないエンティティの参照であり、作り話の一般的な事実ではない',
          '主な対策：モデルの関数呼び出しスキーマを実際の現在のエンティティリストのみに制約する',
          '会話の以前の内容からモデルに推測・記憶させるのではなく、現在のセンサー/デバイス状態を直接プロンプトに渡す',
          '小規模で適切にスコープされたモデル（小規模言語モデルのガイドを参照）は、広く制約のないツールセットを持つ汎用モデルよりも本質的にこの問題が起きにくい',
          '無人で信頼する前に、エッジケース（名前変更されたエンティティ、オフラインのデバイス）に対して自動化をテストする',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: 'ホームオートメーションにおける幻覚の実例',
        content:
          '**3つの一般的な失敗モードは、似た名前だが間違ったデバイスを作動させること、実際ではなく想定されたセンサー状態に基づいて動作すること、そしてセットアップにまったく存在しないエンティティを参照することです。**',
        items: [
          '間違ったデバイスの作動：複数のランプがある状態で「ランプ」を消すように頼むと、モデルは確認やコンテキストの正しい利用ではなく、推測に基づいて1つを選んでしまいます。',
          '想定された状態：自動化が、実際の現在のセンサー読み取り値を確認する代わりに、一般的なケースであるという理由で窓が閉まっているかのように動作します。',
          '存在しないエンティティ：モデルは（学習データによく登場するため）もっともらしく聞こえるデバイス名を参照しますが、実際にはHome Assistantインスタンスに一度も設定されたことがありません。',
        ],
      },
      grounding: {
        id: 'grounding',
        title: 'グラウンディング：実在するエンティティに制約する',
        content:
          '**主な対策は、モデルに常に実際の現在のエンティティリストのみを公開する関数呼び出しスキーマです — モデルは実際に存在するデバイスに対してのみ関数を呼び出すことができ、「作り出されたエンティティ」という失敗モードを構造的に排除します。**',
        items: [
          'デバイスの追加/削除に伴ってずれてしまう可能性のある手書きや古いリストではなく、Home Assistantの実際の現在のエンティティレジストリから関数呼び出しスキーマ（またはモデルに渡すエンティティリスト）を動的に生成してください。',
          'セットアップに曖昧なエンティティ名がある場合（複数の「ライト」エンティティなど）、モデルが正しく曖昧さを解消することに頼るのではなく、より区別しやすい名前に変更してください — これはプロンプトの修正ではなく設定の修正であり、より信頼性が高くなります。',
          'Home-Assistant-Ollama統合ガイドでは、この多くのスキーマ生成を自動的に処理するHome Assistantの会話エージェントにOllamaを接続する実際のセットアップを扱っています。',
        ],
      },
      currentState: {
        id: 'current-state',
        title: '想定状態ではなく現在の状態を渡す',
        content:
          '**センサー状態に依存する自動化は、以前の会話ターンに関するモデルの記憶や典型的な状態についての想定に頼るのではなく、実行時に実際の現在の読み取り値を照会するべきです。**',
        items: [
          '「窓が開いているか」や「ライトは既に点いているか」が判断にとって重要な自動化では、会話全体を通してモデルが正しく追跡していたことを信頼するのではなく、その状態を自動化ロジックの一部として直接取得してください。',
          'これは、プロンプトの脆弱性低減に関する一般原則（このトピックに関するクラスター横断ガイドを参照）を、センサーに基づくスマートホームの状態に特化して適用したものです。',
          '行動を起こす前に複数のセンサー読み取り値を組み合わせること（センサーフュージョン）も、単一センサーの誤読が判断に影響することを減らせます — スマートホームガイドのセンサーフュージョンを参照してください。',
        ],
      },
      testing: {
        id: 'testing',
        title: 'テストとエラーの検出',
        content:
          '**他の自動化ロジックをテストするのと同じように、無人での実行を信頼する前に、名前が変更されたエンティティ、一時的にオフラインのデバイス、曖昧なコマンドといったエッジケースに対して自動化をテストしてください。**',
        items: [
          '最近名前が変更または削除されたエンティティを参照するコマンドを意図的にテストし、似た名前のデバイスを推測するのではなく、自動化が安全に失敗する（確認を求める、または何もしない）ことを確認してください。',
          '初期の試用期間中に自動化によってトリガーされたアクションをログに記録し、モデルが実際に行ったことと意図したことを比較できるようにして、静かな誤作動が日常化する前に検出してください。',
          '新しいLLM駆動の自動化は、間違ったアクションの影響が大きい重要度の高いデバイス（鍵、セキュリティシステム）に拡張する前に、まず重要度の低いデバイス（照明）で始めてください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'これは一般的なAI幻覚のアドバイスとどう違いますか？', a: '一般的な幻覚低減のアドバイス（AI幻覚ガイドを参照）は、自由形式のテキスト生成における作り話の事実を扱います。この記事は、LLMがコマンドをデバイスアクションにマッピングする際に発生する関数呼び出し特有の失敗モードに特化しています。' },
          { q: 'この文脈では、小さいモデルの方が幻覚が多い、または少ないですか？', a: '特定の関数呼び出しスキーマに制約された、適切にスコープされた小規模モデルは、広く制約のないツールセットを持つ汎用モデルよりも、多くの場合この問題が起きにくいです — その理由については小規模言語モデルのガイドを参照してください。' },
          { q: '間違ったデバイスの作動を完全になくすことはできますか？', a: '完全にはなくせませんが、関数呼び出しスキーマを実際の現在のエンティティリストに制約し、区別しやすいエンティティ名を使用し、エッジケースをテストすることで、失敗率を大幅に減らせます — これは保証ではなくリスク低減として捉えてください。' },
          { q: 'LLMに鍵やセキュリティシステムを制御させるべきですか？', a: '鍵のような重要度の高いデバイスにLLM制御を拡張する前に、まず重要度の低いデバイス（照明）から始めて、自分の環境の信頼性への確信を築いてください — これは技術的な要件ではなくリスク管理上の選択です。' },
          { q: 'Home AssistantのOllama統合はエンティティのグラウンディングを自動的に処理しますか？', a: '会話エージェント向けに、現在のセットアップから利用可能なエンティティリストを動的に生成し、ここで説明されているグラウンディングの多くを処理します — セットアップの詳細についてはHome Assistant + Ollama統合ガイドを参照してください。' },
          { q: '正しいエンティティを自信を持って特定できない場合、自動化はどうすべきですか？', a: '似た名前のエンティティを推測するのではなく、安全に失敗する — 確認を求める、または何もしない — べきです。これは自動化の関数呼び出しロジックをどう構成するかというデザイン上の選択です。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルLLMでよりスマートなホームオートメーションを実現する](/ja/smart-home/ai-automations-local-llm) — この記事が改良している、より広い自動化パターン',
          '[OllamaをHome Assistantに接続する：ローカルAIアシスタント](/ja/smart-home/home-assistant-ollama-integration) — エンティティスキーマを生成する統合',
          '[スマートホーム制御のための小規模言語モデル](/ja/smart-home/local-small-language-models-smart-home) — 適切にスコープされたモデルがここで役立つ理由',
          '[スマートホームにおけるセンサーフュージョン](/ja/smart-home/sensor-fusion-smart-home-2027) — 単一センサーの状態エラーを減らす',
          '[AI幻覚を減らす：実践ガイド](/ja/prompt-engineering/ai-hallucinations-how-to-stop) — クラスター横断：一般的な幻覚低減技術',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ホームオートメーションにおけるLLM幻覚の低減（2027年）',
      description: 'ホームオートメーションにおけるLLM幻覚の低減：AIが間違ったデバイスを作動させたりエンティティを作り出したりする理由と、それを解決するグラウンディング技術。',
      url: 'https://www.promptquorum.com/ja/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'LLM幻覚' }, { '@type': 'Thing', name: '関数呼び出し' }, { '@type': 'Thing', name: 'ホームオートメーションの信頼性' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'これは一般的なAI幻覚のアドバイスとどう違いますか？', acceptedAnswer: { '@type': 'Answer', text: '一般的なアドバイスは、自由形式のテキストにおける作り話の事実を扱います。この記事は、LLMがコマンドをデバイスアクションにマッピングする際の関数呼び出しの失敗に特化しています。' } },
        { '@type': 'Question', name: '間違ったデバイスの作動を完全になくすことはできますか？', acceptedAnswer: { '@type': 'Answer', text: '完全にはなくせませんが、関数呼び出しスキーマを実際のエンティティリストに制約し、エッジケースをテストすることで失敗率を大幅に減らせます。' } },
        { '@type': 'Question', name: 'LLMに鍵やセキュリティシステムを制御させるべきですか？', acceptedAnswer: { '@type': 'Answer', text: '照明のような重要度の低いデバイスから始めてから、より結果の大きいデバイスにLLM制御を拡張してください。' } },
        { '@type': 'Question', name: '正しいエンティティを自信を持って特定できない場合、自動化はどうすべきですか？', acceptedAnswer: { '@type': 'Answer', text: '似た名前のエンティティを推測するのではなく、安全に失敗する — 確認を求める、または何もしない — べきです。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-zh.webp',
    title: '减少家庭自动化中的LLM幻觉（2027年）',
    seoTitle: '减少家庭自动化中的LLM幻觉（2027年）',
    intro:
      '家庭自动化中的LLM幻觉与聊天机器人中的事实幻觉表现不同：它意味着触发了错误的设备、误读了传感器的实际状态，或引用了你的Home Assistant设置中并不存在的实体。本文介绍智能家居特有的失败模式，以及减少这些问题的锚定（grounding）技术——函数调用架构和实体列表约束，并以本网站其他地方已经介绍过的通用幻觉减少建议为基础。',
    metaDescription:
      '减少家庭自动化中的LLM幻觉：为什么AI会触发错误的设备或凭空捏造实体，以及能解决这一问题的锚定技术。',
    twitterDescription:
      '为什么本地LLM有时会触发错误的智能家居设备——以及能解决这一问题的实体约束技术。',
    readTime: '阅读需7分钟',
    audience: '希望减少误触发的、运行LLM驱动自动化的Home Assistant用户',
    primaryTerm: 'llm 幻觉 家庭自动化',
    targetKeywords: [
      'llm 幻觉 家庭自动化',
      'ai 自动化 触发错误设备',
      'home assistant llm 实体错误',
      '减少 ai 自动化错误',
      'function calling 锚定 home assistant',
    ],
    leadAnswerBlock:
      '**在家庭自动化中，LLM幻觉通常意味着触发了错误的设备、误读了传感器的实际状态，或引用了一个根本不存在的实体——这是与聊天机器人凭空捏造事实不同的失败模式，可以通过将模型限制在你真实、当前的实体列表内，而不是让它自由推断设备名称来减少。** 仅暴露真实实体的函数调用架构是主要的解决方案。',
    quickAnswerTop: {
      zh: {
        question: '为什么我的智能家居AI有时会触发错误的设备？',
        answer:
          '这通常发生在模型根据其通用训练内容而不是你真实、当前的实体列表来推断设备名称或状态时——例如，猜测存在一个"客厅灯"实体，而你的实体实际名为"阅读灯"。解决方法是锚定（grounding）：将模型的函数调用架构限制为仅包含你Home Assistant实例中实际存在的实体，并直接传入当前实体状态，而不是让模型推断或凭记忆判断。这是通用幻觉减少技术针对智能家居场景的一种收窄，具体应用于函数调用层。',
        bullets: [
          '根本原因：模型猜测设备名称/状态，而不是使用你真实的当前实体列表',
          '解决方法：将函数调用架构限制为仅真实、当前的实体——而非自由形式的设备名称',
          '将当前传感器/设备状态直接传入提示词，而不是让模型自行假设或凭记忆判断',
          '这与通用聊天机器人幻觉不同——关于该更广泛的话题，请参见通用指南',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '家庭自动化中的幻觉长什么样', anchor: 'what-it-looks-like' },
      { label: '锚定：限制为真实实体', anchor: 'grounding' },
      { label: '传入当前状态，而非假设状态', anchor: 'current-state' },
      { label: '测试与捕捉错误', anchor: 'testing' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '家庭自动化中的LLM幻觉是指触发错误的设备或凭空捏造不存在的实体，主要通过将模型的函数调用架构限制为你真实、当前的实体列表来解决。' },
      { type: 'plain-terms', content: '通用的AI幻觉是指编造错误的事实。在智能家居中，对应的错误是AI打开了错误的灯，或者以为门锁上了但实际并没有，这通常是因为它猜测了一个设备名称，而不是检查实际存在的设备。主要的解决方法是始终只让AI从你真实、当前设备的列表中选择，而不是让它凭空捏造或假设一个设备。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '家庭自动化幻觉＝触发了错误的设备、误读了状态，或引用了不存在的实体——而不是编造了一个通用事实',
          '主要解决方法：将模型的函数调用架构限制为仅你真实、当前的实体列表',
          '将当前传感器/设备状态直接传入提示词，而不是让模型假设或凭对话早期内容的记忆判断',
          '规模小、范围明确的模型（参见小型语言模型指南）相比拥有广泛、不受约束工具集的通用模型，本质上更不容易出现这个问题',
          '在信任自动化无人监督运行之前，先针对边缘情况（重命名的实体、离线设备）进行测试',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: '家庭自动化中的幻觉长什么样',
        content:
          '**三种常见的失败模式是：触发一个名称相似但错误的设备、依据假设而非实际的传感器状态行动，以及引用一个在你的设置中根本不存在的实体。**',
        items: [
          '触发错误设备：要求关闭"台灯"，而你实际上有好几盏台灯，模型基于猜测而不是澄清或正确使用上下文来选择其中一盏。',
          '假设状态：自动化认为窗户是关闭的，因为这是常见情况，而不是检查传感器的实际当前读数。',
          '不存在的实体：模型引用了一个听起来合理（因为在训练数据中常见）但实际上从未在你的Home Assistant实例中设置过的设备名称。',
        ],
      },
      grounding: {
        id: 'grounding',
        title: '锚定：限制为真实实体',
        content:
          '**主要的解决方法是使用一个函数调用架构，始终只向模型暴露你真实、当前的实体列表——它只能为真正存在的设备调用函数，从结构上消除了"凭空捏造实体"这种失败模式。**',
        items: [
          '从Home Assistant的实际当前实体注册表动态生成函数调用架构（或传给模型的实体列表），而不是使用手写或过时的列表，后者会随着设备的增删而逐渐失步。',
          '如果你的设置中有含糊的实体名称（多个"灯"实体），应将它们重命名得更具区分度，而不是依赖模型正确地消除歧义——这是配置层面的修复，而非提示词层面的修复，也更可靠。',
          'Home-Assistant-Ollama集成指南介绍了将Ollama连接到Home Assistant对话代理的实际设置方法，该代理会自动处理大部分这类架构生成工作。',
        ],
      },
      currentState: {
        id: 'current-state',
        title: '传入当前状态，而非假设状态',
        content:
          '**依赖传感器状态的自动化应在执行时查询实际的当前读数，而不是依赖模型对更早对话轮次的记忆或对典型状态的假设。**',
        items: [
          '对于任何"窗户是否打开"或"灯是否已经开着"会影响决策的自动化，应将该状态作为自动化逻辑的一部分直接获取，而不是相信模型在整个对话过程中正确追踪了它。',
          '这是减少提示词脆弱性的通用原则（参见关于该主题的跨系列指南）在传感器支持的智能家居状态上的具体应用。',
          '在采取行动前结合多个传感器读数（传感器融合）也可以减少单一传感器误读影响决策的情况——参见智能家居指南中的传感器融合部分。',
        ],
      },
      testing: {
        id: 'testing',
        title: '测试与捕捉错误',
        content:
          '**在信任自动化无人监督运行之前，应像测试任何自动化逻辑一样，针对边缘情况——重命名的实体、暂时离线的设备、含糊的命令——进行测试。**',
        items: [
          '有意测试一个引用了近期被重命名或删除的实体的命令，以确认自动化能安全失败（要求澄清或不采取任何行动），而不是猜测一个名称相似的设备。',
          '在初始试用期内记录自动化触发的操作，以便你能比较模型实际做了什么与你的预期，在静默的误触发变成常态之前发现它们。',
          '新的LLM驱动自动化应先从低风险设备（照明）开始，再扩展到高风险设备（门锁、安防系统），因为在后者上错误操作的后果更严重。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '这与通用的AI幻觉建议有什么不同？', a: '通用的幻觉减少建议（参见AI幻觉指南）涵盖了开放式文本生成中编造的事实。本文专门针对LLM将命令映射到设备操作时出现的函数调用失败模式。' },
          { q: '在这种场景下，较小的模型幻觉更多还是更少？', a: '一个范围明确、被限制在特定函数调用架构内的小型模型，通常比拥有广泛、不受约束工具集的通用模型更不容易出现这个问题——具体原因请参见小型语言模型指南。' },
          { q: '我能完全消除错误设备触发吗？', a: '不能完全消除，但将函数调用架构限制为你真实的当前实体列表、使用有区分度的实体名称并测试边缘情况，能显著降低失败率——把它当作风险降低，而不是保证。' },
          { q: '我应该让LLM控制门锁和安防系统吗？', a: '在将LLM控制扩展到门锁等后果更严重的设备之前，先从风险较低的设备（照明）开始，以建立对你具体设置可靠性的信心——这是一个风险管理上的选择，而非技术要求。' },
          { q: 'Home Assistant的Ollama集成会自动处理实体锚定吗？', a: '它会为对话代理从你当前的设置中动态生成可用实体列表，这处理了这里描述的大部分锚定工作——具体设置细节请参见Home Assistant + Ollama集成指南。' },
          { q: '如果自动化无法确信地识别出正确的实体，它应该怎么做？', a: '应安全失败——要求澄清或不采取任何行动——而不是猜测一个名称相似的实体。这是你如何构建自动化函数调用逻辑的设计选择。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[用本地LLM实现更智能的家庭自动化](/zh/smart-home/ai-automations-local-llm) — 本文所细化的更广泛自动化模式',
          '[将Ollama连接到Home Assistant：本地AI助手](/zh/smart-home/home-assistant-ollama-integration) — 生成实体架构的集成方案',
          '[面向智能家居控制的小型语言模型](/zh/smart-home/local-small-language-models-smart-home) — 为什么范围明确的模型在这里有帮助',
          '[智能家居中的传感器融合](/zh/smart-home/sensor-fusion-smart-home-2027) — 减少单一传感器的状态错误',
          '[减少AI幻觉：实用指南](/zh/prompt-engineering/ai-hallucinations-how-to-stop) — 跨系列：通用幻觉减少技术',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '减少家庭自动化中的LLM幻觉（2027年）',
      description: '减少家庭自动化中的LLM幻觉：为什么AI会触发错误的设备或凭空捏造实体，以及能解决这一问题的锚定技术。',
      url: 'https://www.promptquorum.com/zh/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'LLM幻觉' }, { '@type': 'Thing', name: '函数调用' }, { '@type': 'Thing', name: '家庭自动化可靠性' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '这与通用的AI幻觉建议有什么不同？', acceptedAnswer: { '@type': 'Answer', text: '通用建议涵盖了开放式文本中编造的事实。本文专门针对LLM将命令映射到设备操作时出现的函数调用失败。' } },
        { '@type': 'Question', name: '我能完全消除错误设备触发吗？', acceptedAnswer: { '@type': 'Answer', text: '不能完全消除，但将函数调用架构限制为你真实的实体列表并测试边缘情况，能显著降低失败率。' } },
        { '@type': 'Question', name: '我应该让LLM控制门锁和安防系统吗？', acceptedAnswer: { '@type': 'Answer', text: '在将LLM控制扩展到后果更严重的设备之前，先从照明等低风险设备开始。' } },
        { '@type': 'Question', name: '如果自动化无法确信地识别出正确的实体，它应该怎么做？', acceptedAnswer: { '@type': 'Answer', text: '应安全失败——要求澄清或不采取任何行动——而不是猜测一个名称相似的实体。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-es.webp',
    title: 'Reducir las alucinaciones de LLM en la domótica (2027)',
    seoTitle: 'Reducir las alucinaciones de LLM en la domótica (2027)',
    intro:
      'Una alucinación de LLM en la domótica se ve diferente de un hecho alucinado por un chatbot: significa activar el dispositivo equivocado, leer mal el estado real de un sensor, o hacer referencia a una entidad que no existe en tu configuración de Home Assistant. Este artículo cubre los modos de fallo específicos del hogar inteligente y las técnicas de grounding — esquemas de function calling y restricciones de lista de entidades — que los reducen, apoyándose en los consejos generales de reducción de alucinaciones ya cubiertos en otra parte de este sitio.',
    metaDescription:
      'Reducir las alucinaciones de LLM en la domótica: por qué una IA activa el dispositivo equivocado o inventa entidades, y las técnicas de grounding que lo solucionan.',
    twitterDescription:
      'Por qué un LLM local a veces activa el dispositivo de hogar inteligente equivocado — y las técnicas de restricción de entidades que lo solucionan.',
    readTime: '7 min de lectura',
    audience: 'Usuarios de Home Assistant con automatizaciones impulsadas por LLM que quieren menos activaciones erróneas',
    primaryTerm: 'alucinacion llm domotica',
    targetKeywords: [
      'alucinacion llm domotica',
      'ia automatizacion dispositivo equivocado activado',
      'home assistant llm errores entidades',
      'reducir errores automatizacion ia',
      'function calling grounding home assistant',
    ],
    leadAnswerBlock:
      '**En la domótica, una alucinación de LLM normalmente significa activar el dispositivo equivocado, leer mal el estado real de un sensor, o hacer referencia a una entidad que no existe — un modo de fallo distinto al de un chatbot que inventa un hecho, y que se reduce restringiendo el modelo a tu lista de entidades real y actual en lugar de dejarlo razonar libremente sobre nombres de dispositivos.** Los esquemas de function calling que solo exponen entidades reales son la solución principal.',
    quickAnswerTop: {
      es: {
        question: '¿Por qué mi IA de hogar inteligente a veces activa el dispositivo equivocado?',
        answer:
          'Esto suele ocurrir cuando el modelo razona sobre nombres o estados de dispositivos a partir de su entrenamiento general en lugar de tu lista de entidades real y actual — por ejemplo, suponiendo que existe "luz de la sala" cuando tu entidad en realidad se llama "lámpara de lectura". La solución es el grounding: restringir el esquema de function calling del modelo a solo las entidades que realmente existen en tu instancia de Home Assistant, y pasar el estado actual de la entidad directamente en lugar de dejar que el modelo lo infiera o lo recuerde. Esto es una acotación específica del hogar inteligente de la técnica general de reducción de alucinaciones, aplicada específicamente a la capa de function calling.',
        bullets: [
          'Causa raíz: el modelo adivina nombres/estados de dispositivos en lugar de usar tu lista de entidades real y actual',
          'Solución: restringir el esquema de function calling a solo entidades reales y actuales — no nombres de dispositivos en texto libre',
          'Pasar el estado actual del sensor/dispositivo directamente en el prompt en lugar de dejar que el modelo lo suponga o lo recuerde',
          'Diferente de la alucinación general de los chatbots — consulta la guía general para ese tema más amplio',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Cómo se ve la alucinación en la domótica', anchor: 'what-it-looks-like' },
      { label: 'Grounding: restringir a entidades reales', anchor: 'grounding' },
      { label: 'Pasar el estado actual, no un estado supuesto', anchor: 'current-state' },
      { label: 'Probar y detectar errores', anchor: 'testing' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'La alucinación de LLM en la domótica significa activar el dispositivo equivocado o inventar una entidad inexistente, y se soluciona principalmente restringiendo el esquema de function calling del modelo a tu lista de entidades real y actual.' },
      { type: 'plain-terms', content: 'Una alucinación de IA general consiste en inventar un hecho incorrecto. En un hogar inteligente, el error equivalente es que la IA encienda la luz equivocada o piense que una puerta está cerrada con llave cuando no lo está, generalmente porque adivinó un nombre de dispositivo en lugar de comprobar lo que realmente existe. La solución principal es dejar que la IA elija siempre entre una lista de tus dispositivos reales y actuales, en lugar de permitirle inventar o suponer uno.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Alucinación en domótica = dispositivo equivocado activado, estado mal leído, o entidad inexistente referenciada — no un hecho general inventado',
          'Solución principal: restringir el esquema de function calling del modelo a solo tu lista de entidades real y actual',
          'Pasar el estado actual del sensor/dispositivo directamente en el prompt, en lugar de dejar que el modelo lo suponga o lo recuerde de un momento anterior de la conversación',
          'Los modelos pequeños y bien acotados (ver la guía de modelos de lenguaje pequeños) son inherentemente menos propensos a esto que los modelos de propósito general con un conjunto de herramientas amplio y sin restricciones',
          'Prueba las automatizaciones frente a casos límite (entidades renombradas, dispositivos desconectados) antes de confiar en ellas sin supervisión',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: 'Cómo se ve la alucinación en la domótica',
        content:
          '**Los tres modos de fallo comunes son: activar un dispositivo con nombre similar pero equivocado, actuar sobre un estado de sensor supuesto en lugar de real, y hacer referencia a una entidad que no existe en absoluto en tu configuración.**',
        items: [
          'Activación del dispositivo equivocado: pedir apagar "la lámpara" cuando tienes varias, y el modelo elige una basándose en una suposición en lugar de pedir aclaración o usar el contexto correctamente.',
          'Estado supuesto: una automatización actúa como si una ventana estuviera cerrada porque ese es el caso habitual, en lugar de comprobar la lectura real y actual del sensor.',
          'Entidad inexistente: el modelo hace referencia a un nombre de dispositivo que suena plausible (porque es común en los datos de entrenamiento) pero que nunca se configuró realmente en tu instancia de Home Assistant.',
        ],
      },
      grounding: {
        id: 'grounding',
        title: 'Grounding: restringir a entidades reales',
        content:
          '**La solución principal es un esquema de function calling que solo expone al modelo tu lista de entidades real y actual — solo puede llamar a funciones de dispositivos que realmente existen, eliminando estructuralmente el modo de fallo de "entidad inventada".**',
        items: [
          'Genera el esquema de function calling (o la lista de entidades pasada al modelo) dinámicamente a partir del registro de entidades real y actual de Home Assistant, en lugar de una lista escrita a mano o desactualizada que puede desincronizarse a medida que añades/eliminas dispositivos.',
          'Si tu configuración tiene nombres de entidades ambiguos (varias entidades de "luz"), renómbralas para que sean más distintivas en lugar de confiar en que el modelo las desambigüe correctamente — esto es una solución de configuración, no de prompting, y es más fiable.',
          'La guía de integración de Home Assistant-Ollama cubre la configuración práctica de conectar Ollama al agente de conversación de Home Assistant, que se encarga automáticamente de gran parte de esta generación de esquemas.',
        ],
      },
      currentState: {
        id: 'current-state',
        title: 'Pasar el estado actual, no un estado supuesto',
        content:
          '**Las automatizaciones que dependen del estado de un sensor deben consultar la lectura real y actual en el momento de la ejecución, en lugar de confiar en la memoria del modelo de un turno de conversación anterior o en una suposición sobre el estado típico.**',
        items: [
          'Para cualquier automatización en la que "¿está la ventana abierta?" o "¿está la luz ya encendida?" importe para la decisión, obtén ese estado directamente como parte de la lógica de la automatización, en lugar de confiar en que el modelo lo haya seguido correctamente a lo largo de una conversación.',
          'Este es un principio general de reducción de la fragilidad de los prompts (ver la guía transversal sobre ese tema), aplicado específicamente al estado del hogar inteligente respaldado por sensores.',
          'Combinar varias lecturas de sensores (fusión de sensores) antes de actuar también puede reducir que una lectura errónea de un solo sensor influya en una decisión — ver la fusión de sensores en la guía del hogar inteligente.',
        ],
      },
      testing: {
        id: 'testing',
        title: 'Probar y detectar errores',
        content:
          '**Prueba las automatizaciones frente a casos límite — una entidad renombrada, un dispositivo temporalmente desconectado, un comando ambiguo — antes de confiar en que funcionen sin supervisión, de la misma forma en que probarías cualquier lógica de automatización.**',
        items: [
          'Prueba deliberadamente un comando que haga referencia a una entidad renombrada o eliminada recientemente para confirmar que la automatización falla de forma segura (pide aclaración o no hace nada) en lugar de adivinar un dispositivo con nombre similar.',
          'Registra las acciones activadas por la automatización durante un período de prueba inicial para poder revisar lo que el modelo realmente hizo frente a lo que pretendías, detectando activaciones erróneas silenciosas antes de que se vuelvan rutinarias.',
          'Empieza las nuevas automatizaciones impulsadas por LLM con dispositivos de bajo riesgo (iluminación) antes de extender el patrón a dispositivos de mayor riesgo (cerraduras, sistemas de seguridad) donde una acción equivocada tiene más consecuencias.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿En qué se diferencia esto de los consejos generales sobre alucinación de IA?', a: 'Los consejos generales de reducción de alucinaciones (ver la guía de alucinaciones de IA) cubren hechos inventados en generación de texto abierta. Este artículo es específico para los modos de fallo de function calling que ocurren cuando un LLM mapea un comando a una acción sobre un dispositivo.' },
          { q: '¿Un modelo más pequeño alucina más o menos en este contexto?', a: 'Un modelo pequeño bien acotado y restringido a un esquema de function calling específico suele ser menos propenso a esto que un modelo de propósito general con un conjunto de herramientas amplio y sin restricciones — ver la guía de modelos de lenguaje pequeños para entender por qué.' },
          { q: '¿Puedo eliminar por completo las activaciones de dispositivos equivocados?', a: 'No por completo, pero restringir el esquema de function calling a tu lista de entidades real y actual, usar nombres de entidades distintivos, y probar casos límite reduce significativamente la tasa de fallo — trátalo como una reducción de riesgo, no como una garantía.' },
          { q: '¿Debería dejar que un LLM controle cerraduras y sistemas de seguridad?', a: 'Empieza con dispositivos de menor riesgo (iluminación) para generar confianza en la fiabilidad de tu configuración específica antes de extender el control por LLM a dispositivos de mayor consecuencia como las cerraduras — esta es una decisión de gestión de riesgo, no un requisito técnico.' },
          { q: '¿La integración de Ollama de Home Assistant gestiona el grounding de entidades automáticamente?', a: 'Genera dinámicamente la lista de entidades disponibles a partir de tu configuración actual para el agente de conversación, lo que gestiona gran parte del grounding descrito aquí — ver la guía de integración de Home Assistant + Ollama para los detalles de configuración.' },
          { q: '¿Qué debería hacer una automatización si no puede identificar con confianza la entidad correcta?', a: 'Fallar de forma segura — pedir aclaración o no hacer nada — en lugar de adivinar una entidad con nombre similar. Esta es una decisión de diseño sobre cómo estructuras la lógica de function calling de la automatización.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Automatizaciones del hogar más inteligentes con un LLM local](/es/smart-home/ai-automations-local-llm) — el patrón de automatización más amplio que este artículo refina',
          '[Conectar Ollama a Home Assistant: asistente de IA local](/es/smart-home/home-assistant-ollama-integration) — la integración que genera el esquema de entidades',
          '[Modelos de lenguaje pequeños para el control del hogar inteligente](/es/smart-home/local-small-language-models-smart-home) — por qué los modelos acotados ayudan aquí',
          '[Fusión de sensores en el hogar inteligente](/es/smart-home/sensor-fusion-smart-home-2027) — reducir errores de estado de un solo sensor',
          '[Reducir las alucinaciones de IA: una guía práctica](/es/prompt-engineering/ai-hallucinations-how-to-stop) — transversal: técnicas generales de reducción de alucinaciones',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reducir las alucinaciones de LLM en la domótica (2027)',
      description: 'Reducir las alucinaciones de LLM en la domótica: por qué una IA activa el dispositivo equivocado o inventa entidades, y las técnicas de grounding que lo solucionan.',
      url: 'https://www.promptquorum.com/es/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Alucinación de LLM' }, { '@type': 'Thing', name: 'Function calling' }, { '@type': 'Thing', name: 'Fiabilidad de la domótica' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿En qué se diferencia esto de los consejos generales sobre alucinación de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Los consejos generales cubren hechos inventados en texto abierto. Este artículo es específico para los fallos de function calling que ocurren cuando un LLM mapea un comando a una acción sobre un dispositivo.' } },
        { '@type': 'Question', name: '¿Puedo eliminar por completo las activaciones de dispositivos equivocados?', acceptedAnswer: { '@type': 'Answer', text: 'No por completo, pero restringir el esquema de function calling a tu lista de entidades real y probar casos límite reduce significativamente la tasa de fallo.' } },
        { '@type': 'Question', name: '¿Debería dejar que un LLM controle cerraduras y sistemas de seguridad?', acceptedAnswer: { '@type': 'Answer', text: 'Empieza con dispositivos de menor riesgo como la iluminación antes de extender el control por LLM a dispositivos de mayor consecuencia.' } },
        { '@type': 'Question', name: '¿Qué debería hacer una automatización si no puede identificar con confianza la entidad correcta?', acceptedAnswer: { '@type': 'Answer', text: 'Fallar de forma segura — pedir aclaración o no hacer nada — en lugar de adivinar una entidad con nombre similar.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-pt.webp',
    title: 'Reduzindo alucinações de LLM na automação residencial (2027)',
    seoTitle: 'Reduzindo alucinações de LLM na automação residencial (2027)',
    intro:
      'Uma alucinação de LLM na automação residencial é diferente de um fato alucinado em um chatbot: significa acionar o dispositivo errado, ler incorretamente o estado real de um sensor, ou referenciar uma entidade que não existe na sua configuração do Home Assistant. Este artigo aborda os modos de falha específicos da casa inteligente e as técnicas de grounding — esquemas de function calling e restrições de lista de entidades — que os reduzem, com base nas orientações gerais de redução de alucinações já abordadas em outras partes deste site.',
    metaDescription:
      'Reduzindo alucinações de LLM na automação residencial: por que uma IA aciona o dispositivo errado ou inventa entidades, e as técnicas de grounding que resolvem isso.',
    twitterDescription:
      'Por que um LLM local às vezes aciona o dispositivo de casa inteligente errado — e as técnicas de restrição de entidades que resolvem isso.',
    readTime: '7 min de leitura',
    audience: 'Usuários do Home Assistant com automações orientadas por LLM que querem menos falhas de acionamento',
    primaryTerm: 'alucinacao llm automacao residencial',
    targetKeywords: [
      'alucinacao llm automacao residencial',
      'ia automacao dispositivo errado acionado',
      'home assistant llm erros de entidade',
      'reduzir erros de automacao ia',
      'function calling grounding home assistant',
    ],
    leadAnswerBlock:
      '**Na automação residencial, uma alucinação de LLM geralmente significa acionar o dispositivo errado, ler incorretamente o estado real de um sensor, ou referenciar uma entidade que não existe — um modo de falha diferente de um chatbot que inventa um fato, e que é reduzido restringindo o modelo à sua lista de entidades real e atual, em vez de deixá-lo raciocinar livremente sobre nomes de dispositivos.** Esquemas de function calling que expõem apenas entidades reais são a principal solução.',
    quickAnswerTop: {
      pt: {
        question: 'Por que minha IA de casa inteligente às vezes aciona o dispositivo errado?',
        answer:
          'Isso geralmente acontece quando o modelo raciocina sobre nomes ou estados de dispositivos com base no seu treinamento geral, em vez da sua lista de entidades real e atual — por exemplo, presumindo que existe uma entidade "luz da sala" quando a sua na verdade se chama "luminária de leitura". A solução é o grounding: restringir o esquema de function calling do modelo apenas às entidades que realmente existem na sua instância do Home Assistant, e passar o estado atual da entidade diretamente, em vez de deixar o modelo inferir ou lembrar. Este é um recorte específico da casa inteligente da técnica geral de redução de alucinações, aplicado especificamente à camada de function calling.',
        bullets: [
          'Causa raiz: o modelo tenta adivinhar nomes/estados de dispositivos em vez de usar sua lista de entidades real e atual',
          'Solução: restringir o esquema de function calling apenas a entidades reais e atuais — não nomes de dispositivos em texto livre',
          'Passar o estado atual do sensor/dispositivo diretamente no prompt, em vez de deixar o modelo presumir ou lembrar',
          'Diferente da alucinação geral de chatbots — veja o guia geral sobre esse tópico mais amplo',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Como a alucinação se manifesta na automação residencial', anchor: 'what-it-looks-like' },
      { label: 'Grounding: restringir a entidades reais', anchor: 'grounding' },
      { label: 'Passando o estado atual, não um estado presumido', anchor: 'current-state' },
      { label: 'Testando e detectando erros', anchor: 'testing' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Alucinação de LLM na automação residencial significa acionar o dispositivo errado ou inventar uma entidade inexistente, corrigida principalmente restringindo o esquema de function calling do modelo à sua lista de entidades real e atual.' },
      { type: 'plain-terms', content: 'Uma alucinação de IA geral é inventar um fato errado. Em uma casa inteligente, o erro equivalente é a IA acender a luz errada ou achar que uma porta está trancada quando não está, geralmente porque ela tentou adivinhar um nome de dispositivo em vez de verificar o que realmente existe. A principal solução é deixar a IA escolher sempre apenas entre uma lista dos seus dispositivos reais e atuais, em vez de permitir que ela invente ou presuma um.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Alucinação na automação residencial = dispositivo errado acionado, estado lido incorretamente, ou entidade inexistente referenciada — não um fato geral inventado',
          'Principal solução: restringir o esquema de function calling do modelo apenas à sua lista de entidades real e atual',
          'Passar o estado atual do sensor/dispositivo diretamente no prompt, em vez de deixar o modelo presumir ou lembrar de um ponto anterior da conversa',
          'Modelos pequenos e bem delimitados (veja o guia de modelos de linguagem pequenos) são inerentemente menos propensos a isso do que modelos de uso geral com um conjunto de ferramentas amplo e irrestrito',
          'Teste as automações contra casos extremos (entidades renomeadas, dispositivos offline) antes de confiar nelas sem supervisão',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: 'Como a alucinação se manifesta na automação residencial',
        content:
          '**Os três modos de falha comuns são: acionar um dispositivo com nome parecido, mas errado, agir com base em um estado de sensor presumido em vez do real, e referenciar uma entidade que não existe na sua configuração.**',
        items: [
          'Acionamento do dispositivo errado: pedir para desligar "a luminária" quando você tem várias, e o modelo escolhe uma com base em um palpite, em vez de pedir esclarecimento ou usar o contexto corretamente.',
          'Estado presumido: uma automação age como se uma janela estivesse fechada porque esse é o caso comum, em vez de verificar a leitura real e atual do sensor.',
          'Entidade inexistente: o modelo referencia um nome de dispositivo que soa plausível (por ser comum nos dados de treinamento), mas que nunca foi realmente configurado na sua instância do Home Assistant.',
        ],
      },
      grounding: {
        id: 'grounding',
        title: 'Grounding: restringir a entidades reais',
        content:
          '**A principal solução é um esquema de function calling que expõe ao modelo apenas sua lista de entidades real e atual — ele só pode chamar funções para dispositivos que realmente existem, eliminando estruturalmente o modo de falha de "entidade inventada".**',
        items: [
          'Gere o esquema de function calling (ou a lista de entidades passada ao modelo) dinamicamente a partir do registro de entidades real e atual do Home Assistant, em vez de uma lista escrita à mão ou desatualizada que pode ficar dessincronizada à medida que você adiciona/remove dispositivos.',
          'Se sua configuração tem nomes de entidades ambíguos (várias entidades "luz"), renomeie-as para serem mais distintas, em vez de contar com o modelo para desambiguar corretamente — isso é uma correção de configuração, não de prompting, e é mais confiável.',
          'O guia de integração Home Assistant-Ollama aborda a configuração prática de conectar o Ollama ao agente de conversação do Home Assistant, que lida automaticamente com grande parte dessa geração de esquema.',
        ],
      },
      currentState: {
        id: 'current-state',
        title: 'Passando o estado atual, não um estado presumido',
        content:
          '**Automações que dependem do estado de um sensor devem consultar a leitura real e atual no momento da execução, em vez de confiar na memória do modelo sobre um turno de conversa anterior ou em uma suposição sobre o estado típico.**',
        items: [
          'Para qualquer automação em que "a janela está aberta" ou "a luz já está acesa" importe para a decisão, busque esse estado diretamente como parte da lógica da automação, em vez de confiar que o modelo o rastreou corretamente ao longo de uma conversa.',
          'Este é um princípio geral de redução da fragilidade de prompts (veja o guia transversal sobre esse tópico), aplicado especificamente ao estado da casa inteligente baseado em sensores.',
          'Combinar múltiplas leituras de sensores (fusão de sensores) antes de agir também pode reduzir que a leitura incorreta de um único sensor influencie uma decisão — veja a fusão de sensores no guia de casa inteligente.',
        ],
      },
      testing: {
        id: 'testing',
        title: 'Testando e detectando erros',
        content:
          '**Teste automações contra casos extremos — uma entidade renomeada, um dispositivo temporariamente offline, um comando ambíguo — antes de confiar nelas para funcionar sem supervisão, da mesma forma que você testaria qualquer lógica de automação.**',
        items: [
          'Teste deliberadamente um comando que referencia uma entidade recentemente renomeada ou removida para confirmar que a automação falha com segurança (pede esclarecimento ou não faz nada), em vez de tentar adivinhar um dispositivo com nome parecido.',
          'Registre as ações acionadas pela automação durante um período de teste inicial para que você possa revisar o que o modelo realmente fez em comparação com o que você pretendia, detectando falhas silenciosas de acionamento antes que se tornem rotina.',
          'Comece novas automações orientadas por LLM em dispositivos de baixo risco (iluminação) antes de estender o padrão para dispositivos de maior risco (fechaduras, sistemas de segurança) onde uma ação errada tem mais consequências.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Como isso é diferente de conselhos gerais sobre alucinação de IA?', a: 'As orientações gerais de redução de alucinações (veja o guia de alucinações de IA) abordam fatos inventados na geração de texto aberta. Este artigo é específico para os modos de falha de function calling que ocorrem quando um LLM mapeia um comando para uma ação em um dispositivo.' },
          { q: 'Um modelo menor alucina mais ou menos nesse contexto?', a: 'Um modelo pequeno bem delimitado e restrito a um esquema específico de function calling costuma ser menos propenso a isso do que um modelo de uso geral com um conjunto de ferramentas amplo e irrestrito — veja o guia de modelos de linguagem pequenos para entender o motivo.' },
          { q: 'Posso eliminar completamente os acionamentos de dispositivos errados?', a: 'Não completamente, mas restringir o esquema de function calling à sua lista de entidades real e atual, usar nomes de entidades distintos, e testar casos extremos reduz significativamente a taxa de falhas — trate isso como redução de risco, não como uma garantia.' },
          { q: 'Devo deixar um LLM controlar fechaduras e sistemas de segurança?', a: 'Comece com dispositivos de menor risco (iluminação) para construir confiança na confiabilidade da sua configuração específica antes de estender o controle por LLM a dispositivos de maior consequência, como fechaduras — essa é uma escolha de gestão de risco, não um requisito técnico.' },
          { q: 'A integração Ollama do Home Assistant lida com o grounding de entidades automaticamente?', a: 'Ela gera dinamicamente a lista de entidades disponíveis a partir da sua configuração atual para o agente de conversação, o que lida com grande parte do grounding descrito aqui — veja o guia de integração Home Assistant + Ollama para os detalhes de configuração.' },
          { q: 'O que uma automação deve fazer se não conseguir identificar com confiança a entidade correta?', a: 'Falhar com segurança — pedir esclarecimento ou não tomar nenhuma ação — em vez de tentar adivinhar uma entidade com nome parecido. Essa é uma escolha de design em como você estrutura a lógica de function calling da automação.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Automações residenciais mais inteligentes com um LLM local](/pt/smart-home/ai-automations-local-llm) — o padrão de automação mais amplo que este artigo refina',
          '[Conectando o Ollama ao Home Assistant: assistente de IA local](/pt/smart-home/home-assistant-ollama-integration) — a integração que gera o esquema de entidades',
          '[Modelos de linguagem pequenos para controle de casa inteligente](/pt/smart-home/local-small-language-models-smart-home) — por que modelos delimitados ajudam aqui',
          '[Fusão de sensores na casa inteligente](/pt/smart-home/sensor-fusion-smart-home-2027) — reduzindo erros de estado de sensor único',
          '[Reduzir alucinações de IA: um guia prático](/pt/prompt-engineering/ai-hallucinations-how-to-stop) — entre clusters: técnicas gerais de redução de alucinações',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reduzindo alucinações de LLM na automação residencial (2027)',
      description: 'Reduzindo alucinações de LLM na automação residencial: por que uma IA aciona o dispositivo errado ou inventa entidades, e as técnicas de grounding que resolvem isso.',
      url: 'https://www.promptquorum.com/pt/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Alucinação de LLM' }, { '@type': 'Thing', name: 'Function calling' }, { '@type': 'Thing', name: 'Confiabilidade da automação residencial' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Como isso é diferente de conselhos gerais sobre alucinação de IA?', acceptedAnswer: { '@type': 'Answer', text: 'As orientações gerais abordam fatos inventados em texto aberto. Este artigo é específico para falhas de function calling que ocorrem quando um LLM mapeia um comando para uma ação em um dispositivo.' } },
        { '@type': 'Question', name: 'Posso eliminar completamente os acionamentos de dispositivos errados?', acceptedAnswer: { '@type': 'Answer', text: 'Não completamente, mas restringir o esquema de function calling à sua lista de entidades real e testar casos extremos reduz significativamente a taxa de falhas.' } },
        { '@type': 'Question', name: 'Devo deixar um LLM controlar fechaduras e sistemas de segurança?', acceptedAnswer: { '@type': 'Answer', text: 'Comece com dispositivos de menor risco, como iluminação, antes de estender o controle por LLM a dispositivos de maior consequência.' } },
        { '@type': 'Question', name: 'O que uma automação deve fazer se não conseguir identificar com confiança a entidade correta?', acceptedAnswer: { '@type': 'Answer', text: 'Falhar com segurança — pedir esclarecimento ou não tomar nenhuma ação — em vez de tentar adivinhar uma entidade com nome parecido.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-ar.webp',
    title: 'تقليل هلوسة نماذج اللغة الكبيرة في أتمتة المنزل (2027)',
    seoTitle: 'تقليل هلوسة نماذج اللغة الكبيرة في أتمتة المنزل (2027)',
    intro:
      'تبدو هلوسة نموذج اللغة الكبير في أتمتة المنزل مختلفة عن هلوسة حقيقة في روبوت محادثة: فهي تعني تشغيل الجهاز الخطأ، أو قراءة الحالة الفعلية لمستشعر بشكل خاطئ، أو الإشارة إلى كيان غير موجود في إعداد Home Assistant الخاص بك. يتناول هذا المقال أنماط الفشل الخاصة بالمنزل الذكي وتقنيات التأصيل الواقعي (grounding) — مخططات استدعاء الوظائف وقيود قائمة الكيانات — التي تقلل منها، بناءً على نصائح تقليل الهلوسة العامة التي سبق تناولها في مكان آخر على هذا الموقع.',
    metaDescription:
      'تقليل هلوسة نماذج اللغة الكبيرة في أتمتة المنزل: لماذا يشغّل الذكاء الاصطناعي الجهاز الخطأ أو يخترع كيانات، وتقنيات التأصيل الواقعي التي تعالج ذلك.',
    twitterDescription:
      'لماذا يشغّل نموذج لغة كبير محلي أحيانًا جهاز المنزل الذكي الخطأ — وتقنيات تقييد الكيانات التي تعالج ذلك.',
    readTime: '7 دقائق للقراءة',
    audience: 'مستخدمو Home Assistant الذين يشغّلون أتمتة مدعومة بنماذج اللغة الكبيرة ويريدون تقليل الأخطاء في التشغيل',
    primaryTerm: 'هلوسة نموذج اللغة الكبير أتمتة المنزل',
    targetKeywords: [
      'هلوسة نموذج اللغة الكبير أتمتة المنزل',
      'الذكاء الاصطناعي أتمتة تشغيل جهاز خاطئ',
      'home assistant أخطاء كيانات نموذج اللغة الكبير',
      'تقليل أخطاء أتمتة الذكاء الاصطناعي',
      'استدعاء الوظائف التأصيل الواقعي home assistant',
    ],
    leadAnswerBlock:
      '**في أتمتة المنزل، تعني هلوسة نموذج اللغة الكبير عادةً تشغيل الجهاز الخطأ، أو قراءة الحالة الفعلية لمستشعر بشكل خاطئ، أو الإشارة إلى كيان غير موجود أصلًا — وهو نمط فشل مختلف عن اختراع روبوت محادثة لحقيقة، ويتم تقليله بتقييد النموذج بقائمة الكيانات الفعلية والحالية لديك بدلًا من تركه يستنتج بحرية أسماء الأجهزة.** مخططات استدعاء الوظائف التي لا تكشف إلا عن الكيانات الحقيقية هي الحل الرئيسي.',
    quickAnswerTop: {
      ar: {
        question: 'لماذا يشغّل الذكاء الاصطناعي الخاص بمنزلي الذكي أحيانًا الجهاز الخطأ؟',
        answer:
          'يحدث هذا عادةً عندما يستنتج النموذج أسماء الأجهزة أو حالاتها من تدريبه العام بدلًا من قائمة الكيانات الفعلية والحالية لديك — على سبيل المثال، افتراض وجود كيان "إضاءة غرفة المعيشة" بينما الكيان لديك يُسمى فعليًا "مصباح القراءة". الحل هو التأصيل الواقعي (grounding): قيّد مخطط استدعاء الوظائف الخاص بالنموذج على الكيانات الموجودة فعلًا في نسخة Home Assistant لديك فقط، ومرّر حالة الكيان الحالية مباشرة بدلًا من ترك النموذج يستنتجها أو يتذكرها. هذا تضييق خاص بالمنزل الذكي لتقنية تقليل الهلوسة العامة، يُطبَّق تحديدًا على طبقة استدعاء الوظائف.',
        bullets: [
          'السبب الجذري: يخمّن النموذج أسماء/حالات الأجهزة بدلًا من استخدام قائمة الكيانات الفعلية والحالية لديك',
          'الحل: تقييد مخطط استدعاء الوظائف على الكيانات الحقيقية والحالية فقط — وليس أسماء أجهزة حرة الصياغة',
          'تمرير حالة المستشعر/الجهاز الحالية مباشرة إلى الطلب بدلًا من ترك النموذج يفترضها أو يتذكرها',
          'يختلف عن هلوسة روبوتات المحادثة العامة — راجع الدليل العام لذلك الموضوع الأوسع',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'كيف تبدو الهلوسة في أتمتة المنزل', anchor: 'what-it-looks-like' },
      { label: 'التأصيل الواقعي: التقييد بالكيانات الحقيقية', anchor: 'grounding' },
      { label: 'تمرير الحالة الحالية، لا الحالة المفترضة', anchor: 'current-state' },
      { label: 'الاختبار واكتشاف الأخطاء', anchor: 'testing' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'تعني هلوسة نموذج اللغة الكبير في أتمتة المنزل تشغيل الجهاز الخطأ أو اختراع كيان غير موجود، ويُعالَج ذلك أساسًا بتقييد مخطط استدعاء الوظائف الخاص بالنموذج على قائمة الكيانات الفعلية والحالية لديك.' },
      { type: 'plain-terms', content: 'هلوسة الذكاء الاصطناعي العامة تعني اختلاق حقيقة خاطئة. في المنزل الذكي، الخطأ المماثل هو أن يشغّل الذكاء الاصطناعي المصباح الخطأ أو يظن أن بابًا مقفل بينما هو ليس كذلك، وعادةً لأنه خمّن اسم جهاز بدلًا من التحقق مما هو موجود فعليًا. الحل الرئيسي هو ترك الذكاء الاصطناعي يختار دائمًا من قائمة أجهزتك الحقيقية والحالية فقط، بدلًا من السماح له باختراع جهاز أو افتراضه.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'هلوسة أتمتة المنزل = تشغيل جهاز خاطئ، أو حالة مقروءة بشكل خاطئ، أو الإشارة إلى كيان غير موجود — وليست حقيقة عامة مختلقة',
          'الحل الرئيسي: تقييد مخطط استدعاء الوظائف الخاص بالنموذج على قائمة الكيانات الفعلية والحالية لديك فقط',
          'تمرير حالة المستشعر/الجهاز الحالية مباشرة إلى الطلب، بدلًا من ترك النموذج يفترضها أو يتذكرها من وقت سابق في المحادثة',
          'النماذج الصغيرة والمحددة النطاق جيدًا (راجع دليل نماذج اللغة الصغيرة) أقل عرضة لهذا بطبيعتها من النماذج العامة الغرض التي تملك مجموعة أدوات واسعة وغير مقيدة',
          'اختبر الأتمتة مقابل الحالات الحدية (كيانات أُعيدت تسميتها، أجهزة غير متصلة) قبل الوثوق بها دون إشراف',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: 'كيف تبدو الهلوسة في أتمتة المنزل',
        content:
          '**أنماط الفشل الثلاثة الشائعة هي: تشغيل جهاز يحمل اسمًا مشابهًا لكنه خاطئ، والتصرف بناءً على حالة مستشعر مفترضة بدلًا من الفعلية، والإشارة إلى كيان غير موجود إطلاقًا في إعدادك.**',
        items: [
          'تشغيل الجهاز الخطأ: طلب إطفاء "المصباح" بينما لديك عدة مصابيح، فيختار النموذج واحدًا بناءً على تخمين بدلًا من طلب التوضيح أو استخدام السياق بشكل صحيح.',
          'الحالة المفترضة: تتصرف الأتمتة وكأن نافذة مغلقة لأن هذه هي الحالة الشائعة، بدلًا من التحقق من القراءة الفعلية والحالية للمستشعر.',
          'كيان غير موجود: يشير النموذج إلى اسم جهاز يبدو معقولًا (لأنه شائع في بيانات التدريب) لكنه لم يُعدّ فعليًا مطلقًا في نسخة Home Assistant لديك.',
        ],
      },
      grounding: {
        id: 'grounding',
        title: 'التأصيل الواقعي: التقييد بالكيانات الحقيقية',
        content:
          '**الحل الرئيسي هو مخطط استدعاء وظائف لا يكشف للنموذج إلا عن قائمة الكيانات الفعلية والحالية لديك — فلا يمكنه استدعاء وظائف إلا لأجهزة موجودة فعليًا، مما يلغي بنيويًا نمط فشل "الكيان المُختلَق".**',
        items: [
          'ولّد مخطط استدعاء الوظائف (أو قائمة الكيانات الممرّرة إلى النموذج) ديناميكيًا من سجل الكيانات الفعلي والحالي في Home Assistant، بدلًا من قائمة مكتوبة يدويًا أو قديمة يمكن أن تنحرف عن التزامن مع إضافة/إزالة الأجهزة.',
          'إذا كان إعدادك يحتوي على أسماء كيانات غامضة (عدة كيانات "إضاءة")، أعد تسميتها لتكون أكثر تمييزًا بدلًا من الاعتماد على النموذج لحل الغموض بشكل صحيح — هذا إصلاح على مستوى الإعداد، وليس على مستوى الطلب، وهو أكثر موثوقية.',
          'يتناول دليل تكامل Home Assistant-Ollama الإعداد العملي لربط Ollama بوكيل المحادثة في Home Assistant، الذي يتعامل تلقائيًا مع الكثير من عملية توليد المخطط هذه.',
        ],
      },
      currentState: {
        id: 'current-state',
        title: 'تمرير الحالة الحالية، لا الحالة المفترضة',
        content:
          '**يجب على الأتمتة التي تعتمد على حالة المستشعر الاستعلام عن القراءة الفعلية والحالية وقت التنفيذ، بدلًا من الاعتماد على ذاكرة النموذج لدورة محادثة سابقة أو افتراض حول الحالة النموذجية.**',
        items: [
          'بالنسبة لأي أتمتة تكون فيها "هل النافذة مفتوحة" أو "هل الإضاءة مشغّلة بالفعل" مهمة للقرار، اجلب تلك الحالة مباشرة كجزء من منطق الأتمتة، بدلًا من الوثوق بأن النموذج تتبعها بشكل صحيح عبر المحادثة.',
          'هذا مبدأ عام من تقليل هشاشة الطلبات (راجع الدليل المشترك بين المجموعات حول هذا الموضوع)، مطبَّق تحديدًا على حالة المنزل الذكي المدعومة بالمستشعرات.',
          'يمكن أن يقلل دمج قراءات متعددة من المستشعرات (دمج بيانات المستشعرات) قبل التصرف أيضًا من تأثير قراءة خاطئة من مستشعر واحد على القرار — راجع دمج بيانات المستشعرات في دليل المنزل الذكي.',
        ],
      },
      testing: {
        id: 'testing',
        title: 'الاختبار واكتشاف الأخطاء',
        content:
          '**اختبر الأتمتة مقابل الحالات الحدية — كيان أُعيدت تسميته، جهاز غير متصل مؤقتًا، أمر غامض — قبل الوثوق بها للعمل دون إشراف، بنفس الطريقة التي تختبر بها أي منطق أتمتة آخر.**',
        items: [
          'اختبر عمدًا أمرًا يشير إلى كيان أُعيدت تسميته أو أُزيل مؤخرًا للتأكد من أن الأتمتة تفشل بأمان (تطلب توضيحًا أو لا تفعل شيئًا) بدلًا من تخمين جهاز يحمل اسمًا مشابهًا.',
          'سجّل الإجراءات التي تُطلقها الأتمتة خلال فترة تجريبية أولية حتى تتمكن من مراجعة ما فعله النموذج فعليًا مقابل ما كنت تنويه، لاكتشاف الأخطاء الصامتة في التشغيل قبل أن تصبح روتينية.',
          'ابدأ الأتمتة الجديدة المدعومة بنماذج اللغة الكبيرة على أجهزة منخفضة المخاطر (الإضاءة) قبل توسيع النمط إلى أجهزة أعلى مخاطرة (الأقفال، أنظمة الأمان) حيث يكون للإجراء الخاطئ عواقب أكبر.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'كيف يختلف هذا عن نصائح هلوسة الذكاء الاصطناعي العامة؟', a: 'تتناول نصائح تقليل الهلوسة العامة (راجع دليل هلوسة الذكاء الاصطناعي) الحقائق المختلقة في توليد النصوص المفتوح. هذا المقال خاص بأنماط فشل استدعاء الوظائف التي تحدث عندما يربط نموذج اللغة الكبير أمرًا بإجراء على جهاز.' },
          { q: 'هل يهلوس النموذج الأصغر أكثر أم أقل في هذا السياق؟', a: 'النموذج الصغير المحدد النطاق جيدًا والمقيّد بمخطط استدعاء وظائف محدد غالبًا ما يكون أقل عرضة لهذا من نموذج عام الغرض يملك مجموعة أدوات واسعة وغير مقيدة — راجع دليل نماذج اللغة الصغيرة لمعرفة السبب.' },
          { q: 'هل يمكنني القضاء تمامًا على تشغيل الأجهزة الخاطئة؟', a: 'ليس تمامًا، لكن تقييد مخطط استدعاء الوظائف بقائمة الكيانات الفعلية والحالية لديك، واستخدام أسماء كيانات مميزة، واختبار الحالات الحدية يقلل بشكل كبير من معدل الفشل — تعامل مع ذلك كتقليل للمخاطر، وليس ضمانًا.' },
          { q: 'هل يجب أن أدع نموذج اللغة الكبير يتحكم بالأقفال وأنظمة الأمان؟', a: 'ابدأ بالأجهزة الأقل مخاطرة (الإضاءة) لبناء الثقة في موثوقية إعدادك الخاص قبل توسيع تحكم نموذج اللغة الكبير إلى أجهزة ذات عواقب أكبر مثل الأقفال — هذا اختيار في إدارة المخاطر، وليس متطلبًا تقنيًا.' },
          { q: 'هل يتعامل تكامل Ollama في Home Assistant مع تأصيل الكيانات تلقائيًا؟', a: 'يولّد قائمة الكيانات المتاحة ديناميكيًا من إعدادك الحالي لوكيل المحادثة، وهو ما يتعامل مع معظم التأصيل الموصوف هنا — راجع دليل تكامل Home Assistant وOllama لتفاصيل الإعداد.' },
          { q: 'ماذا يجب أن تفعل الأتمتة إذا لم تستطع تحديد الكيان الصحيح بثقة؟', a: 'يجب أن تفشل بأمان — تطلب توضيحًا أو لا تتخذ أي إجراء — بدلًا من تخمين كيان يحمل اسمًا مشابهًا. هذا اختيار تصميمي في كيفية بنائك لمنطق استدعاء الوظائف في الأتمتة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أتمتة منزلية أذكى باستخدام نموذج لغة كبير محلي](/ar/smart-home/ai-automations-local-llm) — نمط الأتمتة الأوسع الذي يُحسّنه هذا المقال',
          '[ربط Ollama بـHome Assistant: مساعد ذكاء اصطناعي محلي](/ar/smart-home/home-assistant-ollama-integration) — التكامل الذي يولّد مخطط الكيانات',
          '[نماذج اللغة الصغيرة للتحكم في المنزل الذكي](/ar/smart-home/local-small-language-models-smart-home) — لماذا تساعد النماذج المحددة النطاق هنا',
          '[دمج بيانات المستشعرات في المنزل الذكي](/ar/smart-home/sensor-fusion-smart-home-2027) — تقليل أخطاء حالة المستشعر الواحد',
          '[تقليل هلوسة الذكاء الاصطناعي: دليل عملي](/ar/prompt-engineering/ai-hallucinations-how-to-stop) — مشترك بين المجموعات: تقنيات تقليل الهلوسة العامة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'تقليل هلوسة نماذج اللغة الكبيرة في أتمتة المنزل (2027)',
      description: 'تقليل هلوسة نماذج اللغة الكبيرة في أتمتة المنزل: لماذا يشغّل الذكاء الاصطناعي الجهاز الخطأ أو يخترع كيانات، وتقنيات التأصيل الواقعي التي تعالج ذلك.',
      url: 'https://www.promptquorum.com/ar/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'هلوسة نموذج اللغة الكبير' }, { '@type': 'Thing', name: 'استدعاء الوظائف' }, { '@type': 'Thing', name: 'موثوقية أتمتة المنزل' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'كيف يختلف هذا عن نصائح هلوسة الذكاء الاصطناعي العامة؟', acceptedAnswer: { '@type': 'Answer', text: 'تتناول النصائح العامة الحقائق المختلقة في النصوص المفتوحة. هذا المقال خاص بأخطاء استدعاء الوظائف التي تحدث عندما يربط نموذج اللغة الكبير أمرًا بإجراء على جهاز.' } },
        { '@type': 'Question', name: 'هل يمكنني القضاء تمامًا على تشغيل الأجهزة الخاطئة؟', acceptedAnswer: { '@type': 'Answer', text: 'ليس تمامًا، لكن تقييد مخطط استدعاء الوظائف بقائمة الكيانات الفعلية لديك واختبار الحالات الحدية يقلل بشكل كبير من معدل الفشل.' } },
        { '@type': 'Question', name: 'هل يجب أن أدع نموذج اللغة الكبير يتحكم بالأقفال وأنظمة الأمان؟', acceptedAnswer: { '@type': 'Answer', text: 'ابدأ بأجهزة أقل مخاطرة مثل الإضاءة قبل توسيع تحكم نموذج اللغة الكبير إلى أجهزة ذات عواقب أكبر.' } },
        { '@type': 'Question', name: 'ماذا يجب أن تفعل الأتمتة إذا لم تستطع تحديد الكيان الصحيح بثقة؟', acceptedAnswer: { '@type': 'Answer', text: 'يجب أن تفشل بأمان — تطلب توضيحًا أو لا تتخذ أي إجراء — بدلًا من تخمين كيان يحمل اسمًا مشابهًا.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/reducing-llm-hallucinations-home-automation-overview-hero-ko.webp',
    title: '홈 자동화에서 LLM 환각 줄이기 (2027)',
    seoTitle: '홈 자동화에서 LLM 환각 줄이기 (2027)',
    intro:
      '홈 자동화에서의 LLM 환각은 챗봇에서 사실을 환각하는 것과는 다른 모습입니다. 이는 잘못된 기기를 작동시키거나, 센서의 실제 상태를 잘못 읽거나, Home Assistant 설정에 존재하지 않는 엔티티를 참조하는 것을 의미합니다. 이 글에서는 스마트홈 특유의 실패 모드와 이를 줄이는 그라운딩 기법 — 함수 호출 스키마와 엔티티 목록 제약 — 을 다루며, 이 사이트의 다른 곳에서 이미 다룬 일반적인 환각 감소 조언을 기반으로 합니다.',
    metaDescription:
      '홈 자동화에서 LLM 환각 줄이기: AI가 잘못된 기기를 작동시키거나 엔티티를 지어내는 이유와, 이를 해결하는 그라운딩 기법.',
    twitterDescription:
      '로컬 LLM이 때때로 잘못된 스마트홈 기기를 작동시키는 이유 — 그리고 이를 해결하는 엔티티 제약 기법.',
    readTime: '7분 소요',
    audience: '오작동을 줄이고 싶은, LLM 기반 자동화를 운영하는 Home Assistant 사용자',
    primaryTerm: 'llm 환각 홈 자동화',
    targetKeywords: [
      'llm 환각 홈 자동화',
      'ai 자동화 잘못된 기기 작동',
      'home assistant llm 엔티티 오류',
      'ai 자동화 오류 줄이기',
      'function calling 그라운딩 home assistant',
    ],
    leadAnswerBlock:
      '**홈 자동화에서 LLM 환각이란 보통 잘못된 기기를 작동시키거나, 센서의 실제 상태를 잘못 읽거나, 존재하지 않는 엔티티를 참조하는 것을 의미합니다 — 이는 챗봇이 사실을 지어내는 것과는 다른 실패 모드이며, 모델이 기기 이름에 대해 자유롭게 추론하도록 두는 대신 실제 현재 엔티티 목록으로 제약함으로써 줄일 수 있습니다.** 실제 존재하는 엔티티만 노출하는 함수 호출 스키마가 주요 해결책입니다.',
    quickAnswerTop: {
      ko: {
        question: '스마트홈 AI가 왜 가끔 잘못된 기기를 작동시키나요?',
        answer:
          '이는 보통 모델이 실제 현재 엔티티 목록이 아니라 일반적인 학습 내용을 바탕으로 기기 이름이나 상태를 추론할 때 발생합니다 — 예를 들어, 실제 엔티티 이름이 "독서등"인데도 "거실 조명"이 존재한다고 추측하는 경우입니다. 해결책은 그라운딩입니다: 모델의 함수 호출 스키마를 Home Assistant 인스턴스에 실제로 존재하는 엔티티로만 제약하고, 모델이 추론하거나 기억하게 두는 대신 현재 엔티티 상태를 직접 전달하는 것입니다. 이는 일반적인 환각 감소 기법을 스마트홈에 맞게 좁힌 것으로, 특히 함수 호출 계층에 적용됩니다.',
        bullets: [
          '근본 원인: 모델이 실제 현재 엔티티 목록을 사용하는 대신 기기 이름/상태를 추측함',
          '해결책: 함수 호출 스키마를 실제 존재하는 현재 엔티티로만 제약 — 자유 형식의 기기 이름 사용 금지',
          '모델이 상태를 가정하거나 기억하게 두는 대신 현재 센서/기기 상태를 프롬프트에 직접 전달',
          '일반적인 챗봇 환각과는 다름 — 더 넓은 주제에 대해서는 일반 가이드를 참조',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '홈 자동화에서 환각이 나타나는 방식', anchor: 'what-it-looks-like' },
      { label: '그라운딩: 실제 엔티티로 제약하기', anchor: 'grounding' },
      { label: '가정된 상태가 아닌 현재 상태 전달하기', anchor: 'current-state' },
      { label: '테스트 및 오류 발견', anchor: 'testing' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '홈 자동화에서 LLM 환각이란 잘못된 기기를 작동시키거나 존재하지 않는 엔티티를 지어내는 것을 말하며, 주로 모델의 함수 호출 스키마를 실제 현재 엔티티 목록으로 제약함으로써 해결됩니다.' },
      { type: 'plain-terms', content: '일반적인 AI 환각은 잘못된 사실을 지어내는 것입니다. 스마트홈에서 이에 해당하는 실수는 AI가 잘못된 조명을 켜거나 문이 잠기지 않았는데 잠겼다고 생각하는 것으로, 대개 실제로 존재하는 것을 확인하는 대신 기기 이름을 추측했기 때문에 발생합니다. 주된 해결책은 AI가 실제 기기를 지어내거나 가정하게 두는 대신, 항상 실제 현재 기기 목록에서만 선택하도록 하는 것입니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '홈 자동화 환각 = 잘못된 기기 작동, 잘못 읽힌 상태, 또는 존재하지 않는 엔티티 참조 — 지어낸 일반적인 사실이 아님',
          '주요 해결책: 모델의 함수 호출 스키마를 실제 현재 엔티티 목록으로만 제약',
          '모델이 대화 초반의 내용을 가정하거나 기억하게 두는 대신, 현재 센서/기기 상태를 프롬프트에 직접 전달',
          '범위가 잘 정해진 소규모 모델(소형 언어 모델 가이드 참조)은 광범위하고 제약 없는 도구 세트를 가진 범용 모델보다 본질적으로 이 문제에 덜 취약함',
          '감독 없이 신뢰하기 전에 엣지 케이스(이름이 변경된 엔티티, 오프라인 기기)에 대해 자동화를 테스트',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: '홈 자동화에서 환각이 나타나는 방식',
        content:
          '**세 가지 흔한 실패 모드는 이름은 비슷하지만 잘못된 기기를 작동시키는 것, 실제가 아닌 가정된 센서 상태에 따라 동작하는 것, 그리고 설정에 전혀 존재하지 않는 엔티티를 참조하는 것입니다.**',
        items: [
          '잘못된 기기 작동: 여러 개의 램프가 있는데 "램프"를 끄라고 요청하면, 모델이 명확히 확인하거나 맥락을 올바르게 사용하는 대신 추측을 바탕으로 하나를 선택합니다.',
          '가정된 상태: 자동화가 실제 현재 센서 값을 확인하는 대신, 흔한 경우이기 때문에 창문이 닫혀 있다고 가정하고 동작합니다.',
          '존재하지 않는 엔티티: 모델이 (학습 데이터에서 흔하기 때문에) 그럴듯하게 들리는 기기 이름을 참조하지만, 실제로는 Home Assistant 인스턴스에 한 번도 설정된 적이 없습니다.',
        ],
      },
      grounding: {
        id: 'grounding',
        title: '그라운딩: 실제 엔티티로 제약하기',
        content:
          '**주요 해결책은 모델에게 항상 실제 현재 엔티티 목록만 노출하는 함수 호출 스키마입니다 — 이렇게 하면 실제로 존재하는 기기에 대해서만 함수를 호출할 수 있어 "지어낸 엔티티" 실패 모드를 구조적으로 없앨 수 있습니다.**',
        items: [
          '기기를 추가/제거할 때 어긋날 수 있는 수기 작성이거나 오래된 목록 대신, Home Assistant의 실제 현재 엔티티 레지스트리에서 함수 호출 스키마(또는 모델에 전달되는 엔티티 목록)를 동적으로 생성하세요.',
          '설정에 모호한 엔티티 이름이 있는 경우(여러 개의 "조명" 엔티티 등), 모델이 정확히 구분해 주기를 기대하는 대신 더 명확하게 구분되도록 이름을 바꾸세요 — 이는 프롬프트가 아닌 구성 차원의 해결책이며 더 신뢰할 수 있습니다.',
          'Home Assistant-Ollama 통합 가이드는 Ollama를 Home Assistant의 대화 에이전트에 연결하는 실질적인 설정 방법을 다루며, 이 에이전트가 이러한 스키마 생성의 상당 부분을 자동으로 처리합니다.',
        ],
      },
      currentState: {
        id: 'current-state',
        title: '가정된 상태가 아닌 현재 상태 전달하기',
        content:
          '**센서 상태에 의존하는 자동화는 이전 대화 턴에 대한 모델의 기억이나 일반적인 상태에 대한 가정에 의존하는 대신, 실행 시점에 실제 현재 값을 조회해야 합니다.**',
        items: [
          '"창문이 열려 있는가" 또는 "조명이 이미 켜져 있는가"가 결정에 중요한 자동화의 경우, 모델이 대화 전반에 걸쳐 이를 정확히 추적했을 것이라고 신뢰하는 대신, 자동화 로직의 일부로서 해당 상태를 직접 가져오세요.',
          '이는 프롬프트 취약성 감소에 대한 일반 원칙(관련 클러스터 간 가이드 참조)을 센서 기반 스마트홈 상태에 특화하여 적용한 것입니다.',
          '동작하기 전에 여러 센서 값을 결합하는 것(센서 퓨전) 또한 단일 센서의 오독이 결정에 반영되는 것을 줄일 수 있습니다 — 스마트홈 가이드의 센서 퓨전 부분을 참조하세요.',
        ],
      },
      testing: {
        id: 'testing',
        title: '테스트 및 오류 발견',
        content:
          '**다른 자동화 로직을 테스트하는 것과 마찬가지로, 감독 없이 실행되도록 신뢰하기 전에 이름이 변경된 엔티티, 일시적으로 오프라인인 기기, 모호한 명령 같은 엣지 케이스에 대해 자동화를 테스트하세요.**',
        items: [
          '최근 이름이 변경되었거나 삭제된 엔티티를 참조하는 명령을 의도적으로 테스트하여, 자동화가 이름이 비슷한 기기를 추측하는 대신 안전하게 실패하는지(명확히 확인을 요청하거나 아무 동작도 하지 않는지) 확인하세요.',
          '초기 시험 기간 동안 자동화가 트리거한 동작을 기록해 두어, 모델이 실제로 한 일과 의도했던 일을 비교할 수 있도록 하고, 소리 없는 오작동이 일상화되기 전에 발견하세요.',
          '새로운 LLM 기반 자동화는 위험도가 낮은 기기(조명)부터 시작한 후, 잘못된 동작이 더 큰 결과를 초래하는 위험도가 높은 기기(잠금장치, 보안 시스템)로 패턴을 확장하세요.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '이는 일반적인 AI 환각 조언과 어떻게 다른가요?', a: '일반적인 환각 감소 조언(AI 환각 가이드 참조)은 개방형 텍스트 생성에서 지어낸 사실을 다룹니다. 이 글은 LLM이 명령을 기기 동작에 매핑할 때 발생하는 함수 호출 특유의 실패 모드를 다룹니다.' },
          { q: '이 맥락에서 더 작은 모델이 환각을 더 많이 일으키나요, 아니면 더 적게 일으키나요?', a: '특정 함수 호출 스키마로 제약된, 범위가 잘 정해진 소규모 모델은 광범위하고 제약 없는 도구 세트를 가진 범용 모델보다 이 문제에 덜 취약한 경우가 많습니다 — 그 이유는 소형 언어 모델 가이드를 참조하세요.' },
          { q: '잘못된 기기 작동을 완전히 없앨 수 있나요?', a: '완전히는 아니지만, 함수 호출 스키마를 실제 현재 엔티티 목록으로 제약하고, 구별되는 엔티티 이름을 사용하고, 엣지 케이스를 테스트하면 실패율을 크게 줄일 수 있습니다 — 이를 보장이 아닌 위험 감소로 받아들이세요.' },
          { q: 'LLM이 잠금장치와 보안 시스템을 제어하도록 해도 될까요?', a: '잠금장치처럼 결과가 더 큰 기기로 LLM 제어를 확장하기 전에, 위험도가 낮은 기기(조명)부터 시작해 특정 설정의 신뢰성에 대한 확신을 쌓으세요 — 이는 기술적 요구사항이 아닌 위험 관리 차원의 선택입니다.' },
          { q: 'Home Assistant의 Ollama 통합이 엔티티 그라운딩을 자동으로 처리하나요?', a: '대화 에이전트를 위해 현재 설정에서 사용 가능한 엔티티 목록을 동적으로 생성하며, 이는 여기서 설명한 그라운딩의 상당 부분을 처리합니다 — 설정 세부 사항은 Home Assistant + Ollama 통합 가이드를 참조하세요.' },
          { q: '자동화가 올바른 엔티티를 확신 있게 식별할 수 없을 때 어떻게 해야 하나요?', a: '이름이 비슷한 엔티티를 추측하는 대신 안전하게 실패해야 합니다 — 명확히 확인을 요청하거나 아무 동작도 하지 않아야 합니다. 이는 자동화의 함수 호출 로직을 어떻게 구성할지에 대한 설계 선택입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[로컬 LLM으로 더 똑똑한 홈 자동화 구현하기](/ko/smart-home/ai-automations-local-llm) — 이 글이 다듬고 있는 더 넓은 자동화 패턴',
          '[Ollama를 Home Assistant에 연결하기: 로컬 AI 어시스턴트](/ko/smart-home/home-assistant-ollama-integration) — 엔티티 스키마를 생성하는 통합',
          '[스마트홈 제어를 위한 소형 언어 모델](/ko/smart-home/local-small-language-models-smart-home) — 범위가 정해진 모델이 여기서 도움이 되는 이유',
          '[스마트홈의 센서 퓨전](/ko/smart-home/sensor-fusion-smart-home-2027) — 단일 센서 상태 오류 줄이기',
          '[AI 환각 줄이기: 실용 가이드](/ko/prompt-engineering/ai-hallucinations-how-to-stop) — 클러스터 간: 일반적인 환각 감소 기법',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '홈 자동화에서 LLM 환각 줄이기 (2027)',
      description: '홈 자동화에서 LLM 환각 줄이기: AI가 잘못된 기기를 작동시키거나 엔티티를 지어내는 이유와, 이를 해결하는 그라운딩 기법.',
      url: 'https://www.promptquorum.com/ko/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'LLM 환각' }, { '@type': 'Thing', name: '함수 호출' }, { '@type': 'Thing', name: '홈 자동화 신뢰성' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '이는 일반적인 AI 환각 조언과 어떻게 다른가요?', acceptedAnswer: { '@type': 'Answer', text: '일반적인 조언은 개방형 텍스트에서 지어낸 사실을 다룹니다. 이 글은 LLM이 명령을 기기 동작에 매핑할 때 발생하는 함수 호출 실패를 다룹니다.' } },
        { '@type': 'Question', name: '잘못된 기기 작동을 완전히 없앨 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '완전히는 아니지만, 함수 호출 스키마를 실제 엔티티 목록으로 제약하고 엣지 케이스를 테스트하면 실패율을 크게 줄일 수 있습니다.' } },
        { '@type': 'Question', name: 'LLM이 잠금장치와 보안 시스템을 제어하도록 해도 될까요?', acceptedAnswer: { '@type': 'Answer', text: '결과가 더 큰 기기로 LLM 제어를 확장하기 전에, 조명처럼 위험도가 낮은 기기부터 시작하세요.' } },
        { '@type': 'Question', name: '자동화가 올바른 엔티티를 확신 있게 식별할 수 없을 때 어떻게 해야 하나요?', acceptedAnswer: { '@type': 'Answer', text: '이름이 비슷한 엔티티를 추측하는 대신 안전하게 실패해야 합니다 — 명확히 확인을 요청하거나 아무 동작도 하지 않아야 합니다.' } },
      ],
    },
  },
}
