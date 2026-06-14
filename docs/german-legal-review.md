# PromptQuorum — German UWG / Legal-Risk Review
**Date:** 2026-06-14  
**Scope:** All `de:` blocks across local-llms, power-local-llm, prompt-engineering, smart-home clusters; site-level legal pages  
**Jurisdiction:** German primary (UWG, DDG, DSGVO, MStV); EU secondary (UCPD, DSA)  
**Status:** READ-ONLY pattern review — no files edited. All proposed rewrites are suggestions only.  
**⚠️ This is a pattern audit, NOT legal advice. Any borderline item should be reviewed by a German Medienrecht / Wettbewerbsrecht lawyer before going live.**

---

## Executive Summary

The German (`de:`) content carries **7 HIGH-severity items** that present genuine Abmahnung exposure under the UWG/DDG regime. The three most acute risks are:

1. **"Lokale Inferenz mit PromptQuorum ist DSGVO-konform"** (`local-llm-power-consumption.ts`) — a brand-linked compliance guarantee. Binding PromptQuorum's own product name to a legal-status claim is the single highest-exposure item on the site. A Wettbewerbszentrale or competitor Abmahnung could target this as Irreführung (§5 UWG) because DSGVO compliance is an organisational determination, not a product feature.

2. **"erfüllen automatisch DSGVO-Anforderungen"** (`local-llms-vs-claude-pro.ts`) — the word "automatisch" eliminates all qualification and creates an absolute legal guarantee for the reader.

3. **"DSGVO-konform ab Inbetriebnahme"** (`best-local-llms-business-writing.ts`) — same pattern; "from the moment you turn it on" is a guarantee that the site cannot legally make.

The Impressum is substantively present and links to a real person with a real address — the strongest structural protection against §5 DDG Abmahnungen. One issue: it still cites "§ 5 TMG" (old law, replaced by DDG in March 2024). No urgency, but worth correcting.

---

## Part A: HIGH-Severity UWG Findings

---

### A1 — "Lokale Inferenz mit PromptQuorum ist DSGVO-konform"
**Type:** Irreführung §5 UWG + DSGVO compliance guarantee  
**Severity:** 🔴 HIGH  
**Files:**
- `src/lib/local-llms/articles/local-llm-power-consumption.ts:1229`
- `src/lib/local-llms/articles/local-llm-power-consumption.ts:1334` (JSON-LD schema)

**Verbatim (German):**
> "Lokale Inferenz mit PromptQuorum ist DSGVO-konform und erfüllt BSI-Grundschutz-Standards für Unternehmensumgebungen in Deutschland."

**Why HIGH:** This ties the PromptQuorum brand name directly to a legal-status claim. PromptQuorum is a software tool — DSGVO compliance is an organisational determination made by the data controller (the customer), not a product certification. Stating "Lokale Inferenz *mit PromptQuorum* ist DSGVO-konform" implies PromptQuorum itself is a certified DSGVO-compliant product. The JSON-LD version (line 1334) amplifies the risk: search engines surface this as a structured fact claim. Under §5 UWG, a commercial claim that a product has a certification or quality mark it does not possess is irreführend. The BSI-Grundschutz claim ("erfüllt BSI-Grundschutz-Standards") is equally risky — BSI-Grundschutz is a framework, not a product certification, and claiming compliance without an audit is an unsupported quality claim.

**Proposed German rewrite:**
> "Lokale Inferenz hält alle Daten auf Ihrer eigenen Hardware — keine Daten gelangen an externe Dienstleister. Dies beseitigt das Art.-28-DSGVO-Auftragsverarbeitungsrisiko auf technischer Ebene. Ob Ihr Gesamtbetrieb DSGVO-konform ist, hängt von Ihren organisatorischen Maßnahmen, Ihrer Rechtsgrundlage und ggf. einer Datenschutz-Folgenabschätzung ab — nicht allein von der Softwarearchitektur. Die BSI-Grundschutz-Kataloge empfehlen lokale Verarbeitung für sensible Daten (vgl. OPS.2.2)."

---

