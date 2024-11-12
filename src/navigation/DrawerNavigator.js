import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import * as Font from "expo-font";
import TabNavigator from "./TabNavigator";
import ExerciciosScreen from "../screens/ExerciciosScreen";
import JogosScreen from "../screens/JogosScreen";
import EstatisticasScreen from "../screens/EstatisticasScreen";
import LogoTitle from "../components/LogoTitle";
import { Text, ActivityIndicator } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		async function loadFonts() {
			await Font.loadAsync({
				"ChalkboardSE-Regular": require("../../assets/fonts/ChalkboardSE-Light.ttf"),
			});
			setFontsLoaded(true);
		}
		loadFonts();
	}, []);

	if (!fontsLoaded) {
		return <ActivityIndicator size={"large"} />;
	}

	function CustomDrawerContent(props) {
		return (
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />
				<DrawerItem label="Ajuda" onPress={() => alert("Link para Ajuda")} />
				<DrawerItem label="Configurações" onPress={() => alert("Link para Configurações")} />
			</DrawerContentScrollView>
		);
	}

	return (
		<Drawer.Navigator
			initialRouteName="Inicio"
			screenOptions={{
				headerStyle: { backgroundColor: "#396934" },
				headerTitleAlign: "center",
				headerTitle: () => <Text style={{ fontSize: 28, fontWeight: "600", color: "white", paddingRight: 16, fontFamily: "ChalkboardSE-Regular" }}>Matematicando</Text>,
				headerRight: () => <LogoTitle />,
			}}>
			<Drawer.Screen name="Inicio" component={TabNavigator} />
			<Drawer.Screen name="Exercícios" component={ExerciciosScreen} />
			<Drawer.Screen name="Jogos" component={JogosScreen} />
			<Drawer.Screen name="Estatísticas" component={EstatisticasScreen} />
		</Drawer.Navigator>
	);
}
