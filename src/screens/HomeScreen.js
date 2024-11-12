import { Button, Text, View } from "react-native";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bem-vindo ao Matematicando</Text>
			<Text style={styles.text}>Aqui vamos colocar destaques e recomendações de vídeo-aulas e exercícios e menu com botões para navegação rápida.</Text>
			<Text style={styles.text}>
				Fluxo de Navegação: Ao acessar a tela Home, o usuário pode selecionar qualquer destaque para navegar diretamente para vídeo-aulas, exercícios ou jogos. O menu gaveta também permite alternar
				para outras seções do app.
			</Text>
			<Button
				title="Ir para Exercícios"
				onPress={() => {
					navigation.navigate("Exercícios");
				}}
			/>
		</View>
	);
}
