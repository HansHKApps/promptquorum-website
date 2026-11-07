# Datenschutzhinweis „Ask Hans“

> Stand: 2026-11-07 (Antworten des Betreibers auf die 14 offenen Punkte eingearbeitet). Der Einwilligungstext im Chatfenster (`src/components/askhans/copy/`, Version `2026-11-07-v6`) und die
> Datenschutzerklärung (`src/translations.ts`, `privacyAskHansNote`, 9 Sprachen) entsprechen diesem Text. Bei jeder Textänderung
> die Versionsnummer in `src/lib/askhans/config.ts` (`ASK_HANS_CONSENT_TEXT_VERSION`) erhöhen — dann wird die Einwilligung neu eingeholt.

## Ask Hans (KI-Assistent)

### 1. Zweck
„Ask Hans“ ist ein KI-gestützter Assistent auf den deutschen Seiten von promptquorum.com. Er beantwortet Fragen zu lokaler KI,
Hardware, Smart Home und Balkonkraftwerken auf Grundlage der Inhalte von PromptQuorum und zeigt dazu passende Seiten an.
Ask Hans ist eine KI und keine Person; Antworten können fehlerhaft sein. Zur Kennzeichnung der KI-Interaktion (Art. 50 KI-Verordnung) steht der Hinweis „Ask Hans ist eine KI …“ im Chatfenster als hervorgehobener Kasten **über** dem Eingabefeld (verstärkt am 2026-11-07).

### 2. Welche Daten verarbeitet werden
**a) Ihre Eingabe (Frage) — immer, sobald Sie eine Frage senden.**
Der Text Ihrer Frage und der bisherige Verlauf des aktuellen Gesprächs werden an unseren Server und von dort an Anthropic
(Claude API) übermittelt, damit eine Antwort erzeugt werden kann. Wir speichern weder Fragen noch Antworten selbst; unser Code protokolliert nur Fehlermeldungen ohne Nutzertext.
Achtung: Die Hosting-Protokolle von Vercel können Anfrageinhalte enthalten (Entscheidung Betreiber 2026-11-07: so dokumentieren); es gelten die Speicherfristen von Vercel.
Bitte geben Sie keine personenbezogenen Daten ein.

**b) Technische Begrenzung von Anfragen (Rate Limit) — immer.**
Zum Schutz vor Missbrauch wird kurzzeitig ein **gehashter** Schlüssel aus Ihrer IP-Adresse (mit geheimem Salz) im Arbeitsspeicher-Dienst
(Upstash Redis) vorgehalten. Die IP-Adresse selbst wird dafür nicht gespeichert oder protokolliert. Ebenso wird pro anonymer
Besuchs-ID gezählt, wie viele Nachrichten gesendet wurden (Limit pro Besuch, Ablauf nach 24 Stunden). Das Rate-Limit-Fenster beträgt aktuell 1 Minute (Power-Modus: 10 Minuten); der gehashte IP-Wert ist ein personenbezogenes Datum (Rechtsgrundlage: berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO, Missbrauchsschutz).

**c) Gesprächsverlauf im Browser — lokal, nur auf Wunsch (Stand 2026-11-06, Einwilligungstext Version 2026-11-07-v6).**
Im Einwilligungsschritt gibt es ein eigenes, standardmäßig NICHT angekreuztes Kästchen „Meine Gespräche 7 Tage auf diesem Gerät
speichern“. Ohne Haken wird nichts gespeichert (Gespräch nur im Arbeitsspeicher, weg beim Schließen/Neuladen der Seite). Mit Haken
liegen die Gespräche 7 Tage im `localStorage` Ihres Browsers (Ablauf ab Beginn des jeweiligen Gesprächs, beim Laden geprüft). Sie
werden nie auf dem Server gespeichert. Löschen: Schaltfläche „Gespeicherte Gespräche löschen“ oder Widerruf der Einwilligung
(löscht den lokalen Verlauf mit). Rechtsgrundlage: Einwilligung, Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG (nicht „unbedingt
erforderlich“, daher Einwilligung). Die Auswahl „Speichern“ ist unabhängig von „Ja/Nein“ zur Statistik; der Einwilligungsnachweis (2e) hält fest, ob gespeichert wird.

