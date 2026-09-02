# Risk check: autonomous-local-agents-actually-work   (2026-09-02, locales: en de fr es pt ar ja zh ko)

Risk gate: **PASS**
  BLOCK  = at least one CRITICAL
  REVIEW = at least one HIGH, no CRITICAL
  PASS   = MEDIUM/LOW only, or nothing

Re-run after fixing the three HIGH findings (B1, B2, B3) from the same-day earlier report
(this file, prior version). All three are now closed.

## Counts
| locale | CRITICAL | HIGH | MEDIUM | LOW |
|---|---|---|---|---|
| en | 0 | 0 | 0 | 0 |
| de | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 |
| ar | 0 | 0 | 0 | 0 |
| ko | 0 | 0 | 0 | 0 |
| ja | 0 | 0 | 0 | 0 |
| zh | 0 | 0 | 0 | 0 |

## Risk-gate checklist
1. No compliance / legal-status guarantees (R1) — **pass** (unchanged from prior review).
2. No absolute superlatives or guarantees without source (R5, R13) — **pass** (unchanged).
3. No negative fact-claims about named third parties without source or hedge (R3, R8) —
   **pass**. B2/B3 closed: ja's `sections.autogpt` (`:1670-1679`) and zh's `sections.autogpt`
   (`:2599-2608`) now carry the same "architecture verdict, not project abandonment" hedge
   used in the other 7 locales, each written natively in that locale's own language and
   grafted into its own existing section shape (not a forced EN-structure translation). ja's
   `quickFacts` item (`:1538`) and `supervisionCost` line (`:1698`) and zh's `supervisionCost`
   line (`:2627`) were also softened for consistency. Both dedicated AutoGPT sections now link
   to `/power-local-llm/autogpt-local-review-2026` (ja: `:1678`; zh: `:2608`) — previously
   zero body-level links in either locale.
4. Every first-person test claim has a methodology anchor (R4) — **pass** (unchanged).
5. Every cited study / statistic has a resolvable source (R6) — **pass**. B1 closed: the
   unsourced "production teams report agents completing roughly 80% of runs" CrewAI claim was
   reworded in all 7 affected locales (en:294, es:776, fr:1271, de:2192, pt:3123, ar:3618,
   ko:4113) to an explicit "we did not measure this ourselves; anecdotal reports online cluster
   around a reliability gap — treat any percentage as directional" framing, matching the
   existing "in our informal testing" hedge pattern already used two sentences later in the
   same section (en:295). Each locale's rewrite was written natively in that language, not
   translated from the EN fix.
6. Legal / medical / financial / safety topics carry a disclaimer in every locale (R2, R14) —
   **pass** (unchanged).
7. Commercial links disclosed and disclosure copy accurate (R7) — **pass** (unchanged; no
   affiliate links in this file).
8. No ToS/law-circumvention or unsafe hardware instructions without warning (R9) — **pass**
   (unchanged).
9. Third-party IP and model licences stated correctly (R10, R11) — **pass** (unchanged).
10. No locale is stronger, more absolute, or less disclaimed than EN (R20) — **pass**. ja and
    zh's dedicated AutoGPT sections and outlook predictions no longer carry a harsher,
    undisclaimed characterization of AutoGPT than the corrected EN text. ja's and zh's
    `outlook` sections (ja:1736, zh:2665) — not flagged as a separate lettered finding in the
    prior report but listed among B2/B3's cited file locations — also had their AutoGPT-specific
    "unlikely to reach mainstream adoption" prediction split out from the OpenInterpreter/MetaGPT
    group and hedged to note it applies only to the classic CLI track, with the Platform product
    noted as active.

**Score: 10/10**

## Findings
None outstanding. B1 (CrewAI unsourced 80% statistic, 7 locales), B2 (ja AutoGPT section
drift), and B3 (zh AutoGPT section + outlook drift) from the prior review are resolved — see
checklist items 3, 5, 10 above for the verified fix locations.

## Disclaimer gaps per locale
| locale | R2 topic present | disclaimer present | surface to add |
|---|---|---|---|
| en/de/fr/es/pt/ar/ko/ja/zh | Regulatory topics (GDPR/METI/China data law) mentioned in passing | Framed as "needs audit trail/human review," adequate | none |

## Unverified citations (not scored)
- The CrewAI/AutoGen version and compatibility claims (en:295: "native tool calling against
  Ollama has been supported since Ollama 0.3.1... OpenAI-compatible endpoint path available on
  AG2 0.28+ and Ollama 0.5.7+") remain specific version-number claims with no linked source.
  Unchanged from the prior review; not rescored (`--verify-citations` not requested).

## Site-level (R19)
Not run — `--site` flag was not passed for this invocation.

## Note on dateModified (carried forward, informational only)
ja and zh's internal JSON-LD `schema.dateModified` (ja:1847, zh:2778) still reads `2026-05-07`
while the article's top-level `dateModified` for these two locales reads `2026-07-14` (ja:1471,
zh:2393) — this split predates this fix pass and is consistent across both locales, so this
edit intentionally left both fields untouched to avoid introducing new inconsistency. Not a
risk-checker finding; flagged only for the freshness/GEO backlog.

---

*Pattern audit, not legal advice. Borderline items go to a Medienrecht / Wettbewerbsrecht lawyer before go-live.*
