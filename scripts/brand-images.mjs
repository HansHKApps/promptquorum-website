#!/usr/bin/env node
/**
 * Adds corner attribution text + Dublin Core <metadata> to all SVGs in public/images/
 * that don't already contain 'promptquorum.com'.
 *
 * Usage: node scripts/brand-images.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');
const BRAND_TEXT = 'promptquorum.com';

const METADATA = [
  '<metadata>',
  '<rdf:RDF',
  ' xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"',
  ' xmlns:dc="http://purl.org/dc/elements/1.1/">',
  '<rdf:Description rdf:about="">',
  '<dc:creator>PromptQuorum</dc:creator>',
  '<dc:rights>\u00a9 2025 PromptQuorum. All rights reserved.</dc:rights>',
  '<dc:source>https://www.promptquorum.com</dc:source>',
  '</rdf:Description>',
  '</rdf:RDF>',
  '</metadata>',
].join('');

const files = readdirSync(IMAGES_DIR).filter(f => f.endsWith('.svg'));
let added = 0, skipped = 0, errors = 0;

for (const file of files) {
  const filePath = join(IMAGES_DIR, file);
  try {
    let content = readFileSync(filePath, 'utf-8');

    // Skip if already branded
    if (content.includes(BRAND_TEXT)) {
      skipped++;
      continue;
    }

    // Parse viewBox: "0 0 W H"
    const vbMatch = content.match(/viewBox="([^"]+)"/);
    if (!vbMatch) {
      console.warn(`  SKIP (no viewBox): ${file}`);
      skipped++;
      continue;
    }
    const parts = vbMatch[1].trim().split(/\s+/);
    const w = Number(parts[2]);
    const h = Number(parts[3]);
    if (!w || !h || isNaN(w) || isNaN(h)) {
      console.warn(`  SKIP (bad viewBox "${vbMatch[1]}"): ${file}`);
      skipped++;
      continue;
    }

    const attrText = `<text x="${w - 8}" y="${h - 5}" font-family="system-ui,sans-serif" font-size="9" fill="#BBBBBB" text-anchor="end">${BRAND_TEXT}</text>`;

    // Insert <metadata> after the opening <svg ...> tag (if not already present)
    if (!content.includes('<metadata>')) {
      content = content.replace(/(<svg[^>]*>)/, `$1${METADATA}`);
    }

    // Insert attribution text before </svg>
    content = content.replace('</svg>', `${attrText}</svg>`);

    writeFileSync(filePath, content, 'utf-8');
    added++;
  } catch (err) {
    console.error(`  ERROR: ${file} — ${err.message}`);
    errors++;
  }
}

console.log(`\nDone: ${added} branded, ${skipped} skipped (already branded or invalid), ${errors} errors`);
