import * as SQLite from 'expo-sqlite';
import { getExerciciosIniciais, getVideoAulas } from './dados';

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
  console.log('-- 2 --');
  const firstRow = await db.getFirstAsync(`SELECT COUNT(*) as count FROM exercicios where userID=?;`, id);
  console.log('-- 3 -- ', firstRow);
  if (firstRow.count > 0) {
    console.log('Registros da tabela exercicios: ', firstRow.count);
    return true;
  } else {
    console.log('Tabela vazia, inserindo dados iniciais...');
    return insertInitialData(id);
  }
};

export const insertInitialData = async id => {
  console.log('-- 4 --');
  const exerciciosIniciais = await getExerciciosIniciais();
  console.log('Exercícios iniciais: ', exerciciosIniciais);
  exerciciosIniciais.forEach(async exercicio => {
    try {
      await db.runAsync(
        `INSERT INTO exercicios (userID, videoAulaID, trancado, feito, acertou, pergunta, imagem, tipo, nivel_dificuldade, respostas, explicacao, feedback) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
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
  return true;
};

export const updateFeitoStatus = async (id, feito) => {
  try {
    await db.runAsync(
      'UPDATE exercicios SET feito = ? WHERE id = ?',
      [feito, id],
    );
    // console.log('Feito status after update: ', result);
  } catch (error) {
    // console.log('Erro ao atualizar status feito: ', error);
  }
};

export const updateAcertouStatus = async (id, acertou) => {
  await db.runAsync(
    'UPDATE exercicios SET acertou = ? WHERE id = ?',
    [acertou, id],
  );
  // console.log('Acertou status after update: ', result);
};

export const countExerciciosFeitos = async userID => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE feito == 1 AND userID == ?;',
    userID,
  );
  // console.log('BD: Exercícios feitos: ', result.count);
  return result.count;
};

export const countExerciciosCertos = async userID => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE acertou == 1 AND userID == ?;',
    userID,
  );
  // console.log('BD: Exercícios certos: ', result.count);
  return result.count;
};

export const countExercicios = async userID => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE userID == ?;',
    userID,
  );
  // console.log('BD: qtde exercícios: ', result.count);
  return result.count;
};

export const countExerciciosNaoFeitosPorDificuldade = async (userID, nivelDificuldade) => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE feito == 0 AND userID == ? AND nivel_dificuldade == ?;',
    [userID, nivelDificuldade],
  );
  // console.log('BD: Exercícios não feitos de dificuldade', nivelDificuldade, ':', result.count);
  return result.count;
};

export const checkAllExerciciosFeitosPorDificuldade = async (userID, nivelDificuldade) => {
  const result = await db.getFirstAsync(
    'SELECT COUNT(*) as count FROM exercicios WHERE userID == ? AND nivel_dificuldade == ? AND feito == 0;',
    [userID, nivelDificuldade],
  );
  // console.log('BD: Todos os exercícios de dificuldade', nivelDificuldade, 'foram feitos:', result.count === 0);
  return result.count === 0;
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

export const getVideoAulaIDsPorDificuldade = async (userID, nivelDificuldade) => {
  const rows = await db.getAllAsync(
    'SELECT videoAulaID FROM exercicios WHERE userID == ? AND nivel_dificuldade == ?;',
    [userID, nivelDificuldade],
  );
  const uniqueIntegers = getUniqueIntegers(rows.map(row => JSON.parse(row.videoAulaID)));
  return uniqueIntegers;
};


export function getVideoIdsFromList(ids) {
  const videoAulas = getVideoAulas();
  return ids.map(id => {
    const videoAula = videoAulas.find(video => video.id === id);
    return videoAula ? videoAula.videoId : null;
  }).filter(videoId => videoId !== null);
}


export const getUniqueIntegers = (listOfLists) => {
  const uniqueIntegers = new Set();
  listOfLists.forEach(subList => {
    subList.forEach(num => {
      uniqueIntegers.add(num);
    });
  });
  return Array.from(uniqueIntegers);
};

export const deleteDatabase = async () => {
  await db.withTransactionAsync(async () => {
    try {
      await db.execAsync('DROP TABLE IF EXISTS exercicios');
      // console.log('Tabela exercicios deletada com sucesso');
    } catch (error) {
      // console.log('Erro ao deletar tabela exercicios: ', error);
    }
  });
};
