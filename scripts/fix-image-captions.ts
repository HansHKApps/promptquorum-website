/**
 * Fixes missing and placeholder imageCaption fields.
 *
 * Usage in VS Code terminal:
 *   Dry-run (no changes):   npx tsx scripts/fix-image-captions.ts
 *   Write changes:          npx tsx scripts/fix-image-captions.ts --write
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const ROOT = process.cwd();

type CaptionFix = {
  file: string;            // relative path under src/lib/
  imageBasename: string;   // e.g. 'local-llm-limitations-quality-benchmarks-de'
  newCaption: string;      // native-language caption
};

// ----- 1) local-llm-limitations.ts (16 captions, DE/FR/JA/ZH) -----
const limitationsFile = 'src/lib/local-llms/articles/local-llm-limitations.ts';

const limitationsFixes: CaptionFix[] = [
  // quality-benchmarks
  { file: limitationsFile, imageBasename: 'local-llm-limitations-quality-benchmarks-de',
    newCaption: 'Benchmark-Vergleich: Lokale LLMs wie Llama 3 8B vs. GPT-4 auf MMLU und HumanEval — Qualitätsunterschiede in Prozent.' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-quality-benchmarks-fr',
    newCaption: 'Comparatif de benchmarks : LLM locaux (Llama 3 8B) face à GPT-4 sur MMLU et HumanEval — écart de qualité en pourcentage.' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-quality-benchmarks-ja',
    newCaption: 'ベンチマーク比較:ローカルLLM(Llama 3 8B)とGPT-4のMMLUおよびHumanEvalスコアの品質差。' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-quality-benchmarks-zh',
    newCaption: '基准测试对比:本地大模型(Llama 3 8B)与 GPT-4 在 MMLU 和 HumanEval 上的质量差距。' },

  // speed-comparison
  { file: limitationsFile, imageBasename: 'local-llm-limitations-speed-comparison-de',
    newCaption: 'Geschwindigkeitsvergleich: Tokens pro Sekunde bei lokalen LLMs auf CPU, Apple Silicon und NVIDIA-GPU.' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-speed-comparison-fr',
    newCaption: 'Comparaison de vitesse : tokens par seconde des LLM locaux sur CPU, Apple Silicon et GPU NVIDIA.' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-speed-comparison-ja',
    newCaption: '速度比較:ローカルLLMのCPU、Apple Silicon、NVIDIA GPU上での1秒あたりトークン数。' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-speed-comparison-zh',
    newCaption: '速度对比:本地大模型在 CPU、Apple Silicon 与 NVIDIA GPU 上的每秒 token 数。' },

  // hardware-requirements
  { file: limitationsFile, imageBasename: 'local-llm-limitations-hardware-requirements-de',
    newCaption: 'Hardware-Anforderungen für lokale LLMs: RAM, VRAM und Speicherbedarf je Modellgröße (7B bis 70B).' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-hardware-requirements-fr',
    newCaption: 'Configuration matérielle pour les LLM locaux : RAM, VRAM et stockage selon la taille du modèle (7B à 70B).' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-hardware-requirements-ja',
    newCaption: 'ローカルLLMのハードウェア要件:モデルサイズ(7B〜70B)別のRAM、VRAM、ストレージ容量。' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-hardware-requirements-zh',
    newCaption: '本地大模型硬件需求:不同模型规模(7B 至 70B)所需的 RAM、显存与存储空间。' },

  // setup-time
  { file: limitationsFile, imageBasename: 'local-llm-limitations-setup-time-de',
    newCaption: 'Setup-Zeit lokaler LLMs: Vom Modell-Download über Quantisierung bis zur ersten Inferenz in Minuten.' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-setup-time-fr',
    newCaption: "Temps d'installation des LLM locaux : du téléchargement à la quantification jusqu'à la première inférence." },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-setup-time-ja',
    newCaption: 'ローカルLLMのセットアップ時間:モデルダウンロード、量子化、初回推論までの所要分数。' },
  { file: limitationsFile, imageBasename: 'local-llm-limitations-setup-time-zh',
    newCaption: '本地大模型部署时间:从模型下载、量化到首次推理所需的分钟数。' },
];

// ----- 2) prompt-chaining.ts & prompt-engineering-glossary.ts (9 placeholders) -----
type PlaceholderFix = {
  file: string;
  oldCaption: string;          // exact placeholder string to match
  newCaption: string;
};

const placeholderFixes: PlaceholderFix[] = [
  // prompt-chaining.ts
  { file: 'src/lib/prompt-engineering/articles/prompt-chaining.ts',
    oldCaption: 'Image for whatIsPromptChaining',
    newCaption: 'Diagram showing how prompt chaining splits a complex task into sequential LLM calls with intermediate outputs feeding the next step.' },
  { file: 'src/lib/prompt-engineering/articles/prompt-chaining.ts',
    oldCaption: 'Image for typicalPatterns',
    newCaption: 'Typical prompt chaining patterns: sequential, branching, and map-reduce workflows used in production LLM pipelines.' },
  { file: 'src/lib/prompt-engineering/articles/prompt-chaining.ts',
    oldCaption: 'Image for example',
    newCaption: 'Worked example of a prompt chain: extract entities, classify intent, then generate a structured response in three LLM steps.' },

  // prompt-engineering-glossary.ts
  { file: 'src/lib/prompt-engineering/articles/prompt-engineering-glossary.ts',
    oldCaption: 'Image for corePrompting',
    newCaption: 'Core prompt engineering concepts: zero-shot, few-shot, chain-of-thought, and system prompts illustrated with example structures.' },
  { file: 'src/lib/prompt-engineering/articles/prompt-engineering-glossary.ts',
    oldCaption: 'Image for agentsOrchestration',
    newCaption: 'LLM agent orchestration overview: tool use, ReAct loops, planner-executor patterns and multi-agent coordination.' },
  { file: 'src/lib/prompt-engineering/articles/prompt-engineering-glossary.ts',
    oldCaption: 'Image for safetyAlignment',
    newCaption: 'LLM safety and alignment glossary: RLHF, constitutional AI, jailbreak defenses and red-teaming workflows.' },
];

// ----- Engine -----
async function applyCaptionForImage(filePath: string, imageBasename: string, newCaption: string) {
  const abs = path.join(ROOT, filePath);
  const src = await fs.readFile(abs, 'utf8');

  const lines = src.split('\n');
  const idx = lines.findIndex(l => l.includes(`${imageBasename}.svg`) || l.includes(`${imageBasename}.png`));
  if (idx === -1) return { changed: false, reason: `image ${imageBasename} not found` };

  const window = lines.slice(idx, Math.min(idx + 6, lines.length)).join('\n');
  if (/imageCaption\s*:/.test(window)) {
    return { changed: false, reason: 'imageCaption already present' };
  }

  const imageLine = lines[idx];
  const indentMatch = imageLine.match(/^(\s*)/);
  const indent = indentMatch ? indentMatch[1] : '    ';
  const safe = newCaption.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const insertion = `${indent}imageCaption: '${safe}',`;
  lines.splice(idx + 1, 0, insertion);
  const next = lines.join('\n');

  if (WRITE) {
    await fs.writeFile(abs + '.bak', src, 'utf8');
    await fs.writeFile(abs, next, 'utf8');
  }
  return { changed: true, reason: `inserted caption for ${imageBasename}` };
}

async function replacePlaceholder(filePath: string, oldCaption: string, newCaption: string) {
  const abs = path.join(ROOT, filePath);
  const src = await fs.readFile(abs, 'utf8');

  const safeOld = oldCaption.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(imageCaption\\s*:\\s*['"\`])${safeOld}(['"\`])`, 'g');
  const testRe = new RegExp(`(imageCaption\\s*:\\s*['"\`])${safeOld}(['"\`])`);
  if (!testRe.test(src)) return { changed: false, reason: `placeholder "${oldCaption}" not found` };

  const safe = newCaption.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const next = src.replace(re, `$1${safe}$2`);
  const count = (src.match(re) || []).length;

  if (WRITE) {
    await fs.writeFile(abs + '.bak', src, 'utf8');
    await fs.writeFile(abs, next, 'utf8');
  }
  return { changed: true, reason: `replaced ${count}x placeholder for "${oldCaption}"` };
}

(async () => {
  console.log(`Mode: ${WRITE ? 'WRITE (files will be modified, .bak backups created)' : 'DRY-RUN (no files changed)'}\n`);

  let totalChanged = 0;

  console.log('--- Stage 1a: insert missing imageCaption fields ---');
  for (const fix of limitationsFixes) {
    const res = await applyCaptionForImage(fix.file, fix.imageBasename, fix.newCaption);
    console.log(`${res.changed ? '✔' : '·'} ${fix.file} :: ${fix.imageBasename} — ${res.reason}`);
    if (res.changed) totalChanged++;
  }

  console.log('\n--- Stage 1b: replace placeholder captions ---');
  for (const fix of placeholderFixes) {
    const res = await replacePlaceholder(fix.file, fix.oldCaption, fix.newCaption);
    console.log(`${res.changed ? '✔' : '·'} ${fix.file} — ${res.reason}`);
    if (res.changed) totalChanged++;
  }

  console.log(`\nDone. ${totalChanged} change(s) ${WRITE ? 'applied' : 'would be applied (dry-run)'}.`);
  if (!WRITE) console.log('Run again with --write to apply.');
})();