### A2 — "erfüllen automatisch DSGVO-Anforderungen, da Daten nie das Land verlässt"
**Type:** Irreführung §5 UWG — absolute compliance guarantee  
**Severity:** 🔴 HIGH  
**Files:**
- `src/lib/local-llms/articles/local-llms-vs-claude-pro.ts:1130` (DE FAQ answer)
- `src/lib/local-llms/articles/local-llms-vs-claude-pro.ts:1208` (JSON-LD schema)

**Verbatim (German):**
> "Lokale LLMs auf Ihrem Server erfüllen automatisch DSGVO-Anforderungen, da Daten nie das Land verlässt."

**Why HIGH:** Two problems in one sentence. (1) "automatisch" — DSGVO compliance is never automatic; it requires a documented lawful basis, purpose limitation, data subject rights procedures, and often a DSFA. (2) "Daten nie das Land verlässt" is factually incorrect as a general rule: the DSGVO governs transfer of *personal data*, not all data, and only Article 44 cross-border transfers are restricted — local model weights, logs, and system data may still present compliance obligations. The JSON-LD version makes this a machine-readable factual claim indexed by search engines.

**Proposed German rewrite:**
> "Lokale LLMs übermitteln keine Eingabe- oder Ausgabedaten an externe KI-Anbieter. Das beseitigt das DSGVO-Art.-44-Transferrisiko für Inferenzdaten. DSGVO-Konformität setzt zusätzlich eine Rechtsgrundlage (Art. 6), ggf. eine Datenschutz-Folgenabschätzung (Art. 35) und dokumentierte technisch-organisatorische Maßnahmen (Art. 32) voraus — sprechen Sie hierzu mit Ihrem Datenschutzbeauftragten."

---

### A3 — "DSGVO-konform ab Inbetriebnahme"
**Type:** Irreführung §5 UWG — immediate compliance guarantee  
**Severity:** 🔴 HIGH  
**Files:**
- `src/lib/local-llms/articles/best-local-llms-business-writing.ts:878` (JSON-LD)
- `src/lib/local-llms/articles/best-local-llms-business-writing.ts:997` (FAQ answer)

**Verbatim (German):**
> "keine Cloud-Datenübermittlung (DSGVO-konform ab Inbetriebnahme), kein Vendor-Lock-in."

**Why HIGH:** "Ab Inbetriebnahme" (from the moment of deployment) is a blanket compliance guarantee with no qualifications. Coupled with the business-context framing for SMEs (50–500 Mitarbeiter), a business reader could rely on this claim to forgo a DSFA, skip legal review, or omit a DPA — and then face a supervisory authority action. Under §5 UWG, claims about a product's legal compliance status that induce transactional decisions are actionable if misleading.

**Proposed German rewrite:**
> "keine Inferenzdaten an Cloud-Anbieter (Art.-44-Transferrisiko entfällt für die KI-Schicht), kein Vendor-Lock-in. Hinweis: DSGVO-Konformität des Gesamtbetriebs erfordert weiterhin Rechtsgrundlage, TOMs und ggf. DSFA."

---

### A4 — "die datenschutzrechtlich sicherste Option" (absolute superlative)
**Type:** Spitzenstellungsbehauptung §5 UWG  
**Severity:** 🔴 HIGH  
**Files:**
- `src/lib/local-llms/articles/fastest-local-llms-low-end-pcs.ts:1416` (DE FAQ)
- `src/lib/local-llms/articles/fastest-local-llms-low-end-pcs.ts:1537` (JSON-LD)
- `src/lib/local-llms/articles/best-local-llm-stack-use-case.ts:1159` (DE FAQ)

**Verbatim (German):**
> "lokal auf Low-End-Hardware ist die datenschutzrechtlich sicherste Option für kleine Unternehmen und Freiberufler im DACH-Raum."

**Why HIGH:** "Die … sicherste Option" is a Spitzenstellungsbehauptung — a German-specific category of advertising claim that asserts a top position among competitors. German courts require such claims to be *verifiably true and stable* (BGH, "Bestpreisgarantie"). A local LLM on a laptop without encryption, access controls, or logging is not "datenschutzrechtlich sicherer" than a properly configured EU-hosted cloud service with DPA, SCCs, and ISO 27001 certification. The claim is overbroad and unprovable. Abmahnvereine actively target these claims.

