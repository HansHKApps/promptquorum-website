// Ask Hans — German UI texts (v1 is German only). DRAFT legal texts are marked and need Hans's approval.

export const DE = {
  name: 'Ask Hans',
  tagline: 'KI-Assistent für lokale KI',
  close: 'Schließen — Ask Hans bleibt als Symbol erhalten',
  maximize: 'Vollbild',
  restore: 'Fenstergröße zurücksetzen',
  newChat: 'Neu',
  newChatLabel: 'Neues Gespräch beginnen',
  logoLabel: 'Ask Hans öffnen (Doppelklick)',
  logoTitle: 'Ask Hans — Doppelklick zum Öffnen',

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
    unavailable: 'Ask Hans ist gerade nicht erreichbar. Sie können stattdessen die normale Suche nutzen.',
    failed: 'Das hat leider nicht geklappt. Sie können es erneut versuchen oder die normale Suche nutzen.',
    rate: 'Gerade wurden sehr viele Fragen gestellt. Bitte warten Sie einen Moment — oder nutzen Sie die normale Suche.',
    limit: (n: number) => `Für diesen Besuch ist das Limit von ${n} Nachrichten erreicht. Die normale Suche hilft Ihnen gern weiter.`,
    refused: 'Dazu kann ich leider nichts sagen. Stellen Sie gern eine andere Frage.',
    disabled: 'Ask Hans ist im Moment nicht verfügbar. Sie können stattdessen die normale Suche nutzen.',
    tooLong: (max: number) => `Bitte fassen Sie sich kürzer: Fragen dürfen höchstens ${max} Zeichen lang sein.`,
  },
  searchInstead: 'Normale Suche öffnen',
  retry: 'Erneut versuchen',

  panelLabelPrefix: 'Thema',
  panelLinksHeading: 'Passende Seiten',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: 'Bevor es losgeht',
  consentParagraphs: [
    'Ask Hans beantwortet Ihre Fragen mit Hilfe von KI (Claude von Anthropic) auf Basis der Inhalte von PromptQuorum. Ihre Eingabe wird dafür an unseren Server und an Anthropic übermittelt. Bitte geben Sie keine personenbezogenen Daten ein.',
    'Mit „Ja, einverstanden“ erlauben Sie zusätzlich, dass wir anonym erfassen, welche Themen gefragt und welche Links genutzt werden. Ihren Fragetext speichern wir dabei nicht. Ohne Zustimmung können Sie Ask Hans trotzdem nutzen. Sie können Ihre Einwilligung jederzeit widerrufen.',
  ],
  consentPrivacyLink: 'Mehr in der Datenschutzerklärung.',
  consentPrivacyHref: '/de/privacy',
  consentYes: 'Ja, einverstanden',
  consentNo: 'Nein, danke',
  consentQuestionLabel: 'Ihre Frage (wird nach Ihrer Auswahl gesendet):',
} as const
