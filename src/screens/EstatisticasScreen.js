import { Text, View, Alert, Pressable, ScrollView } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import styles from '../styles/styles';
import { PizzaChart } from '../components/PizzaChart';
import { PieChart } from 'react-native-gifted-charts';
import {
  countExercicios,
  countExerciciosCertos,
  countExerciciosFeitos,
} from '../api/bancoDeDados';
import { MainContext } from '../context/MainContext';

function EstatisticasScreen() {
  const [contadorAcertos, setContadorAcertos] = useState(0);
  const [contadorFeitos, setContadorFeitos] = useState(0);
  const [qtdeExercicios, setQtdeExercicios] = useState(0);
  const { state } = useContext(MainContext);

  useEffect(() => {
    const updateData = async () => {
      const certos = await countExerciciosCertos(state.user.id);
      setContadorAcertos(certos); // Atualiza o estado de acertos

      const feitos = await countExerciciosFeitos(state.user.id);
      setContadorFeitos(feitos); // Atualiza o estado de feitos

      const exercicios = await countExercicios(state.user.id);
      setQtdeExercicios(exercicios); // Atualiza o estado de exercícios
    };
    updateData();
  }, [state.flag]);

  const data = [
    {
      text: `Acertos`,
      value: contadorAcertos,
      color: '#4caf50',
    },
    {
      text: `Erros`,
      value: contadorFeitos - contadorAcertos,
      color: '#f44336',
    },
    {
      text: `Restante`,
      value: qtdeExercicios - contadorFeitos,
      color: '#6a5acd',
    },
  ];

  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
      <Text style={styles.title}>Estatísticas de Exercícios</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}>
        <Pressable style={styles.statButton}>
          <Text style={styles.statText}>Feitos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#a0522d' }]}>
            {contadorFeitos}
          </Text>
        </Pressable>
        <Pressable style={styles.statButton} onPress={() => Alert.alert('ops')}>
          <Text style={styles.statText}>Corretos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#32cd32' }]}>
            {contadorAcertos}
          </Text>
        </Pressable>
        <Pressable style={styles.statButton} onPress={() => Alert.alert('ops')}>
          <Text style={styles.statText}>Errados</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#f44336' }]}>
            {contadorFeitos - contadorAcertos}
          </Text>
        </Pressable>
        <Pressable style={styles.statButton} onPress={() => Alert.alert('ops')}>
          <Text style={styles.statText}>Restante</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#6a5acd' }]}>
            {qtdeExercicios - contadorFeitos}
          </Text>
        </Pressable>
      </View>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ height: 300 }}>
          <PizzaChart data={data} />
        </View>
        <View style={{ height: 300 }}>
          <PieChart
            data={data}
            radius={150}
            donut
            showValuesAsLabels
            showTextBackground
            textBackgroundColor="#333"
            textBackgroundRadius={22}
            textColor="white"
            textSize={16}
            fontWeight="bold"
            strokeWidth={10}
            strokeColor="#333"
            innerCircleBorderWidth={10}
            innerCircleBorderColor="#333"
            showGradient
          />
        </View>
        <View style={{ height: 300, marginTop: 40 }}>
          <PieChart
            donut
            innerRadius={70}
            data={data}
            centerLabelComponent={() => {
              return (
                <Text style={{ fontSize: 30 }}>Total: {qtdeExercicios}</Text>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default EstatisticasScreen;
