import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ar'
  const t = translations[lang]

  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
    },
  }
}

export default function ArAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/ar/about',
              'name': 'عن PromptQuorum',
              'description': 'PromptQuorum أداة توزيع وإجماع للذكاء الاصطناعي متعدد النماذج تُعنى بالخصوصية، طوّرها Hans Kuepper.',
              'inLanguage': 'ar',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/ar/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/ar/about',
              'jobTitle': 'المؤسس والمطوّر',
              'worksFor': {
                '@type': 'Organization',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
              'sameAs': [
                'https://www.linkedin.com/in/hanskuepper/',
                'https://x.com/HansKuepperAPPs',
                'https://github.com/HansHKApps',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'الرئيسية', 'item': 'https://www.promptquorum.com/ar' },
                { '@type': 'ListItem', 'position': 2, 'name': 'عن الموقع', 'item': 'https://www.promptquorum.com/ar/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20" dir="rtl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">عن الموقع</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              مصمَّم للأشخاص الذين يحتاجون إلى الثقة في إجابات الذكاء الاصطناعي.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              PromptQuorum أداة توزيع وإجماع للذكاء الاصطناعي متعدد النماذج. موجّه واحد لكل نموذج.
              حكم واحد يمكنك الوثوق به فعلاً.
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">المطوّر</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">المؤسس والمطوّر، PromptQuorum</p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">الخلفية</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    يقيم Hans في بادن-فورتمبرغ بألمانيا، بالقرب من هايدلبرغ في منطقة كرايخغاو.
                    وهو مطوّر مستقل متعدد اللغات يتحدث الألمانية والإنجليزية والفرنسية والروسية بطلاقة.
                    على مدار العقدين الماضيين، عاش وعمل في أكثر من 20 دولة عبر أوروبا وآسيا وما وراءها،
                    متعاوناً مع فرق موزّعة وبانياً أدوات للجمهور العالمي.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">لماذا PromptQuorum</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    نشأت PromptQuorum من إحباط بسيط: حين تحتاج إلى إجابة موثوقة،
                    لا يكفي الاستعلام من نموذج ذكاء اصطناعي واحد. تتوهّم النماذج المختلفة بطرق مختلفة،
                    وترتكب أخطاء مختلفة، وتنجح في أنواع مختلفة من الاستدلال.
                    الحقيقة تكمن في التقاطع — حين تتفق خمسة نماذج مستقلة على إجابة،
                    ترتفع درجة الثقة ارتفاعاً كبيراً مقارنةً بنموذج واحد يجيب منفرداً.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    قبل بناء PromptQuorum، أمضى Hans سنوات في العمل مع سير عمل الذكاء الاصطناعي المؤسسي،
                    ورأى المشكلة ذاتها تتكرر: فرق ومؤسسات تثق بمخرجات نموذج واحد في قرارات عالية المخاطر —
                    قرارات التوظيف، ملخصات البحث الطبي، التحليلات القانونية، تقييمات المخاطر —
                    دون أي طبقة للتحقق أو آلية إجماع. القرارات عالية المخاطر تستحق ما هو أفضل.
                    PromptQuorum هي الأداة التي أراد أن توجد.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">الفلسفة</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    يؤمن Hans بأن الخصوصية واستقلالية المستخدم يجب أن تكون غير قابلة للتفاوض في أدوات الذكاء الاصطناعي.
                    تُبنى PromptQuorum على مبدأ بسيط: موجّهاتك، ومفاتيح API، وإجاباتك تخصّك وحدك.
                    تُيسّر الأداة الإجماع والمقارنة عبر نماذج الذكاء الاصطناعي، لكن لا شيء يمر عبر خوادم PromptQuorum.
                    أنت في التحكم الكامل.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/hanskuepper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/HansKuepperAPPs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      X / Twitter
                    </a>
                    <a
                      href="https://github.com/HansHKApps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://substack.com/@promptquorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      Substack
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">لماذا توجد PromptQuorum</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                كل نموذج ذكاء اصطناعي كبير يتوهّم. GPT-4o وClaude وGemini — كلها تختلق حقائق،
                وتُغفل السياق، وتُنتج إجابات خاطئة تبدو واثقة. الفارق هو <em>أيّ</em> حقائق
                يخطئ كل نموذج و<em>متى</em>.
              </p>
              <p>
                حين تتفق خمسة نماذج مستقلة على إجابة، يكون احتمال اختلاق الخمستها للتفصيل الدقيق ذاته
                أقل بكثير مما لو أجاب نموذج واحد منفرداً.
                الإجماع إشارة موثوقية. PromptQuorum تُيسّر جمع هذه الإشارة.
              </p>
              <p>
                المشكلة الثانية هي الخصوصية. تُحيل معظم أدوات الذكاء الاصطناعي موجّهاتك عبر خوادمها الخاصة.
                PromptQuorum لا تفعل ذلك. تتصل مفاتيح API الخاصة بك مباشرةً من متصفحك إلى مزوّديك المختارين.
                لا شيء يمر عبر بنية PromptQuorum التحتية — لا موجّهاتك،
                ولا مفاتيح API، ولا إجاباتك.
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">المنتج</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'الإطلاق', value: 'تجريبي — يوليو 2026' },
                { label: 'التسعير', value: 'مجاني. أحضر مفتاح API الخاص بك.' },
                { label: 'نموذج الخصوصية', value: 'BYOM — صفر إرسال عبر الخادم' },
                { label: 'نماذج الذكاء الاصطناعي المدعومة', value: 'أكثر من 25 سحابياً + غير محدود محلياً عبر Ollama' },
                { label: 'أُطر الموجّهات', value: '9 مدمجة + فتحتان مخصصتان' },
                { label: 'أنواع تحليل Quorum', value: '13 نوعاً، منها كشف الهلوسة' },
                { label: 'الدعم دون اتصال', value: 'كامل — عبر Ollama وLM Studio وJan AI' },
                { label: 'هل التسجيل مطلوب؟', value: 'لا. افتح التطبيق وابدأ.' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-text-primary font-medium">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">اتصل بنا</h2>
            <p className="text-text-secondary mb-4">
              للاستفسارات الصحفية ومقترحات الشراكة والملاحظات:
            </p>
            <a
              href="mailto:hello@promptquorum.com"
              className="text-primary hover:text-primary/80 font-medium"
            >
              hello@promptquorum.com
            </a>
          </section>

          {/* Nav */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
            <Link href="/ar" className="text-primary hover:text-primary/80 font-medium text-sm">الرئيسية →</Link>
            <Link href="/ar/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">كيف يعمل</Link>
            <Link href="/ar/compare" className="text-primary hover:text-primary/80 font-medium text-sm">مقارنة الأدوات</Link>
            <Link href="/ar/blog" className="text-primary hover:text-primary/80 font-medium text-sm">المدونة</Link>
          </div>

        </div>
      </div>
    </>
  )
}
