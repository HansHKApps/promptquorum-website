# GESAMTBERICHT — Multi-Agent Security Review
# PromptQuorum Website | 2026-05-24

---

## Top 10 Findings

| #  | Finding | Severity | Agent | Quick Fix? |
|----|---------|----------|-------|------------|
| 01 | Kein Rate-Limiting auf /api/waitlist — unbegrenzte E-Mails an beliebige Adressen sendbar | 🔴 CRITICAL | Security + Live Ops + Checklist | Nein — 2h |
| 02 | GitHub PAT als URL-Query-Param — Token landet in Server-Logs, Browser-History, Proxy-Logs | 🟠 HIGH | Dev + Security + Checklist | Ja — 30 Min |
| 03 | GitHub-Proxy: kein Repo/Path-Whitelist + Wildcard-CORS — jede Website kann beliebige GitHub-API-Anfragen proxyen | 🟠 HIGH | Security + Checklist | Nein — 2h |
| 04 | CORS Wildcard auf allen Routen inkl. POST-API — Cross-Site-Requests von jeder Domain möglich | 🟠 HIGH | Security + Checklist | Ja — 30 Min |
| 05 | RESEND_API_KEY ist gleichzeitig HMAC-Secret — Key-Rotation bricht sofort alle laufenden Bestätigungs-Links | 🟠 HIGH | Dev + Devil's Advocate + Checklist | Nein — 1h |
| 06 | /api/indexnow POST ohne Auth — jeder kann beliebige URLs im Namen von promptquorum.com an Bing submitten | 🟡 MEDIUM | Checklist | Ja — 30 Min |
| 07 | Microsoft Clarity Session-Recording — AVV mit Microsoft nötig, Aktivierung muss nach Cookie-Consent erfolgen | 🟡 MEDIUM | Security + Compliance | Nein — 4h |
| 08 | Token-Expiry (7 Tage) nur in E-Mail-Text, nicht serverseitig erzwungen — Tokens dauerhaft gültig | 🟡 MEDIUM | Devil's Advocate + Compliance + Checklist | Nein — 2h |
| 09 | Silent Failure: Resend-Kontaktanlage scheitert still — E-Mail geht raus, Kontakt existiert nicht, kein Alert | 🟡 MEDIUM | Dev + Live Ops | Ja — 30 Min |
| 10 | ESLint in Production-Builds deaktiviert — Lint-Fehler werden stillschweigend übersprungen | 🟢 LOW | Dev | Ja — 15 Min |

🔴 CRITICAL · 🟠 HIGH · 🟡 MEDIUM · 🟢 LOW

---

## Detaillierte Findings

### #01 — 🔴 CRITICAL: Kein Rate-Limiting auf der Waitlist-Route (Security + Live Ops + Checklist)

**Was passiert:**
Jeder im Internet kann beliebig viele POST-Anfragen an die Waitlist-Anmeldung schicken, ohne irgendeine Bremse. Die Route nimmt jede Anfrage an, legt (erneut) einen Kontakt in Resend an und schickt eine Bestätigungs-E-Mail raus — so oft wie gewünscht.

**Warum das ein Problem ist:**
Ein Angreifer kann mit einem Skript tausende Bestätigungs-E-Mails an eine fremde E-Mail-Adresse schicken (E-Mail-Bombing). Das kostet Resend-API-Kontingent und kann zur Account-Suspension führen. Außerdem ist das eine Form des Missbrauchs gegenüber den Adress-Inhabern.

**Fix:**
Vercel-KV, Upstash-Redis oder ein einfaches IP-basiertes Rate-Limit (z.B. max. 3 Anfragen pro IP pro Stunde) vor der Resend-API-Calls einbauen. Alternativ: Vercel's eingebautes Edge-Rate-Limiting aktivieren.

---

### #02 — 🟠 HIGH: GitHub PAT in URL-Query-Parameter (Dev + Security + Checklist)

**Was passiert:**
Der GitHub Personal Access Token (PAT) wird von dem Tool, das die Route aufruft, als `?token=...` in der URL mitgeschickt. URL-Parameter landen automatisch in Server-Logs, Browser-Verlauf, Proxy-Logs und können als Referrer-Header an externe Seiten weitergegeben werden.

