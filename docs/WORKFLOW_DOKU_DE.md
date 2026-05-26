# PromptQuorum — Vollständige Workflow-Dokumentation (Deutsch)

**Erstellt: Mai 2026 · Zielgruppe: Freunde und Partner, die diesen Workflow übernehmen möchten**

---

## Überblick: Was ist dieser Workflow?

PromptQuorum ist eine mehrsprachige Content-Website (EN/DE/FR/JA/ZH), die rund um das Thema KI-Werkzeuge und Prompt Engineering aufgebaut ist. Der Kern-Gedanke:

> **Erst eine vollständige Webseite mit Cluster-Architektur aufbauen — dann einzelne kürzere Artikel (Prompt Bites) als Satelliten dazu entwickeln.**

Jede einzelne Seite (Article, Bite, Blog-Post) folgt einem strikten Prozess in **9 Phasen**. Dieser Prozess ist auf **GEO (Generative Engine Optimization)** ausgerichtet: Inhalte werden so strukturiert, dass KI-Suchmaschinen (ChatGPT, Perplexity, Gemini, Bing Copilot) sie zitieren können — zusätzlich zur klassischen Google-SEO.

---

## Voraussetzungen (Prerequisites)

Bevor der erste Artikel entsteht, müssen folgende Dinge vorhanden sein:

### Technische Grundlage
| Was | Wo | Zweck |
|---|---|---|
| **Next.js 15 App Router** | `promptquorum-website/` | Grundgerüst der Website |
| **TypeScript (strict)** | Alle `.ts`-Dateien | Typsicherheit, Build-Validierung |
| **Tailwind CSS v3** | Kein separates CSS | Styling ausschließlich per Klassen |
| **Vercel** | Deployment bei jedem Push zu `main` | Automatisches Deployment |
| **Google Search Console (GSC)** | console.search.google.com | Keyword-Daten, Impressionen, CTR |
| **Claude Code CLI** | `claude` im Terminal oder VS Code | KI-gestütztes Schreiben und Übersetzen |

### Pflichtdokumente (müssen vor dem ersten Artikel gelesen werden)
| Datei | Zweck |
|---|---|
| `docs/GEO_WRITING_GUIDELINES.md` | **Die Mutter aller Regeln** — 40+ Schreibregeln für GEO-Compliance |
| `docs/TRANSLATION_SPEC.md` | Übersetzungsregeln für alle 5 Sprachen |
| `docs/PROMPT_BITES_WRITING_GUIDE.md` | Spezialregeln für kurze Mobile-First-Artikel |
| `docs/SEO_CHECKLIST.md` | Technische SEO-Checks (initialLang-Pattern) |
| `CLAUDE.md` (Projekt-Root) | Architektur-Übersicht für Claude Code |

### Skills (Claude Code Slash Commands)
Diese Befehle stehen in Claude Code als Skills zur Verfügung:
| Skill | Aufruf | Funktion |
|---|---|---|
| GEO-Übersetzung | `/geo-translation [URL]` | Übersetzt einen Artikel in alle 4 Nicht-EN-Sprachen |
| Meta-Optimierung | `/geo-meta-optimizer` | Optimiert Title + Meta Description mit GSC-Daten |
| Gamma-Präsentation | `/gamma` | Erstellt eingebettete Slide-Decks für Artikel |
| Sicherheits-Review | `/masr` | 9-Agenten-Sicherheitsreview des Codes |

---

## Phase 1: Ideenfindung

### Was funktioniert
Die besten Ideen entstehen aus realen Suchanfragen, nicht aus dem Bauch heraus.

**Primärquellen:**
1. **Google Search Console (GSC)** — Welche Suchanfragen bringen Impressionen, aber wenige Klicks? Diese Seiten haben ein Thema, das Menschen suchen, aber der Inhalt deckt es nicht ausreichend ab.
2. **People Also Ask (PAA)** — Googlt man ein Thema, erscheinen unten und zwischendrin Fragen. Jede davon ist ein potenzieller Artikel-Titel.
3. **Google Autocomplete** — Was schlägt Google bei `"local llm"` vor? Jede Vervollständigung ist ein Keyword.
4. **Reddit / Discord** — Welche Fragen wiederholen sich in r/LocalLLaMA oder dem Ollama Discord?