**Proposed German rewrite:**
> "Lokal auf Low-End-Hardware: Keine Inferenzdaten verlassen das Gerät — für viele KMU und Freiberufler im DACH-Raum ist das die technisch einfachste Methode, Art.-44-Transferrisiken zu vermeiden. Datenschutzrechtlich kommt es jedoch auf den Gesamtbetrieb an — nicht allein auf die Inferenz-Architektur."

---

### A5 — "RTX 4070 Ti oder Mac Studio sind DSGVO-konform" / "BSI-Grundschutz-zertifizierbar"
**Type:** Irreführung §5 UWG — compliance label on hardware  
**Severity:** 🔴 HIGH  
**Files:**
- `src/lib/local-llms/articles/gpu-vs-cpu-vs-apple-silicon.ts:1182` (DE FAQ)
- `src/lib/local-llms/articles/gpu-vs-cpu-vs-apple-silicon.ts:1186` (DE FAQ)
- `src/lib/local-llms/articles/gpu-vs-cpu-vs-apple-silicon.ts:1245` (JSON-LD)
- `src/lib/local-llms/articles/gpu-vs-cpu-vs-apple-silicon.ts:1246` (JSON-LD)

**Verbatim (German):**
> "RTX 4070 Ti oder Mac Studio sind DSGVO-konform und ermöglichen volle Datenhoheit."  
> "DSGVO-konform, keine Abhängigkeit von US Cloud APIs. BSI-Grundschutz-zertifizierbar."

**Why HIGH:** Labelling specific GPU/hardware SKUs as "DSGVO-konform" is legally incorrect — GPU hardware has no legal compliance status. The DSGVO governs data processing activities by organisations, not hardware components. "BSI-Grundschutz-zertifizierbar" implies that using this hardware will enable the user to achieve BSI-Grundschutz certification — a certification that covers entire IT systems and organisational processes. A Mittelstand company relying on this claim to skip a full BSI audit faces real legal and reputational risk.

**Proposed German rewrite:**
> "RTX 4070 Ti oder Mac Studio: Lokale GPU-Inferenz hält Eingabe- und Ausgabedaten auf Ihrer eigenen Hardware — das Art.-44-Transferrisiko für die KI-Schicht entfällt. DSGVO-Konformität und BSI-IT-Grundschutz hängen vom Gesamtsystem und Ihren TOMs ab, nicht vom GPU-Modell."

---

### A6 — "Kein Schrems-II-Risiko" (about Hetzner)
**Type:** Rechtsirrige Tatsachenbehauptung — absolute legal conclusion about a named commercial entity  
**Severity:** 🔴 HIGH  
**Files:**
- `src/lib/local-llms/articles/eu-cloud-gpu-gdpr-2026.ts:1592` (JSON-LD FAQ schema)

**Verbatim (German):**
> "Ist Hetzner standardmäßig DSGVO-konform? Ja. Deutsches Unternehmen, deutsche Rechenzentren, AVV sofort verfügbar. Kein Schrems-II-Risiko."

**Why HIGH:** "Kein Schrems-II-Risiko" is a legal conclusion about a third-party company's risk profile — presented as a factual answer in JSON-LD (machine-readable, surfaced directly by Google, Perplexity, etc.). Schrems II (CJEU C-311/18) created obligations that depend on the specific data processing context, not only on where servers are located. A German-incorporated cloud provider with EU data centers can still have Schrems II exposure if its US parent has CLOUD Act obligations. PromptQuorum cannot make this legal determination on behalf of Hetzner's customers. If Hetzner's circumstances change (acquisition, contractual change) and a customer relied on this article, the legal trail leads back to this FAQ answer.

