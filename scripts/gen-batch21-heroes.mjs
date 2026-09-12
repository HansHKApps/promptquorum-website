#!/usr/bin/env node
const BASE = 'http://localhost:3421';
const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum',
  es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
};

const SPECS = {
  'odysseus-review': {
    en: { title: 'Odysseus Review 2026: The Self-Hosted AI Workspace', bullets: [
      'Odysseus (github.com/odysseus-dev/odysseus) is a free, open-source, self-hosted AI workspace — chat, agents, research, docs, email, notes, and calendar in one Docker deployment.',
      'Started by content creator Felix Kjellberg (PewDiePie); now maintained under the community odysseus-dev GitHub organization. AGPL-3.0-or-later, 87,156 stars as of 2026-09-12.',
      'Installs via `git clone` + `docker compose up -d --build`; works with local models (Ollama, llama.cpp, vLLM) or API providers (OpenAI, OpenRouter).',
    ]},
    de: { title: 'Odysseus Review 2026: Der selbstgehostete KI-Arbeitsbereich', bullets: [
      'Odysseus (github.com/odysseus-dev/odysseus) ist ein kostenloser, quelloffener, selbstgehosteter KI-Arbeitsbereich — Chat, Agenten, Recherche, Dokumente, E-Mail, Notizen und Kalender in einer Docker-Bereitstellung.',
      'Gestartet vom Content-Creator Felix Kjellberg (PewDiePie); heute unter der Community-GitHub-Organisation odysseus-dev gepflegt. AGPL-3.0-or-later, 87.156 Sterne zum 12.09.2026.',
      'Installation per `git clone` + `docker compose up -d --build`; funktioniert mit lokalen Modellen (Ollama, llama.cpp, vLLM) oder API-Anbietern (OpenAI, OpenRouter).',
    ]},
    fr: { title: 'Odysseus Review 2026 : l\'espace de travail IA auto-hébergé', bullets: [
      'Odysseus (github.com/odysseus-dev/odysseus) est un espace de travail IA gratuit, open source et auto-hébergé — chat, agents, recherche, documents, e-mail, notes et calendrier en un déploiement Docker.',
      'Lancé par le créateur de contenu Felix Kjellberg (PewDiePie) ; aujourd\'hui maintenu par l\'organisation communautaire GitHub odysseus-dev. AGPL-3.0-or-later, 87 156 étoiles au 12/09/2026.',
      'Installation via `git clone` + `docker compose up -d --build` ; fonctionne avec des modèles locaux (Ollama, llama.cpp, vLLM) ou des fournisseurs d\'API (OpenAI, OpenRouter).',
    ]},
    es: { title: 'Odysseus Review 2026: el espacio de trabajo de IA autoalojado', bullets: [
      'Odysseus (github.com/odysseus-dev/odysseus) es un espacio de trabajo de IA gratuito, de código abierto y autoalojado — chat, agentes, investigación, documentos, correo, notas y calendario en un despliegue Docker.',
      'Iniciado por el creador de contenido Felix Kjellberg (PewDiePie); hoy mantenido por la organización comunitaria de GitHub odysseus-dev. AGPL-3.0-or-later, 87.156 estrellas al 12/09/2026.',
      'Instalación vía `git clone` + `docker compose up -d --build`; funciona con modelos locales (Ollama, llama.cpp, vLLM) o proveedores de API (OpenAI, OpenRouter).',
    ]},
    pt: { title: 'Odysseus Review 2026: o espaço de trabalho de IA auto-hospedado', bullets: [
      'Odysseus (github.com/odysseus-dev/odysseus) é um espaço de trabalho de IA gratuito, de código aberto e auto-hospedado — chat, agentes, pesquisa, documentos, e-mail, notas e calendário em uma implantação Docker.',
      'Iniciado pelo criador de conteúdo Felix Kjellberg (PewDiePie); hoje mantido pela organização comunitária do GitHub odysseus-dev. AGPL-3.0-or-later, 87.156 estrelas em 12/09/2026.',
      'Instalação via `git clone` + `docker compose up -d --build`; funciona com modelos locais (Ollama, llama.cpp, vLLM) ou provedores de API (OpenAI, OpenRouter).',
    ]},
    ja: { title: 'Odysseusレビュー2026: セルフホスト型AIワークスペース', bullets: [
      'Odysseus（github.com/odysseus-dev/odysseus）は、チャット・エージェント・リサーチ・文書・メール・メモ・カレンダーを1つのDockerデプロイに統合した、無料オープンソースのセルフホスト型AIワークスペース。',
      'コンテンツクリエイターのFelix Kjellberg（PewDiePie）が開始。現在はコミュニティのGitHub組織odysseus-devが維持。AGPL-3.0-or-later、2026年9月12日時点で87,156スター。',
      '`git clone`と`docker compose up -d --build`でインストール。ローカルモデル（Ollama、llama.cpp、vLLM）またはAPIプロバイダー（OpenAI、OpenRouter）に対応。',
    ]},
    zh: { title: 'Odysseus评测2026：自托管AI工作空间', bullets: [
      'Odysseus（github.com/odysseus-dev/odysseus）是一款免费开源的自托管AI工作空间——将聊天、代理、研究、文档、邮件、笔记和日历整合进一个Docker部署。',
      '由内容创作者Felix Kjellberg（PewDiePie）发起；现由社区GitHub组织odysseus-dev维护。AGPL-3.0-or-later许可，截至2026年9月12日拥有87,156个star。',
      '通过`git clone`加`docker compose up -d --build`安装；支持本地模型（Ollama、llama.cpp、vLLM）或API提供方（OpenAI、OpenRouter）。',
    ]},
    ar: { title: 'مراجعة Odysseus 2026: مساحة عمل الذكاء الاصطناعي ذاتية الاستضافة', bullets: [
      'Odysseus (github.com/odysseus-dev/odysseus) مساحة عمل ذكاء اصطناعي مجانية ومفتوحة المصدر وذاتية الاستضافة — دردشة ووكلاء وبحث ومستندات وبريد إلكتروني وملاحظات وتقويم في عملية نشر واحدة عبر Docker.',
      'بدأها صانع المحتوى فيليكس كيلبرغ (PewDiePie)؛ تتم صيانتها اليوم من قبل منظمة GitHub المجتمعية odysseus-dev. رخصة AGPL-3.0-or-later، و87,156 نجمة حتى 2026-09-12.',
      'التثبيت عبر `git clone` و`docker compose up -d --build`؛ يعمل مع نماذج محلية (Ollama وllama.cpp وvLLM) أو مزودي واجهات برمجة تطبيقات (OpenAI وOpenRouter).',
    ]},
    ko: { title: 'Odysseus 리뷰 2026: 셀프 호스팅 AI 워크스페이스', bullets: [
      'Odysseus(github.com/odysseus-dev/odysseus)는 채팅, 에이전트, 리서치, 문서, 이메일, 메모, 캘린더를 하나의 Docker 배포로 결합한 무료 오픈소스 셀프 호스팅 AI 워크스페이스.',
      '콘텐츠 크리에이터 펠릭스 셸버그(PewDiePie)가 시작; 현재는 커뮤니티 GitHub 조직 odysseus-dev가 유지 관리. AGPL-3.0-or-later, 2026년 9월 12일 기준 스타 87,156개.',
      '`git clone`과 `docker compose up -d --build`로 설치; 로컬 모델(Ollama, llama.cpp, vLLM) 또는 API 제공업체(OpenAI, OpenRouter)와 작동.',
    ]},
  },
  'phoneclaw-review': {
    en: { title: 'PhoneClaw Review 2026: The On-Device iPhone AI Agent', bullets: [
      'PhoneClaw (github.com/kellyvv/PhoneClaw) is a free, open-source iOS app that runs Gemma 4 (E2B/E4B) and MiniCPM-V 4.6 on-device to act as a phone agent — calendar, reminders, contacts, camera.',
      'Apache-2.0 license, 1,244 GitHub stars as of 2026-09-12. Requires iOS 17.0+; E4B model recommended for iPhone 15 Pro and newer.',
      'Installs via official TestFlight link, or manual Xcode build. Optional Mac Gateway pairs over LAN with Ollama, Codex CLI, or Antigravity CLI for larger tasks.',
    ]},
    de: { title: 'PhoneClaw Review 2026: Der On-Device-KI-Agent fürs iPhone', bullets: [
      'PhoneClaw (github.com/kellyvv/PhoneClaw) ist eine kostenlose, quelloffene iOS-App, die Gemma 4 (E2B/E4B) und MiniCPM-V 4.6 On-Device ausführt — Kalender, Erinnerungen, Kontakte, Kamera.',
      'Apache-2.0-Lizenz, 1.244 GitHub-Sterne zum 12.09.2026. Benötigt iOS 17.0+; E4B-Modell empfohlen für iPhone 15 Pro und neuer.',
      'Installation über offiziellen TestFlight-Link oder manuellen Xcode-Build. Optionales Mac Gateway koppelt per LAN mit Ollama, Codex CLI oder Antigravity CLI für größere Aufgaben.',
    ]},
    fr: { title: 'PhoneClaw Review 2026 : l\'agent IA sur l\'appareil pour iPhone', bullets: [
      'PhoneClaw (github.com/kellyvv/PhoneClaw) est une application iOS gratuite et open source qui exécute Gemma 4 (E2B/E4B) et MiniCPM-V 4.6 sur l\'appareil — calendrier, rappels, contacts, caméra.',
      'Licence Apache-2.0, 1 244 étoiles GitHub au 12/09/2026. Nécessite iOS 17.0+ ; modèle E4B recommandé pour iPhone 15 Pro et plus récent.',
      'Installation via le lien TestFlight officiel ou compilation manuelle avec Xcode. Le Mac Gateway optionnel se couple en LAN avec Ollama, Codex CLI ou Antigravity CLI pour les tâches plus lourdes.',
    ]},
    es: { title: 'PhoneClaw Review 2026: el agente de IA en el dispositivo para iPhone', bullets: [
      'PhoneClaw (github.com/kellyvv/PhoneClaw) es una app iOS gratuita y de código abierto que ejecuta Gemma 4 (E2B/E4B) y MiniCPM-V 4.6 en el dispositivo — calendario, recordatorios, contactos, cámara.',
      'Licencia Apache-2.0, 1.244 estrellas en GitHub al 12/09/2026. Requiere iOS 17.0+; modelo E4B recomendado para iPhone 15 Pro y más reciente.',
      'Se instala vía el enlace oficial de TestFlight o compilación manual con Xcode. El Mac Gateway opcional se empareja por LAN con Ollama, Codex CLI o Antigravity CLI para tareas más grandes.',
    ]},
    pt: { title: 'PhoneClaw Review 2026: o agente de IA no dispositivo para iPhone', bullets: [
      'PhoneClaw (github.com/kellyvv/PhoneClaw) é um app iOS gratuito e de código aberto que executa Gemma 4 (E2B/E4B) e MiniCPM-V 4.6 no dispositivo — calendário, lembretes, contatos, câmera.',
      'Licença Apache-2.0, 1.244 estrelas no GitHub em 12/09/2026. Requer iOS 17.0+; modelo E4B recomendado para iPhone 15 Pro e mais recente.',
      'Instala-se via link oficial do TestFlight ou compilação manual com Xcode. O Mac Gateway opcional pareia via LAN com Ollama, Codex CLI ou Antigravity CLI para tarefas maiores.',
    ]},
    ja: { title: 'PhoneClawレビュー2026: オンデバイスのiPhone AIエージェント', bullets: [
      'PhoneClaw（github.com/kellyvv/PhoneClaw）は、Gemma 4（E2B/E4B）とMiniCPM-V 4.6をオンデバイスで実行する無料オープンソースのiOSアプリ——カレンダー、リマインダー、連絡先、カメラを操作。',
      'Apache-2.0ライセンス、2026年9月12日時点でGitHubスター1,244個。iOS 17.0以降が必要。E4Bモデルは新しいiPhone 15 Pro向けに推奨。',
      '公式TestFlightリンクまたはXcodeでの手動ビルドでインストール。オプションのMac Gatewayが、より大きなタスクのためにLAN経由でOllama、Codex CLI、Antigravity CLIとペアリング。',
    ]},
    zh: { title: 'PhoneClaw评测2026：iPhone设备端AI代理', bullets: [
      'PhoneClaw（github.com/kellyvv/PhoneClaw）是一款免费开源的iOS应用，在设备端运行Gemma 4（E2B/E4B）和MiniCPM-V 4.6——操作日历、提醒事项、联系人、相机。',
      'Apache-2.0许可，截至2026年9月12日GitHub star数为1,244。需要iOS 17.0以上；E4B模型推荐用于iPhone 15 Pro及更新机型。',
      '通过官方TestFlight链接或Xcode手动构建安装。可选的Mac Gateway通过局域网与Ollama、Codex CLI或Antigravity CLI配对以处理更大任务。',
    ]},
    ar: { title: 'مراجعة PhoneClaw 2026: وكيل الذكاء الاصطناعي على الجهاز لآيفون', bullets: [
      'PhoneClaw (github.com/kellyvv/PhoneClaw) تطبيق iOS مجاني ومفتوح المصدر يشغّل Gemma 4 (E2B/E4B) وMiniCPM-V 4.6 على الجهاز — التقويم والتذكيرات وجهات الاتصال والكاميرا.',
      'رخصة Apache-2.0، و1,244 نجمة على GitHub حتى 2026-09-12. يتطلب iOS 17.0 فأعلى؛ يُنصح بنموذج E4B لأجهزة iPhone 15 Pro وأحدث.',
      'التثبيت عبر رابط TestFlight الرسمي أو البناء اليدوي بـXcode. ميزة Mac Gateway الاختيارية تقترن عبر الشبكة المحلية بـOllama وCodex CLI أوAntigravity CLI للمهام الأكبر.',
    ]},
    ko: { title: 'PhoneClaw 리뷰 2026: 온디바이스 아이폰 AI 에이전트', bullets: [
      'PhoneClaw(github.com/kellyvv/PhoneClaw)는 Gemma 4(E2B/E4B)와 MiniCPM-V 4.6을 온디바이스로 실행하는 무료 오픈소스 iOS 앱 — 캘린더, 알림, 연락처, 카메라 조작.',
      'Apache-2.0 라이선스, 2026년 9월 12일 기준 GitHub 스타 1,244개. iOS 17.0 이상 필요; E4B 모델은 iPhone 15 Pro 이상에 권장.',
      '공식 TestFlight 링크 또는 Xcode 수동 빌드로 설치. 선택적 Mac Gateway가 더 큰 작업을 위해 LAN을 통해 Ollama, Codex CLI, Antigravity CLI와 페어링.',
    ]},
  },
  'ypipe-review': {
    en: { title: 'Ypipe Review 2026: The Airgapped Local AI Client', bullets: [
      'Ypipe (ypipe.com, source at github.com/iunera/ypipe) bundles an inference engine, model downloader, and MCP servers into one executable — an "Exclusive Technical Preview" from iunera, not open source.',
      'Only 13 GitHub stars as of 2026-09-12 — by far the smallest, newest tool in this comparison category. Free during preview; commercial licensing anticipated after.',
      'Installs via JBang (`jbang ypipe@iunera/ypipe`), platform binaries (Windows/macOS/Linux), or a universal JAR. Includes SmartPipes visual workflow builder.',
    ]},
    de: { title: 'Ypipe Review 2026: Der air-gapped lokale KI-Client', bullets: [
      'Ypipe (ypipe.com, Quellcode unter github.com/iunera/ypipe) bündelt eine Inferenz-Engine, einen Modell-Downloader und MCP-Server in einer ausführbaren Datei — eine "Exclusive Technical Preview" von iunera, nicht quelloffen.',
      'Nur 13 GitHub-Sterne zum 12.09.2026 — mit Abstand das kleinste, neueste Tool in dieser Vergleichskategorie. Kostenlos während der Vorschau; kommerzielle Lizenzierung danach erwartet.',
      'Installation per JBang (`jbang ypipe@iunera/ypipe`), Plattform-Binärdateien (Windows/macOS/Linux) oder universeller JAR-Datei. Enthält den visuellen Workflow-Builder SmartPipes.',
    ]},
    fr: { title: 'Ypipe Review 2026 : le client IA local isolé', bullets: [
      'Ypipe (ypipe.com, code source sur github.com/iunera/ypipe) regroupe un moteur d\'inférence, un téléchargeur de modèles et des serveurs MCP en un seul exécutable — un "Exclusive Technical Preview" d\'iunera, pas open source.',
      'Seulement 13 étoiles GitHub au 12/09/2026 — de loin l\'outil le plus petit et le plus récent de cette catégorie. Gratuit pendant l\'aperçu ; licence commerciale anticipée ensuite.',
      'S\'installe via JBang (`jbang ypipe@iunera/ypipe`), des binaires par plateforme (Windows/macOS/Linux), ou un JAR universel. Inclut le constructeur de workflows visuel SmartPipes.',
    ]},
    es: { title: 'Ypipe Review 2026: el cliente de IA local con air gap', bullets: [
      'Ypipe (ypipe.com, código fuente en github.com/iunera/ypipe) empaqueta un motor de inferencia, un descargador de modelos y servidores MCP en un único ejecutable — un "Exclusive Technical Preview" de iunera, no de código abierto.',
      'Solo 13 estrellas en GitHub al 12/09/2026 — con diferencia, la herramienta más pequeña y nueva de esta categoría. Gratis durante la vista previa; se anticipa licencia comercial después.',
      'Se instala vía JBang (`jbang ypipe@iunera/ypipe`), binarios por plataforma (Windows/macOS/Linux), o un JAR universal. Incluye el constructor de flujos SmartPipes.',
    ]},
    pt: { title: 'Ypipe Review 2026: o cliente de IA local com air gap', bullets: [
      'Ypipe (ypipe.com, código-fonte em github.com/iunera/ypipe) empacota um motor de inferência, um downloader de modelos e servidores MCP em um único executável — uma "Exclusive Technical Preview" da iunera, não é código aberto.',
      'Apenas 13 estrelas no GitHub em 12/09/2026 — de longe a ferramenta menor e mais nova desta categoria. Gratuito durante a prévia; licenciamento comercial esperado depois.',
      'Instala-se via JBang (`jbang ypipe@iunera/ypipe`), binários por plataforma (Windows/macOS/Linux), ou um JAR universal. Inclui o construtor de fluxos SmartPipes.',
    ]},
    ja: { title: 'Ypipeレビュー2026: エアギャップ対応ローカルAIクライアント', bullets: [
      'Ypipe（ypipe.com、ソースはgithub.com/iunera/ypipe）は推論エンジン、モデルダウンローダー、MCPサーバーを1つの実行ファイルにまとめた、iuneraによる「Exclusive Technical Preview」——オープンソースではない。',
      '2026年9月12日時点でGitHubスターはわずか13個——この比較カテゴリーで群を抜いて最小・最新のツール。プレビュー中は無料、その後は商用ライセンスを予定。',
      'JBang（`jbang ypipe@iunera/ypipe`）、プラットフォーム別バイナリ（Windows/macOS/Linux）、または汎用JARでインストール。ビジュアルワークフロービルダーSmartPipesを含む。',
    ]},
    zh: { title: 'Ypipe评测2026：物理隔离本地AI客户端', bullets: [
      'Ypipe（ypipe.com，源代码见github.com/iunera/ypipe）将推理引擎、模型下载器和MCP服务器打包进单一可执行文件——iunera推出的"独家技术预览版"，并非开源。',
      '截至2026年9月12日GitHub star数仅为13——在此比较类别中差距悬殊地成为规模最小、最新的工具。预览期间免费，之后预计推出商业许可。',
      '通过JBang（`jbang ypipe@iunera/ypipe`）、平台二进制文件（Windows/macOS/Linux）或通用JAR安装。包含可视化工作流构建器SmartPipes。',
    ]},
    ar: { title: 'مراجعة Ypipe 2026: عميل الذكاء الاصطناعي المحلي المعزول تماماً', bullets: [
      'Ypipe (ypipe.com، والكود المصدري على github.com/iunera/ypipe) يجمع محرك استدلال وأداة تنزيل نماذج وخوادم MCP في ملف تنفيذي واحد — "معاينة تقنية حصرية" من iunera، وليست مفتوحة المصدر.',
      '13 نجمة فقط على GitHub حتى 2026-09-12 — بفارق كبير أصغر وأحدث أداة في فئة المقارنة هذه. مجانية خلال المعاينة؛ يُتوقع ترخيص تجاري بعدها.',
      'التثبيت عبر JBang (`jbang ypipe@iunera/ypipe`)، أو ملفات ثنائية حسب المنصة (Windows/macOS/Linux)، أو ملف JAR عام. تتضمن أداة بناء سير العمل البصرية SmartPipes.',
    ]},
    ko: { title: 'Ypipe 리뷰 2026: 에어갭 로컬 AI 클라이언트', bullets: [
      'Ypipe(ypipe.com, 소스는 github.com/iunera/ypipe)는 추론 엔진, 모델 다운로더, MCP 서버를 하나의 실행 파일로 묶은 iunera의 "Exclusive Technical Preview" — 오픈소스 아님.',
      '2026년 9월 12일 기준 GitHub 스타는 겨우 13개 — 이 비교 카테고리에서 단연 가장 작고 최신인 도구. 프리뷰 동안 무료, 이후 상업용 라이선스 예정.',
      'JBang(`jbang ypipe@iunera/ypipe`), 플랫폼별 바이너리(Windows/macOS/Linux), 또는 범용 JAR로 설치. 시각적 워크플로 빌더 SmartPipes 포함.',
    ]},
  },
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: '', bullets: spec.bullets, footer: FOOTER[lang] }),
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
