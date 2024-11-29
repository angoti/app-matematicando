import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { checkListaExercicios, initializeDatabase } from '../api/bancoDeDados';
import { useEffect } from 'react';

const AppNavigator = () => {
  const bd = async () => {
    await initializeDatabase();
    await checkListaExercicios();
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
