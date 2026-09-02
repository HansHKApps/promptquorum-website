#!/usr/bin/env node
// scripts/risk-scan.mjs
// Read-only legal / reputational risk pre-scan across article files.
// Regex triage for the `risk-checker` skill (~/.claude/skills/risk-checker/SKILL.md):
// it finds sentences that MAY be risky; the skill decides. No file is modified.
//
// Run: node scripts/risk-scan.mjs [--cluster <name>] [--all] [--file <path>] [--csv <path>] [--quiet]
// Output: risk-scan-report.csv (file, cluster, slug, locale, line, class, severity, snippet) + console summary

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const CLUSTER_DIRS = {
  'local-llms': 'src/lib/local-llms/articles',
  'prompt-engineering': 'src/lib/prompt-engineering/articles',
  'power-local-llm': 'src/lib/power-local-llm/articles',
  'prompt-bites': 'src/lib/prompt-bites/articles',
  'smart-home': 'src/lib/smart-home/articles',
  blog: 'src/lib/blog',
};

const ALL_LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'];

// ---- Args ------------------------------------------------------------------

const args = process.argv.slice(2);
const getArg = (name) => {
  const i = args.indexOf(name);
  return i !== -1 ? args[i + 1] : null;
};
const clusterArg = getArg('--cluster');
const fileArg = getArg('--file');
const csvArg = getArg('--csv') || 'risk-scan-report.csv';
const quiet = args.includes('--quiet');

if (clusterArg && !CLUSTER_DIRS[clusterArg]) {
  console.error(`Unknown cluster "${clusterArg}". Known: ${Object.keys(CLUSTER_DIRS).join(', ')}`);
  process.exit(2);
}

// ---- Patterns --------------------------------------------------------------
// Each entry: class id, default severity, regex (case-insensitive, unicode).
// Vocabulary mirrors references/risk-taxonomy.md. Keep patterns conservative:
// a false positive costs the reviewer seconds, a false negative costs a lawsuit.

