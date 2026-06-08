import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { LandingPageServer } from '@/components/LandingPageServer'
import { ConfirmedToast } from '@/components/ConfirmedToast'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ar'
  const t = translations[lang as keyof typeof translations]

  return {
    title: t.homeMetaTitle,
    description: t.homeMetaDescription,
    alternates: generateAlternates('/', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
    },
  }
}

export default async function ArHome() {
  return (
    <>
      <ConfirmedToast />
      <LandingPageServer initialLang="ar" />

      {/* FAQPage Schema — 8 أسئلة رئيسية للمقتطفات المنسقة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'inLanguage': 'ar',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'ما هو PromptQuorum؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum هو أداة لإرسال الطلبات إلى نماذج ذكاء اصطناعي متعددة وتقييم التوافق بينها. تكتب طلباً منظماً باستخدام أحد أطر الـ 9 المتاحة لهندسة الطلبات، ثم يُرسَل في آنٍ واحد إلى GPT-4o وClaude وGemini وMistral وLlama وDeepSeek وأكثر من 25 نموذجاً آخر. يجمع PromptQuorum جميع الردود بالتوازي وينفّذ تحليل التوافق — فتحصل على حكم موحّد وموثّق عوضاً عن الاعتماد على نموذج واحد.'
                }
              },
              {
                '@type': 'Question',
                'name': 'كيف يعمل PromptQuorum؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'يعمل PromptQuorum في أربع مراحل: (1) الكتابة — اختر إطار الطلب (CO-STAR أو CRAFT أو RISEN أو APE وغيرها) واملأ الحقول المنظمة؛ (2) التحسين — يحوّل نموذجك المتصل الحقول إلى طلب دقيق تحسّنه بثمانية تحسينات بنقرة واحدة؛ (3) الإرسال — أرسل الطلب المحسَّن إلى أكثر من 25 خدمة ذكاء اصطناعي في آنٍ واحد بنقرة واحدة؛ (4) Quorum — الصق جميع الردود في تبويب التحليل واختر من بين 13 نوعاً من التحليلات بما فيها ملخص التوافق وكشف الهلوسة وكشف التناقضات واختيار أفضل إجابة.'
                }
              },
              {
                '@type': 'Question',
                'name': 'ما نماذج الذكاء الاصطناعي التي يدعمها PromptQuorum؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'يدعم PromptQuorum أكثر من 25 نموذج ذكاء اصطناعي سحابي بما فيها OpenAI GPT-4o وo1، وAnthropic Claude 3.5 Sonnet وClaude 4، وGoogle Gemini 2.0 Flash و1.5 Pro، وxAI Grok، وDeepSeek، وMistral Large، وCohere Command R+، وMeta Llama عبر Together AI وGroq، وPerplexity. كما يدعم جميع بيئات النماذج المحلية الرئيسية: Ollama وLM Studio وJan AI وGPT4All وOpen WebUI وvLLM وKoboldCpp وأي نقطة نهاية متوافقة مع OpenAI.'
                }
              },
              {
                '@type': 'Question',
                'name': 'ما هو تقييم التوافق ولماذا يهم؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'يقيس تقييم التوافق مدى اتفاق النماذج المستقلة على إجابة ما. حين تعطي 5 نماذج أو أكثر الإجابة ذاتها، تكون الثقة في تلك الإجابة أعلى بكثير مما لو أجاب نموذج واحد وحده. يستخرج تحليل Quorum نقاط الاتفاق، ويرصد التناقضات بين النماذج، ويقيّم مستوى الثقة الكلية. هذه الطريقة هي الأكثر موثوقية المتاحة حالياً لكشف هلوسة الذكاء الاصطناعي — فادّعاء يطرحه نموذج واحد بينما يغفله أربعة نماذج أخرى إشارة واضحة جداً على الهلوسة.'
                }
              },
              {
                '@type': 'Question',
                'name': 'كم يكلف PromptQuorum؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum مجاني. أحضر مفتاح API الخاص بك (BYOM) من أي مزوّد ذكاء اصطناعي سحابي — OpenAI أو Anthropic أو Google وغيرها — ولن يُحاسبك PromptQuorum على استخدام النماذج. كما يمكنك استخدام نموذج محلي مجاني كـ Ollama أو LM Studio دون الحاجة إلى مفتاح API. لا اشتراكات، ولا حساب مطلوب، ولا حدود للاستخدام.'
                }
              },
              {
                '@type': 'Question',
                'name': 'هل يمكنني استخدام PromptQuorum مع النماذج المحلية كـ Ollama أو LM Studio؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'نعم. يتصل PromptQuorum بشكل أصلي بـ Ollama وLM Studio وJan AI وGPT4All وOpen WebUI وKoboldCpp وvLLM وoobabooga وأي نقطة نهاية محلية متوافقة مع OpenAI. مع نموذج محلي، يعمل PromptQuorum دون إنترنت كلياً — لا إنترنت مطلوب، ولا مفتاح API. طلباتك وردودك ونتائجك لا تغادر جهازك أبداً.'
                }
              },
              {
                '@type': 'Question',
                'name': 'كيف يحمي PromptQuorum بياناتي وخصوصيتي؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'لا يجمع PromptQuorum أي بيانات تتبع. تُخزَّن مفاتيح API فقط في localStorage المتصفح ولا تُرسَل إلى أي خادم من خوادم PromptQuorum — كل استدعاء للنموذج يذهب مباشرةً من متصفحك إلى مزوّدك المختار. لا يرى PromptQuorum طلباتك ولا ردودك ولا مفاتيح API الخاصة بك. لأقصى درجات الخصوصية، استخدم نموذجاً محلياً (Ollama أو LM Studio): في هذا الوضع لا تغادر أي بيانات جهازك.'
                }
              },
              {
                '@type': 'Question',
                'name': 'كيف أحصل على وصول بيتا إلى PromptQuorum؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'أدخل بريدك الإلكتروني في نموذج قائمة الانتظار في الصفحة الرئيسية لـ PromptQuorum. ستُطلَق النسخة التجريبية في يوليو 2026. يحصل أعضاء الوصول المبكر على ميزات مميزة مدى الحياة ودعم ذا أولوية وتأثير مباشر على خارطة طريق المنتج. سيتوفر تطبيق سطح المكتب (macOS وWindows) والنسخة الإلكترونية في وقت واحد عند الإطلاق.'
                }
              }
            ]
          }),
        }}
      />

      {/* HowTo Schema — سير عمل PromptQuorum في 4 مراحل */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'inLanguage': 'ar',
            'name': 'كيفية تحسين الطلبات ومقارنة نماذج الذكاء الاصطناعي مع PromptQuorum',
            'description': 'أربع مراحل لتحويل أي فكرة إلى طلب دقيق ومقارنة الردود عبر أكثر من 25 نموذج ذكاء اصطناعي.',
            'totalTime': 'PT5M',
            'step': [
              {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'اكتب طلباً منظماً',
                'text': 'اختر أحد أطر هندسة الطلبات الـ 9 (CO-STAR أو CRAFT أو RISEN أو APE أو SPECS أو TRACE أو RTF أو Google Prompt أو Single Prompt Line) واملأ الحقول المنظمة. يوصي مساعد الأطر بأفضل خيار لمهمتك.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'حسِّن الطلب مع نموذجك',
                'text': 'يحوّل نموذجك المتصل (ChatGPT أو Claude أو Gemini أو نموذج محلي كـ Ollama) حقول الإطار إلى طلب دقيق. حسِّنه تدريجياً بثمانية تحسينات بنقرة واحدة. تُحفظ كل نسخة في السجل.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'أرسل إلى نماذج ذكاء اصطناعي متعددة',
                'text': 'أرسل الطلب المحسَّن إلى أكثر من 25 خدمة ذكاء اصطناعي في آنٍ واحد بنقرة واحدة. تصل الردود بالتوازي — دون انتظار انتهاء نموذج قبل البدء بآخر.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'حلِّل التوافق بين النماذج',
                'text': 'الصق جميع الردود في تبويب التحليل واختر من بين 13 نوعاً من التحليلات: ملخص التوافق، كشف الهلوسة، كشف التناقضات، اختيار أفضل إجابة والمزيد. احصل على حكم موثّق عوضاً عن الاعتماد على نموذج واحد.',
                'image': 'https://www.promptquorum.com/og-image.png',
              }
            ]
          }),
        }}
      />
    </>
  )
}
