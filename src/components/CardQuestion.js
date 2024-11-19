import { Alert, Text, View, Pressable } from 'react-native';
import styles from '../styles/styles';

export const CardQuestion = ({ handlePress, item }) => {
  return (
    <View style={styles.fullScreenItemContainer}>
      <Text style={styles.highlightedQuestion}>{item.pergunta}</Text>
      <View style={styles.optionsContainer}>
        {item.respostas.map((resposta, index) => (
          <Pressable
            key={index}
            onPress={() => Alert.alert(handlePress(resposta, item))}
            style={styles.optionButton}>
            <Text style={styles.optionText}>{resposta.texto}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
