// PromptQuorum Academy — Phase 2 acceptance run (docs/academy/SPEC.md 16, Phase 2): 20 subjects through the real
// model: quick check -> simulated answers -> programme. Checks every programme against the SPEC 7.3 limits and
// prints attempts, clamps, failures and token usage. Needs ANTHROPIC_API_KEY (or an `ant auth login` profile).
// Costs real money (Haiku 5.5, ~40 calls; well under one US dollar). Run: npm run academy:regression [-- --limit 5]

import Anthropic from '@anthropic-ai/sdk'
import { generateDiagnostic } from '../src/lib/academy/diagnostic'
import { summarizeDiagnostic } from '../src/lib/academy/diagnostic-summary'
import { generateProgramme, programmeProblems } from '../src/lib/academy/programme'
import type { AcademyLang, Level, TestMode } from '../src/lib/academy/types'

const SUBJECTS: [string, AcademyLang, number, Level, TestMode][] = [
  ['Running a local LLM on my laptop', 'en', 60, 'beginner', 'final'],
  ['Choosing a GPU for local AI', 'en', 30, 'some', 'per_lesson_and_final'],
  ['Prompt engineering basics', 'en', 15, 'beginner', 'none'],
  ['RAG with local documents', 'en', 120, 'experienced', 'per_lesson_and_final'],
  ['Quantization (GGUF, Q4_K_M) explained', 'en', 45, 'some', 'final'],
  ['Ollama vs LM Studio', 'en', 30, 'beginner', 'final'],
  ['Home Assistant with a local voice assistant', 'en', 90, 'some', 'final'],
  ['Balcony solar for apartments', 'en', 60, 'beginner', 'per_lesson_and_final'],
  ['AI agents and MCP servers', 'en', 240, 'experienced', 'per_lesson_and_final'],
  ['Lokale LLMs auf dem Mac', 'de', 60, 'beginner', 'final'],
  ['Balkonkraftwerk anmelden und betreiben', 'de', 30, 'beginner', 'final'],
  ['Prompt-Techniken für bessere Antworten', 'de', 90, 'some', 'per_lesson_and_final'],
  ['Utiliser un LLM local en entreprise', 'fr', 60, 'some', 'final'],
  ['Modelos de IA locales para principiantes', 'es', 45, 'beginner', 'none'],
  ['Transcrição de áudio com IA local', 'pt', 30, 'beginner', 'final'],
  ['ローカルLLMの始め方', 'ja', 60, 'beginner', 'final'],
  ['本地大模型的显存需求', 'zh', 45, 'some', 'per_lesson_and_final'],
  ['로컬 AI로 문서 요약하기', 'ko', 30, 'beginner', 'final'],
  ['تشغيل نماذج الذكاء الاصطناعي محليًا', 'ar', 60, 'beginner', 'final'],
  // Out of scope: must be rejected by the quick check, not turned into a programme.
  ['Baking sourdough bread', 'en', 60, 'beginner', 'final'],
]

const limitArg = process.argv.indexOf('--limit')
const limit = limitArg > 0 ? Number(process.argv[limitArg + 1]) : SUBJECTS.length

async function main() {
  const client = new Anthropic({ maxRetries: 1, timeout: 60_000 })
  const rows: string[] = []
  let failures = 0
  let ruleBreaks = 0
  let clamps = 0
  let extraAttempts = 0

  for (const [subject, language, minutes, level, testMode] of SUBJECTS.slice(0, limit)) {
    const started = Date.now()
    try {
      const diag = await generateDiagnostic(client, { subject, availableMinutes: minutes, selfLevel: level, language })
      extraAttempts += diag.attempts - 1
      if (!diag.supported) {
        rows.push(`| ${subject} | ${language} | unsupported | - | - | - | ${diag.attempts} | ${Date.now() - started} ms |`)
        continue
      }
      // Simulated learner: right on even questions, "not sure" on odd ones.
      const answers = Object.fromEntries(diag.questions.map((q, i) => [q.id, i % 2 === 0 ? q.correctIndex : -1]))
      const s = summarizeDiagnostic(diag.questions, answers)
      const req = { subject, availableMinutes: minutes, selfLevel: level, testMode, language, diagnostic: { estimatedLevel: s.estimatedLevel, gaps: s.gaps, known: s.known } }
      const { programme, attempts, clamped } = await generateProgramme(client, req)
      extraAttempts += attempts - 1
      if (clamped) clamps++
      const problems = programmeProblems(programme, req)
      if (problems.length) ruleBreaks++
      const sum = programme.lessons.reduce((a, l) => a + l.estimatedMinutes, 0)
      rows.push(
        `| ${subject} | ${language} | ${diag.questions.length} q | ${programme.lessons.length} lessons, ${programme.objectives.length} obj | ${sum}/${minutes} min | ${problems.length ? 'BREAK: ' + problems.join('; ') : clamped ? 'clamped' : 'ok'} | ${diag.attempts}+${attempts} | ${Date.now() - started} ms |`,
      )
    } catch (err) {
      failures++
      rows.push(`| ${subject} | ${language} | FAILED | ${err instanceof Error ? err.message.slice(0, 120) : String(err)} | | | | |`)
    }
  }

  console.log('\n| Subject | Lang | Quick check | Programme | Reading/total | Rules | Attempts | Time |\n|---|---|---|---|---|---|---|---|')
  console.log(rows.join('\n'))
  const n = Math.min(limit, SUBJECTS.length)
  console.log(`\nSubjects: ${n} · failed: ${failures} · rule breaks after clamp: ${ruleBreaks} · clamped: ${clamps} · extra attempts (schema/rule failures): ${extraAttempts}`)
  console.log('Token usage per call is in the [academy] generation log lines above.')
  if (failures || ruleBreaks) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
