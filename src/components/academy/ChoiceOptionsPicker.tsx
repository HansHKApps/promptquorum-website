'use client'

// PromptQuorum Academy — how many answer options a multiple-choice question has (3 to 6). More options make a test
// harder: with 3 a guess is right a third of the time, with 6 only one time in six, and the wrong answers have to be
// closer to the right one. Used on the setup screen (the default) and before each test (FormatPicker).

import { CHOICE_OPTION_COUNTS } from '@/lib/academy/config'
import type { AcademyLang } from '@/lib/academy/types'
import { shareCopyFor } from './copy/share'
import { Mark, press } from './press'

export function ChoiceOptionsPicker({ lang, value, onChange, name }: { lang: AcademyLang | string; value: number; onChange: (n: number) => void; name: string }) {
  const sx = shareCopyFor(lang)
  return (
    <fieldset>
      <legend className="font-medium text-gray-900">{sx.choiceLegend}</legend>
      <p className="text-sm text-gray-600">{sx.choiceHint}</p>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {CHOICE_OPTION_COUNTS.map((n) => (
          <label key={n} className="cursor-pointer" onPointerDown={press(() => onChange(n)).onPointerDown}>
            <input type="radio" name={name} value={n} checked={value === n} onChange={() => onChange(n)} className="peer sr-only" />
            <span className="flex h-full items-center gap-3 rounded-xl border border-gray-300 px-4 py-3 peer-checked:border-purple-600 peer-checked:bg-purple-50 peer-focus-visible:ring-2 peer-focus-visible:ring-purple-600">
              <Mark state={value === n ? 'selected' : 'idle'} />
              <span className="font-medium text-gray-900">{sx.choiceN(n)}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
