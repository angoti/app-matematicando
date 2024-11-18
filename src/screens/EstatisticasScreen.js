import { Text, View, Button } from 'react-native';
import { useAuth } from '../api/AuthContext';
import styles from '../styles/styles';

const EstatisticasScreen = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas</Text>;
      <Text style={styles.highlightedQuestion}>
        Aqui vamos colocar um gráfico de pizza com a Estatísticas de erros e
        acertos
      </Text>
    </View>
  );
};

export default EstatisticasScreen;
