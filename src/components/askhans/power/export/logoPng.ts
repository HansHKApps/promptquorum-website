// Power Mode — the PromptQuorum mark as PNG bytes for the Word export (Word cannot embed SVG reliably).
// Drawn in the browser from the same SVG the PDF uses. Returns null when the browser cannot rasterize it;
// the report is then simply made without the picture.

import { logoSvg } from './reportDoc'

export async function logoPng(fill: string, px = 192): Promise<Uint8Array | null> {
  try {
    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg(px, fill))}`
    const img = new Image()
    img.decoding = 'async'
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error('logo'))
      img.src = url
    })
    const canvas = document.createElement('canvas')
    canvas.width = px
    canvas.height = px
    const ctx = canvas.getContext('2d')
    if (!ctx) return null
    ctx.drawImage(img, 0, 0, px, px)
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))
    return blob ? new Uint8Array(await blob.arrayBuffer()) : null
  } catch {
    return null
  }
}
