import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { checkListaExercicios, initializeDatabase } from '../api/bancoDeDados';

const AppNavigator = () => {
  initializeDatabase();
  checkListaExercicios();
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
