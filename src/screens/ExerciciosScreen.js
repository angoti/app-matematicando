import { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { getExercicios } from '../api/exerciciosApi';
import { CardQuestion } from '../components/CardQuestion';
import { AuthContext } from '../context/AuthContext';

export default function ExerciciosScreen() {
  const { setContadorAcertos, setContadorFeitos } = useContext(AuthContext);
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    // Simulando consulta ao servidor para obter os exercícios
    const fetchedExercicios = getExercicios().map(exercicio => ({
      ...exercicio,
      feito: false,
      acertou: null,
    }));
    setExercicios(fetchedExercicios);
  }, []);

  const handlePress = (resposta, item) => {
    console.log('Resposta:', resposta);
    console.log('Item:', item);
    setContadorFeitos(prev => prev + 1);
    if (resposta.correta === true) {
      setContadorAcertos(prev => prev + 1);
      setExercicios(prevExercicios =>
        prevExercicios.map(exercicio =>
          exercicio.id === item.id
            ? { ...exercicio, acertou: true, feito: true }
            : exercicio,
        ),
      );
      return item.feedback.mensagens.acerto;
    } else {
      setExercicios(prevExercicios =>
        prevExercicios.map(exercicio =>
          exercicio.id === item.id ? { ...exercicio, feito: true } : exercicio,
        ),
      );
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
