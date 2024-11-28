import * as SQLite from 'expo-sqlite';
import { exerciciosInicial } from './dados';

const db = await SQLite.openDatabaseAsync('exercicios.db');

export const initializeDatabase = async () => {
  await db.withTransactionAsync(async () => {
    db.execAsync(`
      CREATE TABLE IF NOT EXISTS exercicios (
        id INTEGER PRIMARY KEY,
        videoAulaID TEXT,
        trancado TEXT,
        feito TEXT,
        acertou TEXT,
        pergunta TEXT,
        imagem TEXT,
        tipo TEXT,
        nivel_dificuldade TEXT,
        respostas TEXT,
        explicacao TEXT,
        feedback TEXT
      )`);
  });
};

export const checkListaExercicios = () => {
  db.withTransactionAsync(async () => {
    const firstRow = await db.getFirstAsync(
      `SELECT COUNT(*) as count FROM exercicios;`,
    );
    if (firstRow.count > 0) {
      console.log('Registros da tabela exercicios: ', firstRow.count);
    } else {
      console.log('Tabela vazia, inserindo dados iniciais...');
      insertInitialData();
    }
  });
};

export const insertInitialData = () => {
  db.withTransactionAsync(async () => {
    exerciciosInicial.forEach(async exercicio => {
      await db
        .runAsync(
          `INSERT INTO exercicios (id, videoAulaID, trancado, feito, acertou, pergunta, imagem, tipo, nivel_dificuldade, respostas, explicacao, feedback) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
          [
            exercicio.id,
            JSON.stringify(exercicio.videoAulaID),
            exercicio.trancado.toString(),
            exercicio.feito.toString(),
            exercicio.acertou.toString(),
            exercicio.pergunta,
            exercicio.imagem,
            exercicio.tipo,
            exercicio.nivel_dificuldade,
            JSON.stringify(exercicio.respostas),
            exercicio.explicacao,
            JSON.stringify(exercicio.feedback),
          ],
        )
        .then(result => {
          console.log('Exercício inserido com sucesso: ', result);
        })
        .catch(error => {
          console.log('Erro ao inserir exercício: ', error);
        });
    });
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

export const countExerciciosFeitos = () => {
  db.withTransactionAsync(async () => {
    db.getFirstAsync(
      'SELECT COUNT(*) as count FROM exercicios WHERE feito = "true"',
    )
      .then(result => {
        console.log('Exercícios feitos: ', result.count);
        return result.count;
      })
      .catch(error => {
        console.log('Erro ao contar exercícios feitos: ', error);
      });
  });
};

export const countExerciciosCertos = () => {
  db.withTransactionAsync(async () => {
    db.getFirstAsync(
      'SELECT COUNT(*) as count FROM exercicios WHERE acertou = "true"',
    )
      .then(result => {
        console.log('Exercícios certos: ', result.count);
        return result.count;
      })
      .catch(error => {
        console.log('Erro ao contar exercícios certos: ', error);
      });
  });
};

export const getExercicios = () => {
  db.withTransactionAsync(async () => {
    db.getAllAsync('SELECT * FROM exercicios').then(rows => {
      console.log('Exercícios: ', rows._array);
      return rows.map(row => ({
        id: row.id,
        videoAulaID: JSON.parse(row.videoAulaID),
        trancado: row.trancado === 'true',
        feito: row.feito === 'true',
        acertou: row.acertou === 'true',
        pergunta: row.pergunta,
        imagem: row.imagem,
        tipo: row.tipo,
        nivel_dificuldade: row.nivel_dificuldade,
        respostas: JSON.parse(row.respostas),
        explicacao: row.explicacao,
        feedback: JSON.parse(row.feedback),
      }));
    });
  });
};