**GSC-Workflow (wichtig — Pflicht vor jeder Meta-Optimierung):**
- GSC öffnen → Performance → Suchanfragen filtern → Seiten mit hohen Impressionen aber niedriger CTR identifizieren
- Diese Daten **immer** mit `/geo-meta-optimizer` teilen, bevor Änderungen vorgeschlagen werden
- Regel aus Feedback-Memory: *Nie direkt Vorschläge machen, ohne zuerst GSC-Daten abgefragt zu haben*

### Was nicht funktioniert
- Artikel zu Themen schreiben, bei denen keine echte Suchnachfrage belegt ist
- Themen wählen, weil sie interessant klingen (ohne Keyword-Volumen)
- Themen zu breit wählen (Aufteilen ist besser)

### Voraussetzungen für Phase 1
- Zugang zu Google Search Console
- Mindestens 3 konkrete Suchanfragen aus GSC oder PAA als Ausgangspunkt

---

## Phase 2: Themen-Klassifikation und Content-Cluster

### Das Cluster-Konzept

PromptQuorum organisiert Inhalte in **thematischen Clustern**. Jeder Cluster hat:
- Eine **Hub-Seite** (Übersichtsseite)
- Mehrere **Artikel-Seiten** (Long-form, 1.500–5.000 Wörter)
- Optional: **Prompt Bites** (kurze Mobile-First-Artikel, 600–900 Wörter)

**Aktuelle Cluster:**
| Cluster | Verzeichnis | Hub-URL |
|---|---|---|
| `local-llms` | `src/lib/local-llms/articles/` | `/local-llms` |
| `prompt-engineering` | `src/lib/prompt-engineering/articles/` | `/prompt-engineering` |
| `power-local-llm` | `src/lib/power-local-llm/articles/` | `/power-local-llm` |
| `prompt-bites` | `src/lib/prompt-bites/` | `/prompt-bites` |
| `blog` | `src/lib/blog/blogContent.ts` | `/blog` |

**Entscheidungsregel:** Welchem Cluster gehört das Thema an?
- Lokales LLM-Deployment (Hardware, Setup, Tools) → `local-llms` oder `power-local-llm`
- Schreibtechnik, Prompting-Methoden, Frameworks → `prompt-engineering`
- Kurze Antworten auf einzelne Fragen (mobile) → `prompt-bites`
- Ankündigungen, News, Meinungen → `blog`

### Freshness Tier (Pflicht vor jedem Artikel)

**Das ist Schritt Null — kein Artikel wird geschrieben, ohne vorher diesen Test zu machen.**

Drei Fragen beantworten:

1. **Was ist der Kernzweck dieser Seite in einem Satz?** — Klärt den Scope.
2. **Welcher Tier passt?**

| Tier | Beschreibung | Pflichtfelder |
|---|---|---|
| `evergreen` | Zeitloser Begriff, keine Jahres-/Modell-/Hardware-Referenzen | `freshness_tier: 'evergreen'` |
| `semi_annual` | Spezifische Modelle, Hardware, Preise, "Best-of" mit Jahr im Titel | `freshness_tier: 'semi_annual'` + `next_refresh_due` (6 Monate) |
| `annual` | Jahres-Event, Ranking mit Jahr im Slug | `freshness_tier: 'annual'` + `specific_year: 2026` |

3. **Wenn zwei Tiers zutreffen → in zwei Seiten aufteilen.**

**Was nicht funktioniert:** Den Tier weglassen oder nach dem Schreiben setzen. Der Build schlägt fehl, wenn `freshness_tier` fehlt (seit 21. April 2026 erzwungen durch `scripts/validate-freshness-tier.mjs`).

**Besonderheit `evergreen`:** Ein Pre-Commit-Hook (`scripts/validate-evergreen-articles.mjs`) blockiert Commits, die in `evergreen`-Artikeln konkrete Modellnamen (GPT-4o, Llama, Claude etc.), Versionsnummern oder Jahresangaben enthalten.

---

## Phase 3: Zielgruppe und Keyword-Definition

### Schritt 0: Zielgruppenentscheidung (vor dem ersten Satz)

Aus `docs/GEO_WRITING_GUIDELINES.md`, Step 0:

| Level | Wer sucht | Conversion | Wofür nutzen |
|---|---|---|---|
| **Beginner** | Kein KI-Vorwissen | Niedrig | Glossar-Einträge, Definitionen |
| **Intermediate** | Nutzt ChatGPT/Claude aktiv | **Hoch** | **Standard für die meisten Artikel** |
| **Advanced** | Nutzt LLM-APIs, baut Workflows | **Höchste** | Produktions-Workflows, Vergleiche |
| **Technical** | Forscher, ML-Engineers | Niedrig | Nur wenn Inhalt es wirklich erfordert |