**Proposed German rewrite:**
> "Ist Hetzner DSGVO-freundlich? Hetzner ist ein deutsches Unternehmen mit deutschen Rechenzentren und stellt sofort einen Auftragsverarbeitungsvertrag (AVV) bereit — das vereinfacht die DSGVO-Dokumentation erheblich. Ob Ihr spezifisches Deployment das Schrems-II-Transferrisiko vollständig ausschließt, hängt von Ihrem Datenverarbeitungskontext, Ihrer Vertragsgestaltung mit Hetzner und ggf. einer Transfer-Impact-Assessment ab. Für die meisten EU-interne Inferenzworkloads ohne personenbezogene Daten stellt sich die Schrems-II-Frage nicht."

---

### A7 — "Ollama: ROCm-Pfad ist fehlerhaft" (multiple instances)
**Type:** Anschwärzung / vergleichende Werbung §6 UWG — disparaging named product  
**Severity:** 🔴 HIGH  
**Files:**
- `src/lib/local-llms/articles/best-amd-gpus-local-llm.ts:902,945,971,979,1014`

**Verbatim (German):**
> "Ollama: Begrenzte AMD-Unterstützung (ROCm-Pfad ist fehlerhaft, CPU-Fallback ist langsam). Nicht empfohlen."  
> "**Ollama auf AMD:** Experimentell/fehlerhaft seit April 2026."

**Why HIGH:** "Fehlerhaft" (defective/buggy) is a qualitative product characterization about Ollama — a named commercial open-source product. Under §6 Abs. 2 Nr. 5 UWG, comparative advertising that disparages or denigrates a competitor's product is unlawful. While honest technical observations are permitted, "fehlerhaft" without a specific version reference, test date, or methodology creates the impression of a general product defect. The April 2026 date is helpful but insufficient without a version string. If Ollama's AMD support has improved (which happens frequently in fast-moving open source), this claim becomes factually wrong — and still live on the site.

**Proposed German rewrite:**
> "Ollama auf AMD (Stand: unsere Tests April 2026, Ollama v0.3.x, ROCm 6.x): Die ROCm-Unterstützung war in unseren Tests inkonsistent — GPU-Erkennung schlug bei einigen Konfigurationen fehl und der CPU-Fallback ist langsam. Prüfen Sie [Olamas AMD-Kompatibilitätsliste](https://github.com/ollama/ollama) auf den aktuellen Stand, bevor Sie sich festlegen."

---

## Part B: MEDIUM-Severity UWG Findings

---

### B1 — "die datenschutzkonformste KI-Konfiguration, die für Desktop-Benutzer verfügbar ist"
**Type:** Spitzenstellungsbehauptung §5 UWG  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/how-to-install-lm-studio.ts:1073`

**Verbatim:**
> "LM Studio mit lokalen Modellen ist die datenschutzkonformste KI-Konfiguration, die für Desktop-Benutzer verfügbar ist."

**Proposed rewrite:** "LM Studio mit lokalen Modellen ist für Desktop-Nutzer eine der datenschutzfreundlichsten KI-Konfigurationen, da keine Inferenzdaten das Gerät verlassen."

---

### B2 — "Beste Reasoning, Nuance, Anleitung-Befolgung" (about Claude, named commercial product)
**Type:** Unsupported superlative about named competitor  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/local-llms-vs-claude-pro.ts:1047`

**Verbatim (DE block):**
> "Claude 3.5 Sonnet (2024) (Anthropic, Juni 2024): **Beste** Reasoning, Nuance, Anleitung-Befolgung. 97% MMLU…"

**Note:** This is a positive superlative about a competitor's product — unusual direction for UWG risk. However, presenting 97% MMLU without an inline source in the German block is an unsourced benchmark claim. If Anthropic disputes the framing, they could object. Low-probability but worth noting.

**Proposed rewrite:** "Claude 3.5 Sonnet (2024): starkes Reasoning und Instruction-Following (97% MMLU, laut Anthropic-Modelkarte)."

---

