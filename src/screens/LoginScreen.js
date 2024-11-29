import { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { MainContext } from '../context/MainContext';
import { useContext } from 'react';

const LoginScreen = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const { authContext } = useContext(MainContext);
  const { signIn } = authContext;

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator />}
      <Text style={styles.title}>Login</Text>
      <Button
        title="entrar"
        onPress={async () => {
          setIsSigninInProgress(true);
          try {
            await signIn();
          } catch (e) {
            Alert.alert('Erro', e.message);
          } finally {
            setIsSigninInProgress(false);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    marginBottom: 16,
  },
});

export default LoginScreen;
