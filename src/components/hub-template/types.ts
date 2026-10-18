import type { HubTone } from './palette'

/** One link inside an explore tile. All fields are plain data so the item can cross the server/client boundary. */
export interface HubItem {
  href: string
  title: string
  /** One or two sentences under the title (clamped to two lines). */
  summary?: string
  /** Guides keep the editorial order; profiles are listed A to Z when the whole tile is opened. */
  kind: 'guide' | 'profile'
  badge?: 'new' | 'updated'
}

/** One tile in "Explore by topic". Its items open in a panel under the tile's row. */
export interface HubTile {
  id: string
  title: string
  /** One short line shown on the tile. */
  summary: string
  /** Longer line at the top of the opened panel. */
  intro: string
  /** Word after the big number on the tile, e.g. "Guides". */
  unit: string
  items: HubItem[]
}

/** Strings the client component needs. `{count}` placeholders are replaced in the browser. */
export interface HubExploreLabels {
  open: string
  close: string
  /** Shown on the button in the opened panel that closes it. */
  closePanel: string
  /** "First {shown} of {count}" above the preview list. */
  preview: string
  showAll: string
  showLess: string
  allHeading: string
  guidesHeading: string
  profilesHeading: string
  badgeNew: string
  badgeUpdated: string
  kindGuide: string
  kindProfile: string
  /** Used as the accessible name of the group of tiles. */
  groupLabel: string
}

export interface HubStartCard {
  href: string
  /** What the reader wants to do, in their words. */
  goal: string
  /** Real title of the article behind the card. */
  title: string
  tone: HubTone
  icon: 'package' | 'shield' | 'home' | 'trend'
  badge?: string
}

export interface HubLatestCard {
  href: string
  title: string
  summary?: string
  tone: HubTone
  badge?: 'new' | 'updated'
  /** Already formatted for display. */
  dateLabel: string
}

export interface HubLink {
  href: string
  name: string
  line: string
  tone: HubTone
}

export interface HubFaqItem {
  q: string
  a: string
}

export interface HubFlowColumn {
  label: string
  tone: HubTone
  chips: string[]
}
