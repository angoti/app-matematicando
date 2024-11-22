import { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { getExercicios } from '../api/exerciciosApi';
import { CardQuestion } from '../components/CardQuestion';
import { AuthContext } from '../context/AuthContext';

export default function ExerciciosScreen() {
  const { setContadorAcertos, setContadorFeitos, setQtdeExercicios } = useContext(AuthContext);
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    // Simulando consulta ao servidor para obter os exercícios
    const fetchedExercicios = getExercicios().map(exercicio => ({
      ...exercicio,
      feito: false,
      acertou: null,
    }));
    setExercicios(fetchedExercicios);
    setQtdeExercicios(fetchedExercicios.length);
  }, []);

  const contaExerciciosFeitos = (updatedExercicios) => {
    const contadorFeitos = updatedExercicios.filter(
      exercicio => exercicio.feito,
    ).length;
    setContadorFeitos(contadorFeitos);
  };

  const contaExerciciosAcertados = (updatedExercicios) => {
    const contadorAcertos = updatedExercicios.filter(
      exercicio => exercicio.acertou,
    ).length;
    setContadorAcertos(contadorAcertos);
  };

  const handlePress = (resposta, item) => {
    if (resposta.correta === true) {
      setExercicios(prevExercicios => {
        const updatedExercicios = prevExercicios.map(exercicio =>
          exercicio.id === item.id
            ? { ...exercicio, acertou: true, feito: true }
            : exercicio,
        );
        contaExerciciosAcertados(updatedExercicios);
        contaExerciciosFeitos(updatedExercicios);
        return updatedExercicios;
      });
      return item.feedback.mensagens.acerto;
    } else {
      setExercicios(prevExercicios => {
        const updatedExercicios = prevExercicios.map(exercicio =>
          exercicio.id === item.id ? { ...exercicio, feito: true } : exercicio,
        );
        contaExerciciosFeitos(updatedExercicios);
        return updatedExercicios;
      });
      return item.feedback.mensagens.erro;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Exercícios</Text>
      <FlatList
        data={exercicios}
        renderItem={({ item }) => (
          <CardQuestion handlePress={handlePress} item={item} />
        )}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        horizontal
        snapToAlignment="center" // Alinha o centro do item com o centro da tela
        contentContainerStyle={{ alignItems: 'center' }} // Centraliza os itens dentro do FlatList
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />} // Adiciona um separador entre os itens
      />
    </View>
  );
}
