# Multi-Agent Security Review — PromptQuorum Website 2026-05-24

## Scope

Next.js 15 Marketing-Site auf Vercel. Kein Auth-System, keine Datenbank.
8 API-Routen, Waitlist-Signup mit Resend (Double-Opt-In), GitHub-API-Proxy,
4 Analytics-Dienste (GA4, Umami, Clarity, Vercel), OneSignal Push.

## Rollen-Findings (Rohfassung)

### Rolle 1 — Senior Developer

- `makeToken()` identisch in `waitlist/route.ts` und `confirm/route.ts` dupliziert — kein gemeinsamer Util. Desync-Risiko bei Änderungen.
- `ESLint: ignoreDuringBuilds: true` in `next.config.ts` — Lint-Fehler werden in Production-Builds stillschweigend übersprungen.
- `console.log(...)` in `middleware.ts` feuert bei jedem Redirect in Production — Log-Flut, volle URLs inkl. Query-Params in Vercel-Logs.
- Resend `contactResult.error` in `waitlist/route.ts` wird gelogged, dann **ignoriert** — Bestätigungs-E-Mail geht trotzdem raus, auch wenn kein Kontakt angelegt wurde (Silent Failure).
- `.replace('\n', '<br>')` in E-Mail-HTML ohne `/g`-Flag — ersetzt nur erstes Newline, nachfolgende Zeilen in manchen E-Mail-Clients nicht korrekt getrennt.
- `node-fetch@2.7.0` als direkte Abhängigkeit — unnötig für Node 18+ (native `fetch` verfügbar).
- `/api/github/file` PUT: kein Body-Size-Limit.

**Gut gebaut:** TypeScript strict mode durchgehend, saubere Server/Client-Trennung, Zod + react-hook-form im Frontend, HMAC-Token-Logik solide.

### Rolle 2 — Security Expert (Laufzeit)

- **Kein Rate-Limiting auf `/api/waitlist`** — unbegrenzte POST-Requests möglich. Jeder kann beliebige E-Mail-Adressen in die Bestätigungs-Schleife schicken. Resend-Kosten skalieren mit Angreifer-Last. Spam-Vektor für Opfer-E-Mails.
- `Access-Control-Allow-Origin: *` global auf **allen** Routen (inkl. `/:path*`) — Cross-Site-Requests von jeder Domain gegen POST-API-Routes möglich.
- `/api/github/file`: Wildcard-CORS + kein Repo/Path-Whitelist — beliebige Website kann diese Route als GitHub-API-Proxy missbrauchen (fremder PAT, beliebiger owner/repo/path).
- GitHub PAT in URL-Query-Param — landet in Vercel-Logs, Browser-History, Proxy-Logs, Referrer-Headern bei externen Links.
- OneSignal-SDK von `cdn.onesignal.com` — externe JavaScript-Ressource.

**Gut:** HMAC-Token, `timingSafeEqual`, kein Secret in Code, Double-Opt-In.

### Rolle 3 — Product Manager

- Waitlist-Flow professionell: Consent-Checkbox, Double-Opt-In, 5 Sprachen — korrekt.
- **Kein Abmelde-Link** in der Bestätigungs-E-Mail — nur "ignoriere diese E-Mail wenn du dich nicht angemeldet hast". Nach Bestätigung gibt es keinen sichtbaren Opt-Out-Weg in der E-Mail selbst.
- `?confirmed=error` Redirect zeigt Nutzern einen Fehler ohne Erklärung.
- Mehrfach-Submit (doppeltes Klicken, Browser-Reload) → mehrere Bestätigungs-E-Mails.

**Gut:** Klarer CTA, saubere UX für den Hauptpfad, multilinguale E-Mails.

### Rolle 4 — Devil's Advocate

- **`RESEND_API_KEY` ist gleichzeitig der HMAC-Secret** → Key-Rotation bricht sofort alle laufenden Bestätigungs-Links. Kein Graceful-Handling. Nutzer, die den Link nach der Rotation anklicken, erhalten `?confirmed=invalid`.
- `process.env.RESEND_AUDIENCE_ID!` — TypeScript `!` verhindert Compile-Fehler, aber fehlt die Variable zur Laufzeit, crasht die Route mit `TypeError`.
- Token-Expiry nur im E-Mail-Text ("7 Tage") — serverseitig nicht erzwungen → Tokens dauerhaft gültig.
- `matcher: '/:path*'` — Middleware läuft auf allen Routen inkl. `/_next/static/` — unnötige Latenz auf statischen Assets.
- Kein Alerting wenn Waitlist-API ausfällt.

