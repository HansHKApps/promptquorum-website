'use client'

import { ACADEMY_OPEN_EVENT } from '@/lib/academy/config'

/** Fires the open event for the global Academy window (see AcademyRoot). */
export function openAcademy(): void {
  window.dispatchEvent(new Event(ACADEMY_OPEN_EVENT))
}

/** Button on the /academy entrance page. */
export function OpenAcademyButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={openAcademy} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
      {label}
    </button>
  )
}
