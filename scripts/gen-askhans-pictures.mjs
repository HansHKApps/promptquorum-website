// Generates the 21 placeholder pictures for Ask Hans: public/askhans/<key>.svg
// Portrait 3:4 (viewBox 600x800), flat tinted background, one large centred line icon, no text.
// Colours are read from src/app/globals.css (--hero-from tint, --primary) so they track the brand.
// Run: node scripts/gen-askhans-pictures.mjs
import fs from 'node:fs'
import { createRequire } from 'node:module'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const require = createRequire(import.meta.url)
const lucide = require('lucide-react')

const css = fs.readFileSync('src/app/globals.css', 'utf8')
const hslVar = (name) => {
  const m = css.match(new RegExp(`--${name}:\\s*([\\d.]+)\\s+([\\d.]+)%\\s+([\\d.]+)%`))
  if (!m) throw new Error(`--${name} not found in globals.css`)
  return [Number(m[1]), Number(m[2]), Number(m[3])]
}
const hex = ([h, s, l]) => {
  s /= 100
  l /= 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return '#' + [f(0), f(8), f(4)].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('')
}

const bg = hex(hslVar('hero-from'))
const stroke = hex(hslVar('primary'))

const { categories } = JSON.parse(fs.readFileSync('src/lib/askhans/categories.json', 'utf8'))
fs.mkdirSync('public/askhans', { recursive: true })

const SIZE = 320
for (const c of categories) {
  const Icon = lucide[c.icon]
  if (!Icon) throw new Error(`lucide icon ${c.icon} missing for ${c.key}`)
  const inner = renderToStaticMarkup(
    React.createElement(Icon, { width: SIZE, height: SIZE, strokeWidth: 1.25, color: stroke, absoluteStrokeWidth: false }),
  )
  const body = inner.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '')
  const x = (600 - SIZE) / 2
  const y = (800 - SIZE) / 2
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800" role="img" aria-label="${c.label_de.replace(/&/g, '&amp;')}">` +
    `<rect width="600" height="800" fill="${bg}"/>` +
    `<g transform="translate(${x} ${y}) scale(${SIZE / 24})" fill="none" stroke="${stroke}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">${body}</g>` +
    `</svg>\n`
  fs.writeFileSync(`public/askhans/${c.key}.svg`, svg)
}
console.log(`wrote ${categories.length} pictures (bg ${bg}, stroke ${stroke})`)
