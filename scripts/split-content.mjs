#!/usr/bin/env node

/**
 * Split a monolithic content.ts into per-article files.
 *
 * DRY-RUN: writes only to <out>, never to src/.
 *
 * Usage:
 *   node scripts/split-content.mjs --source <file> --out <dir> [--slug <name>]
 *
 *   --source  Path to monolithic content.ts (peContent or llmContent)
 *   --out     Output directory (refuses to overwrite if exists)
 *   --slug    Optional. If provided, parse only this one slug. Otherwise all.
 *
 * Output structure:
 *   <out>/index.ts                       — barrel that reassembles original export
 *   <out>/articles/<slug>.ts             — one file per slug, all langs inside
 *   <out>/articles/_manifest.json        — { slug, file, lines, bytes, langs, identifiers }[]
 *
 * Exit codes:
 *   0  success
 *   1  runtime error (parser, IO, etc.)
 *   2  usage error (bad args, output dir exists)
 */

import { Project, SyntaxKind } from "ts-morph";
import fs from "node:fs/promises";
import path from "node:path";

// ─── Args ────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { source: null, out: null, slug: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--source") args.source = argv[++i];
    else if (argv[i] === "--out") args.out = argv[++i];
    else if (argv[i] === "--slug") args.slug = argv[++i];
    else if (argv[i] === "--help" || argv[i] === "-h") {
      console.log("Usage: split-content.mjs --source <file> --out <dir> [--slug <name>]");
      process.exit(0);
    }
  }
  if (!args.source || !args.out) {
    console.error("Error: --source and --out are required");
    process.exit(2);
  }
  return args;
}

// ─── Helpers ─────────────────────────────────────────────────────────

