#!/usr/bin/env node
// One-off hero generator for langflow-visual-ai-orchestration-review (all 9 locales).
const BASE = 'http://localhost:3411';

const SPECS = {
  en: {
    title: 'Langflow Review 2026: The IBM-Owned Alternative to Flowise',
    subtitle: 'Langflow lets you wire together LangChain and LangGraph components on a visual canvas instead of writing Python by hand.',
    bullets: [
      'MIT license — permissive, self-hostable, no multi-tenant or logo restrictions',
      'Acquired by DataStax in 2024, then IBM acquired DataStax (closed May 28, 2025)',
      'Over 150,000 GitHub stars and active commit history, unlike archived Flowise',
      'Built in Python — closer to raw LangChain than Flowise\'s Node.js/TypeScript stack',
      'A realistic landing spot for Flowise users migrating off an unmaintained tool',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Langflow 2026: Visueller LangChain-Builder unter IBM, MIT-Lizenz',
    subtitle: 'Langflow verbindet LangChain- und LangGraph-Komponenten auf einer visuellen Oberfläche, statt Python-Code von Hand zu schreiben.',
    bullets: [
      'MIT-Lizenz — permissiv, self-hostbar, ohne Multi-Tenant- oder Logo-Einschränkungen',
      '2024 von DataStax übernommen, dann IBM-Übernahme von DataStax (abgeschlossen 28. Mai 2025)',
      'Über 150.000 GitHub-Sterne und aktive Commit-Historie, anders als das archivierte Flowise',
      'In Python entwickelt — näher am reinen LangChain als Flowises Node.js/TypeScript-Stack',
      'Eine realistische Anlaufstelle für Flowise-Nutzer, die von einem unbetreuten Tool wegmigrieren',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Langflow en 2026 : le constructeur visuel LangChain racheté par IBM',
    subtitle: 'Langflow permet d\'assembler des composants LangChain et LangGraph sur une interface visuelle plutôt que d\'écrire du Python à la main.',
    bullets: [
      'Licence MIT — permissive, auto-hébergeable, sans restriction multi-tenant ni de logo',
      'Racheté par DataStax en 2024, puis IBM a racheté DataStax (finalisé le 28 mai 2025)',
      'Plus de 150 000 étoiles GitHub et un historique de commits actif, contrairement à Flowise',
      'Écrit en Python — plus proche du LangChain brut que la stack Node.js/TypeScript de Flowise',
      'Une destination réaliste pour les utilisateurs de Flowise qui migrent depuis un outil non maintenu',
    ],
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Langflow 2026：LangChain可視化ビルダー（MITライセンス・IBM傘下）',
    subtitle: 'LangflowはPythonのコードを手書きする代わりに、LangChainやLangGraphのコンポーネントをビジュアルキャンバス上でつなげるツールです。',
    bullets: [
      'MITライセンス — 許諾範囲が広く、セルフホスト可能、マルチテナントやロゴの制限なし',
      '2024年にDataStaxが買収、その後IBMがDataStaxを買収（2025年5月28日完了）',
      'GitHubスター数15万超、コミット履歴も活発。アーカイブされたFlowiseとは対照的',
      'Pythonで構築されており、FlowiseのNode.js/TypeScriptより生のLangChainに近い',
      'アーカイブされ保守されなくなったFlowiseからの移行先として現実的な選択肢',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Langflow 2026：MIT许可开源可视化LangChain/RAG构建工具（IBM旗下）',
    subtitle: 'Langflow让你在可视化画布上连接LangChain和LangGraph组件，而不必手写Python代码。',
    bullets: [
      'MIT许可——宽松开源，可自托管，无多租户或Logo限制',
      '2024年被DataStax收购，随后IBM收购DataStax（2025年5月28日完成）',
      'GitHub星标超过15万，提交历史活跃，与已存档的Flowise形成对比',
      '基于Python构建——比Flowise的Node.js/TypeScript技术栈更贴近原生LangChain',
      '对于正从已存档、无人维护的Flowise迁移的用户来说，是一个现实可行的落脚点',
    ],
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Langflow en 2026: constructor visual de LangChain con licencia MIT (ahora de IBM)',
    subtitle: 'Langflow permite conectar componentes de LangChain y LangGraph en un lienzo visual en lugar de escribir Python a mano.',
    bullets: [
      'Licencia MIT — permisiva, autoalojable, sin restricciones multiinquilino ni de logotipo',
      'Adquirido por DataStax en 2024, y luego IBM adquirió DataStax (cerrado el 28 de mayo de 2025)',
      'Más de 150.000 estrellas en GitHub e historial de commits activo, a diferencia del archivado Flowise',
      'Desarrollado en Python — más cercano a LangChain puro que la pila Node.js/TypeScript de Flowise',
      'Un destino realista para usuarios de Flowise que migran desde una herramienta sin mantenimiento',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Langflow em 2026: construtor visual de agentes de IA agora da IBM',
    subtitle: 'O Langflow permite conectar componentes do LangChain e do LangGraph em um canvas visual em vez de escrever Python à mão.',
    bullets: [
      'Licença MIT — permissiva, com self-host permitido, sem restrições de multi-tenant ou logotipo',
      'Adquirido pela DataStax em 2024, e depois a IBM adquiriu a DataStax (concluído em 28 de maio de 2025)',
      'Mais de 150.000 estrelas no GitHub e histórico de commits ativo, diferente do Flowise arquivado',
      'Desenvolvido em Python — mais próximo do LangChain puro do que a stack Node.js/TypeScript do Flowise',
      'Um destino realista para usuários do Flowise migrando de uma ferramenta sem manutenção',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'Langflow في 2026: أداة بصرية مفتوحة المصدر أصبحت ملكًا لـ IBM',
    subtitle: 'تتيح Langflow ربط مكونات LangChain وLangGraph على لوحة بصرية بدلًا من كتابة كود Python يدويًا.',
    bullets: [
      'ترخيص MIT — متساهل، قابل للاستضافة الذاتية، بلا قيود على تعدد المستأجرين أو الشعار',
      'استحوذت عليها DataStax عام 2024، ثم استحوذت IBM على DataStax (اكتمل في 28 مايو 2025)',
      'أكثر من 150,000 نجمة على GitHub وسجل مساهمات نشط، خلافًا لـ Flowise المؤرشفة',
      'مبنية بلغة Python — أقرب إلى LangChain الأصلية من حزمة Node.js/TypeScript لدى Flowise',
      'وجهة واقعية لمستخدمي Flowise المهاجرين من أداة لم تعد تُصان',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: '2026 Langflow 리뷰: MIT 라이선스 오픈소스, 이제는 IBM 소유',
    subtitle: 'Langflow는 Python 코드를 직접 작성하는 대신 시각적 캔버스에서 LangChain과 LangGraph 컴포넌트를 연결할 수 있게 해준다.',
    bullets: [
      'MIT 라이선스 — 관대한 라이선스, 셀프호스팅 가능, 멀티테넌트·로고 제한 없음',
      '2024년 DataStax가 인수, 이후 IBM이 DataStax를 인수(2025년 5월 28일 완료)',
      'GitHub 스타 15만 개 이상, 커밋 활동 활발 — 아카이브된 Flowise와 대조적',
      'Python으로 구축되어 Flowise의 Node.js/TypeScript 스택보다 순수 LangChain에 더 가까움',
      '더 이상 유지보수되지 않는 Flowise에서 이전하는 사용자에게 현실적인 대안',
    ],
    footer: 'PromptQuorum 가이드',
  },
};

const OUT_DIR = 'public/images';

async function main() {
  for (const [lang, spec] of Object.entries(SPECS)) {
    const res = await fetch(`${BASE}/api/hero-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, ...spec }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`[${lang}] FAILED ${res.status}: ${text}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const outPath = `${OUT_DIR}/langflow-visual-ai-orchestration-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