**Warum das ein Problem ist:**
Der PAT gewährt Schreibzugriff auf GitHub-Repositories. Wer diesen Token aus einem Log extrahiert, kann Code-Änderungen in deinen Repos vornehmen oder Daten lesen — auch wenn der Token eigentlich nur für den SEO-Manager gedacht war.

**Fix:**
Token aus dem Query-String entfernen. Stattdessen als HTTP-Header (`Authorization: Bearer ...`) vom aufrufenden Tool mitschicken. Die Route liest dann `request.headers.get('authorization')`. Das verhindert Log-Exposure.

---

### #03 — 🟠 HIGH: GitHub-Proxy ohne Whitelist + offene CORS (Security + Checklist)

**Was passiert:**
Die Route `/api/github/file` nimmt jede Kombination aus `owner`, `repo` und `path` an und leitet die Anfrage mit dem mitgelieferten Token an die GitHub-API weiter. Gleichzeitig erlaubt sie Anfragen von jeder beliebigen Website (Wildcard-CORS).

**Warum das ein Problem ist:**
Jede externe Website kann diese Route als anonymen GitHub-API-Proxy nutzen — mit fremden Tokens und gegen beliebige Repos. Das macht die Route zum Werkzeug für Missbrauch und erhöht gleichzeitig deine Vercel-Kosten für jede Fremd-Anfrage.

**Fix:**
Eine feste Whitelist für erlaubte `owner`/`repo`-Kombinationen einbauen. CORS auf die tatsächliche Aufrufer-Domain einschränken, statt `*` zu erlauben.

---

### #04 — 🟠 HIGH: CORS-Wildcard auf allen Seiten-Routen (Security + Checklist)

**Was passiert:**
Die `next.config.ts` setzt für alle Routen (`/:path*`) den Header `Access-Control-Allow-Origin: *`. Das gilt nicht nur für statische Seiten, sondern auch für alle API-Routen, einschließlich der Waitlist-POST-Route.

**Warum das ein Problem ist:**
Eine fremde Website kann im Hintergrund unsichtbar Nutzer in die Waitlist eintragen (Cross-Site-Request). In Kombination mit fehlendem Rate-Limiting ist das ein aktiver Angriffsvektor. Für eine öffentliche Marketing-Site mit rein lesbaren Inhalten ist `*` auf GET-Routen vertretbar, aber nicht auf schreibende API-Endpoints.

**Fix:**
CORS-Header in `next.config.ts` auf GET/HEAD beschränken oder komplett auf die öffentlichen Seiten-Routen begrenzen. API-Routen sollten keinen `Access-Control-Allow-Origin: *` Header bekommen, wenn POST-Requests möglich sind.

---

### #05 — 🟠 HIGH: RESEND_API_KEY als HMAC-Secret (Dev + Devil's Advocate + Checklist)

**Was passiert:**
Die Funktion `makeToken()` benutzt `RESEND_API_KEY` als geheimen Schlüssel für die HMAC-SHA256-Signatur der Bestätigungs-Links. Derselbe Schlüssel authentifiziert auch alle Resend-API-Aufrufe.

**Warum das ein Problem ist:**
Wenn der API-Key aus Sicherheitsgründen rotiert werden muss (z.B. weil er in einem Log aufgetaucht ist), brechen sofort alle Bestätigungs-Links, die gerade noch im Umlauf sind — ohne Warnung, ohne Möglichkeit zur Neusendung. Außerdem sind API-Key und Token-Secret konzeptionell unterschiedliche Geheimnisse.

**Fix:**
Eine separate Umgebungsvariable `TOKEN_SECRET` einführen und in `makeToken()` verwenden. Damit können API-Key und Token-Secret unabhängig rotiert werden.

---

### #06 — 🟡 MEDIUM: /api/indexnow ohne Authentifizierung (Checklist)

**Was passiert:**
Der POST-Endpoint `/api/indexnow` nimmt eine Liste von URLs an und sendet sie an Bing IndexNow zur sofortigen Indexierung — ohne irgendeine Prüfung wer diese Anfrage stellt.

