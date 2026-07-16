/**
 * Verified balcony solar (plug-in solar / "Balkonkraftwerk") legal + technical data,
 * per country/region.
 * Single source of truth — BSOL-09 (sizing/payback), BSOL-11 (legislation tracker master),
 * BSOL-12–16 (per-country legislation pages), and BSOL-08 (registration how-to, which now
 * also owns per-country plug-type/price detail shed from BSOL-07's evergreen prose) all
 * import from here. Update once; all consuming articles + all 9 locale blocks re-render
 * automatically.
 *
 * Verification policy (METHOD RULE):
 *  - Every field with a factual claim carries its own sourceUrl and lastVerified date.
 *  - If a fact could not be confirmed via a primary/authoritative source at write-time,
 *    the field is 'Uncertain' (legalStatus) or explicitly noted `verified: false` with
 *    a `note` explaining the gap. Never silently invent a number.
 *  - certification.available === false means the standard exists on paper but no product
 *    has actually been certified under it yet — do not let article prose imply otherwise.
 *
 * Last fact-checked: 2026-07-02
 */

export type LegalStatus =
  | 'Explicitly legal — dedicated simplified regime'
  | 'Legal — falls under general solar rules, no dedicated carve-out'
  | 'Ambiguous / gray area'
  | 'Unregulated / nascent — no explicit permission or prohibition'
  | 'Varies by state/emirate/region';

export interface CertificationInfo {
  standard: string;
  available: boolean; // true = products actually certified under this standard exist on the market
  note?: string;
}

export interface CountryEntry {
  country: string;
  /** ISO 3166-1 alpha-2, or a region key like 'gulf-mena' for a grouped entry */
  code: string;
  legalStatus: LegalStatus;
  legalStatusNote?: string;
  /** AC output wattage limit for the lightest-touch regulatory tier, if one exists */
  powerLimitW: number | null;
  powerLimitNote?: string;
  /** Total module (panel) wattage cap, if distinct from the AC/inverter output limit */
  panelWattageCapWp?: number | null;
  panelWattageCapNote?: string;
  /** Electricity meter requirement note, if a country has a distinct meter rule */
  meterNote?: string;
  registrationRequired: string; // free text: who, and under what threshold
  certification: CertificationInfo;
  /** kWh per kWp installed per year, if a region-specific figure was verified */
  avgYieldKwhPerKwp: number | null;
  avgYieldNote?: string;
  /** local-currency price range for a typical small (300–800W) plug-in kit */
  typicalPrice: string;
  typicalPriceVerified: boolean;
  sourceUrls: string[];
  lastVerified: string; // YYYY-MM-DD
}

export interface USStateEntry {
  state: string;
  status: 'Signed' | 'Passed legislature, awaiting governor signature';
  bill: string;
  signedDate: string | null; // null if not yet signed
  effectiveDate: string | null;
  powerLimitW: number | null;
  powerLimitNote?: string;
  sourceUrls: string[];
}

// ─── FEDERAL / CROSS-CUTTING FACTS ─────────────────────────────────────────────

export const US_FEDERAL_CERTIFICATION: CertificationInfo = {
  standard: 'UL 3700',
  available: false,
  note:
    'Standard published Dec 2025; certification program launched Jan 8 2026. As of the most recent status check (Apr 2026, re-confirmed no contrary evidence 2026-07-02), no complete balcony solar system has yet earned UL 3700 certification — testing is still in progress. Do not describe any specific product as "UL 3700-certified" in article prose; describe the standard as available/launched but not yet yielding certified products.',
};

export const CHINA_PV_EXPORT_POLICY = {
  summary:
    'China removed its PV-component export VAT rebate (not a tariff cut) effective Apr 1 2026 — rebate rate stepped 13%→9%→0%. This raises exporter costs, pushing module/kit prices up an estimated 10–15% into 2H 2026 (some forecasts as high as 30–40% short-term spike, others ~14.5% by year-end).',
  sourceUrls: [
    'https://www.pv-tech.org/scrapping-of-chinas-pv-export-tax-rebate-prompts-panic-buying-and-module-price-surge/',
    'https://taiyangnews.info/markets/china-to-remove-solar-export-tax-rebates-from-april-1-2026',
  ],
  lastVerified: '2026-07-02',
};

