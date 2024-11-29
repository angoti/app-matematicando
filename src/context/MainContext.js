import { createContext, useReducer, useEffect, useMemo } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

// Configuração do Google Signin
GoogleSignin.configure({
  webClientId:
    '438872457138-miq1lm1c3cue420bg81k8erkqd9o3cij.apps.googleusercontent.com',
});

// Contexto de autenticação
export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      console.log('MainProvider:useReducer:prevState:', prevState);
      console.log('MainProvider:useReducer:action:', action);
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            user: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
        case 'FLAG':
          return {
            ...prevState,
            flag: !prevState.flag,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      user: null,
      flag: false,
    },
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let user;
      try {
        const userString = await SecureStore.getItemAsync('user');
        user = userString ? JSON.parse(userString) : null;
        console.log('MainProvider:useEffect:user:', user);
      } catch (e) {
        Alert.alert(e);
      }
      dispatch({ type: 'RESTORE_TOKEN', token: user });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        const returnedObject = await GoogleSignin.signIn();
        const user = returnedObject.data.user;
        await SecureStore.setItemAsync('user', JSON.stringify(user));
        dispatch({ type: 'SIGN_IN', token: user });
      },
      signOut: async () => {
        await GoogleSignin.signOut();
        await SecureStore.deleteItemAsync('user');
        dispatch({ type: 'SIGN_OUT' });
      },
      flag: () => dispatch({ type: 'FLAG' }),
    }),
    [],
  );

  return (
    <MainContext.Provider value={{ state, authContext }}>
      {children}
    </MainContext.Provider>
  );
};