const PATTERNS = [
  // R1 compliance / legal-status guarantees
  { cls: 'R1', sev: 'CRITICAL', re: /\b(GDPR|DSGVO|RGPD|LGPD|HIPAA|PIPL|APPI|PIPA)[- ]?(compliant|konform|conforme|compliance guaranteed|compatível|준수)\b/iu },
  { cls: 'R1', sev: 'CRITICAL', re: /\b(automatically|fully|automatisch|vollständig|automáticamente|automaticamente|automatiquement)\s+(compliant|konform|conforme|compatível)/iu },
  { cls: 'R1', sev: 'CRITICAL', re: /\b(ab Inbetriebnahme|out of the box compliant|compliant out of the box|rechtssicher|legally safe|juridiquement sûr|legalmente seguro|juridicamente seguro)\b/iu },
  { cls: 'R1', sev: 'HIGH', re: /\b(SOC ?2|ISO ?27001|BSI[- ]Grundschutz|zertifiziert|certified|certifié|certificado)\b/iu },
  { cls: 'R1', sev: 'HIGH', re: /\b(kein|no|aucun|sin|sem)\s+Schrems[- ]II/iu },
  { cls: 'R1', sev: 'HIGH', re: /(AI Act|KI-Verordnung|AI-Verordnung|Ley de IA|Lei de IA)[- ]?(compliant|konform|conforme)/iu },
  { cls: 'R1', sev: 'HIGH', re: /(GDPR準拠|個人情報保護法に準拠|完全準拠|符合GDPR|符合《?个人信息保护法|完全合规|متوافق مع اللائحة|متوافق تمامًا|GDPR 준수|개인정보보호법 준수|완전 준수)/u },

  // R4 false provenance
  // "our team" alone is excluded: FAQ questions like "when should our team use…" address the reader's team.
  { cls: 'R4', sev: 'CRITICAL', re: /\b(our (lab|engineers|research team|test team|testing team)|unser(e)? (Labor|Ingenieure|Testteam)|notre (laboratoire|équipe de test)|nuestro (laboratorio|equipo de pruebas)|nosso (laboratório|time de testes))\b/iu },
  { cls: 'R4', sev: 'HIGH', re: /\b(we (tested|measured|benchmarked|ran|confirmed|verified)|our (tests?|benchmarks?|measurements?|testing)|in our (tests?|benchmarks?|experience)|hands-on)\b/iu },
  { cls: 'R4', sev: 'HIGH', re: /\b(wir haben (getestet|gemessen|bestätigt|verifiziert)|in unserem Test|unsere (Messungen|Tests|Benchmarks)|in unserer Erfahrung)\b/iu },
  { cls: 'R4', sev: 'HIGH', re: /\b(nous avons (testé|mesuré)|nos (tests|mesures)|probamos|en nuestras pruebas|nuestras mediciones|medimos|testamos|em nossos testes|nossas medições)\b/iu },
  { cls: 'R4', sev: 'HIGH', re: /(検証しました|実測|当社のテスト|弊社チーム|実際に試した|我们测试|实测|我们的基准测试|我们的团队|我们验证|اختبرنا|في اختباراتنا|قمنا بقياس|فريقنا|테스트했습니다|실측|우리의 벤치마크|우리 팀|직접 확인)/u },

  // R5 absolutes / Spitzenstellung
  // Negated forms ("is not the only", "n'est pas le seul", "no es el único") are excluded — they are hedges, not claims.
  { cls: 'R5', sev: 'HIGH', re: /(?<!\bnot |\bisn't |\bnever )\b(the only|the safest|best in history|unmatched|unbeatable|zero risk|no other (tool|option|model|architecture)|(99|100)\s?% (of|private|safe|secure))\b/iu },
  { cls: 'R5', sev: 'HIGH', re: /(?<!\bnicht )\b(die einzige|die sicherste|beste .{0,20}aller Zeiten|unübertroffen|garantiert|kein Risiko|keine andere (Architektur|Option|Lösung)|(99|100)\s?% der)\b/iu },
  { cls: 'R5', sev: 'HIGH', re: /(?<!\bpas |\bno es |\bno son |\bnão é |\bnão são )\b(le seul|la seule|le plus sûr|imbattable|garanti[e]?|aucun risque|el único|la única|el más seguro|imbatible|garantizado|sin riesgo|o único|a única|o mais seguro|imbatível|garantido|sem risco)\b/iu },
  { cls: 'R5', sev: 'HIGH', re: /(?<!ليست |ليس )(唯一の|最も安全|史上最高|保証(され|します)|リスクゼロ|唯一的|最安全|史上最佳|零风险|الوحيد|الأكثر أمانًا|مضمون|بدون مخاطر|유일한|가장 안전한|역대 최고|보장(됩니다|합니다)|무위험)/u },

  // R6 citations
  { cls: 'R6', sev: 'HIGH', re: /\b(arXiv|arxiv\.org|doi\.org|10\.\d{4,}\/\S+)/iu },
  { cls: 'R6', sev: 'MEDIUM', re: /\b(according to (a|the) (study|survey|report|paper)|research shows|researchers found|studies show|a \d{4} (study|survey|report)|laut (einer|der) (Studie|Umfrage)|Studien zeigen|selon (une|l')(étude|enquête)|según (un|el) (estudio|informe)|segundo (um|o) (estudo|relatório))\b/iu },
  { cls: 'R6', sev: 'MEDIUM', re: /(研究によると|調査によると|据.{0,6}研究|据.{0,6}调查|وفقًا لدراسة|연구에 따르면|조사에 따르면)/u },

  // R7 commercial disclosure — affiliate-style URL parameters
  { cls: 'R7', sev: 'HIGH', re: /https?:\/\/[^\s'"]*[?&](tag|ref|aff|affiliate|awc|clickid|irclickid|utm_medium=affiliate)=/iu },
  { cls: 'R7', sev: 'MEDIUM', re: /\bsponsoredSlot\s*:\s*true\b/u },

  // R9 unsafe / unlawful instructions
  { cls: 'R9', sev: 'HIGH', re: /\b(overclock|undervolt|flash(ing)? (the )?BIOS|riser cable|bypass|circumvent|jailbreak|leaked (weights|model)|torrent|magnet:|scrap(e|ing) behind|Übertakt|Undervolt|BIOS flashen|umgehen|contourner|eludir|contornar|オーバークロック|回避|脱獄|超频|绕过|越狱|تجاوز|كسر الحماية|오버클럭|우회|탈옥)\b/iu },
  { cls: 'R9', sev: 'MEDIUM', re: /\b(230 ?V|mains wiring|relay|smart lock|Verkabelung|Netzteil überlast|neighbou?r|Nachbar|voisin|vecino|vizinho|隣人|邻居|الجيران|이웃)\b/iu },

  // R10 IP / trademark
  { cls: 'R10', sev: 'MEDIUM', re: /\b(official (guide|documentation of|partner)|offizielle(r|s)? (Leitfaden|Partner)|in cooperation with|in Zusammenarbeit mit|certified by|zertifiziert von|endorsed by)\b/iu },

  // R11 licence claims
  { cls: 'R11', sev: 'MEDIUM', re: /\b(open[- ]source|Apache[- ]2|MIT[- ]licen[cs]e|free for commercial use|commercial use allowed|no restrictions|quelloffen|kommerziell nutzbar|uso comercial|オープンソース|商用利用|开源|商用|مفتوح المصدر|오픈소스|상업적 이용)\b/iu },

  // R13 privacy / security absolutes
  { cls: 'R13', sev: 'HIGH', re: /\b(100 ?% private|never leaves|cannot leak|zero telemetry|no data (ever )?leaves|air-?gapped|fully offline|end-to-end encrypted|unhackable|verlässt nie|keine Telemetrie|vollständig offline|absolut sicher|ne quitte jamais|aucune télémétrie|nunca sale|sin telemetría|nunca sai|sem telemetria)\b/iu },
  { cls: 'R13', sev: 'HIGH', re: /(決して外部に|テレメトリなし|完全オフライン|绝不离开|无遥测|完全离线|لا تغادر أبدًا|بدون قياس عن بُعد|절대 외부로|텔레메트리 없음|완전 오프라인)/u },

  // R14 regulated use
  { cls: 'R14', sev: 'MEDIUM', re: /\b(hiring|recruit(ing|ment)|CV screening|résumé screening|credit scor|loan approval|insurance pricing|diagnos(is|e)|triage|prescription|biometric|face recognition|Bewerber|Kreditwürdigkeit|Diagnose|recrutement|crédit|diagnostic|contratación|crédito|diagnóstico|contratação|採用|融資|診断|招聘|信贷|诊断|توظيف|ائتمان|تشخيص|채용|대출|진단)\b/iu },

  // R16 fake social proof
  { cls: 'R16', sev: 'CRITICAL', re: /\b(aggregateRating|ratingValue|reviewCount|['"]@type['"]\s*:\s*['"]Review['"])/u },
  { cls: 'R16', sev: 'HIGH', re: /\b(trusted by \d|used by \d[\d,.]*\s?(k|\+|developers|companies|users)|\d[\d,.]*\+? (customers|Kunden|clients|clientes)|testimonial|Kundenstimmen|témoignage|testimonio|depoimento|お客様の声|用户评价|شهادة|후기)\b/iu },

  // R17 geopolitical
  { cls: 'R17', sev: 'MEDIUM', re: /\b(CCP|backdoor|spy(ing|ware)?|propaganda|regime|sanction(ed|s)?|export control|embargo|Spionage|Sanktion|espionnage|espionaje|espionagem|スパイ|制裁|间谍|تجسس|عقوبات|스파이|제재)\b/iu },

  // R18 brand-embarrassing
  { cls: 'R18', sev: 'MEDIUM', re: /\b(uncensored|NSFW|abliterated|\bDAN\b|unzensiert|non censuré|sin censura|sem censura|無修正|无审查|غير خاضع للرقابة|무검열)\b/iu },

  // R3 negative statements about named third parties (needs a named entity nearby)
  { cls: 'R3', sev: 'HIGH', re: /\b(Ollama|LM Studio|ROCm|AMD|NVIDIA|Apple|Hetzner|OpenAI|Anthropic|Google|Meta|Alibaba|Qwen|DeepSeek|Mistral|Microsoft|Amazon|Llama|Gemma|Claude|ChatGPT|Gemini|Copilot)\b[^.!?。！？\n]{0,80}\b(broken|buggy|unreliable|insecure|worse|inferior|fails|dishonest|scam|misleading|abandoned|dead|leaks|spies|phones home|bloatware|fehlerhaft|kaputt|unzuverlässig|unsicher|schlechter|minderwertig|versagt|unseriös|irreführend|eingestellt|défectueux|peu fiable|trompeur|defectuoso|poco fiable|engañoso|defeituoso|pouco confiável|enganoso|不安定|信頼できない|劣る|有缺陷|不可靠|不如|معيب|غير موثوق|결함|불안정|신뢰할 수 없)/iu },
];

// ---- Helpers ---------------------------------------------------------------

function walkDir(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) files.push(...walkDir(full));
    else if (full.endsWith('.ts') && !full.endsWith('.d.ts')) files.push(full);
  }
  return files;
}

/**
 * Map each line to the locale block it belongs to.
 * A locale block starts at a line matching /^\s{2}(en|de|…):\s*\{/ (top-level key inside
 * `article = { … }`). Blog: blogContent = { 'post-id': { en: {…}, de: {…} } } — locale keys
 * sit at indent 4. Both forms match /^\s{2,4}(xx):\s*\{/.
 */
function localeByLine(lines) {
  const map = new Array(lines.length).fill('—');
  let current = '—';
  const loc = ALL_LOCALES.join('|');
  // top-level locale key at indent 0–4 (article files, blog posts)
  const reIndent = new RegExp(`^\\s{0,4}['"]?(${loc})['"]?\\s*:\\s*\\{`);
  // same-line opener: `export const article: … = { en: {`
  const reInline = new RegExp(`=\\s*\\{\\s*['"]?(${loc})['"]?\\s*:\\s*\\{`);
  for (let i = 0; i < lines.length; i++) {
    const m = reIndent.exec(lines[i]) || reInline.exec(lines[i]);
    if (m) current = m[1];
    map[i] = current;
  }
  return map;
}

function csvEscape(v) {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

// ---- Collect files ---------------------------------------------------------

let files = [];
if (fileArg) {
  files = [path.resolve(ROOT, fileArg)];
} else if (clusterArg) {
  files = walkDir(path.join(ROOT, CLUSTER_DIRS[clusterArg]));
} else {
  for (const d of Object.values(CLUSTER_DIRS)) files.push(...walkDir(path.join(ROOT, d)));
}
files = files.filter((f) => !/types\.ts$|slugs\.ts$|barrel\.ts$|Translations\.ts$|helpers\.tsx?$|parsePublishDate|getDateISO/.test(f));

if (!quiet) console.log(`Risk pre-scan: ${files.length} file(s)\n`);

// ---- Scan ------------------------------------------------------------------

const rows = [];
const perFile = new Map();
const perClass = {};
const perLocale = {};

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const parts = rel.split('/');
  const cluster = parts[2] === 'blog' ? 'blog' : parts[2];
  const slug = path.basename(file, '.ts');
  let content;
  try { content = fs.readFileSync(file, 'utf-8'); } catch { continue; }
  const lines = content.split('\n');
  const locales = localeByLine(lines);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // skip pure code-ish lines (imports, closing braces) fast
    if (!/['"`]/.test(line) && !/[぀-鿿؀-ۿ가-힯]/.test(line)) continue;
    for (const p of PATTERNS) {
      const m = p.re.exec(line);
      if (!m) continue;
      const start = Math.max(0, m.index - 60);
      const snippet = line.slice(start, m.index + m[0].length + 60).trim().replace(/\s+/g, ' ');
      const row = { file: rel, cluster, slug, locale: locales[i], line: i + 1, cls: p.cls, sev: p.sev, snippet };
      rows.push(row);
      perClass[p.cls] = (perClass[p.cls] || 0) + 1;
      perLocale[row.locale] = (perLocale[row.locale] || 0) + 1;
      if (!perFile.has(rel)) perFile.set(rel, { CRITICAL: 0, HIGH: 0, MEDIUM: 0, classes: new Set() });
      const f = perFile.get(rel);
      f[p.sev]++;
      f.classes.add(p.cls);
    }
  }
}

// ---- Write CSV -------------------------------------------------------------

const header = ['file', 'cluster', 'slug', 'locale', 'line', 'class', 'severity', 'snippet'];
const csv = [header.join(',')]
  .concat(rows.map((r) => [r.file, r.cluster, r.slug, r.locale, r.line, r.cls, r.sev, r.snippet].map(csvEscape).join(',')))
  .join('\n');
fs.writeFileSync(path.resolve(ROOT, csvArg), csv + '\n');

// ---- Summary ---------------------------------------------------------------

if (!quiet) {
  console.log(`Hits: ${rows.length} across ${perFile.size} file(s) → ${csvArg}\n`);
  console.log('By class:');
  for (const k of Object.keys(perClass).sort()) console.log(`  ${k.padEnd(4)} ${perClass[k]}`);
  console.log('\nBy locale:');
  for (const k of ALL_LOCALES.concat('—')) if (perLocale[k]) console.log(`  ${k.padEnd(3)} ${perLocale[k]}`);

  const ranked = [...perFile.entries()]
    .sort((a, b) => b[1].CRITICAL - a[1].CRITICAL || b[1].HIGH - a[1].HIGH || b[1].MEDIUM - a[1].MEDIUM)
    .slice(0, 25);
  console.log('\nTop files (CRITICAL / HIGH / MEDIUM hits):');
  for (const [f, c] of ranked) {
    console.log(`  ${String(c.CRITICAL).padStart(3)} / ${String(c.HIGH).padStart(3)} / ${String(c.MEDIUM).padStart(3)}  ${f}  [${[...c.classes].sort().join(' ')}]`);
  }
  console.log('\nThe scan flags candidates only. Run the risk-checker skill on files with R1/R3/R4/R5/R6/R7/R13/R16 hits for a verdict.');
}

// Exit code: 0 always — this is triage, not a gate. The gate is the skill's report.
