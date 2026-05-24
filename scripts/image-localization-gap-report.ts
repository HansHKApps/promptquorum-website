/**
 * Reports localization gaps: which EN images have no -de/-fr/-ja/-zh counterpart
 * (a) on disk in public/images and (b) referenced in src/lib code.
 *
 * Usage:
 *   npx tsx scripts/image-localization-gap-report.ts
 *   (writes reports/image-localization-gaps.csv)
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PUBLIC_IMG = path.join(ROOT, 'public/images');
const SRC_LIB = path.join(ROOT, 'src/lib');
const LANGS = ['de', 'fr', 'ja', 'zh'] as const;
const OUT_DIR = path.join(ROOT, 'reports');
const OUT_FILE = path.join(OUT_DIR, 'image-localization-gaps.csv');

async function walk(dir: string, exts: string[]): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p, exts));
    else if (exts.some(x => e.name.endsWith(x))) out.push(p);
  }
  return out;
}

(async () => {
  // 1) All EN image files on disk
  const allImages = (await fs.readdir(PUBLIC_IMG)).filter(f =>
    /\.(svg|png|jpg|jpeg|webp)$/i.test(f)
  );
  const enImages = allImages.filter(f => /-en\.(svg|png|jpg|jpeg|webp)$/i.test(f));
  const allSet = new Set(allImages);

  // 2) All source files referencing images
  const tsFiles = await walk(SRC_LIB, ['.ts', '.tsx']);
  const referenced = new Set<string>();
  const refByFile = new Map<string, Set<string>>();
  for (const f of tsFiles) {
    const src = await fs.readFile(f, 'utf8');
    const matches = src.matchAll(/['"`]\/images\/([^'"`]+\.(?:svg|png|jpg|jpeg|webp))['"`]/gi);
    for (const m of matches) {
      referenced.add(m[1]);
      if (!refByFile.has(m[1])) refByFile.set(m[1], new Set());
      refByFile.get(m[1])!.add(path.relative(ROOT, f));
    }
  }

  // 3) For each EN image, check which language counterparts are missing on disk AND/OR in code
  type Row = {
    enImage: string;
    referencedIn: string;
    diskMissing: string;
    codeMissing: string;
  };
  const rows: Row[] = [];

  for (const en of enImages) {
    const base = en.replace(/-en\.(svg|png|jpg|jpeg|webp)$/i, '');
    const ext = en.match(/\.(svg|png|jpg|jpeg|webp)$/i)![0];

    const diskMissing: string[] = [];
    const codeMissing: string[] = [];
    for (const lang of LANGS) {
      const candidate = `${base}-${lang}${ext}`;
      if (!allSet.has(candidate)) diskMissing.push(lang);
      if (!referenced.has(candidate)) codeMissing.push(lang);
    }

    if (diskMissing.length === 0 && codeMissing.length === 0) continue;
    rows.push({
      enImage: en,
      referencedIn: [...(refByFile.get(en) ?? [])].join(' | '),
      diskMissing: diskMissing.join(','),
      codeMissing: codeMissing.join(','),
    });
  }

  // 4) Write CSV
  await fs.mkdir(OUT_DIR, { recursive: true });
  const header = 'en_image,referenced_in,disk_missing,code_missing\n';
  const csv = header + rows.map(r =>
    [r.enImage, `"${r.referencedIn}"`, r.diskMissing, r.codeMissing].join(',')
  ).join('\n');
  await fs.writeFile(OUT_FILE, csv, 'utf8');

  // 5) Console summary
  const totalGaps = rows.length;
  const fullyMissingAll4 = rows.filter(r => r.diskMissing.split(',').length === 4 && r.diskMissing !== '').length;
  console.log(`EN images on disk:             ${enImages.length}`);
  console.log(`EN images with any gap:        ${totalGaps}`);
  console.log(`EN images missing all 4 langs: ${fullyMissingAll4}`);
  console.log(`Report written to:             ${path.relative(ROOT, OUT_FILE)}`);
})();