**Warum das ein Problem ist:**
Zwar prüft die Route ob die URLs mit `https://www.promptquorum.com` beginnen, aber jeder kann den Endpoint aufrufen und Bing-Anfragen für promptquorum.com generieren. Bei Missbrauch könnte Bing das IndexNow-Konto sperren oder throttlen.

**Fix:**
Einen einfachen API-Key-Header einbauen (z.B. `x-api-key: ...` geprüft gegen eine Umgebungsvariable). Da dieser Endpoint nur intern genutzt wird, genügt ein statischer Secret-Header.

---

### #07 — 🟡 MEDIUM: Microsoft Clarity Session-Recording (Security + Compliance)

**Was passiert:**
Microsoft Clarity zeichnet Sitzungs-Replays auf — also Mausbewegungen, Klicks und Formulareingaben von echten Nutzern. Die Daten gehen zu Microsoft-Servern in den USA.

**Warum das ein Problem ist:**
Unter der DSGVO sind Session-Replays besonders sensibel, da sie de-facto biometrische Verhaltensmuster erfassen. Zwei Voraussetzungen müssen erfüllt sein: (1) Ein Auftragsverarbeitungsvertrag (AVV) mit Microsoft muss vorliegen. (2) Clarity darf nur **nach** aktiver Cookie-Zustimmung des Nutzers laden. Ist Punkt 2 nicht garantiert, ist jede Sitzungsaufzeichnung ohne Einwilligung rechtswidrig.

**Fix:**
Im `CookieBanner.tsx` prüfen ob Clarity-Initialisierung wirklich erst nach `consent: 'granted'` erfolgt. AVV mit Microsoft abschließen (Microsoft hat einen Standard-AVV für Clarity). In der Datenschutzerklärung unter "Clarity" explizit "Session-Replay" als Verarbeitungsart benennen.

---

### #08 — 🟡 MEDIUM: Token-Expiry nicht serverseitig erzwungen (Devil's Advocate + Compliance + Checklist)

**Was passiert:**
Der Bestätigungs-Link in der E-Mail trägt den Hinweis "Dieser Link läuft in 7 Tagen ab." Serverseitig wird das Ablaufdatum aber nie geprüft — der Token ist dauerhaft gültig.

**Warum das ein Problem ist:**
Ein Token, der in einer alten E-Mail aufbewahrt wird oder ein Jahr später in einem archivierten Postfach auftaucht, würde noch immer funktionieren. Das widerspricht dem DSGVO-Grundsatz der Datensparsamkeit und ist auch irreführend gegenüber dem Nutzer.

**Fix:**
Bei der Token-Generierung den Zeitstempel als HMAC-Komponente einbeziehen (z.B. `HMAC(email + timestamp, TOKEN_SECRET)`) und den Zeitstempel als `expires`-Query-Param mitsenden. In `/api/confirm` prüfen ob `expires > Date.now()`.

---

### #09 — 🟡 MEDIUM: Silent Failure bei Resend-Kontaktanlage (Dev + Live Ops)

**Was passiert:**
Wenn die Resend-API beim Anlegen des Kontakts einen Fehler zurückgibt, wird dieser Error in der Konsole gelogged — aber die Route sendet danach trotzdem die Bestätigungs-E-Mail. Der Nutzer erhält die E-Mail, klickt auf den Link, und `/api/confirm` versucht dann, einen bereits fehlgeschlagenen Kontakt zu "bestätigen".

**Warum das ein Problem ist:**
Nutzer gehen verloren ohne dass irgendjemand es bemerkt. Es gibt kein Alerting, keine Gegenmeldung, kein automatisches Retry.

**Fix:**
Bei `contactResult.error` entweder (a) die Route mit `status: 500` abbrechen und den Nutzer um Wiederholung bitten, oder (b) mindestens eine explizite Alert-Logik (z.B. Sentry-Event oder Resend-Fehler in einem separaten Monitoring-Channel) einbauen.

---

### #10 — 🟢 LOW: ESLint in Production-Builds deaktiviert (Dev)

**Was passiert:**
`next.config.ts` setzt `eslint: { ignoreDuringBuilds: true }`. Das bedeutet: `npm run build` ignoriert alle ESLint-Fehler und -Warnungen vollständig.

