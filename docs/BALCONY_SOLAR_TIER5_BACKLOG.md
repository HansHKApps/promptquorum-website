# Balcony Solar Cluster — Tier 5 Backlog

Four briefs selected from the Tier 5 backlog, chosen for strongest fit with the
existing thesis (local-control moat) and lowest research risk. Formatted to match
the existing briefs style for direct use in Claude Code.

**DO NOT BUILD.** STEP 4 translation (JA/ZH/FR/KO/DE) must land first (branch
hygiene). Revisit once the 20×9 cluster is live and GSC data exists to validate
real demand for these 4 topics.

## Selection rationale

- **BSOL-21 Home Assistant dashboard setup** — tactical follow-through on BSOL-05's
  thesis; highest-intent for the no-cloud buyer segment already established.
- **BSOL-22 Non-Chinese-made brands** — on-thesis for the data-sovereignty angle;
  genuine trade-dimension content, not forced.
- **BSOL-23 Insurance impact** — common objection-handler gap, low research complexity.
- **BSOL-24 Grid export / net metering** — technical differentiator most competitors
  skip; reuses existing COUNTRY_DATA architecture.

**Not selected now:** winter output (seasonal timing works better in Q4 2026),
renter-specific (overlaps BSOL-06/08), portable-power-station disambiguation (lower
priority), UGC examples (needs live traffic first).

## Briefs

### BSOL-21 — `home-assistant-balcony-solar-dashboard-setup`
- Type: How-to (deep-dive) | Schema: HowTo | Tier: annual
- Intent: tactical follow-through on BSOL-05's thesis — the no-cloud buyer's next step
  after deciding local control matters.
- H2s: What you need (hardware + HA instance) / Adding your inverter/battery integration /
  Building the dashboard (power flow, yield history, state of charge) / Automations
  (charge scheduling, alerts) / Troubleshooting common integration failures / FAQ
- Cross-link: BSOL-05 (thesis), BSOL-04 (microinverter picks), BSOL-03 (battery picks)
- Research required: verify current HA integration status per brand (Zendure zenSDK,
  Hoymiles, Deye) at write-time — this moves fast, do not reuse the cluster's earlier
  research without re-checking.

### BSOL-22 — `non-chinese-balcony-solar-brands`
- Type: Explainer/comparison | Schema: Article + FAQPage | Tier: semi_annual
- Intent: serves the data-sovereignty/trade-conscious buyer segment; genuine
  trade-dimension content.
- H2s: Why this question comes up (cloud dependency, supply chain, EU exposure) / Which
  major brands are Chinese-manufactured (verified list) / Non-Chinese alternatives that
  exist today (if any — research first, do not assume one exists) / Does manufacturing
  origin affect cloud-dependency? (no — separate the two variables) / What actually
  matters if sovereignty is your concern / FAQ
- CRITICAL: do not write this article until research confirms whether meaningful
  non-Chinese alternatives exist at real market presence. If none do, reframe as
  "Why Almost All Balcony Solar Hardware Is Chinese-Made" — still valuable, but do not
  force a false balance.
- Trade note: fold in April 2026 China PV-export-tax context from COUNTRY_DATA.

### BSOL-23 — `balcony-solar-insurance-impact`
- Type: Explainer/objection-handler | Schema: Article + FAQPage | Tier: semi_annual
- Intent: pre-purchase objection page, likely underserved (verify volume before committing).
- H2s: Short answer / Homeowners insurance (US) / Renters insurance / Germany
  (Hausratversicherung/Gebäudeversicherung) / Do you need to notify your insurer? /
  What if a panel causes damage? / FAQ
- Research required: this is jurisdiction-specific and currently unresearched — treat
  every claim as needing verification before publishing, do not infer from general
  solar-insurance knowledge.

### BSOL-24 — `balcony-solar-grid-export-net-metering`
- Type: Technical explainer | Schema: Article + FAQPage | Tier: semi_annual
- Intent: technical differentiator most buyer's guides skip; legislation-adjacent,
  reuses COUNTRY_DATA.
- H2s: Self-consumption vs. grid export vs. net metering (what's the difference) / Does
  balcony solar export to the grid? (usually minimal by design) / Country rules:
  Germany / US (varies by state) / Spain / Portugal / Do you need a bidirectional
  meter? / FAQ
- Wire to COUNTRY_DATA per the existing BSOL-11–16 pattern — do not retype figures.
- Flag: this may require adding a new field to COUNTRY_DATA (`netMeteringPolicy`) —
  confirm before writing.
