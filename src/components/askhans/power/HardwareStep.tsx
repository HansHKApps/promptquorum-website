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
  /** audit only: also ask for the processor / chip */
  askCpu?: boolean
  save: boolean
  onSaveChange: (v: boolean) => void
}

// VRAM from the makers' spec pages (nvidia.com GeForce RTX 30/40 series pages, amd.com Radeon RX 7900 XTX page).
// The VRAM size is part of the label because some cards ship in more than one memory size.
const GPU_PRESETS = {
  nvidia: [
    { name: 'RTX 3060', vram: 12 },
    { name: 'RTX 4060', vram: 8 },
    { name: 'RTX 4060 Ti', vram: 16 },
    { name: 'RTX 4070', vram: 12 },
    { name: 'RTX 4080', vram: 16 },
    { name: 'RTX 3090', vram: 24 },
    { name: 'RTX 4090', vram: 24 },
  ],
  amd: [{ name: 'RX 7900 XTX', vram: 24 }],
} as const

export function HardwareStep({ tx, draft, onChange, allowNone, askCpu, save, onSaveChange }: Props) {
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
          {mac && <p className="-mt-2 text-[12px] leading-snug text-muted-foreground">{tx.hw.macNote}</p>}
          {(draft.gpu === 'nvidia' || draft.gpu === 'amd') && (
            <div role="group" aria-label={tx.hw.vram} className="flex flex-wrap gap-1.5">
              {GPU_PRESETS[draft.gpu].map((g) => (
                <button
                  key={g.name}
                  type="button"
                  onClick={() => set({ vram: String(g.vram), vramUnknown: false })}
                  className="rounded-full border border-border bg-white px-3 py-1.5 text-[13px] font-medium text-foreground hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {g.name} · {g.vram} GB
                </button>
              ))}
            </div>
          )}
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
          {askCpu && (
            <div>
              <label htmlFor="pm-cpu" className="mb-1 block text-[13px] font-semibold text-foreground">{tx.hw.cpu}</label>
              <input
                id="pm-cpu"
                type="text"
                value={draft.cpu}
                maxLength={60}
                placeholder={tx.hw.cpuPlaceholder}
                onChange={(e) => set({ cpu: e.target.value })}
                className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          )}
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
