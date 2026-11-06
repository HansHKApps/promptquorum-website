// Primary-source fetchers for the local-LLM catalog (data/local-llm-catalog.json).
// Shared by scripts/catalog-seed.mjs (build a draft entry) and
// scripts/catalog-detect.mjs (weekly drift report). Network only; no writes.
//
// Sources, in order of trust:
//   1. Ollama registry manifest  (registry.ollama.ai/v2/library/<family>/manifests/<tag>)
//        -> exact model-layer bytes, quantization (config.file_type), parameter count (config.model_type)
//   2. Ollama library pages      (ollama.com/library, /library/<family>/tags)
//        -> popularity order, capability badges (tools / vision / thinking / audio / embedding),
//           tag list, context window per tag
//   3. Hugging Face API          (huggingface.co/api/models/<repo>?blobs=true, /<repo>/raw/main/config.json)
//        -> GGUF file sizes for non-Ollama runtimes, architecture config for KV-cache math
//
// Nothing here is recalled from memory: every value is read from the response.

const UA = 'promptquorum-catalog-bot/1.0 (+https://www.promptquorum.com)'
const TIMEOUT_MS = 25000

// Retry transient failures (network reset, timeout, 5xx/429). 4xx other than 429 fail immediately.
async function withRetry(fn, attempts = 3) {
  let last
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (e) {
      last = e
      const permanent = e.status && e.status < 500 && e.status !== 429
      if (permanent || i === attempts - 1) break
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)))
    }
  }
  throw last
}

async function get(url, { headers = {}, as = 'text' } = {}) {
  return withRetry(async () => {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, ...headers },
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
    if (!res.ok) {
      const err = new Error(`HTTP ${res.status} for ${url}`)
      err.status = res.status
      throw err
    }
    return as === 'json' ? res.json() : res.text()
  })
}

const stripTags = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()

/** Parse "27b" / "e4b" / "270m" / "1.5b" badge text to billions (null if not a size). */
export function badgeToBillions(badge) {
  const m = /^e?(\d+(?:\.\d+)?)([bm])$/i.exec(badge.trim())
  if (!m) return null
  const n = parseFloat(m[1])
  return m[2].toLowerCase() === 'b' ? n : n / 1000
}

const CAPABILITY_BADGES = new Set(['tools', 'vision', 'thinking', 'audio', 'embedding', 'cloud'])

/**
 * Ollama library listing in popularity order.
 * Returns [{ family, rank, capabilities[], sizes[] }]. rank is 1-based position
 * in the page order (sort=popular). Pull counts are not exposed reliably in the
 * markup, so rank is the popularity signal we record, not a pull number.
 */
export async function fetchOllamaPopular() {
  const html = await get('https://ollama.com/library?sort=popular')
  const items = html.split('<li  class="flex items-baseline').slice(1)
  const out = []
  for (const [i, it] of items.entries()) {
    const family = /href="\/library\/([^"]+)"/.exec(it)?.[1]
    if (!family) continue
    const badges = [...it.matchAll(/sm:text-\[13px\]">([^<]+)<\/span>/g)].map((m) => m[1].trim().toLowerCase())
    out.push({
      family,
      rank: i + 1,
      capabilities: badges.filter((b) => CAPABILITY_BADGES.has(b)),
      sizes: badges.filter((b) => !CAPABILITY_BADGES.has(b)),
    })
  }
  return out
}

/**
 * Tags of one Ollama family from the /tags page.
 * Returns [{ tag, ctxTokens|null, input: 'Text'|'Image'|..., displayGb|null }].
 * displayGb is Ollama's rounded display value; use fetchOllamaManifest for exact bytes.
 */
export async function fetchOllamaTags(family) {
  const html = await get(`https://ollama.com/library/${family}/tags`)
  const text = stripTags(html)
  const tags = [...new Set([...html.matchAll(new RegExp(`href="/library/(${family.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:[^"]+)"`, 'g'))].map((m) => m[1]))]
  return tags.map((full) => {
    const tag = full.split(':')[1]
    // Row text looks like: "<family>:<tag> <digest> • 14GB • 128K context window • Text input • ..."
    const re = new RegExp(`${full.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+(?:latest\\s+)?[0-9a-f]{12}\\s*•\\s*([^•]+?)\\s*•\\s*([^•]+?)\\s*context window\\s*•\\s*([^•]+?) input`, 'i')
    const m = re.exec(text)
    let displayGb = null
    if (m && /GB$/i.test(m[1].trim())) displayGb = parseFloat(m[1])
    return {
      tag,
      displayGb,
      ctxTokens: m ? parseCtx(m[2]) : null,
      input: m ? m[3].trim() : null,
    }
  })
}

