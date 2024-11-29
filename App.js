import { View, ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import LoginScreen from './src/screens/LoginScreen';
import { MainProvider, MainContext } from './src/context/MainContext';
import { useContext } from 'react';

export default function App() {
  return (
    <MainProvider>
      <Main />
    </MainProvider>
  );
}

const Main = () => {
  const { state } = useContext(MainContext);
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
