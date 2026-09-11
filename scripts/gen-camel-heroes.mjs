import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const IMAGES_DIR = path.join(ROOT, 'public/images')
const PORT = 3415

const specs = [
  {
    lang: 'en',
    title: 'CAMEL Review 2026: Features, Role-Playing, Alternatives',
    subtitle: 'A free, Apache 2.0-licensed Python framework from the CAMEL-AI organization for role-playing multi-agent collaboration, where an "AI User" and an "AI Assistant" converse autonomously toward a task via inception prompting instead of a person driving each turn.',
    footer: 'PromptQuorum Guide',
  },
  {
    lang: 'de',
    title: 'CAMEL Review 2026: Funktionen, Role-Playing, Alternativen',
    subtitle: 'Ein kostenloses, Apache-2.0-lizenziertes Python-Framework der CAMEL-AI-Organisation für rollenbasierte Multi-Agent-Zusammenarbeit, bei dem ein "AI User" und ein "AI Assistant" über Inception Prompting eigenständig auf eine Aufgabe hin kommunizieren, statt dass eine Person jeden Zug steuert.',
    footer: 'PromptQuorum-Leitfaden',
  },
  {
    lang: 'fr',
    title: 'CAMEL : avis 2026, role-playing et alternatives',
    subtitle: "Un framework Python gratuit sous licence Apache 2.0 de l'organisation CAMEL-AI pour la collaboration multi-agents par role-playing, où un « AI User » et un « AI Assistant » convergent de façon autonome vers une tâche via l'inception prompting, sans qu'une personne pilote chaque échange.",
    footer: 'Guide PromptQuorum',
  },
  {
    lang: 'es',
    title: 'CAMEL: reseña 2026, role-playing y alternativas',
    subtitle: 'Un framework Python gratuito con licencia Apache 2.0 de la organización CAMEL-AI para colaboración multiagente por role-playing, donde un "AI User" y un "AI Assistant" convergen de forma autónoma hacia una tarea mediante inception prompting, sin que una persona dirija cada turno.',
    footer: 'Guía de PromptQuorum',
  },
  {
    lang: 'pt',
    title: 'CAMEL: análise 2026, role-playing e alternativas',
    subtitle: 'Um framework Python gratuito, licenciado sob Apache 2.0, da organização CAMEL-AI para colaboração multiagente por role-playing, no qual um "AI User" e um "AI Assistant" convergem de forma autônoma rumo a uma tarefa via inception prompting, sem que uma pessoa conduza cada turno.',
    footer: 'Guia PromptQuorum',
  },
  {
    lang: 'ja',
    title: 'CAMELレビュー2026：機能、ロールプレイング、代替ツール',
    subtitle: 'CAMEL-AI組織による無料・Apache 2.0ライセンスのPythonフレームワークで、ロールプレイング型マルチエージェント協調を実現する。「AI User」と「AI Assistant」がinception promptingを通じて自律的にタスクへ向けて会話し、人が毎ターンを誘導する必要はない。',
    footer: 'PromptQuorumガイド',
  },
  {
    lang: 'zh',
    title: 'CAMEL评测2026：功能、角色扮演与替代方案',
    subtitle: 'CAMEL-AI组织推出的免费、Apache 2.0许可Python框架，用于基于角色扮演的多智能体协作，"AI User"与"AI Assistant"通过inception prompting自主朝任务推进，而无需人工引导每一轮对话。',
    footer: 'PromptQuorum 指南',
  },
  {
    lang: 'ar',
    title: 'مراجعة CAMEL 2026: الميزات ولعب الأدوار والبدائل',
    subtitle: 'إطار عمل Python مجاني برخصة Apache 2.0 من منظمة CAMEL-AI للتعاون متعدد الوكلاء القائم على لعب الأدوار، حيث يتحاور "AI User" و"AI Assistant" بشكل مستقل نحو مهمة عبر inception prompting، دون أن يوجّه شخص كل جولة. المستودع تجاوز 17,700 نجمة على GitHub، ويُثبَّت عبر `pip install camel-ai`.',
    footer: 'دليل PromptQuorum',
  },
  {
    lang: 'ko',
    title: 'CAMEL 리뷰 2026: 기능, 롤플레잉, 대안',
    subtitle: "CAMEL-AI 조직이 제공하는 무료, Apache 2.0 라이선스 Python 프레임워크로, 롤플레잉 기반 멀티 에이전트 협업을 지원하며 'AI User'와 'AI Assistant'가 inception prompting을 통해 사람이 매 턴을 이끌지 않아도 자율적으로 작업을 향해 수렴합니다.",
    footer: 'PromptQuorum 가이드',
  },
]

async function genOne(spec) {
  const res = await fetch(`http://localhost:${PORT}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang: spec.lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`${spec.lang}: HTTP ${res.status} — ${text.slice(0, 300)}`)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const outPath = path.join(IMAGES_DIR, `camel-review-hero-${spec.lang}.png`)
  fs.writeFileSync(outPath, buf)
  return { lang: spec.lang, bytes: buf.length, outPath }
}

async function main() {
  fs.mkdirSync(IMAGES_DIR, { recursive: true })
  const only = process.argv.slice(2)
  const list = only.length > 0 ? specs.filter((s) => only.includes(s.lang)) : specs
  const results = []
  for (const spec of list) {
    process.stdout.write(`Generating ${spec.lang}... `)
    const r = await genOne(spec)
    console.log(`OK (${r.bytes} bytes) -> ${r.outPath}`)
    results.push(r)
  }
  console.log('\nAll 9 hero PNGs generated.')
}

main().catch((err) => {
  console.error('FAILED:', err.message)
  process.exit(1)
})
