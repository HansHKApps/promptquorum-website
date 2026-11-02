import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: 'KI-Assistent für lokale KI',
  close: 'Schließen — Ask Hans bleibt als Symbol erhalten',
  maximize: 'Vollbild',
  restore: 'Fenstergröße zurücksetzen',
  newChat: 'Neu',
  newChatLabel: 'Neues Gespräch beginnen',
  logoLabel: 'Ask Hans öffnen',
  logoTitle: 'Ask Hans — zum Öffnen klicken',

  welcomeTitle: 'Willkommen bei Ask Hans, Ihrem interaktiven Guide für lokale KI.',
  welcomeBody:
    'Ich durchsuche die Inhalte von PromptQuorum und beantworte Ihre Fragen zu Apps, Hardware und Guides. Wählen Sie einen Einstieg oder stellen Sie unten Ihre eigene Frage.',
  welcomeCards: [
    { icon: 'LayoutGrid', title: 'Passende Apps und Guides finden', question: 'Welche Apps und Guides passen zu mir? Ich möchte lokale KI ausprobieren.' },
    { icon: 'ArrowLeftRight', title: 'Apps vergleichen und Alternativen nennen', question: 'Kannst du mir helfen, Apps zu vergleichen und Alternativen zu finden?' },
    { icon: 'Cpu', title: 'Prüfen, ob Ihre Hardware ein Modell ausführen kann', question: 'Kann meine Hardware ein bestimmtes KI-Modell ausführen? Bitte frag mich nach meinem Computer.' },
    { icon: 'Scale', title: 'Lizenzen erklären und einen passenden Software-Stack empfehlen', question: 'Erkläre mir Lizenzen und empfiehl mir einen passenden Software-Stack für lokale KI.' },
  ],

  previousChat: (n: number) => `Früheres Gespräch · ${n} ${n === 1 ? 'Nachricht' : 'Nachrichten'}`,
  continueChat: 'Hier weiterchatten',

  inputLabel: 'Ihre Frage an Ask Hans',
  inputPlaceholder: 'Frage stellen …',
  send: 'Senden',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: 'Ask Hans ist eine KI und kann sich irren. Bitte keine personenbezogenen Daten eingeben.',
  withdraw: 'Einwilligung widerrufen',
  thinking: 'Ask Hans denkt nach …',
  searching: 'Durchsucht PromptQuorum …',
  panelTools: 'Wendet ein Werkzeug an …',

  errors: {
    unavailable: 'Ask Hans ist gerade nicht erreichbar.',
    failed: 'Das hat leider nicht geklappt. Bitte versuchen Sie es erneut.',
    rephrase: 'Diese Frage konnte ich leider nicht beantworten. Bitte formulieren Sie sie um oder teilen Sie sie in kleinere Fragen auf.',
    rate: 'Gerade wurden sehr viele Fragen gestellt. Bitte warten Sie einen Moment und versuchen Sie es dann erneut.',
    limit: (n: number) => `Für diesen Besuch ist das Limit von ${n} Nachrichten erreicht.`,
    refused: 'Dazu kann ich leider nichts sagen. Stellen Sie gern eine andere Frage.',
    disabled: 'Ask Hans ist im Moment nicht verfügbar.',
    tooLong: (max: number) => `Bitte fassen Sie sich kürzer: Fragen dürfen höchstens ${max} Zeichen lang sein.`,
  },
  retry: 'Erneut versuchen',
  followupsLabel: "Vorgeschlagene Anschlussfragen",

  panelLabelPrefix: 'Thema',
  panelLinksHeading: 'Passende Seiten',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: 'Bevor es losgeht',
  consentParagraphs: [
    'Ask Hans beantwortet Ihre Fragen mit Hilfe von KI (Claude von Anthropic) auf Basis der Inhalte von PromptQuorum. Ihre Eingabe wird dafür an unseren Server und an Anthropic übermittelt. Bitte geben Sie keine personenbezogenen Daten ein.',
    'Wenn Sie „Ja, einverstanden“ wählen, erlauben Sie uns, zu Statistikzwecken und zur Verbesserung von Ask Hans und unserer Inhalte anonym zu erfassen: das Thema Ihrer Frage, welche Apps, Verzeichnis-Kategorien und Werkzeuge Ask Hans zur Beantwortung nachgeschlagen hat, die Sprache, welche Links Sie anklicken und welche Funktionen Sie nutzen (zum Beispiel vorgeschlagene Folgefragen oder das Starten eines neuen Chats), den Zeitpunkt sowie eine zufällige Besuchs-ID, die Ihnen nicht zugeordnet ist. Die Statistik enthält weder Frage- oder Antworttext noch IP-Adresse oder Namen. Wir veröffentlichen nur zusammengefasste Zahlen.',
    'Ihre Einwilligung ist freiwillig. Sie können Ask Hans auch ohne sie nutzen und sie jederzeit mit Wirkung für die Zukunft widerrufen. Als Nachweis Ihrer Entscheidung speichern wir deren Zeitpunkt, die Textversion und die zufällige Besuchs-ID. Unabhängig von Ihrer Wahl zählen wir anonym, wie oft Ask Hans geöffnet wird und wie viele Antworten gegeben werden (nur Summen: keine ID, kein Text).',
  ],
  consentPrivacyLink: 'Mehr in der Datenschutzerklärung.',
  consentPrivacyHref: '/de/privacy',
  consentYes: 'Ja, einverstanden',
  consentNo: 'Nein, danke',
  consentQuestionLabel: 'Ihre Frage (wird nach Ihrer Auswahl gesendet):',

  dir: 'ltr',
  devNotice: 'Tool in Entwicklung – wir freuen uns auf Ihr Feedback.',
  contactLabel: 'Feedback per E-Mail senden',
  welcomeAria: 'Willkommen',
  feedback: {
    prompt: 'Wie hilfreich ist Ask Hans?',
    star: (n: number) => `${n} von 5 Sternen`,
    commentPlaceholder: 'Optional: Was können wir besser machen? Bitte keine personenbezogenen Daten.',
    send: 'Feedback senden',
    thanks: 'Danke für Ihr Feedback!',
    error: 'Das Feedback konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
  },
  info: {
    label: "Über Ask Hans",
    title: "Was ist Ask Hans?",
    intro: "Ask Hans ist ein KI-Assistent, der Ihre Fragen ausschließlich anhand der eigenen Inhalte von PromptQuorum beantwortet: Software-Verzeichnis, Guides, Testberichte und Hardwaredaten auf dieser Website. Es ist ein Beta-Tool in Entwicklung und nicht Hans selbst.",
    canTitle: "Was Ask Hans kann",
    can: ["Apps für lokale KI aus dem Software-Verzeichnis finden, vergleichen und Alternativen nennen.", "Prüfen, ob Ihre Hardware (RAM, VRAM) ein Modell ausführen kann.", "Software-Lizenzen in einfacher Sprache erklären und einen Software-Stack vorschlagen.", "Sie auf die passenden Guides, Testberichte und Hardware-Seiten dieser Website in Ihrer Sprache hinweisen."],
    cannotTitle: "Was Ask Hans nicht kann",
    cannot: ["Etwas außerhalb von promptquorum.com nachschlagen: keine Websuche, keine Nachrichten, kein Wetter, keine Live-Preise.", "Immer richtig liegen: Es ist eine KI und kann sich irren. Prüfen Sie wichtige Angaben auf den verlinkten Seiten.", "Rechts-, Medizin-, Finanz- oder Elektroinstallationsberatung geben. Wenden Sie sich dafür an eine qualifizierte Fachperson.", "Sich an Sie erinnern, nachdem Sie die Seite verlassen haben: Gespräche bleiben in Ihrem Browser und werden nicht auf unserem Server gespeichert.", "Für Sie etwas installieren, ändern oder kaufen oder unbegrenzt antworten: {messages} Fragen pro Besuch, {chars} Zeichen pro Frage."],
    privacy: "Ihre Frage wird zur Erstellung der Antwort an unseren Server und an Anthropic (Claude) gesendet. Bitte keine personenbezogenen Daten eingeben.",
    close: "Schließen",
  },

  copyUi: {
    copy: "Kopieren",
    copied: "Kopiert",
    copyAnswer: "Antwort kopieren",
  },

  panel: {
    relatedHeading: "Passend zu Ihrer Frage",
    relatedEarlier: "Frühere Antworten",
    panelHide: "Themenbereich ausblenden",
    panelShow: "Themenbereich einblenden",
    historyHeading: "Frühere Gespräche",
    historyHide: "Frühere Gespräche ausblenden",
    historyShow: (n: number) => `Frühere Gespräche anzeigen (${n})`,
  },

  search: {
    badge: "Neu · Beta",
    headline: "Stelle deine Frage – Ask Hans antwortet",
    pitch: "Statt einer Linkliste bekommst du eine Antwort aus dem Software-Verzeichnis, den Guides und den Hardware-Daten von PromptQuorum – in deiner Sprache. Eine neue Art der Seitensuche, noch in Entwicklung.",
    examples: ["Welche App durchsucht meine PDFs lokal?", "Läuft Llama auf einem Mac mit 16 GB?", "Welcher Mini-PC taugt als Home-Assistant-Server?"],
    placeholder: "Stelle deine Frage...",
    ariaLabel: "Frage an den Assistenten stellen",
    modalAriaLabel: "KI-gestützte Fragen und Antworten",
    hint: "Frage eingeben und Enter drücken",
    close: 'Schließen',
  },
  categories: {
    "prompt-engineering": {
      "label": "Prompt Engineering",
      "links": {
        "pe-hub": {
          "title": "Prompt Engineering",
          "description": "Alle Guides zum Thema im Überblick"
        },
        "pe-ides": {
          "title": "Prompt-Engineering-IDEs",
          "description": "Die besten Werkzeuge zum Schreiben von Prompts"
        },
        "pe-mgmt": {
          "title": "Prompt-Management",
          "description": "Plattformen zum Verwalten von Prompts"
        }
      }
    },
    "local-llms": {
      "label": "Lokale LLMs",
      "links": {
        "ll-what": {
          "title": "Was sind lokale LLMs?",
          "description": "Der Einstieg in lokale KI"
        },
        "ll-ollama": {
          "title": "Ollama installieren",
          "description": "Schritt für Schritt zum ersten Modell"
        },
        "ll-beginner": {
          "title": "Modelle für Einsteiger",
          "description": "Welche Modelle sich zum Start eignen"
        }
      }
    },
    "mini-pcs": {
      "label": "Mini-PCs",
      "links": {
        "mp-best": {
          "title": "Beste Mini-PCs für lokale KI",
          "description": "Vergleich geeigneter Mini-PCs"
        },
        "mp-amd": {
          "title": "AMD-Mini-PCs",
          "description": "Mini-PCs mit AMD-Prozessor im Überblick"
        },
        "mp-run": {
          "title": "Was kann ich ausführen?",
          "description": "Hardware prüfen und passende Modelle finden"
        }
      }
    },
    "gpus-vram": {
      "label": "Grafikkarten & VRAM",
      "links": {
        "gp-best": {
          "title": "Beste GPUs für lokale LLMs",
          "description": "Grafikkarten im Vergleich"
        },
        "gp-apple": {
          "title": "Apple Silicon oder NVIDIA?",
          "description": "Zwei Plattformen im Vergleich"
        },
        "gp-can": {
          "title": "Läuft das auf meinem PC?",
          "description": "Kompatibilität selbst prüfen"
        }
      }
    },
    "smart-home": {
      "label": "Smart Home",
      "links": {
        "sh-hub": {
          "title": "Smart Home",
          "description": "Lokale KI im Zuhause"
        },
        "sh-ha": {
          "title": "Home Assistant starten",
          "description": "Erste Schritte mit Home Assistant"
        },
        "sh-hw": {
          "title": "Hardware für lokales Smart Home",
          "description": "Welche Geräte sich eignen"
        }
      }
    },
    "balcony-solar": {
      "label": "Balkonkraftwerk",
      "links": {
        "bs-hub": {
          "title": "Balkonkraftwerk",
          "description": "Grundlagen und Überblick"
        },
        "bs-batt": {
          "title": "Speicher für Balkonkraftwerke",
          "description": "Batteriespeicher im Überblick"
        },
        "bs-anker": {
          "title": "Anker Solix im Überblick",
          "description": "Ein System im Detail"
        }
      }
    },
    "find-app": {
      "label": "App finden",
      "links": {
        "fa-dir": {
          "title": "Software-Verzeichnis",
          "description": "Alle Apps durchsuchen und filtern"
        },
        "fa-iphone": {
          "title": "Apps für das iPhone",
          "description": "Lokale KI auf dem iPhone"
        },
        "fa-android": {
          "title": "Apps für Android",
          "description": "Lokale KI auf Android"
        }
      }
    },
    "chat-clients": {
      "label": "Chat-Clients",
      "links": {
        "cc-comp": {
          "title": "Chat-Apps im Vergleich",
          "description": "Chat und Assistenten gegenübergestellt"
        },
        "cc-anything": {
          "title": "AnythingLLM im Test",
          "description": "Ein Chat-Client im Detail"
        },
        "cc-jan": {
          "title": "Jan im Test",
          "description": "Ein Chat-Client im Detail"
        }
      }
    },
    "inference-engines": {
      "label": "Inferenz-Engines",
      "links": {
        "ie-comp": {
          "title": "Engines im Vergleich",
          "description": "Ausführen und Bereitstellen im Überblick"
        },
        "ie-ollama": {
          "title": "Ollama im Test",
          "description": "Die bekannteste Engine im Detail"
        },
        "ie-lms": {
          "title": "LM Studio im Test",
          "description": "Ein Desktop-Programm im Detail"
        }
      }
    },
    "agent-frameworks": {
      "label": "Agent-Frameworks",
      "links": {
        "af-comp": {
          "title": "Code und Entwicklung im Vergleich",
          "description": "Agenten und Frameworks gegenübergestellt"
        },
        "af-langchain": {
          "title": "LangChain im Test",
          "description": "Ein Framework im Detail"
        },
        "af-openclaw": {
          "title": "OpenClaw im Test",
          "description": "Ein Agent im Detail"
        }
      }
    },
    "code-assistants": {
      "label": "Code-Assistenten",
      "links": {
        "ca-comp": {
          "title": "Code und Entwicklung im Vergleich",
          "description": "Assistenten und Plugins gegenübergestellt"
        },
        "ca-continue": {
          "title": "Continue im Test",
          "description": "Ein IDE-Plugin im Detail"
        },
        "ca-cline": {
          "title": "Cline im Test",
          "description": "Ein Assistent im Detail"
        }
      }
    },
    "document-pdf-chat": {
      "label": "Dokumente & PDF-Chat",
      "links": {
        "dp-comp": {
          "title": "Wissen und Suche im Vergleich",
          "description": "Dokumente und RAG gegenübergestellt"
        },
        "dp-anything": {
          "title": "AnythingLLM im Test",
          "description": "Mit Dokumenten chatten"
        },
        "dp-ragflow": {
          "title": "RAGFlow im Test",
          "description": "Dokumentenverständnis im Detail"
        }
      }
    },
    "rag-vector-databases": {
      "label": "RAG & Vektordatenbanken",
      "links": {
        "rv-comp": {
          "title": "Wissen und Suche im Vergleich",
          "description": "RAG und Vektordatenbanken im Überblick"
        },
        "rv-llama": {
          "title": "LlamaIndex im Test",
          "description": "Ein RAG-Framework im Detail"
        },
        "rv-qdrant": {
          "title": "Qdrant im Test",
          "description": "Eine Vektordatenbank im Detail"
        }
      }
    },
    "image-generation": {
      "label": "Bildgenerierung",
      "links": {
        "ig-comp": {
          "title": "Bild und Video im Vergleich",
          "description": "Werkzeuge gegenübergestellt"
        },
        "ig-comfy": {
          "title": "ComfyUI im Test",
          "description": "Ein Bildgenerator im Detail"
        },
        "ig-fooocus": {
          "title": "Fooocus im Test",
          "description": "Ein einfacher Einstieg"
        }
      }
    },
    "speech-to-text": {
      "label": "Spracherkennung",
      "links": {
        "st-comp": {
          "title": "Sprache und Audio im Vergleich",
          "description": "Werkzeuge gegenübergestellt"
        },
        "st-whisper": {
          "title": "Whisper.cpp im Test",
          "description": "Spracherkennung im Detail"
        },
        "st-ha": {
          "title": "Whisper für Home Assistant",
          "description": "Sprachsteuerung lokal betreiben"
        }
      }
    },
    "text-to-speech-voice": {
      "label": "Sprachausgabe & Stimme",
      "links": {
        "tv-comp": {
          "title": "Sprache und Audio im Vergleich",
          "description": "Werkzeuge gegenübergestellt"
        },
        "tv-voicebox": {
          "title": "Voicebox im Test",
          "description": "Sprachausgabe im Detail"
        },
        "tv-dir": {
          "title": "Software-Verzeichnis",
          "description": "Alle Apps durchsuchen"
        }
      }
    },
    "personal-assistants": {
      "label": "Persönliche Assistenten",
      "links": {
        "pa-comp": {
          "title": "Chat und Assistenten im Vergleich",
          "description": "Assistenten gegenübergestellt"
        },
        "pa-ha": {
          "title": "Home Assistant Assist im Test",
          "description": "Ein Sprachassistent im Detail"
        },
        "pa-claw": {
          "title": "OpenClaw im Test",
          "description": "Ein Assistent im Detail"
        }
      }
    },
    "vision-ocr": {
      "label": "Bilderkennung & OCR",
      "links": {
        "vo-comp": {
          "title": "Bild und Video im Vergleich",
          "description": "Werkzeuge gegenübergestellt"
        },
        "vo-llava": {
          "title": "LLaVA im Test",
          "description": "Bilder verstehen im Detail"
        },
        "vo-immich": {
          "title": "Immich im Test",
          "description": "Fotos lokal verwalten"
        }
      }
    },
    "workflow-automation": {
      "label": "Workflows & Automatisierung",
      "links": {
        "wa-n8n": {
          "title": "n8n im Test",
          "description": "Workflows bauen im Detail"
        },
        "wa-dify": {
          "title": "Dify im Test",
          "description": "Ein Workflow-Builder im Detail"
        },
        "wa-langflow": {
          "title": "Langflow im Test",
          "description": "Visuelle Orchestrierung im Detail"
        }
      }
    },
    "promptquorum-apps": {
      "label": "PQ Apps",
      "links": {
        "pq-hub": {
          "title": "PQ Apps",
          "description": "Die Apps von PromptQuorum"
        },
        "pq-dir": {
          "title": "Software-Verzeichnis",
          "description": "Alle Apps durchsuchen"
        },
        "pq-about": {
          "title": "Über uns",
          "description": "Wer hinter PromptQuorum steht"
        }
      }
    },
    "default": {
      "label": "Allgemein",
      "links": {
        "df-dir": {
          "title": "Software-Verzeichnis",
          "description": "Alle Apps durchsuchen und filtern"
        },
        "df-ll": {
          "title": "Lokale LLMs",
          "description": "Der Einstieg in lokale KI"
        },
        "df-run": {
          "title": "Was kann ich ausführen?",
          "description": "Hardware prüfen"
        }
      }
    }
  },
}
