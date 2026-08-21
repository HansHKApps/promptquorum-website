#!/usr/bin/env node
// Scans public/images for SVGs and records real pixel dimensions (derived
// from viewBox, falling back to explicit width/height attrs) plus MIME type
// into src/data/image-dimensions.json. Consumed by src/lib/imageObjectSchema.ts
// so ImageObject JSON-LD never has to read the filesystem at request time.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const IMAGES_DIR = path.join(ROOT, 'public/images')
const OUTPUT_PATH = path.join(ROOT, 'src/data/image-dimensions.json')

const ENCODING_FORMATS = {
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
  avif: 'image/avif',
}

function readSvgDimensions(filePath) {
  const svg = fs.readFileSync(filePath, 'utf-8')
  const viewBoxMatch = svg.match(/viewBox=["']\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)\s*["']/)
  if (viewBoxMatch) {
    return { width: Math.round(parseFloat(viewBoxMatch[1])), height: Math.round(parseFloat(viewBoxMatch[2])) }
  }
  const widthMatch = svg.match(/<svg[^>]*\swidth=["']([\d.]+)/)
  const heightMatch = svg.match(/<svg[^>]*\sheight=["']([\d.]+)/)
  if (widthMatch && heightMatch) {
    return { width: Math.round(parseFloat(widthMatch[1])), height: Math.round(parseFloat(heightMatch[1])) }
  }
  return null
}

// Minimal JPEG SOF0/SOF2 parser — reads real pixel dimensions from the
// segment header, no external deps.
function readJpegDimensions(filePath) {
  const data = fs.readFileSync(filePath)
  let i = 2
  while (i < data.length - 9) {
    if (data[i] !== 0xff) { i++; continue }
    const marker = data[i + 1]
    if (marker >= 0xc0 && marker <= 0xc3) {
      const height = data.readUInt16BE(i + 5)
      const width = data.readUInt16BE(i + 7)
      return { width, height }
    }
    const segLen = data.readUInt16BE(i + 2)
    i += 2 + segLen
  }
  return null
}

function readPngDimensions(filePath) {
  const data = fs.readFileSync(filePath)
  if (data.length < 24 || data.readUInt32BE(0) !== 0x89504e47) return null
  return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) }
}

// WebP is a RIFF container. The dimensions live in one of three chunk types
// depending on how the file was encoded (lossy/lossless/extended) — sharp's
// default .webp() output for a plain RGB image (no alpha/animation) produces
// a bare "VP8 " chunk, but handle all three so this doesn't silently break
// if a future image needs alpha or animation.
function readWebpDimensions(filePath) {
  const data = fs.readFileSync(filePath)
  if (data.length < 30) return null
  if (data.toString('ascii', 0, 4) !== 'RIFF' || data.toString('ascii', 8, 12) !== 'WEBP') return null
  const chunkType = data.toString('ascii', 12, 16)

  if (chunkType === 'VP8X') {
    // Extended format: 1 byte flags, 3 bytes reserved, then 3-byte LE canvas width-1 / height-1
    const width = 1 + (data[24] | (data[25] << 8) | (data[26] << 16))
    const height = 1 + (data[27] | (data[28] << 8) | (data[29] << 16))
    return { width, height }
  }
  if (chunkType === 'VP8L') {
    // Lossless: signature byte (0x2f) at offset 20, then 14-bit width-1 / height-1 packed LE
    const b0 = data[21], b1 = data[22], b2 = data[23], b3 = data[24]
    const width = 1 + (((b1 & 0x3f) << 8) | b0)
    const height = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6))
    return { width, height }
  }
  if (chunkType === 'VP8 ') {
    // Lossy: 3-byte frame tag, then start code 0x9d 0x01 0x2a, then 14-bit width/height LE
    const width = data.readUInt16LE(26) & 0x3fff
    const height = data.readUInt16LE(28) & 0x3fff
    return { width, height }
  }
  return null
}

function readDimensions(filePath, ext) {
  if (ext === 'svg') return readSvgDimensions(filePath)
  if (ext === 'jpg' || ext === 'jpeg') return readJpegDimensions(filePath)
  if (ext === 'png') return readPngDimensions(filePath)
  if (ext === 'webp') return readWebpDimensions(filePath)
  return null
}

function main() {
  const files = fs.readdirSync(IMAGES_DIR)
  const registry = {}
  let flagged = 0

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file)
    if (!fs.statSync(filePath).isFile()) continue
    const ext = file.split('.').pop()?.toLowerCase()
    const encodingFormat = ENCODING_FORMATS[ext]
    if (!encodingFormat) continue

    const dims = readDimensions(filePath, ext)
    if (!dims) flagged++

    registry[`/images/${file}`] = {
      encodingFormat,
      ...(dims && { width: dims.width, height: dims.height }),
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(registry, null, 2) + '\n')

  const total = Object.keys(registry).length
  console.log(`✅ image-dimensions.json: ${total} images (${flagged} without derivable width/height)`)
  if (flagged > 0) {
    const flaggedFiles = Object.entries(registry).filter(([, v]) => !v.width).map(([k]) => k)
    console.log(`   Flagged (no viewBox/width/height found): ${flaggedFiles.slice(0, 10).join(', ')}${flaggedFiles.length > 10 ? '...' : ''}`)
  }
}

main()