**Warum das ein Problem ist:**
Lint-Fehler — auch sicherheitsrelevante wie unbenutzte Abhängigkeiten oder unsichere Patterns — werden nie im CI sichtbar und können unkontrolliert akkumulieren. Die Sicherheitsnetz-Funktion von ESLint ist ausgehebelt.

**Fix:**
`ignoreDuringBuilds: false` setzen und `npm run lint` als separaten CI-Schritt vor dem Build ausführen. Bestehende Fehler einmalig beheben.

---

## Kurzfassung

Die Basis-Architektur ist solide: TypeScript Strict, HMAC-basiertes Double-Opt-In mit `timingSafeEqual`, saubere Server/Client-Trennung, keine Secrets im Code. Die kritischen Probleme liegen nicht in der Kernlogik, sondern in drei fehlenden Schutzschichten: kein Rate-Limiting auf der Waitlist-Route, ein GitHub-PAT der in URLs exponiert wird, und globale CORS-Wildcards auf schreibenden API-Endpoints. Sofortmaßnahme: Rate-Limiting auf `/api/waitlist` einbauen und den GitHub-Token in einen HTTP-Header verschieben — beides sind Quick Wins unter einer Stunde.

---

## 3-Bucket-Sortierung

### Sofort (vor nächstem Milestone)

| # | Aktion | Aufwand | Warum dringend |
|---|--------|---------|----------------|
| 1 | Rate-Limiting auf `/api/waitlist` einbauen (Upstash Redis oder Vercel Edge) | 2h | CRITICAL — aktiver Abuse-Vektor, E-Mail-Bombing möglich |
| 2 | GitHub PAT aus URL-Query entfernen → als `Authorization`-Header übergeben | 30 Min | HIGH — Token in Logs, 3× Agent-Konvergenz |
| 3 | CORS auf `/:path*` einschränken — kein `*` auf POST-API-Routen | 30 Min | HIGH — Cross-Site-API-Abuse |
| 4 | GitHub-Proxy: feste Repo-Whitelist + CORS auf eigene Domain begrenzen | 2h | HIGH — offener Proxy für beliebige GitHub-Anfragen |
| 5 | `TOKEN_SECRET` als eigene Env-Variable einführen, von `RESEND_API_KEY` trennen | 1h | HIGH — Key-Rotation bricht alle laufenden Bestätigungs-Links |
| 6 | `/api/indexnow` mit API-Key-Header absichern | 30 Min | MEDIUM — public endpoint für Bing-Submission |
| 7 | Silent Failure beheben: bei `contactResult.error` entweder abbrechen oder Alerting | 30 Min | MEDIUM — Nutzer gehen unbemerkt verloren |

### Nächster Milestone

- Token-Expiry serverseitig erzwingen (Timestamp in HMAC einbeziehen)
- Microsoft Clarity: sicherstellen dass Initialisierung erst nach Cookie-Consent erfolgt + AVV mit Microsoft abschließen
- Abmelde-Link in Bestätigungs-E-Mail aufnehmen (DSGVO §7 Abs. 3)
- AVV-Status prüfen: Resend, Google Analytics, Microsoft Clarity — sind alle drei unterzeichnet?
- `makeToken()` in einen gemeinsamen Util auslagern (DRY)
- ESLint in Builds reaktivieren

### Tech Debt (bewusst akzeptiert)

- `node-fetch@2.7.0` auf native `fetch` migrieren (non-urgent, kein aktives Risiko)
- Middleware-`console.log` für Redirects durch strukturiertes Logging ersetzen oder entfernen
- Middleware `matcher` auf sinnvolle Subset-Routen einschränken (Performance)
- npm audit ausführen und Dependency-Report prüfen

---

## Rolle 8 — GO / NO-GO

**NO-GO** — CRITICAL (#01) + 4× HIGH (#02–#05) müssen vor Phase-Close behoben sein.

Nach Behebung der Sofort-Items #01–#05: **GO**.

---

*MASR v1 | PromptQuorum Website | 2026-05-24*
*9 Rollen: Senior Dev, Security Expert, Product Manager, Devil's Advocate, AI Dev, Live Ops, Compliance, Security Checklist, Orchestrator*
