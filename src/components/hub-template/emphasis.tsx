import { Fragment, type ReactNode } from 'react'

// Shared "stressed text" renderer: turns **word** markers into a semantically bold span.
// Source strings stay plain, translatable text with inline markers — this only changes how a
// qualifying passage paints. Rule (owner decision, balcony-solar DE pilot): apply markers only to
// a passage of two or more sentences, or a single sentence over ten words; short UI labels and
// nav microcopy are left alone. Used by HubTemplate and HubExplore, so it lives outside both to
// avoid a circular import between them.
export function renderEmphasis(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-hub-indigo-ink">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}
