import { View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import LoginScreen from './src/screens/LoginScreen';
import { AuthProvider, useAuth } from './src/api/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

const Main = () => {
  const { isAuthenticated } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f0f8ff',
      }}>
      {isAuthenticated ? <AppNavigator /> : <LoginScreen />}
    </View>
  );
};
