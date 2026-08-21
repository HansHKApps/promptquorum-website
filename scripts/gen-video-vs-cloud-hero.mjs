#!/usr/bin/env node
const BASE = 'http://localhost:3073';
const SPECS = {
  "local-ai-video-generation-vs-cloud": {
    "en": {
      "title": "InVideo vs Local AI Video: One Costs $0 Plus Your Weekend — the Other Costs $17",
      "subtitle": "Wan 2.2, LTX-2, HunyuanVideo run free on your own GPU. InVideo bundles 200+ models for $17/month.",
      "footer": "PromptQuorum Guide"
    }
  }
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${basename}/${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${basename}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}
(async () => {
  for (const [basename, locales] of Object.entries(SPECS)) {
    console.log(`=== ${basename} ===`);
    for (const [lang, spec] of Object.entries(locales)) {
      await generate(basename, lang, spec);
    }
  }
  console.log('done');
})();