function parseCtx(s) {
  const m = /^([\d.]+)\s*([KM])$/i.exec(s.trim())
  if (!m) return null
  return Math.round(parseFloat(m[1]) * (m[2].toUpperCase() === 'M' ? 1024 * 1024 : 1024))
}

/**
 * Exact manifest facts for one Ollama tag from the registry API.
 * { bytes, gib, quant, paramsB, family, digest, url }
 */
export async function fetchOllamaManifest(family, tag) {
  const base = `https://registry.ollama.ai/v2/library/${family}`
  const manifest = await get(`${base}/manifests/${tag}`, {
    headers: { Accept: 'application/vnd.docker.distribution.manifest.v2+json' },
    as: 'json',
  })
  const modelLayers = manifest.layers.filter((l) => l.mediaType.endsWith('.model'))
  // Vision models ship a separate projector layer; it is loaded too, so count it.
  const projector = manifest.layers.filter((l) => l.mediaType.endsWith('.projector'))
  const bytes = [...modelLayers, ...projector].reduce((s, l) => s + l.size, 0)
  const cfg = await get(`${base}/blobs/${manifest.config.digest}`, { as: 'json' })
  const paramsB = cfg.model_type ? parseParams(cfg.model_type) : null
  return {
    bytes,
    gib: bytes / 2 ** 30,
    quant: cfg.file_type ?? null,
    paramsB,
    modelFamily: cfg.model_family ?? null,
    // Newer models ship a built-in renderer/parser instead of a chat template layer.
    renderer: cfg.renderer ?? null,
    projectorBytes: projector.reduce((s, l) => s + l.size, 0),
    digest: manifest.config.digest,
    url: `https://ollama.com/library/${family}:${tag}`,
  }
}

function parseParams(s) {
  const m = /^([\d.]+)\s*([BMK])$/i.exec(s.trim())
  if (!m) return null
  const n = parseFloat(m[1])
  const u = m[2].toUpperCase()
  const b = u === 'B' ? n : u === 'M' ? n / 1000 : n / 1e6
  return Math.round(b * 1000) / 1000
}

/**
 * Per-tag capabilities the way Ollama itself derives them: from the chat
 * template shipped in the manifest. `tools` = template renders .Tools,
 * `thinking` = template handles .Thinking / .ThinkLevel / .IsThinkSet.
 * (Family-level badges on the library page are only a cross-check.)
 */
export async function fetchOllamaTemplateCaps(family, tag) {
  const manifest = await get(`https://registry.ollama.ai/v2/library/${family}/manifests/${tag}`, {
    headers: { Accept: 'application/vnd.docker.distribution.manifest.v2+json' },
    as: 'json',
  })
  const layer = manifest.layers.find((l) => l.mediaType.endsWith('.template'))
  if (!layer) return { tools: false, thinking: false, hasTemplate: false }
  const text = await get(`https://registry.ollama.ai/v2/library/${family}/blobs/${layer.digest}`)
  return {
    tools: /\.Tools\b/.test(text),
    thinking: /\.Thinking\b|\.ThinkLevel\b|\.IsThinkSet\b/.test(text),
    hasTemplate: true,
  }
}

/** Hugging Face model repo: GGUF file list with real byte sizes. */
export async function fetchHfGguf(repo) {
  const d = await get(`https://huggingface.co/api/models/${repo}?blobs=true`, { as: 'json' })
  return {
    repo,
    downloads: d.downloads ?? null,
    lastModified: d.lastModified ?? null,
    files: (d.siblings ?? [])
      .filter((s) => s.rfilename.endsWith('.gguf'))
      .map((s) => ({ file: s.rfilename, bytes: s.size ?? 0 })),
    url: `https://huggingface.co/${repo}`,
  }
}

// ---------------------------------------------------------------------------
// GGUF header (architecture) — read from the exact file Ollama serves
// ---------------------------------------------------------------------------

const GGUF_HEAD_BYTES = 8 * 1024 * 1024

/**
 * Parse GGUF v2/v3 key/value metadata from the first bytes of a file.
 * Keeps scalars and short numeric arrays; skips long arrays (tokenizer tables).
 * Stops cleanly if the buffer ends mid-metadata and returns what it has read.
 */