**Standardregel:** Bei Unsicherheit → `Intermediate` wählen.

Diese Felder werden im TypeScript-Artikelobjekt gesetzt:
```ts
educationalLevel: 'Intermediate',
audience: 'Developers building with LLMs, prompt engineers',
```

### Keyword-Deklaration (Rule 32)

Vor dem Schreiben werden **3–5 Ziel-Keywords** festgelegt:
```ts
targetKeywords: [
  'local llm vram requirements',      // Primär (SERP-Ziel)
  'how much vram do i need',          // Long-tail
  'llama vram calculator',            // Synonym
  'gpu memory for local ai',          // Variation
]
```

**Warum wichtig:** Keywords bestimmen die H2-Struktur, Entity-Auswahl und interne Verlinkung. Ohne sie verzettelt sich der Artikel.

---

## Phase 4: Outline und Struktur bauen

### Die GEO-Pflicht-Struktur (Rule 8c)

Jeder Artikel muss oben folgende Elemente in dieser Reihenfolge haben:

1. **H1-Titel** (Frage-Format oder direkte Antwortphrase)
2. **Lead Answer Block** (fetter Block, 25–50 Wörter, beantwortet die Hauptfrage sofort)
3. **CTR-First Opening Block** (30-Wort-"Tension hook" zwischen Lead und Takeaways)
4. **Key Takeaways** (3–5 Punkte)
5. **Quick Facts Block** (wenn 4+ Zahlenwerte vorhanden)
6. **Table of Contents** (ab 4+ H2-Abschnitten)

### H2-Abschnittsstruktur (Rule 22a)

Jeder H2-Abschnitt folgt diesem Schema:
1. **Direkte Antwort** (erste 1–3 Sätze, fett)
2. **Best Choice Block** (Entscheidungs-Statement: "Use X if...", "Avoid if...")
3. **Supporting Details** (Tabellen, Listen, Kontext)
4. **Beispiel oder Vergleich**

### Verbotene Muster
- H2-Überschriften als Labels ("Overview", "Key Benefits") → immer als vollständige Aussage oder Frage
- Mehr als 120 Wörter Fließtext ohne visuellen Anker (fett, Liste, Tabelle)
- Entscheidungs-Statement fehlt in einem 300-Wörter-Block (Rule 37)

---

## Phase 5: Artikel schreiben

### Wer schreibt den Artikel?

Der Artikel entsteht **kollaborativ zwischen dem Nutzer (Hans Kuepper) und Claude Code**. Das Modell übernimmt:
- Erstentwurf nach Outline
- GEO-Struktur (Lead, Takeaways, FAQ, snippetBlocks)
- TypeScript-Datenstruktur (Artikel-Objekt in `content.ts` oder Einzel-Datei)

Der Nutzer übernimmt:
- Idee und Keyword-Entscheidung
- Fakten-Review (Benchmarks, Hardwaredaten)
- Freigabe und Commit

### Artikel-Datei anlegen (am Beispiel `local-llms`)

```
1. Neue Datei:    src/lib/local-llms/articles/{slug}.ts
2. Slug eintragen: src/lib/local-llms/slugs.ts  (LLM_SLUG_TO_KEY)
3. Barrel update:  src/lib/local-llms/articles-barrel.ts  (Import + Objekt-Eintrag)
```

Das Sitemap-System und die OG-Image-Generierung greifen automatisch. Kein manuelles Eingreifen nötig.

### Das Artikel-Objekt (TypeScript-Schema)

```ts
export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    theme: 'vram-guide',
    title: 'How Much VRAM Do You Need for Local LLMs in 2026?',
    educationalLevel: 'Intermediate',
    audience: 'Developers running local LLMs',
    targetKeywords: ['local llm vram', 'how much vram llama'],
    intro: '...',
    metaDescription: '...',  // 150–160 Zeichen
    sections: {
      tldr: {
        isTldr: true,
        title: 'Key Takeaways',
        items: ['...', '...'],
      },
      definition: {
        title: 'What Is VRAM and Why Does It Matter?',
        content: ['...'],
        snippetBlocks: {
          'one-sentence': 'VRAM is...',
          'plain-terms': 'Think of VRAM as...',
        },
      },
      faqs: [
        { q: 'How much VRAM for Llama 3 8B?', a: '6 GB at Q4_K_M quantization.' },
        // ...
      ],
    },
  },
  // de, fr, ja, zh folgen in Phase 6
}
```

