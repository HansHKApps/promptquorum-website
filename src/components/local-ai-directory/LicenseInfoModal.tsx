'use client'

// Small popup shown when a directory visitor clicks a License badge — the
// core rule for that license family plus a link to the full taxonomy
// article (power-local-llm/ai-tool-licenses-explained), opened in a new
// tab. Built on Radix Dialog, same primitive ToolDrawer.tsx already uses
// in this component tree, but sized as a centered popup rather than a
// slide-in panel — this is a quick lookup, not a detail view.

import * as Dialog from '@radix-ui/react-dialog'
import type { Language } from '@/lib/blog/blogContent'
import { matchLicenseFamilies } from '@/lib/power-local-llm/license-taxonomy'
import { CloseIcon } from './icons'
import { t } from './directory-i18n'

const LICENSE_ARTICLE_HREF = '/power-local-llm/ai-tool-licenses-explained'

export function LicenseInfoModal({
  license,
  lang,
  onClose,
}: {
  license: string | null
  lang: Language
  onClose: () => void
}) {
  const open = license != null
  const families = license ? matchLicenseFamilies(license) : []

  return (
    <Dialog.Root open={open} onOpenChange={(next) => { if (!next) onClose() }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[51] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-xl focus:outline-none
            data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in
            data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out"
        >
          {license && (
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <Dialog.Title className="text-base font-bold text-text-primary">
                  {families.length === 1 ? families[0].name[lang] ?? families[0].name.en : families.length > 1 ? t('licenseModalMultiple', lang) : license}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button type="button" aria-label={t('closeAriaLabel', lang)} className="rounded-full p-1.5 text-text-secondary hover:bg-gray-100 shrink-0">
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Description asChild>
                <div className="text-sm text-text-secondary space-y-3">
                  {families.length === 0 && <p>{license}</p>}

                  {families.length === 1 && <p className="leading-relaxed">{families[0].summary[lang] ?? families[0].summary.en}</p>}

                  {families.length > 1 && (
                    <>
                      <p>{t('licenseModalMultipleNote', lang)}</p>
                      <ul className="space-y-2">
                        {families.map((f) => (
                          <li key={f.key} className="rounded-lg border border-primary/10 bg-primary/[0.03] p-2.5">
                            <span className="block text-xs font-bold text-text-primary mb-0.5">{f.name[lang] ?? f.name.en}</span>
                            <span className="text-xs leading-relaxed">{f.summary[lang] ?? f.summary.en}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {families.length > 0 && (
                    <p className="text-xs text-text-secondary/70">
                      {t('licenseModalRawLabel', lang)} <span className="font-mono">{license}</span>
                    </p>
                  )}
                </div>
              </Dialog.Description>

              <a
                href={LICENSE_ARTICLE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center rounded-lg border border-primary bg-primary px-3 py-2 text-sm font-bold text-white hover:bg-primary/90"
              >
                {t('licenseModalReadGuide', lang)}
              </a>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
