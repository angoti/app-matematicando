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

export const checkListaExercicios = async id => {
  const firstRow = await db.getFirstAsync(
    `SELECT COUNT(*) as count FROM exercicios where userID=?;`,
    id,
  );
  if (firstRow.count > 0) {
    console.log('Registros da tabela exercicios: ', firstRow.count);
  } else {
    console.log('Tabela vazia, inserindo dados iniciais...');
    insertInitialData(id);
  }
};

export const insertInitialData = id => {
  console.log('Exercícios iniciais: ', exerciciosInicial);
  exerciciosInicial.forEach(async exercicio => {
    try {
      const result = await db.runAsync(
        `INSERT INTO exercicios (userID, videoAulaID, trancado, feito, acertou, pergunta, imagem, tipo, nivel_dificuldade, respostas, explicacao, feedback) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          id,
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

export const updateFeitoStatus = async (id, feito) => {
  try {
    const result = await db.runAsync(
      'UPDATE exercicios SET feito = ? WHERE id = ?',
      [feito, id],
    );
    console.log('Feito status after update: ', result);
  } catch (error) {
    console.log('Erro ao atualizar status feito: ', error);
  }
};

export const updateAcertouStatus = async (id, acertou) => {
  const result = await db.runAsync(
    'UPDATE exercicios SET acertou = ? WHERE id = ?',
    [acertou, id],
  );
  console.log('Acertou status after update: ', result);
};

export const countExerciciosFeitos = async userID => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE feito == 1 AND userID == ?;',
    userID,
  );
  console.log('BD: Exercícios feitos: ', result.count);
  return result.count;
};

export const countExerciciosCertos = async userID => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE acertou == 1 AND userID == ?;',
    userID,
  );
  console.log('BD: Exercícios certos: ', result.count);
  return result.count;
};

export const countExercicios = async userID => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE userID == ?;',
    userID,
  );
  console.log('BD: qtde exercícios: ', result.count);
  return result.count;
};

export const getExercicios = async userID => {
  const rows = await db.getAllAsync(
    'SELECT * FROM exercicios WHERE userID == ?;',
    userID,
  );
  return rows.map(row => ({
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