### Rolle 5 — AI/API Developer

- Kein Anthropic SDK im Einsatz — angemessen für Marketing-Site.
- Resend-Integration korrekt: aktuelle Version, Double-Opt-In, saubere Fehlerbehandlung auf API-Ebene.
- `node-fetch@2.7.0` als direkte Abhängigkeit unnötig (Node 18+ native fetch).
- Umami + Clarity via Vercel-Rewrites proxied — kluger Ad-Blocker-Bypass, aber jeder Analytics-Aufruf kostet eine Vercel-Function-Invokation.
- Kein unnötiger doppelter API-Aufruf in der Waitlist-Route identifiziert.

### Rolle 6 — Live Operations

- Kein Alerting bei Waitlist-Fehlern — `console.error` geht in Vercel-Logs, die niemand aktiv überwacht.
- Vercel auto-deploy auf `main` ohne dokumentierten Rollback-Plan (Vercel hat Instant-Rollback, aber nicht beschrieben).
- Globaler API-Cache `max-age=3600` (`/api/:path*`) — OG-Image-Route wird ggf. zu aggressiv gecacht und zeigt alten Content.
- Resend = Single Point of Failure für Waitlist. Kein Fallback.
- Silent Failure (Rolle 1): Kontakt nicht angelegt → Nutzer bestätigt nie erfolgreich → geht verloren ohne Hinweis.

### Rolle 7 — Compliance Officer (DSGVO)

- **Microsoft Clarity** zeichnet Session-Replays auf (Mausbewegungen, Klicks, Formulareingaben). DSGVO: AVV mit Microsoft nötig. Aktivierung muss **nach** Cookie-Consent erfolgen — unklar ob `CookieBanner.tsx` dies korrekt verzögert.
- **Google Analytics GA4**: US-Datentransfer → SCCs + AVV mit Google nötig. Privacy Policy erwähnt es — ist der Vertrag unterzeichnet?
- **Resend**: Verarbeitet E-Mail-Adressen (PII) → AVV mit Resend nötig.
- Kein Abmelde-Link in Bestätigungs-E-Mail → DSGVO §7 Abs. 3: Widerruf muss so einfach sein wie die Einwilligung.
- Token-Expiry nicht serverseitig erzwungen → Datensparsamkeitsprinzip verletzt.
- `.env` fehlt in `.gitignore` → theoretisches Risiko bei Git-History.

**Gut:** Double-Opt-In ✅, Privacy Policy vollständig und 5-sprachig ✅, GA4 mit `anonymize_ip: true` ✅.

### Rolle 8 — Security Checklist

| Nr | Checkpoint | Status | Finding |
|----|-----------|--------|---------|
| 1 | Secrets & Credentials | ⚠️ | Kein hardcoded Key ✅. `.env` fehlt in `.gitignore`. `RESEND_API_KEY` dual-use. |
| 2 | Input Validation | ⚠️ | Email-Regex ok. `/api/github/file`: owner/repo/path ohne Whitelist. |
| 3 | Auth Endpoint-Audit | 🔴 | `/api/indexnow` public POST ohne Auth — jeder kann URLs für promptquorum.com an Bing submitten. |
| 4 | Auth-Annahmen-Check | ✅ | Kein Auth-System — bewusst, korrekt für Marketing-Site. |
| 5 | Command Injection | ✅ | Keine Shell-Calls. |
| 6 | Data Exposure | ⚠️ | Middleware loggt volle URLs in Production. `contactResult.error` könnte PII in Logs schreiben. |
| 7 | Dependency Security | ⚠️ | `node-fetch@2.7.0` outdated. npm audit nicht durchgeführt (manuell nachholen). |
| 8 | API-Key-Hygiene | ⚠️ | Keys in Env ✅. `RESEND_API_KEY` dual-use als Token-Secret ist Kopplungs-Risiko. |
| 9 | Cloud-Sync-Scan | ⚠️ | Nicht aus Code prüfbar — manuell verifizieren ob `promptquorum-website/` in OneDrive/iCloud liegt. |
| 10 | Port-Check | ✅ | localhost:3000, Vercel 443. Keine Kollision. |
| 11 | Git-History-Scan | ⚠️ | Nicht durchgeführt. `.env` fehlt in `.gitignore` — Risiko wenn je committet. |

**→ GO / NO-GO: NO-GO**
CRITICAL + HIGH Findings müssen behoben sein vor Phase-Close.

---

*Generiert: 2026-05-24 | MASR v1 | 9 Rollen*
