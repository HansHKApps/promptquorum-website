'use client'

// Power Mode — option buttons for single- and multi-choice steps (large touch targets, keyboard friendly).

interface Props {
  /** option ids in display order */
  options: readonly string[]
  labels: Record<string, string>
  selected: readonly string[]
  multi: boolean
  onChange: (next: string[]) => void
  ariaLabel: string
}

export function ChoiceGroup({ options, labels, selected, multi, onChange, ariaLabel }: Props) {
  const toggle = (id: string) => {
    if (!multi) return onChange([id])
    onChange(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id])
  }
  return (
    <div role={multi ? 'group' : 'radiogroup'} aria-label={ariaLabel} className="grid gap-2 sm:grid-cols-2">
      {options.map((id) => {
        const on = selected.includes(id)
        return (
          <button
            key={id}
            type="button"
            role={multi ? 'checkbox' : 'radio'}
            aria-checked={on}
            onClick={() => toggle(id)}
            className={`rounded-lg border px-3 py-2.5 text-start text-[14px] font-medium leading-snug transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
              on ? 'border-primary bg-secondary text-primary ring-1 ring-primary' : 'border-border bg-white text-foreground hover:border-primary'
            }`}
          >
            {labels[id] ?? id}
          </button>
        )
      })}
    </div>
  )
}

/** Small labelled pill row used inside the hardware/mobile forms. */
export function Pills<T extends string>({ value, options, labels, onChange, ariaLabel }: { value: T | undefined; options: readonly T[]; labels: Record<T, string>; onChange: (v: T) => void; ariaLabel: string }) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={value === o}
          onClick={() => onChange(o)}
          className={`rounded-full border px-3 py-1.5 text-[13px] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
            value === o ? 'border-primary bg-secondary text-primary ring-1 ring-primary' : 'border-border bg-white text-foreground hover:border-primary'
          }`}
        >
          {labels[o]}
        </button>
      ))}
    </div>
  )
}

/** A number field with an "I don't know" switch. `value` is the raw text, `unknown` the switch state. */
export function NumberField({
  id,
  label,
  value,
  unknown,
  unknownLabel,
  unit,
  onChange,
}: {
  id: string
  label: string
  value: string
  unknown: boolean
  unknownLabel: string
  unit: string
  onChange: (value: string, unknown: boolean) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold text-foreground">{label}</label>
      <div className="mt-1 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5">
          <input
            id={id}
            inputMode="decimal"
            autoComplete="off"
            value={unknown ? '' : value}
            disabled={unknown}
            maxLength={6}
            onChange={(e) => onChange(e.target.value.replace(/[^\d.,]/g, ''), false)}
            className="w-24 rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-muted"
          />
          <span className="text-[13px] text-muted-foreground">{unit}</span>
        </div>
        <label className="flex cursor-pointer items-center gap-1.5 text-[13px] text-foreground">
          <input type="checkbox" checked={unknown} onChange={(e) => onChange('', e.target.checked)} className="h-4 w-4 accent-primary" />
          {unknownLabel}
        </label>
      </div>
    </div>
  )
}
