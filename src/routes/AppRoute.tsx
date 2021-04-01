import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Persons } from '../screens';

const Stack = createStackNavigator();

export const AppRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Persons"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Persons" component={Persons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