export function parseGgufMetadata(buf) {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength)
  const td = new TextDecoder()
  if (td.decode(buf.subarray(0, 4)) !== 'GGUF') throw new Error('not a GGUF file')
  const version = dv.getUint32(4, true)
  if (version < 2) throw new Error(`unsupported GGUF version ${version}`)
  const kvCount = Number(dv.getBigUint64(16, true))
  let o = 24
  const meta = {}

  const readStr = () => {
    const len = Number(dv.getBigUint64(o, true))
    o += 8
    const s = td.decode(buf.subarray(o, o + len))
    o += len
    if (o > buf.byteLength) throw new RangeError('buffer end')
    return s
  }
  const SIZES = { 0: 1, 1: 1, 2: 2, 3: 2, 4: 4, 5: 4, 6: 4, 7: 1, 10: 8, 11: 8, 12: 8 }
  const readScalar = (t) => {
    let v
    switch (t) {
      case 0: v = dv.getUint8(o); break
      case 1: v = dv.getInt8(o); break
      case 2: v = dv.getUint16(o, true); break
      case 3: v = dv.getInt16(o, true); break
      case 4: v = dv.getUint32(o, true); break
      case 5: v = dv.getInt32(o, true); break
      case 6: v = dv.getFloat32(o, true); break
      case 7: v = dv.getUint8(o) !== 0; break
      case 10: v = Number(dv.getBigUint64(o, true)); break
      case 11: v = Number(dv.getBigInt64(o, true)); break
      case 12: v = dv.getFloat64(o, true); break
      default: throw new Error(`unknown GGUF type ${t}`)
    }
    o += SIZES[t]
    if (o > buf.byteLength) throw new RangeError('buffer end')
    return v
  }

  try {
    for (let i = 0; i < kvCount; i++) {
      const key = readStr()
      const t = dv.getUint32(o, true)
      o += 4
      if (t === 8) meta[key] = readStr()
      else if (t === 9) {
        const et = dv.getUint32(o, true)
        const n = Number(dv.getBigUint64(o + 4, true))
        o += 12
        const keep = et !== 8 && n <= 512
        const arr = []
        for (let j = 0; j < n; j++) {
          const v = et === 8 ? readStr() : readScalar(et)
          if (keep) arr.push(v)
        }
        if (keep) meta[key] = arr
      } else meta[key] = readScalar(t)
    }
  } catch (e) {
    if (!(e instanceof RangeError)) throw e
    meta.__truncated = true
  }
  return meta
}

/**
 * Architecture facts for one Ollama tag from its GGUF header.
 * Returns { arch, layers, contextLength, kvHeads, keyLength, valueLength,
 *           expertCount, expertUsedCount, slidingWindow, truncated }.
 * kvHeads is a number, or a per-layer array for hybrid models.
 */
export async function fetchOllamaGgufArch(family, modelDigest) {
  const bytes = await withRetry(async () => {
    const res = await fetch(`https://registry.ollama.ai/v2/library/${family}/blobs/${modelDigest}`, {
      headers: { 'User-Agent': UA, Range: `bytes=0-${GGUF_HEAD_BYTES - 1}` },
      redirect: 'follow',
      signal: AbortSignal.timeout(60000),
    })
    if (!res.ok && res.status !== 206) {
      const err = new Error(`HTTP ${res.status} reading GGUF header for ${family}`)
      err.status = res.status
      throw err
    }
    return new Uint8Array(await res.arrayBuffer())
  })
  const meta = parseGgufMetadata(bytes)
  const arch = meta['general.architecture']
  const k = (name) => meta[`${arch}.${name}`]
  const heads = k('attention.head_count')
  const headsFirst = Array.isArray(heads) ? heads[0] : heads
  const embd = k('embedding_length')
  const keyLength = k('attention.key_length') ?? (embd && headsFirst ? embd / headsFirst : null)
  const valueLength = k('attention.value_length') ?? keyLength
  return {
    arch,
    layers: k('block_count') ?? null,
    contextLength: k('context_length') ?? null,
    kvHeads: k('attention.head_count_kv') ?? heads ?? null,
    keyLength,
    valueLength,
    keyLengthSwa: k('attention.key_length_swa') ?? null,
    valueLengthSwa: k('attention.value_length_swa') ?? null,
    expertCount: k('expert_count') ?? null,
    expertUsedCount: k('expert_used_count') ?? null,
    slidingWindow: k('attention.sliding_window') ?? null,
    slidingWindowPattern: k('attention.sliding_window_pattern') ?? null,
    // Hybrid models (attention + SSM/linear layers): only every Nth layer keeps a KV cache.
    fullAttentionInterval: k('full_attention_interval') ?? null,
    truncated: meta.__truncated === true,
  }
}

/**
 * Turn the GGUF attention facts into KV "layer groups" the fit engine can price exactly:
 *   { layers, kv_heads, key_length, value_length, window_tokens|null }
 * window_tokens = sliding-window size (tokens cached cap) or null for full attention.
 * Returns { groups, exactness, exactness_note }:
 *   'modeled'      - the header fully describes which layers cache what
 *   'upper-bound'  - header gives a window size but not which layers use it, so full attention is assumed
 */
