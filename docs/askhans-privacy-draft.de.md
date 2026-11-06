# ENTWURF — Datenschutzhinweis „Ask Hans“ (nicht veröffentlichen)

> **Status: Text für Abschnitt 2c (Gesprächsverlauf) und der Einwilligungstext sind final (2026-11-06); die Datenschutzerklärung (`src/translations.ts`, `privacyAskHansNote`, 9 Sprachen) ist angeglichen.**
> Dies ist kein Rechtsrat. Offene Vertrags- und Fristenfragen stehen in der Aufgabe „Ask Hans: Datenschutz-Restpunkte“.
> Der Einwilligungstext im Chatfenster (`src/components/askhans/copy.ts`, Version
> `2026-11-06-v3`) muss zu diesem Text passen; bei jeder Textänderung die Versionsnummer in
> `src/lib/askhans/config.ts` (`ASK_HANS_CONSENT_TEXT_VERSION`) erhöhen — dann wird die Einwilligung neu eingeholt.

## Ask Hans (KI-Assistent)

### 1. Zweck
„Ask Hans“ ist ein KI-gestützter Assistent auf den deutschen Seiten von promptquorum.com. Er beantwortet Fragen zu lokaler KI,
Hardware, Smart Home und Balkonkraftwerken auf Grundlage der Inhalte von PromptQuorum und zeigt dazu passende Seiten an.
Ask Hans ist eine KI und keine Person; Antworten können fehlerhaft sein. Zur Kennzeichnung der KI-Interaktion (Art. 50 KI-Verordnung) steht der Hinweis im Chatfenster unter dem Eingabefeld.

### 2. Welche Daten verarbeitet werden
**a) Ihre Eingabe (Frage) — immer, sobald Sie eine Frage senden.**
Der Text Ihrer Frage und der bisherige Verlauf des aktuellen Gesprächs werden an unseren Server und von dort an Anthropic
(Claude API) übermittelt, damit eine Antwort erzeugt werden kann. Wir speichern weder Fragen noch Antworten auf unserem Server
und schreiben sie nicht in Protokolle. Der Code protokolliert nur Fehlermeldungen ohne Nutzertext.
Bitte geben Sie keine personenbezogenen Daten ein.

**b) Technische Begrenzung von Anfragen (Rate Limit) — immer.**
Zum Schutz vor Missbrauch wird kurzzeitig ein **gehashter** Schlüssel aus Ihrer IP-Adresse (mit geheimem Salz) im Arbeitsspeicher-Dienst
(Upstash Redis) vorgehalten. Die IP-Adresse selbst wird dafür nicht gespeichert oder protokolliert. Ebenso wird pro anonymer
Besuchs-ID gezählt, wie viele Nachrichten gesendet wurden (Limit pro Besuch, Ablauf nach 24 Stunden). Das Rate-Limit-Fenster beträgt aktuell 1 Minute; ein gehashter IP-Wert wird vorsorglich als personenbezogen behandelt.

**c) Gesprächsverlauf im Browser — lokal, nur auf Wunsch (Stand 2026-11-06, Einwilligungstext Version 2026-11-06-v3).**
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
Einwilligungstext Version 2026-11-06-v3 (Nennung der nachgeschlagenen Apps/Kategorien, Zwecke, Freiwilligkeit, Widerruf mit Wirkung für die Zukunft, Hinweis auf die Gesamtzähler ohne Einwilligung).

**d2) Anonyme Gesamtzähler — für alle Besucher, ohne Einwilligung.** Es werden nur drei Summen hochgezählt (Anzahl
geöffneter Fenster, gestellter Anfragen und gegebener Antworten), ohne Besuchs-ID, ohne Text, ohne IP-Adresse. Sie dienen der
Gesamtstatistik (z. B. auf der Seite /mcp-stats). Rechtsgrundlage: berechtigtes Interesse (siehe Abschnitt 3).

