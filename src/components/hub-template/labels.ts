import type { Lang } from '@/lib/i18n/constants'
import type { HubExploreLabels } from './types'

// Interface strings shared by every hub that uses the template. Hub-specific copy (titles,
// section intros, card text) belongs to the hub's own mapping file, not here.
// A language is only usable once it has an entry here AND is enabled in the hub's allowlist.
export const HUB_EXPLORE_LABELS: Partial<Record<Lang, HubExploreLabels>> = {
  de: {
    open: 'Öffnen',
    close: 'Schließen',
    closePanel: 'Schließen',
    preview: 'Die ersten {shown} von {count}',
    showAll: 'Alle {count} anzeigen',
    showLess: 'Weniger anzeigen',
    allHeading: 'Alle {count}',
    guidesHeading: 'Guides ({count})',
    profilesHeading: 'Profile ({count}, A bis Z)',
    badgeNew: 'Neu',
    badgeUpdated: 'Aktualisiert',
    kindGuide: 'Guide',
    kindProfile: 'Profil',
    groupLabel: 'Themen',
  },
}

export const HUB_SORT_LOCALE: Partial<Record<Lang, string>> = {
  de: 'de-DE',
}
