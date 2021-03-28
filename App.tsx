import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import * as Font from 'expo-font';
import FlashMessages from 'react-native-flash-message';

import { SignIn } from './src/screens';
import { AuthProvider } from './src/hooks/Fakeauth';

import { schema } from './src/styles/theme';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Axiforma_Regular: require('./src/assets/fonts/Axiforma/Axiforma_Regular.otf'),
        Axiforma_Bold: require('./src/assets/fonts/Axiforma/Axiforma_Bold.otf'),
        Axiforma_Light: require('./src/assets/fonts/Axiforma/Axiforma_Light.otf'),
        Marvel_Regular: require('./src/assets/fonts/Marvel/Marvel_Regular.ttf'),
      });

      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="green" />;
  }

  return (
    <ThemeProvider theme={schema}>
      <StatusBar style="light" />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <FlashMessages position="top" />
    </ThemeProvider>
  );
};

export default App;