### GEO-Compliance-Checkliste (10 Punkte, vor Übersetzung prüfen)

Aus dem Pre-Flight-Memory:
- [ ] **Quick Answer** (Lead Answer Block direkt nach H1) vorhanden
- [ ] **Key Takeaways** (3–5 Punkte in TLDR-Section) vorhanden
- [ ] **Quick Facts** (wenn 4+ Zahlenwerte vorhanden) vorhanden
- [ ] **snippetBlocks** (`one-sentence` + `plain-terms`) in mindestens einem Abschnitt
- [ ] **FAQ** mit mindestens 6–8 Fragen (Rule 19)
- [ ] **Sources** mit mindestens 4 belegbaren Quellen (Rule 10)
- [ ] **Related Reading** mit mindestens 5 internen Links (Rule 6a)
- [ ] **Common Mistakes** (3–5 Fehler mit Fixes) — Rule 25
- [ ] **Mindestens 3 interne Links** in Fließtextabschnitten
- [ ] **Alle 5 Sprachen** geplant (kein EN-only-Commit!)

**Was nicht funktioniert:** EN-only-Entwürfe committen "zum Testen". Google indiziert sofort — kaputte Übersetzungen (leere DE/FR/JA/ZH-Blöcke) schädigen die Autorität der gesamten Seite.

---

## Phase 6: Übersetzung

### Reihenfolge (fest vorgegeben, aus `docs/TRANSLATION_SPEC.md`)

1. **Deutsch (DE)** — Zuerst. Höchste Lokalisierungskomplexität: DSGVO, BSI, +2 Extra-FAQs, DACH-Kontext
2. **Französisch (FR)** — Zweiter. Mittlere Komplexität: CNIL-Kontext, 10–15% kürzer als EN
3. **Japanisch (JA)** — Dritter. METI-Governance, telegraphischer Stil, +2 Extra-FAQs
4. **Chinesisch (ZH)** — Vierter. Datensicherheitsgesetz 2021, CAC, komplett neugeschriebener Regionalkontext

### Workflow (Pflicht: `/geo-translation` Skill verwenden)

```bash
# Niemals manuell übersetzen — immer den Skill nutzen:
/geo-translation https://www.promptquorum.com/local-llms/{slug}?lang=de
# → Review → Commit
/geo-translation https://www.promptquorum.com/local-llms/{slug}?lang=fr
# → Review → Commit
/geo-translation https://www.promptquorum.com/local-llms/{slug}?lang=ja
# → Review → Commit
/geo-translation https://www.promptquorum.com/local-llms/{slug}?lang=zh
# → Review → Commit
# Danach: git push origin main
```

**Was nicht funktioniert:** Übersetzungen manuell "erfinden". Dies führt zu:
- Inkonsistenten Regeln (Framework-Akronyme nicht korrekt behandelt)
- Fehlenden DSGVO/CNIL/METI-Referenzen
- Falschen Tabellen-Schlüsseln (Column-Headers müssen exakt als Row-Keys stehen)

### Nie übersetzen: Technische Identifiers
Aus dem Feedback-Memory (`geo_translation_skill_update.md`):
- `theme`, `slug`, `type`, `id` — Code-seitige Felder, **niemals übersetzen**
- Produktnamen: `GPT-4o`, `Claude`, `Ollama`, `Qwen` etc.
- Framework-Namen: `RISEN`, `CO-STAR`, `CRAFT` etc.
- Technische Akronyme: `VRAM`, `API`, `JSON`, `RAG` etc.

### Sprachspezifische Abweichungen (verpflichtend)

Jede Übersetzung muss **4 echte Abweichungen** vom EN-Original haben — keine wörtliche Übersetzung:

| Sprache | Pflicht-Abweichungen |
|---|---|
| **DE** | +2 FAQs (DSGVO + Mittelstand), formaler Ton (Sie-Form), DACH-Beispiel, "Zusammenfassung"-Box |
| **FR** | –10–15% kürzer, eleganterer Ton (Vous-Form), frankofones Beispiel, extra Bullet-Liste |
| **JA** | +3–5 H2/H3-Subheadings, "実践Tips"-Sektion, METI-Kontext, Japan-spezifische Beispiele |
| **ZH** | Benefit-first Ton, extra Bullet-Listen, China-Unternehmensbeispiele (Alibaba, Tencent), "实用建议"-Sektion |

### Pflicht: Regionalkontext-Sektion

Vor dem FAQ-Abschnitt muss eine marktspezifische Sektion stehen:

