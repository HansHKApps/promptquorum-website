# Risk check: autogpt-local-review-2026   (2026-09-02, locales: en de fr es pt ar ja zh ko)

Risk gate: **PASS**
  BLOCK  = at least one CRITICAL
  REVIEW = at least one HIGH, no CRITICAL
  PASS   = MEDIUM/LOW only, or nothing

## Counts
| locale | CRITICAL | HIGH | MEDIUM | LOW |
|---|---|---|---|---|
| en | 0 | 0 | 0 | 1 |
| de | 0 | 0 | 0 | 1 |
| fr | 0 | 0 | 0 | 1 |
| es | 0 | 0 | 0 | 1 |
| pt | 0 | 0 | 0 | 1 |
| ar | 0 | 0 | 0 | 1 |
| ja | 0 | 0 | 0 | 1 |
| zh | 0 | 0 | 0 | 1 |
| ko | 0 | 0 | 0 | 1 |

## Risk-gate checklist
1. No compliance / legal-status guarantees (R1) — **pass**. No GDPR/DSGVO/certification language anywhere in the file.
2. No absolute superlatives or guarantees without source (R5, R13) — **pass**. No "the only", "100%", "guaranteed", "cannot leak" style claims found.
3. No negative fact-claims about named third parties without source or hedge (R3, R8) — **pass**. This is the article's central topic (correcting a prior "abandoned" claim about AutoGPT) and every negative-adjacent statement is explicitly hedged and dated. Example (en, `sections.maintenance.callouts`, line 123): *"We did not run our own test suite against classic AutoGPT for this review — the verdict below is based on documented commit history and issue activity on the classic/ subfolder specifically, not on measured benchmark numbers we generated ourselves."* This exact disclaimer (or its faithful translation) is present in **all 9 locales** (de:377, fr:631, es:885, pt:1139, ar:1393, ja:1647, zh:1901, ko:2155 — verified by grep).
4. Every first-person test claim has a methodology anchor (R4) — **pass**. The article deliberately avoids "we tested" language; the only first-person framing is the explicit non-test disclaimer above (item 3). Grep for "we tested"/"our benchmarks"/"wir haben getestet"/"我们测试"/"テストしました" etc. against this file returns no hits outside that disclaimer sentence and its translations.
5. Every cited study / statistic has a resolvable source (R6) — **pass with one LOW note**. The repeated stats ("187,081 stars, 531 open issues, not archived, pushed 2026-09-02") are GitHub facts, not academic citations, and the `sources` section links directly to `github.com/Significant-Gravitas/AutoGPT` where they can be verified. See LOW finding D1 below for the staleness risk.
6. Legal / medical / financial / safety topics carry a disclaimer in every locale (R2, R14) — **N/A**. Article is a software licensing/maintenance review, not a regulated-advice topic. The one law-adjacent claim (license characterization) is treated under R11 below.
7. Commercial links disclosed and disclosure copy accurate (R7) — **pass**. Explicit statement in every locale: *"No affiliate program exists for AutoGPT on this site or anywhere; every link below is a plain, disclosed link."* No `affiliateLinks`, `affiliateDisclosure`, or tagged outbound URLs found (grep confirmed).
8. No ToS/law-circumvention or unsafe hardware instructions without warning (R9) — **pass**. Setup guide only covers editing a `.env` file and installing Python dependencies; no jailbreak, ToS-circumvention, or hardware-safety content.
9. Third-party IP and model licences stated correctly (R10, R11) — **pass**. This is the article's core subject. The MIT / Polyform Shield split is stated precisely and identically in structure across all 9 locales: `classic/` = MIT (permissive), `autogpt_platform/` = Polyform Shield (source-available, not OSI open-source, restricts competing commercial use). Verified the "MIT only covers classic/, Platform is Polyform Shield" distinction is preserved, never simplified to a flat "AutoGPT is MIT" in any translated block (commonMistakes §1 and FAQ §1 restate this explicitly in every locale — en:227, de:481, fr:735, es:989, pt:1243, ar:1497, ja:1751, zh:2005, ko:2259). No drift found.
10. No locale is stronger, more absolute, or less disclaimed than EN (R20) — **pass**. Read all 9 locale blocks in full (2,291 lines). Every locale carries the same hedges as EN: "not a claim the project is abandoned," "we did not run our own tests," the precise MIT/Polyform split, and the "check current repository status" framing. No locale drops a hedge or states the license split more simply than EN.

**Score: 10/10**

## Findings

### D1 — GitHub star/issue counts stated as point-in-time fact, repeated across the article without individual per-instance dating
**Class:** R6 (adjacent) — unsourced-if-stale statistic   **Severity:** ⚪ LOW   **Locale:** all
**Files:** e.g. `src/lib/power-local-llm/articles/autogpt-local-review-2026.ts:34` (en `quickAnswerTop.bullets`), and the equivalent bullet in all 9 locale blocks.
**Verbatim (en):**
> 'Repo: 187,081 stars, 531 open issues, not archived, pushed 2026-09-02'
**Why:** GitHub star/issue counts drift daily. The number is hedged once at the top ("as of this review") and the article has `freshness_tier: 'semi_annual'` + `next_refresh_due: '2027-03-02'`, which is adequate cover — this is not a fabricated or unlinked citation (R6 proper), just a fact that will read as stale before the refresh date if the repo's issue count changes a lot. Not actionable under UWG (it's not a promotional superlative), purely a reader-trust nit.
**Proposed fix:** None required before publish. Optional: add "(see live count on GitHub)" near the first bullet mention to make the staleness obvious to readers without editing every instance.
**Disclaimer surface:** none needed — already covered by freshness_tier + next_refresh_due + explicit review-date framing.

## Disclaimer gaps per locale
| locale | R2 topic present | disclaimer present | surface to add |
|---|---|---|---|
| all | No (not a regulated-advice topic) | N/A | none |

## Unverified citations (not scored)
- None. The article's only quasi-citation is the GitHub repository itself and its own `.env.template` file, both directly linked in `sources.links` in every locale. `--verify-citations` was not run (not requested); these are primary-source links to a repo directory, not a paper/study claim, so the taxonomy's R6 fabrication risk (fake arXiv IDs etc.) does not apply here.

## Site-level (R19)
Not run — `--site` flag was not passed for this invocation.

---

**Summary of intent-check:** This article was written specifically to correct a previously inaccurate "AutoGPT is abandoned" framing, and to state a precise MIT/Polyform Shield license split. Both goals are met cleanly in every one of the 9 locales, with no drift, no unhedged "we tested" language, and no simplification of the license split. This is a clean, low-risk publish.

*Pattern audit, not legal advice. Borderline items go to a Medienrecht / Wettbewerbsrecht lawyer before go-live.*
