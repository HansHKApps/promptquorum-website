#!/usr/bin/env node
const BASE = process.env.HERO_BASE || 'http://localhost:3500';
const SPECS = {
  'locally-uncensored-review': {
    en: { title: "Locally Uncensored Review 2026: Local Chat, Image, and Video in One App", subtitle: '', bullets: ["A free, open-source (AGPL-3.0) desktop app for Windows and Linux that runs chat, code, and image generation through backends like Ollama, llama.cpp, KoboldCpp, and LocalAI", "Phone and tablet access to the PC-hosted model via QR-code and passcode pairing — local network by default, with an opt-in encrypted Cloudflare Tunnel for remote access", "A separate, optional LU Labs Cloud service sells hosted GPU inference by subscription or credit pack; the free local app does not require it"], footer: "PromptQuorum Guide" },
    de: { title: "Locally Uncensored Review 2026: Lokaler Chat, Bild und Video in einer App", subtitle: '', bullets: ["Eine kostenlose, quelloffene (AGPL-3.0) Desktop-App für Windows und Linux, die Chat, Code und Bildgenerierung über Backends wie Ollama, llama.cpp, KoboldCpp und LocalAI ausführt", "Smartphone- und Tablet-Zugriff auf das PC-gehostete Modell per QR-Code- und Passcode-Kopplung — standardmäßig im lokalen Netzwerk, mit optionalem verschlüsseltem Cloudflare Tunnel für Fernzugriff", "Ein separater, optionaler Dienst LU Labs Cloud verkauft gehostete GPU-Inferenz per Abonnement oder Guthaben-Paket; die kostenlose lokale App setzt dies nicht voraus"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Locally Uncensored : avis 2026 sur le chat, l'image et la vidéo locaux en une seule application", subtitle: '', bullets: ["Une application de bureau gratuite et open source (AGPL-3.0) pour Windows et Linux qui exécute chat, code et génération d'images via des moteurs comme Ollama, llama.cpp, KoboldCpp et LocalAI", "Accès depuis un téléphone ou une tablette au modèle hébergé sur le PC via un couplage par QR code et code d'accès — réseau local par défaut, avec un tunnel Cloudflare chiffré optionnel pour l'accès distant", "Un service distinct et optionnel, LU Labs Cloud, vend de l'inférence GPU hébergée par abonnement ou par crédits ; l'application locale gratuite ne l'exige pas"], footer: "Guide PromptQuorum" },
    es: { title: "Locally Uncensored: reseña 2026 de chat, imagen y video local en una sola app", subtitle: '', bullets: ["Una app de escritorio gratuita y de código abierto (AGPL-3.0) para Windows y Linux que ejecuta chat, código y generación de imágenes mediante backends como Ollama, llama.cpp, KoboldCpp y LocalAI", "Acceso desde el teléfono o la tablet al modelo alojado en el PC mediante emparejamiento por código QR y código de acceso — red local por defecto, con túnel Cloudflare cifrado opcional para acceso remoto", "Un servicio independiente y opcional, LU Labs Cloud, vende inferencia en GPU alojada por suscripción o créditos; la app local gratuita no lo requiere"], footer: "Guía de PromptQuorum" },
    ja: { title: "Locally Uncensored レビュー2026：チャット・画像・動画をローカルで1つに統合するアプリ", subtitle: '', bullets: ["Ollama、llama.cpp、KoboldCpp、LocalAIなどのバックエンドを通じてチャット・コード・画像生成を実行する、Windows・Linux向けの無料・オープンソース（AGPL-3.0）デスクトップアプリ", "QRコードとパスコードによるペアリングで、スマホやタブレットからPC上でホストされたモデルにアクセス可能 — デフォルトはローカルネットワーク、リモートアクセス用の暗号化Cloudflare Tunnelもオプションで利用可能", "別売りのオプションサービスLU Labs Cloudがサブスクリプションまたはクレジットパックでホスト型GPU推論を販売するが、無料のローカルアプリはこれを必要としない"], footer: "PromptQuorumガイド" },
    zh: { title: "Locally Uncensored 评测2026：一个应用搞定本地聊天、图像与视频", subtitle: '', bullets: ["一款面向Windows和Linux的免费开源（AGPL-3.0）桌面应用，通过Ollama、llama.cpp、KoboldCpp、LocalAI等后端运行聊天、代码和图像生成", "通过二维码和密码配对，从手机或平板访问PC托管的模型——默认走本地网络，并提供可选的加密Cloudflare Tunnel用于远程访问", "一项独立可选的LU Labs Cloud服务通过订阅或积分包出售托管GPU推理，免费本地应用无需该服务"], footer: "PromptQuorum 指南" },
    pt: { title: "Locally Uncensored: análise 2026 de chat, imagem e vídeo locais em um só app", subtitle: '', bullets: ["Um app de desktop gratuito e de código aberto (AGPL-3.0) para Windows e Linux que executa chat, código e geração de imagens por meio de backends como Ollama, llama.cpp, KoboldCpp e LocalAI", "Acesso pelo celular ou tablet ao modelo hospedado no PC via pareamento por QR code e código de acesso — rede local por padrão, com túnel Cloudflare criptografado opcional para acesso remoto", "Um serviço separado e opcional, LU Labs Cloud, vende inferência em GPU hospedada por assinatura ou créditos; o app local gratuito não exige isso"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة Locally Uncensored لعام 2026: الدردشة والصور والفيديو محليًا في تطبيق واحد", subtitle: '', bullets: ["تطبيق سطح مكتب مجاني ومفتوح المصدر (AGPL-3.0) لأنظمة Windows وLinux يشغّل الدردشة والبرمجة وتوليد الصور عبر محركات مثل Ollama وَllama.cpp وَKoboldCpp وَLocalAI", "الوصول من الهاتف أو الجهاز اللوحي إلى النموذج المستضاف على الكمبيوتر عبر اقتران برمز QR وكلمة مرور — عبر الشبكة المحلية افتراضيًا، مع نفق Cloudflare Tunnel مشفّر اختياري للوصول عن بُعد", "خدمة منفصلة واختيارية، LU Labs Cloud، تبيع استدلالًا سحابيًا مستضافًا على GPU عبر الاشتراك أو حزم الرصيد؛ لا يتطلبها التطبيق المحلي المجاني"], footer: "دليل PromptQuorum" },
    ko: { title: "Locally Uncensored 리뷰 2026: 로컬 채팅·이미지·비디오를 하나의 앱으로", subtitle: '', bullets: ["Ollama, llama.cpp, KoboldCpp, LocalAI 같은 백엔드를 통해 채팅·코드·이미지 생성을 실행하는 Windows·Linux용 무료 오픈소스(AGPL-3.0) 데스크톱 앱", "QR 코드와 패스코드 페어링을 통해 스마트폰이나 태블릿에서 PC에 호스팅된 모델에 접근 — 기본값은 로컬 네트워크, 원격 접근을 위한 암호화된 Cloudflare Tunnel도 선택적으로 제공", "별도의 선택적 서비스인 LU Labs Cloud가 구독 또는 크레딧 팩으로 호스팅된 GPU 추론을 판매하지만, 무료 로컬 앱은 이를 필요로 하지 않음"], footer: "PromptQuorum 가이드" },
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
