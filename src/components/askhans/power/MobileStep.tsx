'use client'

// Power Mode — the phone step of the Mobile process: platform, optional model name, RAM, free storage.

import { NumberField, Pills } from './choices'
import { savedMobileRam } from './profile'
import type { PowerCopy } from './copy'
import type { MobileDraft } from './drafts'

interface Props {
  tx: PowerCopy
  draft: MobileDraft
  onChange: (d: MobileDraft) => void
  save: boolean
  onSaveChange: (v: boolean) => void
}

export function MobileStep({ tx, draft, onChange, save, onSaveChange }: Props) {
  const set = (patch: Partial<MobileDraft>) => onChange({ ...draft, ...patch })
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-1 text-[13px] font-semibold text-foreground">{tx.mobile.platform}</p>
        <Pills value={draft.platform} options={['ios', 'android'] as const} labels={{ ios: tx.mobile.ios, android: tx.mobile.android }} ariaLabel={tx.mobile.platform} onChange={(platform) => {
          // Pre-fill the RAM the visitor saved earlier in this browser (only if the field is still untouched).
          const ram = savedMobileRam(platform)
          set({ platform, ...(ram !== null && !draft.ram && !draft.ramUnknown ? { ram: String(ram) } : {}) })
        }} />
      </div>
      {draft.platform && (
        <>
          <div>
            <label htmlFor="pm-model" className="block text-[13px] font-semibold text-foreground">{tx.mobile.model}</label>
            <input
              id="pm-model"
              value={draft.model}
              maxLength={60}
              autoComplete="off"
              placeholder={tx.mobile.modelPlaceholder}
              onChange={(e) => set({ model: e.target.value })}
              className="mt-1 w-full max-w-xs rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <NumberField id="pm-mram" label={tx.mobile.ram} value={draft.ram} unknown={draft.ramUnknown} unknownLabel={tx.hw.unknown} unit={tx.hw.gb} onChange={(ram, ramUnknown) => set({ ram, ramUnknown })} />
          <NumberField id="pm-mstorage" label={tx.mobile.storage} value={draft.storage} unknown={draft.storageUnknown} unknownLabel={tx.hw.unknown} unit={tx.hw.gb} onChange={(storage, storageUnknown) => set({ storage, storageUnknown })} />
          <p className="text-[12px] leading-snug text-muted-foreground">{tx.mobile.help}</p>
          <label className="flex cursor-pointer items-start gap-2 rounded-md border border-border bg-muted px-3 py-2 text-[13px] text-foreground">
            <input type="checkbox" checked={save} onChange={(e) => onSaveChange(e.target.checked)} className="mt-0.5 h-4 w-4 flex-shrink-0 accent-primary" />
            <span>
              <span className="font-semibold">{tx.hw.saveLabel}</span>
              <span className="mt-0.5 block text-[12px] text-muted-foreground">{tx.hw.saveHint}</span>
            </span>
          </label>
        </>
      )}
    </div>
  )
}