| Sprache | Sektion | Pflicht-Inhalte |
|---|---|---|
| DE | "Im DACH-Kontext" | DSGVO Art. 28, BSI-Grundschutz, Deutschland/Österreich/Schweiz |
| FR | "Pour les utilisateurs francophones" | CNIL, RGPD (1 Satz), Datensouveränität |
| JA | "日本ユーザーのための活用ポイント" | METI AI Governance 2024, Ostasien-Datensouveränität |
| ZH | "中国企业的应用方案" | Datensicherheitsgesetz 2021, CAC, PIPL, lokale Tech-Unternehmen |

---

## Phase 7: Technische Validierung

### Build-Prüfung

```bash
npm run build
```

Dieser Befehl führt automatisch aus:
1. **`validate-translations`** (Prebuild) — Prüft Theme/Slug/Type-Konsistenz in allen Sprachen
2. **`node build-with-fix.js`** — Next.js-Build mit Validator-Patch
3. **`test-cluster-noindex`** (Postbuild) — Prüft, dass unveröffentlichte Artikel `noindex` haben

**Build schlägt fehl wenn:**
- `freshness_tier` fehlt (seit 21.04.2026)
- `evergreen`-Artikel enthält Modell-Namen oder Jahreszahlen
- `semi_annual`-Artikel hat kein `next_refresh_due`
- Tabellen-Row-Keys stimmen nicht mit Column-Headers überein
- TypeScript-Fehler (strict mode)

### SEO-Validierung

```bash
npm run validate-seo
```

Prüft:
- `<html lang>` ist dynamisch (nicht hardcodiert)
- Alle mehrsprachigen Komponenten akzeptieren `initialLang`
- Server-Seiten geben `initialLang` an Client-Komponenten weiter
- hreflang-Alternates enthalten `x-default`
- Interne Links haben `?lang=XX`-Parameter

### Kritisches Architektur-Muster: `initialLang`

**Das häufigste Fehlermuster** — aus `docs/SEO_CHECKLIST.md`:

```ts
// ❌ FALSCH — Crawler sehen auf allen ?lang=XX-URLs englischen HTML
<PromptEngineeringPostClient slug={slug} />

// ✅ RICHTIG — Korrekte Sprache ab dem ersten Byte
<PromptEngineeringPostClient slug={slug} initialLang={selectedLang} />
```

Ohne `initialLang` rendert `useLang()` beim Server-Rendering `'en'` — alle Übersetzer-URLs zeigen Google englischen Content.

### Weitere Validierungs-Scripts

```bash
npm run validate-translations     # Power-local-llm Theme/Slug/Type-Konsistenz
npm run generate:seo-registry     # SEO-Registry neu generieren (nach Massenänderungen)
```

Einzelne Scripts direkt:
```bash
node scripts/validate-freshness-tier.mjs    # Freshness-Tier-Check
node scripts/validate-evergreen-articles.mjs # Evergreen-Inhalts-Check
node scripts/check-duplicate-faqpage.mjs     # Doppelte FAQ-Schemas erkennen
```

---

## Phase 8: SEO-Metadaten-Optimierung

### `/geo-meta-optimizer` Workflow

Dieser Skill optimiert `seoTitle` und `metaDescription` für jede Sprache separat.

**Pflicht: GSC-Daten abfragen, bevor Änderungen vorgeschlagen werden.**

Aus dem Feedback-Memory (`feedback_gsc_step.md`):
> Schritt 4 muss IMMER ausgeführt werden — nie überspringen, auch wenn Änderungen offensichtlich wirken.

Ablauf:
1. **Current State Audit** — Aktuelle Title/Meta lesen
2. **Keyword-Analyse** — Target-Keywords aus dem Artikel-Objekt prüfen
3. **GSC-Daten abfragen:** "Haben Sie GSC-Suchanfragen für diese URL?"
4. **Vorschläge generieren** (mit echten GSC-Keywords, wenn vorhanden)
5. **Änderungen implementieren**

### Sprachspezifische Titel-Strategie

Aus Feedback-Memory (`feedback_title_suffix_strategy.md`):
- **Kurze Titel (≤45 Zeichen):** `| PromptQuorum`-Suffix behalten
- **Lange Content-Guides:** Suffix weglassen — erhöht CTR

Sprachspezifische Titel-Formate (Rule 34):
| Sprache | Stil | Beispiel |
|---|---|---|
| EN | Emotionaler Kontrast | "8GB or 16GB: What Actually Works" |
| DE | Spezifikations-fokussiert | "8GB vs 16GB RAM: Welche Menge für Llama 2026?" |
| FR | Klarheit | "RAM pour LLM locaux: Guide pratique 2026" |
| JA/ZH | Modell-Name-dicht | Modell- und Hardware-Namen prominenter als Text |

