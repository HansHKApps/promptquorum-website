import type { SolaStrings } from './types'

export const ko: SolaStrings = {
  home: '홈',
  about: '소개',
  series: '로컬 AI 현황',
  reportLabel: '보고서 01',

  hubTitleSuffix: 'PromptQuorum',
  hubDescription:
    '로컬 AI의 현재를 다루는 분기 보고서입니다. 출처가 있는 수치, 직접 테스트, 가정의 명시, 주장 목록을 담았습니다. 다음 호: 2027년 1월.',
  hubIntro1:
    '로컬 AI 현황은 로컬 AI가 지금 어디에 서 있는지를 다루는 분기 보고서입니다. 필자가 PromptQuorum를 만들고 로컬 AI 앱을 테스트해 온 경험을 바탕으로 작성합니다.',
  hubIntro2: '사실에는 표시를 달고, 출처에는 번호를 붙이며, 가정에는 누가 그렇게 보는지와 무엇에 근거하는지를 밝힙니다.',
  nextIssue: '다음 호:',
  latestReport: '최신 보고서',
  readReport: '보고서 읽기',
  evidenceFile: '증거 파일',
  archive: '아카이브',
  pressContact: '언론 문의',

  by: '작성:',
  dataCutOff: '데이터 기준일',
  version: '버전',
  keyFindings: '주요 발견',
  fullEvidenceTitle: '전체 증거 및 부록',
  fullEvidenceSub:
    '모든 방법 설명, 계산, 가정 상자, 표, 주장 목록과 번호가 붙은 모든 출처를 담았습니다. 다운로드 없이 이 페이지에서 바로 열립니다.',
  evidenceEnglishNote: '전체 증거 파일(주장, 계산, 출처)은 영어로만 제공됩니다.',
  scrollableTable: '스크롤 가능한 표',
  citeThisReport: '이 보고서 인용하기',
  aboutThisReport: '이 보고서에 대하여',
  founderLine: '는 프랑크푸르트에 기반을 둔 PromptQuorum의 창업자로, 30년 넘게 컨설팅과 경영 일선에서 일해 왔습니다.',
  methodPre: '방법, 표시, 가정, 출처는 위의 ',
  methodLink1: '전체 증거 섹션',
  methodMid: '에 있으며, 이는 ',
  methodLink2: '별도 페이지',
  methodPost: '로도 제공됩니다.',
  pressContactLabel: '언론 문의:',
  evidenceAndDownloads: '증거 및 다운로드',
  evidenceFileSeparate: '별도 페이지로 보는 증거 파일',
  claimRegister: '주장 목록 (claims.csv)',
  sources: '출처',
  backTo: '돌아가기:',
  correctionsAndUpdates: '정정 및 업데이트',
  translatedNote: '이 페이지는 영어 원문을 번역한 것이며, 내용에 차이가 있을 경우 영어 원문이 우선합니다.',

  issues: {
    '2026-q4': {
      title: '닭은 몇 마리 안 되고, 달걀은 더 적다',
      subtitle:
        '로컬 AI는 빠르게 성장하고 있지만, 실제로 쓸 수 있는 하드웨어 보급 기반은 극히 작습니다. 훌륭한 앱은 그보다 더 드뭅니다.',
      summary:
        '좋은 로컬 AI 모델을 돌릴 수 있는 컴퓨터는 매우 적고, 애써 쓸 만한 앱은 그보다 더 적습니다. 직접 테스트 아홉 건, 출처가 있는 수치, 주장 목록으로 로컬 AI의 현재 위치를 보여 줍니다.',
      seoTitle: '닭은 적고 달걀은 더 적다 | 로컬 AI 현황 보고서 01',
      metaDescription:
        '좋은 로컬 AI 모델을 돌릴 수 있는 컴퓨터는 적고 쓸 만한 앱은 더 적습니다. 출처가 있는 수치, 직접 테스트 아홉 건, 주장 목록.',
      keyFindings: [
        '2026년 7월 Steam 하드웨어 설문에서 조사 대상 시스템의 25.9%가 그래픽 메모리 16 GB, 5.4%가 24 GB를 갖추고 있었습니다.',
        '필자의 테스트에서 24 GB Mac은 모델을 불러오기도 전인 시작 직후에 시스템만으로 9.67 GB의 메모리를 사용했습니다.',
        '필자가 테스트한 로컬 AI 앱 아홉 개 중 여덟 개는 점수를 매길 수 있었고, 그 여덟 개 중 네 개는 핵심 기능에서 2점 이하를 받았습니다.',
        '카드 결제 데이터를 다룬 세 출처에 따르면, 미국 가구 또는 소비자의 2.2%에서 4.5%가 AI 챗봇에 비용을 냅니다. 상위 1% 결제자가 소비자 AI 지출의 19.5%를 차지합니다.',
        '128 GB NVIDIA DGX Spark의 정가는 출시 당시 $3,999에서 2026년 2월 $4,699, 2026년 10월 $6,950으로 올랐습니다.',
        '2026년 3분기에 신규 노트북과 데스크톱 판매가 감소했습니다. IDC는 출하량이 20.1% 줄어 6,270만 대, Omdia는 21.2% 줄어 5,810만 대라고 보고했습니다.',
        '가장 큰 오픈 모델은 최고의 클라우드 모델에 약 4개월 뒤처져 있지만, 최소 377 GB의 메모리가 필요합니다(계산값).',
        '"local AI"를 검색하면 Apple의 독일 App Store에서 10건, Google Play에서 29건이 나옵니다. 전체 앱 수는 각각 약 275만 개와 265만 개입니다.',
        'Google에서 "local ai" 검색은 2026년 5월 말에 정점을 찍었고 10월 중순에는 1년 전의 절반 수준이었습니다. 보고서는 이것이 다른 지표와 엇갈리는 이유를 데이터만으로는 설명할 수 없다고 밝힙니다.',
      ],
      disclosure:
        '필자는 로컬 AI 앱을 다루는 콘텐츠 사이트이자 디렉터리인 PromptQuorum를 설립했으며, 그곳에 등재된 앱을 테스트했습니다. 증거 레이블과 테스터 본인의 실수를 포함한 각 직접 테스트 기록은 증거 파일에서 링크로 연결됩니다. 테스트 노트에는 대가 지급이나 후원이 기록되어 있지 않습니다.',
      correction: '버전 1.0: 최초 발행.',
    },
  },
}
