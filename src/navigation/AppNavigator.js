import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { checkListaExercicios, initializeDatabase } from '../api/bancoDeDados';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { ActivityIndicator, Alert } from 'react-native';

const AppNavigator = () => {
  const { state } = useContext(MainContext);
  const [bdIniciado, setBdIniciado] = useState(false);

  const bd = () => {
    console.log('-- 1 --');
    initializeDatabase()
      .then(() => checkListaExercicios(state.user.id)
        .then((ret) => {
          console.log('-- 7 --', ret);
          if (ret) setBdIniciado(true);
          else Alert.alert('Erro ao iniciar banco de dados');
        }));
  };

  useEffect(() => {
    bd();
  }, []);

  return (
    <NavigationContainer>
      {bdIniciado ? (<DrawerNavigator />) : (<ActivityIndicator size="large" color="#0000ff" />)}
    </NavigationContainer>
  );
};

export default AppNavigator;
