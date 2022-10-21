const mapaMental = {
  home: {
    style: 'intro',
    question:
      '<h2>Questionário A</h2></br>' +
      '<p>As perguntas a seguir são fornecidas como ' +
      'um guia para o período de tempo que deve ' +
      'decorrer entre um evento médico e o voo ' +
      'pretendido. Os prazos podem ser alterados ' +
      'após considerados por médicos. ' +
      'Conte o dia do evento de saúde e o dia da ' +
      'viagem para calcular o número de dias após o incidente.',
    checkboxs: [
      'Estou ciente de que o questionário pode ser autoaplicado ou por um profissional da saúde',
      'Estou ciente que nenhum dado meu será registrado',
      'Sempre que não estiver me sentindo bem, devo considerar consultar antes de voar',
      'É recomendável seguir todo o questionário para avaliação completa',
      'O design do aplicativo, assim como os blocos de perguntas, foram agrupados conforme critério dos autores',
      'Estou ciente dos Termos de Uso ',
      'Estou ciente das Políticas de Privacidade',
    ],
    mandatory: true,
    options: [{ label: 'Iniciar', goto: 'inicial1', select: true }],
    type: 'html',
  },

  teste1: {
    style: 'cabecalho',
    question: 'Você tem diagnóstico das seguintes doenças abaixo?',

    checkboxs: [
      'Angina (dor no peito de origem cardíaca)',
      'Insuficiência cardíaca',
      'Doença cardíaca congênita',
      'Anemia (de qualquer origem)',
      'Anemia falciforme',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'teste2', select: true },
      { label: 'Não', goto: 'FINISHED' },
    ],
  },
  teste2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para avaliação de saúde e das necessidades especiais.',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'FINISHED' },
    ],
  },

  inicial1: {
    type: 'html',
    style: 'inicial',
    question:
      '<div>' +
      '<p>Você está doente ou está com doença que acredita ser ' +
      '<span class="mtooltip">ativamente contagiosa ' +
      '<span class="mtooltiptext">' +
      'Doença ativamento contagiosa é uma doença que se transmite pelo contato próximo pelo ar ou por contato direto' +
      '</span>' +
      '</span> ' +
      'e transmissível pelo ar ou ' +
      '<span class="mtooltip">contato direto ou próximo' +
      '<span class="mtooltiptext">' +
      'Contato direto se define toque (aperto de mão, abraço) ' +
      'ou troca de fluidos (beijo, por exemplo).<br/>' +
      'Contato próximo pelo ar se define estar a menos de um metro de distância, por um periodo de 15 minutos ' +
      'sem uso de máscara ou com seu uso inadequado.' +
      '</span>' +
      '</span> ' +
      '?</p>' +
      '</div>',
    options: [
      { label: 'Sim/Não sei', goto: 'inicialFimMedico1' },
      { label: 'Não', goto: 'inicial2' },
    ],
  },
  inicial2: {
    type: 'html',
    style: 'inicial',
    question:
      '<div>' +
      '<p>Você é uma  ' +
      '<span class="mtooltip">pessoa com deficiêcia (PCD) ' +
      '<span class="mtooltiptext">' +
      'Pessoas com deficiência (PCD) são aquelas que têm impedimentos de longo prazo de natureza física,' +
      ' mental, intelectual ou sensorial, os quais, em interação com diversas barreiras, podem obstruir sua participação ' +
      'plena e efetiva na sociedade em igualdades de condições com as demais pessoas.' +
      '</span>' +
      '</span> ' +
      'que necessita da presença de um(a) acompanhante ou de ' +
      '<span class="mtooltip">suporte de saúde ' +
      '<span class="mtooltiptext">' +
      'Oxigênio, medicação administrada por outra pessoa, cadeira de rodas ou maca, por exemplo. ' +
      '</span>' +
      '</span> ' +
      ' abordo?</p>' +
      '</div>',

    options: [
      { label: 'Sim/Não sei', goto: 'inicialFimMedico2' },
      { label: 'Não', goto: 'gravidez1' },
    ],
  },
  inicial3: {
    style: 'inicial',
    question:
      'Você tem alguma condição de saúde  que precise de acompanhante ou alguma necessidade especial ou que possa comprometer a dinâmica e segurança do voo?',
    options: [
      { label: 'Sim/Não sei', goto: 'inicialFimMedico3' },
      { label: 'Não', goto: 'gravidez1' },
    ],
  },
  inicialFimMedico3: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para avaliação de saúde e das necessidades especiais.',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'gravidez1' },
    ],
  },
  inicialFimMedico1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para avaliação de saúde e das necessidades especiais.',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'inicial2' },
    ],
  },
  inicialFimMedico2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para avaliação de saúde e das necessidades especiais.',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'inicial3' },
    ],
  },
  inicialMaisInfo: { question: 'Informações pertinentes' },

  gravidez1: {
    style: 'cabecalho',
    question: 'Você é mulher E está grávida?',
    options: [
      { label: 'Sim', goto: 'gravidez2' },
      { label: 'Não', goto: 'recemnascido1' },
    ],
  },
  // depreciado
  // gravidez2: {
  //   question: 'Você está apresentando qualquer sangramento vaginal no momento?',
  //   options: [
  //     { label: 'Sim', goto: 'gravidezFimMedico' },
  //     { label: 'Não', goto: 'gravidez3' },
  //   ],
  // },
  gravidez2: {
    question: 'Qual é o risco atribuído à sua gestação?',
    options: [
      { label: 'Alto risco/Não sei', goto: 'gravidezFimMedico' },
      { label: 'Baixo Risco ou Risco Habitual', goto: 'gravidez3' },
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
    question: 'Qual é a sua idade gestacional?',
    options: [
      { label: '< 28 semanas', goto: 'gravidez5' },
      { label: '> 28 Semanas', goto: 'gravidezFimMedico' },
    ],
  },

  gravidez5: {
    question: 'Você apresenta algum sintoma relacionado à sua gestação?',
    checkboxs: [
      'Dor abdominal ou vaginal',
      'Sangramento',
      'Perda de líquido',
      'Diminuição ou ausência da movimentação fetal a partir da 28a semana',
      'outro',
    ],
    options: [
      { label: 'sim', goto: 'gravidezFimMedico' },
      { label: 'Não', goto: 'recemnascido1' },
    ],
  },

  gravidezFimMedico: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question: 'É recomendada avaliação médica antes de realizar a viagem aérea para orientações.',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
    ],
  },
  gravidezFimMedico2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question:
      'É recomendada avaliação médica antes de realizar a viagem aérea para orientações.' +
      ' A maioria das companhias aéreas exige atestado médico a partir da 28ª semana para gestações simples ' +
      ' e a partir da 26ª ou 28 ª semana para gestações múltiplas. ' +
      ' A partir da 32ª semana, é exigido o preenchimento de um formulário específico fornecido pelas companhias aéreas (MEDIF).' +
      ' O formulário deve ser enviado com antecedência mínima de 72 horas do horário previsto de partida do voo.' +
      ' A partir da 38ª semana, o embarque é permitido apenas em casos de extrema necessidade com acompanhamento médico.',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
    ],
  },

  recemnascido1: {
    style: 'cabecalho',
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
    question_type: 'evaluation',
    style: 'fimMedico',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. Crianças saudáveis podem voar a partir de dois dias de vida, de preferência a partir de 07 dias de vida. ',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares1' },
    ],
  },

  oncologico1: {
    style: 'cabecalho',
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
    style: 'fimMedico',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para orientações.\n' +
      ' Pessoas em tratamento por quimioterapia podem voar, mas não durante a administração ativa de medicamentos citotóxicos medicamento, especialmente quando envolve tratamento endovenoso.\n' +
      ' Pessoas em radioterapia precisam de avaliação médica para análise do risco individual e coletivo. ',
    question_type: 'evaluation',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares1' },
    ],
  },

  cardiovasculares1: {
    style: 'cabecalho',
    question: 'Você tem diagnóstico das seguintes doenças abaixo?',

    checkboxs: [
      'Angina (dor no peito de origem cardíaca)',
      'Insuficiência cardíaca',
      'Doença cardíaca congênita',
      'Anemia (de qualquer origem)',
      'Anemia falciforme',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'cardiovascularesFim1', select: true },
      { label: 'Não', goto: 'cardiovasculares2' },
    ],
  },

  cardiovascularesFim1: {
    style: 'fimMedico',
    type: 'html',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. \n' +
      'É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. \n' +
      '\nSe você é médico(a) e está avaliando um paciente, consulte este material para a sua tomada de decisão',
    question_type: 'evaluation',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares2' },
    ],
  },

  cardiovasculares2: {
    question: 'Você já teve algum dos diagnósticos abaixo?',

    checkboxs: ['Infarto agudo do miocárdio', 'Trombose venosa profunda', 'Edema pulmonar ', 'Embolia pulmonar'],
    options: [
      { label: 'Sim/Não sei', goto: 'cardiovascularesFim2', select: true },
      { label: 'Não', goto: 'cardiovasculares3' },
    ],
  },

  cardiovascularesFim2: {
    style: 'fimMedico',
    type: 'html',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. \n' +
      'É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. \n' +
      '\nSe você é médico(a) e está avaliando um paciente, consulte este material para a sua tomada de decisão',
    question_type: 'evaluation',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares3' },
    ],
  },
  cardiovasculares3: {
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 10 dias?',

    checkboxs: [
      'Cirurgia cardíaca',
      'Angiografia',
      'Angioplastia',
      'Inserção de marcapasso',
      'Terapia cardíaca de ablação',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'cardiovascularesFim3', select: true },
      { label: 'Não', goto: 'pulmonares1' },
    ],
  },

  cardiovascularesFim3: {
    style: 'fimMedico',
    type: 'html',
    question:
      '<h3>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. </h3>' +
      '<br/>' +
      'É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas ao procedimento. ' +
      '<br/><ul>' +
      '<li>Cirurgia cardíaca: viagens possíveis após 10 dias do procedimento, se clinicamente estável e assintomática</li>' +
      '<li>Angiografia: viagens possíveis após 24 horas do procedimento, se clinicamente estável e assintomática</li>' +
      '<li>Angioplastia: viagens possíveis após 03 dias, se clinicamnte estável e assintomática</li>' +
      '<li>Inserção de marcapasso: viagens possíveis após 02 dias do procedimento, se ritmo estável e sem pneumotórax</li>' +
      '<li>Terapia cardíaca de ablação: viagens possíveis após 02 dias do procedimento. ' +
      'Risco aumentado de trombose venosa profunda se viagem realizada em menos de uma semana do procedimento.</li>' +
      '</ul>',
    question_type: 'evaluation',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'pulmonares1' },
    ],
  },
  // 6
  pulmonares1: {
    style: 'cabecalho',

    question: 'Você tem diagnóstico das seguintes doenças abaixo?',

    checkboxs: [
      'Tuberculose',
      'Doença pulmonar obstrutiva crônica',
      'Hipertensão pulmonar',
      'Fibrose cística',
      'Asma',
      'Câncer de pulmão',
      'Bronquiectasias',
      'Doença neuromuscular pulmonar',
      'Malformação arteriovenosa pulmonar',
      'Qualquer doença pulmonar que exija respirador',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'pulmonaresFim1', select: true },
      { label: 'Não', goto: 'pulmonares2' },
    ],
  },
  pulmonaresFim1: {
    style: 'fimMedico',
    question:
      'É  recomendada avaliação médica antes de realizar a viagem aérea para orientações.\n ' +
      'É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. ',

    question_type: 'evaluation',
    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'pulmonares2' },
    ],
  },

  pulmonares2: {
    question: 'Você teve algum dos diagnósticos abaixo nos últimos 30 dias?',

    checkboxs: ['Pneumotórax', 'Pneumonia'],
    options: [
      { label: 'Sim/Não sei', goto: 'pulmonaresFim2', select: true },
      { label: 'Não', goto: 'pulmonares3' },
    ],
  },

  pulmonaresFim2: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question:
      '<h2>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações.</h2> ' +
      'É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas às doenças. ' +
      '<ul>' +
      '<li>Pneumotórax: viagens possíveis após 14 dias de recuperação pulmonar completa após pneumotórax ' +
      'causado por trauma e 07 dias após recuperação pulmonar completa em pneumotórax por outras causas. </li>' +
      '<li>Pneumonia: resolução completa em pessoa clinicamente estável e assintomática.  </li>' +
      '</ul>',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'pulmonares3' },
    ],
  },

  pulmonares3: {
    question: 'Você já fez algum dos procedimentos abaixo nos últmos 15 dias?',

    checkboxs: ['Cirurgia pulmonar', 'Biópsia de pulmão'],
    options: [
      { label: 'Sim/Não sei', goto: 'pulmonaresFim3', select: true },
      { label: 'Não', goto: 'neuroPsiq1' },
    ],
  },

  pulmonaresFim3: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<h3>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações.</h3> ' +
      'É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas aos procedimentos. ' +
      '<ul>' +
      '<li>Cirurgia pulmonar e biópsia: viagens possíveis após 11 dias do procedimento com recuperação pulmonar completa, ' +
      'em pessoa clinicamente estável e assintomática. </li>' +
      '</ul>',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'neuroPsiq1' },
    ],
  },

  // 7

  neuroPsiq1: {
    style: 'cabecalho',
    type: 'html',
    question: 'Você tem diagnóstico das seguintes doenças abaixo?',

    checkboxs: [
      'Epilepsia ',
      'Demência ',
      'Qualquer doença que apresente déficit cognitivo ',
      'Qualquer diagnóstico de doença ou condição de saúde mental ' +
        '(depressão, ansiedade, transtorno de humor bipolar, outros) ',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'neuroPsiqFim1', select: true },
      { label: 'Não', goto: 'neuroPsiq2' },
    ],
  },

  neuroPsiqFim1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<h3>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. </h3> ' +
      '<p>É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. </p>' +
      '<br/>' +
      '<p>Se devidamente controlado por medicação e estável (ou seja, vivendo na comunidade cuidando de todas as próprias necessidades incluindo medicamentos)</p>',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'neuroPsiq2' },
    ],
  },

  neuroPsiq2: {
    question: 'Você teve algum dos diagnósticos abaixo nos últmos 30 dias?',

    checkboxs: [
      'Acidente isquêmico transitório (AIT) ',
      'Acidente vascular cerebral (AVC)  ',
      'Psicose aguda (perda de contato com a realidade: delírios, alucinações e pensamento desordenado)  ',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'neuroPsiqFim2', select: true },
      { label: 'Não', goto: 'neuroPsiq3' },
    ],
  },

  neuroPsiqFim2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<h3>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. </h3> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas às doenças. </p>' +
      '<ul>' +
      '<li><b>Acidente vascular cerebral (AVC):</b> viagens possíveis após 05 a14 dias, conforme avaliação médica ' +
      'e estabilidade clínica com necessidade de acompanhante profissional de saúde. Pessoas que tiveram AVC a menos ' +
      'de 02 semanas com liberação médica para voar devem receber oxigenioterapia suplementar durante o voo. </li>' +
      '<li><b>Acidente isquêmico transitório (AIT):</b> viagens possíveis após 02 dias do evento, com investigação da causa completa, ' +
      'em pessoa clinicamente estável e assintomática. </li>' +
      '<li><b>Psicose aguda:</b> viagens possíveis após 30 dias do evento, em pessoa clinicamente estável, com indicação ' +
      'de acompanhante profissional de saúde conforme avaliação médica.  </li>' +
      '</ul>',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'neuroPsiq3' },
    ],
  },

  neuroPsiq3: {
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 30 dias?',

    checkboxs: ['Cirurgia craniana ou cerebral'],
    options: [
      { label: 'Sim/Não sei', goto: 'neuroPsiqFim3', select: true },
      { label: 'Não', goto: 'olhosNarizGarganta1' },
    ],
  },

  neuroPsiqFim3: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<h3>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. </h3> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas ao procedimento. </p>' +
      '<ul>' +
      '<li><b>Cirurgia de crânio ou cerebral:</b> viagens possíveis a partir de 10 dias do procedimento, ' +
      'se pessoa clinicamente estável e assintomática, após avaliação médica sem evidência de ar na cavidade craniana. </li>' +
      '</ul>',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'olhosNarizGarganta1' },
    ],
  },

  // 8
  olhosNarizGarganta1: {
    style: 'cabecalho',
    question: 'Você teve algum dos diagnósticos abaixo nos últimos 14 ias?',

    checkboxs: ['Sangramento gastrointestinal ', 'Otite média ', 'Sinusite ', 'Lesão perfurante dos olhos '],
    options: [
      { label: 'Sim/Não sei', goto: 'olhosNarizGargantaFim1', select: true },
      { label: 'Não', goto: 'olhosNarizGarganta2' },
    ],
  },

  olhosNarizGargantaFim1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<h3>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. </h3> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática  e sem complicações relacionadas às doenças. </p>' +
      '<ul>' +
      '<li><b>Sangramento gastrointestinal:</b> viagens possíveis após 10 dias do evento, em pessoa clinicamente estável e assintomática.  </li>' +
      '<li><b>Otite média:</b> viagens possíveis em pessoa clinicamente estável e assintomática.  </li>' +
      '<li><b>Sinusite:</b> viagens possíveis em pessoa clinicamente estável e assintomática.  </li>' +
      '<li><b>Lesão perfurante nos olhos:</b> viagens possíveis após 07 dias do evento, após avaliação médica em pessoa clinicamente estável.  </li>' +
      '</ul>',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'olhosNarizGarganta2' },
    ],
  },

  olhosNarizGarganta2: {
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 10 dias?',

    checkboxs: [
      'Mandíbula fechada por fio de metal ',
      'Cirurgia realizada no abdome ',
      'Cirurgia do ouvido ',
      'Amidalectomia ',
      'Cirurgia dos olhos (penetrante ou intraocular) ',
      'Cirrugia dos olhos (catarata ou de córnea) ',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'olhosNarizGargantaFim2', select: true },
      { label: 'Não', goto: 'ortopedicas1' },
    ],
  },

  olhosNarizGargantaFim2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<h3>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. </h3> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática e sem complicações relacionadas aos procedimentos. </p>' +
      '<ul>' +
      '<li><b>Mandíbula fechada por fio de metal:</b>viagens possíveis após avaliação do profissional de saúde que indicou o procedimento se ' +
      'possibilidade de abertura da boca ou por liberação manual dos fios ou se possibilidade de cortar os fios </li>' +
      '<li><b>Cirurgia realizada no abdome:</b> viagens possíveis após 10 dias da cirurgia, em pessoa clinicamente estável e assintomática.</li>' +
      '<li><b>Cirurgia do ouvido:</b> viagens possíveis após 10 dias da cirurgia, em pessoa clinicamente estável e assintomática com atestado ' +
      'médico referindo tratamento de ouvido com especificação.</li>' +
      '<li><b>Amidalectomia:</b>  viagens possíveis após 10 dias da cirurgia, em pessoa clinicamente estável e assintomática. </li>' +
      '<li><b>Cirurgia dos olhos (penetrante ou intraocular):</b> viagens possíveis após 07 dias da cirurgia, em pessoa clinicamente estável e assintomática.  </li>' +
      '<li><b>Cirrugia dos olhos (catarata ou de córnea):</b> viagens possíveis após 24 horas da cirurgia, em pessoa clinicamente estável e assintomática. </li>' +
      '</ul>',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'ortopedicas1' },
    ],
  },

  // 9

  ortopedicas1: {
    style: 'cabecalho',
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 07 dias?',

    checkboxs: [
      'Cirurgia de quadril, joelho ou tornozelo ',
      'Cirurgia de coluna ',
      'Cirurgia plástica ',
      'Artroscopia de articulações ',
      'Colocação de gesso ',
      'Terapia de recompressão por descompressão de mergulho ',
      'Tratamento de queimadura com infecção generalizada ',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'ortopedicasFim1', select: true },
      { label: 'Não', goto: 'FINISHED' },
    ],
  },

  ortopedicasFim1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<h3>É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. </h3> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática e sem complicações relacionadas às doenças.</p>' +
      '<ul>' +
      '<li><b>Cirurgia de quadril, joelho ou tornozelo:</b> </li>' +
      '<li><b>Cirurgia de coluna:</b> </li>' +
      '<li><b>Cirurgia plástica:</b> </li>' +
      '<li><b>Artroscopia de articulações:</b> </li>' +
      '<li><b>Colocação de gesso:</b> </li>' +
      '<li><b>Terapia de recompressão por descompressão de mergulho:</b> </li>' +
      '<li><b>Tratamento de queimadura com infecção generalizada:</b> </li>' +
      '</ul>',

    options: [
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },
      { label: 'Continuar', variant: 'info', goto: 'FINISHED' },
    ],
  },

  // ortopedicasFim2: {
  //   style: 'fimMedico',
  //   type: 'html',
  //   question:
  //     '<h2>Ausência de obrigatoriedade de consulta médica para voar. </h2> ' +
  //     '<p>Avaliar próximo sistema. </p>' +
  //     '</lu>',

  //     options: [
  //       { label: 'Continuar', variant:'info', goto: 'recemnascido1' },
  //       { label: 'Terminar', variant:'dark', goto: 'FINISHED' },
  //     ],
  // },
};

const getMapaMental = () => {
  return mapaMental;
};

export default getMapaMental;
