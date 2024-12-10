export function getVideoAulas() {
  return [
    {
      id: 1,
      titulo: 'sen30°=1/2 ✅ Tá! Mas por quê?😎 #1',
      videoId: 'wXW-6qZtYQY',
    },
    {
      id: 2,
      titulo:
        'Cosseno de 60 graus é igual a 0,5 ? De onde retiraram esse valor ?',
      videoId: 'kUpxzYf-Iz4',
    },
    {
      id: 3,
      titulo: 'Você sabe por que tangente de 45 graus é igual a 1 ?',
      videoId: '70SIKC2pDcc',
    },
    {
      id: 4,
      titulo: 'APRENDA AGORA como calcular SENO , COSSENO E TANGENTE !',
      videoId: 'R2mYeSBiwW8',
    },
    {
      id: 5,
      titulo: 'FÁCIL e RÁPIDO | ÂNGULOS COMPLEMENTARES e SUPLEMENTARES',
      videoId: 'U_735SRkPvA',
    },
  ];
}

export const sequenciaVideoAulas = [4, 5, 1, 3, 2];

export const getNivelAprendizado = perc => {
  return escalaAprendizado.find(nivel => {
    return perc >= nivel.criterio[0] && perc <= nivel.criterio[1];
  });
};

const escalaAprendizado = [
  {
    nivel: 'Iniciante',
    criterio: [0, 40],
    descricao: 'Recém-chegado ao mundo da trigonometria. Continue praticando!',
  },
  {
    nivel: 'Explorador de Ângulos',
    criterio: [41, 60],
    descricao: 'Você está desbravando conceitos importantes, siga firme!',
  },
  {
    nivel: 'Aventureiro dos Sinais',
    criterio: [61, 80],
    descricao:
      'Boa jornada! Você já domina muitos conceitos de seno, cosseno e tangente.',
  },
  {
    nivel: 'Mestre dos Triângulos',
    criterio: [81, 90],
    descricao: 'Você quase dominou tudo, excelente progresso em trigonometria!',
  },
  {
    nivel: 'Lenda da Trigonometria',
    criterio: [91, 100],
    descricao:
      'Você é uma verdadeira lenda! Parabéns pelo desempenho exemplar!',
  },
];

// export const exerciciosInicial = [
//   {
//     id: 1,
//     videoAulaID: [1, 4], //lista de videoaulas relacionadas
//     trancado: false,
//     feito: false,
//     acertou: false,
//     pergunta: 'Qual é o valor do seno de 30°?',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'facil',
//     respostas: [
//       { id: 'a', texto: '0.5', correta: true },
//       { id: 'b', texto: '0.866', correta: false },
//       { id: 'c', texto: '1', correta: false },
//       { id: 'd', texto: '0.25', correta: false },
//     ],
//     explicacao: 'O seno de 30° é igual a 0.5.',
//     feedback: {
//       mensagens: {
//         acerto: 'Parabéns, você acertou!',
//         erro: 'O seno de 30° é 0.5. Revise a tabela de valores trigonométricos.',
//       },
//     },
//   },
//   {
//     id: 2,
//     videoAulaID: [2, 4], //lista de videoaulas relacionadas
//     trancado: true,
//     feito: false,
//     acertou: false,
//     pergunta: 'Qual é o valor do cosseno de 60°?',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'facil',
//     respostas: [
//       { id: 'a', texto: '0.5', correta: true },
//       { id: 'b', texto: '1', correta: false },
//       { id: 'c', texto: '0.866', correta: false },
//       { id: 'd', texto: '0.25', correta: false },
//     ],
//     explicacao: 'O cosseno de 60° é igual a 0.5.',
//     feedback: {
//       mensagens: {
//         acerto: 'Muito bem!',
//         erro: 'O cosseno de 60° é 0.5. Revise a tabela de valores trigonométricos.',
//       },
//     },
//   },
//   {
//     id: 3,
//     videoAulaID: [3, 4], //lista de videoaulas relacionadas
//     trancado: true,
//     feito: false,
//     acertou: false,
//     pergunta: 'Qual é o valor da tangente de 45°?',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'facil',
//     respostas: [
//       { id: 'a', texto: '1', correta: true },
//       { id: 'b', texto: '0', correta: false },
//       { id: 'c', texto: 'raiz(3)/3', correta: false },
//       { id: 'd', texto: 'raiz(3)', correta: false },
//     ],
//     explicacao: 'A tangente de 45° é igual a 1.',
//     feedback: {
//       mensagens: {
//         acerto: 'Boa, você acertou!',
//         erro: 'A tangente de 45° é igual a 1. Revise a relação trigonométrica.',
//       },
//     },
//   },