**e) Nachweis Ihrer Einwilligung.**
Ihre Entscheidung (Ja/Nein, sowie ob Sie das lokale Speichern der Gespräche gewählt haben), die Version des Einwilligungstextes und der Zeitpunkt werden in Ihrem Browser (`localStorage`)
gespeichert, damit die Abfrage nicht bei jedem Öffnen wiederholt wird. Bei „Ja“ und bei Widerruf speichern wir zusätzlich
als Nachweis: Zeitpunkt, Textversion und die anonyme Besuchs-ID. Bei „Nein“ wird nur ein anonymer Zähler erhöht.
Der Einwilligungsnachweis wird aktuell unbefristet, höchstens 50.000 Einträge, aufbewahrt.

### 3. Rechtsgrundlagen
- Beantwortung Ihrer Frage (2a, 2b): Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb eines Auskunftsdienstes und
  an dessen Missbrauchsschutz) (alternativ lit. b: Nutzung eines von Ihnen angeforderten Dienstes).
- Nutzungsstatistik (2d) und Einwilligungsnachweis (2e): Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und, soweit Informationen auf
  Ihrem Endgerät gespeichert oder ausgelesen werden, §25 Abs. 1 TDDDG.
- Lokale Speicherung des Gesprächsverlaufs nach 2c (nur bei angekreuztem Kästchen): Einwilligung, Art. 6 Abs. 1 lit. a DSGVO und §25 Abs. 1 TDDDG; ohne Haken wird nichts auf dem Endgerät gespeichert.

### 4. Empfänger und Auftragsverarbeitung
- **Anthropic** (Claude API) als Auftragsverarbeiter: erhält Ihre Eingabe und den Gesprächsverlauf, um die Antwort zu erzeugen.
  Vertragsgrundlage: Data Processing Addendum von Anthropic; Aufbewahrung und Modelltraining richten sich nach den Anbieter-Vorgaben.
- **Upstash** (Redis) als Auftragsverarbeiter: Rate-Limit-Schlüssel, Zähler, Einwilligungsnachweise.
- **Vercel** als Hosting-Anbieter. Siehe allgemeine Datenschutzerklärung.

### 5. Übermittlung in Drittländer (USA)
Anthropic sitzt in den USA. Die Übermittlung stützt sich auf das EU-US Data Privacy Framework und/oder Standardvertragsklauseln im Data Processing Addendum.

### 6. Speicherdauer
- Fragen/Antworten: keine Speicherung auf unserem Server. Bei Anthropic gilt die Frist laut Vertrag.
- Rate-Limit-Schlüssel: Sekunden bis Minuten. Besuchs-Nachrichtenzähler: 24 Stunden.
- Nutzungsstatistik: Tageszähler 400 Tage, danach automatisch gelöscht.
- Gesprächsverlauf im Browser: nichts gespeichert, außer Sie wählen „7 Tage speichern“ — dann 7 Tage (localStorage) bzw. bis Löschen/Widerruf. Einwilligungsentscheidung im Browser: bis Sie sie widerrufen oder Browserdaten löschen.

### 7. Ihre Rechte, Widerruf
Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen: im Chatfenster über „Einwilligung widerrufen“.
Danach wird die Abfrage erneut angezeigt. Sie haben außerdem die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
Datenübertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde. Da die Besuchs-ID nicht mit einer
Person verknüpft ist, kann eine Zuordnung für Auskunft/Löschung unmöglich sein (Art. 11 DSGVO).

### 8. Kontakt
hello@promptquorum.com. Verantwortlicher: siehe Impressum.

### 9. Offene Punkte (Hans, vor dem Einschalten)
1. Datenverarbeitungsvertrag mit Anthropic und Transfermechanismus bestätigen (Abschnitte 4, 5).
2. Einwilligungstext (Chatfenster) und diesen Entwurf gemeinsam freigeben; danach in `/de/privacy` übernehmen.
3. Die MCP-Sitzungswerkzeuge `set_consent`, `my_profile`, `forget_me`, `start` des öffentlichen MCP-Servers sind **nicht** mit
   Ask Hans verbunden. Ask Hans hat eigene Einwilligung (Abschnitt 2e) und speichert keine Profile.
4. Aufbewahrungsfristen (Abschnitt 2e, 6) festlegen.
