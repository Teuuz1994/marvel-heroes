import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Persons, MorePersons, Comics } from '../screens';

const Stack = createStackNavigator();

export const AppRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Persons"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      >
        <Stack.Screen name="Persons" component={Persons} />
        <Stack.Screen name="MorePersons" component={MorePersons} />
        <Stack.Screen name="Comics" component={Comics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
