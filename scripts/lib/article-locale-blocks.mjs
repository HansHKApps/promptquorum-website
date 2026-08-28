/**
 * Locate the top-level locale blocks of an article source file.
 *
 * Indentation cannot be trusted: the same file can put `en:` at four spaces and `de:` at
 * two, and locale keys also occur nested (`quickAnswerTop: { en: … }`). Only structural
 * brace depth separates a real locale block from a nested one, so this walks the source
 * once, tracking depth while skipping string and comment content.
 */

/** Brace depth at every offset, with string and comment content marked as depth -1. */
function depthMap(src) {
  const depth = new Int16Array(src.length)
  let d = 0
  for (let i = 0; i < src.length; i++) {
    const c = src[i]

    if (c === '/' && src[i + 1] === '/') {
      const end = src.indexOf('\n', i)
      const stop = end === -1 ? src.length : end
      depth.fill(-1, i, stop)
      i = stop - 1
      continue
    }
    if (c === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2)
      const stop = end === -1 ? src.length : end + 2
      depth.fill(-1, i, stop)
      i = stop - 1
      continue
    }
    if (c === "'" || c === '"' || c === '`') {
      const q = c
      let j = i + 1
      for (; j < src.length; j++) {
        if (src[j] === '\\') { j++; continue }
        if (src[j] === q) break
      }
      depth.fill(-1, i, Math.min(j + 1, src.length))
      i = j
      continue
    }

    if (c === '{') { depth[i] = d; d++; continue }
    if (c === '}') { d--; depth[i] = d; continue }
    depth[i] = d
  }
  return depth
}

/**
 * @returns {{loc: string, start: number, end: number}[]} one entry per locale block,
 * in source order, each spanning up to the start of the next block.
 */
export function localeBlocks(src, locales) {
  const objStart = src.search(/=\s*\{/)
  if (objStart === -1) return []

  const depth = depthMap(src)
  const objDepth = depth[src.indexOf('{', objStart)]

  const marks = []
  const re = new RegExp(`\\n\\s*(${locales.join('|')}): \\{`, 'g')
  for (const m of src.matchAll(re)) {
    const at = m.index + m[0].indexOf(m[1])
    // Keys of the exported object sit one level inside its opening brace.
    if (depth[at] === objDepth + 1) marks.push({ loc: m[1], i: m.index })
  }

  marks.sort((a, b) => a.i - b.i)
  return marks.map((m, n) => ({
    loc: m.loc,
    start: m.i,
    end: n + 1 < marks.length ? marks[n + 1].i : src.length,
  }))
}