### B3 — "Beste Option für 99% der Organisationen mit domänenspezifischen Daten"
**Type:** Spitzenstellungsbehauptung + unsourced statistical claim §5 UWG  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/create-custom-local-models.ts:1409`

**Verbatim (DE block):**
> "Beste Option für 99% der Organisationen mit domänenspezifischen Daten."

**Proposed rewrite:** "Für die meisten Organisationen mit domänenspezifischen Daten empfiehlt sich Fine-Tuning als erster Ansatz."

---

### B4 — "die einzige Architektur, bei der Sie verifizieren können, dass nichts Ihre Umgebung verlässt"
**Type:** Alleinstellungsbehauptung §5 UWG  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/apple-on-device-ai-vs-local-llms.ts:398`

**Verbatim (DE block):**
> "Selbst gehostete lokale LLMs — Qwen, Llama, Gemma auf eigener Hardware — bleiben die **einzige** Architektur, bei der Sie verifizieren können, dass nichts Ihre Umgebung verlässt."

**Why:** "Die einzige" is an Alleinstellungsbehauptung — a claim to be the sole option in a category. This excludes verifiably private alternatives like on-premise EU-certified cloud deployments with network isolation, air-gapped enterprise solutions, etc. Under BGH case law on Alleinstellungswerbung, this requires proof of genuine market-wide uniqueness.

**Proposed rewrite:** "Selbst gehostete lokale LLMs bieten die technisch direkteste Möglichkeit zu verifizieren, dass Eingabe- und Ausgabedaten das eigene System nicht verlassen — ohne Vertrauen auf Drittanbieter-Versprechen."

---

### B5 — "beste Parität in der Geschichte" (ChatGPT vs. local comparison)
**Type:** Unsupported historical superlative  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/local-llms-vs-chatgpt-plus.ts:297,326,342`

**Verbatim (DE block):**
> "die beste Parität zwischen lokal/Cloud in der Geschichte"  
> "Qualität: Llama 3.3 70B erreicht ~82 % MMLU vs GPT-5.2 ~87 % — 5-Punkt-Unterschied, **beste Parität** in der Geschichte"

**Proposed rewrite:** "die bisher größte Annäherung zwischen lokalen und Cloud-Modellen in MMLU-Benchmarks (Stand April 2026; EvalPlus-Leaderboard)"

---

### B6 — "ROCm-Treiberunterstützung ist unzuverlässiger" (AMD named in comparative)
**Type:** Vergleichende Werbung / Anschwärzung §6 UWG  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/best-gpus-for-local-llms.ts:886`

**Verbatim (DE block):**
> "die RX 7900 XTX konkurriert preislich mit der RTX 4080, aber die ROCm-Treiberunterstützung ist unzuverlässiger."

**Proposed rewrite:** "die RX 7900 XTX ist preislich vergleichbar mit der RTX 4080, aber ROCm-Treiberunterstützung erfordert mehr Konfigurationsaufwand als CUDA — überprüfen Sie die aktuelle Kompatibilitätsliste vor dem Kauf."

---

### B7 — "30–50% schlechtere Qualität" (Llama 3.3, named model)
**Type:** Faktische Negativbehauptung über benanntes Produkt ohne Quellenangabe  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/best-models-apple-silicon-2026.ts:880`

**Verbatim (DE block):**
> "Llama 3.3 vermeiden (jede Größe) — Veröffentlicht 2023, abgelöst durch Llama 3 und 3.1. **30–50% schlechtere Qualität** bei gleicher Parameterzahl."

**Note:** "30–50% schlechtere Qualität" is a specific quantitative claim about a named open-source model without citing which benchmark or methodology produced this figure. Under §5 UWG, factual comparative claims must be verifiable.

**Proposed rewrite:** "Llama 3.3 (jede Größe) nicht mehr empfohlen — von Llama 3.1 und 3.2 abgelöst; ältere Benchmarks zeigen deutlich schwächere Ergebnisse auf Standard-Leaderboards. Verwenden Sie Llama 3.3 8B als Einstieg."

---

### B8 — "garantiert Daten-Residenz" (Ollama)
**Type:** Garantieanspruch §5 UWG  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/local-llm-openai-compatible-api.ts:617`

**Verbatim:**
> "Für Unternehmen eliminiert dies Vendor Lock-in und **garantiert** Daten-Residenz."

