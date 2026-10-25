import type { SolaStrings } from './types'

export const zh: SolaStrings = {
  home: '首页',
  about: '关于',
  series: '本地 AI 现状',
  reportLabel: '报告 01',

  hubTitleSuffix: 'PromptQuorum',
  hubDescription:
    '关于本地 AI 现状的季度报告：有来源的数据、实测、标明的假设和论断登记表。下一期：2027年1月。',
  hubIntro1:
    '《本地 AI 现状》是一份季度报告，说明本地 AI 如今走到了哪一步。内容出自作者开发 PromptQuorum 和测试本地 AI 应用的亲身经验。',
  hubIntro2: '事实有标注，来源有编号，假设会写明由谁提出、依据是什么。',
  nextIssue: '下一期：',
  latestReport: '最新报告',
  readReport: '阅读报告',
  evidenceFile: '证据文件',
  archive: '往期存档',
  pressContact: '媒体联系',

  by: '作者',
  dataCutOff: '数据截止',
  version: '版本',
  keyFindings: '主要发现',
  fullEvidenceTitle: '完整证据与附录',
  fullEvidenceSub:
    '所有方法说明、计算、假设框、表格、论断登记表和全部编号来源。直接在此展开，无需下载。',
  evidenceEnglishNote: '完整证据文件（论断、计算与来源）仅提供英文版。',
  scrollableTable: '可滚动表格',
  citeThisReport: '引用本报告',
  aboutThisReport: '关于本报告',
  founderLine: '是 PromptQuorum 的创始人，常驻法兰克福，拥有 30 多年的咨询与综合管理经验。',
  methodPre: '方法、标注、假设和来源见上方的',
  methodLink1: '完整证据部分',
  methodMid: '，它也以',
  methodLink2: '独立页面',
  methodPost: '的形式提供。',
  pressContactLabel: '媒体联系：',
  evidenceAndDownloads: '证据与下载',
  evidenceFileSeparate: '证据文件（独立页面）',
  claimRegister: '论断登记表（claims.csv）',
  sources: '来源',
  backTo: '返回',
  correctionsAndUpdates: '更正与更新',
  translatedNote: '本页为英文原文的译文，以英文原文为准。',

  issues: {
    '2026-q4': {
      title: '鸡很少，蛋更少',
      subtitle: '本地 AI 增长很快，但可用的硬件存量极小，出色的应用更少。',
      summary:
        '能运行好的本地 AI 模型的电脑很少，值得为此折腾的应用更少。九项实测、有来源的数据和论断登记表，展示本地 AI 如今的处境。',
      seoTitle: '鸡很少，蛋更少｜本地 AI 现状报告 01',
      metaDescription:
        '报告 01：能运行好本地 AI 模型的电脑很少，值得使用的应用更少。含有来源的数据、九项实测和论断登记表。',
      keyFindings: [
        '在2026年7月的 Steam 硬件调查中，25.9% 的被调查系统拥有 16 GB 显存，5.4% 拥有 24 GB。',
        '在作者测试的 24 GB Mac 上，系统在启动后、加载任何模型之前就已占用 9.67 GB 内存。',
        '作者测试了九款本地 AI 应用，其中八款可以评分；这八款中有四款的核心功能评分为 2 分或更低。',
        '根据三个银行卡数据来源，美国有 2.2% 到 4.5% 的家庭或消费者为 AI 聊天机器人付费。付费最多的前 1% 用户贡献了消费级 AI 支出的 19.5%。',
        '128 GB 版 NVIDIA DGX Spark 的标价从发布时的 $3,999 涨到2026年2月的 $4,699，再涨到2026年10月的 $6,950。',
        '2026年第三季度新笔记本和台式机销量下滑：IDC 报告出货量下降 20.1%，至 6270万台，Omdia 报告下降 21.2%，至 5810万台。',
        '最大的开源模型落后最好的云端模型约四个月，但至少需要 377 GB 内存（计算值）。',
        '搜索“local AI”，在苹果德国 App Store 得到 10 条结果，在 Google Play 得到 29 条，而两者的应用总量分别约为 275万个和 265万个。',
        'Google 上“local ai”的搜索量在2026年5月下旬达到峰值，到10月中旬已降至一年前的一半；报告指出，这一与其他指标的背离无法从数据中解释。',
      ],
      disclosure:
        '作者创办了 PromptQuorum（一个关于本地 AI 应用的内容网站和目录），并测试了其中收录的应用。每份实测记录（含证据标签和测试者自己的错误）都链接在证据文件中。测试记录中没有收到付款或赞助的记录。',
      correction: '版本 1.0：首次发布。',
    },
  },
}
