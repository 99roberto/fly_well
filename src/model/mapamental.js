const mapaMental = {
  home: {
    style: 'intro',
    question:
    '<h2>Sobre o objetivo deste aplicativo e seu funcionamento: </h2>'
    +'<p>Este aplicativo se destina a viajantes, médicos, companhias aéreas e órgãos públicos, e tem como objetivo auxiliar pessoas na tomada de decisão em procurar auxílio médico antes de realizar uma viagem aérea e educadores em disseminar conhecimento sobre saúde aeroespacial. Não tem a intenção de definir diagnóstico de saúde, emitir liberação oficial para voar ou substituir avaliação médica.</p>'
    +'<p>O questionário tem como objetivo guiar a pessoa e profissionais médicos na melhor orientação para a recomendação de saúde individualizada para se realizar uma viagem aérea. Os prazos em dias sugeridos de adiamento para voar podem ser alterados de acordo com cada caso.</p>'
    +'<p>Ao fim do questionário, caso sejam identificadas contraindicações ou recomendações de avaliação médica antes do voo, será oferecida a opção de emissão de um relatório resumido em forma de carta que pode ser direcionado ao profissional médico.</p>'
    +'<p>O design do aplicativo e os blocos de perguntas a seguir foram agrupados conforme critério dos autores. As informações aqui contidas estão de acordo com a bibliografia citada no momento de sua produção e publicação (2023).</p>'
    +'<h2>Aviso legal: </h2>'
    +'<p>Este aplicativo está situado em uma página da web e não está programado para identificar sua identidade, localização, ou rede. '
    +'Para seu uso também não exigirá nenhum download de arquivo em seu dispositivo. '
    +'Para o seu funcionamento não irá solicitar dados de identificação pessoal ou qualquer outra informação para fins de cadastro. '
    +'Por fim, esta aplicação tampouco registrará os dados que forem imputados por você em qualquer banco de dados. '
    +'<p>Desta forma, você poderá utilizar para fins de consulta pessoal, para outra pessoa ou até mesmo de forma educativa, '
    +'criando e testando múltiplos cenários de acordo com sua necessidade.  ',
    checkboxs: [
      'Estou ciente e de acordo com as informações acima.',
      'Sempre que não estiver me sentindo bem, devo considerar consultar com um profissional médico antes de voar.',
    ],
    mandatory: true,
    options: [{ label: 'INICIAR O QUESTIONÁRIO', goto: 'inicial1', select: true }],
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
      { label: 'Continuar', variant: 'info', goto: 'FINISHED' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  inicial1: {
    type: 'html',
    style: 'inicial',
    question:
      '<div>' +
      '<h4>Você está com alguma ' +
      '<span class="mtooltip">doença ativamente contagiosa ' +
      '<span class="mtooltiptext">' +
      'Doença ativamento contagiosa é uma doença que se transmite pelo contato próximo pelo ar ou por contato direto' +
      '</span>' +
      '</span> ' +
      'que seja transmissível por  ' +
      '<span class="mtooltip">contato direto ou próximo' +
      '<span class="mtooltiptext">' +
      'Contato direto se define toque (aperto de mão, abraço) ' +
      'ou troca de fluidos (beijo, por exemplo).<br/>' +
      'Contato próximo pelo ar se define estar a menos de um metro de distância, por um periodo de 15 minutos ' +
      'sem uso de máscara ou com seu uso inadequado.' +
      '</span>' +
      '</span> ' +
      '?</h4>' +
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
      '<h4>Você é uma pessoa que necessita da presença de um(a) acompanhante ou de ' +
      '<span class="mtooltip">suporte de saúde ' +
      '<span class="mtooltiptext">' +
      'Oxigênio, medicação administrada por outra pessoa, cadeira de rodas ou maca, por exemplo. ' +
      '</span>' +
      '</span> ' +
      ' a bordo?</h4>' +
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
      { label: 'Continuar', variant: 'info', goto: 'gravidez1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  inicialFimMedico1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
    '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2> ' 
      +'<p>Pessoas com infecções respiratórias contagiosas não devem viajar, pois pode ocorrer agravamento dos sintomas, complicações durante e depois do voo e risco de disseminação da doença entre os demais passageiros. </p>'
    +'<p>Recomenda-se que a pessoa nestas condições realize a viagem aérea após a melhora dos sintomas, desde que esteja sem febre e com função pulmonar adequada.</p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'inicial2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  inicialFimMedico2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<h2>É  recomendada avaliação médica antes de realizar a viagem aérea para avaliação de saúde e das necessidades especiais.</h2>'
      +'<p>Serviços especiais podem ser fornecidos pelas companhias aéreas, desde que avisados com antecedência suficiente. '
      +'Alguns podem ser disponíveis gratuitamente, enquanto para outros haverá um custo. Desta forma, o formulário MEDIF '
      +'(<b>Medical Information Form ou Formulário de Informações para Passageiros com Necessidades Especiais</b>) disponibilizado pela companhia aérea deve ser preenchido pelo profissional médico. </p>'
      ,
    options: [
      { label: 'Continuar', variant: 'info', goto: 'inicial3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  inicialMaisInfo: { question: 'Informações pertinentes' },

  gravidez1: {
    style: 'cabecalho',
    question: 'Você é do sexo feminino e está grávida?',
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
      { label: 'Alto risco/Não sei', goto: 'gravidezFimMedico1' },
      { label: 'Baixo Risco ou Risco Habitual', goto: 'gravidez3' },
    ],
  },
  gravidez3: {
    question: 'Sua gestação é única ou múltipla?',
    options: [
      { label: 'Multipla/Não sei', goto: 'gravidezFimMedico3' },
      { label: 'Única', goto: 'gravidez4' },
    ],
  },
  gravidez4: {
    question: 'Qual é a sua idade gestacional?',
    options: [
      { label: '< 28 semanas', goto: 'gravidez5' },
      { label: '> 28 Semanas', goto: 'gravidezFimMedico4' },
    ],
  },

  gravidez5: {
    question: 'Você apresenta algum sintoma relacionado à sua gestação?',
    // checkboxs: [
    //   'Dor abdominal ou vaginal',
    //   'Sangramento',
    //   'Perda de líquido',
    //   'Diminuição ou ausência da movimentação fetal a partir da 28a semana',
    //   'outro',
    // ],
    options: [
      { label: 'sim', goto: 'gravidezFimMedico5'},
      { label: 'Não', goto: 'recemnascido1' },
    ],
  },

  gravidezFimMedico: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question: 'É recomendada avaliação médica antes de realizar a viagem aérea para orientações.',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  gravidezFimMedico1: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question: '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'
    +'<p>É necessário avaliar o risco da gestação antes de realizar a viagem. As viagens longas não devem ser realizadas por paciente com incompetência istmocervical, atividade uterina aumentada ou partos anteriores prematuros, por exemplo. Em condições que comprometem a oxigenação da placenta, deve ser avaliada a necessidade de suporte com oxigênio.</p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
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
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  gravidezFimMedico3: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question: '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'
    +'<p>Viagens longas não devem ser realizadas por paciente multigesta sem antes ter avaliação médica individualizada.</p>'
    +'<p>Apesar das recomendações médicas internacionais (IATA) e nacionais (CFM) determinarem consulta médica para a realização de viagem aérea a partir das 32 semanas de gestação, algumas companhias aéreas nacionais exigem atestado médico a partir da 26a semana de gestação.</p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  gravidezFimMedico4: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question: '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'
    +'<p>Apesar das recomendações médicas internacionais (IATA) e nacionais (CFM) determinarem consulta médica para a realização de viagem aérea a partir das 36 semanas de gestação, algumas companhias aéreas nacionais exigem atestado médico a partir da 28a semana de gestação. </p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  gravidezFimMedico5: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question: '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'
    +'<p>A viagem deve ser evitada caso a gestante apresente dores ou sangramento antes do embarque.</p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  recemnascido1: {
    style: 'cabecalho',
    question: 'Você vai viajará com uma criança  com menos de uma semana de vida?',
    options: [
      { label: 'Sim', goto: 'recemnascido2' },
      { label: 'Não', goto: 'cardiovasculares1' },
    ],
  },
  recemnascido2: {
    question: 'A criança tem menos de dois dia (48h) de vida?',
    options: [
      { label: 'Sim', goto: 'recemnascidoFimMedico1' },
      { label: 'Não', goto: 'recemnascido3' },
    ],
  },
  recemnascido3: {
    question: 'A criança está com algum problema de saúde?',
    options: [
      { label: 'Não', goto: 'recemnascidoFimMedico' },
      { label: 'Sim', goto: 'recemnascido4' },
    ],
  },
  recemnascido4: {
    question:
      'Ausência de obrigatoriedade de consulta médica para voar. Crianças saudáveis podem voar a partir de dois dias (48h) de vida, de preferência a partir de 07 dias de vida. ',
    options: [{ label: 'Continuar', goto: 'cardiovasculares1' }],
  },
  recemnascidoFimMedico1: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question:
    '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'+
    '<p>Crianças saudáveis podem voar a partir de dois dias de vida, de preferência a partir de 07 dias de vida. Algumas companhias aéreas nacionais exigem declaração de responsabilidade em casos de viagem aérea a ser realizada em menos de 07 dias depois do parto. </p>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  recemnascidoFimMedico: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question:
    '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'+
    '<p> Crianças saudáveis podem voar a partir de dois dias de vida, de preferência a partir de 07 dias de vida.</p>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  oncologico1: {
    style: 'cabecalho',
    type: 'html',
    question: '<h4>Você está em '+
    '<span class="mtooltip"> tratamento oncológico ' +
    '<span class="mtooltiptext">' +
    'Tratamento para câncer de qualquer natureza: tratamento com medicamentos, quimioterapia, radioterapia, plano de cirugia.' +
    '</span>' +
    '</span> ' 
    +'?</h4>',
    options: [
      { label: 'Sim', goto: 'oncologicoFim' },
      { label: 'Não', goto: 'FINISHED' },
    ],
  }, 
  oncologicoFim: {
    style: 'fimMedico',
    type: 'html',
    question:
      
    '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'+
    '<p>Pessoas em tratamento por quimioterapia podem voar, mas não durante a administração ativa de medicamentos citotóxicos, especialmente quando envolve tratamento endovenoso. </p>'
    +'<p>Pessoas em radioterapia precisam de avaliação médica para análise do risco individual e coletivo. </p>',

    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'FINISHED' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  cardiovasculares1: {
    style: 'cabecalho',
    question: 'Você tem diagnóstico das seguintes DOENÇAS CARDIOVASCULARES e SANGÚINEAS abaixo?',

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
    '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'
    +'<p>É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. </p>'
    +'<br/>'
    +'<p><b>Angina</b>: pessoas com angina instável não devem voar.</p>'
    +'<br/>'
    +'<p><b>Taquicardia ventricular ou supraventricular</b>: a taquicardia ventricular ou supraventricular não controlada é contraindicação ao voo.</p>'
    +'<br/>'
    +'<p><b>Insuficiência cardíaca</b>: a insuficiência cardíaca grave e descompensada é contraindicação ao voo. Se moderada, deve-se verificar com o médico que acompanha o paciente a necessidade de suporte de oxigênio.</p>'
    +'<br/>'
    +'<p><b>Doença cardíaca congênita</b>: é necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. </p>'
    +'<br/>'
    +'<b>Anemia</b>: independente da causa da anemia, níveis de hemoglobina abaixo de 8,5mg/dL, associados à diminuição da pressão de oxigênio durante o voo, podem levar ao aparecimento de sintomas.</p>' ,
    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  cardiovasculares2: {
    question: 'Você já teve algum dos diagnósticos abaixo?',

    checkboxs: ['Crise hipertensiva',
      'Infarto agudo do miocárdio', 
      'Trombose venosa profunda', 'Edema pulmonar ', 'Embolia pulmonar'],
    options: [
      { label: 'Sim/Não sei', goto: 'cardiovascularesFim2', select: true },
      { label: 'Não', goto: 'cardiovasculares3' },
    ],
  },

  cardiovascularesFim2: {
    style: 'fimMedico',
    type: 'html',
    question:
      
    '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>'
    +'<p>É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. </p>'
    +'<br/>'
    +'<p>Crise hipertensiva: em caso de crise hipertensiva, a pessoa deve aguardar três a quatro dias para voar. </p>'
    +'<br/>'
    +'<p>Infarto agudo do miocárdio: no caso de infarto não complicado, a conduta adotada de liberação para o voo é a de se aguardar de duas a três semanas. Em infarto complicado, seis semanas.  </p>'
    +'<br/>'
    +'<p>Trombose venosa profunda: a imobilização por tempo prolongado, somada a fatores predisponentes, pode causar ou contribuir para a ocorrência de um evento de trombose em voos com duração superior a quatro horas. Pessoas com diagnóstico recente de trombose venosa profunda ou em uso de anticoagulantes devem receber avaliação e orientações de prevenção. </p>'
    +'<br/>'
    +'<p>Edema pulmonar: é necessário avaliar se a função pulmonar está estável ou necessita de controle farmacológico ou suporte de oxigênio suplementar.  </p>'
    +'<br/>'
    +'<p>Embolia pulmonar: é necessário avaliar se a função pulmonar está estável ou necessita de controle farmacológico ou suporte de oxigênio suplementar.  </p>'
    +'<br/>'
    ,
    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
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
      '<p>É recomendada avaliação médica antes de realizar a viagem aérea. </p>' +
      '<br/>' +
      'É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas ao procedimento. ' +
      '<br/><ul>' +
      '<li>Cirurgia cardíaca: viagens possíveis após 10 dias do procedimento, se clinicamente estável e assintomática.]</li>' +
      '<li>Angiografia: viagens possíveis após 24 horas do procedimento, se clinicamente estável e assintomática.</li>' +
      '<li>Angioplastia: submetidos à revascularização miocárdica devem aguardar pelo menos duas semanas. De acordo com a IATA, viagens são possíveis após 03 dias, se pessoa clinicamente estável e assintomática. </li>' +
      '<li>Inserção de marcapasso: viagens possíveis após 02 dias do procedimento, se ritmo estável e sem pneumotórax.</li>' +
      '<li>Marcapasso: viagens são recomendadas a partir de 48h do procedimento com ritmo estável e sem a presença de pneumotórax. </li>' +
      '<li>Terapia cardíaca de ablação: viagens possíveis após 02 dias do procedimento. Risco aumentado de trombose venosa profunda se viagem realizada em menos de uma semana do procedimento.</li>' +
      '</ul>',
    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'pulmonares1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  // 6
  pulmonares1: {
    style: 'cabecalho',
    type: 'html',

    question: '<h4>Você tem diagnóstico das seguintes doenças abaixo?</h4>'
    +'<u>'
    +'<li>Tuberculose</li>'
    +'<li>Doença pulmonar obstrutiva crônica</li>'
    +'<li>Hipertensão pulmonar</li>'
    +'<li>Fibrose cística</li>'
    +'<li>Asma</li>'
    +'<li>Câncer de pulmão</li>'
    +'<li>Bronquiectasias</li>'
    +'<li>Doença neuromuscular pulmonar</li>'
    +'<li>Malformação arteriovenosa pulmonar</li>'
    +'<li>Qualquer doença pulmonar que exija respirador</li>'
    +'</ul>'
      ,
    
    options: [
      { label: 'Sim/Não sei', goto: 'pulmonaresFim1'},
      { label: 'Não', goto: 'pulmonares2' },
    ],
  },
  pulmonaresFim1: {
    style: 'fimMedico',
    type: 'html',
    question:
      '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2>' 
      +'<p>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, fato que piora durante o voo. É necessária avaliação de indicação de oxigenoterapia suplementar em casos selecionados. </p>'
      +'<p>A asma é a doença respiratória mais comum entre os viajantes, sendo incapacitante para o voo em casos graves, instáveis e de hospitalização recente. </p>'
      +'<p></p>',

    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'pulmonares2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  pulmonares2: {
    question: 'Você teve o diagnóstico de pneumotórax nos últimos 30 dias?',
    options: [
      { label: 'Sim/Não sei', goto: 'pulmonaresFim2'},
      { label: 'Não', goto: 'pulmonares3' },
    ],
  },

  pulmonaresFim2: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question:
      '<p>É recomendada avaliação médica antes de realizar a viagem aérea. </p> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática e sem complicações relacionadas às doenças. </p>' +
      '<p>Pneumotórax é contraindicação absoluta para voar. De acordo com a IATA, viagens são possíveis após 14 dias de recuperação pulmonar completa após pneumotórax causado por trauma e 07 dias após recuperação pulmonar completa em pneumotórax por outras causas. A recomendação nacional orienta esperar de duas a três semanas após a drenagem de tórax e confirmar a remissão por exame de raio X.</p>' 
      ,

    options: [
      { label: 'Continuar', variant: 'info', goto: 'pulmonares3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  pulmonares3: {
    question: 'Você já fez algum dos procedimentos abaixo nos últmos 15 dias?',

    checkboxs: ['Cirurgia pulmonar', 'Biópsia de pulmão'],
    options: [
      { label: 'Sim/Não sei', goto: 'pulmonaresFim3', select: true },
      { label: 'Não', goto: 'olhosNarizGarganta1' },
    ],
  },

  pulmonaresFim3: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<p>É recomendada avaliação médica antes de realizar a viagem aérea.</p> ' +
      '<p>Cirurgia pulmonar e biópsia: viagens possíveis após 11 dias do procedimento com recuperação pulmonar completa, em pessoa clinicamente estável e assintomática.</p><p> Pós-pneumectomia ou lobectomia pulmonar recente: a reserva pulmonar é mínima, principalmente na associação com história de tabagismo ou doença pulmonar obstrutiva crônica (DPOC). É recomendado teste de simulação de hipoxia de altitude. </p>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'olhosNarizGarganta1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  // 7

  neuroPsiq1: {
    style: 'cabecalho',
    question: 'Você tem diagnóstico das seguintes doenças abaixo?',

    checkboxs: [
      'Epilepsia ',
      'Demência ',
      'Qualquer doença que apresente déficit cognitivo (Desenvolvimento intelectual insuficiente diagnosticado por profissional de saúde) ',
      'Qualquer diagnóstico de doença ou condição de saúde mental (Depressão, ansiedade, transtorno de humor bipolar, por exemplo)' +
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
      '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2> ' +
      '<p>É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. </p>' +
      '<<ul> '
      +'<li>Epilepsia: pessoas com crises frequentes devem viajar acompanhados e estar cientes de fatores desencadeantes, tais como fadiga, hipoxia e alteração do ritmo circadiano. Recomenda-se que para voar aguardem de 24 a 48 horas após a última crise.</li>'
      +'<li>Demência ou qualquer doença que apresente déficit cognitivo: considerar adiar a viagem até garantir estabilidade clínica se história delirante, paranoide, pessoa agressiva, desorientação, agitação psicomotora, ansiedade excessiva. </li>'
      +'<li>Doenças de saúde mental: não devem voar as pessoas cujo comportamento esteja instável, imprevisível, agressivo ou não seguro. Podem voar aqueles com doença estável e controlada com o uso de medicamentos. </li>'
      +'</ul>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'neuroPsiq2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
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
      '<p>É recomendada avaliação médica antes de realizar a viagem aérea. </p> ' +
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
      { label: 'Continuar', variant: 'info', goto: 'neuroPsiq3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  neuroPsiq3: {
    type: 'html',
    question: '<h4>Você já fez algum dos procedimentos abaixo nos últimos 30 dias?</h4><ul><li>Cirurgia craniana ou cerebral</li></ul>',
 
    options: [
      { label: 'Sim/Não sei', goto: 'neuroPsiqFim3', select: true },
      { label: 'Não', goto: 'ortopedicas1' },
    ],
  },

  neuroPsiqFim3: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<p>É recomendada avaliação médica antes de realizar a viagem aérea. </p> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas ao procedimento. </p>' +
      '<ul>' +
      '<li><b>Cirurgia de crânio ou cerebral:</b> viagens possíveis a partir de 10 dias do procedimento, ' +
      'se pessoa clinicamente estável e assintomática, após avaliação médica sem evidência de ar na cavidade craniana. </li>' +
      '</ul>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'ortopedicas1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
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
      '<p>É recomendada avaliação médica antes de realizar a viagem aérea.</p> ' +
      '<ul>' +
      '<li>Otite média: as condições de infecções ativas e cirurgias otológicas recentes são contraindicações para o voo, mas o uso de tubo de drenagem da orelha média na membrana timpânica não o é. Viagens são possíveis apenas em pessoa clinicamente estável e assintomática. </li>' +
      '<li>Sinusite: a sinusite aguda ou crônica é contraindicação ao voo, por ser uma infecção e pelo risco de obstrução do seio nasal, podendo levar a complicações no momento do pouso ou quando de despressurização da cabine. Viagens são possíveis apenas em pessoa clinicamente estável e assintomática.  </li>' +
      '<li>Lesão perfurante nos olhos: viagens possíveis após 07 dias do evento, após avaliação médica em pessoa clinicamente estável.  </li>' +
      '<li>Sangramento gastrointestinal: viagens possíveis após 10 dias do evento, em pessoa clinicamente estável e assintomática.  </li>' +
      '</ul>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'olhosNarizGarganta2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  olhosNarizGarganta2: {
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 10 dias?',

    checkboxs: [
      'Tratamento de canal',
      'Mandíbula fechada por fio de metal',
      'Cirurgia realizada no abdome',
      'Cirurgia do ouvido',
      'Amidalectomia',
      'Cirurgia nos olhos (Penetrante ou intraocular, catara ou de córnea)',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'olhosNarizGargantaFim2', select: true },
      { label: 'Não', goto: 'neuroPsiq1' },
    ],
  },

  olhosNarizGargantaFim2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      '<p>É recomendada avaliação médica antes de realizar a viagem aérea. </p> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática e sem complicações relacionadas aos procedimentos. </p>' +
      '<ul>' 
      +'<li>Tratamento de canal: podem originar problemas durante os voos, em consequência da expansão do ar acompanhada de fortes dores; recomenda-se avaliação de estabilidade clínica. </li>'
      +'<li>Mandíbula fechada por fio de metal: viagens são possíveis após avaliação do profissional de saúde que indicou o procedimento se possibilidade de abertura da boca ou por liberação manual dos fios ou se possibilidade de cortar os fios.</li>'
      +'<li>Cirurgia realizada no abdome: qualquer cirurgia, pela introdução de ar via incisão, deve ser levada em conta pelo médico (localização, tamanho da incisão e duração), pois a total reabsorção pode levar até 30 dias.  De acordo com a IATA, viagens possíveis após 10 dias da cirurgia realizada de técnica  aberta, em pessoa clinicamente estável e assintomática. A referência nacional orienta aguardar de uma a duas semanas, período em que podem surgir complicações decorrentes da distensão de alças por expansão dos gases, podendo levar a sangramentos e perfuração destas. Após a realização de cirurgia videolaparoscópica deve-se aguardar 24 horas para voar, desde que os sintomas de distensão estejam ausentes.</li>'
      +'<li>Cirurgia do ouvido: viagens possíveis após 10 dias da cirurgia, em pessoa clinicamente estável e assintomática com atestado médico referindo tratamento de ouvido com especificação.</li>'
      +'<li>Amidalectomia: viagens possíveis após 10 dias da cirurgia, em pessoa clinicamente estável e assintomática. </li>'
      +'<li>Cirurgia nos olhos. Cirurgia penetrante ou intraocular:  viagens são possíveis após 07 dias da cirurgia, em pessoa clinicamente estável e assintomática. Cirurgia de catarata ou de córnea: viagens são possíveis após 24 horas da cirurgia, em pessoa clinicamente estável e assintomática. </li>'
      +'</ul>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'ortopedicas1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  // 9

  ortopedicas1: {
    style: 'cabecalho',
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 07 dias?',

    checkboxs: [
      'Cirurgias ortopédicas (coluna, quadril, joelho ou tornozelo)',
      'Artroscopia de articulações',
      'Colocação de gesso',
      'Cirurgia plástica',
      'Terapia de recompressão por descompressão de mergulho',
      'Tratamento de queimadura com infecção generalizada',
    ],
    options: [
      { label: 'Sim/Não sei', goto: 'ortopedicasFim1', select: true },
      { label: 'Não', goto: 'oncologico1' },
    ],
  },

  ortopedicasFim1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
    '<h2>É recomendada avaliação médica antes de realizar a viagem aérea.</h2> ' +
    '<h3>As fraturas instáveis ou não tratadas são contraindicações ao voo. </h3> ' +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática e sem complicações relacionadas ao procedimento. </p>' +
      '<ul>' 
      +'<li>Cirurgias ortopédicas: a avaliação de profilaxia para TVP é muito importante. Se não houver profilaxia para TVP, em viagens mais longas (> 6 horas) nas primeiras 6 semanas devem ser feitas apenas se forem essenciais.  Cirurgia de coluna: recomenda-se aguardar 07 dias após a cirurgia para voar. Os passageiros devem sentar-se eretos para decolagem e pouso. Devem ser capazes de tolerar turbulências e vibrações graves inesperadas associadas ao voo. Suspensórios de suporte podem impedir o uso do colete salva-vidas no caso improvável de uma emergência.</li>'
+'<li>Artroscopia de articulações: viagens são permitidas se a pessoa for capaz de se mobilizar com um auxílio para caminhar e sentar-se totalmente ereto no assento para decolagem e aterrissagem. </li>'
+'<li>Colocação de gesso: recomenda-se aguardar 48h após colocação do gesso se pessoa realizar voos maiores que duas horas. Em engessamentos feitos no período de 24 a 48 horas antes do voo, recomenda-se que sejam bivalvulados para evitar compressão, principalmente em voos longos. Quando for utilizada a tala pneumática, colocar menor quantidade de ar, para evitar uma síndrome compartimental. Por razões de segurança, algumas companhias aéreas exigem que passageiros com gesso em membro inferior acima do joelho devem viajar em maca. </li>'
+'<li>Cirurgia plástica: deve-se levar em consideração certos procedimentos, como a abdominoplastia e o risco tromboembólico, e a pressão prolongada do peso corporal em próteses ou locais operados recentemente colocados.</li>'
+'<li>Terapia de recompressão por descompressão de mergulho: viagens são permitidas em pessoas assintomáticas, a partir de 72h após a última sessão de tratamento. </li>'
+'<li>Queimadura com infecção generalizada: viagens são permitidas em pessoas clinicamente estáveis. </li>'
     + '</ul>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'oncologico1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
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
  //     ],
  //       { label: 'Terminar', variant:'dark', goto: 'FINISHED' },  
  // },
};

const getMapaMental = () => {
  return mapaMental;
};

export default getMapaMental;
