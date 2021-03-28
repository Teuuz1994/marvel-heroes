import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';

import { User } from '../models/User';

interface UserCredentials {
  email: string;
  password: string;
  saveMyUserState: boolean;
}

interface AuthContext {
  signIn(credentials: UserCredentials): Promise<void>;
  signOut(): Promise<void>;
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const fakeUser = [
    {
      email: 'teste@teste.com',
      password: '123123',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
  ];

  const getUser = (
    email: string,
    password: string,
  ): Promise<User | undefined> => {
    return new Promise(resolve => {
      const findUser = fakeUser.find(
        users => users.email === email && users.password === password,
      );

      if (!findUser) {
        return resolve(undefined);
      }

      return resolve(findUser);
    });
  };

  const signIn = async ({
    email,
    password,
    saveMyUserState,
  }: UserCredentials) => {
    const findUser = await getUser(email, password);
    console.log('user', findUser);

    if (!findUser) {
      showMessage({
        type: 'danger',
        message: 'Usuário não cadastrado',
        autoHide: true,
        duration: 5000,
        textStyle: {
          color: '#fff',
          fontFamily: 'Axiforma_Regular',
          fontSize: 18,
        },
        style: { justifyContent: 'center', alignItems: 'center' },
      });
      return;
    }

    if (saveMyUserState) {
      await AsyncStorage.setItem('@Mavel:user', JSON.stringify(findUser));
    }

    setUser(findUser);

    showMessage({
      message: 'Login efetuado com sucesso',
      type: 'success',
      autoHide: true,
      duration: 5000,
      textStyle: {
        color: '#fff',
        fontFamily: 'Axiforma_Regular',
        fontSize: 18,
      },
      style: { justifyContent: 'center', alignItems: 'center' },
    });
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@Mavel:user');
    setUser(null);
  };

  useEffect(() => {
    const loadStorageUser = async () => {
      const storageUser = JSON.parse(
        String(await AsyncStorage.getItem('@Mavel:user')),
      );

      if (storageUser) {
        setUser(storageUser);
      }
    };

    loadStorageUser();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { ...context } = useContext(AuthContext);

  return context;
};
