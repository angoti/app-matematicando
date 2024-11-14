import { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, Alert, Dimensions } from "react-native";
import styles from "../styles/styles";
import { getExercicios } from "../api/exerciciosApi";
import { CardQuestion } from "../components/CardQuestion";

export default function ExerciciosScreen() {
	const [exercicios, setExercicios] = useState([]);

	useEffect(() => {
		// Simulando consulta ao servidor para obter os exercícios
		const fetchedExercicios = getExercicios().map(exercicio => ({
			...exercicio,
			feito: false,
			acertou: null,
		}));
		setExercicios(fetchedExercicios);
	}, []);

	const handlePress = (resposta, item) => {
		const updatedExercicios = exercicios.map(exercicio => {
			if (exercicio.id === item.id) {
				return {
					...exercicio,
					feito: true,
					acertou: resposta.correta,
				};
			}
			return exercicio;
		});
		setExercicios(updatedExercicios);

		if (resposta.correta) {
			Alert.alert("Resposta Correta", item.feedback.mensagens.acerto);
		} else {
			Alert.alert("Resposta Errada", item.feedback.mensagens.erro);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lista de Exercícios</Text>
			<FlatList
				data={exercicios}
				renderItem={({ item }) => <CardQuestion handlePress={handlePress} item={item} />}
				keyExtractor={item => item.id.toString()}
				pagingEnabled
				horizontal
				snapToAlignment="center" // Alinha o centro do item com o centro da tela
				contentContainerStyle={{ alignItems: "center" }} // Centraliza os itens dentro do FlatList
				decelerationRate="fast"
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={{ width: 20 }} />} // Adiciona um separador entre os itens
			/>
		</View>
	);
}
