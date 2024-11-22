import { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import styles from '../styles/styles';
import { getExercicios } from '../api/exerciciosApi';
import { CardQuestion } from '../components/CardQuestion';
import { AuthContext } from '../context/AuthContext';

export default function ExerciciosScreen() {
  const {
    setContadorAcertos,
    setContadorFeitos,
    setQtdeExercicios,
    qtdeExercicios,
    contadorAcertos,
    contadorFeitos,
  } = useContext(AuthContext);
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

  const contaExerciciosFeitos = updatedExercicios => {
    const contadorFeitos = updatedExercicios.filter(
      exercicio => exercicio.feito,
    ).length;
    setContadorFeitos(contadorFeitos);
  };

  const contaExerciciosAcertados = updatedExercicios => {
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
          exercicio.id === item.id
            ? { ...exercicio, acertou: false, feito: true }
            : exercicio,
        );
        contaExerciciosFeitos(updatedExercicios);
        return updatedExercicios;
      });
      return item.feedback.mensagens.erro;
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable style={styles.statButton}>
          <Text style={styles.statText}>Acertos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#32cd32' }]}>
            {contadorAcertos}
          </Text>
        </Pressable>
        <Pressable style={styles.statButton} onPress={() => Alert.alert('ops')}>
          <Text style={styles.statText}>Feitos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#a0522d' }]}>
            {contadorFeitos}
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={exercicios}
        renderItem={({ item, index }) => (
          <CardQuestion
            handlePress={handlePress}
            item={item}
            index={index}
            total={qtdeExercicios}
          />
        )}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        horizontal
        snapToAlignment="center" // Alinha o centro do item com o centro da tela
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }} // Centraliza os itens dentro do FlatList
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 40 }} />} // Adiciona um separador entre os itens
      />
    </View>
  );
}
