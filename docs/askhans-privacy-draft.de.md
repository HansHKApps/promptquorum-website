# ENTWURF — Datenschutzhinweis „Ask Hans“ (nicht veröffentlichen)

> **Status: Entwurf, 2026-10-30. Nicht veröffentlicht, nicht in die Datenschutzerklärung eingebunden.**
> Dies ist kein Rechtsrat. Jede mit `[PRÜFEN]` markierte Stelle ist unsicher oder hängt von einer Entscheidung/einem Vertrag ab,
> den Hans bestätigen muss. Der Einwilligungstext im Chatfenster (`src/components/askhans/copy.ts`, Version
> `2026-10-30-draft-1`) muss zu diesem Text passen; bei jeder Textänderung die Versionsnummer in
> `src/lib/askhans/config.ts` (`ASK_HANS_CONSENT_TEXT_VERSION`) erhöhen — dann wird die Einwilligung neu eingeholt.

## Ask Hans (KI-Assistent)

### 1. Zweck
„Ask Hans“ ist ein KI-gestützter Assistent auf den deutschen Seiten von promptquorum.com. Er beantwortet Fragen zu lokaler KI,
Hardware, Smart Home und Balkonkraftwerken auf Grundlage der Inhalte von PromptQuorum und zeigt dazu passende Seiten an.
Ask Hans ist eine KI und keine Person; Antworten können fehlerhaft sein. `[PRÜFEN]` Kennzeichnungspflicht für KI-Interaktion
(Art. 50 KI-Verordnung) — der Hinweis steht im Chatfenster unter dem Eingabefeld.

### 2. Welche Daten verarbeitet werden
**a) Ihre Eingabe (Frage) — immer, sobald Sie eine Frage senden.**
Der Text Ihrer Frage und der bisherige Verlauf des aktuellen Gesprächs werden an unseren Server und von dort an Anthropic
(Claude API) übermittelt, damit eine Antwort erzeugt werden kann. Wir speichern weder Fragen noch Antworten auf unserem Server
und schreiben sie nicht in Protokolle. `[PRÜFEN]` Prüfen, ob Hosting-/Funktionsprotokolle (Vercel) Request-Inhalte enthalten
können; derzeit loggt der Code nur Fehlermeldungen ohne Nutzertext.
Bitte geben Sie keine personenbezogenen Daten ein.

**b) Technische Begrenzung von Anfragen (Rate Limit) — immer.**
Zum Schutz vor Missbrauch wird kurzzeitig ein **gehashter** Schlüssel aus Ihrer IP-Adresse (mit geheimem Salz) im Arbeitsspeicher-Dienst
(Upstash Redis) vorgehalten. Die IP-Adresse selbst wird dafür nicht gespeichert oder protokolliert. Ebenso wird pro anonymer
Besuchs-ID gezählt, wie viele Nachrichten gesendet wurden (Limit pro Besuch, Ablauf nach 24 Stunden). `[PRÜFEN]` Konkrete
Ablaufzeiten des Rate-Limit-Fensters (aktuell 1 Minute) und ob ein gehashter IP-Wert im Sinne der DSGVO weiterhin als
personenbezogen gilt (wahrscheinlich ja → in der Rechtsgrundlage berücksichtigen).

**c) Gesprächsverlauf im Browser — lokal.**
Ihre Gespräche bleiben nur in Ihrem Browser (`sessionStorage`) und nur für den Besuch (Tab). Sie werden nicht auf dem Server
gespeichert. Mit dem Schließen des Tabs sind sie weg. `[PRÜFEN]` §25 TDDDG: Speicherung auf dem Endgerät, technisch erforderlich
für die gewünschte Funktion (§25 Abs. 2 Nr. 2 TDDDG) — bestätigen.

**d) Anonyme Nutzungsstatistik — nur mit Ihrer Einwilligung („Ja, einverstanden“).**
Erfasst werden: gewählte Themenkategorie, verwendete Werkzeuge (z. B. „App-Suche“), Sprache, Zeitpunkt, angeklickte Links
(Kategorie und Link-Kennung), ob und in welchen Bereich der Website (nur der erste Pfadabschnitt, z. B. „power-local-llm“) ein Link
aus einer Antwort angeklickt wurde, Klicks auf „Neu“ und eine zufällige, anonyme Besuchs-ID, die keiner Person zugeordnet ist.
**Nicht erfasst werden:** Fragetext, Antworttext, IP-Adresse, Namen.