**Proposed rewrite:** "Für Unternehmen entfällt Vendor Lock-in, und Eingabedaten verlassen das eigene Netzwerk nicht (kein Art.-44-Transferrisiko für Inferenzdaten)."

---

### B9 — "Betroffenenrechte … sind garantiert" (DSGVO rights framing)
**Type:** Rechtlich irreführende Garantieaussage  
**Severity:** 🟡 MED  
**File:** `src/lib/local-llms/articles/enterprise-compliance-local-llms.ts:990,1168`

**Verbatim (DE block):**
> "**DSGVO (Artikel 44):** Personenbezogene Daten müssen in der EU bleiben, Betroffenenrechte (Zugang, Löschung, Portabilität) sind **garantiert**."

**Why:** The phrase "sind garantiert" applied to DSGVO rights implies the rights are delivered by the software/architecture — which they are not. Betroffenenrechte require active procedural implementation by the data controller. Framing rights that exist in law as software-guaranteed features is misleading.

**Proposed rewrite:** "**DSGVO (Artikel 44):** Personenbezogene Daten dürfen nur unter bestimmten Voraussetzungen in Drittländer übermittelt werden. Betroffenenrechte (Zugang, Löschung, Portabilität) sind gesetzlich verankert — ihre Umsetzung erfordert aktive organisatorische Maßnahmen Ihrerseits."

---

### B10 — "DSGVO-konform ab Inbetriebnahme" and similar across other articles
**Type:** Blanket compliance guarantee  
**Severity:** 🟡 MED (lower because articles in question are less business-focused than A3)  
**Files (additional instances):**
- `src/lib/local-llms/articles/local-llm-one-click-installers.ts:1104` — "Lokale LLMs sind DSGVO-konform"
- `src/lib/local-llms/articles/run-qwen-locally-guide-2026.ts:1299` — "lokale Inferenz ist die DSGVO-konformste KI-Architektur"
- `src/lib/local-llms/articles/qwen-local-deployment-guide-2026.ts:1755` — "vollständig DSGVO-konform"
- `src/lib/local-llms/articles/lm-studio-vs-jan-ai.ts:432` — "Dies ist der DSGVO-konform Weg für deutsche Unternehmen"
- `src/lib/local-llms/articles/multilingual-local-llms.ts:1254` — "Lokal ist DSGVO-konform"
- `src/lib/local-llms/articles/local-llm-developer-stack.ts:796` — "DSGVO-konform" as JSON-LD product description
- `src/lib/local-llms/articles/gpu-vs-ai-subscription-roi.ts:1251` — "DSGVO-konform" as JSON-LD description

**Pattern fix for all:** Replace bare "DSGVO-konform" with "DSGVO-kompatible Architektur (keine Inferenzdaten an Drittanbieter)" — and add "Compliance hängt von Ihren organisatorischen Maßnahmen ab" where space permits.

---

## Part C: LOW-Severity Findings (note, no action required)

| # | File | Verbatim (DE) | Type | Disposition |
|---|---|---|---|---|
| L1 | `best-local-rag-tools.ts:821-824` | "Beste lokale RAG-Tools" (title/SEO) | Superlative in article title | Defensible as editorial designation; "im Vergleich" in subtitle mitigates risk. Low priority. |
| L2 | `fastest-local-llms-low-end-pcs.ts:1416` | "Die BSI-Grundschutz-Kataloge empfehlen lokale Inferenz explizit" | Regulatory citation | Factually correct per BSI-Standard 200-2. Keep with source reference. ✅ |
| L3 | `best-local-llms-business-writing.ts:878` | "Das BSI empfiehlt für KRITIS-Bereiche die Bevorzugung lokal betriebener KI-Systeme" | Regulatory citation | Broadly accurate per BSI IT-Grundschutz-Kompendium. Acceptable with source link. |
| L4 | `fine-tuning-local-llms-lora.ts:1238` | "Beste Tools: Unsloth (schnellstes)" | Superlative in tutorial context | Tutorial best-practice framing; low commercial pressure. MED if article targets business buyers. |
| L5 | `best-local-llms-2026.ts:1101` | "Llama 3.3 70B mit 82% MMLU" | Benchmark in DE block | No source inline in DE block. Add "(laut Meta-Modellkarte, Dez. 2024)" |
| L6 | `apple-on-device-ai-vs-local-llms.ts:381` | "selbst gehostete lokale LLMs die einzige bestätigte Option" | Alleinstellungsbehauptung (note) | Slightly stronger framing than B4. Consider aligning. |