### Meta Description Formel (150–160 Zeichen)
```
[Direkte Antwort — 1 Satz]. [Ein unterstützender Fakt]. [Optional: Kontext].
```

---

## Phase 9: Publishing und Monitoring

### Deployment

Jeder Push zu `main` → automatisches Vercel-Deployment. Kein manueller Schritt nötig.

```bash
git add src/lib/{cluster}/articles/{slug}.ts
git add src/lib/{cluster}/slugs.ts
git add src/lib/{cluster}/articles-barrel.ts
git commit -m "feat: Add {sprache} article for {slug}"
git push origin main
```

### IndexNow (Bing + Yandex sofort benachrichtigen)

```bash
# Einzelseite:
node scripts/indexnow-submit.ts https://www.promptquorum.com/{cluster}/{slug}

# Alle Seiten:
node scripts/submit-all-pages-indexnow.js
```

### Google Search Console: Manuelle URL-Prüfung

1. GSC öffnen → URL-Prüfung
2. Neue URL eingeben → "Indexierung beantragen"
3. Für neue Cluster-Artikel die Sitemap einreichen: `https://www.promptquorum.com/sitemap.xml`

### Sitemap

Die Sitemap generiert sich automatisch aus den Slug-Maps jedes Clusters. Keine manuelle Pflege nötig — außer für statische Seiten, die nicht zu einem Cluster gehören.

Ausnahmen (aus `src/app/sitemap.ts`):
- `NOINDEX_PAGES` — Seiten, die aus Sitemap ausgeschlossen werden
- `EXCLUDED_PATH_PREFIXES` — Pfad-Präfixe, die nicht indiziert werden sollen

### Power-local-llm Publish Gate

Für den `power-local-llm`-Cluster gibt es eine extra Freigabesteuerung:

```ts
// src/lib/power-local-llm/published.ts
export const POWER_LLM_PUBLISHED_SLUGS = [
  'best-local-llm-apps-iphone-2026',
  // Neuer Slug MUSS hier eingetragen werden, um indexiert zu werden
]
```

Neue `power-local-llm`-Artikel sind ohne Eintrag in `POWER_LLM_PUBLISHED_SLUGS` automatisch `noindex`.

### Monitoring nach Veröffentlichung

| Tag | Aktion |
|---|---|
| Tag 1 | GSC: Sitemap-Einreichung bestätigen, alle URLs in Sitemap sehen |
| Tag 3 | GSC: Coverage-Report auf Indexierungs-Fehler prüfen |
| Tag 7 | GSC: Erste Impressionen/Klick-Daten |
| Tag 14 | GSC: Erste belastbare CTR-Daten (Desktop vs. Mobile vergleichen) |
| 6 Monate (semi_annual) | `next_refresh_due` prüfen → Artikel aktualisieren |

---

## Prompt Bites — Besonderheiten (Kurzartikel-Workflow)

Prompt Bites sind **Mobile-First-Artikel mit 600–900 Wörtern**, die genau eine Frage beantworten.

### Wann ein Prompt Bite statt eines langen Artikels?

| Signal | Artikel-Typ |
|---|---|
| Frage hat eine eindeutige, kurze Antwort | **Prompt Bite** |
| Thema erfordert 3+ H2-Abschnitte zur Erklärung | **Long-form Artikel** |
| Query hat hohen mobilen CTR (>3%) | **Prompt Bite** |
| Thema ist Teil eines größeren Konzepts | **Long-form, Bite als Satellit** |

### Pflicht-Struktur (abweichend vom langen Artikel)

```
1. H1 (Frage, endet mit ?)
2. quickAnswerTop-Block (alle 5 Sprachen, Pflicht)
3. Direkte Antwort-Paragraph (40–60 Wörter, fett, Frischhalte-Marker "As of May 2026")
4. Max. 3 H2-Abschnitte (keine H3!)
5. FAQ-Section (3–5 Fragen) — immer letzte H2
```

### quickAnswerTop-Block — Das wichtigste Element für KI-Zitierung

