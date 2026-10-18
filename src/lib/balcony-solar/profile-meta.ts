// Herstellerprofile tile — per-manufacturer category + one verified fact.
//
// Every category and fact below is taken directly from that company's own profile article
// (its `leadAnswerBlock`/`intro`, EN block — see src/lib/balcony-solar/articles/*.ts), not
// inferred from the brand name. Four categories were agreed with the site owner
// (Wechselrichter-Hersteller / Speicher-Hersteller / Set-Anbieter / Händler); a fifth,
// "Modul-Hersteller", was added here because meyer-burger-solarwatt-heckert is a panel-maker
// profile that none of the four fits — flagged for the owner to fold into one of the four
// instead, if preferred, rather than keeping a one-off fifth category.
//
// "kit-reseller layer" vs. "microinverter/battery-maker layer" is language the articles
// themselves use to cross-reference each other (see hoymiles/deye/apsystems/goodwe profiles,
// which all name Anker SOLIX, EcoFlow and Zendure as the "kit-reseller layer"); that explicit
// grouping is the basis for the Set-Anbieter vs. Wechselrichter-Hersteller split below.

import type { HubTone } from '@/components/hub-template/palette'

export interface ProfileMeta {
  category: string
  categoryTone: HubTone
  fact: string
}

const CATEGORY: Record<string, { label: string; tone: HubTone }> = {
  inverter: { label: 'Wechselrichter-Hersteller', tone: 'azure' },
  storage: { label: 'Speicher-Hersteller', tone: 'rose' },
  kit: { label: 'Set-Anbieter', tone: 'violet' },
  reseller: { label: 'Händler', tone: 'orchid' },
  module: { label: 'Modul-Hersteller', tone: 'cyan' },
}

function meta(kind: keyof typeof CATEGORY, fact: string): ProfileMeta {
  const c = CATEGORY[kind]
  return { category: c.label, categoryTone: c.tone, fact }
}

/** Keyed by article slug — the same slugs listed in PROFILE_SLUGS in hub-template.tsx. */
export const PROFILE_META: Record<string, ProfileMeta> = {
  // Kit-reseller layer (own branding, sells complete finished kits) — named as a group in
  // several other profiles' leadAnswerBlock.
  'anker-solix-balcony-solar': meta('kit', 'Mutterfirma seit 2020 börsennotiert (Shenzhen)'),
  'ecoflow-balcony-solar': meta('kit', 'Gegründet 2017 in Shenzhen, privat finanziert'),
  'zendure-balcony-solar': meta('kit', 'Lokale HTTP/MQTT-API ohne Internetverbindung'),
  'yuma-balcony-solar': meta('kit', 'Köln — baut nur die Halterung selbst, Technik von Hoymiles & Co.'),
  'priwatt-balcony-solar': meta('kit', 'Leipzig — jedes Set mit Wechselrichtern von GoodWe'),
  'kleines-kraftwerk-balcony-solar': meta('kit', 'Achim — gestartet 2022 in einer Garage'),
  'balkonstrom-balcony-solar': meta('kit', 'Uettingen, Bayern — eigens gefertigte DC-Kabel'),

  // Microinverter/battery-maker layer — component manufacturers, not packaged-kit sellers.
  'growatt-balcony-solar': meta('inverter', '15 Jahre altes Wechselrichter-Unternehmen (seit 2011)'),
  'hoymiles-microinverter-balcony-solar': meta('inverter', 'Reiner Mikrowechselrichter-Hersteller, börsennotiert seit 2021'),
  'deye-microinverter-balcony-solar': meta('inverter', 'Offener lokaler Modbus-TCP-Port (8899) auf dem Logger Stick'),
  'apsystems-microinverter-balcony-solar': meta('inverter', 'EZ1-Serie mit herstellereigener lokaler API, keine Cloud nötig'),
  'goodwe-balcony-solar': meta('inverter', 'Verkauft Balkon-Hardware unter der Zweitmarke PVBM'),
  'enphase-microinverter-balcony-solar': meta('inverter', 'NASDAQ-notiert (ENPH), erst seit kurzem im Balkon-Markt'),

  // Portable-power-station / battery brands — not part of the "kit-reseller layer" grouping above.
  'allpowers-balcony-solar': meta('storage', 'Hongkong — Powerstation, nicht netzgekoppelt'),
  'jackery-balcony-solar': meta('storage', 'Mutterfirma an der Shenzhen-Börse (ChiNext) seit 2022'),
  'bluetti-balcony-solar': meta('storage', 'Balco-Serie seit 2026, bisher nur Deutschland und Frankreich'),
  'renogy-balcony-solar': meta('storage', 'Kein netzgekoppeltes Produkt — Fokus auf Off-Grid-Technik'),

  // Pure reseller.
  'green-solar-pluginenergy-balcony-solar': meta('reseller', 'Österreich/Deutschland — reiner Wiederverkauf, keine Eigenfertigung'),

  // Panel makers — doesn't fit the 4 agreed categories, see file header.
  'meyer-burger-solarwatt-heckert-balcony-solar': meta('module', 'Meyer Burger: Insolvenzverfahren seit 2025'),
}
