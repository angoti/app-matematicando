# Projeto de Aplicativo Educativo

## Visão Geral do Projeto 📱

Este projeto visa o desenvolvimento de um aplicativo para dispositivos móveis focado em prática educativa, utilizando React Native como principal ferramenta de desenvolvimento. O app oferecerá vídeo-aulas, quizzes, desafios interativos e jogos educativos que serão usados tanto por professores quanto por alunos, promovendo um aprendizado mais dinâmico e engajador.

## Principais Funcionalidades ✨

1. **Vídeo-Aulas**: Acessíveis diretamente no aplicativo, utilizando vídeos hospedados no YouTube.
2. **Exercícios Interativos**:
   - Tipos de exercícios: múltipla escolha, verdadeiro/falso, resolução de problemas.
   - Níveis de dificuldade: Básico, Intermediário, Avançado.
   - Feedback imediato após a resposta.
   - Interface para apresentação dos exercícios utilizando o componente `<FlatList>`.
3. **Jogos Educativos**:
   - Tipos: Quiz, quebra-cabeça, jogos de lógica.
   - Níveis de dificuldade, permitindo ao usuário evoluir.
4. **Evolução dos Acertos**:
   - Gráfico de progresso para acompanhar o desempenho do usuário.
   - Estatísticas de acertos e erros.

## Requisitos Técnicos 🔧

### Tecnologias Utilizadas

- **Frontend**: React Native
- **Backend**: Spring Boot com microserviços (API para armazenar e distribuir os exercícios e dados de usuários)
- **Banco de Dados**: Firebase ou MongoDB para armazenar informações sobre usuários, progresso e exercícios.
- **Armazenamento na Nuvem**: Google Cloud/Heroku para hospedar o backend e os dados do usuário.
- **Armazenamento de Vídeos**: YouTube (utilização da API para listar e reproduzir vídeos no app)

### Arquitetura do Sistema

- **Frontend Mobile**: Desenvolvido em React Native, responsável pela interface e interação com o usuário.
- **API Backend**: Responsável por servir os dados (exercícios, resultados de quizzes, progresso do usuário) ao aplicativo, utilizando microserviços em Spring Boot.
- **Banco de Dados**: Contém as informações dos exercícios, usuários e estatísticas.

### Estrutura de Dados

- Exercícios estão representados em formato JSON. Isso facilita a manipulação dos dados tanto no backend quanto no frontend.

```
{
    "id": 1,
    "pergunta": "Calcule a velocidade média de um carro que percorreu 100 km em 2 horas.",
    "imagem":"src/imagens/questao_137.png",
    "tipo": "múltipla escolha",
    "nivel_dificuldade": "intermediario",
    "respostas": [
        { "id": "a", "texto": "50 km/h", "correta": true },
        { "id": "b", "texto": "100 km/h", "correta": false },
        { "id": "c", "texto": "25 km/h", "correta": false }
    ],
    "explicacao": "Para calcular a velocidade média, divida a distância pelo tempo (100 km / 2 h = 50 km/h)."
    "feedback": {
      "mensagens": {
        "acerto": "Parabéns, você acertou!",
        "erro": "Não foi dessa vez. Revise o conceito de velocidade média."
      }
    }
}
```

- Cada usuário tem um perfil com progresso de atividades armazenado em uma coleção do banco de dados.



## Estrutura do Projeto 🏗️

1. **Módulo de Vídeo-Aulas**:
   - Integração com a API do YouTube para listar as vídeo-aulas.
   - Reprodução dos vídeos dentro do aplicativo.
2. **Módulo de Exercícios**:
   - Implementação de `<FlatList>` para apresentar um feed de exercícios, permitindo ao usuário rolá-los.
   - Controle de avanço para próximos exercícios e possibilidade de revisitar exercícios anteriores.
3. **Módulo de Jogos**:
   - Jogos desenvolvidos usando componentes nativos de React Native.
   - Progressão de dificuldade à medida que o usuário passa para níveis mais difíceis.
4. **Módulo de Estatísticas**:
   - Representação visual do progresso (usando bibliotecas como Victory Native ou Recharts).
   - Análise de desempenho com base nos resultados de cada usuário.
   - Inclusão de login para o usuário acessar suas estatísticas.

## Navegação do Aplicativo 🚀

