import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { Persons } from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Persons" component={Persons} />
    </Drawer.Navigator>
  );
};
