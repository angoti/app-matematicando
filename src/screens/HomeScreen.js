import { Button, Text, View, Image } from 'react-native';
import styles from '../styles/styles';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Matematicando</Text>
      <Text style={[styles.text, { marginTop: 20 }]}>
        Aqui vamos colocar destaques e recomendações de vídeo-aulas e exercícios
        e menu com botões para navegação rápida.
      </Text>
      <Button
        title="Ir para Exercícios"
        onPress={() => {
          navigation.navigate('Exercícios');
        }}
      />
      <Image
        source={{ uri: user.data.user.photo }}
        style={{
          width: 200,
          height: 200,
          marginTop: 70,
          alignSelf: 'center',
          borderRadius: 150,
          marginBottom: 70,
        }}
      />
      <Button
        title="Sair"
        onPress={async () => {
          try {
            await logout();
          } catch (e) {
            // Handle error
          }
        }}
      />
    </View>
  );
}
