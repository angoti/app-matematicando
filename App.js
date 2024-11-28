import { View, ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import LoginScreen from './src/screens/LoginScreen';
import { AuthProvider } from './src/context/AuthContext';
import { AuthContext } from './src/context/AuthContext';
import { useContext } from 'react';

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

const Main = () => {
  const { state } = useContext(AuthContext);
  console.log('Main:state:', state);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f0f8ff',
      }}>
      {state.isLoading ? (
        <ActivityIndicator />
      ) : state.user == null ? (
        <LoginScreen />
      ) : (
        <AppNavigator />
      )}
    </View>
  );
};
