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

function readDimensions(filePath, ext) {
  if (ext === 'svg') return readSvgDimensions(filePath)
  if (ext === 'jpg' || ext === 'jpeg') return readJpegDimensions(filePath)
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
