'use client'

// PromptQuorum Academy — format picker. Shown when a lesson quiz or the final test opens, before any question is
// generated. The learner's default from the setup screen is preselected; they can choose another format for this
// test. Choosing starts the test (the questions are generated for that format only).

import { useState } from 'react'
import { TEST_FORMATS, type Programme, type TestFormat } from '@/lib/academy/types'
import type { AcademyCopy } from './copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']

export function FormatPicker({ tx, programme, update, title }: { tx: AcademyCopy; programme: Programme; update: Update; title: string }) {
  const [format, setFormat] = useState<TestFormat>(programme.testFormat ?? 'choice')
  const start = () =>
    update((s) =>
      s.programme?.progress.activeQuiz ? { ...s, programme: { ...s.programme, progress: { ...s.programme.progress, activeQuiz: { ...s.programme.progress.activeQuiz, format } } } } : s,
    )
  const back = () => update((s) => ({ ...s, view: 'programme', programme: s.programme ? { ...s.programme, progress: { ...s.programme.progress, activeQuiz: undefined } } : s.programme }))
  return (
    <section aria-labelledby="academy-format" className="space-y-4 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      <div>
        <h2 id="academy-format" className="text-xl font-semibold text-gray-900">
          {title}
        </h2>
        <p className="mt-1 font-medium text-gray-900">{tx.formatPickerTitle}</p>
        <p className="text-sm text-gray-600">{tx.formatPickerHint}</p>
      </div>
      <fieldset>
        <legend className="sr-only">{tx.testFormatLegend}</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {TEST_FORMATS.map((f) => (
            <label key={f} className="cursor-pointer">
              <input type="radio" name="academy-format" value={f} checked={format === f} onChange={() => setFormat(f)} className="peer sr-only" />
              <span className="block h-full rounded-xl border border-gray-300 px-4 py-3 peer-checked:border-purple-600 peer-checked:bg-purple-50 peer-focus-visible:ring-2 peer-focus-visible:ring-purple-600">
                <span className="block font-medium text-gray-900">{tx.testFormats[f].label}</span>
                <span className="block text-sm text-gray-600">{tx.testFormats[f].hint}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-wrap items-center gap-4">
        <button type="button" onClick={start} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
          {tx.startTest}
        </button>
        <button type="button" onClick={back} className="text-sm text-purple-700 underline underline-offset-2">
          {tx.backToProgramme}
        </button>
      </div>
    </section>
  )
}
