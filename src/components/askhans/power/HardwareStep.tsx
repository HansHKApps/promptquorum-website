'use client'

// Power Mode — the shared hardware step (MAX, Hardware Selector, Solution Setup). Every field has an
// "I don't know" way out, plus a hint where to find the number. The visitor may also pre-fill from the
// hardware saved by the website's hardware tool (this browser's localStorage) and may opt in to saving.

import { useState } from 'react'
import { DEVICE_KINDS, type GpuKind } from '@/lib/askhans/solutions/types'
import { NumberField, Pills } from './choices'
import type { PowerCopy } from './copy'
import type { HardwareDraft } from './drafts'
import { savedHardware } from './profile'

interface Props {
  tx: PowerCopy
  draft: HardwareDraft
  onChange: (d: HardwareDraft) => void
  allowNone: boolean
  save: boolean
  onSaveChange: (v: boolean) => void
}

export function HardwareStep({ tx, draft, onChange, allowNone, save, onSaveChange }: Props) {
  const [saved] = useState(() => (typeof window === 'undefined' ? null : savedHardware()))
  const set = (patch: Partial<HardwareDraft>) => onChange({ ...draft, ...patch })
  const devices = DEVICE_KINDS.filter((d) => allowNone || d !== 'none')
  const mac = draft.device === 'mac'
  const none = draft.device === 'none'
  const gpuOptions: GpuKind[] = ['nvidia', 'amd', 'integrated', 'none', 'unknown']

  return (
    <div className="space-y-4">
      {saved && (
        <button
          type="button"
          onClick={() =>
            set({
              device: saved.device ?? draft.device,
              os: saved.os === 'unknown' ? draft.os : saved.os,
              gpu: saved.gpu,
              ram: String(saved.ramGb),
              ramUnknown: false,
              vram: saved.vramGb === null ? '' : String(saved.vramGb),
              vramUnknown: false,
            })
          }
          className="rounded-lg border border-primary px-3 py-1.5 text-[13px] font-semibold text-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          {tx.hw.useSaved}
        </button>
      )}

      <div>
        <p className="mb-1 text-[13px] font-semibold text-foreground">{tx.hw.device}</p>
        <Pills value={draft.device} options={devices} labels={tx.hw.devices} ariaLabel={tx.hw.device} onChange={(device) => set({ device })} />
      </div>

      {draft.device && !none && (
        <>
          {!mac && (
            <>
              <div>
                <p className="mb-1 text-[13px] font-semibold text-foreground">{tx.hw.os}</p>
                <Pills value={draft.os} options={['win', 'mac', 'linux', 'unknown'] as const} labels={tx.hw.oses} ariaLabel={tx.hw.os} onChange={(os) => set({ os })} />
              </div>
              <div>
                <p className="mb-1 text-[13px] font-semibold text-foreground">{tx.hw.gpu}</p>
                <Pills value={draft.gpu} options={gpuOptions} labels={tx.hw.gpus} ariaLabel={tx.hw.gpu} onChange={(gpu) => set({ gpu })} />
              </div>
            </>
          )}
          <NumberField
            id="pm-ram"
            label={mac ? tx.hw.ramApple : tx.hw.ram}
            value={draft.ram}
            unknown={draft.ramUnknown}
            unknownLabel={tx.hw.unknown}
            unit={tx.hw.gb}
            onChange={(ram, ramUnknown) => set({ ram, ramUnknown })}
          />
          {(draft.gpu === 'nvidia' || draft.gpu === 'amd') && (
            <NumberField
              id="pm-vram"
              label={tx.hw.vram}
              value={draft.vram}
              unknown={draft.vramUnknown}
              unknownLabel={tx.hw.unknown}
              unit={tx.hw.gb}
              onChange={(vram, vramUnknown) => set({ vram, vramUnknown })}
            />
          )}
          <NumberField
            id="pm-storage"
            label={`${tx.hw.storage} (${tx.wizard.optional})`}
            value={draft.storage}
            unknown={draft.storageUnknown}
            unknownLabel={tx.hw.unknown}
            unit={tx.hw.gb}
            onChange={(storage, storageUnknown) => set({ storage, storageUnknown })}
          />
          <p className="text-[12px] leading-snug text-muted-foreground">{tx.hw.help}</p>
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
