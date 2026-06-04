import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Building a GDPR-Friendly Private Smart Home (EU, 2026)',
    seoTitle: 'GDPR-Friendly Private Smart Home (EU 2026)',
    intro:
      'A local smart home keeps all processing on your own hardware in your home, supporting GDPR data-minimization and residency by design because no third-party processor is involved. This EU-focused guide explains how GDPR applies to connected devices, where cloud devices send data, how local processing achieves residency, and a buyer checklist for a private, GDPR-friendly setup.',
    metaDescription:
      'Build a GDPR-friendly private smart home: data residency, no cloud processing, local voice and AI. An EU guide to keeping connected-home data on your hardware.',
    twitterDescription:
      'A GDPR-friendly smart home keeps processing local: data residency by design, no third-party processor, local voice and AI. An EU guide.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'EU homeowners wanting a privacy-compliant smart home',
    primaryTerm: 'GDPR private smart home',
    targetKeywords: [
      'gdpr smart home privacy',
      'private smart home eu',
      'gdpr connected devices',
      'data residency smart home',
      'local smart home gdpr',
    ],
    leadAnswerBlock:
      '**A local smart home supports GDPR by design: processing happens on your own hardware in your home, so device, voice, and camera data are minimized and kept in your jurisdiction with no third-party processor.** Local voice and local AI remove the cloud processor entirely.',
    quickAnswerTop: {
      en: {
        question: 'Is a local smart home GDPR-friendly?',
        answer:
          'Yes. Because a local smart home processes device, voice, and camera data on your own hardware, it supports GDPR principles of data minimization and residency by design, and there is no external processor handling your household data. Cloud devices, by contrast, send personal data to vendor servers that act as processors.',
        bullets: [
          'Local processing keeps data in your home and jurisdiction',
          'No third-party processor for your household data',
          'Local voice (Whisper/Piper) avoids cloud voice processing',
          'Supports data-minimization and residency by design',
          'Cloud devices send personal data to vendor processors',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'GDPR and the Connected Home', anchor: 'gdpr-home' },
      { label: 'Where Cloud Devices Send Data', anchor: 'cloud-data' },
      { label: 'Data Residency via Local Processing', anchor: 'residency' },
      { label: 'Local Voice and AI', anchor: 'local-voice-ai' },
      { label: 'EU Buyer Checklist', anchor: 'checklist' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A local smart home processes device, voice, and camera data on your own hardware, supporting GDPR data-minimization and residency with no third-party processor.' },
      { type: 'plain-terms', content: 'Under GDPR, sending your household data to a company cloud makes that company a data processor. A local smart home avoids this by keeping all processing on hardware in your home, so the data stays in your jurisdiction and no outside party handles it.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Local processing keeps device, voice, and camera data in your home and jurisdiction',
          'With no cloud, there is no third-party processor handling your household data',
          'Local voice (Whisper + Piper) and a local LLM avoid cloud voice/AI processing',
          'This supports GDPR data-minimization and residency by design',
          'Cloud devices send personal data to vendor servers acting as processors',
          'For specifics, consult a data-protection professional for your situation',
        ],
      },
      gdprHome: {
        id: 'gdpr-home',
        title: 'GDPR and the Connected Home',
        content:
          '**GDPR governs personal data, and a smart home generates plenty: presence, routines, voice, and video.** Where that data is processed determines who is involved and how exposed it is.',
        items: [
          'Smart home data (presence, recordings, footage) is personal data under GDPR.',
          'Cloud processing introduces a third-party processor handling that data.',
          'Local processing keeps you in control with no external processor.',
        ],
      },
      cloudData: {
        id: 'cloud-data',
        title: 'Where Cloud Devices Send Data',
        content:
          '**Cloud smart home devices transmit usage data, voice queries, and camera footage to vendor servers, sometimes outside the EU.** That makes the vendor a processor and can raise data-transfer questions.',
        items: [
          'Usage and telemetry flow to vendor analytics systems.',
          'Voice assistants process recordings in the cloud.',
          'Camera footage is stored on vendor servers — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
        ],
      },
      residency: {
        id: 'residency',
        title: 'Data Residency via Local Processing',
        content:
          '**Local processing achieves data residency by default: the data never leaves your home, so it stays in your jurisdiction.** This directly supports GDPR residency and minimization principles.',
        items: [
          'A local hub (Home Assistant) processes automations on-site — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
          'No cross-border transfer occurs because no data is sent off-device.',
          'You minimize data collection to what stays in your home.',
        ],
      },
      localVoiceAi: {
        id: 'local-voice-ai',
        title: 'Local Voice and AI = No Third-Party Processor',
        content:
          '**Local voice and a local LLM remove the cloud processor for your most sensitive data — your speech and home context.** Everything is computed on your hardware.',
        items: [
          'Local Whisper and Piper keep voice processing on-device — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          'A local LLM via the [Ollama integration](/smart-home/home-assistant-ollama-integration) keeps natural-language processing local.',
          'For private local AI generally, see [what local LLMs are](/local-llms/what-are-local-llms) (cross-cluster).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'EU Buyer Checklist',
        content:
          '**Favour local-capable devices, a local hub, and local voice/AI to keep your household data in your home.** The table contrasts cloud and local on GDPR-relevant points.',
        columns: ['Factor', 'Cloud device', 'Local setup'],
        rows: [
          { 'Factor': 'Data location', 'Cloud device': 'Vendor data centre', 'Local setup': 'Your home' },
          { 'Factor': 'Processor', 'Cloud device': 'Vendor (third party)', 'Local setup': 'None external' },
          { 'Factor': 'Voice data', 'Cloud device': 'Processed in cloud', 'Local setup': 'On-device (Whisper/Piper)' },
          { 'Factor': 'GDPR posture', 'Cloud device': 'Transfer/processor questions', 'Local setup': 'Residency by design' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Are smart home devices GDPR-relevant?', a: 'Yes. Smart home devices generate personal data such as presence, routines, voice, and video. Under GDPR, how and where that data is processed matters, and cloud devices that send it to vendor servers introduce a third-party processor.' },
          { q: 'Does local mean there is no processor?', a: 'For your household data, yes — local processing keeps everything on your own hardware, so no external party processes it. You remain in control of the data, which supports GDPR data-minimization and residency principles.' },
          { q: 'Is voice data a particular GDPR issue?', a: 'Voice recordings are sensitive personal data, and cloud assistants process them on vendor servers. Using local speech-to-text (Whisper) and text-to-speech (Piper) keeps voice processing on-device, avoiding a cloud processor for your speech.' },
          { q: 'Are there EU-hosted smart home options?', a: 'A local-first setup is the strongest privacy option because data never leaves your home, removing hosting-location questions entirely. For any cloud features you do use, check where the provider processes data and consult a data-protection professional for your specific needs.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the risks GDPR-friendly setups avoid',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — building the private stack',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — local AI, no cloud processor',
          '[What Local LLMs Are](/local-llms/what-are-local-llms) — cross-cluster: private local AI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Building a GDPR-Friendly Private Smart Home (EU, 2026)',
      description: 'Build a GDPR-friendly private smart home: data residency, no cloud processing, local voice and AI. An EU guide to keeping connected-home data on your hardware.',
      url: 'https://www.promptquorum.com/smart-home/private-smart-home-gdpr',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'GDPR' }, { '@type': 'Thing', name: 'Smart home privacy' }, { '@type': 'Thing', name: 'Data residency' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Are smart home devices GDPR-relevant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. They generate personal data such as presence, routines, voice, and video. Cloud devices that send it to vendor servers introduce a third-party processor under GDPR.' } },
        { '@type': 'Question', name: 'Does local mean there is no processor?', acceptedAnswer: { '@type': 'Answer', text: 'For your household data, yes — local processing keeps everything on your hardware, so no external party processes it, supporting GDPR minimization and residency.' } },
        { '@type': 'Question', name: 'Is voice data a particular GDPR issue?', acceptedAnswer: { '@type': 'Answer', text: 'Voice recordings are sensitive data, and cloud assistants process them on vendor servers. Local Whisper and Piper keep voice processing on-device.' } },
        { '@type': 'Question', name: 'Are there EU-hosted smart home options?', acceptedAnswer: { '@type': 'Answer', text: 'A local-first setup is the strongest option because data never leaves your home. For any cloud features, check where the provider processes data and consult a professional.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Ein DSGVO-freundliches privates Smart Home bauen (EU, 2026)',
    seoTitle: 'DSGVO-freundliches privates Smart Home (EU 2026)',
    intro:
      'Ein lokales Smart Home hält die gesamte Verarbeitung auf Ihrer eigenen Hardware zu Hause und unterstützt so Datenminimierung und Datenresidenz der DSGVO von Grund auf, weil kein Auftragsverarbeiter beteiligt ist. Dieser EU-Leitfaden erklärt, wie die DSGVO auf vernetzte Geräte anwendbar ist, wohin Cloud-Geräte Daten senden, wie lokale Verarbeitung Datenresidenz erreicht, und bietet eine Kauf-Checkliste für ein privates, DSGVO-freundliches Setup.',
    metaDescription:
      'Ein DSGVO-freundliches privates Smart Home bauen: Datenresidenz, keine Cloud-Verarbeitung, lokale Sprache und KI. Ein EU-Leitfaden, um Smart-Home-Daten auf Ihrer Hardware zu halten.',
    twitterDescription:
      'Ein DSGVO-freundliches Smart Home hält die Verarbeitung lokal: Datenresidenz von Grund auf, kein Auftragsverarbeiter, lokale Sprache und KI. Ein EU-Leitfaden.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'EU-Haushalte, die ein datenschutzkonformes Smart Home wollen',
    primaryTerm: 'GDPR private smart home',
    targetKeywords: [
      'dsgvo smart home datenschutz',
      'privates smart home eu',
      'dsgvo vernetzte geräte',
      'datenresidenz smart home',
      'lokales smart home dsgvo',
    ],
    leadAnswerBlock:
      '**Ein lokales Smart Home unterstützt die DSGVO von Grund auf: Die Verarbeitung findet auf Ihrer eigenen Hardware zu Hause statt, sodass Geräte-, Sprach- und Kameradaten minimiert und ohne Auftragsverarbeiter in Ihrer Rechtsordnung gehalten werden.** Lokale Sprache und lokale KI entfernen den Cloud-Verarbeiter vollständig.',
    quickAnswerTop: {
      de: {
        question: 'Ist ein lokales Smart Home DSGVO-freundlich?',
        answer:
          'Ja. Weil ein lokales Smart Home Geräte-, Sprach- und Kameradaten auf Ihrer eigenen Hardware verarbeitet, unterstützt es die DSGVO-Prinzipien der Datenminimierung und Datenresidenz von Grund auf, und es gibt keinen externen Auftragsverarbeiter, der Ihre Haushaltsdaten verarbeitet. Cloud-Geräte senden personenbezogene Daten dagegen an Hersteller-Server, die als Auftragsverarbeiter agieren.',
        bullets: [
          'Lokale Verarbeitung hält Daten in Ihrem Zuhause und Ihrer Rechtsordnung',
          'Kein Auftragsverarbeiter für Ihre Haushaltsdaten',
          'Lokale Sprache (Whisper/Piper) vermeidet Cloud-Sprachverarbeitung',
          'Unterstützt Datenminimierung und Datenresidenz von Grund auf',
          'Cloud-Geräte senden personenbezogene Daten an Hersteller-Verarbeiter',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'DSGVO und das vernetzte Zuhause', anchor: 'gdpr-home' },
      { label: 'Wohin Cloud-Geräte Daten senden', anchor: 'cloud-data' },
      { label: 'Datenresidenz durch lokale Verarbeitung', anchor: 'residency' },
      { label: 'Lokale Sprache und KI', anchor: 'local-voice-ai' },
      { label: 'EU-Käufer-Checkliste', anchor: 'checklist' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein lokales Smart Home verarbeitet Geräte-, Sprach- und Kameradaten auf Ihrer eigenen Hardware und unterstützt DSGVO-Datenminimierung und -Datenresidenz ohne Auftragsverarbeiter.' },
      { type: 'plain-terms', content: 'Nach der DSGVO macht das Senden Ihrer Haushaltsdaten an eine Firmen-Cloud diese Firma zum Auftragsverarbeiter. Ein lokales Smart Home vermeidet das, indem die gesamte Verarbeitung auf Hardware zu Hause bleibt, sodass die Daten in Ihrer Rechtsordnung bleiben und kein Außenstehender sie verarbeitet.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Lokale Verarbeitung hält Geräte-, Sprach- und Kameradaten in Ihrem Zuhause und Ihrer Rechtsordnung',
          'Ohne Cloud gibt es keinen Auftragsverarbeiter, der Ihre Haushaltsdaten verarbeitet',
          'Lokale Sprache (Whisper + Piper) und ein lokales LLM vermeiden Cloud-Sprach-/KI-Verarbeitung',
          'Das unterstützt DSGVO-Datenminimierung und -Datenresidenz von Grund auf',
          'Cloud-Geräte senden personenbezogene Daten an Hersteller-Server, die als Verarbeiter agieren',
          'Für Details konsultieren Sie für Ihre Situation eine Datenschutz-Fachperson',
        ],
      },
      gdprHome: {
        id: 'gdpr-home',
        title: 'DSGVO und das vernetzte Zuhause',
        content:
          '**Die DSGVO regelt personenbezogene Daten, und ein Smart Home erzeugt davon reichlich: Anwesenheit, Routinen, Sprache und Video.** Wo diese Daten verarbeitet werden, bestimmt, wer beteiligt und wie exponiert sie sind.',
        items: [
          'Smart-Home-Daten (Anwesenheit, Aufnahmen, Aufzeichnungen) sind personenbezogene Daten nach der DSGVO.',
          'Cloud-Verarbeitung führt einen Auftragsverarbeiter ein, der diese Daten verarbeitet (DSGVO Art. 28).',
          'Lokale Verarbeitung hält Sie in der Kontrolle, ohne externen Verarbeiter.',
        ],
      },
      cloudData: {
        id: 'cloud-data',
        title: 'Wohin Cloud-Geräte Daten senden',
        content:
          '**Cloud-Smart-Home-Geräte übertragen Nutzungsdaten, Sprachanfragen und Kameraaufnahmen an Hersteller-Server, manchmal außerhalb der EU.** Das macht den Hersteller zum Verarbeiter und kann Fragen zur Datenübermittlung aufwerfen.',
        items: [
          'Nutzungs- und Telemetriedaten fließen in die Analysesysteme des Herstellers.',
          'Sprachassistenten verarbeiten Aufnahmen in der Cloud.',
          'Kameraaufnahmen werden auf Hersteller-Servern gespeichert – siehe [Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks).',
        ],
      },
      residency: {
        id: 'residency',
        title: 'Datenresidenz durch lokale Verarbeitung',
        content:
          '**Lokale Verarbeitung erreicht Datenresidenz standardmäßig: Die Daten verlassen Ihr Zuhause nie, sodass sie in Ihrer Rechtsordnung bleiben.** Das unterstützt direkt die DSGVO-Prinzipien Datenresidenz und Datenminimierung.',
        items: [
          'Ein lokaler Hub (Home Assistant) verarbeitet Automatisierungen vor Ort – siehe [der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide).',
          'Es findet keine grenzüberschreitende Übermittlung statt, weil keine Daten das Gerät verlassen.',
          'Sie minimieren die Datenerhebung auf das, was in Ihrem Zuhause bleibt.',
        ],
      },
      localVoiceAi: {
        id: 'local-voice-ai',
        title: 'Lokale Sprache und KI = kein Auftragsverarbeiter',
        content:
          '**Lokale Sprache und ein lokales LLM entfernen den Cloud-Verarbeiter für Ihre sensibelsten Daten – Ihre Sprache und Ihren Wohnkontext.** Alles wird auf Ihrer Hardware berechnet.',
        items: [
          'Lokales Whisper und Piper halten die Sprachverarbeitung auf dem Gerät – siehe [einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home).',
          'Ein lokales LLM über die [Ollama-Anbindung](/de/smart-home/home-assistant-ollama-integration) hält die natürlichsprachliche Verarbeitung lokal.',
          'Für private lokale KI allgemein siehe [was lokale LLMs sind](/de/local-llms/what-are-local-llms) (clusterübergreifend).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'EU-Käufer-Checkliste',
        content:
          '**Bevorzugen Sie lokal-fähige Geräte, einen lokalen Hub und lokale Sprache/KI, um Ihre Haushaltsdaten zu Hause zu halten.** Die Tabelle stellt Cloud und lokal an DSGVO-relevanten Punkten gegenüber.',
        columns: ['Faktor', 'Cloud-Gerät', 'Lokales Setup'],
        rows: [
          { 'Faktor': 'Datenort', 'Cloud-Gerät': 'Hersteller-Rechenzentrum', 'Lokales Setup': 'Ihr Zuhause' },
          { 'Faktor': 'Verarbeiter', 'Cloud-Gerät': 'Hersteller (Dritter)', 'Lokales Setup': 'Kein externer' },
          { 'Faktor': 'Sprachdaten', 'Cloud-Gerät': 'In der Cloud verarbeitet', 'Lokales Setup': 'Auf dem Gerät (Whisper/Piper)' },
          { 'Faktor': 'DSGVO-Lage', 'Cloud-Gerät': 'Übermittlungs-/Verarbeiterfragen', 'Lokales Setup': 'Datenresidenz von Grund auf' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Sind Smart-Home-Geräte DSGVO-relevant?', a: 'Ja. Smart-Home-Geräte erzeugen personenbezogene Daten wie Anwesenheit, Routinen, Sprache und Video. Nach der DSGVO ist wichtig, wie und wo diese Daten verarbeitet werden, und Cloud-Geräte, die sie an Hersteller-Server senden, führen einen Auftragsverarbeiter ein.' },
          { q: 'Bedeutet lokal, dass es keinen Verarbeiter gibt?', a: 'Für Ihre Haushaltsdaten ja – lokale Verarbeitung hält alles auf Ihrer eigenen Hardware, sodass kein externer Beteiligter sie verarbeitet. Sie behalten die Kontrolle über die Daten, was die DSGVO-Prinzipien Datenminimierung und Datenresidenz unterstützt.' },
          { q: 'Sind Sprachdaten ein besonderes DSGVO-Thema?', a: 'Sprachaufnahmen sind sensible personenbezogene Daten, und Cloud-Assistenten verarbeiten sie auf Hersteller-Servern. Lokale Sprache-zu-Text (Whisper) und Text-zu-Sprache (Piper) halten die Sprachverarbeitung auf dem Gerät und vermeiden einen Cloud-Verarbeiter für Ihre Sprache.' },
          { q: 'Gibt es EU-gehostete Smart-Home-Optionen?', a: 'Ein Local-First-Setup ist die stärkste Datenschutzoption, weil Daten Ihr Zuhause nie verlassen und Fragen zum Hosting-Ort vollständig entfallen. Prüfen Sie bei genutzten Cloud-Funktionen, wo der Anbieter Daten verarbeitet, und konsultieren Sie für Ihren konkreten Bedarf eine Datenschutz-Fachperson.' },
          { q: 'Welche DSGVO-Pflichten betreffen mein Smart Home konkret?', a: 'Relevant sind vor allem Art. 5 (Datenminimierung, Speicherbegrenzung) und Art. 28 (Auftragsverarbeitung), sobald ein Cloud-Anbieter Ihre Daten verarbeitet. Ein lokales Setup ohne externen Verarbeiter reduziert diese Pflichten erheblich, da keine Auftragsverarbeitung stattfindet und die Daten in Ihrer Rechtsordnung bleiben.' },
          { q: 'Ist ein lokales Smart Home für Heimbüros und den deutschen Mittelstand geeignet?', a: 'Ja. Für Heimbüros und KMU im DACH-Raum hält ein lokales Smart Home Geräte-, Sprach- und Kameradaten vor Ort, was sich an den BSI-Grundschutz-Katalogen orientiert und die DSGVO-Dokumentation vereinfacht, weil keine Auftragsverarbeitung durch Dritte erfolgt. Für die konkrete Umsetzung empfiehlt sich eine fachkundige Datenschutzberatung.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks) – die Risiken, die DSGVO-freundliche Setups vermeiden',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – den privaten Stack bauen',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – lokale KI, kein Cloud-Verarbeiter',
          '[Was lokale LLMs sind](/de/local-llms/what-are-local-llms) – clusterübergreifend: private lokale KI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ein DSGVO-freundliches privates Smart Home bauen (EU, 2026)',
      description: 'Ein DSGVO-freundliches privates Smart Home bauen: Datenresidenz, keine Cloud-Verarbeitung, lokale Sprache und KI. Ein EU-Leitfaden, um Smart-Home-Daten auf Ihrer Hardware zu halten.',
      url: 'https://www.promptquorum.com/de/smart-home/private-smart-home-gdpr',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'DSGVO' }, { '@type': 'Thing', name: 'Smart-Home-Datenschutz' }, { '@type': 'Thing', name: 'Datenresidenz' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Sind Smart-Home-Geräte DSGVO-relevant?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Sie erzeugen personenbezogene Daten wie Anwesenheit, Routinen, Sprache und Video. Cloud-Geräte, die sie an Hersteller-Server senden, führen nach der DSGVO einen Auftragsverarbeiter ein.' } },
        { '@type': 'Question', name: 'Bedeutet lokal, dass es keinen Verarbeiter gibt?', acceptedAnswer: { '@type': 'Answer', text: 'Für Ihre Haushaltsdaten ja – lokale Verarbeitung hält alles auf Ihrer Hardware, sodass kein externer Beteiligter sie verarbeitet, was DSGVO-Minimierung und -Datenresidenz unterstützt.' } },
        { '@type': 'Question', name: 'Sind Sprachdaten ein besonderes DSGVO-Thema?', acceptedAnswer: { '@type': 'Answer', text: 'Sprachaufnahmen sind sensible Daten, und Cloud-Assistenten verarbeiten sie auf Hersteller-Servern. Lokales Whisper und Piper halten die Sprachverarbeitung auf dem Gerät.' } },
        { '@type': 'Question', name: 'Gibt es EU-gehostete Smart-Home-Optionen?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Local-First-Setup ist die stärkste Option, weil Daten Ihr Zuhause nie verlassen. Prüfen Sie bei Cloud-Funktionen, wo der Anbieter Daten verarbeitet, und konsultieren Sie eine Fachperson.' } },
        { '@type': 'Question', name: 'Welche DSGVO-Pflichten betreffen mein Smart Home konkret?', acceptedAnswer: { '@type': 'Answer', text: 'Vor allem Art. 5 (Datenminimierung) und Art. 28 (Auftragsverarbeitung), sobald ein Cloud-Anbieter Ihre Daten verarbeitet. Ein lokales Setup ohne externen Verarbeiter reduziert diese Pflichten erheblich.' } },
        { '@type': 'Question', name: 'Ist ein lokales Smart Home für Heimbüros und den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Für Heimbüros und KMU im DACH-Raum hält es Daten vor Ort, orientiert an den BSI-Grundschutz-Katalogen, und vereinfacht die DSGVO-Dokumentation, da keine Auftragsverarbeitung durch Dritte erfolgt.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Construir un Smart Home Privado Compatible con el RGPD (UE, 2026)',
    seoTitle: 'Smart Home Privado Compatible con el RGPD (UE 2026)',
    intro:
      'Un smart home local mantiene todo el procesamiento en tu propio hardware en casa, apoyando la minimización de datos y la residencia del RGPD por diseño porque no interviene ningún encargado del tratamiento externo. Esta guía centrada en la UE explica cómo se aplica el RGPD a los dispositivos conectados, a dónde envían datos los dispositivos en la nube, cómo el procesamiento local logra la residencia, y ofrece una lista de compra para una configuración privada y compatible con el RGPD.',
    metaDescription:
      'Construye un smart home privado compatible con el RGPD: residencia de datos, sin procesamiento en la nube, voz e IA locales. Una guía UE para mantener los datos del hogar en tu hardware.',
    twitterDescription:
      'Un smart home compatible con el RGPD mantiene el procesamiento local: residencia de datos por diseño, sin encargado externo, voz e IA locales. Una guía UE.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Hogares de la UE que quieren un smart home conforme a la privacidad',
    primaryTerm: 'GDPR private smart home',
    targetKeywords: [
      'rgpd smart home privacidad',
      'smart home privado ue',
      'rgpd dispositivos conectados',
      'residencia datos smart home',
      'smart home local rgpd',
    ],
    leadAnswerBlock:
      '**Un smart home local apoya el RGPD por diseño: el procesamiento ocurre en tu propio hardware en casa, así que los datos de dispositivos, voz y cámara se minimizan y se mantienen en tu jurisdicción sin un encargado del tratamiento externo.** La voz local y la IA local eliminan por completo al encargado en la nube.',
    quickAnswerTop: {
      es: {
        question: '¿Es un smart home local compatible con el RGPD?',
        answer:
          'Sí. Como un smart home local procesa los datos de dispositivos, voz y cámara en tu propio hardware, apoya los principios del RGPD de minimización de datos y residencia por diseño, y no hay un encargado externo que trate los datos de tu hogar. Los dispositivos en la nube, en cambio, envían datos personales a servidores del fabricante que actúan como encargados.',
        bullets: [
          'El procesamiento local mantiene los datos en tu casa y jurisdicción',
          'Sin encargado del tratamiento externo para los datos de tu hogar',
          'La voz local (Whisper/Piper) evita el procesamiento de voz en la nube',
          'Apoya la minimización de datos y la residencia por diseño',
          'Los dispositivos en la nube envían datos personales a encargados del fabricante',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'El RGPD y el hogar conectado', anchor: 'gdpr-home' },
      { label: 'A dónde envían datos los dispositivos en la nube', anchor: 'cloud-data' },
      { label: 'Residencia de datos vía procesamiento local', anchor: 'residency' },
      { label: 'Voz e IA locales', anchor: 'local-voice-ai' },
      { label: 'Lista de compra UE', anchor: 'checklist' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un smart home local procesa los datos de dispositivos, voz y cámara en tu propio hardware, apoyando la minimización y la residencia del RGPD sin un encargado del tratamiento externo.' },
      { type: 'plain-terms', content: 'Bajo el RGPD, enviar los datos de tu hogar a la nube de una empresa convierte a esa empresa en encargado del tratamiento. Un smart home local lo evita manteniendo todo el procesamiento en hardware de tu casa, así que los datos se quedan en tu jurisdicción y nadie externo los trata.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'El procesamiento local mantiene los datos de dispositivos, voz y cámara en tu casa y jurisdicción',
          'Sin nube, no hay un encargado del tratamiento externo que trate los datos de tu hogar',
          'La voz local (Whisper + Piper) y un LLM local evitan el procesamiento de voz/IA en la nube',
          'Esto apoya la minimización de datos y la residencia del RGPD por diseño',
          'Los dispositivos en la nube envían datos personales a servidores del fabricante que actúan como encargados',
          'Para detalles, consulta a un profesional de protección de datos para tu situación',
        ],
      },
      gdprHome: {
        id: 'gdpr-home',
        title: 'El RGPD y el hogar conectado',
        content:
          '**El RGPD regula los datos personales, y un smart home genera muchos: presencia, rutinas, voz y vídeo.** Dónde se procesan esos datos determina quién interviene y cuán expuestos están.',
        items: [
          'Los datos del smart home (presencia, grabaciones, vídeo) son datos personales bajo el RGPD.',
          'El procesamiento en la nube introduce un encargado del tratamiento externo (RGPD art. 28).',
          'El procesamiento local te mantiene en control sin encargado externo.',
        ],
      },
      cloudData: {
        id: 'cloud-data',
        title: 'A dónde envían datos los dispositivos en la nube',
        content:
          '**Los dispositivos de smart home en la nube transmiten datos de uso, consultas de voz y vídeo de cámaras a servidores del fabricante, a veces fuera de la UE.** Eso convierte al fabricante en encargado y puede plantear cuestiones de transferencia de datos.',
        items: [
          'El uso y la telemetría fluyen a los sistemas de análisis del fabricante.',
          'Los asistentes de voz procesan las grabaciones en la nube.',
          'El vídeo de cámaras se almacena en servidores del fabricante — consulta [riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks).',
        ],
      },
      residency: {
        id: 'residency',
        title: 'Residencia de datos vía procesamiento local',
        content:
          '**El procesamiento local logra la residencia de datos por defecto: los datos nunca salen de tu casa, así que se quedan en tu jurisdicción.** Esto apoya directamente los principios del RGPD de residencia y minimización.',
        items: [
          'Un hub local (Home Assistant) procesa las automatizaciones in situ — consulta [la guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide).',
          'No hay transferencia transfronteriza porque no se envían datos fuera del dispositivo.',
          'Minimizas la recopilación de datos a lo que se queda en tu casa.',
        ],
      },
      localVoiceAi: {
        id: 'local-voice-ai',
        title: 'Voz e IA locales = sin encargado del tratamiento externo',
        content:
          '**La voz local y un LLM local eliminan al encargado en la nube para tus datos más sensibles: tu habla y el contexto de tu hogar.** Todo se calcula en tu hardware.',
        items: [
          'Whisper y Piper locales mantienen el procesamiento de voz en el dispositivo — consulta [montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home).',
          'Un LLM local vía la [integración de Ollama](/es/smart-home/home-assistant-ollama-integration) mantiene el procesamiento de lenguaje natural local.',
          'Para IA local privada en general, consulta [qué son los LLM locales](/es/local-llms/what-are-local-llms) (entre clústeres).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Lista de compra UE',
        content:
          '**Prioriza dispositivos con capacidad local, un hub local y voz/IA locales para mantener los datos de tu hogar en casa.** La tabla contrasta nube y local en puntos relevantes para el RGPD. Aunque esta guía se centra en el RGPD de la UE, la lógica de mantener el procesamiento local también encaja con leyes de Latinoamérica como la LGPD (Brasil), la LFPDPPP (México) o la Ley 1581 (Colombia).',
        columns: ['Factor', 'Dispositivo en la nube', 'Configuración local'],
        rows: [
          { 'Factor': 'Ubicación de datos', 'Dispositivo en la nube': 'Centro de datos del fabricante', 'Configuración local': 'Tu casa' },
          { 'Factor': 'Encargado', 'Dispositivo en la nube': 'Fabricante (tercero)', 'Configuración local': 'Ninguno externo' },
          { 'Factor': 'Datos de voz', 'Dispositivo en la nube': 'Procesados en la nube', 'Configuración local': 'En el dispositivo (Whisper/Piper)' },
          { 'Factor': 'Postura RGPD', 'Dispositivo en la nube': 'Cuestiones de transferencia/encargado', 'Configuración local': 'Residencia por diseño' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Son los dispositivos de smart home relevantes para el RGPD?', a: 'Sí. Los dispositivos de smart home generan datos personales como presencia, rutinas, voz y vídeo. Bajo el RGPD importa cómo y dónde se procesan esos datos, y los dispositivos en la nube que los envían a servidores del fabricante introducen un encargado del tratamiento externo.' },
          { q: '¿Local significa que no hay encargado?', a: 'Para los datos de tu hogar, sí: el procesamiento local mantiene todo en tu propio hardware, así que ninguna parte externa los trata. Tú mantienes el control de los datos, lo que apoya los principios del RGPD de minimización y residencia.' },
          { q: '¿Son los datos de voz un problema particular del RGPD?', a: 'Las grabaciones de voz son datos personales sensibles, y los asistentes en la nube las procesan en servidores del fabricante. Usar voz-a-texto (Whisper) y texto-a-voz (Piper) locales mantiene el procesamiento de voz en el dispositivo, evitando un encargado en la nube para tu habla.' },
          { q: '¿Hay opciones de smart home alojadas en la UE?', a: 'Una configuración local-first es la opción de privacidad más fuerte porque los datos nunca salen de tu casa, eliminando por completo las cuestiones de ubicación del alojamiento. Para cualquier función en la nube que uses, comprueba dónde procesa los datos el proveedor y consulta a un profesional de protección de datos para tus necesidades concretas.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks) — los riesgos que evitan las configuraciones compatibles con el RGPD',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — construir el stack privado',
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — IA local, sin encargado en la nube',
          '[Qué son los LLM locales](/es/local-llms/what-are-local-llms) — entre clústeres: IA local privada',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construir un Smart Home Privado Compatible con el RGPD (UE, 2026)',
      description: 'Construye un smart home privado compatible con el RGPD: residencia de datos, sin procesamiento en la nube, voz e IA locales. Una guía UE para mantener los datos del hogar en tu hardware.',
      url: 'https://www.promptquorum.com/es/smart-home/private-smart-home-gdpr',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'RGPD' }, { '@type': 'Thing', name: 'Privacidad del smart home' }, { '@type': 'Thing', name: 'Residencia de datos' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Son los dispositivos de smart home relevantes para el RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Generan datos personales como presencia, rutinas, voz y vídeo. Los dispositivos en la nube que los envían a servidores del fabricante introducen un encargado del tratamiento externo bajo el RGPD.' } },
        { '@type': 'Question', name: '¿Local significa que no hay encargado?', acceptedAnswer: { '@type': 'Answer', text: 'Para los datos de tu hogar, sí: el procesamiento local mantiene todo en tu hardware, así que ninguna parte externa los trata, apoyando la minimización y residencia del RGPD.' } },
        { '@type': 'Question', name: '¿Son los datos de voz un problema particular del RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'Las grabaciones de voz son datos sensibles, y los asistentes en la nube las procesan en servidores del fabricante. Whisper y Piper locales mantienen el procesamiento de voz en el dispositivo.' } },
        { '@type': 'Question', name: '¿Hay opciones de smart home alojadas en la UE?', acceptedAnswer: { '@type': 'Answer', text: 'Una configuración local-first es la opción más fuerte porque los datos nunca salen de tu casa. Para funciones en la nube, comprueba dónde procesa los datos el proveedor y consulta a un profesional.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Construire une Maison Connectée Privée Conforme au RGPD (UE, 2026)',
    seoTitle: 'Maison Connectée Privée Conforme au RGPD (UE 2026)',
    intro:
      'Une maison connectée locale garde tout le traitement sur votre propre matériel chez vous, soutenant la minimisation des données et la résidence du RGPD par conception car aucun sous-traitant externe n\'intervient. Ce guide axé sur l\'UE explique comment le RGPD s\'applique aux appareils connectés, où les appareils cloud envoient les données, comment le traitement local assure la résidence, et propose une liste d\'achat pour une configuration privée et conforme au RGPD.',
    metaDescription:
      'Construire une maison connectée privée conforme au RGPD : résidence des données, pas de traitement cloud, voix et IA locales. Un guide UE pour garder les données du foyer sur votre matériel.',
    twitterDescription:
      'Une maison connectée conforme au RGPD garde le traitement local : résidence des données par conception, pas de sous-traitant externe, voix et IA locales. Un guide UE.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Foyers de l\'UE voulant une maison connectée conforme à la vie privée',
    primaryTerm: 'GDPR private smart home',
    targetKeywords: [
      'rgpd maison connectée vie privée',
      'maison connectée privée ue',
      'rgpd appareils connectés',
      'résidence données maison connectée',
      'maison connectée locale rgpd',
    ],
    leadAnswerBlock:
      '**Une maison connectée locale soutient le RGPD par conception : le traitement a lieu sur votre propre matériel chez vous, donc les données d\'appareils, de voix et de caméra sont minimisées et gardées dans votre juridiction sans sous-traitant externe.** La voix locale et l\'IA locale suppriment entièrement le sous-traitant cloud.',
    quickAnswerTop: {
      fr: {
        question: 'Une maison connectée locale est-elle conforme au RGPD ?',
        answer:
          'Oui. Parce qu\'une maison connectée locale traite les données d\'appareils, de voix et de caméra sur votre propre matériel, elle soutient les principes du RGPD de minimisation des données et de résidence par conception, et aucun sous-traitant externe ne traite les données de votre foyer. Les appareils cloud, en revanche, envoient des données personnelles à des serveurs du fabricant qui agissent comme sous-traitants.',
        bullets: [
          'Le traitement local garde les données chez vous et dans votre juridiction',
          'Aucun sous-traitant externe pour les données de votre foyer',
          'La voix locale (Whisper/Piper) évite le traitement vocal cloud',
          'Soutient la minimisation des données et la résidence par conception',
          'Les appareils cloud envoient des données personnelles à des sous-traitants du fabricant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Le RGPD et le foyer connecté', anchor: 'gdpr-home' },
      { label: 'Où les appareils cloud envoient les données', anchor: 'cloud-data' },
      { label: 'Résidence des données via traitement local', anchor: 'residency' },
      { label: 'Voix et IA locales', anchor: 'local-voice-ai' },
      { label: 'Liste d\'achat UE', anchor: 'checklist' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Une maison connectée locale traite les données d\'appareils, de voix et de caméra sur votre propre matériel, soutenant la minimisation et la résidence du RGPD sans sous-traitant externe.' },
      { type: 'plain-terms', content: 'Selon le RGPD, envoyer les données de votre foyer à un cloud d\'entreprise fait de cette entreprise un sous-traitant. Une maison connectée locale l\'évite en gardant tout le traitement sur du matériel chez vous, donc les données restent dans votre juridiction et aucune partie extérieure ne les traite.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Le traitement local garde les données d\'appareils, de voix et de caméra chez vous et dans votre juridiction',
          'Sans cloud, aucun sous-traitant externe ne traite les données de votre foyer',
          'La voix locale (Whisper + Piper) et un LLM local évitent le traitement vocal/IA cloud',
          'Cela soutient la minimisation des données et la résidence du RGPD par conception',
          'Les appareils cloud envoient des données personnelles à des serveurs du fabricant agissant comme sous-traitants',
          'Pour les détails, consultez un professionnel de la protection des données pour votre situation',
        ],
      },
      gdprHome: {
        id: 'gdpr-home',
        title: 'Le RGPD et le foyer connecté',
        content:
          '**Le RGPD régit les données personnelles, et une maison connectée en génère beaucoup : présence, routines, voix et vidéo.** Où ces données sont traitées détermine qui intervient et à quel point elles sont exposées.',
        items: [
          'Les données de la maison connectée (présence, enregistrements, images) sont des données personnelles selon le RGPD.',
          'Le traitement cloud introduit un sous-traitant externe traitant ces données (RGPD art. 28).',
          'Le traitement local vous garde aux commandes, sans sous-traitant externe.',
        ],
      },
      cloudData: {
        id: 'cloud-data',
        title: 'Où les appareils cloud envoient les données',
        content:
          '**Les appareils de maison connectée cloud transmettent les données d\'usage, les requêtes vocales et les images de caméra aux serveurs du fabricant, parfois hors de l\'UE.** Cela fait du fabricant un sous-traitant et peut soulever des questions de transfert de données.',
        items: [
          'L\'usage et la télémétrie circulent vers les systèmes d\'analyse du fabricant.',
          'Les assistants vocaux traitent les enregistrements dans le cloud.',
          'Les images de caméra sont stockées sur les serveurs du fabricant — voir [risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks).',
        ],
      },
      residency: {
        id: 'residency',
        title: 'Résidence des données via traitement local',
        content:
          '**Le traitement local assure la résidence des données par défaut : les données ne quittent jamais votre foyer, elles restent donc dans votre juridiction.** Cela soutient directement les principes du RGPD de résidence et de minimisation.',
        items: [
          'Un hub local (Home Assistant) traite les automatisations sur place — voir [le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide).',
          'Aucun transfert transfrontalier n\'a lieu car aucune donnée n\'est envoyée hors de l\'appareil.',
          'Vous minimisez la collecte de données à ce qui reste chez vous.',
        ],
      },
      localVoiceAi: {
        id: 'local-voice-ai',
        title: 'Voix et IA locales = pas de sous-traitant externe',
        content:
          '**La voix locale et un LLM local suppriment le sous-traitant cloud pour vos données les plus sensibles — votre parole et le contexte de votre foyer.** Tout est calculé sur votre matériel. Pour les données professionnelles sensibles, la CNIL recommande un traitement local de l\'IA, ce qu\'un setup local-first satisfait par conception.',
        items: [
          'Whisper et Piper locaux gardent le traitement vocal sur l\'appareil — voir [construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home).',
          'Un LLM local via l\'[intégration Ollama](/fr/smart-home/home-assistant-ollama-integration) garde le traitement du langage naturel local.',
          'Pour l\'IA locale privée en général, voir [qu\'est-ce qu\'un LLM local](/fr/local-llms/what-are-local-llms) (inter-clusters).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Liste d\'achat UE',
        content:
          '**Privilégiez les appareils à capacité locale, un hub local et la voix/IA locales pour garder les données de votre foyer chez vous.** Le tableau oppose cloud et local sur des points pertinents pour le RGPD.',
        columns: ['Facteur', 'Appareil cloud', 'Configuration locale'],
        rows: [
          { 'Facteur': 'Emplacement des données', 'Appareil cloud': 'Centre de données du fabricant', 'Configuration locale': 'Votre foyer' },
          { 'Facteur': 'Sous-traitant', 'Appareil cloud': 'Fabricant (tiers)', 'Configuration locale': 'Aucun externe' },
          { 'Facteur': 'Données vocales', 'Appareil cloud': 'Traitées dans le cloud', 'Configuration locale': 'Sur l\'appareil (Whisper/Piper)' },
          { 'Facteur': 'Posture RGPD', 'Appareil cloud': 'Questions de transfert/sous-traitant', 'Configuration locale': 'Résidence par conception' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Les appareils de maison connectée sont-ils concernés par le RGPD ?', a: 'Oui. Les appareils de maison connectée génèrent des données personnelles telles que présence, routines, voix et vidéo. Selon le RGPD, la façon et le lieu de traitement de ces données importent, et les appareils cloud qui les envoient aux serveurs du fabricant introduisent un sous-traitant externe.' },
          { q: 'Local signifie-t-il qu\'il n\'y a pas de sous-traitant ?', a: 'Pour les données de votre foyer, oui — le traitement local garde tout sur votre propre matériel, donc aucune partie externe ne les traite. Vous gardez le contrôle des données, ce qui soutient les principes du RGPD de minimisation et de résidence.' },
          { q: 'Les données vocales sont-elles un problème particulier du RGPD ?', a: 'Les enregistrements vocaux sont des données personnelles sensibles, et les assistants cloud les traitent sur les serveurs du fabricant. Utiliser la reconnaissance vocale (Whisper) et la synthèse vocale (Piper) locales garde le traitement vocal sur l\'appareil, évitant un sous-traitant cloud pour votre parole.' },
          { q: 'Existe-t-il des options de maison connectée hébergées dans l\'UE ?', a: 'Une configuration local-first est l\'option de confidentialité la plus forte car les données ne quittent jamais votre foyer, supprimant entièrement les questions de lieu d\'hébergement. Pour toute fonction cloud que vous utilisez, vérifiez où le fournisseur traite les données et consultez un professionnel de la protection des données pour vos besoins spécifiques.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks) — les risques que les configurations conformes au RGPD évitent',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — construire le stack privé',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — IA locale, pas de sous-traitant cloud',
          '[Qu\'est-ce qu\'un LLM local](/fr/local-llms/what-are-local-llms) — inter-clusters : IA locale privée',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construire une Maison Connectée Privée Conforme au RGPD (UE, 2026)',
      description: 'Construire une maison connectée privée conforme au RGPD : résidence des données, pas de traitement cloud, voix et IA locales. Un guide UE pour garder les données du foyer sur votre matériel.',
      url: 'https://www.promptquorum.com/fr/smart-home/private-smart-home-gdpr',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'RGPD' }, { '@type': 'Thing', name: 'Confidentialité de la maison connectée' }, { '@type': 'Thing', name: 'Résidence des données' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Les appareils de maison connectée sont-ils concernés par le RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Ils génèrent des données personnelles telles que présence, routines, voix et vidéo. Les appareils cloud qui les envoient aux serveurs du fabricant introduisent un sous-traitant externe selon le RGPD.' } },
        { '@type': 'Question', name: 'Local signifie-t-il qu\'il n\'y a pas de sous-traitant ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour les données de votre foyer, oui — le traitement local garde tout sur votre matériel, donc aucune partie externe ne les traite, soutenant la minimisation et la résidence du RGPD.' } },
        { '@type': 'Question', name: 'Les données vocales sont-elles un problème particulier du RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'Les enregistrements vocaux sont des données sensibles, et les assistants cloud les traitent sur les serveurs du fabricant. Whisper et Piper locaux gardent le traitement vocal sur l\'appareil.' } },
        { '@type': 'Question', name: 'Existe-t-il des options de maison connectée hébergées dans l\'UE ?', acceptedAnswer: { '@type': 'Answer', text: 'Une configuration local-first est l\'option la plus forte car les données ne quittent jamais votre foyer. Pour les fonctions cloud, vérifiez où le fournisseur traite les données et consultez un professionnel.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'GDPR に配慮したプライベートなスマートホームを作る（EU・2026）',
    seoTitle: 'GDPR 対応のプライベートなスマートホーム（EU 2026）',
    intro:
      'ローカルスマートホームは、すべての処理を自宅の自分のハードウェアに保ち、外部の処理者が関与しないため、GDPR のデータ最小化とデータレジデンシーを設計上サポートします。本 EU 向けガイドは、GDPR が接続機器にどう適用されるか、クラウド機器がどこへデータを送るか、ローカル処理がどうレジデンシーを実現するかを説明し、プライベートで GDPR に配慮した構成のための購入チェックリストを示します。',
    metaDescription:
      'GDPR に配慮したプライベートなスマートホームを作る：データレジデンシー、クラウド処理なし、ローカル音声とAI。スマートホームのデータを自分のハードウェアに保つ EU ガイド。',
    twitterDescription:
      'GDPR に配慮したスマートホームは処理をローカルに保ちます：設計上のデータレジデンシー、外部処理者なし、ローカル音声とAI。EU ガイド。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'プライバシーに準拠したスマートホームを望む EU の世帯',
    primaryTerm: 'GDPR private smart home',
    targetKeywords: [
      'gdpr スマートホーム プライバシー',
      'プライベート スマートホーム eu',
      'gdpr 接続機器',
      'データレジデンシー スマートホーム',
      'ローカル スマートホーム gdpr',
    ],
    leadAnswerBlock:
      '**ローカルスマートホームは GDPR を設計上サポートします：処理は自宅の自分のハードウェアで行われるため、機器・音声・カメラのデータが最小化され、外部の処理者なしで自分の管轄内に保たれます。** ローカル音声とローカルAIはクラウドの処理者を完全に取り除きます。',
    quickAnswerTop: {
      ja: {
        question: 'ローカルスマートホームは GDPR に配慮していますか？',
        answer:
          'はい。ローカルスマートホームは機器・音声・カメラのデータを自分のハードウェアで処理するため、データ最小化とレジデンシーという GDPR の原則を設計上サポートし、世帯のデータを扱う外部の処理者がいません。対照的に、クラウド機器は個人データを処理者として動作するメーカーのサーバーへ送ります。',
        bullets: [
          'ローカル処理はデータを自宅と管轄内に保つ',
          '世帯データに外部の処理者がいない',
          'ローカル音声（Whisper/Piper）はクラウド音声処理を避ける',
          'データ最小化とレジデンシーを設計上サポート',
          'クラウド機器は個人データをメーカーの処理者へ送る',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'GDPR と接続された家', anchor: 'gdpr-home' },
      { label: 'クラウド機器はどこへデータを送るか', anchor: 'cloud-data' },
      { label: 'ローカル処理によるデータレジデンシー', anchor: 'residency' },
      { label: 'ローカル音声とAI', anchor: 'local-voice-ai' },
      { label: 'EU 購入チェックリスト', anchor: 'checklist' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ローカルスマートホームは機器・音声・カメラのデータを自分のハードウェアで処理し、外部の処理者なしで GDPR のデータ最小化とレジデンシーをサポートします。' },
      { type: 'plain-terms', content: 'GDPR の下では、世帯のデータを企業のクラウドへ送ると、その企業がデータ処理者になります。ローカルスマートホームは、すべての処理を自宅のハードウェアに保つことでこれを避け、データが管轄内にとどまり、外部の誰も扱わないようにします。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'ローカル処理は機器・音声・カメラのデータを自宅と管轄内に保つ',
          'クラウドがなければ、世帯データを扱う外部の処理者は存在しない',
          'ローカル音声（Whisper + Piper）とローカルLLMはクラウドの音声/AI処理を避ける',
          'これは GDPR のデータ最小化とレジデンシーを設計上サポートする',
          'クラウド機器は処理者として動作するメーカーのサーバーへ個人データを送る',
          '詳細は、あなたの状況についてデータ保護の専門家に相談してください',
        ],
      },
      gdprHome: {
        id: 'gdpr-home',
        title: 'GDPR と接続された家',
        content:
          '**GDPR は個人データを規律し、スマートホームはそれを大量に生成します：在宅、習慣、音声、映像。** そのデータがどこで処理されるかが、誰が関与しどれだけ露出するかを決めます。',
        items: [
          'スマートホームのデータ（在宅、録音、映像）は GDPR 上の個人データです。',
          'クラウド処理は、そのデータを扱う外部の処理者を導入します（GDPR 第28条）。',
          'ローカル処理は外部の処理者なしであなたを主導権に保ちます。',
        ],
      },
      cloudData: {
        id: 'cloud-data',
        title: 'クラウド機器はどこへデータを送るか',
        content:
          '**クラウド型スマートホーム機器は、利用データ・音声クエリ・カメラ映像をメーカーのサーバーへ、ときに EU 外へ送信します。** それはメーカーを処理者にし、データ越境移転の問題を生じ得ます。',
        items: [
          '利用とテレメトリはメーカーの分析システムへ流れます。',
          '音声アシスタントは録音をクラウドで処理します。',
          'カメラ映像はメーカーのサーバーに保存されます——[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks)を参照。',
        ],
      },
      residency: {
        id: 'residency',
        title: 'ローカル処理によるデータレジデンシー',
        content:
          '**ローカル処理は標準でデータレジデンシーを実現します：データは家を出ないため、自分の管轄内にとどまります。** これは GDPR のレジデンシーと最小化の原則を直接サポートします。',
        items: [
          'ローカルハブ（Home Assistant）は自動化をその場で処理します——[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide)を参照。',
          '機器外へデータを送らないため、越境移転は発生しません。',
          '家にとどまるものへとデータ収集を最小化します。',
        ],
      },
      localVoiceAi: {
        id: 'local-voice-ai',
        title: 'ローカル音声とAI ＝ 外部の処理者なし',
        content:
          '**ローカル音声とローカルLLMは、あなたの最も機微なデータ——音声と住まいの文脈——についてクラウドの処理者を取り除きます。** すべてが自分のハードウェアで計算されます。日本でも、個人情報保護法（APPI）と経済産業省の AI ガバナンス指針は同様にデータ管理を重視しており、ローカル構成はこれに沿いやすくなります。',
        items: [
          'ローカルの Whisper と Piper は音声処理を機器上に保ちます——[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home)を参照。',
          '[Ollama 統合](/ja/smart-home/home-assistant-ollama-integration)経由のローカルLLMは自然言語処理をローカルに保ちます。',
          'プライベートなローカルAI全般は[ローカルLLMとは何か](/ja/local-llms/what-are-local-llms)（クラスター横断）を参照。',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'EU 購入チェックリスト',
        content:
          '**世帯のデータを家に保つため、ローカル対応機器、ローカルハブ、ローカル音声/AIを優先しましょう。** 表は GDPR に関連する点でクラウドとローカルを対比します。',
        columns: ['要素', 'クラウド機器', 'ローカル構成'],
        rows: [
          { '要素': 'データの所在', 'クラウド機器': 'メーカーのデータセンター', 'ローカル構成': 'あなたの家' },
          { '要素': '処理者', 'クラウド機器': 'メーカー（第三者）', 'ローカル構成': '外部にはなし' },
          { '要素': '音声データ', 'クラウド機器': 'クラウドで処理', 'ローカル構成': '機器上（Whisper/Piper）' },
          { '要素': 'GDPR の状況', 'クラウド機器': '移転/処理者の問題', 'ローカル構成': '設計上のレジデンシー' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'スマートホーム機器は GDPR に関係しますか？', a: 'はい。スマートホーム機器は在宅、習慣、音声、映像といった個人データを生成します。GDPR の下では、そのデータがどう・どこで処理されるかが重要で、メーカーのサーバーへ送るクラウド機器は外部の処理者を導入します。' },
          { q: 'ローカルなら処理者がいないということですか？', a: '世帯のデータについてはそうです——ローカル処理はすべてを自分のハードウェアに保つため、外部の当事者は処理しません。あなたがデータの主導権を保ち、GDPR のデータ最小化とレジデンシーの原則をサポートします。' },
          { q: '音声データは GDPR 上とくに問題ですか？', a: '音声録音は機微な個人データで、クラウドアシスタントはそれをメーカーのサーバーで処理します。ローカルの音声認識（Whisper）と音声合成（Piper）を使えば、音声処理を機器上に保ち、あなたの音声についてクラウドの処理者を避けられます。' },
          { q: 'EU でホストされるスマートホームの選択肢はありますか？', a: 'ローカルファースト構成は最も強力なプライバシーの選択肢です。データが家を出ないため、ホスティングの所在に関する問題が完全になくなります。利用するクラウド機能については、提供者がどこでデータを処理するかを確認し、具体的なニーズはデータ保護の専門家に相談してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks) — GDPR 配慮の構成が避けるリスク',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — プライベートな構成を作る',
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — ローカルAI、クラウドの処理者なし',
          '[ローカルLLMとは何か](/ja/local-llms/what-are-local-llms) — クラスター横断：プライベートなローカルAI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'GDPR に配慮したプライベートなスマートホームを作る（EU・2026）',
      description: 'GDPR に配慮したプライベートなスマートホームを作る：データレジデンシー、クラウド処理なし、ローカル音声とAI。スマートホームのデータを自分のハードウェアに保つ EU ガイド。',
      url: 'https://www.promptquorum.com/ja/smart-home/private-smart-home-gdpr',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'GDPR' }, { '@type': 'Thing', name: 'スマートホームのプライバシー' }, { '@type': 'Thing', name: 'データレジデンシー' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'スマートホーム機器は GDPR に関係しますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。在宅、習慣、音声、映像といった個人データを生成します。メーカーのサーバーへ送るクラウド機器は GDPR 上、外部の処理者を導入します。' } },
        { '@type': 'Question', name: 'ローカルなら処理者がいないということですか？', acceptedAnswer: { '@type': 'Answer', text: '世帯のデータについてはそうです——ローカル処理はすべてを自分のハードウェアに保つため、外部の当事者は処理せず、GDPR の最小化とレジデンシーをサポートします。' } },
        { '@type': 'Question', name: '音声データは GDPR 上とくに問題ですか？', acceptedAnswer: { '@type': 'Answer', text: '音声録音は機微なデータで、クラウドアシスタントはメーカーのサーバーで処理します。ローカルの Whisper と Piper は音声処理を機器上に保ちます。' } },
        { '@type': 'Question', name: 'EU でホストされるスマートホームの選択肢はありますか？', acceptedAnswer: { '@type': 'Answer', text: 'ローカルファースト構成が最も強力です。データが家を出ないためです。クラウド機能については提供者がどこで処理するかを確認し、専門家に相談してください。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Construir uma Casa Inteligente Privada Compatível com GDPR/LGPD (2026)',
    seoTitle: 'Casa Inteligente Privada Compatível com GDPR/LGPD (2026)',
    intro:
      'Uma casa inteligente local mantém todo o processamento no seu próprio hardware em casa, apoiando a minimização de dados e a residência por design porque nenhum operador externo está envolvido. Este guia explica como o GDPR (na UE) e a LGPD (no Brasil) se aplicam a dispositivos conectados, para onde os dispositivos na nuvem enviam dados, como o processamento local atinge a residência, e oferece uma lista de compra para uma configuração privada e compatível.',
    metaDescription:
      'Construa uma casa inteligente privada compatível com GDPR/LGPD: residência de dados, sem processamento na nuvem, voz e IA locais. Um guia para manter os dados do lar no seu hardware.',
    twitterDescription:
      'Uma casa inteligente compatível com GDPR/LGPD mantém o processamento local: residência de dados por design, sem operador externo, voz e IA locais.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Famílias que querem uma casa inteligente conforme à privacidade',
    primaryTerm: 'GDPR private smart home',
    targetKeywords: [
      'lgpd casa inteligente privacidade',
      'casa inteligente privada',
      'lgpd dispositivos conectados',
      'residência de dados casa inteligente',
      'casa inteligente local lgpd',
    ],
    leadAnswerBlock:
      '**Uma casa inteligente local apoia o GDPR e a LGPD por design: o processamento acontece no seu próprio hardware em casa, então os dados de dispositivos, voz e câmera são minimizados e mantidos na sua jurisdição sem um operador externo.** A voz local e a IA local eliminam por completo o operador na nuvem.',
    quickAnswerTop: {
      pt: {
        question: 'Uma casa inteligente local é compatível com a LGPD?',
        answer:
          'Sim. Como uma casa inteligente local processa os dados de dispositivos, voz e câmera no seu próprio hardware, ela apoia os princípios de minimização de dados e residência por design — presentes tanto no GDPR (UE) quanto na LGPD (Brasil) —, e não há um operador externo tratando os dados do seu lar. Dispositivos na nuvem, por outro lado, enviam dados pessoais a servidores do fabricante que atuam como operadores.',
        bullets: [
          'O processamento local mantém os dados na sua casa e jurisdição',
          'Sem operador externo para os dados do seu lar',
          'A voz local (Whisper/Piper) evita o processamento de voz na nuvem',
          'Apoia a minimização de dados e a residência por design',
          'Dispositivos na nuvem enviam dados pessoais a operadores do fabricante',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'GDPR/LGPD e o lar conectado', anchor: 'gdpr-home' },
      { label: 'Para onde os dispositivos na nuvem enviam dados', anchor: 'cloud-data' },
      { label: 'Residência de dados via processamento local', anchor: 'residency' },
      { label: 'Voz e IA locais', anchor: 'local-voice-ai' },
      { label: 'Lista de compra', anchor: 'checklist' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Uma casa inteligente local processa os dados de dispositivos, voz e câmera no seu próprio hardware, apoiando a minimização e a residência do GDPR/LGPD sem um operador externo.' },
      { type: 'plain-terms', content: 'Sob o GDPR e a LGPD, enviar os dados do seu lar para a nuvem de uma empresa torna essa empresa um operador de dados. Uma casa inteligente local evita isso mantendo todo o processamento em hardware na sua casa, então os dados ficam na sua jurisdição e ninguém externo os trata.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O processamento local mantém os dados de dispositivos, voz e câmera na sua casa e jurisdição',
          'Sem nuvem, não há um operador externo tratando os dados do seu lar',
          'A voz local (Whisper + Piper) e um LLM local evitam o processamento de voz/IA na nuvem',
          'Isso apoia a minimização de dados e a residência do GDPR/LGPD por design',
          'Dispositivos na nuvem enviam dados pessoais a servidores do fabricante que atuam como operadores',
          'Para detalhes, consulte um profissional de proteção de dados para a sua situação',
        ],
      },
      gdprHome: {
        id: 'gdpr-home',
        title: 'GDPR/LGPD e o lar conectado',
        content:
          '**O GDPR e a LGPD regem os dados pessoais, e uma casa inteligente gera muitos: presença, rotinas, voz e vídeo.** Onde esses dados são processados determina quem está envolvido e quão expostos eles estão.',
        items: [
          'Os dados da casa inteligente (presença, gravações, imagens) são dados pessoais sob o GDPR e a LGPD.',
          'O processamento na nuvem introduz um operador externo tratando esses dados (LGPD art. 5; GDPR art. 28).',
          'O processamento local mantém você no controle, sem operador externo.',
        ],
      },
      cloudData: {
        id: 'cloud-data',
        title: 'Para onde os dispositivos na nuvem enviam dados',
        content:
          '**Dispositivos de casa inteligente na nuvem transmitem dados de uso, consultas de voz e imagens de câmeras a servidores do fabricante, às vezes em outro país.** Isso torna o fabricante um operador e pode levantar questões de transferência de dados.',
        items: [
          'Uso e telemetria fluem para os sistemas de análise do fabricante.',
          'Assistentes de voz processam as gravações na nuvem.',
          'As imagens de câmeras ficam em servidores do fabricante — veja [riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks).',
        ],
      },
      residency: {
        id: 'residency',
        title: 'Residência de dados via processamento local',
        content:
          '**O processamento local atinge a residência de dados por padrão: os dados nunca saem da sua casa, então ficam na sua jurisdição.** Isso apoia diretamente os princípios de residência e minimização do GDPR e da LGPD.',
        items: [
          'Um hub local (Home Assistant) processa as automações no local — veja [o guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide).',
          'Nenhuma transferência internacional ocorre porque nenhum dado é enviado para fora do dispositivo.',
          'Você minimiza a coleta de dados ao que fica na sua casa.',
        ],
      },
      localVoiceAi: {
        id: 'local-voice-ai',
        title: 'Voz e IA locais = sem operador externo',
        content:
          '**A voz local e um LLM local eliminam o operador na nuvem para os seus dados mais sensíveis — sua fala e o contexto do seu lar.** Tudo é computado no seu hardware. No Brasil, isso apoia a LGPD e as obrigações fiscalizadas pela ANPD (Autoridade Nacional de Proteção de Dados), pois não há operador externo.',
        items: [
          'Whisper e Piper locais mantêm o processamento de voz no dispositivo — veja [montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home).',
          'Um LLM local via a [integração do Ollama](/pt/smart-home/home-assistant-ollama-integration) mantém o processamento de linguagem natural local.',
          'Para IA local privada em geral, veja [o que são LLMs locais](/pt/local-llms/what-are-local-llms) (entre clusters).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Lista de compra',
        content:
          '**Prefira dispositivos com capacidade local, um hub local e voz/IA locais para manter os dados do seu lar em casa.** A tabela contrasta nuvem e local em pontos relevantes para o GDPR e a LGPD.',
        columns: ['Fator', 'Dispositivo na nuvem', 'Configuração local'],
        rows: [
          { 'Fator': 'Localização dos dados', 'Dispositivo na nuvem': 'Data center do fabricante', 'Configuração local': 'Sua casa' },
          { 'Fator': 'Operador', 'Dispositivo na nuvem': 'Fabricante (terceiro)', 'Configuração local': 'Nenhum externo' },
          { 'Fator': 'Dados de voz', 'Dispositivo na nuvem': 'Processados na nuvem', 'Configuração local': 'No dispositivo (Whisper/Piper)' },
          { 'Fator': 'Postura GDPR/LGPD', 'Dispositivo na nuvem': 'Questões de transferência/operador', 'Configuração local': 'Residência por design' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Os dispositivos de casa inteligente são relevantes para a LGPD?', a: 'Sim. Os dispositivos de casa inteligente geram dados pessoais como presença, rotinas, voz e vídeo. Sob a LGPD e o GDPR, como e onde esses dados são processados importa, e dispositivos na nuvem que os enviam a servidores do fabricante introduzem um operador externo.' },
          { q: 'Local significa que não há operador?', a: 'Para os dados do seu lar, sim — o processamento local mantém tudo no seu próprio hardware, então nenhuma parte externa os trata. Você mantém o controle dos dados, o que apoia os princípios de minimização e residência da LGPD e do GDPR.' },
          { q: 'Os dados de voz são uma questão particular?', a: 'As gravações de voz são dados pessoais sensíveis, e os assistentes na nuvem as processam em servidores do fabricante. Usar voz-para-texto (Whisper) e texto-para-voz (Piper) locais mantém o processamento de voz no dispositivo, evitando um operador na nuvem para a sua fala.' },
          { q: 'Há opções de casa inteligente hospedadas localmente?', a: 'Uma configuração local-first é a opção de privacidade mais forte porque os dados nunca saem da sua casa, eliminando por completo as questões de local de hospedagem. Para qualquer recurso na nuvem que você use, verifique onde o provedor processa os dados e consulte um profissional de proteção de dados para as suas necessidades.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks) — os riscos que as configurações compatíveis evitam',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — construir o stack privado',
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — IA local, sem operador na nuvem',
          '[O que são LLMs locais](/pt/local-llms/what-are-local-llms) — entre clusters: IA local privada',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construir uma Casa Inteligente Privada Compatível com GDPR/LGPD (2026)',
      description: 'Construa uma casa inteligente privada compatível com GDPR/LGPD: residência de dados, sem processamento na nuvem, voz e IA locais. Um guia para manter os dados do lar no seu hardware.',
      url: 'https://www.promptquorum.com/pt/smart-home/private-smart-home-gdpr',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'LGPD' }, { '@type': 'Thing', name: 'GDPR' }, { '@type': 'Thing', name: 'Privacidade da casa inteligente' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Os dispositivos de casa inteligente são relevantes para a LGPD?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Geram dados pessoais como presença, rotinas, voz e vídeo. Dispositivos na nuvem que os enviam a servidores do fabricante introduzem um operador externo sob a LGPD e o GDPR.' } },
        { '@type': 'Question', name: 'Local significa que não há operador?', acceptedAnswer: { '@type': 'Answer', text: 'Para os dados do seu lar, sim — o processamento local mantém tudo no seu hardware, então nenhuma parte externa os trata, apoiando a minimização e a residência da LGPD e do GDPR.' } },
        { '@type': 'Question', name: 'Os dados de voz são uma questão particular?', acceptedAnswer: { '@type': 'Answer', text: 'As gravações de voz são dados sensíveis, e os assistentes na nuvem as processam em servidores do fabricante. Whisper e Piper locais mantêm o processamento de voz no dispositivo.' } },
        { '@type': 'Question', name: 'Há opções de casa inteligente hospedadas localmente?', acceptedAnswer: { '@type': 'Answer', text: 'Uma configuração local-first é a mais forte porque os dados nunca saem da sua casa. Para recursos na nuvem, verifique onde o provedor processa os dados e consulte um profissional.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: '构建符合 GDPR 的私密智能家居（欧盟，2026）',
    seoTitle: '符合 GDPR 的私密智能家居（欧盟 2026）',
    intro:
      '本地智能家居把全部处理保留在你自己家中的硬件上，因为没有外部处理方参与，从设计上支持 GDPR 的数据最小化与数据本地化。本面向欧盟的指南解释 GDPR 如何适用于联网设备、云端设备把数据发往何处、本地处理如何实现数据本地化，并提供一份用于私密、合规配置的购买清单。',
    metaDescription:
      '构建符合 GDPR 的私密智能家居：数据本地化、无云端处理、本地语音与 AI。一份把联网家庭数据留在你硬件上的欧盟指南。',
    twitterDescription:
      '符合 GDPR 的智能家居把处理保留在本地：从设计上实现数据本地化、无外部处理方、本地语音与 AI。一份欧盟指南。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '希望拥有合规智能家居的欧盟家庭',
    primaryTerm: 'GDPR private smart home',
    targetKeywords: [
      'gdpr 智能家居 隐私',
      '私密 智能家居 欧盟',
      'gdpr 联网设备',
      '数据本地化 智能家居',
      '本地 智能家居 gdpr',
    ],
    leadAnswerBlock:
      '**本地智能家居从设计上支持 GDPR：处理发生在你自己家中的硬件上，因此设备、语音和摄像头数据被最小化，并在没有外部处理方的情况下保留在你的司法辖区内。** 本地语音与本地 AI 彻底去除云端处理方。',
    quickAnswerTop: {
      zh: {
        question: '本地智能家居符合 GDPR 吗？',
        answer:
          '符合。由于本地智能家居在你自己的硬件上处理设备、语音和摄像头数据，它从设计上支持 GDPR 的数据最小化与数据本地化原则，并且没有外部处理方处理你的家庭数据。相比之下，云端设备会把个人数据发送到充当处理方的厂商服务器。',
        bullets: [
          '本地处理把数据留在你家中和司法辖区内',
          '你的家庭数据没有外部处理方',
          '本地语音（Whisper/Piper）避免云端语音处理',
          '从设计上支持数据最小化与本地化',
          '云端设备把个人数据发往厂商处理方',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: 'GDPR 与联网之家', anchor: 'gdpr-home' },
      { label: '云端设备把数据发往何处', anchor: 'cloud-data' },
      { label: '通过本地处理实现数据本地化', anchor: 'residency' },
      { label: '本地语音与 AI', anchor: 'local-voice-ai' },
      { label: '欧盟购买清单', anchor: 'checklist' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '本地智能家居在你自己的硬件上处理设备、语音和摄像头数据，在没有外部处理方的情况下支持 GDPR 的数据最小化与本地化。' },
      { type: 'plain-terms', content: '在 GDPR 之下，把你的家庭数据发送到企业云端会使该企业成为数据处理方。本地智能家居通过把全部处理保留在你家中的硬件上来避免这一点，因此数据留在你的司法辖区内，没有外部方处理它。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '本地处理把设备、语音和摄像头数据留在你家中和司法辖区内',
          '没有云端，就没有外部处理方处理你的家庭数据',
          '本地语音（Whisper + Piper）和本地 LLM 避免云端语音/AI 处理',
          '这从设计上支持 GDPR 的数据最小化与本地化',
          '云端设备把个人数据发往充当处理方的厂商服务器',
          '细节请就你的情况咨询数据保护专业人士',
        ],
      },
      gdprHome: {
        id: 'gdpr-home',
        title: 'GDPR 与联网之家',
        content:
          '**GDPR 规范个人数据，而智能家居会生成大量个人数据：在家情况、作息、语音和视频。** 这些数据在何处处理，决定了谁参与其中以及它们暴露程度如何。',
        items: [
          '智能家居数据（在家情况、录音、录像）在 GDPR 下属于个人数据。',
          '云端处理引入一个处理这些数据的外部处理方（GDPR 第 28 条）。',
          '本地处理让你在没有外部处理方的情况下保持掌控。',
        ],
      },
      cloudData: {
        id: 'cloud-data',
        title: '云端设备把数据发往何处',
        content:
          '**云端智能家居设备把使用数据、语音查询和摄像头录像传输到厂商服务器，有时位于欧盟之外。** 这使厂商成为处理方，并可能引发数据跨境传输的问题。',
        items: [
          '使用和遥测数据流向厂商的分析系统。',
          '语音助手在云端处理录音。',
          '摄像头录像存储在厂商服务器上——参见[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks)。',
        ],
      },
      residency: {
        id: 'residency',
        title: '通过本地处理实现数据本地化',
        content:
          '**本地处理默认实现数据本地化：数据从不离开你家，因此留在你的司法辖区内。** 这直接支持 GDPR 的本地化与最小化原则。',
        items: [
          '本地中枢（Home Assistant）在本地处理自动化——参见[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide)。',
          '由于没有数据被发送出设备，因此不发生跨境传输。',
          '你把数据收集最小化到留在家中的内容。',
        ],
      },
      localVoiceAi: {
        id: 'local-voice-ai',
        title: '本地语音与 AI ＝ 没有外部处理方',
        content:
          '**本地语音和本地 LLM 为你最敏感的数据——你的话语和家庭情境——去除云端处理方。** 一切都在你的硬件上计算。在中国，《个人信息保护法》（PIPL）与《数据安全法》同样要求对个人信息和重要数据进行妥善管理；本地处理把数据留在境内你的硬件上、不经外部处理方，因而更易满足此类合规要求。',
        items: [
          '本地的 Whisper 和 Piper 把语音处理保留在设备上——参见[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home)。',
          '经由 [Ollama 集成](/zh/smart-home/home-assistant-ollama-integration)的本地 LLM 把自然语言处理保留在本地。',
          '关于私密本地 AI 总体，参见[什么是本地LLM](/zh/local-llms/what-are-local-llms)（跨集群）。',
        ],
      },
      checklist: {
        id: 'checklist',
        title: '欧盟购买清单',
        content:
          '**优先选择支持本地的设备、本地中枢以及本地语音/AI，以把你的家庭数据留在家中。** 下表在与 GDPR 相关的要点上对比云端与本地。',
        columns: ['因素', '云端设备', '本地配置'],
        rows: [
          { '因素': '数据所在地', '云端设备': '厂商数据中心', '本地配置': '你家' },
          { '因素': '处理方', '云端设备': '厂商（第三方）', '本地配置': '无外部方' },
          { '因素': '语音数据', '云端设备': '在云端处理', '本地配置': '在设备上（Whisper/Piper）' },
          { '因素': 'GDPR 状况', '云端设备': '传输/处理方问题', '本地配置': '从设计上本地化' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '智能家居设备与 GDPR 相关吗？', a: '相关。智能家居设备会生成在家情况、作息、语音和视频等个人数据。在 GDPR 之下，这些数据如何以及在何处处理很重要，而把数据发往厂商服务器的云端设备会引入一个外部处理方。' },
          { q: '本地是否意味着没有处理方？', a: '就你的家庭数据而言，是的——本地处理把一切保留在你自己的硬件上，因此没有外部方处理它。你保持对数据的掌控，这支持 GDPR 的最小化与本地化原则。' },
          { q: '语音数据是 GDPR 上的特别问题吗？', a: '语音录音属于敏感个人数据，而云端助手在厂商服务器上处理它们。使用本地语音转文字（Whisper）和文字转语音（Piper）可把语音处理保留在设备上，从而避免为你的话语引入云端处理方。' },
          { q: '有在欧盟托管的智能家居选项吗？', a: '本地优先配置是最强的隐私选项，因为数据从不离开你家，从而彻底消除托管地点的问题。对于你所使用的任何云端功能，请核查提供商在何处处理数据，并就你的具体需求咨询数据保护专业人士。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks) — 合规配置所规避的风险',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 构建私密堆栈',
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 本地 AI，无云端处理方',
          '[什么是本地LLM](/zh/local-llms/what-are-local-llms) — 跨集群：私密本地 AI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '构建符合 GDPR 的私密智能家居（欧盟，2026）',
      description: '构建符合 GDPR 的私密智能家居：数据本地化、无云端处理、本地语音与 AI。一份把联网家庭数据留在你硬件上的欧盟指南。',
      url: 'https://www.promptquorum.com/zh/smart-home/private-smart-home-gdpr',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'GDPR' }, { '@type': 'Thing', name: '智能家居隐私' }, { '@type': 'Thing', name: '数据本地化' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '智能家居设备与 GDPR 相关吗？', acceptedAnswer: { '@type': 'Answer', text: '相关。它们会生成在家情况、作息、语音和视频等个人数据。把数据发往厂商服务器的云端设备会在 GDPR 下引入一个外部处理方。' } },
        { '@type': 'Question', name: '本地是否意味着没有处理方？', acceptedAnswer: { '@type': 'Answer', text: '就你的家庭数据而言，是的——本地处理把一切保留在你的硬件上，因此没有外部方处理它，支持 GDPR 的最小化与本地化。' } },
        { '@type': 'Question', name: '语音数据是 GDPR 上的特别问题吗？', acceptedAnswer: { '@type': 'Answer', text: '语音录音属于敏感数据，云端助手在厂商服务器上处理它们。本地的 Whisper 和 Piper 把语音处理保留在设备上。' } },
        { '@type': 'Question', name: '有在欧盟托管的智能家居选项吗？', acceptedAnswer: { '@type': 'Answer', text: '本地优先配置最强，因为数据从不离开你家。对于云端功能，请核查提供商在何处处理数据并咨询专业人士。' } },
      ],
    },
  },
}
