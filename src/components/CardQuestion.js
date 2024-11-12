import { Text, View, Pressable } from "react-native";
import styles from "../styles/styles";

export const CardQuestion = ({ handlePress, item }) => (
	<View style={styles.fullScreenItemContainer}>
		<Text style={styles.highlightedQuestion}>{item.pergunta}</Text>
		<View style={styles.optionsContainer}>
			{item.respostas.map((resposta, index) => (
				<Pressable key={index} onPress={() => handlePress(resposta, item)} style={styles.optionButton}>
					<Text style={styles.optionText}>{resposta.texto}</Text>
				</Pressable>
			))}
		</View>
	</View>
);
