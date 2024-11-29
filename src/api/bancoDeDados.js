import * as SQLite from 'expo-sqlite';
import { exerciciosInicial } from './dados';

const db = SQLite.openDatabaseSync('exercicios.db');

export const initializeDatabase = async () => {
  await db.withTransactionAsync(async () => {
    db.execAsync(`
      CREATE TABLE IF NOT EXISTS exercicios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userID TEXT,
        videoAulaID TEXT,
        trancado INTEGER,
        feito INTEGER,
        acertou INTEGER,
        pergunta TEXT,
        imagem TEXT,
        tipo TEXT,
        nivel_dificuldade TEXT,
        respostas TEXT,
        explicacao TEXT,
        feedback TEXT
      )`);
  });
  console.log('Banco de dados inicializado');
};

export const checkListaExercicios = async () => {
  const firstRow = await db.getFirstAsync(
    `SELECT COUNT(*) as count FROM exercicios;`,
  );
  if (firstRow.count > 0) {
    console.log('Registros da tabela exercicios: ', firstRow.count);
  } else {
    console.log('Tabela vazia, inserindo dados iniciais...');
    insertInitialData();
  }
};

export const insertInitialData = () => {
  console.log('Exercícios iniciais: ', exerciciosInicial);
  exerciciosInicial.forEach(async exercicio => {
    try {
      const result = await db.runAsync(
        `INSERT INTO exercicios (videoAulaID, trancado, feito, acertou, pergunta, imagem, tipo, nivel_dificuldade, respostas, explicacao, feedback) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          JSON.stringify(exercicio.videoAulaID),
          exercicio.trancado ? 1 : 0,
          exercicio.feito ? 1 : 0,
          exercicio.acertou ? 1 : 0,
          exercicio.pergunta,
          exercicio.imagem,
          exercicio.tipo,
          exercicio.nivel_dificuldade,
          JSON.stringify(exercicio.respostas),
          exercicio.explicacao,
          JSON.stringify(exercicio.feedback),
        ],
      );
      console.log('Exercício inserido com sucesso: ', exercicio.id);
    } catch (error) {
      console.log('Erro ao inserir dados iniciais: ', error);
    }
  });
};

export const updateFeitoStatus = (id, feito) => {
  db.withTransactionAsync(async () => {
    db.runAsync('UPDATE exercicios SET feito = ? WHERE id = ?', [feito, id])
      .then(result => {
        console.log('Feito status after update: ', result);
      })
      .catch(error => {
        console.log('Erro ao atualizar status de feito: ', error);
      });
  });
};

export const updateAcertouStatus = (id, acertou) => {
  db.withTransactionAsync(async () => {
    db.runAsync('UPDATE exercicios SET acertou = ? WHERE id = ?', [acertou, id])
      .then(result => {
        console.log('Acertou status after update: ', result);
      })
      .catch(error => {
        console.log('Erro ao atualizar status de acertou: ', error);
      });
  });
};

export const countExerciciosFeitos = async () => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE feito = "true"',
  );
  console.log('BD: Exercícios feitos: ', result.count);
  return result.count;
};

export const countExerciciosCertos = async () => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE acertou = "true"',
  );
  console.log('BD: Exercícios certos: ', result.count);
  return result.count;
};

export const countExercicios = async () => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios;',
  );
  console.log('BD: qtde exercícios: ', result.count);
  return result.count;
};

export const getExercicios = async () => {
  const rows = await db.getAllAsync('SELECT * FROM exercicios');
  console.log('Exercícios: ', rows);
  const exercicios = rows.map(row => ({
    id: row.id,
    videoAulaID: JSON.parse(row.videoAulaID),
    trancado: row.trancado === 1,
    feito: row.feito === 1,
    acertou: row.acertou === 1,
    pergunta: row.pergunta,
    imagem: row.imagem,
    tipo: row.tipo,
    nivel_dificuldade: row.nivel_dificuldade,
    respostas: JSON.parse(row.respostas),
    explicacao: row.explicacao,
    feedback: JSON.parse(row.feedback),
  }));
  console.log('Exercícios formatados: ', exercicios);
  return exercicios;
};

export const deleteDatabase = async () => {
  await db.withTransactionAsync(async () => {
    try {
      await db.execAsync('DROP TABLE IF EXISTS exercicios');
      console.log('Tabela exercicios deletada com sucesso');
    } catch (error) {
      console.log('Erro ao deletar tabela exercicios: ', error);
    }
  });
};
