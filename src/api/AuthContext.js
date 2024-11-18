import { createContext, useContext, useState } from 'react';
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
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async () => {
    const user = await onLogin();
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await onLogout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