const propName = (p) => p.getName().replace(/^['"]|['"]$/g, "");
const slugToIdent = (slug) => `a_${slug.replace(/[^a-zA-Z0-9_]/g, "_")}`;

// Map of known external translation helpers to their source modules.
const TRANSLATION_HELPERS = {
  contextWindowsDe: "@/lib/prompt-engineering/contextWindowsTranslations",
  contextWindowsFr: "@/lib/prompt-engineering/contextWindowsTranslations",
  contextWindowsJa: "@/lib/prompt-engineering/contextWindowsTranslations",
  contextWindowsZh: "@/lib/prompt-engineering/contextWindowsTranslations",
  imagesWithTextDe: "@/lib/prompt-engineering/imagesWithTextTranslations",
  imagesWithTextFr: "@/lib/prompt-engineering/imagesWithTextTranslations",
  imagesWithTextJa: "@/lib/prompt-engineering/imagesWithTextTranslations",
  imagesWithTextZh: "@/lib/prompt-engineering/imagesWithTextTranslations",
};

async function pathExists(p) {
  try {
    await fs.stat(p);
    return true;
  } catch (e) {
    if (e.code === "ENOENT") return false;
    throw e;
  }
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv);

  if (await pathExists(args.out)) {
    console.error(`Error: output dir already exists: ${args.out}`);
    console.error("Refusing to overwrite. Remove or choose a different --out.");
    process.exit(2);
  }

  // Load source
  const project = new Project({
    tsConfigFilePath: "tsconfig.json",
    skipAddingFilesFromTsConfig: true,
  });
  const sourceFile = project.addSourceFileAtPath(args.source);

  // Auto-detect the exported variable (peContent or llmContent)
  const candidates = sourceFile.getVariableDeclarations().filter((v) => {
    if (!v.isExported()) return false;
    const init = v.getInitializer();
    return init && init.getKind() === SyntaxKind.ObjectLiteralExpression;
  });

  if (candidates.length === 0) {
    console.error("Error: no exported variable with object literal initializer found");
    process.exit(1);
  }
  if (candidates.length > 1) {
    console.error(
      `Error: ${candidates.length} candidate exports found: ${candidates.map((c) => c.getName()).join(", ")}`,
    );
    process.exit(1);
  }

  const exportedVar = candidates[0];
  const exportedName = exportedVar.getName();
  const initLine = exportedVar.getStartLineNumber();

  // Determine article type signature based on the detected export
  const isPE = exportedName === "peContent";
  const isLLM = exportedName === "llmContent";
  if (!isPE && !isLLM) {
    console.error(`Error: detected '${exportedName}' is neither peContent nor llmContent`);
    process.exit(1);
  }

  const articleType = isPE ? "PEArticle" : "LLMArticle";
  const articleTypeImport = isPE
    ? "@/lib/prompt-engineering/content"
    : "@/lib/local-llms/content";
  const perArticleType = isPE
    ? `Record<Language, ${articleType}>`
    : `Partial<Record<Language, ${articleType}>>`;
  const barrelType = isPE
    ? `Record<string, Record<Language, ${articleType}>>`
    : `Record<string, Partial<Record<Language, ${articleType}>>>`;

  console.log(`Source detected: ${exportedName} at line ${initLine}`);
  console.log(`Article type:    ${articleType}`);
  console.log();

  // Process articles
  const initializer = exportedVar.getInitializer();
  const allProps = initializer.getProperties();

  const stats = [];
  let totalBytes = 0;
  const timestamp = new Date().toISOString();

  await fs.mkdir(path.join(args.out, "articles"), { recursive: true });

  for (const prop of allProps) {
    if (prop.getKind() !== SyntaxKind.PropertyAssignment) continue;
    const slug = propName(prop);
    if (args.slug && slug !== args.slug) continue;

    const valueNode = prop.getInitializer();
    if (!valueNode) {
      console.warn(`Skipping ${slug}: no initializer`);
      continue;
    }

    // Verbatim text — preserves exact formatting
    const verbatimText = valueNode.getText();

    // Detect language count
    const langCount =
      valueNode.getKind() === SyntaxKind.ObjectLiteralExpression
        ? valueNode.getProperties().filter((p) => p.getKind() === SyntaxKind.PropertyAssignment).length
        : 0;

    // Detect referenced external identifiers in this article subtree
    const referencedIdents = new Set();
    for (const id of valueNode.getDescendantsOfKind(SyntaxKind.Identifier)) {
      const name = id.getText();
      if (name in TRANSLATION_HELPERS) referencedIdents.add(name);
    }

    // Group identifiers by source module
    const importsByModule = new Map();
    for (const ident of referencedIdents) {
      const mod = TRANSLATION_HELPERS[ident];
      if (!importsByModule.has(mod)) importsByModule.set(mod, []);
      importsByModule.get(mod).push(ident);
    }

    // Build the file content
    const lines = [];
    lines.push(`// Auto-generated from ${args.source}`);
    lines.push(`// Slug: ${slug}`);
    lines.push(`// Generated: ${timestamp}`);
    lines.push("");
    lines.push(`import type { Language } from "@/lib/blog/blogContent";`);
    for (const [mod, idents] of importsByModule) {
      lines.push(`import { ${idents.sort().join(", ")} } from "${mod}";`);
    }
    lines.push("");
    lines.push(`import type { ${articleType} } from "${articleTypeImport}";`);
    lines.push("");
    lines.push(`export const article: ${perArticleType} = ${verbatimText};`);
    lines.push("");

    const fileContent = lines.join("\n");
    const filePath = path.join(args.out, "articles", `${slug}.ts`);
    await fs.writeFile(filePath, fileContent);

    const bytes = Buffer.byteLength(fileContent, "utf8");
    const lineCount = fileContent.split("\n").length;

    stats.push({
      slug,
      file: `articles/${slug}.ts`,
      lines: lineCount,
      bytes,
      langs: langCount,
      identifiers: [...referencedIdents].sort(),
    });
    totalBytes += bytes;
  }

  if (stats.length === 0) {
    console.error("No articles processed.");
    if (args.slug) console.error(`Slug '${args.slug}' not found in source.`);
    process.exit(1);
  }

  // Emit manifest
  await fs.writeFile(
    path.join(args.out, "articles", "_manifest.json"),
    JSON.stringify(stats, null, 2),
  );

  // Emit barrel
  const barrelLines = [];
  barrelLines.push(`// Auto-generated barrel for split content`);
  barrelLines.push(`// Reassembles original ${exportedName} shape`);
  barrelLines.push(`// Generated: ${timestamp}`);
  barrelLines.push("");
  barrelLines.push(`import type { Language } from "@/lib/blog/blogContent";`);
  barrelLines.push(`import type { ${articleType} } from "${articleTypeImport}";`);
  barrelLines.push("");
  for (const s of stats) {
    barrelLines.push(
      `import { article as ${slugToIdent(s.slug)} } from "./articles/${s.slug}";`,
    );
  }
  barrelLines.push("");
  barrelLines.push(`export const ${exportedName}: ${barrelType} = {`);
  for (const s of stats) {
    barrelLines.push(`  "${s.slug}": ${slugToIdent(s.slug)},`);
  }
  barrelLines.push(`};`);
  barrelLines.push("");

  const barrelContent = barrelLines.join("\n");
  await fs.writeFile(path.join(args.out, "index.ts"), barrelContent);
  totalBytes += Buffer.byteLength(barrelContent, "utf8");

  // Summary
  console.log(`Articles processed: ${stats.length}${args.slug ? " (slug filter)" : ""}`);
  console.log();
  for (const s of stats) {
    const idStr = s.identifiers.length ? ` (${s.identifiers.join(", ")})` : "";
    console.log(
      `  ${s.slug}: ${s.lines} lines, ${s.bytes} bytes, ${s.langs} langs, ${s.identifiers.length} ext imports${idStr}`,
    );
  }
  console.log();
  console.log(`Output: ${args.out}`);
  console.log(`Total bytes: ${totalBytes}`);
}

main().catch((e) => {
  console.error("Split failed:", e.message);
  if (process.env.DEBUG) console.error(e.stack);
  process.exit(1);
});