- **Menu de Navegação**: Implementado com Drawer Navigation, permitindo ao usuário acessar facilmente as diferentes seções do aplicativo, como Vídeo-Aulas, Exercícios, Jogos e Estatísticas.
- **Tabs Menu**: Implementado com Tab Navigation para facilitar o acesso rápido às funcionalidades principais dentro de cada seção.
  - **Home**: Tela inicial do aplicativo, com destaques e recomendações de conteúdo.
  - **Estatísticas**: Visualização do progresso do usuário, incluindo login para acessar as informações.

## Descrição das Telas 📋

1. **Tela Home**:

   - **Componentes**: Destaques e recomendações de vídeo-aulas e exercícios, menu para navegação rápida.
   - **Fluxo de Navegação**: Ao acessar a tela Home, o usuário pode selecionar qualquer destaque para navegar diretamente para vídeo-aulas, exercícios ou jogos. O menu também permite alternar para outras seções do app.

2. **Tela de Vídeo-Aulas**:

   - **Componentes**: Lista de vídeos organizados por categorias, barra de busca para encontrar vídeo-aulas específicas.
   - **Fluxo de Navegação**: O usuário pode selecionar um vídeo para reprodução e assistir diretamente no aplicativo. A barra de navegação permite voltar à lista ou acessar outras seções.

3. **Tela de Exercícios**:

   - **Componentes**: Feed de exercícios apresentado com `<FlatList>`, incluindo título, descrição e botão para iniciar.
   - **Fluxo de Navegação**: O usuário pode rolar o feed, selecionar um exercício para resolver, e após finalizá-lo, visualizar o feedback e passar para o próximo exercício.

4. **Tela de Jogos**:

   - **Componentes**: Lista de jogos disponíveis, com opções para escolher o nível de dificuldade.
   - **Fluxo de Navegação**: O usuário escolhe um jogo e inicia a atividade. Após concluir, os resultados são registrados nas estatísticas.

5. **Tela de Estatísticas**:

   - **Componentes**: Gráficos de progresso, detalhes sobre desempenho e botão para login do usuário.
   - **Fluxo de Navegação**: O usuário precisa fazer login para visualizar suas estatísticas. Após o login, os gráficos e informações detalhadas são apresentados.

6. **Tela de Login** (integrada à Tela de Estatísticas):
   - **Componentes**: Campos de entrada para e-mail e senha, botão de login.
   - **Fluxo de Navegação**: O usuário faz login para acessar suas estatísticas e pode retornar à tela de estatísticas ou navegar para outras partes do aplicativo.

## Fluxo de Navegação do Aplicativo 🔄

- **Acesso Inicial**: O usuário inicia no **Home**, onde pode ver as recomendações.
- **Navegação via Drawer**: Através do menu Drawer, o usuário pode acessar diretamente **Vídeo-Aulas**, **Exercícios**, **Jogos** e **Estatísticas**.
- **Tabs Menu**: O Tabs Menu está disponível para fácil acesso entre **Home** e **Estatísticas**.
- **Login Necessário**: Para acessar as **Estatísticas**, o usuário é redirecionado para a tela de login (se não estiver autenticado).
- **Interação com Conteúdo**: Nas telas de **Vídeo-Aulas**, **Exercícios** e **Jogos**, o usuário pode explorar o conteúdo, consumir e realizar atividades, recebendo feedback imediato e registrando progresso.

- **Fluxos**

  - Tela Home → Vídeo-Aulas, Exercícios, Jogos, Estatísticas.
  - Vídeo-Aulas → Assistir Vídeo → Voltar.
  - Exercícios → Selecionar Exercício → Resolver → Ver Feedback → Avançar.
  - Jogos → Selecionar Jogo → Jogar → Salvar Progresso.
  - Estatísticas → Visualizar Gráficos e Relatórios.

## Etapas do Desenvolvimento 🛠️

1. **Planejamento e Levantamento de Requisitos**: Coleta de informações sobre as necessidades dos usuários (professores e alunos) e definição detalhada do escopo do projeto.
2. **Prototipação e Design**: Criação de wireframes e protótipos para definir a interface e fluxo do aplicativo.
3. **Desenvolvimento do Frontend**:
   - Configuração do ambiente React Native.
   - Implementação das telas principais (Home, Lista de Exercícios, Jogos, Estatísticas).
   - Conexão com o backend para recuperar dados dos exercícios.
