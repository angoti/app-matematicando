import { Button, Text, View } from "react-native";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bem-vindo ao Matematicando</Text>
			<Text style={[styles.text, { marginTop: 20 }]}>Aqui vamos colocar destaques e recomendações de vídeo-aulas e exercícios e menu com botões para navegação rápida.</Text>
			<Button
				title="Ir para Exercícios"
				onPress={() => {
					navigation.navigate("Exercícios");
				}}
			/>
		</View>
	);
}
