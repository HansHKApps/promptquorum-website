import type { SolaStrings } from './types'

export const pt: SolaStrings = {
  home: 'Início',
  about: 'Sobre',
  series: 'O Estado da IA Local',
  reportLabel: 'Relatório 01',

  hubTitleSuffix: 'PromptQuorum',
  hubDescription:
    'Um relatório trimestral sobre o estado da IA local: números com fontes, testes práticos, premissas identificadas e um registro de afirmações. Próxima edição: janeiro de 2027.',
  hubIntro1:
    'O Estado da IA Local é um relatório trimestral sobre onde a IA local está hoje. Ele é escrito a partir da experiência do autor construindo o PromptQuorum e testando apps de IA local.',
  hubIntro2: 'Os fatos são identificados, as fontes são numeradas e as premissas dizem quem as faz e em que se apoiam.',
  nextIssue: 'Próxima edição:',
  latestReport: 'Último relatório',
  readReport: 'Ler o relatório',
  evidenceFile: 'Arquivo de evidências',
  archive: 'Arquivo',
  pressContact: 'Contato para a imprensa',

  by: 'Por',
  dataCutOff: 'Data de corte dos dados',
  version: 'Versão',
  keyFindings: 'Principais constatações',
  fullEvidenceTitle: 'Evidências completas e anexos',
  fullEvidenceSub:
    'Todas as notas de método, cálculos, caixas de premissas, tabelas, o registro de afirmações e todas as fontes numeradas. Abre aqui mesmo, sem precisar baixar nada.',
  evidenceEnglishNote: 'O arquivo de evidências completo (afirmações, cálculos, fontes) está disponível apenas em inglês.',
  scrollableTable: 'Tabela com rolagem',
  citeThisReport: 'Citar este relatório',
  aboutThisReport: 'Sobre este relatório',
  founderLine: 'é o fundador do PromptQuorum, com sede em Frankfurt, e tem mais de 30 anos de experiência em consultoria e gestão geral.',
  methodPre: 'O método, os rótulos, as premissas e as fontes estão na ',
  methodLink1: 'seção completa de evidências',
  methodMid: ' acima, que também existe como uma ',
  methodLink2: 'página separada',
  methodPost: '.',
  pressContactLabel: 'Contato para a imprensa:',
  evidenceAndDownloads: 'Evidências e downloads',
  evidenceFileSeparate: 'Arquivo de evidências em página separada',
  claimRegister: 'Registro de afirmações (claims.csv)',
  sources: 'Fontes',
  backTo: 'Voltar para',
  correctionsAndUpdates: 'Correções e atualizações',
  translatedNote: 'Esta é uma tradução do original em inglês; em caso de divergência, vale o original em inglês.',

  issues: {
    '2026-q4': {
      title: 'Poucas galinhas, menos ovos ainda',
      subtitle:
        'A IA local está crescendo rápido, mas a base instalada de hardware realmente utilizável é minúscula. Os grandes aplicativos são ainda mais raros.',
      summary:
        'Pouquíssimos computadores conseguem rodar um bom modelo de IA local, e menos ainda são os apps que fazem o esforço valer a pena. Nove testes práticos, números com fontes e um registro de afirmações mostram onde a IA local está hoje.',
      seoTitle: 'Poucas galinhas, menos ovos ainda | O Estado da IA Local',
      metaDescription:
        'Relatório 01 (Q4 2026): poucos PCs rodam bons modelos de IA local e poucos apps valem a pena. Números com fontes, nove testes e registro de afirmações.',
      keyFindings: [
        'Na pesquisa de hardware da Steam de julho de 2026, 25.9% dos sistemas pesquisados tinham 16 GB de memória de vídeo e 5.4% tinham 24 GB.',
        'Num Mac de 24 GB, nos testes do autor, o sistema usou 9.67 GB de memória logo após a inicialização, antes de qualquer modelo ser carregado.',
        'Dos nove apps de IA local que o autor testou, oito puderam receber nota; quatro desses oito tiraram 2 ou menos na função principal.',
        'Entre 2.2% e 4.5% dos domicílios ou consumidores dos EUA pagam por um chatbot de IA, segundo três fontes de dados de cartão. O 1% que mais paga responde por 19.5% do gasto do consumidor com IA.',
        'O preço de tabela do NVIDIA DGX Spark de 128 GB subiu de $3,999 no lançamento para $4,699 em fevereiro de 2026 e $6,950 em outubro de 2026.',
        'As vendas de novos notebooks e PCs de mesa caíram no terceiro trimestre de 2026: a IDC relata queda de 20.1% nas remessas, para 62.7 milhões de unidades, e a Omdia queda de 21.2%, para 58.1 milhões.',
        'Os maiores modelos abertos ficam cerca de quatro meses atrás dos melhores modelos na nuvem, mas precisam de pelo menos 377 GB de memória (um cálculo).',
        'Uma busca por "local AI" retorna 10 resultados na App Store alemã da Apple e 29 listagens no Google Play, entre cerca de 2.75 milhões e 2.65 milhões de apps.',
        'As buscas no Google por "local ai" atingiram o pico no fim de maio de 2026 e, em meados de outubro, estavam na metade do nível de um ano antes; o relatório afirma que essa divergência em relação a outros indicadores não pode ser explicada a partir dos dados.',
      ],
      disclosure:
        'O autor fundou o PromptQuorum, um site de conteúdo e diretório sobre apps de IA local, e testou apps que estão listados lá. Cada registro de teste prático, com rótulos de evidência e os próprios erros do testador, está vinculado a partir do arquivo de evidências. Nenhum pagamento ou patrocínio consta nas notas de teste.',
      correction: 'Versão 1.0: primeira publicação.',
    },
  },
}