4. **Desenvolvimento do Backend**:
   - Criação da API para servir exercícios e vídeos, utilizando Spring Boot com microserviços.
   - Configuração do banco de dados para armazenar as informações dos usuários e exercícios.
5. **Testes**:
   - Testes de unidade para garantir a estabilidade do código.
   - Testes de usabilidade para garantir que o app seja intuitivo para os usuários.
6. **Implantação**:
   - Configuração do backend em um servidor (Google Cloud ou AWS).
   - Publicação do aplicativo nas lojas (Google Play e App Store).
7. **Manutenção e Atualizações**: Correção de bugs e adição de novas funcionalidades conforme feedback dos usuários.

## Cronograma de Desenvolvimento ⏱️

- **1-2 semanas**: Planejamento e prototipação.
- **3-6 semanas**: Desenvolvimento do frontend e backend.
- **7-8 semanas**: Integração, testes e implantação.
- **Contínuo**: Manutenção e suporte.

## Considerações Finais 💡

Este projeto foca em um aprendizado interativo e dinâmico, aproveitando recursos tecnológicos para criar uma experiência educativa mais eficaz e divertida. A interface simples e os jogos educativos manterão o engajamento dos alunos, enquanto as estatísticas permitirão que professores e alunos acompanhem o progresso ao longo do tempo.

Precisamos considerar a segurança dos dados dos usuários, garantindo que informações pessoais e resultados sejam armazenados de forma segura. A experiência do usuário é o foco principal, garantindo uma interface fácil e eficiente para navegação e aprendizado.

## Implementação 🚀

**Criação do projeto React Native**

```
> npx create-expo-app nome-da-aplicação --template blank
```

**Instalação das bibliotecas**

1. **React Navigation**: Para navegação entre as telas.

   ```bash
   npm install @react-navigation/native
   ```

2. **React Navigation Drawer**: Para o menu de navegação lateral (Drawer).

   ```bash
   npm install @react-navigation/drawer
   ```

3. **React Navigation Tabs**: Para as abas de navegação na parte inferior (Tabs).

   ```bash
   npm install @react-navigation/bottom-tabs
   ```

4. **React Native Gesture Handler**: Necessário para o funcionamento do DrawerNavigator e TabNavigator.

   ```bash
   npm install react-native-gesture-handler
   ```

5. **React Native Reanimated**: Também necessário para animações em navegações, como DrawerNavigator.

   ```bash
   npm install react-native-reanimated
   ```

6. **React Native Safe Area Context**: Para lidar com áreas seguras em dispositivos iOS.

   ```bash
   npm install react-native-safe-area-context
   ```

7. **React Native Screens**: Para melhorar a performance de navegação.

   ```bash
   npm install react-native-screens
   ```

8. **Expo Vector Icons**: Para os ícones no TabNavigator.

   ```bash
   npm install @expo/vector-icons
   ```

9. **@react-native-community/masked-view**: Necessário para navegação.

   ```bash
   npm install @react-native-masked-view/masked-view
   ```

**Estrutura de pastas sugerida para o projeto** <small>[Sugestão de leitura](https://www.waldo.com/blog/react-native-project-structure)</small>

```

src/  # Pasta raiz
├── api/  # Consultas ao servidor
│   └── exerciciosApi.js  # Simulação das consultas aos exercícios do servidor
├── components/  # Componentes reutilizáveis do projeto
│   ├── CustomDrawerContent.js  # Conteúdo personalizado do Drawer
│   └── TabsMenu.js  # Menu de navegação por abas
├── screens/  # Telas do aplicativo
│   ├── HomeScreen.js  # Tela inicial do aplicativo
│   ├── ExerciciosScreen.js  # Tela de exercícios
│   ├── JogosScreen.js  # Tela de jogos
│   └── EstatisticasScreen.js  # Tela de estatísticas
├── navigation/  # Configurações de navegação do aplicativo
│   ├── DrawerNavigator.js  # Configuração do Drawer Navigator
│   └── AppNavigator.js  # Componente principal que integra todos os navegadores
├── styles/  # Estilos do aplicativo
│   └── styles.js  # Estilos reutilizáveis
└── App.js  # Componente principal do aplicativo

```

