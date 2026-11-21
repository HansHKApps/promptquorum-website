// PromptQuorum Academy — shown while a lesson or program is being written (up to about a minute). Says why it takes a
// moment and what makes it worth it: the content is individual, grounded in PromptQuorum guides, free. Written in the
// program language. Nothing here is a claim about results, only about how the content is made.

import { htmlLangOf, langDirOf } from '@/lib/academy/language'
import { shareCopyFor } from './copy/share'

export function WaitNote({ language }: { language: string }) {
  const sx = shareCopyFor(language)
  return (
    <div lang={htmlLangOf(language)} dir={langDirOf(language)} className="space-y-2 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 p-4 text-sm text-purple-950">
      <p className="text-base font-semibold text-purple-900">
        <span aria-hidden="true">✨ </span>
        {sx.waitHeading}
      </p>
      <p>{sx.waitBody}</p>
      <ul className="space-y-1">
        {sx.waitPoints.map((p) => (
          <li key={p} className="flex gap-2">
            <span aria-hidden="true" className="text-purple-600">✓</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