export function buildKvGroups(a) {
  const L = a.layers
  const heads = a.kvHeads
  const perLayer = Array.isArray(heads)
  const headsAt = (i) => (perLayer ? heads[i] : heads)

  // Gemma-style: per-layer sliding pattern (true = sliding-window layer).
  if (Array.isArray(a.slidingWindowPattern) && a.slidingWindowPattern.length === L && a.slidingWindow) {
    const slidingIdx = [], globalIdx = []
    a.slidingWindowPattern.forEach((isSliding, i) => (isSliding ? slidingIdx : globalIdx).push(i))
    const uniform = (idxs) => new Set(idxs.map(headsAt)).size <= 1
    if (!uniform(slidingIdx) || !uniform(globalIdx)) throw new Error('non-uniform kv heads within a sliding/global group')
    const groups = []
    if (slidingIdx.length) {
      groups.push({
        layers: slidingIdx.length,
        kv_heads: headsAt(slidingIdx[0]),
        key_length: a.keyLengthSwa ?? a.keyLength,
        value_length: a.valueLengthSwa ?? a.valueLength,
        window_tokens: a.slidingWindow,
      })
    }
    if (globalIdx.length) {
      groups.push({
        layers: globalIdx.length,
        kv_heads: headsAt(globalIdx[0]),
        key_length: a.keyLength,
        value_length: a.valueLength,
        window_tokens: null,
      })
    }
    return { groups, exactness: 'modeled', exactness_note: 'sliding-window layers capped at the window; global layers cache full context' }
  }

  // Hybrid attention + SSM: only layers where (i+1) % interval === 0 are attention layers.
  if (a.fullAttentionInterval) {
    const n = Math.floor(L / a.fullAttentionInterval)
    return {
      groups: [{ layers: n, kv_heads: perLayer ? Math.max(...heads) : heads, key_length: a.keyLength, value_length: a.valueLength, window_tokens: null }],
      exactness: 'modeled',
      exactness_note: `attention KV on 1 of every ${a.fullAttentionInterval} layers; constant-size SSM state not modeled (covered by the flat runtime overhead)`,
    }
  }

  // Plain attention. Group identical per-layer head counts.
  const counts = new Map()
  for (let i = 0; i < L; i++) counts.set(headsAt(i), (counts.get(headsAt(i)) ?? 0) + 1)
  const groups = [...counts].filter(([h]) => h > 0).map(([h, n]) => ({ layers: n, kv_heads: h, key_length: a.keyLength, value_length: a.valueLength, window_tokens: null }))
  return a.slidingWindow
    ? { groups, exactness: 'upper-bound', exactness_note: `header gives a ${a.slidingWindow}-token sliding window but not which layers use it; full attention assumed on every layer` }
    : { groups, exactness: 'modeled', exactness_note: 'full attention on every layer' }
}

/** Digest of the model layer for a tag (needed to range-read the GGUF). */
export async function fetchOllamaModelDigest(family, tag) {
  const manifest = await get(`https://registry.ollama.ai/v2/library/${family}/manifests/${tag}`, {
    headers: { Accept: 'application/vnd.docker.distribution.manifest.v2+json' },
    as: 'json',
  })
  return manifest.layers.find((l) => l.mediaType.endsWith('.model'))?.digest ?? null
}

/**
 * License text shipped with the model (manifest license layer), reduced to a
 * recognised id where possible. Returns { id|null, excerpt }.
 */
export async function fetchOllamaLicense(family, tag) {
  const manifest = await get(`https://registry.ollama.ai/v2/library/${family}/manifests/${tag}`, {
    headers: { Accept: 'application/vnd.docker.distribution.manifest.v2+json' },
    as: 'json',
  })
  const layer = manifest.layers.find((l) => l.mediaType.endsWith('.license'))
  if (!layer) return { id: null, excerpt: null }
  const text = (await get(`https://registry.ollama.ai/v2/library/${family}/blobs/${layer.digest}`)).slice(0, 4000)
  const head = text.replace(/\s+/g, ' ').trim().slice(0, 220)
  const rules = [
    [/apache license.{0,40}version 2\.0/i, 'Apache-2.0'],
    [/^mit license|permission is hereby granted, free of charge/i, 'MIT'],
    [/llama 3\.3 community license/i, 'Llama 3.3 Community License'],
    [/llama 3\.2 community license/i, 'Llama 3.2 Community License'],
    [/llama 3\.1 community license/i, 'Llama 3.1 Community License'],
    [/gemma terms of use/i, 'Gemma Terms of Use'],
    [/mistral research license/i, 'Mistral Research License'],
    [/openbmb/i, 'MiniCPM Model License (OpenBMB)'],
  ]
  const id = rules.find(([re]) => re.test(text.replace(/\s+/g, ' ').trim()))?.[1] ?? null
  return { id, excerpt: head }
}
