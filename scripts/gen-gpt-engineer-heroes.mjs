#!/usr/bin/env node
// One-off generator for the gpt-engineer-review hero images (all 9 locales).
const BASE = 'http://localhost:3415';
const SPECS = {
  en: {
    title: 'GPT Engineer Review 2026: Archived — What to Use Instead',
    subtitle: "GPT Engineer's GitHub repository is archived (read-only) — MIT licensed, 55,100+ stars, 7,200+ forks. Last release was v0.3.1 in June 2024. Its own README now recommends Aider for CLI users and gptengineer.app for a hosted alternative.",
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'GPT Engineer Review 2026: Archiviert — Alternativen',
    subtitle: 'GPT Engineers GitHub-Repository ist archiviert (nur lesbar) — MIT-lizenziert, über 55.100 Stars, 7.200 Forks. Letztes Release war v0.3.1 im Juni 2024. Die eigene README empfiehlt nun Aider für CLI-Nutzer und gptengineer.app als gehostete Alternative.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'GPT Engineer (2026) : dépôt archivé, que faire',
    subtitle: "Le dépôt GitHub de GPT Engineer est archivé (lecture seule) — licence MIT, plus de 55 100 étoiles, 7 200 forks. Dernière version : v0.3.1 en juin 2024. Son propre README recommande désormais Aider pour la CLI et gptengineer.app comme alternative hébergée.",
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'GPT Engineer 2026: repositorio archivado, alternativas',
    subtitle: 'El repositorio de GitHub de GPT Engineer está archivado (solo lectura) — licencia MIT, más de 55.100 estrellas, 7.200 forks. Última versión: v0.3.1 en junio de 2024. Su propio README ahora recomienda Aider y gptengineer.app como alternativa alojada.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'GPT Engineer 2026: repositório arquivado, alternativas',
    subtitle: 'O repositório GitHub do GPT Engineer está arquivado (somente leitura) — licença MIT, mais de 55.100 estrelas, 7.200 forks. Última versão: v0.3.1 em junho de 2024. O próprio README agora recomenda o Aider e o gptengineer.app como alternativa hospedada.',
    footer: 'Guia PromptQuorum',
  },
  ja: {
    title: 'GPT Engineerレビュー2026：アーカイブ済み、代替案',
    subtitle: 'GPT EngineerのGitHubリポジトリはアーカイブ済み（読み取り専用）— MITライセンス、5万5,100以上のスター、7,200以上のフォーク。最終リリースは2024年6月のv0.3.1。README自体が現在、CLI利用者にはAiderを、ホスト版にはgptengineer.appを推奨している。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'GPT Engineer评测2026：已归档，替代方案',
    subtitle: 'GPT Engineer的GitHub仓库已归档（只读）——MIT许可，超过5.51万星标、7,200个复刻。最后版本是2024年6月的v0.3.1。其README现向CLI用户推荐Aider，向需要托管方案的用户推荐gptengineer.app。',
    footer: 'PromptQuorum 指南',
  },
  ar: {
    title: 'مراجعة GPT Engineer 2026: مستودع مؤرشف، البدائل',
    subtitle: 'مستودع GPT Engineer على GitHub مؤرشف (للقراءة فقط) — برخصة MIT، أكثر من 55,100 نجمة و7,200 عملية fork. كان آخر إصدار هو v0.3.1 في يونيو 2024. يوصي ملف README الخاص به الآن بـ Aider لمستخدمي سطر الأوامر وgptengineer.app كبديل مُستضاف.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'GPT Engineer 리뷰 2026: 아카이브됨, 대안',
    subtitle: 'GPT Engineer의 GitHub 저장소는 아카이브(읽기 전용)됨 — MIT 라이선스, 5만 5,100개 이상의 스타, 7,200개 이상의 포크. 마지막 릴리스는 2024년 6월의 v0.3.1. 자체 README는 이제 CLI 사용자에게 Aider를, 호스팅 대안으로 gptengineer.app을 추천한다.',
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/gpt-engineer-review-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
