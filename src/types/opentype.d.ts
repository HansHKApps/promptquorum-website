// opentype.js ships no types and has no @types package installed; only the calls hero-image/route.tsx makes are typed.
declare module 'opentype.js' {
  export interface Glyph {
    advanceWidth?: number
  }
  export interface Font {
    unitsPerEm: number
    stringToGlyphs(text: string): Glyph[]
  }
  export function parse(buffer: ArrayBuffer): Font
}
