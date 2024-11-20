import { createContext, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configuração do Google Signin
GoogleSignin.configure({
  webClientId:
    '438872457138-miq1lm1c3cue420bg81k8erkqd9o3cij.apps.googleusercontent.com',
});

// Funções de autenticação
const onLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

const onLogout = async () => {
  await GoogleSignin.signOut();
};

// Contexto de autenticação
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [contadorAcertos, setContadorAcertos] = useState(0);
  const [contadorFeitos, setContadorFeitos] = useState(0);

  const login = async () => {
    const user = await onLogin();
    console.log(user);
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await onLogout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        contadorAcertos,
        setContadorAcertos,
        contadorFeitos,
        setContadorFeitos,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
