'use client'

// Right-side slide-in drawer behind the "Apps verified by their makers" and
// "Apps tested hands-on" homepage stat tiles — same Radix Dialog structure
// and animation as src/components/local-ai-directory/ToolDrawer.tsx, reused
// here for a short, scrollable list instead of a single app's full detail.

import * as Dialog from '@radix-ui/react-dialog'
import type { Language } from '@/lib/blog/blogContent'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { AppLink as Link } from '@/components/AppLink'
import { CloseIcon } from '@/components/local-ai-directory/icons'
import type { FounderVerifiedAppRow, HandsOnTestedAppRow } from '@/lib/home/statDetails'
import { t } from './home-i18n'

type StatListKind = 'founder' | 'handsOn'

export function StatListDrawer({
  kind,
  founderItems,
  handsOnItems,
  lang,
  onClose,
}: {
  kind: StatListKind | null
  founderItems: FounderVerifiedAppRow[]
  handsOnItems: HandsOnTestedAppRow[]
  lang: Language
  onClose: () => void
}) {
  const open = kind != null
  const heading = kind === 'founder'
    ? t('statListFounderHeadingTemplate', lang, { count: founderItems.length })
    : kind === 'handsOn'
      ? t('statListHandsOnHeadingTemplate', lang, { count: handsOnItems.length })
      : ''
  const desc = kind === 'founder' ? t('statFounderVerifiedDesc', lang) : kind === 'handsOn' ? t('statHandsOnTestsDesc', lang) : ''

  return (
    <Dialog.Root open={open} onOpenChange={(next) => { if (!next) onClose() }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          className="fixed right-0 top-0 z-50 h-full w-full sm:max-w-md bg-white shadow-xl overflow-y-auto focus:outline-none
            data-[state=open]:animate-in data-[state=open]:slide-in-from-right
            data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right"
        >
          {kind && (
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-1">
                <Dialog.Title className="text-lg font-bold text-text-primary">{heading}</Dialog.Title>
                <Dialog.Close asChild>
                  <button type="button" aria-label={t('statListCloseAria', lang)} className="rounded-full p-1.5 text-text-secondary hover:bg-gray-100 shrink-0">
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="text-sm text-text-secondary mb-5">{desc}</Dialog.Description>

              <ul className="space-y-2">
                {kind === 'founder' && founderItems.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={item.href}
                      className="block rounded-xl border border-hub-violet-edge bg-tone-list p-3 transition hover:border-hub-violet hover:bg-hub-violet-tint"
                    >
                      <p className="text-sm font-bold text-text-primary">{item.name}</p>
                      {item.tagline && <p className="mt-0.5 text-xs text-text-secondary leading-snug">{item.tagline}</p>}
                      <p className="mt-1.5 text-[11px] text-text-secondary/80">
                        {item.reviewCount > 1
                          ? t('statListReviewedAgainTemplate', lang, { count: item.reviewCount, date: formatDisplayDate(item.date, lang) })
                          : item.date
                            ? t('statListReviewedOnceTemplate', lang, { date: formatDisplayDate(item.date, lang) })
                            : ''}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {item.href.includes('/directory') ? t('statListViewInDirectory', lang) : t('statListViewReview', lang)}
                      </p>
                    </Link>
                  </li>
                ))}

                {kind === 'handsOn' && handsOnItems.map((item) => {
                  const row = (
                    <>
                      <p className="text-sm font-bold text-text-primary">{item.name}</p>
                      {item.dek && <p className="mt-0.5 text-xs text-text-secondary leading-snug">{item.dek}</p>}
                      {item.date && <p className="mt-1.5 text-[11px] text-text-secondary/80">{t('statListPublishedTemplate', lang, { date: formatDisplayDate(item.date, lang) })}</p>}
                      {item.href && <p className="mt-1 text-xs font-semibold text-primary">{t('statListViewHandsOn', lang)}</p>}
                    </>
                  )
                  return (
                    <li key={item.slug}>
                      {item.href ? (
                        <Link href={item.href} className="block rounded-xl border border-hub-violet-edge bg-tone-list p-3 transition hover:border-hub-violet hover:bg-hub-violet-tint">
                          {row}
                        </Link>
                      ) : (
                        <div className="rounded-xl border border-hub-violet-edge bg-tone-list p-3 opacity-70">{row}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
