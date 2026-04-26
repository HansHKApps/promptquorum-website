import { Project, SyntaxKind, Node } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
  skipAddingFilesFromTsConfig: true,
});

const sourceFile = project.addSourceFileAtPath("src/lib/prompt-engineering/content.ts");
const peContent = sourceFile.getVariableDeclaration("peContent");
const initializer = peContent.getInitializer();
const articleProps = initializer.getProperties();

const TARGET_SLUG = "gpt-claude-gemini-which-model";
const VALID_LANGS = ["en", "de", "fr", "ja", "zh"];
const TRANSLATION_HELPERS = new Set([
  "contextWindowsDe", "contextWindowsFr", "contextWindowsJa", "contextWindowsZh",
  "imagesWithTextDe", "imagesWithTextFr", "imagesWithTextJa", "imagesWithTextZh",
]);
const SCHEMA_KEYS = [
  "schema", "faqSchema", "itemListSchema", "howToSchema",
  "breadcrumbSchema", "datasetSchema", "techArticleSchema", "articleSchema",
];

const propName = (p) => p.getName().replace(/^['"]|['"]$/g, "");
const objProps = (objLit) => {
  if (!objLit || objLit.getKind() !== SyntaxKind.ObjectLiteralExpression) return [];
  return objLit.getProperties().filter(p => p.getKind() === SyntaxKind.PropertyAssignment);
};
const findArticle = (slug) => {
  for (const prop of articleProps) {
    if (prop.getKind() === SyntaxKind.PropertyAssignment && propName(prop) === slug) return prop;
  }
  return null;
};

// ─── REPORT 1 ────────────────────────────────────────────────────────
console.log("=".repeat(72));
console.log(`REPORT 1: STRUCTURE OF ${TARGET_SLUG}`);
console.log("=".repeat(72));
console.log();

const targetArticle = findArticle(TARGET_SLUG);
if (!targetArticle) {
  console.log(`ERROR: ${TARGET_SLUG} not found`);
  process.exit(1);
}

console.log(TARGET_SLUG);
for (const langProp of objProps(targetArticle.getInitializer())) {
  const langName = propName(langProp);
  const fields = objProps(langProp.getInitializer());
  console.log(`├── ${langName} (${fields.length} properties)`);
  for (const fieldProp of fields) {
    const fieldName = propName(fieldProp);
    const fieldValue = fieldProp.getInitializer();
    const fieldKind = fieldValue ? fieldValue.getKindName() : "?";
    console.log(`│   ├── ${fieldName}: ${fieldKind}`);
    if (fieldValue && fieldValue.getKind() === SyntaxKind.ObjectLiteralExpression) {
      for (const subProp of objProps(fieldValue)) {
        const subName = propName(subProp);
        const subValue = subProp.getInitializer();
        const subKind = subValue ? subValue.getKindName() : "?";
        console.log(`│   │   ├── ${subName}: ${subKind}`);
      }
    }
  }
}
console.log();

// ─── REPORT 2 ────────────────────────────────────────────────────────
console.log("=".repeat(72));
console.log("REPORT 2: ALL DISTINCT PROPERTIES ACROSS LANG BLOCKS");
console.log("=".repeat(72));
console.log();

const propCounts = new Map();
let totalLangBlocks = 0;

for (const articleProp of articleProps) {
  if (articleProp.getKind() !== SyntaxKind.PropertyAssignment) continue;
  for (const langProp of objProps(articleProp.getInitializer())) {
    if (!VALID_LANGS.includes(propName(langProp))) continue;
    totalLangBlocks++;
    for (const fieldProp of objProps(langProp.getInitializer())) {
      const name = propName(fieldProp);
      propCounts.set(name, (propCounts.get(name) || 0) + 1);
    }
  }
}

console.log(`Total lang blocks examined: ${totalLangBlocks}`);
console.log(`Distinct property names:    ${propCounts.size}`);
console.log();

const sorted = [...propCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
const maxNameLen = Math.max(...sorted.map(([n]) => n.length));
for (const [name, count] of sorted) {
  const pct = ((count / totalLangBlocks) * 100).toFixed(1);
  console.log(`  ${name.padEnd(maxNameLen)}  ${String(count).padStart(4)}  (${pct.padStart(5)}%)`);
}
console.log();

// ─── REPORT 3 ────────────────────────────────────────────────────────
console.log("=".repeat(72));
console.log(`REPORT 3: EXTERNAL IDENTIFIER REFERENCES IN ${TARGET_SLUG}`);
console.log("=".repeat(72));
console.log();

function buildPropertyChain(node, root) {
  const chain = [];
  let current = node;
  while (current && current !== root) {
    if (current.getKind() === SyntaxKind.PropertyAssignment) {
      chain.unshift(propName(current));
    }
    current = current.getParent();
  }
  return chain.join(".");
}

const refs = [];
targetArticle.forEachDescendant((node) => {
  if (node.getKind() === SyntaxKind.Identifier) {
    const name = node.getText();
    if (TRANSLATION_HELPERS.has(name)) {
      refs.push({
        name,
        line: node.getStartLineNumber(),
        chain: buildPropertyChain(node, targetArticle),
      });
    }
  }
});

if (refs.length === 0) {
  console.log("  (no references found)");
} else {
  console.log(`Found ${refs.length} references:`);
  for (const r of refs) {
    console.log(`  line ${r.line}: ${r.name}  in  ${r.chain || "<article root>"}`);
  }
}
console.log();

// ─── REPORT 4 ────────────────────────────────────────────────────────
console.log("=".repeat(72));
console.log("REPORT 4: SCHEMA OVERLAY DISTRIBUTION");
console.log("=".repeat(72));
console.log();

const schemaCounts = new Map(SCHEMA_KEYS.map(k => [k, 0]));
let schemaLangBlockCount = 0;

for (const articleProp of articleProps) {
  if (articleProp.getKind() !== SyntaxKind.PropertyAssignment) continue;
  for (const langProp of objProps(articleProp.getInitializer())) {
    if (!VALID_LANGS.includes(propName(langProp))) continue;
    schemaLangBlockCount++;
    const fieldNames = new Set(objProps(langProp.getInitializer()).map(propName));
    for (const k of SCHEMA_KEYS) {
      if (fieldNames.has(k)) schemaCounts.set(k, schemaCounts.get(k) + 1);
    }
  }
}

console.log(`Total lang blocks: ${schemaLangBlockCount}`);
console.log();
console.log(`  ${"Schema field".padEnd(22)}  ${"Count".padStart(5)}  Percent`);
console.log(`  ${"-".repeat(22)}  ${"-".repeat(5)}  -------`);
for (const k of SCHEMA_KEYS) {
  const count = schemaCounts.get(k);
  const pct = schemaLangBlockCount > 0 ? ((count / schemaLangBlockCount) * 100).toFixed(1) : "0.0";
  console.log(`  ${k.padEnd(22)}  ${String(count).padStart(5)}  (${pct.padStart(5)}%)`);
}