**e) Nachweis Ihrer Einwilligung.**
Ihre Entscheidung (Ja/Nein), die Version des Einwilligungstextes und der Zeitpunkt werden in Ihrem Browser (`localStorage`)
gespeichert, damit die Abfrage nicht bei jedem Öffnen wiederholt wird. Bei „Ja“ und bei Widerruf speichern wir zusätzlich
als Nachweis: Zeitpunkt, Textversion und die anonyme Besuchs-ID. Bei „Nein“ wird nur ein anonymer Zähler erhöht.
`[PRÜFEN]` Aufbewahrungsdauer des Einwilligungsnachweises (aktuell unbefristet, max. 50.000 Einträge) festlegen.

### 3. Rechtsgrundlagen
- Beantwortung Ihrer Frage (2a, 2b): Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb eines Auskunftsdienstes und
  an dessen Missbrauchsschutz) `[PRÜFEN]` alternativ lit. b (Nutzung eines von Ihnen angeforderten Dienstes); Interessenabwägung dokumentieren.
- Nutzungsstatistik (2d) und Einwilligungsnachweis (2e): Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und, soweit Informationen auf
  Ihrem Endgerät gespeichert oder ausgelesen werden, §25 Abs. 1 TDDDG. `[PRÜFEN]`
- Speicherung im Browser nach 2c: §25 Abs. 2 Nr. 2 TDDDG. `[PRÜFEN]`

### 4. Empfänger und Auftragsverarbeitung
- **Anthropic** (Claude API) als Auftragsverarbeiter: erhält Ihre Eingabe und den Gesprächsverlauf, um die Antwort zu erzeugen.
  `[PRÜFEN]` Auftragsverarbeitungsvertrag (Data Processing Addendum) mit Anthropic abgeschlossen? Aufbewahrungsfrist der
  API-Eingaben bei Anthropic und Nutzung für Modelltraining (laut Anbieter-Vorgaben nicht für API-Kunden) schriftlich bestätigen.
- **Upstash** (Redis) als Auftragsverarbeiter: Rate-Limit-Schlüssel, Zähler, Einwilligungsnachweise. `[PRÜFEN]` Region/AV-Vertrag.
- **Vercel** als Hosting-Anbieter. `[PRÜFEN]` bereits in der allgemeinen Datenschutzerklärung abgedeckt?

### 5. Übermittlung in Drittländer (USA)
Anthropic sitzt in den USA. `[PRÜFEN]` Welcher Transfermechanismus gilt: EU-US Data Privacy Framework (Zertifizierung von
Anthropic prüfen) und/oder Standardvertragsklauseln im Data Processing Addendum; ggf. Transfer Impact Assessment.

### 6. Speicherdauer
- Fragen/Antworten: keine Speicherung auf unserem Server. Bei Anthropic: `[PRÜFEN]` Frist laut Vertrag.
- Rate-Limit-Schlüssel: Sekunden bis Minuten. Besuchs-Nachrichtenzähler: 24 Stunden.
- Nutzungsstatistik: Tageszähler 400 Tage, danach automatisch gelöscht. `[PRÜFEN]` Frist bestätigen.
- Gesprächsverlauf im Browser: bis Tab geschlossen wird. Einwilligungsentscheidung im Browser: bis Sie sie widerrufen oder Browserdaten löschen.

### 7. Ihre Rechte, Widerruf
Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen: im Chatfenster über „Einwilligung widerrufen“.
Danach wird die Abfrage erneut angezeigt. Sie haben außerdem die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
Datenübertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde. Da die Besuchs-ID nicht mit einer
Person verknüpft ist, kann `[PRÜFEN]` eine Zuordnung für Auskunft/Löschung unmöglich sein (Art. 11 DSGVO).

### 8. Kontakt
hello@promptquorum.com `[PRÜFEN]` Verantwortlicher laut Impressum, ggf. Datenschutzbeauftragter.

### 9. Offene Punkte (Hans, vor dem Einschalten)
1. Datenverarbeitungsvertrag mit Anthropic und Transfermechanismus bestätigen (Abschnitte 4, 5).
2. Einwilligungstext (Chatfenster) und diesen Entwurf gemeinsam freigeben; danach in `/de/privacy` übernehmen.
3. Die MCP-Sitzungswerkzeuge `set_consent`, `my_profile`, `forget_me`, `start` des öffentlichen MCP-Servers sind **nicht** mit
   Ask Hans verbunden. Ask Hans hat eigene Einwilligung (Abschnitt 2e) und speichert keine Profile.
4. Aufbewahrungsfristen (Abschnitt 2e, 6) festlegen.
