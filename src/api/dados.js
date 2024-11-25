export function getExercicios() {
  return [
    {
      id: 1,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do seno de 30°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '0.5', correta: true },
        { id: 'b', texto: '0.866', correta: false },
        { id: 'c', texto: '1', correta: false },
        { id: 'd', texto: '0.25', correta: false },
      ],
      explicacao: 'O seno de 30° é igual a 0.5.',
      feedback: {
        mensagens: {
          acerto: 'Parabéns, você acertou!',
          erro: 'O seno de 30° é 0.5. Revise a tabela de valores trigonométricos.',
        },
      },
    },
    {
      id: 2,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do cosseno de 60°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '0.5', correta: true },
        { id: 'b', texto: '1', correta: false },
        { id: 'c', texto: '0.866', correta: false },
        { id: 'd', texto: '0.25', correta: false },
      ],
      explicacao: 'O cosseno de 60° é igual a 0.5.',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'O cosseno de 60° é 0.5. Revise a tabela de valores trigonométricos.',
        },
      },
    },
    {
      id: 3,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor da tangente de 45°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '1', correta: true },
        { id: 'b', texto: '0', correta: false },
        { id: 'c', texto: 'raiz(3)/3', correta: false },
        { id: 'd', texto: 'raiz(3)', correta: false },
      ],
      explicacao: 'A tangente de 45° é igual a 1.',
      feedback: {
        mensagens: {
          acerto: 'Boa, você acertou!',
          erro: 'A tangente de 45° é igual a 1. Revise a relação trigonométrica.',
        },
      },
    },
    {
      id: 4,
      feito: false,
      acertou: false,
      pergunta: 'Calcule o valor do seno de 90°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '0', correta: false },
        { id: 'b', texto: '1', correta: true },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '-1', correta: false },
      ],
      explicacao: 'O seno de 90° é igual a 1.',
      feedback: {
        mensagens: {
          acerto: 'Ótimo trabalho!',
          erro: 'Revise a definição de seno para ângulos notáveis.',
        },
      },
    },
    {
      id: 5,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do cosseno de 0°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '0', correta: false },
        { id: 'b', texto: '1', correta: true },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '-1', correta: false },
      ],
      explicacao: 'O cosseno de 0° é igual a 1.',
      feedback: {
        mensagens: {
          acerto: 'Excelente!',
          erro: 'Revise a tabela de valores trigonométricos.',
        },
      },
    },
    {
      id: 6,
      feito: false,
      acertou: false,
      pergunta: 'Calcule o valor da tangente de 30°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '1', correta: false },
        { id: 'b', texto: 'raiz(3)/3', correta: true },
        { id: 'c', texto: 'raiz(3)', correta: false },
        { id: 'd', texto: '0', correta: false },
      ],
      explicacao: 'A tangente de 30° é igual a raiz(3)/3.',
      feedback: {
        mensagens: {
          acerto: 'Boa, você acertou!',
          erro: 'Revise os valores de tangente para ângulos especiais.',
        },
      },
    },
    {
      id: 7,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do seno de 45°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '0.707', correta: true },
        { id: 'b', texto: '1', correta: false },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '0.866', correta: false },
      ],
      explicacao: 'O seno de 45° é aproximadamente 0.707.',
      feedback: {
        mensagens: {
          acerto: 'Bom trabalho!',
          erro: 'Revise a tabela de valores trigonométricos para ângulos especiais.',
        },
      },
    },
    {
      id: 8,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do cosseno de 90°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '0', correta: true },
        { id: 'b', texto: '1', correta: false },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '-1', correta: false },
      ],
      explicacao: 'O cosseno de 90° é igual a 0.',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'Revise a definição de cosseno para ângulos notáveis.',
        },
      },
    },
    {
      id: 9,
      feito: false,
      acertou: false,
      pergunta: 'Calcule o valor da tangente de 60°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: 'raiz(3)', correta: true },
        { id: 'b', texto: '1', correta: false },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '0', correta: false },
      ],
      explicacao: 'A tangente de 60° é igual a raiz(3).',
      feedback: {
        mensagens: {
          acerto: 'Parabéns!',
          erro: 'Revise os valores de tangente para ângulos especiais.',
        },
      },
    },
    {
      id: 10,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do seno de 0°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'facil',
      respostas: [
        { id: 'a', texto: '0', correta: true },
        { id: 'b', texto: '1', correta: false },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '-1', correta: false },
      ],
      explicacao: 'O seno de 0° é igual a 0.',
      feedback: {
        mensagens: {
          acerto: 'Excelente!',
          erro: 'Revise a definição de seno para ângulos notáveis.',
        },
      },
    },
    {
      id: 11,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do cosseno de 45°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '0.707', correta: true },
        { id: 'b', texto: '0.5', correta: false },
        { id: 'c', texto: '1', correta: false },
        { id: 'd', texto: '0.866', correta: false },
      ],
      explicacao: 'O cosseno de 45° é aproximadamente 0.707.',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'Revise a tabela de valores trigonométricos.',
        },
      },
    },
    {
      id: 12,
      feito: false,
      acertou: false,
      pergunta:
        'Se o seno de um ângulo é igual a 0.866, qual pode ser o valor desse ângulo?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '30°', correta: false },
        { id: 'b', texto: '60°', correta: true },
        { id: 'c', texto: '45°', correta: false },
        { id: 'd', texto: '90°', correta: false },
      ],
      explicacao: 'O seno de 60° é igual a 0.866.',
      feedback: {
        mensagens: {
          acerto: 'Parabéns, você acertou!',
          erro: 'Revise a tabela de valores trigonométricos para encontrar o valor correto.',
        },
      },
    },
    {
      id: 13,
      feito: false,
      acertou: false,
      pergunta:
        'Qual é a relação entre os lados de um triângulo retângulo com ângulo de 30°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        {
          id: 'a',
          texto: 'A hipotenusa é o dobro do menor cateto.',
          correta: true,
        },
        { id: 'b', texto: 'Os catetos são iguais.', correta: false },
        {
          id: 'c',
          texto: 'A hipotenusa é igual ao maior cateto.',
          correta: false,
        },
        {
          id: 'd',
          texto: 'A hipotenusa é a metade do maior cateto.',
          correta: false,
        },
      ],
      explicacao:
        'Em um triângulo retângulo com ângulo de 30°, a hipotenusa é o dobro do menor cateto.',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'Revise as propriedades dos triângulos especiais.',
        },
      },
    },
    {
      id: 14,
      feito: false,
      acertou: false,
      pergunta: 'Calcule o valor do cosseno de 120°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '-0.5', correta: true },
        { id: 'b', texto: '0.5', correta: false },
        { id: 'c', texto: '-0.866', correta: false },
        { id: 'd', texto: '0.866', correta: false },
      ],
      explicacao: 'O cosseno de 120° é igual a -0.5.',
      feedback: {
        mensagens: {
          acerto: 'Ótimo trabalho!',
          erro: 'Revise a definição de cosseno para ângulos maiores que 90°.',
        },
      },
    },
    {
      id: 15,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor da tangente de 135°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '-1', correta: true },
        { id: 'b', texto: '1', correta: false },
        { id: 'c', texto: '0', correta: false },
        { id: 'd', texto: 'raiz(3)', correta: false },
      ],
      explicacao: 'A tangente de 135° é igual a -1.',
      feedback: {
        mensagens: {
          acerto: 'Bom trabalho!',
          erro: 'Revise a definição de tangente para ângulos no segundo quadrante.',
        },
      },
    },
    {
      id: 16,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do seno de 150°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '0.5', correta: true },
        { id: 'b', texto: '-0.5', correta: false },
        { id: 'c', texto: '0.866', correta: false },
        { id: 'd', texto: '1', correta: false },
      ],
      explicacao: 'O seno de 150° é igual a 0.5.',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'Revise a definição de seno para ângulos no segundo quadrante.',
        },
      },
    },
    {
      id: 17,
      feito: false,
      acertou: false,
      pergunta: 'Calcule o valor do cosseno de 210°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '-0.866', correta: true },
        { id: 'b', texto: '0.866', correta: false },
        { id: 'c', texto: '-0.5', correta: false },
        { id: 'd', texto: '0.5', correta: false },
      ],
      explicacao: 'O cosseno de 210° é igual a -0.866.',
      feedback: {
        mensagens: {
          acerto: 'Parabéns, você acertou!',
          erro: 'Revise os valores do cosseno para ângulos no terceiro quadrante.',
        },
      },
    },
    {
      id: 18,
      feito: false,
      acertou: false,
      pergunta: 'Qual é a tangente de 225°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '1', correta: true },
        { id: 'b', texto: '-1', correta: false },
        { id: 'c', texto: '0', correta: false },
        { id: 'd', texto: 'raiz(3)', correta: false },
      ],
      explicacao: 'A tangente de 225° é igual a 1.',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'Revise a definição de tangente para ângulos no terceiro quadrante.',
        },
      },
    },
    {
      id: 19,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor do seno de 240°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '-0.866', correta: true },
        { id: 'b', texto: '0.866', correta: false },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '-0.5', correta: false },
      ],
      explicacao: 'O seno de 240° é igual a -0.866.',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'Revise a definição de seno para ângulos no terceiro quadrante.',
        },
      },
    },
    {
      id: 20,
      feito: false,
      acertou: false,
      pergunta: 'Calcule o valor do cosseno de 300°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '0.5', correta: true },
        { id: 'b', texto: '-0.5', correta: false },
        { id: 'c', texto: '0.866', correta: false },
        { id: 'd', texto: '-0.866', correta: false },
      ],
      explicacao: 'O cosseno de 300° é igual a 0.5.',
      feedback: {
        mensagens: {
          acerto: 'Bom trabalho!',
          erro: 'Revise a definição de cosseno para ângulos no quarto quadrante.',
        },
      },
    },
    {
      id: 21,
      feito: false,
      acertou: false,
      pergunta: 'Qual é o valor da tangente de 315°?',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '-1', correta: true },
        { id: 'b', texto: '1', correta: false },
        { id: 'c', texto: '0', correta: false },
        { id: 'd', texto: '-raiz(3)', correta: false },
      ],
      explicacao: 'A tangente de 315° é igual a -1.',
      feedback: {
        mensagens: {
          acerto: 'Ótimo trabalho!',
          erro: 'Revise a definição de tangente para ângulos no quarto quadrante.',
        },
      },
    },
    {
      id: 22,
      feito: false,
      acertou: false,
      pergunta: 'Calcule o valor do seno de 270°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '-1', correta: true },
        { id: 'b', texto: '0', correta: false },
        { id: 'c', texto: '1', correta: false },
        { id: 'd', texto: '0.5', correta: false },
      ],
      explicacao: 'O seno de 270° é igual a -1.',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'Revise a definição de seno para ângulos especiais.',
        },
      },
    },
    {
      id: 23,
      feito: false,
      acertou: false,
      pergunta: 'Calcule o valor do cosseno de 330°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'medio',
      respostas: [
        { id: 'a', texto: '0.866', correta: true },
        { id: 'b', texto: '-0.866', correta: false },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '-0.5', correta: false },
      ],
      explicacao: 'O cosseno de 330° é igual a 0.866.',
      feedback: {
        mensagens: {
          acerto: 'Parabéns, você acertou!',
          erro: 'Revise a definição de cosseno para ângulos no quarto quadrante.',
        },
      },
    },
    {
      id: 24,
      feito: false,
      acertou: false,
      pergunta:
        'Encontre o valor do seno de 75° usando a fórmula de adição de ângulos.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'dificil',
      respostas: [
        { id: 'a', texto: '0.9659', correta: true },
        { id: 'b', texto: '0.866', correta: false },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '0.707', correta: false },
      ],
      explicacao:
        'O seno de 75° pode ser encontrado usando a fórmula de adição de ângulos: sen(45° + 30°).',
      feedback: {
        mensagens: {
          acerto: 'Excelente trabalho!',
          erro: 'Revise a fórmula de adição de ângulos para calcular senos.',
        },
      },
    },
    {
      id: 25,
      feito: false,
      acertou: false,
      pergunta:
        'Calcule o valor do cosseno de 15° usando a fórmula de subtração de ângulos.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'dificil',
      respostas: [
        { id: 'a', texto: '0.9659', correta: true },
        { id: 'b', texto: '0.707', correta: false },
        { id: 'c', texto: '0.5', correta: false },
        { id: 'd', texto: '-0.707', correta: false },
      ],
      explicacao:
        'Use a fórmula de subtração de ângulos: cos(45° - 30°) para encontrar o valor.',
      feedback: {
        mensagens: {
          acerto: 'Ótimo trabalho!',
          erro: 'Revise a fórmula de subtração de ângulos para calcular cossenos.',
        },
      },
    },
    {
      id: 26,
      feito: false,
      acertou: false,
      pergunta:
        'Determine o valor exato da tangente de 75° usando a fórmula de adição de ângulos.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'dificil',
      respostas: [
        { id: 'a', texto: '2 + √3', correta: true },
        { id: 'b', texto: '1 + √3', correta: false },
        { id: 'c', texto: '2 - √3', correta: false },
        { id: 'd', texto: '1 - √3', correta: false },
      ],
      explicacao:
        'Use a fórmula de adição de ângulos para tangente: tan(45° + 30°).',
      feedback: {
        mensagens: {
          acerto: 'Excelente trabalho!',
          erro: 'Revise a fórmula de adição de ângulos para tangente.',
        },
      },
    },
    {
      id: 27,
      feito: false,
      acertou: false,
      pergunta:
        'Calcule o valor do seno de 165° usando a fórmula de adição de ângulos.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'dificil',
      respostas: [
        { id: 'a', texto: '0.2588', correta: true },
        { id: 'b', texto: '0.5', correta: false },
        { id: 'c', texto: '0.866', correta: false },
        { id: 'd', texto: '-0.5', correta: false },
      ],
      explicacao:
        'Use a fórmula de adição de ângulos para encontrar o valor do seno de 165°: sen(90° + 75°).',
      feedback: {
        mensagens: {
          acerto: 'Muito bem!',
          erro: 'Revise a fórmula de adição de ângulos para calcular senos.',
        },
      },
    },
    {
      id: 28,
      feito: false,
      acertou: false,
      pergunta:
        'Encontre o valor do cosseno de 285° usando a fórmula de subtração de ângulos.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'dificil',
      respostas: [
        { id: 'a', texto: '0.2588', correta: true },
        { id: 'b', texto: '-0.5', correta: false },
        { id: 'c', texto: '-0.707', correta: false },
        { id: 'd', texto: '0.5', correta: false },
      ],
      explicacao:
        'Use a fórmula de subtração de ângulos para calcular o valor do cosseno de 285°.',
      feedback: {
        mensagens: {
          acerto: 'Parabéns!',
          erro: 'Revise a fórmula de subtração de ângulos para cosseno.',
        },
      },
    },
    {
      id: 29,
      feito: false,
      acertou: false,
      pergunta: 'Calcule a tangente de 345°.',
      imagem: '',
      tipo: 'múltipla escolha',
      nivel_dificuldade: 'dificil',
      respostas: [
        { id: 'a', texto: '-0.2679', correta: true },
        { id: 'b', texto: '0.5', correta: false },
        { id: 'c', texto: '-1', correta: false },
        { id: 'd', texto: '1', correta: false },
      ],
      explicacao:
        'A tangente de 345° é igual a -0.2679, um valor próximo a -tan(15°).',
      feedback: {
        mensagens: {
          acerto: 'Ótimo trabalho!',
          erro: 'Revise os valores de tangente no quarto quadrante.',
        },
      },
    },
  ];
}

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
    {
      id: 6,
      titulo: 'sen30°=1/2 ✅ Tá! Mas por quê?😎 #1',
      videoId: 'wXW-6qZtYQY',
    },
    {
      id: 7,
      titulo:
        'Cosseno de 60 graus é igual a 0,5 ? De onde retiraram esse valor ?',
      videoId: 'kUpxzYf-Iz4',
    },
    {
      id: 8,
      titulo: 'Você sabe por que tangente de 45 graus é igual a 1 ?',
      videoId: '70SIKC2pDcc',
    },
    {
      id: 9,
      titulo: 'APRENDA AGORA como calcular SENO , COSSENO E TANGENTE !',
      videoId: 'R2mYeSBiwW8',
    },
    {
      id: 10,
      titulo: 'FÁCIL e RÁPIDO | ÂNGULOS COMPLEMENTARES e SUPLEMENTARES',
      videoId: 'U_735SRkPvA',
    },
    {
      id: 11,
      titulo: 'FÁCIL e RÁPIDO | ÂNGULOS COMPLEMENTARES e SUPLEMENTARES',
      videoId: 'U_735SRkPvA',
    },
    {
      id: 12,
      titulo: 'FÁCIL e RÁPIDO | ÂNGULOS COMPLEMENTARES e SUPLEMENTARES',
      videoId: 'U_735SRkPvA',
    },
    {
      id: 13,
      titulo: 'FÁCIL e RÁPIDO | ÂNGULOS COMPLEMENTARES e SUPLEMENTARES',
      videoId: 'U_735SRkPvA',
    },
    {
      id: 14,
      titulo: 'FÁCIL e RÁPIDO | ÂNGULOS COMPLEMENTARES e SUPLEMENTARES',
      videoId: 'U_735SRkPvA',
    },
  ];
}