**d) Anonyme Nutzungsstatistik — nur mit Ihrer Einwilligung („Ja, einverstanden“).**
Erfasst werden: gewählte Themenkategorie, verwendete Werkzeuge (z. B. „App-Suche“), nachgeschlagene Apps und Verzeichnis-Kategorien (nur Werte aus unserem eigenen Verzeichnis, nie Freitext; bei Empfehlungs-Werkzeugen die ersten drei Treffer), Sprache, Zeitpunkt, angeklickte Links
(Kategorie und Link-Kennung), ob und in welchen Bereich der Website (nur der erste Pfadabschnitt, z. B. „power-local-llm“) ein Link
aus einer Antwort angeklickt wurde, Klicks auf „Neu“ und eine zufällige, anonyme Besuchs-ID, die keiner Person zugeordnet ist.
**Nicht erfasst werden:** Fragetext, Antworttext, IP-Adresse, Namen. Veröffentlicht werden nur zusammengefasste Zahlen (Seite /mcp-stats). Zwecke: Statistik, Verbesserung von Ask Hans und der Inhalte.
Einwilligungstext Version 2026-11-07-v6 (Nennung der nachgeschlagenen Apps/Kategorien, Zwecke, Freiwilligkeit, Widerruf mit Wirkung für die Zukunft, Hinweis auf die Gesamtzähler ohne Einwilligung).

**d1) Wiederkehr und Nutzungsdauer — nur mit Ihrer Einwilligung („Ja, einverstanden“), Einwilligungstext Version 2026-11-07-v6.**
Ihr Browser merkt sich im `localStorage` (nur auf Ihrem Gerät, nie auf dem Server) den Tag des ersten Besuchs und die Zahl der Browsersitzungen, in denen Ask Hans genutzt wurde. Bei Widerruf der Einwilligung wird das gelöscht.
Zum Server gehen nur grobe Bereiche, nie Datum oder ID: wiederkehrender Besuch ja/nein, Abstand zum ersten Besuch (0 / 1–7 / 8–30 / 31+ Tage), aktive Zeit mit geöffnetem Fenster und sichtbarem Tab (unter 30 s / 30 s–2 min / 2–5 min / 5–15 min / über 15 min) und Zahl der Fragen (0 / 1 / 2–3 / 4+). Gesendet wird einmal, wenn das Fenster geschlossen oder die Seite verlassen wird; gespeichert werden nur Tageszähler (`sessions`, `ret:*`, `days:*`, `dur:*`, `msgs:*`), keine Besuchs-ID. Dazu zählt der Zähler `promo_shown`, wie oft die Teilen-Karte nach zwei Minuten angezeigt wurde, sowie `share:<answer|promo>:<Kanal>` für Kopieren/Teilen (nur Kanalname, nie der geteilte Text).
Rechtsgrundlage: Einwilligung, Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG (Speicherung auf dem Endgerät).

**d2) Anonyme Gesamtzähler — nur mit Einwilligung (Entscheidung Betreiber 2026-11-07, vorher für alle).** Die Summen (Anzahl
geöffneter Fenster, gestellter Anfragen, gegebener Antworten, Power-Berichte) werden nur hochgezählt, wenn Sie „Ja, einverstanden“ gewählt haben; ohne Einwilligung wird die Nutzung nicht gezählt. Keine Besuchs-ID, kein Text, keine IP-Adresse. Die Zahlen auf /askhans und /mcp-stats
beziehen sich damit nur auf einwilligende Besucher. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Der frühere „Nein“-Zähler entfällt.

**e) Nachweis Ihrer Einwilligung.**
Ihre Entscheidung (Ja/Nein, sowie ob Sie das lokale Speichern der Gespräche gewählt haben), die Version des Einwilligungstextes und der Zeitpunkt werden in Ihrem Browser (`localStorage`)
gespeichert, damit die Abfrage nicht bei jedem Öffnen wiederholt wird. Bei „Ja“ und bei Widerruf speichern wir zusätzlich
als Nachweis: Zeitpunkt, Textversion und die anonyme Besuchs-ID. Bei „Nein“ wird nichts erfasst.
Ihre Entscheidung (Ja oder Nein) wird einen Monat lang in Ihrem Browser gespeichert; danach erscheint der Hinweis erneut und wir holen Ihre Einwilligung neu ein.
Der Einwilligungsnachweis wird **ein Jahr** aufbewahrt (Entscheidung Betreiber 2026-11-07); ältere Einträge werden bei jedem neuen Eintrag vom Listenende gelöscht (zusätzlich höchstens 50.000 Einträge).

### 3. Rechtsgrundlagen
- Beantwortung Ihrer Frage (2a): Art. 6 Abs. 1 lit. b DSGVO (Nutzung des von Ihnen angeforderten Dienstes), hilfsweise lit. f.
- Rate Limit / Missbrauchsschutz (2b): Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Schutz vor Missbrauch und Kosten; Interessenabwägung: kurze Speicherung von höchstens einer Minute, gesalzener Hash, keine Zusammenführung mit anderen Daten, keine Konten).
- Nutzungsstatistik (2d, 2d1), Gesamtzähler (2d2) und Einwilligungsnachweis (2e): Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und, soweit Informationen auf
  Ihrem Endgerät gespeichert oder ausgelesen werden, §25 Abs. 1 TDDDG.