```ts
quickAnswerTop: {
  en: {
    question: 'How much VRAM for Llama 3 8B?',   // ≤12 Wörter
    answer: 'Llama 3 8B at Q4_K_M needs 6 GB...',  // 25–60 Wörter
    bullets: [
      'Q4_K_M: beste Qualität pro GB',
      'RTX 3060 12 GB oder 16 GB Unified Memory',
    ],
    updatedDate: '2026-05',
  },
  de: { ... },   // Alle 5 Sprachen Pflicht vor dem Go-Live
  fr: { ... },
  ja: { ... },
  zh: { ... },
}
```

Perplexity, ChatGPT, Gemini und Claude extrahieren diesen Block bevorzugt.

### Nicht erlaubt in Prompt Bites
- H3-Überschriften
- Mehr als 2 Callout-Boxen
- Mehr als 1 Code-Block im Artikel-Body
- Tabellen mit mehr als 3 Spalten oder 8 Zeilen
- Absätze mit mehr als 3 Sätzen
- Hedging ("es hängt von vielen Faktoren ab...")
- Marketing-Sprache (kein Waitlist-CTA)

### Kanonisierungs-Check vor Veröffentlichung

Aus `docs/PROMPT_BITES_WRITING_GUIDE.md`, Abschnitt `PB-CANNIBAL`:
- [ ] H1-Frage wird nicht als H2 in einem bestehenden langen Artikel beantwortet
- [ ] Ziel-Query rankt nicht bereits in Position 1–5 (wenn ja: Quick Answer Box zum bestehenden Artikel hinzufügen)
- [ ] Bite verlinkt auf den Eltern-Langartikel
- [ ] Eltern-Artikel verlinkt NICHT inline zurück auf den Bite

---

## Referenz-Index: Alle beteiligten Dateien

### Pflichtlektüre (vor jedem neuen Artikel)
| Datei | Inhalt |
|---|---|
| `docs/GEO_WRITING_GUIDELINES.md` | 40+ GEO-Regeln, Step 0 (Audience), Rule 22/32/37/38 |
| `docs/TRANSLATION_SPEC.md` | Übersetzungsregeln, Sprachformate, Batch-Ansatz |
| `docs/PROMPT_BITES_WRITING_GUIDE.md` | Mobile-First-Regeln, Override-Tabelle vs. GEO-Guide |
| `docs/SEO_CHECKLIST.md` | `initialLang`-Pattern, Pre-Commit-Checks |
| `CLAUDE.md` (Projekt) | Architektur, Tech Stack, Cluster-Übersicht |

### Content-Verzeichnisse
| Pfad | Cluster |
|---|---|
| `src/lib/local-llms/articles/` | Artikel-Dateien (je Slug eine Datei) |
| `src/lib/prompt-engineering/articles/` | Artikel-Dateien |
| `src/lib/power-local-llm/articles/` | Artikel-Dateien |
| `src/lib/blog/blogContent.ts` | Blog (monolithische Datei) |

### Slug-Registries
| Pfad | Zweck |
|---|---|
| `src/lib/local-llms/slugs.ts` | Slug → Key-Mapping |
| `src/lib/prompt-engineering/slugs.ts` | Slug → Key-Mapping |
| `src/lib/power-local-llm/slugs.ts` | Slug → Key-Mapping |
| `src/lib/power-local-llm/published.ts` | Publish Gate (noindex-Kontrolle) |
| `src/lib/blogSlugs.ts` | Blog Slug → PostId |

### Barrel-Dateien
| Pfad | Zweck |
|---|---|
| `src/lib/local-llms/articles-barrel.ts` | Alle Artikel importieren + exportieren |
| `src/lib/prompt-engineering/articles-barrel.ts` | Alle Artikel importieren + exportieren |
| `src/lib/power-local-llm/articles-barrel.ts` | Alle Artikel importieren + exportieren |

### Validierungs-Scripts
| Script | Wann ausführen |
|---|---|
| `npm run build` | Vor jedem Commit (erzwingt alle Checks) |
| `npm run validate-translations` | Nach Übersetzungen |
| `npm run validate-seo` | Nach neuen mehrsprachigen Seiten |
| `scripts/validate-freshness-tier.mjs` | Automatisch beim Build |
| `scripts/validate-evergreen-articles.mjs` | Automatisch als Pre-Commit-Hook |
| `scripts/check-duplicate-faqpage.mjs` | Bei FAQ-Schema-Problemen |
| `scripts/indexnow-submit.ts` | Nach Deployment neuer Seiten |

### Hilfsdokumente
| Datei | Inhalt |
|---|---|
| `docs/IMAGE_TRANSLATION_GUIDE.md` | SVG-Lokalisierung |
| `docs/GAMMA_SKILL_UPDATES.md` | `/gamma` Slide-Deck-Workflow |
| `docs/AFFILIATE_MANAGER_FINAL.md` | Affiliate-Seiten-Regeln |
| `design-system/IMAGE_STYLE_GUIDE.md` | Bild-Gestaltungsregeln |

