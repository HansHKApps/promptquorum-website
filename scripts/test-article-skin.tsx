// Same-DOM guard for the article hub skin.
// Renders real articles with designSkin off and on and requires the HTML to be
// identical once `class` attributes are removed — i.e. the skin changes colours
// only, never tags, text, order, ids or headings. Also checks that the speakable
// hooks survive and that the default skin carries no hub tokens.
// Run: npx tsx scripts/test-article-skin.tsx
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { PowerLocalLLMPostClient } from '../src/components/PowerLocalLLMPostClient'
import { ARTICLES } from './_skin-articles'

const strip = (h: string) => h.replace(/\sclass="[^"]*"/g, '')
let failed = 0
const fail = (m: string) => { failed++; console.error('FAIL ' + m) }

for (const [slug, data] of Object.entries(ARTICLES)) {
  for (const lang of Object.keys(data)) {
    const base = (data as any)[lang]
    const mk = (skin?: 'hub') =>
      renderToStaticMarkup(
        <PowerLocalLLMPostClient
          slug={slug}
          lang={lang as any}
          articleData={{ [lang]: skin ? { ...base, designSkin: skin } : base } as any}
          availableLangs={Object.keys(data)}
        />,
      )
    const off = mk()
    const on = mk('hub')
    if (strip(off) !== strip(on)) fail(`${slug}/${lang}: DOM differs beyond class attributes`)
    if (/hub-/.test(off)) fail(`${slug}/${lang}: default skin leaks hub tokens`)
    if (!/hub-violet/.test(on)) fail(`${slug}/${lang}: hub skin applied no hub tokens`)
    for (const hook of ['article-intro', 'key-takeaways']) {
      const had = off.includes(hook)
      if (had && !on.includes(hook)) fail(`${slug}/${lang}: lost hook .${hook}`)
    }
    const h = (s: string) => (s.match(/<h[12][\s>]/g) ?? []).length
    if (h(off) !== h(on)) fail(`${slug}/${lang}: heading count changed`)
  }
}
if (failed) { console.error(`${failed} failure(s)`); process.exit(1) }
console.log('article skin: same DOM, hooks intact, default clean')
