import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import * as Font from 'expo-font';

import { schema } from './src/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textExample: {
    fontFamily: 'Axiforma_Regular',
    fontSize: 18,
  },
});

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
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.textExample}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
