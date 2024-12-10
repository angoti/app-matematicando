import { View, FlatList } from 'react-native';
import styles from '../styles/styles';
import { CardQuestion } from '../components/CardQuestion';
import {
  countExerciciosCertos,
  countExerciciosFeitos,
  getExercicios,
  updateAcertouStatus,
  updateFeitoStatus,
} from '../api/bancoDeDados';
import { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context/MainContext';

export default function ExerciciosScreen() {
  const [exercicios, setExercicios] = useState([]);
  // const [exerciciosCertos, setExerciciosCertos] = useState(0);
  // const [exerciciosFeitos, setExerciciosFeitos] = useState(0);
  const { state, authContext, nivelAtivado, setNivelAtivado } = useContext(MainContext);
  const { flag } = authContext;

  useEffect(() => {
    const fetchData = async () => {
      const exercicios = await getExercicios(state.user.id);
      let filtroExercicios = [];
      if (nivelAtivado == 'dificil') {
        filtroExercicios = exercicios;
      }
      else if (nivelAtivado === 'medio') {
        filtroExercicios = exercicios.filter(exercicio => (exercicio.nivel_dificuldade === nivelAtivado || exercicio.nivel_dificuldade === 'facil'));
      } else filtroExercicios = exercicios.filter(exercicio => exercicio.nivel_dificuldade === nivelAtivado);

      const rest = filtroExercicios.filter(ex => ex.acertou == false).length;
      if (rest > 0) {
        // console.log('ExercicioScreen:useEffect:Exercícios: ', exercicios);
        setExercicios(filtroExercicios);
      } else {
        if (nivelAtivado === 'facil') setNivelAtivado('medio');
        else if (nivelAtivado === 'medio') setNivelAtivado('dificil');
        flag();
      }
      // const certos = await countExerciciosCertos(state.user.id);
      // console.log('ExercicioScreen:useEffect:Certos: ', certos);
      // setExerciciosCertos(certos);
      // const feitos = await countExerciciosFeitos(state.user.id);
      // console.log('ExercicioScreen:useEffect:Feitos: ', feitos);
      // setExerciciosFeitos(feitos);
    };
    fetchData();
  }, [state.flag]);

  const corrigeExercicio = (resposta, item) => {
    if (resposta.correta === true) {
      updateAcertouStatus(item.id, true);
      updateFeitoStatus(item.id, true);
      flag();
      return item.feedback.mensagens.acerto;
    } else {
      updateFeitoStatus(item.id, true);
      flag();
      return item.feedback.mensagens.erro;
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={{ flexDirection: 'row' }}>
        <Pressable
          style={styles.statButton}
          onPress={() =>
            Alert.alert(
              'Exercícios Feitos com Sucesso',
              exercicios
                .filter(ex => ex.acertou == true)
                .map(ex => ex.id)
                .join(', '),
            )
          }>
          <Text style={styles.statText}>Acertos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#32cd32' }]}>
            {exerciciosCertos}
          </Text>
        </Pressable>
        <Pressable
          style={styles.statButton}
          onPress={() =>
            Alert.alert(
              'Exercícios Feitos',
              exercicios
                .filter(ex => ex.feito == true)
                .map(ex => ex.id)
                .join(', '),
            )
          }>
          <Text style={styles.statText}>Feitos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#a0522d' }]}>
            {exerciciosFeitos}
          </Text>
        </Pressable>
      </View> */}
      <FlatList
        data={exercicios}
        renderItem={({ item, index }) => (
          <CardQuestion
            handlePress={corrigeExercicio}
            item={item}
            index={index}
            total={exercicios.length}
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
