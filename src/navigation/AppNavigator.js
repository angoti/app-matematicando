import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { checkListaExercicios, initializeDatabase } from '../api/bancoDeDados';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MainContext } from '../context/MainContext';

const AppNavigator = () => {
  const { state } = useContext(MainContext);
  console.log('AppNavigator:state.user.id: ', state.user.id);
  const bd = async () => {
    await initializeDatabase();
    await checkListaExercicios(state.user.id);
  };

  useEffect(() => {
    bd();
  }, []);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
