import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import {
  Persons,
  MorePersons,
  Comics,
  MoreComics,
  Films,
  MoreFilms,
} from '../screens';

const Stack = createStackNavigator();

export const AppRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Persons"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      >
        <Stack.Screen name="Persons" component={Persons} />
        <Stack.Screen name="MorePersons" component={MorePersons} />
        <Stack.Screen name="Comics" component={Comics} />
        <Stack.Screen name="MoreComics" component={MoreComics} />
        <Stack.Screen name="Films" component={Films} />
        <Stack.Screen name="MoreFilms" component={MoreFilms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
