import { Alert, Text, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for icons
import styles from '../styles/styles';

const getDifficultyColor = level => {
  switch (level) {
    case 'facil':
      return '#4CAF50'; // Green
    case 'medio':
      return '#FFEB3B'; // Yellow
    case 'dificil':
      return '#F44336'; // Red
    default:
      return '#000'; // Default black
  }
};

export const CardQuestion = ({ handlePress, item, index, total }) => {
  return (
    <View
      style={[
        styles.fullScreenItemContainer,
        { backgroundColor: item.feito ? '#bbb' : '#fff' },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View style={styles.progressBarContainer}>
          <FontAwesome
            name="tasks"
            size={16}
            color={item.feito && item.acertou == false ? 'red' : 'black'}
          />
          <Text style={styles.progressText}>
            {index + 1} | {total}
          </Text>
        </View>
        <View
          style={[
            styles.difficultyCircle,
            { backgroundColor: getDifficultyColor(item.nivel_dificuldade) },
          ]}>
          <Text style={styles.difficultyText}>{item.nivel_dificuldade}</Text>
        </View>
      </View>
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