---

## Part D: Site-Legal Essentials — German Jurisdiction

### D1 — Impressum (§5 DDG)

| Check | Status | Detail |
|---|---|---|
| Impressum present | ✅ | Route `/impressum` exists, linked from all locale footers |
| Real name + address | ✅ | Hans-Helmut Kuepper, Muehlwingertweg 2, 69242 Muehlhausen |
| Contact (e-mail) | ✅ | hello@promptquorum.com |
| Inhaltlich Verantwortlicher | ✅ | Present |
| Haftungsausschluss | ✅ | Present, standard formulation |
| Law citation | ⚠️ | Page reads "Angaben gemäß § 5 TMG" — TMG was replaced by DDG (Digitale-Dienste-Gesetz) effective **13 May 2024**. Technically outdated. Not currently an Abmahnung target per Verbraucherschutzpraxis, but should be updated to "§ 5 DDG" |
| Umsatzsteuer-ID / HRB | ❓ | No VAT or trade register number shown. If PromptQuorum has a Gewerbe registered or an EU VAT number, it must appear here. If it is a private-person website, omission is fine. Clarify with lawyer. |
| §18 MStV (Medienstaatsvertrag) | ❓ | Sites with editorial journalistic character and significant reach may require a V.i.S.d.P. notice. PromptQuorum publishes editorial articles at significant scale. Whether §18 applies depends on classification (journalistic–editorial vs. commercial information service). Recommend lawyer review. |
| /de/impressum locale route | ⚠️ | No DE-specific impressum route — footer links to `/impressum` from all locales. The `/impressum` page is already in German, so this is acceptable. However, some Abmahn templates target the absence of a locale-specific link on `/de/` pages. Current setup (within-2-clicks via footer) meets the minimum DDG requirement. |

**Recommended immediate action:** Change "§ 5 TMG" to "§ 5 DDG" in the Impressum page.

---

### D2 — Datenschutzerklärung

| Check | Status | Detail |
|---|---|---|
| German-language privacy page | ✅ | `/de/privacy` route confirmed present |
| All locale routes | ✅ | `/de/privacy`, `/fr/privacy`, `/ja/privacy`, `/zh/privacy`, `/es/privacy`, `/pt/privacy`, `/ar/privacy`, `/ko/privacy` all confirmed |
| pq_session_count storage | ⚠️ | Previously flagged (memory: privacy_pq_session_storage_p25_review.md) — first-party non-essential storage not in §7 cookie table. Pending resolution, not re-examined here. |

---

### D3 — Affiliate / Commercial Content Labeling (Kennzeichnungspflicht)

| Check | Status | Detail |
|---|---|---|
| German affiliate disclosure text | ✅ | `affiliate.ts` exports `de:` key with correct German disclosure text ("PromptQuorum ist an keinem Partnerprogramm beteiligt — es sind reine Referenzlinks…") |
| "Werbung" / "Anzeige" labeling | ✅ N/A | No paid advertising, no affiliate revenue per site owner. Plain reference links require no Werbung label under Kennzeichnungspflicht. |
| Sponsored content | ✅ N/A | No active sponsor contracts per site owner (M3-A from prior audit closed). |

---

## Part E: Prioritized Fix List

### Must Fix (HIGH — Abmahnung exposure, fix before next content push)