export const AMAZON_ASSOCIATES_POLICY = {
  summary:
    '180 days to log 3 qualifying sales, or the account auto-closes (can reapply with same email). Operating Agreement updated Apr 14 2026 added a separate 180-day shipped/paid requirement per transaction.',
  sourceUrl: 'https://affiliate-program.amazon.com/help/operating/policies',
  lastVerified: '2026-07-02',
};

export const AFFILIATE_RATE_NOTE =
  'EcoFlow/Anker commission rates vary 3.15–10% depending on network and product line — do not assert a single flat rate (e.g. "~5%") in article prose. Confirm current rate directly via each program\'s affiliate page at write-time, or present as a range.';

// ─── US STATE-BY-STATE (feeds BSOL-12) ─────────────────────────────────────────

export const US_STATES: USStateEntry[] = [
  {
    state: 'Utah',
    status: 'Signed',
    bill: 'HB 340',
    signedDate: '2025-03',
    effectiveDate: '2025-05-07',
    powerLimitW: null,
    powerLimitNote: 'Not independently re-verified this pass — check DGEG-equivalent Utah PSC text at write-time.',
    sourceUrls: ['https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/'],
  },
  {
    state: 'Maine',
    status: 'Signed',
    bill: 'LD 1730',
    signedDate: '2026-04-06',
    effectiveDate: '2026-07',
    powerLimitW: null,
    sourceUrls: ['https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/'],
  },
  {
    state: 'Virginia',
    status: 'Signed',
    bill: 'HB 395 / SB 250',
    signedDate: '2026-04-22',
    effectiveDate: '2026-07-01',
    powerLimitW: 1200,
    powerLimitNote: 'Localities cannot ban within the state cap.',
    sourceUrls: ['https://www.pv-tech.org/maine-passes-balcony-solar-law-virginia-and-colorado-to-follow/'],
  },
  {
    state: 'Maryland',
    status: 'Signed',
    bill: 'HB 1532 (Utility RELIEF Act)',
    signedDate: '2026',
    effectiveDate: 'Immediate on signing',
    powerLimitW: null,
    powerLimitNote: 'Exact cap not independently re-verified this pass.',
    sourceUrls: ['https://pluginsolarhub.org/state-legality/'],
  },
  {
    state: 'Colorado',
    status: 'Signed',
    bill: 'HB 26-1007',
    signedDate: '2026-05-07',
    effectiveDate: null,
    powerLimitW: 1920,
    powerLimitNote: 'Highest wattage cap of any US state balcony solar law found.',
    sourceUrls: ['https://pluginsolarhub.org/state-legality/'],
  },
  {
    state: 'Connecticut',
    status: 'Signed',
    bill: 'HB 5340',
    signedDate: '2026',
    effectiveDate: '2026-10-01',
    powerLimitW: null,
    sourceUrls: ['https://pluginsolarhub.org/state-legality/'],
  },
  {
    state: 'New York',
    status: 'Passed legislature, awaiting governor signature',
    bill: 'SUNNY Act',
    signedDate: null,
    effectiveDate: null,
    powerLimitW: null,
    sourceUrls: ['https://pv-magazine-usa.com/2026/06/01/new-york-legislature-passes-sunny-act-plug-in-solar-legislation/'],
  },
  {
    state: 'New Hampshire',
    status: 'Signed',
    bill: 'SB 540',
    signedDate: '2026-05-28',
    effectiveDate: '2026-07-27',
    powerLimitW: 1200,
    sourceUrls: ['https://www.brightsaver.org/legislation-tracker'],
  },
  {
    state: 'Vermont',
    status: 'Signed',
    bill: 'S.202 / H.598',
    signedDate: '2026',
    effectiveDate: '2026-07-01',
    powerLimitW: 1200,
    powerLimitNote: 'UL 3700 (or equivalent) certification explicitly required by statute; net metering explicitly excluded.',
    sourceUrls: ['https://www.brightsaver.org/legislation-tracker'],
  },
];

