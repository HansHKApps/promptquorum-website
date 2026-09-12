#!/usr/bin/env node
const BASE = 'http://localhost:3415';
const SPECS = {
  'atomic-bot-review': {
    en: { title: "Atomic Bot Review 2026: A Packaged OpenClaw Agent App", subtitle: '', bullets: ["Free, open-source (MIT-licensed) app that packages the open-source OpenClaw agent framework into a one-click installer for macOS, Windows, and iOS", "Own GitHub repository shows 324 stars, confirmed via the GitHub API on September 12, 2026 — separate from OpenClaw's own much larger community figure", "Run fully local at no cost against open-weight models, or pay for Atomic Bot's own cloud compute plans starting around $19/month"], footer: "PromptQuorum Guide" },
    de: { title: "Atomic Bot Review 2026: Ein verpacktes OpenClaw-Agenten-App", subtitle: '', bullets: ["Kostenlose, quelloffene (MIT-lizenzierte) App, die das quelloffene OpenClaw-Agenten-Framework in einen Ein-Klick-Installer für macOS, Windows und iOS verpackt", "Das eigene GitHub-Repository zeigt 324 Sterne, bestätigt über die GitHub API am 12. September 2026 — getrennt von der deutlich größeren Zahl der OpenClaw-Community", "Vollständig lokal kostenlos gegen offene Modelle betreiben oder für Atomic Bots eigene Cloud-Compute-Pläne ab etwa 19 $/Monat bezahlen" ], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Atomic Bot Review 2026 : une app OpenClaw empaquetée", subtitle: '', bullets: ["Application gratuite et open source (licence MIT) qui empaquette le framework d'agent open source OpenClaw dans un installateur en un clic pour macOS, Windows et iOS", "Son propre dépôt GitHub affiche 324 étoiles, confirmées via l'API GitHub le 12 septembre 2026 — distinct du chiffre bien plus élevé de la communauté OpenClaw", "Exécutez-la entièrement en local sans frais contre des modèles à poids ouverts, ou payez les plans de calcul cloud propres à Atomic Bot à partir d'environ 19 $/mois"], footer: "Guide PromptQuorum" },
    es: { title: "Atomic Bot Review 2026: una app de OpenClaw empaquetada", subtitle: '', bullets: ["Aplicación gratuita y de código abierto (licencia MIT) que empaqueta el framework de agente de código abierto OpenClaw en un instalador de un clic para macOS, Windows e iOS", "Su propio repositorio de GitHub muestra 324 estrellas, confirmadas mediante la API de GitHub el 12 de septiembre de 2026 — distinto de la cifra mucho mayor de la comunidad OpenClaw", "Ejecútela totalmente en local sin coste contra modelos de pesos abiertos, o pague los planes de cómputo en la nube propios de Atomic Bot desde unos 19 $/mes"], footer: "Guía de PromptQuorum" },
    ja: { title: "Atomic Botレビュー2026：OpenClawをパッケージ化したアプリ", subtitle: '', bullets: ["オープンソースのOpenClawエージェントフレームワークをmacOS・Windows・iOS向けワンクリックインストーラーにパッケージ化した、無料・オープンソース（MITライセンス）アプリ", "自身のGitHubリポジトリはスター324。2026年9月12日にGitHub APIで確認済み — OpenClawコミュニティのはるかに大きい数字とは別物", "オープンウェイトモデルに対し完全ローカルで無料実行、またはAtomic Bot独自のクラウドコンピュートプラン（月額約19ドルから）を利用可能"], footer: "PromptQuorumガイド" },
    zh: { title: "Atomic Bot评测2026：打包版OpenClaw代理应用", subtitle: '', bullets: ["将开源OpenClaw代理框架打包为macOS、Windows和iOS一键安装程序的免费开源（MIT许可）应用", "自有GitHub仓库显示324个星标，已于2026年9月12日通过GitHub API核实 — 与OpenClaw社区规模大得多的数字不同", "可完全在本地针对开放权重模型免费运行，也可支付Atomic Bot自家云计算套餐（约每月19美元起）"], footer: "PromptQuorum 指南" },
    pt: { title: "Atomic Bot Review 2026: um app do OpenClaw empacotado", subtitle: '', bullets: ["Aplicativo gratuito e de código aberto (licença MIT) que empacota o framework de agente de código aberto OpenClaw em um instalador de um clique para macOS, Windows e iOS", "Seu próprio repositório GitHub mostra 324 estrelas, confirmadas via API do GitHub em 12 de setembro de 2026 — diferente do número bem maior da comunidade OpenClaw", "Rode totalmente em local sem custo contra modelos de pesos abertos, ou pague pelos planos de computação em nuvem do próprio Atomic Bot a partir de cerca de US$ 19/mês"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة Atomic Bot 2026: تطبيق مُعبّأ لـ OpenClaw", subtitle: '', bullets: ["تطبيق مجاني ومفتوح المصدر (رخصة MIT) يُعبّئ إطار عمل الوكيل مفتوح المصدر OpenClaw في مثبّت بنقرة واحدة لأنظمة macOS وWindows وiOS", "يُظهر مستودعه الخاص على GitHub 324 نجمة، تم التحقق منها عبر واجهة برمجة تطبيقات GitHub بتاريخ 12 سبتمبر 2026 — مختلف عن الرقم الأكبر بكثير لمجتمع OpenClaw", "شغّله محلياً بالكامل دون تكلفة مقابل نماذج مفتوحة الأوزان، أو ادفع مقابل خطط الحوسبة السحابية الخاصة بـ Atomic Bot بدءاً من حوالي 19 دولاراً شهرياً"], footer: "دليل PromptQuorum" },
    ko: { title: "Atomic Bot 리뷰 2026: OpenClaw를 패키징한 앱", subtitle: '', bullets: ["오픈소스 OpenClaw 에이전트 프레임워크를 macOS·Windows·iOS용 원클릭 설치 프로그램으로 패키징한 무료 오픈소스(MIT 라이선스) 앱", "자체 GitHub 저장소는 스타 324개. 2026년 9월 12일 GitHub API로 확인 — OpenClaw 커뮤니티의 훨씬 더 큰 수치와는 별개", "오픈 웨이트 모델을 대상으로 완전 로컬에서 무료 실행하거나, 월 약 19달러부터 시작하는 Atomic Bot 자체 클라우드 컴퓨팅 요금제 이용 가능"], footer: "PromptQuorum 가이드" },
  },
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
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
