import { useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import styles from './src/styles/styles';

//funções de autenticação
export const onLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

export const onLogout = async () => {
  await GoogleSignin.signOut();
};

GoogleSignin.configure({
  webClientId:
    '438872457138-miq1lm1c3cue420bg81k8erkqd9o3cij.apps.googleusercontent.com',
});

// Telas

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <AppNavigator />
      ) : (
        <LoginScreen login={setIsAuthenticated} setUser={setUser} />
      )}
    </View>
  );
}
