import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/styles";

export default function EstatisticasScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		if (email === "user@example.com" && password === "password") {
			setLoggedIn(true);
		} else {
			alert("Credenciais inválidas. Tente novamente.");
		}
	};

	return (
		<View style={styles.container}>
			{loggedIn ? (
				<Text style={styles.title}>Bem-vindo, Usuário!</Text>
			) : (
				<View>
					<Text style={styles.title}>Faça Login para ver suas Estatísticas</Text>
					<TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
					<TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
					<Button title="Fazer Login" onPress={handleLogin} />
				</View>
			)}
		</View>
	);
}
