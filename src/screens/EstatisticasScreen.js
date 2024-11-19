import { Text, View, Dimensions } from 'react-native';
import styles from '../styles/styles';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { PizzaChart } from '../components/PizzaChart';

function EstatisticasScreen() {
  const { contadorAcertos, contadorFeitos } = useContext(AuthContext);
  const data = [
    {
      label: `Acertos: ${contadorAcertos}`,
      value: contadorAcertos,
      color: '#4caf50',
    },
    {
      label: `Erros: ${contadorFeitos - contadorAcertos}`,
      value: contadorFeitos - contadorAcertos,
      color: '#f44336',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas de Exercícios</Text>
      <View style={{ height: 300 }}>
        <PizzaChart data={data} />
      </View>
      <Text style={styles.statText}>
        Total de Exercícios Feitos: {contadorFeitos}
      </Text>
      <Text style={styles.statText}>Total de Acertos: {contadorAcertos}</Text>
    </View>
  );
}

export default EstatisticasScreen;
