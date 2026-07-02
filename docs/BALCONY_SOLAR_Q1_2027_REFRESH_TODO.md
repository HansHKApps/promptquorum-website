# Balcony Solar Cluster — Q1 2027 Refresh TODO

Scheduled refresh pass per the balcony-solar-runbook-STRICT.md STEP 8 (not run during
initial build — logged here for the next refresh cycle). Add items below as they
surface; do not action any of these before Q1 2027 unless a `next_refresh_due` date
elsewhere in the cluster forces an earlier pass.

## Logged items

- **BSOL-17** (`ecoflow-vs-anker-vs-zendure-balcony-solar`): reverify Anker SOLIX's
  US catalog SKU count, currently stated as "17 portable power-station products"
  (sourced from ankersolix.com, checked 2026-07-02). This is the most perishable
  fact in the article — Anker's product catalog turns over faster than this
  article's semi_annual (6-month) refresh cycle, so the exact count may already be
  stale before the scheduled refresh date. Also reconfirm Anker Solarbank's US
  availability status generally (not sold/certified as of write-time) hasn't changed.
  Flagged during STEP 3 spot-check, 2026-07-02 — logged, not fixed at flag time per
  operator instruction (non-blocking).

- **ES/PT/AR native-term verification (STEP 4 translation batch, 2026-07-02)**:
  Spot-checked via WebSearch (no GSC/keyword-tool access available this session).
  Results:
  - **ES — CONFIRMED.** "energía solar de balcón" and "placas solares balcón" are
    both real, actively-used native terms across multiple competing Spanish solar
    retailer/blog sites (tienda-solar.es, sotysolar.es, solarbalcon.es, selectra.es,
    xataka.com). `primaryTerm: 'energía solar de balcón España'` and the general ES
    `targetKeywords` direction across all 20 files are verified accurate.
  - **PT — CONFIRMED, with a fact nuance to double-check.** "energia solar de
    varanda" is confirmed as the real native PT-BR term (ecoflow.com.pt,
    canalsolar.com.br, ciclovivo.com.br). However, sources surfaced during this
    same search describe Brazil's plug-in/balcony-solar regulatory picture as
    *more unsettled* than this cluster's current framing ("no specific regulation
    yet, adoption not recommended in Brazil" per canalsolar.com.br) — the cluster
    currently states Brazil has "no small-system exemption — full standard
    interconnection registration applies regardless of size." These aren't
    necessarily contradictory (no exemption + no dedicated rules can coexist) but
    the framing gap is worth a primary-source recheck at the scheduled refresh,
    specifically in `balcony-solar-portugal-brazil.ts` and
    `how-to-register-balcony-solar.ts`.
  - **AR — UNVERIFIED, logged as an assumption.** WebSearch for
    "الطاقة الشمسية للشرفة" (the AR term used as the primary phrase across all 20
    translated files) returned no results confirming it as an established,
    actively-searched native term — results were generic solar-energy content,
    not balcony/plug-in-solar-specific. Balcony solar is primarily a
    German/EU/US market phenomenon; MENA/Gulf search behavior for this concept
    was not independently confirmed this session. Treat the AR primary term and
    `targetKeywords` across all 20 files as an unverified assumption until a
    native-market keyword tool (not Google/GSC-based, given known Google-side
    Arabic-market data gaps) confirms actual search volume and phrasing —
    ideally checked against a MENA-region search engine or in-market native
    speaker, not just translated-and-assumed.
