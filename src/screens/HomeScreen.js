import { ScrollView, Pressable, StyleSheet, Text, View, Dimensions, } from 'react-native';
import globalStyles from '../styles/styles';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/MainContext';
import { countExerciciosNaoFeitosPorDificuldade, countExercicios, countExerciciosCertos, getVideoAulaIDsPorDificuldade, getVideoIdsFromList } from '../api/bancoDeDados';
import { getNivelAprendizado } from '../api/dados';
import DifficultyIcon from '../components/DifficultyIcon';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function HomeScreen({ navigation }) {
  const [nivel, setNivel] = useState({
    nivel: 'calculando ...',
    descricao: 'calculando ...',
  });
  const [videos, setVideos] = useState([]);
  const [restantes, setRestantes] = useState({ facil: 0, medio: 0, dificil: 0 });
  const { state } = useContext(MainContext);
  const width = Dimensions.get('window').width - 30;

  useEffect(() => {
    const updateData = async () => {
      const certos = await countExerciciosCertos(state.user.id);
      const exercicios = await countExercicios(state.user.id);
      const percentual = (certos / exercicios) * 100;
      const nivel = getNivelAprendizado(percentual);
      setNivel(nivel);

      const rest = {
        facil: await countExerciciosNaoFeitosPorDificuldade(state.user.id, 'facil'),
        medio: await countExerciciosNaoFeitosPorDificuldade(state.user.id, 'medio'),
        dificil: await countExerciciosNaoFeitosPorDificuldade(state.user.id, 'dificil'),
      };
      setRestantes(rest);

      const listaDeVideos = restantes.facil === 0 && restantes.medio === 0 ? await getVideoAulaIDsPorDificuldade(state.user.id, 'dificil')
        : restantes.facil === 0 ? await getVideoAulaIDsPorDificuldade(state.user.id, 'medio')
          : await getVideoAulaIDsPorDificuldade(state.user.id, 'facil');
      const listaVideoIds = getVideoIdsFromList(listaDeVideos);
      setVideos(listaVideoIds);
    };
    updateData();
  }, [state.flag]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.textStyle}>
        Nível atual: {nivel.nivel}
        {'\n'}
        {nivel.descricao}
      </Text>

      <Text>
        Quando terminar todos os exercícios de um nível, você poderá fazer os exercícios do nível seguinte.
        {"\n"}
        Clique em qualquer carinha colorida para ver os exercícios disponíveis.
      </Text>

      <View style={styles.escada}>
        <View style={styles.flexRow}>
          <Pressable style={styles.space} onPress={() => (false == true ? navigation.navigate('Exercícios') : '')}>
            <DifficultyIcon level="dificil" trancado={true} />
          </Pressable>
        </View>

        <View style={styles.flexRow}>
          <Pressable style={styles.space} onPress={() => (false == true ? navigation.navigate('Exercícios') : '')}>
            <DifficultyIcon level="medio" trancado={true} />
          </Pressable>
          <View style={styles.escadaNivel3(nivel)} >
            <Text style={styles.escadaText}>
              restam {countExerciciosNaoFeitosPorDificuldade(state.user.id, 'dificil')} exercícios
            </Text>
          </View>
        </View>

        <View style={styles.flexRow}>
          <Pressable style={styles.space} onPress={() => (false == false ? navigation.navigate('Exercícios') : '')}>
            <DifficultyIcon level="facil" trancado={false} />
          </Pressable>
          <View style={styles.escadaNivel2(nivel)}>
            <Text style={styles.escadaText}>
              restam {countExerciciosNaoFeitosPorDificuldade(state.user.id, 'medio')} exercícios
            </Text>
          </View>

        </View>

        <View style={styles.flexRow}>
          <View style={styles.escadaNivel1(nivel)}>
            <Text style={styles.escadaText}>
              restam {countExerciciosNaoFeitosPorDificuldade(state.user.id, 'facil')} exercícios
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.textVideo}>Vídeos recomendados</Text>
      <ScrollView style={styles.videoColorSpace}>
        {videos.length > 0 && videos.map((videoId, index) => (
          <View key={index} style={{ padding: 16 }}>
            <YoutubeIframe
              width={width - 30}
              height={200}
              videoId={videoId}
            />
          </View>
        ))}
      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'black',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 12,
  },
  videoColorSpace: {
    marginTop: 2,
    backgroundColor: '#f1dbb1',
  },
  textVideo: {
    fontSize: 18,
    color: 'black',
    padding: 10,
    borderRadius: 12,
  },
  flexRow: { flexDirection: 'row', justifyContent: 'flex-end' },
  space: { paddingRight: 30, alignSelf: 'flex-end' },
  escada: { marginTop: 30, borderColor: '#ccc', borderWidth: 0.3, width: '100%' },
  escadaNivel1: (nivel) => ({
    width: '100%',
    height: 60,
    backgroundColor: nivel.nivel === 'Iniciante' ? '#00E676' : 'lightgray',
  }),
  escadaNivel2: (nivel) => ({
    alignSelf: 'flex-end',
    width: '66%',
    height: 60,
    backgroundColor: nivel.nivel === 'Intermediário' ? 'yellow' : 'lightgray',
  }),
  escadaNivel3: (nivel) => ({
    width: '33%',
    height: 60,
    backgroundColor: nivel.nivel === 'Avançado' ? 'red' : 'lightgray',
  }),
  escadaText: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
});
