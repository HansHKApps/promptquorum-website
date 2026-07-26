'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import type { BlogPost, Language } from '@/lib/blog/blogContent'
import { blogContent } from '@/lib/blog/blogContent'
import { blogMetadata } from '@/lib/blog/blogTranslations'
import { getDateISO } from '@/lib/blog/getDateISO'
import { LangLinksBar } from '@/components/LangLinksBar'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { FrameworkWheel } from '@/components/FrameworkWheel'
import { ImageLightbox } from '@/components/ImageLightbox'
import { FactsDisclaimer } from '@/components/FactsDisclaimer'
import Image from 'next/image'

interface BlogPostClientProps {
  post: BlogPost
  slug: string
  initialLang?: Language
}

interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

const BLOG_UI = {
  breadcrumbHome: {
    en: 'Home',
    de: 'Startseite',
    fr: 'Accueil',
    ja: 'ホーム',
    zh: '主页',
    es: 'Inicio',
    pt: 'Início',
    ar: 'الرئيسية',
    ko: '홈',
  },
  breadcrumbHub: {
    en: 'Blog',
    de: 'Blog',
    fr: 'Blog',
    ja: 'ブログ',
    zh: '博客',
    es: 'Blog',
    pt: 'Blog',
    ar: 'المدونة',
    ko: '블로그',
  },
  ctaHeading: {
    en: 'Your backend, your choice — local LLM or API keys',
    de: 'Ihr Backend, Ihre Wahl — lokales LLM oder API-Schlüssel',
    fr: 'Votre backend, votre choix — LLM local ou clés API',
    ja: 'バックエンドはあなた次第 — ローカルLLMまたはAPIキー',
    zh: '后端由你决定 — 本地LLM或API密钥',
    es: 'Tu backend, tu elección — LLM local o claves API',
    pt: 'Seu backend, sua escolha — LLM local ou chaves de API',
    ar: 'الخلفية من اختيارك — نموذج لغوي محلي أو مفاتيح API',
    ko: '백엔드는 당신의 선택 — 로컬 LLM 또는 API 키',
  },
  ctaDescription: {
    en: "PromptQuorum works with local models and cloud API keys alike. Bring your own Ollama setup or connect any provider's API key — you decide which LLM runs your prompts.",
    de: 'PromptQuorum funktioniert sowohl mit lokalen Modellen als auch mit Cloud-API-Schlüsseln. Nutzen Sie Ihr eigenes Ollama-Setup oder verbinden Sie den API-Schlüssel eines beliebigen Anbieters — Sie entscheiden, welches LLM Ihre Prompts ausführt.',
    fr: "PromptQuorum fonctionne aussi bien avec des modèles locaux qu'avec des clés API cloud. Utilisez votre propre configuration Ollama ou connectez la clé API de n'importe quel fournisseur — vous décidez quel LLM exécute vos prompts.",
    ja: 'PromptQuorumはローカルモデルとクラウドAPIキーの両方に対応しています。独自のOllama環境を使用するか、任意のプロバイダーのAPIキーを接続してください — どのLLMでプロンプトを実行するかはあなたが決められます。',
    zh: 'PromptQuorum既支持本地模型，也支持云端API密钥。使用你自己的Ollama配置，或连接任意服务商的API密钥——由你决定哪个LLM来运行你的提示词。',
    es: 'PromptQuorum funciona tanto con modelos locales como con claves API en la nube. Usa tu propia configuración de Ollama o conecta la clave API de cualquier proveedor — tú decides qué LLM ejecuta tus prompts.',
    pt: 'O PromptQuorum funciona tanto com modelos locais quanto com chaves de API na nuvem. Use sua própria configuração do Ollama ou conecte a chave de API de qualquer provedor — você decide qual LLM executa seus prompts.',
    ar: 'يعمل PromptQuorum مع النماذج المحلية ومفاتيح API السحابية على حد سواء. استخدم إعداد Ollama الخاص بك أو اربط مفتاح API لأي مزود — أنت من يقرر أي نموذج لغوي يشغّل موجّهاتك.',
    ko: 'PromptQuorum은 로컬 모델과 클라우드 API 키 모두와 함께 작동합니다. 자체 Ollama 설정을 사용하거나 원하는 제공업체의 API 키를 연결하세요 — 어떤 LLM이 프롬프트를 실행할지는 당신이 결정합니다.',
  },
  ctaButton: {
    en: 'Download the PromptQuorum Beta',
    de: 'PromptQuorum-Beta herunterladen',
    fr: 'Télécharger la bêta PromptQuorum',
    ja: 'PromptQuorumベータ版をダウンロード',
    zh: '下载PromptQuorum测试版',
    es: 'Descargar la beta de PromptQuorum',
    pt: 'Baixar o beta do PromptQuorum',
    ar: 'تنزيل نسخة PromptQuorum التجريبية',
    ko: 'PromptQuorum 베타 다운로드',
  },
  backToBlog: {
    en: '← Back to Blog',
    de: '← Zurück zum Blog',
    fr: '← Retour au blog',
    ja: '← ブログに戻る',
    zh: '← 返回博客',
    es: '← Volver al blog',
    pt: '← Voltar ao blog',
    ar: '← العودة إلى المدونة',
    ko: '← 블로그로 돌아가기',
  },
}

