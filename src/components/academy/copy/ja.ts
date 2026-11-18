import type { AcademyCopy } from './types'

export const copy: AcademyCopy = {
  metaTitle: 'PromptQuorum Academy：無料で自分に合ったAI学習',
  metaDescription:
    'テーマ・時間・レベルを選ぶだけ。PromptQuorum AcademyはPromptQuorumのガイドを参照して短いレッスンを作成し、AIチューター、テスト、PDF修了証を提供します。',
  h1: 'PromptQuorum Academy',
  intro: 'ローカルAI、プロンプト作成などを、あなたの時間とレベルに合わせた短いレッスンで学べます。無料、アカウント不要です。',
  howTitle: '使い方',
  steps: [
    { name: '選ぶ', text: 'テーマ、使える時間、レベルを入力します。' },
    { name: '診断', text: 'いくつかの短い質問で、すでに知っていることを確認します。' },
    { name: '個別化', text: '弱点に合わせたプログラムが作成されます。' },
    { name: '学ぶ', text: 'PromptQuorumのガイドを参照した短いテキストレッスンです。' },
    { name: '質問', text: '読みながらAIチューターに質問できます。' },
    { name: 'テスト', text: '3択の問題で、各選択肢に解説が付きます。' },
    { name: '修了証', text: '70%以上でPDFの修了証をダウンロードできます。' },
  ],
  disclaimer: 'レッスンはAIが作成するため、誤りを含む場合があります。修了証は学習の記録であり、公的に認定された資格ではありません。',
  hubs: {
    'local-llms': 'ローカルLLM',
    'prompt-engineering': 'プロンプトエンジニアリング',
    'power-local-llm': 'ローカルAIアプリ',
    'prompt-bites': 'ローカルAIのQ&A',
    'smart-home': 'ローカルなスマートホーム',
    'balcony-solar': 'ベランダ太陽光発電',
  },

  subjectLabel: '何を学びたいですか？',
  subjectPlaceholder: '例：ノートPCでローカルLLMを動かす',
  subjectError: 'テーマを入力するか、候補から選んでください。',
  suggestions: '候補',
  timeLegend: '使える時間はどれくらいですか？',
  minutes: (m) => (m >= 60 && m % 60 === 0 ? `${m / 60}時間` : `${m}分`),
  levelLegend: 'レベル',
  levels: {
    beginner: { label: '初心者', hint: 'このテーマは初めて' },
    some: { label: '基礎あり', hint: '基本は知っている' },
    experienced: { label: '経験者', hint: '深く学びたい' },
  },
  testsLegend: 'テスト',
  tests: {
    none: { label: 'テストなし', hint: '学ぶだけ。採点と修了証はありません。' },
    final: { label: '最終テストのみ', hint: '最後に1回。修了証に必要です。' },
    per_lesson_and_final: { label: '各レッスン＋最終テスト', hint: '各レッスン後に短いクイズ、最後に最終テスト。' },
  },
  languageLabel: 'プログラムの言語',
  submit: '診断に進む',
  restored: 'このブラウザに保存された前回の設定を復元しました。',
  startNew: '新しく始める',
  storageBlocked: 'このブラウザでは保存できません。続行はできますが、ページを閉じると進捗は失われます。',
  loading: '読み込み中',

  diagnosticTitle: '診断',
  diagnosticComing: '診断の質問はまだ利用できません。設定は保存されています：',
  summarySubject: 'テーマ',
  summaryTime: '時間',
  summaryLevel: 'レベル',
  summaryTests: 'テスト',
  summaryLanguage: '言語',
  changeSetup: '設定を変更',

  privacyNote:
    'アカウントは不要です。進捗はこのブラウザにのみ保存されます。レッスン、問題、チューターの回答を作成するため、テーマ、回答、チューターへのメッセージをAIプロバイダー（Anthropic）に送信します。これらに個人情報を入力しないでください。修了証のお名前はこのブラウザ内にとどまります。不正利用防止のため、IPアドレスから生成した短期間のハッシュキーでリクエスト数を制限しています。フィードバックをいただいた場合は、評価、コメント、学習したテーマを、お名前やアカウントなしで保存します。',
  deleteData: 'データを削除',
  deleteConfirm: 'このブラウザからAcademyの進捗を削除しますか？元に戻せません。',
  dataDeleted: '削除しました',
}
