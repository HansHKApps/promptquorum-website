// Local Voice & Audio Tools Compared: text-to-speech, speech-to-text and real-time voice agents
// Slug: local-llm-voice-audio-compared
// Category comparison guide for the `voice-audio` group. The comparison table is NOT written here:
// it is generated from the tool records (src/lib/power-local-llm/apps/*.ts) by the section whose
// `component` is 'CategoryCompareTable', so this article can never contradict the tool data.
// Every per-tool statement below must also hold in that tool's own review (see docs/PAGE_UPDATER.md
// Step 4.5, category<->review rule). All 9 locales; keep the blocks structurally identical to `en`.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'

// Live counts from the directory — recomputed at build time so this article never drifts from
// the actual tool count as the directory grows. Only tools with their own PromptQuorum review are
// counted (matches the CategoryCompareTable's own "only reviewed tools" rule).
const TOTAL_APP_COUNT = localAiApps.length
const REVIEWED_VA_APPS = localAiApps.filter((a) => a.reviewSlug != null)
const VA_TEXT_TO_SPEECH = REVIEWED_VA_APPS.filter((a) => a.categories.includes('text-to-speech')).length
const VA_SPEECH_TO_TEXT = REVIEWED_VA_APPS.filter((a) => a.categories.includes('speech-to-text')).length
const VA_REALTIME_VOICE_AGENTS = REVIEWED_VA_APPS.filter((a) => a.categories.includes('realtime-voice-agents')).length
const VA_TOTAL = new Set(
  REVIEWED_VA_APPS.filter(
    (a) => a.categories.includes('text-to-speech') || a.categories.includes('speech-to-text') || a.categories.includes('realtime-voice-agents'),
  ).map((a) => a.slug),
).size

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: 'Local Voice & Speech Tools Compared (2026): Text-to-Speech, Speech-to-Text and Voice Agents',
    seoTitle: 'Local Voice & Speech Tools Compared 2026',
    intro:
      `Local voice tools fall into three different jobs — turning text into speech, turning speech into text, and running a spoken conversation with an AI — and no single feature list compares them fairly. This guide compares ${VA_TOTAL} free and freemium tools that run on your own hardware, one job at a time, using a comparison table generated from the same data as each tool's own PromptQuorum review, so the table and the reviews cannot disagree.`,
    metaDescription:
      `Compare ${VA_TOTAL} local voice tools side by side: text-to-speech, speech-to-text and real-time voice agents. Licenses, platforms, CPU use, API servers, voice cloning and more, from official project documentation.`,
    twitterDescription:
      'Local voice tools compared by job: text-to-speech, speech-to-text and voice agents — licenses, platforms, CPU use, API servers, voice cloning, from official docs.',
    audience:
      'Developers, makers and privacy-conscious users choosing a local (offline-capable) text-to-speech, transcription or voice-assistant tool and who want the differences laid out per job, not one blended list.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice tools compared',
    targetKeywords: [
      'local text to speech comparison',
      'local speech to text comparison',
      'best local voice tools',
      'offline voice assistant tools',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**The ${VA_TOTAL} local voice tools in the PromptQuorum directory split into three jobs that should be compared separately: text-to-speech (${VA_TEXT_TO_SPEECH} tools), speech-to-text (${VA_SPEECH_TO_TEXT}) and real-time voice agents (${VA_REALTIME_VOICE_AGENTS}).** Within text-to-speech, voice cloning is stated in the official documentation of Coqui TTS, XTTS-v2, Izwi and Willow Inference Server; for speech-to-text, whisper.cpp and Willow Inference Server document real-time transcription; and Dograh, Jarvis, Parlor and Voxa are the voice agents. Use the comparison table below, and read each tool's own review before you install it.`,
    quickAnswerTop: {
      en: {
        question: 'Which local voice tool should I use?',
        answer:
          'It depends on the job, so compare within one job at a time. Pick by the constraint that matters most — license, platform, CPU-only use, a local API server, voice cloning, real-time transcription — and use the table below, which is generated from each tool\'s official documentation.',
        bullets: [
          'Text-to-speech: 8 tools compared on languages, voice cloning, streaming, CPU use and API server.',
          'Speech-to-text: 7 tools compared on real-time use, speaker labels, CPU use and API server.',
          'Voice agents: 4 tools compared on fully-local operation, interruption, bring-your-own LLM and telephony.',
          'A dash (—) means the project\'s documentation does not state it, not that the feature is missing.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How We Compared', anchor: 'how-we-compared' },
      { label: 'Comparison Table', anchor: 'comparison-table' },
      { label: 'Text-to-Speech: What Differs', anchor: 'tts-differences' },
      { label: 'Speech-to-Text: What Differs', anchor: 'stt-differences' },
      { label: 'Voice Agents: What Differs', anchor: 'agent-differences' },
      { label: 'What This Comparison Cannot Tell You', anchor: 'limitations' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Local voice tools are three different jobs — text-to-speech, speech-to-text and real-time voice agents — so the ${VA_TOTAL} tools in the PromptQuorum directory are compared within each job, using a table generated from the same tool data as each tool's own review.`,
          },
          {
            type: 'plain-terms',
            text: 'Some tools read text aloud, some write down what you say, and some hold a spoken conversation with an AI. Comparing a reader with a transcriber on "voice cloning" makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          `${VA_TOTAL} tools, three jobs: text-to-speech (${VA_TEXT_TO_SPEECH}), speech-to-text (${VA_SPEECH_TO_TEXT}), real-time voice agents (${VA_REALTIME_VOICE_AGENTS}). Izwi and Willow Inference Server do both text-to-speech and speech-to-text, so they appear in both tables.`,
          'The table is generated from each tool\'s record and checked against its official README or site; a dash means "not stated in the documentation", never "no".',
          'Licenses differ in ways that matter: for example Piper and OpenAI Edge TTS are GPL-3.0, Coqui TTS is MPL-2.0, XTTS-v2 uses the Coqui Public Model License, and Bark, StyleTTS 2, whisper.cpp and faster-whisper are MIT.',
          'Every tool name in the table links to its own PromptQuorum review, which is where installation steps and limits are covered.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'How We Compared',
        content: [
          'Each tool\'s facts — price, license, platforms, hardware needs and category-specific attributes — are stored once, in that tool\'s directory record. The comparison table below is generated from those records, and the tool\'s own review draws on the same record, so the two cannot state different values.',
          'Category-specific attributes (for example voice cloning or real-time transcription) were taken from each project\'s official README or website and checked against the exact wording there. Where the documentation is silent, the table shows a dash rather than guessing; where a claim is qualified (experimental, paid tier only, or dependent on a GPU), the attribute is left out of the table and covered in the tool\'s review instead.',
          'The comparison lists tools that run on your own hardware. It does not rank them: which one is right depends on your constraint, and the sections below point out where the real differences are.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content:
          'Choose a job below, then read across a row. Click a tool name to open its full PromptQuorum review.',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: 'Text-to-Speech: What Differs',
        items: [
          '**License.** Bark and StyleTTS 2 are MIT-licensed. Coqui TTS is MPL-2.0. XTTS-v2 uses the Coqui Public Model License (CPML), a custom license with its own terms rather than a standard open-source one — read it before any commercial use. Piper and OpenAI Edge TTS are GPL-3.0, which places conditions on distributing modified versions. Check the license before building a product on any of them — see [Piper TTS](/power-local-llm/piper-tts-review) and [XTTS v2](/power-local-llm/xtts-v2-review).',
          '**Voice cloning.** Coqui TTS ([review](/power-local-llm/coqui-tts-review)), XTTS-v2 ([review](/power-local-llm/xtts-v2-review)), Izwi ([review](/power-local-llm/izwi-review)) and Willow Inference Server ([review](/power-local-llm/willow-inference-server-review)) document voice cloning or custom voices. [Bark](/power-local-llm/bark-tts-review) states that it does not support custom voice cloning.',
          '**Local API server.** Coqui TTS, Izwi, OpenAI Edge TTS, Piper and Willow Inference Server document a server component, so other apps can call them over HTTP; [OpenAI Edge TTS](/power-local-llm/openai-edge-tts-review) is built around that.',
          '**Languages.** Bark documents 13 languages and XTTS-v2 documents 17. The other tools do not state a comparable count, so the table shows a dash rather than a number.',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: 'Speech-to-Text: What Differs',
        items: [
          '**Real-time transcription.** [whisper.cpp](/power-local-llm/whisper-cpp-review) documents a real-time streaming example, and Izwi and Willow Inference Server document real-time use. [faster-whisper](/power-local-llm/faster-whisper-review) is a transcription library; its own README does not document a real-time mode.',
          '**Speaker labels.** Izwi and FunClip document speaker labelling. [Meetily](/power-local-llm/meetily-review) offers speaker diarization only in its paid Pro tier. whisper.cpp\'s speaker-turn marking is experimental and is covered in its review rather than in the table.',
          '**Price and platform.** [MacWhisper](/power-local-llm/macwhisper-review) is a proprietary macOS app with a free tier and a paid upgrade; most other tools here are free and open source. Meetily\'s Community Edition is free and MIT-licensed, with a paid Pro tier.',
          '**Local API server.** whisper.cpp ships a server, and Izwi and Willow Inference Server document HTTP APIs.',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: 'Voice Agents: What Differs',
        items: [
          '**Fully local versus optional cloud.** [Jarvis](/power-local-llm/jarvis-mac-review) documents a local speech-in, LLM, speech-out stack; [Parlor](/power-local-llm/parlor-review) documents a local pipeline with an optional cloud research feature. [Voxa](/power-local-llm/voxa-review) can use a local voice provider or cloud providers, so it is fully local only if you choose the local one.',
          '**Interruption (barge-in).** Jarvis, Parlor and Voxa document that you can interrupt the agent while it speaks.',
          '**Bring your own LLM and phone calls.** [Dograh](/power-local-llm/dograh-review) documents a choice of LLM and telephony integrations; [Voxa](/power-local-llm/voxa-review) documents connecting your own model through a local daemon.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What This Comparison Cannot Tell You',
        items: [
          'It compares documented capabilities, not quality. It says nothing about how natural a voice sounds or how accurate a transcript is — that needs your own audio and your own hardware.',
          'It does not include speed benchmarks: PromptQuorum has not measured them for these tools.',
          'Dashes are gaps in the projects\' documentation, not negative findings. Some tools may support a feature that their README does not mention.',
          'Tools change quickly. Each tool\'s review states the version it was checked against, and this guide is refreshed when a review is.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why are text-to-speech, speech-to-text and voice agents compared separately?',
            a: 'They do different jobs, so most attributes only make sense within one job — voice cloning applies to text-to-speech, speaker labels to transcription, interruption to voice agents. Comparing them in one table would leave most cells empty or meaningless.',
          },
          {
            q: 'What does a dash in the comparison table mean?',
            a: 'It means the project\'s own documentation does not state that attribute. It does not mean the feature is missing; check the tool\'s review or its repository.',
          },
          {
            q: 'Are these tools really local?',
            a: 'They are designed to run on your own hardware, but some offer optional cloud features — for example Parlor\'s optional cloud research, or Voxa\'s cloud voice providers — and some need internet on first run to download models. Each tool\'s review covers this.',
          },
          {
            q: 'Do any of these tools have an affiliate link?',
            a: 'No. PromptQuorum has no affiliate relationship with any tool in this comparison at the time of writing, and no link here earns a commission.',
          },
          {
            q: 'How often is this comparison updated?',
            a: 'It is refreshed twice a year and whenever one of the listed tools\' reviews is updated, because the table is generated from the same data as those reviews.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Each tool\'s official README or website, listed in that tool\'s PromptQuorum review (linked from the comparison table).',
          '[PromptQuorum local AI app directory](/directory) — the record each row of the table is generated from.',
          '[AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained) — what the license families named above mean.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          `[Local Software Directory](/directory) — browse all ${TOTAL_APP_COUNT} local AI apps and filter by category.`,
          '[AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained) — how to read MIT, GPL, MPL and custom licenses.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Voice & Speech Tools Compared (2026): Text-to-Speech, Speech-to-Text and Voice Agents',
      description:
        `Compare ${VA_TOTAL} local voice tools side by side: text-to-speech, speech-to-text and real-time voice agents, from official project documentation.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'en',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers and users choosing local voice tools' },
      about: [
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Speech-to-text' },
        { '@type': 'Thing', name: 'Voice agents' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Voice & Speech Tools Compared (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: 'Lokale Sprach- und Audio-Werkzeuge im Vergleich (2026): Text-zu-Sprache, Sprache-zu-Text und Sprachagenten',
    seoTitle: 'Lokale Sprach-Werkzeuge im Vergleich 2026',
    intro:
      `Lokale Sprach-Werkzeuge erledigen drei verschiedene Aufgaben — Text in Sprache umwandeln, Sprache in Text umwandeln und ein gesprochenes Gespräch mit einer KI führen —, und keine einzelne Funktionsliste vergleicht sie fair. Dieser Leitfaden vergleicht ${VA_TOTAL} kostenlose und Freemium-Werkzeuge, die auf Ihrer eigenen Hardware laufen, Aufgabe für Aufgabe. Die Vergleichstabelle wird aus denselben Daten erzeugt wie der jeweilige PromptQuorum-Test des Werkzeugs, sodass sich Tabelle und Tests nicht widersprechen können.`,
    metaDescription:
      `Vergleich von ${VA_TOTAL} lokalen Sprach-Werkzeugen: Text-zu-Sprache, Sprache-zu-Text und Echtzeit-Sprachagenten. Lizenzen, Plattformen, CPU-Nutzung, API-Server, Stimmklonen und mehr.`,
    twitterDescription:
      'Lokale Sprach-Werkzeuge nach Aufgabe verglichen: Text-zu-Sprache, Sprache-zu-Text und Sprachagenten — Lizenzen, Plattformen, CPU-Nutzung, API-Server, Stimmklonen, aus offizieller Dokumentation.',
    audience:
      'Entwickler, Maker und datenschutzbewusste Nutzer, die ein lokales (offlinefähiges) Werkzeug für Text-zu-Sprache, Transkription oder Sprachassistenten auswählen und die Unterschiede pro Aufgabe sehen möchten, nicht in einer vermischten Liste.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale Sprach-Werkzeuge im Vergleich',
    targetKeywords: [
      'lokale Text-zu-Sprache Vergleich',
      'lokale Sprache-zu-Text Vergleich',
      'beste lokale Sprach-Werkzeuge',
      'Offline-Sprachassistent Werkzeuge',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**Die ${VA_TOTAL} lokalen Sprach-Werkzeuge im PromptQuorum-Verzeichnis teilen sich in drei Aufgaben, die getrennt verglichen werden sollten: Text-zu-Sprache (${VA_TEXT_TO_SPEECH} Werkzeuge), Sprache-zu-Text (${VA_SPEECH_TO_TEXT}) und Echtzeit-Sprachagenten (${VA_REALTIME_VOICE_AGENTS}).** Bei Text-zu-Sprache wird Stimmklonen in der offiziellen Dokumentation von Coqui TTS, XTTS-v2, Izwi und Willow Inference Server genannt; bei Sprache-zu-Text dokumentieren whisper.cpp und Willow Inference Server Echtzeit-Transkription; Dograh, Jarvis, Parlor und Voxa sind die Sprachagenten. Nutzen Sie die Vergleichstabelle unten und lesen Sie den Test des jeweiligen Werkzeugs, bevor Sie es installieren.`,
    quickAnswerTop: {
      en: {
        question: 'Welches lokale Sprach-Werkzeug sollte ich verwenden?',
        answer:
          'Das hängt von der Aufgabe ab, vergleichen Sie also immer innerhalb einer Aufgabe. Wählen Sie nach der Anforderung, die Ihnen am wichtigsten ist — Lizenz, Plattform, reine CPU-Nutzung, lokaler API-Server, Stimmklonen, Echtzeit-Transkription — und nutzen Sie die Tabelle unten, die aus der offiziellen Dokumentation des jeweiligen Werkzeugs erzeugt wird.',
        bullets: [
          'Text-zu-Sprache: 8 Werkzeuge im Vergleich nach Sprachen, Stimmklonen, Streaming, CPU-Nutzung und API-Server.',
          'Sprache-zu-Text: 7 Werkzeuge im Vergleich nach Echtzeit-Nutzung, Sprecherkennzeichnung, CPU-Nutzung und API-Server.',
          'Sprachagenten: 4 Werkzeuge im Vergleich nach vollständig lokalem Betrieb, Unterbrechung, eigenem LLM und Telefonie.',
          'Ein Strich (—) bedeutet, dass die Dokumentation des Projekts es nicht angibt, nicht dass die Funktion fehlt.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'So haben wir verglichen', anchor: 'how-we-compared' },
      { label: 'Vergleichstabelle', anchor: 'comparison-table' },
      { label: 'Text-zu-Sprache: Was sich unterscheidet', anchor: 'tts-differences' },
      { label: 'Sprache-zu-Text: Was sich unterscheidet', anchor: 'stt-differences' },
      { label: 'Sprachagenten: Was sich unterscheidet', anchor: 'agent-differences' },
      { label: 'Was dieser Vergleich nicht aussagen kann', anchor: 'limitations' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Lokale Sprach-Werkzeuge sind drei verschiedene Aufgaben — Text-zu-Sprache, Sprache-zu-Text und Echtzeit-Sprachagenten —, daher werden die ${VA_TOTAL} Werkzeuge im PromptQuorum-Verzeichnis innerhalb jeder Aufgabe verglichen, mit einer Tabelle, die aus denselben Werkzeugdaten wie der jeweilige Test erzeugt wird.`,
          },
          {
            type: 'plain-terms',
            text: 'Manche Werkzeuge lesen Text vor, manche schreiben mit, was Sie sagen, und manche führen ein gesprochenes Gespräch mit einer KI. Einen Vorleser und ein Transkriptionswerkzeug beim „Stimmklonen“ zu vergleichen ergibt keinen Sinn, deshalb vergleicht dieser Leitfaden Gleiches mit Gleichem.',
          },
        ],
        items: [
          `${VA_TOTAL} Werkzeuge, drei Aufgaben: Text-zu-Sprache (${VA_TEXT_TO_SPEECH}), Sprache-zu-Text (${VA_SPEECH_TO_TEXT}), Echtzeit-Sprachagenten (${VA_REALTIME_VOICE_AGENTS}). Izwi und Willow Inference Server leisten sowohl Text-zu-Sprache als auch Sprache-zu-Text und erscheinen daher in beiden Tabellen.`,
          'Die Tabelle wird aus dem Datensatz jedes Werkzeugs erzeugt und mit dessen offizieller README oder Website abgeglichen; ein Strich bedeutet „in der Dokumentation nicht angegeben“, niemals „nein“.',
          'Lizenzen unterscheiden sich auf relevante Weise: Piper und OpenAI Edge TTS stehen zum Beispiel unter GPL-3.0, Coqui TTS unter MPL-2.0, XTTS-v2 nutzt die Coqui Public Model License, und Bark, StyleTTS 2, whisper.cpp und faster-whisper stehen unter MIT.',
          'Jeder Werkzeugname in der Tabelle verlinkt auf den eigenen PromptQuorum-Test, in dem Installationsschritte und Grenzen behandelt werden.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'So haben wir verglichen',
        content: [
          'Die Fakten jedes Werkzeugs — Preis, Lizenz, Plattformen, Hardware-Anforderungen und aufgabenspezifische Merkmale — werden einmalig im Verzeichniseintrag des Werkzeugs gespeichert. Die Vergleichstabelle unten wird aus diesen Einträgen erzeugt, und der Test des Werkzeugs greift auf denselben Eintrag zurück, sodass beide keine unterschiedlichen Werte nennen können.',
          'Aufgabenspezifische Merkmale (zum Beispiel Stimmklonen oder Echtzeit-Transkription) wurden der offiziellen README oder Website des jeweiligen Projekts entnommen und am genauen Wortlaut dort geprüft. Wo die Dokumentation schweigt, zeigt die Tabelle einen Strich statt zu raten; wo eine Angabe eingeschränkt ist (experimentell, nur im bezahlten Tarif oder abhängig von einer GPU), wird das Merkmal aus der Tabelle weggelassen und stattdessen im Test des Werkzeugs behandelt.',
          'Der Vergleich listet Werkzeuge auf, die auf Ihrer eigenen Hardware laufen. Er erstellt keine Rangliste: Welches das richtige ist, hängt von Ihrer Anforderung ab, und die Abschnitte unten zeigen, wo die tatsächlichen Unterschiede liegen.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle',
        content:
          'Wählen Sie unten eine Aufgabe und lesen Sie dann quer durch eine Zeile. Klicken Sie auf einen Werkzeugnamen, um den vollständigen PromptQuorum-Test zu öffnen.',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: 'Text-zu-Sprache: Was sich unterscheidet',
        items: [
          '**Lizenz.** Bark und StyleTTS 2 stehen unter MIT. Coqui TTS steht unter MPL-2.0. XTTS-v2 nutzt die Coqui Public Model License (CPML), eine eigene Lizenz mit eigenen Bedingungen statt einer Standard-Open-Source-Lizenz — lesen Sie sie vor jeder kommerziellen Nutzung. Piper und OpenAI Edge TTS stehen unter GPL-3.0, die Bedingungen für die Weitergabe veränderter Versionen stellt. Prüfen Sie die Lizenz, bevor Sie ein Produkt auf einem davon aufbauen — siehe [Piper TTS](/de/power-local-llm/piper-tts-review) und [XTTS v2](/de/power-local-llm/xtts-v2-review).',
          '**Stimmklonen.** Coqui TTS ([Test](/de/power-local-llm/coqui-tts-review)), XTTS-v2 ([Test](/de/power-local-llm/xtts-v2-review)), Izwi ([Test](/de/power-local-llm/izwi-review)) und Willow Inference Server ([Test](/de/power-local-llm/willow-inference-server-review)) dokumentieren Stimmklonen oder eigene Stimmen. [Bark](/de/power-local-llm/bark-tts-review) gibt an, dass es kein eigenes Stimmklonen unterstützt.',
          '**Lokaler API-Server.** Coqui TTS, Izwi, OpenAI Edge TTS, Piper und Willow Inference Server dokumentieren eine Serverkomponente, sodass andere Apps sie über HTTP aufrufen können; [OpenAI Edge TTS](/de/power-local-llm/openai-edge-tts-review) ist darauf ausgelegt.',
          '**Sprachen.** Bark dokumentiert 13 Sprachen und XTTS-v2 dokumentiert 17. Die anderen Werkzeuge geben keine vergleichbare Anzahl an, daher zeigt die Tabelle einen Strich statt einer Zahl.',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: 'Sprache-zu-Text: Was sich unterscheidet',
        items: [
          '**Echtzeit-Transkription.** [whisper.cpp](/de/power-local-llm/whisper-cpp-review) dokumentiert ein Echtzeit-Streaming-Beispiel, und Izwi und Willow Inference Server dokumentieren Echtzeit-Nutzung. [faster-whisper](/de/power-local-llm/faster-whisper-review) ist eine Transkriptionsbibliothek; ihre eigene README dokumentiert keinen Echtzeitmodus.',
          '**Sprecherkennzeichnung.** Izwi und FunClip dokumentieren Sprecherkennzeichnung. [Meetily](/de/power-local-llm/meetily-review) bietet Sprechertrennung (Diarisierung) nur im bezahlten Pro-Tarif. Die Sprecherwechsel-Markierung von whisper.cpp ist experimentell und wird im zugehörigen Test statt in der Tabelle behandelt.',
          '**Preis und Plattform.** [MacWhisper](/de/power-local-llm/macwhisper-review) ist eine proprietäre macOS-App mit kostenlosem Tarif und kostenpflichtigem Upgrade; die meisten anderen Werkzeuge hier sind kostenlos und Open Source. Meetilys Community Edition ist kostenlos und steht unter MIT, mit einem bezahlten Pro-Tarif.',
          '**Lokaler API-Server.** whisper.cpp liefert einen Server mit, und Izwi und Willow Inference Server dokumentieren HTTP-APIs.',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: 'Sprachagenten: Was sich unterscheidet',
        items: [
          '**Vollständig lokal oder optionale Cloud.** [Jarvis](/de/power-local-llm/jarvis-mac-review) dokumentiert einen lokalen Stack aus Spracheingabe, LLM und Sprachausgabe; [Parlor](/de/power-local-llm/parlor-review) dokumentiert eine lokale Pipeline mit optionaler Cloud-Recherchefunktion. [Voxa](/de/power-local-llm/voxa-review) kann einen lokalen Sprachanbieter oder Cloud-Anbieter nutzen und ist daher nur dann vollständig lokal, wenn Sie den lokalen wählen.',
          '**Unterbrechung (Barge-in).** Jarvis, Parlor und Voxa dokumentieren, dass Sie den Agenten unterbrechen können, während er spricht.',
          '**Eigenes LLM und Telefonanrufe.** [Dograh](/de/power-local-llm/dograh-review) dokumentiert eine Auswahl an LLMs und Telefonie-Integrationen; [Voxa](/de/power-local-llm/voxa-review) dokumentiert die Anbindung eines eigenen Modells über einen lokalen Daemon.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Was dieser Vergleich nicht aussagen kann',
        items: [
          'Er vergleicht dokumentierte Fähigkeiten, nicht die Qualität. Er sagt nichts darüber, wie natürlich eine Stimme klingt oder wie genau ein Transkript ist — dafür brauchen Sie Ihr eigenes Audiomaterial und Ihre eigene Hardware.',
          'Er enthält keine Geschwindigkeits-Benchmarks: PromptQuorum hat diese für die Werkzeuge nicht gemessen.',
          'Striche sind Lücken in der Dokumentation der Projekte, keine negativen Befunde. Manche Werkzeuge unterstützen möglicherweise eine Funktion, die ihre README nicht erwähnt.',
          'Werkzeuge ändern sich schnell. Der Test jedes Werkzeugs nennt die Version, gegen die geprüft wurde, und dieser Leitfaden wird aktualisiert, wenn ein Test aktualisiert wird.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Warum werden Text-zu-Sprache, Sprache-zu-Text und Sprachagenten getrennt verglichen?',
            a: 'Sie erfüllen verschiedene Aufgaben, daher ergeben die meisten Merkmale nur innerhalb einer Aufgabe Sinn — Stimmklonen betrifft Text-zu-Sprache, Sprecherkennzeichnung die Transkription, Unterbrechung die Sprachagenten. Ein gemeinsamer Vergleich in einer Tabelle ließe die meisten Zellen leer oder bedeutungslos.',
          },
          {
            q: 'Was bedeutet ein Strich in der Vergleichstabelle?',
            a: 'Er bedeutet, dass die eigene Dokumentation des Projekts dieses Merkmal nicht angibt. Er bedeutet nicht, dass die Funktion fehlt; prüfen Sie den Test des Werkzeugs oder dessen Repository.',
          },
          {
            q: 'Sind diese Werkzeuge wirklich lokal?',
            a: 'Sie sind dafür ausgelegt, auf Ihrer eigenen Hardware zu laufen, aber einige bieten optionale Cloud-Funktionen — etwa Parlors optionale Cloud-Recherche oder Voxas Cloud-Sprachanbieter —, und einige benötigen beim ersten Start Internet, um Modelle herunterzuladen. Der Test jedes Werkzeugs behandelt das.',
          },
          {
            q: 'Hat eines dieser Werkzeuge einen Affiliate-Link?',
            a: 'Nein. PromptQuorum hat zum Zeitpunkt der Erstellung keine Affiliate-Beziehung zu einem Werkzeug in diesem Vergleich, und kein Link hier bringt eine Provision.',
          },
          {
            q: 'Wie oft wird dieser Vergleich aktualisiert?',
            a: 'Er wird zweimal im Jahr aktualisiert sowie immer dann, wenn der Test eines der aufgeführten Werkzeuge aktualisiert wird, weil die Tabelle aus denselben Daten wie diese Tests erzeugt wird.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Die offizielle README oder Website jedes Werkzeugs, aufgeführt im PromptQuorum-Test des Werkzeugs (in der Vergleichstabelle verlinkt).',
          '[PromptQuorum-Verzeichnis lokaler KI-Apps](/de/directory) — der Datensatz, aus dem jede Zeile der Tabelle erzeugt wird.',
          '[KI-Werkzeug-Lizenzen erklärt](/de/power-local-llm/ai-tool-licenses-explained) — was die oben genannten Lizenzfamilien bedeuten.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          `[Verzeichnis lokaler Software](/de/directory) — alle ${TOTAL_APP_COUNT} lokalen KI-Apps durchsuchen und nach Kategorie filtern.`,
          '[KI-Werkzeug-Lizenzen erklärt](/de/power-local-llm/ai-tool-licenses-explained) — wie man MIT-, GPL-, MPL- und eigene Lizenzen liest.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale Sprach- und Audio-Werkzeuge im Vergleich (2026): Text-zu-Sprache, Sprache-zu-Text und Sprachagenten',
      description:
        `Vergleich von ${VA_TOTAL} lokalen Sprach-Werkzeugen: Text-zu-Sprache, Sprache-zu-Text und Echtzeit-Sprachagenten, aus offizieller Projektdokumentation.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'de',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler und Nutzer, die lokale Sprach-Werkzeuge auswählen' },
      about: [
        { '@type': 'Thing', name: 'Text-zu-Sprache' },
        { '@type': 'Thing', name: 'Sprache-zu-Text' },
        { '@type': 'Thing', name: 'Sprachagenten' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Lokale Sprach- und Audio-Werkzeuge im Vergleich (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: 'Outils vocaux locaux comparés (2026) : synthèse vocale, transcription et agents vocaux',
    seoTitle: 'Outils vocaux locaux comparés 2026',
    intro:
      `Les outils vocaux locaux relèvent de trois tâches différentes — transformer du texte en parole, transformer la parole en texte, et mener une conversation orale avec une IA — et aucune liste de fonctionnalités unique ne permet de les comparer équitablement. Ce guide compare ${VA_TOTAL} outils gratuits et freemium qui fonctionnent sur votre propre matériel, une tâche à la fois, à l'aide d'un tableau comparatif généré à partir des mêmes données que l'avis PromptQuorum de chaque outil : le tableau et les avis ne peuvent donc pas se contredire.`,
    metaDescription:
      `Comparez ${VA_TOTAL} outils vocaux locaux : synthèse vocale, transcription et agents vocaux en temps réel. Licences, plateformes, usage CPU, serveurs API, clonage de voix, d'après la documentation officielle.`,
    twitterDescription:
      'Outils vocaux locaux comparés par tâche : synthèse vocale, transcription et agents vocaux — licences, plateformes, CPU, serveurs API, clonage de voix, d\'après les docs officielles.',
    audience:
      'Développeurs, makers et utilisateurs soucieux de leur vie privée qui choisissent un outil local (utilisable hors ligne) de synthèse vocale, de transcription ou d\'assistant vocal, et qui veulent voir les différences tâche par tâche plutôt qu\'une liste unique et mélangée.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'outils vocaux locaux comparés',
    targetKeywords: [
      'comparatif synthèse vocale locale',
      'comparatif transcription vocale locale',
      'meilleurs outils vocaux locaux',
      'assistant vocal hors ligne',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**Les ${VA_TOTAL} outils vocaux locaux de l'annuaire PromptQuorum se répartissent en trois tâches à comparer séparément : la synthèse vocale (${VA_TEXT_TO_SPEECH} outils), la transcription (${VA_SPEECH_TO_TEXT}) et les agents vocaux en temps réel (${VA_REALTIME_VOICE_AGENTS}).** En synthèse vocale, le clonage de voix est indiqué dans la documentation officielle de Coqui TTS, XTTS-v2, Izwi et Willow Inference Server ; en transcription, whisper.cpp et Willow Inference Server documentent la transcription en temps réel ; et Dograh, Jarvis, Parlor et Voxa sont les agents vocaux. Utilisez le tableau comparatif ci-dessous, et lisez l'avis de chaque outil avant de l'installer.`,
    quickAnswerTop: {
      en: {
        question: 'Quel outil vocal local dois-je utiliser ?',
        answer:
          'Cela dépend de la tâche : comparez donc une tâche à la fois. Choisissez selon la contrainte qui compte le plus — licence, plateforme, usage CPU seul, serveur API local, clonage de voix, transcription en temps réel — et appuyez-vous sur le tableau ci-dessous, généré à partir de la documentation officielle de chaque outil.',
        bullets: [
          'Synthèse vocale : 8 outils comparés sur les langues, le clonage de voix, le streaming, l\'usage CPU et le serveur API.',
          'Transcription : 7 outils comparés sur l\'usage en temps réel, les étiquettes de locuteurs, l\'usage CPU et le serveur API.',
          'Agents vocaux : 4 outils comparés sur le fonctionnement entièrement local, l\'interruption, l\'usage de votre propre LLM et la téléphonie.',
          'Un tiret (—) signifie que la documentation du projet ne le précise pas, et non que la fonctionnalité est absente.',
        ],
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Notre méthode de comparaison', anchor: 'how-we-compared' },
      { label: 'Tableau comparatif', anchor: 'comparison-table' },
      { label: 'Synthèse vocale : ce qui diffère', anchor: 'tts-differences' },
      { label: 'Transcription : ce qui diffère', anchor: 'stt-differences' },
      { label: 'Agents vocaux : ce qui diffère', anchor: 'agent-differences' },
      { label: 'Ce que cette comparaison ne peut pas vous dire', anchor: 'limitations' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Les outils vocaux locaux relèvent de trois tâches différentes — synthèse vocale, transcription et agents vocaux en temps réel — si bien que les ${VA_TOTAL} outils de l'annuaire PromptQuorum sont comparés tâche par tâche, à l'aide d'un tableau généré à partir des mêmes données que l'avis de chaque outil.`,
          },
          {
            type: 'plain-terms',
            text: 'Certains outils lisent un texte à voix haute, d\'autres écrivent ce que vous dites, et d\'autres encore tiennent une conversation orale avec une IA. Comparer un lecteur et un transcripteur sur le « clonage de voix » n\'a pas de sens : ce guide compare donc des outils comparables.',
          },
        ],
        items: [
          `${VA_TOTAL} outils, trois tâches : synthèse vocale (${VA_TEXT_TO_SPEECH}), transcription (${VA_SPEECH_TO_TEXT}), agents vocaux en temps réel (${VA_REALTIME_VOICE_AGENTS}). Izwi et Willow Inference Server font à la fois de la synthèse vocale et de la transcription, et apparaissent donc dans les deux tableaux.`,
          'Le tableau est généré à partir de la fiche de chaque outil et vérifié d\'après son README ou son site officiel ; un tiret signifie « non précisé dans la documentation », jamais « non ».',
          'Les licences diffèrent de façon significative : par exemple, Piper et OpenAI Edge TTS sont sous GPL-3.0, Coqui TTS sous MPL-2.0, XTTS-v2 utilise la Coqui Public Model License, et Bark, StyleTTS 2, whisper.cpp et faster-whisper sont sous MIT.',
          'Chaque nom d\'outil du tableau renvoie vers son propre avis PromptQuorum, où sont détaillés l\'installation et les limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Notre méthode de comparaison',
        content: [
          'Les informations de chaque outil — prix, licence, plateformes, besoins matériels et attributs propres à sa catégorie — sont enregistrées une seule fois, dans la fiche de l\'outil dans l\'annuaire. Le tableau comparatif ci-dessous est généré à partir de ces fiches, et l\'avis de l\'outil s\'appuie sur la même fiche : les deux ne peuvent donc pas indiquer des valeurs différentes.',
          'Les attributs propres à la catégorie (par exemple le clonage de voix ou la transcription en temps réel) ont été relevés dans le README ou sur le site officiel de chaque projet et vérifiés d\'après la formulation exacte qui s\'y trouve. Lorsque la documentation est muette, le tableau affiche un tiret plutôt que de deviner ; lorsqu\'une affirmation est nuancée (expérimentale, réservée à l\'offre payante ou dépendante d\'un GPU), l\'attribut est laissé de côté dans le tableau et traité dans l\'avis de l\'outil.',
          'La comparaison recense des outils qui fonctionnent sur votre propre matériel. Elle ne les classe pas : le bon choix dépend de votre contrainte, et les sections ci-dessous indiquent où se situent les vraies différences.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif',
        content:
          'Choisissez une tâche ci-dessous, puis lisez la ligne d\'un bout à l\'autre. Cliquez sur le nom d\'un outil pour ouvrir son avis PromptQuorum complet.',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: 'Synthèse vocale : ce qui diffère',
        items: [
          '**Licence.** Bark et StyleTTS 2 sont sous licence MIT. Coqui TTS est sous MPL-2.0. XTTS-v2 utilise la Coqui Public Model License (CPML), une licence personnalisée avec ses propres conditions plutôt qu\'une licence open source standard — lisez-la avant tout usage commercial. Piper et OpenAI Edge TTS sont sous GPL-3.0, qui impose des conditions à la distribution de versions modifiées. Vérifiez la licence avant de construire un produit sur l\'un d\'eux — voir [Piper TTS](/fr/power-local-llm/piper-tts-review) et [XTTS v2](/fr/power-local-llm/xtts-v2-review).',
          '**Clonage de voix.** Coqui TTS ([avis](/fr/power-local-llm/coqui-tts-review)), XTTS-v2 ([avis](/fr/power-local-llm/xtts-v2-review)), Izwi ([avis](/fr/power-local-llm/izwi-review)) et Willow Inference Server ([avis](/fr/power-local-llm/willow-inference-server-review)) documentent le clonage de voix ou les voix personnalisées. [Bark](/fr/power-local-llm/bark-tts-review) indique qu\'il ne prend pas en charge le clonage de voix personnalisé.',
          '**Serveur API local.** Coqui TTS, Izwi, OpenAI Edge TTS, Piper et Willow Inference Server documentent un composant serveur, ce qui permet à d\'autres applications de les appeler via HTTP ; [OpenAI Edge TTS](/fr/power-local-llm/openai-edge-tts-review) est conçu autour de cette approche.',
          '**Langues.** Bark documente 13 langues et XTTS-v2 en documente 17. Les autres outils n\'indiquent pas de nombre comparable : le tableau affiche donc un tiret plutôt qu\'un chiffre.',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: 'Transcription : ce qui diffère',
        items: [
          '**Transcription en temps réel.** [whisper.cpp](/fr/power-local-llm/whisper-cpp-review) documente un exemple de streaming en temps réel, et Izwi et Willow Inference Server documentent un usage en temps réel. [faster-whisper](/fr/power-local-llm/faster-whisper-review) est une bibliothèque de transcription ; son README ne documente pas de mode temps réel.',
          '**Étiquettes de locuteurs.** Izwi et FunClip documentent l\'étiquetage des locuteurs. [Meetily](/fr/power-local-llm/meetily-review) ne propose la diarisation des locuteurs que dans son offre Pro payante. Le marquage des tours de parole de whisper.cpp est expérimental et est traité dans son avis plutôt que dans le tableau.',
          '**Prix et plateforme.** [MacWhisper](/fr/power-local-llm/macwhisper-review) est une application macOS propriétaire avec une offre gratuite et une mise à niveau payante ; la plupart des autres outils présentés ici sont gratuits et open source. L\'édition Community de Meetily est gratuite et sous licence MIT, avec une offre Pro payante.',
          '**Serveur API local.** whisper.cpp fournit un serveur, et Izwi et Willow Inference Server documentent des API HTTP.',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: 'Agents vocaux : ce qui diffère',
        items: [
          '**Entièrement local ou cloud optionnel.** [Jarvis](/fr/power-local-llm/jarvis-mac-review) documente une chaîne locale parole-vers-LLM-vers-parole ; [Parlor](/fr/power-local-llm/parlor-review) documente un pipeline local avec une fonction de recherche cloud optionnelle. [Voxa](/fr/power-local-llm/voxa-review) peut utiliser un fournisseur vocal local ou des fournisseurs cloud : il n\'est donc entièrement local que si vous choisissez le fournisseur local.',
          '**Interruption (barge-in).** Jarvis, Parlor et Voxa documentent la possibilité d\'interrompre l\'agent pendant qu\'il parle.',
          '**Votre propre LLM et appels téléphoniques.** [Dograh](/fr/power-local-llm/dograh-review) documente un choix de LLM et des intégrations de téléphonie ; [Voxa](/fr/power-local-llm/voxa-review) documente la connexion de votre propre modèle via un démon local.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce que cette comparaison ne peut pas vous dire',
        items: [
          'Elle compare des capacités documentées, pas la qualité. Elle ne dit rien du naturel d\'une voix ni de la précision d\'une transcription — cela demande vos propres fichiers audio et votre propre matériel.',
          'Elle ne comprend pas de benchmarks de vitesse : PromptQuorum ne les a pas mesurés pour ces outils.',
          'Les tirets sont des lacunes dans la documentation des projets, pas des constats négatifs. Certains outils peuvent prendre en charge une fonctionnalité que leur README ne mentionne pas.',
          'Les outils évoluent vite. L\'avis de chaque outil indique la version sur laquelle il a été vérifié, et ce guide est actualisé lorsqu\'un avis l\'est.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Pourquoi la synthèse vocale, la transcription et les agents vocaux sont-ils comparés séparément ?',
            a: 'Ils remplissent des tâches différentes, de sorte que la plupart des attributs n\'ont de sens que dans une seule tâche — le clonage de voix concerne la synthèse vocale, les étiquettes de locuteurs la transcription, l\'interruption les agents vocaux. Les réunir dans un seul tableau laisserait la plupart des cellules vides ou sans signification.',
          },
          {
            q: 'Que signifie un tiret dans le tableau comparatif ?',
            a: 'Cela signifie que la documentation du projet ne précise pas cet attribut. Cela ne veut pas dire que la fonctionnalité est absente ; consultez l\'avis de l\'outil ou son dépôt.',
          },
          {
            q: 'Ces outils sont-ils vraiment locaux ?',
            a: 'Ils sont conçus pour fonctionner sur votre propre matériel, mais certains proposent des fonctions cloud optionnelles — par exemple la recherche cloud optionnelle de Parlor, ou les fournisseurs vocaux cloud de Voxa — et certains ont besoin d\'internet au premier lancement pour télécharger des modèles. L\'avis de chaque outil le détaille.',
          },
          {
            q: 'L\'un de ces outils a-t-il un lien d\'affiliation ?',
            a: 'Non. PromptQuorum n\'a, au moment de la rédaction, aucune relation d\'affiliation avec aucun outil de cette comparaison, et aucun lien présent ici ne rapporte de commission.',
          },
          {
            q: 'À quelle fréquence cette comparaison est-elle mise à jour ?',
            a: 'Elle est actualisée deux fois par an, et chaque fois que l\'avis de l\'un des outils listés est mis à jour, puisque le tableau est généré à partir des mêmes données que ces avis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Le README ou le site officiel de chaque outil, indiqué dans l\'avis PromptQuorum de cet outil (lié depuis le tableau comparatif).',
          '[Annuaire PromptQuorum des applications d\'IA locale](/fr/directory) — la fiche à partir de laquelle chaque ligne du tableau est générée.',
          '[Licences des outils d\'IA expliquées](/fr/power-local-llm/ai-tool-licenses-explained) — ce que signifient les familles de licences citées ci-dessus.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          `[Annuaire des logiciels locaux](/fr/directory) — parcourez toutes les ${TOTAL_APP_COUNT} applications d'IA locale et filtrez par catégorie.`,
          '[Licences des outils d\'IA expliquées](/fr/power-local-llm/ai-tool-licenses-explained) — comment lire les licences MIT, GPL, MPL et personnalisées.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Outils vocaux locaux comparés (2026) : synthèse vocale, transcription et agents vocaux',
      description:
        `Comparez ${VA_TOTAL} outils vocaux locaux : synthèse vocale, transcription et agents vocaux en temps réel, d'après la documentation officielle des projets.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'fr',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs et utilisateurs choisissant des outils vocaux locaux' },
      about: [
        { '@type': 'Thing', name: 'Synthèse vocale' },
        { '@type': 'Thing', name: 'Transcription vocale' },
        { '@type': 'Thing', name: 'Agents vocaux' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Outils vocaux locaux comparés (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: 'Herramientas locales de voz y habla comparadas (2026): texto a voz, voz a texto y agentes de voz',
    seoTitle: 'Herramientas locales de voz comparadas 2026',
    intro:
      `Las herramientas de voz locales se dividen en tres tareas distintas —convertir texto en voz, convertir voz en texto y mantener una conversación hablada con una IA—, y ninguna lista única de funciones las compara con justicia. Esta guía compara ${VA_TOTAL} herramientas gratuitas y freemium que se ejecutan en tu propio hardware, una tarea cada vez, con una tabla comparativa generada a partir de los mismos datos que el análisis propio de cada herramienta en PromptQuorum, de modo que la tabla y los análisis no pueden contradecirse.`,
    metaDescription:
      `Compara ${VA_TOTAL} herramientas de voz locales: texto a voz, voz a texto y agentes de voz en tiempo real. Licencias, plataformas, uso de CPU, servidores API y clonación de voz, según la documentación oficial.`,
    twitterDescription:
      'Herramientas de voz locales comparadas por tarea: texto a voz, voz a texto y agentes de voz — licencias, plataformas, CPU, servidores API y clonación de voz, según la documentación oficial.',
    audience:
      'Desarrolladores, makers y usuarios preocupados por la privacidad que eligen una herramienta local (capaz de funcionar sin conexión) de texto a voz, transcripción o asistente de voz y quieren ver las diferencias por tarea, no en una lista mezclada.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'herramientas de voz locales comparadas',
    targetKeywords: [
      'comparativa texto a voz local',
      'comparativa voz a texto local',
      'mejores herramientas de voz locales',
      'asistente de voz sin conexión herramientas',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**Las ${VA_TOTAL} herramientas de voz locales del directorio de PromptQuorum se dividen en tres tareas que conviene comparar por separado: texto a voz (${VA_TEXT_TO_SPEECH} herramientas), voz a texto (${VA_SPEECH_TO_TEXT}) y agentes de voz en tiempo real (${VA_REALTIME_VOICE_AGENTS}).** En texto a voz, la clonación de voz figura en la documentación oficial de Coqui TTS, XTTS-v2, Izwi y Willow Inference Server; en voz a texto, whisper.cpp y Willow Inference Server documentan la transcripción en tiempo real; y Dograh, Jarvis, Parlor y Voxa son los agentes de voz. Usa la tabla comparativa de abajo y lee el análisis propio de cada herramienta antes de instalarla.`,
    quickAnswerTop: {
      en: {
        question: '¿Qué herramienta de voz local debería usar?',
        answer:
          'Depende de la tarea, así que compara dentro de una sola tarea cada vez. Elige según la restricción que más te importe —licencia, plataforma, uso solo con CPU, un servidor API local, clonación de voz, transcripción en tiempo real— y usa la tabla de abajo, generada a partir de la documentación oficial de cada herramienta.',
        bullets: [
          'Texto a voz: 8 herramientas comparadas en idiomas, clonación de voz, streaming, uso de CPU y servidor API.',
          'Voz a texto: 7 herramientas comparadas en uso en tiempo real, etiquetas de hablante, uso de CPU y servidor API.',
          'Agentes de voz: 4 herramientas comparadas en funcionamiento totalmente local, interrupción, uso de tu propio LLM y telefonía.',
          'Un guion (—) significa que la documentación del proyecto no lo indica, no que la función no exista.',
        ],
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Cómo comparamos', anchor: 'how-we-compared' },
      { label: 'Tabla comparativa', anchor: 'comparison-table' },
      { label: 'Texto a voz: en qué se diferencian', anchor: 'tts-differences' },
      { label: 'Voz a texto: en qué se diferencian', anchor: 'stt-differences' },
      { label: 'Agentes de voz: en qué se diferencian', anchor: 'agent-differences' },
      { label: 'Lo que esta comparación no puede decirte', anchor: 'limitations' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Las herramientas de voz locales son tres tareas distintas —texto a voz, voz a texto y agentes de voz en tiempo real—, por lo que las ${VA_TOTAL} herramientas del directorio de PromptQuorum se comparan dentro de cada tarea, con una tabla generada a partir de los mismos datos que el análisis propio de cada herramienta.`,
          },
          {
            type: 'plain-terms',
            text: 'Algunas herramientas leen un texto en voz alta, otras escriben lo que dices y otras mantienen una conversación hablada con una IA. Comparar un lector con un transcriptor en «clonación de voz» no tiene sentido, así que esta guía compara cosas del mismo tipo.',
          },
        ],
        items: [
          `${VA_TOTAL} herramientas, tres tareas: texto a voz (${VA_TEXT_TO_SPEECH}), voz a texto (${VA_SPEECH_TO_TEXT}), agentes de voz en tiempo real (${VA_REALTIME_VOICE_AGENTS}). Izwi y Willow Inference Server hacen tanto texto a voz como voz a texto, por lo que aparecen en ambas tablas.`,
          'La tabla se genera a partir del registro de cada herramienta y se contrasta con su README o sitio oficial; un guion significa «no indicado en la documentación», nunca «no».',
          'Las licencias difieren de formas que importan: por ejemplo, Piper y OpenAI Edge TTS son GPL-3.0, Coqui TTS es MPL-2.0, XTTS-v2 usa la Coqui Public Model License, y Bark, StyleTTS 2, whisper.cpp y faster-whisper son MIT.',
          'Cada nombre de herramienta de la tabla enlaza a su propio análisis de PromptQuorum, donde se explican los pasos de instalación y los límites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Cómo comparamos',
        content: [
          'Los datos de cada herramienta —precio, licencia, plataformas, requisitos de hardware y atributos específicos de su categoría— se guardan una sola vez, en el registro de esa herramienta en el directorio. La tabla comparativa de abajo se genera a partir de esos registros y el análisis de la herramienta se apoya en el mismo registro, de modo que ambos no pueden indicar valores distintos.',
          'Los atributos específicos de cada categoría (por ejemplo, la clonación de voz o la transcripción en tiempo real) se tomaron del README o del sitio web oficial de cada proyecto y se contrastaron con su redacción exacta. Cuando la documentación no dice nada, la tabla muestra un guion en lugar de suponer; cuando una afirmación tiene condiciones (experimental, solo en el nivel de pago o dependiente de una GPU), el atributo se deja fuera de la tabla y se trata en el análisis de la herramienta.',
          'La comparación enumera herramientas que se ejecutan en tu propio hardware. No las clasifica: cuál es la adecuada depende de tu restricción, y las secciones siguientes señalan dónde están las diferencias reales.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa',
        content:
          'Elige una tarea abajo y lee la fila de izquierda a derecha. Haz clic en el nombre de una herramienta para abrir su análisis completo en PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: 'Texto a voz: en qué se diferencian',
        items: [
          '**Licencia.** Bark y StyleTTS 2 tienen licencia MIT. Coqui TTS es MPL-2.0. XTTS-v2 usa la Coqui Public Model License (CPML), una licencia personalizada con sus propios términos, no una licencia de código abierto estándar: léela antes de cualquier uso comercial. Piper y OpenAI Edge TTS son GPL-3.0, que impone condiciones a la distribución de versiones modificadas. Revisa la licencia antes de construir un producto con cualquiera de ellas; consulta [Piper TTS](/es/power-local-llm/piper-tts-review) y [XTTS v2](/es/power-local-llm/xtts-v2-review).',
          '**Clonación de voz.** Coqui TTS ([análisis](/es/power-local-llm/coqui-tts-review)), XTTS-v2 ([análisis](/es/power-local-llm/xtts-v2-review)), Izwi ([análisis](/es/power-local-llm/izwi-review)) y Willow Inference Server ([análisis](/es/power-local-llm/willow-inference-server-review)) documentan la clonación de voz o las voces personalizadas. [Bark](/es/power-local-llm/bark-tts-review) indica que no admite la clonación de voz personalizada.',
          '**Servidor API local.** Coqui TTS, Izwi, OpenAI Edge TTS, Piper y Willow Inference Server documentan un componente de servidor, de modo que otras apps pueden llamarlos por HTTP; [OpenAI Edge TTS](/es/power-local-llm/openai-edge-tts-review) está construido en torno a eso.',
          '**Idiomas.** Bark documenta 13 idiomas y XTTS-v2 documenta 17. Las demás herramientas no indican una cifra comparable, por lo que la tabla muestra un guion en lugar de un número.',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: 'Voz a texto: en qué se diferencian',
        items: [
          '**Transcripción en tiempo real.** [whisper.cpp](/es/power-local-llm/whisper-cpp-review) documenta un ejemplo de streaming en tiempo real, e Izwi y Willow Inference Server documentan el uso en tiempo real. [faster-whisper](/es/power-local-llm/faster-whisper-review) es una biblioteca de transcripción; su propio README no documenta un modo en tiempo real.',
          '**Etiquetas de hablante.** Izwi y FunClip documentan el etiquetado de hablantes. [Meetily](/es/power-local-llm/meetily-review) ofrece la diarización de hablantes solo en su nivel Pro de pago. El marcado de cambios de hablante de whisper.cpp es experimental y se trata en su análisis, no en la tabla.',
          '**Precio y plataforma.** [MacWhisper](/es/power-local-llm/macwhisper-review) es una app propietaria para macOS con un nivel gratuito y una mejora de pago; la mayoría de las demás herramientas de aquí son gratuitas y de código abierto. La Community Edition de Meetily es gratuita y con licencia MIT, con un nivel Pro de pago.',
          '**Servidor API local.** whisper.cpp incluye un servidor, e Izwi y Willow Inference Server documentan API HTTP.',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: 'Agentes de voz: en qué se diferencian',
        items: [
          '**Totalmente local frente a nube opcional.** [Jarvis](/es/power-local-llm/jarvis-mac-review) documenta una pila local de entrada de voz, LLM y salida de voz; [Parlor](/es/power-local-llm/parlor-review) documenta un flujo local con una función opcional de investigación en la nube. [Voxa](/es/power-local-llm/voxa-review) puede usar un proveedor de voz local o proveedores en la nube, así que solo es totalmente local si eliges el local.',
          '**Interrupción (barge-in).** Jarvis, Parlor y Voxa documentan que puedes interrumpir al agente mientras habla.',
          '**Tu propio LLM y llamadas telefónicas.** [Dograh](/es/power-local-llm/dograh-review) documenta la elección de LLM y las integraciones de telefonía; [Voxa](/es/power-local-llm/voxa-review) documenta la conexión de tu propio modelo mediante un daemon local.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Lo que esta comparación no puede decirte',
        items: [
          'Compara capacidades documentadas, no calidad. No dice nada sobre lo natural que suena una voz ni lo precisa que es una transcripción: eso requiere tu propio audio y tu propio hardware.',
          'No incluye pruebas de velocidad: PromptQuorum no las ha medido para estas herramientas.',
          'Los guiones son lagunas en la documentación de los proyectos, no hallazgos negativos. Algunas herramientas pueden admitir una función que su README no menciona.',
          'Las herramientas cambian rápido. El análisis de cada herramienta indica la versión con la que se contrastó, y esta guía se actualiza cuando se actualiza un análisis.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Por qué se comparan por separado el texto a voz, la voz a texto y los agentes de voz?',
            a: 'Hacen tareas distintas, así que la mayoría de los atributos solo tienen sentido dentro de una tarea: la clonación de voz se aplica al texto a voz, las etiquetas de hablante a la transcripción y la interrupción a los agentes de voz. Compararlos en una sola tabla dejaría la mayoría de las celdas vacías o sin sentido.',
          },
          {
            q: '¿Qué significa un guion en la tabla comparativa?',
            a: 'Significa que la documentación del propio proyecto no indica ese atributo. No significa que la función no exista; consulta el análisis de la herramienta o su repositorio.',
          },
          {
            q: '¿Estas herramientas son realmente locales?',
            a: 'Están diseñadas para ejecutarse en tu propio hardware, pero algunas ofrecen funciones opcionales en la nube —por ejemplo, la investigación en la nube opcional de Parlor o los proveedores de voz en la nube de Voxa— y algunas necesitan internet en la primera ejecución para descargar modelos. El análisis de cada herramienta lo detalla.',
          },
          {
            q: '¿Alguna de estas herramientas tiene un enlace de afiliado?',
            a: 'No. PromptQuorum no tiene ninguna relación de afiliación con ninguna herramienta de esta comparación en el momento de escribir esto, y ningún enlace de aquí genera una comisión.',
          },
          {
            q: '¿Con qué frecuencia se actualiza esta comparación?',
            a: 'Se actualiza dos veces al año y siempre que se actualiza el análisis de alguna de las herramientas incluidas, porque la tabla se genera a partir de los mismos datos que esos análisis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'El README o sitio web oficial de cada herramienta, indicado en el análisis de esa herramienta en PromptQuorum (enlazado desde la tabla comparativa).',
          '[Directorio de apps de IA local de PromptQuorum](/es/directory) — el registro a partir del cual se genera cada fila de la tabla.',
          '[Licencias de herramientas de IA explicadas](/es/power-local-llm/ai-tool-licenses-explained) — qué significan las familias de licencias mencionadas arriba.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          `[Directorio de software local](/es/directory) — explora ${TOTAL_APP_COUNT} apps de IA local y filtra por categoría.`,
          '[Licencias de herramientas de IA explicadas](/es/power-local-llm/ai-tool-licenses-explained) — cómo leer las licencias MIT, GPL, MPL y personalizadas.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Herramientas locales de voz y habla comparadas (2026): texto a voz, voz a texto y agentes de voz',
      description:
        `Compara ${VA_TOTAL} herramientas de voz locales: texto a voz, voz a texto y agentes de voz en tiempo real, según la documentación oficial de los proyectos.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'es',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores y usuarios que eligen herramientas de voz locales' },
      about: [
        { '@type': 'Thing', name: 'Texto a voz' },
        { '@type': 'Thing', name: 'Voz a texto' },
        { '@type': 'Thing', name: 'Agentes de voz' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Herramientas locales de voz y habla comparadas (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: 'ローカル音声・スピーチツール比較(2026):音声合成・音声認識・ボイスエージェント',
    seoTitle: 'ローカル音声・スピーチツール比較2026',
    intro:
      `ローカルの音声ツールには、テキストを音声にする、音声をテキストにする、AIと音声で会話する、という3つの異なる役割があり、単一の機能一覧では公平に比較できません。このガイドでは、自分のハードウェア上で動く無料・フリーミアムの${VA_TOTAL}ツールを、役割ごとに比較します。比較表は各ツールのPromptQuorumレビューと同じデータから生成しているため、表とレビューの内容が食い違うことはありません。`,
    metaDescription:
      `ローカル音声ツール${VA_TOTAL}種を並べて比較:音声合成、音声認識、リアルタイム・ボイスエージェント。ライセンス、対応プラットフォーム、CPU利用、APIサーバー、ボイスクローンなどを公式ドキュメントから整理。`,
    twitterDescription:
      '役割別に比べるローカル音声ツール:音声合成・音声認識・ボイスエージェント。ライセンス、プラットフォーム、CPU利用、APIサーバー、ボイスクローンを公式ドキュメントから整理。',
    audience:
      'ローカル(オフライン対応)の音声合成、文字起こし、音声アシスタントのツールを選ぶ開発者、メイカー、プライバシー重視のユーザーで、ひとまとめの一覧ではなく役割ごとの違いを知りたい方。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカル音声ツール比較',
    targetKeywords: [
      'ローカル 音声合成 比較',
      'ローカル 音声認識 比較',
      'おすすめ ローカル 音声ツール',
      'オフライン 音声アシスタント ツール',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**PromptQuorumディレクトリにあるローカル音声ツール${VA_TOTAL}種は、別々に比較すべき3つの役割に分かれます。音声合成(${VA_TEXT_TO_SPEECH}ツール)、音声認識(${VA_SPEECH_TO_TEXT}ツール)、リアルタイム・ボイスエージェント(${VA_REALTIME_VOICE_AGENTS}ツール)です。** 音声合成のうち、ボイスクローンを公式ドキュメントに記載しているのはCoqui TTS、XTTS-v2、Izwi、Willow Inference Serverです。音声認識では、whisper.cppとWillow Inference Serverがリアルタイム文字起こしを記載しています。ボイスエージェントはDograh、Jarvis、Parlor、Voxaです。下の比較表を使い、インストール前に各ツールのレビューを読んでください。`,
    quickAnswerTop: {
      en: {
        question: 'どのローカル音声ツールを使えばよいか',
        answer:
          '用途によって異なるため、1つの役割の中で比較してください。ライセンス、プラットフォーム、CPUのみでの利用、ローカルAPIサーバー、ボイスクローン、リアルタイム文字起こしなど、最も重視する条件で選び、各ツールの公式ドキュメントから生成した下の表を使ってください。',
        bullets: [
          '音声合成:8ツールを、対応言語、ボイスクローン、ストリーミング、CPU利用、APIサーバーで比較。',
          '音声認識:7ツールを、リアルタイム利用、話者ラベル、CPU利用、APIサーバーで比較。',
          'ボイスエージェント:4ツールを、完全ローカル動作、割り込み、独自LLMの利用、電話連携で比較。',
          'ダッシュ(—)は、そのプロジェクトのドキュメントに記載がないことを示すもので、機能がないという意味ではありません。',
        ],
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '比較の方法', anchor: 'how-we-compared' },
      { label: '比較表', anchor: 'comparison-table' },
      { label: '音声合成:違いのポイント', anchor: 'tts-differences' },
      { label: '音声認識:違いのポイント', anchor: 'stt-differences' },
      { label: 'ボイスエージェント:違いのポイント', anchor: 'agent-differences' },
      { label: 'この比較でわからないこと', anchor: 'limitations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '出典', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `ローカル音声ツールは、音声合成、音声認識、リアルタイム・ボイスエージェントという3つの異なる役割であるため、PromptQuorumディレクトリの${VA_TOTAL}ツールを役割ごとに比較しており、比較表は各ツールのレビューと同じツールデータから生成しています。`,
          },
          {
            type: 'plain-terms',
            text: 'テキストを読み上げるツール、話した内容を書き起こすツール、AIと音声で会話するツールがあります。読み上げツールと文字起こしツールを「ボイスクローン」で比べても意味がないため、このガイドでは同じ種類どうしを比較します。',
          },
        ],
        items: [
          `${VA_TOTAL}ツール、3つの役割:音声合成(${VA_TEXT_TO_SPEECH})、音声認識(${VA_SPEECH_TO_TEXT})、リアルタイム・ボイスエージェント(${VA_REALTIME_VOICE_AGENTS})。IzwiとWillow Inference Serverは音声合成と音声認識の両方に対応するため、両方の表に登場します。`,
          '表は各ツールのレコードから生成し、公式のREADMEまたはサイトと照合しています。ダッシュは「ドキュメントに記載なし」を意味し、「なし」を意味することはありません。',
          'ライセンスには重要な違いがあります。たとえばPiperとOpenAI Edge TTSはGPL-3.0、Coqui TTSはMPL-2.0、XTTS-v2はCoqui Public Model License、Bark、StyleTTS 2、whisper.cpp、faster-whisperはMITです。',
          '表内のツール名はすべて、そのツール自身のPromptQuorumレビューにリンクしています。インストール手順や制限事項はそこで扱っています。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '比較の方法',
        content: [
          '各ツールの情報(価格、ライセンス、プラットフォーム、ハードウェア要件、カテゴリ固有の属性)は、そのツールのディレクトリレコードに1か所だけ保存されています。下の比較表はそのレコードから生成され、ツール自身のレビューも同じレコードを参照しているため、両者が異なる値を示すことはありません。',
          'カテゴリ固有の属性(たとえばボイスクローンやリアルタイム文字起こし)は、各プロジェクトの公式READMEまたはウェブサイトから取得し、そこでの正確な表現と照合しています。ドキュメントに記載がない場合、表は推測せずダッシュを表示します。記述に条件が付く場合(実験的、有料プランのみ、GPUが必要など)は、その属性を表から外し、ツールのレビューで扱います。',
          'この比較は、自分のハードウェア上で動くツールを一覧にしたものです。順位付けはしません。どれが適切かは条件によって決まるため、以下のセクションで実際の違いを示します。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '比較表',
        content:
          '下から役割を選び、行に沿って読み進めてください。ツール名をクリックすると、PromptQuorumの詳しいレビューが開きます。',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: '音声合成:違いのポイント',
        items: [
          '**ライセンス。** BarkとStyleTTS 2はMITライセンスです。Coqui TTSはMPL-2.0です。XTTS-v2はCoqui Public Model License(CPML)を使用しており、これは標準的なオープンソースライセンスではなく、独自の条件を持つカスタムライセンスです。商用利用の前に必ず確認してください。PiperとOpenAI Edge TTSはGPL-3.0で、改変版を配布する際に条件が課されます。いずれかを使って製品を作る前にライセンスを確認してください。詳しくは[Piper TTS](/ja/power-local-llm/piper-tts-review)と[XTTS v2](/ja/power-local-llm/xtts-v2-review)をご覧ください。',
          '**ボイスクローン。** Coqui TTS([レビュー](/ja/power-local-llm/coqui-tts-review))、XTTS-v2([レビュー](/ja/power-local-llm/xtts-v2-review))、Izwi([レビュー](/ja/power-local-llm/izwi-review))、Willow Inference Server([レビュー](/ja/power-local-llm/willow-inference-server-review))は、ボイスクローンまたはカスタムボイスを記載しています。[Bark](/ja/power-local-llm/bark-tts-review)は、カスタムのボイスクローンに対応していないと明記しています。',
          '**ローカルAPIサーバー。** Coqui TTS、Izwi、OpenAI Edge TTS、Piper、Willow Inference Serverはサーバーコンポーネントを記載しており、他のアプリからHTTP経由で呼び出せます。[OpenAI Edge TTS](/ja/power-local-llm/openai-edge-tts-review)はその用途を中心に作られています。',
          '**対応言語。** Barkは13言語、XTTS-v2は17言語を記載しています。他のツールは比較可能な言語数を記載していないため、表には数字ではなくダッシュを表示しています。',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: '音声認識:違いのポイント',
        items: [
          '**リアルタイム文字起こし。** [whisper.cpp](/ja/power-local-llm/whisper-cpp-review)はリアルタイムのストリーミング例を記載しており、IzwiとWillow Inference Serverはリアルタイム利用を記載しています。[faster-whisper](/ja/power-local-llm/faster-whisper-review)は文字起こしライブラリで、そのREADMEにはリアルタイムモードの記載がありません。',
          '**話者ラベル。** IzwiとFunClipは話者ラベル付けを記載しています。[Meetily](/ja/power-local-llm/meetily-review)は話者分離(ダイアライゼーション)を有料のProプランでのみ提供します。whisper.cppの話者交代マーキングは実験的であり、表ではなくレビューで扱っています。',
          '**価格とプラットフォーム。** [MacWhisper](/ja/power-local-llm/macwhisper-review)は無料プランと有料アップグレードを備えたプロプライエタリなmacOSアプリです。ここにある他のツールの大半は無料のオープンソースです。MeetilyのCommunity Editionは無料でMITライセンスであり、有料のProプランもあります。',
          '**ローカルAPIサーバー。** whisper.cppはサーバーを同梱しており、IzwiとWillow Inference ServerはHTTP APIを記載しています。',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: 'ボイスエージェント:違いのポイント',
        items: [
          '**完全ローカルか、オプションのクラウドか。** [Jarvis](/ja/power-local-llm/jarvis-mac-review)は、ローカルで音声入力、LLM、音声出力を行うスタックを記載しています。[Parlor](/ja/power-local-llm/parlor-review)は、オプションのクラウドリサーチ機能を備えたローカルパイプラインを記載しています。[Voxa](/ja/power-local-llm/voxa-review)はローカルの音声プロバイダーもクラウドのプロバイダーも使えるため、ローカルのものを選んだ場合にのみ完全ローカルになります。',
          '**割り込み(バージイン)。** Jarvis、Parlor、Voxaは、エージェントの発話中に割り込めることを記載しています。',
          '**独自LLMと電話通話。** [Dograh](/ja/power-local-llm/dograh-review)はLLMの選択と電話連携を記載しており、[Voxa](/ja/power-local-llm/voxa-review)はローカルのデーモン経由で独自のモデルを接続することを記載しています。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'この比較でわからないこと',
        items: [
          'この比較はドキュメントに記載された機能を比べるものであり、品質を比べるものではありません。声がどれほど自然か、文字起こしがどれほど正確かはわかりません。それには、ご自身の音声とハードウェアでの確認が必要です。',
          '速度ベンチマークは含まれていません。PromptQuorumはこれらのツールについて測定していません。',
          'ダッシュはプロジェクトのドキュメント上の空白であり、否定的な評価ではありません。READMEに記載がなくても、その機能に対応しているツールがある可能性があります。',
          'ツールは急速に変化します。各ツールのレビューには確認したバージョンが記載されており、このガイドはレビューが更新されるたびに更新されます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'なぜ音声合成、音声認識、ボイスエージェントを別々に比較するのですか。',
            a: '役割が異なるため、ほとんどの属性は1つの役割の中でのみ意味を持ちます。ボイスクローンは音声合成に、話者ラベルは文字起こしに、割り込みはボイスエージェントに当てはまります。1つの表で比較すると、ほとんどのセルが空欄か無意味になってしまいます。',
          },
          {
            q: '比較表のダッシュは何を意味しますか。',
            a: 'そのプロジェクト自身のドキュメントに、その属性の記載がないことを意味します。機能がないという意味ではありません。ツールのレビューやリポジトリで確認してください。',
          },
          {
            q: 'これらのツールは本当にローカルですか。',
            a: '自分のハードウェア上で動くように設計されていますが、Parlorのオプションのクラウドリサーチ機能やVoxaのクラウド音声プロバイダーのように、オプションのクラウド機能を備えるものもあり、初回実行時にモデルをダウンロードするためインターネット接続が必要なものもあります。詳細は各ツールのレビューで扱っています。',
          },
          {
            q: 'これらのツールにアフィリエイトリンクはありますか。',
            a: 'いいえ。執筆時点で、PromptQuorumはこの比較にあるどのツールともアフィリエイト関係になく、ここにあるリンクで報酬が発生することはありません。',
          },
          {
            q: 'この比較はどのくらいの頻度で更新されますか。',
            a: '年2回、および掲載ツールのレビューが更新されるたびに更新されます。表がそれらのレビューと同じデータから生成されているためです。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '各ツールの公式READMEまたはウェブサイト。そのツールのPromptQuorumレビュー(比較表からリンク)に記載しています。',
          '[PromptQuorumローカルAIアプリディレクトリ](/ja/directory) — 表の各行の生成元となるレコードです。',
          '[AIツールのライセンスを解説](/ja/power-local-llm/ai-tool-licenses-explained) — 上記のライセンス種別の意味を説明しています。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          `[ローカルソフトウェアディレクトリ](/ja/directory) — ${TOTAL_APP_COUNT}件のローカルAIアプリをすべて閲覧し、カテゴリで絞り込めます。`,
          '[AIツールのライセンスを解説](/ja/power-local-llm/ai-tool-licenses-explained) — MIT、GPL、MPL、カスタムライセンスの読み方。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカル音声・スピーチツール比較(2026):音声合成・音声認識・ボイスエージェント',
      description:
        `ローカル音声ツール${VA_TOTAL}種を並べて比較:音声合成、音声認識、リアルタイム・ボイスエージェントを、公式プロジェクトドキュメントから整理。`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'ja',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカル音声ツールを選ぶ開発者とユーザー' },
      about: [
        { '@type': 'Thing', name: '音声合成' },
        { '@type': 'Thing', name: '音声認識' },
        { '@type': 'Thing', name: 'ボイスエージェント' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ローカル音声・スピーチツール比較(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: '本地语音工具对比(2026):语音合成、语音转文字与语音助手',
    seoTitle: '本地语音工具对比2026',
    intro:
      `本地语音工具分属三类不同的任务——把文字变成语音、把语音变成文字,以及与AI进行口语对话——没有哪一份统一的功能清单能公平地比较它们。本指南按任务逐类对比${VA_TOTAL}款可在你自己设备上运行的免费和免费增值工具,所用对比表与每款工具在PromptQuorum上的评测出自同一份数据生成,因此表格与评测不会互相矛盾。`,
    metaDescription:
      `并排对比${VA_TOTAL}款本地语音工具:语音合成、语音转文字和实时语音助手。涵盖许可证、平台、CPU运行、API服务器、声音克隆等,均来自官方项目文档。`,
    twitterDescription:
      '按任务对比本地语音工具:语音合成、语音转文字与语音助手——许可证、平台、CPU运行、API服务器、声音克隆,均来自官方文档。',
    audience:
      '正在选择本地(可离线运行)语音合成、转录或语音助手工具的开发者、创客和注重隐私的用户,希望按任务查看差异,而不是一份混杂的清单。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地语音工具对比',
    targetKeywords: [
      '本地语音合成对比',
      '本地语音转文字对比',
      '最佳本地语音工具',
      '离线语音助手工具',
      'whisper.cpp vs faster-whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**PromptQuorum目录中的${VA_TOTAL}款本地语音工具分为三类任务,应分别对比:语音合成(${VA_TEXT_TO_SPEECH}款)、语音转文字(${VA_SPEECH_TO_TEXT}款)和实时语音助手(${VA_REALTIME_VOICE_AGENTS}款)。** 在语音合成中,Coqui TTS、XTTS-v2、Izwi和Willow Inference Server的官方文档提到了声音克隆;在语音转文字中,whisper.cpp和Willow Inference Server的文档提到了实时转录;Dograh、Jarvis、Parlor和Voxa则是语音助手。请使用下方的对比表,并在安装前阅读每款工具自己的评测。`,
    quickAnswerTop: {
      en: {
        question: '我应该使用哪款本地语音工具?',
        answer:
          '这取决于具体任务,因此请一次只在一类任务内做对比。按对你最重要的限制条件来选——许可证、平台、仅用CPU运行、本地API服务器、声音克隆、实时转录——并使用下方由各工具官方文档生成的表格。',
        bullets: [
          '语音合成:8款工具,按语言、声音克隆、流式输出、CPU运行和API服务器进行对比。',
          '语音转文字:7款工具,按实时使用、说话人标注、CPU运行和API服务器进行对比。',
          '语音助手:4款工具,按完全本地运行、打断、自带LLM和电话集成进行对比。',
          '短横线(—)表示该项目的文档未说明,并不代表该功能不存在。',
        ],
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '我们如何对比', anchor: 'how-we-compared' },
      { label: '对比表', anchor: 'comparison-table' },
      { label: '语音合成:差异在哪里', anchor: 'tts-differences' },
      { label: '语音转文字:差异在哪里', anchor: 'stt-differences' },
      { label: '语音助手:差异在哪里', anchor: 'agent-differences' },
      { label: '本对比无法告诉你的事', anchor: 'limitations' },
      { label: '常见问题', anchor: 'faq' },
      { label: '资料来源', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `本地语音工具分属三类不同的任务——语音合成、语音转文字和实时语音助手——因此PromptQuorum目录中的${VA_TOTAL}款工具按任务分别对比,所用表格与每款工具自己的评测出自同一份工具数据生成。`,
          },
          {
            type: 'plain-terms',
            text: '有的工具把文字朗读出来,有的把你说的话记录下来,还有的与AI进行口语对话。拿朗读工具和转录工具比较“声音克隆”毫无意义,所以本指南只在同类之间做对比。',
          },
        ],
        items: [
          `${VA_TOTAL}款工具,三类任务:语音合成(${VA_TEXT_TO_SPEECH}款)、语音转文字(${VA_SPEECH_TO_TEXT}款)、实时语音助手(${VA_REALTIME_VOICE_AGENTS}款)。Izwi和Willow Inference Server既做语音合成也做语音转文字,因此出现在两张表中。`,
          '表格由每款工具的记录生成,并对照其官方README或网站核对;短横线表示“文档中未说明”,绝不表示“没有”。',
          '许可证的差异很重要:例如Piper和OpenAI Edge TTS采用GPL-3.0,Coqui TTS采用MPL-2.0,XTTS-v2采用Coqui Public Model License,而Bark、StyleTTS 2、whisper.cpp和faster-whisper采用MIT。',
          '表中每个工具名称都链接到它自己的PromptQuorum评测,安装步骤和局限都在评测中介绍。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '我们如何对比',
        content: [
          '每款工具的事实信息——价格、许可证、平台、硬件需求和分类专属属性——只在该工具的目录记录中存储一次。下方的对比表由这些记录生成,而该工具自己的评测也使用同一条记录,因此两者不可能给出不同的数值。',
          '分类专属属性(例如声音克隆或实时转录)取自各项目的官方README或网站,并对照其中的原文措辞核对。若文档没有提及,表格显示短横线而不是猜测;若某项说法带有限定条件(实验性、仅限付费方案,或依赖GPU),则该属性不列入表格,而在该工具的评测中说明。',
          '本对比列出的是可在你自己设备上运行的工具。它不做排名:哪一款合适取决于你的限制条件,下面的各节会指出真正的差异所在。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '对比表',
        content:
          '先在下方选择一类任务,再沿着一行横向阅读。点击工具名称可打开其完整的PromptQuorum评测。',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: '语音合成:差异在哪里',
        items: [
          '**许可证。** Bark和StyleTTS 2采用MIT许可证。Coqui TTS采用MPL-2.0。XTTS-v2采用Coqui Public Model License(CPML),这是一份有自身条款的自定义许可证,而非标准的开源许可证——商业使用前请先阅读。Piper和OpenAI Edge TTS采用GPL-3.0,对分发修改后的版本附有条件。在基于其中任何一款构建产品之前,请先核实许可证——参见[Piper TTS](/zh/power-local-llm/piper-tts-review)和[XTTS v2](/zh/power-local-llm/xtts-v2-review)。',
          '**声音克隆。** Coqui TTS([评测](/zh/power-local-llm/coqui-tts-review))、XTTS-v2([评测](/zh/power-local-llm/xtts-v2-review))、Izwi([评测](/zh/power-local-llm/izwi-review))和Willow Inference Server([评测](/zh/power-local-llm/willow-inference-server-review))的文档提到了声音克隆或自定义声音。[Bark](/zh/power-local-llm/bark-tts-review)则说明它不支持自定义声音克隆。',
          '**本地API服务器。** Coqui TTS、Izwi、OpenAI Edge TTS、Piper和Willow Inference Server的文档提到了服务器组件,因此其他应用可以通过HTTP调用它们;[OpenAI Edge TTS](/zh/power-local-llm/openai-edge-tts-review)就是围绕这一点构建的。',
          '**语言。** Bark的文档提到13种语言,XTTS-v2的文档提到17种。其他工具没有给出可比的数量,因此表格显示短横线而不是数字。',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: '语音转文字:差异在哪里',
        items: [
          '**实时转录。** [whisper.cpp](/zh/power-local-llm/whisper-cpp-review)的文档提到了实时流式示例,Izwi和Willow Inference Server的文档提到了实时使用。[faster-whisper](/zh/power-local-llm/faster-whisper-review)是一个转录库;其自身的README没有提到实时模式。',
          '**说话人标注。** Izwi和FunClip的文档提到了说话人标注。[Meetily](/zh/power-local-llm/meetily-review)仅在其付费Pro方案中提供说话人分离。whisper.cpp的说话人轮换标记属于实验性功能,在其评测中介绍,而不列入表格。',
          '**价格与平台。** [MacWhisper](/zh/power-local-llm/macwhisper-review)是一款专有的macOS应用,有免费方案和付费升级;这里的其他大多数工具都是免费且开源的。Meetily的社区版免费并采用MIT许可证,另有付费Pro方案。',
          '**本地API服务器。** whisper.cpp附带一个服务器,Izwi和Willow Inference Server的文档提到了HTTP API。',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: '语音助手:差异在哪里',
        items: [
          '**完全本地与可选云端。** [Jarvis](/zh/power-local-llm/jarvis-mac-review)的文档描述了本地的语音输入、LLM、语音输出技术栈;[Parlor](/zh/power-local-llm/parlor-review)的文档描述了本地流程,并带有可选的云端研究功能。[Voxa](/zh/power-local-llm/voxa-review)可以使用本地语音提供商或云端提供商,因此只有选择本地提供商时才是完全本地。',
          '**打断(barge-in)。** Jarvis、Parlor和Voxa的文档提到,你可以在助手说话时打断它。',
          '**自带LLM与电话通话。** [Dograh](/zh/power-local-llm/dograh-review)的文档提到可选择LLM以及电话集成;[Voxa](/zh/power-local-llm/voxa-review)的文档提到通过本地守护进程连接你自己的模型。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '本对比无法告诉你的事',
        items: [
          '它比较的是文档中记载的能力,而不是质量。它无法说明声音听起来有多自然,也无法说明转录的准确度——这需要你用自己的音频和自己的设备来测试。',
          '它不包含速度基准测试:PromptQuorum没有对这些工具进行过此类测量。',
          '短横线是项目文档中的空白,不是负面结论。有些工具可能支持某项功能,只是其README没有提及。',
          '工具更新很快。每款工具的评测都会注明所核对的版本,本指南会在评测更新时随之刷新。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '为什么语音合成、语音转文字和语音助手要分开对比?',
            a: '它们承担不同的任务,因此大多数属性只在某一类任务内才有意义——声音克隆适用于语音合成,说话人标注适用于转录,打断适用于语音助手。把它们放进同一张表,大多数单元格会是空的或没有意义。',
          },
          {
            q: '对比表中的短横线是什么意思?',
            a: '表示该项目自己的文档没有说明该属性。这并不表示功能不存在;请查看该工具的评测或其代码仓库。',
          },
          {
            q: '这些工具真的是本地的吗?',
            a: '它们的设计目标是在你自己的设备上运行,但有些提供可选的云端功能——例如Parlor的可选云端研究,或Voxa的云端语音提供商——也有些在首次运行时需要联网下载模型。每款工具的评测都会说明这一点。',
          },
          {
            q: '这些工具中有任何一个带联盟推广链接吗?',
            a: '没有。截至撰写时,PromptQuorum与本对比中的任何工具都没有联盟推广关系,这里的任何链接都不会带来佣金。',
          },
          {
            q: '这份对比多久更新一次?',
            a: '每年刷新两次,并且每当所列工具之一的评测更新时也会刷新,因为表格与这些评测出自同一份数据生成。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '每款工具的官方README或网站,列在该工具的PromptQuorum评测中(可从对比表链接进入)。',
          '[PromptQuorum本地AI应用目录](/zh/directory)——表格每一行所依据的记录。',
          '[AI工具许可证详解](/zh/power-local-llm/ai-tool-licenses-explained)——上文提到的各类许可证的含义。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          `[本地软件目录](/zh/directory)——浏览全部${TOTAL_APP_COUNT}款本地AI应用,并按类别筛选。`,
          '[AI工具许可证详解](/zh/power-local-llm/ai-tool-licenses-explained)——如何理解MIT、GPL、MPL和自定义许可证。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地语音工具对比(2026):语音合成、语音转文字与语音助手',
      description:
        `并排对比${VA_TOTAL}款本地语音工具:语音合成、语音转文字和实时语音助手,均来自官方项目文档。`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'zh',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在选择本地语音工具的开发者和用户' },
      about: [
        { '@type': 'Thing', name: '语音合成' },
        { '@type': 'Thing', name: '语音转文字' },
        { '@type': 'Thing', name: '语音助手' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '本地语音工具对比(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: 'Ferramentas locais de voz e fala comparadas (2026): síntese de voz, transcrição e agentes de voz',
    seoTitle: 'Ferramentas locais de voz e fala comparadas 2026',
    intro:
      `As ferramentas locais de voz cumprem três funções diferentes — transformar texto em fala, transformar fala em texto e conduzir uma conversa falada com uma IA — e nenhuma lista única de recursos compara as três de forma justa. Este guia compara ${VA_TOTAL} ferramentas gratuitas e freemium que rodam no seu próprio hardware, uma função por vez, usando uma tabela comparativa gerada a partir dos mesmos dados da análise de cada ferramenta no PromptQuorum, de modo que a tabela e as análises não podem se contradizer.`,
    metaDescription:
      `Compare ${VA_TOTAL} ferramentas locais de voz lado a lado: síntese de voz, transcrição e agentes de voz em tempo real. Licenças, plataformas, uso de CPU, servidores de API, clonagem de voz e mais, segundo a documentação oficial.`,
    twitterDescription:
      'Ferramentas locais de voz comparadas por função: síntese de voz, transcrição e agentes de voz — licenças, plataformas, uso de CPU, servidores de API e clonagem de voz, segundo a documentação oficial.',
    audience:
      'Desenvolvedores, makers e usuários preocupados com privacidade que estão escolhendo uma ferramenta local (capaz de funcionar offline) de síntese de voz, transcrição ou assistente de voz e querem as diferenças organizadas por função, não em uma lista única misturada.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ferramentas locais de voz comparadas',
    targetKeywords: [
      'comparação de síntese de voz local',
      'comparação de transcrição de fala local',
      'melhores ferramentas locais de voz',
      'assistente de voz offline',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**As ${VA_TOTAL} ferramentas locais de voz do diretório PromptQuorum se dividem em três funções que devem ser comparadas separadamente: síntese de voz (${VA_TEXT_TO_SPEECH} ferramentas), transcrição de fala (${VA_SPEECH_TO_TEXT}) e agentes de voz em tempo real (${VA_REALTIME_VOICE_AGENTS}).** Na síntese de voz, a clonagem de voz consta na documentação oficial do Coqui TTS, do XTTS-v2, do Izwi e do Willow Inference Server; na transcrição, o whisper.cpp e o Willow Inference Server documentam transcrição em tempo real; e Dograh, Jarvis, Parlor e Voxa são os agentes de voz. Use a tabela comparativa abaixo e leia a análise de cada ferramenta antes de instalá-la.`,
    quickAnswerTop: {
      en: {
        question: 'Qual ferramenta local de voz devo usar?',
        answer:
          'Depende da função, então compare dentro de uma função por vez. Escolha pela restrição que mais importa — licença, plataforma, uso somente com CPU, servidor de API local, clonagem de voz, transcrição em tempo real — e use a tabela abaixo, gerada a partir da documentação oficial de cada ferramenta.',
        bullets: [
          'Síntese de voz: 8 ferramentas comparadas por idiomas, clonagem de voz, streaming, uso de CPU e servidor de API.',
          'Transcrição de fala: 7 ferramentas comparadas por uso em tempo real, identificação de falantes, uso de CPU e servidor de API.',
          'Agentes de voz: 4 ferramentas comparadas por operação totalmente local, interrupção, uso do seu próprio LLM e telefonia.',
          'Um traço (—) significa que a documentação do projeto não informa o dado, não que o recurso não exista.',
        ],
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Como comparamos', anchor: 'how-we-compared' },
      { label: 'Tabela comparativa', anchor: 'comparison-table' },
      { label: 'Síntese de voz: o que muda', anchor: 'tts-differences' },
      { label: 'Transcrição de fala: o que muda', anchor: 'stt-differences' },
      { label: 'Agentes de voz: o que muda', anchor: 'agent-differences' },
      { label: 'O que esta comparação não pode dizer', anchor: 'limitations' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `As ferramentas locais de voz cumprem três funções diferentes — síntese de voz, transcrição de fala e agentes de voz em tempo real — por isso as ${VA_TOTAL} ferramentas do diretório PromptQuorum são comparadas dentro de cada função, usando uma tabela gerada a partir dos mesmos dados de ferramenta da análise de cada uma.`,
          },
          {
            type: 'plain-terms',
            text: 'Algumas ferramentas leem texto em voz alta, outras escrevem o que você diz e outras conversam por voz com uma IA. Comparar um leitor com um transcritor em "clonagem de voz" não faz sentido, então este guia compara apenas o que é comparável.',
          },
        ],
        items: [
          `${VA_TOTAL} ferramentas, três funções: síntese de voz (${VA_TEXT_TO_SPEECH}), transcrição de fala (${VA_SPEECH_TO_TEXT}), agentes de voz em tempo real (${VA_REALTIME_VOICE_AGENTS}). O Izwi e o Willow Inference Server fazem tanto síntese de voz quanto transcrição, por isso aparecem nas duas tabelas.`,
          'A tabela é gerada a partir do registro de cada ferramenta e conferida com o README ou o site oficial; um traço significa "não informado na documentação", nunca "não".',
          'As licenças diferem de maneiras que importam: por exemplo, Piper e OpenAI Edge TTS são GPL-3.0, o Coqui TTS é MPL-2.0, o XTTS-v2 usa a Coqui Public Model License, e Bark, StyleTTS 2, whisper.cpp e faster-whisper são MIT.',
          'Cada nome de ferramenta na tabela leva à sua própria análise no PromptQuorum, onde estão os passos de instalação e os limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Como comparamos',
        content: [
          'Os fatos de cada ferramenta — preço, licença, plataformas, requisitos de hardware e atributos específicos da categoria — são armazenados uma única vez, no registro da ferramenta no diretório. A tabela comparativa abaixo é gerada a partir desses registros, e a análise da própria ferramenta usa o mesmo registro, então as duas não podem informar valores diferentes.',
          'Os atributos específicos da categoria (por exemplo, clonagem de voz ou transcrição em tempo real) foram tirados do README ou do site oficial de cada projeto e conferidos com a redação exata ali. Onde a documentação é omissa, a tabela mostra um traço em vez de adivinhar; onde uma afirmação vem com ressalvas (experimental, apenas em plano pago ou dependente de GPU), o atributo fica de fora da tabela e é tratado na análise da ferramenta.',
          'A comparação lista ferramentas que rodam no seu próprio hardware. Ela não as classifica em ranking: qual é a certa depende da sua restrição, e as seções abaixo apontam onde estão as diferenças reais.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa',
        content:
          'Escolha uma função abaixo e leia ao longo de uma linha. Clique no nome de uma ferramenta para abrir a análise completa no PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: 'Síntese de voz: o que muda',
        items: [
          '**Licença.** Bark e StyleTTS 2 têm licença MIT. O Coqui TTS é MPL-2.0. O XTTS-v2 usa a Coqui Public Model License (CPML), uma licença personalizada com termos próprios, e não uma licença de código aberto padrão — leia-a antes de qualquer uso comercial. Piper e OpenAI Edge TTS são GPL-3.0, que impõe condições à distribuição de versões modificadas. Verifique a licença antes de construir um produto sobre qualquer uma delas — veja [Piper TTS](/pt/power-local-llm/piper-tts-review) e [XTTS v2](/pt/power-local-llm/xtts-v2-review).',
          '**Clonagem de voz.** Coqui TTS ([análise](/pt/power-local-llm/coqui-tts-review)), XTTS-v2 ([análise](/pt/power-local-llm/xtts-v2-review)), Izwi ([análise](/pt/power-local-llm/izwi-review)) e Willow Inference Server ([análise](/pt/power-local-llm/willow-inference-server-review)) documentam clonagem de voz ou vozes personalizadas. O [Bark](/pt/power-local-llm/bark-tts-review) informa que não oferece suporte à clonagem de voz personalizada.',
          '**Servidor de API local.** Coqui TTS, Izwi, OpenAI Edge TTS, Piper e Willow Inference Server documentam um componente de servidor, para que outros aplicativos possam chamá-los por HTTP; o [OpenAI Edge TTS](/pt/power-local-llm/openai-edge-tts-review) é construído em torno disso.',
          '**Idiomas.** O Bark documenta 13 idiomas e o XTTS-v2 documenta 17. As demais ferramentas não informam uma contagem comparável, por isso a tabela mostra um traço em vez de um número.',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: 'Transcrição de fala: o que muda',
        items: [
          '**Transcrição em tempo real.** O [whisper.cpp](/pt/power-local-llm/whisper-cpp-review) documenta um exemplo de streaming em tempo real, e o Izwi e o Willow Inference Server documentam uso em tempo real. O [faster-whisper](/pt/power-local-llm/faster-whisper-review) é uma biblioteca de transcrição; seu próprio README não documenta um modo em tempo real.',
          '**Identificação de falantes.** Izwi e FunClip documentam a identificação de falantes. O [Meetily](/pt/power-local-llm/meetily-review) oferece diarização de falantes apenas no plano Pro pago. A marcação de troca de falantes do whisper.cpp é experimental e é tratada na análise dele, não na tabela.',
          '**Preço e plataforma.** O [MacWhisper](/pt/power-local-llm/macwhisper-review) é um aplicativo proprietário para macOS com um plano gratuito e uma atualização paga; a maioria das outras ferramentas aqui é gratuita e de código aberto. A Community Edition do Meetily é gratuita e sob licença MIT, com um plano Pro pago.',
          '**Servidor de API local.** O whisper.cpp inclui um servidor, e o Izwi e o Willow Inference Server documentam APIs HTTP.',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: 'Agentes de voz: o que muda',
        items: [
          '**Totalmente local versus nuvem opcional.** O [Jarvis](/pt/power-local-llm/jarvis-mac-review) documenta uma pilha local de entrada de voz, LLM e saída de voz; o [Parlor](/pt/power-local-llm/parlor-review) documenta um pipeline local com um recurso opcional de pesquisa na nuvem. O [Voxa](/pt/power-local-llm/voxa-review) pode usar um provedor de voz local ou provedores na nuvem, então só é totalmente local se você escolher o local.',
          '**Interrupção (barge-in).** Jarvis, Parlor e Voxa documentam que você pode interromper o agente enquanto ele fala.',
          '**Seu próprio LLM e chamadas telefônicas.** O [Dograh](/pt/power-local-llm/dograh-review) documenta a escolha do LLM e integrações de telefonia; o [Voxa](/pt/power-local-llm/voxa-review) documenta a conexão do seu próprio modelo por meio de um daemon local.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'O que esta comparação não pode dizer',
        items: [
          'Ela compara capacidades documentadas, não qualidade. Não diz nada sobre o quão natural uma voz soa ou o quão preciso é uma transcrição — isso exige o seu próprio áudio e o seu próprio hardware.',
          'Ela não inclui benchmarks de velocidade: o PromptQuorum não os mediu para essas ferramentas.',
          'Os traços são lacunas na documentação dos projetos, não constatações negativas. Algumas ferramentas podem oferecer um recurso que o README não menciona.',
          'As ferramentas mudam rapidamente. A análise de cada ferramenta informa a versão com a qual foi conferida, e este guia é atualizado quando uma análise é atualizada.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Por que síntese de voz, transcrição de fala e agentes de voz são comparados separadamente?',
            a: 'Elas cumprem funções diferentes, então a maioria dos atributos só faz sentido dentro de uma função — clonagem de voz se aplica à síntese de voz, identificação de falantes à transcrição, interrupção aos agentes de voz. Compará-las em uma única tabela deixaria a maioria das células vazia ou sem sentido.',
          },
          {
            q: 'O que significa um traço na tabela comparativa?',
            a: 'Significa que a documentação do próprio projeto não informa esse atributo. Não significa que o recurso não exista; consulte a análise da ferramenta ou o repositório dela.',
          },
          {
            q: 'Essas ferramentas são realmente locais?',
            a: 'Elas foram projetadas para rodar no seu próprio hardware, mas algumas oferecem recursos opcionais na nuvem — por exemplo, a pesquisa opcional na nuvem do Parlor ou os provedores de voz na nuvem do Voxa — e algumas precisam de internet na primeira execução para baixar modelos. A análise de cada ferramenta trata disso.',
          },
          {
            q: 'Alguma dessas ferramentas tem link de afiliado?',
            a: 'Não. O PromptQuorum não tem relação de afiliado com nenhuma ferramenta desta comparação no momento em que este texto foi escrito, e nenhum link aqui gera comissão.',
          },
          {
            q: 'Com que frequência esta comparação é atualizada?',
            a: 'Ela é atualizada duas vezes por ano e sempre que a análise de uma das ferramentas listadas é atualizada, porque a tabela é gerada a partir dos mesmos dados dessas análises.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'O README ou o site oficial de cada ferramenta, listado na análise dela no PromptQuorum (com link na tabela comparativa).',
          '[Diretório de apps de IA local do PromptQuorum](/pt/directory) — o registro a partir do qual cada linha da tabela é gerada.',
          '[Licenças de ferramentas de IA explicadas](/pt/power-local-llm/ai-tool-licenses-explained) — o que significam as famílias de licenças citadas acima.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          `[Diretório de software local](/pt/directory) — navegue por ${TOTAL_APP_COUNT} apps de IA local e filtre por categoria.`,
          '[Licenças de ferramentas de IA explicadas](/pt/power-local-llm/ai-tool-licenses-explained) — como ler licenças MIT, GPL, MPL e personalizadas.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ferramentas locais de voz e fala comparadas (2026): síntese de voz, transcrição e agentes de voz',
      description:
        `Compare ${VA_TOTAL} ferramentas locais de voz lado a lado: síntese de voz, transcrição de fala e agentes de voz em tempo real, segundo a documentação oficial dos projetos.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores e usuários que escolhem ferramentas locais de voz' },
      about: [
        { '@type': 'Thing', name: 'Síntese de voz' },
        { '@type': 'Thing', name: 'Transcrição de fala' },
        { '@type': 'Thing', name: 'Agentes de voz' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ferramentas locais de voz e fala comparadas (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: 'مقارنة أدوات الصوت والكلام المحلية (2026): تحويل النص إلى كلام، وتحويل الكلام إلى نص، والوكلاء الصوتيون',
    seoTitle: 'مقارنة أدوات الصوت والكلام المحلية 2026',
    intro:
      `تنقسم أدوات الصوت المحلية إلى ثلاث مهام مختلفة — تحويل النص إلى كلام، وتحويل الكلام إلى نص، وإجراء محادثة منطوقة مع الذكاء الاصطناعي — ولا توجد قائمة ميزات واحدة تقارن بينها بإنصاف. يقارن هذا الدليل ${VA_TOTAL} أداة مجانية وفريميوم تعمل على جهازك الخاص، مهمةً تلو الأخرى، باستخدام جدول مقارنة مولَّد من البيانات نفسها التي تعتمد عليها مراجعة PromptQuorum لكل أداة، بحيث لا يتعارض الجدول مع المراجعات.`,
    metaDescription:
      `قارن ${VA_TOTAL} أداة صوت محلية جنبًا إلى جنب: تحويل النص إلى كلام، وتحويل الكلام إلى نص، والوكلاء الصوتيون الفوريون. التراخيص والمنصات واستخدام CPU وخوادم API واستنساخ الصوت وغيرها، من وثائق المشاريع الرسمية.`,
    twitterDescription:
      'مقارنة أدوات الصوت المحلية حسب المهمة: تحويل النص إلى كلام، وتحويل الكلام إلى نص، والوكلاء الصوتيون — التراخيص والمنصات واستخدام CPU وخوادم API واستنساخ الصوت، من الوثائق الرسمية.',
    audience:
      'المطورون والهواة والمستخدمون المهتمون بالخصوصية الذين يختارون أداة محلية (تعمل دون اتصال) لتحويل النص إلى كلام أو النسخ الصوتي أو المساعد الصوتي، ويريدون رؤية الفروق موزعة حسب المهمة لا في قائمة واحدة مختلطة.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مقارنة أدوات الصوت المحلية',
    targetKeywords: [
      'مقارنة تحويل النص إلى كلام محليًا',
      'مقارنة تحويل الكلام إلى نص محليًا',
      'أفضل أدوات الصوت المحلية',
      'أدوات المساعد الصوتي دون اتصال',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**تنقسم أدوات الصوت المحلية الـ${VA_TOTAL} في دليل PromptQuorum إلى ثلاث مهام ينبغي مقارنتها كلٌّ على حدة: تحويل النص إلى كلام (${VA_TEXT_TO_SPEECH} أدوات)، وتحويل الكلام إلى نص (${VA_SPEECH_TO_TEXT})، والوكلاء الصوتيون الفوريون (${VA_REALTIME_VOICE_AGENTS}).** ففي تحويل النص إلى كلام، يُذكر استنساخ الصوت في الوثائق الرسمية لـ Coqui TTS وXTTS-v2 وIzwi وWillow Inference Server؛ وفي تحويل الكلام إلى نص، توثّق whisper.cpp وWillow Inference Server النسخ الفوري؛ أما Dograh وJarvis وParlor وVoxa فهي الوكلاء الصوتيون. استخدم جدول المقارنة أدناه، واقرأ مراجعة كل أداة قبل تثبيتها.`,
    quickAnswerTop: {
      en: {
        question: 'ما أداة الصوت المحلية التي ينبغي أن أستخدمها؟',
        answer:
          'الأمر يعتمد على المهمة، لذا قارن داخل مهمة واحدة في كل مرة. اختر بحسب القيد الأهم لديك — الرخصة، أو المنصة، أو الاستخدام على CPU فقط، أو خادم API محلي، أو استنساخ الصوت، أو النسخ الفوري — واستعن بالجدول أدناه المولَّد من الوثائق الرسمية لكل أداة.',
        bullets: [
          'تحويل النص إلى كلام: 8 أدوات تُقارَن من حيث اللغات واستنساخ الصوت والبث المتدفق واستخدام CPU وخادم API.',
          'تحويل الكلام إلى نص: 7 أدوات تُقارَن من حيث الاستخدام الفوري وتمييز المتحدثين واستخدام CPU وخادم API.',
          'الوكلاء الصوتيون: 4 أدوات تُقارَن من حيث التشغيل المحلي بالكامل والمقاطعة واستخدام نموذج LLM من اختيارك والاتصال الهاتفي.',
          'الشرطة (—) تعني أن وثائق المشروع لا تذكر هذه الميزة، ولا تعني أنها غير موجودة.',
        ],
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'كيف أجرينا المقارنة', anchor: 'how-we-compared' },
      { label: 'جدول المقارنة', anchor: 'comparison-table' },
      { label: 'تحويل النص إلى كلام: ما الذي يختلف', anchor: 'tts-differences' },
      { label: 'تحويل الكلام إلى نص: ما الذي يختلف', anchor: 'stt-differences' },
      { label: 'الوكلاء الصوتيون: ما الذي يختلف', anchor: 'agent-differences' },
      { label: 'ما لا تخبرك به هذه المقارنة', anchor: 'limitations' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `أدوات الصوت المحلية ثلاث مهام مختلفة — تحويل النص إلى كلام، وتحويل الكلام إلى نص، والوكلاء الصوتيون الفوريون — لذا تُقارَن الأدوات الـ${VA_TOTAL} في دليل PromptQuorum داخل كل مهمة، بجدول مولَّد من بيانات الأدوات نفسها التي تعتمد عليها مراجعة كل أداة.`,
          },
          {
            type: 'plain-terms',
            text: 'بعض الأدوات تقرأ النص بصوت مسموع، وبعضها يكتب ما تقوله، وبعضها يجري محادثة منطوقة مع الذكاء الاصطناعي. ومقارنة أداة قراءة بأداة نسخ من حيث «استنساخ الصوت» لا معنى لها، ولهذا يقارن هذا الدليل بين الأدوات المتجانسة.',
          },
        ],
        items: [
          `${VA_TOTAL} أداة وثلاث مهام: تحويل النص إلى كلام (${VA_TEXT_TO_SPEECH})، وتحويل الكلام إلى نص (${VA_SPEECH_TO_TEXT})، والوكلاء الصوتيون الفوريون (${VA_REALTIME_VOICE_AGENTS}). تجمع Izwi وWillow Inference Server بين تحويل النص إلى كلام وتحويل الكلام إلى نص، لذلك تظهران في الجدولين.`,
          'يُولَّد الجدول من سجل كل أداة ويُدقَّق مقابل ملف README الرسمي أو الموقع الرسمي لها؛ والشرطة تعني «غير مذكور في الوثائق»، ولا تعني «لا» أبدًا.',
          'تختلف التراخيص بطرق مهمة: فمثلًا Piper وOpenAI Edge TTS بترخيص GPL-3.0، وCoqui TTS بترخيص MPL-2.0، وXTTS-v2 يستخدم رخصة Coqui Public Model License، وBark وStyleTTS 2 وwhisper.cpp وfaster-whisper بترخيص MIT.',
          'يرتبط اسم كل أداة في الجدول بمراجعتها الخاصة في PromptQuorum، حيث تُغطى خطوات التثبيت والحدود.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'كيف أجرينا المقارنة',
        content: [
          'تُخزَّن حقائق كل أداة — السعر والرخصة والمنصات ومتطلبات العتاد والسمات الخاصة بالفئة — مرة واحدة في سجل الأداة بالدليل. ويُولَّد جدول المقارنة أدناه من هذه السجلات، وتعتمد مراجعة الأداة نفسها على السجل ذاته، فلا يمكن أن يذكرا قيمًا مختلفة.',
          'أُخذت السمات الخاصة بالفئة (مثل استنساخ الصوت أو النسخ الفوري) من ملف README الرسمي لكل مشروع أو موقعه، وتم التحقق منها مقابل الصياغة الدقيقة هناك. وحيث تصمت الوثائق، يعرض الجدول شرطة بدل التخمين؛ وحيث يكون الادعاء مقيّدًا (تجريبيًا، أو في الخطة المدفوعة فقط، أو معتمدًا على GPU)، تُترك السمة خارج الجدول وتُغطى في مراجعة الأداة.',
          'تُدرج المقارنة الأدوات التي تعمل على جهازك الخاص. وهي لا ترتّبها: فالأنسب لك يعتمد على قيدك، وتبيّن الأقسام أدناه مواضع الفروق الحقيقية.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول المقارنة',
        content:
          'اختر مهمة أدناه، ثم اقرأ عبر الصف. انقر على اسم أداة لفتح مراجعتها الكاملة في PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: 'تحويل النص إلى كلام: ما الذي يختلف',
        items: [
          '**الرخصة.** Bark وStyleTTS 2 بترخيص MIT. وCoqui TTS بترخيص MPL-2.0. أما XTTS-v2 فيستخدم رخصة Coqui Public Model License (CPML)، وهي رخصة مخصصة بشروطها الخاصة وليست رخصة مفتوحة المصدر قياسية — اقرأها قبل أي استخدام تجاري. وPiper وOpenAI Edge TTS بترخيص GPL-3.0، الذي يفرض شروطًا على توزيع النسخ المعدّلة. تحقّق من الرخصة قبل بناء منتج على أي منها — انظر [Piper TTS](/ar/power-local-llm/piper-tts-review) و[XTTS v2](/ar/power-local-llm/xtts-v2-review).',
          '**استنساخ الصوت.** توثّق Coqui TTS ([مراجعة](/ar/power-local-llm/coqui-tts-review)) وXTTS-v2 ([مراجعة](/ar/power-local-llm/xtts-v2-review)) وIzwi ([مراجعة](/ar/power-local-llm/izwi-review)) وWillow Inference Server ([مراجعة](/ar/power-local-llm/willow-inference-server-review)) استنساخ الصوت أو الأصوات المخصصة. أما [Bark](/ar/power-local-llm/bark-tts-review) فتنص على أنها لا تدعم استنساخ الأصوات المخصصة.',
          '**خادم API محلي.** توثّق Coqui TTS وIzwi وOpenAI Edge TTS وPiper وWillow Inference Server مكوّن خادم، بحيث تستطيع تطبيقات أخرى استدعاءها عبر HTTP؛ و[OpenAI Edge TTS](/ar/power-local-llm/openai-edge-tts-review) مبنية حول ذلك.',
          '**اللغات.** توثّق Bark دعم 13 لغة وتوثّق XTTS-v2 دعم 17. أما الأدوات الأخرى فلا تذكر عددًا قابلًا للمقارنة، لذلك يعرض الجدول شرطة بدل رقم.',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: 'تحويل الكلام إلى نص: ما الذي يختلف',
        items: [
          '**النسخ الفوري.** توثّق [whisper.cpp](/ar/power-local-llm/whisper-cpp-review) مثالًا للبث الفوري، وتوثّق Izwi وWillow Inference Server الاستخدام الفوري. أما [faster-whisper](/ar/power-local-llm/faster-whisper-review) فهي مكتبة نسخ؛ ولا يوثّق ملف README الخاص بها وضعًا فوريًا.',
          '**تمييز المتحدثين.** توثّق Izwi وFunClip تمييز المتحدثين. وتقدّم [Meetily](/ar/power-local-llm/meetily-review) تمييز المتحدثين (speaker diarization) في خطة Pro المدفوعة فقط. أما وسم تغيّر المتحدثين في whisper.cpp فتجريبي، ويُغطى في مراجعتها لا في الجدول.',
          '**السعر والمنصة.** [MacWhisper](/ar/power-local-llm/macwhisper-review) تطبيق macOS مملوك بمستوى مجاني وترقية مدفوعة؛ ومعظم الأدوات الأخرى هنا مجانية ومفتوحة المصدر. ونسخة Meetily المجتمعية (Community Edition) مجانية وبترخيص MIT، مع خطة Pro مدفوعة.',
          '**خادم API محلي.** تأتي whisper.cpp بخادم، وتوثّق Izwi وWillow Inference Server واجهات HTTP API.',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: 'الوكلاء الصوتيون: ما الذي يختلف',
        items: [
          '**محلي بالكامل مقابل سحابة اختيارية.** توثّق [Jarvis](/ar/power-local-llm/jarvis-mac-review) حزمة محلية من الكلام الداخل ونموذج LLM والكلام الخارج؛ وتوثّق [Parlor](/ar/power-local-llm/parlor-review) مسارًا محليًا مع ميزة بحث سحابية اختيارية. ويمكن لـ [Voxa](/ar/power-local-llm/voxa-review) استخدام مزوّد صوت محلي أو مزوّدين سحابيين، فلا تكون محلية بالكامل إلا إذا اخترت المزوّد المحلي.',
          '**المقاطعة (barge-in).** توثّق Jarvis وParlor وVoxa إمكانية مقاطعة الوكيل أثناء كلامه.',
          '**نموذج LLM من اختيارك والمكالمات الهاتفية.** توثّق [Dograh](/ar/power-local-llm/dograh-review) إمكانية اختيار نموذج LLM وتكاملات الاتصال الهاتفي؛ وتوثّق [Voxa](/ar/power-local-llm/voxa-review) ربط نموذجك الخاص عبر خدمة محلية (daemon).',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا تخبرك به هذه المقارنة',
        items: [
          'تقارن القدرات الموثّقة لا الجودة. ولا تقول شيئًا عن مدى طبيعية الصوت أو دقة النص المنسوخ — فهذا يتطلب تسجيلاتك الصوتية وعتادك الخاص.',
          'لا تتضمن اختبارات سرعة: لم تقسها PromptQuorum لهذه الأدوات.',
          'الشرطات فجوات في وثائق المشاريع، وليست نتائج سلبية. قد تدعم بعض الأدوات ميزة لا يذكرها ملف README الخاص بها.',
          'تتغير الأدوات بسرعة. تذكر مراجعة كل أداة الإصدار الذي جرى التحقق منه، ويُحدَّث هذا الدليل عند تحديث مراجعة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'لماذا تُقارَن أدوات تحويل النص إلى كلام وتحويل الكلام إلى نص والوكلاء الصوتيون كلٌّ على حدة؟',
            a: 'لأنها تؤدي مهام مختلفة، فمعظم السمات لا معنى لها إلا داخل مهمة واحدة — استنساخ الصوت يخص تحويل النص إلى كلام، وتمييز المتحدثين يخص النسخ، والمقاطعة تخص الوكلاء الصوتيين. أما جمعها في جدول واحد فسيترك معظم الخلايا فارغة أو بلا معنى.',
          },
          {
            q: 'ماذا تعني الشرطة في جدول المقارنة؟',
            a: 'تعني أن وثائق المشروع نفسه لا تذكر هذه السمة. ولا تعني أن الميزة غير موجودة؛ راجع مراجعة الأداة أو مستودعها.',
          },
          {
            q: 'هل هذه الأدوات محلية فعلًا؟',
            a: 'هي مصممة للعمل على جهازك الخاص، لكن بعضها يقدّم ميزات سحابية اختيارية — مثل البحث السحابي الاختياري في Parlor، أو مزوّدي الصوت السحابيين في Voxa — وبعضها يحتاج إلى الإنترنت عند التشغيل الأول لتنزيل النماذج. وتغطي مراجعة كل أداة ذلك.',
          },
          {
            q: 'هل لأي من هذه الأدوات رابط أفلييت؟',
            a: 'لا. لا تربط PromptQuorum أي علاقة أفلييت بأي أداة في هذه المقارنة وقت الكتابة، ولا يحقق أي رابط هنا عمولة.',
          },
          {
            q: 'كم مرة تُحدَّث هذه المقارنة؟',
            a: 'تُحدَّث مرتين في السنة، وكلما حُدِّثت مراجعة إحدى الأدوات المدرجة، لأن الجدول مولَّد من البيانات نفسها التي تعتمد عليها تلك المراجعات.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'ملف README الرسمي لكل أداة أو موقعها الرسمي، المذكور في مراجعة PromptQuorum لتلك الأداة (المرتبطة من جدول المقارنة).',
          '[دليل PromptQuorum لتطبيقات الذكاء الاصطناعي المحلية](/ar/directory) — السجل الذي يُولَّد منه كل صف في الجدول.',
          '[شرح تراخيص أدوات الذكاء الاصطناعي](/ar/power-local-llm/ai-tool-licenses-explained) — معنى عائلات التراخيص المذكورة أعلاه.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          `[دليل البرمجيات المحلية](/ar/directory) — تصفّح ${TOTAL_APP_COUNT} تطبيق ذكاء اصطناعي محلي وصفّها حسب الفئة.`,
          '[شرح تراخيص أدوات الذكاء الاصطناعي](/ar/power-local-llm/ai-tool-licenses-explained) — كيف تقرأ تراخيص MIT وGPL وMPL والتراخيص المخصصة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مقارنة أدوات الصوت والكلام المحلية (2026): تحويل النص إلى كلام، وتحويل الكلام إلى نص، والوكلاء الصوتيون',
      description:
        `قارن ${VA_TOTAL} أداة صوت محلية جنبًا إلى جنب: تحويل النص إلى كلام، وتحويل الكلام إلى نص، والوكلاء الصوتيون الفوريون، من وثائق المشاريع الرسمية.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'ar',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المطورون والمستخدمون الذين يختارون أدوات صوت محلية' },
      about: [
        { '@type': 'Thing', name: 'تحويل النص إلى كلام' },
        { '@type': 'Thing', name: 'تحويل الكلام إلى نص' },
        { '@type': 'Thing', name: 'الوكلاء الصوتيون' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'مقارنة أدوات الصوت والكلام المحلية (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: '로컬 음성·음성 인식 도구 비교(2026): 음성 합성, 음성 인식, 음성 에이전트',
    seoTitle: '로컬 음성 도구 비교 2026: TTS·STT·에이전트',
    intro:
      `로컬 음성 도구는 텍스트를 음성으로 바꾸기, 음성을 텍스트로 바꾸기, AI와 음성으로 대화하기라는 세 가지 서로 다른 작업으로 나뉘며, 하나의 기능 목록으로는 이들을 공정하게 비교할 수 없습니다. 이 가이드는 자신의 하드웨어에서 실행되는 무료 및 프리미엄 도구 ${VA_TOTAL}개를 작업별로 하나씩 비교합니다. 비교표는 각 도구의 PromptQuorum 리뷰와 같은 데이터로 생성되므로, 표와 리뷰의 내용이 서로 어긋날 수 없습니다.`,
    metaDescription:
      `로컬 음성 도구 ${VA_TOTAL}개를 나란히 비교합니다: 음성 합성, 음성 인식, 실시간 음성 에이전트. 라이선스, 플랫폼, CPU 사용, API 서버, 음성 복제 등을 공식 문서 기준으로 정리했습니다.`,
    twitterDescription:
      '작업별로 비교한 로컬 음성 도구: 음성 합성, 음성 인식, 음성 에이전트 — 라이선스, 플랫폼, CPU 사용, API 서버, 음성 복제를 공식 문서 기준으로 정리했습니다.',
    audience:
      '로컬(오프라인 가능) 음성 합성, 음성 받아쓰기 또는 음성 비서 도구를 고르면서, 하나로 뒤섞은 목록이 아니라 작업별로 정리된 차이점을 보고 싶은 개발자, 메이커, 프라이버시를 중시하는 사용자.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 음성 도구 비교',
    targetKeywords: [
      '로컬 음성 합성 비교',
      '로컬 음성 인식 비교',
      '최고의 로컬 음성 도구',
      '오프라인 음성 비서 도구',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      `**PromptQuorum 디렉터리의 로컬 음성 도구 ${VA_TOTAL}개는 따로 비교해야 하는 세 가지 작업으로 나뉩니다: 음성 합성(${VA_TEXT_TO_SPEECH}개), 음성 인식(${VA_SPEECH_TO_TEXT}개), 실시간 음성 에이전트(${VA_REALTIME_VOICE_AGENTS}개).** 음성 합성 중에서는 Coqui TTS, XTTS-v2, Izwi, Willow Inference Server의 공식 문서가 음성 복제를 명시하고 있으며, 음성 인식에서는 whisper.cpp와 Willow Inference Server가 실시간 받아쓰기를 문서화하고 있습니다. Dograh, Jarvis, Parlor, Voxa는 음성 에이전트입니다. 아래 비교표를 활용하고, 설치하기 전에 각 도구의 리뷰를 읽어 보십시오.`,
    quickAnswerTop: {
      en: {
        question: '어떤 로컬 음성 도구를 써야 합니까?',
        answer:
          '작업에 따라 다르므로, 한 번에 하나의 작업 안에서 비교하십시오. 라이선스, 플랫폼, CPU 전용 사용, 로컬 API 서버, 음성 복제, 실시간 받아쓰기 중 가장 중요한 조건을 기준으로 고르고, 각 도구의 공식 문서를 바탕으로 생성된 아래 표를 활용하십시오.',
        bullets: [
          '음성 합성: 도구 8개를 언어, 음성 복제, 스트리밍, CPU 사용, API 서버 기준으로 비교.',
          '음성 인식: 도구 7개를 실시간 사용, 화자 구분, CPU 사용, API 서버 기준으로 비교.',
          '음성 에이전트: 도구 4개를 완전 로컬 동작, 끼어들기, 자체 LLM 연결, 전화 연동 기준으로 비교.',
          '대시(—)는 프로젝트 문서에 해당 내용이 명시되어 있지 않다는 뜻이며, 기능이 없다는 뜻이 아닙니다.',
        ],
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '비교 방법', anchor: 'how-we-compared' },
      { label: '비교표', anchor: 'comparison-table' },
      { label: '음성 합성: 무엇이 다른가', anchor: 'tts-differences' },
      { label: '음성 인식: 무엇이 다른가', anchor: 'stt-differences' },
      { label: '음성 에이전트: 무엇이 다른가', anchor: 'agent-differences' },
      { label: '이 비교로 알 수 없는 것', anchor: 'limitations' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `로컬 음성 도구는 음성 합성, 음성 인식, 실시간 음성 에이전트라는 세 가지 서로 다른 작업이므로, PromptQuorum 디렉터리의 도구 ${VA_TOTAL}개를 작업별로 비교하며, 각 도구의 리뷰와 같은 도구 데이터로 생성한 표를 사용합니다.`,
          },
          {
            type: 'plain-terms',
            text: '어떤 도구는 텍스트를 소리 내어 읽어 주고, 어떤 도구는 말한 내용을 받아 적고, 어떤 도구는 AI와 음성으로 대화합니다. 읽어 주는 도구와 받아 적는 도구를 "음성 복제"로 비교하는 것은 의미가 없으므로, 이 가이드는 같은 종류끼리 비교합니다.',
          },
        ],
        items: [
          `도구 ${VA_TOTAL}개, 작업 3가지: 음성 합성(${VA_TEXT_TO_SPEECH}), 음성 인식(${VA_SPEECH_TO_TEXT}), 실시간 음성 에이전트(${VA_REALTIME_VOICE_AGENTS}). Izwi와 Willow Inference Server는 음성 합성과 음성 인식을 모두 하므로 두 표에 모두 나타납니다.`,
          '표는 각 도구의 레코드로 생성되며 공식 README 또는 사이트와 대조해 확인합니다. 대시는 "문서에 명시되지 않음"을 뜻하며, "아니오"를 뜻하지 않습니다.',
          '라이선스는 중요한 방식으로 서로 다릅니다. 예를 들어 Piper와 OpenAI Edge TTS는 GPL-3.0, Coqui TTS는 MPL-2.0, XTTS-v2는 Coqui Public Model License를 사용하고, Bark, StyleTTS 2, whisper.cpp, faster-whisper는 MIT입니다.',
          '표의 모든 도구 이름은 해당 도구의 PromptQuorum 리뷰로 연결되며, 설치 단계와 한계는 그곳에서 다룹니다.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '비교 방법',
        content: [
          '각 도구의 사실 정보 — 가격, 라이선스, 플랫폼, 하드웨어 요구 사항, 카테고리별 속성 — 는 해당 도구의 디렉터리 레코드에 한 번만 저장됩니다. 아래 비교표는 이 레코드로 생성되고 도구의 리뷰도 같은 레코드를 바탕으로 하므로, 둘이 서로 다른 값을 제시할 수 없습니다.',
          '카테고리별 속성(예: 음성 복제, 실시간 받아쓰기)은 각 프로젝트의 공식 README 또는 웹사이트에서 가져와 그곳의 정확한 표현과 대조해 확인했습니다. 문서에 언급이 없는 경우 추측하지 않고 표에 대시를 표시하며, 주장에 단서가 붙는 경우(실험적 기능, 유료 플랜 전용, GPU 의존)에는 해당 속성을 표에서 제외하고 도구의 리뷰에서 다룹니다.',
          '이 비교는 자신의 하드웨어에서 실행되는 도구를 나열합니다. 순위를 매기지는 않습니다. 어떤 도구가 맞는지는 각자의 조건에 달려 있으며, 아래 섹션에서 실제로 무엇이 다른지 짚어 줍니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '비교표',
        content:
          '아래에서 작업을 선택한 다음 행을 따라 읽으십시오. 도구 이름을 클릭하면 해당 PromptQuorum 리뷰 전문이 열립니다.',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: '음성 합성: 무엇이 다른가',
        items: [
          '**라이선스.** Bark와 StyleTTS 2는 MIT 라이선스입니다. Coqui TTS는 MPL-2.0입니다. XTTS-v2는 Coqui Public Model License(CPML)를 사용하는데, 이는 표준 오픈소스 라이선스가 아니라 고유한 조건을 가진 맞춤 라이선스이므로 상업적으로 사용하기 전에 반드시 읽어 보십시오. Piper와 OpenAI Edge TTS는 GPL-3.0이며, 수정본을 배포할 때 조건이 붙습니다. 이 중 어떤 것으로든 제품을 만들기 전에 라이선스를 확인하십시오 — [Piper TTS](/ko/power-local-llm/piper-tts-review)와 [XTTS v2](/ko/power-local-llm/xtts-v2-review)를 참고하십시오.',
          '**음성 복제.** Coqui TTS([리뷰](/ko/power-local-llm/coqui-tts-review)), XTTS-v2([리뷰](/ko/power-local-llm/xtts-v2-review)), Izwi([리뷰](/ko/power-local-llm/izwi-review)), Willow Inference Server([리뷰](/ko/power-local-llm/willow-inference-server-review))는 음성 복제 또는 사용자 지정 음성을 문서화하고 있습니다. [Bark](/ko/power-local-llm/bark-tts-review)는 사용자 지정 음성 복제를 지원하지 않는다고 명시합니다.',
          '**로컬 API 서버.** Coqui TTS, Izwi, OpenAI Edge TTS, Piper, Willow Inference Server는 서버 구성 요소를 문서화하고 있어 다른 앱이 HTTP로 호출할 수 있습니다. [OpenAI Edge TTS](/ko/power-local-llm/openai-edge-tts-review)는 이를 중심으로 만들어졌습니다.',
          '**언어.** Bark는 13개 언어, XTTS-v2는 17개 언어를 문서화하고 있습니다. 다른 도구는 비교 가능한 수치를 명시하지 않으므로 표에는 숫자 대신 대시가 표시됩니다.',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: '음성 인식: 무엇이 다른가',
        items: [
          '**실시간 받아쓰기.** [whisper.cpp](/ko/power-local-llm/whisper-cpp-review)는 실시간 스트리밍 예제를 문서화하고 있으며, Izwi와 Willow Inference Server는 실시간 사용을 문서화하고 있습니다. [faster-whisper](/ko/power-local-llm/faster-whisper-review)는 받아쓰기 라이브러리이며, 자체 README에는 실시간 모드가 문서화되어 있지 않습니다.',
          '**화자 구분.** Izwi와 FunClip은 화자 구분을 문서화하고 있습니다. [Meetily](/ko/power-local-llm/meetily-review)는 유료 Pro 플랜에서만 화자 분리(diarization)를 제공합니다. whisper.cpp의 화자 전환 표시는 실험적이며 표가 아니라 해당 리뷰에서 다룹니다.',
          '**가격과 플랫폼.** [MacWhisper](/ko/power-local-llm/macwhisper-review)는 무료 플랜과 유료 업그레이드가 있는 독점 macOS 앱이며, 여기 있는 대부분의 다른 도구는 무료 오픈소스입니다. Meetily의 커뮤니티 에디션은 무료이며 MIT 라이선스이고, 유료 Pro 플랜이 있습니다.',
          '**로컬 API 서버.** whisper.cpp는 서버를 제공하며, Izwi와 Willow Inference Server는 HTTP API를 문서화하고 있습니다.',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: '음성 에이전트: 무엇이 다른가',
        items: [
          '**완전 로컬과 선택적 클라우드.** [Jarvis](/ko/power-local-llm/jarvis-mac-review)는 로컬 음성 입력, LLM, 음성 출력 스택을 문서화하고 있으며, [Parlor](/ko/power-local-llm/parlor-review)는 선택적 클라우드 조사 기능이 있는 로컬 파이프라인을 문서화하고 있습니다. [Voxa](/ko/power-local-llm/voxa-review)는 로컬 음성 제공자 또는 클라우드 제공자를 사용할 수 있으므로, 로컬 제공자를 선택한 경우에만 완전 로컬입니다.',
          '**끼어들기(barge-in).** Jarvis, Parlor, Voxa는 에이전트가 말하는 도중에 끼어들 수 있다고 문서화하고 있습니다.',
          '**자체 LLM 연결과 전화 통화.** [Dograh](/ko/power-local-llm/dograh-review)는 LLM 선택과 전화 연동을 문서화하고 있으며, [Voxa](/ko/power-local-llm/voxa-review)는 로컬 데몬을 통해 자체 모델을 연결하는 방법을 문서화하고 있습니다.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '이 비교로 알 수 없는 것',
        items: [
          '이 비교는 품질이 아니라 문서화된 기능을 비교합니다. 음성이 얼마나 자연스러운지, 받아쓰기가 얼마나 정확한지는 알려 주지 않으며, 이는 직접 준비한 오디오와 하드웨어로 확인해야 합니다.',
          '속도 벤치마크는 포함하지 않습니다. PromptQuorum은 이 도구들에 대해 속도를 측정하지 않았습니다.',
          '대시는 프로젝트 문서의 공백이며 부정적인 결과가 아닙니다. 일부 도구는 README에 언급되지 않은 기능을 지원할 수도 있습니다.',
          '도구는 빠르게 변합니다. 각 도구의 리뷰에는 확인한 버전이 명시되어 있으며, 이 가이드는 리뷰가 갱신될 때 함께 갱신됩니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '음성 합성, 음성 인식, 음성 에이전트를 왜 따로 비교합니까?',
            a: '이들은 서로 다른 작업을 하므로 대부분의 속성은 한 작업 안에서만 의미가 있습니다. 음성 복제는 음성 합성에, 화자 구분은 받아쓰기에, 끼어들기는 음성 에이전트에 해당합니다. 하나의 표에서 비교하면 대부분의 칸이 비거나 무의미해집니다.',
          },
          {
            q: '비교표의 대시는 무슨 뜻입니까?',
            a: '프로젝트 자체 문서에 해당 속성이 명시되어 있지 않다는 뜻입니다. 기능이 없다는 뜻이 아닙니다. 도구의 리뷰나 저장소를 확인하십시오.',
          },
          {
            q: '이 도구들은 정말 로컬입니까?',
            a: '자신의 하드웨어에서 실행되도록 설계되어 있지만, 일부는 선택적 클라우드 기능을 제공하며 — 예를 들어 Parlor의 선택적 클라우드 조사나 Voxa의 클라우드 음성 제공자 — 일부는 처음 실행할 때 모델을 내려받기 위해 인터넷이 필요합니다. 각 도구의 리뷰에서 이를 다룹니다.',
          },
          {
            q: '이 도구들 중 제휴 링크가 있는 것이 있습니까?',
            a: '없습니다. PromptQuorum은 작성 시점 기준으로 이 비교에 포함된 어떤 도구와도 제휴 관계가 없으며, 여기의 어떤 링크도 수수료를 발생시키지 않습니다.',
          },
          {
            q: '이 비교는 얼마나 자주 갱신됩니까?',
            a: '표가 각 리뷰와 같은 데이터로 생성되므로, 연 2회, 그리고 나열된 도구의 리뷰가 갱신될 때마다 함께 갱신됩니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '각 도구의 공식 README 또는 웹사이트. 해당 도구의 PromptQuorum 리뷰에 나열되어 있습니다(비교표에서 연결).',
          '[PromptQuorum 로컬 AI 앱 디렉터리](/ko/directory) — 표의 각 행이 생성되는 원본 레코드.',
          '[AI 도구 라이선스 설명](/ko/power-local-llm/ai-tool-licenses-explained) — 위에 언급된 라이선스 계열의 의미.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          `[로컬 소프트웨어 디렉터리](/ko/directory) — ${TOTAL_APP_COUNT}개의 로컬 AI 앱을 둘러보고 카테고리별로 필터링하십시오.`,
          '[AI 도구 라이선스 설명](/ko/power-local-llm/ai-tool-licenses-explained) — MIT, GPL, MPL 및 맞춤 라이선스를 읽는 방법.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 음성·음성 인식 도구 비교(2026): 음성 합성, 음성 인식, 음성 에이전트',
      description:
        `로컬 음성 도구 ${VA_TOTAL}개를 나란히 비교합니다: 음성 합성, 음성 인식, 실시간 음성 에이전트를 공식 프로젝트 문서 기준으로 정리했습니다.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'ko',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 음성 도구를 고르는 개발자와 사용자' },
      about: [
        { '@type': 'Thing', name: '음성 합성' },
        { '@type': 'Thing', name: '음성 인식' },
        { '@type': 'Thing', name: '음성 에이전트' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '로컬 음성·음성 인식 도구 비교(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },
}
