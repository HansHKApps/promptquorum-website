import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Local vs Cloud Voice Assistants: Privacy, Cost & Capability (2026)',
    seoTitle: 'Local vs Cloud Voice Assistant: 2026 Privacy & Cost Guide',
    intro:
      'Local voice assistants win on privacy and cost; cloud assistants still lead on out-of-box polish and broad skills. This decision guide compares a local stack (Home Assistant Assist + Whisper + a local LLM) against cloud assistants (Alexa, Google) across privacy, cost, accuracy, skills, offline operation, and effort, and says when each wins.',
    metaDescription:
      'Local vs cloud voice assistants: privacy, cost, accuracy, skills, offline, and effort compared. When a local stack wins and when cloud still leads.',
    twitterDescription:
      'Local vs cloud voice assistants: local wins on privacy and cost, cloud leads on polish and skills. When each one wins in 2026.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'People deciding between local and cloud voice control',
    primaryTerm: 'local vs cloud voice assistant',
    targetKeywords: [
      'local vs cloud voice assistant',
      'private voice assistant vs alexa',
      'home assistant voice vs alexa',
      'offline voice assistant comparison',
      'replace alexa privacy',
    ],
    leadAnswerBlock:
      '**A local voice assistant wins on privacy, cost, and offline operation; a cloud assistant like Alexa or Google still wins on out-of-box polish and the breadth of third-party skills.** Choose local for privacy and control, cloud for zero-effort convenience.',
    quickAnswerTop: {
      en: {
        question: 'Should I use a local or cloud voice assistant?',
        answer:
          'Use a local voice assistant (Home Assistant Assist + Whisper + Piper + a local LLM) if you want privacy, no subscriptions, and offline operation. Use a cloud assistant like Alexa or Google if you want the easiest setup and the widest third-party skills, and accept that your voice data is processed in the cloud.',
        bullets: [
          'Local: private, no fees, works offline, more setup',
          'Cloud: easiest, widest skills, polished, but cloud-processed',
          'Local accuracy depends on your Whisper model and hardware',
          'Cloud leads on broad third-party skills and zero setup',
          'Choose by privacy/control vs convenience',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Two Approaches', anchor: 'two-approaches' },
      { label: 'The Comparison', anchor: 'comparison' },
      { label: 'The Case for Local', anchor: 'case-local' },
      { label: 'Where Cloud Still Wins', anchor: 'cloud-wins' },
      { label: 'Recommendation', anchor: 'recommendation' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Local voice assistants win on privacy, cost, and offline operation; cloud assistants win on out-of-box polish and the breadth of third-party skills.' },
      { type: 'plain-terms', content: 'A cloud voice assistant like Alexa is easy and feature-rich but sends your voice to a company server. A local voice assistant runs on your own hardware, so it is private and works offline, but you set it up yourself and it has fewer third-party "skills".' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Local (Assist + Whisper + Piper + a local LLM): private, no fees, offline, more setup',
          'Cloud (Alexa, Google): easiest, widest third-party skills, polished, cloud-processed',
          'Local accuracy depends on your Whisper model size and microphone',
          'Cloud leads on zero setup and broad skills; local leads on privacy and cost',
          'A GPU-equipped mini PC narrows the latency gap for local',
          'Choose local for privacy and control, cloud for convenience',
        ],
      },
      twoApproaches: {
        id: 'two-approaches',
        title: 'The Two Approaches',
        content:
          '**A local assistant runs speech, understanding, and responses on your hardware; a cloud assistant runs them on a vendor server.** That single difference drives the trade-offs.',
        items: [
          '**Local:** Home Assistant Assist + Whisper (STT) + Piper (TTS) + an optional local LLM — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          '**Cloud:** Alexa or Google process your voice on their servers.',
          'The choice mirrors the broader local-vs-cloud decision — see [why local beats cloud](/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'The Comparison',
        content:
          '**Local wins privacy, cost, and offline; cloud wins skills and effort.** Use the table to match your priority.',
        columns: ['Criterion', 'Local (Assist + Whisper + LLM)', 'Cloud (Alexa / Google)'],
        rows: [
          { 'Criterion': 'Privacy', 'Local (Assist + Whisper + LLM)': 'On-device, private', 'Cloud (Alexa / Google)': 'Voice processed in cloud' },
          { 'Criterion': 'Cost', 'Local (Assist + Whisper + LLM)': 'One-time hardware', 'Cloud (Alexa / Google)': 'Cheap hardware, possible fees' },
          { 'Criterion': 'Accuracy', 'Local (Assist + Whisper + LLM)': 'Depends on model/hardware', 'Cloud (Alexa / Google)': 'Polished, consistent' },
          { 'Criterion': 'Skills', 'Local (Assist + Whisper + LLM)': 'Home control focus', 'Cloud (Alexa / Google)': 'Broad third-party skills' },
          { 'Criterion': 'Offline', 'Local (Assist + Whisper + LLM)': 'Works offline', 'Cloud (Alexa / Google)': 'Needs internet' },
          { 'Criterion': 'Effort', 'Local (Assist + Whisper + LLM)': 'Higher setup', 'Cloud (Alexa / Google)': 'Plug-and-play' },
        ],
      },
      caseLocal: {
        id: 'case-local',
        title: 'The Privacy and Cost Case for Local',
        content:
          '**Local voice keeps recordings on your hardware and avoids subscriptions, which is the strongest reason to choose it.** It also works during internet outages.',
        items: [
          'No voice recordings sent to a vendor — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          'No subscription; you pay one-time hardware.',
          'Add a local LLM for natural-language understanding — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      cloudWins: {
        id: 'cloud-wins',
        title: 'Where Cloud Still Wins',
        content:
          '**Cloud assistants still win on zero-effort setup, consistent accuracy, and the breadth of third-party skills.** If you want shopping, broad app integrations, and no configuration, cloud leads.',
        items: [
          'Out-of-box setup with no hardware to manage.',
          'Wide third-party skill ecosystems beyond home control.',
          'Consistent recognition without tuning a model or microphone.',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recommendation',
        content:
          '**Choose local if privacy, cost, or offline operation matter; choose cloud if you want zero setup and the widest skills.** If unsure and you value privacy, start local with a mini PC.',
        items: [
          '**Privacy / offline / no fees:** local stack.',
          '**Zero setup / broadest skills:** Alexa or Google.',
          '**Unsure but privacy-leaning:** start local on a GPU-equipped mini PC — see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Is local voice as good as cloud now?', a: 'For home control and natural-language commands, a local stack with a good Whisper model and a local LLM is highly capable. Cloud assistants still lead on consistent accuracy out of the box and on broad third-party skills beyond home control.' },
          { q: 'Is a local voice assistant fully offline?', a: 'Yes. Speech-to-text, text-to-speech, intent handling, and an optional local LLM all run on your hardware, so a local voice assistant works with no internet. Only remote access from outside the home needs connectivity.' },
          { q: 'What is the cost difference?', a: 'Local voice has a one-time hardware cost and no subscription, while cloud assistants have cheap hardware but may attach fees to premium features. Over time, local is typically cheaper and keeps your voice data private.' },
          { q: 'How much setup effort does local voice take?', a: 'More than a cloud assistant: you install Home Assistant, add Whisper and Piper, connect them over Wyoming, and optionally add a local LLM. It is a weekend project rather than a few taps, but it is well-documented.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — how to build the local stack',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the broader local case',
          '[Local Whisper + Home Assistant](/smart-home/local-whisper-home-assistant) — local speech-to-text',
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — hardware for local voice',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local vs Cloud Voice Assistants: Privacy, Cost & Capability (2026)',
      description: 'Local vs cloud voice assistants: privacy, cost, accuracy, skills, offline, and effort compared. When a local stack wins and when cloud still leads.',
      url: 'https://www.promptquorum.com/smart-home/local-vs-cloud-voice-assistant',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Voice assistant' }, { '@type': 'Thing', name: 'Local AI' }, { '@type': 'Thing', name: 'Privacy' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is local voice as good as cloud now?', acceptedAnswer: { '@type': 'Answer', text: 'For home control, a local stack with a good Whisper model and a local LLM is highly capable. Cloud still leads on consistent out-of-box accuracy and broad third-party skills.' } },
        { '@type': 'Question', name: 'Is a local voice assistant fully offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. STT, TTS, intent handling, and an optional local LLM all run on your hardware, so it works with no internet. Only remote access needs connectivity.' } },
        { '@type': 'Question', name: 'What is the cost difference?', acceptedAnswer: { '@type': 'Answer', text: 'Local has a one-time hardware cost and no subscription; cloud has cheap hardware but may attach fees to premium features. Over time local is typically cheaper and private.' } },
        { '@type': 'Question', name: 'How much setup effort does local voice take?', acceptedAnswer: { '@type': 'Answer', text: 'More than cloud: install Home Assistant, add Whisper and Piper over Wyoming, and optionally a local LLM. A weekend project rather than a few taps.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Lokale vs Cloud-Sprachassistenten: Datenschutz, Kosten & Fähigkeit (2026)',
    seoTitle: 'Lokaler vs Cloud-Sprachassistent: Datenschutz 2026',
    intro:
      'Lokale Sprachassistenten gewinnen bei Datenschutz und Kosten; Cloud-Assistenten führen weiterhin bei Out-of-Box-Politur und breiten Skills. Dieser Entscheidungs-Leitfaden vergleicht einen lokalen Stack (Home Assistant Assist + Whisper + ein lokales LLM) mit Cloud-Assistenten (Alexa, Google) über Datenschutz, Kosten, Genauigkeit, Skills, Offline-Betrieb und Aufwand und sagt, wann jeder gewinnt.',
    metaDescription:
      'Lokale vs Cloud-Sprachassistenten 2026: Datenschutz, Kosten, Genauigkeit, Skills und Offline verglichen. Wann der lokale Stack gewinnt — wann die Cloud führt.',
    twitterDescription:
      'Lokale vs Cloud-Sprachassistenten: Lokal gewinnt bei Datenschutz und Kosten, Cloud führt bei Politur und Skills. Wann jeder 2026 gewinnt.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Menschen, die zwischen lokaler und Cloud-Sprachsteuerung entscheiden',
    primaryTerm: 'local vs cloud voice assistant',
    targetKeywords: [
      'lokaler vs cloud sprachassistent',
      'privater sprachassistent vs alexa',
      'home assistant sprache vs alexa',
      'offline sprachassistent vergleich',
      'alexa ersetzen datenschutz',
    ],
    leadAnswerBlock:
      '**Ein lokaler Sprachassistent gewinnt bei Datenschutz, Kosten und Offline-Betrieb; ein Cloud-Assistent wie Alexa oder Google gewinnt weiterhin bei Out-of-Box-Politur und der Breite an Drittanbieter-Skills.** Wählen Sie lokal für Datenschutz und Kontrolle, Cloud für aufwandslosen Komfort.',
    quickAnswerTop: {
      de: {
        question: 'Soll ich einen lokalen oder Cloud-Sprachassistenten nutzen?',
        answer:
          'Nutzen Sie einen lokalen Sprachassistenten (Home Assistant Assist + Whisper + Piper + ein lokales LLM), wenn Sie Datenschutz, keine Abonnements und Offline-Betrieb wollen. Nutzen Sie einen Cloud-Assistenten wie Alexa oder Google, wenn Sie die einfachste Einrichtung und die breitesten Drittanbieter-Skills wollen, und akzeptieren Sie, dass Ihre Sprachdaten in der Cloud verarbeitet werden.',
        bullets: [
          'Lokal: privat, keine Gebühren, funktioniert offline, mehr Einrichtung',
          'Cloud: am einfachsten, breiteste Skills, poliert, aber cloud-verarbeitet',
          'Lokale Genauigkeit hängt von Ihrem Whisper-Modell und der Hardware ab',
          'Cloud führt bei breiten Drittanbieter-Skills und null Einrichtung',
          'Wählen Sie nach Datenschutz/Kontrolle vs Komfort',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Die zwei Ansätze', anchor: 'two-approaches' },
      { label: 'Der Vergleich', anchor: 'comparison' },
      { label: 'Das Argument für lokal', anchor: 'case-local' },
      { label: 'Wo die Cloud noch gewinnt', anchor: 'cloud-wins' },
      { label: 'Empfehlung', anchor: 'recommendation' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Lokale Sprachassistenten gewinnen bei Datenschutz, Kosten und Offline-Betrieb; Cloud-Assistenten gewinnen bei Out-of-Box-Politur und der Breite an Drittanbieter-Skills.' },
      { type: 'plain-terms', content: 'Ein Cloud-Sprachassistent wie Alexa ist einfach und funktionsreich, sendet Ihre Stimme aber an einen Firmen-Server. Ein lokaler Sprachassistent läuft auf Ihrer eigenen Hardware, ist also privat und funktioniert offline, doch Sie richten ihn selbst ein und er hat weniger Drittanbieter-„Skills".' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Lokal (Assist + Whisper + Piper + ein lokales LLM): privat, keine Gebühren, offline, mehr Einrichtung',
          'Cloud (Alexa, Google): am einfachsten, breiteste Drittanbieter-Skills, poliert, cloud-verarbeitet',
          'Lokale Genauigkeit hängt von Ihrer Whisper-Modellgröße und dem Mikrofon ab',
          'Cloud führt bei null Einrichtung und breiten Skills; lokal führt bei Datenschutz und Kosten',
          'Ein Mini-PC mit GPU verringert die Latenzlücke für lokal',
          'Wählen Sie lokal für Datenschutz und Kontrolle, Cloud für Komfort',
        ],
      },
      twoApproaches: {
        id: 'two-approaches',
        title: 'Die zwei Ansätze',
        content:
          '**Ein lokaler Assistent führt Sprache, Verständnis und Antworten auf Ihrer Hardware aus; ein Cloud-Assistent auf einem Hersteller-Server.** Dieser eine Unterschied treibt die Kompromisse.',
        items: [
          '**Lokal:** Home Assistant Assist + Whisper (STT) + Piper (TTS) + ein optionales lokales LLM – siehe [einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home).',
          '**Cloud:** Alexa oder Google verarbeiten Ihre Stimme auf ihren Servern.',
          'Die Wahl spiegelt die größere Lokal-vs-Cloud-Entscheidung – siehe [warum lokal die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Der Vergleich',
        content:
          '**Lokal gewinnt Datenschutz, Kosten und Offline; Cloud gewinnt Skills und Aufwand.** Nutzen Sie die Tabelle, um Ihre Priorität zuzuordnen.',
        columns: ['Kriterium', 'Lokal (Assist + Whisper + LLM)', 'Cloud (Alexa / Google)'],
        rows: [
          { 'Kriterium': 'Datenschutz', 'Lokal (Assist + Whisper + LLM)': 'Auf dem Gerät, privat', 'Cloud (Alexa / Google)': 'Stimme in der Cloud verarbeitet' },
          { 'Kriterium': 'Kosten', 'Lokal (Assist + Whisper + LLM)': 'Einmalige Hardware', 'Cloud (Alexa / Google)': 'Günstige Hardware, mögliche Gebühren' },
          { 'Kriterium': 'Genauigkeit', 'Lokal (Assist + Whisper + LLM)': 'Hängt von Modell/Hardware ab', 'Cloud (Alexa / Google)': 'Poliert, konsistent' },
          { 'Kriterium': 'Skills', 'Lokal (Assist + Whisper + LLM)': 'Fokus auf Heimsteuerung', 'Cloud (Alexa / Google)': 'Breite Drittanbieter-Skills' },
          { 'Kriterium': 'Offline', 'Lokal (Assist + Whisper + LLM)': 'Funktioniert offline', 'Cloud (Alexa / Google)': 'Braucht Internet' },
          { 'Kriterium': 'Aufwand', 'Lokal (Assist + Whisper + LLM)': 'Höhere Einrichtung', 'Cloud (Alexa / Google)': 'Plug-and-Play' },
        ],
      },
      caseLocal: {
        id: 'case-local',
        title: 'Das Datenschutz- und Kostenargument für lokal',
        content:
          '**Lokale Sprache hält Aufnahmen auf Ihrer Hardware und vermeidet Abonnements, was der stärkste Grund ist, sie zu wählen.** Sie funktioniert auch bei Internetausfällen.',
        items: [
          'Keine Sprachaufnahmen an einen Hersteller gesendet – siehe [Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks).',
          'Kein Abonnement; Sie zahlen einmalige Hardware.',
          'Fügen Sie ein lokales LLM für natürlichsprachliches Verstehen hinzu – siehe [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      cloudWins: {
        id: 'cloud-wins',
        title: 'Wo die Cloud noch gewinnt',
        content:
          '**Cloud-Assistenten gewinnen weiterhin bei aufwandsloser Einrichtung, konsistenter Genauigkeit und der Breite an Drittanbieter-Skills.** Wenn Sie Shopping, breite App-Integrationen und keine Konfiguration wollen, führt die Cloud.',
        items: [
          'Out-of-Box-Einrichtung ohne zu verwaltende Hardware.',
          'Breite Drittanbieter-Skill-Ökosysteme über die Heimsteuerung hinaus.',
          'Konsistente Erkennung ohne Abstimmung eines Modells oder Mikrofons.',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Empfehlung',
        content:
          '**Wählen Sie lokal, wenn Datenschutz, Kosten oder Offline-Betrieb zählen; wählen Sie Cloud, wenn Sie null Einrichtung und die breitesten Skills wollen.** Wenn unsicher und Sie Datenschutz schätzen, starten Sie lokal mit einem Mini-PC.',
        items: [
          '**Datenschutz / offline / keine Gebühren:** lokaler Stack.',
          '**Null Einrichtung / breiteste Skills:** Alexa oder Google.',
          '**Unsicher, aber datenschutzorientiert:** lokal auf einem Mini-PC mit GPU starten – siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Ist lokale Sprache inzwischen so gut wie Cloud?', a: 'Für Heimsteuerung und natürlichsprachliche Befehle ist ein lokaler Stack mit einem guten Whisper-Modell und einem lokalen LLM sehr leistungsfähig. Cloud-Assistenten führen weiterhin bei konsistenter Out-of-Box-Genauigkeit und bei breiten Drittanbieter-Skills über die Heimsteuerung hinaus.' },
          { q: 'Ist ein lokaler Sprachassistent vollständig offline?', a: 'Ja. Sprache-zu-Text, Text-zu-Sprache, die Intent-Verarbeitung und ein optionales lokales LLM laufen alle auf Ihrer Hardware, sodass ein lokaler Sprachassistent ohne Internet funktioniert. Nur der Fernzugriff von außerhalb des Hauses benötigt Konnektivität.' },
          { q: 'Was ist der Kostenunterschied?', a: 'Lokale Sprache hat einmalige Hardwarekosten und kein Abonnement, während Cloud-Assistenten günstige Hardware haben, aber Gebühren an Premium-Funktionen knüpfen können. Mit der Zeit ist lokal in der Regel günstiger und hält Ihre Sprachdaten privat.' },
          { q: 'Wie viel Einrichtungsaufwand braucht lokale Sprache?', a: 'Mehr als ein Cloud-Assistent: Sie installieren Home Assistant, fügen Whisper und Piper hinzu, verbinden sie über Wyoming und fügen optional ein lokales LLM hinzu. Es ist eher ein Wochenend-Projekt als ein paar Taps, aber gut dokumentiert.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home) – wie man den lokalen Stack baut',
          '[Warum ein lokales Smart Home die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud) – das breitere lokale Argument',
          '[Lokales Whisper + Home Assistant](/de/smart-home/local-whisper-home-assistant) – lokales Sprache-zu-Text',
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) – Hardware für lokale Sprache',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale vs Cloud-Sprachassistenten: Datenschutz, Kosten & Fähigkeit (2026)',
      description: 'Lokale vs Cloud-Sprachassistenten 2026: Datenschutz, Kosten, Genauigkeit, Skills und Offline verglichen. Wann der lokale Stack gewinnt — wann die Cloud führt.',
      url: 'https://www.promptquorum.com/de/smart-home/local-vs-cloud-voice-assistant',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Sprachassistent' }, { '@type': 'Thing', name: 'Lokale KI' }, { '@type': 'Thing', name: 'Datenschutz' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist lokale Sprache inzwischen so gut wie Cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Für Heimsteuerung ist ein lokaler Stack mit gutem Whisper-Modell und lokalem LLM sehr leistungsfähig. Cloud führt weiterhin bei konsistenter Out-of-Box-Genauigkeit und breiten Drittanbieter-Skills.' } },
        { '@type': 'Question', name: 'Ist ein lokaler Sprachassistent vollständig offline?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. STT, TTS, Intent-Verarbeitung und ein optionales lokales LLM laufen alle auf Ihrer Hardware, sodass er ohne Internet funktioniert. Nur Fernzugriff benötigt Konnektivität.' } },
        { '@type': 'Question', name: 'Was ist der Kostenunterschied?', acceptedAnswer: { '@type': 'Answer', text: 'Lokal hat einmalige Hardwarekosten und kein Abonnement; Cloud hat günstige Hardware, kann aber Gebühren an Premium-Funktionen knüpfen. Mit der Zeit ist lokal meist günstiger und privat.' } },
        { '@type': 'Question', name: 'Wie viel Einrichtungsaufwand braucht lokale Sprache?', acceptedAnswer: { '@type': 'Answer', text: 'Mehr als Cloud: Home Assistant installieren, Whisper und Piper über Wyoming hinzufügen und optional ein lokales LLM. Eher ein Wochenend-Projekt als ein paar Taps.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Asistentes de Voz Local vs Nube: Privacidad, Coste y Capacidad (2026)',
    seoTitle: 'Asistente de Voz Local vs Nube: Guía de Privacidad 2026',
    intro:
      'Los asistentes de voz locales ganan en privacidad y coste; los asistentes en la nube siguen liderando en pulido de fábrica y amplitud de skills. Esta guía de decisión compara un stack local (Home Assistant Assist + Whisper + un LLM local) frente a los asistentes en la nube (Alexa, Google) en privacidad, coste, precisión, skills, operación sin conexión y esfuerzo, y dice cuándo gana cada uno.',
    metaDescription:
      'Asistentes de voz local vs nube 2026: privacidad, coste, precisión, skills y offline comparados. Cuándo gana el stack local y cuándo sigue liderando la nube.',
    twitterDescription:
      'Asistentes de voz local vs nube: local gana en privacidad y coste, la nube lidera en pulido y skills. Cuándo gana cada uno en 2026.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Personas que deciden entre control de voz local y en la nube',
    primaryTerm: 'local vs cloud voice assistant',
    targetKeywords: [
      'asistente de voz local vs nube',
      'asistente de voz privado vs alexa',
      'home assistant voz vs alexa',
      'comparación asistente de voz offline',
      'reemplazar alexa privacidad',
    ],
    leadAnswerBlock:
      '**Un asistente de voz local gana en privacidad, coste y operación sin conexión; un asistente en la nube como Alexa o Google sigue ganando en pulido de fábrica y en la amplitud de skills de terceros.** Elige local por privacidad y control, la nube por comodidad sin esfuerzo.',
    quickAnswerTop: {
      es: {
        question: '¿Debería usar un asistente de voz local o en la nube?',
        answer:
          'Usa un asistente de voz local (Home Assistant Assist + Whisper + Piper + un LLM local) si quieres privacidad, sin suscripciones y operación sin conexión. Usa un asistente en la nube como Alexa o Google si quieres la configuración más fácil y las skills de terceros más amplias, y aceptas que tus datos de voz se procesan en la nube.',
        bullets: [
          'Local: privado, sin cuotas, funciona sin conexión, más configuración',
          'Nube: la más fácil, skills más amplias, pulida, pero procesada en la nube',
          'La precisión local depende de tu modelo Whisper y hardware',
          'La nube lidera en skills de terceros amplias y cero configuración',
          'Elige por privacidad/control vs comodidad',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Los dos enfoques', anchor: 'two-approaches' },
      { label: 'La comparación', anchor: 'comparison' },
      { label: 'El argumento para local', anchor: 'case-local' },
      { label: 'Dónde sigue ganando la nube', anchor: 'cloud-wins' },
      { label: 'Recomendación', anchor: 'recommendation' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Los asistentes de voz locales ganan en privacidad, coste y operación sin conexión; los asistentes en la nube ganan en pulido de fábrica y amplitud de skills de terceros.' },
      { type: 'plain-terms', content: 'Un asistente de voz en la nube como Alexa es fácil y rico en funciones pero envía tu voz a un servidor de empresa. Un asistente de voz local corre en tu propio hardware, así que es privado y funciona sin conexión, pero lo configuras tú y tiene menos "skills" de terceros.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Local (Assist + Whisper + Piper + un LLM local): privado, sin cuotas, sin conexión, más configuración',
          'Nube (Alexa, Google): la más fácil, skills de terceros más amplias, pulida, procesada en la nube',
          'La precisión local depende del tamaño de tu modelo Whisper y el micrófono',
          'La nube lidera en cero configuración y skills amplias; local lidera en privacidad y coste',
          'Un mini PC con GPU reduce la brecha de latencia para local',
          'Elige local por privacidad y control, la nube por comodidad',
        ],
      },
      twoApproaches: {
        id: 'two-approaches',
        title: 'Los dos enfoques',
        content:
          '**Un asistente local ejecuta voz, comprensión y respuestas en tu hardware; uno en la nube las ejecuta en un servidor del fabricante.** Esa única diferencia impulsa los compromisos.',
        items: [
          '**Local:** Home Assistant Assist + Whisper (STT) + Piper (TTS) + un LLM local opcional — consulta [montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home).',
          '**Nube:** Alexa o Google procesan tu voz en sus servidores.',
          'La elección refleja la decisión más amplia local-vs-nube — consulta [por qué local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'La comparación',
        content:
          '**Local gana privacidad, coste y sin conexión; la nube gana skills y esfuerzo.** Usa la tabla para asignar tu prioridad.',
        columns: ['Criterio', 'Local (Assist + Whisper + LLM)', 'Nube (Alexa / Google)'],
        rows: [
          { 'Criterio': 'Privacidad', 'Local (Assist + Whisper + LLM)': 'En el dispositivo, privada', 'Nube (Alexa / Google)': 'Voz procesada en la nube' },
          { 'Criterio': 'Coste', 'Local (Assist + Whisper + LLM)': 'Hardware único', 'Nube (Alexa / Google)': 'Hardware barato, posibles cuotas' },
          { 'Criterio': 'Precisión', 'Local (Assist + Whisper + LLM)': 'Depende del modelo/hardware', 'Nube (Alexa / Google)': 'Pulida, consistente' },
          { 'Criterio': 'Skills', 'Local (Assist + Whisper + LLM)': 'Enfoque en control del hogar', 'Nube (Alexa / Google)': 'Skills de terceros amplias' },
          { 'Criterio': 'Sin conexión', 'Local (Assist + Whisper + LLM)': 'Funciona sin conexión', 'Nube (Alexa / Google)': 'Necesita internet' },
          { 'Criterio': 'Esfuerzo', 'Local (Assist + Whisper + LLM)': 'Mayor configuración', 'Nube (Alexa / Google)': 'Plug-and-play' },
        ],
      },
      caseLocal: {
        id: 'case-local',
        title: 'El argumento de privacidad y coste para local',
        content:
          '**La voz local mantiene las grabaciones en tu hardware y evita suscripciones, lo que es la razón más fuerte para elegirla.** También funciona durante caídas de internet.',
        items: [
          'No se envían grabaciones de voz a un fabricante — consulta [riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks).',
          'Sin suscripción; pagas hardware una vez.',
          'Añade un LLM local para la comprensión en lenguaje natural — consulta [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      cloudWins: {
        id: 'cloud-wins',
        title: 'Dónde sigue ganando la nube',
        content:
          '**Los asistentes en la nube siguen ganando en configuración sin esfuerzo, precisión consistente y amplitud de skills de terceros.** Si quieres compras, integraciones de apps amplias y nada de configuración, la nube lidera.',
        items: [
          'Configuración de fábrica sin hardware que gestionar.',
          'Ecosistemas de skills de terceros amplios más allá del control del hogar.',
          'Reconocimiento consistente sin ajustar un modelo o micrófono.',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recomendación',
        content:
          '**Elige local si la privacidad, el coste o la operación sin conexión importan; elige la nube si quieres cero configuración y las skills más amplias.** Si dudas y valoras la privacidad, empieza local con un mini PC.',
        items: [
          '**Privacidad / sin conexión / sin cuotas:** stack local.',
          '**Cero configuración / skills más amplias:** Alexa o Google.',
          '**Indeciso pero con tendencia a la privacidad:** empieza local en un mini PC con GPU — consulta [mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es la voz local tan buena como la nube ahora?', a: 'Para el control del hogar y comandos en lenguaje natural, un stack local con un buen modelo Whisper y un LLM local es muy capaz. Los asistentes en la nube siguen liderando en precisión consistente de fábrica y en skills de terceros amplias más allá del control del hogar.' },
          { q: '¿Es un asistente de voz local totalmente sin conexión?', a: 'Sí. Voz-a-texto, texto-a-voz, el manejo de intenciones y un LLM local opcional corren todos en tu hardware, así que un asistente de voz local funciona sin internet. Solo el acceso remoto desde fuera del hogar necesita conectividad.' },
          { q: '¿Cuál es la diferencia de coste?', a: 'La voz local tiene un coste de hardware único y sin suscripción, mientras que los asistentes en la nube tienen hardware barato pero pueden atar cuotas a funciones premium. Con el tiempo, local suele ser más barato y mantiene tus datos de voz privados.' },
          { q: '¿Cuánto esfuerzo de configuración requiere la voz local?', a: 'Más que un asistente en la nube: instalas Home Assistant, añades Whisper y Piper, los conectas sobre Wyoming y opcionalmente añades un LLM local. Es un proyecto de fin de semana en vez de unos toques, pero está bien documentado.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home) — cómo construir el stack local',
          '[Por qué un smart home local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud) — el argumento local más amplio',
          '[Whisper local + Home Assistant](/es/smart-home/local-whisper-home-assistant) — voz-a-texto local',
          '[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — hardware para voz local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Asistentes de Voz Local vs Nube: Privacidad, Coste y Capacidad (2026)',
      description: 'Asistentes de voz local vs nube 2026: privacidad, coste, precisión, skills y offline comparados. Cuándo gana el stack local y cuándo sigue liderando la nube.',
      url: 'https://www.promptquorum.com/es/smart-home/local-vs-cloud-voice-assistant',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Asistente de voz' }, { '@type': 'Thing', name: 'IA local' }, { '@type': 'Thing', name: 'Privacidad' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Es la voz local tan buena como la nube ahora?', acceptedAnswer: { '@type': 'Answer', text: 'Para el control del hogar, un stack local con un buen modelo Whisper y un LLM local es muy capaz. La nube sigue liderando en precisión consistente de fábrica y skills de terceros amplias.' } },
        { '@type': 'Question', name: '¿Es un asistente de voz local totalmente sin conexión?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Voz-a-texto, texto-a-voz, el manejo de intenciones y un LLM local opcional corren todos en tu hardware, así que funciona sin internet. Solo el acceso remoto necesita conectividad.' } },
        { '@type': 'Question', name: '¿Cuál es la diferencia de coste?', acceptedAnswer: { '@type': 'Answer', text: 'Local tiene un coste de hardware único y sin suscripción; la nube tiene hardware barato pero puede atar cuotas a funciones premium. Con el tiempo local suele ser más barato y privado.' } },
        { '@type': 'Question', name: '¿Cuánto esfuerzo de configuración requiere la voz local?', acceptedAnswer: { '@type': 'Answer', text: 'Más que la nube: instalas Home Assistant, añades Whisper y Piper sobre Wyoming y opcionalmente un LLM local. Un proyecto de fin de semana en vez de unos toques.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Assistants Vocaux Local vs Cloud : Confidentialité, Coût et Capacité (2026)',
    seoTitle: 'Assistant Vocal Local vs Cloud : Guide Confidentialité 2026',
    intro:
      'Les assistants vocaux locaux gagnent sur la confidentialité et le coût ; les assistants cloud mènent encore sur la finition prête à l\'emploi et l\'étendue des skills. Ce guide de décision compare une pile locale (Home Assistant Assist + Whisper + un LLM local) aux assistants cloud (Alexa, Google) sur la confidentialité, le coût, la précision, les skills, le fonctionnement hors ligne et l\'effort, et dit quand chacun gagne.',
    metaDescription:
      'Assistants vocaux local vs cloud 2026 : confidentialité, coût, précision, skills et hors ligne comparés. Quand la pile locale gagne, quand le cloud mène encore.',
    twitterDescription:
      'Assistants vocaux local vs cloud : le local gagne sur la confidentialité et le coût, le cloud mène sur la finition et les skills. Quand chacun gagne en 2026.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Personnes choisissant entre contrôle vocal local et cloud',
    primaryTerm: 'local vs cloud voice assistant',
    targetKeywords: [
      'assistant vocal local vs cloud',
      'assistant vocal privé vs alexa',
      'home assistant voix vs alexa',
      'comparaison assistant vocal hors ligne',
      'remplacer alexa confidentialité',
    ],
    leadAnswerBlock:
      '**Un assistant vocal local gagne sur la confidentialité, le coût et le fonctionnement hors ligne ; un assistant cloud comme Alexa ou Google gagne encore sur la finition prête à l\'emploi et l\'étendue des skills tierces.** Choisissez le local pour la confidentialité et le contrôle, le cloud pour la commodité sans effort.',
    quickAnswerTop: {
      fr: {
        question: 'Dois-je utiliser un assistant vocal local ou cloud ?',
        answer:
          'Utilisez un assistant vocal local (Home Assistant Assist + Whisper + Piper + un LLM local) si vous voulez la confidentialité, aucun abonnement et le fonctionnement hors ligne. Utilisez un assistant cloud comme Alexa ou Google si vous voulez la configuration la plus facile et les skills tierces les plus larges, et acceptez que vos données vocales soient traitées dans le cloud.',
        bullets: [
          'Local : privé, sans frais, fonctionne hors ligne, plus de configuration',
          'Cloud : le plus facile, skills les plus larges, abouti, mais traité dans le cloud',
          'La précision locale dépend de votre modèle Whisper et de votre matériel',
          'Le cloud mène sur les skills tierces larges et zéro configuration',
          'Choisissez par confidentialité/contrôle vs commodité',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Les deux approches', anchor: 'two-approaches' },
      { label: 'La comparaison', anchor: 'comparison' },
      { label: 'Les arguments pour le local', anchor: 'case-local' },
      { label: 'Où le cloud gagne encore', anchor: 'cloud-wins' },
      { label: 'Recommandation', anchor: 'recommendation' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Les assistants vocaux locaux gagnent sur la confidentialité, le coût et le fonctionnement hors ligne ; les assistants cloud gagnent sur la finition prête à l\'emploi et l\'étendue des skills tierces.' },
      { type: 'plain-terms', content: 'Un assistant vocal cloud comme Alexa est facile et riche en fonctions mais envoie votre voix à un serveur d\'entreprise. Un assistant vocal local tourne sur votre propre matériel, il est donc privé et fonctionne hors ligne, mais vous le configurez vous-même et il a moins de « skills » tierces.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Local (Assist + Whisper + Piper + un LLM local) : privé, sans frais, hors ligne, plus de configuration',
          'Cloud (Alexa, Google) : le plus facile, skills tierces les plus larges, abouti, traité dans le cloud',
          'La précision locale dépend de la taille de votre modèle Whisper et du micro',
          'Le cloud mène sur zéro configuration et skills larges ; le local mène sur confidentialité et coût',
          'Un mini-PC équipé d\'un GPU réduit l\'écart de latence pour le local',
          'Choisissez le local pour la confidentialité et le contrôle, le cloud pour la commodité',
        ],
      },
      twoApproaches: {
        id: 'two-approaches',
        title: 'Les deux approches',
        content:
          '**Un assistant local exécute la parole, la compréhension et les réponses sur votre matériel ; un assistant cloud les exécute sur un serveur du fabricant.** Cette seule différence détermine les compromis.',
        items: [
          '**Local :** Home Assistant Assist + Whisper (STT) + Piper (TTS) + un LLM local optionnel — voir [construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home).',
          '**Cloud :** Alexa ou Google traitent votre voix sur leurs serveurs.',
          'Le choix reflète la décision plus large local-vs-cloud — voir [pourquoi le local bat le cloud](/fr/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'La comparaison',
        content:
          '**Le local gagne confidentialité, coût et hors ligne ; le cloud gagne skills et effort.** Utilisez le tableau pour associer votre priorité.',
        columns: ['Critère', 'Local (Assist + Whisper + LLM)', 'Cloud (Alexa / Google)'],
        rows: [
          { 'Critère': 'Confidentialité', 'Local (Assist + Whisper + LLM)': 'Sur l\'appareil, privée', 'Cloud (Alexa / Google)': 'Voix traitée dans le cloud' },
          { 'Critère': 'Coût', 'Local (Assist + Whisper + LLM)': 'Matériel unique', 'Cloud (Alexa / Google)': 'Matériel bon marché, frais possibles' },
          { 'Critère': 'Précision', 'Local (Assist + Whisper + LLM)': 'Dépend du modèle/matériel', 'Cloud (Alexa / Google)': 'Aboutie, cohérente' },
          { 'Critère': 'Skills', 'Local (Assist + Whisper + LLM)': 'Axé contrôle de la maison', 'Cloud (Alexa / Google)': 'Skills tierces larges' },
          { 'Critère': 'Hors ligne', 'Local (Assist + Whisper + LLM)': 'Fonctionne hors ligne', 'Cloud (Alexa / Google)': 'Nécessite internet' },
          { 'Critère': 'Effort', 'Local (Assist + Whisper + LLM)': 'Configuration plus élevée', 'Cloud (Alexa / Google)': 'Prêt à l\'emploi' },
        ],
      },
      caseLocal: {
        id: 'case-local',
        title: 'Les arguments de confidentialité et de coût pour le local',
        content:
          '**La voix locale garde les enregistrements sur votre matériel et évite les abonnements, ce qui est la raison la plus forte de la choisir.** Elle fonctionne aussi pendant les coupures internet.',
        items: [
          'Aucun enregistrement vocal envoyé à un fabricant — voir [risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks).',
          'Sans abonnement ; vous payez le matériel une fois.',
          'Ajoutez un LLM local pour la compréhension du langage naturel — voir [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      cloudWins: {
        id: 'cloud-wins',
        title: 'Où le cloud gagne encore',
        content:
          '**Les assistants cloud gagnent encore sur la configuration sans effort, la précision cohérente et l\'étendue des skills tierces.** Si vous voulez le shopping, de larges intégrations d\'apps et aucune configuration, le cloud mène.',
        items: [
          'Configuration prête à l\'emploi sans matériel à gérer.',
          'Larges écosystèmes de skills tierces au-delà du contrôle de la maison.',
          'Reconnaissance cohérente sans régler un modèle ou un micro.',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recommandation',
        content:
          '**Choisissez le local si la confidentialité, le coût ou le fonctionnement hors ligne comptent ; choisissez le cloud si vous voulez zéro configuration et les skills les plus larges.** En cas de doute et si vous valorisez la confidentialité, commencez en local avec un mini-PC.',
        items: [
          '**Confidentialité / hors ligne / sans frais :** pile locale.',
          '**Zéro configuration / skills les plus larges :** Alexa ou Google.',
          '**Indécis mais penchant pour la confidentialité :** commencez en local sur un mini-PC équipé d\'un GPU — voir [meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'La voix locale est-elle aussi bonne que le cloud désormais ?', a: 'Pour le contrôle de la maison et les commandes en langage naturel, une pile locale avec un bon modèle Whisper et un LLM local est très capable. Les assistants cloud mènent encore sur la précision cohérente prête à l\'emploi et sur les skills tierces larges au-delà du contrôle de la maison.' },
          { q: 'Un assistant vocal local est-il entièrement hors ligne ?', a: 'Oui. Reconnaissance vocale, synthèse vocale, gestion des intentions et un LLM local optionnel tournent tous sur votre matériel, donc un assistant vocal local fonctionne sans internet. Seul l\'accès à distance depuis l\'extérieur nécessite une connectivité.' },
          { q: 'Quelle est la différence de coût ?', a: 'La voix locale a un coût matériel unique et sans abonnement, tandis que les assistants cloud ont un matériel bon marché mais peuvent attacher des frais aux fonctions premium. Avec le temps, le local est généralement moins cher et garde vos données vocales privées.' },
          { q: 'Combien d\'effort de configuration demande la voix locale ?', a: 'Plus qu\'un assistant cloud : vous installez Home Assistant, ajoutez Whisper et Piper, les reliez via Wyoming et ajoutez éventuellement un LLM local. C\'est un projet de week-end plutôt que quelques tapotements, mais c\'est bien documenté.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home) — comment construire la pile locale',
          '[Pourquoi une maison connectée locale bat le cloud](/fr/smart-home/why-local-smart-home-beats-cloud) — l\'argument local plus large',
          '[Whisper local + Home Assistant](/fr/smart-home/local-whisper-home-assistant) — reconnaissance vocale locale',
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — matériel pour la voix locale',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Assistants Vocaux Local vs Cloud : Confidentialité, Coût et Capacité (2026)',
      description: 'Assistants vocaux local vs cloud 2026 : confidentialité, coût, précision, skills et hors ligne comparés. Quand la pile locale gagne, quand le cloud mène encore.',
      url: 'https://www.promptquorum.com/fr/smart-home/local-vs-cloud-voice-assistant',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Assistant vocal' }, { '@type': 'Thing', name: 'IA locale' }, { '@type': 'Thing', name: 'Confidentialité' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'La voix locale est-elle aussi bonne que le cloud désormais ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour le contrôle de la maison, une pile locale avec un bon modèle Whisper et un LLM local est très capable. Le cloud mène encore sur la précision cohérente prête à l\'emploi et les skills tierces larges.' } },
        { '@type': 'Question', name: 'Un assistant vocal local est-il entièrement hors ligne ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. STT, TTS, gestion des intentions et un LLM local optionnel tournent tous sur votre matériel, donc il fonctionne sans internet. Seul l\'accès à distance nécessite une connectivité.' } },
        { '@type': 'Question', name: 'Quelle est la différence de coût ?', acceptedAnswer: { '@type': 'Answer', text: 'La voix locale a un coût matériel unique et sans abonnement ; le cloud a un matériel bon marché mais peut attacher des frais aux fonctions premium. Avec le temps, le local est généralement moins cher et privé.' } },
        { '@type': 'Question', name: 'Combien d\'effort de configuration demande la voix locale ?', acceptedAnswer: { '@type': 'Answer', text: 'Plus que le cloud : installer Home Assistant, ajouter Whisper et Piper via Wyoming et éventuellement un LLM local. Un projet de week-end plutôt que quelques tapotements.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'ローカル対クラウドの音声アシスタント：プライバシー・コスト・能力（2026）',
    seoTitle: 'ローカル対クラウド音声アシスタント比較ガイド（2026年）',
    intro:
      'ローカル音声アシスタントはプライバシーとコストで勝り、クラウドアシスタントは依然として既製の完成度と幅広いスキルで先行します。本判断ガイドは、ローカルスタック（Home Assistant Assist + Whisper + ローカル LLM）をクラウドアシスタント（Alexa、Google）と、プライバシー・コスト・精度・スキル・オフライン動作・手間で比較し、どちらが勝つかを示します。',
    metaDescription:
      'ローカル対クラウドの音声アシスタント（2026年）：プライバシー・コスト・精度・スキル・オフライン動作の5項目を徹底比較。ローカルスタックはプライバシーとコストで勝り、クラウドは既製の完成度とスキル数で先行。どちらを選ぶかの判断基準を解説。',
    twitterDescription:
      'ローカル対クラウドの音声アシスタント：ローカルはプライバシーとコストで勝ち、クラウドは完成度とスキルで先行。2026年にどちらが勝つか。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'ローカルとクラウドの音声制御を選ぶ人',
    primaryTerm: 'local vs cloud voice assistant',
    targetKeywords: [
      'ローカル 対 クラウド 音声アシスタント',
      'プライベート 音声アシスタント 対 alexa',
      'home assistant 音声 対 alexa',
      'オフライン 音声アシスタント 比較',
      'alexa 置き換え プライバシー',
    ],
    leadAnswerBlock:
      '**ローカル音声アシスタントはプライバシー・コスト・オフライン動作で勝り、Alexa や Google のようなクラウドアシスタントは依然として既製の完成度とサードパーティスキルの幅で勝ります。** プライバシーと制御ならローカル、手間ゼロの利便性ならクラウドを選びましょう。',
    quickAnswerTop: {
      ja: {
        question: 'ローカルとクラウド、どちらの音声アシスタントを使うべき？',
        answer:
          'プライバシー、サブスクなし、オフライン動作が欲しいならローカル音声アシスタント（Home Assistant Assist + Whisper + Piper + ローカル LLM）を使いましょう。最も簡単なセットアップと最も幅広いサードパーティスキルが欲しいなら Alexa や Google のようなクラウドアシスタントを使い、音声データがクラウドで処理されることを受け入れましょう。',
        bullets: [
          'ローカル：プライベート、料金なし、オフライン動作、手間は多い',
          'クラウド：最も簡単、スキル最多、洗練、ただしクラウド処理',
          'ローカルの精度は Whisper モデルとハードウェア次第',
          'クラウドは幅広いサードパーティスキルとゼロ設定で先行',
          'プライバシー/制御 対 利便性で選ぶ',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '二つのアプローチ', anchor: 'two-approaches' },
      { label: '比較', anchor: 'comparison' },
      { label: 'ローカルを推す理由', anchor: 'case-local' },
      { label: 'クラウドがなお勝る点', anchor: 'cloud-wins' },
      { label: '推奨', anchor: 'recommendation' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ローカル音声アシスタントはプライバシー・コスト・オフライン動作で勝り、クラウドアシスタントは既製の完成度とサードパーティスキルの幅で勝ります。' },
      { type: 'plain-terms', content: 'Alexa のようなクラウド音声アシスタントは簡単で機能豊富ですが、あなたの音声を企業のサーバーへ送ります。ローカル音声アシスタントは自分のハードウェアで動くためプライベートでオフラインでも動きますが、自分で設定し、サードパーティの「スキル」は少なめです。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'ローカル（Assist + Whisper + Piper + ローカル LLM）：プライベート、料金なし、オフライン、手間は多い',
          'クラウド（Alexa、Google）：最も簡単、サードパーティスキル最多、洗練、クラウド処理',
          'ローカルの精度は Whisper のモデルサイズとマイク次第',
          'クラウドはゼロ設定と幅広いスキルで先行；ローカルはプライバシーとコストで先行',
          'GPU 搭載のミニPCがローカルのレイテンシ差を縮める',
          'プライバシーと制御ならローカル、利便性ならクラウドを選ぶ',
        ],
      },
      twoApproaches: {
        id: 'two-approaches',
        title: '二つのアプローチ',
        content:
          '**ローカルアシスタントは音声・理解・応答を自分のハードウェアで実行し、クラウドアシスタントはメーカーのサーバーで実行します。** この一つの違いが兼ね合いを決めます。',
        items: [
          '**ローカル：** Home Assistant Assist + Whisper（STT）+ Piper（TTS）+ 任意のローカル LLM——[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home)を参照。',
          '**クラウド：** Alexa や Google はあなたの音声を自社サーバーで処理します。',
          'この選択はより広いローカル対クラウドの判断を映します——[なぜローカルがクラウドに勝るか](/ja/smart-home/why-local-smart-home-beats-cloud)を参照。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比較',
        content:
          '**ローカルはプライバシー・コスト・オフラインで勝り、クラウドはスキルと手間で勝ります。** 表で自分の優先事項を対応づけましょう。',
        columns: ['基準', 'ローカル (Assist + Whisper + LLM)', 'クラウド (Alexa / Google)'],
        rows: [
          { '基準': 'プライバシー', 'ローカル (Assist + Whisper + LLM)': '機器上、プライベート', 'クラウド (Alexa / Google)': '音声をクラウドで処理' },
          { '基準': 'コスト', 'ローカル (Assist + Whisper + LLM)': '一度きりのハードウェア', 'クラウド (Alexa / Google)': '安価なハードウェア、料金の可能性' },
          { '基準': '精度', 'ローカル (Assist + Whisper + LLM)': 'モデル/ハードウェア次第', 'クラウド (Alexa / Google)': '洗練、一貫' },
          { '基準': 'スキル', 'ローカル (Assist + Whisper + LLM)': '家庭制御が中心', 'クラウド (Alexa / Google)': '幅広いサードパーティスキル' },
          { '基準': 'オフライン', 'ローカル (Assist + Whisper + LLM)': 'オフラインで動作', 'クラウド (Alexa / Google)': 'インターネットが必要' },
          { '基準': '手間', 'ローカル (Assist + Whisper + LLM)': '設定が多い', 'クラウド (Alexa / Google)': 'プラグアンドプレイ' },
        ],
      },
      caseLocal: {
        id: 'case-local',
        title: 'ローカルを推すプライバシーとコストの理由',
        content:
          '**ローカル音声は録音を自分のハードウェアに保ち、サブスクを避けます。これが選ぶ最大の理由です。** インターネット障害中も動きます。',
        items: [
          '音声録音はメーカーへ送られません——[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks)を参照。',
          'サブスクなし；ハードウェアに一度だけ払います。',
          '自然言語理解のためにローカル LLM を追加——[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
        ],
      },
      cloudWins: {
        id: 'cloud-wins',
        title: 'クラウドがなお勝る点',
        content:
          '**クラウドアシスタントは、手間ゼロの設定、一貫した精度、サードパーティスキルの幅で依然として勝ります。** ショッピング、幅広いアプリ連携、設定不要が欲しいならクラウドが先行します。',
        items: [
          '管理すべきハードウェアのない既製の設定。',
          '家庭制御を超えた幅広いサードパーティスキルのエコシステム。',
          'モデルやマイクの調整なしの一貫した認識。',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: '推奨',
        content:
          '**プライバシー・コスト・オフライン動作が重要ならローカル、ゼロ設定と最も幅広いスキルが欲しいならクラウドを選びましょう。** 迷っていてプライバシーを重んじるなら、ミニPCでローカルから始めましょう。',
        items: [
          '**プライバシー / オフライン / 料金なし：** ローカルスタック。',
          '**ゼロ設定 / 最も幅広いスキル：** Alexa か Google。',
          '**迷うがプライバシー寄り：** GPU 搭載のミニPCでローカルから始める——[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)を参照。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'いまやローカル音声はクラウドと同じくらい良いですか？', a: '家庭制御と自然言語の命令については、良い Whisper モデルとローカル LLM を備えたローカルスタックは非常に有能です。クラウドアシスタントは、既製の一貫した精度と、家庭制御を超える幅広いサードパーティスキルで依然として先行します。' },
          { q: 'ローカル音声アシスタントは完全オフラインですか？', a: 'はい。音声認識、音声合成、インテント処理、任意のローカル LLM はすべて自分のハードウェアで動くため、ローカル音声アシスタントはインターネットなしで動作します。家の外からのリモートアクセスだけが接続を必要とします。' },
          { q: 'コストの差は？', a: 'ローカル音声は一度きりのハードウェア費用でサブスクなし、一方クラウドアシスタントは安価なハードウェアながらプレミアム機能に料金を付けることがあります。時間が経つほど、ローカルは通常より安く、音声データをプライベートに保ちます。' },
          { q: 'ローカル音声の設定はどれくらい手間ですか？', a: 'クラウドアシスタントより多めです：Home Assistant をインストールし、Whisper と Piper を追加し、Wyoming でつなぎ、任意でローカル LLM を加えます。数タップではなく週末プロジェクト程度ですが、よく文書化されています。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home) — ローカルスタックの作り方',
          '[なぜローカルスマートホームはクラウドに勝るのか](/ja/smart-home/why-local-smart-home-beats-cloud) — より広いローカルの根拠',
          '[ローカル Whisper + Home Assistant](/ja/smart-home/local-whisper-home-assistant) — ローカル音声認識',
          '[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — ローカル音声向けハードウェア',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカル対クラウドの音声アシスタント：プライバシー・コスト・能力（2026）',
      description: 'ローカル対クラウドの音声アシスタント（2026年）：プライバシー・コスト・精度・スキル・オフライン動作の5項目を徹底比較。ローカルスタックはプライバシーとコストで勝り、クラウドは既製の完成度とスキル数で先行。どちらを選ぶかの判断基準を解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-vs-cloud-voice-assistant',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '音声アシスタント' }, { '@type': 'Thing', name: 'ローカルAI' }, { '@type': 'Thing', name: 'プライバシー' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'いまやローカル音声はクラウドと同じくらい良いですか？', acceptedAnswer: { '@type': 'Answer', text: '家庭制御については、良い Whisper モデルとローカル LLM を備えたローカルスタックは非常に有能です。クラウドは既製の一貫した精度と幅広いサードパーティスキルで依然先行します。' } },
        { '@type': 'Question', name: 'ローカル音声アシスタントは完全オフラインですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。音声認識、音声合成、インテント処理、任意のローカル LLM はすべて自分のハードウェアで動くため、インターネットなしで動作します。リモートアクセスだけが接続を必要とします。' } },
        { '@type': 'Question', name: 'コストの差は？', acceptedAnswer: { '@type': 'Answer', text: 'ローカルは一度きりのハードウェア費用でサブスクなし；クラウドは安価なハードウェアながらプレミアム機能に料金が付くことがあります。時間が経つほどローカルは通常より安く、プライベートです。' } },
        { '@type': 'Question', name: 'ローカル音声の設定はどれくらい手間ですか？', acceptedAnswer: { '@type': 'Answer', text: 'クラウドより多めです：Home Assistant を入れ、Whisper と Piper を Wyoming でつなぎ、任意でローカル LLM を加えます。数タップではなく週末プロジェクト程度です。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Assistentes de Voz Local vs Nuvem: Privacidade, Custo e Capacidade (2026)',
    seoTitle: 'Assistente de Voz Local vs Nuvem: Guia de Privacidade 2026',
    intro:
      'Assistentes de voz locais ganham em privacidade e custo; assistentes na nuvem ainda lideram em polimento de fábrica e amplitude de skills. Este guia de decisão compara um stack local (Home Assistant Assist + Whisper + um LLM local) com assistentes na nuvem (Alexa, Google) em privacidade, custo, precisão, skills, operação offline e esforço, e diz quando cada um ganha.',
    metaDescription:
      'Assistentes de voz local vs nuvem 2026: privacidade, custo, precisão, skills e offline comparados. Quando o stack local ganha e quando a nuvem ainda lidera.',
    twitterDescription:
      'Assistentes de voz local vs nuvem: o local ganha em privacidade e custo, a nuvem lidera em polimento e skills. Quando cada um ganha em 2026.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Pessoas decidindo entre controle de voz local e na nuvem',
    primaryTerm: 'local vs cloud voice assistant',
    targetKeywords: [
      'assistente de voz local vs nuvem',
      'assistente de voz privado vs alexa',
      'home assistant voz vs alexa',
      'comparação assistente de voz offline',
      'substituir alexa privacidade',
    ],
    leadAnswerBlock:
      '**Um assistente de voz local ganha em privacidade, custo e operação offline; um assistente na nuvem como Alexa ou Google ainda ganha em polimento de fábrica e na amplitude de skills de terceiros.** Escolha local por privacidade e controle, nuvem por comodidade sem esforço.',
    quickAnswerTop: {
      pt: {
        question: 'Devo usar um assistente de voz local ou na nuvem?',
        answer:
          'Use um assistente de voz local (Home Assistant Assist + Whisper + Piper + um LLM local) se você quer privacidade, sem assinaturas e operação offline. Use um assistente na nuvem como Alexa ou Google se você quer a configuração mais fácil e as skills de terceiros mais amplas, e aceita que seus dados de voz são processados na nuvem.',
        bullets: [
          'Local: privado, sem taxas, funciona offline, mais configuração',
          'Nuvem: a mais fácil, skills mais amplas, polida, mas processada na nuvem',
          'A precisão local depende do seu modelo Whisper e hardware',
          'A nuvem lidera em skills de terceiros amplas e zero configuração',
          'Escolha por privacidade/controle vs comodidade',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'As duas abordagens', anchor: 'two-approaches' },
      { label: 'A comparação', anchor: 'comparison' },
      { label: 'O argumento para local', anchor: 'case-local' },
      { label: 'Onde a nuvem ainda ganha', anchor: 'cloud-wins' },
      { label: 'Recomendação', anchor: 'recommendation' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Assistentes de voz locais ganham em privacidade, custo e operação offline; assistentes na nuvem ganham em polimento de fábrica e amplitude de skills de terceiros.' },
      { type: 'plain-terms', content: 'Um assistente de voz na nuvem como a Alexa é fácil e rico em recursos, mas envia sua voz a um servidor de empresa. Um assistente de voz local roda no seu próprio hardware, então é privado e funciona offline, mas você o configura e ele tem menos "skills" de terceiros.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Local (Assist + Whisper + Piper + um LLM local): privado, sem taxas, offline, mais configuração',
          'Nuvem (Alexa, Google): a mais fácil, skills de terceiros mais amplas, polida, processada na nuvem',
          'A precisão local depende do tamanho do seu modelo Whisper e do microfone',
          'A nuvem lidera em zero configuração e skills amplas; o local lidera em privacidade e custo',
          'Um mini PC com GPU reduz a diferença de latência para o local',
          'Escolha local por privacidade e controle, nuvem por comodidade',
        ],
      },
      twoApproaches: {
        id: 'two-approaches',
        title: 'As duas abordagens',
        content:
          '**Um assistente local executa fala, compreensão e respostas no seu hardware; um na nuvem as executa em um servidor do fabricante.** Essa única diferença impulsiona os compromissos.',
        items: [
          '**Local:** Home Assistant Assist + Whisper (STT) + Piper (TTS) + um LLM local opcional — veja [montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home).',
          '**Nuvem:** Alexa ou Google processam sua voz nos servidores deles.',
          'A escolha espelha a decisão mais ampla local-vs-nuvem — veja [por que o local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'A comparação',
        content:
          '**O local ganha privacidade, custo e offline; a nuvem ganha skills e esforço.** Use a tabela para associar a sua prioridade.',
        columns: ['Critério', 'Local (Assist + Whisper + LLM)', 'Nuvem (Alexa / Google)'],
        rows: [
          { 'Critério': 'Privacidade', 'Local (Assist + Whisper + LLM)': 'No dispositivo, privada', 'Nuvem (Alexa / Google)': 'Voz processada na nuvem' },
          { 'Critério': 'Custo', 'Local (Assist + Whisper + LLM)': 'Hardware único', 'Nuvem (Alexa / Google)': 'Hardware barato, possíveis taxas' },
          { 'Critério': 'Precisão', 'Local (Assist + Whisper + LLM)': 'Depende do modelo/hardware', 'Nuvem (Alexa / Google)': 'Polida, consistente' },
          { 'Critério': 'Skills', 'Local (Assist + Whisper + LLM)': 'Foco no controle do lar', 'Nuvem (Alexa / Google)': 'Skills de terceiros amplas' },
          { 'Critério': 'Offline', 'Local (Assist + Whisper + LLM)': 'Funciona offline', 'Nuvem (Alexa / Google)': 'Precisa de internet' },
          { 'Critério': 'Esforço', 'Local (Assist + Whisper + LLM)': 'Maior configuração', 'Nuvem (Alexa / Google)': 'Plug-and-play' },
        ],
      },
      caseLocal: {
        id: 'case-local',
        title: 'O argumento de privacidade e custo para o local',
        content:
          '**A voz local mantém as gravações no seu hardware e evita assinaturas, o que é a razão mais forte para escolhê-la.** Ela também funciona durante quedas de internet.',
        items: [
          'Nenhuma gravação de voz enviada a um fabricante — veja [riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks).',
          'Sem assinatura; você paga o hardware uma vez.',
          'Adicione um LLM local para a compreensão em linguagem natural — veja [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      cloudWins: {
        id: 'cloud-wins',
        title: 'Onde a nuvem ainda ganha',
        content:
          '**Assistentes na nuvem ainda ganham em configuração sem esforço, precisão consistente e amplitude de skills de terceiros.** Se você quer compras, integrações amplas de apps e nenhuma configuração, a nuvem lidera.',
        items: [
          'Configuração de fábrica sem hardware a gerenciar.',
          'Ecossistemas de skills de terceiros amplos além do controle do lar.',
          'Reconhecimento consistente sem ajustar um modelo ou microfone.',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recomendação',
        content:
          '**Escolha local se privacidade, custo ou operação offline importam; escolha nuvem se você quer zero configuração e as skills mais amplas.** Na dúvida e se você valoriza a privacidade, comece local com um mini PC.',
        items: [
          '**Privacidade / offline / sem taxas:** stack local.',
          '**Zero configuração / skills mais amplas:** Alexa ou Google.',
          '**Em dúvida, mas tendendo à privacidade:** comece local em um mini PC com GPU — veja [melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'A voz local já é tão boa quanto a nuvem?', a: 'Para o controle do lar e comandos em linguagem natural, um stack local com um bom modelo Whisper e um LLM local é muito capaz. Os assistentes na nuvem ainda lideram em precisão consistente de fábrica e em skills de terceiros amplas além do controle do lar.' },
          { q: 'Um assistente de voz local é totalmente offline?', a: 'Sim. Voz-para-texto, texto-para-voz, o tratamento de intenções e um LLM local opcional rodam todos no seu hardware, então um assistente de voz local funciona sem internet. Só o acesso remoto de fora do lar precisa de conectividade.' },
          { q: 'Qual a diferença de custo?', a: 'A voz local tem um custo de hardware único e sem assinatura, enquanto os assistentes na nuvem têm hardware barato mas podem atrelar taxas a recursos premium. Com o tempo, o local costuma ser mais barato e mantém seus dados de voz privados.' },
          { q: 'Quanto esforço de configuração a voz local exige?', a: 'Mais que um assistente na nuvem: você instala o Home Assistant, adiciona Whisper e Piper, conecta-os sobre Wyoming e, opcionalmente, adiciona um LLM local. É um projeto de fim de semana em vez de alguns toques, mas é bem documentado.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home) — como construir o stack local',
          '[Por que uma casa inteligente local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud) — o argumento local mais amplo',
          '[Whisper local + Home Assistant](/pt/smart-home/local-whisper-home-assistant) — voz-para-texto local',
          '[Melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) — hardware para voz local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Assistentes de Voz Local vs Nuvem: Privacidade, Custo e Capacidade (2026)',
      description: 'Assistentes de voz local vs nuvem 2026: privacidade, custo, precisão, skills e offline comparados. Quando o stack local ganha e quando a nuvem ainda lidera.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-vs-cloud-voice-assistant',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Assistente de voz' }, { '@type': 'Thing', name: 'IA local' }, { '@type': 'Thing', name: 'Privacidade' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'A voz local já é tão boa quanto a nuvem?', acceptedAnswer: { '@type': 'Answer', text: 'Para o controle do lar, um stack local com um bom modelo Whisper e um LLM local é muito capaz. A nuvem ainda lidera em precisão consistente de fábrica e skills de terceiros amplas.' } },
        { '@type': 'Question', name: 'Um assistente de voz local é totalmente offline?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Voz-para-texto, texto-para-voz, o tratamento de intenções e um LLM local opcional rodam todos no seu hardware, então funciona sem internet. Só o acesso remoto precisa de conectividade.' } },
        { '@type': 'Question', name: 'Qual a diferença de custo?', acceptedAnswer: { '@type': 'Answer', text: 'A voz local tem um custo de hardware único e sem assinatura; a nuvem tem hardware barato mas pode atrelar taxas a recursos premium. Com o tempo o local costuma ser mais barato e privado.' } },
        { '@type': 'Question', name: 'Quanto esforço de configuração a voz local exige?', acceptedAnswer: { '@type': 'Answer', text: 'Mais que a nuvem: instalar o Home Assistant, adicionar Whisper e Piper sobre Wyoming e, opcionalmente, um LLM local. Um projeto de fim de semana em vez de alguns toques.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: '本地对云端的语音助手：隐私、成本与能力（2026）',
    seoTitle: '本地 vs 云端语音助手 2026：隐私、成本与技能的选择',
    intro:
      '本地语音助手在隐私和成本上胜出；云端助手在开箱即用的成熟度和广泛技能上仍然领先。本决策指南在隐私、成本、准确度、技能、离线运行和投入上，把一个本地堆栈（Home Assistant Assist + Whisper + 本地 LLM）与云端助手（Alexa、Google）作比较，并说明各自在何时胜出。',
    metaDescription:
      '本地对云端的语音助手（2026）：从隐私、成本、准确度、技能广度和离线能力五个维度全面对比。本地堆栈在隐私保护和长期成本上胜出，云端在开箱即用成熟度上领先。详解各自何时是更优选择。',
    twitterDescription:
      '本地对云端的语音助手：本地在隐私和成本上胜出，云端在成熟度和技能上领先。2026 年各自何时胜出。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '在本地与云端语音控制之间做决定的人',
    primaryTerm: 'local vs cloud voice assistant',
    targetKeywords: [
      '本地 对 云端 语音助手',
      '私密语音助手 对 alexa',
      'home assistant 语音 对 alexa',
      '离线 语音助手 对比',
      '替代 alexa 隐私',
    ],
    leadAnswerBlock:
      '**本地语音助手在隐私、成本和离线运行上胜出；像 Alexa 或 Google 这样的云端助手在开箱即用的成熟度和第三方技能的广度上仍然胜出。** 要隐私和掌控就选本地，要零投入的便利就选云端。',
    quickAnswerTop: {
      zh: {
        question: '我该用本地还是云端的语音助手？',
        answer:
          '如果你想要隐私、免订阅和离线运行，就用本地语音助手（Home Assistant Assist + Whisper + Piper + 本地 LLM）。如果你想要最简单的配置和最广泛的第三方技能，并接受你的语音数据在云端处理，就用 Alexa 或 Google 这样的云端助手。',
        bullets: [
          '本地：私密、无费用、可离线、配置更多',
          '云端：最简单、技能最广、成熟，但云端处理',
          '本地准确度取决于你的 Whisper 模型和硬件',
          '云端在广泛第三方技能和零配置上领先',
          '按隐私/掌控对便利来选择',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '两种路径', anchor: 'two-approaches' },
      { label: '对比', anchor: 'comparison' },
      { label: '支持本地的理由', anchor: 'case-local' },
      { label: '云端仍胜出之处', anchor: 'cloud-wins' },
      { label: '推荐', anchor: 'recommendation' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '本地语音助手在隐私、成本和离线运行上胜出；云端助手在开箱即用的成熟度和第三方技能的广度上胜出。' },
      { type: 'plain-terms', content: '像 Alexa 这样的云端语音助手既简单又功能丰富，但会把你的语音发送到公司服务器。本地语音助手在你自己的硬件上运行，因此私密且可离线工作，但需要你自己配置，且第三方“技能”更少。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '本地（Assist + Whisper + Piper + 本地 LLM）：私密、无费用、离线、配置更多',
          '云端（Alexa、Google）：最简单、第三方技能最广、成熟、云端处理',
          '本地准确度取决于你的 Whisper 模型大小和麦克风',
          '云端在零配置和广泛技能上领先；本地在隐私和成本上领先',
          '配 GPU 的迷你 PC 可缩小本地的延迟差距',
          '要隐私和掌控就选本地，要便利就选云端',
        ],
      },
      twoApproaches: {
        id: 'two-approaches',
        title: '两种路径',
        content:
          '**本地助手在你的硬件上运行语音、理解和回应；云端助手则在厂商服务器上运行它们。** 这一个差异决定了各种取舍。',
        items: [
          '**本地：** Home Assistant Assist + Whisper（STT）+ Piper（TTS）+ 可选的本地 LLM——参见[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home)。',
          '**云端：** Alexa 或 Google 在它们的服务器上处理你的语音。',
          '这一选择映照了更广泛的本地对云端决策——参见[为何本地胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud)。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '对比',
        content:
          '**本地在隐私、成本和离线上胜出；云端在技能和投入上胜出。** 用下表对应你的优先事项。',
        columns: ['标准', '本地 (Assist + Whisper + LLM)', '云端 (Alexa / Google)'],
        rows: [
          { '标准': '隐私', '本地 (Assist + Whisper + LLM)': '设备本地，私密', '云端 (Alexa / Google)': '语音在云端处理' },
          { '标准': '成本', '本地 (Assist + Whisper + LLM)': '一次性硬件', '云端 (Alexa / Google)': '硬件便宜，可能有费用' },
          { '标准': '准确度', '本地 (Assist + Whisper + LLM)': '取决于模型/硬件', '云端 (Alexa / Google)': '成熟、一致' },
          { '标准': '技能', '本地 (Assist + Whisper + LLM)': '聚焦家庭控制', '云端 (Alexa / Google)': '广泛第三方技能' },
          { '标准': '离线', '本地 (Assist + Whisper + LLM)': '可离线工作', '云端 (Alexa / Google)': '需要互联网' },
          { '标准': '投入', '本地 (Assist + Whisper + LLM)': '配置更多', '云端 (Alexa / Google)': '即插即用' },
        ],
      },
      caseLocal: {
        id: 'case-local',
        title: '支持本地的隐私与成本理由',
        content:
          '**本地语音把录音留在你的硬件上并避免订阅，这是选择它的最有力理由。** 它在断网时也能工作。',
        items: [
          '没有语音录音被发送给厂商——参见[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks)。',
          '无订阅；硬件一次性付费。',
          '为自然语言理解添加本地 LLM——参见[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
        ],
      },
      cloudWins: {
        id: 'cloud-wins',
        title: '云端仍胜出之处',
        content:
          '**云端助手在零投入配置、稳定准确度和第三方技能广度上仍然胜出。** 如果你想要购物、广泛的应用集成且无需配置，云端领先。',
        items: [
          '开箱即用，无需管理硬件。',
          '超出家庭控制范围的广泛第三方技能生态。',
          '无需调优模型或麦克风即可获得一致的识别。',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: '推荐',
        content:
          '**若看重隐私、成本或离线运行就选本地；若想要零配置和最广技能就选云端。** 若拿不定主意且看重隐私，就用一台迷你 PC 从本地起步。',
        items: [
          '**隐私 / 离线 / 无费用：** 本地堆栈。',
          '**零配置 / 技能最广：** Alexa 或 Google。',
          '**犹豫但偏向隐私：** 用配 GPU 的迷你 PC 从本地起步——参见[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '现在本地语音和云端一样好吗？', a: '对于家庭控制和自然语言命令，配备好的 Whisper 模型和本地 LLM 的本地堆栈非常有能力。云端助手在开箱即用的稳定准确度，以及超出家庭控制的广泛第三方技能上仍然领先。' },
          { q: '本地语音助手是完全离线的吗？', a: '是。语音转文字、文字转语音、意图处理和可选的本地 LLM 都在你的硬件上运行，因此本地语音助手在没有互联网时也能工作。只有来自家庭之外的远程访问才需要连通性。' },
          { q: '成本差异是什么？', a: '本地语音是一次性硬件成本且无订阅，而云端助手硬件便宜，但可能把费用绑定到高级功能上。随时间推移，本地通常更便宜，并让你的语音数据保持私密。' },
          { q: '本地语音需要多少配置投入？', a: '比云端助手多：你要安装 Home Assistant、添加 Whisper 和 Piper、经由 Wyoming 连接，并可选地添加本地 LLM。它更像一个周末项目，而不是点几下，但有完善的文档。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home) — 如何搭建本地堆栈',
          '[为何本地智能家居胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud) — 更广泛的本地论据',
          '[本地 Whisper + Home Assistant](/zh/smart-home/local-whisper-home-assistant) — 本地语音转文字',
          '[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 本地语音的硬件',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地对云端的语音助手：隐私、成本与能力（2026）',
      description: '本地对云端的语音助手（2026）：从隐私、成本、准确度、技能广度和离线能力五个维度全面对比。本地堆栈在隐私保护和长期成本上胜出，云端在开箱即用成熟度上领先。详解各自何时是更优选择。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-vs-cloud-voice-assistant',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '语音助手' }, { '@type': 'Thing', name: '本地 AI' }, { '@type': 'Thing', name: '隐私' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '现在本地语音和云端一样好吗？', acceptedAnswer: { '@type': 'Answer', text: '对于家庭控制，配备好的 Whisper 模型和本地 LLM 的本地堆栈非常有能力。云端在开箱即用的稳定准确度和广泛第三方技能上仍然领先。' } },
        { '@type': 'Question', name: '本地语音助手是完全离线的吗？', acceptedAnswer: { '@type': 'Answer', text: '是。语音转文字、文字转语音、意图处理和可选的本地 LLM 都在你的硬件上运行，因此在没有互联网时也能工作。只有远程访问才需要连通性。' } },
        { '@type': 'Question', name: '成本差异是什么？', acceptedAnswer: { '@type': 'Answer', text: '本地是一次性硬件成本且无订阅；云端硬件便宜，但可能把费用绑定到高级功能上。随时间推移，本地通常更便宜且更私密。' } },
        { '@type': 'Question', name: '本地语音需要多少配置投入？', acceptedAnswer: { '@type': 'Answer', text: '比云端多：安装 Home Assistant、经由 Wyoming 添加 Whisper 和 Piper，并可选添加本地 LLM。更像一个周末项目，而非点几下。' } },
      ],
    },
  },
}