- Lokale Speicherung des Gesprächsverlaufs nach 2c (nur bei angekreuztem Kästchen): Einwilligung, Art. 6 Abs. 1 lit. a DSGVO und §25 Abs. 1 TDDDG; ohne Haken wird nichts auf dem Endgerät gespeichert.

### 4. Empfänger und Auftragsverarbeitung
- **Anthropic** (Claude API) als Auftragsverarbeiter: erhält Ihre Eingabe und den Gesprächsverlauf, um die Antwort zu erzeugen.
  Auftragsverarbeitungsvertrag (DPA) abgeschlossen (Betreiber-Bestätigung 2026-11-07); Quellen (am 2026-11-07 geprüft): Anthropic Commercial Terms, Abschnitt B („Anthropic may not train models on Customer Content from Services“) und Abschnitt C (DPA per Verweis einbezogen); Anthropic Privacy Center, „How long do you store my organization’s data“ (API-Eingaben/-Ausgaben werden innerhalb von 30 Tagen gelöscht; bei automatischer Markierung als Verstoß gegen die Nutzungsrichtlinie bis zu 2 Jahre; gesetzliche Aufbewahrung vorbehalten).
- **Upstash** (Redis) als Auftragsverarbeiter, **EU-Region**, Auftragsverarbeitungsvertrag abgeschlossen: Rate-Limit-Schlüssel, Zähler, Einwilligungsnachweise.
- **Vercel** als Hosting-Anbieter (Serverprotokolle, können Anfrageinhalte enthalten). Bereits in der allgemeinen Datenschutzerklärung abgedeckt (Hosting-Hinweis, Auftragsverarbeiter-Tabelle, Abschnitt 5); in der Ask-Hans-Notiz zusätzlich ausdrücklich genannt.

### 5. Übermittlung in Drittländer (USA)
Anthropic sitzt in den USA. Die Übermittlung (Anthropic, Vercel) stützt sich bei Anthropic auf die Standardvertragsklauseln (Module 2/3), die über Abschnitt I des Anthropic-DPA einbezogen sind (eine DPF-Zertifizierung von Anthropic ist in den veröffentlichten Unterlagen nicht belegt und wird deshalb nicht behauptet); bei Vercel auf das DPF, soweit zertifiziert, und hilfsweise auf Standardvertragsklauseln im DPA. Transfer Impact Assessment (kurz): geringes Risiko — keine besonderen Datenkategorien, kurze Speicherung, Hinweis „keine personenbezogenen Daten eingeben“. [Vercel-DPF-Zertifizierung auf dataprivacyframework.gov prüfen.]

### 6. Speicherdauer
- Fragen/Antworten: keine Speicherung auf unserem Server. Bei Anthropic: Löschung innerhalb von 30 Tagen, bei Markierung als Richtlinienverstoß bis zu 2 Jahre.
- Rate-Limit-Schlüssel: Sekunden bis Minuten. Besuchs-Nachrichtenzähler: 24 Stunden.
- Nutzungsstatistik: Tageszähler **90 Tage** (geändert am 2026-11-07, vorher 400), danach automatisch gelöscht. Einwilligungsnachweis: 1 Jahr.
- Gesprächsverlauf im Browser: nichts gespeichert, außer Sie wählen „7 Tage speichern“ — dann 7 Tage (localStorage) bzw. bis Löschen/Widerruf. Einwilligungsentscheidung im Browser: bis Sie sie widerrufen oder Browserdaten löschen. Erster Besuchstag und Besuchszahl (2d1) im Browser: bis Widerruf der Einwilligung oder Löschen der Browserdaten.

### 7. Ihre Rechte, Widerruf
Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen: im Chatfenster über „Einwilligung widerrufen“.
Danach wird die Abfrage erneut angezeigt. Sie haben außerdem die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
Datenübertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde. Da die Besuchs-ID nicht mit einer
Person verknüpft ist, kann eine Zuordnung für Auskunft/Löschung unmöglich sein (Art. 11 DSGVO). Lokal gespeicherte Gespräche löschen Sie selbst jederzeit über „Gespeicherte Gespräche löschen“; für alles Weitere schreiben Sie an hello@promptquorum.com.

### 8. Kontakt
hello@promptquorum.com. Verantwortlicher: der im Impressum genannte Betreiber. Ein Datenschutzbeauftragter ist nicht benannt (Betreiber-Angabe 2026-11-07).

### 9. Abgrenzung zum MCP-Server
Die MCP-Sitzungswerkzeuge `set_consent`, `my_profile`, `forget_me`, `start` des öffentlichen MCP-Servers sind **nicht** mit
Ask Hans verbunden. Ask Hans hat eine eigene Einwilligung (Abschnitt 2e) und speichert keine Profile.
