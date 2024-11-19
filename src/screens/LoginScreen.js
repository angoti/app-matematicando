import { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const LoginScreen = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator />}
      <Text style={styles.title}>Login</Text>
      <Button
        title="entrar"
        onPress={async () => {
          setIsSigninInProgress(true);
          try {
            await login();
          } catch (e) {
            // Handle error
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
