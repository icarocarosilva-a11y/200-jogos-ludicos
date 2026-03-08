const gamesData = [
  // Desafio das 3 pistas
  {
    id: 'desafio-3-pistas',
    name: 'Desafio das 3 Pistas',
    category: 'desafio',
    description: 'Um jogador pensa em um objeto e os outros tentam adivinhar através de 3 pistas progressivas que ele fornece.',
    instructions: [
      'Um jogador escolhe um objeto (pessoa, animal, coisa) e mantém em segredo',
      'Os outros jogadores têm direito a 3 pistas para adivinhar',
      'A primeira pista deve ser vaga, a segunda mais específica e a terceira muito clara',
      'Os jogadores tentam adivinhar após cada pista',
      'Se acertarem, trocam de papel; se não acertarem em 3 pistas, o jogador revela a resposta'
    ],
    minPlayers: 3,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Palavra proibida
  {
    id: 'palavra-proibida',
    name: 'Palavra Proibida',
    category: 'desafio',
    description: 'Um jogador descreve uma palavra sem poder usar uma palavra comum relacionada a ela.',
    instructions: [
      'Escolha uma palavra comum (ex: "gato")',
      'Defina uma palavra proibida que não pode ser usada (ex: "animal")',
      'O jogador tem 1 minuto para descrever a palavra usando outras palavras',
      'Os outros tentam adivinhar',
      'Se conseguir adivinhar, todos ganham um ponto; se não, o descritor ganha'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // História em 10 segundos
  {
    id: 'historia-10-segundos',
    name: 'História em 10 Segundos',
    category: 'desafio',
    description: 'Contar uma história completa em apenas 10 segundos, com começo, meio e fim.',
    instructions: [
      'Um jogador recebe um tema ou palavra aleatória',
      'Tem exatamente 10 segundos para contar uma história completa',
      'A história deve ter começo, meio e fim',
      'Os outros jogadores votam se a história foi boa ou não',
      'Alternadamente, cada jogador conta sua história'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '15-20 minutos'
  },

  // Adivinhe o objeto pelo som
  {
    id: 'adivinhe-som',
    name: 'Adivinhe o Objeto pelo Som',
    category: 'desafio',
    description: 'Reproduzir sons de objetos cotidianos e os outros tentam adivinhar qual é o objeto.',
    instructions: [
      'Um jogador produz sons com objetos (bater na mesa, raspar, etc)',
      'Os outros jogadores tentam adivinhar qual é o objeto',
      'Pode usar objetos reais ou sons imitados',
      'Quem adivinhar primeiro ganha um ponto',
      'Revezam-se os papéis'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Objetos variados (colher, copo, papel, etc)']
  },

  // Sequência maluca de movimentos
  {
    id: 'sequencia-movimentos',
    name: 'Sequência Maluca de Movimentos',
    category: 'desafio',
    description: 'Um jogador cria uma sequência de movimentos e os outros tentam reproduzir exatamente.',
    instructions: [
      'Um jogador cria uma sequência de 5-7 movimentos (pular, girar, bater palma, etc)',
      'Demonstra a sequência completa uma vez',
      'Os outros jogadores tentam reproduzir exatamente',
      'Quem conseguir sem errar ganha um ponto',
      'Aumenta a dificuldade a cada rodada'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Código secreto com gestos
  {
    id: 'codigo-gestos',
    name: 'Código Secreto com Gestos',
    category: 'desafio',
    description: 'Criar um código de gestos para comunicar mensagens sem usar palavras.',
    instructions: [
      'Dois jogadores criam um código secreto de gestos (ex: mão na cabeça = sim)',
      'Um sai da sala enquanto os outros pensam em uma frase',
      'O jogador que saiu volta e o outro tenta comunicar a frase usando apenas gestos',
      'Os outros tentam adivinhar a frase',
      'Se acertarem, trocam de papel'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Enigma em grupo
  {
    id: 'enigma-grupo',
    name: 'Enigma em Grupo',
    category: 'desafio',
    description: 'O grupo trabalha junto para resolver um enigma ou charada complexa.',
    instructions: [
      'Apresente um enigma ou charada ao grupo',
      'Todos têm 5 minutos para pensar e discutir',
      'Podem fazer perguntas (sim/não) para o apresentador',
      'Quem descobrir a resposta levanta a mão',
      'Se acertar, ganha um ponto e pode apresentar o próximo enigma'
    ],
    minPlayers: 3,
    maxPlayers: 20,
    duration: '15-20 minutos'
  },

  // Decifre o líder
  {
    id: 'decifre-lider',
    name: 'Decifre o Líder',
    category: 'desafio',
    description: 'Descobrir quem é o líder que está criando os movimentos que todos copiam.',
    instructions: [
      'Um jogador sai da sala',
      'Os outros escolhem um líder que criará movimentos',
      'O jogador que saiu volta e fica no centro do círculo',
      'O líder começa a fazer movimentos (bater palma, pular, etc) e todos copiam',
      'O jogador do centro tenta descobrir quem é o líder em 3 tentativas',
      'Se acertar, troca de papel'
    ],
    minPlayers: 4,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // O que mudou?
  {
    id: 'o-que-mudou',
    name: 'O Que Mudou?',
    category: 'desafio',
    description: 'Observar o ambiente e identificar o que foi alterado.',
    instructions: [
      'Todos observam o ambiente por 30 segundos',
      'Um jogador sai da sala',
      'Os outros mudam algo no ambiente (mover objeto, trocar de lugar, etc)',
      'O jogador volta e tem 2 minutos para descobrir o que mudou',
      'Se acertar, ganha um ponto; se não, tenta novamente'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Palavra mais criativa
  {
    id: 'palavra-criativa',
    name: 'Palavra Mais Criativa',
    category: 'desafio',
    description: 'Criar a palavra mais criativa e original a partir de letras aleatórias.',
    instructions: [
      'Escolha 5-7 letras aleatórias',
      'Cada jogador tem 2 minutos para criar a palavra mais criativa possível',
      'Pode ser uma palavra real ou inventada (mas deve fazer sentido)',
      'Todos votam na palavra mais criativa',
      'Quem ganhar mais votos ganha um ponto'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Construir ponte com objetos
  {
    id: 'construir-ponte',
    name: 'Construir Ponte com Objetos',
    category: 'cooperacao',
    description: 'A equipe trabalha junto para construir uma ponte usando objetos disponíveis.',
    instructions: [
      'Forneça objetos variados (cadeiras, caixas, tábuas, etc)',
      'A equipe tem 10 minutos para construir uma ponte que suporte o peso de uma pessoa',
      'A ponte deve ir de um lado ao outro (distância de 2-3 metros)',
      'Todos devem trabalhar juntos e comunicar-se',
      'Teste a ponte com uma pessoa cruzando'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '15-20 minutos',
    materials: ['Cadeiras, caixas, tábuas, corda, fita']
  },

  // Transportar bola usando apenas corda
  {
    id: 'transportar-bola-corda',
    name: 'Transportar Bola Usando Apenas Corda',
    category: 'cooperacao',
    description: 'A equipe deve transportar uma bola de um ponto a outro usando apenas corda.',
    instructions: [
      'Cada membro da equipe segura uma ponta de corda',
      'A bola fica no meio da corda, suspenso',
      'A equipe deve transportar a bola de um ponto a outro sem deixar cair',
      'Não podem tocar a bola com as mãos',
      'Se a bola cair, volta ao ponto de partida'
    ],
    minPlayers: 4,
    maxPlayers: 10,
    duration: '10-15 minutos',
    materials: ['Corda (5-6 metros)', 'Bola']
  },

  // Torre impossível
  {
    id: 'torre-impossivel',
    name: 'Torre Impossível',
    category: 'cooperacao',
    description: 'Construir uma torre com objetos instáveis enquanto a equipe trabalha junto.',
    instructions: [
      'Forneça objetos instáveis (copos, pratos, livros, etc)',
      'A equipe tem 5 minutos para construir a torre mais alta possível',
      'Todos devem contribuir e comunicar-se',
      'A torre não pode ser tocada após construída (teste de estabilidade)',
      'Quem construir a torre mais alta sem cair ganha'
    ],
    minPlayers: 2,
    maxPlayers: 8,
    duration: '10-15 minutos',
    materials: ['Copos, pratos, livros, caixas']
  },

  // Travessia com poucas ilhas
  {
    id: 'travessia-ilhas',
    name: 'Travessia com Poucas Ilhas',
    category: 'cooperacao',
    description: 'A equipe deve atravessar um espaço usando apenas poucas "ilhas" (papéis ou tapetes).',
    instructions: [
      'Coloque papéis ou tapetes no chão (ilhas) com espaço entre eles',
      'Deve haver menos ilhas que pessoas na equipe',
      'A equipe deve atravessar de um lado ao outro usando apenas as ilhas',
      'Não podem tocar o chão (que é "lava")',
      'Todos devem atravessar juntos'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '10-15 minutos',
    materials: ['Papéis ou tapetes']
  },

  // Carregar colega sem usar braços
  {
    id: 'carregar-colega-sem-bracos',
    name: 'Carregar Colega Sem Usar Braços',
    category: 'cooperacao',
    description: 'Dois ou mais membros da equipe devem carregar um colega sem usar os braços.',
    instructions: [
      'Um membro da equipe senta-se em uma cadeira',
      'Os outros devem carregar a cadeira (com a pessoa) de um ponto a outro',
      'Não podem usar os braços, apenas as mãos para segurar a cadeira',
      'Devem trabalhar em sincronismo',
      'Se a cadeira cair, volta ao ponto de partida'
    ],
    minPlayers: 3,
    maxPlayers: 8,
    duration: '10-15 minutos',
    materials: ['Cadeira']
  },

  // Construção coletiva de máquina humana
  {
    id: 'maquina-humana',
    name: 'Construção Coletiva de Máquina Humana',
    category: 'cooperacao',
    description: 'A equipe cria uma "máquina" com corpos humanos que realiza uma ação.',
    instructions: [
      'A equipe imagina uma máquina (ex: máquina de fazer pão)',
      'Cada membro representa uma parte da máquina',
      'Cada parte faz um movimento repetitivo',
      'Todos os movimentos devem estar sincronizados',
      'Apresentam a máquina para os outros adivinharem o que é'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '10-15 minutos'
  },

  // Equilibrar bastão coletivo
  {
    id: 'equilibrar-bastao-coletivo',
    name: 'Equilibrar Bastão Coletivo',
    category: 'cooperacao',
    description: 'Todos os membros da equipe devem manter um bastão equilibrado com um dedo cada.',
    instructions: [
      'Todos colocam um dedo sob um bastão horizontal',
      'O bastão não pode tocar o chão',
      'Devem trabalhar juntos para manter o equilíbrio',
      'Se o bastão cair, recomeçam',
      'Objetivo: manter o bastão no ar pelo máximo de tempo'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '5-10 minutos',
    materials: ['Bastão ou tubo']
  },

  // Passar objeto usando apenas cotovelos
  {
    id: 'passar-cotovelos',
    name: 'Passar Objeto Usando Apenas Cotovelos',
    category: 'cooperacao',
    description: 'A equipe passa um objeto de um lado a outro usando apenas os cotovelos.',
    instructions: [
      'Formem uma fila de mãos dadas',
      'Um objeto é colocado no cotovelo do primeiro jogador',
      'Devem passar o objeto de cotovelo em cotovelo sem soltar as mãos',
      'Se o objeto cair, volta ao início',
      'Objetivo: passar o objeto até o final da fila'
    ],
    minPlayers: 4,
    maxPlayers: 12,
    duration: '10-15 minutos',
    materials: ['Objeto (bola pequena, garrafa, etc)']
  },

  // Mover objeto gigante juntos
  {
    id: 'mover-objeto-gigante',
    name: 'Mover Objeto Gigante Juntos',
    category: 'cooperacao',
    description: 'A equipe deve mover um objeto grande e pesado de um ponto a outro.',
    instructions: [
      'Escolha um objeto grande (caixa grande, pneu, etc)',
      'A equipe deve transportá-lo de um ponto a outro',
      'Todos devem contribuir para mover o objeto',
      'Devem comunicar-se e coordenar os movimentos',
      'Objetivo: mover o objeto sem deixar cair'
    ],
    minPlayers: 4,
    maxPlayers: 10,
    duration: '10-15 minutos',
    materials: ['Objeto grande (caixa, pneu, etc)']
  },

  // Labirinto humano
  {
    id: 'labirinto-humano',
    name: 'Labirinto Humano',
    category: 'cooperacao',
    description: 'A equipe forma um labirinto com seus corpos e outro jogador tenta atravessá-lo.',
    instructions: [
      'A maioria da equipe forma um labirinto com seus corpos (de pé, formando caminhos)',
      'Um jogador é vendado e deve atravessar o labirinto',
      'Os outros guiam verbalmente (esquerda, direita, frente, etc)',
      'O objetivo é chegar ao final do labirinto sem bater em ninguém',
      'Revezam-se os papéis'
    ],
    minPlayers: 4,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Venda para os olhos']
  },

  // Roubar território
  {
    id: 'roubar-territorio',
    name: 'Roubar Território',
    category: 'estrategia',
    description: 'Duas equipes competem para conquistar o máximo de território no espaço.',
    instructions: [
      'Divida o espaço em quadrados (com fita)',
      'Divida os jogadores em duas equipes',
      'Cada equipe marca seus territórios (com cores diferentes)',
      'Os jogadores podem conquistar territórios da outra equipe tocando-os',
      'Quem conquistar mais territórios em 10 minutos vence'
    ],
    minPlayers: 4,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Fita, papel ou objetos para marcar territórios']
  },

  // Defesa do castelo
  {
    id: 'defesa-castelo',
    name: 'Defesa do Castelo',
    category: 'estrategia',
    description: 'Uma equipe defende um "castelo" enquanto a outra tenta invadi-lo.',
    instructions: [
      'Marque um castelo (círculo ou quadrado) no centro',
      'Uma equipe fica dentro defendendo o castelo',
      'A outra equipe tenta invadir tocando alguém dentro',
      'Se conseguirem tocar alguém, trocam de papel',
      'Objetivo: defender o castelo pelo máximo de tempo'
    ],
    minPlayers: 4,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Fita para marcar o castelo']
  },

  // Roubo de bandeira com regras diferentes
  {
    id: 'roubo-bandeira-regras',
    name: 'Roubo de Bandeira com Regras Diferentes',
    category: 'estrategia',
    description: 'Variação do jogo clássico de roubo de bandeira com regras criativas.',
    instructions: [
      'Divida o espaço em dois territórios',
      'Cada equipe coloca uma bandeira em seu território',
      'Objetivo: roubar a bandeira da outra equipe',
      'Regra especial: jogadores só podem se mover de costas ou em zigue-zague',
      'Quem roubar a bandeira e levar ao seu território vence'
    ],
    minPlayers: 4,
    maxPlayers: 20,
    duration: '15-20 minutos',
    materials: ['Dois objetos para representar bandeiras', 'Fita']
  },

  // Proteja o objeto secreto
  {
    id: 'proteja-objeto-secreto',
    name: 'Proteja o Objeto Secreto',
    category: 'estrategia',
    description: 'Uma equipe protege um objeto secreto enquanto a outra tenta descobrir qual é.',
    instructions: [
      'Uma equipe escolhe um objeto secreto e o esconde entre vários objetos',
      'A outra equipe tem 10 minutos para descobrir qual é o objeto secreto',
      'Podem fazer perguntas (sim/não) para descobrir',
      'Se descobrirem, ganham um ponto',
      'Revezam-se os papéis'
    ],
    minPlayers: 4,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Vários objetos']
  },

  // Missão de espionagem
  {
    id: 'missao-espionagem',
    name: 'Missão de Espionagem',
    category: 'estrategia',
    description: 'Um jogador é um espião e deve descobrir informações secretas da equipe.',
    instructions: [
      'Um jogador sai da sala',
      'Os outros escolhem uma categoria ou palavra secreta',
      'O espião volta e tem 5 minutos para descobrir a palavra',
      'Pode fazer perguntas (sim/não) para descobrir',
      'Se descobrir, ganha um ponto; se não, a equipe ganha'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Esconder pistas pela sala
  {
    id: 'esconder-pistas',
    name: 'Esconder Pistas Pela Sala',
    category: 'estrategia',
    description: 'Uma equipe esconde pistas pela sala que levam a um tesouro ou objetivo.',
    instructions: [
      'Uma equipe cria uma sequência de pistas',
      'Cada pista leva à próxima até o tesouro final',
      'A outra equipe segue as pistas em ordem',
      'Objetivo: encontrar o tesouro no menor tempo possível',
      'Revezam-se os papéis'
    ],
    minPlayers: 4,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Papel, objetos para esconder']
  },

  // Decidir líder secreto
  {
    id: 'decidir-lider-secreto',
    name: 'Decidir Líder Secreto',
    category: 'estrategia',
    description: 'A equipe deve escolher um líder secreto e coordenar ações sem revelar quem é.',
    instructions: [
      'A equipe escolhe um líder secreto (sem os outros saberem)',
      'O líder começa a fazer movimentos e todos copiam',
      'A outra equipe tenta descobrir quem é o líder',
      'Se descobrirem, ganham um ponto',
      'Se não descobrirem em 2 minutos, a equipe do líder ganha'
    ],
    minPlayers: 4,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Troca de recursos entre equipes
  {
    id: 'troca-recursos',
    name: 'Troca de Recursos Entre Equipes',
    category: 'estrategia',
    description: 'Duas equipes negociam e trocam recursos para alcançar objetivos.',
    instructions: [
      'Cada equipe recebe um conjunto de recursos (objetos)',
      'Cada equipe tem um objetivo que requer certos recursos',
      'Devem negociar e trocar recursos com a outra equipe',
      'Primeira equipe a conseguir todos os recursos para seu objetivo vence',
      'Objetivo: ensinar negociação e estratégia'
    ],
    minPlayers: 4,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Objetos variados para representar recursos']
  },

  // Corrida de estratégia
  {
    id: 'corrida-estrategia',
    name: 'Corrida de Estratégia',
    category: 'estrategia',
    description: 'Uma corrida onde a estratégia é mais importante que a velocidade.',
    instructions: [
      'Marque um percurso com vários pontos de parada',
      'Em cada ponto, há um desafio ou enigma para resolver',
      'A equipe deve resolver o desafio antes de continuar',
      'Primeira equipe a chegar ao final vence',
      'Objetivo: combinar velocidade com raciocínio'
    ],
    minPlayers: 4,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Cones, fita, papel com desafios']
  },

  // Dominó humano estratégico
  {
    id: 'domino-humano-estrategico',
    name: 'Dominó Humano Estratégico',
    category: 'estrategia',
    description: 'Jogadores formam uma sequência e devem cair estrategicamente para vencer.',
    instructions: [
      'Jogadores ficam em pé, um ao lado do outro, em uma fila',
      'O primeiro jogador cai para frente, derrubando o segundo',
      'O segundo derruba o terceiro, e assim por diante',
      'Objetivo: manter a sequência sem quebrar',
      'Variação: adicione obstáculos ou mudanças de direção'
    ],
    minPlayers: 5,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Inventar uma criatura
  {
    id: 'inventar-criatura',
    name: 'Inventar uma Criatura',
    category: 'criativo',
    description: 'A equipe inventa uma criatura imaginária com características únicas.',
    instructions: [
      'A equipe tem 5 minutos para inventar uma criatura',
      'Devem descrever: aparência, sons, movimentos, habitat',
      'Cada membro da equipe representa uma parte da criatura',
      'Apresentam a criatura para os outros adivinharem o que é',
      'Votam na criatura mais criativa'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '15-20 minutos'
  },

  // Criar um esporte novo
  {
    id: 'criar-esporte-novo',
    name: 'Criar um Esporte Novo',
    category: 'criativo',
    description: 'A equipe inventa um esporte completamente novo com regras próprias.',
    instructions: [
      'A equipe tem 10 minutos para inventar um esporte',
      'Devem definir: objetivo, regras, pontuação, equipamento',
      'Podem usar objetos disponíveis',
      'Demonstram o esporte para os outros',
      'Votam no esporte mais criativo e divertido'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '20-30 minutos',
    materials: ['Objetos variados']
  },

  // Construir cidade com materiais
  {
    id: 'construir-cidade',
    name: 'Construir Cidade com Materiais',
    category: 'criativo',
    description: 'A equipe constrói uma cidade imaginária usando materiais disponíveis.',
    instructions: [
      'Forneça materiais variados (caixas, papéis, objetos)',
      'A equipe tem 15 minutos para construir uma cidade',
      'Devem incluir: casas, ruas, parques, monumentos',
      'Cada membro contribui com uma parte',
      'Apresentam a cidade e explicam suas características'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '20-30 minutos',
    materials: ['Caixas, papéis, objetos variados']
  },

  // Criar máquina imaginária
  {
    id: 'criar-maquina-imaginaria',
    name: 'Criar Máquina Imaginária',
    category: 'criativo',
    description: 'A equipe cria uma máquina imaginária com sons e movimentos.',
    instructions: [
      'A equipe imagina uma máquina maluca (ex: máquina de fazer nuvens)',
      'Cada membro faz um som e movimento diferente',
      'Os sons e movimentos devem estar sincronizados',
      'Apresentam a máquina para os outros adivinharem',
      'Votam na máquina mais criativa'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '10-15 minutos'
  },

  // Desafio do objeto inútil
  {
    id: 'desafio-objeto-inutil',
    name: 'Desafio do Objeto Inútil',
    category: 'criativo',
    description: 'Transformar um objeto inútil em algo útil e criativo.',
    instructions: [
      'Escolha um objeto considerado inútil (ex: caixa velha)',
      'A equipe tem 10 minutos para transformá-lo em algo útil',
      'Devem apresentar a transformação e explicar o uso',
      'Votam na transformação mais criativa',
      'Objetivo: estimular criatividade e pensamento fora da caixa'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '15-20 minutos',
    materials: ['Objetos variados']
  },

  // Desenho coletivo sem falar
  {
    id: 'desenho-coletivo-silencio',
    name: 'Desenho Coletivo Sem Falar',
    category: 'criativo',
    description: 'A equipe desenha juntos sem se comunicar verbalmente.',
    instructions: [
      'Todos recebem papel e caneta',
      'Um tema é sorteado (ex: "floresta")',
      'Cada pessoa desenha uma parte do tema',
      'Não podem falar, apenas desenhar',
      'Ao final, juntam todos os desenhos e veem o resultado'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '10-15 minutos',
    materials: ['Papel, canetas']
  },

  // Transformar objeto em outra coisa
  {
    id: 'transformar-objeto',
    name: 'Transformar Objeto em Outra Coisa',
    category: 'criativo',
    description: 'Usar um objeto comum de forma criativa, transformando seu uso.',
    instructions: [
      'Escolha um objeto comum (ex: colher)',
      'Cada jogador tem 1 minuto para usar o objeto de forma criativa',
      'Devem demonstrar o novo uso (ex: colher como remo)',
      'Votam na transformação mais criativa',
      'Objetivo: estimular pensamento criativo'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Objetos variados']
  },

  // História visual
  {
    id: 'historia-visual',
    name: 'História Visual',
    category: 'criativo',
    description: 'Contar uma história apenas com imagens, desenhos ou gestos.',
    instructions: [
      'Um jogador cria uma história usando apenas desenhos ou gestos',
      'Não pode falar ou escrever palavras',
      'Os outros tentam adivinhar a história',
      'Se acertarem, ganham um ponto',
      'Revezam-se os papéis'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Papel, canetas (opcional)']
  },

  // Desafio da propaganda
  {
    id: 'desafio-propaganda',
    name: 'Desafio da Propaganda',
    category: 'criativo',
    description: 'Criar uma propaganda criativa para um produto imaginário.',
    instructions: [
      'A equipe inventa um produto imaginário',
      'Tem 10 minutos para criar uma propaganda',
      'Podem usar dramatização, música, dança',
      'Apresentam a propaganda para os outros',
      'Votam na propaganda mais criativa e engraçada'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '15-20 minutos'
  },

  // Criar linguagem secreta
  {
    id: 'criar-linguagem-secreta',
    name: 'Criar Linguagem Secreta',
    category: 'criativo',
    description: 'A equipe cria uma linguagem secreta e a ensina aos outros.',
    instructions: [
      'A equipe inventa uma linguagem secreta (sons, gestos, palavras)',
      'Tem 10 minutos para criar e ensinar',
      'Os outros tentam aprender e usar a linguagem',
      'Objetivo: comunicar-se usando apenas a linguagem secreta',
      'Votam na linguagem mais criativa'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '15-20 minutos'
  },

  // Corrida de equilíbrio com livro
  {
    id: 'corrida-equilibrio-livro',
    name: 'Corrida de Equilíbrio com Livro',
    category: 'motor',
    description: 'Correr de um ponto a outro mantendo um livro equilibrado na cabeça.',
    instructions: [
      'Coloque um livro na cabeça',
      'Corra de um ponto a outro sem deixar o livro cair',
      'Se o livro cair, volta ao ponto de partida',
      'Primeira pessoa a chegar ao final sem deixar cair vence',
      'Variação: aumentar a distância ou adicionar obstáculos'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Livro ou objeto plano']
  },

  // Caminho invisível
  {
    id: 'caminho-invisivel',
    name: 'Caminho Invisível',
    category: 'motor',
    description: 'Caminhar em linha reta imaginária sem sair do caminho.',
    instructions: [
      'Imagine uma linha reta no chão (sem marcar)',
      'Caminhe em linha reta seguindo a linha invisível',
      'Outros jogadores observam se você sai da linha',
      'Se sair, volta ao início',
      'Objetivo: caminhar em linha reta perfeita'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Salto coordenado em grupo
  {
    id: 'salto-coordenado-grupo',
    name: 'Salto Coordenado em Grupo',
    category: 'motor',
    description: 'O grupo salta junto em perfeita sincronização.',
    instructions: [
      'Todos ficam em círculo de mãos dadas',
      'Um jogador começa a contar: 1, 2, 3, salta!',
      'Todos saltam juntos ao mesmo tempo',
      'Objetivo: manter a sincronização por 10 saltos',
      'Variação: aumentar a velocidade ou adicionar movimentos'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Desafio das posições estranhas
  {
    id: 'desafio-posicoes-estranhas',
    name: 'Desafio das Posições Estranhas',
    category: 'motor',
    description: 'Manter posições corporais estranhas e desafiadoras.',
    instructions: [
      'Um jogador propõe uma posição estranha (ex: em pé em um pé)',
      'Todos tentam manter a posição',
      'Quem conseguir manter por mais tempo vence',
      'Aumentar a dificuldade a cada rodada',
      'Objetivo: testar equilíbrio e flexibilidade'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Percurso vendado com guia
  {
    id: 'percurso-vendado-guia',
    name: 'Percurso Vendado com Guia',
    category: 'motor',
    description: 'Um jogador vendado segue instruções verbais de um guia.',
    instructions: [
      'Um jogador é vendado',
      'Outro jogador é o guia e dá instruções verbais',
      'O vendado deve seguir o percurso sem tocar em nada',
      'Se tocar em algo, volta ao início',
      'Objetivo: confiar no guia e seguir instruções'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Venda para os olhos', 'Obstáculos (cones, cadeiras)']
  },

  // Corrida em câmera lenta
  {
    id: 'corrida-camera-lenta',
    name: 'Corrida em Câmera Lenta',
    category: 'motor',
    description: 'Correr de um ponto a outro em movimento muito lento.',
    instructions: [
      'Todos devem correr de um ponto a outro',
      'Mas em movimento muito lento (câmera lenta)',
      'Não podem parar, apenas se mover lentamente',
      'Quem chegar primeiro (mantendo a lentidão) vence',
      'Objetivo: testar controle motor e concentração'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Desafio de movimentos sincronizados
  {
    id: 'desafio-movimentos-sincronizados',
    name: 'Desafio de Movimentos Sincronizados',
    category: 'motor',
    description: 'Dois ou mais jogadores executam movimentos sincronizados.',
    instructions: [
      'Dois jogadores ficam um de frente para o outro',
      'Um é o espelho e copia os movimentos do outro',
      'Devem estar perfeitamente sincronizados',
      'Aumentar a velocidade e complexidade dos movimentos',
      'Objetivo: testar coordenação e sincronização'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Caminhada do robô
  {
    id: 'caminhada-robo',
    name: 'Caminhada do Robô',
    category: 'motor',
    description: 'Caminhar como um robô com movimentos mecânicos e rígidos.',
    instructions: [
      'Caminhe como um robô (movimentos rígidos e mecânicos)',
      'Braços e pernas devem se mover de forma sincronizada',
      'Faça sons de robô enquanto caminha',
      'Caminhe de um ponto a outro mantendo o personagem',
      'Objetivo: testar controle motor e criatividade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Corrida de obstáculos criativa
  {
    id: 'corrida-obstaculos-criativa',
    name: 'Corrida de Obstáculos Criativa',
    category: 'motor',
    description: 'Correr por um percurso com obstáculos de forma criativa.',
    instructions: [
      'Marque um percurso com obstáculos (cones, cadeiras, etc)',
      'Cada jogador deve passar pelos obstáculos de forma criativa',
      'Pode pular, rastejar, contorcer, etc',
      'Quem completar o percurso mais rápido vence',
      'Objetivo: combinar velocidade com criatividade'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Cones, cadeiras, corda']
  },

  // Caminhar com três apoios
  {
    id: 'caminhar-tres-apoios',
    name: 'Caminhar com Três Apoios',
    category: 'motor',
    description: 'Caminhar usando apenas três pontos de apoio (mãos e um pé).',
    instructions: [
      'Coloque as duas mãos e um pé no chão',
      'Caminhe para frente usando apenas esses três apoios',
      'Mova o outro pé para frente',
      'Continue alternando os pés',
      'Objetivo: chegar ao final do percurso'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Quem sou eu?
  {
    id: 'quem-sou-eu',
    name: 'Quem Sou Eu?',
    category: 'social',
    description: 'Um personagem é colado nas costas e você deve adivinhar quem é.',
    instructions: [
      'Cole o nome de um personagem nas costas de cada jogador',
      'Cada jogador deve adivinhar quem é fazendo perguntas (sim/não)',
      'Os outros respondem as perguntas',
      'Quem adivinhar primeiro vence',
      'Objetivo: conhecer personagens famosos e fazer perguntas estratégicas'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Papel, caneta, fita adesiva']
  },

  // Encontrar alguém com algo em comum
  {
    id: 'encontrar-algo-comum',
    name: 'Encontrar Alguém com Algo em Comum',
    category: 'social',
    description: 'Encontrar outros jogadores que compartilham características em comum.',
    instructions: [
      'Cada jogador recebe uma lista de características (cor favorita, hobby, etc)',
      'Devem encontrar outros jogadores que compartilham as mesmas características',
      'Formam grupos com pessoas que têm algo em comum',
      'Objetivo: conhecer melhor os outros jogadores',
      'Variação: fazer perguntas para descobrir características'
    ],
    minPlayers: 4,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Papel com características']
  },

  // Troca rápida de histórias
  {
    id: 'troca-historias-rapida',
    name: 'Troca Rápida de Histórias',
    category: 'social',
    description: 'Trocar histórias pessoais rapidamente em duplas.',
    instructions: [
      'Duplas se formam',
      'Um jogador conta uma história pessoal em 2 minutos',
      'O outro escuta atentamente',
      'Trocam de papel',
      'Depois, formam novas duplas e repetem',
      'Objetivo: conhecer melhor os outros e compartilhar experiências'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '15-20 minutos'
  },

  // Desafio do elogio
  {
    id: 'desafio-elogio',
    name: 'Desafio do Elogio',
    category: 'social',
    description: 'Cada jogador deve dar um elogio sincero a outro jogador.',
    instructions: [
      'Formam um círculo',
      'Um jogador é escolhido',
      'Todos os outros devem dar um elogio sincero a essa pessoa',
      'Depois, escolhem outro jogador',
      'Objetivo: fortalecer autoestima e criar ambiente positivo'
    ],
    minPlayers: 3,
    maxPlayers: 20,
    duration: '15-20 minutos'
  },

  // Descubra o líder
  {
    id: 'descubra-lider',
    name: 'Descubra o Líder',
    category: 'social',
    description: 'Descobrir quem é o líder secreto que todos estão copiando.',
    instructions: [
      'Um jogador sai da sala',
      'Os outros escolhem um líder secreto',
      'O líder começa a fazer movimentos e todos copiam',
      'O jogador que saiu volta e tenta descobrir quem é o líder',
      'Se acertar em 3 tentativas, ganha um ponto'
    ],
    minPlayers: 4,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Amigo secreto de ações
  {
    id: 'amigo-secreto-acoes',
    name: 'Amigo Secreto de Ações',
    category: 'social',
    description: 'Fazer ações secretas para um colega e ele tenta descobrir quem é.',
    instructions: [
      'Cada jogador recebe o nome de outro jogador em segredo',
      'Durante o dia, devem fazer ações secretas para essa pessoa',
      'Podem deixar bilhetes, fazer favores, dar elogios',
      'Ao final, cada pessoa tenta adivinhar quem é seu amigo secreto',
      'Objetivo: fortalecer relações e criar ambiente afetuoso'
    ],
    minPlayers: 3,
    maxPlayers: 20,
    duration: '30 minutos ou mais'
  },

  // Corrente de ajuda
  {
    id: 'corrente-ajuda',
    name: 'Corrente de Ajuda',
    category: 'social',
    description: 'Formar uma corrente de pessoas ajudando uma à outra.',
    instructions: [
      'Todos ficam em pé, de mãos dadas',
      'Um jogador tem um desafio (ex: pular com um pé)',
      'Os outros ajudam segurando a mão e dando apoio',
      'Objetivo: completar o desafio com ajuda dos outros',
      'Revezam-se os papéis'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Construir regra nova juntos
  {
    id: 'construir-regra-nova',
    name: 'Construir Regra Nova Juntos',
    category: 'social',
    description: 'O grupo cria uma nova regra para um jogo existente.',
    instructions: [
      'Escolha um jogo simples (ex: pega-pega)',
      'O grupo discute e cria uma nova regra',
      'Todos devem concordar com a regra',
      'Jogam com a nova regra',
      'Objetivo: trabalhar em equipe e tomar decisões coletivas'
    ],
    minPlayers: 3,
    maxPlayers: 20,
    duration: '15-20 minutos'
  },

  // Debate relâmpago
  {
    id: 'debate-relampago',
    name: 'Debate Relâmpago',
    category: 'social',
    description: 'Debate rápido sobre um tema com argumentos criados na hora.',
    instructions: [
      'Escolha um tema (ex: "chocolate é melhor que sorvete")',
      'Divida em dois times (a favor e contra)',
      'Cada time tem 1 minuto para apresentar argumentos',
      'Revezam-se os argumentos',
      'Votam no time com melhores argumentos'
    ],
    minPlayers: 4,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Missão de gentileza
  {
    id: 'missao-gentileza',
    name: 'Missão de Gentileza',
    category: 'social',
    description: 'Cada jogador recebe uma missão de gentileza para completar.',
    instructions: [
      'Cada jogador recebe uma missão (ex: fazer alguém rir)',
      'Tem 10 minutos para completar a missão',
      'Deve fazer algo gentil ou divertido',
      'Ao final, compartilham o que fizeram',
      'Objetivo: promover gentileza e diversão'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '15-20 minutos'
  },

  // Detetive da sala
  {
    id: 'detetive-sala',
    name: 'Detetive da Sala',
    category: 'investigacao',
    description: 'Um detetive investiga a sala para descobrir o que mudou.',
    instructions: [
      'Um jogador sai da sala',
      'Os outros mudam algo no ambiente (mover objeto, trocar de lugar)',
      'O detetive volta e tem 3 minutos para descobrir o que mudou',
      'Se acertar, ganha um ponto',
      'Revezam-se os papéis'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Objeto desaparecido
  {
    id: 'objeto-desaparecido',
    name: 'Objeto Desaparecido',
    category: 'investigacao',
    description: 'Um objeto desaparece e o detetive deve descobrir quem pegou.',
    instructions: [
      'Um objeto é colocado no centro da sala',
      'Todos observam por 30 segundos',
      'Um jogador sai da sala',
      'O objeto desaparece',
      'O jogador volta e tenta descobrir quem pegou o objeto',
      'Pode fazer perguntas (sim/não)'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Objeto qualquer']
  },

  // Caça a pistas
  {
    id: 'caca-pistas',
    name: 'Caça a Pistas',
    category: 'investigacao',
    description: 'Procurar pistas escondidas pela sala para resolver um mistério.',
    instructions: [
      'Um jogador cria um mistério e esconde pistas',
      'Os outros procuram as pistas',
      'Cada pista leva à próxima',
      'Objetivo: resolver o mistério seguindo as pistas',
      'Revezam-se os papéis'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Papel, objetos para esconder']
  },

  // Mistério do envelope
  {
    id: 'mistério-envelope',
    name: 'Mistério do Envelope',
    category: 'investigacao',
    description: 'Resolver um mistério usando pistas dentro de um envelope.',
    instructions: [
      'Um envelope contém pistas sobre um mistério',
      'Os jogadores abrem o envelope e leem as pistas',
      'Devem resolver o mistério em 10 minutos',
      'Se resolverem, ganham um ponto',
      'Objetivo: trabalhar em equipe para resolver mistérios'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Envelope com pistas']
  },

  // Quem mentiu?
  {
    id: 'quem-mentiu',
    name: 'Quem Mentiu?',
    category: 'investigacao',
    description: 'Descobrir quem está mentindo sobre uma história.',
    instructions: [
      'Um tema é escolhido (ex: "meu fim de semana")',
      'Cada jogador conta uma história sobre o tema',
      'Um jogador está mentindo',
      'Os outros tentam descobrir quem mentiu',
      'Votam em quem acham que mentiu'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Código escondido
  {
    id: 'codigo-escondido',
    name: 'Código Escondido',
    category: 'investigacao',
    description: 'Descobrir um código escondido através de pistas.',
    instructions: [
      'Um código é criado (ex: sequência de números)',
      'Pistas são espalhadas pela sala',
      'Os jogadores procuram as pistas',
      'Devem usar as pistas para descobrir o código',
      'Se descobrirem, ganham um ponto'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Papel com pistas']
  },

  // Rastro secreto
  {
    id: 'rastro-secreto',
    name: 'Rastro Secreto',
    category: 'investigacao',
    description: 'Seguir um rastro secreto deixado por alguém.',
    instructions: [
      'Um jogador deixa um rastro pela sala (objetos, marcas)',
      'Os outros seguem o rastro',
      'O rastro leva a um tesouro ou objetivo',
      'Objetivo: seguir o rastro sem se perder',
      'Revezam-se os papéis'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Objetos para marcar o rastro']
  },

  // Investigação em equipe
  {
    id: 'investigacao-equipe',
    name: 'Investigação em Equipe',
    category: 'investigacao',
    description: 'A equipe trabalha junto para resolver um caso de investigação.',
    instructions: [
      'Um caso de investigação é apresentado',
      'A equipe tem 15 minutos para resolver',
      'Devem analisar pistas e fazer deduções',
      'Apresentam a solução',
      'Votam se a solução é correta'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '20-30 minutos',
    materials: ['Caso de investigação com pistas']
  },

  // Quebra-cabeça humano
  {
    id: 'quebra-cabeca-humano',
    name: 'Quebra-Cabeça Humano',
    category: 'investigacao',
    description: 'Resolver um quebra-cabeça onde cada pessoa é uma peça.',
    instructions: [
      'Cada jogador recebe uma pista ou informação',
      'Devem compartilhar as informações para resolver o quebra-cabeça',
      'Objetivo: juntar todas as informações para resolver',
      'Se resolverem, ganham um ponto',
      'Objetivo: trabalhar em equipe e comunicação'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '15-20 minutos'
  },

  // Mistério das pistas falsas
  {
    id: 'mistério-pistas-falsas',
    name: 'Mistério das Pistas Falsas',
    category: 'investigacao',
    description: 'Resolver um mistério onde algumas pistas são falsas.',
    instructions: [
      'Um mistério é apresentado com várias pistas',
      'Algumas pistas são verdadeiras, outras falsas',
      'Os jogadores devem identificar as pistas falsas',
      'Devem resolver o mistério usando apenas pistas verdadeiras',
      'Se resolverem, ganham um ponto'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '15-20 minutos',
    materials: ['Pistas verdadeiras e falsas']
  },

  // Equilibrar três objetos ao mesmo tempo
  {
    id: 'equilibrar-tres-objetos',
    name: 'Equilibrar Três Objetos ao Mesmo Tempo',
    category: 'desafio',
    description: 'Manter três objetos equilibrados simultaneamente.',
    instructions: [
      'Escolha três objetos diferentes (colher, livro, bola)',
      'Tente equilibrar todos os três ao mesmo tempo',
      'Pode usar diferentes partes do corpo',
      'Objetivo: manter todos os três equilibrados por 10 segundos',
      'Quem conseguir vence'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Três objetos diferentes']
  },

  // Passar bola sem usar mãos
  {
    id: 'passar-bola-sem-maos',
    name: 'Passar Bola Sem Usar Mãos',
    category: 'desafio',
    description: 'Passar uma bola de um jogador para outro sem usar as mãos.',
    instructions: [
      'Formem uma fila',
      'Uma bola é colocada entre o queixo e o ombro do primeiro jogador',
      'Devem passar a bola para o próximo usando apenas o corpo',
      'Não podem usar as mãos',
      'Se a bola cair, volta ao início'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Bola']
  },

  // Construir ponte humana
  {
    id: 'construir-ponte-humana',
    name: 'Construir Ponte Humana',
    category: 'desafio',
    description: 'Os jogadores formam uma ponte com seus corpos.',
    instructions: [
      'Os jogadores deitam no chão formando uma ponte',
      'Outro jogador caminha sobre a ponte',
      'Devem manter a ponte estável',
      'Objetivo: o jogador chegar ao outro lado sem cair',
      'Revezam-se os papéis'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Desafio de silêncio absoluto
  {
    id: 'desafio-silencio-absoluto',
    name: 'Desafio de Silêncio Absoluto',
    category: 'desafio',
    description: 'Manter silêncio absoluto enquanto realiza tarefas.',
    instructions: [
      'Todos devem manter silêncio absoluto',
      'Devem realizar tarefas (ex: montar quebra-cabeça, construir torre)',
      'Podem se comunicar apenas com gestos',
      'Objetivo: completar a tarefa em silêncio',
      'Quem falar sai do desafio'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Tarefa (quebra-cabeça, copos, etc)']
  },

  // Missão impossível
  {
    id: 'missao-impossivel',
    name: 'Missão Impossível',
    category: 'desafio',
    description: 'Completar uma missão que parece impossível à primeira vista.',
    instructions: [
      'Uma missão aparentemente impossível é apresentada',
      'Os jogadores têm 10 minutos para completá-la',
      'Devem pensar fora da caixa e ser criativos',
      'Se conseguirem, ganham um ponto',
      'Objetivo: resolver problemas de forma criativa'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '15-20 minutos'
  },

  // Desafio dos 30 segundos
  {
    id: 'desafio-30-segundos',
    name: 'Desafio dos 30 Segundos',
    category: 'desafio',
    description: 'Completar o máximo de tarefas em apenas 30 segundos.',
    instructions: [
      'Uma lista de tarefas pequenas é apresentada',
      'Tem 30 segundos para completar o máximo de tarefas',
      'Tarefas podem ser: pular, tocar o chão, bater palma, etc',
      'Quem completar mais tarefas vence',
      'Objetivo: trabalhar rápido e eficientemente'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Torre mais alta
  {
    id: 'torre-mais-alta',
    name: 'Torre Mais Alta',
    category: 'desafio',
    description: 'Construir a torre mais alta usando objetos disponíveis.',
    instructions: [
      'Forneça objetos variados (copos, livros, caixas, etc)',
      'Tem 5 minutos para construir a torre mais alta',
      'A torre deve ser estável e não pode cair',
      'Quem construir a torre mais alta vence',
      'Objetivo: equilíbrio e criatividade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Copos, livros, caixas, objetos variados']
  },

  // Transporte sem derrubar
  {
    id: 'transporte-sem-derrubar',
    name: 'Transporte Sem Derrubar',
    category: 'desafio',
    description: 'Transportar objetos frágeis de um ponto a outro sem derrubar.',
    instructions: [
      'Coloque objetos frágeis (copos com água, ovos, etc) em uma bandeja',
      'Deve transportar a bandeja de um ponto a outro',
      'Não pode derrubar nenhum objeto',
      'Se derrubar, volta ao ponto de partida',
      'Objetivo: cuidado e precisão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Bandeja, copos com água, ovos, etc']
  },

  // Desafio da precisão
  {
    id: 'desafio-precisao',
    name: 'Desafio da Precisão',
    category: 'desafio',
    description: 'Acertar um alvo com precisão em várias tentativas.',
    instructions: [
      'Marque um alvo no chão',
      'Cada jogador tem 5 tentativas para acertar o alvo',
      'Pode usar bola, saco de feijão, etc',
      'Quem acertar mais vezes vence',
      'Objetivo: precisão e concentração'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Alvo, bola ou saco de feijão']
  },

  // Passar obstáculo sem tocar
  {
    id: 'passar-obstaculo-sem-tocar',
    name: 'Passar Obstáculo Sem Tocar',
    category: 'desafio',
    description: 'Passar por um obstáculo (corda) sem tocá-lo.',
    instructions: [
      'Uma corda é colocada entre dois pontos em altura média',
      'Deve passar por baixo ou por cima sem tocar a corda',
      'Se tocar, volta ao início',
      'Objetivo: flexibilidade e criatividade',
      'Aumentar a dificuldade baixando ou levantando a corda'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Corda, dois pontos de apoio']
  },

  // Sobrevivência na ilha
  {
    id: 'sobrevivencia-ilha',
    name: 'Sobrevivência na Ilha',
    category: 'imaginativo',
    description: 'Simular sobrevivência em uma ilha deserta.',
    instructions: [
      'A equipe é naufragada em uma ilha deserta',
      'Tem 15 minutos para planejar a sobrevivência',
      'Devem decidir: abrigo, comida, água, proteção',
      'Apresentam o plano de sobrevivência',
      'Votam no plano mais criativo e realista'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '20-30 minutos'
  },

  // Colonizar planeta imaginário
  {
    id: 'colonizar-planeta',
    name: 'Colonizar Planeta Imaginário',
    category: 'imaginativo',
    description: 'Planejar a colonização de um planeta imaginário.',
    instructions: [
      'A equipe deve colonizar um planeta imaginário',
      'Tem 15 minutos para planejar',
      'Devem decidir: estrutura social, economia, governo',
      'Apresentam o plano de colonização',
      'Votam no plano mais criativo'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '20-30 minutos'
  },

  // Construir tribo
  {
    id: 'construir-tribo',
    name: 'Construir Tribo',
    category: 'imaginativo',
    description: 'Criar uma tribo imaginária com suas próprias tradições.',
    instructions: [
      'A equipe cria uma tribo imaginária',
      'Devem definir: nome, tradições, rituais, língua',
      'Cada membro representa um papel na tribo',
      'Apresentam a tribo para os outros',
      'Votam na tribo mais criativa'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '20-30 minutos'
  },

  // Missão de exploradores
  {
    id: 'missao-exploradores',
    name: 'Missão de Exploradores',
    category: 'imaginativo',
    description: 'Simular uma missão de exploração em um lugar desconhecido.',
    instructions: [
      'A equipe é um grupo de exploradores',
      'Tem 15 minutos para explorar um "lugar desconhecido" (sala)',
      'Devem documentar descobertas (desenhar, descrever)',
      'Apresentam as descobertas',
      'Votam na exploração mais interessante'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '20-30 minutos',
    materials: ['Papel, canetas']
  },

  // Criar mapa do tesouro
  {
    id: 'criar-mapa-tesouro',
    name: 'Criar Mapa do Tesouro',
    category: 'imaginativo',
    description: 'Criar um mapa de tesouro imaginário com pistas.',
    instructions: [
      'A equipe cria um mapa de tesouro',
      'Deve incluir: locais, pistas, obstáculos',
      'Outro grupo tenta seguir o mapa',
      'Objetivo: criar um mapa criativo e desafiador',
      'Votam no mapa mais criativo'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '20-30 minutos',
    materials: ['Papel, canetas']
  },

  // Simulação de viagem
  {
    id: 'simulacao-viagem',
    name: 'Simulação de Viagem',
    category: 'imaginativo',
    description: 'Simular uma viagem para um lugar imaginário.',
    instructions: [
      'A equipe planeja uma viagem para um lugar imaginário',
      'Tem 15 minutos para planejar',
      'Devem decidir: destino, transporte, hospedagem, atividades',
      'Apresentam o plano de viagem',
      'Votam na viagem mais criativa'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '20-30 minutos'
  },

  // Criar moeda da turma
  {
    id: 'criar-moeda-turma',
    name: 'Criar Moeda da Turma',
    category: 'imaginativo',
    description: 'Criar uma moeda imaginária para a turma com seu próprio valor.',
    instructions: [
      'A turma cria uma moeda imaginária',
      'Devem definir: nome, valor, design',
      'Cada pessoa desenha a moeda',
      'Votam no design mais criativo',
      'Objetivo: trabalho em equipe e criatividade'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '15-20 minutos',
    materials: ['Papel, canetas']
  },

  // Governar uma cidade
  {
    id: 'governar-cidade',
    name: 'Governar uma Cidade',
    category: 'imaginativo',
    description: 'Simular o governo de uma cidade imaginária.',
    instructions: [
      'A equipe governa uma cidade imaginária',
      'Tem 15 minutos para planejar',
      'Devem resolver problemas (trânsito, poluição, etc)',
      'Apresentam as soluções',
      'Votam nas soluções mais criativas'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '20-30 minutos'
  },

  // Criar animal novo
  {
    id: 'criar-animal-novo',
    name: 'Criar Animal Novo',
    category: 'imaginativo',
    description: 'Inventar um animal completamente novo com características únicas.',
    instructions: [
      'A equipe inventa um animal novo',
      'Devem descrever: aparência, habitat, alimentação, comportamento',
      'Cada pessoa desenha o animal',
      'Apresentam o animal e explicam suas características',
      'Votam no animal mais criativo'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '15-20 minutos',
    materials: ['Papel, canetas']
  },

  // Inventar um festival
  {
    id: 'inventar-festival',
    name: 'Inventar um Festival',
    category: 'imaginativo',
    description: 'Inventar um festival imaginário com suas próprias tradições.',
    instructions: [
      'A equipe inventa um festival',
      'Devem definir: nome, data, atividades, comidas',
      'Cada pessoa contribui com uma ideia',
      'Apresentam o festival',
      'Votam no festival mais criativo'
    ],
    minPlayers: 2,
    maxPlayers: 10,
    duration: '15-20 minutos'
  },

  // Troca de lugar por característica
  {
    id: 'troca-lugar-caracteristica',
    name: 'Troca de Lugar por Característica',
    category: 'rapido',
    description: 'Trocar de lugar baseado em características comuns.',
    instructions: [
      'Todos sentam em círculo',
      'Um jogador fica no centro e diz uma característica (ex: "tem cabelo preto")',
      'Todos que têm essa característica devem trocar de lugar',
      'O jogador do centro tenta ocupar um lugar',
      'Quem ficar sem lugar vai para o centro'
    ],
    minPlayers: 4,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Desafio da gargalhada
  {
    id: 'desafio-gargalhada',
    name: 'Desafio da Gargalhada',
    category: 'rapido',
    description: 'Fazer a turma rir com piadas ou brincadeiras.',
    instructions: [
      'Um jogador tenta fazer a turma rir',
      'Tem 1 minuto para contar uma piada ou fazer uma brincadeira',
      'Votam se conseguiu fazer rir',
      'Quem conseguir mais risos vence',
      'Objetivo: diversão e bom humor'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Passa movimento
  {
    id: 'passa-movimento',
    name: 'Passa Movimento',
    category: 'rapido',
    description: 'Passar um movimento de pessoa para pessoa em círculo.',
    instructions: [
      'Todos ficam em círculo de mãos dadas',
      'Um movimento começa (ex: pular)',
      'Passa de pessoa para pessoa através das mãos',
      'Objetivo: passar o movimento sem quebrar a corrente',
      'Aumentar a velocidade a cada rodada'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Eco de gestos
  {
    id: 'eco-gestos',
    name: 'Eco de Gestos',
    category: 'rapido',
    description: 'Fazer um gesto e todos copiam como um eco.',
    instructions: [
      'Um jogador faz um gesto',
      'Todos copiam o gesto ao mesmo tempo',
      'Objetivo: sincronização perfeita',
      'Aumentar a complexidade dos gestos',
      'Objetivo: trabalho em equipe e sincronização'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Corrida de reação
  {
    id: 'corrida-reacao',
    name: 'Corrida de Reação',
    category: 'rapido',
    description: 'Correr quando ouve um sinal de reação rápida.',
    instructions: [
      'Todos ficam em linha',
      'Um jogador faz um sinal (grito, palma, etc)',
      'Todos correm para a linha de chegada',
      'Quem chegar primeiro vence',
      'Objetivo: tempo de reação rápido'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Palavra mais longa
  {
    id: 'palavra-mais-longa',
    name: 'Palavra Mais Longa',
    category: 'rapido',
    description: 'Criar a palavra mais longa com letras aleatórias.',
    instructions: [
      'Escolha 5-7 letras aleatórias',
      'Tem 1 minuto para criar a palavra mais longa possível',
      'Pode ser real ou inventada',
      'Quem criar a palavra mais longa vence',
      'Objetivo: criatividade e velocidade'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '5-10 minutos'
  },

  // Movimento surpresa
  {
    id: 'movimento-surpresa',
    name: 'Movimento Surpresa',
    category: 'rapido',
    description: 'Fazer um movimento surpresa que ninguém esperava.',
    instructions: [
      'Todos estão em círculo',
      'Um jogador faz um movimento surpresa (rápido e inesperado)',
      'Todos devem reagir rápido',
      'Objetivo: reação rápida e diversão',
      'Revezam-se os papéis'
    ],
    minPlayers: 3,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Quem reage primeiro
  {
    id: 'quem-reage-primeiro',
    name: 'Quem Reage Primeiro',
    category: 'rapido',
    description: 'Descobrir quem reage mais rápido a um estímulo.',
    instructions: [
      'Dois jogadores ficam de frente um para o outro',
      'Um faz um movimento rápido',
      'O outro deve reagir rápido (copiar ou responder)',
      'Quem reagir mais rápido vence',
      'Objetivo: tempo de reação rápido'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Desafio da imitação rápida
  {
    id: 'desafio-imitacao-rapida',
    name: 'Desafio da Imitação Rápida',
    category: 'rapido',
    description: 'Imitar alguém ou algo o mais rápido possível.',
    instructions: [
      'Um jogador imita uma pessoa ou animal',
      'Os outros tentam adivinhar quem ou o que é',
      'Tem 30 segundos para adivinhar',
      'Se acertarem, ganham um ponto',
      'Revezam-se os papéis'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos'
  },

  // Objeto mágico
  {
    id: 'objeto-magico',
    name: 'Objeto Mágico (Inventar Uso)',
    category: 'rapido',
    description: 'Inventar usos criativos para um objeto comum.',
    instructions: [
      'Um objeto é escolhido (ex: colher)',
      'Cada jogador tem 30 segundos para inventar um uso criativo',
      'Deve demonstrar o uso',
      'Votam no uso mais criativo',
      'Objetivo: criatividade e velocidade'
    ],
    minPlayers: 2,
    maxPlayers: 15,
    duration: '10-15 minutos',
    materials: ['Objeto qualquer']
  },

  // Pular dentro de bambolês no chão
  {
    id: 'pular-bamboles',
    name: 'Pular Dentro de Bambolês no Chão',
    category: 'circuito',
    description: 'Pular dentro de bambolês colocados no chão em sequência.',
    instructions: [
      'Coloque bambolês no chão em linha',
      'Deve pular dentro de cada bambolê em sequência',
      'Não pode pisar fora dos bambolês',
      'Se pisar fora, volta ao início',
      'Objetivo: agilidade e precisão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bambolês']
  },

  // Andar equilibrando um livro na cabeça
  {
    id: 'andar-livro-cabeca',
    name: 'Andar Equilibrando um Livro na Cabeça',
    category: 'circuito',
    description: 'Caminhar mantendo um livro equilibrado na cabeça.',
    instructions: [
      'Coloque um livro na cabeça',
      'Caminhe de um ponto a outro sem deixar cair',
      'Se cair, volta ao início',
      'Objetivo: equilíbrio e concentração',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Livro']
  },

  // Passar por baixo de uma corda
  {
    id: 'passar-baixo-corda',
    name: 'Passar por Baixo de uma Corda',
    category: 'circuito',
    description: 'Passar por baixo de uma corda sem tocá-la.',
    instructions: [
      'Uma corda é colocada entre dois pontos em altura média',
      'Deve passar por baixo sem tocar a corda',
      'Se tocar, volta ao início',
      'Objetivo: flexibilidade e criatividade',
      'Diminuir a altura da corda a cada rodada'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Corda, dois pontos de apoio']
  },

  // Saltar sobre cones
  {
    id: 'saltar-cones',
    name: 'Saltar Sobre Cones',
    category: 'circuito',
    description: 'Saltar sobre cones colocados em sequência.',
    instructions: [
      'Coloque cones no chão em linha',
      'Deve saltar sobre cada cone em sequência',
      'Não pode tocar nos cones',
      'Se tocar, volta ao início',
      'Objetivo: agilidade e precisão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Cones']
  },

  // Caminhar em zigue-zague entre objetos
  {
    id: 'caminhar-zigue-zague',
    name: 'Caminhar em Zigue-Zague Entre Objetos',
    category: 'circuito',
    description: 'Caminhar em padrão zigue-zague entre objetos.',
    instructions: [
      'Coloque objetos (cones, garrafas) em zigue-zague',
      'Caminhe em padrão zigue-zague entre os objetos',
      'Não pode tocar nos objetos',
      'Se tocar, volta ao início',
      'Objetivo: agilidade e coordenação'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Cones ou garrafas']
  },

  // Rolar no chão até o próximo ponto
  {
    id: 'rolar-chao',
    name: 'Rolar no Chão Até o Próximo Ponto',
    category: 'circuito',
    description: 'Rolar no chão de um ponto a outro.',
    instructions: [
      'Marque dois pontos no chão (distância de 5-10 metros)',
      'Role no chão de um ponto a outro',
      'Deve rolar em linha reta',
      'Objetivo: chegar ao outro lado rolando',
      'Aumentar a distância a cada rodada'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Caminhar de costas até a marca
  {
    id: 'caminhar-costas',
    name: 'Caminhar de Costas Até a Marca',
    category: 'circuito',
    description: 'Caminhar de costas até uma marca no chão.',
    instructions: [
      'Marque uma linha no chão',
      'Caminhe de costas até a linha',
      'Não pode olhar para trás',
      'Se sair da linha, volta ao início',
      'Objetivo: equilíbrio e confiança'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Pular com um pé só
  {
    id: 'pular-um-pe',
    name: 'Pular com um Pé Só',
    category: 'circuito',
    description: 'Pular em um pé só de um ponto a outro.',
    instructions: [
      'Marque dois pontos no chão',
      'Pule em um pé só de um ponto a outro',
      'Não pode colocar o outro pé no chão',
      'Se colocar, volta ao início',
      'Objetivo: equilíbrio e força'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Caminhar como caranguejo
  {
    id: 'caminhar-caranguejo',
    name: 'Caminhar Como Caranguejo',
    category: 'circuito',
    description: 'Caminhar como um caranguejo (de costas com mãos no chão).',
    instructions: [
      'Coloque as mãos no chão atrás de você',
      'Levante o corpo e caminhe como um caranguejo',
      'Caminhe de um ponto a outro',
      'Objetivo: força e coordenação',
      'Aumentar a distância a cada rodada'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Saltos laterais entre linhas
  {
    id: 'saltos-laterais-linhas',
    name: 'Saltos Laterais Entre Linhas',
    category: 'circuito',
    description: 'Fazer saltos laterais entre duas linhas.',
    instructions: [
      'Marque duas linhas paralelas no chão',
      'Faça saltos laterais entre as linhas',
      'Não pode tocar nas linhas',
      'Se tocar, volta ao início',
      'Objetivo: agilidade e precisão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Caminhar sobre fita no chão
  {
    id: 'caminhar-fita-chao',
    name: 'Caminhar Sobre Fita no Chão',
    category: 'circuito',
    description: 'Caminhar sobre uma fita colocada no chão sem sair dela.',
    instructions: [
      'Coloque uma fita no chão em linha reta',
      'Caminhe sobre a fita sem sair dela',
      'Se sair, volta ao início',
      'Objetivo: equilíbrio e concentração',
      'Aumentar a complexidade da linha (curvas, zigue-zague)'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Fita']
  },

  // Equilibrar bola na colher
  {
    id: 'equilibrar-bola-colher',
    name: 'Equilibrar Bola na Colher',
    category: 'circuito',
    description: 'Caminhar equilibrando uma bola em uma colher.',
    instructions: [
      'Coloque uma bola em uma colher',
      'Caminhe de um ponto a outro mantendo a bola equilibrada',
      'Se a bola cair, volta ao início',
      'Objetivo: equilíbrio e precisão',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Colher, bola']
  },

  // Andar com objeto na cabeça
  {
    id: 'andar-objeto-cabeca',
    name: 'Andar com Objeto na Cabeça',
    category: 'circuito',
    description: 'Caminhar mantendo um objeto na cabeça.',
    instructions: [
      'Coloque um objeto na cabeça',
      'Caminhe de um ponto a outro sem deixar cair',
      'Se cair, volta ao início',
      'Objetivo: equilíbrio e concentração',
      'Aumentar a dificuldade com objetos maiores ou mais pesados'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Objeto (copo, caixa, etc)']
  },

  // Ficar em um pé por 10 segundos
  {
    id: 'ficar-um-pe-10s',
    name: 'Ficar em um Pé por 10 Segundos',
    category: 'circuito',
    description: 'Manter o equilíbrio em um pé por 10 segundos.',
    instructions: [
      'Levante um pé do chão',
      'Mantenha o equilíbrio em um pé',
      'Objetivo: ficar em pé por 10 segundos sem cair',
      'Se cair, pode tentar novamente',
      'Aumentar a dificuldade fechando os olhos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Passar por uma "ponte" improvisada
  {
    id: 'passar-ponte-improvisada',
    name: 'Passar por uma "Ponte" Improvisada',
    category: 'circuito',
    description: 'Passar por uma ponte feita com objetos improvisados.',
    instructions: [
      'Construa uma ponte com cadeiras, tábuas, etc',
      'Caminhe sobre a ponte de um lado a outro',
      'Não pode tocar no chão',
      'Se cair, volta ao início',
      'Objetivo: equilíbrio e coragem'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Cadeiras, tábuas, caixas']
  },

  // Equilibrar bastão na mão
  {
    id: 'equilibrar-bastao-mao',
    name: 'Equilibrar Bastão na Mão',
    category: 'circuito',
    description: 'Equilibrar um bastão na palma da mão.',
    instructions: [
      'Coloque um bastão na palma da mão',
      'Tente manter o bastão equilibrado',
      'Objetivo: equilibrar por 10 segundos',
      'Se cair, pode tentar novamente',
      'Aumentar a dificuldade andando enquanto equilibra'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bastão']
  },

  // Andar sobre bancos
  {
    id: 'andar-bancos',
    name: 'Andar Sobre Bancos',
    category: 'circuito',
    description: 'Caminhar sobre bancos colocados em sequência.',
    instructions: [
      'Coloque bancos em linha',
      'Caminhe sobre os bancos de um lado a outro',
      'Não pode tocar no chão',
      'Se cair, volta ao início',
      'Objetivo: equilíbrio e coragem'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Bancos']
  },

  // Transportar copo com água
  {
    id: 'transportar-copo-agua',
    name: 'Transportar Copo com Água',
    category: 'circuito',
    description: 'Transportar um copo com água de um ponto a outro sem derramar.',
    instructions: [
      'Encha um copo com água',
      'Caminhe de um ponto a outro sem derramar',
      'Se derramar, volta ao início',
      'Objetivo: cuidado e precisão',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Copo, água']
  },

  // Equilibrar objeto no ombro
  {
    id: 'equilibrar-objeto-ombro',
    name: 'Equilibrar Objeto no Ombro',
    category: 'circuito',
    description: 'Equilibrar um objeto no ombro enquanto caminha.',
    instructions: [
      'Coloque um objeto no ombro',
      'Caminhe de um ponto a outro mantendo o objeto equilibrado',
      'Se cair, volta ao início',
      'Objetivo: equilíbrio e concentração',
      'Aumentar a dificuldade com objetos maiores'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Objeto (bola, caixa, etc)']
  },

  // Caminhar segurando bola entre os joelhos
  {
    id: 'caminhar-bola-joelhos',
    name: 'Caminhar Segurando Bola Entre os Joelhos',
    category: 'circuito',
    description: 'Caminhar com uma bola presa entre os joelhos.',
    instructions: [
      'Coloque uma bola entre os joelhos',
      'Caminhe de um ponto a outro mantendo a bola presa',
      'Se a bola cair, volta ao início',
      'Objetivo: coordenação e controle',
      'Aumentar a dificuldade aumentando a velocidade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola']
  },

  // Arremessar bola em caixa
  {
    id: 'arremessar-bola-caixa',
    name: 'Arremessar Bola em Caixa',
    category: 'circuito',
    description: 'Arremessar uma bola dentro de uma caixa.',
    instructions: [
      'Coloque uma caixa a uma distância',
      'Arremesse a bola dentro da caixa',
      'Tem 3 tentativas',
      'Se acertar, ganha um ponto',
      'Objetivo: precisão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola, caixa']
  },

  // Derrubar garrafas
  {
    id: 'derrubar-garrafas',
    name: 'Derrubar Garrafas',
    category: 'circuito',
    description: 'Derrubar garrafas com uma bola.',
    instructions: [
      'Coloque garrafas em pé a uma distância',
      'Arremesse uma bola para derrubar as garrafas',
      'Tem 3 tentativas',
      'Objetivo: derrubar o máximo de garrafas',
      'Aumentar a dificuldade aumentando a distância'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola, garrafas']
  },

  // Acertar alvo com saco de feijão
  {
    id: 'acertar-alvo-saco-feijao',
    name: 'Acertar Alvo com Saco de Feijão',
    category: 'circuito',
    description: 'Lançar um saco de feijão para acertar um alvo.',
    instructions: [
      'Marque um alvo no chão',
      'Tem 5 tentativas para acertar o alvo',
      'Quem acertar mais vezes vence',
      'Objetivo: precisão',
      'Aumentar a dificuldade aumentando a distância'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Saco de feijão, alvo']
  },

  // Chutar bola em gol pequeno
  {
    id: 'chutar-bola-gol',
    name: 'Chutar Bola em Gol Pequeno',
    category: 'circuito',
    description: 'Chutar uma bola dentro de um gol pequeno.',
    instructions: [
      'Marque um gol pequeno',
      'Tem 5 tentativas para chutar a bola dentro do gol',
      'Quem acertar mais vezes vence',
      'Objetivo: precisão e força',
      'Aumentar a dificuldade aumentando a distância'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola, gol (cones, garrafas)']
  },

  // Lançar argolas em cones
  {
    id: 'lancar-argolas-cones',
    name: 'Lançar Argolas em Cones',
    category: 'circuito',
    description: 'Lançar argolas para encaixar em cones.',
    instructions: [
      'Coloque cones a uma distância',
      'Tem 5 tentativas para lançar argolas nos cones',
      'Cada acerto = 1 ponto',
      'Objetivo: acertar o máximo de cones',
      'Aumentar a dificuldade aumentando a distância'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Argolas, cones']
  },

  // Jogar bola dentro de bambolê
  {
    id: 'jogar-bola-bambole',
    name: 'Jogar Bola Dentro de Bambolê',
    category: 'circuito',
    description: 'Lançar uma bola dentro de um bambolê suspenso.',
    instructions: [
      'Suspenda um bambolê a uma altura',
      'Tem 5 tentativas para lançar a bola dentro do bambolê',
      'Cada acerto = 1 ponto',
      'Objetivo: acertar o máximo de vezes',
      'Aumentar a dificuldade aumentando a altura'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola, bambolê']
  },

  // Arremesso de costas
  {
    id: 'arremesso-costas',
    name: 'Arremesso de Costas',
    category: 'circuito',
    description: 'Arremessar uma bola para trás (de costas) em um alvo.',
    instructions: [
      'Marque um alvo atrás de você',
      'Arremesse a bola para trás sem olhar',
      'Tem 5 tentativas',
      'Quem acertar mais vezes vence',
      'Objetivo: precisão sem visão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola, alvo']
  },

  // Acertar alvo no chão
  {
    id: 'acertar-alvo-chao',
    name: 'Acertar Alvo no Chão',
    category: 'circuito',
    description: 'Lançar uma bola para acertar um alvo no chão.',
    instructions: [
      'Marque um alvo no chão',
      'Tem 5 tentativas para acertar o alvo',
      'Quem acertar mais vezes vence',
      'Objetivo: precisão',
      'Aumentar a dificuldade aumentando a distância'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola, alvo']
  },

  // Derrubar torre de copos
  {
    id: 'derrubar-torre-copos',
    name: 'Derrubar Torre de Copos',
    category: 'circuito',
    description: 'Derrubar uma torre de copos com uma bola.',
    instructions: [
      'Construa uma torre com copos',
      'Tem 3 tentativas para derrubar a torre',
      'Se conseguir derrubar, ganha um ponto',
      'Objetivo: precisão e força',
      'Aumentar a dificuldade aumentando a altura da torre'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola, copos']
  },

  // Lançamento de bola pequena em balde
  {
    id: 'lancamento-bola-pequena-balde',
    name: 'Lançamento de Bola Pequena em Balde',
    category: 'circuito',
    description: 'Lançar uma bola pequena dentro de um balde.',
    instructions: [
      'Coloque um balde a uma distância',
      'Tem 5 tentativas para lançar a bola dentro do balde',
      'Cada acerto = 1 ponto',
      'Objetivo: acertar o máximo de vezes',
      'Aumentar a dificuldade aumentando a distância'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola pequena, balde']
  },

  // Resolver enigma para continuar
  {
    id: 'resolver-enigma-continuar',
    name: 'Resolver Enigma para Continuar',
    category: 'circuito',
    description: 'Resolver um enigma antes de continuar o circuito.',
    instructions: [
      'Um enigma é apresentado',
      'Deve resolver em 2 minutos',
      'Se resolver, pode continuar o circuito',
      'Se não resolver, tenta novamente',
      'Objetivo: raciocínio lógico'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Montar mini quebra-cabeça
  {
    id: 'montar-quebra-cabeca',
    name: 'Montar Mini Quebra-Cabeça',
    category: 'circuito',
    description: 'Montar um mini quebra-cabeça antes de continuar.',
    instructions: [
      'Um mini quebra-cabeça é apresentado',
      'Tem 3 minutos para montar',
      'Se montar, pode continuar o circuito',
      'Se não montar, tenta novamente',
      'Objetivo: paciência e concentração'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Mini quebra-cabeça']
  },

  // Memorizar sequência de cores
  {
    id: 'memorizar-cores',
    name: 'Memorizar Sequência de Cores',
    category: 'circuito',
    description: 'Memorizar e repetir uma sequência de cores.',
    instructions: [
      'Uma sequência de cores é mostrada',
      'Tem 5 segundos para memorizar',
      'Deve repetir a sequência corretamente',
      'Se acertar, pode continuar o circuito',
      'Se errar, tenta novamente'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Cores (cartões ou objetos)']
  },

  // Repetir sequência de movimentos
  {
    id: 'repetir-sequencia-movimentos',
    name: 'Repetir Sequência de Movimentos',
    category: 'circuito',
    description: 'Memorizar e repetir uma sequência de movimentos.',
    instructions: [
      'Uma sequência de movimentos é demonstrada',
      'Tem 10 segundos para memorizar',
      'Deve repetir a sequência corretamente',
      'Se acertar, pode continuar o circuito',
      'Se errar, tenta novamente'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Encontrar objeto escondido
  {
    id: 'encontrar-objeto-escondido',
    name: 'Encontrar Objeto Escondido',
    category: 'circuito',
    description: 'Encontrar um objeto escondido na sala.',
    instructions: [
      'Um objeto é escondido na sala',
      'Tem 2 minutos para encontrar',
      'Se encontrar, pode continuar o circuito',
      'Se não encontrar, recebe uma dica',
      'Objetivo: observação e busca'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Objeto para esconder']
  },

  // Decifrar código simples
  {
    id: 'decifrar-codigo-simples',
    name: 'Decifrar Código Simples',
    category: 'circuito',
    description: 'Decifrar um código simples para continuar.',
    instructions: [
      'Um código é apresentado (ex: número para cada letra)',
      'Tem 2 minutos para decifrar',
      'Se decifrar, pode continuar o circuito',
      'Se não decifrar, recebe uma dica',
      'Objetivo: raciocínio lógico'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Escolher caminho correto
  {
    id: 'escolher-caminho-correto',
    name: 'Escolher Caminho Correto',
    category: 'circuito',
    description: 'Escolher o caminho correto entre várias opções.',
    instructions: [
      'Vários caminhos são apresentados',
      'Deve escolher o caminho correto',
      'Se escolher corretamente, pode continuar',
      'Se escolher errado, tenta novamente',
      'Objetivo: decisão rápida'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Montar palavra com letras
  {
    id: 'montar-palavra-letras',
    name: 'Montar Palavra com Letras',
    category: 'circuito',
    description: 'Montar uma palavra com letras embaralhadas.',
    instructions: [
      'Letras embaralhadas são apresentadas',
      'Tem 1 minuto para montar a palavra',
      'Se montar corretamente, pode continuar',
      'Se não montar, recebe uma dica',
      'Objetivo: vocabulário e raciocínio'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Letras (cartões ou blocos)']
  },

  // Resolver charada
  {
    id: 'resolver-charada',
    name: 'Resolver Charada',
    category: 'circuito',
    description: 'Resolver uma charada antes de continuar.',
    instructions: [
      'Uma charada é apresentada',
      'Tem 2 minutos para resolver',
      'Se resolver, pode continuar o circuito',
      'Se não resolver, recebe uma dica',
      'Objetivo: raciocínio criativo'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Organizar peças por forma
  {
    id: 'organizar-pecas-forma',
    name: 'Organizar Peças por Forma',
    category: 'circuito',
    description: 'Organizar peças de diferentes formas.',
    instructions: [
      'Peças de diferentes formas são apresentadas',
      'Tem 1 minuto para organizar por forma',
      'Se organizar corretamente, pode continuar',
      'Se não organizar, tenta novamente',
      'Objetivo: classificação e organização'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Peças de diferentes formas']
  },

  // Transportar bola em dupla com costas
  {
    id: 'transportar-bola-dupla-costas',
    name: 'Transportar Bola em Dupla com Costas',
    category: 'circuito',
    description: 'Dupla transporta uma bola mantendo-a entre as costas.',
    instructions: [
      'Dois jogadores ficam de costas um para o outro',
      'Uma bola é colocada entre as costas',
      'Devem caminhar de um ponto a outro mantendo a bola',
      'Se a bola cair, volta ao início',
      'Objetivo: coordenação em dupla'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bola']
  },

  // Caminhar amarrado ao colega
  {
    id: 'caminhar-amarrado-colega',
    name: 'Caminhar Amarrado ao Colega',
    category: 'circuito',
    description: 'Dupla caminha com as pernas amarradas juntas.',
    instructions: [
      'Dois jogadores ficam lado a lado',
      'As pernas internas são amarradas juntas',
      'Devem caminhar de um ponto a outro',
      'Objetivo: coordenação e sincronização',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Corda ou fita']
  },

  // Carregar objeto grande em equipe
  {
    id: 'carregar-objeto-grande-equipe',
    name: 'Carregar Objeto Grande em Equipe',
    category: 'circuito',
    description: 'Equipe carrega um objeto grande de um ponto a outro.',
    instructions: [
      'Um objeto grande é colocado no chão',
      'A equipe deve carregar o objeto de um ponto a outro',
      'Todos devem contribuir',
      'Se cair, volta ao início',
      'Objetivo: trabalho em equipe'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '5-10 minutos',
    materials: ['Objeto grande (caixa, pneu, etc)']
  },

  // Passar bola sem usar mãos (circuito)
  {
    id: 'passar-bola-sem-maos-circuito',
    name: 'Passar Bola Sem Usar Mãos',
    category: 'circuito',
    description: 'Equipe passa uma bola sem usar as mãos.',
    instructions: [
      'Formem uma fila',
      'Uma bola é colocada entre o queixo e o ombro do primeiro',
      'Devem passar a bola para o próximo sem usar mãos',
      'Se cair, volta ao início',
      'Objetivo: coordenação em equipe'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '5-10 minutos',
    materials: ['Bola']
  },

  // Montar torre juntos
  {
    id: 'montar-torre-juntos',
    name: 'Montar Torre Juntos',
    category: 'circuito',
    description: 'Equipe monta uma torre juntos em tempo limite.',
    instructions: [
      'Forneça objetos para construir (copos, blocos, etc)',
      'Tem 3 minutos para montar a torre mais alta',
      'Todos devem contribuir',
      'A torre deve ser estável',
      'Objetivo: trabalho em equipe e criatividade'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '5-10 minutos',
    materials: ['Copos, blocos, ou objetos variados']
  },

  // Empurrar bola gigante juntos
  {
    id: 'empurrar-bola-gigante',
    name: 'Empurrar Bola Gigante Juntos',
    category: 'circuito',
    description: 'Equipe empurra uma bola gigante de um ponto a outro.',
    instructions: [
      'Uma bola gigante é colocada no chão',
      'A equipe deve empurrar a bola de um ponto a outro',
      'Todos devem trabalhar juntos',
      'Objetivo: força e coordenação em equipe',
      'Aumentar a dificuldade aumentando a distância'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '5-10 minutos',
    materials: ['Bola gigante']
  },

  // Equilibrar bambolê coletivo
  {
    id: 'equilibrar-bambole-coletivo',
    name: 'Equilibrar Bambolê Coletivo',
    category: 'circuito',
    description: 'Equipe equilibra um bambolê juntos.',
    instructions: [
      'Todos colocam um dedo no bambolê',
      'O bambolê não pode tocar o chão',
      'Devem trabalhar juntos para manter o equilíbrio',
      'Se cair, recomeçam',
      'Objetivo: coordenação e sincronização'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '5-10 minutos',
    materials: ['Bambolê']
  },

  // Resolver desafio em dupla
  {
    id: 'resolver-desafio-dupla',
    name: 'Resolver Desafio em Dupla',
    category: 'circuito',
    description: 'Dupla resolve um desafio juntos.',
    instructions: [
      'Um desafio é apresentado',
      'A dupla tem 3 minutos para resolver',
      'Devem trabalhar juntos',
      'Se resolverem, ganham um ponto',
      'Objetivo: trabalho em equipe'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Passar bastão sem deixar cair
  {
    id: 'passar-bastao-sem-cair',
    name: 'Passar Bastão Sem Deixar Cair',
    category: 'circuito',
    description: 'Equipe passa um bastão de um lado a outro sem deixar cair.',
    instructions: [
      'Formem uma fila',
      'Um bastão é passado de pessoa para pessoa',
      'Não podem deixar cair',
      'Se cair, volta ao início',
      'Objetivo: coordenação e sincronização'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '5-10 minutos',
    materials: ['Bastão']
  },

  // Formar figura humana juntos
  {
    id: 'formar-figura-humana',
    name: 'Formar Figura Humana Juntos',
    category: 'circuito',
    description: 'Equipe forma uma figura com seus corpos.',
    instructions: [
      'Um tema é escolhido (ex: árvore, casa, animal)',
      'A equipe tem 2 minutos para formar a figura',
      'Cada pessoa é parte da figura',
      'Os outros tentam adivinhar o que é',
      'Objetivo: criatividade e trabalho em equipe'
    ],
    minPlayers: 3,
    maxPlayers: 10,
    duration: '5-10 minutos'
  },

  // Caminhar como animal
  {
    id: 'caminhar-animal',
    name: 'Caminhar Como Animal',
    category: 'circuito',
    description: 'Caminhar imitando um animal até o próximo ponto.',
    instructions: [
      'Um animal é escolhido (ex: leão, sapo, cobra)',
      'Caminhe imitando o animal de um ponto a outro',
      'Devem fazer os sons e movimentos do animal',
      'Objetivo: chegar ao outro lado mantendo o personagem',
      'Revezam-se os animais'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Imitar robô até a próxima estação
  {
    id: 'imitar-robo-estacao',
    name: 'Imitar Robô Até a Próxima Estação',
    category: 'circuito',
    description: 'Caminhar como um robô até a próxima estação.',
    instructions: [
      'Caminhe como um robô (movimentos mecânicos)',
      'Faça sons de robô',
      'Caminhe de um ponto a outro mantendo o personagem',
      'Objetivo: chegar à próxima estação',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Pular como astronauta
  {
    id: 'pular-astronauta',
    name: 'Pular Como Astronauta',
    category: 'circuito',
    description: 'Pular como um astronauta na lua até a próxima estação.',
    instructions: [
      'Pule como um astronauta na lua (movimentos lentos)',
      'Faça sons de astronauta',
      'Pule de um ponto a outro mantendo o personagem',
      'Objetivo: chegar à próxima estação',
      'Aumentar a dificuldade aumentando a distância'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Andar como gigante
  {
    id: 'andar-gigante',
    name: 'Andar Como Gigante',
    category: 'circuito',
    description: 'Caminhar como um gigante com passos grandes até a próxima estação.',
    instructions: [
      'Caminhe como um gigante (passos grandes e lentos)',
      'Faça sons de gigante',
      'Caminhe de um ponto a outro mantendo o personagem',
      'Objetivo: chegar à próxima estação',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Missão de explorador
  {
    id: 'missao-explorador-circuito',
    name: 'Missão de Explorador',
    category: 'circuito',
    description: 'Explorar a área como um explorador até a próxima estação.',
    instructions: [
      'Caminhe como um explorador (observando tudo)',
      'Faça sons e movimentos de explorador',
      'Explore de um ponto a outro',
      'Objetivo: chegar à próxima estação',
      'Aumentar a dificuldade adicionando desafios'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Travessia da selva
  {
    id: 'travessia-selva',
    name: 'Travessia da Selva',
    category: 'circuito',
    description: 'Atravessar uma selva imaginária até a próxima estação.',
    instructions: [
      'Imagine uma selva densa',
      'Caminhe como se estivesse atravessando a selva',
      'Faça movimentos de explorador (rasgando plantas, etc)',
      'Objetivo: chegar à próxima estação',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Caminho do ninja
  {
    id: 'caminho-ninja',
    name: 'Caminho do Ninja',
    category: 'circuito',
    description: 'Caminhar silenciosamente como um ninja até a próxima estação.',
    instructions: [
      'Caminhe silenciosamente como um ninja',
      'Faça movimentos de ninja (agachado, rápido)',
      'Caminhe de um ponto a outro sem fazer barulho',
      'Objetivo: chegar à próxima estação em silêncio',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Missão espacial
  {
    id: 'missao-espacial',
    name: 'Missão Espacial',
    category: 'circuito',
    description: 'Realizar uma missão espacial até a próxima estação.',
    instructions: [
      'Imagine uma missão espacial',
      'Caminhe como um astronauta em uma nave',
      'Faça movimentos e sons de astronauta',
      'Objetivo: chegar à próxima estação',
      'Aumentar a dificuldade adicionando desafios'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Passagem pelo vulcão
  {
    id: 'passagem-vulcao',
    name: 'Passagem Pelo Vulcão',
    category: 'circuito',
    description: 'Atravessar um vulcão imaginário até a próxima estação.',
    instructions: [
      'Imagine um vulcão ativo',
      'Caminhe como se estivesse atravessando um vulcão',
      'Faça movimentos de fuga (rápido, pulando)',
      'Objetivo: chegar à próxima estação em segurança',
      'Aumentar a dificuldade adicionando obstáculos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Caminho do pirata
  {
    id: 'caminho-pirata',
    name: 'Caminho do Pirata',
    category: 'circuito',
    description: 'Caminhar como um pirata até a próxima estação.',
    instructions: [
      'Caminhe como um pirata (mancando, olhando ao redor)',
      'Faça sons de pirata',
      'Caminhe de um ponto a outro mantendo o personagem',
      'Objetivo: chegar à próxima estação',
      'Aumentar a dificuldade adicionando desafios'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // 5 polichinelos
  {
    id: '5-polichinelos',
    name: '5 Polichinelos',
    category: 'circuito',
    description: 'Fazer 5 polichinelos rapidamente.',
    instructions: [
      'Faça 5 polichinelos o mais rápido possível',
      'Depois continue para a próxima estação',
      'Objetivo: velocidade e resistência',
      'Aumentar a dificuldade aumentando o número de polichinelos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '2-5 minutos'
  },

  // 10 pulos no lugar
  {
    id: '10-pulos-lugar',
    name: '10 Pulos no Lugar',
    category: 'circuito',
    description: 'Fazer 10 pulos no lugar rapidamente.',
    instructions: [
      'Faça 10 pulos no lugar o mais rápido possível',
      'Depois continue para a próxima estação',
      'Objetivo: velocidade e resistência',
      'Aumentar a dificuldade aumentando o número de pulos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '2-5 minutos'
  },

  // Girar 3 vezes
  {
    id: 'girar-3-vezes',
    name: 'Girar 3 Vezes',
    category: 'circuito',
    description: 'Girar 3 vezes rapidamente.',
    instructions: [
      'Gire 3 vezes o mais rápido possível',
      'Depois continue para a próxima estação',
      'Objetivo: equilíbrio e velocidade',
      'Aumentar a dificuldade aumentando o número de giros'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '2-5 minutos'
  },

  // Bater palma e pular
  {
    id: 'bater-palma-pular',
    name: 'Bater Palma e Pular',
    category: 'circuito',
    description: 'Bater palma enquanto pula.',
    instructions: [
      'Pule enquanto bate palma',
      'Faça 5 vezes o mais rápido possível',
      'Depois continue para a próxima estação',
      'Objetivo: coordenação e velocidade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '2-5 minutos'
  },

  // Tocar chão e levantar
  {
    id: 'tocar-chao-levantar',
    name: 'Tocar Chão e Levantar',
    category: 'circuito',
    description: 'Tocar o chão e levantar rapidamente.',
    instructions: [
      'Abaixe-se e toque o chão',
      'Levante-se rapidamente',
      'Faça 5 vezes o mais rápido possível',
      'Depois continue para a próxima estação'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '2-5 minutos'
  },

  // 5 saltos para frente
  {
    id: '5-saltos-frente',
    name: '5 Saltos Para Frente',
    category: 'circuito',
    description: 'Fazer 5 saltos para frente rapidamente.',
    instructions: [
      'Faça 5 saltos para frente o mais rápido possível',
      'Depois continue para a próxima estação',
      'Objetivo: velocidade e agilidade',
      'Aumentar a dificuldade aumentando o número de saltos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '2-5 minutos'
  },

  // Rodar bambolê
  {
    id: 'rodar-bambole',
    name: 'Rodar Bambolê',
    category: 'circuito',
    description: 'Rodar um bambolê na cintura.',
    instructions: [
      'Coloque um bambolê na cintura',
      'Rode o bambolê por 10 segundos',
      'Depois continue para a próxima estação',
      'Objetivo: coordenação e equilíbrio'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bambolê']
  },

  // Pular corda 10 vezes
  {
    id: 'pular-corda-10',
    name: 'Pular Corda 10 Vezes',
    category: 'circuito',
    description: 'Pular corda 10 vezes rapidamente.',
    instructions: [
      'Pule corda 10 vezes o mais rápido possível',
      'Depois continue para a próxima estação',
      'Objetivo: velocidade e resistência',
      'Aumentar a dificuldade aumentando o número de pulos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Corda']
  },

  // Corrida curta até cone
  {
    id: 'corrida-curta-cone',
    name: 'Corrida Curta Até Cone',
    category: 'circuito',
    description: 'Correr até um cone e voltar.',
    instructions: [
      'Corra até um cone a 5 metros de distância',
      'Volte correndo ao ponto de partida',
      'Depois continue para a próxima estação',
      'Objetivo: velocidade e resistência'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Cone']
  },

  // Agachamento rápido
  {
    id: 'agachamento-rapido',
    name: 'Agachamento Rápido',
    category: 'circuito',
    description: 'Fazer agachamentos rapidamente.',
    instructions: [
      'Faça 5 agachamentos o mais rápido possível',
      'Depois continue para a próxima estação',
      'Objetivo: força e velocidade',
      'Aumentar a dificuldade aumentando o número de agachamentos'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '2-5 minutos'
  },

  // Construir torre com copos
  {
    id: 'construir-torre-copos-criativo',
    name: 'Construir Torre com Copos',
    category: 'circuito',
    description: 'Construir uma torre com copos rapidamente.',
    instructions: [
      'Construa uma torre com copos em 2 minutos',
      'Depois continue para a próxima estação',
      'Objetivo: criatividade e velocidade',
      'Aumentar a dificuldade diminuindo o tempo'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Copos']
  },

  // Empilhar blocos
  {
    id: 'empilhar-blocos',
    name: 'Empilhar Blocos',
    category: 'circuito',
    description: 'Empilhar blocos o mais alto possível.',
    instructions: [
      'Empilhe blocos em 2 minutos',
      'Depois continue para a próxima estação',
      'Objetivo: equilíbrio e criatividade',
      'Aumentar a dificuldade diminuindo o tempo'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Blocos']
  },

  // Desenhar algo rápido
  {
    id: 'desenhar-rapido',
    name: 'Desenhar Algo Rápido',
    category: 'circuito',
    description: 'Desenhar algo em 1 minuto.',
    instructions: [
      'Desenhe um objeto em 1 minuto',
      'Depois continue para a próxima estação',
      'Objetivo: criatividade e velocidade',
      'Aumentar a dificuldade diminuindo o tempo'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Papel, caneta']
  },

  // Criar símbolo da equipe
  {
    id: 'criar-simbolo-equipe',
    name: 'Criar Símbolo da Equipe',
    category: 'circuito',
    description: 'Criar um símbolo para a equipe.',
    instructions: [
      'Crie um símbolo para a equipe em 2 minutos',
      'Depois continue para a próxima estação',
      'Objetivo: criatividade e trabalho em equipe',
      'Aumentar a dificuldade diminuindo o tempo'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Papel, caneta']
  },

  // Montar figura com peças
  {
    id: 'montar-figura-pecas',
    name: 'Montar Figura com Peças',
    category: 'circuito',
    description: 'Montar uma figura com peças em tempo limite.',
    instructions: [
      'Monte uma figura com peças em 2 minutos',
      'Depois continue para a próxima estação',
      'Objetivo: coordenação e velocidade',
      'Aumentar a dificuldade diminuindo o tempo'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Peças']
  },

  // Inventar movimento novo
  {
    id: 'inventar-movimento-novo',
    name: 'Inventar Movimento Novo',
    category: 'circuito',
    description: 'Inventar um movimento novo e único.',
    instructions: [
      'Invente um movimento novo em 1 minuto',
      'Demonstre o movimento',
      'Depois continue para a próxima estação',
      'Objetivo: criatividade e expressão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Criar mini história
  {
    id: 'criar-mini-historia',
    name: 'Criar Mini História',
    category: 'circuito',
    description: 'Criar uma história em 1 minuto.',
    instructions: [
      'Crie uma história em 1 minuto',
      'Conte a história rapidamente',
      'Depois continue para a próxima estação',
      'Objetivo: criatividade e narrativa'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Desenho com olhos fechados
  {
    id: 'desenho-olhos-fechados',
    name: 'Desenho com Olhos Fechados',
    category: 'circuito',
    description: 'Desenhar algo com os olhos fechados.',
    instructions: [
      'Feche os olhos e desenhe algo em 1 minuto',
      'Depois abra os olhos e veja o resultado',
      'Continue para a próxima estação',
      'Objetivo: criatividade e diversão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Papel, caneta, venda']
  },

  // Construir ponte com objetos
  {
    id: 'construir-ponte-objetos-criativo',
    name: 'Construir Ponte com Objetos',
    category: 'circuito',
    description: 'Construir uma ponte com objetos disponíveis.',
    instructions: [
      'Construa uma ponte em 3 minutos',
      'A ponte deve conectar dois pontos',
      'Depois continue para a próxima estação',
      'Objetivo: criatividade e engenharia'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Objetos variados']
  },

  // Criar bandeira do time
  {
    id: 'criar-bandeira-time',
    name: 'Criar Bandeira do Time',
    category: 'circuito',
    description: 'Criar uma bandeira para o time.',
    instructions: [
      'Crie uma bandeira em 2 minutos',
      'Desenhe ou decore a bandeira',
      'Depois continue para a próxima estação',
      'Objetivo: criatividade e identidade de time'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Papel, caneta, materiais']
  },

  // Passar por todos obstáculos sem tocar no chão
  {
    id: 'passar-obstaculos-sem-chao',
    name: 'Passar por Todos Obstáculos Sem Tocar no Chão',
    category: 'circuito',
    description: 'Passar por um percurso de obstáculos sem tocar no chão.',
    instructions: [
      'Passe por todos os obstáculos sem tocar no chão',
      'Pode usar cordas, bancos, objetos para se apoiar',
      'Se tocar no chão, volta ao início',
      'Objetivo: agilidade e criatividade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Cordas, bancos, objetos']
  },

  // Completar circuito em tempo limite
  {
    id: 'completar-circuito-tempo',
    name: 'Completar Circuito em Tempo Limite',
    category: 'circuito',
    description: 'Completar um circuito em tempo limite.',
    instructions: [
      'Complete o circuito em 5 minutos',
      'Deve passar por todos os pontos',
      'Se não completar no tempo, tenta novamente',
      'Objetivo: velocidade e resistência'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Circuito vendado com guia
  {
    id: 'circuito-vendado-guia-final',
    name: 'Circuito Vendado com Guia',
    category: 'circuito',
    description: 'Completar um circuito vendado com ajuda de um guia.',
    instructions: [
      'Um jogador é vendado',
      'Um guia dá instruções verbais',
      'O vendado deve completar o circuito',
      'Se tocar em algo, volta ao início',
      'Objetivo: confiança e comunicação'
    ],
    minPlayers: 2,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Venda']
  },

  // Transporte de água sem derramar
  {
    id: 'transporte-agua-sem-derramar',
    name: 'Transporte de Água Sem Derramar',
    category: 'circuito',
    description: 'Transportar água através de um percurso sem derramar.',
    instructions: [
      'Carregue um copo com água',
      'Passe por um percurso de obstáculos',
      'Se derramar, volta ao início',
      'Objetivo: cuidado e precisão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Copo, água']
  },

  // Montar puzzle antes de continuar
  {
    id: 'montar-puzzle-continuar',
    name: 'Montar Puzzle Antes de Continuar',
    category: 'circuito',
    description: 'Montar um puzzle antes de continuar o circuito.',
    instructions: [
      'Monte um puzzle em 3 minutos',
      'Se montar, pode continuar o circuito',
      'Se não montar, tenta novamente',
      'Objetivo: paciência e concentração'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Puzzle']
  },

  // Circuito com objeto na mão
  {
    id: 'circuito-objeto-mao',
    name: 'Circuito com Objeto na Mão',
    category: 'circuito',
    description: 'Completar um circuito mantendo um objeto na mão.',
    instructions: [
      'Pegue um objeto (bola, copo, etc)',
      'Complete o circuito mantendo o objeto',
      'Não pode deixar cair',
      'Se cair, volta ao início'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Objeto']
  },

  // Missão de resgate
  {
    id: 'missao-resgate',
    name: 'Missão de Resgate',
    category: 'circuito',
    description: 'Resgatar um objeto e trazê-lo de volta.',
    instructions: [
      'Um objeto está escondido no final do circuito',
      'Complete o circuito e resgate o objeto',
      'Traga o objeto de volta ao ponto de partida',
      'Objetivo: velocidade e agilidade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Objeto para resgatar']
  },

  // Corrida com tarefa surpresa
  {
    id: 'corrida-tarefa-surpresa',
    name: 'Corrida com Tarefa Surpresa',
    category: 'circuito',
    description: 'Correr e completar uma tarefa surpresa no meio do caminho.',
    instructions: [
      'Corra até um ponto do circuito',
      'Complete uma tarefa surpresa (ex: pular 5 vezes)',
      'Continue correndo até o final',
      'Objetivo: velocidade e adaptabilidade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos'
  },

  // Desafio de precisão final
  {
    id: 'desafio-precisao-final',
    name: 'Desafio de Precisão Final',
    category: 'circuito',
    description: 'Completar um desafio de precisão como última estação.',
    instructions: [
      'Acerte um alvo com precisão',
      'Tem 3 tentativas',
      'Se acertar, completa o circuito',
      'Objetivo: precisão e concentração'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Alvo, bola']
  },

  // Caminho secreto com pistas
  {
    id: 'caminho-secreto-pistas',
    name: 'Caminho Secreto com Pistas',
    category: 'circuito',
    description: 'Seguir um caminho secreto usando pistas.',
    instructions: [
      'Pistas indicam o caminho correto',
      'Siga as pistas para completar o circuito',
      'Se seguir o caminho errado, volta ao início',
      'Objetivo: observação e dedução'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Pistas']
  },

  // Estação misteriosa
  {
    id: 'estacao-misteriosa',
    name: 'Estação Misteriosa',
    category: 'circuito',
    description: 'Uma estação misteriosa onde o professor inventa uma tarefa.',
    instructions: [
      'Chegue à estação misteriosa',
      'O professor inventa uma tarefa surpresa',
      'Complete a tarefa para continuar',
      'Objetivo: adaptabilidade e criatividade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Desafio sorteado em carta
  {
    id: 'desafio-sorteado-carta',
    name: 'Desafio Sorteado em Carta',
    category: 'circuito',
    description: 'Sortear um desafio de uma carta e completá-lo.',
    instructions: [
      'Sorteie uma carta com um desafio',
      'Complete o desafio descrito na carta',
      'Se completar, pode continuar o circuito',
      'Objetivo: adaptabilidade e diversão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Cartas com desafios']
  },

  // Missão secreta individual
  {
    id: 'missao-secreta-individual',
    name: 'Missão Secreta Individual',
    category: 'circuito',
    description: 'Cada jogador recebe uma missão secreta.',
    instructions: [
      'Receba uma missão secreta em uma carta',
      'Complete a missão sem revelar para os outros',
      'Se completar, ganha um ponto secreto',
      'Objetivo: sigilo e criatividade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '10-15 minutos',
    materials: ['Cartas com missões']
  },

  // Estação do riso
  {
    id: 'estacao-riso',
    name: 'Estação do Riso',
    category: 'circuito',
    description: 'Fazer a turma rir para completar a estação.',
    instructions: [
      'Conte uma piada ou faça algo engraçado',
      'Objetivo: fazer a turma rir',
      'Se conseguir, pode continuar o circuito',
      'Objetivo: diversão e bom humor'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Desafio de equilíbrio coletivo
  {
    id: 'desafio-equilibrio-coletivo',
    name: 'Desafio de Equilíbrio Coletivo',
    category: 'circuito',
    description: 'A equipe trabalha junto para manter o equilíbrio.',
    instructions: [
      'Todos colocam um dedo em um bastão',
      'Devem manter o bastão no ar',
      'Se cair, recomeçam',
      'Objetivo: coordenação em equipe'
    ],
    minPlayers: 3,
    maxPlayers: 20,
    duration: '5-10 minutos',
    materials: ['Bastão']
  },

  // Tarefa criativa improvisada
  {
    id: 'tarefa-criativa-improvisada',
    name: 'Tarefa Criativa Improvisada',
    category: 'circuito',
    description: 'Uma tarefa criativa é improvisada no momento.',
    instructions: [
      'O professor inventa uma tarefa criativa',
      'Complete a tarefa em 2 minutos',
      'Se completar, pode continuar o circuito',
      'Objetivo: criatividade e adaptabilidade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Desafio surpresa de movimento
  {
    id: 'desafio-surpresa-movimento',
    name: 'Desafio Surpresa de Movimento',
    category: 'circuito',
    description: 'Um desafio de movimento surpresa é apresentado.',
    instructions: [
      'Um movimento surpresa é sorteado',
      'Complete o movimento o melhor possível',
      'Se completar, pode continuar o circuito',
      'Objetivo: agilidade e criatividade'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Estação de imitação
  {
    id: 'estacao-imitacao',
    name: 'Estação de Imitação',
    category: 'circuito',
    description: 'Imitar algo ou alguém para completar a estação.',
    instructions: [
      'Imite um animal, pessoa ou objeto',
      'Os outros tentam adivinhar',
      'Se acertarem, pode continuar o circuito',
      'Objetivo: criatividade e diversão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Desafio rápido de raciocínio
  {
    id: 'desafio-rapido-raciocinio',
    name: 'Desafio Rápido de Raciocínio',
    category: 'circuito',
    description: 'Resolver um desafio de raciocínio rápido.',
    instructions: [
      'Um desafio de raciocínio é apresentado',
      'Tem 1 minuto para resolver',
      'Se resolver, pode continuar o circuito',
      'Objetivo: raciocínio rápido'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  },

  // Estação final de celebração
  {
    id: 'estacao-celebracao',
    name: 'Estação Final de Celebração',
    category: 'circuito',
    description: 'Celebrar a conclusão do circuito com a turma.',
    instructions: [
      'Chegou ao final do circuito!',
      'Celebre com a turma (palmas, gritos, dança)',
      'Compartilhe como foi a experiência',
      'Objetivo: celebração e diversão'
    ],
    minPlayers: 1,
    maxPlayers: 20,
    duration: '5-10 minutos'
  }
];
