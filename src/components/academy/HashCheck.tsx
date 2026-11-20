'use client'

// Verification page: the reader selects a Course Documentation PDF; the browser hashes it locally (SHA-256 of the file
// bytes) and compares it with the registered fingerprint. The file never leaves the browser.

import { useState } from 'react'
import { sha256Hex } from '@/lib/academy/hash'

export function HashCheck({ expected, labels }: { expected: string; labels: { title: string; hint: string; match: string; noMatch: string; choose: string } }) {
  const [result, setResult] = useState<'match' | 'nomatch' | null>(null)
  return (
    <section className="mt-8 rounded-2xl border border-gray-200 p-5">
      <h2 className="font-semibold text-gray-900">{labels.title}</h2>
      <p className="mt-1 text-sm text-gray-600">{labels.hint}</p>
      <label className="mt-3 inline-block cursor-pointer rounded-xl border border-purple-600 px-4 py-2 font-medium text-purple-700 hover:bg-purple-50">
        {labels.choose}
        <input
          type="file"
          accept="application/pdf"
          className="sr-only"
          onChange={async (e) => {
            const f = e.target.files?.[0]
            if (!f) return
            setResult((await sha256Hex(await f.arrayBuffer())) === expected ? 'match' : 'nomatch')
          }}
        />
      </label>
      <p className="mt-3 font-medium" role="status">
        {result === 'match' && <span className="text-green-800">{labels.match}</span>}
        {result === 'nomatch' && <span className="text-red-800">{labels.noMatch}</span>}
      </p>
    </section>
  )
}
