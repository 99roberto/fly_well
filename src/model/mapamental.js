const TITULO_RECOMENDACAO  = '<h4>Recomendamos avaliação médica para que você possa realizar uma viagem mais segura.</h4> ';
const btnSimNaoSei = {label:'Sim/Não sei'};
const btnNao = {label:'Não'};

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
    options: [{ label: 'INICIAR O QUESTIONÁRIO', 
    // goto:'cardiovasculares1',
    goto: 'inicial1', 
    
    select: true }],
    type: 'html',
  },

  inicial1: {
    type: 'html',
    style: 'inicial',
    question:
      '<div>' +
      '<p>Você está com alguma ' +
      '<span class="mtooltip">doença ativamente contagiosa ' +
      '<span class="mtooltiptext">' +
      'Doença ativamente contagiosa é uma doença que se transmite pelo contato próximo pelo ar ou por contato direto' +
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
      '?</p>' +
      '</div>',
    options: [
      {...btnSimNaoSei, ...{goto: 'inicialFimMedico1' }},
      {...btnNao, ...{goto:'inicial2' }},
    ],
  },
  inicial2: {
    type: 'html',
    style: 'inicial',
    question:
      '<div>' +
      '<p>Você é uma pessoa que necessita da presença de um(a) acompanhante ou de ' +
      '<span class="mtooltip">suporte de saúde ' +
      '<span class="mtooltiptext">' +
      'Oxigênio, medicação administrada por outra pessoa, cadeira de rodas ou maca, por exemplo. ' +
      '</span>' +
      '</span> ' +
      ' a bordo?</p>' +
      '</div>',

    options: [
      {...btnSimNaoSei, ...{goto:  'inicialFimMedico2' }},
      {...btnNao, ...{goto:'gravidez1' }},
    ],
  },
 
  inicialFimMedico1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
    TITULO_RECOMENDACAO 
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
      TITULO_RECOMENDACAO
      +'<p>Serviços especiais podem ser fornecidos pelas companhias aéreas, desde que avisados com antecedência suficiente. '
      +'Alguns podem ser disponíveis gratuitamente, enquanto para outros haverá um custo. Desta forma, o formulário MEDIF '
      +'(<b>Medical Information Form ou Formulário de Informações para Passageiros com Necessidades Especiais</b>) disponibilizado pela companhia aérea deve ser preenchido pelo profissional médico. </p>'
      ,
    options: [
      { label: 'Continuar', variant: 'info', goto: 'gravidez1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  inicialMaisInfo: { question: 'Informações pertinentes' },

  gravidez1: {
    style: 'cabecalho',
    question: 'Você é do sexo feminino e está grávida?',
    options: [
      { label: 'Sim', goto: 'gravidez2' },
      {...btnNao, ...{goto:'recemnascido1' }},
    ],
  },
 

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
      { label: '< 36 semanas', goto: 'gravidez5' },
      { label: '> 36 Semanas', goto: 'gravidezFimMedico4' },
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
      { label: 'Sim', goto: 'gravidezFimMedico5'},
      {...btnNao, ...{goto:'recemnascido1' }},
    ],
  },

  gravidezFimMedico: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question: TITULO_RECOMENDACAO,
    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  gravidezFimMedico1: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question: TITULO_RECOMENDACAO
    +'<p>É necessário avaliar o risco da gestação antes de realizar a viagem. As viagens longas não devem ser realizadas por paciente com incompetência istmocervical, atividade uterina aumentada ou partos anteriores prematuros, por exemplo. Em condições que comprometem a oxigenação da placenta, deve ser avaliada a necessidade de suporte com oxigênio.</p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'gravidez3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  gravidezFimMedico2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    question:
      TITULO_RECOMENDACAO +
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
    question: TITULO_RECOMENDACAO
    +'<p>Viagens longas não devem ser realizadas por paciente multigesta sem antes ter avaliação médica individualizada.</p>'
    +'<p>As recomendações médicas internacionais (IATA) e nacionais (CFM) determinam consulta médica com documento de liberação para a realização de viagem aérea em gestação múltipla sem complicações a partir das 32 semanas de gestação.</p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'gravidez4' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  gravidezFimMedico4: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question: TITULO_RECOMENDACAO
    +'<p>As recomendações médicas internacionais (IATA) e nacionais (CFM) determinam consulta médica com documento de liberação para a realização de viagem aérea em gestação simples de baixo risco a partir das 36 semanas de gestação.</p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  gravidezFimMedico5: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question: TITULO_RECOMENDACAO
    +'<p>A viagem deve ser evitada caso a gestante apresente dores ou sangramento antes do embarque.</p>',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  recemnascido1: {
    style: 'cabecalho',
    question: 'Você viajará com uma criança  com menos de uma semana de vida?',
    options: [
      { label: 'Sim', goto: 'recemnascido2' },
      {...btnNao, ...{goto:'cardiovasculares1' }},
    ],
  },
  recemnascido2: {
    question: 'A criança tem menos de dois dias (48h) de vida?',
    options: [
      { label: 'Sim', goto: 'recemnascidoFimMedico1' },
      {...btnNao, ...{goto:'recemnascido3' }},
    ],
  },
  recemnascido3: {
    question: 'A criança está com algum problema de saúde?',
    options: [
      {...btnNao, ...{goto:'cardiovasculares1' }},
      { label: 'Sim', goto: 'recemnascidoFimMedico' },
    ],
  },
  
  recemnascidoFimMedico1: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question:
    TITULO_RECOMENDACAO+
    '<p>Crianças saudáveis podem voar a partir de dois dias de vida, de preferência a partir de 07 dias de vida. Algumas companhias aéreas nacionais exigem declaração de responsabilidade em casos de viagem aérea a ser realizada em menos de 07 dias depois do parto. </p>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'recemnascido3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  recemnascidoFimMedico: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question:
    TITULO_RECOMENDACAO+
    '<p> A presença de sintomas pode ter relação com doenças infectocontagiosas ou outras contraindicações para voar. Crianças saudáveis podem voar a partir de dois dias de vida. </p>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  oncologico1: {
    style: 'cabecalho',
    type: 'html',
    question: '<p>Você está em '+
    '<span class="mtooltip"> tratamento oncológico ' +
    '<span class="mtooltiptext">' +
    'Tratamento para câncer de qualquer natureza: tratamento com medicamentos, quimioterapia, radioterapia, plano de cirurgia.' +
    '</span>' +
    '</span> ' 
    +'?</p>',
    options: [
      { label: 'Sim', goto: 'oncologicoFim' },
      {...btnNao, ...{goto:'FINISHED' }},
    ],
  }, 
  oncologicoFim: {
    style: 'fimMedico',
    type: 'html',
    question:
      
    TITULO_RECOMENDACAO+
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
      {q:'Angina (dor no peito de origem cardíaca)', r:'<b>Angina:</b> pessoas com angina instável não devem voar.'},
      {q:'Taquicardia ventricular ou supraventricular', r:'<b>Taquicardia ventricular ou supraventricular:</b> a taquicardia ventricular ou supraventricular não controlada é contraindicação ao voo.'},
      {q:'Insuficiência cardíaca', r:'<b>Insuficiência cardíaca:</b> a insuficiência cardíaca grave e descompensada é contraindicação ao voo. Se moderada, deve-se verificar com o médico que acompanha o paciente a necessidade de suporte de oxigênio.'},
      {q:'Doença cardíaca congênita', r:'<b>Doença cardíaca congênita:</b> é necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. '},
      {q:'Anemia (de qualquer origem)', r:'<b>Anemia:</b> independente da causa da anemia, níveis de hemoglobina abaixo de 8,5mg/dL, associados à diminuição da pressão de oxigênio durante o voo, podem levar ao aparecimento de sintomas. Em casos de anemia aguda, principalmente por perda sanguínea, é recomendado avaliação da hemoglobina por exame de sangue 24h após o último episódio de sangramento. Em relação à anemia falciforme, considera-se esperar 10 dias após a última crise falciforme. Em necessidade de viagem antes deste período, é necessária avaliação médica. '},
    ],
    options: [
      {...btnSimNaoSei, ...{goto:  'cardiovascularesFim1', select: true }},
      {...btnNao, ...{goto:'cardiovasculares2' }},
    ],
  },

  cardiovascularesFim1: {
    style: 'fimMedico',
    type: 'html',
    question:
    TITULO_RECOMENDACAO
    +'<p>É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. </p>' ,
    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  cardiovasculares2: {
    question: 'Você já teve algum dos diagnósticos abaixo?',

    checkboxs: [
      {q:'Crise hipertensiva',r:'<b>Crise hipertensiva:</b> em caso de crise hipertensiva, a pessoa deve aguardar três a quatro dias para voar. '},
      {q:'Infarto agudo do miocárdio', r:'<b>Infarto agudo do miocárdio:</b> no caso de infarto não complicado, a conduta adotada de liberação para o voo é a de se aguardar de duas a três semanas. Em infarto complicado, seis semanas.  '},
      {q:'Trombose venosa profunda', r:'<b>Trombose venosa profunda:</b> a imobilização por tempo prolongado, somada a fatores predisponentes, pode causar ou contribuir para a ocorrência de um evento de trombose em voos com duração superior a quatro horas. Pessoas com diagnóstico recente de trombose venosa profunda ou em uso de anticoagulantes devem receber avaliação e orientações de prevenção. '},
      {q:'Edema pulmonar ', r:'<b>Edema pulmonar:</b> é necessário avaliar se a função pulmonar está estável ou necessita de controle farmacológico ou suporte de oxigênio suplementar.  '},
      {q:'Embolia pulmonar',r:'<b>Embolia pulmonar:</b> é necessário avaliar se a função pulmonar está estável ou necessita de controle farmacológico ou suporte de oxigênio suplementar.  '},
    ],
    options: [
      {...btnSimNaoSei, ...{goto:  'cardiovascularesFim2', select: true }},
      {...btnNao, ...{goto:'cardiovasculares3' }},
    ],
  },

  cardiovascularesFim2: {
    style: 'fimMedico',
    type: 'html',
    question:
      
    TITULO_RECOMENDACAO
    +'<p>É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. </p>',
    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'cardiovasculares3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  cardiovasculares3: {
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 10 dias?',

    checkboxs: [
      {q:'Cirurgia cardíaca',r:'<b>Cirurgia cardíaca:</b> viagens possíveis após 10 dias do procedimento, se clinicamente estável e assintomática.'},
      {q:'Angiografia',r:'<b>Angiografia:</b> viagens possíveis após 24 horas do procedimento, se clinicamente estável e assintomática.'},
      {q:'Angioplastia',r:'<b>Angioplastia:</b> submetidos à revascularização miocárdica devem aguardar pelo menos duas semanas. De acordo com a IATA, viagens são possíveis após 03 dias, se pessoa clinicamente estável e assintomática após avaliação e liberação médica.'},
      {q:'Inserção de marcapasso',r:'<b>Inserção de marcapasso:</b> viagens são recomendadas após 02 dias do procedimento, se ritmo cardíaco estável e sem a presença de pneumotórax.'},
      {q:'Terapia cardíaca de ablação',r:'<b>Terapia cardíaca de ablação:</b> viagens possíveis após 02 dias do procedimento. Risco aumentado de trombose venosa profunda se viagem realizada em menos de uma semana do procedimento.'},
    ],
    options: [
      {...btnSimNaoSei, ...{goto:  'cardiovascularesFim3', select: true }},
      {...btnNao, ...{goto:'pulmonares1' }},
    ],
  },

  cardiovascularesFim3: {
    style: 'fimMedico',
    type: 'html',
    question:
      TITULO_RECOMENDACAO +
      '<br/>' +
      'É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas ao procedimento. ',
    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'pulmonares1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  // 6
  pulmonares1: {
    question: 'Você tem diagnóstico das seguintes doenças abaixo?',

    checkboxs: [
      {q:'Asma', r:'<b>Asma:</b> a asma é a doença respiratória mais comum entre os viajantes, sendo incapacitante para o voo em casos graves, instáveis e de hospitalização recente. Viagens são recomendadas em pacientes estáveis, sem sintomas e sem sinais de infecção ativa. Recomenda-se transportar consigo medicamentos para manejo da crise conforme prescrição médica.'},
      {q:'Doença pulmonar obstrutiva crônica', r:'<b>Doença pulmonar obstrutiva crônica:</b>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, e podem piorar durante o voo. É necessária avaliação médica para confirmar estabilidade clínica ou a indicação de oxigenoterapia suplementar em casos selecionados. '},
      {q:'Hipertensão pulmonar', r:'<b>Hipertensão pulmonar:</b>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, e podem piorar durante o voo. É necessária avaliação médica para confirmar estabilidade clínica ou a indicação de oxigenoterapia suplementar em casos selecionados. '},
      {q:'Fibrose cística', r:'<b>Fibrose cística:</b>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, e podem piorar durante o voo. É necessária avaliação médica para confirmar estabilidade clínica ou a indicação de oxigenoterapia suplementar em casos selecionados. '},
      {q:'Câncer de pulmão', r:'<b>Câncer de pulmão:</b>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, e podem piorar durante o voo. É necessária avaliação médica para confirmar estabilidade clínica ou a indicação de oxigenoterapia suplementar em casos selecionados. '},
      {q:'Bronquiectasias', r:'<b>Bronquiectasias:</b>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, e podem piorar durante o voo. É necessária avaliação médica para confirmar estabilidade clínica ou a indicação de oxigenoterapia suplementar em casos selecionados. '},
      {q:'Doença neuromuscular pulmonar', r:'<b>Doença neuromuscular pulmonar:</b>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, e podem piorar durante o voo. É necessária avaliação médica para confirmar estabilidade clínica ou a indicação de oxigenoterapia suplementar em casos selecionados. '},
      {q:'Malformação arteriovenosa pulmonar', r:'<b>Malformação arteriovenosa pulmonar:</b>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, e podem piorar durante o voo. É necessária avaliação médica para confirmar estabilidade clínica ou a indicação de oxigenoterapia suplementar em casos selecionados. '},
      {q:'Qualquer doença pulmonar que exija respirador ou oxigênio', r:'<b>Qualquer doença pulmonar que exija respirador ou oxigênio:</b>Pessoas com doenças pulmonares crônicas podem apresentar capacidade reduzida de oxigenar o sangue, e podem piorar durante o voo. É necessária avaliação médica para confirmar estabilidade clínica ou a indicação de oxigenoterapia suplementar em casos selecionados. '},
    ],
    
    options: [
      {...btnSimNaoSei, ...{goto:  'pulmonaresFim1', select: true }},
      {...btnNao, ...{goto:'pulmonares2' }},
    ],
  },
  pulmonaresFim1: {
    style: 'fimMedico',
    type: 'html',
    question:
      TITULO_RECOMENDACAO,

    question_type: 'evaluation',
    options: [
      { label: 'Continuar', variant: 'info', goto: 'pulmonares2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  pulmonares2: {
    question: 'Você teve o diagnóstico de pneumotórax nos últimos 30 dias?',
    options: [
      {...btnSimNaoSei, ...{goto:  'pulmonaresFim2'}},
      {...btnNao, ...{goto:'pulmonares3' }},
    ],
  },

  pulmonaresFim2: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question:
      TITULO_RECOMENDACAO +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática e sem complicações relacionadas às doenças. </p>' +
      '<p>Pneumotórax é contraindicação absoluta para voar. De acordo com a IATA, viagens são possíveis após 14 dias de recuperação pulmonar completa após pneumotórax causado por trauma e 07 dias após recuperação pulmonar completa em pneumotórax por outras causas. A recomendação nacional orienta esperar de duas a três semanas após a drenagem de tórax e confirmar a remissão por exame de raio X.</p>' 
      ,

    options: [
      { label: 'Continuar', variant: 'info', goto: 'pulmonares3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  // <<<[#10]
  pulmonares3: {
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 15 dias?',
    checkboxs: [
      {q:'Cirurgia pulmonar', r:'<b>Cirurgia pulmonar e biópsia de pulmão</b>: viagens possíveis após 11 dias do procedimento com recuperação pulmonar completa, em pessoa clinicamente estável e assintomática. Pós-pneumectomia ou lobectomia pulmonar recente: a reserva pulmonar é mínima, principalmente na associação com história de tabagismo ou doença pulmonar obstrutiva crônica (DPOC). É recomendado teste de simulação de hipoxia de altitude. '},
      {q:'Biópsia de pulmão',r:'<b>Cirurgia pulmonar e biópsia de pulmão</b>: viagens possíveis após 11 dias do procedimento com recuperação pulmonar completa, em pessoa clinicamente estável e assintomática. Pós-pneumectomia ou lobectomia pulmonar recente: a reserva pulmonar é mínima, principalmente na associação com história de tabagismo ou doença pulmonar obstrutiva crônica (DPOC). É recomendado teste de simulação de hipoxia de altitude. '}
    ],
    options: [
      {...btnSimNaoSei, ...{goto:  'pulmonaresFim3', select: true }},
      {...btnNao, ...{goto:'olhosNarizGarganta1' }},
    ],
  },

  pulmonaresFim3: {
    question_type: 'evaluation',
    type: 'html',
    style: 'fimMedico',
    question:
      TITULO_RECOMENDACAO,

    options: [
      { label: 'Continuar', variant: 'info', goto: 'olhosNarizGarganta1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  // [#10] >>>
  
  neuroPsiq1: {
    style: 'cabecalho',
    question: 'Você tem diagnóstico das seguintes doenças NEUROPSIQUIÁTRICAS abaixo?',

    checkboxs: [
      {q:'Epilepsia ',r:'<b>Epilepsia:</b>  pessoas com crises frequentes devem viajar acompanhadas e estar cientes de fatores desencadeantes, tais como fadiga, hipoxia e alteração do ritmo circadiano. Recomenda-se que para voar aguardem de 24 a 48 horas após a última crise.'},
      {q:'Demência ou qualquer doença que apresente déficit cognitivo (Desenvolvimento intelectual insuficiente diagnosticado por profissional de saúde) ',
      r:'<b>Demência ou qualquer doença que apresente déficit cognitivo:</b> considerar adiar a viagem até garantir estabilidade clínica se história delirante, paranoide, pessoa agressiva, desorientação, agitação psicomotora, ansiedade excessiva. '},
      {q:'Qualquer diagnóstico de doença ou condição de saúde mental (Depressão, ansiedade, transtorno de humor bipolar, por exemplo)',
      r:'<b>Doenças de saúde mental:</b> não devem voar as pessoas cujo comportamento esteja instável, imprevisível, agressivo ou não seguro. Podem voar aquelas com doença estável e/ou controlada com o uso de medicamentos.'},
    ],
    options: [
      {...btnSimNaoSei, ...{goto:  'neuroPsiqFim1', select: true }},
      {...btnNao, ...{goto:'neuroPsiq2' }},
    ],
  },

  neuroPsiqFim1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      TITULO_RECOMENDACAO +
      '<p>É necessário avaliar se as doenças estão estáveis ou precisam de controle farmacológico. </p>' ,

    options: [
      { label: 'Continuar', variant: 'info', goto: 'neuroPsiq2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  neuroPsiq2: {
    question: 'Você teve algum dos diagnósticos abaixo nos últimos 30 dias?',

    checkboxs: [
      {q:'Acidente isquêmico transitório (AIT) ', r:'<b>Acidente isquêmico transitório (AIT):</b>  viagens possíveis após 02 dias do evento, com investigação da causa completa, em pessoa clinicamente estável e assintomática. '},
      {q:'Acidente vascular cerebral (AVC)  ', r:'<b>Acidente vascular cerebral (AVC):</b> viagens possíveis após 05 a14 dias, conforme gravidade do evento, avaliação médica e estabilidade clínica com necessidade ou não de acompanhante profissional de saúde. De acordo com a IATA, pessoas que tiveram AVC a menos de 02 semanas com liberação médica para voar devem receber oxigenioterapia suplementar durante o voo. '},
      {q:'Psicose aguda (perda de contato com a realidade: delírios, alucinações e pensamento desordenado)  ', r:'<b>Psicose aguda:</b> viagens possíveis após 30 dias do evento, em pessoa clinicamente estável, com indicação de acompanhante profissional de saúde conforme avaliação médica.'},
    ],
    options: [
      {...btnSimNaoSei, ...{goto:  'neuroPsiqFim2', select: true }},
      {...btnNao, ...{goto:'neuroPsiq3' }},
    ],
  },

  neuroPsiqFim2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      TITULO_RECOMENDACAO +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'neuroPsiq3' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  neuroPsiq3: {
    style: 'cabecalho',
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 30 dias?',
    checkboxs: [
      {q:'Cirurgia de crânio ou cerebral', r:'<b>Cirurgia de crânio ou cerebral:</b> viagens possíveis a partir de 10 dias do procedimento, se pessoa clinicamente estável e assintomática, após avaliação médica sem evidência de ar na cavidade craniana. '}],
    options: [
      {...btnSimNaoSei, ...{goto:  'neuroPsiqFim3', select: true }},
      {...btnNao, ...{goto:'ortopedicas1' }},
    ],
  },

  neuroPsiqFim3: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      TITULO_RECOMENDACAO +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática ' +
      'e sem complicações relacionadas ao procedimento. </p>',

    options: [
      { label: 'Continuar', variant: 'info', goto: 'ortopedicas1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
//  <<< [#11]
  olhosNarizGarganta1: {
    style: 'cabecalho',
    question: 'Você teve algum dos diagnósticos das doenças OTORRINOLARINGOLÓGICAS E GASTROINTESTINAIS abaixo nos últimos 14 dias?',

    checkboxs: [
      {q:'Otite média', r:'<b>Otite média:</b> as condições de infecções ativas e cirurgias otológicas recentes são contraindicações para o voo, mas o uso de tubo de drenagem da orelha média na membrana timpânica não o é. Viagens são possíveis apenas em pessoa clinicamente estável e assintomática. '}, 
      {q:'Sinusite', r:'<b>Sinusite:</b> a sinusite aguda ou crônica é contraindicação ao voo, por ser uma infecção e pelo risco de obstrução do seio nasal, podendo levar a complicações no momento do pouso ou quando de despressurização da cabine. Viagens são possíveis apenas em pessoa clinicamente estável e assintomática. '}, 
      {q:'Lesão perfurante dos olhos', r:'<b>Lesão perfurante nos olhos:</b> viagens possíveis após 07 dias do evento, após avaliação médica em pessoa clinicamente estável. '}, 
      {q:'Sangramento gastrointestinal', r:'<b>Sangramento gastrointestinal:</b> viagens possíveis após 10 dias do evento, em pessoa clinicamente estável e assintomática. '}, 
    ],

    options: [
      {...btnSimNaoSei, ...{goto:  'olhosNarizGargantaFim1', select: true }},
      {...btnNao, ...{goto:'olhosNarizGarganta2' }},
    ],
  },

  olhosNarizGargantaFim1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      TITULO_RECOMENDACAO,

    options: [
      { label: 'Continuar', variant: 'info', goto: 'olhosNarizGarganta2' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },
  // [#11] >>>

  olhosNarizGarganta2: {
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 10 dias?',

    checkboxs: [
      {q:'Tratamento de canal',r:'<b>Tratamento de canal:</b> podem originar problemas durante os voos, em consequência da expansão do ar acompanhada de fortes dores; recomenda-se avaliação de estabilidade clínica. '},
      {q:'Mandíbula fechada por fio de metal',r:'<b>Mandíbula fechada por fio de metal:</b> viagens são possíveis após avaliação do profissional de saúde que indicou o procedimento se possibilidade de abertura da boca ou por liberação manual dos fios ou se possibilidade de cortar os fios.'},
      {q:'Cirurgia realizada no abdome',r:'<b>Cirurgia realizada no abdome:</b> qualquer cirurgia, pela introdução de ar via incisão, deve ser levada em conta pelo médico (localização, tamanho da incisão e duração), pois a total reabsorção pode levar até 30 dias.  De acordo com a IATA, viagens possíveis após 10 dias da cirurgia realizada de técnica  aberta, em pessoa clinicamente estável e assintomática. A referência nacional orienta aguardar de uma a duas semanas, período em que podem surgir complicações decorrentes da distensão de alças por expansão dos gases, podendo levar a sangramentos e perfuração destas. Após a realização de cirurgia videolaparoscópica deve-se aguardar 24 horas para voar, desde que os sintomas de distensão estejam ausentes.'},
      {q:'Cirurgia do ouvido',r:'<b>Cirurgia do ouvido:</b> viagens possíveis após 10 dias da cirurgia, em pessoa clinicamente estável e assintomática com atestado médico referindo tratamento de ouvido com especificação.'},
      {q:'Amidalectomia',r:'<b>Amidalectomia:</b> viagens possíveis após 10 dias da cirurgia, em pessoa clinicamente estável e assintomática. '},
      {q:'Cirurgia nos olhos (Penetrante ou intraocular, catara ou de córnea)',r:'<b>Cirurgia nos olhos:</b> Cirurgia penetrante ou intraocular:  viagens são possíveis após 07 dias da cirurgia, em pessoa clinicamente estável e assintomática. Cirurgia de catarata ou de córnea: viagens são possíveis após 24 horas da cirurgia, em pessoa clinicamente estável e assintomática. '},
    ],
    options: [
      {...btnSimNaoSei, ...{goto:  'olhosNarizGargantaFim2', select: true }},
      {...btnNao, ...{goto:'neuroPsiq1' }},
    ],
  },

  olhosNarizGargantaFim2: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
      TITULO_RECOMENDACAO +
      '<p>É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática e sem complicações relacionadas aos procedimentos. </p>'
     ,

    options: [
      { label: 'Continuar', variant: 'info', goto: 'ortopedicas1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

  // 16
  ortopedicas1: {
    style: 'cabecalho',
    question: 'Você já fez algum dos procedimentos abaixo nos últimos 07 dias?',

    checkboxs: [
      {q:'Cirurgias ortopédicas (de quadril, joelho ou tornozelo)',r:'<b>Cirurgias ortopédicas (quadril, joelho ou tornozelo):</b> a avaliação de profilaxia para Trombose Venosa Profunda (TVP) é muito importante. Se não houver profilaxia para TVP, em viagens mais longas (> 6 horas), nas primeiras 6 semanas devem ser feitas apenas se forem essenciais.  '},
      {q:'Cirurgia de coluna',r:'<b>Cirurgia de coluna:</b> recomenda-se aguardar 07 dias após a cirurgia para voar. Os passageiros devem sentar-se eretos para decolagem e pouso. Devem ser capazes de tolerar turbulências e vibrações graves inesperadas associadas ao voo. Suspensórios de suporte podem impedir o uso do colete salva-vidas no caso improvável de uma emergência.'},
      {q:'Artroscopia de articulações',r:'<b>Artroscopia de articulações:</b> viagens são permitidas se a pessoa for capaz de se mobilizar com um auxílio para caminhar e sentar-se totalmente ereto no assento para decolagem e aterrissagem. '},
      {q:'Tratamento de fraturas ou colocação de gesso',r: '<p><b>As fraturas instáveis ou não tratadas são contraindicações ao voo. </b>' +
      'É necessário avaliar se, após os procedimentos realizados, a pessoa está estável, assintomática e sem complicações relacionadas ao procedimento. </p>'
        +'<br/><b>Colocação de gesso:</b> recomenda-se aguardar 48h após colocação do gesso se pessoa realizar voos maiores que duas horas. Em engessamentos feitos no período de 24 a 48 horas antes do voo, recomenda-se que sejam bivalvulados para evitar compressão, principalmente em voos longos. Quando for utilizada a tala pneumática, colocar menor quantidade de ar, para evitar uma síndrome compartimental. Por razões de segurança, algumas companhias aéreas exigem que passageiros com gesso em membro inferior acima do joelho devem viajar em maca. '},
      {q:'Cirurgia plástica',r:'<b>Cirurgia plástica:</b> deve-se levar em consideração certos procedimentos, como a abdominoplastia e o risco tromboembólico, e a pressão prolongada do peso corporal em próteses ou locais operados recentemente colocados.'},
      {q:'Terapia de recompressão por descompressão de mergulho',r:'<b>Terapia de recompressão por descompressão de mergulho:</b> viagens são permitidas em pessoas assintomáticas, a partir de 72h após a última sessão de tratamento. '},
      {q:'Tratamento de queimadura com infecção generalizada', r:'<b>Tratamento de queimadura com infecção generalizada:</b> viagens são permitidas em pessoas clinicamente estáveis. '},
    ],

    options: [
      {...btnSimNaoSei, ...{goto:  'ortopedicasFim1', select: true }},
      {...btnNao, ...{goto:'oncologico1' }},
    ],
  },

  ortopedicasFim1: {
    question_type: 'evaluation',
    style: 'fimMedico',
    type: 'html',
    question:
    TITULO_RECOMENDACAO ,

    options: [
      { label: 'Continuar', variant: 'info', goto: 'oncologico1' },
      { label: 'Terminar', variant: 'dark', goto: 'FINISHED' },      
    ],
  },

 
};

const getMapaMental = () => {
  return mapaMental;
};

export default getMapaMental;