function BlogPostClientContent({ post, slug, initialLang }: BlogPostClientProps) {
  const lang = useLang(initialLang) as Language
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null)

  // Get translated metadata
  const postId = SLUG_TO_POST_ID[slug as keyof typeof SLUG_TO_POST_ID]
  const metadata = blogMetadata[postId as keyof typeof blogMetadata]?.[lang as 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'pt' | 'es' | 'ar'] || blogMetadata[postId as keyof typeof blogMetadata]?.['en']

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb + Language Switcher */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <a href={lang === 'en' ? '/' : `/${lang}`} className="hover:text-primary">{BLOG_UI.breadcrumbHome[lang]}</a>
            <span>/</span>
            <a href={lang === 'en' ? '/#blog' : `/${lang}#blog`} className="hover:text-primary">{BLOG_UI.breadcrumbHub[lang]}</a>
            <span>/</span>
            <span className="text-text-primary font-medium">{metadata?.title || post.title}</span>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Article Header */}
        <article className="prose prose-invert max-w-none">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {metadata?.category || post.category}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {metadata?.title || post.title}
            </h1>
            <p className="text-lg text-text-secondary mb-4">{metadata?.intro || post.intro}</p>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <time dateTime={getDateISO(metadata?.publishDate || post.publishDate)}>
                {metadata?.publishDate || post.publishDate}
              </time>
              <span>•</span>
              <span>{metadata?.readTime || post.readTime}</span>
              <span>•</span>
              <span>By <Link href="/author/hans-kuepper" className="text-primary hover:text-primary/80 font-medium">Hans Kuepper</Link> · PromptQuorum</span>
            </div>
          </div>

          {/* Cross-language links */}
          {postId && blogContent[postId] && (
            <LangLinksBar cluster="blog" slug={slug} availableLangs={Object.keys(blogContent[postId])} initialLang={lang} />
          )}

          {/* Hero Component or Image */}
          {post.heroComponent === 'FrameworkWheel' ? (
            <FrameworkWheel />
          ) : post.heroImage ? (
            <div className="my-8">
              <Image
                src={post.heroImage}
                alt="Article illustration"
                width={1200}
                height={675}
                className="w-full rounded-lg border border-primary/20 shadow-sm"
                priority
              />
            </div>
          ) : null}

          {/* Sections */}
          <div className="mt-12 space-y-8">
            {Object.entries(post.sections).map(([key, section]) => (
              <section key={key} className="prose prose-invert max-w-none">
                {section.title && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-8 mb-4">
                    {section.title}
                  </h2>
                )}

                {/* Content: string or string[] */}
                {section.content && (
                  <div className="text-text-secondary leading-relaxed">
                    {Array.isArray(section.content) ? (
                      <div className="space-y-4">
                        {section.content.map((paragraph, idx) => (
                          <p key={idx} className="text-text-secondary">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-text-secondary">{section.content}</p>
                    )}
                  </div>
                )}

                {/* Image with caption */}
                {section.image && (
                  <figure className="my-8 cursor-zoom-in" onClick={() => setLightboxImage({
                    src: section.image!,
                    alt: section.imageCaption || 'Article illustration',
                    caption: section.imageCaption,
                  })}>
                    <img
                      src={section.image}
                      alt={section.imageCaption || 'Article illustration'}
                      className="w-full rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-shadow"
                      loading="lazy"
                    />
                    {section.imageCaption && (
                      <figcaption className="text-sm text-text-secondary mt-3 text-center italic">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* Lightbox component */}
                {lightboxImage && (
                  <ImageLightbox
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    caption={lightboxImage.caption}
                    onClose={() => setLightboxImage(null)}
                  />
                )}

                {/* Items: bullet list (skip if this is a TL;DR section - it will be rendered below) */}
                {section.items && section.items.length > 0 && !section.isTldr && (
                  <ul className="space-y-2 my-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-text-secondary flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-primary/80 underline">$1</a>') }} />
                      </li>
                    ))}
                  </ul>
                )}

                {/* Table: rows with columns */}
                {section.rows && section.rows.length > 0 && section.columns && (
                  <div className="relative overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-text-tertiary">
                          {section.columns.map((col, colIdx) => (
                            <th
                              key={col}
                              className={`text-left p-2 sm:p-3 font-bold text-text-primary bg-primary/5${colIdx === 0 ? ' sticky left-0 z-10' : ''}`}
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, idx) => (
                          <tr key={idx} className="border-b border-text-tertiary hover:bg-primary/5 group">
                            {section.columns?.map((col, colIdx) => (
                              <td key={`${idx}-${col}`} className={colIdx === 0 ? 'p-2 sm:p-3 sticky left-0 z-10 bg-white group-hover:bg-primary/5 transition-colors font-medium text-text-primary' : 'p-2 sm:p-3 text-text-secondary'}>
                                {row[col] || '—'}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
                  </div>
                )}

                {/* Download CTA */}
                {section.downloadCta && (
                  <div className="my-6 p-5 border border-primary/30 rounded-xl bg-primary/5">
                    {section.downloadCta.description && (
                      <p className="text-sm text-text-secondary mb-3">{section.downloadCta.description}</p>
                    )}
                    <a
                      href={section.downloadCta.href}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      ↓ {section.downloadCta.label}
                    </a>
                  </div>
                )}

                {/* TL;DR Callout */}
                {section.isTldr && section.items && section.items.length > 0 && (
                  <div className="my-8 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                    <div className="flex gap-3">
                      <span className="text-2xl font-bold text-primary flex-shrink-0">⚡</span>
                      <div className="w-full">
                        <h3 className="font-bold text-text-primary mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="text-text-secondary text-sm flex gap-2">
                              <span className="text-primary font-bold flex-shrink-0">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* FAQ Section */}
                {section.faqs && section.faqs.length > 0 && (
                  <div className="my-8 space-y-4">
                    {section.faqs.map((faq, idx) => (
                      <details key={idx} className="p-4 border border-text-tertiary rounded-lg cursor-pointer hover:bg-primary/5 transition-colors group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="font-bold text-text-primary flex justify-between items-center list-none">
                          <span>{faq.q}</span>
                          <span className="text-primary text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p className="text-text-secondary mt-3 text-sm leading-relaxed">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>

        <FactsDisclaimer lang={lang} />

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-text-tertiary">
          <h3 className="text-center text-2xl font-bold text-text-primary mb-2">
            {BLOG_UI.ctaHeading[lang] ?? BLOG_UI.ctaHeading.en}
          </h3>
          <p className="text-center text-text-secondary mb-6 max-w-2xl mx-auto">
            {BLOG_UI.ctaDescription[lang] ?? BLOG_UI.ctaDescription.en}
          </p>
          <div className="text-center">
            <a
              href={lang === 'en' ? '/waitlist' : `/${lang}/waitlist`}
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {BLOG_UI.ctaButton[lang] ?? BLOG_UI.ctaButton.en}
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <p className="text-center mt-8">
          <a href={lang === 'en' ? '/blog' : `/${lang}/blog`} className="text-primary hover:text-primary/80">
            {BLOG_UI.backToBlog[lang] ?? BLOG_UI.backToBlog.en}
          </a>
        </p>
      </div>
    </div>
  )
}

export function BlogPostClient(props: BlogPostClientProps) {
  return <BlogPostClientContent {...props} />
}
