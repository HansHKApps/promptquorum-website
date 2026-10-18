'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import { LangLinksBar } from '@/components/LangLinksBar'
import { AppLink as Link } from '@/components/AppLink'
import { FAQAccordion } from './FAQAccordion'
import Image from 'next/image'

const T = {
  en: {
    h1: 'PromptQuorum FAQ: Frameworks, Privacy, AI Models & Getting Started',
    subtitle: 'Everything you need to know about PromptQuorum, pricing, privacy, and getting started.',
    founderH2: 'About the Founder',
    founderTitle: 'Founder & Developer, PromptQuorum',
    founderBio: 'Hans Kuepper is an independent developer based in Baden-Württemberg, Germany, who speaks four languages and has worked in 20+ countries. He built PromptQuorum because teams need a verification layer for AI-generated answers — a way to detect when models hallucinate by comparing outputs across multiple models. Privacy is non-negotiable: your prompts and API keys never touch PromptQuorum servers.',
    ctaH2: 'Ready to try it?',
    ctaDesc: 'PromptQuorum is in free public beta — download it today. No waitlist, no signup required.',
    ctaBtn: 'Download the Beta',
    back: '← Back to Home',
  },
  de: {
    h1: 'PromptQuorum FAQ: Frameworks, Datenschutz, KI-Modelle & Erste Schritte',
    subtitle: 'Alles, was Sie über PromptQuorum, Preise, Datenschutz und den Einstieg wissen müssen.',
    founderH2: 'Über den Gründer',
    founderTitle: 'Gründer & Entwickler, PromptQuorum',
    founderBio: 'Hans Kuepper ist ein unabhängiger Entwickler aus Baden-Württemberg, Deutschland, der vier Sprachen spricht und in über 20 Ländern gelebt und gearbeitet hat. Er entwickelte PromptQuorum, weil Teams eine Verifikationsebene für KI-generierte Antworten benötigen — eine Möglichkeit, Halluzinationen zu erkennen, indem Ausgaben mehrerer Modelle verglichen werden. Datenschutz ist nicht verhandelbar: Ihre Prompts und API-Schlüssel berühren niemals PromptQuorum-Server.',
    ctaH2: 'Bereit zum Ausprobieren?',
    ctaDesc: 'PromptQuorum befindet sich in der öffentlichen Beta — laden Sie es noch heute herunter. Keine Warteliste, keine Anmeldung nötig.',
    ctaBtn: 'Beta herunterladen',
    back: '← Zurück zur Startseite',
  },
  fr: {
    h1: 'FAQ PromptQuorum: Frameworks, Confidentialité, Modèles IA et Premiers Pas',
    subtitle: 'Tout ce que vous devez savoir sur PromptQuorum, les tarifs, la confidentialité et les premiers pas.',
    founderH2: 'À propos du fondateur',
    founderTitle: 'Fondateur & Développeur, PromptQuorum',
    founderBio: 'Hans Kuepper est un développeur indépendant basé en Bade-Wurtemberg, Allemagne, qui parle quatre langues et a travaillé dans plus de 20 pays. Il a créé PromptQuorum parce que les équipes ont besoin d\'une couche de vérification pour les réponses générées par l\'IA — un moyen de détecter les hallucinations en comparant les résultats de plusieurs modèles. La confidentialité est non-négociable : vos prompts et clés API ne passent jamais par les serveurs PromptQuorum.',
    ctaH2: 'Prêt à l\'essayer ?',
    ctaDesc: 'PromptQuorum est en bêta publique — téléchargez-le dès aujourd\'hui. Sans liste d\'attente, sans inscription.',
    ctaBtn: 'Télécharger la bêta',
    back: '← Retour à l\'accueil',
  },
  ja: {
    h1: 'PromptQuorum FAQ: フレームワーク、プライバシー、AIモデル、はじめ方',
    subtitle: 'PromptQuorum、料金、プライバシー、使い始め方について知っておくべきことすべて。',
    founderH2: '創設者について',
    founderTitle: '創設者 & 開発者、PromptQuorum',
    founderBio: 'ハンス・キュッパーはドイツのバーデン＝ヴュルテンベルク州を拠点とする独立系開発者で、4か国語を話し、20か国以上で生活・勤務経験があります。チームはAI生成の回答を検証する必要があると考え、複数のモデルの出力を比較することで幻覚を検出する方法としてPromptQuorumを構築しました。プライバシーは譲歩できません。あなたのプロンプトとAPIキーはPromptQuorumのサーバーを通過しません。',
    ctaH2: '試してみる準備はできましたか？',
    ctaDesc: 'PromptQuorumはパブリックベータ公開中です。今すぐダウンロードできます。ウェイトリストや登録は不要です。',
    ctaBtn: 'ベータ版をダウンロード',
    back: '← ホームに戻る',
  },
  zh: {
    h1: 'PromptQuorum FAQ: 框架、隐私、AI 模型与入门指南',
    subtitle: '关于 PromptQuorum、定价、隐私和入门您需要了解的一切。',
    founderH2: '关于创始人',
    founderTitle: '创始人 & 开发者，PromptQuorum',
    founderBio: '汉斯·库佩尔是一位独立开发者，位于德国巴登-符腾堡州，会说四种语言，曾在20多个国家生活和工作。他创建PromptQuorum是因为团队需要一个验证层来确保AI生成的答案——通过比较多个模型的输出来检测幻觉。隐私不可妥协：您的提示和API密钥永远不会经过PromptQuorum的服务器。',
    ctaH2: '准备好尝试了吗？',
    ctaDesc: 'PromptQuorum 现已开放公开测试——立即下载。无需候补名单，无需注册。',
    ctaBtn: '下载测试版',
    back: '← 返回首页',
  },
  es: {
    h1: 'FAQ de PromptQuorum: Frameworks, Privacidad, Modelos de IA y Primeros Pasos',
    subtitle: 'Todo lo que necesitas saber sobre PromptQuorum, precios, privacidad y cómo empezar.',
    founderH2: 'Sobre el fundador',
    founderTitle: 'Fundador y desarrollador, PromptQuorum',
    founderBio: 'Hans Kuepper es un desarrollador independiente con base en Baden-Württemberg, Alemania, que habla cuatro idiomas y ha trabajado en más de 20 países. Creó PromptQuorum porque los equipos necesitan una capa de verificación para las respuestas generadas por IA — una forma de detectar alucinaciones comparando los resultados de múltiples modelos. La privacidad no es negociable: tus prompts y claves de API nunca pasan por los servidores de PromptQuorum.',
    ctaH2: '¿Listo para probarlo?',
    ctaDesc: 'PromptQuorum está en beta pública — descárgalo hoy mismo. Sin lista de espera, sin registro.',
    ctaBtn: 'Descargar la beta',
    back: '← Volver al inicio',
  },
  pt: {
    h1: 'FAQ do PromptQuorum: Frameworks, Privacidade, Modelos de IA e Primeiros Passos',
    subtitle: 'Tudo o que você precisa saber sobre o PromptQuorum, preços, privacidade e como começar.',
    founderH2: 'Sobre o fundador',
    founderTitle: 'Fundador e desenvolvedor, PromptQuorum',
    founderBio: 'Hans Kuepper é um desenvolvedor independente baseado em Baden-Württemberg, Alemanha, que fala quatro idiomas e já trabalhou em mais de 20 países. Ele criou o PromptQuorum porque as equipes precisam de uma camada de verificação para as respostas geradas por IA — uma forma de detectar alucinações comparando os resultados de múltiplos modelos. A privacidade não é negociável: seus prompts e chaves de API nunca passam pelos servidores do PromptQuorum.',
    ctaH2: 'Pronto para experimentar?',
    ctaDesc: 'O PromptQuorum está em beta pública — baixe hoje mesmo. Sem lista de espera, sem cadastro.',
    ctaBtn: 'Baixar o Beta',
    back: '← Voltar ao início',
  },
  ko: {
    h1: 'PromptQuorum FAQ: 프레임워크, 개인정보 보호, AI 모델 및 시작하기',
    subtitle: 'PromptQuorum, 요금, 개인정보 보호 및 시작 방법에 대해 알아야 할 모든 것.',
    founderH2: '창립자 소개',
    founderTitle: '창립자 & 개발자, PromptQuorum',
    founderBio: 'Hans Kuepper는 독일 바덴-뷔르템베르크 주에 기반을 둔 독립 개발자로, 4개 언어를 구사하며 20개 이상의 나라에서 생활하고 일했습니다. 그는 팀이 AI가 생성한 답변을 검증할 레이어가 필요하다고 판단해 PromptQuorum을 개발했습니다. 여러 모델의 출력을 비교하면 환각을 감지할 수 있습니다. 개인정보 보호는 타협할 수 없습니다: 프롬프트와 API 키는 절대 PromptQuorum 서버에 전달되지 않습니다.',
    ctaH2: 'هل أنت مستعد للتجربة؟',
    ctaDesc: 'يتوفر PromptQuorum الآن في النسخة التجريبية العامة — نزّله اليوم. دون قائمة انتظار ودون تسجيل.',
    ctaBtn: 'تنزيل النسخة التجريبية',
    back: '← 홈으로 돌아가기',
  },
  ar: {
    h1: 'الأسئلة الشائعة حول PromptQuorum: الأطر، الخصوصية، نماذج الذكاء الاصطناعي والبدء',
    subtitle: 'كل ما تحتاج معرفته عن PromptQuorum، الأسعار، الخصوصية، وكيفية البدء.',
    founderH2: 'عن المؤسس',
    founderTitle: 'المؤسس والمطور، PromptQuorum',
    founderBio: 'هانس كوبر مطور مستقل مقيم في بادن-فورتمبرغ، ألمانيا، يتحدث أربع لغات وعمل في أكثر من 20 دولة. بنى PromptQuorum لأن الفرق تحتاج إلى طبقة تحقق للإجابات التي تولّدها الذكاء الاصطناعي — طريقة للكشف عن الهلوسة عبر مقارنة مخرجات نماذج متعددة. الخصوصية غير قابلة للتفاوض: لا تمر تعليماتك ومفاتيح API الخاصة بك أبدًا عبر خوادم PromptQuorum.',
    ctaH2: '사용해볼 준비가 되셨나요?',
    ctaDesc: 'PromptQuorum은 퍼블릭 베타 단계입니다 — 지금 바로 다운로드하세요. 대기자 명단이나 가입이 필요하지 않습니다.',
    ctaBtn: '베타 다운로드',
    back: '→ العودة إلى الصفحة الرئيسية',
  },
}

function FAQContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)
  const t = (T[lang as keyof typeof T] ?? T.en)!

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.h1}</h1>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        {/* Cross-language links */}
        <LangLinksBar cluster="faq" slug="" availableLangs={["en", "de", "fr", "ja", "zh", "es", "pt", "ar", "ko"]} initialLang={initialLang} />

        <FAQAccordion lang={lang} />

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.founderH2}</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/hans-kuepper.jpg"
                  alt="Hans Kuepper, Founder of PromptQuorum"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-xl object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Hans Kuepper</h3>
                <p className="text-sm text-purple-600 font-medium mb-4">{t.founderTitle}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{t.founderBio}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/hanskuepper/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/HansKuepperAPPs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    X / Twitter
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    About Page →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.ctaH2}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <a
            href="/download"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            {t.ctaBtn}
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  )
}

export function FAQPageClient({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <FAQContent initialLang={initialLang} />
}