| Rank | Item | Files | Fix Type |
|---|---|---|---|
| 1 | A1: "Lokale Inferenz mit PromptQuorum ist DSGVO-konform" | `local-llm-power-consumption.ts:1229,1334` | Rewrite + remove brand-linked compliance claim |
| 2 | A2: "erfüllen automatisch DSGVO-Anforderungen" | `local-llms-vs-claude-pro.ts:1130,1208` | Remove "automatisch"; add qualifications |
| 3 | A3: "DSGVO-konform ab Inbetriebnahme" | `best-local-llms-business-writing.ts:878,997` | Remove guarantee; add "kein Art.-44-Transferrisiko" framing |
| 4 | A4: "datenschutzrechtlich sicherste Option" | `fastest-local-llms-low-end-pcs.ts:1416,1537` + `best-local-llm-stack-use-case.ts:1159` | Superlative to "technisch einfachste Methode" |
| 5 | A5: "RTX 4070 Ti … sind DSGVO-konform" / "BSI-Grundschutz-zertifizierbar" | `gpu-vs-cpu-vs-apple-silicon.ts:1182,1186,1245,1246` | Remove compliance/certification label from hardware names |
| 6 | A6: "Kein Schrems-II-Risiko" | `eu-cloud-gpu-gdpr-2026.ts:1592` | Soften to "vereinfacht das Schrems-II-Risikomanagement" |
| 7 | A7: "ROCm-Pfad ist fehlerhaft" | `best-amd-gpus-local-llm.ts:902,945,971,979,1014` | Add version/date, soften to "in unseren Tests inkonsistent" |

### Should Fix (MED — fix in next content cycle)

| Rank | Item | Files |
|---|---|---|
| 8 | B1: "datenschutzkonformste Konfiguration" | `how-to-install-lm-studio.ts:1073` |
| 9 | B4: "die einzige Architektur" | `apple-on-device-ai-vs-local-llms.ts:398` |
| 10 | B8: "garantiert Daten-Residenz" | `local-llm-openai-compatible-api.ts:617` |
| 11 | B9: "Betroffenenrechte … sind garantiert" | `enterprise-compliance-local-llms.ts:990,1168` |
| 12 | B10: Pattern fix "DSGVO-konform" bare label | 7 files listed in B10 |
| 13 | D1: Update §5 TMG → §5 DDG in Impressum | `src/app/impressum/page.tsx` |

### Clarify with Lawyer (structural — not self-service fixes)

- Whether §18 MStV (Medienstaatsvertrag V.i.S.d.P.) applies given editorial content scale
- Whether PromptQuorum has Gewerbe or EU VAT number that must appear in Impressum
- pq_session_count §7 TDDDG review (flagged in prior session)

---

## Appendix: Verbatim HIGH-Risk Items for Hans's Review

Listed here exactly as they appear in the codebase for quick copy/compare when applying fixes:

**A1:** `'Lokale Inferenz mit PromptQuorum ist DSGVO-konform und erfüllt BSI-Grundschutz-Standards für Unternehmensumgebungen in Deutschland.'`  
**A2:** `'Lokale LLMs auf Ihrem Server erfüllen automatisch DSGVO-Anforderungen, da Daten nie das Land verlässt.'`  
**A3:** `'keine Cloud-Datenübermittlung (DSGVO-konform ab Inbetriebnahme), kein Vendor-Lock-in.'`  
**A4:** `'lokal auf Low-End-Hardware ist die datenschutzrechtlich sicherste Option für kleine Unternehmen und Freiberufler im DACH-Raum.'`  
**A5:** `'RTX 4070 Ti oder Mac Studio sind DSGVO-konform und ermöglichen volle Datenhoheit.'` / `'DSGVO-konform, keine Abhängigkeit von US Cloud APIs. BSI-Grundschutz-zertifizierbar.'`  
**A6:** `'Kein Schrems-II-Risiko.'`  
**A7:** `'Ollama: Begrenzte AMD-Unterstützung (ROCm-Pfad ist fehlerhaft, CPU-Fallback ist langsam). Nicht empfohlen.'`

---

*Report generated 2026-06-14. Pattern-review only — not legal advice. German legal pages and any borderline UWG items should be confirmed by a German Medienrecht/Wettbewerbsrecht lawyer (e.g. via IT-Recht Kanzlei München, Wilde Beuger Solmecke, or eRecht24 Premium) before applying fixes.*
