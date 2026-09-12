#!/usr/bin/env node
const BASE = 'http://localhost:3420';
const SPECS = {
  'lemonade-review': {
    en: { title: 'Lemonade Review: AMD-Sponsored Local AI Server', subtitle: '', bullets: ["Free and open source under the Apache License 2.0; AMD sponsors the project and optimizes it for Ryzen AI NPUs, Radeon GPUs, and Strix Halo PCs", "Not AMD-exclusive: the same server also installs and runs on NVIDIA GPUs, Apple Silicon, and generic CPUs, though NPU acceleration requires AMD Ryzen AI hardware", "Serves chat, vision, image generation, and speech through one OpenAI-compatible API at http://localhost:13305/v1"], footer: 'PromptQuorum Guide' },
    de: { title: 'Lemonade Review: AMD-gesponserter lokaler KI-Server', subtitle: '', bullets: ["Kostenlos und quelloffen unter der Apache-Lizenz 2.0; AMD sponsert das Projekt und optimiert es für Ryzen-AI-NPUs, Radeon-GPUs und Strix-Halo-PCs", "Nicht auf AMD beschränkt: Der Server installiert und läuft auch auf NVIDIA-GPUs, Apple Silicon und gewöhnlichen CPUs, NPU-Beschleunigung erfordert jedoch AMD-Ryzen-AI-Hardware", "Stellt Chat, Bildverständnis, Bildgenerierung und Sprache über eine OpenAI-kompatible API bereit"], footer: 'PromptQuorum-Leitfaden' },
    fr: { title: 'Lemonade Review : serveur IA local sponsorisé par AMD', subtitle: '', bullets: ["Gratuit et open source sous licence Apache 2.0 ; AMD sponsorise le projet et l'optimise pour les NPU Ryzen AI, GPU Radeon et PC Strix Halo", "Pas exclusif à AMD : le même serveur s'installe aussi sur GPU NVIDIA, Apple Silicon et CPU génériques, mais l'accélération NPU exige du matériel AMD Ryzen AI", "Sert le chat, la vision, la génération d'images et la voix via une API compatible OpenAI"], footer: 'Guide PromptQuorum' },
    es: { title: 'Lemonade Review: servidor de IA local patrocinado por AMD', subtitle: '', bullets: ["Gratuito y de código abierto bajo licencia Apache 2.0; AMD patrocina el proyecto y lo optimiza para NPU Ryzen AI, GPU Radeon y PC Strix Halo", "No exclusivo de AMD: el mismo servidor también se instala en GPU NVIDIA, Apple Silicon y CPU genéricas, aunque la aceleración NPU requiere hardware AMD Ryzen AI", "Sirve chat, visión, generación de imágenes y voz mediante una API compatible con OpenAI"], footer: 'Guía de PromptQuorum' },
    ja: { title: 'Lemonadeレビュー：AMDスポンサーのローカルAIサーバー', subtitle: '', bullets: ["Apacheライセンス2.0の下で無料かつオープンソース。AMDがプロジェクトをスポンサーし、Ryzen AI NPU、Radeon GPU、Strix Halo PC向けに最適化", "AMD専用ではない：同じサーバーはNVIDIA GPU、Apple Silicon、汎用CPUでも動作するが、NPUアクセラレーションにはAMD Ryzen AIハードウェアが必要", "OpenAI互換APIを通じてチャット、ビジョン、画像生成、音声を提供"], footer: 'PromptQuorumガイド' },
    zh: { title: 'Lemonade评测：AMD赞助的本地AI服务器', subtitle: '', bullets: ["基于Apache 2.0许可证免费开源；AMD赞助该项目并针对Ryzen AI NPU、Radeon GPU和Strix Halo电脑进行优化", "并非AMD专属：同一服务器也可在NVIDIA GPU、Apple Silicon和通用CPU上运行，但NPU加速需要AMD Ryzen AI硬件", "通过OpenAI兼容API提供聊天、视觉、图像生成和语音服务"], footer: 'PromptQuorum 指南' },
    pt: { title: 'Lemonade Review: servidor de IA local patrocinado pela AMD', subtitle: '', bullets: ["Gratuito e de código aberto sob a licença Apache 2.0; a AMD patrocina o projeto e o otimiza para NPUs Ryzen AI, GPUs Radeon e PCs Strix Halo", "Não é exclusivo da AMD: o mesmo servidor também instala e roda em GPUs NVIDIA, Apple Silicon e CPUs genéricas, mas a aceleração por NPU exige hardware AMD Ryzen AI", "Disponibiliza chat, visão, geração de imagens e voz por meio de uma API compatível com OpenAI"], footer: 'Guia PromptQuorum' },
    ar: { title: 'مراجعة Lemonade: خادم ذكاء اصطناعي محلي مدعوم من AMD', subtitle: '', bullets: ["مفتوح المصدر ومجاني بموجب رخصة Apache 2.0؛ تدعم AMD المشروع وتحسّنه لوحدات Ryzen AI NPU وبطاقات Radeon وأجهزة Strix Halo", "ليس حصريًا على AMD: يُثبَّت نفس الخادم ويعمل أيضًا على بطاقات NVIDIA وApple Silicon والمعالجات العامة، لكن تسريع NPU يتطلب عتاد AMD Ryzen AI", "يقدّم الدردشة والرؤية وتوليد الصور والكلام عبر واجهة برمجية متوافقة مع OpenAI"], footer: 'دليل PromptQuorum' },
    ko: { title: 'Lemonade 리뷰: AMD 후원 로컬 AI 서버', subtitle: '', bullets: ["Apache 2.0 라이선스 하에 무료 오픈소스; AMD가 프로젝트를 후원하며 Ryzen AI NPU, Radeon GPU, Strix Halo PC에 최적화", "AMD 전용 아님: 동일한 서버가 NVIDIA GPU, Apple Silicon, 범용 CPU에서도 실행되지만 NPU 가속은 AMD Ryzen AI 하드웨어가 필요", "OpenAI 호환 API를 통해 채팅, 비전, 이미지 생성, 음성 제공"], footer: 'PromptQuorum 가이드' },
  },
  'onyx-review': {
    en: { title: 'Onyx Review: Self-Hosted Enterprise Search and RAG', subtitle: 'Formerly Danswer', bullets: ["Open source under the MIT license (Community Edition); the same project, GitHub history, and YC W24 backing continued under the renamed Onyx", "Connects to 50+ data sources (Slack, Confluence, Google Drive, GitHub) and to a local Ollama model or cloud providers", "Enterprise Edition adds SSO, role-based access control, analytics, and white-labeling under a separate license"], footer: 'PromptQuorum Guide' },
    de: { title: 'Onyx Review: Selbst gehostete Enterprise-Suche und RAG', subtitle: 'Früher Danswer', bullets: ["Quelloffen unter MIT-Lizenz (Community Edition); dasselbe Projekt, dieselbe GitHub-Historie und YC-W24-Förderung wurden unter dem umbenannten Onyx fortgeführt", "Verbindet sich mit über 50 Datenquellen (Slack, Confluence, Google Drive, GitHub) sowie mit einem lokalen Ollama-Modell oder Cloud-Anbietern", "Enterprise Edition ergänzt SSO, rollenbasierte Zugriffskontrolle, Analysen und White-Labeling unter separater Lizenz"], footer: 'PromptQuorum-Leitfaden' },
    fr: { title: 'Onyx Review : recherche d\'entreprise et RAG auto-hébergés', subtitle: 'Anciennement Danswer', bullets: ["Open source sous licence MIT (édition Community) ; même projet, même historique GitHub et financement YC W24 poursuivis sous le nom renommé Onyx", "Se connecte à plus de 50 sources de données (Slack, Confluence, Google Drive, GitHub) et à un modèle Ollama local ou des fournisseurs cloud", "L'édition Enterprise ajoute SSO, contrôle d'accès basé sur les rôles, analytique et marque blanche sous une licence distincte"], footer: 'Guide PromptQuorum' },
    es: { title: 'Onyx Review: búsqueda empresarial y RAG autoalojados', subtitle: 'Antes Danswer', bullets: ["Código abierto bajo licencia MIT (edición Community); mismo proyecto, mismo historial de GitHub y respaldo YC W24 continuados bajo el nombre renombrado Onyx", "Se conecta a más de 50 fuentes de datos (Slack, Confluence, Google Drive, GitHub) y a un modelo Ollama local o proveedores en la nube", "La edición Enterprise añade SSO, control de acceso basado en roles, analítica y marca blanca bajo una licencia separada"], footer: 'Guía de PromptQuorum' },
    ja: { title: 'Onyxレビュー：セルフホスト型エンタープライズ検索とRAG', subtitle: '旧Danswer', bullets: ["MITライセンス（Community Edition）の下でオープンソース。同じプロジェクト、GitHub履歴、YC W24の支援が改名後のOnyxのもとで継続", "Slack、Confluence、Google Drive、GitHubなど50以上のデータソース、およびローカルOllamaモデルやクラウドプロバイダーに接続", "Enterprise EditionはSSO、ロールベースアクセス制御、分析、ホワイトラベリングを別ライセンスで追加"], footer: 'PromptQuorumガイド' },
    zh: { title: 'Onyx评测：自托管企业搜索与RAG', subtitle: '原名Danswer', bullets: ["基于MIT许可证开源（社区版）；相同的项目、GitHub历史和YC W24背书在更名为Onyx后延续", "连接50多个数据源（Slack、Confluence、Google Drive、GitHub）以及本地Ollama模型或云端提供商", "企业版在独立许可证下增加SSO、基于角色的访问控制、分析和白标功能"], footer: 'PromptQuorum 指南' },
    pt: { title: 'Onyx Review: busca corporativa e RAG auto-hospedados', subtitle: 'Antes Danswer', bullets: ["Código aberto sob a licença MIT (edição Community); mesmo projeto, mesmo histórico do GitHub e apoio YC W24 continuados sob o nome renomeado Onyx", "Conecta-se a mais de 50 fontes de dados (Slack, Confluence, Google Drive, GitHub) e a um modelo Ollama local ou provedores em nuvem", "A edição Enterprise adiciona SSO, controle de acesso baseado em funções, análises e white-labeling sob uma licença separada"], footer: 'Guia PromptQuorum' },
    ar: { title: 'مراجعة Onyx: بحث مؤسسي وRAG ذاتيا الاستضافة', subtitle: 'المعروف سابقًا باسم Danswer', bullets: ["مفتوح المصدر بموجب رخصة MIT (نسخة Community)؛ استمر نفس المشروع وتاريخ GitHub ودعم YC W24 تحت اسم Onyx بعد إعادة التسمية", "يتصل بأكثر من 50 مصدر بيانات (Slack وConfluence وGoogle Drive وGitHub) وبنموذج Ollama محلي أو مزودي خدمة سحابية", "تضيف نسخة Enterprise تسجيل الدخول الموحد والتحكم في الوصول القائم على الأدوار والتحليلات والعلامة البيضاء برخصة منفصلة"], footer: 'دليل PromptQuorum' },
    ko: { title: 'Onyx 리뷰: 자체 호스팅 엔터프라이즈 검색과 RAG', subtitle: '구 Danswer', bullets: ["MIT 라이선스(Community Edition) 하에 오픈소스; 동일한 프로젝트, GitHub 이력, YC W24 지원이 명칭 변경된 Onyx 아래 이어짐", "Slack, Confluence, Google Drive, GitHub 등 50개 이상의 데이터 소스 및 로컬 Ollama 모델이나 클라우드 제공업체에 연결", "Enterprise Edition은 별도 라이선스 하에 SSO, 역할 기반 접근 제어, 분석, 화이트라벨링 추가"], footer: 'PromptQuorum 가이드' },
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
