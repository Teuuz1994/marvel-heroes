import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react';

import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';

import { User } from '../models/User';
import { ImageUserAvatar } from '../assets/images';

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
      avatar: Image.resolveAssetSource(ImageUserAvatar).uri,
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