//   {
//     id: 11,
//     videoAulaID: [4, 5], //lista de videoaulas relacionadas
//     trancado: true,
//     feito: false,
//     acertou: false,
//     pergunta: 'Qual é o valor do cosseno de 45°?',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'medio',
//     respostas: [
//       { id: 'a', texto: '0.707', correta: true },
//       { id: 'b', texto: '0.5', correta: false },
//       { id: 'c', texto: '1', correta: false },
//       { id: 'd', texto: '0.866', correta: false },
//     ],
//     explicacao: 'O cosseno de 45° é aproximadamente 0.707.',
//     feedback: {
//       mensagens: {
//         acerto: 'Muito bem!',
//         erro: 'Revise a tabela de valores trigonométricos.',
//       },
//     },
//   },
//   {
//     id: 12,
//     videoAulaID: [4, 5], //lista de videoaulas relacionadas
//     trancado: true,
//     feito: false,
//     acertou: false,
//     pergunta:
//       'Se o seno de um ângulo é igual a 0.866, qual pode ser o valor desse ângulo?',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'medio',
//     respostas: [
//       { id: 'a', texto: '30°', correta: false },
//       { id: 'b', texto: '60°', correta: true },
//       { id: 'c', texto: '45°', correta: false },
//       { id: 'd', texto: '90°', correta: false },
//     ],
//     explicacao: 'O seno de 60° é igual a 0.866.',
//     feedback: {
//       mensagens: {
//         acerto: 'Parabéns, você acertou!',
//         erro: 'Revise a tabela de valores trigonométricos para encontrar o valor correto.',
//       },
//     },
//   },
//   {
//     id: 13,
//     videoAulaID: [4, 5], //lista de videoaulas relacionadas
//     trancado: true,
//     feito: false,
//     acertou: false,
//     pergunta:
//       'Qual é a relação entre os lados de um triângulo retângulo com ângulo de 30°?',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'medio',
//     respostas: [
//       {
//         id: 'a',
//         texto: 'A hipotenusa é o dobro do menor cateto.',
//         correta: true,
//       },
//       { id: 'b', texto: 'Os catetos são iguais.', correta: false },
//       {
//         id: 'c',
//         texto: 'A hipotenusa é igual ao maior cateto.',
//         correta: false,
//       },
//       {
//         id: 'd',
//         texto: 'A hipotenusa é a metade do maior cateto.',
//         correta: false,
//       },
//     ],
//     explicacao:
//       'Em um triângulo retângulo com ângulo de 30°, a hipotenusa é o dobro do menor cateto.',
//     feedback: {
//       mensagens: {
//         acerto: 'Muito bem!',
//         erro: 'Revise as propriedades dos triângulos especiais.',
//       },
//     },
//   },

//   {
//     id: 24,
//     videoAulaID: [4, 5], //lista de videoaulas relacionadas
//     trancado: true,
//     feito: false,
//     acertou: false,
//     pergunta:
//       'Encontre o valor do seno de 75° usando a fórmula de adição de ângulos.',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'dificil',
//     respostas: [
//       { id: 'a', texto: '0.9659', correta: true },
//       { id: 'b', texto: '0.866', correta: false },
//       { id: 'c', texto: '0.5', correta: false },
//       { id: 'd', texto: '0.707', correta: false },
//     ],
//     explicacao:
//       'O seno de 75° pode ser encontrado usando a fórmula de adição de ângulos: sen(45° + 30°).',
//     feedback: {
//       mensagens: {
//         acerto: 'Excelente trabalho!',
//         erro: 'Revise a fórmula de adição de ângulos para calcular senos.',
//       },
//     },
//   },
//   {
//     id: 25,
//     videoAulaID: [4, 5], //lista de videoaulas relacionadas
//     trancado: true,
//     feito: false,
//     acertou: false,
//     pergunta:
//       'Calcule o valor do cosseno de 15° usando a fórmula de subtração de ângulos.',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'dificil',
//     respostas: [
//       { id: 'a', texto: '0.9659', correta: true },
//       { id: 'b', texto: '0.707', correta: false },
//       { id: 'c', texto: '0.5', correta: false },
//       { id: 'd', texto: '-0.707', correta: false },
//     ],
//     explicacao:
//       'Use a fórmula de subtração de ângulos: cos(45° - 30°) para encontrar o valor.',
//     feedback: {
//       mensagens: {
//         acerto: 'Ótimo trabalho!',
//         erro: 'Revise a fórmula de subtração de ângulos para calcular cossenos.',
//       },
//     },
//   },
//   {
//     id: 26,
//     videoAulaID: [4, 5], //lista de videoaulas relacionadas
//     trancado: true,
//     feito: false,
//     acertou: false,
//     pergunta:
//       'Determine o valor exato da tangente de 75° usando a fórmula de adição de ângulos.',
//     imagem: '',
//     tipo: 'múltipla escolha',
//     nivel_dificuldade: 'dificil',
//     respostas: [
//       { id: 'a', texto: '2 + √3', correta: true },
//       { id: 'b', texto: '1 + √3', correta: false },
//       { id: 'c', texto: '2 - √3', correta: false },
//       { id: 'd', texto: '1 - √3', correta: false },
//     ],
//     explicacao:
//       'Use a fórmula de adição de ângulos para tangente: tan(45° + 30°).',
//     feedback: {
//       mensagens: {
//         acerto: 'Excelente trabalho!',
//         erro: 'Revise a fórmula de adição de ângulos para tangente.',
//       },
//     },
//   },
// ];


export const getExerciciosIniciais = async () => {
  console.log('API: Buscando dados...');
  try {
    const response = await fetch('http://10.0.2.2:8080/dados');
    console.log('API: JSON dados...');
    const data = await response.json();
    console.log('API: Dados recebidos ', data);
    return data;
  }
  catch (error) {
    console.log('API: Erro ao buscar dados: ', error);
    return false;
  }
};