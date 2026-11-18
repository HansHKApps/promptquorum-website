import type { AcademyCopy } from './types'

export const copy: AcademyCopy = {
  metaTitle: 'PromptQuorum Academy: kostenlos KI lernen, persönlich',
  metaDescription:
    'Wählen Sie Thema, Zeit und Niveau. PromptQuorum Academy erstellt kurze Lektionen mit Bezug auf PromptQuorum-Ratgeber, mit KI-Tutor, Tests und PDF-Zertifikat.',
  h1: 'PromptQuorum Academy',
  intro: 'Lernen Sie lokale KI, Prompting und verwandte Themen in kurzen Lektionen, zugeschnitten auf Ihre Zeit und Ihr Niveau. Kostenlos, ohne Konto.',
  howTitle: 'So funktioniert es',
  steps: [
    { name: 'Wählen', text: 'Nennen Sie ein Thema, Ihre verfügbare Zeit und Ihr Niveau.' },
    { name: 'Einstufen', text: 'Einige kurze Fragen zeigen, was Sie schon wissen.' },
    { name: 'Anpassen', text: 'Sie erhalten ein Programm, das auf Ihre Lücken abgestimmt ist.' },
    { name: 'Lernen', text: 'Kurze Textlektionen, die auf die PromptQuorum-Ratgeber zurückgreifen.' },
    { name: 'Nachfragen', text: 'Stellen Sie dem KI-Tutor beim Lesen Fragen.' },
    { name: 'Testen', text: 'Fragen mit drei Antworten und einer Erklärung zu jeder Antwort.' },
    { name: 'Zertifikat', text: 'Erreichen Sie 70 % und laden Sie ein PDF-Zertifikat herunter.' },
  ],
  disclaimer:
    'Die Lektionen werden von einer KI geschrieben und können Fehler enthalten. Das Zertifikat dokumentiert Ihr Lernen; es ist kein anerkannter Abschluss.',
  hubs: {
    'local-llms': 'Lokale LLMs',
    'prompt-engineering': 'Prompt Engineering',
    'power-local-llm': 'Lokale KI-Apps',
    'prompt-bites': 'Kurzantworten zu lokaler KI',
    'smart-home': 'Lokales Smart Home',
    'balcony-solar': 'Balkonkraftwerke',
  },

  subjectLabel: 'Was möchten Sie lernen?',
  subjectPlaceholder: 'z. B. Ein lokales LLM auf meinem Laptop betreiben',
  subjectError: 'Bitte geben Sie ein Thema ein oder wählen Sie einen Vorschlag.',
  suggestions: 'Vorschläge',
  timeLegend: 'Wie viel Zeit haben Sie?',
  minutes: (m) => (m >= 60 && m % 60 === 0 ? `${m / 60} Std.` : `${m} Min.`),
  levelLegend: 'Ihr Niveau',
  levels: {
    beginner: { label: 'Einsteiger', hint: 'Neu in dem Thema' },
    some: { label: 'Grundkenntnisse', hint: 'Ich kenne die Basics' },
    experienced: { label: 'Fortgeschritten', hint: 'Ich möchte in die Tiefe' },
  },
  testsLegend: 'Tests',
  tests: {
    none: { label: 'Kein Test', hint: 'Nur lernen. Keine Bewertung, kein Zertifikat.' },
    final: { label: 'Nur Abschlusstest', hint: 'Ein Test am Ende. Nötig für ein Zertifikat.' },
    per_lesson_and_final: { label: 'Jede Lektion + Abschlusstest', hint: 'Ein kurzes Quiz nach jeder Lektion, dann der Abschlusstest.' },
  },
  languageLabel: 'Sprache Ihres Programms',
  submit: 'Weiter zur Einstufung',
  restored: 'Wir haben Ihre letzte Auswahl aus diesem Browser wiederhergestellt.',
  startNew: 'Neu beginnen',
  storageBlocked:
    'Dieser Browser erlaubt kein Speichern. Sie können fortfahren, aber Ihr Fortschritt geht verloren, wenn Sie die Seite schließen.',
  loading: 'Wird geladen',

  diagnosticTitle: 'Einstufung',
  diagnosticComing: 'Die Einstufungsfragen sind noch nicht verfügbar. Ihre Auswahl ist gespeichert:',
  summarySubject: 'Thema',
  summaryTime: 'Zeit',
  summaryLevel: 'Niveau',
  summaryTests: 'Tests',
  summaryLanguage: 'Sprache',
  changeSetup: 'Auswahl ändern',

  privacyNote:
    'Kein Konto nötig. Ihr Fortschritt wird nur in diesem Browser gespeichert. Um Lektionen, Fragen und Tutor-Antworten zu erstellen, werden Ihr Thema, Ihre Antworten und Ihre Nachrichten an den Tutor an unseren KI-Anbieter (Anthropic) übermittelt; bitte geben Sie dort keine personenbezogenen Daten ein. Der Name für Ihr Zertifikat bleibt in diesem Browser. Zum Schutz vor Missbrauch werden Anfragen mit einem kurzlebigen, gehashten Schlüssel aus Ihrer IP-Adresse begrenzt. Wenn Sie Feedback geben, speichern wir die Bewertung, den Kommentar und das gelernte Thema, ohne Ihren Namen und ohne Konto.',
  deleteData: 'Meine Daten löschen',
  deleteConfirm: 'Ihren Academy-Fortschritt aus diesem Browser löschen? Das lässt sich nicht rückgängig machen.',
  dataDeleted: 'Daten gelöscht',
}