---

## Claude Code — Welche Rolle spielt das Tool?

Claude Code ist das **primäre Werkzeug** für diesen gesamten Workflow. Es wird über das Terminal oder die VS Code-Extension bedient.

### Was Claude Code automatisch übernimmt
- Artikel-Entwurf nach GEO-Struktur
- TypeScript-Artikelobjekt nach dem richtigen Schema
- Batch-Übersetzungen (in Batches von 5–10 Sektionen, nicht alles auf einmal)
- Freshness-Tier-Klassifikation
- Schema-Markup (FAQ, HowTo, TechArticle)
- Commit-Messages nach Konvention

### Was Menschen entscheiden
- Thema und Keyword-Auswahl
- Fakten-Review (Zahlen, Benchmarks)
- Freigabe von Änderungen
- GSC-Daten einbringen

### Wichtige Regeln im Umgang mit Claude Code
1. **GEO_WRITING_GUIDELINES.md lesen lassen** vor jedem neuen Artikel
2. **Niemals `/geo-translation` überspringen** für Übersetzungen — manuell erfundene Übersetzungen sind fehleranfällig
3. **Batch-Approach für große Artikel** (30+ Sektionen): Batches à 5–10 Sektionen, nie alles auf einmal
4. **GSC-Daten immer einbringen** vor `/geo-meta-optimizer`
5. **`npm run build`** nach jeder inhaltlichen Änderung — kein "es sollte klappen"
6. **Kein EN-only-Commit** — alle 5 Sprachen oder gar nichts

---

## Häufige Fehler und Lösungen

| Fehler | Ursache | Lösung |
|---|---|---|
| Build schlägt fehl: `freshness_tier` fehlt | Neuer Artikel ohne Tier | `freshness_tier: 'semi_annual'` + `next_refresh_due` ergänzen |
| Build schlägt fehl: Modellname in `evergreen` | Evergreen-Artikel mit Versionsreferenz | Tier auf `semi_annual` ändern oder Modellname entfernen |
| Deutsche Seite zeigt englischen Content | `initialLang` nicht übergeben | `<Client slug={slug} initialLang={selectedLang} />` |
| Übersetzungs-Tabelle kaputt | Row-Keys ≠ Column-Headers | Übersetzten Column-String exakt als Row-Key nutzen |
| Artikel nicht in Sitemap | Slug nicht in Barrel oder Published-List | `articles-barrel.ts` + ggf. `published.ts` ergänzen |
| Build OK, aber Inhalt fehlt | Barrel-Import vergessen | `articles-barrel.ts` prüfen |
| `validate-translations` schlägt fehl | `theme` zwischen Sprachen inkonsistent | `theme`-Wert in allen Sprachen angleichen |

---

## Zusammenfassung: Die 9 Phasen im Überblick

| Phase | Was passiert | Wer | Wichtigstes Dokument |
|---|---|---|---|
| **1. Idee** | GSC-Daten, PAA, Keyword-Recherche | Nutzer | GSC-Console |
| **2. Klassifikation** | Cluster, Freshness Tier, Audience Level | Nutzer + Claude | `GEO_WRITING_GUIDELINES.md` |
| **3. Keywords** | 3–5 Ziel-Keywords festlegen | Nutzer + Claude | `GEO_WRITING_GUIDELINES.md` Rule 32 |
| **4. Outline** | GEO-Struktur, H2-Gerüst, Schema-Plan | Claude | `GEO_WRITING_GUIDELINES.md` Rule 8c |
| **5. Schreiben** | Artikel-Objekt auf Englisch | Claude | `GEO_WRITING_GUIDELINES.md` |
| **6. Übersetzen** | `/geo-translation` für DE/FR/JA/ZH | Claude (Skill) | `TRANSLATION_SPEC.md` |
| **7. Validierung** | `npm run build`, `validate-seo` | Claude + CI | `SEO_CHECKLIST.md` |
| **8. Meta-Optimierung** | `/geo-meta-optimizer` mit GSC-Daten | Claude (Skill) | Feedback-Memory |
| **9. Publishing** | Push → Vercel → IndexNow → GSC | Nutzer | — |

---

*Zuletzt aktualisiert: Mai 2026*
*Für interne Nutzung und Partner, die diesen Workflow übernehmen.*
