// Renders a tool's hardware requirement for the viewer's selected machine type.
// Logic lives in ./hardware.ts (computeHardwareDisplay) — this is presentation only.

import { computeHardwareDisplay } from './hardware'
import type { MachineType } from './types'
import type { EngineKey, ToolRecordHardware } from '@/lib/power-local-llm/apps/types'

export function HardwareBlock({
  hardware,
  machine,
  engine,
  compact = false,
}: {
  hardware: ToolRecordHardware | null
  machine: MachineType
  engine?: EngineKey | 'TODO'
  compact?: boolean
}) {
  const display = computeHardwareDisplay(hardware, machine, engine)

  if (!display.known) {
    return null
  }

  if (compact) {
    return <span className="font-medium text-text-primary">{display.headline}</span>
  }

  return (
    <div>
      <p className="font-semibold text-text-primary">{display.headline}</p>
      {display.detail && <p className="text-xs text-text-secondary mt-0.5">{display.detail}</p>}
    </div>
  )
}
