const mapaMental = {
  home: {
    question:
      '<h2>Questionário</h2></br>' +
      '<p>As perguntas a seguir são fornecidas como' +
      'um guia para o período de tempo que deve' +
      'decorrer entre um evento médico e o voo' +
      'pretendido. Os prazos podem ser alterados' +
      'após considerados por médicos.' +
      'Conte o dia do evento de saúde e o dia da' +
      'viagem para calcular o número de dias após o incidente.',
    options: [{ label: 'Start', goto: 'inicial1' }],
    type: 'html',
  },
  inicial1: {
    question:
      'Você está doente ou está com doença que acredita ser ativamente contagiosa e transmissível pelo ar ou contato?',
    options: [
      { label: 'Sim/Não sei', goto: 'inicialFimMedico1' },
      { label: 'Não', goto: 'inicial2' },
    ],
  },
  inicial2: {
    question: 'Você entende que pode prejudicar outros passageiros por conta de sua condição física ou comportamental?',
    options: [
      { label: 'Sim/Não sei', goto: 'inicialFimMedico2' },
      { label: 'Não', goto: 'inicial3' },
    ],
  },
  inicial3: {
    question:
      'Você tem alguma condição de saúde  que precise de acompanhante ou alguma necessidade especial ou que possa comprometer a dinâmica e segurança do voo?',
    options: [
      { label: 'Sim/Não sei', goto: 'inicialFimMedico3' },
      { label: 'Não', goto: 'gravidez1' },
    ],
  },
  inicialFimMedico3: {
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para avaliação de saúde e das necessidades especiais.',
    options: [
      { label: 'Mais informações', goto: 'inicialMaisInfo' },
      { label: 'Entendi, quero continuar', goto: 'gravidez1' },
    ],
  },
  inicialFimMedico1: {
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para avaliação de saúde e das necessidades especiais.',
    options: [
      { label: 'Mais informações', goto: 'inicialMaisInfo' },
      { label: 'Entendi, quero continuar', goto: 'inicial2' },
    ],
	
  },
  inicialFimMedico2: {
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para avaliação de saúde e das necessidades especiais.',
    options: [
      { label: 'Mais informações', goto: 'inicialMaisInfo' },
      { label: 'Entendi, quero continuar', goto: 'inicial3' },
    ],
	
  },
  inicialMaisInfo: { question: 'Informações pertinentes' },

  gravidez1: {
    question: 'Você é mulher E está grávida?',
    options: [
      { label: 'Sim', goto: 'gravidez2' },
      { label: 'Não', goto: 'recemnascido1' },
    ],
  },
  gravidez2: {
    question: 'Você está apresentando qualquer sangramento vaginal no momento?',
    options: [
      { label: 'Sim', goto: 'gravidezFimMedico' },
      { label: 'Não', goto: 'gravidez3' },
    ],
  },
  gravidez3: {
    question: 'Sua gestação é única ou múltipla?',
    options: [
      { label: 'Multipla/Não sei', goto: 'gravidezFimMedico' },
      { label: 'Única', goto: 'gravidez4' },
    ],
  },
  gravidez4: {
    question: 'Qual é o risco atribuído à sua gestação?',
    options: [
      { label: 'Alto risco/Não sei', goto: 'gravidezFimMedico' },
      { label: 'Baixo Risco ou Risco Habitual', goto: 'gravidez5' },
    ],
  },
  gravidez5: {
    question: 'Qual é a sua idade gestacional?',
    options: [
      { label: '< 28 semanas', goto: 'recemnascido1' },
      { label: '> 28 Semanas', goto: 'gravidezFimMedico' },
    ],
  },
  gravidezFimMedico: {
    question: 'É recomendada avaliação médica antes de realizar a viagem aérea para orientações.',
    options: [
      { label: 'Entendi, quero continuar questionário', goto: 'recemnascido1' },
      { label: 'Voltar a tela inicial', goto: 'home' },
    ],
  },
  gravidezFimMedico2: {
    question:
      'É recomendada avaliação médica antes de realizar a viagem aérea para orientações.' +
      'A maioria das companhias aéreas exige atestado médico a partir da 28ª semana para gestações simples ' +
      'e a partir da 26ª ou 28 ª semana para gestações múltiplas. ' +
      'A partir da 32ª semana, é exigido o preenchimento de um formulário específico fornecido pelas companhias aéreas (MEDIF).' +
      'O formulário deve ser enviado com antecedência mínima de 72 horas do horário previsto de partida do voo.' +
      ' A partir da 38ª semana, o embarque é permitido apenas em casos de extrema necessidade com acompanhamento médico.',
    options: [
      { label: 'Entendi, quero continuar questionário', goto: 'recemnascido1' },
      { label: 'Voltar a tela inicial', goto: 'home' },
    ],
  },

  recemnascido1: {
    question: 'Você vai viajar na companhia de uma criança recém-nascida (menos de uma semana de vida)?',
    options: [
      { label: 'Sim', goto: 'recemnascido2' },
      { label: 'Não', goto: 'oncologico1' },
    ],
  },
  recemnascido2: {
    question: 'A criança tem menos de dois dia (48h) de vida?',
    options: [
      { label: 'Sim', goto: 'recemnascidoFimMedico' },
      { label: 'Não', goto: 'recemnascido3' },
    ],
  },
  recemnascido3: {
    question: 'A criança está clinicamente estável, sem sinteomas e sem suspeita de problema de saúde?',
    options: [
      { label: 'Não', goto: 'recemnascidoFimMedico' },
      { label: 'Sim', goto: 'recemnascido4' },
    ],
  },
  recemnascido4: {
    question:
      'Ausência de obrigatoriedade de consulta médica para voar. Crianças saudáveis podem voar a partir de dois dias (48h) de vida, de preferência a partir de 07 dias de vida. ',
    options: [{ label: 'Continuar', goto: 'oncologico1' }],
  },
  recemnascidoFimMedico: {
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. Crianças saudáveis podem voar a partir de dois dias de vida, de preferência a partir de 07 dias de vida. ',
  },

  oncologico1: {
    question: 'Você está em tratamento oncológico?',
    options: [
      { label: 'Sim', goto: 'oncologico2' },
      { label: 'Não', goto: 'cardiovasculares1' },
    ],
  },
  oncologico2: {
    question: 'Você está em tratamento com quimioterapia ou radioterapia?',
    options: [
      { label: 'Sim', goto: 'oncologicoFim' },
      { label: 'Não', goto: 'cardiovasculares1' },
    ],
  },
  oncologicoFim: {
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para orientações.\n' +
      'Pessoas em tratamento por quimioterapia podem voar, mas não durante a administração ativa de medicamentos citotóxicos medicamento, especialmente quando envolve tratamento endovenoso.\n' +
      'Pessoas em radioterapia precisam de avaliação médica para análise do risco individual e coletivo. ',
  },

  cardiovasculares1: {
    type: 'html',
    question:
      '<h2>Você tem diagnóstico das seguintes doenças abaixo?</h2>' +
      '<ul>' +
      '<li>Angina (dor no peito de origem cardíaca)</li>' +
      '<li>Insuficiência cardíaca</li>' +
      '<li>Doença cardíaca congênita</li>' +
      '<li>Anemia (de qualquer origem)</li>' +
      '<li>Anemia falciforme</li>' +
      '</ul>',
  },
};

const getMapaMental = () => {
  return mapaMental;
};

export default getMapaMental;
