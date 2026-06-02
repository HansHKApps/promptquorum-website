#!/usr/bin/env node
/**
 * pt-br-lint.mjs — flags European Portuguese (pt-PT) markers inside pt: blocks.
 *
 * It extracts ONLY the text inside pt-keyed objects (top-level article pt:,
 * and nested forms like quickAnswerTop: { pt: {...} }), so it never trips on
 * your es:/fr:/de:/en: content (e.g. Spanish "contacto", French "équipe").
 *
 * Usage:
 *   node scripts/pt-br-lint.mjs <path-or-glob-root> [more roots...]
 *   node scripts/pt-br-lint.mjs src/lib            # scan a dir tree
 *   node scripts/pt-br-lint.mjs file1.ts file2.ts  # scan specific files
 *
 * Exit code 1 if any HIGH-confidence European marker is found (CI-friendly).
 */

import { readFileSync, statSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

// ---- marker definitions -------------------------------------------------
// NOTE: JS \b is ASCII-only, so it fails around accented letters (ê, ã, …).
// We use Unicode letter boundaries instead: (?<!\p{L})…(?!\p{L}) with the /u
// flag, so "você", "ecrã", etc. are matched whatever follows them.
//
// HIGH: should essentially never appear in correct Brazilian tech content.
const HIGH = [
  [/(?<!\p{L})utilizador(?:es|a|as)?(?!\p{L})/giu, "utilizador → usuário"],
  [/(?<!\p{L})ficheiro?s?(?!\p{L})/giu, "ficheiro → arquivo"],
  [/(?<!\p{L})ecrãs?(?!\p{L})/giu, "ecrã → tela"],
  [/(?<!\p{L})telemóve(?:l|is)(?!\p{L})/giu, "telemóvel → celular"],
  [/(?<!\p{L})registo?s?(?!\p{L})/giu, "registo → registro"],
  [/(?<!\p{L})equipa(?:s)?(?!\p{L})/giu, "equipa → time/equipe"],
  [/(?<!\p{L})facto?s?(?!\p{L})/giu, "facto → fato"],
  [/(?<!\p{L})contacto?s?(?!\p{L})/giu, "contacto → contato"],
  [/(?<!\p{L})receção(?!\p{L})/giu, "receção → recepção"],
  [/(?<!\p{L})económic\p{L}*/giu, "económico → econômico (ó→ô)"],
  [/(?<!\p{L})eletrónic\p{L}*|(?<!\p{L})electrónic\p{L}*/giu, "eletrónico → eletrônico (ó→ô)"],
  [/(?<!\p{L})fenómen\p{L}*/giu, "fenómeno → fenômeno (ó→ô)"],
  [/(?<!\p{L})anónim\p{L}*/giu, "anónimo → anônimo (ó→ô)"],
  // "estar a + infinitive" progressive (European) vs BR gerund
  [/(?<!\p{L})(estou|estás|está|estamos|estão|estava|estavam|estive|esteve|estiveram)\s+a\s+\p{L}+(?:ar|er|ir)(?!\p{L})/giu,
    "estar a + infinitivo → gerúndio (está executando)"],
];

// MEDIUM: usually European, but can have valid BR uses — review manually.
const MEDIUM = [
  [/(?<!\p{L})gerir(?!\p{L})|(?<!\p{L})gerido?s?(?!\p{L})/giu, "gerir → gerenciar (review)"],
  [/(?<!\p{L})autocarro(?!\p{L})/giu, "autocarro → ônibus (review)"],
];

// POSITIVE Brazilian signals — presence is reassuring (not required per file).
const POSITIVE = [
  [/(?<!\p{L})você(?!\p{L})/giu, "você"],
  [/(?<!\p{L})usuári\p{L}*/giu, "usuário"],
  [/(?<!\p{L})arquivo?s?(?!\p{L})/giu, "arquivo"],
  [/(?<!\p{L})\p{L}+ndo(?!\p{L})/giu, "gerúndio (-ndo)"],
];

// ---- pt: block extraction (brace-balanced, string-aware) ----------------
function extractPtBlocks(src) {
  const blocks = [];
  const re = /(?<![A-Za-z0-9_])pt\s*:\s*\{/g;
  let m;
  while ((m = re.exec(src))) {
    const open = src.indexOf("{", m.index);
    let depth = 0, i = open, str = null, esc = false;
    for (; i < src.length; i++) {
      const c = src[i];
      if (str) {
        if (esc) { esc = false; continue; }
        if (c === "\\") { esc = true; continue; }
        if (c === str) str = null;
        continue;
      }
      if (c === '"' || c === "'" || c === "`") { str = c; continue; }
      if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) { i++; break; } }
    }
    blocks.push(src.slice(open, i));
  }
  return blocks.join("\n");
}

// ---- file discovery -----------------------------------------------------
function collect(root, out) {
  let st;
  try { st = statSync(root); } catch { return; }
  if (st.isDirectory()) {
    if (root.includes("node_modules") || root.includes(".next")) return;
    for (const e of readdirSync(root)) collect(join(root, e), out);
  } else if (extname(root) === ".ts" || extname(root) === ".tsx") {
    out.push(root);
  }
}

// ---- run ----------------------------------------------------------------
const roots = process.argv.slice(2);
if (!roots.length) {
  console.error("Usage: node pt-br-lint.mjs <dir-or-file> [...]");
  process.exit(2);
}
const files = [];
for (const r of roots) collect(r, files);

let totalHigh = 0, totalMed = 0, flaggedFiles = 0;
const noVocePositive = [];

for (const f of files) {
  const src = readFileSync(f, "utf8");
  if (!/(?<![A-Za-z0-9_])pt\s*:\s*\{/.test(src)) continue; // no pt: block yet
  const pt = extractPtBlocks(src);
  if (!pt.trim()) continue;

  const hits = [];
  for (const [re, label] of HIGH) {
    const found = pt.match(re);
    if (found) hits.push(["HIGH", label, found.length, [...new Set(found)].slice(0, 4)]);
  }
  for (const [re, label] of MEDIUM) {
    const found = pt.match(re);
    if (found) hits.push(["MED ", label, found.length, [...new Set(found)].slice(0, 4)]);
  }
  const hasVoce = /(?<!\p{L})você(?!\p{L})/iu.test(pt);
  if (!hasVoce) noVocePositive.push(f);

  if (hits.length) {
    flaggedFiles++;
    console.log(`\n✗   ${f}`);
    for (const [sev, label, n, ex] of hits) {
      if (sev === "HIGH") totalHigh += n; else totalMed += n;
      console.log(`   [${sev}] ${label}  (${n}×)  e.g. ${ex.join(", ")}`);
    }
  }
}

console.log("\n" + "=".repeat(60));
console.log(`Files scanned with a pt: block : ${files.filter(f => /(?<![A-Za-z0-9_])pt\s*:\s*\{/.test(readFileSync(f,"utf8"))).length}`);
console.log(`Files flagged                  : ${flaggedFiles}`);
console.log(`HIGH-confidence pt-PT markers  : ${totalHigh}`);
console.log(`MEDIUM markers (review)        : ${totalMed}`);
console.log(`Files with NO "você" present   : ${noVocePositive.length}${noVocePositive.length ? " (sanity-check these)" : ""}`);
console.log("=".repeat(60));

process.exit(totalHigh > 0 ? 1 : 0);
