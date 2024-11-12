import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { getExercicios } from './src/api/exerciciosApi'; // Importando a simulação da API
import styles from './src/styles/styles'; // Importando os estilos

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Aplicativo Educativo!</Text>
      <Button
        title="Ir para Exercícios"
        onPress={() => {
          if (navigation.canGoBack() || navigation.getState().routes.find(route => route.name === 'Exercícios')) {
            navigation.navigate('Exercícios');
          } else {
            alert('A tela de Exercícios não está disponível no momento.');
          }
        }}
      />
    </View>
  );
}

function ExerciciosScreen() {
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    // Simulando consulta ao servidor para obter os exercícios
    const fetchedExercicios = getExercicios();
    setExercicios(fetchedExercicios);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Exercícios</Text>
      <FlatList
        data={exercicios}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.titulo}</Text>
            <Text style={styles.question}>{item.pergunta}</Text>
            {item.opcoes.map((opcao, index) => (
              <Text key={index} style={styles.option}>{opcao}</Text>
            ))}
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

function JogosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogos Educativos</Text>
      <Text>Em breve!</Text>
    </View>
  );
}

function EstatisticasScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <Text style={styles.title}>Bem-vindo, Usuário!</Text>
      ) : (
        <View>
          <Text style={styles.title}>Faça Login para ver suas Estatísticas</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Fazer Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Ajuda"
        onPress={() => alert('Link para Ajuda')}
      />
      <DrawerItem
        label="Configurações"
        onPress={() => alert('Link para Configurações')}
      />
    </DrawerContentScrollView>
  );
}

// Configuração do Drawer Navigator
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Exercícios" component={ExerciciosScreen} />
      <Drawer.Screen name="Jogos" component={JogosScreen} />
      <Drawer.Screen name="Estatísticas" component={EstatisticasScreen} />
    </Drawer.Navigator>
  );
}

// Configuração do Tab Navigator
const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Estatísticas" 
        component={EstatisticasScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bar-chart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Componente principal do aplicativo
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

// Simulação da API - src/api/exerciciosApi.js
export function getExercicios() {
  return [
    {
      id: '1',
      titulo: 'Exercício 1: Matemática Básica',
      pergunta: 'Qual é o valor de 2 + 2?',
      opcoes: ['3', '4', '5', '6'],
      resposta: '4'
    },
    {
      id: '2',
      titulo: 'Exercício 2: Física',
      pergunta: 'Qual é a unidade de medida da força no Sistema Internacional?',
      opcoes: ['Newton', 'Joule', 'Watt', 'Pascal'],
      resposta: 'Newton'
    },
    {
      id: '3',
      titulo: 'Exercício 3: Lógica',
      pergunta: 'Se todos os gatos são mamíferos e alguns mamíferos são felinos, então todos os gatos são:',
      opcoes: ['Felinos', 'Reptéis', 'Aves', 'Peixes'],
      resposta: 'Felinos'
    },
  ];
}

// Estilos - src/styles/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 16,
    marginVertical: 10,
  },
  option: {
    fontSize: 14,
    paddingVertical: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
  },
});