export const US_STATE_COUNT_NOTE =
  'State count moves monthly — re-verify at write-time (BSOL-12 next_refresh_due is +60 days, not the default 6-month semi_annual interval, for this reason). As of 2026-07-16 (corrected — see docs/BALCONY_SOLAR_Q1_2027_REFRESH_TODO.md): 8 states signed (Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont, Connecticut), 1 more (New York) passed legislature and awaiting governor signature. Two of the 8 signed states are not yet in effect: Colorado (Jan 1 2027) and Connecticut (Oct 1 2026). CO/MD/CT/NH dates were cross-verified only via secondary trackers (pluginsolarhub.org, pv-tech.org), not primary legislative text — confirm against official state legislative records before publishing exact signing dates.';

// ─── PER-COUNTRY / PER-REGION DATA ─────────────────────────────────────────────

export const COUNTRY_DATA: CountryEntry[] = [
  {
    country: 'United States',
    code: 'us',
    legalStatus: 'Varies by state/emirate/region',
    legalStatusNote:
      'No federal framework — legality determined state-by-state. See US_STATES for signed/pending states. Most states neither explicitly permit nor prohibit; a handful have passed dedicated legislation.',
    powerLimitW: null,
    powerLimitNote: 'No federal cap; varies by state where legislation exists (Colorado highest at 1920W).',
    registrationRequired: 'Varies by state and utility — no uniform federal registration.',
    certification: US_FEDERAL_CERTIFICATION,
    avgYieldKwhPerKwp: null,
    avgYieldNote: 'Not independently verified for the US as a whole this pass — highly region-dependent (Southwest vs Northeast); use a per-state or per-climate-zone source, not a single US-wide figure.',
    typicalPrice: '$1,500–$2,000 for a typical 800W kit (budget kits from ~$900–$1,200)',
    typicalPriceVerified: true,
    sourceUrls: [
      'https://the-gadgeteer.com/2026/05/18/5-balcony-solar-kits-that-work-in-us-apartments-now/',
    ],
    lastVerified: '2026-07-02',
  },
  {
    country: 'Germany',
    code: 'de',
    legalStatus: 'Explicitly legal — dedicated simplified regime',
    legalStatusNote:
      'Independently re-verified 2026-07-02 against primary legal text (superseding the earlier reference-market flag). § 8 EEG 2023 (gesetze-im-internet.de) is the governing statute for "Steckersolargeräte." Standard plug-in units (no integrated battery) qualify for the full simplified regime described below; storage-equipped balcony systems remain OUTSIDE this simplified regime and still require full grid-operator (Netzbetreiber) registration and a licensed electrician — a material caveat for any BSOL-08/09 content that discusses battery-equipped kits in a German context.',
    powerLimitW: 800,
    powerLimitNote:
      '800 VA inverter AC output cap, unchanged since the May 2024 Solarpaket I reform. Now dually anchored in two sources: § 8 EEG 2023 (legal ceiling) and DIN VDE V 0126-95 (technical/safety product standard, effective 2025-12-01 — the first dedicated EU product standard for plug-in solar devices). Confirmed current, no further change since 2024.',
    panelWattageCapWp: 2000,
    panelWattageCapNote:
      '2,000 Wp total module capacity cap, independent of and separate from the 800W inverter/AC limit — per § 8 EEG 2023 text. DIN VDE V 0126-95 (eff. 2025-12-01) adds a plug-type-dependent sub-limit: module power is capped at 960 Wp when connected via a standard household Schuko socket; the full 2,000 Wp requires a dedicated energy connector (e.g. Wieland).',
    meterNote:
      'A digital/bidirectional meter is not mandatory for operation — an old backward-spinning Ferraris meter is still tolerated temporarily, contingent on MaStR registration. The statutory swap-window commonly cited (~4 months) for the Messstellenbetreiber to install a two-way meter was NOT independently confirmed against primary MessEG/MsbG statute text this pass — flag as unverified/secondary-sourced if cited in article prose.',
    registrationRequired:
      'Marktstammdatenregister (MaStR) entry only — confirmed still the sole registration step. § 8 EEG 2023 text states no additional Netzbetreiber (grid operator) notification can be demanded beyond MaStR; the grid operator is informed automatically via MaStR data-sharing. Re-confirmed unchanged since the May 2024 reform.',
    certification: {
      standard: 'DIN VDE V 0126-95 (effective 2025-12-01) — first dedicated EU product/safety standard for Steckersolargeräte; supersedes reliance on VDE-AR-N 4105 alone for this category',
      available: true,
      note:
        'DIN VDE V 0126-95 mandates pre-assembled connection cables, clear install/warning instructions, and rapid voltage shutoff for shock protection. It explicitly EXCLUDES systems with integrated storage/batteries — a follow-up standard part for storage-equipped devices is in development but not yet published as of write-time.',
    },
    avgYieldKwhPerKwp: 1003,
    avgYieldNote: 'Stuttgart reference figure.',
    typicalPrice: '€250–€500 for a standard 800W kit; €600–€1,500 with battery storage',
    typicalPriceVerified: true,
    sourceUrls: [
      'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk/',
      'https://www.gesetze-im-internet.de/eeg_2014/__8.html',
      'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
      'https://www.vde.com/en/press/press-releases/first-product-standard-for-plug-in-solar-devices',
      'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
    ],
    lastVerified: '2026-07-02',
  },
  {
    country: 'Spain',
    code: 'es',
    legalStatus: 'Ambiguous / gray area',
    legalStatusNote:
      'RD 244/2019 legalized self-consumption broadly and "vertido cero" (zero-export) self-consumption is exempt from access/connection permits, but sources conflict on whether small plug-in kits get a genuine simplified exemption. Vendor/press sources claim ≤800W plug-in kits need no project/installer certificate/registration; a detailed legal-focused source says Spain has NOT adopted a dedicated balcony-solar regime like Germany/Austria/NL and full formalities (CIE certificate, REBT compliance, Comunidad Autónoma registry, distributor notification) still apply. Do not assert a codified 800W exemption as settled fact.',
    powerLimitW: 800,
    powerLimitNote: 'Commonly cited but UNCERTAIN — appears EU/marketing-derived rather than a codified Spanish statutory threshold (unlike Portugal\'s codified 700W).',
    registrationRequired: 'UNCERTAIN — conflicting sources; treat as "may require full RD 244/2019 formalities" until confirmed otherwise per installation.',
    certification: {
      standard: 'VDE-AR-N 4105-certified microinverter + CE marking (no distinct Spanish-specific standard found)',
      available: true,
    },
    avgYieldKwhPerKwp: null,
    avgYieldNote: 'Spain-specific figure not obtained this pass; broader Mediterranean/southern Europe range (1,200–1,700 kWh/kWp) is a regional estimate, not Spain-specific — do not present as a precise Spain figure.',
    typicalPrice: '€589–€999 for a 600–800W kit',
    typicalPriceVerified: true,
    sourceUrls: [
      'https://wwwhatsnew.com',
      'https://elvecinosolar.es',
      'https://mejorkitsolares.com',
    ],
    lastVerified: '2026-07-02',
  },
  {
    country: 'Portugal',
    code: 'pt',
    legalStatus: 'Explicitly legal — dedicated simplified regime',
    legalStatusNote:
      'Decreto-Lei n.º 15/2022 (14 Jan 2022) governs UPAC self-consumption units; plug-in kits are treated as UPAC but the law\'s lowest power tier functions as a de facto simplified regime for them. This is the strongest-sourced (primary statutory text) finding among the 5 newly researched regions — safe to state with confidence.',
    powerLimitW: 700,
    powerLimitNote: '≤700W installed AC capacity (microinverter nameplate AC output, not panel Wp) is exempt from prior control, provided no grid export. 700W–30kW requires simplified "Mera Comunicação Prévia" notification; 30kW–1MW needs full registration.',
    registrationRequired: 'None for ≤700W with no grid injection. Simplified online notification (Mera Comunicação Prévia) via DGEG portal for 700W–30kW.',
    certification: {
      standard: 'Certified injection limiter for grid-tied units; DGEG-recognized technician required above 700W',
      available: true,
      note: 'No PT-specific product standard (VDE-equivalent) found — flagged uncertain.',
    },
    avgYieldKwhPerKwp: null,
    avgYieldNote: 'Portugal-specific figure not obtained this pass; likely similar to or higher than Spain given comparable latitude — do not assert a precise number without dedicated verification.',
    typicalPrice: '€290–€900 for a 600–800W plug & play kit',
    typicalPriceVerified: true,
    sourceUrls: [
      'https://files.dre.pt/1s/2022/01/01000/0000300185.pdf',
      'https://www.dgeg.gov.pt/pt/areas-setoriais/energia/energia-eletrica/producao-de-energia-eletrica/producao-descentralizada-autoconsumo-e-upp-mp-mn/autoconsumo-e-cer/3-enquadramento-legal/',
      'https://www.dgeg.gov.pt/pt/areas-setoriais/energia/energia-eletrica/producao-de-energia-eletrica/producao-descentralizada-autoconsumo-e-upp-mp-mn/autoconsumo-e-cer/1-pedido-de-inscricao-e-registo/',
    ],
    lastVerified: '2026-07-02',
  },
  {
    country: 'Brazil',
    code: 'br',
    legalStatus: 'Legal — falls under general solar rules, no dedicated carve-out',
    legalStatusNote:
      'No dedicated plug-in-solar law. Everything falls under ANEEL\'s general micro/mini-generation framework (REN 1.059/2023, implementing Lei 14.300/2022). Press explicitly confirms plug-in kits still have no specific regulation; small kits operate in an informally-tolerated gray zone rather than a codified exemption — ANEEL\'s formal process (interconnection request, technical study, bidirectional meter, INMETRO-certified inverter documentation) technically applies uniformly up to 75kW with no wattage carve-out documented.',
    powerLimitW: null,
    powerLimitNote: 'No official ANEEL wattage exemption threshold found (e.g. no 500W/1kW carve-out).',
    registrationRequired: 'Standard micro-geração connection request with the local distribution utility (concessionária) — same process as any rooftop system, no lighter tier for small plug-in kits.',
    certification: {
      standard: 'INMETRO-certified inverter + ABNT technical compliance',
      available: true,
    },
    avgYieldKwhPerKwp: null,
    avgYieldNote: 'Not obtained this pass — Brazil\'s tropical/equatorial latitude would likely yield higher than Mediterranean figures, but do not assert a number without dedicated verification.',
    typicalPrice: 'UNCERTAIN — no clean 400–600W plug-in kit BRL price found. Larger complete grid-tied kits with batteries: R$10,000–20,000. One ~600W portable option cited around R$5,000 (payback 4–6yr) but source quality uncertain.',
    typicalPriceVerified: false,
    sourceUrls: [
      'https://www2.aneel.gov.br/cedoc/ren20231059.pdf',
      'https://www.gov.br/aneel/pt-br/acesso-a-informacao/perguntas-frequentes/micro-e-minigeracao-distribuida',
      'https://www.correiobraziliense.com.br/cbradar/o-sistema-de-energia-solar-de-tomada-que-qualquer-pessoa-pode-instalar-e-que-dispensa-obras-gigantes-no-telhado/',
      'https://mittechreview.com.br/energia-solar-de-varanda/',
    ],
    lastVerified: '2026-07-02',
  },
  {
    country: 'Mexico',
    code: 'mx',
    legalStatus: 'Legal — falls under general solar rules, no dedicated carve-out',
    legalStatusNote:
      'No plug-in-solar-specific framework. All grid-tied PV, from the smallest plug-in unit up to 700kW, must go through the identical formal CFE interconnection contract process with a CRE-certified installer. The "trámite simplificado" 0.7MW (700kW) threshold (raised from 0.5MW per Mexico\'s Ley del Sector Eléctrico, DOF Mar 18 2025) is a permitting-tier boundary, NOT a small-system exemption — a 300W plug-in kit and a 690kW system face the same paperwork.',
    powerLimitW: null,
    powerLimitNote: 'No sub-kW exemption exists; 700kW is a permitting-complexity boundary, not a wattage cap relevant to balcony-scale systems.',
    registrationRequired: 'CFE interconnection contract (Contrato de Interconexión) via a CRE-certified installer — required for any grid-tied system regardless of size.',
    certification: {
      standard: 'NOM-001-SEDE-2012 (Art. 690), CFE spec G0100-04, inverter certified to IEEE 1547 / UL 1741',
      available: true,
    },
    avgYieldKwhPerKwp: null,
    avgYieldNote: 'Not obtained this pass.',
    typicalPrice: 'UNCERTAIN for small (300–800W) plug-in kits in MXN — only larger CFE-interconnection kits found (~$60,000–$132,490 MXN for 1.75–10kW systems).',
    typicalPriceVerified: false,
    sourceUrls: [
      'https://evoluo.mx/limite-interconexion-cfe-paneles-solares/',
      'https://www.gob.mx/cre/articulos/generacion-distribuida-102284',
      'https://lapem.cfe.gob.mx/normas/pdfs/f/G0100-04.pdf',
    ],
    lastVerified: '2026-07-02',
  },
  {
    country: 'Gulf / MENA (UAE + Saudi Arabia)',
    code: 'gulf-mena',
    legalStatus: 'Unregulated / nascent — no explicit permission or prohibition',
    legalStatusNote:
      'Nascent regulation — label immature/uncertain areas as such (per original brief note for BSOL-16). UAE: no dedicated framework and no wattage carve-out at all — any grid-tied system, any size, requires utility NOC (DEWA in Dubai, ADDC/AADC in Abu Dhabi/Al Ain, SEWA in Sharjah, which is still "developing legislation"), so small plug-in units sit in a de facto restricted gray zone under the general rule, with fines up to AED 20,000 for unauthorized connection. Saudi Arabia: ECRA\'s net-metering framework sets an explicit 1kW regulatory floor — sub-1kW plug-in devices fall in a genuine gap below the regulatory net (neither permitted nor banned), while ≥1kW follows the full SEC/Shams registration process.',
    powerLimitW: 1000,
    powerLimitNote: 'Saudi ECRA floor is 1kW (below this, unaddressed). UAE has no wattage threshold at all — treat differently per country in article prose, do not conflate.',
    registrationRequired: 'UAE: utility NOC (DEWA/ADDC/AADC/SEWA) before any connection, no exemption tier. Saudi: SEC via Shams platform for ≥1kW only; sub-1kW has no stated registration path either way.',
    certification: {
      standard: 'No Gulf-specific plug-in standard identified (no UL 3700 equivalent) in either UAE or Saudi Arabia',
      available: false,
    },
    avgYieldKwhPerKwp: null,
    avgYieldNote: 'Not obtained this pass — Gulf high-sun conditions would presumably yield very high figures, but do not assert a number without dedicated verification.',
    typicalPrice: 'UNCERTAIN — no dedicated small plug-in-kit AED/SAR pricing found in either market. General panel-only pricing: AED 2.50–4.00/watt (UAE); SAR 20,000–60,000 general residential system (Saudi). This segment does not yet appear commercially established with published Gulf-market pricing.',
    typicalPriceVerified: false,
    sourceUrls: [
      'https://www.dewa.gov.ae/en/consumer/solar-community/shams-dubai/shams-dubai-faq',
      'https://www.dewa.gov.ae/en/builder/electricity-network-services/apply-for-solar-pv-connections',
      'https://www.cleantech.sa/small-scale-solar-pv-systems-regulations/',
      'https://rise.esmap.org/sites/default/files/library/saudi-arabia/Renewable%20Energy/Kingdom%20of%20Saudi%20Arabia_Regulatory%20Framework%20for%20Small-%20Scale%20Solar%20PV%20Systems.pdf',
    ],
    lastVerified: '2026-07-02',
  },
];

export function getCountryData(code: string): CountryEntry | undefined {
  return COUNTRY_DATA.find((c) => c.code === code);
}
